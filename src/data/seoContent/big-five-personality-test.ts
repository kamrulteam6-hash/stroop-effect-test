import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "The Big Five, often remembered by the acronym OCEAN, is the personality model with the strongest scientific backing in modern psychology. Rather than sorting you into one of a handful of fixed \"types,\" it measures where you fall on five independent spectrums — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism — each based on decades of factor-analytic research into how personality traits actually cluster together.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Big Five Personality Test Works",
    },
    {
      type: "paragraph",
      text: "You'll answer 25 short statements about your general tendencies, rating each from Strongly Disagree to Strongly Agree. Some statements are worded in reverse to help balance response bias. At the end, you'll get a percentage score on each of the five dimensions along with a plain-language description of what a high or low score on that trait tends to mean.",
    },
    {
      type: "heading",
      id: "the-five-traits",
      text: "What Each of the Five Traits Measures",
    },
    {
      type: "list",
      items: [
        "Openness — curiosity, imagination, and openness to new ideas and experiences versus a preference for the familiar and practical.",
        "Conscientiousness — organization, self-discipline, and goal-directed behavior versus spontaneity and flexibility.",
        "Extraversion — how much you draw energy from social stimulation versus solitude and quiet environments.",
        "Agreeableness — cooperation, trust, and consideration for others versus prioritizing your own position.",
        "Neuroticism — how intensely you tend to experience stress, worry, and mood shifts versus emotional steadiness.",
      ],
    },
    {
      type: "heading",
      text: "Why Psychologists Trust This Model",
    },
    {
      type: "paragraph",
      text: "Unlike many popular personality frameworks, the Big Five wasn't designed top-down from a theory — it emerged from decades of factor analysis on how thousands of trait-descriptive words and self-report items statistically cluster together across different languages and cultures. That's why it's the dominant framework in academic personality research today: the five dimensions keep showing up independently of the specific questionnaire or population used to study them, which is a much higher bar than most pop-psychology typologies ever attempt to clear.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "How to Interpret Your Scores",
    },
    {
      type: "paragraph",
      text: "There's no \"good\" or \"bad\" profile — every trait has trade-offs. High Conscientiousness tends to support long-term goal achievement but can shade into rigidity; low Neuroticism supports emotional stability but can sometimes look like under-reactivity to real problems. Traits are also fairly stable but not fixed — they can shift gradually over years, particularly in response to major life experiences, so think of your result as a snapshot of general tendencies rather than a permanent label.",
    },
    {
      type: "callout",
      icon: "🌟",
      title: "Explore another angle on personality",
      tone: "primary",
      text: "For a look at emotional and social skills specifically rather than broad personality traits, try our [Emotional Intelligence Test](/test/emotional-intelligence-test).",
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
          question: "What does OCEAN stand for?",
          answer:
            "OCEAN is an acronym for the five traits measured by this model: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
        },
        {
          question: "Is the Big Five test scientifically validated?",
          answer:
            "The five-factor structure is one of the most extensively replicated findings in personality psychology, consistently emerging across different languages, cultures, and measurement methods. This is a short, free version for self-reflection, not a clinical or diagnostic instrument.",
        },
        {
          question: "Is there a 'best' personality profile?",
          answer:
            "No. Each trait involves genuine trade-offs, and different combinations suit different roles, relationships, and life circumstances. The Big Five is descriptive, not evaluative.",
        },
        {
          question: "Can my Big Five scores change over time?",
          answer:
            "Yes, to a degree. Traits tend to be fairly stable in the short term but can shift gradually across years, especially in response to major life transitions.",
        },
        {
          question: "How is this different from tests like Myers-Briggs?",
          answer:
            "The Big Five measures continuous spectrums rather than sorting people into fixed categories, and it was derived empirically from statistical analysis of trait data rather than from a pre-existing theoretical typology — a distinction that's a major reason it's the standard model in academic personality research.",
        },
      ],
    },
  ],
};
