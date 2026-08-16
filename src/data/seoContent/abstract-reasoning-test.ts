import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Abstract reasoning begins where memorized facts stop helping. You are shown unfamiliar shapes, symbols, or patterns and asked: what rule connects these?",
    },
    {
      type: "paragraph",
      text: "Take this free Abstract Reasoning Test using original nonverbal problems involving sequences, matrices, classification, rotation, position, number, feature combination, and multiple simultaneous rules. The puzzles use very little language — the challenge is to discover relationships among visual elements and apply them consistently.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Abstract Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Inspect the complete visual information before looking for an answer.",
        "Identify which features change and which stay constant.",
        "Check shape, number, fill, position, orientation, and size.",
        "Test a simple rule first.",
        "Check whether that rule works across the entire item.",
        "If necessary, test a second simultaneous rule.",
        "Eliminate answers that satisfy only part of the structure.",
        "Choose the option that fits all relevant relationships.",
      ],
    },
    {
      type: "paragraph",
      text: "A good abstract reasoning item has a rule you can state after solving it. It should not depend on guessing what picture \"feels right.\"",
    },
    { type: "heading", id: "what-is", text: "What Is Abstract Reasoning?" },
    {
      type: "paragraph",
      text: "**Abstract reasoning** is the ability to identify relationships and solve problems using information that is not tied closely to familiar real-world knowledge. Instead of asking \"what is the capital of France?\" an abstract item might show triangle → square → pentagon → ? and require you to infer a progression.",
    },
    {
      type: "paragraph",
      text: "Psychological research commonly links abstract nonverbal reasoning with **fluid intelligence** — the ability to solve novel problems without depending mainly on previously acquired knowledge. But abstract reasoning is not identical to intelligence as a whole; language, memory, processing speed, knowledge, and other abilities also contribute to broader cognitive performance.",
    },
    { type: "heading", id: "why-nonverbal", text: "Why Nonverbal Problems Are Useful" },
    {
      type: "paragraph",
      text: "Language-based tests can be influenced by vocabulary, reading skill, education, and second-language status. Abstract visual problems reduce some of those demands. That does not make them completely \"culture free\" — people still differ in test familiarity, educational experience, interpretation of visual conventions, and strategy. The more accurate description is less language-dependent, not culture-free.",
    },
    { type: "heading", id: "progressive-matrices", text: "Progressive Matrices and Abstract Reasoning" },
    {
      type: "paragraph",
      text: "Matrix-completion problems are among the best-known abstract reasoning formats. A grid contains visual elements arranged by one or more rules, with one cell missing — you select the element that completes the relationships. Classic research by Carpenter, Just, and Shell analyzed how people solve progressive matrices and showed that performance depends heavily on discovering abstract relations and managing multiple rules. Harder items should not merely add visual clutter — they should increase the complexity of the relationships that must be represented and integrated.",
    },
    { type: "heading", id: "sequence-problems", text: "Sequence Problems" },
    {
      type: "paragraph",
      text: "A sequence presents elements in one direction. Example: ▲ → ▶ → ▼ → ? The triangle rotates 90 degrees clockwise, so the answer is ◀. This is a one-rule item. Harder sequences can contain position changes, alternating fills, increasing counts, or two interleaved sequences.",
    },
    { type: "heading", id: "matrix-problems", text: "Matrix Problems" },
    {
      type: "paragraph",
      text: "A matrix allows relationships across rows, columns, and sometimes diagonals. For example, shape count might increase across each row while fill changes down each column — the missing cell must satisfy both. Matrix items require relational integration: you cannot simply continue one visual sequence, you must determine which relationships apply in different directions.",
    },
    { type: "heading", id: "rule-rotation", text: "Rule Type: Rotation" },
    {
      type: "paragraph",
      text: "A figure can rotate by a fixed amount — 45, 90, or 180 degrees. The important distinction is between rotation and reflection: a reflected shape reverses handedness, while a rotated shape does not. Our [Mirror Image Test](/test/mirror-image-test) measures reflection more deeply — Abstract Reasoning uses it only as one possible rule.",
    },
    { type: "heading", id: "rule-number", text: "Rule Type: Number" },
    {
      type: "paragraph",
      text: "The number of elements may increase, decrease, alternate, or combine — for example, 1 dot → 2 dots → 3 dots, or a harder rule where the third cell equals the sum of feature counts in the first two. Numerical relationships inside abstract images are common because they require reasoning without written arithmetic.",
    },
    { type: "heading", id: "rule-feature-combination", text: "Rule Type: Feature Combination" },
    {
      type: "paragraph",
      text: "Two cells can combine into a third — cell 1 is a circle, cell 2 is a vertical line, cell 3 is a circle plus a vertical line. More complex items can use union, subtraction, intersection, or cancellation. The transformation must remain visually consistent across the item.",
    },
    { type: "heading", id: "one-vs-several-rules", text: "One Rule vs. Several Rules" },
    {
      type: "paragraph",
      text: "This is one of the best ways to create real difficulty. An easy item changes one property; a medium item changes two properties independently; a hard item requires integrating several relationships across a matrix. Research on fluid and relational reasoning repeatedly shows that complexity increases when multiple relations must be held and coordinated.",
    },
    { type: "heading", id: "relational-integration", text: "Relational Integration" },
    {
      type: "paragraph",
      text: "**Relational integration** means combining several relationships into one coherent representation — shape changes across rows, number changes down columns, and fill alternates diagonally, all at once. Research has found strong relationships between relational-integration tasks and fluid reasoning, which helps explain why difficult abstract problems can feel mentally \"full\": you are maintaining several transformations at once.",
    },
    { type: "heading", id: "start-with-attributes", text: "Start With Attributes" },
    {
      type: "paragraph",
      text: "A practical solving method is to list possible attributes mentally — shape, count, fill, position, orientation, size, and line style — then ask what changes and what stays constant. This prevents a common mistake: staring at the whole pattern and waiting for inspiration. Abstract reasoning often becomes easier once a complex display is decomposed into simpler dimensions.",
    },
    { type: "heading", id: "segment-the-problem", text: "Segment the Problem" },
    {
      type: "paragraph",
      text: "Research on fluid reasoning has shown that helping people segment complex matrix problems into smaller components can substantially improve performance. Instead of solving the whole matrix at once, solve orientation, then count, then fill, and combine the answers — especially helpful when an item contains multiple rules.",
    },
    { type: "heading", id: "vs-pattern-completion", text: "Abstract Reasoning vs. Pattern Completion" },
    {
      type: "paragraph",
      text: "Our [Pattern Completion Test](/test/pattern-completion-test) is specifically about identifying the missing element in sequences or matrices. Abstract Reasoning is broader — it includes classification, same-rule grouping, sequence inference, transformations, and matrix completion. Pattern Completion is one format inside abstract reasoning, so this test uses a mixed nonverbal battery rather than only missing-piece matrices.",
    },
    { type: "heading", id: "vs-inductive", text: "Abstract Reasoning vs. Inductive Reasoning" },
    {
      type: "paragraph",
      text: "Our [Inductive Reasoning Test](/test/inductive-reasoning-test) makes the inference process explicit: observe examples → infer a rule → apply it to a new case. Abstract Reasoning is a broader nonverbal aptitude test — many abstract items require induction, but some also require spatial transformation, relation integration, or rule combination. The two concepts overlap, but the test experiences are not identical.",
    },
    { type: "heading", id: "vs-diagrammatic", text: "Abstract Reasoning vs. Diagrammatic Reasoning" },
    {
      type: "paragraph",
      text: "Our [Diagrammatic Reasoning Test](/test/diagrammatic-reasoning-test) focuses on visual processes — input shape → operator box → output shape, where you determine what each operator does. Abstract Reasoning more often asks for the underlying relation among a set of visual elements. Diagrammatic asks what transformation an operator performs; Abstract asks what rule organizes these patterns.",
    },
    { type: "heading", id: "original-items", text: "Original Items Are Essential" },
    {
      type: "paragraph",
      text: "Progressive matrices and other commercial reasoning tests can contain copyrighted or proprietary material, so this test uses original generated puzzles. A procedural system defines attributes such as shape type, fill, number, orientation, and position, then applies known rule operators — providing unlimited item variation, exact answer keys, repeatability, and easier difficulty calibration.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Sequence Reasoning** — rule discovery across ordered items.",
        "**Matrix Reasoning** — multi-directional relationships.",
        "**Rotation and Orientation** — transformation accuracy.",
        "**Number and Count Rules** — quantitative visual relationships.",
        "**Feature Combination** — union, subtraction, or cancellation rules.",
        "**Multi-Rule Accuracy** — performance when several relationships must be integrated.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Abstract Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom test. Performance depends on item complexity, number of options, time limit, familiarity, and rule types — raw accuracy is not converted into IQ using norms from another matrix test.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is abstract reasoning?",
          answer: "The ability to discover and apply relationships in unfamiliar information, often using nonverbal patterns or symbols.",
        },
        {
          question: "Is abstract reasoning the same as IQ?",
          answer: "No. It contributes to fluid intelligence and broader cognitive ability, but intelligence includes more than abstract visual reasoning.",
        },
        {
          question: "Are abstract reasoning tests culture free?",
          answer: "No. They reduce language demands but can still be influenced by education, experience, strategy, and familiarity with test conventions.",
        },
        {
          question: "Are matrices the only abstract reasoning format?",
          answer: "No. Sequences, classification, analogies, and transformation problems can also measure abstract reasoning.",
        },
        {
          question: "Why do hard problems feel so demanding?",
          answer: "They often require several relationships to be represented and integrated at the same time.",
        },
        {
          question: "Can practice improve my score?",
          answer: "Yes, especially through better strategy and familiarity with common rule types.",
        },
        {
          question: "Is this the same as Pattern Completion?",
          answer: "Pattern completion is one important abstract reasoning format, but the broader test can include several kinds of nonverbal rule problems.",
        },
      ],
    },
    { type: "heading", text: "Stop Looking for the Picture — Start Looking for the Rule" },
    {
      type: "paragraph",
      text: "Abstract reasoning gets easier when the display stops being one complicated image. Break it apart. Ask what happened to the shape, what happened to the count, what happened to the position — then reconnect those answers. The correct option is not the one that looks most familiar. It is the one that obeys the hidden structure.",
    },
  ],
};
