"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "testing" | "result";
type Eye = "right" | "left";

const MIN_GAP = 30;
const MAX_GAP = 220;
const TRACK_WIDTH = 260;
const DOT_SIZE = 16;

export function BlindSpotTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [eye, setEye] = useState<Eye>("right");
  const [gap, setGap] = useState(180);
  const [measurements, setMeasurements] = useState<Record<Eye, number | null>>({ right: null, left: null });

  const start = () => {
    setEye("right");
    setGap(180);
    setMeasurements({ right: null, left: null });
    setPhase("testing");
  };

  const recordDisappearance = () => {
    const next = { ...measurements, [eye]: gap };
    setMeasurements(next);
    if (eye === "right") {
      setEye("left");
      setGap(180);
      setPhase("testing");
    } else {
      setPhase("result");
    }
  };

  const crossLeft = eye === "right" ? 16 : TRACK_WIDTH - 16;
  const dotLeft = eye === "right" ? 24 + gap : TRACK_WIDTH - 24 - gap - DOT_SIZE;

  if (phase === "result") {
    const maxVal = Math.max(measurements.right ?? 0, measurements.left ?? 0, 1);
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Both Blind Spots Found</ResultHeading>
          <div className="flex w-full max-w-xs flex-col gap-3">
            {(["right", "left"] as Eye[]).map((e) => (
              <div key={e}>
                <div className="mb-1 flex items-center justify-between text-xs font-semibold text-foreground">
                  <span>{e === "right" ? "👁️ Right Eye" : "👁️ Left Eye"}</span>
                  <span>{measurements[e]}px</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-primary transition-[width] duration-700"
                    style={{ width: `${((measurements[e] ?? 0) / maxVal) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="max-w-sm text-sm text-muted">
            Both gaps correspond to the point where the dot&apos;s image landed exactly on your optic disc — the
            small patch on each retina with no light-sensing cells at all. A close match between your two eyes is
            typical.
          </p>
          <Callout icon="👁️" title="Everyone has one — in each eye">
            This isn&apos;t a defect — every person has a blind spot in each eye. You never normally notice either
            one because your brain fills the gap in using the surrounding pattern and information from your other
            eye.
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
          <span className="text-5xl">👁️</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll test <strong className="text-foreground">both eyes</strong>, one at a time. Cover one eye,
            look directly at the cross with the other, and slowly drag the slider until the dot disappears.
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
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          {eye === "right" ? "Trial 1 / 2 — Right Eye" : "Trial 2 / 2 — Left Eye"}
        </p>
        <p className="max-w-sm text-xs text-muted-2">
          Cover your {eye === "right" ? "left" : "right"} eye. Fix your {eye} eye on the cross. Drag the slider
          slowly.
        </p>
        <div className="relative h-16" style={{ width: TRACK_WIDTH }}>
          <span
            className="absolute top-1/2 -translate-y-1/2 text-2xl font-bold text-foreground"
            style={{ left: crossLeft }}
          >
            +
          </span>
          <span
            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-danger"
            style={{ left: dotLeft }}
          />
        </div>
        <input
          type="range"
          min={MIN_GAP}
          max={MAX_GAP}
          value={gap}
          onChange={(e) => setGap(Number(e.target.value))}
          className="accent-primary"
          style={{ width: TRACK_WIDTH }}
          aria-label="Dot distance from cross"
        />
        <Button onClick={recordDisappearance}>The dot just disappeared!</Button>
      </div>
    </TestFrame>
  );
}
