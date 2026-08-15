import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Mental Rotation Test to challenge your spatial reasoning. Decide whether each rotated shape is a normal shape or a mirrored version of it, as quickly and accurately as you can.",
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
          answer: "It challenges mental rotation ability — the capacity to imagine how a shape would look if rotated in space.",
        },
      ],
    },
  ],
};
