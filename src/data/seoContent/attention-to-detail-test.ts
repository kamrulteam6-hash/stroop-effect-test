import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Attention to detail is not simply \"I am a careful person.\" A better test asks you to prove it. Can you spot one wrong digit in a long code? Can you notice a missing word? Can you identify which record does not match the source? Can you maintain accuracy when the differences are small and time is limited?",
    },
    {
      type: "paragraph",
      text: "Take this free Attention to Detail Test using performance-based tasks rather than personality questions — code comparison, symbol matching, proofreading, data-entry checking, visual mismatch detection, and consistency checking. The result separates **accuracy** from **speed**, since someone who works slowly and perfectly is different from someone who works quickly but misses many errors.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Attention to Detail Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the task rule carefully.",
        "Compare each item systematically.",
        "Do not assume two entries match because they look almost identical.",
        "Check letters, numbers, order, spacing, and punctuation where relevant.",
        "Mark mismatches only when you are confident.",
        "Work steadily rather than rushing randomly.",
        "Complete each block before the timer ends.",
      ],
    },
    {
      type: "paragraph",
      text: "The most reliable strategy is: scan consistently, not impulsively.",
    },
    { type: "heading", id: "what-is", text: "What Is Attention to Detail?" },
    {
      type: "paragraph",
      text: "**Attention to detail** is the ability to notice, compare, and accurately process small but relevant features — identifying discrepancies, verifying records, detecting typographical errors, checking numerical codes, noticing missing information, and following exact formatting rules. This is different from simply paying attention for a long time; a person can stay focused on a task for ten minutes and still overlook important details. Attention to detail is closely related to selective attention, visual discrimination, working accuracy, monitoring, and speed–accuracy control.",
    },
    { type: "heading", id: "performance-vs-self-report", text: "Performance-Based vs. Self-Report" },
    {
      type: "paragraph",
      text: "Many personality questionnaires ask \"I pay close attention to details,\" and people can answer \"Strongly Agree\" without demonstrating the ability. A performance-based test instead gives actual detail-oriented work. Research by **Stevenor, Zickar, Wimbush, and Beck** introduced a performance-based Attention to Detail Test and reported evidence for measurement precision and predictive validity, including relationships with supervisor ratings of detail-oriented job performance. This page tests what you do, not merely how careful you believe you are.",
    },
    { type: "heading", id: "code-comparison", text: "Code Comparison" },
    {
      type: "paragraph",
      text: "One of the cleanest tasks is comparing two strings — for example, source 7K4P-921B-Q5 versus copy 7K4P-912B-Q5, where the difference is 921 → 912. This looks simple until the strings become longer and the timer is running. Code comparison minimizes vocabulary and general knowledge, so the target ability is precise visual checking.",
    },
    { type: "heading", id: "proofreading", text: "Proofreading" },
    {
      type: "paragraph",
      text: "A second block can use short text — for example, \"the report was submitted on March 18\" versus \"the report was submited on March 18.\" To stay distinct from a Grammar or Spelling Test, errors are chosen where the correct form is obvious and the challenge is detecting the difference, not knowing an obscure language rule: duplicated words, missing words, transposed letters, inconsistent dates, incorrect numbers, or punctuation that changes meaning.",
    },
    { type: "heading", id: "record-verification", text: "Record Verification" },
    {
      type: "paragraph",
      text: "A practical block shows a source record — name, invoice number, amount, date — alongside several candidate entries, and you identify which record exactly matches. This resembles real tasks in administration, auditing, inventory, quality assurance, and data entry. The test uses invented data and avoids collecting real personal information.",
    },
    { type: "heading", id: "consistency-checking", text: "Consistency Checking" },
    {
      type: "paragraph",
      text: "Not every error is a direct copy mismatch. A table might list a subtotal of $120, tax of $12, and a total of $123 — the individual entries are typed clearly, but the total is inconsistent. This requires a little reasoning, kept simple enough that the main challenge remains noticing the inconsistency rather than becoming a Data Interpretation exercise.",
    },
    { type: "heading", id: "speed-accuracy-tradeoff", text: "Speed–Accuracy Trade-Off" },
    {
      type: "paragraph",
      text: "Working faster usually increases the risk of errors. Suppose User A checks 40 items and gets 39 correct, while User B checks 60 items and gets 47 correct — who performed better? There is no answer without defining the job requirement. A high-quality result reports throughput and accuracy separately before creating any composite.",
    },
    { type: "heading", id: "accuracy", text: "Accuracy" },
    {
      type: "paragraph",
      text: "A basic accuracy formula is correct decisions ÷ attempted items × 100. But accuracy alone can be misleading — a user who checks only five easy items and gets all five correct has 100% accuracy but low throughput, which is why the test also records how much work was completed.",
    },
    { type: "heading", id: "throughput", text: "Throughput" },
    {
      type: "paragraph",
      text: "Throughput can be correct items per minute or items completed per minute. Correct items per minute is often more useful because it rewards speed only when responses are accurate — but you should still see the raw components: attempted, correct, incorrect, and skipped. Transparent scoring is better than a mysterious \"detail score.\"",
    },
    { type: "heading", id: "false-alarms", text: "False Alarms" },
    {
      type: "paragraph",
      text: "Suppose two codes are actually identical but you mark them \"Different\" — that is a **false alarm**. A user who marks everything as an error will catch every real mismatch but perform badly overall. That is why the test needs both mismatch trials and exact-match trials, and the result reports missed errors and false alarms separately.",
    },
    { type: "heading", id: "missed-errors", text: "Missed Errors" },
    {
      type: "paragraph",
      text: "A **miss** occurs when an actual discrepancy is labeled as a match — often the mistake employers worry about in detail-oriented work. The relative cost of misses and false alarms varies by task: in fraud detection, a missed anomaly may be expensive, while in quality inspection, too many false alarms can also waste time. A general browser test does not pretend one error type is always worse.",
    },
    { type: "heading", id: "time-pressure", text: "Time Pressure" },
    {
      type: "paragraph",
      text: "A detail task without any time pressure may mostly measure patience. A heavily speeded task can become motor-speed or reading-speed dependent. A balanced design includes an accuracy block with generous time and a speeded block with a fixed short duration, letting you see whether errors increase under pressure while keeping both blocks separately interpretable.",
    },
    { type: "heading", id: "vs-attention-span", text: "Attention to Detail vs. Attention Span" },
    {
      type: "paragraph",
      text: "Attention span or sustained attention asks: can you maintain task engagement over time? Attention to Detail asks: can you accurately discriminate the small features that matter? A person can be highly accurate on short checking tasks but lose performance over a long vigilance session — which is why our Focus and Concentration tests do not simply duplicate this one.",
    },
    { type: "heading", id: "vs-visual-attention", text: "Attention to Detail vs. Visual Attention" },
    {
      type: "paragraph",
      text: "Our [Visual Attention Test](/test/visual-attention-test) focuses more broadly on selecting visual information. Attention to Detail feels practical — codes, records, documents, mismatches, consistency — giving it a strong job-aptitude and workplace search intent.",
    },
    { type: "heading", id: "vs-error-checking", text: "Attention to Detail vs. Error Checking Test" },
    {
      type: "paragraph",
      text: "Our [Error Checking Test](/test/error-checking-test) is narrower and higher-speed: find whether two strings, records, or entries contain an error. This Attention to Detail Test remains the broad umbrella — code comparison, proofreading, visual detail, and record consistency together.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — correct decisions.",
        "**Correct Items per Minute** — accuracy-adjusted throughput.",
        "**Missed Errors** — real discrepancies not detected.",
        "**False Alarms** — correct items incorrectly flagged.",
        "**Code Comparison** — string-verification performance.",
        "**Proofreading** — text-error detection.",
        "**Record Checking** — multi-field comparison.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Attention to Detail Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom browser version. Performance depends on task type, time limit, font, string length, error frequency, and device — hiring cutoffs are not borrowed from another commercial assessment.",
    },
    { type: "heading", id: "diagnose-adhd", text: "Can This Diagnose ADHD?" },
    {
      type: "paragraph",
      text: "No. People with ADHD can experience attention difficulties, but an Attention to Detail Test cannot diagnose ADHD. Performance can be affected by sleep, distraction, stress, vision, typing or mouse skill, and test familiarity. Our [ADHD Test](/test/adhd-test) is handled separately as a symptom screening tool with appropriate clinical caution — this page remains a performance-based accuracy test.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is an Attention to Detail Test?",
          answer: "A performance task that measures how accurately you notice small differences, errors, omissions, and inconsistencies.",
        },
        {
          question: "Is attention to detail a personality trait?",
          answer: "People may describe themselves as detail-oriented, but this test measures actual task performance rather than self-description.",
        },
        {
          question: "Should I work as fast as possible?",
          answer: "Work quickly, but not so quickly that errors explode. Both speed and accuracy matter.",
        },
        {
          question: "What is a false alarm?",
          answer: "Marking an item as incorrect when it actually matches.",
        },
        {
          question: "Why include exact-match trials?",
          answer: "Without them, users could flag every item and appear to detect every error.",
        },
        {
          question: "Is this the same as visual search?",
          answer: "No. Visual search is a narrower perceptual paradigm; Attention to Detail combines several practical accuracy tasks.",
        },
        {
          question: "Can this diagnose ADHD?",
          answer: "No. It is a work-like performance test, not a clinical screening diagnosis.",
        },
      ],
    },
    { type: "heading", text: "Accuracy Is Not the Same as Slowness" },
    {
      type: "paragraph",
      text: "Being detail-oriented does not mean taking forever. And being fast does not mean being careless. The real skill is maintaining a useful balance: see the difference, verify it correctly, keep moving — without allowing speed to destroy accuracy. That is why the strongest Attention to Detail result shows both sides of performance instead of hiding everything inside one score.",
    },
  ],
};
