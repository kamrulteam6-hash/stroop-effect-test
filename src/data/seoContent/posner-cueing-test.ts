import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can your attention move to one side of space before your eyes move there? Take this free **Posner Cueing Test** to explore covert spatial attention. Keep your eyes on the center of the screen while cues direct or attract attention to a possible target location. The target may then appear where the cue indicated — or somewhere else.",
    },
    { type: "paragraph", text: "The key comparison is reaction time and accuracy across valid, invalid, and neutral cue trials." },
    { type: "heading", id: "how-to-take", text: "How to Take the Posner Cueing Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Keep your eyes on the central fixation point.",
        "Watch the spatial cue.",
        "Do not move your eyes toward the cue if instructed to maintain fixation.",
        "Respond when the target appears.",
        "Continue through valid, invalid, and neutral trials.",
        "Avoid guessing before the target appears.",
        "Review reaction time and accuracy by cue type.",
      ],
    },
    { type: "paragraph", text: "The central challenge is to shift attention, not gaze. Without eye tracking, a browser task cannot perfectly verify fixation, so the result relies partly on following instructions." },
    { type: "heading", text: "What Is the Posner Cueing Paradigm?" },
    {
      type: "paragraph",
      text: "The Posner cueing paradigm is one of the foundational methods for studying spatial attention. Psychologist Michael Posner developed influential cueing procedures in the 1970s and described the orienting framework in a landmark 1980 paper. A participant fixates the center, a cue provides information about a possible target location, and then the target appears. Reaction time depends partly on whether attention was already directed toward the correct position.",
    },
    { type: "paragraph", text: "This helped demonstrate that attention can shift across visual space without an eye movement. That is called covert orienting." },
    { type: "heading", text: "Covert vs. Overt Attention" },
    {
      type: "paragraph",
      text: "In overt attention, you move your eyes or head toward something. In covert attention, you prioritize a location without moving your eyes toward it. The Posner task is famous because it separates these — you may continue looking at the center while attention shifts to the left. When a target appears there, processing can be faster even though your gaze stayed central. This provides behavioral evidence that the focus of attention and the direction of the eyes are not always identical.",
    },
    { type: "heading", text: "Valid Cues" },
    {
      type: "paragraph",
      text: "A valid cue correctly indicates the upcoming target location — for example, the cue points left and the target appears left. If attention shifts toward the cued location, target detection or discrimination is usually faster. This speed advantage is often called a validity benefit. Valid trials show how pre-allocation of spatial attention can facilitate processing.",
    },
    { type: "heading", text: "Invalid Cues" },
    {
      type: "paragraph",
      text: "An invalid cue directs attention to the wrong location — for example, the cue points left but the target appears right. Now attention has been oriented away from the target, and the system may need to disengage from the cued location, move attention elsewhere, and engage the target location. Invalid trials are therefore often slower than valid trials. The difference is commonly called a cueing effect or validity effect.",
    },
    { type: "heading", text: "Neutral Cues" },
    {
      type: "paragraph",
      text: "A neutral cue does not favor one target location — examples might include a double-headed arrow, central brightening, or another cue balanced across locations. Neutral trials provide a useful baseline, helping separate the benefits of valid cueing from the costs of invalid cueing. Without a neutral condition, you know valid and invalid trials differ, but it is harder to say how much comes from facilitation versus misdirection.",
    },
    { type: "heading", text: "How Is the Cueing Effect Calculated?" },
    {
      type: "paragraph",
      text: "A simple validity effect is invalid RT minus valid RT. For example, if valid RT is 310 ms and invalid RT is 345 ms, the cueing effect is 35 ms. A positive value means invalid trials were slower. If neutral trials are available, the result can also calculate benefit (neutral RT minus valid RT) and cost (invalid RT minus neutral RT). These comparisons provide more detail than one total average.",
    },
    { type: "heading", text: "Endogenous vs. Exogenous Cueing" },
    {
      type: "paragraph",
      text: "Posner-style tasks can orient attention in different ways. Endogenous cueing uses a symbolic cue that tells you where the target is likely to appear, such as an arrow — this is relatively voluntary or goal-directed because the arrow has meaning you understand. Exogenous cueing uses a sudden peripheral event that attracts attention, such as a box flashing on the left — this can orient attention more automatically. The two cueing systems have different timing characteristics, and a website should label which version it uses rather than mixing their norms.",
    },
    { type: "heading", text: "Cue Validity Matters" },
    {
      type: "paragraph",
      text: "In an endogenous task, the cue often predicts the target location more often than chance. If an arrow is valid on most trials, users have a reason to follow it. If the cue is completely non-predictive, deliberately using it may not be useful. Exogenous cues can attract attention even when they do not predict the target. That is one reason task design must specify cue type, cue validity, and cue–target delay — those parameters strongly affect the result.",
    },
    { type: "heading", text: "Cue–Target Timing" },
    {
      type: "paragraph",
      text: "The interval between cue and target is often called the stimulus onset asynchrony (SOA) or cue-target interval. At short intervals, a peripheral cue may facilitate processing at its location. At longer intervals, the pattern can reverse. This reversal is related to inhibition of return, which appears as its own separate test. Therefore this Posner page focuses on the early facilitation/cost pattern and links to the dedicated [Inhibition of Return Test](/test/inhibition-of-return-test).",
    },
    { type: "heading", text: "What Is Inhibition of Return?" },
    {
      type: "paragraph",
      text: "After attention is pulled to a location and enough time passes, targets appearing at that previously cued location can sometimes become slower to detect than targets elsewhere. This is called inhibition of return (IOR). It has been interpreted as a mechanism that may discourage attention from repeatedly returning to recently inspected locations. The exact effect depends on cueing procedure and timing — a standard Posner test and an IOR test can share similar displays but use different cue–target intervals and hypotheses.",
    },
    { type: "heading", text: "What Does the Posner Cueing Test Measure?" },
    {
      type: "paragraph",
      text: "Performance can involve spatial orienting, attentional disengagement, attentional shifting, target detection, response speed, and cue interpretation. It should not be treated as a complete measure of visual attention — one validity effect cannot summarize all attentional abilities. It is specifically a measure of how spatial cues change processing in this task.",
    },
    { type: "heading", text: "Posner Cueing vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) asks you to locate a target among multiple distractors. Posner cueing usually presents a small number of possible locations and manipulates where attention is oriented before the target arrives. Visual search asks where is the target among competing items; Posner cueing asks how does prior spatial attention change target processing. The pages should cross-link but remain distinct.",
    },
    { type: "heading", text: "Posner Cueing vs. Simon Effect" },
    {
      type: "paragraph",
      text: "The [Simon Effect Test](/test/simon-effect-test) uses an irrelevant target location that conflicts or corresponds with the required response. Posner cueing uses a preceding cue that changes where attention is allocated. Simon is mainly stimulus-response compatibility; Posner is spatial attentional orienting. Both produce millisecond differences, but the experimental logic is different.",
    },
    { type: "heading", text: "Why Eye Movements Matter" },
    {
      type: "paragraph",
      text: "If users look directly at the cued location, the task no longer isolates covert attention as cleanly. The target may be processed faster partly because it lands near the center of gaze. Laboratories can use eye tracking to enforce fixation; most casual browser tests cannot. The instructions should therefore say clearly: keep looking at the fixation point. A web result is best described as an approximation of a covert-orienting paradigm.",
    },
    { type: "heading", text: "What Is a Good Posner Cueing Score?" },
    {
      type: "paragraph",
      text: "There is no universal good cueing effect. The effect depends on endogenous vs. exogenous cues, cue validity, SOA, target type, number of trials, device timing, and fixation compliance. A smaller invalid-valid difference does not automatically mean better attention — it could reflect weak orienting to the cue, slow overall responses, noise, or eye movements. Interpret the conditions together.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Posner Cueing Test?", answer: "A spatial-attention task where a cue directs or attracts attention before a target appears." },
        { question: "What is a valid cue?", answer: "A cue that indicates the location where the target actually appears." },
        { question: "What is an invalid cue?", answer: "A cue that directs attention away from the eventual target location." },
        { question: "Why include neutral cues?", answer: "They provide a baseline for separating valid-cue benefits from invalid-cue costs." },
        { question: "What is covert attention?", answer: "Shifting attentional priority without moving the eyes." },
        { question: "Are valid trials usually faster?", answer: "Yes, under many standard cueing conditions valid cues improve speed or accuracy relative to invalid cues." },
        { question: "Can this diagnose an attention disorder?", answer: "No. It is a spatial-orienting experiment, not a clinical diagnosis." },
      ],
    },
    {
      type: "paragraph",
      text: "The Posner task makes an invisible process measurable. Your gaze stays in one place. A cue shifts priority elsewhere. Then the target reveals whether that shift helped or hurt. The difference between valid, neutral, and invalid trials turns covert spatial attention into a reaction-time effect you can see in your own results.",
    },
  ],
};
