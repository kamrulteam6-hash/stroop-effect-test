import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Focus Test to respond to a repeating color task and measure your focus score, accuracy, and response consistency.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures sustained focus through response accuracy and consistency (low variability in reaction time) across 24 trials.",
        },
      ],
    },
  ],
};
