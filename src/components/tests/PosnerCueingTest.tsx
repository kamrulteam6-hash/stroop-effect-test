"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "cue" | "waiting" | "target" | "result";
type Side = "left" | "right";

const TOTAL_TRIALS = 16;
const CUE_MS = 250;
const VALID_PROBABILITY = 0.75;

function now(): number {
  return performance.now();
}

function randomSide(): Side {
  return Math.random() < 0.5 ? "left" : "right";
}

export function PosnerCueingTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [trialIndex, setTrialIndex] = useState(0);
  const [cueSide, setCueSide] = useState<Side>("left");
  const [targetSide, setTargetSide] = useState<Side>("left");
  const [isValid, setIsValid] = useState(true);
  const [validRts, setValidRts] = useState<number[]>([]);
  const [invalidRts, setInvalidRts] = useState<number[]>([]);
  const [targetStart, setTargetStart] = useState(0);

  const runTrial = () => {
    const cue = randomSide();
    const valid = Math.random() < VALID_PROBABILITY;
    const target = valid ? cue : (cue === "left" ? "right" : "left");
    setCueSide(cue);
    setTargetSide(target);
    setIsValid(valid);
    setPhase("cue");

    window.setTimeout(() => {
      setPhase("target");
      setTargetStart(now());
    }, CUE_MS);
  };

  const start = () => {
    setTrialIndex(0);
    setValidRts([]);
    setInvalidRts([]);
    runTrial();
  };

  const respond = (side: Side) => {
    if (phase !== "target") return;
    if (side !== targetSide) return;
    const rt = now() - targetStart;
    if (isValid) setValidRts((r) => [...r, rt]);
    else setInvalidRts((r) => [...r, rt]);

    const next = trialIndex + 1;
    if (next >= TOTAL_TRIALS) {
      setPhase("result");
      return;
    }
    setTrialIndex(next);
    runTrial();
  };

  const avgValid = validRts.length ? Math.round(validRts.reduce((a, b) => a + b, 0) / validRts.length) : 0;
  const avgInvalid = invalidRts.length ? Math.round(invalidRts.reduce((a, b) => a + b, 0) / invalidRts.length) : 0;
  const cueingEffect = avgInvalid - avgValid;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="posner-cueing-test"
          direction="higher"
          value={cueingEffect}
          unitLabel="ms cueing effect"
          headline="Posner Cueing Result"
          extraStats={[
            { label: "Valid Cue RT", value: `${avgValid} ms` },
            { label: "Invalid Cue RT", value: `${avgInvalid} ms` },
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
            A cue will flash on the left or right. Most of the time the target dot appears on the cued side — click
            the arrow matching the side the target appears on, as fast as you can.
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
