import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Stop Signal Test to challenge your response inhibition. Respond to arrow direction quickly, but withhold your response when a stop signal appears.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It challenges response inhibition — your ability to stop an already-initiated action.",
        },
      ],
    },
  ],
};
