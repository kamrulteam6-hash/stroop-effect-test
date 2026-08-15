import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Motion Aftereffect Test (waterfall illusion) to time how long illusory motion persists after adapting to a moving pattern.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures the motion aftereffect (waterfall illusion) — how long a stationary pattern appears to drift after your visual system adapts to sustained motion.",
        },
      ],
    },
  ],
};
