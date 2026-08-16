import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A diagrammatic reasoning problem looks less like a puzzle sequence and more like a small machine. An input enters, one or more visual operators transform it, and an output emerges. Your task is to work out what each operator did.",
    },
    {
      type: "paragraph",
      text: "Take this free Diagrammatic Reasoning Test using original input–operator–output problems involving rotation, reflection, addition, removal, position changes, color or fill changes, repeated transformations, and branching visual processes. You are not simply finding \"the next shape\" — you are reasoning through a visual process.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Diagrammatic Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Identify the input figure.",
        "Follow the arrow to the first operator.",
        "Compare known inputs and outputs to infer what that operator does.",
        "Apply the operator exactly.",
        "Continue through later operators in order.",
        "Track every feature that changes.",
        "Use unchanged features as evidence too.",
        "Choose the correct final output or missing operator.",
      ],
    },
    {
      type: "paragraph",
      text: "The safest strategy is to solve one operator at a time.",
    },
    { type: "heading", id: "what-is", text: "What Is Diagrammatic Reasoning?" },
    {
      type: "paragraph",
      text: "**Diagrammatic reasoning** is reasoning with structured visual representations. In aptitude testing, the term is often used for problems in which symbols, shapes, arrows, and operators represent a logical process. If a black triangle pointing up becomes a black triangle pointing right after passing through Operator A, you may infer that Operator A rotates the figure 90 degrees clockwise — and now you can apply A to a new input. This is diagrammatic because the logical information is expressed through a visual transformation system.",
    },
    { type: "heading", id: "why-diagrams-support", text: "Why Diagrams Can Support Reasoning" },
    {
      type: "paragraph",
      text: "Diagrams are more than decoration. Research on visual representations shows that diagrams can preserve spatial and relational information in ways that support reasoning, making relationships explicit through position, connection, containment, direction, and grouping. Diagrams are useful in science, engineering, mathematics, systems thinking, and process design — a diagrammatic aptitude test turns those representational relationships into formal puzzles.",
    },
    { type: "heading", id: "input-operator-output", text: "The Input–Operator–Output Format" },
    {
      type: "paragraph",
      text: "The clearest browser format is Input → Operator → Output. If an outline circle becomes a filled circle after passing through a black square symbol, you infer the operator changes outline to filled. A harder problem might chain two operators — Input → A → B → Output — requiring you to apply two operators in sequence, introducing procedural reasoning.",
    },
    { type: "heading", id: "operators-must-be-stable", text: "Operators Must Be Stable" },
    {
      type: "paragraph",
      text: "If Operator A means \"rotate 90° clockwise\" in one example, it must mean exactly that in every example within the problem — otherwise the puzzle is ambiguous. A good diagrammatic item gives enough known examples to identify each transformation. The challenge should be discovering and composing the rules, not guessing an inconsistent designer intention.",
    },
    { type: "heading", id: "rotation-operators", text: "Rotation Operators" },
    {
      type: "paragraph",
      text: "A common operator changes orientation — an upward arrow becomes a rightward arrow, meaning the operator rotates 90° clockwise. Applied twice, an upward arrow ends up pointing downward, since two successive 90° rotations equal 180°. Harder problems can combine rotation with another operator, such as fill reversal.",
    },
    { type: "heading", id: "reflection-operators", text: "Reflection Operators" },
    {
      type: "paragraph",
      text: "Reflection is not the same as rotation. A vertical reflection swaps left and right while preserving top and bottom; a horizontal reflection swaps top and bottom while preserving left and right. Asymmetric shapes make the difference visible. Our [Mirror Image Test](/test/mirror-image-test) measures reflection more deeply, but diagrammatic problems can use reflection as one operator in a sequence.",
    },
    { type: "heading", id: "addition-operators", text: "Addition Operators" },
    {
      type: "paragraph",
      text: "An operator may add a feature — a triangle becomes a triangle plus a dot, meaning the rule adds one central dot. Another addition operator might add a border, add a second shape, or add one line to each side. You must determine whether the new feature is fixed, position-dependent, or conditional.",
    },
    { type: "heading", id: "removal-operators", text: "Removal Operators" },
    {
      type: "paragraph",
      text: "Removal is the inverse idea — a circle with two dots becomes a circle with one dot, suggesting the rule removes one dot. A harder rule might remove the leftmost feature, every black feature, or the largest shape. Examples must provide enough evidence to determine which removal rule is intended.",
    },
    { type: "heading", id: "position-operators", text: "Position Operators" },
    {
      type: "paragraph",
      text: "An operator can move a feature — a dot at top-left becomes a dot at top-right, suggesting the rule moves one corner clockwise. Another operator may swap two positions, move all symbols one step right, or reverse object order. Position transformations are especially useful because they require spatial tracking without relying on language.",
    },
    { type: "heading", id: "operator-composition", text: "Operator Composition" },
    {
      type: "paragraph",
      text: "The most important advanced skill is composition. Suppose Operator A rotates 90° clockwise and Operator B changes outline to filled. Starting from an outline triangle pointing up, applying A gives an outline triangle pointing right, and then applying B gives a filled triangle pointing right. The final answer depends on preserving the output of the first transformation before applying the second — which is why working memory contributes to diagrammatic reasoning.",
    },
    { type: "heading", id: "operator-order-matters", text: "Operator Order Matters" },
    {
      type: "paragraph",
      text: "In some systems, \"A then B\" produces a different result from \"B then A.\" If A removes the leftmost object and B reflects left-to-right, reflecting first changes which object becomes leftmost. This is a powerful source of higher difficulty — the test introduces non-commuting operators gradually so you learn that flow direction is part of the logic.",
    },
    { type: "heading", id: "vs-abstract", text: "Diagrammatic Reasoning vs. Abstract Reasoning" },
    {
      type: "paragraph",
      text: "Our [Abstract Reasoning Test](/test/abstract-reasoning-test) asks you to discover relationships among visual patterns arranged in a sequence or matrix. Diagrammatic Reasoning makes the transformation process explicit — a figure passes through symbolic operators, and you infer what each operator does and calculate the output. The constructs overlap, but the interface and reasoning process differ enough to justify separate tests.",
    },
    { type: "heading", id: "vs-mechanical", text: "Diagrammatic Reasoning vs. Mechanical Reasoning" },
    {
      type: "paragraph",
      text: "Our [Mechanical Reasoning Test](/test/mechanical-reasoning-test) uses real or simplified physical principles such as gears, pulleys, levers, and forces. Diagrammatic Reasoning uses invented logical operators — a triangle rotated by a square symbol does not represent a law of physics, it represents a rule defined inside the puzzle. That distinction keeps the two tests separate.",
    },
    { type: "heading", id: "conditional-operators", text: "Conditional Operators" },
    {
      type: "paragraph",
      text: "An advanced operator may behave differently depending on the input — for example: if the shape is filled, rotate it; if it is outline, reflect it. This introduces conditional logic. You must first inspect the current state and then decide which transformation branch applies. Conditional rules are appropriate for the hardest levels because they combine rule induction, state monitoring, and sequential logic.",
    },
    { type: "heading", id: "difficulty-progression", text: "Difficulty Progression" },
    {
      type: "list",
      items: [
        "**Level 1** — one obvious operator.",
        "**Level 2** — two independent operators.",
        "**Level 3** — three-step chains.",
        "**Level 4** — reverse or missing-operator problems.",
        "**Level 5** — order-sensitive or conditional operators.",
      ],
    },
    { type: "heading", id: "original-items", text: "Original Item Generation" },
    {
      type: "paragraph",
      text: "Diagrammatic reasoning is ideal for procedural generation. Attributes such as shape, orientation, count, position, and fill combine with operators such as rotate, reflect, add, remove, swap, invert, and move to generate training examples, a target flow, a correct output, and distractors built from known transformation mistakes — allowing unlimited practice without copying commercial assessment items.",
    },
    { type: "heading", id: "distractor-design", text: "Distractor Design" },
    {
      type: "paragraph",
      text: "A strong wrong answer reflects a plausible reasoning error: a missed operator (applies A but not B), a wrong order (applies B before A), a wrong direction (rotates counterclockwise instead of clockwise), a partial transformation (changes shape but forgets fill), or a repeated transformation (applies an operator twice). These distractors are far better than random shapes because they reveal how the reasoning failed.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Single-Operator Accuracy** — basic rule identification.",
        "**Multi-Step Accuracy** — transformation chains.",
        "**Reverse Reasoning** — missing-input or missing-operator problems.",
        "**Order-Sensitive Accuracy** — problems where sequence matters.",
        "**Conditional Rule Accuracy** — advanced state-dependent transformations.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Diagrammatic Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom online test. Performance depends on operator complexity, chain length, visual design, timing, and number of options — percentiles are not borrowed from a commercial recruitment test.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is a Diagrammatic Reasoning Test?",
          answer: "A visual logic test where you infer how symbols or operators transform an input and use those rules to determine an output, input, or missing process.",
        },
        {
          question: "Is diagrammatic reasoning the same as abstract reasoning?",
          answer: "They overlap, but diagrammatic tests emphasize visual processes and transformation chains.",
        },
        {
          question: "What kinds of transformations appear?",
          answer: "Rotation, reflection, addition, removal, movement, fill changes, swapping, and conditional operations.",
        },
        {
          question: "Why does operator order matter?",
          answer: "Some transformations produce different results depending on which operation happens first.",
        },
        {
          question: "Do diagrammatic tests require math?",
          answer: "Usually very little. The logic is expressed mainly through visual relationships and transformations.",
        },
        {
          question: "Is this a mechanical reasoning test?",
          answer: "No. Mechanical reasoning uses physical principles; diagrammatic reasoning uses logical rules defined by the diagram.",
        },
        {
          question: "Can practice help?",
          answer: "Yes. Breaking the process into one operator at a time often improves accuracy substantially.",
        },
      ],
    },
    { type: "heading", text: "Treat the Diagram Like a Program" },
    {
      type: "paragraph",
      text: "A diagrammatic problem becomes much easier when you stop viewing it as one picture. Think of it as a tiny program — the input is the starting state, each operator is an instruction, and the arrows tell you the order. Your job is to execute the instructions faithfully. When the final image is wrong, the question is usually not \"which picture looked closest?\" It is \"which transformation did I apply incorrectly?\"",
    },
  ],
};
