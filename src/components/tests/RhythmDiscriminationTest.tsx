"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "playing" | "answer" | "result";

const TOTAL_TRIALS = 10;
const BASE_PATTERN = [1, 1, 2, 1];

function coinFlip(): boolean {
  return Math.random() < 0.5;
}

function mutatePattern(pattern: number[]): number[] {
  const copy = [...pattern];
  const idx = Math.floor(Math.random() * copy.length);
  copy[idx] = copy[idx] === 1 ? 2 : 1;
  return copy;
}

export function RhythmDiscriminationTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [isSame, setIsSame] = useState(true);
  const [correctCount, setCorrectCount] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playClick = (delayMs: number) => {
    window.setTimeout(() => {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    }, delayMs);
  };

  const playPattern = (pattern: number[], startMs: number) => {
    let t = startMs;
    pattern.forEach((beat) => {
      playClick(t);
      t += beat * 300;
    });
    return t;
  };

  const runTrial = () => {
    const same = coinFlip();
    setIsSame(same);
    setPhase("playing");

    const pattern1 = BASE_PATTERN;
    const pattern2 = same ? BASE_PATTERN : mutatePattern(BASE_PATTERN);

    const end1 = playPattern(pattern1, 200);
    const end2 = playPattern(pattern2, end1 + 500);

    window.setTimeout(() => setPhase("answer"), end2 - 200);
  };

  const start = () => {
    setTrialIndex(0);
    setCorrectCount(0);
    runTrial();
  };

  const answer = (guessedSame: boolean) => {
    if (guessedSame === isSame) setCorrectCount((c) => c + 1);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const accuracy = Math.round((correctCount / TOTAL_TRIALS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="rhythm-discrimination-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Rhythm Discrimination Result"
          extraStats={[{ label: "Correct", value: `${correctCount}/${TOTAL_TRIALS}` }]}
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
            You&apos;ll hear two short rhythmic click patterns back to back. Judge whether the second pattern is
            identical to the first, or slightly different, across {TOTAL_TRIALS} rounds.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "playing") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Round {trialIndex + 1} / {TOTAL_TRIALS}
          </p>
          <p className="text-sm text-muted">Listen carefully...</p>
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
        <p className="text-sm text-muted">Were the two rhythms the same or different?</p>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => answer(true)}>
            Same
          </Button>
          <Button variant="secondary" onClick={() => answer(false)}>
            Different
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
