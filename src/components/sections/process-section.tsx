"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";

function Connector({ delay }: { delay: number }) {
  return (
    <svg
      viewBox="0 0 40 10"
      className="hidden h-2.5 w-10 shrink-0 text-[var(--color-accent)]/50 md:block"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 5 H32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay }}
      />
      <motion.path
        d="M28 1 L34 5 L28 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
      />
    </svg>
  );
}

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
                {index < processSteps.length - 1 && <Connector delay={index * 0.1 + 0.3} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
