"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { AgeResultScreen } from "@/components/tests/shared/AgeResultScreen";
import { GoNoGoMiniTask, TaskIntro } from "@/components/tests/shared/ageTasks";

type Phase = "idle" | "intro" | "task" | "result";

export function AttentionAgeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);

  const start = () => {
    setPhase("intro");
  };

  const finish = (s: number) => {
    setScore(s);
    setPhase("result");
  };

  if (phase === "result") {
    const age = Math.round(65 - (score / 100) * 45);
    return (
      <TestFrame>
        <AgeResultScreen
          age={age}
          ageLabel="Estimated Attention Age"
          headline="Your Attention Age"
          description={
            age <= 30
              ? "You caught the go targets quickly while mostly avoiding the no-go traps — a sharp, youthful attention profile."
              : age <= 50
                ? "You caught most targets with a moderate number of misses or false clicks — a typical middle-range result."
                : "You had more misses or false clicks than the faster range — this task is sensitive to distraction and fatigue in the moment."
          }
          disclaimer="This is an original, playful go/no-go sustained-attention minigame. It is not a clinical or scientific measure of attention health or biological age — screen distractions, device lag, and practice all affect the result."
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">👁️</span>
          <p className="max-w-sm text-sm text-muted">
            Complete a quick 16-trial go/no-go attention check to get a fun &quot;attention age&quot; estimate.
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
      {phase === "intro" && (
        <TaskIntro label="Click for circles 🔵 as fast as you can. Do NOT click for triangles 🔺." onStart={() => setPhase("task")} />
      )}
      {phase === "task" && <GoNoGoMiniTask onDone={finish} />}
    </TestFrame>
  );
}
