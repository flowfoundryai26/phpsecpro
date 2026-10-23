import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        light: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
        onDark: "bg-white/10 text-white border border-white/15",
        danger: "bg-[var(--color-danger-soft)] text-[var(--color-danger)]",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
