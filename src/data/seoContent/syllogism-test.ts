import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you decide whether a conclusion must be true — even when it conflicts with what you know about the real world? Take this free **Syllogism Test** to challenge deductive reasoning. Each problem gives you two or more premises involving categories such as \"all A are B,\" \"no B are C,\" or \"some A are C.\" Then you decide whether a proposed conclusion logically follows.",
    },
    { type: "paragraph", text: "The challenge is to judge the logical structure, not whether the statements sound believable in real life." },
    { type: "heading", id: "how-to-take", text: "How to Take the Syllogism Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Treat the premises as true for the purpose of the puzzle.",
        "Identify the relationships among the categories.",
        "Test whether the conclusion must follow.",
        "Do not rely on real-world knowledge.",
        "Choose Valid only when the conclusion is logically guaranteed.",
        "Continue through all problems.",
        "Review explanations and diagrams.",
      ],
    },
    { type: "paragraph", text: "A conclusion that sounds obviously true can still be logically invalid. A bizarre conclusion can be logically valid if it follows from the stated premises." },
    { type: "heading", text: "What Is a Syllogism?" },
    {
      type: "paragraph",
      text: "A syllogism is a deductive argument in which premises are used to derive a conclusion. Traditional categorical syllogisms use statements involving classes or categories: universal affirmative (all A are B), universal negative (no A are B), particular affirmative (some A are B), and particular negative (some A are not B). A reasoning problem combines these statements and asks whether the conclusion is logically necessary.",
    },
    { type: "heading", text: "A Simple Valid Example" },
    {
      type: "paragraph",
      text: "Premises: all tulips are flowers; all flowers are plants. Conclusion: all tulips are plants. If the premises are true, the conclusion must be true. The argument is valid because the class relationship is tulips within flowers within plants. Real-world knowledge happens to agree with the premises, but that is not what makes the inference valid.",
    },
    { type: "heading", text: "Validity Is Not the Same as Truth" },
    {
      type: "paragraph",
      text: "This distinction is fundamental. Truth asks whether the individual statements are factually correct. Validity asks whether the conclusion would have to follow if the premises were true. Consider: all planets are sandwiches, all sandwiches are musicians, therefore all planets are musicians. The premises are absurd in the real world, but the argument form is logically valid — if both premises were true, the conclusion would necessarily follow. A good syllogism test deliberately includes unfamiliar or artificial categories so users cannot solve everything by world knowledge.",
    },
    { type: "heading", text: "Invalid Arguments Can Have True Conclusions" },
    {
      type: "paragraph",
      text: "Now consider: all dogs are mammals, all cats are mammals, therefore no cats are dogs. The conclusion happens to fit ordinary knowledge, but it is not guaranteed by those two premises alone. The premises tell us dogs are inside the mammal set and cats are inside the mammal set — they do not specify whether the dog and cat sets overlap. A believable conclusion can therefore be logically invalid. This conflict creates one of the most famous effects in syllogistic reasoning.",
    },
    { type: "heading", text: "What Is Belief Bias?" },
    {
      type: "paragraph",
      text: "Belief bias is the tendency for the believability of a conclusion to influence judgments of logical validity. People are more likely to accept believable conclusions and reject unbelievable conclusions, even when the logical structure points the other way. Classic work by Jonathan Evans, Julie Barston, and Paul Pollard in 1983 demonstrated substantial effects of both logical validity and conclusion believability. The strongest reasoning conflicts occur when belief and logic disagree.",
    },
    { type: "heading", text: "Belief–Logic Conflict" },
    {
      type: "paragraph",
      text: "A balanced test should include four combinations: valid and believable (logic and prior belief agree), valid and unbelievable (the conclusion follows, but sounds false or strange), invalid and believable (the conclusion sounds plausible, but is not logically guaranteed), and invalid and unbelievable (both logic and belief favor rejection). The most informative trials are the conflict conditions — valid but unbelievable, or invalid but believable — because they reveal whether real-world belief interferes with formal deduction.",
    },
    { type: "heading", text: "Why Neutral or Fictional Terms Help" },
    {
      type: "paragraph",
      text: "One way to reduce belief bias is to use unfamiliar categories, such as \"all Norps are Taves, some Lems are Norps, therefore some Lems are Taves.\" Because \"Norps\" and \"Taves\" have no real-world meaning, you cannot rely on prior knowledge — you must reason from the category structure. A public test can mix abstract terms with familiar real-world terms, allowing the result to compare pure structural reasoning with belief-conflict performance.",
    },
    { type: "heading", text: "Venn Diagrams" },
    {
      type: "paragraph",
      text: "Venn diagrams are one of the clearest tools for solving categorical syllogisms. For \"all A are B,\" draw A completely inside B. For \"no A are B,\" draw A and B as non-overlapping. For \"some A are B,\" place an X in the overlap. For \"some A are not B,\" place an X inside A but outside B. Then ask whether every diagram satisfying the premises also satisfies the conclusion. If you can construct even one possible diagram where the premises are true and the conclusion is false, the conclusion is not logically guaranteed.",
    },
    { type: "heading", text: "Finding a Counterexample" },
    {
      type: "paragraph",
      text: "Deductive validity can be tested by asking: can I make the premises true while making the conclusion false? If yes, the argument is invalid. Example: all A are B, all C are B, conclusion: all A are C. Imagine B as one large circle, with A on the left inside B and C on the right inside B. The premises remain true, but A and C do not overlap — the conclusion is false. That possible counterexample proves the inference invalid.",
    },
    { type: "heading", text: "\"All\" Does Not Automatically Mean \"Some\"" },
    {
      type: "paragraph",
      text: "Modern formal logic usually treats \"all A are B\" as compatible with there being no A at all. For example, \"all unicorns in this room are blue\" can be logically true even if there are no unicorns in the room. This creates an important issue called existential import — from \"all A are B\" you generally should not infer \"some A are B\" unless existence of A is given or assumed by the test. A good browser test should state its convention clearly. The simplest modern convention is that universal premises do not imply existence.",
    },
    { type: "heading", text: "Why Existential Import Causes Confusion" },
    {
      type: "paragraph",
      text: "Traditional Aristotelian syllogistic systems sometimes handled universal propositions differently from modern predicate logic. As a result, online syllogism puzzles can disagree about certain conclusions involving existence. For SEO content and scoring consistency, this test explicitly uses modern logic: \"all A are B\" does not by itself guarantee that any A exist. \"Some A...\" premises are included whenever existence needs to be established, preventing ambiguous answer keys.",
    },
    { type: "heading", text: "Common Syllogistic Errors" },
    {
      type: "paragraph",
      text: "Reversing \"all\" incorrectly concludes \"all B are A\" from \"all A are B.\" Assuming existence concludes \"some A are B\" from \"all A are B\" without evidence that A exists. Belief bias means accepting a conclusion because it sounds true. Atmosphere effects mean being influenced by the positive/negative or universal/particular \"feel\" of the premises. Figural bias means being influenced by the order in which categories are presented. These effects show that syllogistic reasoning involves more than memorizing a few valid forms.",
    },
    { type: "heading", text: "Syllogism Test vs. Deductive Reasoning Test" },
    {
      type: "paragraph",
      text: "The [Deductive Reasoning Test](/test/deductive-reasoning-test) can include conditionals, set logic, ordering, rule application, and multi-step inference. This Syllogism Test remains focused on categorical quantified reasoning.",
    },
    { type: "heading", text: "Syllogism Test vs. Wason Selection Task" },
    {
      type: "paragraph",
      text: "The [Wason Selection Task](/test/wason-selection-task) focuses on \"if P, then Q\" and asks which cases must be examined. Syllogistic reasoning focuses on relationships among classes: all, no, some. Both are deductive tasks, but the formal structures are different — the Wason task is conditional reasoning, while syllogisms are categorical reasoning.",
    },
    { type: "heading", text: "Syllogisms in Aptitude and Competitive Exams" },
    {
      type: "paragraph",
      text: "Syllogism questions are common in aptitude tests, verbal reasoning exams, banking and recruitment exams, and logical-reasoning practice. Those exam formats sometimes use specialized diagram shortcuts or answer-choice conventions. This cognitive version remains simpler: does the conclusion necessarily follow, yes or no? That clean format maps directly onto psychological research on logical validity and belief bias.",
    },
    { type: "heading", text: "What Is a Good Syllogism Score?" },
    {
      type: "paragraph",
      text: "There is no universal percentile for a custom browser set. Difficulty changes with number of premises, quantifiers, belief conflict, abstract vs. familiar terms, time limits, and existential assumptions. A better result can show overall validity accuracy, believable-conclusion accuracy, unbelievable-conclusion accuracy, and belief-conflict accuracy — revealing where reasoning breaks down, not just how many questions were correct.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a syllogism?", answer: "A deductive argument where premises establish category relationships and a conclusion is evaluated from those premises." },
        { question: "What makes a syllogism valid?", answer: "The conclusion must be true in every case where all the premises are true." },
        { question: "Can a valid syllogism have false premises?", answer: "Yes. Validity concerns logical structure, not factual truth." },
        { question: "What is belief bias?", answer: "The tendency to let real-world believability influence judgments of logical validity." },
        { question: "Does \"All A are B\" mean some A exist?", answer: "Under standard modern logic, no. Existence must be established separately." },
        { question: "Can Venn diagrams help?", answer: "Yes. They make category relationships and possible counterexamples visible." },
        { question: "Is this an IQ test?", answer: "No. It is a focused logical-reasoning task." },
      ],
    },
    {
      type: "paragraph",
      text: "The core syllogism question is not \"does this conclusion sound right?\" It is \"could the premises be true while the conclusion is false?\" If you can build even one valid counterexample, the conclusion does not necessarily follow. That habit — separating what is believable from what is logically required — is the central skill behind syllogistic reasoning.",
    },
  ],
};
