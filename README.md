# FlowFoundry PHP Security

Marketing and lead-generation website for **FlowFoundry PHP Security**, a PHP
website security, vulnerability remediation, and maintenance offering from
FlowFoundry AI Solutions.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Hand-rolled UI primitives in `src/components/ui` (cva + Tailwind, shadcn-style
  conventions) — no Radix dependency required for buttons, cards, badges, or
  form fields, which use accessible native HTML elements
- Framer Motion for scroll/entrance animation
- React Hook Form + Zod for the lead-generation form
- Google Apps Script + Google Sheets as the lead-storage backend (see below)
- lucide-react for icons, plus a hand-drawn WhatsApp brand-mark SVG
  (`src/components/icons/whatsapp-icon.tsx`) since lucide has no brand icons

## Getting Started

```bash
npm install
cp .env.example .env.local   # set GOOGLE_APPS_SCRIPT_URL to enable the lead form
npm run dev
```

Open http://localhost:3000.

## Lead Form → Google Sheets Integration

The lead form (`src/components/sections/contact-form.tsx`) posts JSON to
`src/app/api/leads/route.ts`, which validates it server-side with Zod, then
forwards it as `application/x-www-form-urlencoded` (not JSON) to a deployed
Google Apps Script Web App, matching that script's `e.parameter` contract.

**Environment variable** (server-only — never `NEXT_PUBLIC_`):

- `GOOGLE_APPS_SCRIPT_URL` — the Apps Script Web App's `/exec` URL

Without it set, the form fails clearly with a "not configured" message — it
never fakes a successful submission.

**Payload contract.** The API route always sends exactly these parameters,
regardless of what the visible form collects:

| Param             | Source                                             |
| ----------------- | --------------------------------------------------- |
| `fullName`        | form field                                          |
| `email`            | form field                                          |
| `phone`            | form field (empty string if blank)                  |
| `website`          | form field (empty string if blank)                  |
| `platform`         | form field, mapped slug → human label (e.g. `wordpress` → `WordPress`) |
| `service`          | form field, mapped slug → human label               |
| `message`          | form field (empty string if blank)                  |
| `consent`          | always the literal string `"yes"`                   |
| `company_website`  | always `""` — this is the honeypot, never real data  |

`companyName` is collected in the UI (kept for future use) but is **never**
sent to Apps Script — the existing Sheet has no column for it, and the route
deliberately does not fold it into any other parameter.

**Reading the response.** The Apps Script returns HTML, not JSON. The route
reads it with `response.text()` and only reports success when the upstream
HTTP response is OK *and* the HTML contains the literal string
`"Request submitted"`. `"Submission not accepted"` and `"Submission
unavailable"` (and anything else) are treated as failures. A timed-out
request (15s) is reported as a failure and is **not** retried automatically,
since it may have already reached the Sheet.

**Known deployment issue found during testing:** hitting the Apps Script URL
above — both through the API route and with a direct `curl` bypassing this
app entirely — currently returns `HTTP 401` with a Google Drive "Sorry,
unable to open the file at present / Page not found" error page, not the
script's own response. This means either the deployment's access setting
isn't "Anyone", the deployment was deleted/replaced, or the URL is stale.
This is **not** fixable from this codebase — check in the Apps Script editor
under *Deploy → Manage deployments* that a Web App deployment exists with
*Who has access: Anyone*, and that the `/exec` URL still matches. Until
that's resolved, no row can land in the Sheet and the integration cannot be
marked verified end-to-end (see Testing Results below).

## Images

All imagery is centralized in `src/data/images.ts`. It currently points to
seeded `picsum.photos` placeholders (stable URLs, no broken links) standing
in for the professional cybersecurity photography described in the project
brief — no image-generation or stock-photo tool was available to produce
real photography, so these remain placeholders, not finished assets.

All 8 defined images are now actually used (previously 4 sat unused) and
mapped to the section whose content they best match: hero → engineer at a
workstation, the outdated-software advisory banner → analyst reviewing
vulnerabilities, the three "example scenario" cards → investigation /
hardening-workstation / server-room respectively, about → workstation,
final CTA → server room.

**Before shipping to production**, replace each entry's `src` with a
licensed stock photo or generated image placed under `public/images/`,
keeping the same keys so no component code needs to change.

## Rate Limiting

`src/lib/rate-limit.ts` implements a simple in-memory limiter (5 requests per
10 minutes per IP) for `/api/leads`. It only protects a single running
process and resets on redeploy or restart — **if you deploy to a serverless
or multi-instance platform (Vercel, Cloudflare Workers, etc.), this limiter
will not coordinate across instances** and should be swapped for a shared
store (e.g. Upstash Redis) behind the same `checkRateLimit` function
signature before relying on it in production.

