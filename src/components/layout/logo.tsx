import { ShieldPlus } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <a href="#home" className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white">
        <ShieldPlus weight="bold" className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base font-bold tracking-tight",
            onDark ? "text-white" : "text-[var(--color-text)]"
          )}
        >
          PHPsec<span className="text-[var(--color-accent)]">Pro</span>
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.14em]",
            onDark ? "text-white/60" : "text-[var(--color-muted)]"
          )}
        >
          Secure · Clean · Protect
        </span>
      </span>
    </a>
  );
}
