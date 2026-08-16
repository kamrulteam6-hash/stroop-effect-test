import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Auditory Memory Test to listen to a spoken word list and recall it to measure your auditory short-term memory.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures auditory short-term memory — how many spoken words you can recall after hearing a list read aloud once.",
        },
      ],
    },
  ],
};
