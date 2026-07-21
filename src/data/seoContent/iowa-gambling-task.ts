import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Some choices pay out big immediately but quietly bleed you dry over time — and figuring that out usually takes learning from experience, not logic alone. The Iowa Gambling Task is one of the most influential tools in decision-making research, and this free version lets you experience exactly what it measures: how well you learn from wins and losses under uncertainty.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Iowa Gambling Task Works",
    },
    {
      type: "paragraph",
      text: "You'll draw 40 cards total, one at a time, from 4 decks labeled A, B, C, and D. Every card pays out money immediately, but some decks also carry a chance of a penalty on top of the payout. You aren't told anything about how the decks differ — your only job is to draw cards and try to end up with as much money as possible, learning the pattern of each deck purely through experience as you go.",
    },
    {
      type: "heading",
      text: "The Research Behind This Task",
    },
    {
      type: "paragraph",
      text: "The task was developed in 1994 by neuroscientist Antoine Bechara and colleagues at the University of Iowa to study decision-making under uncertainty. In the classic version, two decks pay out larger rewards per card but carry penalties severe enough to make them net losers over time, while the other two decks pay smaller rewards but are net winners overall. The task became especially influential in neuroscience after Bechara's team found that patients with damage to the ventromedial prefrontal cortex kept preferring the flashy, high-reward decks even after losing consistently — while healthy participants gradually learned to favor the safer decks, often before they could even explain why.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Your Deck Preferences Reveal",
    },
    {
      type: "paragraph",
      text: "This version follows the same core structure: two decks (A and B) pay out more per card but include penalties that make them net losers over 40 draws, while the other two (C and D) pay less per card but come out ahead overall. What researchers find most interesting isn't just your final balance, but how your deck choices shift over the course of the task — most people gradually favor the safer decks as they accumulate experience with the penalties, even without consciously calculating the exact odds.",
    },
    {
      type: "heading",
      text: "Tips for This Task",
    },
    {
      type: "list",
      items: [
        "Pay attention to penalties, not just the immediate reward shown on each card — the bigger number isn't always the better deck.",
        "Try sampling from all 4 decks early on rather than committing to one deck right away.",
        "Notice if you keep gravitating back to a deck that's actually been costing you money — that's a common and very human pattern.",
        "There's no need to calculate exact odds — the task is designed to reward learning from experience over time.",
      ],
    },
    {
      type: "callout",
      icon: "🎰",
      title: "A simplified, casual version",
      tone: "gold",
      text: "This is a free, simplified version of a real research task for personal interest, not the exact validated card sequence or a clinical decision-making assessment.",
    },
    {
      type: "paragraph",
      text: "Want a different take on risk and reward? Try our [Risk-Taking Test](/test/risk-taking-test), based on the Balloon Analogue Risk Task, which measures escalating risk-taking in a single continuous decision rather than repeated deck choices.",
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
          question: "Who created the Iowa Gambling Task?",
          answer:
            "Neuroscientist Antoine Bechara and colleagues at the University of Iowa developed it in 1994 to study decision-making under uncertainty and reward learning.",
        },
        {
          question: "What's a good strategy for this task?",
          answer:
            "There's no need to calculate precise probabilities — the task is designed to reward gradually learning from the pattern of rewards and penalties you experience, which is exactly what most people do naturally with enough draws.",
        },
        {
          question: "Why do some decks pay out more per card but still lose money overall?",
          answer:
            "Those decks carry penalties that are large enough or frequent enough to outweigh their bigger per-card rewards over many draws, so their net expected value ends up negative despite feeling more rewarding in the moment.",
        },
        {
          question: "Has this task been used in real neuroscience research?",
          answer:
            "Yes — it's widely used in studies of decision-making, including notable research on patients with damage to the ventromedial prefrontal cortex, who tend to keep favoring high-reward, net-negative decks longer than healthy participants do.",
        },
        {
          question: "Is this the exact clinical version of the task?",
          answer:
            "No — this is a simplified, casual browser version inspired by the real research task, built for personal interest rather than as a validated clinical or diagnostic instrument.",
        },
      ],
    },
  ],
};
