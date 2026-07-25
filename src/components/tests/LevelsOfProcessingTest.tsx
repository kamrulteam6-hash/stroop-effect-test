"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "shallow" | "deep" | "filler" | "recognition" | "result";

const SHALLOW_WORDS = ["penguin", "hammer", "tulip", "wallet", "guitar", "pebble", "elephant", "thread"];
const DEEP_WORDS = ["dolphin", "napkin", "spider", "magnet", "rabbit", "pillow", "squirrel", "lantern"];
const NEW_WORDS = ["trumpet", "cactus", "ribbon", "marble", "staple", "cabin", "kettle", "orbit"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function LevelsOfProcessingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [shallowCases, setShallowCases] = useState<boolean[]>([]);
  const [recognitionWords, setRecognitionWords] = useState<string[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const start = () => {
    setShallowCases(SHALLOW_WORDS.map(() => Math.random() < 0.5));
    setIndex(0);
    setPhase("shallow");
  };

  const advance = () => {
    const next = index + 1;
    if (phase === "shallow") {
      if (next >= SHALLOW_WORDS.length) {
        setIndex(0);
        setPhase("deep");
      } else {
        setIndex(next);
      }
    } else if (phase === "deep") {
      if (next >= DEEP_WORDS.length) {
        setPhase("filler");
      } else {
        setIndex(next);
      }
    }
  };

  const toRecognition = () => {
    setRecognitionWords(shuffle([...SHALLOW_WORDS, ...DEEP_WORDS, ...NEW_WORDS]));
    setSelected(new Set());
    setPhase("recognition");
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

  const shallowHits = SHALLOW_WORDS.filter((w) => selected.has(w)).length;
  const deepHits = DEEP_WORDS.filter((w) => selected.has(w)).length;
  const falsePositives = NEW_WORDS.filter((w) => selected.has(w)).length;
  const total = shallowHits + deepHits;
  const shallowPct = Math.round((shallowHits / SHALLOW_WORDS.length) * 100);
  const deepPct = Math.round((deepHits / DEEP_WORDS.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="levels-of-processing-test"
          direction="higher"
          value={total}
          unitLabel="out of 16 words recalled"
          extraStats={[
            { label: "Deep-Encoded", value: `${deepPct}%` },
            { label: "Shallow-Encoded", value: `${shallowPct}%` },
            { label: "False Positives", value: `${falsePositives}` },
          ]}
          shareLabel={`I recalled ${deepPct}% of deep-encoded words vs ${shallowPct}% of shallow-encoded words on the Levels of Processing Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-xs flex-col gap-2.5">
            {[
              { label: "🧠 Deep-encoded (meaning)", value: deepPct },
              { label: "👁️ Shallow-encoded (appearance)", value: shallowPct },
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
            Most people recall meaning-based (&quot;deep&quot;) words noticeably better than appearance-based
            (&quot;shallow&quot;) words — a well-established finding, not a personal memory quirk.
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🔍</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll judge some words by how they look and others by what they mean. Afterward, a surprise memory
            test reveals which kind of judgment led to better recall.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "shallow") {
    const word = SHALLOW_WORDS[index];
    const isCaps = shallowCases[index];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-full max-w-xs">
            <p className="mb-1.5 text-center text-xs font-medium text-muted-2">
              👁️ Appearance check {index + 1} / {SHALLOW_WORDS.length}
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-150"
                style={{ width: `${((index + 1) / SHALLOW_WORDS.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex h-24 w-full max-w-sm items-center justify-center rounded-3xl border-2 border-border bg-surface-2 shadow-sm">
            <span className="text-4xl font-black text-foreground sm:text-5xl">
              {isCaps ? word.toUpperCase() : word}
            </span>
          </div>
          <p className="text-sm text-muted">Is this word in CAPITAL letters?</p>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={advance}>
              Yes
            </Button>
            <Button variant="secondary" onClick={advance}>
              No
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "deep") {
    const word = DEEP_WORDS[index];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-full max-w-xs">
            <p className="mb-1.5 text-center text-xs font-medium text-muted-2">
              🧠 Meaning check {index + 1} / {DEEP_WORDS.length}
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-150"
                style={{ width: `${((index + 1) / DEEP_WORDS.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex h-24 w-full max-w-sm items-center justify-center rounded-3xl border-2 border-border bg-surface-2 shadow-sm">
            <span className="text-4xl font-black text-foreground sm:text-5xl">{word}</span>
          </div>
          <p className="text-sm text-muted">Does this word refer to a living thing?</p>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={advance}>
              Yes
            </Button>
            <Button variant="secondary" onClick={advance}>
              No
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "filler") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">☕</span>
          <p className="max-w-sm text-sm text-muted">
            Quick break before the memory test — take a breath, then continue when ready.
          </p>
          <Button size="lg" onClick={toRecognition}>
            Continue
          </Button>
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
          Click every word you remember judging earlier. Some are new words that weren&apos;t shown before.
        </p>
        <div className="w-full rounded-3xl border-2 border-border bg-surface-2 p-4 shadow-sm sm:p-5">
          <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-4">
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
