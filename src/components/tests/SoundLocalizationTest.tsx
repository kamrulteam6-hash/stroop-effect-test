"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "running" | "result";

const TOTAL_TRIALS = 10;
const PAN_POSITIONS = [-1, -0.6, -0.3, 0, 0.3, 0.6, 1];

function randomPan(): number {
  return PAN_POSITIONS[Math.floor(Math.random() * PAN_POSITIONS.length)];
}

function labelForPan(pan: number): string {
  if (pan <= -0.8) return "far-left";
  if (pan <= -0.3) return "left";
  if (pan < 0.3) return "center";
  if (pan < 0.8) return "right";
  return "far-right";
}

export function SoundLocalizationTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [pan, setPan] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTone = (panValue: number) => {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtxRef.current) audioCtxRef.current = new AudioCtx();
    const ctx = audioCtxRef.current;
    const osc = ctx.createOscillator();
    const panner = ctx.createStereoPanner();
    const gain = ctx.createGain();
    osc.frequency.value = 440;
    panner.pan.value = panValue;
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.connect(panner).connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  };

  const runTrial = () => {
    const newPan = randomPan();
    setPan(newPan);
    window.setTimeout(() => playTone(newPan), 200);
  };

  const start = () => {
    setTrialIndex(0);
    setCorrectCount(0);
    setPhase("running");
    runTrial();
  };

  const replay = () => playTone(pan);

  const answer = (guess: "far-left" | "left" | "center" | "right" | "far-right") => {
    if (guess === labelForPan(pan)) setCorrectCount((c) => c + 1);

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
          slug="sound-localization-test"
          direction="higher"
          value={accuracy}
          unitLabel="% correctly localized"
          headline="Sound Localization Result"
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
            Put on headphones for the best results. A tone will play panned somewhere between your left and right
            ear — judge where it came from across {TOTAL_TRIALS} rounds.
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
        <Button variant="secondary" onClick={replay}>
          🔊 Replay Sound
        </Button>
        <p className="text-xs text-muted-2">Where did the sound come from?</p>
        <div className="grid grid-cols-5 gap-2">
          {(["far-left", "left", "center", "right", "far-right"] as const).map((label) => (
            <button
              key={label}
              onClick={() => answer(label)}
              className="rounded-lg border border-border bg-surface-2 px-3 py-3 text-xs font-semibold capitalize text-foreground transition-colors hover:border-primary/40"
            >
              {label.replace("-", " ")}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
