"use client";

import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Cursor-tracked spotlight border. Position is written straight to CSS
 * custom properties on the element via the ref — no React state, no
 * re-renders — so the pointermove handler stays cheap enough for 60fps
 * even with many cards on screen at once.
 */
export function SpotlightCard({
  children,
  className,
  tint = "accent",
}: {
  children: ReactNode;
  className?: string;
  tint?: "accent" | "danger";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  const glow =
    tint === "danger" ? "rgba(210,59,59,0.16)" : "rgba(47,111,237,0.16)";

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spotlight relative isolate overflow-hidden", className)}
      style={{ "--spotlight-x": "50%", "--spotlight-y": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(360px circle at var(--spotlight-x) var(--spotlight-y), ${glow}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
