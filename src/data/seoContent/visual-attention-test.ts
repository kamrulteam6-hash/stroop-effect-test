import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Visual Attention Test to find the odd shape in a growing grid and measure your visual search speed and accuracy.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual search ability — how quickly and accurately you can find a target shape hidden among many similar distractors.",
        },
      ],
    },
  ],
};
