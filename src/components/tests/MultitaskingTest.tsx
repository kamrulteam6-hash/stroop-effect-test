"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "baseline" | "dualIntro" | "dual" | "sumCheck" | "result";
type Color = "blue" | "red";
const ROUNDS = 8;
const TRIAL_TIMEOUT = 2500;

function randomColor(): Color {
  return Math.random() < 0.5 ? "blue" : "red";
}

function shuffledOptionsAround(correctValue: number): number[] {
  const distractors = new Set<number>();
  while (distractors.size < 2) {
    const offset = [1, -1, 2, -2][Math.floor(Math.random() * 4)];
    if (offset !== 0) distractors.add(correctValue + offset);
  }
  const options = [correctValue, ...Array.from(distractors)];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

export function MultitaskingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trial, setTrial] = useState(0);
  const [stimulus, setStimulus] = useState<Color>(() => randomColor());
  const [secondaryNum, setSecondaryNum] = useState(0);
  const [runningSum, setRunningSum] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [baselineAvg, setBaselineAvg] = useState(0);
  const [baselineAcc, setBaselineAcc] = useState(0);
  const [dualAvg, setDualAvg] = useState(0);
  const [dualAcc, setDualAcc] = useState(0);
  const [sumOptions, setSumOptions] = useState<number[]>([]);
  const [sumCorrectValue, setSumCorrectValue] = useState(0);
  const [sumAnswerCorrect, setSumAnswerCorrect] = useState<boolean | null>(null);
  const startRef = useRef(0);
  const respondedRef = useRef(false);
  const isDual = phase === "dual";

  const finishRound = (finalTrial: number, finalCorrect: number, finalTimes: number[], finalSum: number) => {
    if (phase === "baseline") {
      const avg = finalTimes.length > 0 ? finalTimes.reduce((a, b) => a + b, 0) / finalTimes.length : TRIAL_TIMEOUT;
      setBaselineAvg(avg);
      setBaselineAcc((finalCorrect / ROUNDS) * 100);
      setTrial(0);
      setTimes([]);
      setCorrect(0);
      setPhase("dualIntro");
      return;
    }
    // dual phase complete
    const avg = finalTimes.length > 0 ? finalTimes.reduce((a, b) => a + b, 0) / finalTimes.length : TRIAL_TIMEOUT;
    setDualAvg(avg);
    setDualAcc((finalCorrect / ROUNDS) * 100);
    setSumOptions(shuffledOptionsAround(finalSum));
    setSumCorrectValue(finalSum);
    setPhase("sumCheck");
  };

  useEffect(() => {
    if (phase !== "baseline" && phase !== "dual") return;
    if (trial >= ROUNDS) return;
    respondedRef.current = false;
    startRef.current = performance.now();
    const id = setTimeout(() => {
      if (!respondedRef.current) {
        const nextTrial = trial + 1;
        if (nextTrial >= ROUNDS) {
          finishRound(nextTrial, correct, times, runningSum);
        } else {
          setTrial(nextTrial);
          setStimulus(randomColor());
          if (phase === "dual") setSecondaryNum(1 + Math.floor(Math.random() * 9));
        }
      }
    }, TRIAL_TIMEOUT);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trial, phase]);

  const start = () => {
    setTrial(0);
    setCorrect(0);
    setTimes([]);
    setStimulus(randomColor());
    setRunningSum(0);
    setSumAnswerCorrect(null);
    setPhase("baseline");
  };

  const startDualRound = () => {
    setSecondaryNum(1 + Math.floor(Math.random() * 9));
    setPhase("dual");
  };

  const answer = (picked: Color) => {
    if (respondedRef.current || (phase !== "baseline" && phase !== "dual")) return;
    respondedRef.current = true;
    const rt = performance.now() - startRef.current;
    const nextCorrect = picked === stimulus ? correct + 1 : correct;
    const nextTimes = picked === stimulus ? [...times, rt] : times;
    const nextSum = isDual ? runningSum + secondaryNum : runningSum;
    setCorrect(nextCorrect);
    setTimes(nextTimes);
    setRunningSum(nextSum);
    const nextTrial = trial + 1;
    if (nextTrial >= ROUNDS) {
      finishRound(nextTrial, nextCorrect, nextTimes, nextSum);
    } else {
      setTrial(nextTrial);
      setStimulus(randomColor());
      if (isDual) setSecondaryNum(1 + Math.floor(Math.random() * 9));
    }
  };

  const pickSum = (value: number) => {
    setSumAnswerCorrect(value === sumCorrectValue);
    setPhase("result");
  };

  if (phase === "result") {
    const costPct = baselineAvg > 0 ? Math.round(((dualAvg - baselineAvg) / baselineAvg) * 100) : 0;
    const composite = Math.max(0, Math.min(100, Math.round(100 - costPct - (sumAnswerCorrect ? 0 : 15))));
    return (
      <TestFrame>
        <ResultScreen
          slug="multitasking-test"
          direction="higher"
          value={composite}
          unitLabel="Multitasking Score"
          extraStats={[
            { label: "Baseline RT", value: `${Math.round(baselineAvg)} ms` },
            { label: "Baseline Accuracy", value: `${Math.round(baselineAcc)}%` },
            { label: "Dual-Task RT", value: `${Math.round(dualAvg)} ms` },
            { label: "Dual Accuracy", value: `${Math.round(dualAcc)}%` },
            { label: "Slowdown", value: `+${Math.max(0, costPct)}%` },
            { label: "Secondary Recall", value: sumAnswerCorrect ? "Correct" : "Missed" },
          ]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "sumCheck") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted">While doing the color task, small numbers appeared in the corner.</p>
          <p className="text-sm font-semibold text-foreground">What was their total sum?</p>
          <div className="grid grid-cols-3 gap-3">
            {sumOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => pickSum(opt)}
                className="rounded-xl border border-border bg-surface-2 px-6 py-3 text-lg font-bold text-foreground hover:border-primary"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "dualIntro") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Now the real challenge: do the same color task, but this time a small number will also appear in the
            corner each round. Keep a running mental total — you&apos;ll be asked for it at the end.
          </p>
          <Button size="lg" onClick={startDualRound}>
            Start Dual-Task Round
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            First you&apos;ll do a simple color task alone as a baseline. Then you&apos;ll repeat it while also
            tracking a secondary number — revealing how much a second task slows you down.
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
          {phase === "baseline" ? "Baseline" : "Dual-Task"} — Round {Math.min(trial + 1, ROUNDS)} / {ROUNDS}
        </p>
        <div className="relative">
          <div className={`h-32 w-32 rounded-full sm:h-40 sm:w-40 ${stimulus === "blue" ? "bg-blue-500" : "bg-red-500"}`} />
          {isDual && (
            <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-black">
              {secondaryNum}
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer("blue")}>
            Blue
          </Button>
          <Button variant="secondary" onClick={() => answer("red")}>
            Red
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
