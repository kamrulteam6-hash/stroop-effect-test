import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Decision-Making Style Test to answer short statements about how you approach decisions and discover your decision-making style.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of five decision-making styles — rational, intuitive, dependent, avoidant, or spontaneous — you tend to default to.",
        },
      ],
    },
  ],
};
