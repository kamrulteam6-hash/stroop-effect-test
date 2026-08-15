"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
const TOTAL_TRIALS = 20;
const TRIAL_TIMEOUT = 2200;
const LETTERS = "BCDFGHJKLMNPQRSTVWXYZ";

function randomString(len: number): string {
  let s = "";
  for (let i = 0; i < len; i++) s += LETTERS[Math.floor(Math.random() * LETTERS.length)];
  return s;
}

function makePair(): { a: string; b: string; same: boolean } {
  const a = randomString(4);
  const same = Math.random() < 0.5;
  if (same) return { a, b: a, same: true };
  const chars = a.split("");
  const idx = Math.floor(Math.random() * chars.length);
  let replacement = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  while (replacement === chars[idx]) replacement = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  chars[idx] = replacement;
  return { a, b: chars.join(""), same: false };
}

export function ProcessingSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trial, setTrial] = useState(0);
  const [pair, setPair] = useState(() => makePair());
  const [correct, setCorrect] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startRef = useRef(0);
  const respondedRef = useRef(false);

  useEffect(() => {
    if (phase !== "running" || trial >= TOTAL_TRIALS) return;
    respondedRef.current = false;
    startRef.current = performance.now();
    const id = setTimeout(() => {
      if (!respondedRef.current) {
        const next = trial + 1;
        setTrial(next);
        setPair(makePair());
        if (next >= TOTAL_TRIALS) setPhase("result");
      }
    }, TRIAL_TIMEOUT);
    return () => clearTimeout(id);
  }, [trial, phase]);

  const start = () => {
    setTrial(0);
    setCorrect(0);
    setTimes([]);
    setPair(makePair());
    setPhase("running");
  };

  const answer = (picked: boolean) => {
    if (respondedRef.current || phase !== "running") return;
    respondedRef.current = true;
    const rt = performance.now() - startRef.current;
    if (picked === pair.same) {
      setCorrect((c) => c + 1);
      setTimes((t) => [...t, rt]);
    }
    const next = trial + 1;
    setTrial(next);
    setPair(makePair());
    if (next >= TOTAL_TRIALS) setPhase("result");
  };

  if (phase === "result") {
    const accuracy = (correct / TOTAL_TRIALS) * 100;
    const avgRT = times.length > 0 ? times.reduce((a, b) => a + b, 0) / times.length : TRIAL_TIMEOUT;
    const speedScore = Math.max(0, Math.min(100, 100 - ((avgRT - 500) / 1200) * 100));
    const composite = Math.round(accuracy * 0.5 + speedScore * 0.5);
    return (
      <TestFrame>
        <ResultScreen
          slug="processing-speed-test"
          direction="higher"
          value={composite}
          unitLabel="Processing Speed Score"
          extraStats={[
            { label: "Accuracy", value: `${Math.round(accuracy)}%` },
            { label: "Avg Response", value: `${Math.round(avgRT)} ms` },
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
            You&apos;ll see {TOTAL_TRIALS} pairs of 4-letter strings. Decide as fast as you can whether each pair is
            exactly the SAME or DIFFERENT.
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
        <div className="flex items-center gap-6 text-3xl font-black tracking-widest text-foreground sm:text-4xl">
          <span>{pair.a}</span>
          <span className="text-muted-2">vs</span>
          <span>{pair.b}</span>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            Same
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            Different
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
