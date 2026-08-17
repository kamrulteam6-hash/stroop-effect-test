import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you hold a short list in mind long enough to use it? This Short-Term Memory Test measures how much verbal information you can temporarily retain by having you study a list of unrelated words and recall as many as you can immediately afterward.",
    },
    {
      type: "paragraph",
      text: "Your result reflects performance on this task under the current conditions. It is not a diagnosis of dementia, ADHD, brain injury, or another neurological or psychological condition.",
    },
    { type: "heading", id: "what-is-short-term-memory", text: "What Is Short-Term Memory?" },
    {
      type: "paragraph",
      text: "Short-term memory is the temporary retention of a limited amount of information. It helps you keep information available for a few seconds while you use it or prepare to do something with it — remembering a verification code, holding a room number in mind, repeating a phone number, keeping the last few words of a sentence active, or holding a short list before writing it down. The information can disappear quickly if it is not rehearsed, organized, or transferred into longer-term memory.",
    },
    { type: "heading", id: "vs-working-memory", text: "Short-Term Memory vs. Working Memory" },
    {
      type: "paragraph",
      text: "These terms are related but should not be treated as identical. Short-term memory mainly emphasizes temporary storage. Working memory emphasizes storing information while also manipulating or using it. Hearing a short sequence and repeating it back exactly is primarily a short-term memory task; repeating it in reverse order adds mental manipulation and places greater demands on working memory. Our [Working Memory Test](/test/working-memory-test) focuses more heavily on that active manipulation.",
    },
    { type: "heading", id: "free-recall", text: "Why This Test Uses Free Recall" },
    {
      type: "paragraph",
      text: "This test presents a list of unrelated words and asks you to recall as many as you can immediately afterward, in any order — a method researchers call free recall. Unlike a task that requires reproducing items in a fixed sequence, free recall lets you retrieve items in whatever order they come to mind, which often reflects how naturally you organized the material while studying it. The number of words you successfully recall gives an estimate of your immediate verbal memory capacity for this list length.",
    },
    { type: "heading", id: "capacity-not-fixed", text: "Memory Capacity Is Not a Magic Fixed Number" },
    {
      type: "paragraph",
      text: "Many people have heard \"short-term memory holds seven items, plus or minus two.\" That idea came from classic work on memory limits. Modern research shows that capacity estimates depend strongly on the material, chunking, rehearsal, task design, scoring, and familiarity — so avoid telling every user that normal memory equals exactly seven items. A person's recall capacity can change across word lists, digit sequences, and visual tasks, and the method used to score the result also matters.",
    },
    { type: "heading", id: "serial-position", text: "Where in the List Errors Happen Matters" },
    {
      type: "paragraph",
      text: "Not every word in a list is equally easy to recall. Words near the beginning of the list often benefit from extra rehearsal time, and words near the end often benefit from still being fresh in mind when recall begins — words in the middle are typically hardest to retrieve. Noticing whether your missed words cluster in the middle of the list, rather than at the start or end, can tell you more about your recall pattern than the total count alone.",
    },
    { type: "heading", id: "attention-first", text: "Attention Comes First" },
    {
      type: "paragraph",
      text: "If you do not attend to the words as they appear, memory never receives a clean input. You may think \"I forgot the word,\" but perhaps you were reading a notification while it appeared. Short-term-memory scores can therefore be affected by distraction, divided attention, fatigue, poor screen visibility, or misunderstanding instructions. Use a quiet setting and give the material full attention.",
    },
    { type: "heading", id: "chunking-grouping", text: "Chunking and Grouping Can Increase Apparent Capacity" },
    {
      type: "paragraph",
      text: "If several words in the list belong to the same category, or if you notice a pattern connecting them, your brain can group separate elements into larger meaningful units — a process called chunking. This can dramatically improve recall without your underlying short-term capacity literally expanding; you simply changed the way the information was represented. A fair test should use varied, largely unrelated words to reduce excessive advantage from easy chunking.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Short-Term Memory Score Means" },
    {
      type: "paragraph",
      text: "A lower score means you retained fewer words correctly — check whether attention, fatigue, or the test format affected performance. A mid-range score means you successfully held a moderate number of words but likely lost some, especially from the middle of the list. A higher score means you accurately retained relatively more words under the current conditions — this indicates strong performance on the specific material used, but it does not mean every form of memory is equally strong.",
    },
    { type: "heading", id: "why-score-changes", text: "Why Your Score Can Change" },
    {
      type: "paragraph",
      text: "Short-term-memory performance can vary with sleep, stress, anxiety, distraction, motivation, age, practice, vision, substances or medications, and device presentation. A second attempt may also improve because you understand the task better. That is why small changes should not be overinterpreted.",
    },
    { type: "heading", id: "cleaner-result", text: "How to Get a Cleaner Result" },
    {
      type: "list",
      ordered: true,
      items: [
        "Turn off notifications.",
        "Do not write down the words.",
        "Avoid repeating the test immediately.",
        "Complete practice trials first, if available.",
        "Use the same device for comparisons.",
        "Recall words only after the study period ends.",
      ],
    },
    {
      type: "paragraph",
      text: "If you use notes, screenshots, or external aids, you are no longer measuring unaided short-term memory.",
    },
    { type: "heading", id: "vs-long-term", text: "Short-Term Memory vs. Long-Term Memory" },
    {
      type: "paragraph",
      text: "Long-term memory involves retention after information is no longer held in immediate awareness. If you recall the word list seconds after studying it, immediate memory contributes heavily. If you recalled the same list after a meaningful delay filled with another activity, long-term retention would become more important. Our [Long-Term Memory Test](/test/long-term-memory-test) focuses on delayed retrieval, while this test keeps the interval short and emphasizes immediate capacity.",
    },
    { type: "heading", id: "can-improve", text: "Can Short-Term Memory Improve?" },
    {
      type: "paragraph",
      text: "Practice can improve performance on a specific memory task. You may also learn strategies such as grouping, rehearsal, and attention control. But improvement on one recall task does not automatically mean a broad increase in every memory capacity. In real life, external tools are often useful — writing information down is not a failure of memory, it is an effective way to reduce unnecessary memory load.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is short-term memory?", answer: "It is the temporary retention of a limited amount of information over a brief period." },
        { question: "What is a Short-Term Memory Test?", answer: "It is a task that presents information briefly and asks you to reproduce or recall it soon afterward." },
        { question: "Is free recall a short-term memory test?", answer: "Yes. Recalling as many items as possible immediately after a brief study period is a widely used way to assess verbal short-term memory." },
        { question: "Is short-term memory the same as working memory?", answer: "No. Working memory generally adds active manipulation or processing to temporary storage." },
        { question: "What is a good short-term memory score?", answer: "There is no single universal online cutoff because performance depends on age, scoring method, presentation, and task design." },
        { question: "Can a low score diagnose dementia?", answer: "No. One online memory task cannot diagnose dementia or another clinical condition." },
      ],
    },
    { type: "heading", text: "How Much Can You Hold Before It Fades?" },
    {
      type: "paragraph",
      text: "That is the core question. See the words. Hold them. Recall them before they disappear. Short-term memory is temporary by design. Your score shows how much information stayed available during that brief window — not how intelligent you are and not how strong every part of your memory is.",
    },
  ],
};
