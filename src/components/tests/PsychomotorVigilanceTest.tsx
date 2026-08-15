"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "waiting" | "ready" | "too-soon" | "result";

const TOTAL_TRIALS = 10;
const MIN_DELAY_MS = 2000;
const MAX_DELAY_MS = 8000;
const LAPSE_THRESHOLD_MS = 500;

function now(): number {
  return performance.now();
}

function randomDelay(): number {
  return MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS);
}

export function PsychomotorVigilanceTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const readyAt = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const startRound = () => {
    setPhase("waiting");
    const delay = randomDelay();
    timeoutRef.current = window.setTimeout(() => {
      readyAt.current = now();
      setPhase("ready");
    }, delay);
  };

  const start = () => {
    setTimes([]);
    setTrialIndex(0);
    startRound();
  };

  const handleClick = () => {
    if (phase === "waiting") {
      window.clearTimeout(timeoutRef.current);
      setPhase("too-soon");
      return;
    }
    if (phase === "too-soon") {
      startRound();
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(now() - readyAt.current);
      const next = [...times, elapsed];
      setTimes(next);
      const nextIndex = trialIndex + 1;
      if (nextIndex >= TOTAL_TRIALS) {
        setPhase("result");
        return;
      }
      setTrialIndex(nextIndex);
      startRound();
    }
  };

  const avgRt = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const lapses = times.filter((t) => t > LAPSE_THRESHOLD_MS).length;
  const fastest = times.length ? Math.min(...times) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="psychomotor-vigilance-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average reaction time"
          headline="Vigilance Result"
          extraStats={[
            { label: "Fastest", value: `${fastest} ms` },
            { label: "Lapses (>500ms)", value: `${lapses}` },
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
            Wait for the box to turn green, then click as fast as you can. The wait time varies unpredictably
            across {TOTAL_TRIALS} rounds — clicking too early restarts that round.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const bg = phase === "ready" ? "bg-success" : phase === "too-soon" ? "bg-danger" : "bg-surface-2";
  const label = phase === "ready" ? "Click Now!" : phase === "too-soon" ? "Too Soon — Click to Retry" : "Wait for green...";

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <button
          onClick={handleClick}
          className={`flex h-56 w-full max-w-sm items-center justify-center rounded-2xl text-lg font-bold text-foreground transition-colors ${bg}`}
        >
          {label}
        </button>
      </div>
    </TestFrame>
  );
}
