"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

interface Gamble {
  gainAmount: number;
  loseAmount: number;
  sureAmount: number;
}

const GAMBLES: Gamble[] = [
  { gainAmount: 200, loseAmount: 100, sureAmount: 40 },
  { gainAmount: 150, loseAmount: 100, sureAmount: 15 },
  { gainAmount: 300, loseAmount: 100, sureAmount: 90 },
  { gainAmount: 100, loseAmount: 100, sureAmount: 0 },
  { gainAmount: 250, loseAmount: 100, sureAmount: 60 },
  { gainAmount: 180, loseAmount: 100, sureAmount: 30 },
];

export function LossAversionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [gambleChoices, setGambleChoices] = useState(0);
  const [safeChoices, setSafeChoices] = useState(0);
  const [ratios, setRatios] = useState<number[]>([]);

  const start = () => {
    setIndex(0);
    setGambleChoices(0);
    setSafeChoices(0);
    setRatios([]);
    setPhase("running");
  };

  const choose = (tookGamble: boolean) => {
    const g = GAMBLES[index];
    if (tookGamble) {
      setGambleChoices((c) => c + 1);
      setRatios((r) => [...r, g.gainAmount / g.loseAmount]);
    } else {
      setSafeChoices((c) => c + 1);
    }

    const next = index + 1;
    if (next >= GAMBLES.length) {
      setPhase("result");
      return;
    }
    setIndex(next);
  };

  const avgRatio = ratios.length ? ratios.reduce((a, b) => a + b, 0) / ratios.length : GAMBLES.reduce((a, g) => a + g.gainAmount / g.loseAmount, 0) / GAMBLES.length;
  const lossAversionCoefficient = Math.round(avgRatio * 10) / 10;
  const riskTakingScore = Math.round((gambleChoices / GAMBLES.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="loss-aversion-test"
          direction="higher"
          value={riskTakingScore}
          unitLabel="% chose the coin-flip gamble"
          headline="Loss Aversion Result"
          extraStats={[
            { label: "Took Gamble", value: `${gambleChoices}/${GAMBLES.length}` },
            { label: "Took Sure Thing", value: `${safeChoices}/${GAMBLES.length}` },
            { label: "Min. Gain/Loss Ratio Accepted", value: ratios.length ? `${lossAversionCoefficient}x` : "n/a" },
          ]}
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
            For each of {GAMBLES.length} rounds, choose between a 50/50 coin-flip gamble (win big or lose some) and
            a smaller guaranteed amount. Your choices reveal how strongly losses loom larger than equivalent gains
            for you.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const g = GAMBLES[index];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {index + 1} / {GAMBLES.length}
        </p>
        <p className="text-sm text-muted">Which would you prefer?</p>
        <div className="flex gap-4">
          <button
            onClick={() => choose(true)}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-6 py-5 transition-colors hover:border-primary/40"
          >
            <span className="text-sm font-bold text-foreground">Coin Flip</span>
            <span className="text-xs text-success">Win ${g.gainAmount}</span>
            <span className="text-xs text-danger">or Lose ${g.loseAmount}</span>
          </button>
          <button
            onClick={() => choose(false)}
            className="flex flex-col items-center gap-1 rounded-xl border border-border bg-surface-2 px-6 py-5 transition-colors hover:border-primary/40"
          >
            <span className="text-sm font-bold text-foreground">Sure Thing</span>
            <span className="text-xs text-muted-2">Guaranteed ${g.sureAmount}</span>
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
