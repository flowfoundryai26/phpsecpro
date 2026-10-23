"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { pricingPlans, pricingDisclaimer } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { requestServicePrefill } from "@/lib/prefill";
import type { ServiceRequested } from "@/types";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-[var(--color-surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            Pricing Plans
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={plan.highlighted ? "lg:-translate-y-3" : ""}
            >
            <SpotlightCard
              className={`flex h-full flex-col rounded-[var(--radius-xl)] border p-7 transition-colors duration-300 ${
                plan.highlighted
                  ? "border-[var(--color-accent)] bg-[var(--color-ink)] text-white shadow-[var(--shadow-diffuse-accent)]"
                  : "border-[var(--color-border)] bg-white hover:border-[var(--color-accent)]"
              }`}
            >
              {plan.badge && (
                <span
                  className={`mb-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    plan.highlighted
                      ? "bg-white/10 text-white"
                      : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  }`}
                >
                  {plan.badge}
                </span>
              )}
              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-[var(--color-text)]"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span
                  className={`font-mono text-3xl font-extrabold ${
                    plan.highlighted ? "text-white" : "text-[var(--color-text)]"
                  }`}
                >
                  {plan.priceLabel}
                </span>
                {plan.priceSuffix && (
                  <span
                    className={`text-sm font-medium ${
                      plan.highlighted ? "text-white/60" : "text-[var(--color-muted)]"
                    }`}
                  >
                    {plan.priceSuffix}
                  </span>
                )}
              </div>
              {plan.tagline && (
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-white/50" : "text-[var(--color-muted)]"
                  }`}
                >
                  {plan.tagline}
                </p>
              )}

              <ul className="mt-6 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                      plan.highlighted ? "text-white/80" : "text-[var(--color-text)]/80"
                    }`}
                  >
                    <Check
                      weight="bold"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlighted ? "text-[var(--color-accent-bright)]" : "text-[var(--color-accent)]"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p
                  className={`mt-4 text-xs leading-relaxed ${
                    plan.highlighted ? "text-white/50" : "text-[var(--color-muted)]"
                  }`}
                >
                  {plan.note}
                </p>
              )}

              <Button
                variant={plan.highlighted ? "primary" : "secondary"}
                className="mt-7 w-full"
                onClick={() => requestServicePrefill(plan.slug as ServiceRequested)}
              >
                {plan.ctaLabel}
              </Button>
            </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-muted)]">
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
