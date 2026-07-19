export function Sparkline({ values, direction }: { values: number[]; direction: "higher" | "lower" }) {
  if (values.length < 2) return null;

  const width = 160;
  const height = 40;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  });

  const best = direction === "higher" ? max : min;
  const bestIndex = values.indexOf(best);
  const bestX = (bestIndex / (values.length - 1)) * width;
  const bestY = height - ((best - min) / range) * height;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-10 w-40 overflow-visible">
      <polyline points={points.join(" ")} fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity={0.7} />
      <circle cx={bestX} cy={bestY} r="3" fill="var(--color-accent)" />
    </svg>
  );
}
