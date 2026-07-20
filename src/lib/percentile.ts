export type ScoreDirection = "higher" | "lower";

interface PercentileModel {
  mean: number;
  stdev: number;
  direction: ScoreDirection;
}

// Approximate distributions based on published averages for these kinds of tasks
// (e.g. ~273ms average simple reaction time, ~40 WPM average typing speed).
// These are statistical estimates for a rough comparison, not live global data.
const MODELS: Record<string, PercentileModel> = {
  "stroop-effect-test": { mean: 850, stdev: 220, direction: "lower" },
  "reaction-time-test": { mean: 273, stdev: 45, direction: "lower" },
  "colorblind-test-online": { mean: 4, stdev: 1, direction: "higher" },
  "aim-trainer-test": { mean: 550, stdev: 130, direction: "lower" },
  "click-speed-test": { mean: 5.5, stdev: 1.4, direction: "higher" },
  "number-memory-test": { mean: 8, stdev: 2, direction: "higher" },
  "verbal-memory-test": { mean: 28, stdev: 12, direction: "higher" },
  "sequence-memory-test": { mean: 7, stdev: 2.2, direction: "higher" },
  "typing-speed-test": { mean: 40, stdev: 15, direction: "higher" },
  "visual-memory-test": { mean: 8, stdev: 2.5, direction: "higher" },
  "mental-math-test": { mean: 20, stdev: 8, direction: "higher" },
  "color-perception-test": { mean: 10, stdev: 6, direction: "lower" },
  "attention-span-test": { mean: 85, stdev: 10, direction: "higher" },
  "schulte-table-test": { mean: 35, stdev: 12, direction: "lower" },
  "trail-making-test": { mean: 35, stdev: 15, direction: "lower" },
  "pitch-discrimination-test": { mean: 40, stdev: 25, direction: "lower" },
  "color-memory-game": { mean: 10, stdev: 4, direction: "higher" },
  "rhythm-tapping-test": { mean: 70, stdev: 30, direction: "lower" },
  "n-back-test": { mean: 78, stdev: 12, direction: "higher" },
  "multiple-object-tracking-test": { mean: 2.5, stdev: 1, direction: "higher" },
  "emotional-intelligence-test": { mean: 65, stdev: 15, direction: "higher" },
  "peripheral-vision-test": { mean: 70, stdev: 15, direction: "higher" },
  "symbol-digit-test": { mean: 50, stdev: 15, direction: "higher" },
  "pattern-iq-test": { mean: 5.5, stdev: 1.8, direction: "higher" },
  "finger-tapping-test": { mean: 60, stdev: 15, direction: "higher" },
};

// Standard normal CDF approximation (Abramowitz & Stegun 7.1.26)
function normalCdf(z: number): number {
  const sign = z < 0 ? -1 : 1;
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const y =
    1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return 0.5 * (1 + sign * y);
}

/**
 * Estimates what percentage of typical attempts this score beats, using a
 * per-test normal-distribution approximation. This is a statistical estimate
 * for comparison purposes, not a measurement of real, live global users.
 */
export function estimatePercentile(slug: string, value: number): number | null {
  const model = MODELS[slug];
  if (!model) return null;
  const z = model.direction === "higher" ? (value - model.mean) / model.stdev : (model.mean - value) / model.stdev;
  const percentile = normalCdf(z) * 100;
  return Math.max(1, Math.min(99, Math.round(percentile)));
}
