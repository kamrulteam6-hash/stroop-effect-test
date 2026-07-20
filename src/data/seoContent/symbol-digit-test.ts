import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Symbol Digit Modalities Test (SDMT) is one of the most widely used processing-speed tasks in clinical neuropsychology. The idea is deceptively simple: a key pairs nine abstract symbols with the digits 1-9, and you have to convert as many symbols to their matching digit as possible before time runs out. This free version gives you a 90-second, browser-based take on the same basic mechanic.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Symbol Digit Test Works",
    },
    {
      type: "paragraph",
      text: "At the start of each run, nine symbols are randomly paired with the digits 1-9 and shown as a key at the top of the screen. A random symbol from that set then appears in the center — type the digit that matches it, using either your keyboard's number keys or the on-screen number pad, and the next symbol appears immediately. Keep converting as many as you can before the 90-second timer runs out. Your result shows total correct matches and your accuracy rate.",
    },
    {
      type: "heading",
      text: "Why This Test Is Used in Real Neuropsychology",
    },
    {
      type: "paragraph",
      text: "The original SDMT, developed by psychologist Aaron Smith in the 1970s, is used clinically to assess processing speed, sustained attention, and working memory together in a single quick task. Because it requires you to constantly hold the symbol-digit key in mind, scan for the right symbol, and respond quickly and repeatedly, it's sensitive to subtle changes in cognitive processing speed — which is part of why it remains a standard tool in research on conditions like multiple sclerosis, traumatic brain injury, and normal cognitive aging.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Your Score Reflects",
    },
    {
      type: "paragraph",
      text: "A higher correct-match count in 90 seconds generally reflects faster visual scanning, quicker symbol-to-digit recall, and efficient motor response — the combination clinicians refer to broadly as processing speed. Because every attempt uses a freshly randomized key, you can't simply memorize the answers between tries, so improvement across multiple attempts more likely reflects genuine gains in scanning strategy and response speed rather than familiarity with a fixed answer key.",
    },
    {
      type: "callout",
      icon: "🔣",
      title: "This is a simplified, informal version",
      tone: "gold",
      text: "This free online version is for casual self-testing and entertainment, not a clinical or diagnostic instrument. Real neuropsychological SDMT assessments are administered and interpreted by trained professionals.",
    },
    {
      type: "paragraph",
      text: "Want another fast processing-speed challenge? Try our [Mental Math Test](/test/mental-math-test) for a numbers-based take on quick, repeated responses under time pressure.",
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
          question: "What does SDMT stand for?",
          answer:
            "SDMT stands for Symbol Digit Modalities Test, a processing-speed task developed by psychologist Aaron Smith that's widely used in clinical neuropsychology.",
        },
        {
          question: "Is this the real clinical version of the SDMT?",
          answer:
            "No. This is a simplified, free, browser-based version for casual self-testing and general interest. The real clinical SDMT is administered and scored by trained professionals as part of a formal neuropsychological assessment.",
        },
        {
          question: "What does the SDMT actually measure?",
          answer:
            "It's generally understood to reflect processing speed — how quickly you can scan, recall, and respond to visual information — along with elements of sustained attention and working memory.",
        },
        {
          question: "Why does the symbol-digit key change every time?",
          answer:
            "Randomizing the key each run prevents you from simply memorizing a fixed answer pattern, so your score more accurately reflects genuine scanning and response speed rather than familiarity with a specific key.",
        },
        {
          question: "What's a good score on this test?",
          answer:
            "There's no universal official cutoff for casual online versions, but most people complete somewhere between 40 and 70 correct matches in 90 seconds with practice — the most useful comparison is against your own previous attempts.",
        },
      ],
    },
  ],
};
