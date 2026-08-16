import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free DISC Personality Test to answer short statements and discover your primary DISC style: Dominance, Influence, Steadiness, or Conscientiousness.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures which of four DISC behavioral styles — Dominance, Influence, Steadiness, or Conscientiousness — you tend to default to.",
        },
      ],
    },
  ],
};
