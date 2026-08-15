import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Overconfidence Test to see how well-calibrated your confidence really is. Give 90% confidence ranges for trivia questions and see how many actually contain the answer.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures calibration — whether your stated confidence level matches how often you're actually correct.",
        },
      ],
    },
  ],
};
