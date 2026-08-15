"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "studying" | "testing" | "result";

const WORDS = [
  "River", "Candle", "Mountain", "Pencil", "Ocean", "Blanket", "Forest", "Mirror",
  "Thunder", "Garden", "Bridge", "Whisper", "Anchor", "Lantern", "Meadow", "Compass",
];

const PAIR_COUNT = 8;

function shuffled<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface Pair {
  a: string;
  b: string;
}

export function PairedAssociatesTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [studyIndex, setStudyIndex] = useState(0);
  const [testIndex, setTestIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const buildOptions = (correctWord: string) => {
    const distractors = shuffled(WORDS.filter((w) => w !== correctWord)).slice(0, 3);
    return shuffled([correctWord, ...distractors]);
  };

  const start = () => {
    const pool = shuffled(WORDS);
    const newPairs: Pair[] = Array.from({ length: PAIR_COUNT }, (_, i) => ({
      a: pool[i],
      b: pool[(i + PAIR_COUNT) % pool.length] ?? pool[(i + 1) % pool.length],
    }));
    setPairs(newPairs);
    setStudyIndex(0);
    setTestIndex(0);
    setCorrect(0);
    setFeedback(null);
    setOptions(buildOptions(newPairs[0].b));
    setPhase("studying");
  };

  const nextStudy = () => {
    const next = studyIndex + 1;
    if (next >= pairs.length) {
      setTestIndex(0);
      setOptions(buildOptions(shuffled(pairs)[0]?.b ?? pairs[0].b));
      setPairs((p) => shuffled(p));
      setPhase("testing");
      return;
    }
    setStudyIndex(next);
  };

  const answer = (word: string) => {
    if (feedback) return;
    const pair = pairs[testIndex];
    const isCorrect = word === pair.b;
    if (isCorrect) setCorrect((c) => c + 1);
    setFeedback(isCorrect ? "correct" : "wrong");

    window.setTimeout(() => {
      setFeedback(null);
      const next = testIndex + 1;
      if (next >= pairs.length) {
        setPhase("result");
        return;
      }
      setTestIndex(next);
      setOptions(buildOptions(pairs[next].b));
    }, 500);
  };

  const accuracy = Math.round((correct / PAIR_COUNT) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="paired-associates-memory-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Paired Associates Result"
          extraStats={[{ label: "Correct", value: `${correct}/${PAIR_COUNT}` }]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Study {PAIR_COUNT} word pairs one at a time. Afterward, you&apos;ll see the first word of each pair and
            must pick its matching partner from four options.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    const pair = pairs[studyIndex];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Studying {studyIndex + 1} / {pairs.length}
          </p>
          <div className="flex items-center gap-4 text-2xl font-bold text-foreground">
            <span className="rounded-lg bg-primary/10 px-4 py-3 text-primary">{pair.a}</span>
            <span className="text-muted-2">&rarr;</span>
            <span className="rounded-lg bg-accent/10 px-4 py-3 text-accent">{pair.b}</span>
          </div>
          <Button size="lg" onClick={nextStudy}>
            Next
          </Button>
        </div>
      </TestFrame>
    );
  }

  const pair = pairs[testIndex];
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {testIndex + 1} / {pairs.length}
        </p>
        <p className="text-sm text-muted">Which word was paired with:</p>
        <p className="text-3xl font-bold text-primary">{pair.a}</p>
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : `Wrong — it was ${pair.b}`}
          </p>
        )}
        <div className="grid grid-cols-2 gap-3">
          {options.map((word) => (
            <button
              key={word}
              disabled={!!feedback}
              onClick={() => answer(word)}
              className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 disabled:opacity-60"
            >
              {word}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
