import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "If the premises are true, **must the conclusion be true**? Take this free **Deductive Reasoning Test** using original problems involving if–then rules, logical necessity, set relations, ordering, exclusions, and multi-step inference.",
    },
    {
      type: "paragraph",
      text: "The task is broader than your Syllogism Test and Wason Selection Task. Instead of focusing on one formal structure, it samples several kinds of deduction while keeping the central question the same: does the conclusion necessarily follow from the information given?",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Deductive Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Treat the stated premises as true.",
        "Separate the premises from your real-world beliefs.",
        "Identify the logical relationships.",
        "Test whether the conclusion must follow.",
        "Look for a counterexample when uncertain.",
        "Select Follows only when the conclusion is guaranteed.",
        "Continue through several reasoning formats.",
        "Review explanations by inference type.",
      ],
    },
    { type: "paragraph", text: "Do not accept a conclusion merely because it sounds plausible. Deduction is about necessity." },
    { type: "heading", text: "What Is Deductive Reasoning?" },
    {
      type: "paragraph",
      text: "Deductive reasoning uses premises to determine what conclusions logically follow. A deductively valid argument has an important property: if the premises are true, the conclusion cannot be false. For example, all red keys open the north door, Key A is a red key, therefore Key A opens the north door. If both premises are true, the conclusion must follow — the reasoning is valid regardless of whether red keys or north doors exist in the real world.",
    },
    { type: "heading", text: "Deduction vs. Induction" },
    {
      type: "paragraph",
      text: "These two forms of reasoning should not be confused. Deduction moves from premises to conclusions that are logically necessary. Induction uses observations or evidence to support conclusions that are probable but not guaranteed — for example, \"the last ten buses arrived late, so today's bus will probably be late\" is a reasonable conclusion but not logically certain. This page focuses on deductive necessity.",
    },
    { type: "heading", text: "Validity vs. Truth" },
    {
      type: "paragraph",
      text: "A deductive argument can be valid even when its premises are false. For example: all bicycles are birds, all birds can breathe underwater, therefore all bicycles can breathe underwater. The premises are false, but the structure is valid — if the premises were true, the conclusion would follow. Conversely, an invalid argument can accidentally have a true conclusion. The test asks about logical support, not factual accuracy.",
    },
    { type: "heading", text: "Modus Ponens and Modus Tollens" },
    {
      type: "paragraph",
      text: "One of the simplest valid conditional forms is modus ponens: if P then Q, P, therefore Q. For example, if the alarm is armed the red light is on, the alarm is armed, therefore the red light is on. Under the stated rule, the inference is valid, and modus ponens is generally one of the easiest conditional inferences for people to evaluate. Another valid form is modus tollens: if P then Q, not Q, therefore not P. For example, if the alarm is armed the red light is on, the red light is not on, therefore the alarm is not armed. Under a standard strict conditional interpretation, this is valid — research on human reasoning commonly finds modus tollens more difficult than modus ponens.",
    },
    { type: "heading", text: "Affirming the Consequent and Denying the Antecedent" },
    {
      type: "paragraph",
      text: "Affirming the consequent is a classic invalid inference: if P then Q, Q, therefore P. For example, if it is raining the street is wet, the street is wet, therefore it is raining — invalid, since the street could be wet because a sprinkler ran, a pipe burst, or someone washed it. Q does not guarantee P. Denying the antecedent is another invalid form: if P then Q, not P, therefore not Q. For example, if the heater is on the room is warm, the heater is not on, therefore the room is not warm — invalid, since the room could be warm because of sunlight or another heater. A strong test should include both valid and invalid conditional forms.",
    },
    { type: "heading", text: "Why Real-World Knowledge Can Complicate Conditionals" },
    {
      type: "paragraph",
      text: "Natural-language conditionals are not always interpreted like formal logic. Suppose \"if I press the switch, the light turns on\" — real-world knowledge may suggest exceptions, such as the bulb being broken or electricity being off. Psychological research shows that causal knowledge and alternative causes can influence whether people accept conditional inferences. For a clean browser test, use stipulated rules — \"assume the following rules are always true in this puzzle\" — which reduces pragmatic ambiguity.",
    },
    { type: "heading", text: "Set-Based Deduction and Ordering Problems" },
    {
      type: "paragraph",
      text: "Deduction also includes category relationships — for example, all Glens are Rops, no Rops are Vims, therefore no Glens are Vims, which is valid since every Glen belongs inside the Rop set and Rops and Vims do not overlap. These problems resemble syllogisms but can be presented in simpler set diagrams or rule statements. Ordering problems work similarly — A is earlier than B, C is later than B, therefore A is earlier than C, valid, since a mental ordering of A less than B less than C can be constructed. Harder items may contain five or six elements and ask which relation must hold; the diagram does not need to be shown, since the solver can build the ordering mentally.",
    },
    { type: "heading", text: "Multi-Step Deduction and the Counterexample Strategy" },
    {
      type: "paragraph",
      text: "A difficult item may require several premises: if A then B, if B then C, A — therefore C. You must chain A to B, then B to C, therefore A to C. Longer chains increase working-memory demands, so the test should gradually increase the number of steps rather than suddenly present long rule systems. A powerful way to test a conclusion is to ask: can I make all the premises true while making the conclusion false? If yes, the conclusion is not logically necessary. For example, given if P then Q and Q, therefore P, a counterexample is P false while Q is true for another reason — the premises remain true while the conclusion is false, so the argument is invalid. This counterexample strategy is useful across many deductive problems.",
    },
    { type: "heading", text: "Mental Models" },
    {
      type: "paragraph",
      text: "One influential psychological theory proposes that people reason by constructing mental models of the possibilities compatible with premises. Philip Johnson-Laird and colleagues developed this theory across conditional, relational, and syllogistic reasoning. A conclusion follows if it holds across all relevant models of the premises. Errors can occur when people represent only an initial or easy possibility and fail to construct alternatives — this framework helps explain why multi-model deductions are often harder.",
    },
    { type: "heading", text: "Deductive Reasoning vs. Wason Selection Task" },
    {
      type: "paragraph",
      text: "Your [Wason Selection Task](/test/wason-selection-task) asks which cards must be examined to test if P then Q — it is an evidence-selection task. Deductive Reasoning asks whether conclusions follow from stated premises. Wason asks which evidence could falsify the rule; Deduction asks what conclusion is logically necessary. They share conditional logic but use different response demands.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include overall accuracy (percent correct), conditional logic (modus ponens, modus tollens, and invalid conditional forms), set logic (category and exclusion relationships), ordering logic (earlier/later, left/right, rank, and sequence relations), multi-step deduction (accuracy when several premises must be combined), optional belief-conflict accuracy (neutral vs. believable/unbelievable comparisons), and median correct time (typical reasoning speed). These categories should only be shown when each contains enough items.",
    },
    { type: "heading", text: "Why \"Must Be True\" Matters" },
    {
      type: "paragraph",
      text: "Many invalid conclusions are possible. For example, from \"all A are B,\" the conclusion \"some B are A\" does not necessarily follow under modern logic unless existence of A is established — the conclusion may be possible, but deduction asks whether it is guaranteed. The interface should repeatedly reinforce: possible does not equal necessary.",
    },
    { type: "heading", text: "Original Items" },
    {
      type: "paragraph",
      text: "Use original logical content. Commercial reasoning tests often contain proprietary item banks and validated norms. Your site can generate problems from formal templates — assign random fictional names to categories, choose a valid or invalid inference structure, generate plausible distractors, and store the formal proof. This makes answer keys reproducible and prevents accidental ambiguity.",
    },
    { type: "heading", text: "What Is a Good Deductive Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original mixed browser battery. Performance depends on item type, number of premises, language complexity, time pressure, and familiarity with formal logic. Do not translate raw accuracy into IQ — if your site later collects enough same-version data, create its own percentiles.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is deductive reasoning?", answer: "Reasoning in which a valid conclusion must be true if the premises are true." },
        { question: "What is modus ponens?", answer: "If P then Q; P; therefore Q." },
        { question: "What is modus tollens?", answer: "If P then Q; not Q; therefore not P." },
        { question: "What is affirming the consequent?", answer: "The invalid inference: if P then Q; Q; therefore P." },
        { question: "What is denying the antecedent?", answer: "The invalid inference: if P then Q; not P; therefore not Q." },
        { question: "Is deductive reasoning the same as intelligence?", answer: "No. It is one component of reasoning and does not by itself produce an IQ score." },
        { question: "How can I check whether a conclusion really follows?", answer: "Try to construct a case where all premises are true and the conclusion is false. If you can, the conclusion is not deductively valid." },
      ],
    },
    {
      type: "paragraph",
      text: "Deductive reasoning becomes much clearer when you separate three questions: is the conclusion believable, is the conclusion possible, and is the conclusion logically necessary. Only the third question determines deductive validity. When the premises leave no possible counterexample, the conclusion follows. When even one counterexample remains, it does not.",
    },
  ],
};
