"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "waiting" | "go" | "result";

const TOTAL_TRIALS = 15;
const COLORS = [
  { name: "red", hex: "#ef4444", key: "d" },
  { name: "green", hex: "#22c55e", key: "f" },
  { name: "blue", hex: "#3b82f6", key: "j" },
  { name: "yellow", hex: "#eab308", key: "k" },
];

export function ChoiceReactionTimeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [target, setTarget] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [correct, setCorrect] = useState(0);
  const trialStartRef = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const nextTrial = (index: number) => {
    setPhase("waiting");
    const delay = 800 + Math.random() * 1400;
    timeoutRef.current = window.setTimeout(() => {
      setTarget(Math.floor(Math.random() * COLORS.length));
      trialStartRef.current = performance.now();
      setPhase("go");
    }, delay);
    setTrialIndex(index);
  };

  const start = () => {
    setRts([]);
    setCorrect(0);
    nextTrial(0);
  };

  const respond = (colorIndex: number) => {
    if (phase !== "go") return;
    const rt = performance.now() - trialStartRef.current;
    if (colorIndex === target) {
      setCorrect((c) => c + 1);
      setRts((r) => [...r, rt]);
    }
    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    nextTrial(next);
  };

  useEffect(() => {
    if (phase !== "go") return;
    const handler = (e: KeyboardEvent) => {
      const idx = COLORS.findIndex((c) => c.key === e.key.toLowerCase());
      if (idx !== -1) respond(idx);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, target, trialIndex]);

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;
  const accuracy = Math.round((correct / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="choice-reaction-time-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average reaction time"
          headline="Choice Reaction Result"
          extraStats={[{ label: "Accuracy", value: `${accuracy}%` }, { label: "Trials", value: `${TOTAL_TRIALS}` }]}
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
            A colored circle will appear. Click the matching color button (or press D / F / J / K) as fast as you
            can, across {TOTAL_TRIALS} rounds.
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
        <div className="flex h-32 w-32 items-center justify-center rounded-full border border-border">
          {phase === "go" && (
            <div className="h-24 w-24 rounded-full" style={{ backgroundColor: COLORS[target].hex }} />
          )}
        </div>
        <div className="flex gap-3">
          {COLORS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => respond(i)}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border text-xs font-bold uppercase text-white"
              style={{ backgroundColor: c.hex }}
            >
              {c.key}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
