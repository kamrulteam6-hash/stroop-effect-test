import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember information after it is no longer sitting in your immediate mental workspace? This Long-Term Memory Test measures how well information survives beyond the short window of immediate memory by having you study a word list, complete a distraction task, and then recall as many words as you can.",
    },
    {
      type: "paragraph",
      text: "This is a cognitive performance test, not a medical diagnosis. A low score cannot by itself diagnose dementia, amnesia, mild cognitive impairment, or another neurological condition.",
    },
    { type: "heading", id: "what-is-long-term-memory", text: "What Is Long-Term Memory?" },
    {
      type: "paragraph",
      text: "Long-term memory refers broadly to information retained beyond the brief period associated with immediate or working memory. It can last minutes, hours, days, years, or decades. Long-term memory is not one single storage box — researchers distinguish several systems that preserve different kinds of information, including declarative or explicit memory and nondeclarative or implicit memory.",
    },
    { type: "heading", id: "explicit-memory", text: "Explicit Long-Term Memory" },
    {
      type: "paragraph",
      text: "Explicit memory involves information you can consciously bring to mind, and it includes two important forms. Episodic memory is memory for events and experiences, such as your last birthday, a recent conversation, or what happened on a trip. Semantic memory is memory for facts and general knowledge, such as \"Paris is in France\" or the meaning of a familiar word. Our [Episodic Memory Test](/test/episodic-memory-test) focuses specifically on event and context memory, while this general Long-Term Memory Test focuses on delayed retention of newly learned material.",
    },
    { type: "heading", id: "implicit-memory", text: "Implicit Long-Term Memory" },
    {
      type: "paragraph",
      text: "Not every long-term memory is consciously recalled. Implicit or nondeclarative memory includes learned influences on behavior that may occur without deliberate recollection. One important example is procedural memory, which supports learned skills such as typing, riding a bicycle, or playing a practiced musical sequence. This word-list memory test measures explicit memory far more than procedural memory — that limitation is worth stating clearly.",
    },
    { type: "heading", id: "vs-short-term", text: "Long-Term Memory vs. Short-Term Memory" },
    {
      type: "paragraph",
      text: "Short-term memory holds a limited amount of information briefly — for example, you hear a four-digit number and repeat it seconds later. A long-term memory task adds meaningful retention: you learn a list, complete another activity, and later are asked what you remember. Our [Short-Term Memory Test](/test/short-term-memory-test) is designed for immediate retention, while this page focuses on information that must survive a longer delay filled with a distractor task.",
    },
    { type: "heading", id: "encoding", text: "Encoding: Memory Starts Before the Delay" },
    {
      type: "paragraph",
      text: "People often interpret forgetting as a storage failure. Sometimes the problem happened earlier. Encoding is the process of taking information in so that it can later be remembered. If you were distracted when the word list appeared, the information may never have been encoded strongly. Later, you say \"my memory is terrible,\" but the main problem may have been attention. That is why a controlled memory test should make sure users actually see the learning material clearly before the delay begins.",
    },
    { type: "heading", id: "storage-consolidation", text: "Storage and Consolidation" },
    {
      type: "paragraph",
      text: "After information is encoded, it must remain available over time. Memory researchers use the term consolidation for processes through which memories become more stable. The practical point is that remembering later is not identical to remembering immediately — a person may perform well right after learning and remember less after a delay, and this difference provides useful information about retention.",
    },
    { type: "heading", id: "why-a-distractor-task", text: "Why This Test Uses a Distractor Task" },
    {
      type: "paragraph",
      text: "If you test memory immediately after learning, the information may still be active in short-term or working memory rather than truly consolidated in long-term storage. Inserting an unrelated activity between studying the word list and recalling it prevents you from simply rehearsing the words in your head during the delay, which creates a much stronger test of genuine long-term retention. This is a standard technique used across memory research to separate short-term rehearsal from real long-term-memory performance.",
    },
    { type: "heading", id: "retrieval", text: "Retrieval: Knowing Something Is Stored Is Not Enough" },
    {
      type: "paragraph",
      text: "Have you ever known that you know a person's name but could not produce it, only for the name to suddenly appear later? That experience shows why retrieval matters — information may be available in memory without being immediately accessible. Retrieval depends partly on cues, such as a photograph, location, smell, first letter, or related idea, which can make a memory easier to recover.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Long-Term Memory Score Means" },
    {
      type: "paragraph",
      text: "A lower score means you remembered fewer of the learned words after the delay and distractor task — look at whether the main difficulty was initial learning or delayed recall specifically, since one score cannot reveal every cause. A mid-range score means you retained much of the list while losing some items over time. A higher score means you retained and retrieved a relatively large amount of the tested material — that is strong performance on this task, though it does not prove that every memory system is equally strong.",
    },
    { type: "heading", id: "spacing-retrieval-practice", text: "Spacing and Retrieval Practice" },
    {
      type: "paragraph",
      text: "Two powerful learning principles are spacing and retrieval practice. Spacing means studying across multiple sessions rather than compressing everything into one session. Retrieval practice means trying to remember the information without looking at it — rereading can create familiarity, but retrieval tells you whether you can actually access the information. This is why practice tests and flashcards can be useful when used correctly; the effort of retrieving is part of the learning process.",
    },
    { type: "heading", id: "memory-and-age", text: "Why Memory Changes With Age" },
    {
      type: "paragraph",
      text: "Some memory abilities change with healthy aging. Research consistently shows age-related differences in aspects of episodic memory, especially detailed or associative remembering. Semantic knowledge can remain comparatively strong and may even benefit from accumulated experience. That means \"older equals bad memory\" is an oversimplification — different memory systems follow different age-related patterns, and a browser test should compare performance carefully rather than turning normal age differences into disease labels.",
    },
    { type: "heading", id: "not-dementia-test", text: "Does a Low Score Mean Dementia?" },
    {
      type: "paragraph",
      text: "No. The National Institute on Aging distinguishes normal age-related forgetfulness from more serious memory problems that interfere with everyday functioning. A short online memory test cannot diagnose dementia. Performance can be affected by sleep, stress, depression, anxiety, medications, alcohol or other substances, pain, distraction, hearing or vision problems, and unfamiliarity with the task. If memory changes are worsening or interfering with normal daily activities, professional evaluation is more appropriate than repeated browser testing.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is long-term memory?", answer: "Long-term memory is the broad set of systems that retain information beyond the brief period of immediate or working memory." },
        { question: "How long does information have to last to count as long-term memory?", answer: "There is no single everyday cutoff. Long-term-memory research concerns information retained beyond immediate short-term maintenance, with tests using delays ranging from minutes to much longer periods." },
        { question: "What is the difference between episodic and semantic memory?", answer: "Episodic memory concerns events and experiences, while semantic memory concerns facts and general knowledge." },
        { question: "Why does this test include a distractor task before recall?", answer: "The distractor task prevents you from simply rehearsing the word list in short-term memory, creating a truer test of long-term retention." },
        { question: "Can a Long-Term Memory Test diagnose dementia?", answer: "No. Clinical diagnosis requires a much broader evaluation." },
        { question: "Can long-term memory improve?", answer: "Encoding strategies, spacing, retrieval practice, sleep, attention, and repeated learning can improve retention for many types of information." },
      ],
    },
    { type: "heading", text: "Memory Is More Than Holding Information" },
    {
      type: "paragraph",
      text: "Short-term memory keeps information alive for the moment. Long-term memory asks whether it survives after that moment is gone. Can you retrieve the word after the distraction? A useful Long-Term Memory Test should show where retention succeeded and where information disappeared — that pattern is more informative than simply saying \"you have a good memory.\"",
    },
  ],
};
