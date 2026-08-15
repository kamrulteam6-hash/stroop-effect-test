import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Odd One Out Test to challenge your visual search speed. Find the one shape that's different from the rest in a grid, as fast as you can.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visual search speed — how quickly you can scan a grid and identify the one item that differs from the rest.",
        },
      ],
    },
  ],
};
