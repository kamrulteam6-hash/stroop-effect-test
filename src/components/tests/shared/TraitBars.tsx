export interface TraitScore {
  key: string;
  label: string;
  value: number;
  description: string;
}

export function TraitBars({ traits }: { traits: TraitScore[] }) {
  return (
    <div className="flex w-full max-w-lg flex-col gap-5 text-left">
      {traits.map((t) => (
        <div key={t.key}>
          <div className="mb-1.5 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-foreground">{t.label}</span>
            <span className="text-sm font-bold tabular-nums text-primary">{Math.round(t.value)}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, t.value))}%` }}
            />
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-2">{t.description}</p>
        </div>
      ))}
    </div>
  );
}
