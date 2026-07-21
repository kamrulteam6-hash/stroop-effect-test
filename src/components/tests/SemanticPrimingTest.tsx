"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "blank" | "prime" | "gap" | "target" | "result";
type Condition = "related" | "unrelated" | "nonword";

interface Trial {
  prime: string;
  target: string;
  isWord: boolean;
  condition: Condition;
}

interface TrialResult extends Trial {
  correct: boolean;
  rt: number | null;
}

const RELATED_TRIALS: [string, string][] = [
  ["doctor", "nurse"],
  ["bread", "butter"],
  ["cat", "dog"],
  ["king", "queen"],
  ["salt", "pepper"],
  ["black", "white"],
];

const UNRELATED_TRIALS: [string, string][] = [
  ["table", "cloud"],
  ["hot", "pencil"],
  ["sun", "ladder"],
  ["river", "guitar"],
  ["mountain", "whistle"],
  ["garden", "engine"],
];

const NONWORD_TRIALS: [string, string][] = [
  ["chair", "blorp"],
  ["window", "trelk"],
  ["forest", "fintal"],
  ["pencil", "drovak"],
  ["ocean", "splennic"],
  ["candle", "wuvorn"],
  ["bicycle", "clenthy"],
  ["blanket", "brantip"],
];

const PRIME_MS = 300;
const GAP_MS = 100;
const RESPONSE_WINDOW_MS = 1500;

function buildTrials(): Trial[] {
  const trials: Trial[] = [
    ...RELATED_TRIALS.map(([prime, target]) => ({ prime, target, isWord: true, condition: "related" as Condition })),
    ...UNRELATED_TRIALS.map(([prime, target]) => ({
      prime,
      target,
      isWord: true,
      condition: "unrelated" as Condition,
    })),
    ...NONWORD_TRIALS.map(([prime, target]) => ({
      prime,
      target,
      isWord: false,
      condition: "nonword" as Condition,
    })),
  ];
  for (let i = trials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [trials[i], trials[j]] = [trials[j], trials[i]];
  }
  return trials;
}

export function SemanticPrimingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [totalTrials, setTotalTrials] = useState(0);
  const [currentTrial, setCurrentTrial] = useState<Trial | null>(null);
  const trialsRef = useRef<Trial[]>([]);
  const respondedRef = useRef(false);
  const targetAt = useRef(0);
  const timeoutRef = useRef<number | undefined>(undefined);
  const [results, setResults] = useState<TrialResult[]>([]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const runTrial = (index: number) => {
    const trials = trialsRef.current;
    if (index >= trials.length) {
      setPhase("result");
      return;
    }
    setTrialIndex(index);
    setCurrentTrial(trials[index]);
    setPhase("blank");

    timeoutRef.current = window.setTimeout(() => {
      setPhase("prime");
      timeoutRef.current = window.setTimeout(() => {
        setPhase("gap");
        timeoutRef.current = window.setTimeout(() => {
          respondedRef.current = false;
          targetAt.current = performance.now();
          setPhase("target");

          timeoutRef.current = window.setTimeout(() => {
            if (!respondedRef.current) {
              setResults((r) => [...r, { ...trials[index], correct: false, rt: null }]);
            }
            runTrial(index + 1);
          }, RESPONSE_WINDOW_MS);
        }, GAP_MS);
      }, PRIME_MS);
    }, 400);
  };

  const start = () => {
    trialsRef.current = buildTrials();
    setTotalTrials(trialsRef.current.length);
    setResults([]);
    runTrial(0);
  };

  const respond = (choseWord: boolean) => {
    if (phase !== "target" || respondedRef.current) return;
    respondedRef.current = true;
    window.clearTimeout(timeoutRef.current);
    const trial = trialsRef.current[trialIndex];
    const rt = Math.round(performance.now() - targetAt.current);
    const correct = choseWord === trial.isWord;
    setResults((r) => [...r, { ...trial, correct, rt }]);
    runTrial(trialIndex + 1);
  };

  useEffect(() => {
    if (phase !== "target") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") respond(true);
      if (e.key === "ArrowRight") respond(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, trialIndex]);

  const relatedRts = results.filter((r) => r.condition === "related" && r.correct && r.rt !== null).map((r) => r.rt as number);
  const unrelatedRts = results
    .filter((r) => r.condition === "unrelated" && r.correct && r.rt !== null)
    .map((r) => r.rt as number);
  const avgRelated = relatedRts.length ? Math.round(relatedRts.reduce((a, b) => a + b, 0) / relatedRts.length) : 0;
  const avgUnrelated = unrelatedRts.length
    ? Math.round(unrelatedRts.reduce((a, b) => a + b, 0) / unrelatedRts.length)
    : 0;
  const primingEffect = avgRelated && avgUnrelated ? avgUnrelated - avgRelated : 0;
  const accuracy = results.length ? Math.round((results.filter((r) => r.correct).length / results.length) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Priming Effect</ResultHeading>
          <div className="grid w-full max-w-sm grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{avgRelated}ms</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Related Prime</div>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{avgUnrelated}ms</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Unrelated Prime</div>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{accuracy}%</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Accuracy</div>
            </div>
          </div>
          <p className="max-w-sm text-sm text-muted">
            {primingEffect > 0
              ? `You responded about ${primingEffect}ms faster when the target word was related to the prime — a classic priming benefit.`
              : "Your related and unrelated response times were close this time — priming effects can vary between attempts."}
          </p>
          <Callout icon="💭" title="Why this happens">
            Seeing a related word activates connected concepts in memory before the target even appears, so a
            related target needs less additional processing to recognize.
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
            A word flashes briefly, then a target appears — decide as fast as you can whether the target is a real
            word or not, using the Left (Word) / Right (Not a Word) arrow keys or the buttons below.
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
      <div className="flex flex-col items-center gap-8">
        <p className="text-xs font-medium text-muted-2">
          Trial {Math.min(trialIndex + 1, totalTrials || 20)} / {totalTrials || 20}
        </p>
        <div className="flex h-24 items-center justify-center">
          {phase === "prime" && (
            <span className="text-2xl font-semibold text-muted-2">{currentTrial?.prime}</span>
          )}
          {phase === "target" && (
            <span className="text-4xl font-black text-foreground sm:text-5xl">{currentTrial?.target}</span>
          )}
        </div>
        <div className="flex gap-4">
          <Button size="lg" variant="secondary" onClick={() => respond(true)} disabled={phase !== "target"}>
            ◀ Word
          </Button>
          <Button size="lg" variant="secondary" onClick={() => respond(false)} disabled={phase !== "target"}>
            Not a Word ▶
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
