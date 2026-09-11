import { ReactNode } from "react";

export function TestFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  // Tailwind resolves two classes on the same property by stylesheet order, not by where they
  // appear in the className string — so a caller passing e.g. "bg-success" to flash the frame
  // green could silently lose to this component's own default background. Only apply the
  // default when the caller hasn't specified one of their own.
  const hasCustomBg = /\bbg-/.test(className);
  return (
    <div
      className={`relative flex min-h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/70 ${hasCustomBg ? "" : "bg-surface"} p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_24px_48px_-28px_rgba(15,15,35,0.28),0_8px_20px_-14px_rgba(15,15,35,0.14)] sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-border/70 bg-surface-2 px-3 py-3 text-center shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="text-2xl font-bold text-primary">{s.value}</div>
          <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ResultHeading({ children }: { children: ReactNode }) {
  return <h3 className="animate-pop-in text-2xl font-bold text-foreground sm:text-3xl">{children}</h3>;
}
