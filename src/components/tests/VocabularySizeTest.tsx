"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "quiz" | "result";

const REAL_WORDS = [
  "table", "curious", "abandon", "gratitude", "meticulous", "wander", "ancient", "fragile",
  "luminous", "obstacle", "reluctant", "candid", "diligent", "eloquent", "genuine", "hazard",
  "intricate", "jovial", "keen", "lament", "myriad", "nostalgia", "opaque", "plausible",
  "quaint", "resilient", "sincere", "tranquil", "vivid", "whimsical",
];

const FAKE_WORDS = [
  "flimmer", "trentous", "glarnish", "wivelate", "plascit",
  "dornful", "clenimous", "brastling", "sovendish", "quintable",
];

const BASELINE_VOCAB = 30000;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function VocabularySizeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [words, setWords] = useState<string[]>([]);
  const [known, setKnown] = useState<Set<string>>(new Set());

  const start = () => {
    setWords(shuffle([...REAL_WORDS, ...FAKE_WORDS]));
    setKnown(new Set());
    setPhase("quiz");
  };

  const toggle = (word: string) => {
    setKnown((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  const submit = () => setPhase("result");

  const knownReal = REAL_WORDS.filter((w) => known.has(w)).length;
  const falsePositives = FAKE_WORDS.filter((w) => known.has(w)).length;
  const knownRate = knownReal / REAL_WORDS.length;
  const falsePositiveRate = falsePositives / FAKE_WORDS.length;
  const adjustedRate = Math.max(0, knownRate - falsePositiveRate);
  const estimatedVocab = Math.round(adjustedRate * BASELINE_VOCAB);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="vocabulary-size-test"
          direction="higher"
          value={estimatedVocab}
          unitLabel="estimated words known"
          extraStats={[
            { label: "Known", value: `${knownReal}/${REAL_WORDS.length}` },
            { label: "False Positives", value: `${falsePositives}/${FAKE_WORDS.length}` },
          ]}
          shareLabel={`My estimated vocabulary size is ${estimatedVocab.toLocaleString()} words!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            This estimate is scaled from a small sample and adjusted for words you marked as known that were
            actually decoys — a fun approximation, not a precise linguistic measurement.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll see a list of words — some real, some made-up decoys. Mark only the ones you genuinely know
            the meaning of, then submit to get your estimated vocabulary size.
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
      <div className="flex w-full max-w-lg flex-col items-center gap-6">
        <p className="max-w-sm text-center text-xs text-muted-2">
          Click every word you genuinely know the meaning of. Some are made-up — don&apos;t guess.
        </p>
        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
          {words.map((word) => (
            <button
              key={word}
              onClick={() => toggle(word)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                known.has(word)
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-surface-2 text-muted hover:border-primary"
              }`}
            >
              {word}
            </button>
          ))}
        </div>
        <Button size="lg" onClick={submit}>
          Submit
        </Button>
      </div>
    </TestFrame>
  );
}
