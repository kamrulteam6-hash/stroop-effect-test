import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Base Rate Neglect Test to see how well you incorporate background statistical rates into probability judgments.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures base rate neglect — the tendency to ignore background statistical information in favor of specific-case details when estimating probability.",
        },
      ],
    },
  ],
};
