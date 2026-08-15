import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Narcissism Test to answer short statements about grandiosity and entitlement for an informal trait screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported narcissistic traits, such as grandiosity, entitlement, and need for admiration. It is not a diagnostic tool.",
        },
      ],
    },
  ],
};
