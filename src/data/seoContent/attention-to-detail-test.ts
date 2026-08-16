import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Attention to Detail Test to spot the small differences, mismatches, and errors hidden in text, numbers, and lists, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures how carefully you notice small errors, typos, and inconsistencies in text, numbers, and lists.",
        },
      ],
    },
  ],
};
