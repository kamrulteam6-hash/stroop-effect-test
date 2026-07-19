import { ReactNode } from "react";

type BadgeTone = "primary" | "accent" | "gold" | "muted" | "danger" | "success";

const toneClasses: Record<BadgeTone, string> = {
  primary: "bg-primary/10 text-primary border-primary/25",
  accent: "bg-accent/10 text-accent border-accent/25",
  gold: "bg-gold/10 text-gold border-gold/30",
  muted: "bg-surface-2 text-muted border-border",
  danger: "bg-danger/10 text-danger border-danger/25",
  success: "bg-success/10 text-success border-success/25",
};

export function Badge({
  children,
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
