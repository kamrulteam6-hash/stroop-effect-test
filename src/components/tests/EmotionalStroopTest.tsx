"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";
type ColorName = "red" | "blue" | "green" | "yellow";

const COLORS: { name: ColorName; hex: string }[] = [
  { name: "red", hex: "#ef4444" },
  { name: "blue", hex: "#3b82f6" },
  { name: "green", hex: "#22c55e" },
  { name: "yellow", hex: "#eab308" },
];

const NEUTRAL_WORDS = ["TABLE", "WINDOW", "CHAIR", "PENCIL", "CLOUD", "GARDEN", "BOTTLE", "CARPET"];
const EMOTIONAL_WORDS = ["DEATH", "CANCER", "MURDER", "FAILURE", "TRAUMA", "PAIN", "DANGER", "GRIEF"];

const TOTAL_TRIALS = 20;

function now(): number {
  return performance.now();
}

interface Trial {
  word: string;
  colorName: ColorName;
  colorHex: string;
  isEmotional: boolean;
}

function generateTrial(): Trial {
  const isEmotional = Math.random() < 0.5;
  const pool = isEmotional ? EMOTIONAL_WORDS : NEUTRAL_WORDS;
  const word = pool[Math.floor(Math.random() * pool.length)];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  return { word, colorName: color.name, colorHex: color.hex, isEmotional };
}

export function EmotionalStroopTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [trial, setTrial] = useState<Trial>(() => generateTrial());
  const [neutralRts, setNeutralRts] = useState<number[]>([]);
  const [emotionalRts, setEmotionalRts] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    const first = generateTrial();
    setTrial(first);
    setTrialIndex(0);
    setNeutralRts([]);
    setEmotionalRts([]);
    setCorrectCount(0);
    setTrialStart(now());
    setPhase("running");
  };

  const respond = (colorName: ColorName) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (colorName === trial.colorName) {
      setCorrectCount((c) => c + 1);
      if (trial.isEmotional) setEmotionalRts((r) => [...r, rt]);
      else setNeutralRts((r) => [...r, rt]);
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

  const avgNeutral = neutralRts.length ? Math.round(neutralRts.reduce((a, b) => a + b, 0) / neutralRts.length) : 0;
  const avgEmotional = emotionalRts.length ? Math.round(emotionalRts.reduce((a, b) => a + b, 0) / emotionalRts.length) : 0;
  const interferenceEffect = avgEmotional - avgNeutral;
  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="emotional-stroop-test"
          direction="lower"
          value={Math.max(0, interferenceEffect)}
          unitLabel="ms emotional interference"
          headline="Emotional Stroop Result"
          extraStats={[
            { label: "Neutral Word RT", value: `${avgNeutral} ms` },
            { label: "Emotional Word RT", value: `${avgEmotional} ms` },
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
            Ignore the meaning of the word and click the button matching its ink color, as fast as you can. Some
            words are emotionally charged — emotional content tends to slow reaction time even when it&apos;s
            irrelevant to the task.
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
        <p className="text-5xl font-black" style={{ color: trial.colorHex }}>
          {trial.word}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {COLORS.map((c) => (
            <button
              key={c.name}
              onClick={() => respond(c.name)}
              className="rounded-xl border border-border bg-surface-2 px-6 py-3 text-sm font-bold capitalize text-foreground transition-colors hover:border-primary/40"
              style={{ borderLeftColor: c.hex, borderLeftWidth: 4 }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
