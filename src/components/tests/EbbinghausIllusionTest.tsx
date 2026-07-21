"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "testing" | "result";

const REFERENCE_RADIUS = 28;
const SMALL_CONTEXT_RADIUS = 11;
const LARGE_CONTEXT_RADIUS = 42;

function ContextRing({
  cx,
  cy,
  centerRadius,
  contextRadius,
}: {
  cx: number;
  cy: number;
  centerRadius: number;
  contextRadius: number;
}) {
  const distance = centerRadius + contextRadius + 8;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i / 6) * Math.PI * 2;
    return { x: cx + Math.cos(angle) * distance, y: cy + Math.sin(angle) * distance };
  });

  return (
    <g>
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={contextRadius} fill="none" stroke="var(--color-muted-2)" strokeWidth={2} />
      ))}
      <circle cx={cx} cy={cy} r={centerRadius} fill="var(--color-primary)" />
    </g>
  );
}

export function EbbinghausIllusionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [adjustable, setAdjustable] = useState(28);

  const start = () => {
    setAdjustable(15 + Math.round(Math.random() * 30));
    setPhase("testing");
  };

  const finish = () => setPhase("result");

  const diff = REFERENCE_RADIUS - adjustable;
  const magnitude = Math.round((diff / REFERENCE_RADIUS) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Illusion Result</ResultHeading>
          <p className="max-w-sm text-sm text-muted">
            You set the right circle&apos;s actual radius to{" "}
            <strong className="text-foreground">{adjustable}px</strong> to match the left circle&apos;s actual{" "}
            <strong className="text-foreground">{REFERENCE_RADIUS}px</strong> — a difference of{" "}
            <strong className="text-foreground">{Math.abs(magnitude)}%</strong>
            {magnitude > 0
              ? ", meaning the large surrounding circles fooled you into perceiving the center circle as smaller than it really was."
              : magnitude < 0
                ? ", meaning you slightly overcorrected for the illusion."
                : ", a near-perfect match — unusually resistant to this illusion!"}
          </p>
          <Callout icon="⭕" title="Why this happens">
            Your visual system judges size partly by comparison to nearby objects, not in isolation. Large
            neighboring circles make a center circle look smaller by contrast, and small neighbors make it look
            bigger — even though nothing about the center circle itself has changed.
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
            Two center circles are surrounded by different-sized rings. Drag the slider to change the right circle&apos;s
            actual size until it looks exactly as big as the left one.
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
      <div className="flex flex-col items-center gap-8">
        <svg viewBox="0 0 400 220" width="100%" height="220" className="max-w-md">
          <ContextRing cx={110} cy={110} centerRadius={REFERENCE_RADIUS} contextRadius={SMALL_CONTEXT_RADIUS} />
          <ContextRing cx={290} cy={110} centerRadius={adjustable} contextRadius={LARGE_CONTEXT_RADIUS} />
        </svg>
        <input
          type="range"
          min={12}
          max={48}
          value={adjustable}
          onChange={(e) => setAdjustable(Number(e.target.value))}
          className="w-full max-w-xs accent-primary"
          aria-label="Adjust right circle size"
        />
        <Button onClick={finish}>They look equal now</Button>
      </div>
    </TestFrame>
  );
}
