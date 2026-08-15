import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Alexithymia Test to answer short statements about identifying and describing your own emotions for an informal trait screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported difficulty identifying and describing your own emotions, a trait sometimes called alexithymia.",
        },
      ],
    },
  ],
};
