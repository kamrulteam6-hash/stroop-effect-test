import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Anxiety Test to answer short statements about worry and tension over the past two weeks for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported symptoms commonly associated with generalized anxiety, such as worry, restlessness, and tension. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
