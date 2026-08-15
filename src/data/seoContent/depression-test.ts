import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Depression Test to answer short statements about your mood over the past two weeks for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported symptoms commonly associated with low mood, such as sleep, energy, and interest levels. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
