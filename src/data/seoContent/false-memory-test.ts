import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you \"remember\" something that never actually happened? This test recreates one of the most reliable findings in memory research: given a list of closely related words, most people confidently — and incorrectly — recall seeing a word that was never actually presented, simply because it fits so naturally with everything around it.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the False Memory Test Works",
    },
    {
      type: "paragraph",
      text: "You'll study 24 words presented one at a time, drawn from three groups that are each built around a common, unstated theme. Afterward, you'll take a recognition test with a mix of words you actually saw, a handful of brand-new unrelated words, and three special \"lure\" words that were never shown at all — but are strongly related to each group's theme. Click every word you remember seeing, then see whether the lure words fooled you.",
    },
    {
      type: "heading",
      text: "The Science Behind the Illusion",
    },
    {
      type: "paragraph",
      text: "This test is based on the DRM paradigm, named after researchers Deese, Roediger, and McDermott, who built on earlier work by James Deese in the 1950s and revived it in a landmark 1995 study. The effect happens because your brain doesn't store memories like a video recording — it stores the gist and meaning of what you experience. When you study a list of words all related to \"sleep,\" your mind naturally activates the concept of sleep itself, even though the word was never shown. At recall time, that activated concept feels just as familiar as the words you actually saw.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why This Matters Beyond a Word List",
    },
    {
      type: "paragraph",
      text: "The DRM effect is more than a memory party trick — it's one of the pieces of evidence researchers point to when explaining why eyewitness testimony and personal recollections can feel completely certain while still being factually wrong. Because false memories generated this way feel just as vivid and confident as real ones from the inside, this paradigm has been influential in legal and forensic psychology discussions about the reliability of memory under oath.",
    },
    {
      type: "heading",
      text: "Tips for Understanding Your Result",
    },
    {
      type: "list",
      items: [
        "Falling for one or more lure words is completely normal — most people do, and it isn't a sign of a bad memory.",
        "A low unrelated-word false alarm count alongside a lure false alarm shows the effect is specific to meaning-based association, not general carelessness.",
        "Try to notice the theme of each word group as you go — awareness sometimes reduces, but rarely eliminates, the effect.",
        "Take the test again on a different day; your susceptibility can vary somewhat between attempts.",
      ],
    },
    {
      type: "callout",
      icon: "🌀",
      title: "A well-established finding, not a trick against you",
      tone: "gold",
      text: "This illusion has been replicated in memory research for decades. It demonstrates something true about how all human memory works, not a flaw specific to you.",
    },
    {
      type: "paragraph",
      text: "Want to explore a related memory pattern? Try our [Serial Position Effect Test](/test/serial-position-test), which shows how list position — not just meaning — shapes what you remember.",
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
          question: "What does DRM stand for?",
          answer:
            "DRM stands for Deese-Roediger-McDermott, named after the researchers whose work established this false memory paradigm as a standard tool in memory research.",
        },
        {
          question: "Why did I 'remember' a word that was never shown?",
          answer:
            "Your brain encodes the general meaning and theme of a word list, not just the exact words. A closely related \"lure\" word activates that same theme so strongly that it feels just as familiar as the words you actually studied.",
        },
        {
          question: "Is falling for the lure words a memory problem?",
          answer:
            "No — this is one of the most reliably replicated effects in memory science, and the large majority of people experience it to some degree. It reflects how memory works generally, not an individual weakness.",
        },
        {
          question: "Does this have real-world implications?",
          answer:
            "Yes — findings from this paradigm are frequently cited in discussions about the reliability of eyewitness memory, since it shows that confident, vivid recollections can still be inaccurate.",
        },
        {
          question: "Can I reduce false memories by being aware of the trick?",
          answer:
            "Awareness can help somewhat, but research shows the effect is often surprisingly resistant to simply knowing about it in advance — it operates at a fairly automatic level of memory processing.",
        },
      ],
    },
  ],
};
