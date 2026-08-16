import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Decision Speed Test to click the largest number as fast as you can and measure how choice count affects your decision speed.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures how quickly and accurately you make simple decisions as the number of available choices grows from 2 to 4.",
        },
      ],
    },
  ],
};
