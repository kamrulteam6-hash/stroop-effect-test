"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { TypeResult } from "@/components/tests/shared/TypeResult";
import { Callout } from "@/components/seo/Callout";

type Axis = "MORN" | "SENS";
type Phase = "idle" | "quiz" | "result";

interface Question {
  axis: Axis;
  text: string;
  reverse: boolean;
}

const QUESTIONS: Question[] = [
  { axis: "MORN", text: "I naturally wake up early, even without an alarm.", reverse: false },
  { axis: "MORN", text: "I feel most alert and productive in the morning.", reverse: false },
  { axis: "MORN", text: "I start losing energy in the early evening.", reverse: false },
  { axis: "MORN", text: "I do my best thinking late at night.", reverse: true },
  { axis: "MORN", text: "I struggle to get going before mid-morning.", reverse: true },
  { axis: "MORN", text: "I'd happily go to bed before 10pm most nights.", reverse: false },
  { axis: "SENS", text: "I wake up at the slightest noise or light.", reverse: false },
  { axis: "SENS", text: "My sleep is easily disrupted by stress or an unfamiliar environment.", reverse: false },
  { axis: "SENS", text: "I often wake up in the middle of the night and have trouble falling back asleep.", reverse: false },
  { axis: "SENS", text: "I feel groggy and need time to fully wake up, even after enough sleep.", reverse: false },
  { axis: "SENS", text: "My mind races with thoughts when I'm trying to fall asleep.", reverse: false },
  { axis: "SENS", text: "I need very specific conditions (quiet, dark, temperature) to sleep well.", reverse: false },
];

interface TypeInfo {
  name: string;
  icon: string;
  description: string;
}

const TYPES: Record<string, TypeInfo> = {
  lion: {
    name: "Lion",
    icon: "🦁",
    description:
      "You tend to wake early, feel most productive in the morning, and sleep fairly soundly. Lions often thrive with an early bedtime and knocking out demanding tasks before noon.",
  },
  bear: {
    name: "Bear",
    icon: "🐻",
    description:
      "You tend to follow a fairly typical sunrise-to-sunset rhythm without extreme morningness or sensitivity — the most common pattern. Bears usually do well with a consistent, moderate schedule.",
  },
  wolf: {
    name: "Wolf",
    icon: "🐺",
    description:
      "You tend to feel more energized later in the day and evening, with sleep that isn't easily disrupted once you're actually asleep. Wolves often do their best work in the afternoon and night.",
  },
  dolphin: {
    name: "Dolphin",
    icon: "🐬",
    description:
      "You tend to be a light, easily disrupted sleeper without a strong morning or evening preference. Dolphins often benefit most from a very consistent routine and a calm pre-sleep wind-down.",
  },
};

export function SleepChronotypeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const start = () => {
    setAnswers([]);
    setIndex(0);
    setPhase("quiz");
  };

  const answer = (value: number) => {
    const next = [...answers, value];
    if (index + 1 >= QUESTIONS.length) {
      setAnswers(next);
      setPhase("result");
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  const axisScore = (axis: Axis): number => {
    const scores = QUESTIONS.map((q, i) => ({ q, v: answers[i] })).filter(({ q }) => q.axis === axis);
    const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
    const avg = sum / scores.length;
    return ((avg - 1) / 4) * 100;
  };

  if (phase === "result") {
    const morningness = axisScore("MORN");
    const sensitivity = axisScore("SENS");
    const highMorn = morningness >= 50;
    const highSens = sensitivity >= 50;
    const typeKey = highSens ? "dolphin" : highMorn ? "lion" : morningness >= 30 ? "bear" : "wolf";
    const type = TYPES[typeKey];

    return (
      <TestFrame>
        <div className="flex w-full flex-col items-center gap-6">
          <TypeResult
            icon={type.icon}
            typeName={type.name}
            typeSubtitle="Sleep Chronotype"
            description={type.description}
            breakdown={[
              { key: "MORN", label: "Morningness", value: Math.round(morningness) },
              { key: "SENS", label: "Sleep Sensitivity", value: Math.round(sensitivity) },
            ]}
          />
          <Callout icon="🌙" title="Not a sleep-medicine diagnosis" tone="gold">
            This is an original, informal self-report screener inspired by the popular Lion / Bear / Wolf / Dolphin
            chronotype framework. It is not a validated clinical or chronobiology instrument, and your true
            circadian rhythm can only be measured with tools like actigraphy or a sleep lab.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Answer 12 short statements about your natural energy and sleep patterns to discover your sleep
            chronotype: Lion, Bear, Wolf, or Dolphin.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {index + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">{q.text}</p>

        <div className="grid w-full grid-cols-5 gap-2">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => answer(i + 1)}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-1 py-3 text-center text-[10px] font-medium text-muted transition-colors hover:border-primary hover:text-foreground sm:text-xs"
            >
              <span className="text-lg font-bold text-foreground">{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
