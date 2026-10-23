import Image from "next/image";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { siteImages } from "@/data/images";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";
import { CtaRequestButton } from "@/components/sections/cta-request-button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-24">
      <div className="absolute inset-0">
        <Image
          src={siteImages.ctaServerRoom.src}
          alt={siteImages.ctaServerRoom.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-ink)] via-[var(--color-ink)]/85 to-[var(--color-ink)]" />
        <MeshGradient variant="dark" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
          Don&apos;t Wait Until It&apos;s Too Late
        </span>
        <h2 className="text-balance text-3xl font-extrabold tracking-tighter text-white md:text-6xl">
          Secure your PHP website today
        </h2>
        <p className="max-w-[46ch] text-base leading-relaxed text-white/70 md:text-lg">
          Get a free security check and find out if your website is
          vulnerable.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <CtaRequestButton />
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlineLight" size="lg">
              <Phone className="h-4 w-4" />
              Talk to an Expert
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
