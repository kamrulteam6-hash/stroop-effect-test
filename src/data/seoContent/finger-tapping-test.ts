import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Finger Tapping Test is one of the simplest and most enduring measures of fine motor speed in neuropsychology — count how many times someone can tap in a fixed window, then compare it between hands. This free version walks you through both hands automatically, giving you a quick, personal comparison of your dominant versus non-dominant motor speed.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Finger Tapping Test Works",
    },
    {
      type: "paragraph",
      text: "You'll complete two 10-second rounds. In round one, tap the on-screen button as fast as possible using your dominant hand's index finger (or press spacebar if that's easier). After a short break, round two repeats the same thing with your non-dominant hand. Your result shows both counts side by side, plus the percentage gap between them.",
    },
    {
      type: "heading",
      text: "Why This Simple Task Is Clinically Useful",
    },
    {
      type: "paragraph",
      text: "The original finger tapping test, sometimes called the Halstead finger oscillation test, has been used in neuropsychology since the mid-20th century as a quick, low-effort measure of fine motor speed and motor control. Because it's simple enough to require almost no learning curve, it's useful precisely because differences in performance are more likely to reflect genuine motor speed than differences in strategy or task understanding — unlike more complex cognitive tasks.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What the Hand Gap Usually Means",
    },
    {
      type: "paragraph",
      text: "Most right-handed people tap somewhat faster with their right hand, and most left-handed people tap somewhat faster with their left — a small dominant-hand advantage is the normal, expected pattern, not a warning sign. Research using this kind of task has generally found dominant-hand tapping speeds run a modest amount higher than the non-dominant hand in healthy adults. A very large or reversed gap is usually just natural variation, though unusually asymmetric results over time are one of the things clinicians look at in real motor-function assessments.",
    },
    {
      type: "heading",
      text: "Tips for a Fair Comparison",
    },
    {
      type: "list",
      items: [
        "Use the same tapping technique (index finger, same posture) for both rounds so the comparison is fair.",
        "Rest your hand naturally rather than tensing it up — over-gripping can actually slow your tapping rate.",
        "Avoid warming up only one hand before starting; try both rounds cold for a fair comparison.",
        "Retest on a different day if your result seems unusually low — fatigue affects motor speed noticeably.",
      ],
    },
    {
      type: "callout",
      icon: "👆",
      title: "Not a diagnostic tool",
      tone: "gold",
      text: "This is a simplified, casual version for personal interest, not a clinical motor-function assessment. If you have concerns about a genuine motor or neurological issue, consult a medical professional.",
    },
    {
      type: "paragraph",
      text: "Looking for a different reaction-based challenge? Try our [Reaction Time Test](/test/reaction-time-test) to measure how fast you respond to a visual signal rather than sustained tapping speed.",
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
          question: "What is the finger tapping test used for?",
          answer:
            "In clinical neuropsychology, it's used as a simple, quick measure of fine motor speed and motor control, and has been used since the mid-20th century in research and assessment settings.",
        },
        {
          question: "Is it normal for one hand to be much faster than the other?",
          answer:
            "A modest advantage for your dominant hand is typical and expected. Large differences are usually just natural individual variation rather than a sign of a problem.",
        },
        {
          question: "Can I improve my tapping speed with practice?",
          answer:
            "Some improvement is common as your hand and finger get warmed up and you find a more efficient tapping rhythm, though fine motor speed tends to be fairly stable overall.",
        },
        {
          question: "Should I use one finger or multiple fingers?",
          answer:
            "The traditional version of this test uses a single finger, typically the index finger, tapping repeatedly — using multiple fingers or a different technique would make round-to-round and hand-to-hand comparisons less meaningful.",
        },
        {
          question: "Why does the test use two separate 10-second rounds instead of one longer one?",
          answer:
            "Ten seconds is long enough to get a stable tap count while short enough to avoid fatigue skewing the result, which is why brief timed windows are the standard approach for this kind of motor speed measurement.",
        },
      ],
    },
  ],
};
