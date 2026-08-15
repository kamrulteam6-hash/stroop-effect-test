import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Dyslexia Test to answer short statements about reading and spelling for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported reading and written-language difficulties often discussed in relation to dyslexia. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
