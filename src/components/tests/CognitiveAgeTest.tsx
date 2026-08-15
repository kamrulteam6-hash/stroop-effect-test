"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { AgeResultScreen } from "@/components/tests/shared/AgeResultScreen";
import { QuickMathMiniTask, DigitSpanMiniTask, TaskIntro } from "@/components/tests/shared/ageTasks";

type Phase = "idle" | "intro1" | "task1" | "intro2" | "task2" | "result";

export function CognitiveAgeTest() {
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
    const age = Math.round(68 - (avg / 100) * 48);
    return (
      <TestFrame>
        <AgeResultScreen
          age={age}
          ageLabel="Estimated Cognitive Age"
          headline="Your Cognitive Age"
          description={
            age <= 30
              ? "Your reasoning and working-memory performance today was quick and accurate — a youthful composite."
              : age <= 50
                ? "Your reasoning and working-memory performance landed in a solid middle range."
                : "Today's reasoning and memory tasks felt tougher — that's often about focus and practice in the moment, not a fixed trait."
          }
          disclaimer="This is an original, playful composite of two quick tasks (mental math and memory span), loosely inspired by popular 'cognitive age' games. It is not a clinical or scientific measure of cognitive health or biological age."
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🧩</span>
          <p className="max-w-sm text-sm text-muted">
            Complete two quick tasks — mental math and memory span — to get a fun composite &quot;cognitive
            age&quot; estimate.
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
      {phase === "intro1" && <TaskIntro label="Round 1: Quick Math — solve 8 simple problems." onStart={() => setPhase("task1")} />}
      {phase === "task1" && <QuickMathMiniTask onDone={(s) => finishTask(s, "intro2")} />}
      {phase === "intro2" && <TaskIntro label="Round 2: Memory Span — recall growing digit sequences." onStart={() => setPhase("task2")} />}
      {phase === "task2" && <DigitSpanMiniTask onDone={(s) => finishTask(s, "result")} />}
    </TestFrame>
  );
}
