import { ReactNode } from "react";

export function TestFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative flex min-h-[420px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function StatRow({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
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
