import Image from "next/image";
import {
  IdentificationCard,
  Timer,
  Sparkle,
  Tag,
  ShieldCheck,
  Headset,
  Globe,
  FlowArrow,
  ChatCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/data/images";

const strengths = [
  { label: "Experienced Security Specialists", icon: IdentificationCard },
  { label: "Fast Turnaround Time", icon: Timer },
  { label: "Customized Solutions", icon: Sparkle },
  { label: "Transparent Pricing", icon: Tag },
  { label: "100% Confidential", icon: ShieldCheck },
  { label: "Ongoing Support", icon: Headset },
];

const highlights = [
  { label: "Global Delivery", detail: "Remote support for international clients", icon: Globe },
  { label: "Structured Process", detail: "A repeatable 4-step security methodology", icon: FlowArrow },
  { label: "Direct Communication", detail: "WhatsApp & email, no ticket queues", icon: ChatCircle },
  { label: "Always Reachable", detail: "Support available when you need it", icon: Headset },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            Why Choose PHPsecPro
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-2xl)] lg:mx-0">
            <Image
              src={siteImages.aboutWorkstation.src}
              alt={siteImages.aboutWorkstation.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/90 px-5 py-3 shadow-[var(--shadow-diffuse)] backdrop-blur-md">
              <ShieldCheck className="h-5 w-5 text-[var(--color-accent-bright)]" weight="bold" />
              <span className="text-sm font-bold tracking-wide text-white">PHP</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
              Your trusted PHP security partner
            </h2>
            <p className="max-w-[60ch] text-base leading-relaxed text-[var(--color-muted)]">
              We combine deep technical expertise with proven security
              practices to keep your website safe, fast, and running
              smoothly.
            </p>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {strengths.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-text)]"
                >
                  <Icon className="h-[18px] w-[18px] shrink-0 text-[var(--color-accent)]" />
                  {label}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(({ label, detail, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-xl bg-[var(--color-accent-soft)]/60 px-4 py-3.5"
                >
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">{label}</p>
                    <p className="text-xs leading-relaxed text-[var(--color-muted)]">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="w-fit">
              <Button size="lg">Get Free Security Check</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
