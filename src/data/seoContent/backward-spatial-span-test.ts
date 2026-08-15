import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Backward Spatial Span Test to measure your visuospatial working memory by recalling sequences in reverse order.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures visuospatial working memory using a Corsi block-style task where sequences must be recalled in reverse order, which is more demanding than forward recall.",
        },
      ],
    },
  ],
};
