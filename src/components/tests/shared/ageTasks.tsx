"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

/** Three-trial simple reaction task. Reports a 0-100 score (higher = faster). */
export function ReactionMiniTask({ onDone }: { onDone: (score: number) => void }) {
  const [phase, setPhase] = useState<"ready" | "go">("ready");
  const [trial, setTrial] = useState(0);
  const [attemptKey, setAttemptKey] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const startRef = useRef(0);

  useEffect(() => {
    const delay = 800 + Math.random() * 1500;
    const id = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("go");
    }, delay);
    return () => clearTimeout(id);
  }, [attemptKey]);

  const click = () => {
    if (phase === "ready") {
      // clicked too early — restart the same trial with a fresh random delay
      setAttemptKey((k) => k + 1);
      return;
    }
    const rt = performance.now() - startRef.current;
    const nextTimes = [...times, rt];
    setTimes(nextTimes);
    if (nextTimes.length >= 3) {
      const avg = nextTimes.reduce((a, b) => a + b, 0) / nextTimes.length;
      const score = Math.max(0, Math.min(100, 100 - ((avg - 200) / 500) * 100));
      onDone(score);
    } else {
      setTrial((t) => t + 1);
      setPhase("ready");
      setAttemptKey((k) => k + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">Reaction — Trial {Math.min(trial + 1, 3)} / 3</p>
      <button
        onClick={click}
        className={`flex h-48 w-48 items-center justify-center rounded-2xl text-lg font-bold text-white transition-colors sm:h-56 sm:w-56 ${
          phase === "go" ? "bg-success" : "bg-primary/40"
        }`}
      >
        {phase === "go" ? "Click Now!" : "Wait for green..."}
      </button>
    </div>
  );
}

const MATH_PROBLEMS: { q: string; options: number[]; correct: number }[] = [
  { q: "7 + 8", options: [14, 15, 16, 13], correct: 15 },
  { q: "12 - 5", options: [6, 7, 8, 5], correct: 7 },
  { q: "6 × 4", options: [22, 24, 26, 20], correct: 24 },
  { q: "9 + 6", options: [15, 14, 16, 13], correct: 15 },
  { q: "18 - 9", options: [8, 9, 10, 7], correct: 9 },
  { q: "3 × 7", options: [18, 21, 24, 19], correct: 21 },
  { q: "15 + 8", options: [22, 23, 24, 21], correct: 23 },
  { q: "20 - 13", options: [6, 7, 8, 9], correct: 7 },
];

/** Quick multiple-choice arithmetic round. Reports a 0-100 accuracy score. */
export function QuickMathMiniTask({ onDone }: { onDone: (score: number) => void }) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const pick = (value: number) => {
    const isCorrect = value === MATH_PROBLEMS[index].correct;
    const nextCorrect = correctCount + (isCorrect ? 1 : 0);
    if (index + 1 >= MATH_PROBLEMS.length) {
      setCorrectCount(nextCorrect);
      onDone((nextCorrect / MATH_PROBLEMS.length) * 100);
    } else {
      setCorrectCount(nextCorrect);
      setIndex(index + 1);
    }
  };

  const p = MATH_PROBLEMS[index];

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
        Quick Math — {index + 1} / {MATH_PROBLEMS.length}
      </p>
      <p className="text-3xl font-bold text-foreground">{p.q}</p>
      <div className="grid grid-cols-2 gap-2">
        {p.options.map((opt) => (
          <button
            key={opt}
            onClick={() => pick(opt)}
            className="rounded-xl border border-border bg-surface-2 px-6 py-3 text-lg font-bold text-foreground hover:border-primary"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function genDigitSequence(length: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
}

/** Growing digit-span recall task. Reports a 0-100 score based on max span reached. */
export function DigitSpanMiniTask({ onDone }: { onDone: (score: number) => void }) {
  const [span, setSpan] = useState(3);
  const [sequence, setSequence] = useState<number[]>(() => genDigitSequence(3));
  const [phase, setPhase] = useState<"show" | "recall">("show");
  const [input, setInput] = useState<number[]>([]);
  const maxSpanRef = useRef(0);

  useEffect(() => {
    const id = setTimeout(() => setPhase("recall"), 900 + sequence.length * 700);
    return () => clearTimeout(id);
  }, [sequence]);

  const finish = () => {
    const score = Math.max(0, Math.min(100, ((maxSpanRef.current - 3) / 6) * 100));
    onDone(score);
  };

  const startRound = (newSpan: number) => {
    setSpan(newSpan);
    setSequence(genDigitSequence(newSpan));
    setPhase("show");
    setInput([]);
  };

  const pressDigit = (d: number) => {
    const next = [...input, d];
    setInput(next);
    if (next.length === sequence.length) {
      const correct = next.every((v, i) => v === sequence[i]);
      if (correct) {
        maxSpanRef.current = span;
        if (span >= 9) {
          finish();
        } else {
          startRound(span + 1);
        }
      } else {
        finish();
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">Memory Span — Level {span - 2}</p>
      {phase === "show" ? (
        <p className="text-3xl font-bold tracking-widest text-foreground">{sequence.join(" ")}</p>
      ) : (
        <>
          <p className="text-sm text-muted">Enter the digits in order.</p>
          <p className="min-h-6 text-2xl font-bold tracking-widest text-primary">{input.join(" ")}</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
              <button
                key={d}
                onClick={() => pressDigit(d)}
                className="h-12 w-12 rounded-xl border border-border bg-surface-2 text-lg font-bold text-foreground hover:border-primary"
              >
                {d}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const SHAPES = ["🔵", "🔵", "🔵", "🔵", "🔺"]; // 4/5 are "go" targets, 1/5 is "no-go"
const TOTAL_TRIALS = 16;

function randomShape(): string {
  return SHAPES[Math.floor(Math.random() * SHAPES.length)];
}

/** Go/No-Go sustained-attention task. Reports a 0-100 score from hits minus false alarms. */
export function GoNoGoMiniTask({ onDone }: { onDone: (score: number) => void }) {
  const [trial, setTrial] = useState(0);
  const [shape, setShape] = useState<string>(() => randomShape());
  const [hits, setHits] = useState(0);
  const [falseAlarms, setFalseAlarms] = useState(0);
  const [misses, setMisses] = useState(0);
  const respondedRef = useRef(false);
  const doneRef = useRef(false);

  const advanceTrial = () => {
    setTrial((t) => t + 1);
    setShape(randomShape());
  };

  useEffect(() => {
    if (trial >= TOTAL_TRIALS) {
      if (!doneRef.current) {
        doneRef.current = true;
        const score = Math.max(0, Math.min(100, ((hits - falseAlarms * 2) / TOTAL_TRIALS) * 100 + 20));
        onDone(score);
      }
      return;
    }
    respondedRef.current = false;
    const id = setTimeout(() => {
      if (!respondedRef.current && shape !== "🔺") setMisses((m) => m + 1);
      advanceTrial();
    }, 900);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trial]);

  const click = () => {
    if (respondedRef.current || trial >= TOTAL_TRIALS) return;
    respondedRef.current = true;
    if (shape === "🔺") {
      setFalseAlarms((f) => f + 1);
    } else {
      setHits((h) => h + 1);
    }
    advanceTrial();
  };

  if (trial >= TOTAL_TRIALS) return null;

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
        Attention Check — {trial + 1} / {TOTAL_TRIALS}
      </p>
      <p className="text-xs text-muted">Click for circles 🔵 — do NOT click for triangles 🔺</p>
      <button
        onClick={click}
        className="flex h-40 w-40 items-center justify-center rounded-2xl border border-border bg-surface-2 text-6xl"
      >
        {shape}
      </button>
      <p className="text-[11px] text-muted-2">Misses: {misses} · False clicks: {falseAlarms}</p>
    </div>
  );
}

export function TaskIntro({ label, onStart }: { label: string; onStart: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-sm text-muted">{label}</p>
      <Button onClick={onStart}>Start</Button>
    </div>
  );
}
