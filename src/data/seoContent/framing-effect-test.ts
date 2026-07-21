import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The exact same choice, with the exact same numbers, can lead people to completely different decisions depending purely on how it's worded. This test walks you through two decisions built around identical math but different framing, so you can notice how much wording alone can shape what feels like the \"obvious\" choice.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Framing Effect Test Works",
    },
    {
      type: "paragraph",
      text: "You'll face 2 scenarios, each with a guaranteed option and a 50/50 gamble that has the exact same average outcome as the guaranteed one. Each scenario is randomly presented to you as either a gain (something to save or keep) or a loss (something to lose or pay) — pick whichever option you'd genuinely choose. Afterward, you'll see which framing you got and how it compares to the general research pattern.",
    },
    {
      type: "heading",
      text: "The Research Behind Framing",
    },
    {
      type: "paragraph",
      text: "This effect is central to prospect theory, developed by psychologists Daniel Kahneman and Amos Tversky in 1979 — work that later contributed to Kahneman's 2002 Nobel Prize in Economic Sciences. Their most famous demonstration, the \"Asian disease\" problem, found that when a choice was framed in terms of lives saved, most people chose the safe, guaranteed option; but when the mathematically identical choice was framed in terms of lives lost, most people switched to the risky gamble instead.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Gains and Losses Feel So Different",
    },
    {
      type: "paragraph",
      text: "Prospect theory suggests that people don't evaluate outcomes in absolute terms — they evaluate them relative to a reference point, and losses tend to feel roughly twice as psychologically painful as equivalent gains feel good, a pattern known as loss aversion. When a choice is framed as a potential gain, people tend to lock in the safe option to protect what they'd gain. When the identical choice is framed as a potential loss, people tend to gamble in hopes of avoiding the loss entirely — even though the actual expected outcome hasn't changed at all.",
    },
    {
      type: "heading",
      text: "Where Framing Shows Up in Everyday Decisions",
    },
    {
      type: "list",
      items: [
        "Marketing that says \"90% fat-free\" instead of the equivalent \"10% fat.\"",
        "Medical decisions framed around survival rates versus the mathematically identical mortality rates.",
        "Financial products marketed around potential gains rather than the equivalent risk of loss.",
        "Political messaging that frames the same policy outcome in terms of what's saved versus what's lost.",
      ],
    },
    {
      type: "callout",
      icon: "🪟",
      title: "A general pattern, not a verdict on your choice",
      tone: "gold",
      text: "With just 2 decisions, this test can't prove anything about your personal decision-making style — it's meant to demonstrate a well-replicated pattern found across large research studies.",
    },
    {
      type: "paragraph",
      text: "Want to explore a related decision-making bias? Try our [Anchoring Bias Test](/test/anchoring-bias-test), which looks at how an arbitrary starting number can pull your numerical estimates toward it.",
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
          question: "What is the framing effect?",
          answer:
            "It's a cognitive bias where people make different decisions about mathematically identical options depending on whether those options are described in terms of gains or losses.",
        },
        {
          question: "Who discovered the framing effect?",
          answer:
            "It's central to prospect theory, developed by psychologists Daniel Kahneman and Amos Tversky in 1979, building on their earlier research into judgment under uncertainty.",
        },
        {
          question: "Why do losses feel worse than equivalent gains feel good?",
          answer:
            "This pattern, called loss aversion, is a core finding of prospect theory — research suggests losses are typically weighted roughly twice as heavily in decision-making as equivalent gains.",
        },
        {
          question: "Does this mean one option is objectively better?",
          answer:
            "No — in this test, the guaranteed option and the gamble always have the same average expected outcome. The interesting part is which one feels more appealing depending purely on the wording.",
        },
        {
          question: "Can businesses and marketers exploit framing?",
          answer:
            "Yes — framing effects are widely studied and applied in marketing, healthcare communication, and public policy messaging, since the way a choice is worded can meaningfully shift how people respond to it.",
        },
      ],
    },
  ],
};
