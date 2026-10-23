"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations/leads";
import { websitePlatformOptions, serviceRequiredOptions } from "@/data/form-options";
import { Input, Textarea, Select, Label, FieldError, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useServicePrefillListener } from "@/lib/prefill";
import { buildWhatsAppLink } from "@/lib/constants";
import type { ServiceRequested } from "@/types";

function platformLabel(value: string) {
  return websitePlatformOptions.find((option) => option.value === value)?.label ?? value;
}

function serviceLabel(value: string) {
  return serviceRequiredOptions.find((option) => option.value === value)?.label ?? value;
}

function buildLeadMessage(values: LeadFormValues) {
  const lines = [
    "Hi PHPsecPro, I'd like to request the following:",
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
  ];
  if (values.phone) lines.push(`Phone: ${values.phone}`);
  if (values.companyName) lines.push(`Company: ${values.companyName}`);
  if (values.website) lines.push(`Website: ${values.website}`);
  if (values.platform) lines.push(`Platform: ${platformLabel(values.platform)}`);
  lines.push(`Service: ${serviceLabel(values.service)}`);
  if (values.message) lines.push(`Details: ${values.message}`);
  return lines.join("\n");
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
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
    },
  });

  const handlePrefill = useCallback(
    (service: ServiceRequested) => {
      setValue("service", service);
    },
    [setValue]
  );
  useServicePrefillListener(handlePrefill);

  function onSubmit(values: LeadFormValues) {
    // Same-tab navigation (not window.open) — reliable on mobile, where
    // window.open from inside an async submit handler gets popup-blocked.
    window.location.assign(buildWhatsAppLink(buildLeadMessage(values)));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 md:p-10"
    >
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

      <Button type="submit" size="lg" className="w-full sm:w-fit">
        Submit
      </Button>
    </form>
  );
}
