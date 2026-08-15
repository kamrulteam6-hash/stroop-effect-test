"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";
import { GoNoGoMiniTask, QuickMathMiniTask, TaskIntro } from "@/components/tests/shared/ageTasks";

type Phase = "idle" | "intro1" | "task1" | "intro2" | "task2" | "intro3" | "task3" | "result";

const PLANNING_QUESTIONS: { q: string; options: string[]; correct: number }[] = [
  {
    q: "You must run 3 errands before a store closes in 30 minutes: the bank (10 min away), the pharmacy (5 min away, same direction as the bank), and the post office (15 min away, opposite direction). What's the most efficient order?",
    options: ["Bank, then Pharmacy, then Post Office", "Post Office, then Bank, then Pharmacy", "Pharmacy, then Bank, then Post Office", "Post Office, then Pharmacy, then Bank"],
    correct: 2,
  },
  {
    q: "You're cooking a meal where the rice takes 20 minutes, the vegetables take 10 minutes, and the sauce takes 5 minutes — and everything should finish at the same time. When should you start the vegetables?",
    options: ["At the same time as the rice", "10 minutes after starting the rice", "15 minutes after starting the rice", "Before starting the rice"],
    correct: 1,
  },
  {
    q: "You need to charge your phone (needs an outlet), print a document (needs the printer in another room), and pack your bag before leaving in 15 minutes. What should you start first?",
    options: ["Pack your bag", "Print the document", "Charge your phone", "It doesn't matter"],
    correct: 2,
  },
];

export function ExecutiveFunctionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [inhibitionScore, setInhibitionScore] = useState(0);
  const [workingMemoryScore, setWorkingMemoryScore] = useState(0);
  const [planningIndex, setPlanningIndex] = useState(0);
  const [planningCorrect, setPlanningCorrect] = useState(0);
  const [planningScore, setPlanningScore] = useState(0);

  const start = () => {
    setPlanningIndex(0);
    setPlanningCorrect(0);
    setPhase("intro1");
  };

  const answerPlanning = (i: number) => {
    const isCorrect = i === PLANNING_QUESTIONS[planningIndex].correct;
    const nextCorrect = planningCorrect + (isCorrect ? 1 : 0);
    setPlanningCorrect(nextCorrect);
    if (planningIndex + 1 >= PLANNING_QUESTIONS.length) {
      setPlanningScore((nextCorrect / PLANNING_QUESTIONS.length) * 100);
      setPhase("result");
    } else {
      setPlanningIndex(planningIndex + 1);
    }
  };

  if (phase === "result") {
    const traits: TraitScore[] = [
      { key: "INH", label: "Inhibition (Go/No-Go)", value: inhibitionScore, description: "How well you avoided clicking on the no-go triangle." },
      { key: "WM", label: "Working Memory Updating", value: workingMemoryScore, description: "Accuracy on the rapid mental-math round." },
      { key: "PLAN", label: "Planning", value: planningScore, description: "Accuracy identifying the most efficient plan in each scenario." },
    ];
    const overall = Math.round((inhibitionScore + workingMemoryScore + planningScore) / 3);

    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Executive Function Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">{overall}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">Composite Score</span>
          </div>
          <div className="w-full max-w-md">
            <TraitBars traits={traits} />
          </div>
          <Callout icon="🧠" title="Three facets, one snapshot" tone="primary">
            This is an original composite of three quick tasks covering inhibition (stopping an automatic
            response), working-memory updating (rapid mental math), and planning (choosing an efficient sequence).
            It is not a clinical neuropsychological battery and cannot diagnose executive dysfunction.
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
          <span className="text-4xl">🗂️</span>
          <p className="max-w-sm text-sm text-muted">
            Complete three short rounds covering inhibition, working memory, and planning to get a composite
            executive function breakdown.
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
      {phase === "intro1" && <TaskIntro label="Round 1: Inhibition — click circles 🔵, do NOT click triangles 🔺." onStart={() => setPhase("task1")} />}
      {phase === "task1" && <GoNoGoMiniTask onDone={(s) => { setInhibitionScore(s); setPhase("intro2"); }} />}
      {phase === "intro2" && <TaskIntro label="Round 2: Working Memory — solve 8 quick math problems." onStart={() => setPhase("task2")} />}
      {phase === "task2" && <QuickMathMiniTask onDone={(s) => { setWorkingMemoryScore(s); setPhase("intro3"); }} />}
      {phase === "intro3" && <TaskIntro label="Round 3: Planning — choose the most efficient plan for 3 short scenarios." onStart={() => setPhase("task3")} />}
      {phase === "task3" && (
        <div className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium text-muted-2">
            Scenario {planningIndex + 1} / {PLANNING_QUESTIONS.length}
          </p>
          <p className="text-sm font-semibold text-foreground">{PLANNING_QUESTIONS[planningIndex].q}</p>
          <div className="flex w-full flex-col gap-2">
            {PLANNING_QUESTIONS[planningIndex].options.map((opt, i) => (
              <button
                key={opt}
                onClick={() => answerPlanning(i)}
                className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground hover:border-primary"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </TestFrame>
  );
}
