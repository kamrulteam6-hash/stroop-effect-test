import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How well can you understand, connect, and reason from what you read? Take this free **Reading Comprehension Test** using short fiction and nonfiction passages followed by questions about meaning. The test goes beyond remembering isolated facts — some questions ask what the passage directly states, while others require you to combine information, infer an unstated conclusion, identify the main idea, or interpret a word from context.",
    },
    {
      type: "paragraph",
      text: "Unlike the [Reading Speed Test](/test/reading-speed-test), this page focuses primarily on **understanding**, not words per minute.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Reading Comprehension Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read each passage carefully.",
        "Do not search online for background information.",
        "Answer the questions using the passage as your main evidence.",
        "Distinguish what the author states from what you already know.",
        "Complete literal, inferential, main-idea, and vocabulary-in-context items.",
        "Review your accuracy by question type.",
        "Read the explanations after submitting your answers.",
      ],
    },
    { type: "paragraph", text: "If the test hides the passage during questions, remember that this increases memory demands. If the passage remains visible, the test focuses more directly on comprehension and evidence use." },
    { type: "heading", text: "What Is Reading Comprehension?" },
    {
      type: "paragraph",
      text: "Reading comprehension is the construction of meaning from written text. Successful comprehension requires more than pronouncing or recognizing the words — a reader must connect word meanings, sentence structure, references between sentences, ideas across the passage, relevant background knowledge, and implied relationships. The result is a mental representation of what the text means, which is why someone can read every word aloud correctly yet still fail to explain the passage. Word recognition is necessary, but comprehension is a broader process.",
    },
    { type: "heading", text: "Reading Is Not Just Fact Retrieval" },
    {
      type: "paragraph",
      text: "Consider: \"Maya took an umbrella before leaving. Dark clouds had gathered over the city.\" The passage never says \"Maya expected rain,\" yet that is a reasonable inference. Comprehension involves building connections that make the text coherent, so a strong test should contain more than questions whose answers can be copied word-for-word from one sentence. Research on reading comprehension treats inference generation and comprehension monitoring as central processes in building a coherent representation of text.",
    },
    { type: "heading", text: "Literal and Inferential Comprehension" },
    {
      type: "paragraph",
      text: "A literal question asks about information explicitly stated — for the passage \"the train left at 7:15 and arrived in Boston three hours later,\" the question \"what time did the train leave?\" has the answer 7:15. Literal questions test whether the reader encoded and can locate stated information, but a test made entirely of literal questions may overestimate deeper understanding. An inferential question requires information from the text to be combined with reasoning — for example, \"Lena entered the kitchen and saw water covering the floor. The freezer door was open and the ice tray was empty,\" followed by \"what most likely caused the water?\" The answer is not given as one exact sentence; the reader must connect the clues, testing whether they have built a coherent representation rather than memorized isolated phrases.",
    },
    { type: "heading", text: "Local vs. Global Inferences" },
    {
      type: "paragraph",
      text: "A local inference connects information across nearby sentences — for example, \"Ben dropped the glass. A moment later, he swept the floor\" leads you to infer the glass probably broke. A global inference requires combining information distributed across a larger part of the passage, such as several paragraphs that reveal a character's motives indirectly, which the reader must integrate to identify the most likely reason for the character's final action. A balanced test can include both types.",
    },
    { type: "heading", text: "Main Idea and Supporting Details" },
    {
      type: "paragraph",
      text: "The main idea is the central point the passage develops. A main-idea question should not simply ask which sentence appeared first — it asks what the passage is mainly about or trying to explain. Good distractors often include a true but minor detail, an idea mentioned briefly, an overgeneralization, or a statement that goes beyond the text, which makes main-idea questions useful for distinguishing central understanding from memory for details. Details matter because they support claims, explanations, examples, and narrative events, so a good comprehension test can ask which detail best supports the author's conclusion — more demanding than asking which number appeared in paragraph two, since the user must understand the relationship between evidence and the larger argument.",
    },
    { type: "heading", text: "Vocabulary in Context" },
    {
      type: "paragraph",
      text: "Words can have multiple meanings — in \"the committee reached a sound decision,\" sound means reliable or well-founded, not something heard by the ears. A vocabulary-in-context question tests whether the reader can use the surrounding sentence and passage to identify the intended meaning. This differs from your [Synonym Test](/test/synonym-test), which primarily measures vocabulary knowledge through isolated or lightly contextualized words.",
    },
    { type: "heading", text: "Comprehension Monitoring" },
    {
      type: "paragraph",
      text: "Strong readers do not merely build meaning — they also detect when meaning stops making sense, called comprehension monitoring. Suppose a passage says \"the turtle climbed out of the aquarium. The small mammal crossed the floor.\" A careful reader may notice that \"mammal\" conflicts with the earlier reference to a turtle. Research using reading-time and eye-movement measures has studied how readers detect inconsistencies and revise their interpretation. A browser test can include a few contradiction-detection items without turning the entire test into proofreading.",
    },
    { type: "heading", text: "Vocabulary and Comprehension" },
    {
      type: "paragraph",
      text: "Vocabulary knowledge strongly contributes to comprehension — if too many words are unfamiliar, the reader cannot easily build a coherent message. But comprehension is not reducible to vocabulary; a user may know every word individually yet misunderstand syntax, causal relationships, argument structure, or implied meaning. This is why the Synonym Test and Reading Comprehension Test remain separate.",
    },
    { type: "heading", text: "Working Memory" },
    {
      type: "paragraph",
      text: "Reading involves maintaining information while new sentences arrive — you may need to remember who performed an earlier action, what a pronoun refers to, the first half of a comparison, or evidence supporting a later conclusion. Working memory therefore contributes to comprehension, but a test can accidentally exaggerate that contribution if it removes the passage before questions. If the goal is reading comprehension rather than delayed passage recall, allowing users to refer back to the text is preferable unless memory is intentionally part of the design.",
    },
    { type: "heading", text: "Fiction vs. Nonfiction" },
    {
      type: "paragraph",
      text: "Narrative and informational passages place different demands on readers. Fiction often requires tracking characters, motives, events, and perspective, while nonfiction often requires tracking concepts, evidence, definitions, and causal explanations. Research shows that text genre can materially affect comprehension performance, so a robust test can include both and report narrative comprehension and informational comprehension separately rather than assuming one passage type represents all reading.",
    },
    { type: "heading", text: "Reading Comprehension vs. Reading Speed" },
    {
      type: "paragraph",
      text: "The [Reading Speed Test](/test/reading-speed-test) asks how quickly you can process a passage while retaining acceptable understanding. This test asks how accurately you can understand and reason from text. A comprehension check is necessary on the speed page to prevent meaningless WPM scores, but this page goes much deeper into inference, main idea, reference, evidence, and vocabulary in context — that keeps the two pages distinct.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "A useful result can include overall accuracy (percent of questions correct), literal accuracy (directly stated information), inferential accuracy (information that must be logically connected), main-idea accuracy (understanding of the central point), vocabulary-in-context accuracy (word meaning from surrounding text), and a narrative vs. informational breakdown (performance by genre). Avoid creating subscales with only one or two items — enough questions are needed before category scores become stable.",
    },
    { type: "heading", text: "What Is a Good Reading Comprehension Score?" },
    {
      type: "paragraph",
      text: "There is no universal percentage for an original browser test. A score depends on passage difficulty, vocabulary, question quality, genre, time limits, and whether the passage remains visible. Do not borrow grade-level or clinical cutoffs from a standardized test and apply them to custom passages. If your site later collects a large same-version sample, it can create its own transparent norms.",
    },
    { type: "heading", text: "Can This Diagnose Dyslexia?" },
    {
      type: "paragraph",
      text: "No. Dyslexia primarily involves difficulties with accurate or fluent word reading and spelling, although comprehension can also be affected. A full literacy assessment may consider decoding, phonological processing, reading fluency, vocabulary, comprehension, spelling, and developmental history. One online passage test cannot diagnose or rule out dyslexia or another reading disorder.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does reading comprehension mean?", answer: "Understanding and constructing meaning from written text." },
        { question: "What is a literal question?", answer: "A question whose answer is directly stated in the passage." },
        { question: "What is an inferential question?", answer: "A question requiring the reader to combine clues or draw a conclusion not stated verbatim." },
        { question: "Why test the main idea?", answer: "It reveals whether the reader understood the passage's central message rather than only remembering isolated details." },
        { question: "Should the passage remain visible during questions?", answer: "If the goal is comprehension rather than memory, allowing rereading reduces unnecessary memory demands." },
        { question: "Is reading comprehension the same as vocabulary?", answer: "No. Vocabulary contributes to comprehension, but comprehension also requires syntax, inference, integration, and monitoring." },
        { question: "Can this diagnose a reading disorder?", answer: "No. It is an online reading-performance task." },
      ],
    },
    {
      type: "paragraph",
      text: "Reading comprehension is not a hunt for matching words. The reader has to decide what was stated, what was implied, which details matter, and how the ideas fit together. A strong comprehension test measures that construction of meaning — not merely whether the eyes reached the final sentence.",
    },
  ],
};
