import { ReactNode } from "react";

type Tone = "primary" | "accent" | "gold";

const toneClasses: Record<Tone, string> = {
  primary: "border-primary/25 bg-primary/10",
  accent: "border-accent/25 bg-accent/10",
  gold: "border-gold/25 bg-gold/10",
};

const toneText: Record<Tone, string> = {
  primary: "text-primary",
  accent: "text-accent",
  gold: "text-gold",
};

export function Callout({
  icon,
  title,
  tone = "primary",
  children,
}: {
  icon: string;
  title: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-2xl border p-5 ${toneClasses[tone]}`}>
      <p className={`flex items-center gap-2 text-sm font-semibold ${toneText[tone]}`}>
        <span className="text-base">{icon}</span> {title}
      </p>
      <div className="mt-2 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}
