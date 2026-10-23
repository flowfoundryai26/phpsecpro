import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/sections/contact-form";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-accent-soft)]/40 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            Request a security assessment
          </h2>
          <p className="max-w-[48ch] text-base leading-relaxed text-[var(--color-muted)]">
            Tell us about your website and what you need help with. We
            review every request and follow up with next steps and scope.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
            >
              Chat on WhatsApp for a faster reply
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-5 py-4 text-sm text-[var(--color-muted)]">
              <EnvelopeSimple className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
              Please avoid sharing passwords or sensitive credentials through
              this form or WhatsApp. We&apos;ll confirm a secure method for
              any access we need.
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
