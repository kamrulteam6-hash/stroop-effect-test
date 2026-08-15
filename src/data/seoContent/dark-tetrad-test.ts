import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Dark Tetrad Test to answer short statements measuring narcissism, Machiavellianism, psychopathy, and sadism together.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported traits across the Dark Tetrad: narcissism, Machiavellianism, psychopathy, and everyday sadism.",
        },
      ],
    },
  ],
};
