import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Observation Skills Test to study a grid of icons and answer detail questions to measure how observant you are.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures observation and incidental memory — how much detail you notice and retain from a briefly studied scene.",
        },
      ],
    },
  ],
};
