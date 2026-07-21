"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "studying" | "recall" | "result";

const TARGET_WORDS = [
  "apple", "river", "chair", "guitar", "mountain",
  "pencil", "ocean", "candle", "bicycle", "forest",
  "hammer", "window", "garden", "engine", "blanket",
];

const DECOY_WORDS = [
  "jacket", "tunnel", "whistle", "ladder", "compass",
  "feather", "anchor", "lantern", "harbor", "meadow",
];

const WORD_MS = 900;
const BLANK_MS = 250;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function SerialPositionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [studyIndex, setStudyIndex] = useState(-1);
  const [showingWord, setShowingWord] = useState(false);
  const [recognitionWords, setRecognitionWords] = useState<string[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const runStudy = (index: number) => {
    setStudyIndex(index);
    setShowingWord(true);
    timeoutRef.current = window.setTimeout(() => {
      setShowingWord(false);
      timeoutRef.current = window.setTimeout(() => {
        const next = index + 1;
        if (next >= TARGET_WORDS.length) {
          setRecognitionWords(shuffle([...TARGET_WORDS, ...DECOY_WORDS]));
          setSelected(new Set());
          setPhase("recall");
        } else {
          runStudy(next);
        }
      }, BLANK_MS);
    }, WORD_MS);
  };

  const start = () => {
    setPhase("studying");
    runStudy(0);
  };

  const toggle = (word: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  const submit = () => setPhase("result");

  const correctByPosition = TARGET_WORDS.map((w, i) => ({ word: w, position: i, recalled: selected.has(w) }));
  const primacy = correctByPosition.slice(0, 5);
  const middle = correctByPosition.slice(5, 10);
  const recency = correctByPosition.slice(10, 15);
  const pct = (bucket: typeof primacy) => Math.round((bucket.filter((b) => b.recalled).length / bucket.length) * 100);
  const totalCorrect = correctByPosition.filter((c) => c.recalled).length;
  const falsePositives = DECOY_WORDS.filter((w) => selected.has(w)).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="serial-position-test"
          direction="higher"
          value={totalCorrect}
          unitLabel={`out of ${TARGET_WORDS.length} words recalled`}
          extraStats={[
            { label: "Primacy (first 5)", value: `${pct(primacy)}%` },
            { label: "Middle (5)", value: `${pct(middle)}%` },
            { label: "Recency (last 5)", value: `${pct(recency)}%` },
          ]}
          shareLabel={`I recalled ${totalCorrect}/${TARGET_WORDS.length} words on the Serial Position Effect Test!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            Higher recall for the first and last words, with a dip in the middle, is the classic serial position
            pattern — not a memory problem.
            {falsePositives > 0 && ` You also marked ${falsePositives} word(s) that weren't actually on the list.`}
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
            You&apos;ll see 15 words appear one at a time — just watch and remember them. Afterward, pick out every
            word you saw from a larger list.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Word {studyIndex + 1} / {TARGET_WORDS.length}
          </p>
          <div className="flex h-24 items-center justify-center">
            {showingWord && (
              <span className="text-4xl font-black text-foreground sm:text-5xl">{TARGET_WORDS[studyIndex]}</span>
            )}
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-6">
        <p className="max-w-sm text-center text-xs text-muted-2">
          Click every word you saw in the list. Some are decoys that were never shown.
        </p>
        <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-5">
          {recognitionWords.map((word) => (
            <button
              key={word}
              onClick={() => toggle(word)}
              className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
                selected.has(word)
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
