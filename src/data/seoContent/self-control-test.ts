import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Self-Control Test to answer 10 short statements about how well you resist temptation and stick to your goals, with an instant, informal result.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures trait self-control — how consistently you can resist impulses and temptations that conflict with your long-term goals.",
        },
      ],
    },
  ],
};
