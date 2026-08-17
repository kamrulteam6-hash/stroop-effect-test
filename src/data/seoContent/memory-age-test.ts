import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Your chronological age is fixed. Your memory performance is not. This Memory Age Test compares how you perform on a growing digit-span recall task with age-related reference patterns and converts the result into an easy-to-read age-style score.",
    },
    {
      type: "paragraph",
      text: "For example, a 45-year-old might receive \"Memory Age: 36\" or \"Memory Age: 52.\" That number is a performance comparison. It is not the biological age of your hippocampus, a dementia diagnosis, or proof that your brain is literally younger or older than you are.",
    },
    { type: "heading", id: "what-is-memory-age", text: "What Is \"Memory Age\"?" },
    {
      type: "paragraph",
      text: "Memory age is not a standard medical diagnosis. It is a way of summarizing performance on a digit-span task — instead of showing only \"you recalled 7 digits,\" the test compares your span with age-related performance data and reports an age-style estimate. The age number is a headline; your actual span length is what explains what happened.",
    },
    { type: "heading", id: "memory-not-uniform", text: "Memory Changes With Age — but Not All Memory Changes the Same Way" },
    {
      type: "paragraph",
      text: "Aging affects memory in complex ways. Research has found age-related declines in aspects of episodic memory, particularly learning and retrieving detailed associations or contextual information. At the same time, semantic knowledge can remain comparatively strong and benefits from years of accumulated learning. So the idea that \"memory simply gets worse every year\" is too crude — different memory systems follow different trajectories, which is why it matters that this test focuses specifically on digit span (a form of working-memory capacity) rather than claiming to represent every kind of memory at once.",
    },
    { type: "heading", id: "digit-span", text: "Why Digit Span?" },
    {
      type: "paragraph",
      text: "Digit span — hearing or seeing a growing sequence of numbers and repeating it back — is one of the oldest and most widely used tools in memory research, because it isolates a clean, easily measured capacity: how many items you can hold and accurately reproduce in order. It has a long history of use in age-comparison research, which makes it a practical basis for an age-style estimate. It does not test everything memory can do — it does not test learning over repeated exposure, delayed recall after a distraction, or memory for meaningful events. Those are better explored with our [Episodic Memory Test](/test/episodic-memory-test).",
    },
    { type: "heading", id: "what-affects-span", text: "What Affects Your Digit Span Score?" },
    {
      type: "paragraph",
      text: "Several factors influence how many digits you can accurately recall: attention at the moment each sequence appears, whether you rehearse the digits mentally as they arrive, distraction or interruptions, fatigue, and familiarity with the task format. A single dip in span on one trial does not necessarily reflect a stable limit — normal variability, a moment of distraction, or an unusually long sequence can all lower one attempt without meaning much on their own.",
    },
    { type: "heading", id: "recall-vs-recognition", text: "Digit Span Reflects Recall, Not Recognition" },
    {
      type: "paragraph",
      text: "In recall, you must generate the sequence yourself with no options presented — that is exactly what digit span requires, and it is generally more demanding than recognition, where you would only need to identify a sequence you had already seen among several options. A pure recall task like this one tends to produce lower apparent performance than a recognition-based task would, which is one reason the two should never be compared directly as if they measured the same thing.",
    },
    { type: "heading", id: "how-calculated", text: "How Is Memory Age Calculated?" },
    {
      type: "paragraph",
      text: "A responsible scoring model needs comparison data. The basic idea is to measure your digit-span performance, compare the score with performance across age groups, and estimate the age range whose average performance most closely resembles your result. If a website does not have strong normative data behind its algorithm, the honest approach is to call the result an age-style estimate rather than a scientifically validated memory age. That wording protects both accuracy and trust.",
    },
    { type: "heading", id: "younger-result", text: "What Does a Younger Memory Age Mean?" },
    {
      type: "paragraph",
      text: "Suppose you are 50 and receive \"Memory Age: 38.\" That may mean your digit span was longer than the reference pattern associated with your chronological age. It does not mean your brain is literally 12 years younger, that you cannot develop memory problems, that your dementia risk is low, or that every type of memory is excellent. The result describes this specific performance on this specific task — nothing more.",
    },
    { type: "heading", id: "older-result", text: "What Does an Older Memory Age Mean?" },
    {
      type: "paragraph",
      text: "Suppose you are 40 and receive \"Memory Age: 55.\" Your digit span may have been shorter than the test's age-reference pattern. Before becoming concerned, consider the conditions — were you tired, distracted, anxious, rushing, using an unfamiliar device, or misunderstanding the instructions? One unusual score should not become a medical conclusion. Retesting under better conditions may produce a different result.",
    },
    { type: "heading", id: "normal-vs-serious", text: "Normal Aging vs. Serious Memory Problems" },
    {
      type: "paragraph",
      text: "The National Institute on Aging notes that mild forgetfulness can be a normal part of getting older — occasionally misplacing things or taking longer to remember a word are common examples. More serious problems interfere with everyday functioning, such as repeatedly asking the same questions, getting lost in familiar places, or becoming confused about time or people. A Memory Age Test built on one digit-span task cannot determine whether someone has dementia. Real-world functional change matters far more than one browser score.",
    },
    { type: "heading", id: "vs-brain-age", text: "Memory Age vs. Brain Age" },
    {
      type: "paragraph",
      text: "Our [Brain Age Test](/test/brain-age-test) combines several cognitive domains — reaction speed, math, and memory — into one composite estimate. This Memory Age Test focuses specifically on digit-span memory performance. Someone could have a younger Memory Age and an older Brain Age, or the reverse, because other cognitive domains contribute to the broader brain-age score. Keeping the pages distinct helps you see which specific ability drove which result.",
    },
    { type: "heading", id: "what-affects-today", text: "What Can Affect Your Memory Performance Today?" },
    {
      type: "paragraph",
      text: "Your score may change because of sleep, stress, depression, anxiety, distraction, medication, alcohol or other substances, pain, illness, hearing or vision problems, or motivation. This does not make the test meaningless — it means the test is a snapshot under current conditions.",
    },
    { type: "heading", id: "when-to-talk", text: "When to Talk With a Healthcare Professional" },
    {
      type: "paragraph",
      text: "Seek professional evaluation when memory changes are persistent, clearly worsening, interfering with daily activities, noticed by family or coworkers, creating safety problems, or appearing suddenly after illness or injury. A healthcare professional can consider medical history, medications, mood, sleep, sensory function, cognitive testing, and other factors — an online age score cannot provide that evaluation.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Memory Age Test?", answer: "It is a cognitive test that converts digit-span memory performance into an age-style comparison score." },
        { question: "Is memory age my real brain age?", answer: "No. It is a performance estimate, not a biological measurement." },
        { question: "Is a younger memory age better?", answer: "It generally indicates a longer digit span relative to the test's reference model, but the meaning depends on the norms used." },
        { question: "Does an older memory age mean dementia?", answer: "No. One online memory score cannot diagnose dementia or cognitive impairment." },
        { question: "Why did my memory age change?", answer: "Sleep, stress, distraction, practice, motivation, health, and normal variability can all affect performance." },
        { question: "Can memory age improve?", answer: "Test performance can improve through better strategies, practice, and favorable testing conditions. That does not mean the brain literally became younger by the same number of years." },
      ],
    },
    { type: "heading", text: "The Age Number Is the Headline" },
    {
      type: "paragraph",
      text: "The useful information is underneath it. How long was your digit span? Did it hold steady or drop off as sequences grew longer? Was there a single unlucky trial, or a consistent pattern? Use Memory Age as a simple summary, and use your actual span length to understand your real performance.",
    },
  ],
};
