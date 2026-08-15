import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Flicker Change Detection Test to find the one item that changes as a scene flickers between two nearly identical versions.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures change blindness — how difficult it is to detect a large visual change when it's masked by a brief interruption.",
        },
      ],
    },
  ],
};
