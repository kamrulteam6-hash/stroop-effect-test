import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you discover the hidden visual rule and determine what belongs in the missing space? Take this free **Pattern Completion Test** using original matrix and sequence puzzles. Each item contains a visual structure with one missing element, and your job is to choose the answer that best completes the pattern.",
    },
    {
      type: "paragraph",
      text: "The puzzles can involve shape changes, count, position, rotation, symmetry, addition or subtraction of features, alternating rules, and row-and-column relationships. The challenge is not simply spotting what \"looks right.\" It is identifying the rule that makes the entire structure consistent.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Pattern Completion Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Inspect the complete parts of the pattern.",
        "Compare items across rows and columns.",
        "Identify which visual features change.",
        "Test one possible rule at a time.",
        "Use the same rule on the missing position.",
        "Eliminate answers that violate any part of the structure.",
        "Choose the option that completes the pattern.",
        "Review the rule explanation after answering.",
      ],
    },
    { type: "paragraph", text: "Do not rely only on visual similarity. The correct option should follow a reproducible relationship." },
    { type: "heading", text: "What Is Pattern Completion?" },
    {
      type: "paragraph",
      text: "Pattern completion in nonverbal reasoning means inferring missing information from the visual relationships among known elements. A simple sequence might be circle, square, circle, square, and the answer is circle because the rule alternates. More difficult matrix problems may combine several dimensions simultaneously — for example, shape rotates across a row, dot count increases down a column, and fill alternates diagonally. The missing item must satisfy all relevant rules.",
    },
    { type: "heading", text: "Sequence Completion vs. Matrix Completion" },
    {
      type: "paragraph",
      text: "In a visual sequence, items appear in one ordered line and the solver asks what comes next. In matrix completion, items appear in a grid, often 2×2 or 3×3, and the solver asks what belongs in the missing cell. Matrix problems can contain multiple simultaneous relationships across rows and columns. Both formats appear on this page, but matrix completion forms the advanced core of the test.",
    },
    { type: "heading", text: "Matrix Completion and Relational Reasoning" },
    {
      type: "paragraph",
      text: "Matrix-completion tasks are widely used to study relational reasoning. The solver must represent relationships among visual elements and apply those relationships to an incomplete location. Eye-tracking research on matrix completion shows that successful reasoning depends not only on seeing individual shapes but also on adopting effective strategies for comparing elements across the matrix. Children and adults differ in how systematically they inspect rows, columns, and answer alternatives, which supports presenting Pattern Completion as a reasoning task rather than a simple visual-memory test.",
    },
    { type: "heading", text: "Raven's Progressive Matrices and This Test" },
    {
      type: "paragraph",
      text: "Raven's Progressive Matrices are among the most famous standardized matrix-reasoning assessments, using abstract figures and missing matrix elements to assess nonverbal reasoning. However, Raven's tests are standardized commercial assessments currently sold by Pearson. Your browser test uses original graphics, original rules, and original item generation, avoiding Raven's items and norms and never presenting the tool as an official Raven's test. Matrix completion has a long history in nonverbal reasoning that can be explained without reproducing proprietary material.",
    },
    { type: "heading", text: "What Makes a Good Pattern Rule?" },
    {
      type: "paragraph",
      text: "A strong item has a clear rule, enough evidence to infer the rule, one uniquely correct answer, plausible distractors, and no dependence on arbitrary artistic interpretation. A bad item might show three unrelated abstract drawings with one missing and no consistent relationship. A good item might have a feature count that increases by one across each row, with the missing cell's count logically determined. The goal is reasoning, not guessing what the designer imagined.",
    },
    { type: "heading", text: "Common Rule Types: Rotation and Number" },
    {
      type: "paragraph",
      text: "An arrow that points up, right, down, and then a missing position follows a 90-degree clockwise rotation rule, so the answer is left. Harder items can rotate an outer shape, an inner mark, or both at different rates. Because your site already has [Mental Rotation Test](/test/mental-rotation-test), pattern items use rotation as one rule among several rather than turning this test into another object-matching task. The number of elements may also change systematically — a row of 1, 2, 3 dots followed by a next row of 2, 3, and a missing value implies 4 dots. Count rules are easy to verify, but advanced puzzles combine count with another feature so users cannot solve every item through arithmetic alone.",
    },
    { type: "heading", text: "Common Rule Types: Position and Feature Combination" },
    {
      type: "paragraph",
      text: "A dot may move clockwise around corners, one step horizontally, alternate top/bottom, or follow a fixed path — the missing item is determined by where the moving feature should go next. Position rules are a natural bridge between visual reasoning and spatial reasoning, though the pattern itself should remain visible so the task is not primarily a working-memory test. Two cells can also combine to produce a third — for example, cell A contains a circle, cell B contains a vertical line, and cell C contains circle plus vertical line, with the same combination rule applying in another row. Other operations can include union, subtraction, intersection, and exclusive features, making matrix items genuinely relational.",
    },
    { type: "heading", text: "Alternation and Multiple Simultaneous Rules" },
    {
      type: "paragraph",
      text: "A simple rule can alternate filled, empty, filled, empty; advanced patterns can alternate across rows, columns, or diagonals, with the difficulty coming from determining which spatial direction carries the rule. A good explanation after the answer should show the alternation visually. Hard matrix problems often require two or more transformations at once — for example, shape rotates 90° across columns while dot count increases by one down rows, and the missing cell must satisfy both. This kind of relational integration is central to difficult matrix reasoning, but item difficulty should increase gradually, since starting with three simultaneous rules produces unnecessary frustration.",
    },
    { type: "heading", text: "Distractor Design" },
    {
      type: "paragraph",
      text: "Wrong answers should correspond to plausible errors — a single-rule distractor follows the rotation rule but ignores dot count; a wrong-direction distractor rotates counterclockwise instead of clockwise; a carry-forward distractor repeats the previous cell; an over-combination distractor includes all features instead of applying cancellation; a near-miss distractor has only one small feature incorrect. These distractors make the result diagnostically useful.",
    },
    { type: "heading", text: "Pattern Completion vs. Pattern IQ Test" },
    {
      type: "paragraph",
      text: "Your existing [Pattern IQ Test](/test/pattern-iq-test) may already use a general mixture of visual pattern puzzles. To keep this page distinct, it is specifically about missing-piece completion inside visual sequences and matrices, emphasizing rule extraction, incomplete structures, and matrix completion. The score is not converted into IQ unless the exact test has been properly standardized and validated.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include overall accuracy (percent correct), single-rule accuracy (performance on one-transformation items), multi-rule accuracy (performance when several relations must be integrated), rule-type accuracy (rotation, count, position, combination, alternation), median correct time (typical solving speed), and common distractor type (which reasoning error occurred most often). Subscores require enough items in each category.",
    },
    { type: "heading", text: "Difficulty Progression and Original Procedural Generation" },
    {
      type: "paragraph",
      text: "A strong sequence might be: level 1, single alternation or count rule; level 2, position and simple rotation; level 3, row/column matrix relations; level 4, feature combination; level 5, two or three simultaneous rules. The test should become harder because the relational structure becomes more complex, not because the artwork becomes visually cluttered. Pattern Completion is ideal for programmatic item generation — define visual attributes such as shape, count, fill, orientation, position, and inner symbol, then define rule operators. The system can generate a complete matrix, remove one cell, calculate the correct answer, and generate distractors from known error rules, producing a large original item bank and reducing memorization.",
    },
    { type: "heading", text: "What Is a Good Pattern Completion Score?" },
    {
      type: "paragraph",
      text: "There is no universal benchmark for a custom generated test. Performance depends on number of answer choices, rule complexity, time limit, item type, and familiarity. Do not use Raven's percentile tables or another commercial test's norms — if your site later collects enough responses, calibrate difficulty and generate same-version percentiles.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Pattern Completion Test?", answer: "A visual reasoning task where you infer the rule governing a sequence or matrix and choose the missing element." },
        { question: "Is this the same as Raven's Progressive Matrices?", answer: "No. Raven's is a standardized commercial assessment. This uses original independently generated items." },
        { question: "What kinds of rules can appear?", answer: "Rotation, number, position, alternation, symmetry, feature combination, and multi-rule relationships." },
        { question: "Is it an IQ test?", answer: "Not by itself. Matrix reasoning can relate to broader cognitive ability, but a custom browser task does not automatically produce a valid IQ estimate." },
        { question: "Why are some answer choices almost correct?", answer: "Good distractors follow one part of the rule while violating another." },
        { question: "Should I inspect rows or columns first?", answer: "Check both. Many matrix items contain relationships in more than one direction." },
        { question: "Can practice improve performance?", answer: "Yes. Strategy and familiarity with rule types can improve performance." },
      ],
    },
    {
      type: "paragraph",
      text: "The missing picture is not the real problem. The real problem is the relationship among the pictures that remain. Once you identify what changes, what stays constant, and how rows and columns relate, the missing element stops being a guess. It becomes the only option that satisfies the rule.",
    },
  ],
};
