import type { Icon } from "@phosphor-icons/react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: Icon;
}

export interface PricingPlan {
  slug: string;
  name: string;
  priceLabel: string;
  priceSuffix?: string;
  tagline?: string;
  features: string[];
  ctaLabel: string;
  badge?: string;
  note?: string;
  highlighted?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: Icon;
}

export interface ScenarioItem {
  title: string;
  summary: string;
  points: string[];
  imageKey: "investigationScene" | "hardeningWorkstation" | "serverRoom";
  icon: Icon;
}

export interface PlatformItem {
  name: string;
  slug: string;
  icon: Icon;
}

export type WebsitePlatform =
  | "wordpress"
  | "woocommerce"
  | "laravel"
  | "magento"
  | "joomla"
  | "custom-php"
  | "not-sure";

export type ServiceRequested =
  | "security-assessment"
  | "malware-investigation"
  | "php-upgrade"
  | "website-hardening"
  | "server-security-review"
  | "ongoing-maintenance"
  | "other";
