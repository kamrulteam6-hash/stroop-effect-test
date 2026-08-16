import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Your birth certificate tells you how old you are. But how \"old\" does your cognitive performance look? A Brain Age Test turns performance on short cognitive challenges into an easy-to-understand age-style result.",
    },
    {
      type: "paragraph",
      text: "This Brain Age Test combines three quick minigames — reaction speed, mental math, and memory span — into a single composite brain-age estimate. The result is designed for self-testing, comparison, and fun. It is not a medical measurement of the biological age of your brain, and it cannot diagnose dementia, mild cognitive impairment, ADHD, or another neurological condition.",
    },
    { type: "heading", id: "what-is-brain-age", text: "What Is Brain Age?" },
    {
      type: "paragraph",
      text: "Online, \"brain age\" usually means: how does your cognitive performance compare with the patterns expected at different ages? In scientific research, the term often means something different — brain-age models frequently use brain data, especially structural or functional neuroimaging, to predict a person's chronological age and examine the gap between predicted brain age and actual age. That is not what a browser-based test does. This test measures behavioral performance, not MRI-derived brain structure, so the age result is better understood as a cognitive performance estimate expressed in years.",
    },
    { type: "heading", id: "how-it-works", text: "How This Brain Age Test Works" },
    {
      type: "paragraph",
      text: "This test samples three abilities that commonly change across the lifespan: how quickly you react to a simple stimulus, how accurately and quickly you solve short mental-math problems, and how many items you can hold and recall in a memory-span task. Your performance across all three minigames is combined into one composite score and mapped to an age-style comparison. The important part is not the visual number by itself — it is the performance data underneath it.",
    },
    { type: "heading", id: "not-chronological", text: "Brain Age Is Not the Same as Chronological Age" },
    {
      type: "paragraph",
      text: "Chronological age is fixed by your date of birth. Brain-age-style test results can vary. If you are 52 years old and receive a brain age of 43, that does not mean your brain tissue literally became nine years younger. Likewise, a result of 61 does not mean your brain has biologically aged nine extra years. It means your performance on the tasks used by this test matched the scoring profile associated with that result. The number is a summary, not a scan.",
    },
    { type: "heading", id: "vs-cognitive-age", text: "Brain Age vs. Cognitive Age" },
    {
      type: "paragraph",
      text: "These two terms are often used interchangeably online, but they are worth separating. A cognitive age is specifically based on cognitive performance. A scientific brain age is often estimated from neuroimaging or other biological brain measures. Many public Brain Age Tests, including this one, are therefore technically closer to cognitive age tests — that is not a problem as long as the result is described honestly. If you want a page focused specifically on age-equivalent performance from a shorter task set, use our [Cognitive Age Test](/test/cognitive-age-test).",
    },
    { type: "heading", id: "three-minigames", text: "What Each Minigame Contributes" },
    {
      type: "paragraph",
      text: "Reaction speed reflects how quickly you can register a simple signal and respond — this tends to slow gradually with age on average, though individual variation is large. Mental math reflects how efficiently you can perform basic numerical operations under light time pressure, drawing on working memory and processing speed together. Memory span reflects how many items you can briefly hold and recall in the correct order, a classic marker of short-term and working memory capacity. No single one of these three tasks captures the entire brain — the composite becomes more informative because it samples more than one domain rather than treating one reaction-time game as a complete measure of cognitive aging.",
    },
    { type: "heading", id: "speed-accuracy", text: "Accuracy Matters as Much as Speed" },
    {
      type: "paragraph",
      text: "Many \"brain games\" create the impression that faster is always smarter. That is too simple. Imagine two participants: Person A answers quickly but makes frequent mistakes on the math and memory tasks, while Person B is slightly slower and almost always correct. A scoring system that rewards only speed may incorrectly favor Person A. Good cognitive scoring should consider the speed–accuracy tradeoff — the objective is not to click or answer fastest at any cost, it is to process information efficiently and correctly.",
    },
    { type: "heading", id: "younger-older", text: "What Do Younger and Older Results Mean?" },
    {
      type: "paragraph",
      text: "A younger result generally means you performed better across the three minigames than the age-style reference point used by the test — faster reactions, stronger math accuracy, and a longer memory span. It does not prove protection from future dementia, and it does not mean every cognitive ability is above average. An older result may mean your current performance was slower, less accurate, or weaker in one or more of the three tasks. Before drawing a big conclusion, consider the conditions: did you sleep poorly, test while distracted, use an unfamiliar device, rush, or feel stressed? One online session is a snapshot, not a diagnosis.",
    },
    { type: "heading", id: "practice-effects", text: "Why Your Brain Age Can Change on a Retest" },
    {
      type: "paragraph",
      text: "If you repeat the test, your score may improve. That does not necessarily mean your brain became younger overnight — you may now understand the instructions better, recognize the math and memory patterns, know what to expect, or feel less nervous. These are practice effects, and they are common in cognitive testing. For more meaningful tracking, leave time between attempts and compare not only the final age number but also your reaction speed, math accuracy, and memory span individually.",
    },
    { type: "heading", id: "not-brain-health", text: "Brain Age and Brain Health Are Not the Same Thing" },
    {
      type: "paragraph",
      text: "A cognitive test cannot see brain structure, blood flow, lesions, amyloid, brain volume, vascular changes, or other medical biomarkers — those require medical or research methods. A fast online result may be interesting and useful for self-comparison, but it should never be treated as if it performed a neurological examination. Scientific brain-age research can use MRI and machine learning to estimate age-related brain patterns; that is fundamentally different from completing three minigames in a web browser.",
    },
    { type: "heading", id: "when-to-evaluate", text: "When Should Cognitive Changes Be Evaluated?" },
    {
      type: "paragraph",
      text: "Normal day-to-day variation happens. Professional evaluation becomes more important when cognitive changes are persistent, worsening, noticed by other people, interfering with work or daily tasks, affecting safety, or involving multiple abilities such as memory, language, reasoning, or orientation. A clinician can assess history, health, medications, mood, sleep, sensory function, and standardized cognitive performance — an online Brain Age Test cannot do that.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Brain Age Test?", answer: "It is an online cognitive test that converts performance across reaction speed, mental math, and memory span into an age-style score." },
        { question: "Is brain age scientifically real?", answer: "Brain age is an active research concept, particularly in neuroimaging. However, scientific MRI-based brain age is not the same as a browser-based cognitive score." },
        { question: "What does it mean if my brain age is younger than my real age?", answer: "It means you performed relatively strongly across the three minigames according to the scoring model used by the test. It does not prove that your brain is biologically younger." },
        { question: "What if my brain age is older than my actual age?", answer: "Look at your individual reaction speed, math, and memory results, plus your testing conditions. One result cannot diagnose cognitive decline." },
        { question: "Can I improve my brain age?", answer: "Practice and better testing conditions can improve task performance. Long-term brain health is more complex than one online score." },
        { question: "Can a Brain Age Test detect dementia?", answer: "No. A short online performance test cannot diagnose dementia or replace a clinical assessment." },
      ],
    },
    { type: "heading", text: "Look Under the Age Number" },
    {
      type: "paragraph",
      text: "The number is fun because everyone understands age. But the useful information sits underneath it: were you fast but inaccurate on the math? Did your memory span lag behind your reaction speed? Those details tell you what happened during the test. Your Brain Age score turns that performance into a simple comparison — but it should remain exactly that: a cognitive performance estimate, not a medical age stamped onto your brain.",
    },
  ],
};
