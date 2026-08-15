import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Cognitive Age Test to complete two quick tasks — math and memory span — for a fun cognitive age estimate.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It combines quick math and memory span performance into a playful cognitive age estimate, for entertainment rather than clinical measurement.",
        },
      ],
    },
  ],
};
