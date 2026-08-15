"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "cue" | "gap" | "target" | "result";
type Side = "left" | "right";

const TOTAL_TRIALS = 16;
const CUE_MS = 150;
const GAP_MS = 500;

function now(): number {
  return performance.now();
}

function coinFlip(): boolean {
  return Math.random() < 0.5;
}

export function InhibitionOfReturnTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [cueSide, setCueSide] = useState<Side>("left");
  const [targetSide, setTargetSide] = useState<Side>("left");
  const [isSameSide, setIsSameSide] = useState(true);
  const [sameSideRts, setSameSideRts] = useState<number[]>([]);
  const [diffSideRts, setDiffSideRts] = useState<number[]>([]);
  const [targetStart, setTargetStart] = useState(0);

  const runTrial = () => {
    const cue: Side = coinFlip() ? "left" : "right";
    const sameSide = coinFlip();
    const target: Side = sameSide ? cue : cue === "left" ? "right" : "left";
    setCueSide(cue);
    setTargetSide(target);
    setIsSameSide(sameSide);
    setPhase("cue");

    window.setTimeout(() => {
      setPhase("gap");
      window.setTimeout(() => {
        setPhase("target");
        setTargetStart(now());
      }, GAP_MS);
    }, CUE_MS);
  };

  const start = () => {
    setTrialIndex(0);
    setSameSideRts([]);
    setDiffSideRts([]);
    runTrial();
  };

  const respond = (side: Side) => {
    if (phase !== "target") return;
    if (side !== targetSide) return;
    const rt = now() - targetStart;
    if (isSameSide) setSameSideRts((r) => [...r, rt]);
    else setDiffSideRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const avgSame = sameSideRts.length ? Math.round(sameSideRts.reduce((a, b) => a + b, 0) / sameSideRts.length) : 0;
  const avgDiff = diffSideRts.length ? Math.round(diffSideRts.reduce((a, b) => a + b, 0) / diffSideRts.length) : 0;
  const iorEffect = avgSame - avgDiff;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="inhibition-of-return-test"
          direction="higher"
          value={Math.max(0, iorEffect)}
          unitLabel="ms inhibition of return effect"
          headline="Inhibition of Return Result"
          extraStats={[
            { label: "Same-Side RT", value: `${avgSame} ms` },
            { label: "Opposite-Side RT", value: `${avgDiff} ms` },
          ]}
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
            A box briefly flashes on the left or right. After a short pause, click the side where a dot appears —
            it&apos;s usually slower to respond when the target lands where the earlier cue was, since attention is
            inhibited from returning there.
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
          Trial {trialIndex + 1} / {TOTAL_TRIALS}
        </p>
        <div className="flex w-full max-w-sm items-center justify-between">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 transition-colors ${
              phase === "cue" && cueSide === "left" ? "border-primary bg-primary/10" : "border-border bg-surface-2"
            }`}
          >
            {phase === "target" && targetSide === "left" && <span className="h-6 w-6 rounded-full bg-accent" />}
          </div>
          <span className="text-xs text-muted-2">+</span>
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-xl border-2 transition-colors ${
              phase === "cue" && cueSide === "right" ? "border-primary bg-primary/10" : "border-border bg-surface-2"
            }`}
          >
            {phase === "target" && targetSide === "right" && <span className="h-6 w-6 rounded-full bg-accent" />}
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => respond("left")}>
            &larr; Left
          </Button>
          <Button variant="secondary" onClick={() => respond("right")}>
            Right &rarr;
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
