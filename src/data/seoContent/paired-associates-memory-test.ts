import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Paired Associates Memory Test to challenge your associative memory. Study word pairs, then recall which word was paired with each cue.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures associative (paired-associate) memory — your ability to form and retrieve links between two unrelated items.",
        },
      ],
    },
  ],
};
