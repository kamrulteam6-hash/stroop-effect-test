"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 8;
const SET_SIZES = [8, 16, 24, 32];

interface Trial {
  setSize: number;
  targetIndex: number;
}

function generateTrial(): Trial {
  const setSize = SET_SIZES[Math.floor(Math.random() * SET_SIZES.length)];
  const targetIndex = Math.floor(Math.random() * setSize);
  return { setSize, targetIndex };
}

function now(): number {
  return performance.now();
}

export function VisualSearchTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setRts([]);
    setTrial(generateTrial());
    setTrialStart(now());
    setPhase("running");
  };

  const clickCell = (index: number) => {
    if (phase !== "running") return;
    if (index !== trial.targetIndex) return;
    const rt = now() - trialStart;
    setRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTrial(generateTrial());
    setTrialStart(now());
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="visual-search-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average search time"
          headline="Visual Search Result"
          extraStats={[{ label: "Rounds", value: `${TOTAL_TRIALS}` }]}
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
            Find the <strong className="text-danger">red circle</strong> among the blue circles and click it as
            fast as you can. The number of distractors changes each round.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const cols = Math.ceil(Math.sqrt(trial.setSize));

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: `${cols * 40}px` }}
        >
          {Array.from({ length: trial.setSize }).map((_, i) => (
            <button
              key={i}
              onClick={() => clickCell(i)}
              className="h-7 w-7 rounded-full transition-transform hover:scale-110"
              style={{ backgroundColor: i === trial.targetIndex ? "#ef4444" : "#3b82f6" }}
              aria-label={i === trial.targetIndex ? "target" : "distractor"}
            />
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
