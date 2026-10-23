import { ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";

/**
 * Real, approved customer testimonials are not yet available. Rather than
 * fabricate names, quotes, or ratings, this section stays a soft CTA until
 * genuine testimonials can be supplied. Swap this component out (or build on
 * the reusable testimonial card pattern below) once real feedback exists.
 */
export function TestimonialsPlaceholder() {
  return (
    <section className="bg-[var(--color-accent-soft)]/40 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-accent)] shadow-[var(--shadow-diffuse)]">
          <ChatCircleDots className="h-6 w-6" />
        </span>
        <h2 className="text-balance text-2xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-4xl">
          Need a clearer picture of your website&apos;s security?
        </h2>
        <p className="max-w-[48ch] text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
          Talk to our team about your specific PHP platform and risk areas,
          and get a practical next step.
        </p>
        <a href="#contact">
          <Button size="lg">Talk to Our Team</Button>
        </a>
      </div>
    </section>
  );
}

export interface TestimonialCardData {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardData) {
  return (
    <figure className="flex flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7">
      <blockquote className="text-sm leading-relaxed text-[var(--color-text)]/80">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="text-sm">
        <span className="font-semibold text-[var(--color-text)]">{name}</span>
        <span className="text-[var(--color-muted)]"> — {role}, {company}</span>
      </figcaption>
    </figure>
  );
}
