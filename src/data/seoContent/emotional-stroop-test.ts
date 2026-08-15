import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Emotional Stroop Test to measure how emotionally charged words slow down your ink-color naming speed.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures emotional interference — the tendency for emotionally significant words to slow reaction time even when their meaning is irrelevant to the task.",
        },
      ],
    },
  ],
};
