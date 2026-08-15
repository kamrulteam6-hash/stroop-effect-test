"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";

export interface ScreenerQuestion {
  text: string;
  /** Set true when a higher agreement means a *lower* score on the trait/symptom being measured. */
  reverse?: boolean;
  /** Key into `dimensions` for multi-dimension screeners. Omit for single-score screeners. */
  dimension?: string;
}

export interface ScreenerBand {
  /** Inclusive upper bound (0-100) of this band. The last band should use 100. */
  max: number;
  label: string;
  description: string;
  tone?: "primary" | "accent" | "gold" | "success" | "danger" | "muted";
}

export interface LikertScreenerConfig {
  slug: string;
  /** Shown on the idle screen before starting. */
  intro: string;
  questions: ScreenerQuestion[];
  /** Likert labels shown as buttons, ordered from lowest (1) to highest agreement/frequency. */
  scaleLabels: string[];
  /** key -> display label, for multi-dimension results. Omit for a single overall score. */
  dimensions?: Record<string, string>;
  /** Bands describing the overall score, ascending by `max`. */
  bands: ScreenerBand[];
  /** Heading shown above the score on the result screen. */
  resultHeading?: string;
  /** Always-shown disclaimer beneath the result. */
  disclaimer: string;
}

function scoreToPercent(values: number[], scaleLength: number): number {
  if (values.length === 0) return 0;
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return ((avg - 1) / (scaleLength - 1)) * 100;
}

function bandFor(bands: ScreenerBand[], value: number): ScreenerBand {
  return bands.find((b) => value <= b.max) ?? bands[bands.length - 1];
}

export function LikertScreener({ config }: { config: LikertScreenerConfig }) {
  const { questions, scaleLabels, dimensions, bands, resultHeading, disclaimer, intro } = config;
  const [phase, setPhase] = useState<"idle" | "quiz" | "result">("idle");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const start = () => {
    setAnswers([]);
    setIndex(0);
    setPhase("quiz");
  };

  const answer = (value: number) => {
    const next = [...answers, value];
    if (index + 1 >= questions.length) {
      setAnswers(next);
      setPhase("result");
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  if (phase === "result") {
    const scored = questions.map((q, i) => ({
      q,
      v: q.reverse ? scaleLabels.length + 1 - answers[i] : answers[i],
    }));

    let traits: TraitScore[] | null = null;
    let overall: number;

    if (dimensions) {
      const keys = Object.keys(dimensions);
      traits = keys.map((key) => {
        const values = scored.filter(({ q }) => q.dimension === key).map(({ v }) => v);
        const pct = scoreToPercent(values, scaleLabels.length);
        return { key, label: dimensions[key], value: pct, description: "" };
      });
      overall = traits.reduce((a, t) => a + t.value, 0) / traits.length;
    } else {
      overall = scoreToPercent(scored.map(({ v }) => v), scaleLabels.length);
    }

    const band = bandFor(bands, overall);

    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>{resultHeading ?? "Your Result"}</ResultHeading>

          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">{Math.round(overall)}</span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">out of 100</span>
          </div>

          <span
            className={`rounded-full px-4 py-1.5 text-sm font-bold ${
              band.tone === "danger"
                ? "bg-danger/15 text-danger"
                : band.tone === "gold"
                  ? "bg-gold/15 text-gold"
                  : band.tone === "success"
                    ? "bg-success/15 text-success"
                    : "bg-primary/15 text-primary"
            }`}
          >
            {band.label}
          </span>

          <p className="max-w-md text-sm text-muted">{band.description}</p>

          {traits && (
            <div className="w-full max-w-md pt-2">
              <TraitBars traits={traits} />
            </div>
          )}

          <Callout icon="🩺" title="Not a diagnosis" tone="gold">
            {disclaimer}
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
          <p className="max-w-sm text-sm text-muted">{intro}</p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = questions[index];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {index + 1} / {questions.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">{q.text}</p>

        <div
          className="grid w-full gap-2"
          style={{ gridTemplateColumns: `repeat(${scaleLabels.length}, minmax(0, 1fr))` }}
        >
          {scaleLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => answer(i + 1)}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-1 py-3 text-center text-[10px] font-medium text-muted transition-colors hover:border-primary hover:text-foreground sm:text-xs"
            >
              <span className="text-lg font-bold text-foreground">{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
