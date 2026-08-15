import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free ADHD Test to answer short statements about attention and activity levels for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported inattentive and hyperactive-impulsive traits often discussed in relation to ADHD. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
