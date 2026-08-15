import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How large must a possible gain become before you are willing to accept an equally possible loss? Take this free **Loss Aversion Test** using a series of simple mixed gambles. Each trial gives you a 50/50 chance of winning money or losing money. Choose whether you would accept or reject each gamble.",
    },
    { type: "paragraph", text: "Your pattern can estimate the point where potential gains become attractive enough to offset potential losses. It should not be interpreted using the oversimplified claim that \"losses always feel exactly twice as strong as gains.\"" },
    { type: "heading", id: "how-to-take", text: "How to Take the Loss Aversion Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Read the gain and loss amounts.",
        "Assume the stated probabilities are accurate.",
        "Decide whether you would accept the 50/50 gamble.",
        "Treat each choice independently.",
        "Continue as the possible gain changes relative to the loss.",
        "Review your acceptance threshold and response consistency.",
        "Compare the pattern with the expected monetary value of the gambles.",
      ],
    },
    { type: "paragraph", text: "Do not select the answer you think behavioral economics expects. The task works only if you report the preference you would actually have." },
    { type: "heading", text: "What Is Loss Aversion?" },
    {
      type: "paragraph",
      text: "Loss aversion is the idea that losses can carry greater psychological weight than equivalent gains. For example, losing $50 may influence a decision more strongly than gaining $50. This does not mean the emotional experience is always exactly measurable on one universal ratio. Loss aversion became closely associated with prospect theory, developed by Daniel Kahneman and Amos Tversky.",
    },
    { type: "heading", text: "Prospect Theory" },
    {
      type: "paragraph",
      text: "Kahneman and Tversky introduced prospect theory in 1979 as a descriptive model of decision-making under risk. The theory departed from the idea that people evaluate risky prospects only by final wealth — instead, outcomes are evaluated relative to a reference point, creating gains above the reference point and losses below it. The prospect-theory value function is typically steeper for losses than for gains, representing loss aversion. The theory also includes diminishing sensitivity and probability weighting. Loss aversion is therefore one component of prospect theory, not the whole theory.",
    },
    { type: "heading", text: "A Simple Mixed Gamble" },
    {
      type: "paragraph",
      text: "Consider a 50% chance to gain $100 and a 50% chance to lose $100 — expected monetary value is $0. Many people reject symmetric mixed gambles like this. Now increase the gain: 50% chance to gain $150, 50% chance to lose $100, expected value +$25. Some people may still reject it. Increase the gain again: 50% chance to gain $200, 50% chance to lose $100. At some point, many people become willing to accept. That crossover is often used to study the relative weighting of gains and losses.",
    },
    { type: "heading", text: "Expected Value vs. Subjective Value" },
    {
      type: "paragraph",
      text: "Expected monetary value is calculated mechanically: for a 50/50 gamble, EV = 0.5 × Gain − 0.5 × Loss. But people do not necessarily choose only by expected value. A gamble can have positive expected value and still feel unattractive — that can reflect loss aversion, ordinary risk aversion, wealth constraints, uncertainty about the scenario, utility curvature, or decision strategy. This is why one rejected gamble does not prove loss aversion by itself.",
    },
    { type: "heading", text: "Loss Aversion vs. Risk Aversion" },
    {
      type: "paragraph",
      text: "These concepts are frequently confused. Risk aversion is preference for a certain outcome over a risky outcome with comparable value. Loss aversion is greater sensitivity to outcomes framed or evaluated as losses than equivalent gains relative to a reference point. A person can dislike variance even when no loss domain is involved — that is risk aversion. A proper Loss Aversion Test should include mixed gain-loss choices designed to estimate asymmetry around a reference point rather than simply asking whether someone dislikes gambling.",
    },
    { type: "heading", text: "What Is Lambda?" },
    {
      type: "paragraph",
      text: "In many prospect-theory models, λ (lambda) is used as a loss-aversion parameter. A λ greater than 1 represents a value function that is steeper for losses than gains. You may see statements such as \"λ ≈ 2\" followed by \"losses hurt twice as much as gains feel good.\" That phrase has become extremely popular, but it should not be treated as a universal human constant. Estimated λ values vary across tasks, models, populations, stakes, reference points, and fitting methods. Modern meta-analytic work has also challenged the idea that loss aversion is equally large and robust in every risky-choice context.",
    },
    { type: "heading", text: "Why \"Twice as Much\" Is Too Simple" },
    {
      type: "paragraph",
      text: "The popular 2:1 description compresses a complex literature into one slogan. A person who requires a $200 possible gain to accept a $100 possible loss is not automatically proven to have λ = 2.00 — the acceptance threshold may also reflect risk attitude and task design. Likewise, a person willing to accept +$120/−$100 is not necessarily \"almost loss neutral\" in every domain. Loss aversion can differ across money, consumer goods, time, effort, health, and ownership contexts. Your browser result should therefore use careful descriptive language.",
    },
    { type: "heading", text: "Modern Evidence Is More Mixed Than Popular Accounts Suggest" },
    {
      type: "paragraph",
      text: "Loss aversion is one of the most famous concepts in behavioral economics, but recent quantitative reviews have debated how robust the effect is across risky-choice studies. A 2024 meta-analysis examined loss-aversion estimates in risky contexts and found substantial methodological variation. A 2025 re-meta-analysis argued that conclusions about robustness depend strongly on which studies and estimation methods are treated as valid evidence.",
    },
    { type: "paragraph", text: "That does not mean loss aversion has been disproven. It means the strongest scientific wording is: loss aversion is influential and often observed, but its magnitude and generality depend on context and measurement." },
    { type: "heading", text: "Reference Points Matter" },
    {
      type: "paragraph",
      text: "A gain or loss exists relative to something. The reference point might be current wealth, an expected outcome, purchase price, recent status quo, a goal, or an experimentally provided starting endowment. Change the reference point and the same final outcome can be experienced differently — this is central to prospect-theory reasoning. A custom online task should make the starting point clear. If users are simply told \"lose $100\" without any context or endowment, they may imagine different reference situations.",
    },
    { type: "heading", text: "Mixed Gambles Are Useful but Not Perfect" },
    {
      type: "paragraph",
      text: "Mixed-gamble tasks are attractive because the gain and loss appear in the same choice — you can vary the gain while holding the loss fixed, for example +$110/−$100, +$140/−$100, +$170/−$100, +$200/−$100. The acceptance pattern reveals a rough threshold. But estimating a formal loss-aversion parameter requires a model and usually multiple choices. A browser test should call the result something like \"Gain Required Per $1 of Potential Loss\" rather than pretending one threshold is a clinically validated lambda value.",
    },
    { type: "heading", text: "Loss Aversion vs. Framing Effect" },
    {
      type: "paragraph",
      text: "The [Framing Effect Test](/test/framing-effect-test) compares equivalent outcomes described as gains or losses. Loss Aversion Test uses actual mixed gain-loss trade-offs. Framing asks does description change choice; loss aversion asks how strongly are potential losses weighted relative to potential gains. The concepts are related through prospect theory, but the tests should remain separate.",
    },
    { type: "heading", text: "What Is a Good Loss Aversion Score?" },
    {
      type: "paragraph",
      text: "There is no universal ideal. A lower inferred gain/loss threshold is not automatically better, and a higher threshold is not automatically worse — the result describes how you responded to this set of hypothetical mixed gambles. Avoid labels such as fearless, overly cautious, financially irrational, or clinically loss averse. Without validated norms and a formal model, descriptive interpretation is more honest.",
    },
    { type: "heading", text: "How to Reduce Loss-Driven Decision Distortion" },
    { type: "paragraph", text: "When a decision matters:" },
    {
      type: "list",
      ordered: true,
      items: [
        "Define the reference point.",
        "Calculate the actual possible gains and losses.",
        "Compare expected outcomes.",
        "Ask whether the loss would create real practical harm.",
        "Consider a series of decisions rather than one isolated gamble.",
        "Separate emotional discomfort from financial consequence.",
        "Avoid assuming that any reluctance to lose is automatically irrational.",
      ],
    },
    { type: "paragraph", text: "The goal is not to eliminate concern about losses — losses often matter. The goal is to understand whether they are receiving disproportionate weight." },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is loss aversion?", answer: "The idea that losses can receive greater psychological weight than equivalent gains relative to a reference point." },
        { question: "Who developed the concept?", answer: "Loss aversion became a central part of Kahneman and Tversky's prospect-theory framework." },
        { question: "Do losses hurt exactly twice as much as gains?", answer: "No. The \"twice as much\" phrase is a rough popularization, not a universal human constant." },
        { question: "Is loss aversion the same as risk aversion?", answer: "No. Risk aversion concerns dislike of uncertainty; loss aversion concerns asymmetric valuation of losses versus gains." },
        { question: "What does lambda mean?", answer: "λ is a parameter used in prospect-theory models to represent the relative steepness of losses versus gains." },
        { question: "Does rejecting a positive expected-value gamble prove loss aversion?", answer: "No. Risk attitude, wealth constraints, and other factors can also influence rejection." },
        { question: "Is more loss aversion always bad?", answer: "No. The test describes preference, not a moral or clinical ranking." },
      ],
    },
    {
      type: "paragraph",
      text: "A 50/50 gamble makes the trade-off visible: possible gain on one side, possible loss on the other. As the gain grows, your willingness to accept may change. That crossover is useful information. But the most accurate interpretation is not \"this number reveals exactly how strongly losses affect my brain.\" It is \"under these specific choices, this is how much gain I required before accepting the possibility of loss.\"",
    },
  ],
};
