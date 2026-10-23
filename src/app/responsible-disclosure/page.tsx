import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Responsible Disclosure Policy",
  description: "How to report a suspected security issue with PHPsecPro's own website or systems.",
};

export default function ResponsibleDisclosurePage() {
  return (
    <LegalPageShell title="Responsible Disclosure Policy" updated="October 2026">
      <p>
        This policy covers how to report a suspected security issue with
        this website or {BUSINESS.parentCompany}&apos;s own systems. It does
        not apply to the websites of our clients, which fall under separately
        agreed assessment scope.
      </p>

      <h2>Reporting a Vulnerability</h2>
      <p>
        If you believe you have found a security issue affecting this
        website, please contact us via WhatsApp at {BUSINESS.whatsappDisplay}{" "}
        or through{" "}
        <a href={BUSINESS.parentWebsite} className="font-medium text-[var(--color-accent)]">
          {BUSINESS.parentWebsite}
        </a>{" "}
        with a clear description and steps to reproduce.
      </p>

      <h2>What We Ask</h2>
      <ul>
        <li>Give us reasonable time to investigate and respond before any public disclosure.</li>
        <li>Avoid accessing, modifying, or deleting data beyond what is needed to demonstrate the issue.</li>
        <li>Do not perform testing that could degrade service availability for other users.</li>
      </ul>

      <h2>What You Can Expect</h2>
      <p>
        We will acknowledge valid reports, investigate in good faith, and
        keep you informed of remediation progress where appropriate.
      </p>
    </LegalPageShell>
  );
}
