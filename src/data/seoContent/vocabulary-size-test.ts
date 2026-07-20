import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How many words do you actually know? Vocabulary size tests use a clever sampling method borrowed from linguistics research: instead of asking every word in the dictionary, they test a small sample and extrapolate — while mixing in made-up decoy words to catch overconfident guessing.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Vocabulary Size Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see a mixed list of words — most are real English words spanning common to more advanced vocabulary, and a handful are entirely made up. Click every word you genuinely know the meaning of, and leave the rest unmarked. Don't guess on the unfamiliar-looking ones — the decoy words exist specifically to correct for that. Your result is an estimated total vocabulary size, adjusted down based on how many decoys you mistakenly marked as known.",
    },
    {
      type: "heading",
      text: "The Sampling Method Behind Vocabulary Testing",
    },
    {
      type: "paragraph",
      text: "No test can realistically ask about every word in a language, so real vocabulary size research relies on statistical sampling: test a representative subset of words, measure what fraction someone recognizes, and scale that percentage up to estimate their total vocabulary. This approach, used by linguists and popularized by tools like Test Your Vocab and Ghent University's vocabulary research projects, depends heavily on correcting for false positives — people who click words they don't actually know, whether from guessing or overconfidence — which is exactly why decoy non-words are mixed into the real ones.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Decoy Words Matter",
    },
    {
      type: "paragraph",
      text: "Without decoys, a vocabulary test would simply reward confident guessing — someone willing to mark unfamiliar words as \"known\" would score artificially high. By including plausible-sounding fake words in the mix, the test can measure your personal false-positive rate and subtract an equivalent adjustment from your real-word score, producing a more honest estimate that reflects actual recognition rather than guesswork.",
    },
    {
      type: "heading",
      text: "Tips for an Accurate Result",
    },
    {
      type: "list",
      items: [
        "Only mark words you could confidently define or use correctly in a sentence.",
        "If a word looks vaguely familiar but you can't pin down its meaning, leave it unmarked.",
        "Resist the instinct to mark 'sophisticated-sounding' words just because they seem like they should be real.",
        "Take your time — there's no timer, so accuracy matters more than speed here.",
      ],
    },
    {
      type: "callout",
      icon: "📚",
      title: "A fun estimate, not a linguistic assessment",
      tone: "gold",
      text: "This test uses a small sample scaled up for an approximate, entertaining estimate — not a rigorous, validated measurement of your full vocabulary the way academic linguistic research would conduct it.",
    },
    {
      type: "paragraph",
      text: "Curious about a different kind of verbal memory challenge? Try our [Verbal Memory Test](/test/verbal-memory-test), which tests whether you remember seeing specific words rather than whether you know their meaning.",
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
          question: "How accurate is this vocabulary size estimate?",
          answer:
            "It's a rough, entertaining estimate based on a small word sample scaled up mathematically, not a precise linguistic measurement — real academic vocabulary research uses much larger, carefully validated word samples.",
        },
        {
          question: "Why are there fake words mixed in?",
          answer:
            "Decoy non-words let the test measure how often you mark unfamiliar words as known, so that rate can be subtracted from your score — without them, confident guessing would inflate results.",
        },
        {
          question: "What's an average vocabulary size for an adult?",
          answer:
            "Estimates vary widely by methodology, but many studies suggest native-speaking adults typically know tens of thousands of words, with wide individual variation based on education, reading habits, and profession.",
        },
        {
          question: "Should I mark a word if I've heard it but don't know its exact meaning?",
          answer:
            "No — for the most honest estimate, only mark words where you're confident you know the actual meaning, not just words that sound familiar.",
        },
        {
          question: "Can my vocabulary size increase over time?",
          answer:
            "Yes — vocabulary tends to grow steadily throughout life for most people, particularly through reading, since exposure to new words in context is one of the most effective ways to learn and retain them.",
        },
      ],
    },
  ],
};
