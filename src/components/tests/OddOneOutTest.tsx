"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type ShapeName = "circle" | "square" | "triangle" | "diamond" | "star" | "hexagon";

const SHAPES: ShapeName[] = ["circle", "square", "triangle", "diamond", "star", "hexagon"];
const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#ef4444", "#a855f7", "#06b6d4"];
const GRID_SIZES = [9, 12, 16];
const TOTAL_TRIALS = 8;

function now(): number {
  return performance.now();
}

interface Trial {
  gridSize: number;
  oddIndex: number;
  baseShape: ShapeName;
  baseColor: string;
  oddShape: ShapeName;
}

function generateTrial(): Trial {
  const gridSize = GRID_SIZES[Math.floor(Math.random() * GRID_SIZES.length)];
  const oddIndex = Math.floor(Math.random() * gridSize);
  const baseShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const baseColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  let oddShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  while (oddShape === baseShape) {
    oddShape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  }
  return { gridSize, oddIndex, baseShape, baseColor, oddShape };
}

const SHAPE_STYLE: Record<ShapeName, string> = {
  circle: "rounded-full",
  square: "rounded-md",
  diamond: "rounded-md rotate-45",
  triangle: "",
  star: "",
  hexagon: "",
};

function ShapeIcon({ shape, color }: { shape: ShapeName; color: string }) {
  if (shape === "triangle") {
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderBottom: `28px solid ${color}`,
        }}
      />
    );
  }
  if (shape === "star" || shape === "hexagon") {
    return (
      <svg width={32} height={32} viewBox="0 0 24 24">
        {shape === "star" ? (
          <polygon
            points="12,1 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9"
            fill={color}
          />
        ) : (
          <polygon points="6,2 18,2 23,12 18,22 6,22 1,12" fill={color} />
        )}
      </svg>
    );
  }
  return <div className={`h-7 w-7 ${SHAPE_STYLE[shape]}`} style={{ backgroundColor: color }} />;
}

export function OddOneOutTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setRts([]);
    setTrial(generateTrial());
    setTrialStart(now());
    setPhase("running");
  };

  const clickCell = (index: number) => {
    if (phase !== "running") return;
    if (index !== trial.oddIndex) return;
    const rt = now() - trialStart;
    setRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTrial(generateTrial());
    setTrialStart(now());
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="odd-one-out-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average time"
          headline="Odd One Out Result"
          extraStats={[{ label: "Rounds", value: `${TOTAL_TRIALS}` }]}
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
            Every shape on the grid is identical except one. Find and click the odd one out as fast as you can
            across {TOTAL_TRIALS} rounds.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const cols = Math.ceil(Math.sqrt(trial.gridSize));

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, maxWidth: `${cols * 48}px` }}
        >
          {Array.from({ length: trial.gridSize }).map((_, i) => (
            <button
              key={i}
              onClick={() => clickCell(i)}
              className="flex h-9 w-9 items-center justify-center transition-transform hover:scale-110"
            >
              <ShapeIcon shape={i === trial.oddIndex ? trial.oddShape : trial.baseShape} color={trial.baseColor} />
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
