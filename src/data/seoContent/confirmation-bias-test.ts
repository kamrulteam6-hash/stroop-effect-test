import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "When you form an initial belief, do you look for evidence that could prove you wrong — or mostly for evidence that would support what you already think? Take this free **Confirmation Bias Test** using short hypothesis-testing scenarios. Each scenario gives you an initial claim or hunch and several possible pieces of evidence you could examine. Your job is to choose which evidence would be most useful for testing the claim.",
    },
    { type: "paragraph", text: "The test is designed to reveal whether you tend to select confirming evidence, disconfirming evidence, or genuinely diagnostic evidence. It is not a personality diagnosis and it cannot measure every form of confirmation bias from a few hypothetical choices." },
    { type: "heading", id: "how-to-take", text: "How to Take the Confirmation Bias Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the claim or hypothesis.",
        "Review the available evidence options.",
        "Ask which evidence would genuinely test the claim.",
        "Avoid choosing information merely because it would support your first impression.",
        "Complete all scenarios.",
        "Review which choices were confirmatory, disconfirmatory, or diagnostically useful.",
        "Read the explanation for each item.",
      ],
    },
    { type: "paragraph", text: "The goal is not to disagree with every hypothesis. The goal is to choose evidence that can distinguish between competing possibilities." },
    { type: "heading", text: "What Is Confirmation Bias?" },
    {
      type: "paragraph",
      text: "Confirmation bias is a broad tendency to seek, interpret, or remember information in ways that favor an existing belief or hypothesis. It can appear in several stages of reasoning: information search (you look for evidence likely to support your belief), interpretation (ambiguous evidence is interpreted as consistent with what you already think), memory (supporting examples may be easier to remember than contradictory examples), and belief updating (evidence against a favored belief may receive less weight than equally strong supporting evidence).",
    },
    { type: "paragraph", text: "These processes are related, but they are not identical. A short browser test usually measures only one or two of them." },
    { type: "heading", text: "Peter Wason and Early Confirmation Research" },
    {
      type: "paragraph",
      text: "Psychologist Peter Wason published influential work in 1960 on how people test hypotheses. In his famous 2-4-6 task, participants were told that the sequence 2 – 4 – 6 followed a hidden rule. They proposed their own number triples and received feedback about whether each triple fit the rule.",
    },
    { type: "paragraph", text: "Many participants formed a narrow hypothesis such as \"numbers increasing by two\" and then tested examples that fit their own rule, like 8 – 10 – 12 or 20 – 22 – 24. Those tests could confirm that the examples worked, but they were much less useful for discovering whether the rule was broader. The actual rule was more general than many participants initially assumed." },
    { type: "heading", text: "Why Confirming Examples Can Be Weak Tests" },
    {
      type: "paragraph",
      text: "Suppose your hypothesis is \"all blue cards have circles.\" You inspect a blue card and find a circle — that is consistent with your hypothesis, but it may not be very diagnostic, since perhaps almost every card has a circle. A stronger test may involve looking for a blue card without a circle. If you find one, the hypothesis is immediately falsified. Scientific reasoning often becomes stronger when you ask: what observation would distinguish my hypothesis from a plausible alternative? That is more useful than simply accumulating examples that fit.",
    },
    { type: "heading", text: "Confirmation Bias Is Broader Than the 2-4-6 Task" },
    {
      type: "paragraph",
      text: "Wason's work is historically important, but confirmation bias should not be reduced to one puzzle. Modern research uses the term across many domains, including hypothesis testing, political reasoning, social judgments, medical decision-making, information search, online media, and interpersonal impressions. A person can reason well on a number-sequence puzzle yet still interpret real-world evidence selectively. Likewise, someone who makes a confirmatory test choice once should not be labeled a generally biased thinker.",
    },
    { type: "heading", text: "Positive Test Strategy Is Not Always Irrational" },
    {
      type: "paragraph",
      text: "This is an important scientific nuance. Later researchers, especially Joshua Klayman and Young-Won Ha, argued that what looks like confirmation bias can sometimes reflect a positive test strategy. A positive test asks whether cases expected under the hypothesis are actually present — that strategy is not automatically bad. In many real environments, positively targeted tests can be efficient. Whether a test is informative depends on the hypothesis, competing hypotheses, how common the relevant features are, and the structure of the environment.",
    },
    { type: "paragraph", text: "So the strongest browser test should not score every confirmatory-looking choice as irrational. It should reward diagnostic evidence selection." },
    { type: "heading", text: "What Is Diagnostic Evidence?" },
    {
      type: "paragraph",
      text: "Evidence is diagnostic when it helps distinguish between competing explanations. Imagine Hypothesis A: the machine fails when temperature is high, versus Hypothesis B: the machine fails whenever humidity is high, regardless of temperature. Simply finding another hot day with a failure may fit both explanations. A more diagnostic case might be high temperature plus low humidity, or low temperature plus high humidity, depending on the predictions. Good hypothesis testing asks what each explanation predicts differently.",
    },
    { type: "heading", text: "Confirmation vs. Falsification" },
    {
      type: "paragraph",
      text: "Karl Popper famously emphasized the importance of falsifiability in science. A claim becomes scientifically useful when it makes predictions that could, in principle, be shown false. But practical reasoning is not as simple as \"always search only for disconfirmation\" — a single negative observation can itself be unreliable, and measurement error, sampling, and alternative explanations matter. The deeper lesson is: actively consider evidence that could challenge your favored hypothesis instead of protecting it from meaningful tests.",
    },
    { type: "heading", text: "How a Browser Confirmation Bias Test Can Work" },
    {
      type: "paragraph",
      text: "A strong online version can use multiple fictional scenarios. Each scenario could include an initial belief, several possible evidence sources, one strongly confirmatory option, one potentially disconfirmatory option, one highly diagnostic comparison, and one irrelevant option. Users choose what they would investigate first. The score can summarize confirmatory selections, disconfirmatory selections, and diagnostic selections — better than asking users whether they \"usually keep an open mind,\" since self-report can be influenced by self-image.",
    },
    { type: "heading", text: "Why One Choice Cannot Prove Bias" },
    {
      type: "paragraph",
      text: "Suppose you choose supporting evidence in one scenario. That does not prove confirmation bias caused your decision — maybe the supporting evidence was cheaper to obtain, more reliable, more urgent, or actually more diagnostic. A well-designed test must control those differences. Even then, a short set of hypothetical decisions is only a demonstration. Confirmation bias is context-sensitive.",
    },
    { type: "heading", text: "Confirmation Bias vs. Wason Selection Task" },
    {
      type: "paragraph",
      text: "The [Wason Selection Task](/test/wason-selection-task) uses conditional logic such as \"if a card has A on one side, then it has 4 on the other,\" and the user selects which cards must be turned over to test the rule. That is a specific deductive-reasoning paradigm. This Confirmation Bias Test remains broader and uses evidence-search scenarios, which avoids duplicate content and duplicate search intent.",
    },
    { type: "heading", text: "Confirmation Bias vs. Cognitive Reflection" },
    {
      type: "paragraph",
      text: "The [Cognitive Reflection Test](/test/cognitive-reflection-test) asks whether you override a tempting intuitive answer. Confirmation Bias asks whether your evidence search or evaluation favors an existing belief. You can be highly reflective on numerical puzzles while still selectively seeking information that supports a preferred real-world conclusion. The biases are related to reasoning quality, but they are not the same thing.",
    },
    { type: "heading", text: "Confirmation Bias vs. Anchoring" },
    {
      type: "paragraph",
      text: "The [Anchoring Bias Test](/test/anchoring-bias-test) manipulates an initial numerical reference. Confirmation bias begins with a belief or hypothesis and concerns what happens to later evidence. Anchoring asks does this starting value pull my estimate; confirmation bias asks does my current belief shape what evidence I seek or accept. Both involve prior information, but through different mechanisms.",
    },
    { type: "heading", text: "How to Reduce Confirmation Bias" },
    { type: "paragraph", text: "When a decision matters, try these questions:" },
    {
      type: "list",
      ordered: true,
      items: [
        "What do I currently believe?",
        "What evidence would change my mind?",
        "What would someone who disagrees predict?",
        "What observation favors one explanation over another?",
        "Have I searched for credible contradictory evidence?",
        "Am I applying the same standard to evidence on both sides?",
        "Could another hypothesis explain the same facts?",
      ],
    },
    { type: "paragraph", text: "A particularly useful habit is to write down: what result would make me reject my current hypothesis? If the answer is \"nothing,\" the belief is no longer being tested." },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is confirmation bias?", answer: "A tendency to seek, interpret, or remember information in ways that favor existing beliefs or hypotheses." },
        { question: "Who first studied confirmation bias?", answer: "Peter Wason's 1960 hypothesis-testing research is one of the foundational experimental demonstrations." },
        { question: "What was the 2-4-6 task?", answer: "Participants tried to discover a hidden number rule and often tested examples that confirmed their initial hypothesis rather than cases that could distinguish it from alternatives." },
        { question: "Is seeking confirming evidence always irrational?", answer: "No. A positive test strategy can sometimes be useful. The key question is whether the evidence is diagnostic." },
        { question: "Does this test measure political bias?", answer: "Not specifically. It uses controlled reasoning scenarios rather than trying to score political beliefs." },
        { question: "Can a high score prove I am unbiased?", answer: "No. Confirmation bias varies across topics, motivations, and contexts." },
        { question: "How can I improve hypothesis testing?", answer: "Actively identify evidence that would distinguish your preferred explanation from plausible alternatives." },
      ],
    },
    {
      type: "paragraph",
      text: "The strongest question is rarely \"can I find another example that fits my theory?\" It is \"what evidence would tell me whether my theory is actually better than the alternatives?\" That shift from confirmation to diagnosis is the central reasoning skill this test is designed to reveal.",
    },
  ],
};
