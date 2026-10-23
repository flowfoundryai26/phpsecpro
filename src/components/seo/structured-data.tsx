import { services } from "@/data/services";
import { BUSINESS, SITE_URL } from "@/lib/constants";

/**
 * Service + Organization structured data for the homepage.
 *
 * FAQPage structured data is intentionally omitted: since 2023 Google limits
 * FAQ rich results to a narrow set of authoritative government/health
 * domains, so adding it here would not be eligible and would misrepresent
 * SEO capability.
 */
export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => ({
      "@type": "Service",
      serviceType: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: BUSINESS.parentCompany,
        url: BUSINESS.parentWebsite,
      },
      areaServed: BUSINESS.markets,
      url: `${SITE_URL}/#services`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
