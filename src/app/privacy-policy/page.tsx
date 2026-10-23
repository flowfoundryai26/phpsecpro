import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PHPsecPro collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" updated="October 2026">
      <p>
        This Privacy Policy explains how {BUSINESS.parentCompany} ({BUSINESS.serviceBrand})
        collects, uses, and protects information submitted through this
        website, including the security assessment inquiry form.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details you submit: name, business email, phone/WhatsApp number, and company name.</li>
        <li>Project details you submit: website URL, platform, service requested, and description.</li>
        <li>Basic technical data such as IP address, used only for spam and abuse prevention.</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>
        We use submitted information to respond to your inquiry, scope
        requested work, and communicate about a potential or active
        engagement. We do not sell your information to third parties.
      </p>

      <h2>Credentials and Sensitive Data</h2>
      <p>
        Please do not submit passwords, API keys, or other secrets through
        this form or over WhatsApp. If an engagement requires limited
        administrative or hosting access, we will agree on a secure method
        for sharing it separately.
      </p>

      <h2>Data Retention</h2>
      <p>
        Inquiry details are retained for as long as reasonably necessary to
        respond to your request and maintain business records, after which
        they may be deleted.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be directed to {BUSINESS.parentCompany}{" "}
        via{" "}
        <a href={BUSINESS.parentWebsite} className="font-medium text-[var(--color-accent)]">
          {BUSINESS.parentWebsite}
        </a>{" "}
        or WhatsApp at {BUSINESS.whatsappDisplay}.
      </p>
    </LegalPageShell>
  );
}
