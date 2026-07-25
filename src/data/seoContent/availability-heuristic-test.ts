import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How common something feels and how common it actually is are two very different things. Vivid, memorable, or easily-imagined events tend to feel far more frequent than they really are, while common but unremarkable ones get underestimated. This is the availability heuristic, and this test challenges you with a few classic frequency judgments where intuition and the real numbers pull in opposite directions.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Availability Heuristic Test Works",
    },
    {
      type: "paragraph",
      text: "You'll answer 12 quick questions, each asking you to judge which of two things is more common. Pick whichever option genuinely feels more frequent to you. Your result reveals the actual answer for each one, along with a short explanation of why intuition and reality diverge — some are classic demonstrations from psychology research, and some are things you can verify with basic logic alone.",
    },
    {
      type: "heading",
      text: "The Research Behind This Heuristic",
    },
    {
      type: "paragraph",
      text: "The availability heuristic was named by psychologists Amos Tversky and Daniel Kahneman in a landmark 1973 paper. One of their most famous demonstrations asked people whether more English words start with the letter K, or have K as the third letter — most people confidently say the former, because words starting with K are much easier to mentally generate, even though words with K in the third position are actually more numerous. The heuristic describes a general shortcut: instead of calculating true frequency, we unconsciously substitute a related but different question — \"how easily can I think of examples?\"",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Vivid Events Feel More Common",
    },
    {
      type: "paragraph",
      text: "Dramatic, emotionally charged, or heavily reported events are easier to recall than mundane ones, so they get overweighted when we're estimating frequency. This is part of why plane crashes, which receive enormous media coverage but are extremely rare, tend to feel riskier than common but unremarkable causes of harm that rarely make headlines. The heuristic isn't a flaw in intelligence — it's a genuinely useful shortcut most of the time, since things that happen more often generally are easier to recall. It just breaks down specifically when memorability and true frequency get pulled apart by drama, media coverage, or personal experience.",
    },
    {
      type: "heading",
      text: "Where This Shows Up in Everyday Judgment",
    },
    {
      type: "list",
      items: [
        "Overestimating the risk of dramatic but rare events (like plane crashes or shark attacks) relative to common but unremarkable ones.",
        "Judging a product or idea as more popular simply because it's heavily advertised or frequently discussed.",
        "Assuming a personal experience or recent news story reflects a broader pattern.",
        "Underestimating gradual, low-visibility risks that rarely make dramatic headlines.",
      ],
    },
    {
      type: "callout",
      icon: "📰",
      title: "A useful shortcut most of the time",
      tone: "gold",
      text: "The availability heuristic works reasonably well in everyday life — it only leads you astray in the specific cases where memorability and true frequency diverge sharply.",
    },
    {
      type: "paragraph",
      text: "Curious about a related probability bias? Try our [Gambler's Fallacy Test](/test/gamblers-fallacy-test), which looks at how streaks of random events can distort your sense of what's likely to happen next.",
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
          question: "What is the availability heuristic?",
          answer:
            "It's a mental shortcut where people judge the frequency or probability of something based on how easily examples come to mind, rather than on actual statistics.",
        },
        {
          question: "Who identified the availability heuristic?",
          answer:
            "Psychologists Amos Tversky and Daniel Kahneman named and studied it in a landmark 1973 paper, using examples like word-frequency judgments to demonstrate the effect.",
        },
        {
          question: "Why do rare, dramatic events feel more common than they are?",
          answer:
            "Vivid or heavily reported events are easier to recall, and since recall ease is often mistaken for frequency, memorable rare events can end up feeling more common than statistically ordinary ones.",
        },
        {
          question: "Is the availability heuristic always a bad thing?",
          answer:
            "No — it's usually a reasonably efficient shortcut, since things that genuinely happen more often are often easier to recall. It only causes systematic errors when memorability and true frequency are pulled apart, often by media coverage or personal experience.",
        },
        {
          question: "How can I reduce the influence of this bias?",
          answer:
            "Actively seeking out actual statistics before making a judgment, rather than relying on how easily examples come to mind, is one of the most effective ways to counteract this heuristic.",
        },
      ],
    },
  ],
};
