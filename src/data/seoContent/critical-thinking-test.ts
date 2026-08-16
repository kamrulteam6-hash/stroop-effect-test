import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Critical Thinking Test to spot logical flaws, fallacies, and unfounded assumptions in short arguments and scenarios, with instant scoring and explanations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your ability to identify logical fallacies, weak arguments, and flawed reasoning in everyday scenarios.",
        },
      ],
    },
  ],
};
