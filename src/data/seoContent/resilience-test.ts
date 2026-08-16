import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Resilience Test to answer 10 short statements about how you typically respond to setbacks and stress, with an instant, informal result.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures how well you tend to adapt and recover after setbacks, stress, and difficult situations.",
        },
      ],
    },
  ],
};
