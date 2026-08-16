import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A verbal reasoning test is not really asking \"how many difficult words do you know?\" It is asking something more practical: can you read a piece of information carefully, separate what it says from what you assume, and decide which conclusions are actually supported?",
    },
    {
      type: "paragraph",
      text: "Take this free Verbal Reasoning Test using short passages followed by statements. Read a short text, then decide whether a statement is **True**, **False**, or **Cannot Say** based only on the information provided. That format keeps this page distinct from our [Verbal Analogy Test](/test/verbal-analogy-test), which focuses specifically on word relationships such as bird : nest :: bee : ?",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Verbal Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Read the passage carefully.",
        "Treat the passage as the evidence base for the question.",
        "Do not add facts simply because they seem likely in real life.",
        "Read the statement after the passage.",
        "Choose True, False, or Cannot Say.",
        "Continue through increasingly subtle inference problems.",
        "Review your errors and the exact sentence that supports the answer.",
      ],
    },
    {
      type: "paragraph",
      text: "The best habit is simple: prove the answer from the text. If you cannot prove it, it may belong in **Cannot Say**.",
    },
    { type: "heading", id: "what-is", text: "What Is Verbal Reasoning?" },
    {
      type: "paragraph",
      text: "**Verbal reasoning** is reasoning carried out with language: understanding statements, identifying relationships between ideas, drawing supported inferences, recognizing contradictions, distinguishing certainty from possibility, and evaluating arguments.",
    },
    {
      type: "paragraph",
      text: "Verbal reasoning overlaps with reading comprehension, but it adds a stronger logical decision component. A comprehension question might ask \"what was the main idea?\" A verbal reasoning question may ask \"does this conclusion necessarily follow from the passage?\" That difference matters.",
    },
    { type: "heading", id: "why-passage-based", text: "Why Passage-Based Reasoning Is a Strong Format" },
    {
      type: "paragraph",
      text: "A short passage gives you a fixed evidence set. Example: \"All employees in the research division completed safety training before May. Some employees in the finance division completed the same training in June.\" Statement: \"Every employee in the company completed safety training before May.\" Answer: False — the passage explicitly limits the before-May claim to the research division.",
    },
    {
      type: "paragraph",
      text: "Now consider the statement \"no finance employees completed training before May.\" Answer: Cannot Say — the passage says some completed training in June, but it does not tell us whether others completed it earlier. This is the heart of verbal reasoning: do not turn missing information into a fact.",
    },
    { type: "heading", id: "true-false-cannot-say", text: "True, False, and Cannot Say" },
    {
      type: "paragraph",
      text: "**True** means the statement is directly stated or necessarily follows from the passage. **False** means the passage directly contradicts the statement. **Cannot Say** means the passage does not provide enough information to decide.",
    },
    {
      type: "paragraph",
      text: "\"Cannot Say\" is usually the hardest category. People naturally bring outside knowledge, expectations, and common sense into reading. In a reasoning test, that can create errors — the task is to reason from the supplied evidence, not from everything you know about the world.",
    },
    { type: "heading", id: "necessary-vs-plausible", text: "Necessary Inference vs. Plausible Inference" },
    {
      type: "paragraph",
      text: "Suppose the passage says: \"Leila usually cycles to work. Today, heavy rain began before she left home.\" Statement: \"Leila drove to work today.\" That is plausible — it is not necessary. She might have taken a bus, walked, worked from home, or cycled anyway. The correct answer is Cannot Say. A good verbal reasoning test repeatedly challenges this distinction: likely is not the same as logically supported.",
    },
    { type: "heading", id: "quantifiers", text: "Quantifiers Matter" },
    {
      type: "paragraph",
      text: "Small words can completely change the logic: all, some, none, most, at least one, only, unless. Suppose \"some engineers work remotely.\" You may conclude \"at least one engineer works remotely.\" You may not conclude \"most engineers work remotely,\" and you may not conclude \"some engineers do not work remotely\" — that might be true, but it is not guaranteed by the original sentence. Strong verbal reasoning depends on respecting the exact strength of the language.",
    },
    { type: "heading", id: "only-is-easy-to-reverse", text: "\"Only\" Is Easy to Reverse" },
    {
      type: "paragraph",
      text: "Consider: \"Only managers may approve refunds above $1,000.\" This means that if someone may approve a refund above $1,000, that person must be a manager. It does not mean every manager may approve such refunds — other requirements may also exist. This is a common reasoning error because everyday reading often treats \"only\" loosely.",
    },
    { type: "heading", id: "conditionals", text: "Conditionals in Verbal Reasoning" },
    {
      type: "paragraph",
      text: "Conditional statements appear frequently. Example: \"if a customer has premium status, delivery is free.\" We know Mina has premium status, therefore Mina receives free delivery — that follows. Now suppose we know Omar receives free delivery. Can we conclude he has premium status? No — free delivery might occur for another reason. That would be the classic error of affirming the consequent. Our [Deductive Reasoning Test](/test/deductive-reasoning-test) goes much deeper into formal logic, but conditional language belongs naturally in verbal reasoning when embedded in prose.",
    },
    { type: "heading", id: "contradictions", text: "Contradictions" },
    {
      type: "paragraph",
      text: "Some questions ask whether a statement conflicts with the passage. Passage: \"the museum is closed every Monday. It will open on Tuesday at 9:00 a.m.\" Statement: \"visitors can enter the museum on Monday afternoon.\" Answer: False — the contradiction is direct. Harder contradictions are distributed across multiple sentences, requiring you to combine a rule, an exception, a date, and a category — which adds working-memory demand.",
    },
    { type: "heading", id: "vs-reading-comprehension", text: "Verbal Reasoning vs. Reading Comprehension" },
    {
      type: "paragraph",
      text: "Our [Reading Comprehension Test](/test/reading-comprehension-test) focuses on understanding a passage as a whole — main idea, details, inference, and vocabulary in context. Verbal Reasoning is narrower and more logic-focused, with a recurring question: what follows from these words, and what does not?",
    },
    { type: "heading", id: "vs-verbal-analogy", text: "Verbal Reasoning vs. Verbal Analogy" },
    {
      type: "paragraph",
      text: "Our [Verbal Analogy Test](/test/verbal-analogy-test) focuses on explicit word relationships, like doctor : hospital :: teacher : ? Verbal Reasoning is not filled with analogies — it emphasizes textual evidence, inference, contradiction, quantifiers, and conditional statements. That separation keeps the two tests distinct.",
    },
    { type: "heading", id: "vs-critical-thinking", text: "Verbal Reasoning vs. Critical Thinking" },
    {
      type: "paragraph",
      text: "Our [Critical Thinking Test](/test/critical-thinking-test) is broader — evaluating evidence quality, spotting assumptions, judging arguments, distinguishing correlation from causation, and evaluating explanations. Verbal Reasoning is more constrained: the information is given, and you determine what follows. Critical thinking often asks whether the information itself deserves belief.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Supported Inference** — how often valid conclusions were accepted.",
        "**Contradiction Detection** — how often unsupported or contradicted claims were rejected.",
        "**Cannot-Say Accuracy** — ability to recognize insufficient evidence.",
        "**Quantifier Questions** — performance on all/some/none/only relationships.",
        "**Conditional Questions** — performance on if–then reasoning.",
      ],
    },
    { type: "heading", id: "common-errors", text: "Common Errors" },
    {
      type: "list",
      items: [
        "**Adding Outside Information** — using facts not contained in the passage.",
        "**Confusing \"Some\" With \"All\"** — strengthening a limited statement.",
        "**Treating Possibility as Certainty** — a conclusion could be true, but does not have to be.",
        "**Reversing a Conditional** — assuming Q implies P because P implies Q.",
        "**Missing a Negation** — overlooking words such as not, never, except.",
        "**Reading Too Fast** — selecting an answer that matches the topic but not the logic.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Verbal Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal benchmark for a custom browser test. Performance depends on passage difficulty, language proficiency, time limit, item format, and question balance — this page does not borrow cutoffs from a recruitment test published by another company.",
    },
    { type: "heading", id: "can-improve", text: "Can Verbal Reasoning Improve?" },
    {
      type: "paragraph",
      text: "Yes. You can become better at reading precisely, identifying quantifiers, separating evidence from assumption, testing conclusions, and recognizing logical direction. Practice may improve both reasoning strategy and familiarity with the format.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Verbal Reasoning Test?",
          answer: "A test of how accurately you can understand written information and determine what conclusions are supported by it.",
        },
        {
          question: "Is verbal reasoning just vocabulary?",
          answer: "No. Vocabulary matters, but the core task is reasoning with meaning and relationships expressed in language.",
        },
        {
          question: "What does Cannot Say mean?",
          answer: "The passage does not provide enough information to determine whether the statement is true or false.",
        },
        {
          question: "Should I use my real-world knowledge?",
          answer: "Only when the question explicitly requires it. In passage-based reasoning, use the passage as the evidence base.",
        },
        {
          question: "Is verbal reasoning the same as reading comprehension?",
          answer: "They overlap, but verbal reasoning places more emphasis on logical inference and evidence-supported conclusions.",
        },
        {
          question: "Is it the same as verbal analogy?",
          answer: "No. Verbal analogy focuses on relationships between words or concepts; this page focuses on reasoning from written statements and passages.",
        },
        {
          question: "Can practice help?",
          answer: "Yes. Precision with quantifiers, conditionals, and evidence can improve with practice.",
        },
      ],
    },
    { type: "heading", text: "Read What Is There — Not What You Expect to Be There" },
    {
      type: "paragraph",
      text: "The hardest verbal reasoning questions often use perfectly ordinary words. The difficulty comes from restraint — you have to resist adding the sentence you expected, resist strengthening \"some\" into \"all,\" and resist turning \"possible\" into \"certain.\" The strongest verbal reasoners do not merely read quickly. They know exactly how much the text allows them to conclude — and where the evidence stops.",
    },
  ],
};
