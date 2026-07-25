import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "One single detail about a stranger — how fit they are, whether they're punctual — can quietly color how smart, kind, or trustworthy you assume they are, even when you have zero actual information about any of those things. This is the halo effect, and this test lets you catch it happening in your own judgments.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Halo Effect Test Works",
    },
    {
      type: "paragraph",
      text: "You'll meet 4 fictional people through a short introduction story, each containing exactly one real detail about them — two in a positive light, two in a more negative light. For each person, you'll rate them on 5 completely unrelated traits: intelligence, trustworthiness, kindness, competence, and sense of humor. Your result shows your personal \"Halo Gap\" — the average rating difference between the positively and negatively introduced people — plus a trait-by-trait breakdown, even though you were never given any real information relevant to those specific traits.",
    },
    {
      type: "heading",
      text: "The Research Behind the Halo Effect",
    },
    {
      type: "paragraph",
      text: "The term was coined by psychologist Edward Thorndike in a 1920 study of military officers, where he found that ratings of one positive trait, like physical bearing, were strongly correlated with ratings of completely unrelated traits, like intelligence and leadership — traits the raters had no direct evidence about. This pattern has been replicated across many domains since, from how attractive people are often assumed to be more competent, to how a single well-written line on a resume can color a reviewer's impression of a candidate's entire skill set.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why One Trait Colors Everything Else",
    },
    {
      type: "paragraph",
      text: "The leading explanation is that forming an overall impression of someone is cognitively demanding, so your brain takes a shortcut: once you form a general positive or negative feeling about a person from one salient detail, that overall feeling gets applied to unrelated judgments too, rather than evaluating each trait independently from scratch. This makes the halo effect efficient but also a genuine source of bias whenever accuracy actually matters — like hiring decisions, performance reviews, or first impressions in general.",
    },
    {
      type: "heading",
      text: "Where the Halo Effect Shows Up",
    },
    {
      type: "list",
      items: [
        "Job interviews, where one strong early impression can color how a candidate's later, unrelated answers are judged.",
        "Product reviews, where an attractively designed product is often rated as higher quality even without functional testing.",
        "Teacher evaluations, where a likable personality can influence perceived competence independent of actual teaching skill.",
        "Social media, where an attractive profile photo can shape how credible or trustworthy someone's opinions seem.",
      ],
    },
    {
      type: "callout",
      icon: "😇",
      title: "This happens to almost everyone",
      tone: "gold",
      text: "The halo effect is a well-documented, largely automatic bias — noticing it in yourself here doesn't mean your judgment is unusually flawed.",
    },
    {
      type: "paragraph",
      text: "Curious about a related judgment bias? Try our [Anchoring Bias Test](/test/anchoring-bias-test), which looks at how an arbitrary number can pull your numerical estimates toward it.",
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
          question: "Who coined the term 'halo effect'?",
          answer:
            "Psychologist Edward Thorndike introduced the concept in a 1920 study, finding that military officers' ratings of one positive trait strongly predicted their ratings of completely unrelated traits.",
        },
        {
          question: "Does the halo effect only work in a positive direction?",
          answer:
            "No — a negative detail can create what's sometimes called a \"reverse halo\" or \"horn effect,\" where one negative impression colors unrelated judgments negatively, which is why this test includes both a positive and a negative example.",
        },
        {
          question: "Why can't I just judge each trait independently?",
          answer:
            "Forming a full, independent judgment of every trait for every person you meet is cognitively demanding, so the brain tends to take a shortcut by generalizing an overall impression instead — which is efficient but introduces this specific bias.",
        },
        {
          question: "Does this bias affect real decisions like hiring?",
          answer:
            "Yes — the halo effect is widely discussed in research on hiring, performance evaluation, and interviewing, since a single strong impression can disproportionately affect judgments across unrelated criteria.",
        },
        {
          question: "Can awareness of the halo effect reduce it?",
          answer:
            "Some structured techniques, like evaluating specific criteria independently and in a fixed order before forming an overall impression, can help reduce its influence, though the underlying tendency is difficult to eliminate entirely.",
        },
      ],
    },
  ],
};
