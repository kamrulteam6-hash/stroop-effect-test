import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Spatial Search Test to measure your spatial location memory and search speed across multiple rounds.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial location memory — how quickly and accurately you can recall and locate a briefly shown position on a grid.",
        },
      ],
    },
  ],
};
