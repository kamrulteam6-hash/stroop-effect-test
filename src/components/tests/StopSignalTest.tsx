"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "waiting" | "go" | "feedback" | "result";

const TOTAL_TRIALS = 20;
const STOP_SIGNAL_DELAY_MS = 250;
const RESPONSE_WINDOW_MS = 1000;

function randomDirection(): "left" | "right" {
  return Math.random() < 0.5 ? "left" : "right";
}

function randomBool(probability: number): boolean {
  return Math.random() < probability;
}

function now(): number {
  return performance.now();
}

export function StopSignalTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isStopTrial, setIsStopTrial] = useState(false);
  const [showStop, setShowStop] = useState(false);
  const [goRts, setGoRts] = useState<number[]>([]);
  const [goCorrect, setGoCorrect] = useState(0);
  const [goTotal, setGoTotal] = useState(0);
  const [stopSuccesses, setStopSuccesses] = useState(0);
  const [stopTotal, setStopTotal] = useState(0);

  const trialStartRef = useRef(0);
  const respondedRef = useRef(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearTimers = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  useEffect(() => () => clearTimers(), []);

  const runTrial = (index: number) => {
    const dir: "left" | "right" = randomDirection();
    const stopTrial = randomBool(0.3);
    setDirection(dir);
    setIsStopTrial(stopTrial);
    setShowStop(false);
    respondedRef.current = false;
    setPhase("go");
    trialStartRef.current = now();

    if (stopTrial) {
      const id = window.setTimeout(() => {
        setShowStop(true);
      }, STOP_SIGNAL_DELAY_MS);
      timeoutsRef.current.push(id);
    }

    const endId = window.setTimeout(() => {
      finishTrial(index, stopTrial, null);
    }, RESPONSE_WINDOW_MS);
    timeoutsRef.current.push(endId);
  };

  const finishTrial = (index: number, stopTrial: boolean, rt: number | null) => {
    if (respondedRef.current && rt === null) return;
    respondedRef.current = true;
    clearTimers();

    if (stopTrial) {
      setStopTotal((t) => t + 1);
      if (rt === null) setStopSuccesses((s) => s + 1);
    } else {
      setGoTotal((t) => t + 1);
      if (rt !== null) {
        setGoCorrect((c) => c + 1);
        setGoRts((r) => [...r, rt]);
      }
    }

    const next = index + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    const id = window.setTimeout(() => {
      setTrialIndex(next);
      runTrial(next);
    }, 500);
    timeoutsRef.current.push(id);
  };

  const start = () => {
    setTrialIndex(0);
    setGoRts([]);
    setGoCorrect(0);
    setGoTotal(0);
    setStopSuccesses(0);
    setStopTotal(0);
    runTrial(0);
  };

  const respond = (key: "left" | "right") => {
    if (phase !== "go" || respondedRef.current) return;
    const rt = now() - trialStartRef.current;
    if (isStopTrial) {
      finishTrial(trialIndex, true, rt);
    } else if (key === direction) {
      finishTrial(trialIndex, false, rt);
    } else {
      finishTrial(trialIndex, false, rt);
    }
  };

  useEffect(() => {
    if (phase !== "go") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") respond("left");
      if (e.key === "ArrowRight") respond("right");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, direction, isStopTrial, trialIndex]);

  const stopAccuracy = stopTotal ? Math.round((stopSuccesses / stopTotal) * 100) : 0;
  const goAccuracy = goTotal ? Math.round((goCorrect / goTotal) * 100) : 0;
  const avgGoRt = goRts.length ? Math.round(goRts.reduce((a, b) => a + b, 0) / goRts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="stop-signal-test"
          direction="higher"
          value={stopAccuracy}
          unitLabel="% successful stops"
          headline="Stop Signal Result"
          extraStats={[
            { label: "Go Accuracy", value: `${goAccuracy}%` },
            { label: "Avg. Go RT", value: `${avgGoRt} ms` },
            { label: "Stop Trials", value: `${stopTotal}` },
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
            Press the arrow key matching the direction shown, as fast as you can. On some rounds a{" "}
            <strong className="text-danger">red ring</strong> will appear shortly after — when it does, try to
            withhold your response entirely.
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
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div
          className={`flex h-32 w-32 items-center justify-center rounded-full border-4 text-5xl ${
            showStop ? "border-danger" : "border-transparent"
          }`}
        >
          {direction === "left" ? "←" : "→"}
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => respond("left")}>
            &larr; Left
          </Button>
          <Button variant="secondary" onClick={() => respond("right")}>
            Right &rarr;
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
