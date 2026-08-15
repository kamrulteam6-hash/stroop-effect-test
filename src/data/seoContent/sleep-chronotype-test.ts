import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Sleep Chronotype Test to answer short statements about your energy and sleep patterns and discover your Lion, Bear, Wolf, or Dolphin chronotype.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported morningness and sleep sensitivity to estimate which of four popular sleep chronotypes best fits you.",
        },
      ],
    },
  ],
};
