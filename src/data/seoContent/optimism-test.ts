import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Optimism Test to answer 10 short statements about how you typically view the future and uncertain situations, with an instant, informal result.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures dispositional optimism — how much you tend to expect positive outcomes, especially in uncertain situations.",
        },
      ],
    },
  ],
};
