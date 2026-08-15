"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 10;

function now(): number {
  return performance.now();
}

function coinFlip(): boolean {
  return Math.random() < 0.5;
}

function randomRotation(): number {
  return Math.floor(Math.random() * 360);
}

function PacMan({ cx, cy, rotation }: { cx: number; cy: number; rotation: number }) {
  const r = 20;
  return (
    <path
      d={`M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx + r * Math.cos((300 * Math.PI) / 180)} ${
        cy + r * Math.sin((300 * Math.PI) / 180)
      } Z`}
      fill="var(--foreground, #0f172a)"
      transform={`rotate(${rotation} ${cx} ${cy})`}
    />
  );
}

export function KanizsaTriangleTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [showsTriangle, setShowsTriangle] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const runTrial = () => {
    setShowsTriangle(coinFlip());
    setRotation(randomRotation());
    setTrialStart(now());
  };

  const start = () => {
    setTrialIndex(0);
    setCorrectCount(0);
    setRts([]);
    setPhase("running");
    runTrial();
  };

  const answer = (sawTriangle: boolean) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (sawTriangle === showsTriangle) {
      setCorrectCount((c) => c + 1);
      setRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="kanizsa-triangle-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Kanizsa Triangle Result"
          extraStats={[{ label: "Avg. RT", value: `${avgRt} ms` }]}
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
            Three &quot;Pac-Man&quot; shapes are arranged so your brain fills in an illusory triangle between them —
            or sometimes they&apos;re rotated so no triangle forms. Decide whether you perceive a triangle, as
            quickly as you can.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const angles = [270, 30, 150];
  const positions = [
    { x: 130, y: 40 },
    { x: 210, y: 170 },
    { x: 50, y: 170 },
  ];

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <svg width={260} height={210} viewBox="0 0 260 210">
          {positions.map((pos, i) => (
            <PacMan
              key={i}
              cx={pos.x}
              cy={pos.y}
              rotation={showsTriangle ? angles[i] : angles[i] + rotation}
            />
          ))}
        </svg>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            I See a Triangle
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            No Triangle
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
