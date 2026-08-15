import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Confirmation Bias Test to discover whether you seek out disconfirming evidence or only evidence that confirms your hypothesis.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures confirmation bias using a card-selection task based on the classic Wason rule-discovery paradigm.",
        },
      ],
    },
  ],
};
