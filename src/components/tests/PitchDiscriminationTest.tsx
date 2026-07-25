"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const GAPS_CENTS = [300, 200, 140, 100, 70, 50, 35, 25, 18, 12, 8, 5];
const BASE_FREQ = 440;

type Phase = "idle" | "running" | "result";
type Direction = "higher" | "lower";

interface RoundResult {
  gapCents: number;
  correct: boolean;
}

function freqFromCents(base: number, cents: number, direction: Direction) {
  const sign = direction === "higher" ? 1 : -1;
  return base * Math.pow(2, (sign * cents) / 1200);
}

export function PitchDiscriminationTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [roundIndex, setRoundIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>("higher");
  const [results, setResults] = useState<RoundResult[]>([]);
  const [playing, setPlaying] = useState(false);
  const [answered, setAnswered] = useState<Direction | null>(null);
  const [activeTone, setActiveTone] = useState<0 | 1 | 2>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    return audioCtxRef.current;
  };

  const playTone = (ctx: AudioContext, freq: number, startAt: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(0.2, startAt + 0.03);
    gain.gain.setValueAtTime(0.2, startAt + 0.32);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.4);
    osc.connect(gain).connect(ctx.destination);
    osc.start(startAt);
    osc.stop(startAt + 0.42);
  };

  const playRound = (gapCents: number, dir: Direction) => {
    const ctx = getCtx();
    const now = ctx.currentTime;
    playTone(ctx, BASE_FREQ, now);
    playTone(ctx, freqFromCents(BASE_FREQ, gapCents, dir), now + 0.55);
    setPlaying(true);
    setActiveTone(1);
    window.setTimeout(() => setActiveTone(2), 550);
    window.setTimeout(() => setActiveTone(0), 950);
    window.setTimeout(() => setPlaying(false), 1000);
  };

  const startRound = (index: number) => {
    const dir: Direction = Math.random() < 0.5 ? "higher" : "lower";
    setDirection(dir);
    setAnswered(null);
    playRound(GAPS_CENTS[index], dir);
  };

  const start = () => {
    setResults([]);
    setRoundIndex(0);
    setPhase("running");
    startRound(0);
  };

  const replay = () => {
    playRound(GAPS_CENTS[roundIndex], direction);
  };

  const answer = (choice: Direction) => {
    if (answered) return;
    setAnswered(choice);
    const correct = choice === direction;
    const nextResults = [...results, { gapCents: GAPS_CENTS[roundIndex], correct }];
    setResults(nextResults);

    window.setTimeout(() => {
      const next = roundIndex + 1;
      if (next >= GAPS_CENTS.length) {
        setPhase("result");
      } else {
        setRoundIndex(next);
        startRound(next);
      }
    }, 600);
  };

  const correctResults = results.filter((r) => r.correct);
  const threshold = correctResults.length ? Math.min(...correctResults.map((r) => r.gapCents)) : GAPS_CENTS[0];

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="pitch-discrimination-test"
          direction="lower"
          value={threshold}
          unitLabel="cents (smallest gap detected)"
          extraStats={[
            { label: "Correct", value: `${correctResults.length}/${GAPS_CENTS.length}` },
            { label: "Base Tone", value: `${BASE_FREQ}Hz` },
          ]}
          shareLabel={`I could reliably tell apart tones just ${threshold} cents apart on the Pitch Discrimination Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">🎧</span>
          <p className="max-w-sm text-sm text-muted">
            Headphones recommended. Two tones will play, one after another, across 12 rounds — tell us whether the
            second tone was higher or lower than the first. The gap narrows each round, homing in on the smallest
            difference you can reliably hear.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const wasCorrect = answered ? answered === direction : null;

  return (
    <TestFrame>
      <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center">
        <div className="w-full">
          <p className="mb-1.5 text-xs font-medium text-muted-2">
            Round {roundIndex + 1} / {GAPS_CENTS.length}
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${((roundIndex + 1) / GAPS_CENTS.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1.5">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg transition-all ${
                activeTone === 1 ? "scale-110 border-primary bg-primary/15 ring-8 ring-primary/15" : "border-border bg-surface-2"
              }`}
            >
              🎵
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">Tone 1</span>
          </div>
          <span className="text-xl text-muted-2">→</span>
          <div className="flex flex-col items-center gap-1.5">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-lg transition-all ${
                activeTone === 2 ? "scale-110 border-accent bg-accent/15 ring-8 ring-accent/15" : "border-border bg-surface-2"
              }`}
            >
              🎵
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">Tone 2</span>
          </div>
        </div>

        <p className="min-h-[1.5rem] text-sm font-medium text-foreground">
          {answered
            ? wasCorrect
              ? "✅ Correct!"
              : "❌ Not quite"
            : playing
              ? "🔊 Playing tones…"
              : "Was the second tone higher or lower?"}
        </p>

        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => answer("lower")} disabled={!!answered}>
            ⬇️ Lower
          </Button>
          <Button onClick={() => answer("higher")} disabled={!!answered}>
            ⬆️ Higher
          </Button>
        </div>
        <Button variant="ghost" size="sm" onClick={replay} disabled={playing || !!answered}>
          🔁 Replay tones
        </Button>

        {results.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5">
            {results.map((r, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${r.correct ? "bg-success" : "bg-danger"}`}
                title={`${r.gapCents} cents — ${r.correct ? "correct" : "missed"}`}
              />
            ))}
          </div>
        )}
      </div>
    </TestFrame>
  );
}
