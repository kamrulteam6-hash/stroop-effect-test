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
import { content as schulteTableTest } from "@/data/seoContent/schulte-table-test";
import { content as astigmatismTest } from "@/data/seoContent/astigmatism-test";
import { content as trailMakingTest } from "@/data/seoContent/trail-making-test";
import { content as pitchDiscriminationTest } from "@/data/seoContent/pitch-discrimination-test";
import { content as colorMemoryGame } from "@/data/seoContent/color-memory-game";
import { content as rhythmTappingTest } from "@/data/seoContent/rhythm-tapping-test";
import { content as nBackTest } from "@/data/seoContent/n-back-test";
import { content as blindSpotTest } from "@/data/seoContent/blind-spot-test";
import { content as multipleObjectTrackingTest } from "@/data/seoContent/multiple-object-tracking-test";
import { content as bigFivePersonalityTest } from "@/data/seoContent/big-five-personality-test";
import { content as emotionalIntelligenceTest } from "@/data/seoContent/emotional-intelligence-test";
import { content as peripheralVisionTest } from "@/data/seoContent/peripheral-vision-test";
import { content as visualIllusionTest } from "@/data/seoContent/visual-illusion-test";
import { content as symbolDigitTest } from "@/data/seoContent/symbol-digit-test";
import { content as patternIqTest } from "@/data/seoContent/pattern-iq-test";
import { content as fingerTappingTest } from "@/data/seoContent/finger-tapping-test";

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
  "schulte-table-test": schulteTableTest,
  "astigmatism-test": astigmatismTest,
  "trail-making-test": trailMakingTest,
  "pitch-discrimination-test": pitchDiscriminationTest,
  "color-memory-game": colorMemoryGame,
  "rhythm-tapping-test": rhythmTappingTest,
  "n-back-test": nBackTest,
  "blind-spot-test": blindSpotTest,
  "multiple-object-tracking-test": multipleObjectTrackingTest,
  "big-five-personality-test": bigFivePersonalityTest,
  "emotional-intelligence-test": emotionalIntelligenceTest,
  "peripheral-vision-test": peripheralVisionTest,
  "visual-illusion-test": visualIllusionTest,
  "symbol-digit-test": symbolDigitTest,
  "pattern-iq-test": patternIqTest,
  "finger-tapping-test": fingerTappingTest,
};
