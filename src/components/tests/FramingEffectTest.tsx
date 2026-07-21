"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "scenario" | "result";
type Frame = "gain" | "loss";

interface Scenario {
  gainPrompt: string;
  lossPrompt: string;
  optionA: { gain: string; loss: string };
  optionB: { gain: string; loss: string };
}

const SCENARIOS: Scenario[] = [
  {
    gainPrompt: "Your company can act on a $2 million cost-saving initiative.",
    lossPrompt: "Your company faces a $4 million shortfall this quarter.",
    optionA: { gain: "A guaranteed $2 million saved.", loss: "A guaranteed $2 million loss." },
    optionB: {
      gain: "A 50% chance to save $4 million, 50% chance to save nothing.",
      loss: "A 50% chance to lose nothing, 50% chance to lose the full $4 million.",
    },
  },
  {
    gainPrompt: "You've just won a $1,000 prize you can bank or risk.",
    lossPrompt: "You've just been fined $1,000 that you can try to reduce.",
    optionA: { gain: "Keep a guaranteed $500 of it.", loss: "Guaranteed to pay $500 of it." },
    optionB: {
      gain: "A 50% chance to keep the full $1,000, 50% chance to keep nothing.",
      loss: "A 50% chance to pay nothing, 50% chance to pay the full $1,000.",
    },
  },
];

export function FramingEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [frames, setFrames] = useState<Frame[]>([]);
  const [choices, setChoices] = useState<("A" | "B")[]>([]);

  const start = () => {
    setFrames(SCENARIOS.map(() => (Math.random() < 0.5 ? "gain" : "loss")));
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

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>How Wording Shaped Your Choices</ResultHeading>
          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {SCENARIOS.map((s, i) => {
              const frame = frames[i];
              const choice = choices[i];
              const predicted = frame === "gain" ? "A (the safe option)" : "B (the risky option)";
              return (
                <div key={s.gainPrompt} className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                  <p className="text-xs font-semibold text-foreground">
                    Scenario {i + 1}: {frame === "gain" ? "Gain-framed" : "Loss-framed"}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-2">
                    You chose Option <strong className="text-foreground">{choice}</strong>. Research predicts people
                    in this framing tend to pick Option {predicted} more often.
                  </p>
                </div>
              );
            })}
          </div>
          <p className="max-w-sm text-sm text-muted">
            Both options in each scenario had the exact same expected outcome — only the wording differed.
          </p>
          <Callout icon="🪟" title="Why framing matters">
            Research on prospect theory has found people tend to become risk-averse when a choice is framed as a
            gain, but risk-seeking when the identical choice is framed as a loss — even though the underlying math
            never changes.
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
            You&apos;ll make 2 quick decisions. Each has a guaranteed option and a 50/50 gamble with the exact same
            average outcome — pick whichever you&apos;d actually choose.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const scenario = SCENARIOS[index];
  const frame = frames[index];
  const prompt = frame === "gain" ? scenario.gainPrompt : scenario.lossPrompt;
  const optionA = frame === "gain" ? scenario.optionA.gain : scenario.optionA.loss;
  const optionB = frame === "gain" ? scenario.optionB.gain : scenario.optionB.loss;

  return (
    <TestFrame>
      <div className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          Decision {index + 1} / {SCENARIOS.length}
        </p>
        <p className="text-lg font-semibold text-foreground">{prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">Option A:</span> {optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="font-bold text-primary">Option B:</span> {optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
