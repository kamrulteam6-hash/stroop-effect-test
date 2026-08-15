import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Wisconsin Card Sorting Test to challenge your cognitive flexibility. Sort cards by a hidden rule that secretly changes partway through, and see how quickly you adapt.",
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
          answer: "It challenges cognitive flexibility — your ability to shift strategy when the rules change without warning.",
        },
      ],
    },
  ],
};
