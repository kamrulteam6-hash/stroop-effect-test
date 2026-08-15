import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Burnout Test to answer short statements about exhaustion and detachment from work or responsibilities for an informal screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported exhaustion and cynicism, two dimensions often discussed in occupational burnout research. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
