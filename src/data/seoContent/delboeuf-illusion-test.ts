import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Delboeuf Illusion Test to measure how a surrounding ring distorts your perception of a circle's true size.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures susceptibility to the Delboeuf illusion, where a surrounding ring changes the perceived size of an enclosed circle.",
        },
      ],
    },
  ],
};
