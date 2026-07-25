"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "intro" | "rating" | "result";
type Valence = "positive" | "negative";

interface Person {
  name: string;
  age: number;
  avatar: string;
  role: string;
  story: string;
  valence: Valence;
}

interface Trait {
  key: string;
  label: string;
  icon: string;
}

const PEOPLE: Person[] = [
  {
    name: "Maya",
    age: 29,
    avatar: "🏃‍♀️",
    role: "Marketing Coordinator",
    story:
      "Maya just crossed the finish line of her third marathon this year. She wakes up at 5 a.m. every single day to train, rain or shine, and has kept that streak going for six years straight.",
    valence: "positive",
  },
  {
    name: "Derek",
    age: 34,
    avatar: "🕒",
    role: "Sales Associate",
    story:
      "Derek has shown up late to the last four team meetings in a row. Twice, the meeting had already wrapped up by the time he walked in, and he never sent an apology or a heads-up beforehand.",
    valence: "negative",
  },
  {
    name: "Priya",
    age: 41,
    avatar: "👔",
    role: "Operations Manager",
    story:
      "Priya always arrives looking immaculately put-together — tailored blazer, not a hair out of place, shoes polished. Coworkers often comment on how effortlessly stylish she seems, even on the most ordinary Tuesday.",
    valence: "positive",
  },
  {
    name: "Tom",
    age: 26,
    avatar: "📎",
    role: "Junior Analyst",
    story:
      "Tom's desk is a chaotic pile of loose papers, empty coffee cups, and sticky notes stuck to his monitor. His handwritten meeting notes are famously illegible — even he sometimes can't read his own writing back.",
    valence: "negative",
  },
];

const TRAITS: Trait[] = [
  { key: "intelligence", label: "Intelligence", icon: "🧠" },
  { key: "trust", label: "Trustworthiness", icon: "🤝" },
  { key: "kindness", label: "Kindness", icon: "💗" },
  { key: "competence", label: "Competence", icon: "💼" },
  { key: "humor", label: "Sense of Humor", icon: "😄" },
];

