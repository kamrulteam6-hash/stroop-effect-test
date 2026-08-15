"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type Color = "blue" | "red";
const TOTAL_TRIALS = 24;
const TRIAL_TIMEOUT = 1500;

function randomColor(): Color {
  return Math.random() < 0.5 ? "blue" : "red";
}

function stdev(values: number[]): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

export function FocusTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trial, setTrial] = useState(0);
  const [stimulus, setStimulus] = useState<Color>(() => randomColor());
  const [correct, setCorrect] = useState(0);
  const [misses, setMisses] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startRef = useRef(0);
  const respondedRef = useRef(false);

  useEffect(() => {
    if (phase !== "running" || trial >= TOTAL_TRIALS) return;
    respondedRef.current = false;
    startRef.current = performance.now();
    const id = setTimeout(() => {
      if (!respondedRef.current) {
        setMisses((m) => m + 1);
        const next = trial + 1;
        setTrial(next);
        setStimulus(randomColor());
        if (next >= TOTAL_TRIALS) setPhase("result");
      }
    }, TRIAL_TIMEOUT);
    return () => clearTimeout(id);
  }, [trial, phase]);

  const start = () => {
    setTrial(0);
    setCorrect(0);
    setMisses(0);
    setTimes([]);
    setStimulus(randomColor());
    setPhase("running");
  };

  const answer = (picked: Color) => {
    if (respondedRef.current || phase !== "running") return;
    respondedRef.current = true;
    const rt = performance.now() - startRef.current;
    if (picked === stimulus) {
      setCorrect((c) => c + 1);
      setTimes((t) => [...t, rt]);
    }
    const next = trial + 1;
    setTrial(next);
    setStimulus(randomColor());
    if (next >= TOTAL_TRIALS) setPhase("result");
  };

  if (phase === "result") {
    const accuracy = (correct / TOTAL_TRIALS) * 100;
    const sd = stdev(times);
    const consistency = Math.max(0, Math.min(100, 100 - (sd / 4)));
    const focusScore = Math.round(accuracy * 0.6 + consistency * 0.4);
    return (
      <TestFrame>
        <ResultScreen
          slug="focus-test"
          direction="higher"
          value={focusScore}
          unitLabel="Focus Score"
          extraStats={[
            { label: "Accuracy", value: `${Math.round(accuracy)}%` },
            { label: "Consistency", value: `${Math.round(consistency)}%` },
            { label: "Misses", value: `${misses}` },
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
            A blue or red circle will appear {TOTAL_TRIALS} times. Click the matching button as quickly and
            consistently as you can — your score rewards steady focus, not just raw speed.
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
          Trial {Math.min(trial + 1, TOTAL_TRIALS)} / {TOTAL_TRIALS}
        </p>
        <div
          className={`h-32 w-32 rounded-full sm:h-40 sm:w-40 ${stimulus === "blue" ? "bg-blue-500" : "bg-red-500"}`}
        />
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
