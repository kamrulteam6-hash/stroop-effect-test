import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you understand a simple message? Follow the main argument in an article? Infer what a writer means without being told directly? Handle complex vocabulary and long, nuanced texts? This Reading Level Test asks about your reading habits and comprehension confidence across increasingly difficult material to give you an informal estimate of your reading level from A1 to C2.",
    },
    {
      type: "paragraph",
      text: "This is a self-report reading-proficiency assessment based on your own description of your reading habits and confidence, not a scored passage-based exam. It is not an official Cambridge English exam, IELTS score, TOEFL score, school qualification, or complete measurement of your overall English ability.",
    },
    { type: "heading", id: "what-reading-level-means", text: "What Does \"Reading Level\" Mean Here?" },
    {
      type: "paragraph",
      text: "The phrase reading level can mean several different things online — a learner's English reading proficiency, a child's grade-level reading ability, a text's readability score, or a reading-age estimate. This page uses reading level to mean how well you understand English texts of increasing difficulty, based on your own self-reported habits and confidence. It should therefore be read as a self-assessment rather than a scored comprehension exam, and it is a different tool from a text-readability calculator.",
    },
    { type: "heading", id: "what-it-covers", text: "What Areas Does Reading Comprehension Involve?" },
    {
      type: "paragraph",
      text: "A full picture of reading comprehension covers several skills: main idea (can you identify what a passage is mainly about), specific details (can you locate accurate information in the text), vocabulary in context (can you infer the meaning of a word from the surrounding sentence or paragraph), reference (can you understand what words such as \"it,\" \"they,\" \"this,\" or \"which\" refer to), inference (can you identify reasonable conclusions that are implied rather than directly stated), and writer purpose and attitude (can you recognize whether the writer is explaining, criticizing, persuading, comparing, or expressing uncertainty). Higher-level reading requires more than recognizing words — reflecting honestly on how comfortable you are with each of these areas is what makes a self-report estimate meaningful.",
    },
    { type: "heading", id: "reading-and-cefr", text: "Reading and the CEFR" },
    {
      type: "paragraph",
      text: "The Common European Framework of Reference for Languages, or CEFR, describes language proficiency using six major levels: A1, A2, B1, B2, C1, C2. The Council of Europe uses \"can do\" descriptors to explain what learners can accomplish at each level, and reading is one of the receptive language activities covered by the framework. This test's questions are built around those same can-do descriptors, asking what kinds of texts you can comfortably read rather than testing you on one specific passage.",
    },
    { type: "heading", id: "a1-a2-reading", text: "A1 and A2 Reading" },
    {
      type: "paragraph",
      text: "At A1, you may understand very simple written information involving familiar words and basic phrases, such as simple signs, short personal messages, basic forms, and familiar names. The language is usually short and predictable, and A1 reading does not require understanding long arguments or abstract writing. At A2, you may understand short, straightforward texts about familiar everyday topics — simple emails, menus, advertisements, timetables, brief instructions, and short personal descriptions. Vocabulary remains relatively common, and longer or more abstract texts can still be difficult.",
    },
    { type: "heading", id: "b1-b2-reading", text: "B1 and B2 Reading" },
    {
      type: "paragraph",
      text: "At B1, you can usually understand straightforward texts on familiar subjects — main ideas, important details, simple opinions, and narrative sequence in everyday articles, personal correspondence, and uncomplicated stories. At B1 you are increasingly reading for meaning rather than translating every sentence word by word. At B2, you can handle more complex texts and follow developed arguments on a wider range of topics — detailed articles, reports, viewpoints, more varied vocabulary, and longer sentence structures. You can often infer meaning from context and distinguish important ideas from supporting detail. B2 reading is a strong independent level for many study and workplace tasks.",
    },
    { type: "heading", id: "c1-c2-reading", text: "C1 and C2 Reading" },
    {
      type: "paragraph",
      text: "At C1, you can understand lengthy and demanding texts, including language where the organization or meaning is not always explicit — academic-style writing, professional reports, complex commentary, nuanced arguments, and idiomatic or less common vocabulary. You can usually identify tone, implication, and subtle relationships between ideas. At C2, reading ability is highly flexible — you can generally understand a very wide range of complex written material, including subtle distinctions in style, meaning, and argument. C2 does not mean knowing every word; strong readers still encounter unfamiliar vocabulary, but they can often maintain comprehension despite it.",
    },
    { type: "heading", id: "vs-english-level", text: "Reading Level vs. English Level" },
    {
      type: "paragraph",
      text: "Your reading ability is only one part of English proficiency. Our [English Level Test](/test/english-level-test) can combine several areas, such as grammar, vocabulary, reading, and language use. You might report yourself as reading closer to C1 while your grammar or listening lands closer to B2 — that is completely possible, since language skills develop unevenly. A dedicated reading test gives written comprehension enough focus to reveal that difference.",
    },
    { type: "heading", id: "vs-readability", text: "Reading Level vs. Text Readability" },
    {
      type: "paragraph",
      text: "This distinction matters. A Reading Level Test assesses the reader. A readability calculator assesses the text — formulas such as Flesch-Kincaid estimate text difficulty using features such as sentence and word length, but they do not know whether a particular person understands the passage. Someone searching to check their own reading comprehension wants a learner self-assessment, not a difficulty score for a document.",
    },
    { type: "heading", id: "vocabulary-not-everything", text: "Vocabulary Matters — but It Is Not Everything" },
    {
      type: "paragraph",
      text: "You cannot understand a text if too many key words are unknown, but reading comprehension involves more than vocabulary size — you also need grammar, reference, sentence relationships, discourse structure, and inference. A learner may know every individual word and still misunderstand what the writer is arguing. That is why this test asks about your comfort across a range of reading situations rather than only vocabulary recognition.",
    },
    { type: "heading", id: "literal-vs-inferential", text: "Literal vs. Inferential Comprehension" },
    {
      type: "paragraph",
      text: "Literal questions ask about information directly present in the text, such as what time a train left. Inferential questions require combining information — if a character arrives soaked, carries a broken umbrella, and complains about the weather, you can infer it was probably raining, even though that is never stated word for word. Higher-level reading requires stronger inferential comprehension, which is why self-assessing your comfort with implied meaning matters as much as reporting on straightforward facts.",
    },
    { type: "heading", id: "what-result-means", text: "What Your Reading Level Result Means" },
    {
      type: "paragraph",
      text: "A1–A2 means you can understand basic to elementary written English but may need more support with longer or less familiar material. B1–B2 means you can read increasingly independently across everyday, study, and general professional topics. C1–C2 means you can handle complex texts, nuanced argument, implication, and advanced vocabulary with increasing flexibility. The result is a self-report estimate based on how you described your own reading habits and confidence — it is not an official language qualification.",
    },
    { type: "heading", id: "why-different-tests-differ", text: "Why Different Reading Tests Give Different Levels" },
    {
      type: "paragraph",
      text: "Tests vary in passage length, vocabulary difficulty, topic familiarity, question type, time limits, scoring thresholds, and CEFR alignment — and a self-report test differs further from a scored passage exam, since it depends on how accurately you judge your own comprehension. Look at which areas you rated lowest: vocabulary, detail, inference, or writer attitude? That information tells you what to practice.",
    },
    { type: "heading", id: "how-to-improve", text: "How to Improve English Reading" },
    {
      type: "paragraph",
      text: "Read slightly above your comfort level, since you need enough challenge to encounter new language without losing the entire message. Read for meaning before looking up words, trying to infer from context first. Summarize the passage afterward, explaining the main idea without looking back. Ask inference questions — what does the writer imply, why is this example included? Read across topics, since news, science, fiction, essays, and instructions use different language patterns. And review errors, since a wrong answer is valuable when you understand why another option is better.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Reading Level Test?", answer: "It is a self-assessment of how well you understand written English at increasing levels of difficulty, based on your own reported habits and comprehension confidence." },
        { question: "Can it estimate my CEFR level?", answer: "It can provide an approximate A1–C2 self-report estimate based on CEFR-style reading descriptors." },
        { question: "Is reading level the same as overall English level?", answer: "No. Overall proficiency also includes listening, speaking, writing, grammar, and other abilities." },
        { question: "Is this the same as a readability test?", answer: "No. A readability test estimates how difficult a text is. A Reading Level Test estimates how well a person understands text." },
        { question: "Why is my reading stronger than my listening?", answer: "Written text stays visible and can be reread, while spoken language disappears in real time." },
        { question: "Can a free online test provide an official CEFR certificate?", answer: "No. An informal online test can estimate a level but should not claim to issue an official qualification." },
      ],
    },
    { type: "heading", text: "Reading Level Is About Meaning" },
    {
      type: "paragraph",
      text: "Reading is not simply pronouncing every word correctly. The real question is: did you understand the message? Can you identify the main point? Find the detail? Follow the argument? Infer what the writer means? Recognize tone? That is what your Reading Level Test should reflect. The A1–C2 label is the summary — comprehension is the skill underneath it.",
    },
  ],
};
