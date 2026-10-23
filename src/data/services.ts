import {
  MagnifyingGlass,
  Bug,
  ArrowsClockwise,
  Lock,
  HardDrives,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    slug: "security-assessment",
    title: "Security Audit",
    description: "Find and fix vulnerabilities before hackers exploit them.",
    icon: MagnifyingGlass,
  },
  {
    slug: "malware-investigation",
    title: "Malware Removal",
    description: "Clean infected files, remove backdoors and restore your website.",
    icon: Bug,
  },
  {
    slug: "php-upgrade",
    title: "PHP Upgrade",
    description: "Update to secure and supported PHP versions.",
    icon: ArrowsClockwise,
  },
  {
    slug: "website-hardening",
    title: "Website Hardening",
    description: "Prevent future attacks with best security practices.",
    icon: Lock,
  },
  {
    slug: "server-security-review",
    title: "Server Security",
    description: "Secure hosting, configurations and access controls.",
    icon: HardDrives,
  },
  {
    slug: "ongoing-maintenance",
    title: "Ongoing Monitoring",
    description: "24/7 monitoring and maintenance plans.",
    icon: ChartLineUp,
  },
];
