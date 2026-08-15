import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Which cards must you turn over to determine whether an if–then rule has been broken? Take this free **Wason Selection Task**, also known as the four-card problem. Each puzzle gives you a conditional rule and four visible cards — every card has hidden information on its reverse side. Select only the cards that must be checked.",
    },
    { type: "paragraph", text: "The central challenge is not finding examples that fit the rule. It is finding the cards that could reveal a counterexample." },
    { type: "heading", id: "how-to-take", text: "How to Take the Wason Selection Task" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the conditional rule carefully.",
        "Inspect the four visible cards.",
        "Ask which hidden sides could make the rule false.",
        "Select every card that must be checked.",
        "Do not select cards that cannot possibly violate the rule.",
        "Submit the selection.",
        "Review the logical explanation.",
      ],
    },
    { type: "paragraph", text: "The goal is to turn over the minimum necessary evidence, not every card." },
    { type: "heading", text: "What Is the Wason Selection Task?" },
    {
      type: "paragraph",
      text: "The Wason Selection Task was introduced by British psychologist Peter Wason in the 1960s. It became one of the most famous experiments in the psychology of reasoning. A standard abstract version presents a conditional rule, \"if P, then Q,\" and four cards corresponding to P, not-P, Q, and not-Q. The user must decide which cards need to be inspected to test whether the rule is true. Under the standard material-conditional interpretation, the logically necessary selections are P and not-Q.",
    },
    { type: "heading", text: "A Simple Example" },
    {
      type: "paragraph",
      text: "Suppose each card has a letter on one side and a number on the other. The visible cards are A, K, 4, 7. The rule is: if a card has a vowel on one side, then it has an even number on the other side. Which cards must be turned? You need A and 7. Why? The A card could have an odd number on the back, which would violate the rule. The 7 card could have a vowel on the back, which would also violate the rule.",
    },
    { type: "heading", text: "Why You Must Check P" },
    {
      type: "paragraph",
      text: "For \"if P, then Q,\" a P case must satisfy Q. So the P card has to be checked. If its reverse side is not-Q, you have found P and not-Q, which falsifies the conditional. In the example, vowel plus odd number breaks the rule. This part of the problem is usually relatively intuitive — many users correctly select P.",
    },
    { type: "heading", text: "Why You Must Check Not-Q" },
    {
      type: "paragraph",
      text: "The not-Q card is equally important. Suppose the visible side shows an odd number. If the hidden side contains a vowel, the card is P and not-Q — a direct counterexample. Many people fail to select not-Q, yet it is exactly the type of case capable of falsifying the rule. Checking not-Q corresponds to reasoning related to modus tollens.",
    },
    { type: "heading", text: "Why You Do Not Need to Check Q" },
    {
      type: "paragraph",
      text: "The Q card often attracts attention, but the rule says \"if P, then Q\" — it does not say \"if Q, then P.\" An even number is allowed to have a vowel on the other side, or a consonant. Neither outcome violates the rule. Selecting Q as though Q guarantees P is related to the logical error called affirming the consequent.",
    },
    { type: "heading", text: "Why You Do Not Need to Check Not-P" },
    {
      type: "paragraph",
      text: "The rule makes no requirement about not-P cases. A consonant may have an even number or an odd number — both are allowed. So turning the not-P card cannot reveal the forbidden combination P + not-Q. That card is unnecessary for testing the conditional.",
    },
    { type: "heading", text: "The Truth Table Logic" },
    {
      type: "paragraph",
      text: "For the material conditional \"if P, then Q,\" there are four logical combinations: P true and Q true (satisfied), P true and Q false (violated), P false and Q true (not violated), and P false and Q false (not violated). Only one combination falsifies the rule: P true and Q false. Therefore the optimal evidence search asks which cards could hide P + not-Q — that leads directly to P and not-Q.",
    },
    { type: "heading", text: "Why the Task Is Surprisingly Difficult" },
    {
      type: "paragraph",
      text: "Abstract versions of the Wason task often produce low rates of the classical logical answer. Many users choose P and Q, because those are the items explicitly mentioned in the rule. Others select only P. The task is difficult because natural reasoning does not always behave like a simple truth-table calculator. Performance can be influenced by matching the words in the rule, confirmation-oriented evidence search, interpretation of \"if,\" context, prior knowledge, and pragmatic meaning. This complexity is why the task has generated decades of theoretical debate.",
    },
    { type: "heading", text: "Confirmation Bias Is Not the Only Explanation" },
    {
      type: "paragraph",
      text: "Wason's tasks became strongly associated with confirmation bias because participants often selected evidence consistent with the rule rather than searching for counterexamples. That interpretation is historically important, but later research shows that errors cannot be explained by confirmation bias alone. Another major account involves matching bias: people tend to select items explicitly named in the conditional statement. Modern theories also emphasize mental models, probabilistic reasoning, linguistic interpretation, and task pragmatics.",
    },
    { type: "heading", text: "Matching Bias" },
    {
      type: "paragraph",
      text: "Matching bias becomes especially visible when a conditional includes negation. For example, \"if there is an A on one side, then there is not a 3 on the other.\" People may select cards whose visible values literally match A and 3, even when the logical requirements differ depending on the exact formulation. This suggests that surface wording can influence card selection independently of deliberate falsification. A strong online test can include both positive and negated rules to demonstrate this effect.",
    },
    { type: "heading", text: "Abstract vs. Realistic Rules" },
    {
      type: "paragraph",
      text: "One of the most famous findings is that performance often improves when the same basic logical structure is placed in a meaningful context. For example, \"if a person is drinking alcohol, they must be over the legal age,\" with cards showing drinking beer, drinking soda, age 25, and age 16. The logically relevant cases are drinking beer and age 16. Many people find this version easier than abstract vowels and numbers.",
    },
    { type: "heading", text: "Deontic Reasoning" },
    {
      type: "paragraph",
      text: "Rules involving permissions, obligations, and violations are often called deontic rules — examples include \"if someone performs action P, they must satisfy requirement Q.\" People can become particularly good at searching for potential violators. This produced major debates about why contextualized Wason tasks are easier. Proposed explanations include pragmatic reasoning schemas, social-contract reasoning, domain-specific representations, and changes in how the conditional is interpreted. The important practical lesson is that performance depends strongly on content and rule type.",
    },
    { type: "heading", text: "This Is Not a Pure Logic-IQ Score" },
    {
      type: "paragraph",
      text: "A correct abstract Wason answer demonstrates successful conditional evidence selection on that problem. An incorrect answer does not mean the user cannot reason logically in general — the same person may fail an abstract four-card problem and solve a structurally equivalent permission rule. That content effect is part of the science. Your result page should therefore report abstract-rule accuracy, contextual-rule accuracy, and common card-selection patterns, avoiding converting a few Wason problems into an IQ percentile.",
    },
    { type: "heading", text: "Wason Selection vs. Confirmation Bias Test" },
    {
      type: "paragraph",
      text: "The [Confirmation Bias Test](/test/confirmation-bias-test) uses broader evidence-search scenarios. The Wason task uses a very specific conditional rule and four-card structure. Confirmation Bias asks which evidence you choose when testing a hypothesis; Wason Selection asks which cases are logically necessary to test \"if P, then Q.\" The Wason task can demonstrate confirmation-like behavior, but the pages remain separate.",
    },
    { type: "heading", text: "Wason Selection vs. Syllogism Test" },
    {
      type: "paragraph",
      text: "The [Syllogism Test](/test/syllogism-test) asks whether a conclusion follows from quantified premises such as \"all A are B, some C are A.\" The Wason task focuses on conditional reasoning: \"if P, then Q.\" Different formal structures create different common reasoning errors.",
    },
    { type: "heading", text: "What Is a Good Wason Score?" },
    {
      type: "paragraph",
      text: "There is no universal score band for a custom multi-item online version. Difficulty changes with abstract vs. realistic content, negation, rule wording, permission vs. descriptive rules, and number of trials. A better result shows which logical cases you selected — a P + Q pattern can be explained differently from P only or all four cards. The error pattern teaches more than one total percentage.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "Who created the Wason Selection Task?", answer: "Peter Wason introduced the four-card conditional-reasoning paradigm in the 1960s." },
        { question: "Which cards are logically required for \"If P, then Q\"?", answer: "Under the standard material-conditional interpretation, check P and not-Q." },
        { question: "Why not check Q?", answer: "Because the rule does not say that every Q must also be P." },
        { question: "What falsifies \"If P, then Q\"?", answer: "A case where P is true and Q is false." },
        { question: "Why are realistic versions often easier?", answer: "Meaningful permission and social-rule contexts can change how people represent and test the conditional." },
        { question: "Is failure caused by confirmation bias?", answer: "Confirmation-oriented search is one explanation, but matching bias, interpretation, mental models, and context also contribute." },
        { question: "Is this an IQ test?", answer: "No. It is a specific conditional-reasoning paradigm." },
      ],
    },
    {
      type: "paragraph",
      text: "To solve the Wason task, stop asking which cards might confirm the rule. Ask what exact combination would make the rule false. For \"if P, then Q,\" there is one forbidden case: P + not-Q. The correct cards are the ones capable of hiding that counterexample.",
    },
  ],
};
