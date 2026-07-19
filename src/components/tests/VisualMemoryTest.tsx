"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type GridOption = "5x5" | "6x6";
type Lives = 3 | 5;
type Phase = "idle" | "showing" | "input" | "result";

const GRID_CONFIG: Record<GridOption, { cols: number; total: number; tileClass: string }> = {
  "5x5": { cols: 5, total: 25, tileClass: "h-11 w-11 sm:h-14 sm:w-14" },
  "6x6": { cols: 6, total: 36, tileClass: "h-9 w-9 sm:h-11 sm:w-11" },
};

function pickTargets(count: number, total: number): Set<number> {
  const set = new Set<number>();
  while (set.size < count) set.add(Math.floor(Math.random() * total));
  return set;
}

export function VisualMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [gridOption, setGridOption] = useState<GridOption>("5x5");
  const [startLives, setStartLives] = useState<Lives>(3);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState<number>(startLives);
  const [streak, setStreak] = useState(0);
  const [targets, setTargets] = useState<Set<number>>(new Set());
  const [picked, setPicked] = useState<Set<number>>(new Set());
  const [wrongTile, setWrongTile] = useState<number | null>(null);

  const { total, tileClass } = GRID_CONFIG[gridOption];

  const startLevel = (lvl: number) => {
    setTargets(pickTargets(Math.min(2 + lvl, total - 2), total));
    setPicked(new Set());
    setPhase("showing");
  };

  const start = () => {
    setLevel(1);
    setLives(startLives);
    setStreak(0);
    startLevel(1);
  };

  useEffect(() => {
    if (phase !== "showing") return;
    const t = window.setTimeout(() => setPhase("input"), 1600);
    return () => window.clearTimeout(t);
  }, [phase]);

  const tapTile = (idx: number) => {
    if (phase !== "input" || picked.has(idx)) return;
    if (targets.has(idx)) {
      const nextPicked = new Set(picked);
      nextPicked.add(idx);
      setPicked(nextPicked);
      if (nextPicked.size === targets.size) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setStreak((s) => s + 1);
        window.setTimeout(() => startLevel(nextLevel), 400);
      }
    } else {
      setWrongTile(idx);
      setStreak(0);
      const remaining = lives - 1;
      setLives(remaining);
      window.setTimeout(() => {
        setWrongTile(null);
        if (remaining <= 0) setPhase("result");
        else startLevel(level);
      }, 500);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="visual-memory-test"
          direction="higher"
          value={level}
          unitLabel="level reached"
          extraStats={[
            { label: "Grid", value: gridOption },
            { label: "Best Streak", value: `${streak}` },
          ]}
          shareLabel={`I reached level ${level} on the Visual Memory Test!`}
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
            A few tiles will light up briefly. Memorize them, then click them back in any order.
          </p>
          <OptionsBar>
            <Segmented
              label="Grid"
              value={gridOption}
              onChange={setGridOption}
              options={[
                { value: "5x5", label: "5×5" },
                { value: "6x6", label: "6×6 Hard" },
              ]}
            />
            <Segmented
              label="Lives"
              value={startLives}
              onChange={setStartLives}
              options={[
                { value: 3, label: "3" },
                { value: 5, label: "5" },
              ]}
            />
          </OptionsBar>
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
        <div className="flex w-full max-w-sm items-center justify-between text-xs font-medium text-muted-2">
          <span>
            Level {level} {streak >= 3 && <span className="text-gold">🔥 {streak}</span>}
          </span>
          <span>
            Lives: {"♥".repeat(lives)}
            {"♡".repeat(startLives - lives)}
          </span>
        </div>
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${GRID_CONFIG[gridOption].cols}, minmax(0, 1fr))` }}>
          {Array.from({ length: total }).map((_, idx) => {
            const showLit = phase === "showing" && targets.has(idx);
            const showPicked = phase === "input" && picked.has(idx);
            const showWrong = wrongTile === idx;
            return (
              <button
                key={idx}
                onClick={() => tapTile(idx)}
                className={`rounded-lg border transition-colors ${tileClass} ${
                  showWrong
                    ? "border-danger bg-danger"
                    : showLit || showPicked
                      ? "border-primary bg-primary"
                      : "border-border bg-surface-2 hover:border-primary/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
