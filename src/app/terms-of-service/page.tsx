import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of this website and engagements with PHPsecPro.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageShell title="Terms of Service" updated="October 2026">
      <p>
        These terms govern your use of this website and any engagement with{" "}
        {BUSINESS.parentCompany} under the {BUSINESS.serviceBrand} offering.
      </p>

      <h2>Services</h2>
      <p>
        Specific scope, pricing, and deliverables for any security
        assessment, remediation, upgrade, or maintenance engagement are
        confirmed in writing before paid work begins. Pricing shown on this
        website is a starting estimate, not a fixed quote.
      </p>

      <h2>No Guarantee of Absolute Security</h2>
      <p>
        No security provider can guarantee that a website will never be
        compromised. Our services aim to reduce risk through structured
        review, remediation, and maintenance, not to promise absolute
        prevention.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        You confirm that you own or are authorized to request security
        testing and remediation on the website or system provided, and that
        any access granted to us is given with proper authorization.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the extent permitted by law, {BUSINESS.parentCompany} is not
        liable for indirect or consequential damages arising from services
        provided, except where caused by our gross negligence or willful
        misconduct.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, contact us via{" "}
        <a href={BUSINESS.parentWebsite} className="font-medium text-[var(--color-accent)]">
          {BUSINESS.parentWebsite}
        </a>{" "}
        or WhatsApp at {BUSINESS.whatsappDisplay}.
      </p>
    </LegalPageShell>
  );
}
