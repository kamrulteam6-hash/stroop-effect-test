"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading, StatRow } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type SwatchCount = 6 | 8 | 12;
type Rounds = 1 | 3 | 5;
type Phase = "idle" | "running" | "roundResult" | "result";

interface Swatch {
  rank: number;
  color: string;
}

const GRID_CLASS: Record<SwatchCount, string> = {
  6: "grid-cols-3 sm:grid-cols-6",
  8: "grid-cols-4 sm:grid-cols-8",
  12: "grid-cols-4 sm:grid-cols-6",
};

function makeRound(count: SwatchCount): Swatch[] {
  const hue = Math.floor(Math.random() * 360);
  const sat = 55 + Math.random() * 15;
  const swatches: Swatch[] = Array.from({ length: count }).map((_, i) => {
    const lightness = 22 + (i * 55) / (count - 1);
    return { rank: i, color: `hsl(${hue} ${sat}% ${lightness}%)` };
  });
  return swatches.sort(() => Math.random() - 0.5);
}

export function ColorPerceptionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [swatchCount, setSwatchCount] = useState<SwatchCount>(8);
  const [rounds, setRounds] = useState<Rounds>(3);
  const [round, setRound] = useState(0);
  const [swatches, setSwatches] = useState<Swatch[]>([]);
  const [clickedRanks, setClickedRanks] = useState<number[]>([]);
  const [scores, setScores] = useState<number[]>([]);

  const start = () => {
    setRound(0);
    setScores([]);
    setSwatches(makeRound(swatchCount));
    setClickedRanks([]);
    setPhase("running");
  };

  const clickSwatch = (rank: number) => {
    if (clickedRanks.includes(rank)) return;
    const next = [...clickedRanks, rank];
    setClickedRanks(next);
    if (next.length === swatchCount) {
      const error = next.reduce((sum, rank2, idx) => sum + Math.abs(rank2 - idx), 0);
      setScores((s) => [...s, error]);
      setPhase("roundResult");
    }
  };

  const nextRound = () => {
    const next = round + 1;
    if (next >= rounds) {
      setPhase("result");
    } else {
      setRound(next);
      setSwatches(makeRound(swatchCount));
      setClickedRanks([]);
      setPhase("running");
    }
  };

  const totalError = scores.reduce((a, b) => a + b, 0);
  const maxRoundError = Math.max(...scores, 1);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="color-perception-test"
          direction="lower"
          value={totalError}
          unitLabel="total error"
          extraStats={[
            { label: "Rounds", value: `${rounds}` },
            { label: "Swatches", value: `${swatchCount}` },
          ]}
          shareLabel={`I scored a total error of ${totalError} on the Color Perception Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        >
          <div className="flex w-full max-w-xs flex-col gap-1.5">
            {scores.map((err, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-2">
                <span className="w-14 shrink-0">Round {i + 1}</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${Math.max(6, (err / maxRoundError) * 100)}%` }} />
                </div>
                <span className="w-8 shrink-0 text-right tabular-nums">{err}</span>
              </div>
            ))}
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Click the color swatches in order from lightest to darkest. A different hue each round.
          </p>
          <OptionsBar>
            <Segmented
              label="Swatches"
              value={swatchCount}
              onChange={setSwatchCount}
              options={[
                { value: 6, label: "6" },
                { value: 8, label: "8" },
                { value: 12, label: "12" },
              ]}
            />
            <Segmented
              label="Rounds"
              value={rounds}
              onChange={setRounds}
              options={[
                { value: 1, label: "1" },
                { value: 3, label: "3" },
                { value: 5, label: "5" },
              ]}
            />
          </OptionsBar>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "roundResult") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Round {round + 1} Done</ResultHeading>
          <StatRow stats={[{ label: "Error Score", value: `${scores[scores.length - 1]}` }]} />
          <Button onClick={nextRound}>{round + 1 >= rounds ? "See Final Results" : "Next Round"}</Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex w-full flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {round + 1} / {rounds} — click lightest to darkest ({clickedRanks.length}/{swatchCount})
        </p>
        <div className={`grid gap-3 ${GRID_CLASS[swatchCount]}`}>
          {swatches.map((s) => {
            const clickedIndex = clickedRanks.indexOf(s.rank);
            return (
              <button
                key={s.rank}
                onClick={() => clickSwatch(s.rank)}
                disabled={clickedIndex !== -1}
                className="relative h-14 w-14 rounded-xl border border-border transition-transform hover:scale-105 disabled:cursor-default disabled:opacity-40"
                style={{ background: s.color }}
              >
                {clickedIndex !== -1 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                    {clickedIndex + 1}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
