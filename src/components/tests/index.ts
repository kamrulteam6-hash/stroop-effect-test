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
import { RulerDropTest } from "@/components/tests/RulerDropTest";
import { FlankerTest } from "@/components/tests/FlankerTest";
import { MemoryMatchTest } from "@/components/tests/MemoryMatchTest";
import { PopUpTargetTest } from "@/components/tests/PopUpTargetTest";
import { VocabularySizeTest } from "@/components/tests/VocabularySizeTest";
import { HandednessTest } from "@/components/tests/HandednessTest";
import { PersonalityTypeTest } from "@/components/tests/PersonalityTypeTest";
import { RiskTakingTest } from "@/components/tests/RiskTakingTest";
import { EnneagramTest } from "@/components/tests/EnneagramTest";
import { LoveLanguageTest } from "@/components/tests/LoveLanguageTest";
import { SerialPositionTest } from "@/components/tests/SerialPositionTest";
import { FalseMemoryTest } from "@/components/tests/FalseMemoryTest";
import { BarnumEffectTest } from "@/components/tests/BarnumEffectTest";
import { NeckerCubeTest } from "@/components/tests/NeckerCubeTest";
import { AnchoringBiasTest } from "@/components/tests/AnchoringBiasTest";
import { LevelsOfProcessingTest } from "@/components/tests/LevelsOfProcessingTest";
import { FramingEffectTest } from "@/components/tests/FramingEffectTest";
import { SunkCostTest } from "@/components/tests/SunkCostTest";
import { EbbinghausIllusionTest } from "@/components/tests/EbbinghausIllusionTest";
import { SemanticPrimingTest } from "@/components/tests/SemanticPrimingTest";
import { VonRestorffTest } from "@/components/tests/VonRestorffTest";
import { ConjunctionFallacyTest } from "@/components/tests/ConjunctionFallacyTest";
import { HaloEffectTest } from "@/components/tests/HaloEffectTest";
import { GamblersFallacyTest } from "@/components/tests/GamblersFallacyTest";
import { IowaGamblingTest } from "@/components/tests/IowaGamblingTest";
import { AvailabilityHeuristicTest } from "@/components/tests/AvailabilityHeuristicTest";
import { MentalRotationTest } from "@/components/tests/MentalRotationTest";
import { StopSignalTest } from "@/components/tests/StopSignalTest";
import { SimonEffectTest } from "@/components/tests/SimonEffectTest";
import { WisconsinCardSortTest } from "@/components/tests/WisconsinCardSortTest";
import { TowerOfHanoiTest } from "@/components/tests/TowerOfHanoiTest";
import { ChoiceReactionTimeTest } from "@/components/tests/ChoiceReactionTimeTest";
import { VisualSearchTest } from "@/components/tests/VisualSearchTest";
import { ChangeBlindnessTest } from "@/components/tests/ChangeBlindnessTest";
import { PsychomotorVigilanceTest } from "@/components/tests/PsychomotorVigilanceTest";
import { TaskSwitchingTest } from "@/components/tests/TaskSwitchingTest";
import { FaceMemoryTest } from "@/components/tests/FaceMemoryTest";
import { EmotionRecognitionTest } from "@/components/tests/EmotionRecognitionTest";
import { OddOneOutTest } from "@/components/tests/OddOneOutTest";
import { OperationSpanTest } from "@/components/tests/OperationSpanTest";
import { PairedAssociatesTest } from "@/components/tests/PairedAssociatesTest";
import { DelayDiscountingTest } from "@/components/tests/DelayDiscountingTest";
import { AttentionalBlinkTest } from "@/components/tests/AttentionalBlinkTest";
import { PosnerCueingTest } from "@/components/tests/PosnerCueingTest";
import { MackworthClockTest } from "@/components/tests/MackworthClockTest";
import { CognitiveReflectionTest } from "@/components/tests/CognitiveReflectionTest";
import { ConfirmationBiasTest } from "@/components/tests/ConfirmationBiasTest";
import { BaseRateNeglectTest } from "@/components/tests/BaseRateNeglectTest";
import { DecoyEffectTest } from "@/components/tests/DecoyEffectTest";
import { LossAversionTest } from "@/components/tests/LossAversionTest";
import { OverconfidenceTest } from "@/components/tests/OverconfidenceTest";
import { TemporalDiscountingTest } from "@/components/tests/TemporalDiscountingTest";
import { WasonSelectionTest } from "@/components/tests/WasonSelectionTest";
import { SyllogismTest } from "@/components/tests/SyllogismTest";
import { NumericalStroopTest } from "@/components/tests/NumericalStroopTest";
import { EmotionalStroopTest } from "@/components/tests/EmotionalStroopTest";
import { NavonTest } from "@/components/tests/NavonTest";
import { NegativePrimingTest } from "@/components/tests/NegativePrimingTest";

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
  "ruler-drop": RulerDropTest,
  flanker: FlankerTest,
  "memory-match": MemoryMatchTest,
  "pop-up-target": PopUpTargetTest,
  "vocabulary-size": VocabularySizeTest,
  handedness: HandednessTest,
  "personality-type": PersonalityTypeTest,
  "risk-taking": RiskTakingTest,
  enneagram: EnneagramTest,
  "love-language": LoveLanguageTest,
  "serial-position": SerialPositionTest,
  "false-memory": FalseMemoryTest,
  "barnum-effect": BarnumEffectTest,
  "necker-cube": NeckerCubeTest,
  "anchoring-bias": AnchoringBiasTest,
  "levels-of-processing": LevelsOfProcessingTest,
  "framing-effect": FramingEffectTest,
  "sunk-cost": SunkCostTest,
  "ebbinghaus-illusion": EbbinghausIllusionTest,
  "semantic-priming": SemanticPrimingTest,
  "von-restorff": VonRestorffTest,
  "conjunction-fallacy": ConjunctionFallacyTest,
  "halo-effect": HaloEffectTest,
  "gamblers-fallacy": GamblersFallacyTest,
  "iowa-gambling": IowaGamblingTest,
  "availability-heuristic": AvailabilityHeuristicTest,
  "mental-rotation": MentalRotationTest,
  "stop-signal": StopSignalTest,
  "simon-effect": SimonEffectTest,
  wcst: WisconsinCardSortTest,
  "tower-of-hanoi": TowerOfHanoiTest,
  "choice-reaction-time": ChoiceReactionTimeTest,
  "visual-search": VisualSearchTest,
  "change-blindness": ChangeBlindnessTest,
  "psychomotor-vigilance": PsychomotorVigilanceTest,
  "task-switching": TaskSwitchingTest,
  "face-memory": FaceMemoryTest,
  "emotion-recognition": EmotionRecognitionTest,
  "odd-one-out": OddOneOutTest,
  "operation-span": OperationSpanTest,
  "paired-associates": PairedAssociatesTest,
  "delay-discounting": DelayDiscountingTest,
  "attentional-blink": AttentionalBlinkTest,
  "posner-cueing": PosnerCueingTest,
  "mackworth-clock": MackworthClockTest,
  "cognitive-reflection": CognitiveReflectionTest,
  "confirmation-bias": ConfirmationBiasTest,
  "base-rate-neglect": BaseRateNeglectTest,
  "decoy-effect": DecoyEffectTest,
  "loss-aversion": LossAversionTest,
  overconfidence: OverconfidenceTest,
  "temporal-discounting": TemporalDiscountingTest,
  "wason-selection": WasonSelectionTest,
  syllogism: SyllogismTest,
  "numerical-stroop": NumericalStroopTest,
  "emotional-stroop": EmotionalStroopTest,
  navon: NavonTest,
  "negative-priming": NegativePrimingTest,
};
