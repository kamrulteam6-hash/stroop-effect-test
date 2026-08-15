import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Dark Triad Test to answer short statements measuring narcissism, Machiavellianism, and psychopathy together.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported traits across the Dark Triad: narcissism, Machiavellianism, and psychopathy.",
        },
      ],
    },
  ],
};
