import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Face Memory Test to challenge your facial recognition memory. Study a set of faces, then pick out which ones you've seen before among new distractors.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures facial recognition memory — your ability to encode and later recognize previously seen faces among new ones.",
        },
      ],
    },
  ],
};
