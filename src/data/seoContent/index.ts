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
import { content as rulerDropTest } from "@/data/seoContent/ruler-drop-test";
import { content as flankerTest } from "@/data/seoContent/flanker-test";
import { content as memoryMatchGame } from "@/data/seoContent/memory-match-game";
import { content as popUpTargetTest } from "@/data/seoContent/pop-up-target-test";
import { content as vocabularySizeTest } from "@/data/seoContent/vocabulary-size-test";
import { content as handednessTest } from "@/data/seoContent/handedness-test";
import { content as personalityTypeTest } from "@/data/seoContent/personality-type-test";
import { content as riskTakingTest } from "@/data/seoContent/risk-taking-test";
import { content as enneagramTest } from "@/data/seoContent/enneagram-test";
import { content as loveLanguageTest } from "@/data/seoContent/love-language-test";
import { content as serialPositionTest } from "@/data/seoContent/serial-position-test";
import { content as falseMemoryTest } from "@/data/seoContent/false-memory-test";
import { content as barnumEffectTest } from "@/data/seoContent/barnum-effect-test";
import { content as neckerCubeTest } from "@/data/seoContent/necker-cube-test";
import { content as anchoringBiasTest } from "@/data/seoContent/anchoring-bias-test";
import { content as levelsOfProcessingTest } from "@/data/seoContent/levels-of-processing-test";
import { content as framingEffectTest } from "@/data/seoContent/framing-effect-test";
import { content as sunkCostTest } from "@/data/seoContent/sunk-cost-test";
import { content as ebbinghausIllusionTest } from "@/data/seoContent/ebbinghaus-illusion-test";
import { content as semanticPrimingTest } from "@/data/seoContent/semantic-priming-test";
import { content as vonRestorffEffectTest } from "@/data/seoContent/von-restorff-effect-test";
import { content as conjunctionFallacyTest } from "@/data/seoContent/conjunction-fallacy-test";
import { content as haloEffectTest } from "@/data/seoContent/halo-effect-test";
import { content as gamblersFallacyTest } from "@/data/seoContent/gamblers-fallacy-test";
import { content as iowaGamblingTask } from "@/data/seoContent/iowa-gambling-task";
import { content as availabilityHeuristicTest } from "@/data/seoContent/availability-heuristic-test";
import { content as mentalRotationTest } from "@/data/seoContent/mental-rotation-test";
import { content as stopSignalTest } from "@/data/seoContent/stop-signal-test";
import { content as simonEffectTest } from "@/data/seoContent/simon-effect-test";
import { content as wisconsinCardSortingTest } from "@/data/seoContent/wisconsin-card-sorting-test";
import { content as towerOfHanoiTest } from "@/data/seoContent/tower-of-hanoi-test";
import { content as choiceReactionTimeTest } from "@/data/seoContent/choice-reaction-time-test";
import { content as visualSearchTest } from "@/data/seoContent/visual-search-test";
import { content as changeBlindnessTest } from "@/data/seoContent/change-blindness-test";
import { content as psychomotorVigilanceTest } from "@/data/seoContent/psychomotor-vigilance-test";
import { content as taskSwitchingTest } from "@/data/seoContent/task-switching-test";
import { content as faceMemoryTest } from "@/data/seoContent/face-memory-test";
import { content as emotionRecognitionTest } from "@/data/seoContent/emotion-recognition-test";
import { content as oddOneOutTest } from "@/data/seoContent/odd-one-out-test";
import { content as operationSpanTest } from "@/data/seoContent/operation-span-test";
import { content as pairedAssociatesMemoryTest } from "@/data/seoContent/paired-associates-memory-test";
import { content as delayDiscountingTest } from "@/data/seoContent/delay-discounting-test";
import { content as attentionalBlinkTest } from "@/data/seoContent/attentional-blink-test";
import { content as posnerCueingTest } from "@/data/seoContent/posner-cueing-test";
import { content as mackworthClockTest } from "@/data/seoContent/mackworth-clock-test";
import { content as cognitiveReflectionTest } from "@/data/seoContent/cognitive-reflection-test";
import { content as confirmationBiasTest } from "@/data/seoContent/confirmation-bias-test";
import { content as baseRateNeglectTest } from "@/data/seoContent/base-rate-neglect-test";
import { content as decoyEffectTest } from "@/data/seoContent/decoy-effect-test";
import { content as lossAversionTest } from "@/data/seoContent/loss-aversion-test";
import { content as overconfidenceTest } from "@/data/seoContent/overconfidence-test";
import { content as temporalDiscountingTest } from "@/data/seoContent/temporal-discounting-test";
import { content as wasonSelectionTask } from "@/data/seoContent/wason-selection-task";
import { content as syllogismTest } from "@/data/seoContent/syllogism-test";
import { content as numericalStroopTest } from "@/data/seoContent/numerical-stroop-test";
import { content as emotionalStroopTest } from "@/data/seoContent/emotional-stroop-test";
import { content as navonTest } from "@/data/seoContent/navon-test";
import { content as negativePrimingTest } from "@/data/seoContent/negative-priming-test";
import { content as inhibitionOfReturnTest } from "@/data/seoContent/inhibition-of-return-test";
import { content as flickerChangeDetectionTest } from "@/data/seoContent/flicker-change-detection-test";
import { content as spatialSearchTest } from "@/data/seoContent/spatial-search-test";
import { content as backwardSpatialSpanTest } from "@/data/seoContent/backward-spatial-span-test";
import { content as visualPairedAssociatesTest } from "@/data/seoContent/visual-paired-associates-test";
import { content as verbalPairedAssociatesTest } from "@/data/seoContent/verbal-paired-associates-test";
import { content as prospectiveMemoryTest } from "@/data/seoContent/prospective-memory-test";
import { content as serialAdditionTest } from "@/data/seoContent/serial-addition-test";
import { content as ponzoIllusionTest } from "@/data/seoContent/ponzo-illusion-test";
import { content as poggendorffIllusionTest } from "@/data/seoContent/poggendorff-illusion-test";
import { content as delboeufIllusionTest } from "@/data/seoContent/delboeuf-illusion-test";
import { content as shepardTablesIllusionTest } from "@/data/seoContent/shepard-tables-illusion-test";
import { content as hermannGridIllusionTest } from "@/data/seoContent/hermann-grid-illusion-test";
import { content as kanizsaTriangleTest } from "@/data/seoContent/kanizsa-triangle-test";
import { content as motionAftereffectTest } from "@/data/seoContent/motion-aftereffect-test";
import { content as soundLocalizationTest } from "@/data/seoContent/sound-localization-test";
import { content as toneMemoryTest } from "@/data/seoContent/tone-memory-test";
import { content as rhythmDiscriminationTest } from "@/data/seoContent/rhythm-discrimination-test";
import { content as synonymTest } from "@/data/seoContent/synonym-test";
import { content as readingSpeedTest } from "@/data/seoContent/reading-speed-test";
import { content as readingComprehensionTest } from "@/data/seoContent/reading-comprehension-test";
import { content as wordFluencyTest } from "@/data/seoContent/word-fluency-test";
import { content as anagramTest } from "@/data/seoContent/anagram-test";
import { content as spatialReasoningTest } from "@/data/seoContent/spatial-reasoning-test";
import { content as paperFoldingTest } from "@/data/seoContent/paper-folding-test";
import { content as mirrorImageTest } from "@/data/seoContent/mirror-image-test";
import { content as patternCompletionTest } from "@/data/seoContent/pattern-completion-test";
import { content as deductiveReasoningTest } from "@/data/seoContent/deductive-reasoning-test";
import { content as adhdTest } from "@/data/seoContent/adhd-test";
import { content as autismSpectrumTest } from "@/data/seoContent/autism-spectrum-test";
import { content as depressionTest } from "@/data/seoContent/depression-test";
import { content as anxietyTest } from "@/data/seoContent/anxiety-test";
import { content as socialAnxietyTest } from "@/data/seoContent/social-anxiety-test";
import { content as stressTest } from "@/data/seoContent/stress-test";
import { content as burnoutTest } from "@/data/seoContent/burnout-test";
import { content as ocdTest } from "@/data/seoContent/ocd-test";
import { content as ptsdTest } from "@/data/seoContent/ptsd-test";
import { content as bipolarTest } from "@/data/seoContent/bipolar-test";
import { content as selfEsteemTest } from "@/data/seoContent/self-esteem-test";
import { content as attachmentStyleTest } from "@/data/seoContent/attachment-style-test";
import { content as narcissismTest } from "@/data/seoContent/narcissism-test";
import { content as psychopathyTest } from "@/data/seoContent/psychopathy-test";
import { content as machiavellianismTest } from "@/data/seoContent/machiavellianism-test";
import { content as empathyTest } from "@/data/seoContent/empathy-test";

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
  "ruler-drop-test": rulerDropTest,
  "flanker-test": flankerTest,
  "memory-match-game": memoryMatchGame,
  "pop-up-target-test": popUpTargetTest,
  "vocabulary-size-test": vocabularySizeTest,
  "handedness-test": handednessTest,
  "personality-type-test": personalityTypeTest,
  "risk-taking-test": riskTakingTest,
  "enneagram-test": enneagramTest,
  "love-language-test": loveLanguageTest,
  "serial-position-test": serialPositionTest,
  "false-memory-test": falseMemoryTest,
  "barnum-effect-test": barnumEffectTest,
  "necker-cube-test": neckerCubeTest,
  "anchoring-bias-test": anchoringBiasTest,
  "levels-of-processing-test": levelsOfProcessingTest,
  "framing-effect-test": framingEffectTest,
  "sunk-cost-test": sunkCostTest,
  "ebbinghaus-illusion-test": ebbinghausIllusionTest,
  "semantic-priming-test": semanticPrimingTest,
  "von-restorff-effect-test": vonRestorffEffectTest,
  "conjunction-fallacy-test": conjunctionFallacyTest,
  "halo-effect-test": haloEffectTest,
  "gamblers-fallacy-test": gamblersFallacyTest,
  "iowa-gambling-task": iowaGamblingTask,
  "availability-heuristic-test": availabilityHeuristicTest,
  "mental-rotation-test": mentalRotationTest,
  "stop-signal-test": stopSignalTest,
  "simon-effect-test": simonEffectTest,
  "wisconsin-card-sorting-test": wisconsinCardSortingTest,
  "tower-of-hanoi-test": towerOfHanoiTest,
  "choice-reaction-time-test": choiceReactionTimeTest,
  "visual-search-test": visualSearchTest,
  "change-blindness-test": changeBlindnessTest,
  "psychomotor-vigilance-test": psychomotorVigilanceTest,
  "task-switching-test": taskSwitchingTest,
  "face-memory-test": faceMemoryTest,
  "emotion-recognition-test": emotionRecognitionTest,
  "odd-one-out-test": oddOneOutTest,
  "operation-span-test": operationSpanTest,
  "paired-associates-memory-test": pairedAssociatesMemoryTest,
  "delay-discounting-test": delayDiscountingTest,
  "attentional-blink-test": attentionalBlinkTest,
  "posner-cueing-test": posnerCueingTest,
  "mackworth-clock-test": mackworthClockTest,
  "cognitive-reflection-test": cognitiveReflectionTest,
  "confirmation-bias-test": confirmationBiasTest,
  "base-rate-neglect-test": baseRateNeglectTest,
  "decoy-effect-test": decoyEffectTest,
  "loss-aversion-test": lossAversionTest,
  "overconfidence-test": overconfidenceTest,
  "temporal-discounting-test": temporalDiscountingTest,
  "wason-selection-task": wasonSelectionTask,
  "syllogism-test": syllogismTest,
  "numerical-stroop-test": numericalStroopTest,
  "emotional-stroop-test": emotionalStroopTest,
  "navon-test": navonTest,
  "negative-priming-test": negativePrimingTest,
  "inhibition-of-return-test": inhibitionOfReturnTest,
  "flicker-change-detection-test": flickerChangeDetectionTest,
  "spatial-search-test": spatialSearchTest,
  "backward-spatial-span-test": backwardSpatialSpanTest,
  "visual-paired-associates-test": visualPairedAssociatesTest,
  "verbal-paired-associates-test": verbalPairedAssociatesTest,
  "prospective-memory-test": prospectiveMemoryTest,
  "serial-addition-test": serialAdditionTest,
  "ponzo-illusion-test": ponzoIllusionTest,
  "poggendorff-illusion-test": poggendorffIllusionTest,
  "delboeuf-illusion-test": delboeufIllusionTest,
  "shepard-tables-illusion-test": shepardTablesIllusionTest,
  "hermann-grid-illusion-test": hermannGridIllusionTest,
  "kanizsa-triangle-test": kanizsaTriangleTest,
  "motion-aftereffect-test": motionAftereffectTest,
  "sound-localization-test": soundLocalizationTest,
  "tone-memory-test": toneMemoryTest,
  "rhythm-discrimination-test": rhythmDiscriminationTest,
  "synonym-test": synonymTest,
  "reading-speed-test": readingSpeedTest,
  "reading-comprehension-test": readingComprehensionTest,
  "word-fluency-test": wordFluencyTest,
  "anagram-test": anagramTest,
  "spatial-reasoning-test": spatialReasoningTest,
  "paper-folding-test": paperFoldingTest,
  "mirror-image-test": mirrorImageTest,
  "pattern-completion-test": patternCompletionTest,
  "deductive-reasoning-test": deductiveReasoningTest,
  "adhd-test": adhdTest,
  "autism-spectrum-test": autismSpectrumTest,
  "depression-test": depressionTest,
  "anxiety-test": anxietyTest,
  "social-anxiety-test": socialAnxietyTest,
  "stress-test": stressTest,
  "burnout-test": burnoutTest,
  "ocd-test": ocdTest,
  "ptsd-test": ptsdTest,
  "bipolar-test": bipolarTest,
  "self-esteem-test": selfEsteemTest,
  "attachment-style-test": attachmentStyleTest,
  "narcissism-test": narcissismTest,
  "psychopathy-test": psychopathyTest,
  "machiavellianism-test": machiavellianismTest,
  "empathy-test": empathyTest,
};
