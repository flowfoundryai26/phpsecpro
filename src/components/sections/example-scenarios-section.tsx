import { Info } from "@phosphor-icons/react/dist/ssr";
import { scenarios } from "@/data/scenarios";

export function ExampleScenariosSection() {
  return (
    <section id="case-studies" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
            Illustrative Scenarios
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            Security improvements in practice
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-[var(--color-muted)]">
            As a new offering, we don&apos;t yet have completed client case
            studies to share. These illustrative scenarios show the type of
            work involved in each engagement.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            const featured = index === 0;
            return (
              <div
                key={scenario.title}
                className={`flex flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] p-7 ${
                  featured ? "md:col-span-2 md:flex-row md:items-start md:gap-8 md:p-9" : ""
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" weight="regular" />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <h3
                    className={`font-bold text-[var(--color-text)] ${featured ? "text-xl" : "text-lg"}`}
                  >
                    {scenario.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {scenario.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {scenario.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-[var(--color-accent-soft)]/60 px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                  <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)]">
                    <Info className="h-3.5 w-3.5" />
                    Illustrative example, not a completed engagement
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
