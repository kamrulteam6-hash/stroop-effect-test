export function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-2">{label}</span>
      <div className="inline-flex rounded-xl border border-border/70 bg-surface-2 p-1 shadow-[inset_0_1px_3px_rgba(15,15,35,0.06)]">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${
              value === opt.value
                ? "bg-primary text-primary-foreground shadow-[0_4px_10px_-4px_rgba(91,61,240,0.5)]"
                : "text-muted hover:bg-surface hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
