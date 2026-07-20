"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "playing" | "popped" | "result";

const BALLOON_COUNT = 10;
const POINTS_PER_PUMP = 5;
const MIN_POP = 4;
const MAX_POP = 32;

function randomPopThreshold(): number {
  return MIN_POP + Math.floor(Math.random() * (MAX_POP - MIN_POP + 1));
}

export function RiskTakingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [balloonIndex, setBalloonIndex] = useState(0);
  const [pumps, setPumps] = useState(0);
  const [popThreshold, setPopThreshold] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [poppedCount, setPoppedCount] = useState(0);
  const [cashedCount, setCashedCount] = useState(0);

  const start = () => {
    setBalloonIndex(0);
    setTotalScore(0);
    setPoppedCount(0);
    setCashedCount(0);
    setPumps(0);
    setPopThreshold(randomPopThreshold());
    setPhase("playing");
  };

  const nextBalloon = (index: number) => {
    if (index >= BALLOON_COUNT) {
      setPhase("result");
      return;
    }
    setBalloonIndex(index);
    setPumps(0);
    setPopThreshold(randomPopThreshold());
    setPhase("playing");
  };

  const pump = () => {
    if (phase !== "playing") return;
    const next = pumps + 1;
    if (next >= popThreshold) {
      setPumps(next);
      setPoppedCount((c) => c + 1);
      setPhase("popped");
      window.setTimeout(() => nextBalloon(balloonIndex + 1), 900);
    } else {
      setPumps(next);
    }
  };

  const cashOut = () => {
    if (phase !== "playing") return;
    setTotalScore((s) => s + pumps * POINTS_PER_PUMP);
    setCashedCount((c) => c + 1);
    nextBalloon(balloonIndex + 1);
  };

  const currentPoints = pumps * POINTS_PER_PUMP;
  const balloonSize = 60 + pumps * 6;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="risk-taking-test"
          direction="higher"
          value={totalScore}
          unitLabel="total points"
          extraStats={[
            { label: "Cashed Out", value: `${cashedCount}/${BALLOON_COUNT}` },
            { label: "Popped", value: `${poppedCount}/${BALLOON_COUNT}` },
          ]}
          shareLabel={`I scored ${totalScore} points on the Risk-Taking Test!`}
          onRetry={start}
        >
          <p className="max-w-xs text-[11px] text-muted-2">
            More pumps per balloon means more potential points, but also more risk of losing them all — your score
            reflects your personal risk-taking tendency, not right or wrong choices.
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
            Pump each balloon to earn points — but it can pop at any time, losing everything you haven&apos;t
            banked. Cash out whenever you want to lock in that balloon&apos;s points and move to the next one.
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
        <div className="flex w-full max-w-xs items-center justify-between text-xs font-semibold text-muted-2">
          <span>
            Balloon {Math.min(balloonIndex + 1, BALLOON_COUNT)} / {BALLOON_COUNT}
          </span>
          <span>Total: {totalScore}</span>
        </div>

        <div className="flex h-48 items-center justify-center">
          {phase === "popped" ? (
            <span className="text-4xl font-black text-danger">💥 POP!</span>
          ) : (
            <span
              className="rounded-full bg-accent transition-all duration-150"
              style={{ width: balloonSize, height: balloonSize }}
            />
          )}
        </div>

        <p className="text-lg font-semibold text-foreground">
          Current balloon: <span className="text-primary">{currentPoints} pts</span>
        </p>

        <div className="flex gap-4">
          <Button size="lg" variant="accent" onClick={pump} disabled={phase !== "playing"}>
            Pump
          </Button>
          <Button size="lg" variant="secondary" onClick={cashOut} disabled={phase !== "playing"}>
            Cash Out
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
