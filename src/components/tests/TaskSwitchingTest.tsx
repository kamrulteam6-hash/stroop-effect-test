"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type Task = "parity" | "magnitude";

interface Trial {
  task: Task;
  number: number;
  isSwitch: boolean;
}

function now(): number {
  return performance.now();
}

function generateTrial(prevTask: Task | null): Trial {
  const task: Task = Math.random() < 0.5 ? "parity" : "magnitude";
  const number = 1 + Math.floor(Math.random() * 9 === 4 ? 5 : Math.random() * 9);
  const n = number === 5 ? 6 : number;
  return { task, number: n, isSwitch: prevTask !== null && prevTask !== task };
}

function correctAnswer(trial: Trial): "a" | "b" {
  if (trial.task === "parity") return trial.number % 2 === 0 ? "a" : "b";
  return trial.number > 5 ? "a" : "b";
}

const TOTAL_TRIALS = 24;

export function TaskSwitchingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial(null));
  const [switchRts, setSwitchRts] = useState<number[]>([]);
  const [repeatRts, setRepeatRts] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial(null);
    setTrial(first);
    setTrialIndex(0);
    setSwitchRts([]);
    setRepeatRts([]);
    setCorrectCount(0);
    setTrialStart(now());
    setPhase("running");
  };

  const respond = (choice: "a" | "b") => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    const isCorrect = choice === correctAnswer(trial);
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
      if (trial.isSwitch) setSwitchRts((r) => [...r, rt]);
      else setRepeatRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    const nextTrial = generateTrial(trial.task);
    setTrial(nextTrial);
    setTrialIndex(next);
    setTrialStart(now());
  };

  useEffect(() => {
    if (phase !== "running") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") respond("a");
      if (e.key === "ArrowRight") respond("b");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, trial, trialIndex]);

  const avgSwitch = switchRts.length ? Math.round(switchRts.reduce((a, b) => a + b, 0) / switchRts.length) : 0;
  const avgRepeat = repeatRts.length ? Math.round(repeatRts.reduce((a, b) => a + b, 0) / repeatRts.length) : 0;
  const switchCost = avgSwitch - avgRepeat;
  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="task-switching-test"
          direction="lower"
          value={switchCost}
          unitLabel="ms switch cost"
          headline="Task Switching Result"
          extraStats={[
            { label: "Repeat-Trial RT", value: `${avgRepeat} ms` },
            { label: "Switch-Trial RT", value: `${avgSwitch} ms` },
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
            You&apos;ll see a colored number and a task label. If the label says <strong>ODD/EVEN</strong>, press
            Left for even and Right for odd. If it says <strong>LOW/HIGH</strong>, press Left for a number greater
            than 5 and Right for less than 5. The task switches unpredictably.
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
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            {trial.task === "parity" ? "Odd / Even" : "Low / High"}
          </span>
          <span className="text-6xl font-black tabular-nums text-foreground">{trial.number}</span>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => respond("a")}>
            &larr; {trial.task === "parity" ? "Even" : "> 5"}
          </Button>
          <Button variant="secondary" onClick={() => respond("b")}>
            {trial.task === "parity" ? "Odd" : "< 5"} &rarr;
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
