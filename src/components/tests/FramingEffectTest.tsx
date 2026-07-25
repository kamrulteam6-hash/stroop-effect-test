"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "scenario" | "result";
type Frame = "gain" | "loss";

interface Scenario {
  icon: string;
  gainPrompt: string;
  lossPrompt: string;
  optionA: { gain: string; loss: string };
  optionB: { gain: string; loss: string };
}

const SCENARIOS: Scenario[] = [
  {
    icon: "💼",
    gainPrompt: "Your company can act on a $2 million cost-saving initiative.",
    lossPrompt: "Your company faces a $4 million shortfall this quarter.",
    optionA: { gain: "A guaranteed $2 million saved.", loss: "A guaranteed $2 million loss." },
    optionB: {
      gain: "A 50% chance to save $4 million, 50% chance to save nothing.",
      loss: "A 50% chance to lose nothing, 50% chance to lose the full $4 million.",
    },
  },
  {
    icon: "🎁",
    gainPrompt: "You've just won a $1,000 prize you can bank or risk.",
    lossPrompt: "You've just been fined $1,000 that you can try to reduce.",
    optionA: { gain: "Keep a guaranteed $500 of it.", loss: "Guaranteed to pay $500 of it." },
    optionB: {
      gain: "A 50% chance to keep the full $1,000, 50% chance to keep nothing.",
      loss: "A 50% chance to pay nothing, 50% chance to pay the full $1,000.",
    },
  },
  {
    icon: "🏥",
    gainPrompt: "A disease outbreak threatens 600 people. Doctors have two treatment plans.",
    lossPrompt: "A disease outbreak threatens 600 people. Without treatment, all will die — doctors have two plans.",
    optionA: { gain: "200 people will be saved for certain.", loss: "400 people will die for certain." },
    optionB: {
      gain: "A 1-in-3 chance to save all 600, 2-in-3 chance to save no one.",
      loss: "A 1-in-3 chance nobody dies, 2-in-3 chance all 600 die.",
    },
  },
  {
    icon: "🌾",
    gainPrompt: "Your harvest this season can yield 800kg of grain under two storage plans.",
    lossPrompt: "A pest outbreak threatens 800kg of your stored grain under two plans.",
    optionA: { gain: "A guaranteed 400kg saved.", loss: "A guaranteed 400kg lost." },
    optionB: {
      gain: "A 50% chance to save all 800kg, 50% chance to save none.",
      loss: "A 50% chance to lose nothing, 50% chance to lose all 800kg.",
    },
  },
  {
    icon: "💰",
    gainPrompt: "Your investment portfolio has a chance to recover $10,000 in losses.",
    lossPrompt: "Your investment portfolio is at risk of losing $10,000 more.",
    optionA: { gain: "Guaranteed recovery of $5,000.", loss: "Guaranteed additional loss of $5,000." },
    optionB: {
      gain: "A 50% chance to recover the full $10,000, 50% chance to recover nothing.",
      loss: "A 50% chance to lose nothing more, 50% chance to lose the full $10,000 more.",
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

  const classicPatternCount = choices.filter(
    (c, i) => (frames[i] === "gain" && c === "A") || (frames[i] === "loss" && c === "B"),
  ).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>How Wording Shaped Your Choices</ResultHeading>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">
              {classicPatternCount}/{SCENARIOS.length}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              matched the classic prospect-theory pattern
            </span>
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {SCENARIOS.map((s, i) => {
              const frame = frames[i];
              const choice = choices[i];
              const isRisky = choice === "B";
              return (
                <div key={s.gainPrompt} className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                  <p className="text-xs font-semibold text-foreground">
                    {s.icon} Scenario {i + 1}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        frame === "gain" ? "bg-success/15 text-success" : "bg-danger/15 text-danger"
                      }`}
                    >
                      {frame === "gain" ? "Gain-framed" : "Loss-framed"}
                    </span>
                    <span className="text-muted-2">→</span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        isRisky ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"
                      }`}
                    >
                      {isRisky ? "🎲 You chose the gamble" : "🔒 You chose the safe option"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="max-w-sm text-sm text-muted">
            Both options in every scenario had the exact same expected outcome — only the wording differed. The
            classic pattern is to play it safe when a choice is framed as a gain, and gamble when the identical
            choice is framed as a loss.
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
          <span className="text-5xl">🪟</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll make 5 quick decisions. Each has a guaranteed option and a gamble with the exact same
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
        <span className="text-4xl">{scenario.icon}</span>
        <p className="text-lg font-semibold text-foreground">{prompt}</p>
        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => choose("A")}
            className="rounded-xl border-2 border-primary/30 bg-primary/5 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:border-primary"
          >
            <span className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
              🔒 Option A — Guaranteed
            </span>
            {optionA}
          </button>
          <button
            onClick={() => choose("B")}
            className="rounded-xl border-2 border-accent/30 bg-accent/5 px-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:border-accent"
          >
            <span className="mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-accent">
              🎲 Option B — Gamble
            </span>
            {optionB}
          </button>
        </div>
      </div>
    </TestFrame>
  );
}
