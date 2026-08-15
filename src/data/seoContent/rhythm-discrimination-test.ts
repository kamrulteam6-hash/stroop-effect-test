import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you hear when one event in a rhythmic pattern arrives slightly too early or too late? Take this free **Rhythm Discrimination Test** to measure sensitivity to temporal patterns. You will hear two short sequences separated by a brief pause, and your task is: same or different?",
    },
    {
      type: "paragraph",
      text: "On different trials, one temporal interval changes while pitch, loudness, and timbre remain controlled. This keeps the test focused on rhythm rather than melody.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Rhythm Discrimination Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Use headphones if possible.",
        "Listen to the first rhythm.",
        "Hold its timing pattern in memory.",
        "Listen to the second rhythm.",
        "Decide whether the temporal pattern is the same or different.",
        "Continue as the timing changes become smaller.",
        "Review accuracy and threshold by difficulty.",
      ],
    },
    { type: "paragraph", text: "Try not to tap along if you want a listening-only baseline." },
    { type: "heading", text: "What Is Rhythm?" },
    {
      type: "paragraph",
      text: "Rhythm is the temporal organization of sound events. It is not simply how fast music is — two sequences can have the same overall duration and number of sounds while differing in their internal pattern of short intervals, long intervals, accents, and grouping. For example, \"tap–tap––tap–tap\" and \"tap––tap–tap–tap\" may contain the same number of events but have different timing structures. Rhythm discrimination asks whether the listener can detect that change.",
    },
    { type: "heading", text: "Rhythm vs. Tempo" },
    {
      type: "paragraph",
      text: "Rhythm is the pattern of timing relationships among events, while tempo is the overall rate at which the pattern unfolds. A rhythm can often be played faster or slower while preserving its relative structure — if every interval is multiplied by the same factor, the tempo changes while the rhythmic ratios remain similar. For this page, the primary score should focus on timing-pattern discrimination, not simply detection of a faster second sequence.",
    },
    { type: "heading", text: "Same-Different Rhythm Trials and Inter-Onset Interval" },
    {
      type: "paragraph",
      text: "A clean browser task can use identical clicks: pattern A of short–short–long–short compared with pattern B of short–short–long–short gives \"same,\" while pattern B shifting to short–medium–medium–short gives \"different.\" Because the sounds themselves stay acoustically similar, timing carries the relevant information, separating the task from tone and melody perception. The time from the beginning of one sound to the beginning of the next is called the inter-onset interval, or IOI — if clicks begin at 0 ms, 300 ms, 600 ms, and 1,050 ms, the IOIs are 300 ms, 300 ms, and 450 ms. A rhythm can therefore be represented as a pattern of IOIs, and changing one interval while compensating elsewhere allows the test to alter rhythm without making total sequence duration an obvious clue.",
    },
    { type: "heading", text: "Why Onset Timing Matters" },
    {
      type: "paragraph",
      text: "Research on rhythm perception shows that sound-onset timing is critical. Experiments manipulating tempo and tone duration have found that changes in event onset strongly affect rhythm discrimination, meaning listeners are not simply judging how long each sound lasts — they are sensitive to when the next event begins. Short click-like tones are therefore useful for browser testing because they create clearly defined onsets.",
    },
    { type: "heading", text: "Same Total Duration, Different Pattern" },
    {
      type: "paragraph",
      text: "Suppose both sequences last 3 seconds and both contain 6 sounds — one interval can still be lengthened while another is shortened, so the second rhythm differs internally without becoming longer overall. This is a stronger test than letting the altered sequence simply finish later, since it prevents users from solving the problem using total duration instead of rhythmic structure. Listeners can often recognize the same rhythm when the entire pattern is sped up or slowed down, suggesting rhythm perception depends partly on relative timing relationships. An advanced mode could present the second sequence at a slightly different tempo — if the interval ratios are preserved, the correct response would be \"same rhythm\" even though absolute millisecond durations changed, scored separately since it tests rhythm generalization rather than exact temporal matching.",
    },
    { type: "heading", text: "Beat-Based Rhythm and Temporal Deviations" },
    {
      type: "paragraph",
      text: "Some rhythms strongly imply an underlying pulse or beat while others do not. Beat-based patterns give the listener a temporal framework that can help predict when events should occur, so a deviation that violates an expected beat can become especially noticeable. Research distinguishes beat-based and non-beat-based rhythm processing, and neurological studies suggest they can rely partly on different mechanisms — a browser version can eventually compare these pattern types. A useful adaptive mode can create a small timing deviation, such as changing 300–300–600–300 ms to 300–350–550–300 ms, where one event arrives later but total duration stays controlled. The amount of displacement can be reduced after correct responses, creating a psychophysical measure of sensitivity to rhythmic timing changes.",
    },
    { type: "heading", text: "Adaptive Threshold" },
    {
      type: "paragraph",
      text: "A staircase can begin with an obvious deviation, such as 100 ms, then reduce the difference after repeated correct judgments to 80 ms, 60 ms, or 40 ms. After errors, the task becomes easier again, and the procedure can converge around a threshold region. The result can be expressed in milliseconds or as a percentage of the base interval — percentage is useful when multiple tempi are used.",
    },
    { type: "heading", text: "Pitch Must Be Controlled" },
    {
      type: "paragraph",
      text: "If the second rhythm also changes pitch, users may identify the pitch difference rather than the timing difference. A pure rhythm test should use one repeated click or tone and keep pitch, loudness, and timbre constant, so only temporal structure carries the answer. This is essential for keeping the test distinct from the [Tone Memory Test](/test/tone-memory-test) and [Pitch Discrimination Test](/test/pitch-discrimination-test).",
    },
    { type: "heading", text: "Memory Is Still Involved" },
    {
      type: "paragraph",
      text: "The first rhythm ends before the second begins, and the user must retain its temporal pattern during the pause. So even though the task is called Rhythm Discrimination, short-term auditory memory contributes. A long pause would increase the memory component, so to emphasize discrimination, keep the inter-pattern interval brief, fixed, and consistent across trials. Do not describe the test as a pure timing threshold with zero memory demand.",
    },
    { type: "heading", text: "Musical Training" },
    {
      type: "paragraph",
      text: "Musicians often perform well on rhythm-perception tasks because training provides experience with beat tracking, temporal grouping, synchronization, and detecting small timing deviations. But substantial individual differences exist among both musicians and non-musicians — a high score does not prove musical training, and a low score does not prove lack of musical ability. Music contains many abilities beyond timing discrimination.",
    },
    { type: "heading", text: "Rhythm Discrimination vs. Rhythm Tapping and Tone Memory" },
    {
      type: "paragraph",
      text: "Your existing [Rhythm Tapping Test](/test/rhythm-tapping-test) includes motor production — hearing a beat or pattern and synchronizing or reproducing movements. Rhythm Discrimination instead asks users to listen to two temporal patterns and judge whether they differ, minimizing the motor requirement since poor tapping can arise partly from motor timing even when auditory discrimination is good. The [Tone Memory Test](/test/tone-memory-test) asks whether the pitch pattern changed while timing stays controlled; Rhythm Discrimination asks whether the timing pattern changed while pitch stays controlled. This gives users a direct comparison between two major dimensions of auditory pattern processing.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include overall accuracy (percent of same/different judgments correct), changed-trial accuracy (how often altered rhythms were detected), same-trial accuracy (how often exact repetitions were recognized), timing threshold (smallest temporal perturbation detected reliably), difficulty curve (accuracy as the size of the timing change decreases), and optional tempo generalization (ability to recognize the same relative rhythm at another speed). These are more informative than a vague \"rhythm talent\" score.",
    },
    { type: "heading", text: "What Is a Good Rhythm Discrimination Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom browser task. Performance depends on tempo, number of events, timing perturbation, beat structure, sequence delay, headphones, and musical experience. Do not claim that under 40 ms means \"professional musician\" or similar labels without same-test normative evidence. Personal repeat testing is most meaningful under the same audio conditions.",
    },
    { type: "heading", text: "Can This Diagnose Rhythm Deafness?" },
    {
      type: "paragraph",
      text: "No. Researchers study unusually severe rhythm and beat-perception difficulties, sometimes described as beat deafness or rhythm-related amusia, but diagnosis requires validated assessment. A low browser score can reflect audio latency, distraction, unfamiliarity, hearing, poor task understanding, or normal variation. This tool should be presented as an auditory timing experiment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Rhythm Discrimination Test?", answer: "A listening task where you decide whether two temporal sound patterns are the same or different." },
        { question: "Is rhythm the same as tempo?", answer: "No. Rhythm is the pattern of intervals; tempo is the overall speed." },
        { question: "What is an IOI?", answer: "Inter-onset interval: the time between the beginnings of consecutive sounds." },
        { question: "Can the same rhythm be played at different tempos?", answer: "Yes. Relative interval structure can remain the same even when the entire pattern speeds up or slows down." },
        { question: "Does musical training help?", answer: "It can, but rhythm ability varies widely both within and outside trained musicians." },
        { question: "Is this the same as rhythm tapping?", answer: "No. Tapping includes motor synchronization; discrimination can be measured through listening alone." },
        { question: "Can this diagnose a neurological condition?", answer: "No. It is an online rhythm-perception task." },
      ],
    },
    {
      type: "paragraph",
      text: "The clicks themselves can be identical. The information is carried by when they occur — that is what makes rhythm a temporal pattern. The Rhythm Discrimination Test asks whether you can preserve that timing structure long enough to notice when one interval has quietly changed.",
    },
  ],
};
