import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Bipolar Test to answer short statements about high-energy and low-mood periods for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported patterns of elevated, high-energy periods and low-mood periods often discussed in relation to bipolar disorder. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
