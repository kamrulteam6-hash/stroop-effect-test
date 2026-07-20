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
          <span>Correct: {correct}</span>
          <span>Time: {timeLeft}s</span>
        </div>

        <div className="grid w-full grid-cols-9 gap-1 rounded-xl border border-border bg-surface-2 p-2">
          {SYMBOLS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="text-base sm:text-lg">{s}</span>
              <span className="text-[10px] font-bold text-muted-2">{legend[i]}</span>
            </div>
          ))}
        </div>

        <div
          className={`flex h-24 w-24 items-center justify-center rounded-2xl border-2 text-5xl transition-colors ${
            flash === "correct"
              ? "border-success bg-success/10"
              : flash === "wrong"
                ? "border-danger bg-danger/10"
                : "border-border bg-surface-2"
          }`}
        >
          {SYMBOLS[current]}
        </div>

        <div className="grid grid-cols-9 gap-1.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
            <button
              key={d}
              onClick={() => answer(d)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-sm font-bold text-foreground transition-colors hover:border-primary sm:h-10 sm:w-10"
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
