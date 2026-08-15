"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
const TOTAL_ROUNDS = 8;
const STEP = 7;

function makeRound(current: number): { options: number[]; correct: number } {
  const correct = current - STEP;
  const distractors = new Set<number>();
  while (distractors.size < 3) {
    const offset = [1, -1, 2, -2, 3, -3][Math.floor(Math.random() * 6)];
    const d = correct + offset;
    if (d !== correct) distractors.add(d);
  }
  const options = [correct, ...Array.from(distractors)];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return { options, correct };
}

export function ConcentrationTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [round, setRound] = useState(0);
  const [current, setCurrent] = useState(100);
  const [roundData, setRoundData] = useState(() => makeRound(100));
  const [correctCount, setCorrectCount] = useState(0);

  const start = () => {
    const startNum = 90 + Math.floor(Math.random() * 10);
    setCurrent(startNum);
    setRoundData(makeRound(startNum));
    setRound(0);
    setCorrectCount(0);
    setPhase("running");
  };

  const pick = (value: number) => {
    const isCorrect = value === roundData.correct;
    const nextCorrect = correctCount + (isCorrect ? 1 : 0);
    setCorrectCount(nextCorrect);
    const nextCurrent = roundData.correct;
    if (round + 1 >= TOTAL_ROUNDS) {
      setPhase("result");
    } else {
      setCurrent(nextCurrent);
      setRoundData(makeRound(nextCurrent));
      setRound(round + 1);
    }
  };

  if (phase === "result") {
    const accuracy = (correctCount / TOTAL_ROUNDS) * 100;
    return (
      <TestFrame>
        <ResultScreen
          slug="concentration-test"
          direction="higher"
          value={Math.round(accuracy)}
          unitLabel="% Accuracy"
          extraStats={[{ label: "Correct", value: `${correctCount}/${TOTAL_ROUNDS}` }]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🧮</span>
          <p className="max-w-sm text-sm text-muted">
            Starting from a random two-digit number, keep subtracting {STEP} each round and pick the correct result
            from the options. Hold the running total in your head — no scratch paper.
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
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xs font-medium text-muted-2">
          Round {round + 1} / {TOTAL_ROUNDS}
        </p>
        <p className="text-sm text-muted">
          Current number: <span className="text-3xl font-black text-foreground">{current}</span>
        </p>
        <p className="text-sm font-semibold text-foreground">What is {current} − {STEP}?</p>
        <div className="grid grid-cols-2 gap-3">
          {roundData.options.map((opt) => (
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
    </TestFrame>
  );
}
