"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 5;
const GRID_SIZE = 16;
const PALETTE = ["#ef4444", "#3b82f6", "#22c55e", "#eab308", "#a855f7", "#06b6d4", "#f97316"];

interface Trial {
  colors: string[];
  changeIndex: number;
  newColor: string;
}

function generateTrial(): Trial {
  const colors = Array.from({ length: GRID_SIZE }, () => PALETTE[Math.floor(Math.random() * PALETTE.length)]);
  const changeIndex = Math.floor(Math.random() * GRID_SIZE);
  let newColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  while (newColor === colors[changeIndex]) {
    newColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  }
  return { colors, changeIndex, newColor };
}

function now(): number {
  return performance.now();
}

export function ChangeBlindnessTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [showFirst, setShowFirst] = useState(true);
  const [blank, setBlank] = useState(false);
  const [rts, setRts] = useState<number[]>([]);
  const [hits, setHits] = useState(0);
  const trialStartRef = useRef(0);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const runFlicker = () => {
    window.clearInterval(intervalRef.current);
    let state: "a" | "blank1" | "b" | "blank2" = "a";
    setShowFirst(true);
    setBlank(false);
    trialStartRef.current = now();
    intervalRef.current = window.setInterval(() => {
      if (state === "a") {
        state = "blank1";
        setBlank(true);
      } else if (state === "blank1") {
        state = "b";
        setBlank(false);
        setShowFirst(false);
      } else if (state === "b") {
        state = "blank2";
        setBlank(true);
      } else {
        state = "a";
        setBlank(false);
        setShowFirst(true);
      }
    }, 400);
  };

  const start = () => {
    setTrialIndex(0);
    setRts([]);
    setHits(0);
    setTrial(generateTrial());
    setPhase("running");
    runFlicker();
  };

  const clickCell = (index: number) => {
    if (phase !== "running") return;
    window.clearInterval(intervalRef.current);
    const rt = now() - trialStartRef.current;
    if (index === trial.changeIndex) {
      setHits((h) => h + 1);
      setRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    window.setTimeout(() => {
      if (next >= TOTAL_TRIALS) {
        setPhase("result");
        return;
      }
      setTrial(generateTrial());
      setTrialIndex(next);
      runFlicker();
    }, 400);
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;
  const accuracy = Math.round((hits / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="change-blindness-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average detection time"
          headline="Change Blindness Result"
          extraStats={[{ label: "Found", value: `${hits}/${TOTAL_TRIALS}` }, { label: "Accuracy", value: `${accuracy}%` }]}
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
            Two versions of a grid of colored squares will flicker back and forth, separated by a brief blank
            flash. One square changes color between them. Click it as soon as you spot it.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const cols = 4;

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, width: `${cols * 44}px` }}
        >
          {trial.colors.map((color, i) => {
            const isChangeCell = i === trial.changeIndex;
            const displayColor = blank ? "transparent" : isChangeCell ? (showFirst ? color : trial.newColor) : color;
            return (
              <button
                key={i}
                onClick={() => clickCell(i)}
                className="h-10 w-10 rounded-lg border border-border/40"
                style={{ backgroundColor: displayColor }}
              />
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
