"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "showing" | "blank" | "input" | "feedback" | "result";

const TOTAL_ROUNDS = 8;
const BOX_W = 280;
const BOX_H = 200;

interface Point {
  x: number;
  y: number;
}

function randomPoint(): Point {
  return { x: 8 + Math.random() * 84, y: 8 + Math.random() * 84 };
}

export function SpatialMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(1);
  const [target, setTarget] = useState<Point>({ x: 50, y: 50 });
  const [guess, setGuess] = useState<Point | null>(null);
  const [scores, setScores] = useState<number[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  const startRound = (r: number) => {
    setTarget(randomPoint());
    setGuess(null);
    setRound(r);
    setPhase("showing");
  };

  const start = () => {
    setScores([]);
    startRound(1);
  };

  useEffect(() => {
    if (phase === "showing") {
      const t = window.setTimeout(() => setPhase("blank"), 1400);
      return () => window.clearTimeout(t);
    }
    if (phase === "blank") {
      const t = window.setTimeout(() => setPhase("input"), 900);
      return () => window.clearTimeout(t);
    }
  }, [phase]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (phase !== "input" || !boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const clicked = { x, y };
    setGuess(clicked);
    const dx = clicked.x - target.x;
    const dy = clicked.y - target.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.sqrt(100 * 100 + 100 * 100);
    const accuracy = Math.max(0, 100 - (distance / maxDistance) * 220);
    const nextScores = [...scores, Math.round(accuracy)];
    setScores(nextScores);
    setPhase("feedback");
    window.setTimeout(() => {
      if (round >= TOTAL_ROUNDS) {
        setPhase("result");
      } else {
        startRound(round + 1);
      }
    }, 1300);
  };

  const avgScore =
    scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="spatial-memory-test"
          direction="higher"
          value={avgScore}
          unitLabel="% accuracy"
          extraStats={[
            { label: "Rounds", value: `${TOTAL_ROUNDS}` },
            { label: "Best Round", value: `${Math.max(...scores)}%` },
          ]}
          shareLabel={`I scored ${avgScore}% on the Spatial Memory Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            A dot will flash briefly inside the box. After a short pause, click exactly where you remember it
            appearing. Across 8 rounds, your accuracy is scored by how close your clicks land.
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
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full items-center justify-between text-xs font-medium text-muted-2" style={{ width: BOX_W }}>
          <span>
            Round {round} / {TOTAL_ROUNDS}
          </span>
          <span>{phase === "showing" ? "Memorize" : phase === "blank" ? "Wait…" : phase === "input" ? "Click the spot" : "Result"}</span>
        </div>
        <div
          ref={boxRef}
          onClick={handleClick}
          className="relative overflow-hidden rounded-xl border border-border bg-surface-2"
          style={{ width: BOX_W, height: BOX_H, cursor: phase === "input" ? "crosshair" : "default" }}
        >
          {phase === "showing" && (
            <div
              className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{ left: `${target.x}%`, top: `${target.y}%` }}
            />
          )}
          {phase === "feedback" && (
            <>
              <div
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success"
                style={{ left: `${target.x}%`, top: `${target.y}%` }}
              />
              {guess && (
                <div
                  className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-danger bg-transparent"
                  style={{ left: `${guess.x}%`, top: `${guess.y}%` }}
                />
              )}
            </>
          )}
        </div>
        {phase === "feedback" && scores.length > 0 && (
          <p className="text-sm font-semibold text-foreground">
            Round accuracy: {scores[scores.length - 1]}%
          </p>
        )}
      </div>
    </TestFrame>
  );
}
