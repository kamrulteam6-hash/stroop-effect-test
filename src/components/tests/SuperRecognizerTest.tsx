"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "study" | "test" | "result";

const AVATAR_POOL = [
  "👨🏻", "👩🏻", "👨🏽", "👩🏽", "👨🏿", "👩🏿", "👱🏻", "👱🏿", "🧑🏼", "🧑🏾",
  "👴🏻", "👵🏻", "🧔🏽", "🧑🏻‍🦰", "🧑🏽‍🦱", "🧑🏿‍🦳", "👨🏻‍🦲", "👩🏽‍🦳", "🧑🏻‍🦳", "🧑🏿‍🦱",
];
const STUDY_COUNT = 8;
const TEST_TRIALS = 12;
const STUDY_S = 16;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildTrials(studied: string[]): { face: string; isOld: boolean }[] {
  const novel = shuffle(AVATAR_POOL.filter((f) => !studied.includes(f))).slice(0, TEST_TRIALS - Math.floor(TEST_TRIALS / 2));
  const oldOnes = shuffle(studied).slice(0, Math.floor(TEST_TRIALS / 2));
  return shuffle([
    ...oldOnes.map((face) => ({ face, isOld: true })),
    ...novel.map((face) => ({ face, isOld: false })),
  ]);
}

export function SuperRecognizerTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [studied, setStudied] = useState<string[]>([]);
  const [trials, setTrials] = useState<{ face: string; isOld: boolean }[]>([]);
  const [index, setIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [falseAlarms, setFalseAlarms] = useState(0);
  const [correctRejections, setCorrectRejections] = useState(0);
  const [timeLeft, setTimeLeft] = useState(STUDY_S);

  useEffect(() => {
    if (phase !== "study") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("test");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    const newStudied = shuffle(AVATAR_POOL).slice(0, STUDY_COUNT);
    setStudied(newStudied);
    setTrials(buildTrials(newStudied));
    setIndex(0);
    setHits(0);
    setMisses(0);
    setFalseAlarms(0);
    setCorrectRejections(0);
    setTimeLeft(STUDY_S);
    setPhase("study");
  };

  const answer = (saidOld: boolean) => {
    const trial = trials[index];
    if (trial.isOld && saidOld) setHits((h) => h + 1);
    else if (trial.isOld && !saidOld) setMisses((m) => m + 1);
    else if (!trial.isOld && saidOld) setFalseAlarms((f) => f + 1);
    else setCorrectRejections((c) => c + 1);

    if (index + 1 >= trials.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  };

  if (phase === "result") {
    const correct = hits + correctRejections;
    const accuracy = (correct / trials.length) * 100;
    const score = Math.max(0, Math.min(100, Math.round(accuracy - falseAlarms * 3)));
    const label =
      score >= 90 ? "Super Recognizer Range" : score >= 70 ? "Above Average" : score >= 50 ? "Typical Range" : "Below Average";
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Super Recognizer Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">{score}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">Face Memory Score</span>
          </div>
          <span className="rounded-full bg-primary/15 px-4 py-1.5 text-sm font-bold text-primary">{label}</span>
          <div className="grid w-full max-w-sm grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{hits}/{hits + misses}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Faces Recognized</div>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{falseAlarms}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">False Alarms</div>
            </div>
          </div>
          <Callout icon="🧑‍🤝‍🧑" title="About this test" tone="primary">
            This is an original face-memory recognition task using generated avatar combinations, inspired by
            research on individual differences in face recognition ability (including &quot;super
            recognizers&quot; who score exceptionally well on such tasks). It is not the Cambridge Face Memory
            Test or any validated clinical/research instrument.
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
          <span className="text-4xl">🧑‍🤝‍🧑</span>
          <p className="max-w-sm text-sm text-muted">
            Study {STUDY_COUNT} unique faces for {STUDY_S} seconds. Then you&apos;ll see {TEST_TRIALS} faces one at
            a time — say whether each one is OLD (one you studied) or NEW.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "study") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-medium text-muted-2">Study — {timeLeft}s</p>
          <div className="grid grid-cols-4 gap-3">
            {studied.map((f, i) => (
              <div key={i} className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-surface-2 text-3xl sm:h-20 sm:w-20">
                {f}
              </div>
            ))}
          </div>
        </div>
      </TestFrame>
    );
  }

  const trial = trials[index];

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xs font-medium text-muted-2">
          Trial {index + 1} / {trials.length}
        </p>
        <p className="text-sm text-muted">Have you seen this face before?</p>
        <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-border bg-surface-2 text-6xl">
          {trial.face}
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            OLD
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            NEW
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
