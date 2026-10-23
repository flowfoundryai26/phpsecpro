"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { services } from "@/data/services";
import { requestServicePrefill } from "@/lib/prefill";
import type { ServiceRequested } from "@/types";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            Our Services
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            Complete PHP security solutions
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[var(--color-muted)]">
            From vulnerability detection to long-term protection, we cover
            every PHP-based website and application end to end.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-flow:dense]">
          {services.map((service, index) => {
            const Icon = service.icon;
            const featured = index === 0;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`group flex flex-col justify-between rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-diffuse)] ${
                  featured
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-9"
                    : ""
                }`}
              >
                <div>
                  <div
                    className={`flex items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white ${
                      featured ? "h-14 w-14" : "h-12 w-12"
                    }`}
                  >
                    <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} weight="regular" />
                  </div>
                  <h3
                    className={`mt-5 font-bold text-[var(--color-text)] ${
                      featured ? "text-2xl tracking-tight" : "text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => requestServicePrefill(service.slug as ServiceRequested)}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] transition-transform hover:gap-2.5"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
