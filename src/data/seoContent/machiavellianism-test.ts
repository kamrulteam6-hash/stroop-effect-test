import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Machiavellianism Test to answer short statements about strategy, trust, and manipulation for an informal trait screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported cynicism, strategic manipulation, and ends-justify-means thinking, the traits associated with Machiavellianism.",
        },
      ],
    },
  ],
};
