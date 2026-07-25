"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { useSound } from "@/lib/useSound";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";

type GridOption = "4x4" | "5x5" | "6x6";
type Phase = "idle" | "running" | "result";

const GRID_CONFIG: Record<GridOption, { cols: number; total: number; tileClass: string }> = {
  "4x4": { cols: 4, total: 16, tileClass: "h-16 w-16 text-lg sm:h-20 sm:w-20 sm:text-xl" },
  "5x5": { cols: 5, total: 25, tileClass: "h-12 w-12 text-base sm:h-16 sm:w-16 sm:text-lg" },
  "6x6": { cols: 6, total: 36, tileClass: "h-10 w-10 text-sm sm:h-12 sm:w-12 sm:text-base" },
};

function shuffledNumbers(total: number): number[] {
  const nums = Array.from({ length: total }, (_, i) => i + 1);
  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}

export function SchulteTableTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [gridOption, setGridOption] = useState<GridOption>("5x5");
  const [numbers, setNumbers] = useState<number[]>([]);
  const [next, setNext] = useState(1);
  const [errors, setErrors] = useState(0);
  const [wrongTile, setWrongTile] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const startTime = useRef(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const sound = useSound();

  const { cols, total, tileClass } = GRID_CONFIG[gridOption];

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const start = () => {
    setNumbers(shuffledNumbers(total));
    setNext(1);
    setErrors(0);
    setElapsed(0);
    setPhase("running");
    startTime.current = performance.now();
    intervalRef.current = window.setInterval(() => {
      setElapsed((performance.now() - startTime.current) / 1000);
    }, 100);
  };

  const tapTile = (value: number) => {
    if (phase !== "running") return;
    if (value === next) {
      sound.play("tick");
      const nextValue = next + 1;
      if (nextValue > total) {
        window.clearInterval(intervalRef.current);
        sound.play("success");
        setPhase("result");
      } else {
        setNext(nextValue);
      }
    } else {
      sound.play("error");
      setErrors((e) => e + 1);
      setWrongTile(value);
      window.setTimeout(() => setWrongTile(null), 250);
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="schulte-table-test"
          direction="lower"
          value={elapsed}
          formatValue={(v) => v.toFixed(1)}
          unitLabel="seconds"
          extraStats={[
            { label: "Grid", value: gridOption },
            { label: "Errors", value: `${errors}` },
          ]}
          shareLabel={`I cleared the ${gridOption} Schulte Table in ${elapsed.toFixed(1)}s!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🔢</span>
          <p className="max-w-sm text-sm text-muted">
            Click the numbers 1 through {GRID_CONFIG[gridOption].total} in ascending order, as fast as you can. Try
            to keep your eyes near the center and use your peripheral vision to spot each number.
          </p>
          <OptionsBar>
            <Segmented
              label="Grid Size"
              value={gridOption}
              onChange={setGridOption}
              options={[
                { value: "4x4", label: "4×4" },
                { value: "5x5", label: "5×5" },
                { value: "6x6", label: "6×6" },
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
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full max-w-sm items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            🎯 Next: {next}
          </span>
          <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
            ⏱️ {elapsed.toFixed(1)}s
          </span>
        </div>
        <div className="h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-150"
            style={{ width: `${((next - 1) / total) * 100}%` }}
          />
        </div>
        <div className="rounded-3xl border-2 border-border bg-surface-2 p-4 shadow-sm sm:p-5">
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {numbers.map((value) => {
              const done = value < next;
              const isWrong = wrongTile === value;
              return (
                <button
                  key={value}
                  onClick={() => tapTile(value)}
                  disabled={done}
                  className={`flex items-center justify-center rounded-lg border font-bold transition-colors ${tileClass} ${
                    isWrong
                      ? "border-danger bg-danger/20 text-danger"
                      : done
                        ? "border-success/40 bg-success/10 text-success opacity-60"
                        : "border-border bg-surface text-foreground hover:border-primary/40"
                  }`}
                >
                  {done ? "✓" : value}
                </button>
              );
            })}
          </div>
        </div>
        {errors > 0 && <p className="text-xs text-danger">{errors} wrong tap{errors === 1 ? "" : "s"} so far</p>}
      </div>
    </TestFrame>
  );
}
