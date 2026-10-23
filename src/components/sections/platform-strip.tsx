"use client";

import { motion } from "framer-motion";
import { platforms } from "@/data/platforms";

const loop = [...platforms, ...platforms];

export function PlatformStrip() {
  return (
    <section className="overflow-hidden border-b border-[var(--color-border)] bg-white py-10">
      <p className="mb-6 px-4 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] sm:px-6 lg:px-8">
        Trusted by businesses worldwide
      </p>
      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          className="flex shrink-0 items-center gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map(({ name, slug, icon: Icon }, index) => (
            <div
              key={`${slug}-${index}`}
              className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-text)]/60"
            >
              <Icon className="h-5 w-5 text-[var(--color-accent)]" weight="regular" />
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
