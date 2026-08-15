import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Temporal Discounting Test to map your personal discounting curve across multiple time horizons, from a week to five years.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures temporal discounting — how the value you place on a future reward changes depending on how long you'd have to wait for it.",
        },
      ],
    },
  ],
};
