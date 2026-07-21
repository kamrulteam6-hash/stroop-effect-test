"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "intro" | "question" | "result";

const TRAITS = ["Intelligence", "Trustworthiness", "Kindness", "Competence", "Sense of Humor"];
const LABELS = ["Very Low", "Low", "Average", "High", "Very High"];

const PEOPLE = [
  {
    name: "Sam",
    detail: "is very physically fit and highly disciplined about their daily exercise routine.",
  },
  {
    name: "Riley",
    detail: "has been late to several meetings recently.",
  },
];

export function HaloEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [personIndex, setPersonIndex] = useState(0);
  const [traitIndex, setTraitIndex] = useState(0);
  const [ratings, setRatings] = useState<number[][]>([[], []]);

  const start = () => {
    setRatings([[], []]);
    setPersonIndex(0);
    setTraitIndex(0);
    setPhase("intro");
  };

  const beginQuestions = () => setPhase("question");

  const answer = (value: number) => {
    const next = ratings.map((arr, i) => (i === personIndex ? [...arr, value] : arr));
    setRatings(next);

    if (traitIndex + 1 >= TRAITS.length) {
      if (personIndex + 1 >= PEOPLE.length) {
        setPhase("result");
      } else {
        setPersonIndex(personIndex + 1);
        setTraitIndex(0);
        setPhase("intro");
      }
    } else {
      setTraitIndex(traitIndex + 1);
    }
  };

  const avg = (arr: number[]) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);
  const avgSam = avg(ratings[0]);
  const avgRiley = avg(ratings[1]);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>How One Detail Shaped Your Ratings</ResultHeading>
          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{avgSam.toFixed(1)}/5</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Sam (fit &amp; disciplined)</div>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{avgRiley.toFixed(1)}/5</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Riley (was late recently)</div>
            </div>
          </div>
          <p className="max-w-sm text-sm text-muted">
            You had zero real information about either person&apos;s intelligence, trustworthiness, kindness,
            competence, or sense of humor — yet most people rate the person described positively (Sam) higher across
            the board than the person described negatively (Riley).
          </p>
          <Callout icon="😇" title="Why this happens">
            The halo effect causes one salient trait — positive or negative — to color your entire impression of
            someone, even for qualities that have no logical connection to that trait.
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
            You&apos;ll read one detail about two different people, then rate each of them on 5 traits you have no
            real information about.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "intro") {
    const person = PEOPLE[personIndex];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
            Person {personIndex + 1} / {PEOPLE.length}
          </p>
          <p className="max-w-sm text-lg font-semibold text-foreground">
            {person.name} {person.detail}
          </p>
          <Button size="lg" onClick={beginQuestions}>
            Continue
          </Button>
        </div>
      </TestFrame>
    );
  }

  const person = PEOPLE[personIndex];
  const trait = TRAITS[traitIndex];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <p className="text-xs font-medium text-muted-2">
          {person.name}: trait {traitIndex + 1} / {TRAITS.length}
        </p>
        <p className="text-center text-lg font-semibold text-foreground">
          How would you rate {person.name}&apos;s {trait.toLowerCase()}?
        </p>
        <div className="grid w-full grid-cols-5 gap-2">
          {LABELS.map((label, i) => (
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
