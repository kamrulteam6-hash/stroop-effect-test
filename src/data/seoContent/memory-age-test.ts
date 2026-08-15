import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Memory Age Test to recall growing digit sequences for a fun memory age estimate.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It uses a growing digit-span recall task to produce a playful memory age estimate, for entertainment rather than clinical measurement.",
        },
      ],
    },
  ],
};
