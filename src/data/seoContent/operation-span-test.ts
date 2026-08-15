import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Operation Span Test (OSPAN) to measure your working memory capacity. Verify math equations while remembering a sequence of letters, then recall them in order.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures working memory span using a complex span task that combines processing (math verification) with storage (letter recall).",
        },
      ],
    },
  ],
};
