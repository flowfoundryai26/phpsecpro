import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export function LegalPageShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white py-20">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tighter text-[var(--color-text)] md:text-5xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-muted)]">Last updated: {updated}</p>
          <div className="prose-legal mt-10 flex flex-col gap-6 text-sm leading-relaxed text-[var(--color-text)]/85 [&_h2]:mt-4 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-[var(--color-text)] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
