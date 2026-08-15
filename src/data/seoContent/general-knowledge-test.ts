import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free General Knowledge Test to answer 12 trivia questions spanning geography, science, history, and culture for an instant score.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures general trivia knowledge across common topics like geography, science, history, and culture.",
        },
      ],
    },
  ],
};
