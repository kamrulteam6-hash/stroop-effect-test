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
};
