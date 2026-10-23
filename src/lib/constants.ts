export const SITE_URL = "https://phpsecurity.flowfoundryai.in";

export const BUSINESS = {
  parentCompany: "PHPsecPro",
  serviceBrand: "PHPsecPro",
  tagline: "Secure. Clean. Protect.",
  positioning: "PHP Security, Website Protection & Maintenance",
  parentWebsite: "https://www.flowfoundryai.in",
  whatsappNumber: "917330937354",
  whatsappDisplay: "+91 73309 37354",
  location: "Vijayawada, Andhra Pradesh, India",
  markets: ["India", "United States", "United Kingdom", "UAE"],
} as const;

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encoded}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi PHPsecPro, I would like to request a PHP website security assessment. Please share the next steps.";
