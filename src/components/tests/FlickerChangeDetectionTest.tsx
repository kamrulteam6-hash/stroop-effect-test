"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "found" | "result";

const GRID_SIZE = 25;
const TOTAL_TRIALS = 6;
const FLICKER_MS = 300;
const BLANK_MS = 80;

const SHAPES = ["circle", "square", "triangle", "diamond"] as const;
type Shape = (typeof SHAPES)[number];
const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#eab308", "#a855f7"];

function now(): number {
  return performance.now();
}

interface Cell {
  shape: Shape;
  color: string;
}

function randomCell(): Cell {
  return {
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

function buildScene(): { cells: Cell[]; changeIndex: number; changedCell: Cell } {
  const cells = Array.from({ length: GRID_SIZE }, () => randomCell());
  const changeIndex = Math.floor(Math.random() * GRID_SIZE);
  let changedCell = randomCell();
  while (changedCell.shape === cells[changeIndex].shape && changedCell.color === cells[changeIndex].color) {
    changedCell = randomCell();
  }
  return { cells, changeIndex, changedCell };
}

function ShapeIcon({ shape, color }: { shape: Shape; color: string }) {
  if (shape === "circle") return <div className="h-6 w-6 rounded-full" style={{ backgroundColor: color }} />;
  if (shape === "square") return <div className="h-6 w-6 rounded-sm" style={{ backgroundColor: color }} />;
  if (shape === "diamond") return <div className="h-5 w-5 rotate-45 rounded-sm" style={{ backgroundColor: color }} />;
  return (
    <div
      style={{ width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderBottom: `20px solid ${color}` }}
    />
  );
}

export function FlickerChangeDetectionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [cells, setCells] = useState<Cell[]>([]);
  const [changeIndex, setChangeIndex] = useState(0);
  const [changedCell, setChangedCell] = useState<Cell>({ shape: "circle", color: COLORS[0] });
  const [showChanged, setShowChanged] = useState(false);
  const [trialStart, setTrialStart] = useState(0);
  const [rts, setRts] = useState<number[]>([]);

  useEffect(() => {
    if (phase !== "running") return;
    const interval = window.setInterval(() => {
      setShowChanged((prev) => !prev);
    }, FLICKER_MS + BLANK_MS);
    return () => window.clearInterval(interval);
  }, [phase]);

  const runTrial = () => {
    const scene = buildScene();
    setCells(scene.cells);
    setChangeIndex(scene.changeIndex);
    setChangedCell(scene.changedCell);
    setShowChanged(false);
    setTrialStart(now());
    setPhase("running");
  };

  const start = () => {
    setTrialIndex(0);
    setRts([]);
    runTrial();
  };

  const clickCell = (index: number) => {
    if (phase !== "running") return;
    if (index !== changeIndex) return;
    const rt = now() - trialStart;
    setRts((r) => [...r, rt]);
    setPhase("found");

    window.setTimeout(() => {
      const next = trialIndex + 1;
      if (next >= TOTAL_TRIALS) {
        setPhase("result");
        return;
      }
      setTrialIndex(next);
      runTrial();
    }, 600);
  };

  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="flicker-change-detection-test"
          direction="lower"
          value={avgRt}
          unitLabel="ms average detection time"
          headline="Flicker Change Detection Result"
          extraStats={[{ label: "Rounds Found", value: `${rts.length}/${TOTAL_TRIALS}` }]}
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
            A grid of shapes flickers between two versions with one item different. Find and click the one item that
            changes, across {TOTAL_TRIALS} rounds. This classic change blindness task is much harder than it sounds.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const cols = 5;

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {cells.map((cell, i) => {
            const display = i === changeIndex && showChanged ? changedCell : cell;
            return (
              <button
                key={i}
                onClick={() => clickCell(i)}
                className="flex h-10 w-10 items-center justify-center transition-transform hover:scale-110"
              >
                <ShapeIcon shape={display.shape} color={display.color} />
              </button>
            );
          })}
        </div>
        {phase === "found" && <p className="text-sm font-bold text-success">Found it!</p>}
      </div>
    </TestFrame>
  );
}
