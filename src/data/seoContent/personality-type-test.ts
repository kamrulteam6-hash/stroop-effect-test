import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "This test sorts your everyday preferences into a 4-letter personality type, using the same four-dimension framework popularized by the well-known typing system many people already recognize. Instead of a single label, you get a breakdown across four separate preference spectrums — giving a more complete picture than any one letter alone.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Personality Type Test Works",
    },
    {
      type: "paragraph",
      text: "Answer 24 short statements about your everyday preferences and tendencies, rating each from Strongly Disagree to Strongly Agree. Your responses are scored across four independent dimensions, and your dominant preference on each one combines into a 4-letter type — for example, INFP or ESTJ. You'll also see how strongly you lean toward each letter, since most people aren't at the extreme end of any dimension.",
    },
    {
      type: "heading",
      id: "four-dimensions",
      text: "The Four Preference Dimensions",
    },
    {
      type: "list",
      items: [
        "Extraversion (E) vs. Introversion (I) — where you draw energy from: social interaction or solitary reflection.",
        "Sensing (S) vs. Intuition (N) — whether you focus more on concrete facts or abstract patterns and possibilities.",
        "Thinking (T) vs. Feeling (F) — whether you lean more on logical analysis or personal values when deciding.",
        "Judging (J) vs. Perceiving (P) — whether you prefer structure and closure or flexibility and spontaneity.",
      ],
    },
    {
      type: "heading",
      text: "Where This Framework Comes From",
    },
    {
      type: "paragraph",
      text: "This four-dimension approach traces back to Swiss psychiatrist Carl Jung's early 20th-century theories of psychological type, which were later developed into a structured questionnaire — the Myers-Briggs Type Indicator — by Katharine Cook Briggs and her daughter Isabel Briggs Myers. It remains one of the most widely recognized personality frameworks in popular use today, particularly in career counseling and team-building contexts, even though it's viewed with more caution in academic psychology than trait-based models like the Big Five.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "A Note on Type vs. Trait",
    },
    {
      type: "paragraph",
      text: "One important thing to understand about any 4-letter typing system: real people rarely sit at the extreme ends of these dimensions. Someone scored as \"E\" might still be only slightly more extraverted than introverted — the letter is a simplification of an underlying spectrum, not a hard category. That's why this test shows your percentage lean on each dimension alongside your final type code, so you can see how strong (or borderline) each preference actually is.",
    },
    {
      type: "heading",
      text: "Tips for a More Accurate Result",
    },
    {
      type: "list",
      items: [
        "Answer based on your natural tendencies, not how you behave in a specific role like work.",
        "Avoid answering how you'd like to be seen — the goal is self-insight, not a flattering result.",
        "If a statement genuinely feels 50/50 for you, that's useful information too, not a mistake.",
        "Consider retaking it after a few months if your answers ever feel like they no longer fit — preferences can shift somewhat over time.",
      ],
    },
    {
      type: "callout",
      icon: "🧭",
      title: "For self-reflection, not hiring or diagnosis",
      tone: "gold",
      text: "This is a free, simplified quiz for personal interest. It isn't a validated psychological instrument and shouldn't be used for clinical, hiring, or other high-stakes decisions.",
    },
    {
      type: "paragraph",
      text: "Prefer a research-backed trait model instead of a typing system? Try our [Big Five Personality Test](/test/big-five-personality-test), which measures continuous traits rather than sorting you into a fixed type.",
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
          question: "Is this an official Myers-Briggs assessment?",
          answer:
            "No. This is a free, simplified quiz inspired by the same four-dimension framework, built for casual self-reflection — it isn't affiliated with or a substitute for any official licensed assessment.",
        },
        {
          question: "Can my personality type change over time?",
          answer:
            "Your core tendencies are generally fairly stable, but scores near the middle of a dimension can shift between retakes, and life experience can gradually influence preferences over years.",
        },
        {
          question: "Is this test scientifically validated?",
          answer:
            "Four-letter typing systems are popular and widely used, particularly in career and team-building contexts, but academic psychology generally favors continuous trait models like the Big Five over fixed-category typing for research purposes.",
        },
        {
          question: "What if I'm close to 50/50 on a dimension?",
          answer:
            "That's common and meaningful — it means your preference on that dimension is more flexible or context-dependent rather than strongly fixed in one direction.",
        },
        {
          question: "Where does the four-letter framework come from?",
          answer:
            "It builds on Carl Jung's early theories of psychological type, later developed into a structured questionnaire by Katharine Cook Briggs and Isabel Briggs Myers in the mid-20th century.",
        },
      ],
    },
  ],
};
