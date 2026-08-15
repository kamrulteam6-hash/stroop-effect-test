import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Verbal Paired Associates Test to study word pairs and test your free recall of the exact matching word.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures verbal associative memory using free recall — you must produce the exact paired word from memory rather than just recognizing it among options.",
        },
      ],
    },
  ],
};
