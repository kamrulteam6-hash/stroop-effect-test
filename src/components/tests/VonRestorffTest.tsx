"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "studying" | "recall" | "result";

const PLAIN_WORDS = [
  "lamp", "journal", "drawer", "wrench", "cabinet", "ribbon",
  "mirror", "sandal", "pillow", "basket", "curtain", "kettle",
];
const DISTINCTIVE_WORD = "octopus";
const DECOY_WORDS = ["compass", "muffin", "staple", "canyon", "marble", "cushion", "anchor"];

const STUDY_LIST = [...PLAIN_WORDS.slice(0, 6), DISTINCTIVE_WORD, ...PLAIN_WORDS.slice(6)];

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

export function VonRestorffTest() {
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
        if (next >= STUDY_LIST.length) {
          setRecognitionWords(shuffle([...STUDY_LIST, ...DECOY_WORDS]));
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

  const distinctiveRecalled = selected.has(DISTINCTIVE_WORD);
  const plainRecalledCount = PLAIN_WORDS.filter((w) => selected.has(w)).length;
  const plainPct = Math.round((plainRecalledCount / PLAIN_WORDS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Isolation Effect Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-4xl">{distinctiveRecalled ? "✅" : "❌"}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              did you recall the highlighted word?
            </span>
          </div>
          <div className="rounded-xl border border-border bg-surface-2 px-4 py-3">
            <div className="text-xl font-bold text-foreground">{plainPct}%</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">
              plain word recall ({plainRecalledCount}/{PLAIN_WORDS.length})
            </div>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Most people recall the visually distinctive word even when their overall recall of the plain words is
            far from perfect — a real, measurable memory boost from simply standing out.
          </p>
          <Callout icon="✨" title="Why this happens">
            An item that looks different from everything around it captures extra attention at the moment you see
            it, which tends to leave a stronger, more distinctive memory trace than uniform-looking items.
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
            You&apos;ll see 13 words appear one at a time. One of them looks very different from the rest — just
            watch naturally. Afterward, pick out every word you saw from a larger list.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    const word = STUDY_LIST[studyIndex];
    const isDistinctive = word === DISTINCTIVE_WORD;
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Word {studyIndex + 1} / {STUDY_LIST.length}
          </p>
          <div className="flex h-24 items-center justify-center">
            {showingWord && (
              <span
                className={
                  isDistinctive
                    ? "text-6xl font-black text-accent sm:text-7xl"
                    : "text-4xl font-black text-foreground sm:text-5xl"
                }
              >
                {word}
              </span>
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
        <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4">
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
