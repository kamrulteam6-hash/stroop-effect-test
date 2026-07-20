import { ComponentType } from "react";
import { ComponentKey } from "@/data/tests";
import { StroopTest } from "@/components/tests/StroopTest";
import { ReactionTimeTest } from "@/components/tests/ReactionTimeTest";
import { ColorBlindTest } from "@/components/tests/ColorBlindTest";
import { AimTrainerTest } from "@/components/tests/AimTrainerTest";
import { ClickSpeedTest } from "@/components/tests/ClickSpeedTest";
import { NumberMemoryTest } from "@/components/tests/NumberMemoryTest";
import { VerbalMemoryTest } from "@/components/tests/VerbalMemoryTest";
import { SequenceMemoryTest } from "@/components/tests/SequenceMemoryTest";
import { TypingSpeedTest } from "@/components/tests/TypingSpeedTest";
import { VisualMemoryTest } from "@/components/tests/VisualMemoryTest";
import { HearingRangeTest } from "@/components/tests/HearingRangeTest";
import { MentalMathTest } from "@/components/tests/MentalMathTest";
import { ColorPerceptionTest } from "@/components/tests/ColorPerceptionTest";
import { AttentionTest } from "@/components/tests/AttentionTest";
import { SchulteTableTest } from "@/components/tests/SchulteTableTest";
import { AstigmatismTest } from "@/components/tests/AstigmatismTest";
import { TrailMakingTest } from "@/components/tests/TrailMakingTest";
import { PitchDiscriminationTest } from "@/components/tests/PitchDiscriminationTest";
import { ColorMemoryTest } from "@/components/tests/ColorMemoryTest";
import { RhythmTappingTest } from "@/components/tests/RhythmTappingTest";
import { NBackTest } from "@/components/tests/NBackTest";
import { BlindSpotTest } from "@/components/tests/BlindSpotTest";
import { MultipleObjectTrackingTest } from "@/components/tests/MultipleObjectTrackingTest";
import { BigFiveTest } from "@/components/tests/BigFiveTest";
import { EmotionalIntelligenceTest } from "@/components/tests/EmotionalIntelligenceTest";
import { PeripheralVisionTest } from "@/components/tests/PeripheralVisionTest";
import { VisualIllusionTest } from "@/components/tests/VisualIllusionTest";
import { SymbolDigitTest } from "@/components/tests/SymbolDigitTest";
import { PatternIqTest } from "@/components/tests/PatternIqTest";
import { FingerTappingTest } from "@/components/tests/FingerTappingTest";

export const testComponents: Record<ComponentKey, ComponentType> = {
  stroop: StroopTest,
  "reaction-time": ReactionTimeTest,
  colorblind: ColorBlindTest,
  "aim-trainer": AimTrainerTest,
  "click-speed": ClickSpeedTest,
  "number-memory": NumberMemoryTest,
  "verbal-memory": VerbalMemoryTest,
  "sequence-memory": SequenceMemoryTest,
  "typing-speed": TypingSpeedTest,
  "visual-memory": VisualMemoryTest,
  "hearing-range": HearingRangeTest,
  "mental-math": MentalMathTest,
  "color-perception": ColorPerceptionTest,
  attention: AttentionTest,
  "schulte-table": SchulteTableTest,
  astigmatism: AstigmatismTest,
  "trail-making": TrailMakingTest,
  "pitch-discrimination": PitchDiscriminationTest,
  "color-memory": ColorMemoryTest,
  "rhythm-tapping": RhythmTappingTest,
  "n-back": NBackTest,
  "blind-spot": BlindSpotTest,
  mot: MultipleObjectTrackingTest,
  "big-five": BigFiveTest,
  "eq-test": EmotionalIntelligenceTest,
  "peripheral-vision": PeripheralVisionTest,
  "visual-illusion": VisualIllusionTest,
  "symbol-digit": SymbolDigitTest,
  "pattern-iq": PatternIqTest,
  "finger-tapping": FingerTappingTest,
};
