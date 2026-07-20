"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { useSound } from "@/lib/useSound";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";

type Mode = "A" | "B";
type Count = 15 | 25;
type Phase = "idle" | "running" | "result";

const TARGET_SIZE = 40;
const MIN_SPACING = TARGET_SIZE + 14;

interface Dot {
  label: string;
  x: number;
  y: number;
}

function makeLabels(mode: Mode, count: number): string[] {
  if (mode === "A") return Array.from({ length: count }, (_, i) => String(i + 1));
  const labels: string[] = [];
  let num = 1;
  let letterIdx = 0;
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      labels.push(String(num));
      num++;
    } else {
      labels.push(String.fromCharCode(65 + letterIdx));
      letterIdx++;
    }
  }
  return labels;
}

function placeDots(labels: string[], width: number, height: number): Dot[] {
  const dots: Dot[] = [];
  for (const label of labels) {
    let x = 0;
    let y = 0;
    let attempts = 0;
    let ok = false;
    while (attempts < 60 && !ok) {
      x = Math.random() * (width - TARGET_SIZE);
      y = Math.random() * (height - TARGET_SIZE);
      ok = dots.every((d) => Math.hypot(d.x - x, d.y - y) >= MIN_SPACING);
      attempts++;
    }
    dots.push({ label, x, y });
  }
  return dots;
}

export function TrailMakingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [mode, setMode] = useState<Mode>("A");
  const [count, setCount] = useState<Count>(15);
  const [dots, setDots] = useState<Dot[]>([]);
  const [nextIndex, setNextIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [wrongLabel, setWrongLabel] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const areaRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const sound = useSound();

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const start = () => {
    setNextIndex(0);
    setErrors(0);
    setElapsed(0);
    setPhase("running");
  };

  useEffect(() => {
    if (phase !== "running") return;
    const area = areaRef.current;
    if (!area) return;
    const rect = area.getBoundingClientRect();
    const labels = makeLabels(mode, count);
    setDots(placeDots(labels, rect.width, rect.height));
    startTime.current = performance.now();
    intervalRef.current = window.setInterval(() => {
      setElapsed((performance.now() - startTime.current) / 1000);
    }, 100);
    return () => window.clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const tapDot = (dot: Dot, index: number) => {
    if (phase !== "running") return;
    if (index === nextIndex) {
      sound.play("tick");
      const next = nextIndex + 1;
      if (next >= dots.length) {
        window.clearInterval(intervalRef.current);
        sound.play("success");
        setPhase("result");
      } else {
        setNextIndex(next);
      }
    } else {
      sound.play("error");
      setErrors((e) => e + 1);
      setWrongLabel(dot.label);
      window.setTimeout(() => setWrongLabel(null), 250);
    }
  };

  const trailPoints = dots
    .slice(0, nextIndex)
    .map((d) => `${d.x + TARGET_SIZE / 2},${d.y + TARGET_SIZE / 2}`)
    .join(" ");

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="trail-making-test"
          direction="lower"
          value={elapsed}
          formatValue={(v) => v.toFixed(1)}
          unitLabel="seconds"
          extraStats={[
            { label: "Part", value: mode },
            { label: "Errors", value: `${errors}` },
            { label: "Count", value: `${count}` },
          ]}
          shareLabel={`I completed Trail Making Test Part ${mode} in ${elapsed.toFixed(1)}s!`}
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
          <p className="max-w-sm text-sm text-muted">
            {mode === "A"
              ? "Click the numbers in order: 1, 2, 3…"
              : "Alternate between numbers and letters: 1, A, 2, B, 3, C…"}
          </p>
          <OptionsBar>
            <Segmented
              label="Part"
              value={mode}
              onChange={setMode}
              options={[
                { value: "A", label: "Part A (Numbers)" },
                { value: "B", label: "Part B (Alternating)" },
              ]}
            />
            <Segmented
              label="Count"
              value={count}
              onChange={setCount}
              options={[
                { value: 15, label: "15" },
                { value: 25, label: "25" },
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
    <TestFrame className="p-0">
      <SoundToggle enabled={sound.enabled} onToggle={sound.toggle} />
      <div className="absolute left-3 top-3 z-10 flex items-center gap-3 rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-muted-2">
        <span>Next: {dots[nextIndex]?.label ?? "—"}</span>
        <span>{elapsed.toFixed(1)}s</span>
      </div>
      <div ref={areaRef} className="relative h-full min-h-[420px] w-full">
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <polyline points={trailPoints} fill="none" stroke="var(--color-primary)" strokeWidth={2} opacity={0.5} />
        </svg>
        {dots.map((dot, index) => {
          const done = index < nextIndex;
          const isWrong = wrongLabel === dot.label && index !== nextIndex;
          return (
            <button
              key={`${dot.label}-${index}`}
              onClick={() => tapDot(dot, index)}
              disabled={done}
              className={`absolute flex items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                isWrong
                  ? "border-danger bg-danger/30 text-danger"
                  : done
                    ? "border-border bg-surface-2 text-muted-2 opacity-40"
                    : "border-primary bg-surface text-foreground hover:bg-primary/10"
              }`}
              style={{ width: TARGET_SIZE, height: TARGET_SIZE, left: dot.x, top: dot.y }}
            >
              {dot.label}
            </button>
          );
        })}
      </div>
    </TestFrame>
  );
}
