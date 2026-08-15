import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Attention Age Test to complete a quick go/no-go attention check for a fun attention age estimate.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It uses a quick go/no-go task to produce a playful attention age estimate, for entertainment rather than clinical measurement.",
        },
      ],
    },
  ],
};
