"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "question" | "result";

interface Question {
  icon: string;
  prompt: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    icon: "🔤",
    prompt: "In English, which is more common?",
    optionA: "Words that start with the letter K",
    optionB: "Words that have K as the third letter",
    correct: "B",
    explanation:
      "Words with K as the third letter are actually more frequent, but words starting with K are far easier to recall, making them feel more common.",
  },
  {
    icon: "🩺",
    prompt: "In the US, which claims more lives per year?",
    optionA: "Diabetes",
    optionB: "Homicide",
    correct: "A",
    explanation:
      "Diabetes causes significantly more deaths annually than homicide, but homicide receives far more dramatic media coverage, making it feel more common.",
  },
  {
    icon: "✈️",
    prompt: "In the US, which causes more fatalities?",
    optionA: "Being struck by a falling object",
    optionB: "Commercial airplane crashes",
    correct: "A",
    explanation:
      "Commercial air travel is extremely safe, and falling-object fatalities are actually more common — but plane crashes are far more vivid and memorable.",
  },
  {
    icon: "🔤",
    prompt: "In English, which is more common?",
    optionA: "Words ending in \"-ing\"",
    optionB: "Words with \"n\" as the second-to-last letter",
    correct: "B",
    explanation:
      "Every word ending in \"-ing\" automatically has \"n\" as its second-to-last letter, plus many other words qualify too — so the broader category can never be smaller.",
  },
  {
    icon: "🌪️",
    prompt: "In the US, which causes more deaths per year?",
    optionA: "Tornadoes",
    optionB: "Asthma attacks",
    correct: "B",
    explanation:
      "Asthma causes far more deaths annually than tornadoes, but tornado footage is dramatic and heavily covered by disaster media, making it feel like the bigger threat.",
  },
  {
    icon: "🦈",
    prompt: "In the US, which causes more deaths per year?",
    optionA: "Shark attacks",
    optionB: "Vending machines tipping over",
    correct: "B",
    explanation:
      "Vending-machine accidents kill about as many or more people in the US each year than sharks do, but shark attacks are rare, vivid, and heavily sensationalized.",
  },
  {
    icon: "🚗",
    prompt: "Which is statistically more dangerous per mile traveled?",
    optionA: "Flying on a commercial plane",
    optionB: "Driving a car",
    correct: "B",
    explanation:
      "Car travel is far riskier per mile than flying, but plane crashes are rare, dramatic news events, while car crashes are common and rarely make headlines.",
  },
  {
    icon: "🛋️",
    prompt: "In a typical non-terror year, which kills more Americans?",
    optionA: "Terrorism",
    optionB: "Furniture or TVs tipping over",
    correct: "B",
    explanation:
      "Tip-over accidents involving furniture and TVs have outpaced terrorism deaths in most recent years, despite terrorism dominating news coverage and public fear.",
  },
  {
    icon: "🔤",
    prompt: "In English, which is more common?",
    optionA: "Words that start with the letter R",
    optionB: "Words that have R as the third letter",
    correct: "B",
    explanation:
      "Just like with the letter K, words with R in the third position are actually more common — but words starting with R come to mind far more easily.",
  },
  {
    icon: "🚨",
    prompt: "Most violent crime victims are attacked by...",
    optionA: "Someone they already know",
    optionB: "A complete stranger",
    correct: "A",
    explanation:
      "Most violent crime involves people who already know each other, but \"stranger danger\" stories dominate news and crime dramas, skewing our sense of the risk.",
  },
  {
    icon: "🪜",
    prompt: "In the US, which causes more accidental deaths per year?",
    optionA: "Falling down stairs at home",
    optionB: "Skydiving accidents",
    correct: "A",
    explanation:
      "Household stair falls kill far more people annually than skydiving does, but skydiving feels riskier because it's an unusual, high-adrenaline activity.",
  },
  {
    icon: "🍽️",
    prompt: "In the US, which causes more accidental deaths per year?",
    optionA: "Choking on food",
    optionB: "Drowning in a swimming pool",
    correct: "A",
    explanation:
      "Choking is a more common cause of accidental death nationally than pool drowning, even though pool-safety warnings tend to get more attention.",
  },
];

export function AvailabilityHeuristicTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const start = () => {
    setIndex(0);
    setChoices([]);
    setPhase("question");
  };

  const choose = (choice: "A" | "B") => {
    const next = [...choices, choice];
    setChoices(next);
    if (index + 1 >= QUESTIONS.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  const correctCount = choices.filter((c, i) => c === QUESTIONS[i].correct).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="availability-heuristic-test"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${QUESTIONS.length} correctly judged`}
          shareLabel={`I correctly judged ${correctCount}/${QUESTIONS.length} frequency comparisons on the Availability Heuristic Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {QUESTIONS.map((q, i) => {
              const wasCorrect = choices[i] === q.correct;
              return (
                <div
                  key={i}
                  className={`rounded-xl border px-4 py-3 ${
                    wasCorrect ? "border-success/30 bg-success/10" : "border-danger/30 bg-danger/10"
                  }`}
                >
                  <p className="flex items-start gap-2 text-xs font-semibold text-foreground">
                    <span className="text-base leading-none">{q.icon}</span>
                    <span>
                      {wasCorrect ? "✅" : "❌"} {q.prompt}
                    </span>
                  </p>
                  <p className="mt-1 text-[11px] text-muted-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🧠</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll judge 12 quick frequency comparisons. Pick whichever option you genuinely think is more
            common.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <div className="w-full max-w-xs">
          <p className="mb-1.5 text-xs font-medium text-muted-2">
            Question {index + 1} / {QUESTIONS.length}
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>
        <span className="text-4xl">{q.icon}</span>
        <p className="text-lg font-semibold text-foreground">{q.prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {q.optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            {q.optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
