"use client";

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleNotch, CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations/leads";
import { websitePlatformOptions, serviceRequiredOptions } from "@/data/form-options";
import { Input, Textarea, Select, Label, FieldError, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useServicePrefillListener } from "@/lib/prefill";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import type { ServiceRequested } from "@/types";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      website: "",
      platform: "",
      service: "security-assessment",
      message: "",
      consent: false as unknown as true,
      company_website: "",
    },
  });

  const handlePrefill = useCallback(
    (service: ServiceRequested) => {
      setValue("service", service);
    },
    [setValue]
  );
  useServicePrefillListener(handlePrefill);

  async function onSubmit(values: LeadFormValues) {
    // Guard against rapid duplicate clicks submitting twice.
    if (submitState.status === "submitting") return;
    setSubmitState({ status: "submitting" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = await response.json();

      if (!response.ok || !payload.success) {
        setSubmitState({
          status: "error",
          message:
            payload.message ??
            "We couldn't submit your request. Please try again or contact us on WhatsApp.",
        });
        return;
      }

      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message: "We couldn't submit your request. Please try again or contact us on WhatsApp.",
      });
    }
  }

  if (submitState.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-10 text-center">
        <CheckCircle className="h-12 w-12 text-[var(--color-accent)]" weight="fill" />
        <h3 className="text-xl font-bold text-[var(--color-text)]">
          Thank you! Your security assessment request has been received. Our
          team will contact you soon.
        </h3>
        <a href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">Chat on WhatsApp</Button>
        </a>
        <button
          type="button"
          onClick={() => setSubmitState({ status: "idle" })}
          className="text-sm font-medium text-[var(--color-accent)]"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 md:p-10"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company_website")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FieldGroup>
          <Label htmlFor="fullName" required>
            Full Name
          </Label>
          <Input id="fullName" autoComplete="name" {...register("fullName")} />
          <FieldError>{errors.fullName?.message}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email" required>
            Business Email
          </Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          <FieldError>{errors.email?.message}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
          <FieldError>{errors.phone?.message}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" autoComplete="organization" {...register("companyName")} />
          <FieldError>{errors.companyName?.message}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="website">Website URL</Label>
          <Input id="website" type="url" placeholder="https://example.com" {...register("website")} />
          <FieldError>{errors.website?.message}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="platform">Website Platform</Label>
          <Select id="platform" {...register("platform")}>
            <option value="">Select a platform (optional)</option>
            {websitePlatformOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <FieldError>{errors.platform?.message}</FieldError>
        </FieldGroup>

        <FieldGroup className="sm:col-span-2">
          <Label htmlFor="service" required>
            Service Required
          </Label>
          <Select id="service" {...register("service")}>
            {serviceRequiredOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <FieldError>{errors.service?.message}</FieldError>
        </FieldGroup>

        <FieldGroup className="sm:col-span-2">
          <Label htmlFor="message">Project Description</Label>
          <Textarea
            id="message"
            placeholder="Tell us what's going on with your website, or what you'd like reviewed."
            {...register("message")}
          />
          <FieldError>{errors.message?.message}</FieldError>
        </FieldGroup>
      </div>

      <FieldGroup>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
            {...register("consent")}
          />
          <span>
            I consent to PHPsecPro contacting me about this
            request and understand that no sensitive credentials should be
            shared through this form. See our{" "}
            <a href="/privacy-policy" className="font-medium text-[var(--color-accent)]">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <FieldError>{errors.consent?.message}</FieldError>
      </FieldGroup>

      {submitState.status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl bg-[var(--color-danger)]/10 px-4 py-3 text-sm text-[var(--color-danger)]">
          <WarningCircle className="mt-0.5 h-4 w-4 shrink-0" weight="bold" />
          <span>{submitState.message}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={submitState.status === "submitting"}
        className="w-full sm:w-fit"
      >
        {submitState.status === "submitting" ? (
          <>
            <CircleNotch className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
