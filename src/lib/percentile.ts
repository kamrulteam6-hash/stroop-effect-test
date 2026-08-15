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
  "ruler-drop-test": { mean: 280, stdev: 50, direction: "lower" },
  "flanker-test": { mean: 82, stdev: 10, direction: "higher" },
  "memory-match-game": { mean: 14, stdev: 5, direction: "lower" },
  "pop-up-target-test": { mean: 20, stdev: 6, direction: "higher" },
  "vocabulary-size-test": { mean: 20000, stdev: 7000, direction: "higher" },
  "risk-taking-test": { mean: 550, stdev: 150, direction: "higher" },
  "serial-position-test": { mean: 9, stdev: 2.5, direction: "higher" },
  "levels-of-processing-test": { mean: 10, stdev: 2.5, direction: "higher" },
  "sunk-cost-test": { mean: 3, stdev: 1.2, direction: "lower" },
  "conjunction-fallacy-test": { mean: 2, stdev: 0.8, direction: "lower" },
  "gamblers-fallacy-test": { mean: 2, stdev: 1, direction: "higher" },
  "iowa-gambling-task": { mean: 200, stdev: 500, direction: "higher" },
  "availability-heuristic-test": { mean: 2, stdev: 1, direction: "higher" },
  "mental-rotation-test": { mean: 75, stdev: 15, direction: "higher" },
  "stop-signal-test": { mean: 65, stdev: 15, direction: "higher" },
  "simon-effect-test": { mean: 60, stdev: 30, direction: "lower" },
  "wisconsin-card-sorting-test": { mean: 60, stdev: 15, direction: "higher" },
  "tower-of-hanoi-test": { mean: 25, stdev: 10, direction: "lower" },
  "choice-reaction-time-test": { mean: 550, stdev: 100, direction: "lower" },
  "visual-search-test": { mean: 1200, stdev: 400, direction: "lower" },
  "change-blindness-test": { mean: 4000, stdev: 2000, direction: "lower" },
  "psychomotor-vigilance-test": { mean: 320, stdev: 60, direction: "lower" },
  "task-switching-test": { mean: 180, stdev: 90, direction: "lower" },
  "face-memory-test": { mean: 70, stdev: 15, direction: "higher" },
  "emotion-recognition-test": { mean: 75, stdev: 15, direction: "higher" },
  "odd-one-out-test": { mean: 900, stdev: 300, direction: "lower" },
  "operation-span-test": { mean: 65, stdev: 18, direction: "higher" },
  "paired-associates-memory-test": { mean: 60, stdev: 20, direction: "higher" },
  "delay-discounting-test": { mean: 50, stdev: 25, direction: "higher" },
  "attentional-blink-test": { mean: 20, stdev: 15, direction: "lower" },
  "posner-cueing-test": { mean: 35, stdev: 20, direction: "higher" },
  "mackworth-clock-test": { mean: 75, stdev: 15, direction: "higher" },
  "cognitive-reflection-test": { mean: 3, stdev: 2, direction: "higher" },
  "confirmation-bias-test": { mean: 60, stdev: 20, direction: "lower" },
  "base-rate-neglect-test": { mean: 40, stdev: 20, direction: "higher" },
  "decoy-effect-test": { mean: 65, stdev: 20, direction: "lower" },
  "loss-aversion-test": { mean: 40, stdev: 20, direction: "higher" },
  "overconfidence-test": { mean: 35, stdev: 20, direction: "lower" },
  "temporal-discounting-test": { mean: 45, stdev: 20, direction: "lower" },
  "wason-selection-task": { mean: 40, stdev: 20, direction: "higher" },
  "syllogism-test": { mean: 65, stdev: 18, direction: "higher" },
  "numerical-stroop-test": { mean: 80, stdev: 40, direction: "lower" },
  "emotional-stroop-test": { mean: 60, stdev: 40, direction: "lower" },
  "navon-test": { mean: 70, stdev: 35, direction: "lower" },
  "negative-priming-test": { mean: 40, stdev: 30, direction: "lower" },
  "inhibition-of-return-test": { mean: 25, stdev: 20, direction: "higher" },
  "flicker-change-detection-test": { mean: 3500, stdev: 2000, direction: "lower" },
  "spatial-search-test": { mean: 900, stdev: 300, direction: "lower" },
  "backward-spatial-span-test": { mean: 5, stdev: 1.5, direction: "higher" },
  "visual-paired-associates-test": { mean: 65, stdev: 18, direction: "higher" },
  "verbal-paired-associates-test": { mean: 55, stdev: 20, direction: "higher" },
  "prospective-memory-test": { mean: 65, stdev: 25, direction: "higher" },
  "serial-addition-test": { mean: 15, stdev: 7, direction: "higher" },
  "ponzo-illusion-test": { mean: 12, stdev: 6, direction: "lower" },
  "poggendorff-illusion-test": { mean: 15, stdev: 8, direction: "lower" },
  "delboeuf-illusion-test": { mean: 6, stdev: 3, direction: "lower" },
  "shepard-tables-illusion-test": { mean: 18, stdev: 8, direction: "lower" },
  "hermann-grid-illusion-test": { mean: 700, stdev: 250, direction: "lower" },
  "kanizsa-triangle-test": { mean: 80, stdev: 12, direction: "higher" },
  "motion-aftereffect-test": { mean: 8, stdev: 4, direction: "higher" },
  "sound-localization-test": { mean: 70, stdev: 18, direction: "higher" },
  "tone-memory-test": { mean: 6, stdev: 2, direction: "higher" },
  "rhythm-discrimination-test": { mean: 70, stdev: 18, direction: "higher" },
  "synonym-test": { mean: 75, stdev: 15, direction: "higher" },
  "reading-speed-test": { mean: 200, stdev: 60, direction: "higher" },
  "reading-comprehension-test": { mean: 75, stdev: 18, direction: "higher" },
  "word-fluency-test": { mean: 14, stdev: 6, direction: "higher" },
  "anagram-test": { mean: 4, stdev: 2, direction: "higher" },
  "spatial-reasoning-test": { mean: 72, stdev: 15, direction: "higher" },
  "paper-folding-test": { mean: 65, stdev: 18, direction: "higher" },
  "mirror-image-test": { mean: 78, stdev: 12, direction: "higher" },
  "pattern-completion-test": { mean: 75, stdev: 15, direction: "higher" },
  "deductive-reasoning-test": { mean: 68, stdev: 18, direction: "higher" },
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
