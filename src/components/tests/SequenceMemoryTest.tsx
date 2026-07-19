"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type GridOption = "3x3" | "4x4";
type Phase = "idle" | "showing" | "input" | "result";

const GRID_CONFIG: Record<GridOption, { cols: number; total: number; tileClass: string }> = {
  "3x3": { cols: 3, total: 9, tileClass: "h-20 w-20 sm:h-24 sm:w-24" },
  "4x4": { cols: 4, total: 16, tileClass: "h-14 w-14 sm:h-16 sm:w-16" },
};

export function SequenceMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [gridOption, setGridOption] = useState<GridOption>("3x3");
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState<number[]>([]);
  const [litTile, setLitTile] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const { cols, total, tileClass } = GRID_CONFIG[gridOption];

  const start = () => {
    setLevel(1);
    const first = [Math.floor(Math.random() * total)];
    setSequence(first);
    setProgress(0);
    setLitTile(null);
    setPhase("showing");
  };

  useEffect(() => {
    if (phase !== "showing") return;
    let i = 0;
    const interval = window.setInterval(() => {
      setLitTile(sequence[i]);
      window.setTimeout(() => setLitTile(null), 450);
      i++;
      if (i >= sequence.length) {
        window.clearInterval(interval);
        window.setTimeout(() => {
          setProgress(0);
          setPhase("input");
        }, 550);
      }
    }, 700);
    return () => window.clearInterval(interval);
  }, [phase, sequence]);

  const tapTile = (idx: number) => {
    if (phase !== "input") return;
    if (idx === sequence[progress]) {
      const nextProgress = progress + 1;
      if (nextProgress >= sequence.length) {
        const nextLevel = level + 1;
        setLevel(nextLevel);
        setSequence((s) => [...s, Math.floor(Math.random() * total)]);
        setLitTile(null);
        setPhase("showing");
      } else {
        setProgress(nextProgress);
      }
    } else {
      setPhase("result");
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="sequence-memory-test"
          direction="higher"
          value={level}
          unitLabel="level reached"
          extraStats={[
            { label: "Sequence Length", value: `${sequence.length - 1}` },
            { label: "Grid", value: gridOption },
          ]}
          shareLabel={`I reached level ${level} on the Sequence Memory Test!`}
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
            Watch the pattern of flashing tiles, then repeat it back. Each round adds one more tile.
          </p>
          <OptionsBar>
            <Segmented
              label="Grid"
              value={gridOption}
              onChange={setGridOption}
              options={[
                { value: "3x3", label: "3×3" },
                { value: "4x4", label: "4×4 Hard" },
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
      <div className="flex flex-col items-center gap-5">
        <p className="text-xs font-medium text-muted-2">
          Level {level} — {phase === "showing" ? "watch closely" : "repeat the pattern"}
        </p>
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => tapTile(idx)}
              disabled={phase === "showing"}
              className={`rounded-xl border transition-colors ${tileClass} ${
                litTile === idx
                  ? "border-primary bg-primary"
                  : "border-border bg-surface-2 hover:border-primary/40"
              }`}
            />
          ))}
        </div>
        {phase === "input" && (
          <div className="flex gap-1.5">
            {sequence.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${i < progress ? "bg-primary" : "bg-surface-2"}`}
              />
            ))}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
