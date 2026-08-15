"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const REWARD = 500;
const HORIZONS = [
  { label: "1 week", days: 7 },
  { label: "1 month", days: 30 },
  { label: "6 months", days: 180 },
  { label: "1 year", days: 365 },
  { label: "5 years", days: 1825 },
];

const STEP = 10;

export function TemporalDiscountingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState(REWARD);
  const [results, setResults] = useState<{ label: string; days: number; minAccepted: number }[]>([]);

  const start = () => {
    setIndex(0);
    setAmount(Math.round(REWARD * 0.6));
    setResults([]);
    setPhase("running");
  };

  const decrease = () => setAmount((a) => Math.max(STEP, a - STEP));
  const increase = () => setAmount((a) => Math.min(REWARD, a + STEP));

  const confirm = () => {
    const h = HORIZONS[index];
    const next = [...results, { label: h.label, days: h.days, minAccepted: amount }];
    setResults(next);

    const nextIndex = index + 1;
    if (nextIndex >= HORIZONS.length) {
      setPhase("result");
      return;
    }
    setIndex(nextIndex);
    setAmount(Math.round(REWARD * 0.6));
  };

  const avgDiscount = results.length
    ? Math.round(100 - (results.reduce((sum, r) => sum + r.minAccepted, 0) / results.length / REWARD) * 100)
    : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="temporal-discounting-test"
          direction="lower"
          value={avgDiscount}
          unitLabel="% average discount across horizons"
          headline="Temporal Discounting Result"
          extraStats={results.map((r) => ({ label: r.label, value: `$${r.minAccepted}` }))}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            For {HORIZONS.length} different time horizons, find the smallest amount you&apos;d accept right now
            instead of waiting for the full ${REWARD}. This maps your personal discounting curve across time.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const h = HORIZONS[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Horizon {index + 1} / {HORIZONS.length}
        </p>
        <p className="max-w-sm text-center text-sm text-muted">
          Instead of waiting <strong className="text-foreground">{h.label}</strong> for ${REWARD}, what&apos;s the
          smallest amount you&apos;d accept <strong className="text-foreground">today</strong>?
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={decrease}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-2 text-lg font-bold text-foreground transition-colors hover:border-primary/40"
          >
            −
          </button>
          <span className="w-24 text-center text-3xl font-black text-primary">${amount}</span>
          <button
            onClick={increase}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-2 text-lg font-bold text-foreground transition-colors hover:border-primary/40"
          >
            +
          </button>
        </div>
        <Button size="lg" onClick={confirm}>
          Confirm Minimum
        </Button>
      </div>
    </TestFrame>
  );
}
