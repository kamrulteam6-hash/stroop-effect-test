import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can an irrelevant left-or-right location slow your response even when you know exactly what feature matters? Take this free **Simon Effect Test** to experience stimulus-response conflict.",
    },
    {
      type: "paragraph",
      text: "You will respond according to a task-relevant feature such as color while ignoring where the stimulus appears on the screen. Sometimes the stimulus location matches the side of the correct response. Sometimes it conflicts. The difference between compatible and incompatible trials is called the **Simon effect**.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Simon Effect Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Learn which response key belongs to each target feature.",
        "Keep your fingers on the response keys.",
        "Respond according to the relevant feature.",
        "Ignore whether the stimulus appears on the left or right.",
        "Work quickly without sacrificing accuracy.",
        "Complete all compatible and incompatible trials.",
        "Review reaction time and accuracy by condition.",
      ],
    },
    {
      type: "paragraph",
      text: "The screen position is deliberately irrelevant. If it still influences your speed, you have experienced the phenomenon the task was designed to reveal.",
    },
    { type: "heading", text: "What Is the Simon Effect?" },
    {
      type: "paragraph",
      text: "The Simon effect is the performance advantage that occurs when the irrelevant spatial location of a stimulus corresponds with the location of the required response. Imagine the rules are blue means press Left and green means press Right. Now a green circle appears on the right — a compatible trial, since its location matches the correct response side. If it appears on the left instead, that is an incompatible trial, since its location conflicts with the correct response side.",
    },
    {
      type: "paragraph",
      text: "People are typically faster and often more accurate on compatible trials. The stimulus location affects behavior even though location is irrelevant to the instructed task.",
    },
    { type: "heading", text: "Where Did the Simon Effect Come From?" },
    {
      type: "paragraph",
      text: "The phenomenon is named after psychologist J. Richard Simon. Classic work in the 1960s showed that irrelevant spatial correspondence between stimulus and response could influence reaction time. The effect became part of a much larger research literature on stimulus-response compatibility, response selection, and cognitive control.",
    },
    {
      type: "paragraph",
      text: "Modern Simon tasks use colors, shapes, words, sounds, spatial locations, keypresses, and mouse movements. The exact stimuli vary, but the core logic remains: irrelevant location corresponds or conflicts with response location.",
    },
    { type: "heading", text: "How Is the Simon Effect Calculated?" },
    {
      type: "paragraph",
      text: "A basic reaction-time Simon effect is incompatible RT minus compatible RT. For example, if compatible trials average 430 ms and incompatible trials average 475 ms, the Simon effect is 45 ms. A positive value means the incompatible spatial relationship slowed responses.",
    },
    { type: "paragraph", text: "Accuracy can also show a Simon effect. If incompatible trials create more errors, the conflict affected response selection as well as speed. Both outcomes should be considered." },
    { type: "heading", text: "Overall Reaction Time Is Not the Main Point" },
    {
      type: "paragraph",
      text: "Suppose your overall average is 450 ms. That number tells us how fast you responded in this particular task, but it does not isolate the Simon phenomenon. The scientifically interesting comparison uses the same response rules and the same relevant feature, varying only the irrelevant spatial compatibility. The effect is the difference between conditions — a page that reports only an overall millisecond score misses the central experimental logic.",
    },
    { type: "heading", text: "Why Does Irrelevant Location Affect the Response?" },
    {
      type: "paragraph",
      text: "A common theoretical idea is that spatial location automatically activates the response on the corresponding side. If a stimulus appears on the left, it creates some activation of a left response. When the correct answer is also Left, that activation helps. When the correct answer is Right, the spatially activated Left response conflicts with the instructed response, and the system must resolve that conflict.",
    },
    {
      type: "paragraph",
      text: "Several theoretical models describe this using dual routes or related mechanisms: an automatic route activated by irrelevant spatial correspondence, and a controlled route selecting the response based on the task-relevant feature. The exact mechanisms remain an active research topic.",
    },
    { type: "heading", text: "Is the Simon Effect an Inhibition Test?" },
    {
      type: "paragraph",
      text: "It is often discussed in relation to cognitive control and interference resolution, but calling the Simon effect a pure measurement of inhibition ability is too strong. Performance reflects perceptual processing, stimulus-response mapping, spatial coding, automatic response activation, conflict resolution, motor response, and speed-accuracy strategy. A smaller Simon effect can be interesting, but it does not directly equal \"better inhibition.\"",
    },
    { type: "heading", text: "Simon Effect vs. Stroop Effect" },
    {
      type: "paragraph",
      text: "The [Stroop Effect Test](/test/stroop-effect-test) and the Simon Test are close relatives in the broader family of conflict tasks. In Stroop, the relevant dimension is ink color and the irrelevant conflicting dimension is word meaning. In Simon, the relevant dimension is color, shape, or another feature, and the irrelevant conflicting dimension is spatial location. Both can slow performance when irrelevant information activates a competing response, but the source of interference differs — making them related but distinct.",
    },
    { type: "heading", text: "Simon Effect vs. Flanker Test" },
    {
      type: "paragraph",
      text: "The [Flanker Test](/test/flanker-test) asks you to respond to a center target while ignoring surrounding stimuli. The Simon Test asks you to respond to a relevant stimulus feature while ignoring where the stimulus itself appears. Flanker conflict comes from surrounding distractors; Simon conflict comes from irrelevant stimulus position. A person can show different effect sizes across the two tasks, so they should not be combined into one general attention score.",
    },
    { type: "heading", text: "Compatible vs. Incompatible Does Not Mean Easy vs. Hard" },
    {
      type: "paragraph",
      text: "Incompatible trials are usually harder on average, but an individual compatible trial can still be slow, and an incompatible trial can occasionally be very fast. Reaction time naturally varies from trial to trial. The Simon effect emerges from averaging enough trials in each condition, which is why a very short test with only a few compatible and incompatible trials will produce a noisy difference score. More observations provide a more stable estimate.",
    },
    { type: "heading", text: "Accuracy and the Speed–Accuracy Trade-Off" },
    {
      type: "paragraph",
      text: "Suppose you try to minimize your Simon effect by responding as fast as possible. Your compatible average falls, and your incompatible average also falls — but your error rate doubles. That is not necessarily improved conflict control. Always inspect compatible RT, incompatible RT, compatible accuracy, and incompatible accuracy together. A meaningful improvement should not simply trade correctness for speed.",
    },
    { type: "heading", text: "What Is a Good Simon Effect?" },
    {
      type: "paragraph",
      text: "There is no universal browser cutoff. Effect size depends on stimulus type, response keys, number of trials, spatial separation, display size, timing, practice, compatible/incompatible ratio, and accuracy criteria. A 30 ms effect from one implementation cannot automatically be called better than a 50 ms effect from another. Until normative data exists for this exact tool, treat the effect as a within-session measure.",
    },
    { type: "heading", text: "Does a Small Simon Effect Mean Better Cognitive Control?" },
    {
      type: "paragraph",
      text: "Possibly in some contexts, but not automatically. A small effect could occur because someone efficiently resolves conflict — or because they respond slowly to everything, the stimulus location is weakly perceived, they made many errors, the task contains few trials, or the device introduced noise. Interpret effect size together with overall speed and accuracy. One number should not be turned into a diagnosis or broad cognitive ranking.",
    },
    { type: "heading", text: "Can the Simon Test Diagnose ADHD?" },
    {
      type: "paragraph",
      text: "No. Simon tasks are used in cognitive research, including studies of clinical populations, but that does not mean a browser Simon effect can diagnose ADHD or another neurological or psychiatric condition. Clinical diagnosis requires a much broader assessment. Use this test to experience and measure spatial stimulus-response interference.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Simon effect?", answer: "It is the tendency to respond faster or more accurately when an irrelevant stimulus location corresponds with the required response location." },
        { question: "How is the Simon effect calculated?", answer: "A common RT measure is average incompatible reaction time minus average compatible reaction time." },
        { question: "Is a larger Simon effect worse?", answer: "It indicates more interference in that particular session, but interpretation also depends on accuracy, overall speed, and task design." },
        { question: "How is Simon different from Stroop?", answer: "Stroop conflict comes from word meaning versus color; Simon conflict comes from irrelevant stimulus location versus response location." },
        { question: "How is Simon different from Flanker?", answer: "Flanker interference comes from surrounding distractors; Simon interference comes from the target's irrelevant location." },
        { question: "Does the task measure inhibition?", answer: "It involves cognitive control and interference resolution, but it is not a pure one-to-one measurement of inhibition." },
        { question: "Can practice change the effect?", answer: "Yes. Practice and recent trial history can change Simon-effect magnitude." },
      ],
    },
    {
      type: "paragraph",
      text: "The instruction sounds easy: respond to the relevant feature and ignore location. Yet the location still enters the response system. Compatible trials get a subtle advantage, incompatible trials create conflict, and that difference is the Simon effect — offering a clean demonstration that information can influence action even when you know it is completely irrelevant to the task.",
    },
  ],
};
