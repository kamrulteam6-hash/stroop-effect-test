import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "When you feel 80% sure, are you actually correct about 80% of the time? Take this free **Overconfidence Test** to measure confidence calibration. You will answer a series of general-knowledge or reasoning questions and rate how confident you are that each answer is correct.",
    },
    { type: "paragraph", text: "At the end, the test compares subjective confidence with objective accuracy. The most useful result is not whether you are simply \"confident.\" It is whether your confidence matches your actual performance." },
    { type: "heading", id: "how-to-take", text: "How to Take the Overconfidence Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Answer each question without searching online.",
        "After choosing an answer, rate your confidence.",
        "Use the full confidence scale honestly.",
        "Continue through all questions.",
        "Review your actual accuracy.",
        "Compare accuracy with average confidence.",
        "Examine how well confidence predicted which answers were right and wrong.",
      ],
    },
    { type: "paragraph", text: "If the test uses two-option questions, a sensible confidence scale begins at 50%, because random guessing already gives a 50% chance of being correct." },
    { type: "heading", text: "What Is Overconfidence?" },
    {
      type: "paragraph",
      text: "Overconfidence is not one single psychological effect. Research uses the word for at least three related but different phenomena: overestimation (believing your absolute performance is better than it really is), overplacement (believing you rank higher relative to other people than you actually do), and overprecision (being too certain that your beliefs, estimates, or confidence intervals are accurate). A confidence-calibration test mainly examines overprecision or miscalibration, not all three forms at once.",
    },
    { type: "heading", text: "Why This Distinction Matters" },
    {
      type: "paragraph",
      text: "David Moore and Paul Healy's influential 2008 review argued that many apparent contradictions in overconfidence research come from mixing these different definitions. People can be overestimating absolute performance while underestimating their position relative to others, while also expressing overly narrow confidence. For example, difficult tasks can produce overestimation of absolute performance but underplacement relative to peers. So a website should not generate one vague \"Overconfidence: 72%\" number without explaining what was actually measured. This test focuses on confidence versus correctness.",
    },
    { type: "heading", text: "What Is Confidence Calibration?" },
    {
      type: "paragraph",
      text: "Calibration asks whether stated confidence corresponds to observed accuracy. Suppose across many questions you say \"I am 80% confident.\" If about 80% of those answers are correct, your confidence is well calibrated at that level. If only 60% are correct, you were overconfident. If 95% are correct, you were underconfident. The basic calibration idea is: confidence should predict frequency of correctness. It does not mean every individual 80%-confidence answer has to be correct — probability is meaningful across repeated judgments.",
    },
    { type: "heading", text: "A Simple Calibration Gap" },
    {
      type: "paragraph",
      text: "A basic summary can be calculated as average confidence minus accuracy. For example, if average confidence is 82% and actual accuracy is 68%, the calibration gap is +14 percentage points, indicating overconfidence on this set of questions. If average confidence were 65% and accuracy 78%, the gap would be negative, indicating underconfidence. This is intuitive, but it should not be the only result shown.",
    },
    { type: "heading", text: "Why Average Calibration Can Hide Important Patterns" },
    {
      type: "paragraph",
      text: "Imagine two people have an overall calibration gap of zero. Person A has low confidence on wrong answers and high confidence on correct answers. Person B uses 70% confidence for almost everything. Both could average out as \"well calibrated,\" but Person A's confidence is much more informative. This leads to another metacognitive concept: resolution or discrimination.",
    },
    { type: "heading", text: "Calibration vs. Resolution" },
    {
      type: "paragraph",
      text: "Calibration asks whether confidence matches overall correctness frequency. Resolution asks whether confidence successfully distinguishes answers that are likely to be correct from answers that are likely to be wrong. A useful test can show average confidence, accuracy, calibration gap, confidence on correct answers, and confidence on incorrect answers. If users give high confidence specifically to correct answers and lower confidence to errors, their confidence has useful resolution.",
    },
    { type: "heading", text: "Calibration Curves" },
    {
      type: "paragraph",
      text: "A calibration chart can group responses into confidence bands — for example 50–59% confidence might correspond to 55% actual accuracy, 70–79% to 71%, and 90–100% to 81%. Perfect calibration would place the values close to the diagonal, where 80% confidence corresponds to about 80% correct. The chart makes overconfidence especially visible at high-confidence levels. A large test item pool is needed before fine-grained bands become stable.",
    },
    { type: "heading", text: "The Hard–Easy Effect" },
    {
      type: "paragraph",
      text: "Confidence calibration often changes with question difficulty. Research has repeatedly found a hard–easy effect: difficult questions can produce overconfidence, while easy questions can produce underconfidence. This means overconfidence is not necessarily a fixed trait — the same person may be overconfident on obscure trivia but underconfident on easy perceptual judgments. A test should therefore use a range of question difficulties rather than making conclusions from only extremely hard items.",
    },
    { type: "heading", text: "Confidence Is Not Useless" },
    {
      type: "paragraph",
      text: "Overconfidence research does not mean subjective confidence contains no information. In many tasks, higher confidence is associated with greater probability of being correct. The problem is miscalibration, not confidence itself. A person can be both generally more accurate when highly confident and still too confident in absolute terms — for example, 70%-confidence answers might be 65% correct while 90%-confidence answers might be 82% correct. Confidence discriminates performance, but both levels are somewhat overconfident.",
    },
    { type: "heading", text: "Designing the Questions" },
    {
      type: "paragraph",
      text: "A strong browser test can use two-alternative general-knowledge questions, such as \"which city is farther north: Rome or New York City?\" After choosing, the user selects 50%, 60%, 70%, 80%, 90%, or 100% confident. This structure makes calibration easy to understand. Questions should have one verifiable answer, span several difficulty levels, avoid obscure trick wording, avoid rapidly changing facts, and avoid questions where both answers are defensible.",
    },
    { type: "heading", text: "Why 100% Confidence Should Be Rare" },
    {
      type: "paragraph",
      text: "A 100% confidence response means \"I believe there is essentially no chance I am wrong.\" If you use 100% frequently and occasionally miss those answers, the calibration error is large. That does not mean users should artificially avoid 100% — the point is to report genuine certainty. Calibration only works when the confidence ratings are honest rather than strategically chosen to look modest.",
    },
    { type: "heading", text: "Overconfidence vs. Dunning–Kruger Effect" },
    {
      type: "paragraph",
      text: "These concepts are often confused online. The Dunning–Kruger effect concerns relationships between performance and self-assessment, especially how people at different performance levels estimate their abilities or relative standing. Overconfidence is broader — anyone, high performer or low performer, can be miscalibrated. A short confidence quiz should not tell a user \"you have the Dunning–Kruger effect.\" That requires a different design and careful comparison of actual performance with self-estimates across participants.",
    },
    { type: "heading", text: "Overconfidence vs. Cognitive Reflection" },
    {
      type: "paragraph",
      text: "The [Cognitive Reflection Test](/test/cognitive-reflection-test) asks whether you override tempting intuitive answers. This test asks how accurately do you know whether your own answer is likely to be correct. These are different metacognitive questions — someone may answer many CRT problems correctly but still assign unjustifiably high confidence to the ones they miss.",
    },
    { type: "heading", text: "What Is a Good Overconfidence Score?" },
    {
      type: "paragraph",
      text: "The ideal direction is good calibration, not low confidence. Someone who is 95% confident and 95% correct is well calibrated. Someone who is only 55% confident despite being 90% correct is strongly underconfident. So the goal is not \"be less confident\" — it is \"make confidence track evidence and actual reliability.\" Do not label users as arrogant, reckless, or incompetent based on this score.",
    },
    { type: "heading", text: "How to Improve Calibration" },
    { type: "paragraph", text: "Try these habits:" },
    {
      type: "list",
      ordered: true,
      items: [
        "Give an answer before rating confidence.",
        "Ask what evidence supports the answer.",
        "Ask what could make the answer wrong.",
        "Use intermediate confidence values instead of defaulting to 100%.",
        "Track past predictions and outcomes.",
        "Compare confidence with actual hit rates.",
        "Update future confidence based on calibration feedback.",
      ],
    },
    { type: "paragraph", text: "Repeated forecasting with feedback is one of the clearest ways to learn what 60%, 80%, and 95% confidence actually feel like." },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does an Overconfidence Test measure?", answer: "This version measures how well your confidence ratings match your actual correctness." },
        { question: "Is high confidence bad?", answer: "No. High confidence is appropriate when accuracy is equally high." },
        { question: "What does a positive calibration gap mean?", answer: "Average confidence exceeded actual accuracy on this set of questions." },
        { question: "What does a negative calibration gap mean?", answer: "You were underconfident: actual accuracy exceeded stated confidence." },
        { question: "Is overconfidence the same as the Dunning–Kruger effect?", answer: "No. Overconfidence is broader, while Dunning–Kruger research compares self-assessment patterns with actual performance across skill levels." },
        { question: "Can confidence still predict accuracy?", answer: "Yes. Confidence can be informative even when it is not perfectly calibrated." },
        { question: "Can this diagnose a personality trait?", answer: "No. Calibration depends strongly on topic, difficulty, experience, and test design." },
      ],
    },
    {
      type: "paragraph",
      text: "The most useful question is not \"am I a confident person?\" It is \"when I say I am 80% sure, does my track record justify 80%?\" That turns confidence from a feeling into something measurable. The closer your confidence probabilities match your actual correctness, the better calibrated your judgments are.",
    },
  ],
};
