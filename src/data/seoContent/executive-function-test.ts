import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Executive Function Test to complete three quick rounds covering inhibition, working memory, and planning for a composite score.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It combines three quick rounds — inhibition, working-memory updating, and planning — into a composite executive function breakdown.",
        },
      ],
    },
  ],
};
