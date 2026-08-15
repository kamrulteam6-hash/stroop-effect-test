import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Negative Priming Test to measure how ignoring a distractor slows you down when it later becomes the target.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures negative priming — the slowdown in responding to a stimulus that was previously ignored as a distractor, reflecting cognitive inhibition.",
        },
      ],
    },
  ],
};
