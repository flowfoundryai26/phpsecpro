import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    slug: "security-assessment",
    name: "Security Audit",
    priceLabel: "$99",
    priceSuffix: "one-time",
    tagline: "One-time scan and report",
    features: [
      "Full website security scan",
      "Vulnerability report",
      "Expert recommendations",
    ],
    ctaLabel: "Get Started",
  },
  {
    slug: "malware-investigation",
    name: "Malware Removal",
    priceLabel: "$299",
    priceSuffix: "starting from",
    tagline: "Clean and restore your website",
    features: [
      "Remove malware & backdoors",
      "Clean infected files",
      "Restore website functionality",
    ],
    ctaLabel: "Get Started",
    note: "Cleanup and recovery costs may vary depending on the extent of the incident.",
  },
  {
    slug: "php-upgrade",
    name: "PHP Upgrade & Patch",
    priceLabel: "$399",
    priceSuffix: "starting from",
    tagline: "Update to secure version",
    features: [
      "Update PHP to latest version",
      "Fix configuration issues",
      "Test and ensure compatibility",
    ],
    ctaLabel: "Get Started",
  },
  {
    slug: "ongoing-maintenance",
    name: "Complete Security",
    priceLabel: "$599",
    priceSuffix: "starting from",
    tagline: "Full protection and cleanup",
    features: [
      "Full audit and malware removal",
      "PHP, plugins, and server hardening",
      "30 days of monitoring",
    ],
    ctaLabel: "Get Started",
    badge: "Most Popular",
    highlighted: true,
  },
];

export const pricingDisclaimer =
  "Prices are starting estimates. Final quotes depend on your website's complexity, infrastructure, scope, and required remediation.";
