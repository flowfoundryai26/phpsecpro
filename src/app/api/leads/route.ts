import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations/leads";
import { websitePlatformOptions, serviceRequiredOptions } from "@/data/form-options";
import { checkRateLimit } from "@/lib/rate-limit";

const APPS_SCRIPT_TIMEOUT_MS = 15000;

function platformLabel(value: string | undefined) {
  if (!value) return "";
  return websitePlatformOptions.find((option) => option.value === value)?.label ?? value;
}

function serviceLabel(value: string) {
  return serviceRequiredOptions.find((option) => option.value === value)?.label ?? value;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const { allowed, retryAfterMs } = checkRateLimit(`leads:${ip}`);
  if (!allowed) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
      },
      { status: 429, headers: { "Retry-After": String(Math.ceil(retryAfterMs / 1000)) } }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: a filled trap field means a bot. Report success without
  // forwarding anything to Apps Script, and without logging the content.
  if (data.company_website) {
    return NextResponse.json({ success: true });
  }

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Lead submission is not configured yet. Set GOOGLE_APPS_SCRIPT_URL in your environment (see .env.example), or contact us directly on WhatsApp in the meantime.",
      },
      { status: 503 }
    );
  }

  // Build the exact URL-encoded payload the existing Apps Script expects
  // (it reads e.parameter, not JSON). Parameter names and the literal
  // consent value "yes" are fixed by that script's contract — do not change
  // them without updating the script itself.
  const payload = new URLSearchParams();
  payload.set("fullName", data.fullName);
  payload.set("email", data.email);
  payload.set("phone", data.phone ?? "");
  payload.set("website", data.website ?? "");
  payload.set("platform", platformLabel(data.platform));
  payload.set("service", serviceLabel(data.service));
  payload.set("message", data.message ?? "");
  payload.set("consent", "yes");
  payload.set("company_website", "");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), APPS_SCRIPT_TIMEOUT_MS);

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload.toString(),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });

    const html = await response.text();

    const accepted = response.ok && html.includes("Request submitted");
    const explicitlyRejected =
      html.includes("Submission not accepted") || html.includes("Submission unavailable");

    if (accepted) {
      return NextResponse.json({ success: true });
    }

    console.error(
      `Apps Script lead submission not confirmed. status=${response.status} rejected=${explicitlyRejected}`
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your request. Please try again or contact us on WhatsApp.",
      },
      { status: 502 }
    );
  } catch (err) {
    const isAbort = err instanceof Error && err.name === "AbortError";
    console.error(`Apps Script request failed: ${isAbort ? "timeout" : "network error"}`);

    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your request. Please try again or contact us on WhatsApp.",
      },
      { status: isAbort ? 504 : 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
