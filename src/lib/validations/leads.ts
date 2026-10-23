import { z } from "zod";

export const websitePlatformValues = [
  "wordpress",
  "woocommerce",
  "laravel",
  "magento",
  "joomla",
  "custom-php",
  "not-sure",
] as const;

export const serviceRequestedValues = [
  "security-assessment",
  "malware-investigation",
  "php-upgrade",
  "website-hardening",
  "server-security-review",
  "ongoing-maintenance",
  "other",
] as const;

/**
 * Field names here intentionally match the Apps Script payload variables
 * (fullName, email, phone, website, platform, service, message) so the API
 * route's mapping onto URLSearchParams is a 1:1 passthrough for those fields.
 * `companyName` and `honeypot` are the two exceptions: companyName has no
 * column in the existing Sheet and is never sent to Apps Script, and
 * honeypot is never forwarded either — it's checked and dropped.
 */
export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Business email is required.")
    .max(200, "Email is too long.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  companyName: z
    .string()
    .trim()
    .max(150, "Company name is too long.")
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .trim()
    .max(300, "Website URL is too long.")
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || /^https?:\/\/.+/i.test(value), {
      error: "Enter a valid URL, including https://",
    }),
  platform: z.enum(websitePlatformValues).optional().or(z.literal("")),
  service: z.enum(serviceRequestedValues, {
    error: "Select the service you need.",
  }),
  message: z
    .string()
    .trim()
    .max(2000, "Description is too long.")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    error: "Consent is required to submit this form.",
  }),
  // Honeypot trap. Named to match the Apps Script payload's own
  // `company_website` parameter; unrelated to the visible `companyName`
  // field above. Deliberately unconstrained here (no max length) so a
  // filled trap doesn't fail *validation* — the route checks its value
  // after parsing and silently fakes success for bots instead of
  // returning a distinguishing error response.
  company_website: z.string().optional().or(z.literal("")),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;
