import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Pattern Completion Test to identify the next item in a repeating shape and color sequence, testing pattern recognition.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures pattern recognition — your ability to identify a repeating rule in a sequence and correctly predict what comes next.",
        },
      ],
    },
  ],
};
