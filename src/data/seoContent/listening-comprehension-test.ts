import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Listening Comprehension Test to listen to a spoken passage and answer questions to measure your listening comprehension.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures how well you understand and retain information from a spoken passage read aloud by your browser.",
        },
      ],
    },
  ],
};
