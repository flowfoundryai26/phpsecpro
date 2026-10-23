"use client";

import { useId, useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-[var(--color-border)]"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="flex items-baseline gap-2.5 text-sm font-semibold text-[var(--color-text)]">
                    <span className="font-mono text-[var(--color-accent)]">{index + 1}.</span>
                    {item.question}
                  </span>
                  <Plus
                    weight="bold"
                    className={`h-4 w-4 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: isOpen ? "480px" : "0px" }}
                >
                  <p className="px-5 pb-4 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
