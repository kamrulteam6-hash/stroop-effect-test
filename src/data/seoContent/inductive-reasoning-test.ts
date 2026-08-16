import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Inductive reasoning starts with examples. The rule is hidden. Your job is to discover it.",
    },
    {
      type: "paragraph",
      text: "Take this free Inductive Reasoning Test using original problems where you observe a set of cases, infer the most plausible relationship, and apply that rule to new information. The structure is explicit: Examples → Hypothesis → New Case.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Inductive Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Study the examples.",
        "Identify features shared by the positive examples.",
        "Compare them with negative or contrasting examples when provided.",
        "Form a candidate rule.",
        "Test the rule against every example.",
        "Reject rules that fail even one clearly labeled training case.",
        "Apply the best-supported rule to the new item.",
        "Choose the classification, prediction, or continuation.",
      ],
    },
    {
      type: "paragraph",
      text: "The goal is not to find a pattern. It is to find the pattern that best explains the available evidence.",
    },
    { type: "heading", id: "what-is", text: "What Is Inductive Reasoning?" },
    {
      type: "paragraph",
      text: "**Inductive reasoning** is reasoning from observations toward a broader conclusion, pattern, or rule. If every observed member of Group A has a blue center and two outer shapes, you might infer that Group A follows a rule involving those features, then classify a new item. Unlike deduction, induction does not normally guarantee that a conclusion is true — it supports a generalization based on evidence.",
    },
    { type: "heading", id: "inductive-vs-deductive", text: "Inductive vs. Deductive Reasoning" },
    {
      type: "paragraph",
      text: "Inductive reasoning starts with examples or observations and infers a rule or likely generalization. Deductive reasoning starts with rules or premises and determines what must follow. Example induction: several observed machines with a certain symbol behave the same way, so you infer the symbol's likely rule. Example deduction: the rule is explicitly given, and you apply it to a new machine. Our [Deductive Reasoning Test](/test/deductive-reasoning-test) focuses on necessity; this page focuses on rule discovery from evidence.",
    },
    { type: "heading", id: "rule-induction", text: "Rule Induction" },
    {
      type: "paragraph",
      text: "A clean task shows several examples that follow one hidden rule. Valid examples always place a circle first (●▲, ●■, ●◆); invalid examples place it last (▲●, ■●, ◆●). Possible rule: the circle must appear first. This format directly measures rule induction — you have to infer what separates examples rather than continue a visual sequence.",
    },
    { type: "heading", id: "positive-negative-examples", text: "Positive and Negative Examples" },
    {
      type: "paragraph",
      text: "Positive examples show what satisfies the rule; negative examples show what does not. Suppose every positive example contains one triangle and one circle — you might infer any item containing both shapes belongs. But if a negative example also contains both shapes in reversed order, the true rule may be that the triangle must appear before the circle. Negative examples eliminate overly broad hypotheses, connecting inductive reasoning naturally with hypothesis testing.",
    },
    { type: "heading", id: "simplest-rule", text: "The Simplest Rule Is Not Always the Correct Rule" },
    {
      type: "paragraph",
      text: "Humans are excellent at finding patterns — sometimes too excellent. Given the sequence 2, 4, 6, possible hypotheses include \"add 2,\" \"use even numbers,\" or \"numbers under 10 that are not divisible by 5.\" With only three observations, the evidence does not uniquely prove one rule. A good test avoids ambiguity by providing enough structured examples that one intended rule is strongly supported.",
    },
    { type: "heading", id: "hierarchical-rules", text: "Hierarchical Rule Induction" },
    {
      type: "paragraph",
      text: "Some problems contain a rule within a rule. Research on hierarchical rule inference has examined how people discover higher-level structure from patterns of outcomes — for example, a local rule where shape changes according to color, and a higher-level rule where the meaning of color changes depending on the border. Now you cannot solve the problem from one simple association; you must infer how rules are organized. A 2019 study examining the time course of hierarchical rule induction found evidence that people can first identify lower-level structure and then infer higher-order rules, which makes hierarchical items appropriate for advanced difficulty.",
    },
    { type: "heading", id: "category-induction", text: "Category Induction" },
    {
      type: "paragraph",
      text: "Induction can also involve category membership. Members might be a red triangle with one dot, a blue triangle with one dot, and a green triangle with one dot; nonmembers might be a red circle with one dot and a blue square with one dot. The likely rule is triangle shape rather than color. This format tests whether you identify the diagnostic feature instead of memorizing surface appearance.",
    },
    { type: "heading", id: "relevant-irrelevant", text: "Relevant vs. Irrelevant Features" },
    {
      type: "paragraph",
      text: "Good inductive problems contain some irrelevant variation. If every valid example is blue, triangular, and large, you cannot tell which feature defines the category. Adding a red triangle, a green triangle, and a small triangle reveals that shape — not color or size — is what matters. The item designer controls which attributes are relevant, irrelevant, or misleading.",
    },
    { type: "heading", id: "confirmation-not-enough", text: "Confirmation Is Not Enough" },
    {
      type: "paragraph",
      text: "Suppose your hypothesis is that every valid figure contains a triangle. Looking only at more triangle-containing valid figures confirms the rule. But a more informative example is a triangle-containing invalid figure — if such an example exists, your hypothesis fails. This connects induction with our [Confirmation Bias Test](/test/confirmation-bias-test): good rule discovery often requires paying attention to cases that could disconfirm the current hypothesis.",
    },
    { type: "heading", id: "sequence-induction", text: "Sequence Induction" },
    {
      type: "paragraph",
      text: "Another inductive format uses a sequence: 2, 5, 8, 11, ? — you infer \"add 3\" and predict 14. Visual sequences work similarly. The key point is that the rule is not stated, it is induced from examples. Because this site already has dedicated Number Series and Letter Series tests, this page uses mixed visual rule-induction tasks rather than relying mainly on numeric or alphabetic sequences.",
    },
    { type: "heading", id: "fluid-intelligence", text: "Inductive Reasoning and Fluid Intelligence" },
    {
      type: "paragraph",
      text: "Inductive reasoning is closely related to fluid reasoning because both involve discovering structure in unfamiliar information — progressive-matrix tasks, for example, require inferring relationships from examples within the matrix. But \"inductive reasoning\" is a reasoning process, while \"fluid intelligence\" is a broader psychometric construct, so an inductive reasoning score is not automatically a full fluid-IQ score.",
    },
    { type: "heading", id: "vs-abstract", text: "Inductive Reasoning vs. Abstract Reasoning" },
    {
      type: "paragraph",
      text: "Our [Abstract Reasoning Test](/test/abstract-reasoning-test) is a broad nonverbal rule-solving battery. Inductive Reasoning makes the evidence-to-rule process explicit: given these examples and counterexamples, what general rule best explains them, and does this new case follow it? There is overlap, but the experiences feel different.",
    },
    { type: "heading", id: "vs-confirmation-bias", text: "Inductive Reasoning vs. Confirmation Bias" },
    {
      type: "paragraph",
      text: "The [Confirmation Bias Test](/test/confirmation-bias-test) measures whether people preferentially seek or interpret evidence supporting an initial hypothesis. Inductive Reasoning asks whether you can infer a rule accurately from the evidence provided. The concepts interact, but one is a bias paradigm and the other is an ability task — a high inductive score does not mean someone is immune to confirmation bias.",
    },
    { type: "heading", id: "distractor-rules", text: "Distractor Rules" },
    {
      type: "paragraph",
      text: "Multiple-choice items can offer alternative rules. For example, training data support \"all valid figures have exactly two black shapes.\" Distractors might represent \"all figures have two shapes,\" \"all figures contain black,\" or \"all figures have two identical shapes.\" Each distractor matches part of the evidence — you must determine which rule explains all examples.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Simple Rule Induction** — single-feature rules.",
        "**Relational Rules** — rules based on relationships among features.",
        "**Category Classification** — applying inferred rules to new items.",
        "**Hierarchical Rules** — higher-order rule performance.",
        "**Counterexample Sensitivity** — accuracy when negative examples are necessary to reject an attractive rule.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Inductive Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom browser task. Performance depends on the number of examples, rule complexity, distractor quality, time limit, and familiarity — norms are not borrowed from another recruitment test.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is inductive reasoning?",
          answer: "Reasoning from examples or observations toward a broader rule, pattern, or likely conclusion.",
        },
        {
          question: "How is induction different from deduction?",
          answer: "Induction infers a rule from evidence; deduction applies given premises or rules to determine what must follow.",
        },
        {
          question: "Are inductive conclusions always certain?",
          answer: "No. In general reasoning, induction supports conclusions rather than guaranteeing them.",
        },
        {
          question: "What is rule induction?",
          answer: "Inferring the hidden rule that explains a set of examples.",
        },
        {
          question: "Why are negative examples useful?",
          answer: "They eliminate hypotheses that fit positive examples but are too broad.",
        },
        {
          question: "Is inductive reasoning the same as abstract reasoning?",
          answer: "They overlap strongly, but inductive reasoning specifically emphasizes inferring general rules from observed examples.",
        },
        {
          question: "Can practice improve performance?",
          answer: "Yes. Better hypothesis testing and attention to counterexamples can improve rule discovery.",
        },
      ],
    },
    { type: "heading", text: "Don't Ask Only \"What Do These Examples Have in Common?\"" },
    {
      type: "paragraph",
      text: "Ask a second question: what would prove my rule wrong? That is where inductive reasoning becomes stronger. Anyone can notice a resemblance. The real skill is finding a rule that survives variation, counterexamples, and new cases. The best hypothesis is not the first pattern you see — it is the one the evidence continues to support.",
    },
  ],
};
