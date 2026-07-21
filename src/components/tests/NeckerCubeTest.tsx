"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "viewing" | "result";

const DURATION_S = 30;

function NeckerCube() {
  return (
    <svg viewBox="0 0 280 280" width="220" height="220" className="mx-auto">
      <g stroke="var(--color-foreground)" strokeWidth={2.5} fill="none" strokeLinecap="round">
        <rect x={60} y={60} width={120} height={120} />
        <rect x={100} y={100} width={120} height={120} />
        <line x1={60} y1={60} x2={100} y2={100} />
        <line x1={180} y1={60} x2={220} y2={100} />
        <line x1={60} y1={180} x2={100} y2={220} />
        <line x1={180} y1={180} x2={220} y2={220} />
      </g>
    </svg>
  );
}

export function NeckerCubeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [flips, setFlips] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_S);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const start = () => {
    setFlips(0);
    setTimeLeft(DURATION_S);
    setPhase("viewing");
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(intervalRef.current);
          setPhase("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const registerFlip = () => {
    if (phase !== "viewing") return;
    setFlips((f) => f + 1);
  };

  const flipsPerMinute = Math.round((flips / DURATION_S) * 60);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Reversal Rate</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black tabular-nums text-primary">{flips}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
              perceptual flips in {DURATION_S}s
            </span>
          </div>
          <p className="max-w-sm text-sm text-muted">
            That works out to roughly <strong className="text-foreground">{flipsPerMinute} flips per minute</strong>.
            Reversal rate varies widely between people and even between attempts — there&apos;s no universal
            &quot;normal&quot; number.
          </p>
          <Callout icon="🧊" title="Why this happens">
            The Necker cube gives your visual system two equally valid 3D interpretations of the same flat drawing.
            With no extra depth cues to settle the ambiguity, perception spontaneously flips between them the longer
            you look.
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
            Stare at the wireframe cube below for 30 seconds. It has no fixed depth — your brain will spontaneously
            flip between two 3D interpretations. Click the button every time it flips for you.
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
        <p className="text-xs font-medium text-muted-2">Time left: {timeLeft}s — Flips: {flips}</p>
        <NeckerCube />
        <Button size="lg" onClick={registerFlip}>
          It Flipped!
        </Button>
      </div>
    </TestFrame>
  );
}
