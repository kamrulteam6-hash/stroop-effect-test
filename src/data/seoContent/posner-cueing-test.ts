import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Posner Cueing Test to measure how spatial cues speed up or slow down your reaction time to visual targets.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures spatial attention using the Posner cueing paradigm, comparing reaction times when a cue correctly versus incorrectly predicts the target location.",
        },
      ],
    },
  ],
};
