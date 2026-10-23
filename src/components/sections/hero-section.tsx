"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ShieldWarning,
  Warning,
  XCircle,
  Lightning,
  ShieldCheck,
  Lock,
  Phone,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { siteImages } from "@/data/images";
import { requestServicePrefill } from "@/lib/prefill";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

const threatFindings = [
  "Vulnerable PHP Version",
  "Malware Files Found",
  "Suspicious Admin Accounts",
  "Outdated Plugins",
  "Server Misconfiguration",
];

const trustPoints = [
  { label: "Fast Response", detail: "24/7 Support", icon: Lightning },
  { label: "Security-First Process", detail: "Confidential & Compliant", icon: ShieldCheck },
  { label: "100% Confidential", detail: "Your Data is Safe", icon: Lock },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: EASE_OUT },
  }),
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--color-ink)] pt-16 pb-24 md:pt-20 md:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(37,139,255,0.25), transparent 45%), radial-gradient(circle at 85% 70%, rgba(18,103,241,0.2), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex flex-wrap items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur-sm"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-danger)]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <Warning className="h-3 w-3" weight="bold" />
            PHP Security Alert
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
            Hackers are actively exploiting PHP vulnerabilities
            <ArrowRight className="h-3 w-3" />
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center gap-7"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-balance text-4xl font-extrabold leading-[1.02] tracking-tighter text-white md:text-7xl"
          >
            Secure your{" "}
            <span className="text-[var(--color-accent-bright)]">PHP websites</span>{" "}
            before hackers do
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            className="max-w-[48ch] text-base leading-relaxed text-white/70 md:text-lg"
          >
            Professional security audit, malware removal, vulnerability
            fixes, and long-term protection for PHP, WordPress, Laravel and
            custom applications.
          </motion.p>

          <motion.div custom={2} variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <Magnetic strength={0.15}>
              <Button
                size="lg"
                onClick={() => requestServicePrefill("security-assessment")}
              >
                Get Free Security Check
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Magnetic>
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
          </motion.div>

          <motion.ul
            custom={3}
            variants={fadeUp}
            className="flex flex-col gap-4 pt-4 sm:flex-row sm:gap-8"
          >
            {trustPoints.map(({ label, detail, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-accent-bright)]">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold text-white">{label}</span>
                  <span className="text-[11px] text-white/50">{detail}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={siteImages.heroEngineer.src}
              alt={siteImages.heroEngineer.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -left-6 top-10 hidden w-64 overflow-hidden rounded-2xl border border-[var(--color-danger)]/40 bg-[var(--color-ink-soft)]/95 shadow-[var(--shadow-diffuse)] backdrop-blur-md md:block"
          >
            <div className="flex items-center gap-2 bg-[var(--color-danger)]/90 px-4 py-2.5">
              <Warning className="h-4 w-4 text-white" weight="bold" />
              <span className="text-xs font-bold uppercase tracking-wide text-white">
                Security Threat Detected
              </span>
            </div>
            <ul className="flex flex-col gap-2.5 p-4">
              {threatFindings.map((label) => (
                <li key={label} className="flex items-center gap-2 text-xs text-white/85">
                  <XCircle className="h-3.5 w-3.5 shrink-0 text-[var(--color-danger)]" />
                  {label}
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <button
                type="button"
                onClick={() => requestServicePrefill("security-assessment")}
                className="w-full rounded-lg bg-[var(--color-danger)] py-2 text-xs font-bold text-white transition-colors hover:bg-[var(--color-danger)]/85"
              >
                Fix Issues Now
              </button>
            </div>
            <p className="px-4 pb-3 text-[10px] leading-relaxed text-white/40">
              Illustrative example, not findings from a real scan.
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-1/2 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-white p-5 shadow-[var(--shadow-diffuse)] sm:left-auto sm:right-0 sm:translate-x-0"
          >
            <div className="mb-2 flex items-center gap-2 text-[var(--color-accent)]">
              <ShieldWarning className="h-4 w-4" weight="bold" />
              <span className="text-xs font-semibold uppercase tracking-wide">
                Protect Your Business Today
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              Don&apos;t wait until it&apos;s too late. Get your website
              scanned for known PHP vulnerabilities now.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
