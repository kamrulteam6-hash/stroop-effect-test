import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Locus of Control Test to answer 10 short statements about how much control you feel you have over life's outcomes, with an instant, informal result.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures whether you tend to attribute life outcomes mainly to your own actions (internal locus) or to outside forces like luck and circumstance (external locus).",
        },
      ],
    },
  ],
};
