"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "viewing" | "followup" | "result";
type Axis = "vertical" | "horizontal" | "diagonal" | null;

const LINE_COUNT = 24;

function RadialLines() {
  const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
    const angle = (i * 2 * Math.PI) / LINE_COUNT;
    const innerR = 14;
    const outerR = 140;
    const x1 = 150 + innerR * Math.cos(angle);
    const y1 = 150 + innerR * Math.sin(angle);
    const x2 = 150 + outerR * Math.cos(angle);
    const y2 = 150 + outerR * Math.sin(angle);
    return { x1, y1, x2, y2, key: i };
  });

  return (
    <svg viewBox="0 0 300 300" className="h-64 w-64 sm:h-72 sm:w-72">
      <circle cx={150} cy={150} r={148} fill="white" stroke="#ccc" strokeWidth={1} />
      {lines.map((l) => (
        <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#111" strokeWidth={2.5} />
      ))}
      <circle cx={150} cy={150} r={3} fill="#5b3df0" />
    </svg>
  );
}

export function AstigmatismTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sawDifference, setSawDifference] = useState<boolean | null>(null);
  const [axis, setAxis] = useState<Axis>(null);

  const start = () => {
    setSawDifference(null);
    setAxis(null);
    setPhase("viewing");
  };

  const answerEqual = () => {
    setSawDifference(false);
    setPhase("result");
  };

  const answerDifferent = () => {
    setSawDifference(true);
    setPhase("followup");
  };

  const submitAxis = (a: Axis) => {
    setAxis(a);
    setPhase("result");
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>{sawDifference ? "Some Lines Looked Different" : "Lines Looked Even"}</ResultHeading>
          <p className="max-w-sm text-sm text-muted">
            {sawDifference
              ? `You noticed some lines appeared bolder, darker, or sharper than others${
                  axis ? ` — mostly in the ${axis} direction` : ""
                }. This pattern is one informal sign associated with astigmatism, where the eye focuses light unevenly across different orientations.`
              : "You saw the lines as roughly equal in sharpness and darkness all the way around, which is what most people without significant astigmatism report."}
          </p>
          <Callout icon="🩺" title="Not a medical diagnosis" tone="gold">
            This is an informal self-check, not a clinical test. Lighting, screen quality, viewing distance, and
            general eyesight all affect the result. Only a comprehensive eye exam from an optometrist or
            ophthalmologist can diagnose astigmatism.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "followup") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">Which lines looked bolder, darker, or more in-focus?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="secondary" onClick={() => submitAxis("vertical")}>
              Vertical (12–6)
            </Button>
            <Button variant="secondary" onClick={() => submitAxis("horizontal")}>
              Horizontal (3–9)
            </Button>
            <Button variant="secondary" onClick={() => submitAxis("diagonal")}>
              Diagonal
            </Button>
            <Button variant="ghost" onClick={() => submitAxis(null)}>
              Not sure
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "viewing") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="max-w-sm text-xs text-muted-2">
            Cover one eye. From a comfortable reading distance, look at the center dot.
          </p>
          <RadialLines />
          <p className="max-w-sm text-sm font-medium text-foreground">
            Do all the lines look equally dark and sharp?
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={answerDifferent}>
              No, some look different
            </Button>
            <Button onClick={answerEqual}>Yes, all equal</Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-5 text-center">
        <p className="max-w-sm text-sm text-muted">
          A quick, one-minute self-check using a radial line pattern. Cover one eye at a time and look for lines
          that appear bolder, darker, or sharper than the rest.
        </p>
        <Button size="lg" onClick={start}>
          Start Test
        </Button>
      </div>
    </TestFrame>
  );
}
