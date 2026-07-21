"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "studying" | "recognition" | "result";

const STUDY_WORDS = [
  "bed", "tired", "dream", "wake", "snooze", "blanket", "doze", "nap",
  "nurse", "hospital", "patient", "medicine", "sick", "ill", "physician", "surgeon",
  "table", "sit", "legs", "seat", "desk", "arm", "sofa", "cushion",
];

const LURES = ["sleep", "doctor", "chair"];
const STUDIED_TEST_WORDS = ["bed", "tired", "dream", "nurse", "hospital", "patient", "table", "seat", "sofa"];
const UNRELATED_WORDS = ["violin", "canyon", "umbrella", "volcano", "sandwich", "telescope"];

const WORD_MS = 700;
const BLANK_MS = 200;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function FalseMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [studyIndex, setStudyIndex] = useState(-1);
  const [showingWord, setShowingWord] = useState(false);
  const [testWords, setTestWords] = useState<string[]>([]);
  const [marked, setMarked] = useState<Set<string>>(new Set());
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const runStudy = (index: number) => {
    setStudyIndex(index);
    setShowingWord(true);
    timeoutRef.current = window.setTimeout(() => {
      setShowingWord(false);
      timeoutRef.current = window.setTimeout(() => {
        const next = index + 1;
        if (next >= STUDY_WORDS.length) {
          setTestWords(shuffle([...LURES, ...STUDIED_TEST_WORDS, ...UNRELATED_WORDS]));
          setMarked(new Set());
          setPhase("recognition");
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
    setMarked((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  const submit = () => setPhase("result");

  const luresMarked = LURES.filter((w) => marked.has(w));
  const studiedHits = STUDIED_TEST_WORDS.filter((w) => marked.has(w)).length;
  const unrelatedFalseAlarms = UNRELATED_WORDS.filter((w) => marked.has(w)).length;

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your False Memory Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">{luresMarked.length}/3</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              lure words falsely &quot;remembered&quot;
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted">
            {luresMarked.length > 0 ? (
              <>
                You marked <strong className="text-foreground">{luresMarked.join(", ")}</strong> as seen — but none
                of these words were ever actually shown. Your brain inferred them from the related words around
                them.
              </>
            ) : (
              "You correctly avoided all three lure words this time — the illusion doesn't catch everyone on every attempt."
            )}
          </p>
          <div className="grid w-full max-w-xs grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{studiedHits}/9</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Actually Studied</div>
            </div>
            <div className="rounded-xl border border-border bg-surface-2 px-3 py-3 text-center">
              <div className="text-xl font-bold text-foreground">{unrelatedFalseAlarms}/6</div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-2">Unrelated Words</div>
            </div>
          </div>
          <Callout icon="🌀" title="This happens to almost everyone">
            The DRM illusion is one of the most reliable findings in memory research — most people falsely
            &quot;recognize&quot; at least one unstudied lure word, because it fits so well with everything around
            it.
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
            You&apos;ll study 24 words, then take a quick recognition test. Some words on the test were never
            actually shown — see if your memory falls for the trick.
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
            Word {studyIndex + 1} / {STUDY_WORDS.length}
          </p>
          <div className="flex h-24 items-center justify-center">
            {showingWord && (
              <span className="text-4xl font-black text-foreground sm:text-5xl">{STUDY_WORDS[studyIndex]}</span>
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
          Click every word you remember seeing in the study list.
        </p>
        <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4">
          {testWords.map((word) => (
            <button
              key={word}
              onClick={() => toggle(word)}
              className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
                marked.has(word)
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
