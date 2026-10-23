"use client";

import Image from "next/image";
import { Warning, Circle } from "@phosphor-icons/react/dist/ssr";
import { requestServicePrefill } from "@/lib/prefill";
import { siteImages } from "@/data/images";

const risks = [
  "Remote Code Execution",
  "Server Takeover Risk",
  "Data Breach Possibility",
  "Exploited in the Wild",
];

export function SecurityAlertBanner() {
  return (
    <section id="vulnerabilities" className="relative overflow-hidden bg-[var(--color-danger)]/5">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="flex flex-col gap-5 px-4 py-14 sm:px-6 md:py-16 lg:px-12">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-danger)]/10 text-[var(--color-danger)]">
            <Warning className="h-6 w-6" weight="bold" />
          </span>
          <h2 className="text-balance text-2xl font-extrabold tracking-tighter text-[var(--color-danger)] md:text-3xl">
            Latest PHP vulnerabilities
          </h2>
          <p className="max-w-[48ch] text-sm leading-relaxed text-[var(--color-text)]/70 md:text-base">
            New PHP vulnerabilities are being actively exploited by hackers
            worldwide. Many websites are at risk. Check if your website is
            affected now.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => requestServicePrefill("security-assessment")}
              className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-[var(--color-danger)] px-8 text-base font-semibold text-white shadow-[0_12px_24px_-8px_rgba(220,53,69,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(220,53,69,0.55)]"
            >
              Check My Website
            </button>

            <ul className="flex flex-col gap-2">
              {risks.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-medium text-[var(--color-text)]/80"
                >
                  <Circle className="h-2 w-2 shrink-0 fill-[var(--color-danger)] text-[var(--color-danger)]" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative min-h-64 lg:min-h-full">
          <Image
            src={siteImages.hackerThreat.src}
            alt={siteImages.hackerThreat.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-danger)]/30 via-[var(--color-danger)]/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
