import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Choice Reaction Time Test to measure how quickly you can respond when you must choose between several possible responses, not just react to one signal.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures choice reaction time — how quickly you can identify a stimulus and select the correct response among several options.",
        },
      ],
    },
  ],
};
