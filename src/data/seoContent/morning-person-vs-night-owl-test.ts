import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Morning Person vs Night Owl Test to answer short statements about when you feel most alert and find your natural chronotype.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported morningness-eveningness — whether your natural energy and sleep timing lean toward mornings or nights.",
        },
      ],
    },
  ],
};
