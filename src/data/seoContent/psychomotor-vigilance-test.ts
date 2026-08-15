import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Psychomotor Vigilance Test (PVT) to measure your sustained attention and reaction speed. Click as soon as the box turns green across 10 rounds with unpredictable wait times.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures psychomotor vigilance — your ability to sustain attention and react quickly to unpredictable stimuli over time.",
        },
      ],
    },
  ],
};
