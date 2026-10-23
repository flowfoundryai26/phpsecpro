import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "@/lib/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PHPsecPro | PHP Website Security & Maintenance",
    template: "%s | PHPsecPro",
  },
  description:
    "PHP website security assessments, malware investigation, PHP upgrades, and ongoing maintenance for WordPress, WooCommerce, Laravel, Magento, and custom PHP applications.",
  keywords: [
    "PHP website security services",
    "WordPress security services",
    "PHP vulnerability assessment",
    "website malware removal",
    "PHP upgrade service",
    "website security maintenance",
    "WooCommerce security",
    "Laravel security assessment",
  ],
  authors: [{ name: BUSINESS.parentCompany, url: BUSINESS.parentWebsite }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PHPsecPro",
    title: "PHPsecPro | PHP Website Security & Maintenance",
    description:
      "Security assessments, malware investigation, PHP upgrades, and ongoing maintenance for PHP-based websites and applications.",
    locale: "en_US",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "PHPsecPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PHPsecPro | PHP Website Security & Maintenance",
    description:
      "Security assessments, malware investigation, PHP upgrades, and ongoing maintenance for PHP-based websites and applications.",
    images: ["/images/og-cover.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS.parentCompany,
  alternateName: BUSINESS.serviceBrand,
  url: BUSINESS.parentWebsite,
  description:
    "PHP website security assessments, malware investigation, PHP upgrades, and ongoing maintenance for PHP-based websites and applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: BUSINESS.markets,
  sameAs: [BUSINESS.parentWebsite],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
