"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const DURATION_S = 60;
const DIGIT_INTERVAL_MS = 2500;

function randomDigit(): number {
  return 1 + Math.floor(Math.random() * 9);
}

export function SerialAdditionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [digits, setDigits] = useState<number[]>([]);
  const [currentDigit, setCurrentDigit] = useState(0);
  const [input, setInput] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_S);

  useEffect(() => {
    if (phase !== "running") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "running") return;
    const timer = window.setInterval(() => {
      setDigits((prev) => {
        const next = [...prev, randomDigit()];
        setCurrentDigit(next[next.length - 1]);
        return next;
      });
    }, DIGIT_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    const first = randomDigit();
    setDigits([first]);
    setCurrentDigit(first);
    setInput("");
    setCorrectCount(0);
    setAttemptCount(0);
    setTimeLeft(DURATION_S);
    setPhase("running");
  };

  const submit = () => {
    if (digits.length < 2) return;
    const expected = digits[digits.length - 1] + digits[digits.length - 2];
    const value = parseInt(input, 10);
    setAttemptCount((c) => c + 1);
    if (value === expected) setCorrectCount((c) => c + 1);
    setInput("");
  };

  const accuracy = attemptCount ? Math.round((correctCount / attemptCount) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="serial-addition-test"
          direction="higher"
          value={correctCount}
          unitLabel="correct sums"
          headline="Serial Addition Result"
          extraStats={[
            { label: "Attempts", value: `${attemptCount}` },
            { label: "Accuracy", value: `${accuracy}%` },
          ]}
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
            A new digit appears every few seconds. Each time, add it to the digit that came right before it and type
            the sum, as in the classic PASAT test. You have {DURATION_S} seconds.
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
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">Time left: {timeLeft}s</p>
        <p className="text-7xl font-black text-primary">{currentDigit}</p>
        <p className="text-xs text-muted-2">Add this digit to the previous one</p>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            disabled={digits.length < 2}
            autoFocus
            className="w-24 rounded-lg border border-border bg-surface-2 px-3 py-2 text-center text-lg text-foreground outline-none focus:border-primary/40 disabled:opacity-50"
          />
          <Button onClick={submit} disabled={digits.length < 2}>
            Submit
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
