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
import { InhibitionOfReturnTest } from "@/components/tests/InhibitionOfReturnTest";
import { FlickerChangeDetectionTest } from "@/components/tests/FlickerChangeDetectionTest";
import { SpatialSearchTest } from "@/components/tests/SpatialSearchTest";
import { BackwardSpatialSpanTest } from "@/components/tests/BackwardSpatialSpanTest";
import { VisualPairedAssociatesTest } from "@/components/tests/VisualPairedAssociatesTest";
import { VerbalPairedAssociatesTest } from "@/components/tests/VerbalPairedAssociatesTest";
import { ProspectiveMemoryTest } from "@/components/tests/ProspectiveMemoryTest";
import { SerialAdditionTest } from "@/components/tests/SerialAdditionTest";
import { PonzoIllusionTest } from "@/components/tests/PonzoIllusionTest";
import { PoggendorffIllusionTest } from "@/components/tests/PoggendorffIllusionTest";
import { DelboeufIllusionTest } from "@/components/tests/DelboeufIllusionTest";
import { ShepardTablesTest } from "@/components/tests/ShepardTablesTest";
import { HermannGridTest } from "@/components/tests/HermannGridTest";
import { KanizsaTriangleTest } from "@/components/tests/KanizsaTriangleTest";
import { MotionAftereffectTest } from "@/components/tests/MotionAftereffectTest";
import { SoundLocalizationTest } from "@/components/tests/SoundLocalizationTest";
import { ToneMemoryTest } from "@/components/tests/ToneMemoryTest";
import { RhythmDiscriminationTest } from "@/components/tests/RhythmDiscriminationTest";
import { SynonymTest } from "@/components/tests/SynonymTest";
import { ReadingSpeedTest } from "@/components/tests/ReadingSpeedTest";
import { ReadingComprehensionTest } from "@/components/tests/ReadingComprehensionTest";
import { WordFluencyTest } from "@/components/tests/WordFluencyTest";
import { AnagramTest } from "@/components/tests/AnagramTest";
import { SpatialReasoningTest } from "@/components/tests/SpatialReasoningTest";
import { PaperFoldingTest } from "@/components/tests/PaperFoldingTest";
import { MirrorImageTest } from "@/components/tests/MirrorImageTest";
import { PatternCompletionTest } from "@/components/tests/PatternCompletionTest";
import { DeductiveReasoningTest } from "@/components/tests/DeductiveReasoningTest";
import { ADHDTest } from "@/components/tests/ADHDTest";
import { AutismSpectrumTest } from "@/components/tests/AutismSpectrumTest";
import { DepressionTest } from "@/components/tests/DepressionTest";
import { AnxietyTest } from "@/components/tests/AnxietyTest";
import { SocialAnxietyTest } from "@/components/tests/SocialAnxietyTest";
import { StressTest } from "@/components/tests/StressTest";
import { BurnoutTest } from "@/components/tests/BurnoutTest";
import { OCDTest } from "@/components/tests/OCDTest";
import { PTSDTest } from "@/components/tests/PTSDTest";
import { BipolarTest } from "@/components/tests/BipolarTest";
import { SelfEsteemTest } from "@/components/tests/SelfEsteemTest";
import { AttachmentStyleTest } from "@/components/tests/AttachmentStyleTest";
import { NarcissismTest } from "@/components/tests/NarcissismTest";
import { PsychopathyTest } from "@/components/tests/PsychopathyTest";
import { MachiavellianismTest } from "@/components/tests/MachiavellianismTest";
import { EmpathyTest } from "@/components/tests/EmpathyTest";
import { AlexithymiaTest } from "@/components/tests/AlexithymiaTest";
import { HighlySensitivePersonTest } from "@/components/tests/HighlySensitivePersonTest";
import { ImposterSyndromeTest } from "@/components/tests/ImposterSyndromeTest";
import { AngerTest } from "@/components/tests/AngerTest";
import { LonelinessTest } from "@/components/tests/LonelinessTest";
import { ProcrastinationTest } from "@/components/tests/ProcrastinationTest";
import { DarkTriadTest } from "@/components/tests/DarkTriadTest";
import { DarkTetradTest } from "@/components/tests/DarkTetradTest";
import { AssertivenessTest } from "@/components/tests/AssertivenessTest";
import { PeoplePleasingTest } from "@/components/tests/PeoplePleasingTest";
import { EmotionalMaturityTest } from "@/components/tests/EmotionalMaturityTest";
import { EmotionalRegulationTest } from "@/components/tests/EmotionalRegulationTest";
import { ConflictStyleTest } from "@/components/tests/ConflictStyleTest";
import { CommunicationStyleTest } from "@/components/tests/CommunicationStyleTest";
import { LeadershipStyleTest } from "@/components/tests/LeadershipStyleTest";
import { DecisionMakingStyleTest } from "@/components/tests/DecisionMakingStyleTest";
import { SleepChronotypeTest } from "@/components/tests/SleepChronotypeTest";
import { MorningNightOwlTest } from "@/components/tests/MorningNightOwlTest";
import { SleepQualityTest } from "@/components/tests/SleepQualityTest";
import { InsomniaScreeningTest } from "@/components/tests/InsomniaScreeningTest";
import { DyslexiaTest } from "@/components/tests/DyslexiaTest";
import { DyscalculiaTest } from "@/components/tests/DyscalculiaTest";
import { ReadingLevelTest } from "@/components/tests/ReadingLevelTest";
import { EnglishLevelTest } from "@/components/tests/EnglishLevelTest";
import { GrammarTest } from "@/components/tests/GrammarTest";
import { SpellingTest } from "@/components/tests/SpellingTest";
import { ListeningComprehensionTest } from "@/components/tests/ListeningComprehensionTest";
import { GeneralKnowledgeTest } from "@/components/tests/GeneralKnowledgeTest";
import { BrainAgeTest } from "@/components/tests/BrainAgeTest";
import { CognitiveAgeTest } from "@/components/tests/CognitiveAgeTest";
import { AttentionAgeTest } from "@/components/tests/AttentionAgeTest";
import { MemoryAgeTest } from "@/components/tests/MemoryAgeTest";
import { FocusTest } from "@/components/tests/FocusTest";
import { ConcentrationTest } from "@/components/tests/ConcentrationTest";
import { MultitaskingTest } from "@/components/tests/MultitaskingTest";
import { ProcessingSpeedTest } from "@/components/tests/ProcessingSpeedTest";
import { CognitiveFlexibilityTest } from "@/components/tests/CognitiveFlexibilityTest";
import { ExecutiveFunctionTest } from "@/components/tests/ExecutiveFunctionTest";
import { ProblemSolvingTest } from "@/components/tests/ProblemSolvingTest";
import { CommonSenseTest } from "@/components/tests/CommonSenseTest";
import { DecisionSpeedTest } from "@/components/tests/DecisionSpeedTest";
import { ObservationSkillsTest } from "@/components/tests/ObservationSkillsTest";
import { VisualAttentionTest } from "@/components/tests/VisualAttentionTest";
import { ShortTermMemoryTest } from "@/components/tests/ShortTermMemoryTest";
import { LongTermMemoryTest } from "@/components/tests/LongTermMemoryTest";
import { EpisodicMemoryTest } from "@/components/tests/EpisodicMemoryTest";
import { WorkingMemoryTest } from "@/components/tests/WorkingMemoryTest";
import { AuditoryMemoryTest } from "@/components/tests/AuditoryMemoryTest";
import { FaceBlindnessTest } from "@/components/tests/FaceBlindnessTest";
import { SuperRecognizerTest } from "@/components/tests/SuperRecognizerTest";
import { HexacoPersonalityTest } from "@/components/tests/HexacoPersonalityTest";
import { DiscPersonalityTest } from "@/components/tests/DiscPersonalityTest";
import { NumericalReasoningTest } from "@/components/tests/NumericalReasoningTest";
import { VerbalReasoningTest } from "@/components/tests/VerbalReasoningTest";
import { AbstractReasoningTest } from "@/components/tests/AbstractReasoningTest";
import { InductiveReasoningTest } from "@/components/tests/InductiveReasoningTest";
import { DiagrammaticReasoningTest } from "@/components/tests/DiagrammaticReasoningTest";
import { MechanicalReasoningTest } from "@/components/tests/MechanicalReasoningTest";
import { CriticalThinkingTest } from "@/components/tests/CriticalThinkingTest";
import { DataInterpretationTest } from "@/components/tests/DataInterpretationTest";

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
  "inhibition-of-return": InhibitionOfReturnTest,
  "flicker-change-detection": FlickerChangeDetectionTest,
  "spatial-search": SpatialSearchTest,
  "backward-spatial-span": BackwardSpatialSpanTest,
  "visual-paired-associates": VisualPairedAssociatesTest,
  "verbal-paired-associates": VerbalPairedAssociatesTest,
  "prospective-memory": ProspectiveMemoryTest,
  "serial-addition": SerialAdditionTest,
  "ponzo-illusion": PonzoIllusionTest,
  "poggendorff-illusion": PoggendorffIllusionTest,
  "delboeuf-illusion": DelboeufIllusionTest,
  "shepard-tables": ShepardTablesTest,
  "hermann-grid": HermannGridTest,
  "kanizsa-triangle": KanizsaTriangleTest,
  "motion-aftereffect": MotionAftereffectTest,
  "sound-localization": SoundLocalizationTest,
  "tone-memory": ToneMemoryTest,
  "rhythm-discrimination": RhythmDiscriminationTest,
  synonym: SynonymTest,
  "reading-speed": ReadingSpeedTest,
  "reading-comprehension": ReadingComprehensionTest,
  "word-fluency": WordFluencyTest,
  anagram: AnagramTest,
  "spatial-reasoning": SpatialReasoningTest,
  "paper-folding": PaperFoldingTest,
  "mirror-image": MirrorImageTest,
  "pattern-completion": PatternCompletionTest,
  "deductive-reasoning": DeductiveReasoningTest,
  "adhd-screener": ADHDTest,
  "autism-screener": AutismSpectrumTest,
  "depression-screener": DepressionTest,
  "anxiety-screener": AnxietyTest,
  "social-anxiety-screener": SocialAnxietyTest,
  "stress-screener": StressTest,
  "burnout-screener": BurnoutTest,
  "ocd-screener": OCDTest,
  "ptsd-screener": PTSDTest,
  "bipolar-screener": BipolarTest,
  "self-esteem-screener": SelfEsteemTest,
  "attachment-style": AttachmentStyleTest,
  "narcissism-screener": NarcissismTest,
  "psychopathy-screener": PsychopathyTest,
  "machiavellianism-screener": MachiavellianismTest,
  "empathy-screener": EmpathyTest,
  "alexithymia-screener": AlexithymiaTest,
  "hsp-screener": HighlySensitivePersonTest,
  "imposter-syndrome-screener": ImposterSyndromeTest,
  "anger-screener": AngerTest,
  "loneliness-screener": LonelinessTest,
  "procrastination-screener": ProcrastinationTest,
  "dark-triad-screener": DarkTriadTest,
  "dark-tetrad-screener": DarkTetradTest,
  "assertiveness-screener": AssertivenessTest,
  "people-pleasing-screener": PeoplePleasingTest,
  "emotional-maturity-screener": EmotionalMaturityTest,
  "emotional-regulation-screener": EmotionalRegulationTest,
  "conflict-style": ConflictStyleTest,
  "communication-style": CommunicationStyleTest,
  "leadership-style": LeadershipStyleTest,
  "decision-making-style": DecisionMakingStyleTest,
  "sleep-chronotype": SleepChronotypeTest,
  "morning-night-owl": MorningNightOwlTest,
  "sleep-quality-screener": SleepQualityTest,
  "insomnia-screener": InsomniaScreeningTest,
  "dyslexia-screener": DyslexiaTest,
  "dyscalculia-screener": DyscalculiaTest,
  "reading-level-screener": ReadingLevelTest,
  "english-level-screener": EnglishLevelTest,
  "grammar-quiz": GrammarTest,
  "spelling-quiz": SpellingTest,
  "listening-comprehension-quiz": ListeningComprehensionTest,
  "general-knowledge-quiz": GeneralKnowledgeTest,
  "brain-age": BrainAgeTest,
  "cognitive-age": CognitiveAgeTest,
  "attention-age": AttentionAgeTest,
  "memory-age": MemoryAgeTest,
  "focus-test": FocusTest,
  "concentration-test": ConcentrationTest,
  "multitasking-test": MultitaskingTest,
  "processing-speed": ProcessingSpeedTest,
  "cognitive-flexibility": CognitiveFlexibilityTest,
  "executive-function": ExecutiveFunctionTest,
  "problem-solving-quiz": ProblemSolvingTest,
  "common-sense-quiz": CommonSenseTest,
  "decision-speed": DecisionSpeedTest,
  "observation-skills": ObservationSkillsTest,
  "visual-attention": VisualAttentionTest,
  "short-term-memory": ShortTermMemoryTest,
  "long-term-memory": LongTermMemoryTest,
  "episodic-memory": EpisodicMemoryTest,
  "working-memory": WorkingMemoryTest,
  "auditory-memory": AuditoryMemoryTest,
  "face-blindness-screener": FaceBlindnessTest,
  "super-recognizer": SuperRecognizerTest,
  "hexaco-personality": HexacoPersonalityTest,
  "disc-personality": DiscPersonalityTest,
  "numerical-reasoning": NumericalReasoningTest,
  "verbal-reasoning": VerbalReasoningTest,
  "abstract-reasoning": AbstractReasoningTest,
  "inductive-reasoning": InductiveReasoningTest,
  "diagrammatic-reasoning": DiagrammaticReasoningTest,
  "mechanical-reasoning": MechanicalReasoningTest,
  "critical-thinking-quiz": CriticalThinkingTest,
  "data-interpretation": DataInterpretationTest,
};
