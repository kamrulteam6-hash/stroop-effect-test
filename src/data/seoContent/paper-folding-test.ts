import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Paper Folding Test to predict hole positions after unfolding paper, measuring your spatial visualization ability.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial visualization — your ability to mentally simulate folding and unfolding operations, a common component of IQ and aptitude tests.",
        },
      ],
    },
  ],
};
