import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Change Blindness Test to see how easily large visual changes can go unnoticed when interrupted by a brief blank flash.",
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
          answer: "It demonstrates change blindness — the surprising difficulty of detecting changes to a scene when the transition is masked.",
        },
      ],
    },
  ],
};
