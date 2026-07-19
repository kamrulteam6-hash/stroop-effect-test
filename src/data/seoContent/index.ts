import { TestSeoContent } from "@/data/seoContent/types";
import { content as stroopEffectTest } from "@/data/seoContent/stroop-effect-test";
import { content as reactionTimeTest } from "@/data/seoContent/reaction-time-test";
import { content as colorblindTestOnline } from "@/data/seoContent/colorblind-test-online";
import { content as aimTrainerTest } from "@/data/seoContent/aim-trainer-test";
import { content as clickSpeedTest } from "@/data/seoContent/click-speed-test";
import { content as numberMemoryTest } from "@/data/seoContent/number-memory-test";
import { content as verbalMemoryTest } from "@/data/seoContent/verbal-memory-test";
import { content as sequenceMemoryTest } from "@/data/seoContent/sequence-memory-test";
import { content as typingSpeedTest } from "@/data/seoContent/typing-speed-test";
import { content as visualMemoryTest } from "@/data/seoContent/visual-memory-test";
import { content as hearingRangeTest } from "@/data/seoContent/hearing-range-test";
import { content as mentalMathTest } from "@/data/seoContent/mental-math-test";
import { content as colorPerceptionTest } from "@/data/seoContent/color-perception-test";
import { content as attentionSpanTest } from "@/data/seoContent/attention-span-test";

export const seoContentBySlug: Record<string, TestSeoContent> = {
  "stroop-effect-test": stroopEffectTest,
  "reaction-time-test": reactionTimeTest,
  "colorblind-test-online": colorblindTestOnline,
  "aim-trainer-test": aimTrainerTest,
  "click-speed-test": clickSpeedTest,
  "number-memory-test": numberMemoryTest,
  "verbal-memory-test": verbalMemoryTest,
  "sequence-memory-test": sequenceMemoryTest,
  "typing-speed-test": typingSpeedTest,
  "visual-memory-test": visualMemoryTest,
  "hearing-range-test": hearingRangeTest,
  "mental-math-test": mentalMathTest,
  "color-perception-test": colorPerceptionTest,
  "attention-span-test": attentionSpanTest,
};