## Project Structure

```
src/
  app/                  Routes: home, legal pages, sitemap.xml, robots.txt, /api/leads
  components/
    layout/             Header, Footer, Logo, WhatsAppButton, legal page shell
    sections/           One component per homepage section
    ui/                 Button, Card, Badge, Input/Textarea/Select/Label primitives
    icons/               WhatsAppIcon (brand SVG; lucide has no brand icons)
    seo/                Structured data (JSON-LD)
  data/                 Services, pricing (USD), FAQ, process steps, scenarios,
                         platforms, navigation, form options, images — all
                         content is data-driven from this folder
  lib/                  constants, utils (cn), rate-limit, prefill event bus,
                         validations/leads.ts (Zod schema)
  types/                Shared TypeScript interfaces
```

## Content & Claims Policy

This is a new service offering. Per the project brief, the site deliberately
avoids fabricated statistics, testimonials, certifications, or completed
case studies:

- The testimonials section is a placeholder CTA until real, approved
  testimonials are supplied (see `components/sections/testimonials-placeholder.tsx`,
  which also exports a ready-to-use `TestimonialCard` for when they arrive).
- The "Security Improvements in Practice" section is explicitly labeled as
  illustrative example scenarios, not completed client work.
- FAQ answers state plainly that no security provider can guarantee a
  website will never be compromised.
- FAQPage structured data is intentionally **not** implemented — Google has
  restricted FAQ rich results to a narrow set of authoritative domains since
  2023, so adding it would misrepresent SEO capability.

## Lead Form Testing Results

Run against a local dev server, hitting `/api/leads`:

| # | Test | Result |
| - | ---- | ------ |
| 1 | Valid submission | API correctly builds the payload and calls Apps Script; **fails** because Apps Script itself returns HTTP 401 (see deployment issue above) |
| 2 | Required field validation | ✅ Missing `fullName`/`email`/`service`/`consent` all return field-level 400 errors |
| 3 | Invalid email | ✅ Rejected with "Enter a valid email address." |
| 4 | Consent unchecked | ✅ Rejected with "Consent is required to submit this form." |
| 5 | Empty honeypot | ✅ Passes through to the Apps Script call as normal |
| 6 | Filled honeypot | ✅ Returns `{"success":true}` immediately, without calling Apps Script (found and fixed a bug where the schema's own `max(0)` was rejecting this as a validation error instead of silently trapping it) |
| 7 | Apps Script deployment permission error | ⚠️ **Reproduced for real** — see deployment issue above |
| 8 | Apps Script rejection response | Not reachable for testing until #7 is fixed (script never got far enough to return its own HTML) |
| 9 | Apps Script server error | Same as #8 |
| 10 | Request timeout | Implemented (15s `AbortController`, reported as failure, never retried); not naturally triggered in testing since Apps Script fails fast with 401 |
| 11 | Mobile form submission | Logic verified (same API path regardless of viewport); **not visually tested** — no browser automation tool was connected in this session |
| 12 | Actual Google Sheet row insertion | ❌ **Not confirmed.** Blocked on the deployment issue above — no row can be inserted until the Apps Script URL serves the script instead of a Google Drive 401 page |

Rate limiting was also verified directly: the 6th request within 10 minutes
from the same IP returns `429 Too Many Requests`.

**Bottom line: the integration code is complete, typo-checked, linted, and
builds cleanly, but it is not yet verified end-to-end.** Per your own
instruction not to claim this works until a row is confirmed in the Sheet —
it isn't, because the provided Apps Script URL isn't currently serving the
script. Once you confirm the deployment is live and reachable (`Who has
access: Anyone`), this should work as-is; let me know if you'd like me to
re-run the test matrix after you fix it.

## Quality Checks

```bash
npx tsc --noEmit   # type check
npx eslint .        # lint
npm run build       # production build
```

## Deployment

The app builds as a standard Next.js app and deploys cleanly to Vercel,
Cloudflare (via @opennextjs/cloudflare or similar adapter), or any Node.js
host that supports the Next.js build output.

Before going live:

1. Set `GOOGLE_APPS_SCRIPT_URL` on the hosting platform's environment
   variables (never as a `NEXT_PUBLIC_` variable).
2. Confirm the Apps Script deployment is reachable (see the known issue
   above) and re-run the test matrix to confirm a row actually lands in the
   Leads sheet.
3. If deploying to a serverless/multi-instance platform, replace the
   in-memory rate limiter (see Rate Limiting above) with a shared store.
#
