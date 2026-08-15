import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Concentration Test to subtract 7 repeatedly from a starting number, holding the running total in your head.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures sustained mental concentration using a serial-subtraction task inspired by the classic 'serial sevens' exercise.",
        },
      ],
    },
  ],
};
