import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free PTSD Test to answer short statements about reactions to a difficult past event for an informal, non-diagnostic screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported symptoms commonly associated with post-traumatic stress, such as intrusive memories, avoidance, and heightened arousal. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
