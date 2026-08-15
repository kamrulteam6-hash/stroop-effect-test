import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Empathy Test to answer short statements about how you respond to other people's feelings and measure your empathy.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported empathic responsiveness — how readily you notice and respond to other people's emotions and perspectives.",
        },
      ],
    },
  ],
};
