"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "testing" | "result";

const REFERENCE_LENGTH = 200;
const CX = 190;
const FIN_LEN = 16;
const FIN_ANGLE = (30 * Math.PI) / 180;
const DX = Math.cos(FIN_ANGLE) * FIN_LEN;
const DY = Math.sin(FIN_ANGLE) * FIN_LEN;

function MullerLyerLine({ length, wingsOut, y }: { length: number; wingsOut: boolean; y: number }) {
  const x1 = CX - length / 2;
  const x2 = CX + length / 2;
  const leftSign = wingsOut ? -1 : 1;
  const rightSign = wingsOut ? 1 : -1;

  return (
    <g stroke="var(--color-foreground)" strokeWidth={2.5} strokeLinecap="round">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y} x2={x1 + leftSign * DX} y2={y - DY} />
      <line x1={x1} y1={y} x2={x1 + leftSign * DX} y2={y + DY} />
      <line x1={x2} y1={y} x2={x2 + rightSign * DX} y2={y - DY} />
      <line x1={x2} y1={y} x2={x2 + rightSign * DX} y2={y + DY} />
    </g>
  );
}

export function VisualIllusionTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [adjustable, setAdjustable] = useState(200);

  const start = () => {
    setAdjustable(140 + Math.round(Math.random() * 120));
    setPhase("testing");
  };

  const finish = () => setPhase("result");

  const diff = REFERENCE_LENGTH - adjustable;
  const magnitude = Math.round((diff / REFERENCE_LENGTH) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Your Illusion Result</ResultHeading>
          <p className="max-w-sm text-sm text-muted">
            You set the bottom line to <strong className="text-foreground">{adjustable}px</strong>{" "}
            to match the top line&apos;s actual{" "}
            <strong className="text-foreground">{REFERENCE_LENGTH}px</strong> — a difference of{" "}
            <strong className="text-foreground">{Math.abs(magnitude)}%</strong>
            {magnitude > 0 ? ", meaning the outward-finned line fooled you into perceiving it as longer than it was." : magnitude < 0 ? ", meaning you slightly overcorrected for the illusion." : ", a near-perfect match — unusually resistant to this illusion!"}
          </p>
          <Callout icon="🔀" title="Why this happens">
            The Müller-Lyer illusion is thought to relate to how your visual system uses corner and depth cues from
            everyday 3D scenes (like the inside vs. outside corner of a room) to judge length — cues that get
            misapplied to these flat, 2D line drawings.
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
            You&apos;ll see two lines with arrow-like fins on each end. Drag the slider to change the length of the
            bottom line until it looks exactly as long as the top line.
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
        <svg viewBox="0 0 380 140" width="100%" height="140" className="max-w-md">
          <MullerLyerLine length={REFERENCE_LENGTH} wingsOut={false} y={40} />
          <MullerLyerLine length={adjustable} wingsOut={true} y={100} />
        </svg>
        <input
          type="range"
          min={80}
          max={300}
          value={adjustable}
          onChange={(e) => setAdjustable(Number(e.target.value))}
          className="w-full max-w-xs accent-primary"
          aria-label="Adjust bottom line length"
        />
        <Button onClick={finish}>They look equal now</Button>
      </div>
    </TestFrame>
  );
}
