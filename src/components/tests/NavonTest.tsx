"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type Level = "global" | "local";

const LETTERS = ["H", "S", "T", "O"];
const TOTAL_TRIALS = 20;

function now(): number {
  return performance.now();
}

interface Trial {
  globalLetter: string;
  localLetter: string;
  level: Level;
  congruent: boolean;
}

function generateTrial(): Trial {
  const globalLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  const congruent = Math.random() < 0.5;
  let localLetter = globalLetter;
  if (!congruent) {
    do {
      localLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    } while (localLetter === globalLetter);
  }
  const level: Level = Math.random() < 0.5 ? "global" : "local";
  return { globalLetter, localLetter, level, congruent };
}

function buildGrid(globalLetter: string): boolean[][] {
  const shapes: Record<string, string[]> = {
    H: ["1001", "1001", "1111", "1001", "1001"],
    S: ["1111", "1000", "1111", "0001", "1111"],
    T: ["1111", "0100", "0100", "0100", "0100"],
    O: ["1111", "1001", "1001", "1001", "1111"],
  };
  const pattern = shapes[globalLetter];
  return pattern.map((row) => row.split("").map((c) => c === "1"));
}

export function NavonTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [congruentRts, setCongruentRts] = useState<number[]>([]);
  const [incongruentRts, setIncongruentRts] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial();
    setTrial(first);
    setTrialIndex(0);
    setCongruentRts([]);
    setIncongruentRts([]);
    setCorrectCount(0);
    setTrialStart(now());
    setPhase("running");
  };

  const respond = (letter: string) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    const target = trial.level === "global" ? trial.globalLetter : trial.localLetter;
    if (letter === target) {
      setCorrectCount((c) => c + 1);
      if (trial.congruent) setCongruentRts((r) => [...r, rt]);
      else setIncongruentRts((r) => [...r, rt]);
    }

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrial(generateTrial());
    setTrialIndex(next);
    setTrialStart(now());
  };

  const avgCongruent = congruentRts.length ? Math.round(congruentRts.reduce((a, b) => a + b, 0) / congruentRts.length) : 0;
  const avgIncongruent = incongruentRts.length ? Math.round(incongruentRts.reduce((a, b) => a + b, 0) / incongruentRts.length) : 0;
  const interferenceEffect = avgIncongruent - avgCongruent;
  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="navon-test"
          direction="lower"
          value={interferenceEffect}
          unitLabel="ms global-local interference"
          headline="Navon Test Result"
          extraStats={[
            { label: "Congruent RT", value: `${avgCongruent} ms` },
            { label: "Incongruent RT", value: `${avgIncongruent} ms` },
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
            A large letter is made up of many small letters. Sometimes you must identify the large (global) letter,
            other times the small (local) letters — the instruction changes each round. This tests global vs. local
            visual processing.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const grid = buildGrid(trial.globalLetter);

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <p className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
          Identify the {trial.level} letter
        </p>
        <div className="grid grid-cols-4 gap-0.5">
          {grid.flatMap((row, r) =>
            row.map((cell, c) => (
              <span
                key={`${r}-${c}`}
                className="flex h-6 w-6 items-center justify-center text-xs font-bold text-foreground"
              >
                {cell ? trial.localLetter : ""}
              </span>
            ))
          )}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {LETTERS.map((letter) => (
            <button
              key={letter}
              onClick={() => respond(letter)}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-surface-2 text-lg font-bold text-foreground transition-colors hover:border-primary/40"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
