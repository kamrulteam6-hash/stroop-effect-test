import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you solve a reasoning problem when the words are removed? Take this free Non-Verbal Reasoning Test using visual problems built from shapes, positions, transformations, quantities, and relationships.",
    },
    {
      type: "paragraph",
      text: "The test uses several formats rather than becoming another page made entirely of matrices — visual analogies, figure classification, matrix reasoning, shape sequences, spatial relationships, and transformation problems. The common feature is that the reasoning is expressed mainly through pictures and symbols instead of language.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Non-Verbal Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Study the visual relationship before looking at the answer choices.",
        "Identify what changes and what remains constant.",
        "Compare shape, position, number, orientation, size, and fill.",
        "Test the simplest plausible rule.",
        "Check whether that rule explains every relevant part of the item.",
        "Eliminate options that match only superficially.",
        "Choose the answer that preserves the full relationship.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not choose an option merely because it resembles the figures already shown. The correct answer should preserve the underlying relationship.",
    },
    { type: "heading", id: "what-is", text: "What Is Non-Verbal Reasoning?" },
    {
      type: "paragraph",
      text: "**Non-verbal reasoning** is reasoning that relies primarily on visual, spatial, or symbolic information rather than written or spoken language. A question may ask you to identify which figure completes a relationship, determine which shape does not belong, infer a transformation, complete a visual matrix, or compare positions or orientations.",
    },
    {
      type: "paragraph",
      text: "Because the task uses limited language, it can reduce the influence of vocabulary and reading ability. That does not make it completely culture-free or education-free — experience with puzzles, diagrams, schooling, test conventions, and visual strategies can still affect performance. The most accurate description is language-light reasoning, not \"pure intelligence without culture.\"",
    },
    { type: "heading", id: "why-used", text: "Why Non-Verbal Reasoning Is Used" },
    {
      type: "paragraph",
      text: "Non-verbal reasoning tasks are common in cognitive, educational, and aptitude assessment because they provide a way to examine novel problem solving with relatively little verbal demand. Matrix reasoning in particular has a long history as a measure of non-verbal fluid reasoning — a 2019 validation study of a mobile matrix-reasoning task described matrix problems as a long-established way to estimate non-verbal fluid intelligence. But one matrix format does not represent every kind of non-verbal reasoning.",
    },
    { type: "heading", id: "fluid-intelligence", text: "Non-Verbal Reasoning and Fluid Intelligence" },
    {
      type: "paragraph",
      text: "**Fluid reasoning** refers broadly to solving new problems without relying mainly on previously memorized knowledge. Non-verbal reasoning tasks often tap this ability because you have to discover a relationship inside the problem — no amount of memorized geography can supply the answer when unfamiliar symbols change according to an unstated rule. You have to reason from the structure. However, a Non-Verbal Reasoning score should not automatically be converted into a full IQ score — fluid reasoning is only one part of broader cognitive ability.",
    },
    { type: "heading", id: "visual-analogy", text: "Visual Analogy" },
    {
      type: "paragraph",
      text: "A visual analogy has the structure A is to B as C is to ? For example, an outline triangle pointing up becomes a filled triangle pointing right — the relationship is rotate 90° clockwise and change outline to filled. Applying both transformations to an outline square pointing up gives a filled square pointing right. The important skill is mapping the relationship, not comparing surface similarity.",
    },
    { type: "heading", id: "figure-classification", text: "Figure Classification" },
    {
      type: "paragraph",
      text: "A classification item shows several figures and asks which one belongs to the same group, does not belong, or follows the same rule. If three figures contain exactly two black shapes and one white shape, and a fourth contains one black shape and two white shapes, the fourth is the odd one out. Our [Odd One Out Test](/test/odd-one-out-test) specializes in exception detection, so this page uses classification as only one section of a broader battery.",
    },
    { type: "heading", id: "matrix-reasoning", text: "Matrix Reasoning" },
    {
      type: "paragraph",
      text: "A matrix arranges figures in rows and columns, with one cell missing — you infer the relationship and choose the missing figure. Rules can involve count, orientation, position, shape, feature addition, or feature subtraction. Matrix reasoning is useful because difficult items require relational integration, coordinating several relationships at the same time, and research on fluid reasoning has repeatedly linked matrix performance with the ability to represent and integrate relations.",
    },
    { type: "heading", id: "visual-sequences", text: "Visual Sequences" },
    {
      type: "paragraph",
      text: "A sequence presents a changing pattern in order — if a figure rotates 90° clockwise each step, up → right → down → the answer is left. More difficult sequences can contain two simultaneous rules, like orientation rotating every step while fill alternates black and white. Because our [Abstract Reasoning Test](/test/abstract-reasoning-test) already emphasizes hidden visual rules, sequence items do not dominate this test.",
    },
    { type: "heading", id: "spatial-relationships", text: "Spatial Relationships" },
    {
      type: "paragraph",
      text: "Some non-verbal items do not require pattern induction at all. They may ask which object is above another, what viewpoint matches a scene, which pieces could fit together, or how positions change after movement. These tasks help make Non-Verbal Reasoning a genuinely broad umbrella rather than a duplicate of Abstract Reasoning.",
    },
    { type: "heading", id: "same-relationship", text: "Same Relationship, Different Objects" },
    {
      type: "paragraph",
      text: "Strong non-verbal reasoning depends on recognizing a relationship even when the objects change. If a triangle becomes two triangles, then a circle should become two circles — the relevant relation is \"duplicate the object,\" and the fact that one example uses triangles and another uses circles is irrelevant. This ability to separate relation from surface feature is central to abstract reasoning.",
    },
    { type: "heading", id: "relational-complexity", text: "Relational Complexity" },
    {
      type: "paragraph",
      text: "Not all visual problems are equally demanding. A one-rule item may ask you to rotate 90°; a harder item may require rotating, adding one dot, and moving the shape to the opposite corner. Research on analogical and relational reasoning shows that performance declines as relational complexity increases — harder should mean more relationships must be coordinated, not simply that the picture is smaller and messier.",
    },
    { type: "heading", id: "solving-strategy", text: "A Better Solving Strategy" },
    {
      type: "list",
      ordered: true,
      items: [
        "**Identify the format** — sequence, analogy, matrix, or classification?",
        "**List the attributes** — shape, count, position, fill, orientation, size.",
        "**Find what changes** — do not assume every visible feature matters.",
        "**State the rule** — for example, \"each step rotates 90° and alternates fill.\"",
        "**Apply the rule** — choose the answer that satisfies the whole relationship.",
      ],
    },
    { type: "heading", id: "vs-abstract", text: "Non-Verbal Reasoning vs. Abstract Reasoning" },
    {
      type: "paragraph",
      text: "Our [Abstract Reasoning Test](/test/abstract-reasoning-test) focuses specifically on discovering rules in abstract symbols and patterns. Non-Verbal Reasoning is broader — it can include abstract rules, spatial relations, visual analogies, classification, and matrices. Think of Abstract Reasoning as one major subtype inside the broader non-verbal family.",
    },
    { type: "heading", id: "not-culture-free", text: "Non-Verbal Does Not Mean Culture-Free" },
    {
      type: "paragraph",
      text: "Visual tests were historically promoted as less dependent on language and culture. They can indeed reduce vocabulary demands, but research comparing visuospatial reasoning performance across cultural groups shows that substantial differences can remain in strategy, visual processing, education, and familiarity with test forms. This test avoids claims that it measures intelligence without cultural influence — that overstates what a picture-based test can do.",
    },
    { type: "heading", id: "original-items", text: "Original Visual Items" },
    {
      type: "paragraph",
      text: "This test uses original generated stimuli rather than copying Raven's items, Wechsler Matrix Reasoning items, or commercial school-admission questions. A procedural system generates puzzles from controlled attributes — shape, count, fill, orientation — and applies rule operators, providing transparent answer logic and a large repeatable item bank.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Visual Analogy** — relationship mapping.",
        "**Classification** — rule-based grouping.",
        "**Matrix Reasoning** — row/column relational integration.",
        "**Visual Sequence** — ordered transformations.",
        "**Spatial Relations** — position and orientation problems.",
        "**Multi-Rule Accuracy** — performance on complex items.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Non-Verbal Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser test. Performance depends on item formats, rule complexity, time limits, answer choices, and prior familiarity — IQ conversions or percentile tables are not borrowed from a commercial matrix assessment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is non-verbal reasoning?",
          answer: "Reasoning primarily with visual, spatial, or symbolic information rather than language.",
        },
        {
          question: "Is non-verbal reasoning the same as IQ?",
          answer: "No. It is an important component of fluid and general reasoning, but a full IQ assessment samples more than visual reasoning.",
        },
        {
          question: "Are non-verbal tests culture-free?",
          answer: "No. They reduce language demands but can still be influenced by education, culture, strategy, and test familiarity.",
        },
        {
          question: "What types of questions are included?",
          answer: "Visual analogies, classification, matrices, sequences, and spatial relationships.",
        },
        {
          question: "Is it the same as abstract reasoning?",
          answer: "They overlap, but non-verbal reasoning is broader and can include spatial and other visual problem types.",
        },
        {
          question: "Can practice improve my score?",
          answer: "Yes. Strategy and familiarity can materially improve performance.",
        },
        {
          question: "Should I use Raven's norms for this test?",
          answer: "No. An original test needs its own calibration and norms.",
        },
      ],
    },
    { type: "heading", text: "The Picture Is Only the Surface" },
    {
      type: "paragraph",
      text: "A non-verbal reasoning item may contain triangles, arrows, dots, or blocks. Those objects are rarely the real problem. The real problem is the relationship: rotate, combine, separate, move, repeat, classify. Once you stop asking what the picture is and start asking what the picture does, the logic becomes much easier to see.",
    },
  ],
};
