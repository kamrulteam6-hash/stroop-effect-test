import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Error Checking Test to compare records, codes, and figures and spot exact matches versus subtle errors, in the style of clerical aptitude tests.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures how accurately and quickly you can spot mismatches between two sets of data, a core clerical and administrative skill.",
        },
      ],
    },
  ],
};
