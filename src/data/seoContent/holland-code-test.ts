import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Holland Code (RIASEC) Test to answer 18 short statements and discover your career interest type: Realistic, Investigative, Artistic, Social, Enterprising, or Conventional.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures your career interest profile using John Holland's widely used RIASEC framework, which groups interests into six broad types.",
        },
      ],
    },
  ],
};
