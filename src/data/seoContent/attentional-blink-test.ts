import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can a second important target disappear from awareness simply because it appears too soon after the first? Take this free **Attentional Blink Test** using a rapid serial visual presentation, or **RSVP**, stream. Letters, numbers, or symbols appear quickly in the same location — your job is to identify two targets hidden inside the stream.",
    },
    { type: "paragraph", text: "The key result is how accurately you report the second target at different delays after the first. This is a temporal-attention effect, not an eye-blink test and not a measure of visual acuity." },
    { type: "heading", id: "how-to-take", text: "How to Take the Attentional Blink Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Keep your eyes on the center of the stream.",
        "Watch the rapidly changing items.",
        "Identify the first target.",
        "Try to identify the second target as well.",
        "Report both targets after the stream ends.",
        "Continue across different target-to-target delays.",
        "Review second-target accuracy by lag.",
      ],
    },
    { type: "paragraph", text: "Do not pause the stream or look away between targets. The challenge comes from how quickly visual events arrive." },
    { type: "heading", text: "What Is the Attentional Blink?" },
    {
      type: "paragraph",
      text: "The attentional blink is a temporary reduction in the ability to report a second target when it appears shortly after a first target in a rapid stream. The effect became famous through the 1992 work of Jane Raymond, Kimron Shapiro, and Karen Arnell. In a typical task, many distractors appear rapidly at one location, and two targets (T1 and T2) are embedded in the sequence.",
    },
    { type: "paragraph", text: "When T2 appears within roughly 200 to 500 milliseconds after T1, people are often less likely to identify it correctly. The eyes remain open, and the second target is physically displayed — the \"blink\" is attentional rather than literal." },
    { type: "heading", text: "Rapid Serial Visual Presentation" },
    {
      type: "paragraph",
      text: "The task commonly uses Rapid Serial Visual Presentation (RSVP). Instead of showing many objects at once, RSVP presents items one after another at the same screen location. A sequence might look like B, R, 7, M, K, 2, P, F. If the targets are digits among letters, you may need to report 7 and 2. Because every item appears only briefly, the stream creates strong competition for temporal attention. RSVP is useful because researchers can precisely manipulate how many items occur between T1 and T2.",
    },
    { type: "heading", text: "What Is Lag?" },
    {
      type: "paragraph",
      text: "Lag describes the temporal position of T2 relative to T1. If T2 appears immediately after T1, that is often called Lag 1. If one distractor appears between them, T2 may be at Lag 2. Longer lags mean more time separates the targets. Researchers usually convert these positions into milliseconds based on the presentation rate. The central attentional-blink analysis compares T2 accuracy across lags.",
    },
    { type: "heading", text: "What Is T2|T1 Accuracy?" },
    {
      type: "paragraph",
      text: "A careful attentional-blink analysis often calculates second-target accuracy conditional on T1 being correct, written T2|T1. Why condition on T1? If you failed to identify T1, the trial may not represent the same first-target processing event that produces the classic blink. So the question becomes: when T1 was successfully reported, how often was T2 also reported correctly? A browser result can show T1 accuracy, overall T2 accuracy, and T2|T1 accuracy by lag — that is more informative than one total score.",
    },
    { type: "heading", text: "Why Does T2 Become Hard to Report?" },
    {
      type: "paragraph",
      text: "There is no single universally accepted explanation. The attentional blink has generated many theories involving limited-capacity processing, competition between targets and distractors, temporary attentional control, working-memory consolidation, selection and gating, and episodic organization. The broad agreement is that processing T1 changes the availability or deployment of attention for information arriving shortly afterward. But it is too strong to say the brain simply \"turns off\" for half a second — considerable processing of T2 can occur even on trials where it is not consciously reported.",
    },
    { type: "heading", text: "Lag-1 Sparing" },
    {
      type: "paragraph",
      text: "The attentional blink has an important exception called lag-1 sparing. When T2 appears immediately after T1, performance can be relatively good. Then T2 accuracy may drop at slightly later lags before recovering again — a simplified pattern can look like Lag 1: good, Lag 2–3: worse, later lags: recovery. This is one reason an online test should use multiple target delays rather than simply comparing \"fast\" and \"slow.\" Lag-1 sparing is common, although research shows it does not occur under every stimulus and task condition.",
    },
    { type: "heading", text: "Why Lag-1 Sparing Matters" },
    {
      type: "paragraph",
      text: "If attention simply became unavailable the instant T1 was detected, T2 should be worst when it appears immediately afterward. But that is often not what happens. Lag-1 sparing suggests that closely adjacent targets can sometimes be processed within the same attentional episode. The exact explanation remains debated. The phenomenon helped researchers refine theories of how attention is opened, maintained, and closed over very short time scales.",
    },
    { type: "heading", text: "The Blink Is Not Exactly 500 ms for Everyone" },
    {
      type: "paragraph",
      text: "Online descriptions sometimes say \"your brain goes blind for 500 milliseconds.\" That is misleading — the blink is a pattern in probability. Its timing and magnitude depend on stimulus rate, target type, distractors, task instructions, target similarity, masking, individual differences, and practice. Many studies find reduced T2 report somewhere around 200–500 ms after T1, but there is no universal personal \"blink duration\" that is exactly the same across tasks.",
    },
    { type: "heading", text: "What Does the Test Measure?" },
    {
      type: "paragraph",
      text: "Performance can involve temporal attention, target selection, working-memory encoding, visual identification, resistance to distraction, and response accuracy. The test is not a pure measure of \"attention span\" — attention span usually refers to maintaining attention over a longer period. The attentional blink concerns a brief temporal bottleneck occurring within fractions of a second.",
    },
    { type: "heading", text: "Attentional Blink vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) presents multiple items across space and asks you to find a target. The Attentional Blink Test presents items across time at roughly the same location. Visual Search asks where is the target; Attentional Blink asks can I identify two targets arriving close together in time. Both study selective attention, but one emphasizes spatial competition and the other temporal competition.",
    },
    { type: "heading", text: "Attentional Blink vs. Change Blindness" },
    {
      type: "paragraph",
      text: "The [Change Blindness Test](/test/change-blindness-test) asks whether you notice a difference between two scene states separated by an interruption. Attentional blink asks whether a rapidly presented second target reaches reportable awareness after T1. The time scales and mechanisms differ — missing T2 is not the same as failing to compare two scenes.",
    },
    { type: "heading", text: "Can the Test Work in a Browser?" },
    {
      type: "paragraph",
      text: "Yes. A 2023 browser-based replication reproduced a clear attentional-blink pattern online, including reduced performance roughly 200–400 ms after the relevant preceding event and lag-1 sparing. That supports using browser technology for educational demonstrations. However, exact timing still depends on monitor refresh rate, browser scheduling, and device performance. For personal comparisons, use the same device and browser.",
    },
    { type: "heading", text: "What Is a Good Attentional Blink Score?" },
    {
      type: "paragraph",
      text: "There is no universal browser cutoff. A meaningful result depends on T1 accuracy, T2|T1 accuracy, lag, number of trials, stimulus duration, and distractor type. Avoid claims such as \"no blink = superior brain\" or \"large blink = poor attention.\" Some people show smaller or larger effects, but individual measurement is noisy unless enough trials are collected. A strong result page should show the shape of performance across lags.",
    },
    { type: "heading", text: "Can Practice Reduce the Attentional Blink?" },
    {
      type: "paragraph",
      text: "Practice can change performance. Users may become better at detecting the target category, ignoring distractors, responding efficiently, and anticipating the structure. Training studies have reported changes in attentional-blink magnitude under some procedures. But improvement on one RSVP task should not automatically be described as a broad expansion of attention capacity. The safest claim is that practice can improve performance on this type of rapid temporal-attention task.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the attentional blink?", answer: "A temporary drop in reporting a second target when it appears shortly after a first target in a rapid visual stream." },
        { question: "Do your eyes actually blink?", answer: "No. The term describes a limitation in attention, not a physical eye blink." },
        { question: "When does the blink usually occur?", answer: "Many experiments find reduced T2 report when it appears roughly 200–500 ms after T1." },
        { question: "What is lag-1 sparing?", answer: "The common finding that T2 can be relatively well reported when it appears immediately after T1." },
        { question: "What does T2|T1 mean?", answer: "Second-target accuracy calculated only on trials where the first target was correctly identified." },
        { question: "Does a large blink mean poor concentration?", answer: "Not necessarily. The effect is task-specific and should not be treated as a general diagnosis of attention ability." },
        { question: "Can this test diagnose ADHD?", answer: "No. It is a temporal-attention experiment, not a diagnostic assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "The attentional blink reveals something surprising: two visible events can be easy to perceive separately but difficult to report when they arrive at the wrong interval. The most useful result is not one \"attention score.\" It is the curve showing how second-target accuracy changes as the gap after the first target changes.",
    },
  ],
};
