import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Grit Test to answer 10 short statements about your persistence and passion for long-term goals, with an instant, informal result.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures grit — the combination of passion and perseverance for long-term goals — inspired by Angela Duckworth's research.",
        },
      ],
    },
  ],
};
