"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const EMOTIONS = [
  { name: "Happy", emoji: "😀" },
  { name: "Sad", emoji: "😢" },
  { name: "Angry", emoji: "😠" },
  { name: "Afraid", emoji: "😨" },
  { name: "Surprised", emoji: "😲" },
  { name: "Disgusted", emoji: "🤢" },
];

const TOTAL_TRIALS = 12;

function now(): number {
  return performance.now();
}

function randomEmotionIndex(): number {
  return Math.floor(Math.random() * EMOTIONS.length);
}

export function EmotionRecognitionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [target, setTarget] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [rts, setRts] = useState<number[]>([]);
  const [trialStart, setTrialStart] = useState(0);

  const start = () => {
    setTrialIndex(0);
    setCorrect(0);
    setRts([]);
    setTarget(randomEmotionIndex());
    setTrialStart(now());
    setPhase("running");
  };

  const answer = (index: number) => {
    if (phase !== "running") return;
    const rt = now() - trialStart;
    if (index === target) {
      setCorrect((c) => c + 1);
      setRts((r) => [...r, rt]);
    }
    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    setTarget(randomEmotionIndex());
    setTrialStart(now());
  };

  const accuracy = Math.round((correct / TOTAL_TRIALS) * 100);
  const avgRt = rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="emotion-recognition-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Emotion Recognition Result"
          extraStats={[{ label: "Correct", value: `${correct}/${TOTAL_TRIALS}` }, { label: "Avg. RT", value: `${avgRt} ms` }]}
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
            An emotional expression will appear. Click the matching emotion label as quickly and accurately as you
            can across {TOTAL_TRIALS} rounds.
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
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="text-8xl">{EMOTIONS[target].emoji}</div>
        <div className="grid grid-cols-3 gap-3">
          {EMOTIONS.map((e, i) => (
            <button
              key={e.name}
              onClick={() => answer(i)}
              className="rounded-xl border border-border bg-surface-2 px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/40"
            >
              {e.name}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
