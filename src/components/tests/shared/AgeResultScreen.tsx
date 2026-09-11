"use client";

import { Button } from "@/components/ui/Button";
import { ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

export function AgeResultScreen({
  age,
  ageLabel,
  headline,
  description,
  disclaimer,
  onRetry,
}: {
  age: number;
  ageLabel: string;
  headline: string;
  description: string;
  disclaimer: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <ResultHeading>{headline}</ResultHeading>
      <div className="relative flex flex-col items-center">
        <span aria-hidden className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-primary/10 blur-2xl" />
        <span className="text-6xl font-black tabular-nums text-primary drop-shadow-[0_4px_16px_rgba(91,61,240,0.25)] sm:text-7xl">
          {Math.round(age)}
        </span>
        <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">{ageLabel}</span>
      </div>
      <p className="max-w-md text-sm text-muted">{description}</p>
      <Callout icon="🎮" title="For fun, not diagnosis" tone="gold">
        {disclaimer}
      </Callout>
      <Button onClick={onRetry}>Try Again</Button>
    </div>
  );
}
