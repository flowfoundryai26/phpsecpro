import { ShoppingBag, Briefcase, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { ScenarioItem } from "@/types";

export const scenarios: ScenarioItem[] = [
  {
    title: "E-commerce Website Security Review",
    summary:
      "An illustrative scenario covering common risk areas on online stores.",
    points: ["Outdated extensions", "Weak access controls", "Backup gaps"],
    imageKey: "investigationScene",
    icon: ShoppingBag,
  },
  {
    title: "Business Website PHP Upgrade",
    summary:
      "An illustrative scenario covering a staged PHP version upgrade.",
    points: [
      "Compatibility evaluation",
      "Staging environment updates",
      "Post-upgrade testing",
    ],
    imageKey: "hardeningWorkstation",
    icon: Briefcase,
  },
  {
    title: "Agency Client Hardening Rollout",
    summary:
      "An illustrative scenario covering hardening across multiple client sites.",
    points: [
      "Bulk configuration review",
      "Access control cleanup",
      "Ongoing monitoring setup",
    ],
    imageKey: "serverRoom",
    icon: UsersThree,
  },
];
