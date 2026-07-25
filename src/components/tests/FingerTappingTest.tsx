"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const DURATION_S = 10;

type Phase = "idle" | "ready1" | "tapping1" | "between" | "ready2" | "tapping2" | "result";

export function FingerTappingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [taps1, setTaps1] = useState(0);
  const [taps2, setTaps2] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const startRound = (round: 1 | 2) => {
    setTimeLeft(DURATION_S);
    setPhase(round === 1 ? "tapping1" : "tapping2");
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(intervalRef.current);
          setPhase(round === 1 ? "between" : "result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const tap = () => {
    if (phase === "tapping1") setTaps1((t) => t + 1);
    else if (phase === "tapping2") setTaps2((t) => t + 1);
  };

  useEffect(() => {
    if (phase !== "tapping1" && phase !== "tapping2") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        tap();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const start = () => {
    setTaps1(0);
    setTaps2(0);
    setPhase("ready1");
  };

  const total = taps1 + taps2;
  const dominant = Math.max(taps1, taps2);
  const nonDominant = Math.min(taps1, taps2);
  const gap = dominant ? Math.round(((dominant - nonDominant) / dominant) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="finger-tapping-test"
          direction="higher"
          value={total}
          unitLabel="total taps (both hands)"
          extraStats={[
            { label: "Round 1", value: `${taps1}` },
            { label: "Round 2", value: `${taps2}` },
            { label: "Gap", value: `${gap}%` },
          ]}
          shareLabel={`I tapped ${taps1} + ${taps2} times on the Finger Tapping Test!`}
          onRetry={start}
        >
          <div className="flex w-full max-w-xs flex-col gap-2.5">
            {[
              { label: "✋ Round 1 (dominant)", value: taps1 },
              { label: "🤚 Round 2 (non-dominant)", value: taps2 },
            ].map((r) => (
              <div key={r.label}>
                <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-foreground">
                  <span>{r.label}</span>
                  <span>{r.value} taps</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700"
                    style={{ width: `${(r.value / Math.max(taps1, taps2, 1)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">👆</span>
          <p className="max-w-sm text-sm text-muted">
            Tap the button (or press spacebar) as many times as you can in 10 seconds — first with your dominant
            hand, then with your other hand, so you can compare the two.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "ready1" || phase === "ready2") {
    const round = phase === "ready1" ? 1 : 2;
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">{round === 1 ? "✋" : "🤚"}</span>
          <p className="max-w-sm text-sm text-muted">
            Round {round}: get ready to tap with your {round === 1 ? "dominant" : "non-dominant"}{" "}
            hand&apos;s index finger for {DURATION_S} seconds.
          </p>
          <Button size="lg" onClick={() => startRound(round as 1 | 2)}>
            Go
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "between") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-5xl">✅</span>
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            Round 1 complete: {taps1} taps
          </span>
          <p className="max-w-sm text-sm text-muted">
            Now switch to your <strong className="text-foreground">non-dominant hand</strong> for round 2.
          </p>
          <Button size="lg" onClick={() => setPhase("ready2")}>
            Continue
          </Button>
        </div>
      </TestFrame>
    );
  }

  const currentTaps = phase === "tapping1" ? taps1 : taps2;

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-xs">
          <p className="mb-1.5 text-center text-xs font-medium text-muted-2">
            Round {phase === "tapping1" ? 1 : 2} — {timeLeft}s left
          </p>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-500 ease-linear"
              style={{ width: `${(timeLeft / DURATION_S) * 100}%` }}
            />
          </div>
        </div>
        <span className="text-6xl font-black tabular-nums text-primary">{currentTaps}</span>
        <button
          onClick={tap}
          className="flex h-40 w-40 select-none items-center justify-center rounded-full border-4 border-primary bg-primary/10 text-lg font-bold text-primary shadow-sm transition-transform active:scale-90 sm:h-48 sm:w-48"
        >
          👆 TAP
        </button>
      </div>
    </TestFrame>
  );
}
