import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free Insomnia Test to answer short statements about difficulty sleeping over the past month for an informal screening.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported symptoms commonly associated with insomnia, such as difficulty falling asleep, staying asleep, and daytime impact.",
        },
      ],
    },
  ],
};
