import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    question: "How do I know if my website is vulnerable?",
    answer:
      "Common warning signs include outdated PHP or plugin versions, unexpected admin accounts, slow performance, unfamiliar files, or search engine warnings. A short technical review can usually confirm whether deeper investigation is needed.",
  },
  {
    question: "Do you work with WordPress and WooCommerce?",
    answer:
      "Yes. We review WordPress core, themes, and plugins, as well as WooCommerce-specific configuration and extensions, alongside other PHP platforms such as Laravel, Magento, and Joomla.",
  },
  {
    question: "How long does it take to fix a hacked website?",
    answer:
      "It depends on what's found. A straightforward malware cleanup can often be completed within a few days, while a deeper compromise with backdoors or data exposure takes longer to investigate and remediate safely.",
  },
  {
    question: "Will my website data be safe?",
    answer:
      "Yes. We work from backups wherever possible, avoid unnecessary access, and never ask for passwords or sensitive credentials through this form or WhatsApp. See our Privacy Policy for details.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Our maintenance plan covers scheduled version checks, dependency review, agreed updates, backup status review, and a monthly report with recommendations.",
  },
  {
    question: "Can you help with custom PHP applications?",
    answer:
      "Yes. Alongside WordPress, WooCommerce, Laravel, Magento, and Joomla, we review and harden bespoke PHP applications, scoping each engagement to the specific codebase and infrastructure.",
  },
];
