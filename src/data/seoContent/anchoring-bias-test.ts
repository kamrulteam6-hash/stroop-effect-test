import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Before you estimate an unfamiliar number, seeing almost any other number first — even one you know is arbitrary — can quietly shift your guess toward it. This is anchoring bias, one of the most robust findings in behavioral economics and judgment research, and this test lets you notice it happening in your own estimates.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Anchoring Bias Test Works",
    },
    {
      type: "paragraph",
      text: "You'll answer 5 trivia questions. Before each one, you'll see a reference number — randomly either a high or low one — and quickly judge whether the real answer is more or less than it. Then you'll type in your actual best guess. Afterward, you'll see your estimate next to the anchor you saw and the real answer, so you can notice whether your guess landed closer to the anchor than you might expect.",
    },
    {
      type: "heading",
      text: "The Research Behind Anchoring",
    },
    {
      type: "paragraph",
      text: "Anchoring bias was first documented by psychologists Amos Tversky and Daniel Kahneman in the early 1970s as part of their pioneering work on judgment under uncertainty — research that later contributed to Kahneman's 2002 Nobel Prize in Economic Sciences. In their classic demonstration, participants spun a rigged wheel of fortune landing on either a high or low number, then estimated an unrelated quantity (the percentage of African countries in the United Nations). Despite the wheel result being obviously random and irrelevant, participants who saw a higher spin gave systematically higher estimates than those who saw a lower spin.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why This Bias Is So Hard to Resist",
    },
    {
      type: "paragraph",
      text: "The leading explanation is that people adjust away from an initial anchor through a mental search process, but that search tends to stop too early — as soon as a plausible-sounding answer is reached, rather than continuing all the way to an unbiased estimate. This means the bias isn't really about believing the anchor is meaningful; it happens even when people are explicitly told the anchor is random, which is part of what makes it such a persistent and well-studied effect.",
    },
    {
      type: "heading",
      text: "Where Anchoring Shows Up in Everyday Life",
    },
    {
      type: "list",
      items: [
        "Negotiations, where the first number mentioned tends to pull the entire discussion toward it.",
        "Retail pricing, where a crossed-out \"original price\" next to a sale price anchors your sense of value.",
        "Salary discussions, where the first figure raised in a conversation often shapes the eventual outcome.",
        "Real estate, where a home's initial listing price can anchor buyers' sense of what it's actually worth.",
      ],
    },
    {
      type: "callout",
      icon: "⚓",
      title: "This is a general finding, not a claim about you specifically",
      tone: "gold",
      text: "With just 5 questions, this test can't prove your individual bias with certainty — it's meant to give you a felt sense of how the effect generally works, based on decades of replicated research.",
    },
    {
      type: "paragraph",
      text: "Curious about another everyday decision bias? Try our [Sunk Cost Fallacy Test](/test/sunk-cost-test), which looks at how already-spent costs can irrationally influence what you decide to do next.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "Who discovered anchoring bias?",
          answer:
            "Psychologists Amos Tversky and Daniel Kahneman documented it in the early 1970s as part of their influential research on judgment and decision-making under uncertainty.",
        },
        {
          question: "Does the anchor have to be believable to work?",
          answer:
            "No — research has repeatedly found that anchoring effects persist even when people are told the anchor number is random or completely irrelevant to the question at hand.",
        },
        {
          question: "Why can't I just ignore the anchor if I know about this bias?",
          answer:
            "Adjustment away from an anchor tends to stop as soon as an answer feels plausible, rather than continuing to a fully unbiased estimate, which makes the effect resistant to willpower alone.",
        },
        {
          question: "Is 5 questions enough to prove I'm personally biased?",
          answer:
            "Not with statistical certainty for an individual — this test is designed to give you a felt sense of the effect, which has been established through much larger controlled studies across many participants.",
        },
        {
          question: "Can businesses and negotiators exploit anchoring?",
          answer:
            "Yes — anchoring is widely discussed in negotiation and pricing strategy specifically because the first number introduced in a discussion tends to have an outsized, lasting influence on the outcome.",
        },
      ],
    },
  ],
};
