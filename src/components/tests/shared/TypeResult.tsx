interface BreakdownItem {
  key: string;
  label: string;
  value: number;
}

export function TypeResult({
  icon,
  typeName,
  typeSubtitle,
  description,
  breakdown,
}: {
  icon?: string;
  typeName: string;
  typeSubtitle?: string;
  description: string;
  breakdown?: BreakdownItem[];
}) {
  const maxValue = breakdown ? Math.max(...breakdown.map((b) => b.value), 1) : 1;

  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-3">
        {icon && (
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/5 text-4xl shadow-lg shadow-primary/15">
            {icon}
          </span>
        )}
        <span className="text-3xl font-black text-primary drop-shadow-[0_4px_16px_rgba(91,61,240,0.2)] sm:text-4xl">
          {typeName}
        </span>
        {typeSubtitle && <span className="text-sm font-semibold uppercase tracking-wide text-muted-2">{typeSubtitle}</span>}
      </div>

      <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>

      {breakdown && breakdown.length > 0 && (
        <div className="flex w-full max-w-md flex-col gap-3 text-left">
          {breakdown.map((b) => (
            <div key={b.key}>
              <div className="mb-1 flex items-baseline justify-between text-xs">
                <span className="font-semibold text-foreground">{b.label}</span>
                <span className="font-bold tabular-nums text-muted-2">{Math.round(b.value)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2 shadow-[inset_0_1px_3px_rgba(15,15,35,0.08)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-[width] duration-700 ease-out"
                  style={{ width: `${(Math.max(0, b.value) / maxValue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
