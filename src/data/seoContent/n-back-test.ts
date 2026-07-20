import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The N-Back Test is one of the most studied working-memory tasks in cognitive science. A tile lights up on a grid each round, and you have to click Match whenever the current tile is in the same position as it was N rounds earlier. Choose 1-Back for an easier introduction, or 2-Back and 3-Back for a genuinely demanding memory-updating challenge.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the N-Back Test Works",
    },
    {
      type: "paragraph",
      text: "Each trial briefly highlights one tile in a 3×3 grid. Your job is to compare the current position to the position from N trials ago — not the immediately previous one, unless you're playing 1-Back. If they match, click Match (or press spacebar) before the next tile appears. If they don't match, do nothing. Your accuracy score reflects both correctly caught matches (hits) and correctly ignored non-matches, since both are part of getting the task right.",
    },
    {
      type: "heading",
      text: "Why N-Back Is Different From Simple Memory Tasks",
    },
    {
      type: "paragraph",
      text: "Most memory tests — including our own Sequence Memory and Number Memory tests — ask you to hold a growing amount of information and recall it once, at the end. N-Back is different: it demands continuous updating. You have to keep a constantly shifting mental window of the last N positions active at all times, discarding old information and adding new information every single round, while comparing against a moving target. This makes it a genuine test of working memory's updating and manipulation function, not just its storage capacity.",
    },
    {
      type: "heading",
      id: "dual-n-back",
      text: "Single vs. Dual N-Back",
    },
    {
      type: "paragraph",
      text: "This version uses a single stream of visual information (tile position). The original, more famous version of this task — dual N-back — runs two independent streams at once, typically a visual position stream and a spoken letter stream, and asks you to track matches in both simultaneously. Dual N-back gained wide attention after a 2008 study suggested it might improve fluid intelligence with practice, a claim that later research has been more mixed on. Either way, it remains one of the most rigorous working-memory exercises used in cognitive research.",
    },
    {
      type: "heading",
      text: "Tips to Improve Your Score",
    },
    {
      type: "list",
      items: [
        "Start with 1-Back to get comfortable with the rhythm before jumping to 2-Back or 3-Back.",
        "Try silently rehearsing the last N positions in order as new tiles appear, updating your mental list each round.",
        "Don't second-guess a match — if you notice it, respond immediately.",
        "Stay relaxed; anxiety and rushing both tend to increase false alarms more than they help.",
        "Expect 2-Back and 3-Back to feel genuinely difficult at first — this is one of the harder tasks on this site by design.",
      ],
    },
    {
      type: "callout",
      icon: "🧩",
      title: "More working memory challenges",
      tone: "primary",
      text: "For a different kind of working memory test, try our [Sequence Memory Test](/test/sequence-memory-test), which asks you to reproduce a growing pattern rather than continuously track a moving comparison.",
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
          question: "What's a good N-Back score?",
          answer:
            "For 1-Back, accuracy above 90% is a good result. For 2-Back, 75-85% is solid for most people without extensive practice, and 3-Back is genuinely difficult — even 60-70% accuracy reflects real effort.",
        },
        {
          question: "Does N-Back training really improve intelligence?",
          answer:
            "A widely cited 2008 study suggested dual N-back training could improve fluid intelligence, but later research attempting to replicate this has produced mixed results. It's best understood as a genuine, challenging working-memory exercise rather than a guaranteed IQ booster.",
        },
        {
          question: "Why is my accuracy lower at higher N-levels?",
          answer:
            "Higher N-levels require holding more items in an actively updating memory buffer at once, which quickly runs into the real limits of working memory capacity — lower accuracy at 3-Back than 1-Back is expected and normal.",
        },
        {
          question: "What's the difference between this and dual N-back?",
          answer:
            "This version tracks a single visual stream (tile position). Dual N-back adds a second, independent stream (traditionally spoken letters) that you track simultaneously, which is considerably harder.",
        },
        {
          question: "Can I get better at N-Back with practice?",
          answer:
            "Yes — most people see accuracy improve within just a few sessions as they develop better rehearsal strategies, though N-Back remains a genuinely demanding task even with practice.",
        },
      ],
    },
  ],
};
