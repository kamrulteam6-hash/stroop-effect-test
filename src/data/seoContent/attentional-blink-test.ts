import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Attentional Blink Test to measure the temporary dip in attention that follows spotting a rapid target in a stream of letters.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures the attentional blink — a brief period after detecting one target during which a second target is harder to notice.",
        },
      ],
    },
  ],
};
