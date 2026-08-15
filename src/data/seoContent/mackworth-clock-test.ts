import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Mackworth Clock Test to measure your sustained attention and vigilance. Watch a ticking clock hand and report rare double jumps.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures vigilance — your ability to sustain attention on a monotonous task and detect rare target events over time.",
        },
      ],
    },
  ],
};
