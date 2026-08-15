import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Tower of Hanoi Test to challenge your planning ability. Move all the disks from the first peg to the last peg in as few moves as possible.",
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
          answer: "It challenges planning and problem-solving — thinking several moves ahead before acting.",
        },
      ],
    },
  ],
};
