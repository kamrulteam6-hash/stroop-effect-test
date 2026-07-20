import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Emotional intelligence (EQ) is the ability to recognize, understand, and manage emotions — both your own and other people's. Popularized by psychologist Daniel Goleman in the 1990s, the concept has since become one of the most widely referenced ideas in workplace psychology and relationship research. This free test gives you a quick, self-reported snapshot across the four core skills that make up most modern EQ models.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Emotional Intelligence Test Works",
    },
    {
      type: "paragraph",
      text: "You'll answer 20 short statements, rating each from Strongly Disagree to Strongly Agree based on how you typically behave — not how you'd like to behave. The statements are evenly split across four skill areas. At the end, you'll get an overall EQ score along with a breakdown of your strengths and growth areas across each individual skill.",
    },
    {
      type: "heading",
      id: "four-skills",
      text: "The Four Core Skills of Emotional Intelligence",
    },
    {
      type: "list",
      items: [
        "Self-Awareness — recognizing your own emotions accurately as they happen.",
        "Self-Regulation — managing and responding to your emotions thoughtfully rather than impulsively.",
        "Social Awareness — reading and understanding the emotions of the people around you.",
        "Relationship Management — using emotional understanding to navigate conflict, feedback, and connection with others.",
      ],
    },
    {
      type: "heading",
      text: "Why Emotional Intelligence Matters",
    },
    {
      type: "paragraph",
      text: "Traditional intelligence (IQ) predicts a lot about academic and technical performance, but it says comparatively little about how well someone navigates teamwork, leadership, conflict, or personal relationships. Emotional intelligence fills that gap. It's not fixed at birth the way some cognitive traits appear to be — each of the four skills above is something people can deliberately strengthen over time through self-reflection and practice, which is part of why EQ has become such a popular focus in workplace training and coaching.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Understanding Your Score",
    },
    {
      type: "paragraph",
      text: "A lower score on one skill doesn't mean a fixed limitation — it usually just points to where deliberate practice will pay off most. Someone strong in Self-Awareness but weaker in Self-Regulation, for example, typically knows exactly what they're feeling but hasn't yet built strong tools for managing intense emotions in the moment — a very different challenge than someone who struggles to notice their own emotions at all.",
    },
    {
      type: "callout",
      icon: "💬",
      title: "See the bigger personality picture",
      tone: "primary",
      text: "For a broader view of your general personality traits beyond emotional skills, try our [Big Five Personality Test](/test/big-five-personality-test).",
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
          question: "Who came up with the concept of emotional intelligence?",
          answer:
            "The term was popularized by psychologist Daniel Goleman in his 1995 book, building on earlier academic research by psychologists Peter Salovey and John Mayer.",
        },
        {
          question: "Is this a clinically validated EQ assessment?",
          answer:
            "No — this is a free, self-reported reflection tool for personal insight, not a validated clinical or workplace assessment instrument. It's designed to give you a useful, general sense of your emotional strengths and growth areas.",
        },
        {
          question: "Can I improve my emotional intelligence?",
          answer:
            "Yes. Unlike some cognitive traits, the skills that make up emotional intelligence — self-awareness, regulation, empathy, and relationship management — are all things that can be deliberately practiced and strengthened over time.",
        },
        {
          question: "What's a good EQ score?",
          answer:
            "There's no universal cutoff, since this is a self-report reflection tool rather than a standardized clinical scale. It's most useful for comparing your own scores across the four skill areas to see relative strengths and growth areas.",
        },
        {
          question: "How is EQ different from IQ?",
          answer:
            "IQ measures cognitive abilities like reasoning and problem-solving. EQ measures how well you recognize and manage emotions, in yourself and others — a largely separate skill set that matters heavily for relationships, teamwork, and leadership.",
        },
      ],
    },
  ],
};
