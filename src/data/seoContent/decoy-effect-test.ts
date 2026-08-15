import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Decoy Effect Test to see how a strategically placed decoy option can steer your everyday purchase decisions.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures susceptibility to the decoy effect (asymmetric dominance) — how an inferior third option can shift preference toward a specific target option.",
        },
      ],
    },
  ],
};
