"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { AgeResultScreen } from "@/components/tests/shared/AgeResultScreen";
import { ReactionMiniTask, QuickMathMiniTask, DigitSpanMiniTask, TaskIntro } from "@/components/tests/shared/ageTasks";

type Phase = "idle" | "intro1" | "task1" | "intro2" | "task2" | "intro3" | "task3" | "result";

export function BrainAgeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [scores, setScores] = useState<number[]>([]);

  const start = () => {
    setScores([]);
    setPhase("intro1");
  };

  const finishTask = (score: number, next: Phase) => {
    setScores((s) => [...s, score]);
    setPhase(next);
  };

  if (phase === "result") {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const age = Math.round(70 - (avg / 100) * 50);
    return (
      <TestFrame>
        <AgeResultScreen
          age={age}
          ageLabel="Estimated Brain Age"
          headline="Your Brain Age"
          description={
            age <= 30
              ? "Your combined reaction, math, and memory performance was quick and sharp — a youthful composite score."
              : age <= 50
                ? "Your combined performance landed in a solid middle range across all three quick tasks."
                : "Your combined performance suggests these particular tasks felt harder today — that can reflect fatigue, distraction, or just an off day as much as anything else."
          }
          disclaimer="This is an original, playful composite of three 30-second minigames (reaction, quick math, and memory span), loosely inspired by popular 'brain age' games. It is not a clinical or scientific measure of brain health or biological age — factors like sleep, screen size, and practice change the result a lot."
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🧠</span>
          <p className="max-w-sm text-sm text-muted">
            Complete three quick minigames — reaction speed, mental math, and memory span — to get a fun composite
            &quot;brain age&quot; estimate.
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
      {phase === "intro1" && <TaskIntro label="Round 1: Reaction Speed — click as soon as the box turns green." onStart={() => setPhase("task1")} />}
      {phase === "task1" && <ReactionMiniTask onDone={(s) => finishTask(s, "intro2")} />}
      {phase === "intro2" && <TaskIntro label="Round 2: Quick Math — solve 8 simple problems." onStart={() => setPhase("task2")} />}
      {phase === "task2" && <QuickMathMiniTask onDone={(s) => finishTask(s, "intro3")} />}
      {phase === "intro3" && <TaskIntro label="Round 3: Memory Span — recall growing digit sequences." onStart={() => setPhase("task3")} />}
      {phase === "task3" && <DigitSpanMiniTask onDone={(s) => finishTask(s, "result")} />}
    </TestFrame>
  );
}
