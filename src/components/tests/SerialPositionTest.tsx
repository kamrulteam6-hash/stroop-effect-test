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
          <div className="flex w-full max-w-xs flex-col gap-2.5">
            {[
              { label: "🥇 Primacy (first 5)", value: pct(primacy) },
              { label: "➖ Middle (5)", value: pct(middle) },
              { label: "🏁 Recency (last 5)", value: pct(recency) },
            ].map((r) => (
              <div key={r.label}>
                <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-foreground">
                  <span>{r.label}</span>
                  <span>{r.value}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700"
                    style={{ width: `${r.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
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
          <span className="text-5xl">📝</span>
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
          <div className="w-full max-w-xs">
            <p className="mb-1.5 text-center text-xs font-medium text-muted-2">
              Word {studyIndex + 1} / {TARGET_WORDS.length}
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-150"
                style={{ width: `${((studyIndex + 1) / TARGET_WORDS.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex h-24 w-full max-w-sm items-center justify-center rounded-3xl border-2 border-border bg-surface-2 shadow-sm">
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
      <div className="flex w-full max-w-lg flex-col items-center gap-5">
        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
          🧠 {selected.size} word{selected.size === 1 ? "" : "s"} marked
        </span>
        <p className="max-w-sm text-center text-xs text-muted-2">
          Click every word you saw in the list. Some are decoys that were never shown.
        </p>
        <div className="w-full rounded-3xl border-2 border-border bg-surface-2 p-4 shadow-sm sm:p-5">
          <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-5">
            {recognitionWords.map((word) => (
              <button
                key={word}
                onClick={() => toggle(word)}
                className={`flex items-center justify-center gap-1 rounded-lg border px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  selected.has(word)
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border bg-surface text-muted hover:border-primary/40"
                }`}
              >
                {selected.has(word) && <span className="text-primary">✓</span>}
                {word}
              </button>
            ))}
          </div>
        </div>
        <Button size="lg" onClick={submit}>
          Submit
        </Button>
      </div>
    </TestFrame>
  );
}
