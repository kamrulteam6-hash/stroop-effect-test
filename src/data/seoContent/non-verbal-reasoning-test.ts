import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Non-Verbal Reasoning Test to solve puzzles using only shapes, patterns, and figures, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual-spatial logical reasoning by testing your ability to identify patterns in shapes and figures without relying on language.",
        },
      ],
    },
  ],
};
