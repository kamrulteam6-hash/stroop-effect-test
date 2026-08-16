import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Inductive Reasoning Test to work out the underlying rule behind each set of examples and apply it to a new case, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your ability to identify a general rule from specific examples and apply that rule correctly to new situations.",
        },
      ],
    },
  ],
};
