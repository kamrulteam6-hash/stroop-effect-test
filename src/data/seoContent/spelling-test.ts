import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Spelling Test to choose the correctly spelled word from commonly misspelled English words and get an instant score.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your ability to identify correctly spelled English words among common misspellings.",
        },
      ],
    },
  ],
};
