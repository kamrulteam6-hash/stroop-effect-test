import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Face Blindness Test to answer short statements about everyday face recognition for an informal, non-diagnostic prosopagnosia screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported everyday face-recognition difficulties often discussed in relation to prosopagnosia (face blindness). It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
