"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "viewing" | "followup" | "profile" | "result";
type Rating = -1 | 0 | 1;

const LINE_COUNT = 24;
const ORIENTATIONS = Array.from({ length: 12 }, (_, i) => i * 15);

function timeLabel(totalMinutes: number): string {
  const hour = Math.floor(totalMinutes / 60) % 12 || 12;
  const minute = totalMinutes % 60;
  return `${hour}:${minute === 0 ? "00" : "30"}`;
}

function clockLabel(angle: number): string {
  const minutes = (angle / 15) * 30;
  const oppositeMinutes = (minutes + 360) % 720;
  return `${timeLabel(minutes)}–${timeLabel(oppositeMinutes)} o'clock`;
}

function RadialLines({ colors }: { colors?: Record<number, string> }) {
  const lines = Array.from({ length: LINE_COUNT }, (_, i) => {
    const angle = (i * 2 * Math.PI) / LINE_COUNT;
    const innerR = 14;
    const outerR = 140;
    const x1 = 150 + innerR * Math.cos(angle);
    const y1 = 150 + innerR * Math.sin(angle);
    const x2 = 150 + outerR * Math.cos(angle);
    const y2 = 150 + outerR * Math.sin(angle);
    const orientation = Math.round(((i * 15) % 180) / 15) * 15;
    const color = colors?.[orientation] ?? "#111";
    return { x1, y1, x2, y2, key: i, color };
  });

  return (
    <svg viewBox="0 0 300 300" className="h-64 w-64 sm:h-72 sm:w-72">
      <circle cx={150} cy={150} r={148} fill="white" stroke="#ccc" strokeWidth={1} />
      {lines.map((l) => (
        <line key={l.key} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={l.color} strokeWidth={2.5} />
      ))}
      <circle cx={150} cy={150} r={3} fill="#5b3df0" />
    </svg>
  );
}

function SingleLine({ angle }: { angle: number }) {
  const rad = (angle * Math.PI) / 180;
  const outerR = 90;
  const x1 = 100 - outerR * Math.cos(rad);
  const y1 = 100 - outerR * Math.sin(rad);
  const x2 = 100 + outerR * Math.cos(rad);
  const y2 = 100 + outerR * Math.sin(rad);
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40 sm:h-48 sm:w-48">
      <circle cx={100} cy={100} r={98} fill="white" stroke="#ccc" strokeWidth={1} />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#111" strokeWidth={3} />
      <circle cx={100} cy={100} r={3} fill="#5b3df0" />
    </svg>
  );
}

export function AstigmatismTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sawDifference, setSawDifference] = useState<boolean | null>(null);
  const [orientationIndex, setOrientationIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, Rating>>({});

  const start = () => {
    setSawDifference(null);
    setRatings({});
    setOrientationIndex(0);
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

  const beginProfile = () => {
    setOrientationIndex(0);
    setRatings({});
    setPhase("profile");
  };

  const rateLine = (rating: Rating) => {
    const angle = ORIENTATIONS[orientationIndex];
    const next = { ...ratings, [angle]: rating };
    setRatings(next);
    if (orientationIndex + 1 >= ORIENTATIONS.length) {
      setPhase("result");
    } else {
      setOrientationIndex(orientationIndex + 1);
    }
  };

  const blurryAxes = ORIENTATIONS.filter((a) => ratings[a] === -1);
  const colorMap: Record<number, string> = {};
  ORIENTATIONS.forEach((a) => {
    const r = ratings[a];
    colorMap[a] = r === -1 ? "#ef4444" : r === 1 ? "#22c55e" : "#111";
  });

  if (phase === "result") {
    const hasProfile = Object.keys(ratings).length > 0;
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>{sawDifference ? "Some Lines Looked Different" : "Lines Looked Even"}</ResultHeading>

          {hasProfile ? (
            <>
              <RadialLines colors={colorMap} />
              <div className="flex w-full max-w-sm flex-col gap-1.5">
                {ORIENTATIONS.map((a) => {
                  const r = ratings[a];
                  return (
                    <div key={a} className="flex items-center justify-between rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-[11px]">
                      <span className="font-medium text-foreground">{clockLabel(a)}</span>
                      <span
                        className={
                          r === -1 ? "font-bold text-danger" : r === 1 ? "font-bold text-success" : "text-muted-2"
                        }
                      >
                        {r === -1 ? "Blurrier" : r === 1 ? "Sharper" : "Average"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="max-w-sm text-sm text-muted">
                {blurryAxes.length > 0
                  ? `You reported the ${blurryAxes.map(clockLabel).join(" and ")} line(s) as blurrier than the rest. Uneven sharpness concentrated around one or two specific axes like this is one informal sign associated with astigmatism.`
                  : "You didn't mark any single axis as consistently blurrier than the others, which is more typical of eyes without significant astigmatism."}
              </p>
            </>
          ) : (
            <p className="max-w-sm text-sm text-muted">
              {sawDifference
                ? "You noticed some lines appeared bolder, darker, or sharper than others. This pattern is one informal sign associated with astigmatism, where the eye focuses light unevenly across different orientations."
                : "You saw the lines as roughly equal in sharpness and darkness all the way around, which is what most people without significant astigmatism report."}
            </p>
          )}

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

  if (phase === "profile") {
    const angle = ORIENTATIONS[orientationIndex];
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-medium text-muted-2">
            Line {orientationIndex + 1} / {ORIENTATIONS.length} — {clockLabel(angle)}
          </p>
          <SingleLine angle={angle} />
          <p className="max-w-sm text-sm font-medium text-foreground">
            How does this line compare to the others you&apos;ve seen?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="secondary" onClick={() => rateLine(-1)}>
              〰️ Blurrier / fainter
            </Button>
            <Button variant="secondary" onClick={() => rateLine(0)}>
              ➖ About average
            </Button>
            <Button variant="secondary" onClick={() => rateLine(1)}>
              🔍 Sharper / darker
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "followup") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Let&apos;s narrow it down. You&apos;ll now see each of the 12 clock-position lines one at a time — rate
            how each one compares to the rest.
          </p>
          <Button size="lg" onClick={beginProfile}>
            Start Detailed Check (12 lines)
          </Button>
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
        <span className="text-4xl">🕰️</span>
        <p className="max-w-sm text-sm text-muted">
          A clock-dial style self-check inspired by the astigmatic fan chart opticians use. First, look at the full
          pattern — if anything looks uneven, you&apos;ll then rate all 12 individual clock-position lines for a
          detailed personal profile.
        </p>
        <Button size="lg" onClick={start}>
          Start Test
        </Button>
      </div>
    </TestFrame>
  );
}
