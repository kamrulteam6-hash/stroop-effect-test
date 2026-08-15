import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Psychopathy Test to answer short statements about risk, guilt, and manipulation for an informal trait screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported traits from the callous, impulsive, and manipulative cluster commonly studied under this label. It is not a diagnostic or forensic tool.",
        },
      ],
    },
  ],
};
