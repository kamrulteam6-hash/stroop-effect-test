"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { AgeResultScreen } from "@/components/tests/shared/AgeResultScreen";
import { DigitSpanMiniTask, TaskIntro } from "@/components/tests/shared/ageTasks";

type Phase = "idle" | "intro" | "task" | "result";

export function MemoryAgeTest() {
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
    const age = Math.round(66 - (score / 100) * 46);
    return (
      <TestFrame>
        <AgeResultScreen
          age={age}
          ageLabel="Estimated Memory Age"
          headline="Your Memory Age"
          description={
            age <= 30
              ? "You recalled longer digit sequences before making a mistake — a strong, youthful working-memory span."
              : age <= 50
                ? "You recalled a moderate digit span before your first mistake — a typical middle-range result."
                : "Your span topped out a bit earlier today — working-memory span is very sensitive to focus and practice in the moment."
          }
          disclaimer="This is an original, playful digit-span memory minigame. It is not a clinical or scientific measure of memory health or biological age — practice, focus, and typing speed all affect the result."
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">🔢</span>
          <p className="max-w-sm text-sm text-muted">
            Recall growing digit sequences for as long as you can to get a fun &quot;memory age&quot; estimate.
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
      {phase === "intro" && <TaskIntro label="Memorize each digit sequence, then enter it back in order." onStart={() => setPhase("task")} />}
      {phase === "task" && <DigitSpanMiniTask onDone={finish} />}
    </TestFrame>
  );
}
