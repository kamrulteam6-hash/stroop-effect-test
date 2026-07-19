"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useTestHistory, ScoreDirection } from "@/lib/useTestHistory";
import { useCountUp } from "@/lib/useCountUp";
import { estimatePercentile } from "@/lib/percentile";
import { Confetti } from "@/components/tests/shared/Confetti";
import { Sparkline } from "@/components/tests/shared/Sparkline";

export function ResultScreen({
  slug,
  direction,
  value,
  formatValue = (v) => `${Math.round(v)}`,
  unitLabel,
  headline = "Test Complete",
  extraStats = [],
  shareLabel,
  onRetry,
  onChangeOptions,
  children,
  onNewBest,
}: {
  slug: string;
  direction: ScoreDirection;
  value: number;
  formatValue?: (v: number) => string;
  unitLabel: string;
  headline?: string;
  extraStats?: { label: string; value: string }[];
  shareLabel?: string;
  onRetry: () => void;
  onChangeOptions?: () => void;
  children?: ReactNode;
  onNewBest?: () => void;
}) {
  const { history, best, isNewBest, addResult } = useTestHistory(slug, direction);
  const recorded = useRef(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);
  const animatedValue = useCountUp(value);

  useEffect(() => {
    if (recorded.current) return;
    recorded.current = true;
    const newBest = addResult(value);
    if (newBest) {
      // One-time mount effect recording this attempt — not a props/state sync.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowConfetti(true);
      onNewBest?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const percentile = estimatePercentile(slug, value);

  const copyResult = async () => {
    const text = shareLabel ?? `I scored ${formatValue(value)} ${unitLabel} on the Stroop Effect Test site!`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center gap-6 text-center">
      <Confetti fire={showConfetti} />

      {isNewBest && history.length > 1 && (
        <span className="animate-pop-in rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold">
          🏆 New Personal Best
        </span>
      )}

      <h3 className="text-2xl font-bold text-foreground sm:text-3xl">{headline}</h3>

      <div className="flex flex-col items-center">
        <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">
          {formatValue(animatedValue)}
        </span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">{unitLabel}</span>
      </div>

      {extraStats.length > 0 && (
        <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-3">
          {extraStats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {children}

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-2">
        {best !== null && (
          <span>
            Best: <span className="font-semibold text-foreground">{formatValue(best)}</span>
          </span>
        )}
        {percentile !== null && (
          <span title="Estimated against typical performance for this test, not live global data">
            Estimated: better than <span className="font-semibold text-foreground">{percentile}%</span> of attempts
          </span>
        )}
        {history.length >= 2 && (
          <span className="flex items-center gap-2">
            Recent: <Sparkline values={history} direction={direction} />
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button onClick={onRetry}>Try Again</Button>
        {onChangeOptions && (
          <Button variant="secondary" onClick={onChangeOptions}>
            Change Options
          </Button>
        )}
        <Button variant="ghost" onClick={copyResult}>
          {copied ? "Copied!" : "Copy Result"}
        </Button>
      </div>
      {history.length <= 1 && <Badge tone="muted">First attempt recorded</Badge>}
    </div>
  );
}
