import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Stress Test to answer short statements about how in control you've felt over the past month for an informal perceived-stress screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported perceived stress — how overwhelmed versus in control you've felt recently. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
