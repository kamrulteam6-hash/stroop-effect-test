import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Enneagram is a personality framework built around nine core types, each centered on a different core motivation rather than a simple trait or behavior. This free test estimates your dominant type from 27 quick statements, then shows how strongly each of the nine types resonated with your answers.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Enneagram Test Works",
    },
    {
      type: "paragraph",
      text: "Answer 27 short statements about your general tendencies, rating each from Strongly Disagree to Strongly Agree. Each statement is linked to one of the nine Enneagram types. Your results show your single dominant type along with a full breakdown of how strongly you scored on all nine — since most people recognize a little of themselves in more than one type.",
    },
    {
      type: "heading",
      id: "nine-types",
      text: "The Nine Enneagram Types",
    },
    {
      type: "list",
      items: [
        "Type 1, The Reformer — principled, purposeful, and focused on doing things right.",
        "Type 2, The Helper — warm, generous, and fulfilled by supporting others.",
        "Type 3, The Achiever — driven, adaptable, and motivated by success and recognition.",
        "Type 4, The Individualist — introspective, expressive, and drawn to authenticity.",
        "Type 5, The Investigator — analytical, private, and motivated by understanding.",
        "Type 6, The Loyalist — committed, security-minded, and alert to potential problems.",
        "Type 7, The Enthusiast — spontaneous, versatile, and energized by new possibilities.",
        "Type 8, The Challenger — assertive, decisive, and protective of what matters to them.",
        "Type 9, The Peacemaker — easygoing, accommodating, and focused on harmony.",
      ],
    },
    {
      type: "heading",
      text: "What Makes the Enneagram Different",
    },
    {
      type: "paragraph",
      text: "Unlike trait models that place you somewhere on a continuous spectrum, the Enneagram is built around core motivations — the underlying \"why\" behind behavior, not just the behavior itself. Two people can act similarly on the surface for very different underlying reasons, and the Enneagram framework is specifically designed to distinguish between those different motivational patterns rather than just cataloging visible traits.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Your Full Breakdown Matters",
    },
    {
      type: "paragraph",
      text: "Very few people score strongly on only one type and nothing else. It's common — and expected — to see two or three types with close, elevated scores, often reflecting genuine overlap in how those types express themselves day to day. Rather than treating your dominant type as the single \"true\" answer, it's often more useful to look at your top few scores together as a fuller picture of your motivational patterns.",
    },
    {
      type: "heading",
      text: "Tips for a More Accurate Result",
    },
    {
      type: "list",
      items: [
        "Answer based on your usual, natural tendencies rather than how you act under unusual stress.",
        "Avoid picking answers that feel more admirable rather than more accurate.",
        "If your top two scores are very close, read about both — many people identify with a primary type plus a close secondary influence.",
        "Retake it after some time has passed to see how consistent your pattern is.",
      ],
    },
    {
      type: "callout",
      icon: "🔯",
      title: "A self-reflection tool, not a clinical instrument",
      tone: "gold",
      text: "This is a free, simplified quiz for personal insight and entertainment. It isn't a validated psychological assessment and shouldn't be used for clinical or diagnostic purposes.",
    },
    {
      type: "paragraph",
      text: "Curious about a research-backed alternative? Try our [Big Five Personality Test](/test/big-five-personality-test) for a trait-based model with strong academic support.",
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
          question: "Is the Enneagram scientifically validated?",
          answer:
            "The Enneagram is a popular framework widely used for self-reflection and coaching, but it has less rigorous academic validation than trait-based models like the Big Five, which is why this test is presented as a casual self-insight tool rather than a scientific instrument.",
        },
        {
          question: "Why did I score high on more than one type?",
          answer:
            "That's common and expected — most people show meaningful overlap across a few related types rather than fitting cleanly into just one, so your top scores together often give a fuller picture than a single type alone.",
        },
        {
          question: "Can my Enneagram type change?",
          answer:
            "Most Enneagram frameworks describe your core type as relatively stable over time, though how strongly its traits show up can vary with mood, stress, and life circumstances.",
        },
        {
          question: "What's the difference between the Enneagram and other typing systems?",
          answer:
            "The Enneagram is built around core motivations — the underlying drives behind behavior — rather than surface-level traits or preferences, which distinguishes it from trait-based or behavior-based frameworks.",
        },
        {
          question: "Is one Enneagram type better than another?",
          answer:
            "No — each of the nine types is simply a different motivational pattern, and the framework is meant to be descriptive rather than a ranking of better or worse personalities.",
        },
      ],
    },
  ],
};