function StarRow({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          aria-label={`Rate ${n} out of 5`}
          className={`text-2xl transition-transform hover:scale-110 ${
            n <= value ? "text-gold" : "text-border"
          }`}
        >
          {n <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}

export function HaloEffectTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [personIndex, setPersonIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<string, number>[]>([]);
  const [current, setCurrent] = useState<Record<string, number>>({});

  const start = () => {
    setRatings([]);
    setPersonIndex(0);
    setCurrent({});
    setPhase("intro");
  };

  const beginRating = () => setPhase("rating");

  const rate = (traitKey: string, value: number) => {
    setCurrent((prev) => ({ ...prev, [traitKey]: value }));
  };

  const nextPerson = () => {
    const next = [...ratings, current];
    setRatings(next);
    setCurrent({});

    if (personIndex + 1 >= PEOPLE.length) {
      setPhase("result");
    } else {
      setPersonIndex(personIndex + 1);
      setPhase("intro");
    }
  };

  const allRated = TRAITS.every((t) => current[t.key] !== undefined);

  const personAvg = (r: Record<string, number>) => {
    const values = TRAITS.map((t) => r[t.key] ?? 0);
    return values.reduce((a, b) => a + b, 0) / values.length;
  };

  const positiveIndices = PEOPLE.map((p, i) => (p.valence === "positive" ? i : -1)).filter((i) => i >= 0);
  const negativeIndices = PEOPLE.map((p, i) => (p.valence === "negative" ? i : -1)).filter((i) => i >= 0);

  const traitAvg = (traitKey: string, indices: number[]) => {
    const values = indices.map((i) => ratings[i]?.[traitKey] ?? 0);
    return values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  };

  const overallPositiveAvg = positiveIndices.length
    ? positiveIndices.reduce((sum, i) => sum + personAvg(ratings[i] ?? {}), 0) / positiveIndices.length
    : 0;
  const overallNegativeAvg = negativeIndices.length
    ? negativeIndices.reduce((sum, i) => sum + personAvg(ratings[i] ?? {}), 0) / negativeIndices.length
    : 0;
  const haloGap = overallPositiveAvg - overallNegativeAvg;

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex w-full flex-col items-center gap-7 text-center">
          <ResultHeading>Your Halo Effect Results</ResultHeading>

          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">
              {haloGap >= 0 ? "+" : ""}
              {haloGap.toFixed(1)}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              Halo Gap (out of 5)
            </span>
          </div>

          <div className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {PEOPLE.map((p, i) => (
              <div key={p.name} className="rounded-xl border border-border bg-surface-2 px-2 py-3 text-center">
                <span className="text-3xl">{p.avatar}</span>
                <div className="mt-1 text-sm font-bold text-foreground">{p.name}</div>
                <div
                  className={`text-[10px] font-semibold uppercase tracking-wide ${
                    p.valence === "positive" ? "text-success" : "text-danger"
                  }`}
                >
                  {p.valence === "positive" ? "Positive detail" : "Negative detail"}
                </div>
                <div className="mt-1 text-lg font-bold text-primary">{personAvg(ratings[i] ?? {}).toFixed(1)}/5</div>
              </div>
            ))}
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 text-left">
            {TRAITS.map((t) => {
              const posVal = traitAvg(t.key, positiveIndices);
              const negVal = traitAvg(t.key, negativeIndices);
              return (
                <div key={t.key}>
                  <div className="mb-1 flex items-center justify-between text-xs font-semibold text-foreground">
                    <span>
                      {t.icon} {t.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-16 shrink-0 text-[10px] font-medium text-success">Positive</span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-success transition-[width] duration-700"
                        style={{ width: `${(posVal / 5) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right text-[11px] font-bold text-foreground">
                      {posVal.toFixed(1)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="w-16 shrink-0 text-[10px] font-medium text-danger">Negative</span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-danger transition-[width] duration-700"
                        style={{ width: `${(negVal / 5) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right text-[11px] font-bold text-foreground">
                      {negVal.toFixed(1)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="max-w-sm text-sm text-muted">
            You had zero real information about any of these four people&apos;s intelligence, trustworthiness,
            kindness, competence, or sense of humor — yet most people rate Maya and Priya (given one positive
            detail) noticeably higher across the board than Derek and Tom (given one negative detail).
          </p>
          <Callout icon="😇" title="Why this happens">
            The halo effect causes one salient trait — positive or negative — to color your entire impression of
            someone, even for qualities that have no logical connection to that trait. A bigger Halo Gap means the
            single detail swayed your unrelated ratings more strongly.
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
            You&apos;ll meet 4 fictional people, each introduced with a short story containing exactly one real
            detail about them. Rate each person on 5 traits you have zero actual information about, and see how
            much that one detail secretly shapes your whole impression.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const person = PEOPLE[personIndex];

  if (phase === "intro") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-2">
            Person {personIndex + 1} / {PEOPLE.length}
          </p>
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
            {person.avatar}
          </span>
          <div>
            <p className="text-lg font-bold text-foreground">
              {person.name}, {person.age}
            </p>
            <p className="text-xs text-muted-2">{person.role}</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">{person.story}</p>
          <Button size="lg" onClick={beginRating}>
            Rate {person.name}
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl">
            {person.avatar}
          </span>
          <div className="text-left">
            <p className="text-sm font-bold text-foreground">{person.name}</p>
            <p className="text-[11px] text-muted-2">
              Person {personIndex + 1} / {PEOPLE.length}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          {TRAITS.map((t) => (
            <div key={t.key} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-2 px-4 py-3">
              <span className="text-sm font-medium text-foreground">
                {t.icon} {t.label}
              </span>
              <StarRow value={current[t.key] ?? 0} onChange={(v) => rate(t.key, v)} />
            </div>
          ))}
        </div>

        <Button size="lg" onClick={nextPerson} disabled={!allRated}>
          {personIndex + 1 >= PEOPLE.length ? "See Results" : "Next Person"}
        </Button>
      </div>
    </TestFrame>
  );
}
