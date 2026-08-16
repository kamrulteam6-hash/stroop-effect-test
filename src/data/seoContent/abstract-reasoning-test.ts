import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Abstract Reasoning Test to spot the pattern in shape sequences and pick the option that logically continues it, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures non-verbal logical reasoning by testing your ability to identify patterns in shapes, sequences, and figures.",
        },
      ],
    },
  ],
};
