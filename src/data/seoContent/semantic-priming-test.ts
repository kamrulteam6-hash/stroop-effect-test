import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Right before you read a word, seeing a related word — even one you barely noticed — can quietly make you recognize it faster. This is semantic priming, a foundational finding in how your brain stores and retrieves meaning, and this test lets you measure the effect on your own reaction times.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Semantic Priming Test Works",
    },
    {
      type: "paragraph",
      text: "Each trial briefly flashes a prime word, followed almost immediately by a target string. Your job is to decide, as fast as possible, whether the target is a real word or a made-up non-word, using the Left (Word) or Right (Not a Word) arrow keys. Some targets are preceded by a closely related prime, some by an unrelated one, and some trials use non-words as a control. Your results compare your average response time for related versus unrelated word pairs.",
    },
    {
      type: "heading",
      text: "The Research Behind Lexical Decision Tasks",
    },
    {
      type: "paragraph",
      text: "This test is based on the lexical decision task, a standard method in psycholinguistics for studying how words are recognized and stored in memory. Landmark research by David Meyer and Roger Schvaneveldt in the early 1970s first demonstrated that people respond faster to a word like \"nurse\" when it follows a related word like \"doctor\" than when it follows an unrelated word — a robust effect that has since been replicated across thousands of studies and forms a cornerstone of modern theories of how meaning is organized in memory.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Priming Reveals About Memory Organization",
    },
    {
      type: "paragraph",
      text: "The leading explanation for this effect is spreading activation — the idea that concepts in memory are stored as an interconnected network, and activating one concept (like \"doctor\") automatically sends a wave of partial activation to closely related concepts (like \"nurse,\" \"hospital,\" and \"medicine\"). When the related target then appears, it's already partially \"pre-activated,\" so your brain needs less additional processing to recognize it — shaving real, measurable milliseconds off your response time.",
    },
    {
      type: "heading",
      text: "Tips for a Cleaner Result",
    },
    {
      type: "list",
      items: [
        "Respond as quickly as you comfortably can — hesitating to \"think it through\" defeats the purpose of measuring an automatic effect.",
        "Keep your fingers resting near the arrow keys throughout the test for the fastest, most consistent response times.",
        "Don't worry about getting every trial right — the interesting comparison is your relative speed, not your accuracy alone.",
        "Try the test again on a different day; priming effects can vary somewhat with attention and fatigue.",
      ],
    },
    {
      type: "callout",
      icon: "💭",
      title: "A well-established, automatic effect",
      tone: "gold",
      text: "Semantic priming happens largely outside conscious control — you don't have to try to notice the connection between prime and target for the speed boost to occur.",
    },
    {
      type: "paragraph",
      text: "Curious about a related word-based memory illusion? Try our [False Memory Test](/test/false-memory-test), which shows how the same kind of associative activation can create a convincing false memory.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What is a lexical decision task?",
          answer:
            "It's a standard experimental method where participants judge, as quickly as possible, whether a presented string of letters is a real word or not — widely used to study how words are recognized and processed.",
        },
        {
          question: "Who discovered the semantic priming effect?",
          answer:
            "Psychologists David Meyer and Roger Schvaneveldt first demonstrated it in the early 1970s, showing that related word pairs produced faster recognition times than unrelated pairs.",
        },
        {
          question: "Why does a related prime word speed up my response?",
          answer:
            "The leading explanation is spreading activation — activating one concept in memory partially pre-activates closely related concepts, so a related target requires less additional processing to recognize.",
        },
        {
          question: "Can I consciously prevent the priming effect?",
          answer:
            "Not easily — priming operates largely automatically and outside conscious control, which is part of why it's considered such a robust and reliable finding in psycholinguistics.",
        },
        {
          question: "Why are non-word trials included?",
          answer:
            "Non-word trials serve as a control condition, requiring you to genuinely evaluate whether each string is a real word rather than just reacting to a fixed pattern, which keeps the word/non-word judgment meaningful throughout the test.",
        },
      ],
    },
  ],
};
