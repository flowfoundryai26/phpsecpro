"use client";

import { useId, useState } from "react";
import { FacebookIcon, XIcon, LinkedInIcon, YouTubeIcon } from "@/components/icons/social-icons";
import { Logo } from "@/components/layout/logo";
import { services } from "@/data/services";
import { BUSINESS } from "@/lib/constants";

const COPYRIGHT_YEAR = 2026;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "PHP Vulnerabilities", href: "#vulnerabilities" },
  { label: "Case Studies", href: "#case-studies" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "X (Twitter)", href: "https://x.com", icon: XIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeIcon },
];

function NewsletterForm() {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        placeholder="Your email address"
        className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-[var(--color-accent-bright)] focus:outline-none"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-lg bg-[var(--color-accent)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-bright)]"
      >
        {submitted ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="flex flex-col gap-4 md:col-span-1">
            <Logo onDark />
            <p className="text-sm leading-relaxed text-white/60">
              Professional PHP security services to protect and secure your
              website from hackers.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[var(--color-accent)] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Get the latest PHP security alerts and tips.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {COPYRIGHT_YEAR} {BUSINESS.parentCompany}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/responsible-disclosure" className="transition-colors hover:text-white">
              Responsible Disclosure Policy
            </a>
            <a href="/assessment-scope" className="transition-colors hover:text-white">
              Scope of Security Assessments
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
