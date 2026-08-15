import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Serial Addition Test (PASAT-style) to add consecutive digits under time pressure, measuring processing speed and working memory.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures processing speed and working memory under time pressure, based on the Paced Auditory Serial Addition Test (PASAT) paradigm.",
        },
      ],
    },
  ],
};
