import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Self-Esteem Test to answer short statements about how you see and feel about yourself for an informal self-worth snapshot.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported global self-esteem — your overall sense of self-worth and self-acceptance.",
        },
      ],
    },
  ],
};
