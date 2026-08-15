import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Brain Age Test to complete three quick minigames — reaction, math, and memory — for a fun composite brain age estimate.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It combines reaction speed, quick math, and memory span into a playful composite brain age estimate, for entertainment rather than clinical measurement.",
        },
      ],
    },
  ],
};
