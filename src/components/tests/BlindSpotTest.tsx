"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "testing" | "result";

const MIN_GAP = 30;
const MAX_GAP = 220;
const TRACK_WIDTH = 260;

export function BlindSpotTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [gap, setGap] = useState(180);
  const [measuredGap, setMeasuredGap] = useState(0);

  const start = () => {
    setGap(180);
    setPhase("testing");
  };

  const recordDisappearance = () => {
    setMeasuredGap(gap);
    setPhase("result");
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Blind Spot Found</ResultHeading>
          <p className="max-w-sm text-sm text-muted">
            The dot disappeared at a separation of about <strong className="text-foreground">{measuredGap}px</strong>{" "}
            on your screen. That gap corresponds to the point where the dot&apos;s image landed exactly on your optic
            disc — the small patch on your retina with no light-sensing cells at all.
          </p>
          <Callout icon="👁️" title="Everyone has one">
            This isn&apos;t a defect — every person has a blind spot in each eye. You never normally notice it because
            your brain fills the gap in using the surrounding pattern and information from your other eye.
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
          <p className="max-w-sm text-sm text-muted">
            Cover your <strong className="text-foreground">left eye</strong>. Look directly at the{" "}
            <strong className="text-foreground">cross</strong> below with your right eye only — don&apos;t look at the
            dot. Slowly drag the slider until the dot disappears.
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
        <p className="max-w-sm text-xs text-muted-2">
          Cover your left eye. Fix your right eye on the cross. Drag the slider slowly.
        </p>
        <div className="relative h-16" style={{ width: TRACK_WIDTH }}>
          <span className="absolute top-1/2 left-4 -translate-y-1/2 text-2xl font-bold text-foreground">+</span>
          <span
            className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-danger"
            style={{ left: 24 + gap }}
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
