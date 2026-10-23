import type { Metadata } from "next";
import { LegalPageShell } from "@/components/layout/legal-page-shell";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Scope of Security Assessments",
  description: "What is and is not included in a PHPsecPro website security assessment.",
};

export default function AssessmentScopePage() {
  return (
    <LegalPageShell title="Scope of Security Assessments" updated="October 2026">
      <p>
        This page explains what is generally included in a {BUSINESS.serviceBrand}{" "}
        assessment, and what requires separate agreement. Exact scope is
        confirmed in writing for each engagement.
      </p>

      <h2>Typically Included</h2>
      <ul>
        <li>Review of PHP version, core platform version, and major dependencies.</li>
        <li>Review of plugins, extensions, or modules for known, publicly disclosed vulnerabilities.</li>
        <li>Review of common configuration risks (permissions, exposed files, access controls).</li>
        <li>A findings summary with practical, prioritized recommendations.</li>
      </ul>

      <h2>Requires Separate Agreement</h2>
      <ul>
        <li>Active penetration testing or exploitation of identified vulnerabilities.</li>
        <li>Incident response for an active, ongoing attack.</li>
        <li>Testing of third-party systems not owned or controlled by the client.</li>
        <li>Work outside the agreed platform, environment, or time window.</li>
      </ul>

      <h2>Authorization</h2>
      <p>
        We require confirmation that you own or are authorized to request
        assessment work on the website or system in scope before any paid
        work begins.
      </p>

      <h2>No Guarantee</h2>
      <p>
        An assessment reduces risk by identifying known issues at a point in
        time. It does not guarantee that a website is, or will remain, free
        of vulnerabilities.
      </p>

      <h2>Contact</h2>
      <p>
        To discuss scope for your website, reach us via WhatsApp at{" "}
        {BUSINESS.whatsappDisplay}.
      </p>
    </LegalPageShell>
  );
}
