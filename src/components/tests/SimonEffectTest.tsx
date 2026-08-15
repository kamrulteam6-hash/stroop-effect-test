"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type Color = "blue" | "red";
type Side = "left" | "right";

const TOTAL_TRIALS = 24;

interface Trial {
  color: Color;
  side: Side;
}

function generateTrial(): Trial {
  return {
    color: Math.random() < 0.5 ? "blue" : "red",
    side: Math.random() < 0.5 ? "left" : "right",
  };
}

// Blue -> Left key, Red -> Right key
function correctKeyFor(color: Color): Side {
  return color === "blue" ? "left" : "right";
}

export function SimonEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [congruentRts, setCongruentRts] = useState<number[]>([]);
  const [incongruentRts, setIncongruentRts] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const trialStartRef = useRef(0);

  const start = () => {
    setTrialIndex(0);
    setCongruentRts([]);
    setIncongruentRts([]);
    setCorrectCount(0);
    setTrial(generateTrial());
    trialStartRef.current = performance.now();
    setPhase("running");
  };

  const respond = (key: Side) => {
    if (phase !== "running") return;
    const rt = performance.now() - trialStartRef.current;
    const isCorrect = key === correctKeyFor(trial.color);
    const isCongruent = trial.side === correctKeyFor(trial.color);

    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      if (isCongruent) setCongruentRts((r) => [...r, rt]);
      else setIncongruentRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTrial(generateTrial());
    trialStartRef.current = performance.now();
  };

  useEffect(() => {
    if (phase !== "running") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") respond("left");
      if (e.key === "ArrowRight") respond("right");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, trial, trialIndex]);

  const avgCongruent = congruentRts.length
    ? Math.round(congruentRts.reduce((a, b) => a + b, 0) / congruentRts.length)
    : 0;
  const avgIncongruent = incongruentRts.length
    ? Math.round(incongruentRts.reduce((a, b) => a + b, 0) / incongruentRts.length)
    : 0;
  const simonEffect = avgIncongruent - avgCongruent;
  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="simon-effect-test"
          direction="lower"
          value={simonEffect}
          unitLabel="ms Simon effect"
          headline="Simon Effect Result"
          extraStats={[
            { label: "Congruent RT", value: `${avgCongruent} ms` },
            { label: "Incongruent RT", value: `${avgIncongruent} ms` },
            { label: "Accuracy", value: `${accuracy}%` },
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
            A square will appear on the left or right side of the screen. Respond based on its{" "}
            <strong>color</strong>, not its position: press <strong>Left</strong> for blue, <strong>Right</strong>{" "}
            for red — the side it appears on is irrelevant.
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
        <div className="relative h-40 w-full max-w-sm">
          <div
            className={`absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-lg transition-all ${
              trial.side === "left" ? "left-4" : "right-4"
            }`}
            style={{ backgroundColor: trial.color === "blue" ? "#3b82f6" : "#ef4444" }}
          />
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => respond("left")}>
            &larr; Blue
          </Button>
          <Button variant="secondary" onClick={() => respond("right")}>
            Red &rarr;
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
