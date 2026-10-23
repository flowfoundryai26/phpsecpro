"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section id="process" className="bg-[var(--color-surface)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            Our Process
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            A simple, 4-step process
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            We make website security easy, fast, and hassle-free.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-stretch">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex flex-1 items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-1 flex-col items-start gap-3 rounded-2xl bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] font-mono text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <Icon className="h-5 w-5 text-[var(--color-accent)]" weight="regular" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </motion.div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 shrink-0 text-[var(--color-accent)]/40 md:block" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
