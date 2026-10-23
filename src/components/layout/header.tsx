"use client";

import { useEffect, useState } from "react";
import { List, X, MagnifyingGlass, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { navLinks } from "@/data/navigation";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--color-border)] bg-white/90 shadow-[var(--shadow-diffuse)] backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text)]/75 transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <MagnifyingGlass className="h-[18px] w-[18px]" />
          </button>
          <Magnetic strength={0.2}>
            <Button
              size="sm"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Security Check
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Magnetic>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-18 z-30 h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              size="lg"
              onClick={() => {
                setOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Security Check
            </Button>
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
