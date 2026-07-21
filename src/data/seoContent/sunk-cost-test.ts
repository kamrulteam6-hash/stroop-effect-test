import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Money or effort you've already spent is gone no matter what you decide next — yet most people let it influence their choices anyway. This test walks you through 5 everyday scenarios built around exactly that pattern, known as the sunk cost fallacy, so you can see how often already-spent resources shape what you'd actually do.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Sunk Cost Fallacy Test Works",
    },
    {
      type: "paragraph",
      text: "You'll face 5 short scenarios, each involving money or effort already spent on something that's no longer paying off. For each one, pick whichever option you'd honestly choose. Your result shows how many of your 5 choices were driven by the sunk cost rather than by what actually makes sense going forward.",
    },
    {
      type: "heading",
      text: "What a 'Sunk Cost' Actually Means",
    },
    {
      type: "paragraph",
      text: "In economics, a sunk cost is money, time, or effort that has already been spent and cannot be recovered, regardless of what you decide to do next. The rational approach to any decision is to ignore sunk costs entirely and evaluate options based only on future costs and benefits from this point forward. The sunk cost fallacy is the well-documented tendency to do the opposite — continuing to invest in something specifically because of what's already been put into it, even when the smart move is clearly to stop.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why This Bias Is So Persistent",
    },
    {
      type: "paragraph",
      text: "Research on escalation of commitment, a closely related concept studied extensively by organizational psychologists, suggests the sunk cost fallacy is partly driven by a desire to avoid feeling like earlier spending was wasted or that a past decision was a mistake. Continuing to invest can feel like it \"justifies\" the original cost, even though, mathematically, the original cost is identical whether you continue or stop — it's already gone either way.",
    },
    {
      type: "heading",
      text: "Where the Sunk Cost Fallacy Shows Up",
    },
    {
      type: "list",
      items: [
        "Finishing a bad book or movie purely because you've already invested time in it.",
        "Staying in a failing project at work because of how much has already been spent on it.",
        "Holding a losing investment specifically to avoid \"locking in\" the loss.",
        "Continuing a subscription or gym membership you no longer use, because you've already paid for it.",
      ],
    },
    {
      type: "callout",
      icon: "💸",
      title: "Sometimes 'continuing' is still the right call",
      tone: "gold",
      text: "This test frames continuing as sunk-cost-driven for simplicity, but real decisions can have valid future-focused reasons to continue too — the key question is always whether your reasoning depends on the past cost or on what happens next.",
    },
    {
      type: "paragraph",
      text: "Want to explore a related decision-making bias? Try our [Framing Effect Test](/test/framing-effect-test), which looks at how the wording of a choice — not just sunk costs — can shift what feels like the obvious decision.",
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
          question: "What is the sunk cost fallacy?",
          answer:
            "It's the tendency to continue investing in something because of resources already spent on it, even when that past spending is irrelevant to whether continuing actually makes sense going forward.",
        },
        {
          question: "Is it always irrational to continue in these scenarios?",
          answer:
            "Not necessarily — real decisions can have legitimate future-focused reasons to continue. The fallacy specifically refers to continuing purely because of what's already spent, not because of genuine future benefit.",
        },
        {
          question: "Why do sunk costs feel so hard to ignore?",
          answer:
            "Continuing can feel like it validates the original decision or effort, while stopping can feel like admitting the earlier spending was wasted — even though the past cost is identical either way.",
        },
        {
          question: "Is this related to escalation of commitment?",
          answer:
            "Yes — escalation of commitment is a closely related concept from organizational psychology describing the tendency to increase investment in a failing course of action, often specifically to justify earlier spending.",
        },
        {
          question: "How can I make more rational sunk-cost decisions?",
          answer:
            "A common technique is to mentally set aside what's already been spent entirely and ask only: knowing everything I know now, would I choose to start this from scratch today?",
        },
      ],
    },
  ],
};
