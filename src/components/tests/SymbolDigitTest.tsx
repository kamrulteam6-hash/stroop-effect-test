"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const SYMBOLS = ["▲", "●", "■", "◆", "★", "▼", "☀", "♣", "⬟"];
const DURATION_S = 90;

type Phase = "idle" | "running" | "result";

function shuffledDigits(): number[] {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = digits.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [digits[i], digits[j]] = [digits[j], digits[i]];
  }
  return digits;
}

export function SymbolDigitTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [legend, setLegend] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const flashTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(flashTimeoutRef.current);
    },
    [],
  );

  const nextSymbol = () => setCurrent(Math.floor(Math.random() * SYMBOLS.length));

  const start = () => {
    setLegend(shuffledDigits());
    setCorrect(0);
    setAttempted(0);
    setTimeLeft(DURATION_S);
    nextSymbol();
    setPhase("running");

    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(intervalRef.current);
          setPhase("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const answer = (digit: number) => {
    if (phase !== "running") return;
    const isCorrect = legend[current] === digit;
    setAttempted((a) => a + 1);
    if (isCorrect) setCorrect((c) => c + 1);
    setFlash(isCorrect ? "correct" : "wrong");
    window.clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = window.setTimeout(() => setFlash(null), 150);
    nextSymbol();
  };

  useEffect(() => {
    if (phase !== "running") return;
    function onKey(e: KeyboardEvent) {
      const n = Number(e.key);
      if (n >= 1 && n <= 9) answer(n);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, current, legend]);

  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="symbol-digit-test"
          direction="higher"
          value={correct}
          unitLabel="correct matches"
          extraStats={[
            { label: "Attempted", value: `${attempted}` },
            { label: "Accuracy", value: `${accuracy}%` },
          ]}
          shareLabel={`I matched ${correct} symbols to digits in 90 seconds on the Symbol Digit Modalities Test!`}
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
            A key at the top pairs 9 symbols with digits 1-9. As fast as you can, type the digit that matches the
            symbol shown — using your keyboard or the number pad — for 90 seconds.
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
      <div className="flex w-full max-w-md flex-col items-center gap-6">
        <div className="flex w-full items-center justify-between text-xs font-semibold text-muted-2">
          <span className="rounded-full bg-success/10 px-3 py-1 text-success">✓ {correct} correct</span>
          <span className="rounded-full bg-surface-2 px-3 py-1 tabular-nums">⏱ {timeLeft}s</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2 shadow-[inset_0_1px_2px_rgba(15,15,35,0.08)]">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300 ease-linear"
            style={{ width: `${(timeLeft / DURATION_S) * 100}%` }}
          />
        </div>

        <div className="grid w-full grid-cols-9 gap-1 rounded-2xl border border-border bg-surface-2 p-2 shadow-sm sm:gap-1.5 sm:p-3">
          {SYMBOLS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 rounded-lg bg-surface py-1.5 text-center shadow-sm">
              <span className="text-lg sm:text-xl">{s}</span>
              <span className="text-[10px] font-bold text-muted-2">{legend[i]}</span>
            </div>
          ))}
        </div>

        <div
          className={`flex h-28 w-28 items-center justify-center rounded-3xl border-2 text-6xl shadow-lg transition-all duration-150 ${
            flash === "correct"
              ? "scale-105 border-success bg-success/10 shadow-success/20"
              : flash === "wrong"
                ? "scale-95 border-danger bg-danger/10 shadow-danger/20"
                : "border-border bg-surface-2"
          }`}
        >
          {SYMBOLS[current]}
        </div>

        <div className="grid grid-cols-9 gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
            <button
              key={d}
              onClick={() => answer(d)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-sm font-bold text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary/5 active:scale-90 sm:h-11 sm:w-11"
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
