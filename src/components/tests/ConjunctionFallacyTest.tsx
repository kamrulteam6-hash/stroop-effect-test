"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "scenario" | "result";

interface Scenario {
  name: string;
  age: number;
  avatar: string;
  description: string;
  optionA: string;
  optionB: string;
}

const SCENARIOS: Scenario[] = [
  {
    name: "Jordan",
    age: 34,
    avatar: "🧮",
    description: "extremely detail-oriented, enjoys solving puzzles, and has a degree in mathematics.",
    optionA: "Jordan works in finance.",
    optionB: "Jordan works in finance and plays chess competitively.",
  },
  {
    name: "Priya",
    age: 45,
    avatar: "🌱",
    description: "deeply passionate about environmental causes, and has organized several community clean-up events.",
    optionA: "Priya works in marketing.",
    optionB: "Priya works in marketing and is an active environmental activist.",
  },
  {
    name: "Marcus",
    age: 29,
    avatar: "🎸",
    description: "plays guitar in a band, and has several visible tattoos.",
    optionA: "Marcus works as an accountant.",
    optionB: "Marcus works as an accountant and also performs at local music venues.",
  },
  {
    name: "Elena",
    age: 38,
    avatar: "🎨",
    description:
      "spends weekends volunteering at animal shelters, has traveled to over 20 countries, and often journals about her dreams.",
    optionA: "Elena works as a graphic designer.",
    optionB: "Elena works as a graphic designer and practices yoga every morning.",
  },
  {
    name: "Sam",
    age: 52,
    avatar: "📚",
    description:
      "has published two research papers, enjoys debating philosophy late into the night, and rarely watches television.",
    optionA: "Sam teaches high school.",
    optionB: "Sam teaches high school and is writing a novel in his spare time.",
  },
  {
    name: "Nadia",
    age: 24,
    avatar: "🏋️‍♀️",
    description:
      "competed in track and field through college, follows a strict meal-prep routine, and wakes up at 5 a.m. to train.",
    optionA: "Nadia works in healthcare.",
    optionB: "Nadia works in healthcare and is training for a triathlon.",
  },
];

function VennHint() {
  return (
    <svg viewBox="0 0 220 110" width="200" height="100">
      <circle cx="95" cy="55" r="48" fill="var(--color-primary)" fillOpacity="0.18" stroke="var(--color-primary)" strokeWidth="2" />
      <circle cx="140" cy="55" r="26" fill="var(--color-accent)" fillOpacity="0.35" stroke="var(--color-accent)" strokeWidth="2" />
      <text x="55" y="59" fontSize="12" fontWeight="700" fill="var(--color-primary)">A</text>
      <text x="132" y="59" fontSize="11" fontWeight="700" fill="var(--color-accent)">A+B</text>
    </svg>
  );
}

export function ConjunctionFallacyTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const start = () => {
    setChoices([]);
    setIndex(0);
    setPhase("scenario");
  };

  const choose = (choice: "A" | "B") => {
    const next = [...choices, choice];
    setChoices(next);
    if (index + 1 >= SCENARIOS.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const fallacyCount = choices.filter((c) => c === "B").length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="conjunction-fallacy-test"
          direction="lower"
          value={fallacyCount}
          unitLabel={`out of ${SCENARIOS.length} times you picked the impossible option`}
          shareLabel={`I picked the logically impossible option ${fallacyCount}/${SCENARIOS.length} times on the Conjunction Fallacy Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-sm flex-col items-center gap-4">
            <VennHint />
            <p className="text-[11px] text-muted-2">
              The small &quot;A+B&quot; slice always sits <em>inside</em>{" "}
              the bigger &quot;A&quot; circle — so A+B can never be more probable than A alone, no matter how well
              the story fits the stereotype.
            </p>
            <div className="grid w-full grid-cols-3 gap-2">
              {SCENARIOS.map((s, i) => {
                const wasFallacy = choices[i] === "B";
                return (
                  <div
                    key={s.name}
                    className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-3 ${
                      wasFallacy ? "border-danger/30 bg-danger/10" : "border-success/30 bg-success/10"
                    }`}
                  >
                    <span className="text-xl">{s.avatar}</span>
                    <span className="text-[10px] font-semibold text-foreground">{s.name}</span>
                    <span className="text-sm">{wasFallacy ? "⚠️" : "✅"}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🧮</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll meet 6 fictional people through a short description, then pick which of two statements about
            each one seems more likely to be true.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const scenario = SCENARIOS[index];

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          Scenario {index + 1} / {SCENARIOS.length}
        </p>
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
          {scenario.avatar}
        </span>
        <p className="text-lg font-semibold text-foreground">
          {scenario.name}, {scenario.age}, is {scenario.description}
        </p>
        <p className="text-sm text-muted">Which is more likely?</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">A:</span> {scenario.optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">B:</span> {scenario.optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
