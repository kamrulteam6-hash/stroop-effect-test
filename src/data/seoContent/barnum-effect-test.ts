import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Horoscopes, cold readings, and some personality quizzes have a trick in common: they use statements so vague and universally applicable that almost anyone reading them feels personally described. This test lets you experience that trick directly — answer a few quick questions, get a \"personalized\" reading, and rate how accurate it feels before we show you what's actually going on.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Barnum Effect Test Works",
    },
    {
      type: "paragraph",
      text: "You'll answer a handful of quick, casual questions — nothing serious, just enough to feel like you're generating a personalized profile. You'll then receive a written personality reading and rate, on a slider from 0 to 100%, how accurately it describes you. Once you submit your rating, the reveal explains exactly how the reading was actually generated.",
    },
    {
      type: "heading",
      text: "Where the Barnum Effect Comes From",
    },
    {
      type: "paragraph",
      text: "The effect is named after showman P.T. Barnum, famous for the (possibly apocryphal) phrase about having \"a little something for everyone,\" and was scientifically demonstrated by psychologist Bertram Forer in a 1948 study — which is why it's also called the Forer effect. Forer gave every student in his class the exact same generic personality description, told them it was based on a personality test they'd taken, and asked them to rate its accuracy from 0 to 5. The average rating came out to about 4.26, or roughly 85% — remarkably high for a description everyone received identically.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Vague Statements Feel So Personal",
    },
    {
      type: "paragraph",
      text: "The statements that work best for this effect share a specific quality: they're worded to feel specific while actually applying to almost anyone. \"You sometimes doubt whether you've made the right decision\" describes nearly every person alive, but phrased personally and confidently, it feels like genuine insight. This is a big part of why astrology, tarot readings, and some pop-psychology personality tests feel so uncannily accurate to people, even when the underlying content is essentially the same for everyone who reads it.",
    },
    {
      type: "heading",
      text: "Where You'll See This Effect in the Wild",
    },
    {
      type: "list",
      items: [
        "Horoscopes and astrology readings, which use broadly applicable statements tied to your sign.",
        "Cold reading techniques used by some psychics and mediums, who watch for reactions and adjust vague statements accordingly.",
        "Certain low-quality online personality quizzes designed to feel insightful regardless of your actual answers.",
        "Fortune cookies and generic motivational content that feels oddly relevant despite being mass-produced.",
      ],
    },
    {
      type: "callout",
      icon: "🔮",
      title: "Knowing about it doesn't fully protect you",
      tone: "gold",
      text: "Even people who understand the Barnum effect in advance often still rate these readings as fairly accurate — the pull toward self-relevant interpretation is strong and largely automatic.",
    },
    {
      type: "paragraph",
      text: "Curious about a different kind of everyday illusion? Try our [False Memory Test](/test/false-memory-test), which shows how your memory can create convincing false recollections."
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
          question: "Did my answers to the quiz questions actually affect my reading?",
          answer:
            "No — the reading is randomly selected from a small set of generic descriptions regardless of how you answer the earlier questions, which is the entire point of the demonstration.",
        },
        {
          question: "What's the difference between the Barnum effect and the Forer effect?",
          answer:
            "They refer to the same phenomenon. It's called the Forer effect after psychologist Bertram Forer's 1948 study, and the Barnum effect after showman P.T. Barnum, associated with broad, crowd-pleasing appeal.",
        },
        {
          question: "Why did people in Forer's original study rate a generic description so highly?",
          answer:
            "Because the statements were deliberately written to be vague, positively framed, and applicable to almost anyone, while still feeling specific and personally meaningful when read individually.",
        },
        {
          question: "Does this mean all personality tests are meaningless?",
          answer:
            "No — validated psychological instruments like the Big Five are built and tested very differently from Barnum-style readings, using statistical analysis to ensure questions actually differentiate between people rather than describing everyone similarly.",
        },
        {
          question: "Why does the effect work even when people expect it?",
          answer:
            "Self-relevant interpretation tends to happen quickly and automatically, so simply knowing about the effect intellectually doesn't fully prevent the felt sense that a vague statement describes you personally.",
        },
      ],
    },
  ],
};
