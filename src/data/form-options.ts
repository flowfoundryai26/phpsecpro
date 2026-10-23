import { websitePlatformValues, serviceRequestedValues } from "@/lib/validations/leads";

export const websitePlatformOptions: { value: (typeof websitePlatformValues)[number]; label: string }[] = [
  { value: "wordpress", label: "WordPress" },
  { value: "woocommerce", label: "WooCommerce" },
  { value: "laravel", label: "Laravel" },
  { value: "magento", label: "Magento" },
  { value: "joomla", label: "Joomla" },
  { value: "custom-php", label: "Custom PHP" },
  { value: "not-sure", label: "Not Sure" },
];

export const serviceRequiredOptions: { value: (typeof serviceRequestedValues)[number]; label: string }[] = [
  { value: "security-assessment", label: "Security Assessment" },
  { value: "malware-investigation", label: "Malware Investigation" },
  { value: "php-upgrade", label: "PHP Upgrade" },
  { value: "website-hardening", label: "Website Hardening" },
  { value: "server-security-review", label: "Server Security Review" },
  { value: "ongoing-maintenance", label: "Ongoing Maintenance" },
  { value: "other", label: "Other" },
];
