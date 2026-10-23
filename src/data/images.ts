/**
 * Centralized image configuration. Every image on the site is resolved from
 * here so they can be swapped for licensed stock photography or generated
 * imagery before production without touching component code.
 *
 * Sources are free-to-use Unsplash photos (Unsplash License), downloaded
 * locally under /public/images/, standing in for the professional
 * cybersecurity photography described in the project brief.
 */
export const siteImages = {
  heroEngineer: {
    src: "/images/hero-engineer.jpg",
    alt: "Cybersecurity engineer reviewing code and security dashboards at a workstation",
  },
  servicesAnalyst: {
    src: "/images/services-analyst.jpg",
    alt: "Security analyst reviewing website vulnerability data across multiple monitors",
  },
  serverRoom: {
    src: "/images/server-room.jpg",
    alt: "Secure server racks inside a modern data center",
  },
  hardeningWorkstation: {
    src: "/images/hardening-workstation.jpg",
    alt: "Workstation displaying a web application security hardening interface",
  },
  investigationScene: {
    src: "/images/investigation-scene.jpg",
    alt: "Cybersecurity investigation workspace with logs and analysis tools on screen",
  },
  ctaServerRoom: {
    src: "/images/cta-server-room.jpg",
    alt: "Dark blue-toned enterprise data center corridor",
  },
  aboutWorkstation: {
    src: "/images/about-workstation.jpg",
    alt: "Professional cybersecurity workstation with code editor and monitoring tools",
  },
  hackerThreat: {
    src: "/images/hacker-threat.jpg",
    alt: "Silhouette of a hooded figure at a laptop, representing an active cyber threat",
  },
} as const;
