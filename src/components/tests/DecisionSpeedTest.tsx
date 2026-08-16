"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
const TRIALS_PER_SET = 6;
const SET_SIZES = [2, 3, 4] as const;
const TRIAL_TIMEOUT = 2500;

function now(): number {
  return performance.now();
}

function makeOptions(count: number): { options: number[]; correctIndex: number } {
  const options: number[] = [];
  while (options.length < count) {
    const n = 1 + Math.floor(Math.random() * 99);
    if (!options.includes(n)) options.push(n);
  }
  let correctIndex = 0;
  for (let i = 1; i < options.length; i++) if (options[i] > options[correctIndex]) correctIndex = i;
  return { options, correctIndex };
}

export function DecisionSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [setIndex, setSetIndex] = useState(0);
  const [trial, setTrial] = useState(0);
  const [round, setRound] = useState(() => makeOptions(SET_SIZES[0]));
  const [correct, setCorrect] = useState(0);
  const [timesBySet, setTimesBySet] = useState<Record<number, number[]>>({ 2: [], 3: [], 4: [] });
  const startRef = useRef(0);
  const respondedRef = useRef(false);

  const totalTrials = SET_SIZES.length * TRIALS_PER_SET;
  const overallTrial = setIndex * TRIALS_PER_SET + trial;

  const advance = (wasCorrect: boolean, rt: number) => {
    const size = SET_SIZES[setIndex];
    if (wasCorrect) {
      setCorrect((c) => c + 1);
      setTimesBySet((t) => ({ ...t, [size]: [...t[size], rt] }));
    }
    if (trial + 1 >= TRIALS_PER_SET) {
      if (setIndex + 1 >= SET_SIZES.length) {
        setPhase("result");
      } else {
        setSetIndex(setIndex + 1);
        setTrial(0);
        setRound(makeOptions(SET_SIZES[setIndex + 1]));
      }
    } else {
      setTrial(trial + 1);
      setRound(makeOptions(size));
    }
  };

  useEffect(() => {
    if (phase !== "running") return;
    respondedRef.current = false;
    startRef.current = now();
    const id = setTimeout(() => {
      if (!respondedRef.current) advance(false, TRIAL_TIMEOUT);
    }, TRIAL_TIMEOUT);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIndex, trial, phase]);

  const start = () => {
    setSetIndex(0);
    setTrial(0);
    setRound(makeOptions(SET_SIZES[0]));
    setCorrect(0);
    setTimesBySet({ 2: [], 3: [], 4: [] });
    setPhase("running");
  };

  const pick = (i: number) => {
    if (respondedRef.current || phase !== "running") return;
    respondedRef.current = true;
    const rt = now() - startRef.current;
    advance(i === round.correctIndex, rt);
  };

  if (phase === "result") {
    const accuracy = (correct / totalTrials) * 100;
    const avgFor = (size: number) => {
      const arr = timesBySet[size];
      return arr.length > 0 ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
    };
    const overallAvg =
      Object.values(timesBySet).flat().length > 0
        ? Math.round(Object.values(timesBySet).flat().reduce((a, b) => a + b, 0) / Object.values(timesBySet).flat().length)
        : TRIAL_TIMEOUT;
    const speedScore = Math.max(0, Math.min(100, 100 - ((overallAvg - 400) / 1200) * 100));
    const composite = Math.round(accuracy * 0.5 + speedScore * 0.5);

    return (
      <TestFrame>
        <ResultScreen
          slug="decision-speed-test"
          direction="higher"
          value={composite}
          unitLabel="Decision Speed Score"
          extraStats={[
            { label: "Accuracy", value: `${Math.round(accuracy)}%` },
            { label: "2 Options", value: avgFor(2) ? `${avgFor(2)} ms` : "—" },
            { label: "3 Options", value: avgFor(3) ? `${avgFor(3)} ms` : "—" },
            { label: "4 Options", value: avgFor(4) ? `${avgFor(4)} ms` : "—" },
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
          <span className="text-4xl">⚡</span>
          <p className="max-w-sm text-sm text-muted">
            Click the largest number as fast as you can. The number of choices increases from 2 to 3 to 4 as you go
            — this reveals how your decision speed changes as choices multiply.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-8">
        <p className="text-xs font-medium text-muted-2">
          {SET_SIZES[setIndex]} Options — Trial {overallTrial + 1} / {totalTrials}
        </p>
        <p className="text-sm text-muted">Click the largest number</p>
        <div className="flex flex-wrap justify-center gap-3">
          {round.options.map((n, i) => (
            <button
              key={i}
              onClick={() => pick(i)}
              className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-surface-2 text-2xl font-bold text-foreground hover:border-primary"
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
