import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Take this free People-Pleasing Test to answer short statements about how you respond to other people's needs and expectations.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does this test measure?",
          answer: "It measures self-reported people-pleasing tendencies — how much you prioritize others' approval and comfort over your own needs.",
        },
      ],
    },
  ],
};
