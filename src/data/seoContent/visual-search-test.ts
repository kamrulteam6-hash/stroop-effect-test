import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Visual Search Test to measure how quickly you can find a target among distractors — a core skill in everyday scanning and attention.",
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
          answer: "It measures visual search speed — how quickly you can locate a target among distracting items.",
        },
      ],
    },
  ],
};
