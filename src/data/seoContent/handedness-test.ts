import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Most people know whether they write with their left or right hand, but handedness is actually more nuanced than a single yes-or-no answer — plenty of people favor different hands for different tasks. This quick quiz, inspired by a well-known research questionnaire, measures your hand preference across 10 everyday activities to give you a more complete picture.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Handedness Test Works",
    },
    {
      type: "paragraph",
      text: "For each of 10 everyday tasks — writing, throwing a ball, using scissors, and more — choose whether you always or usually use your left hand, always or usually use your right hand, or have no strong preference. Your answers are combined into a single Laterality Quotient (LQ) ranging from -100 (strongly left-handed) to +100 (strongly right-handed), along with a plain-language category.",
    },
    {
      type: "heading",
      text: "The Research Behind the Questionnaire",
    },
    {
      type: "paragraph",
      text: "This test is inspired by the Edinburgh Handedness Inventory, developed by psychologist R.C. Oldfield in 1971 and still one of the most widely used tools in laterality research today. Rather than relying on a single self-reported label like \"I'm right-handed,\" it samples hand preference across a range of everyday manual tasks and combines them into a single quantitative score — a more nuanced measurement than a simple binary classification.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Handedness Isn't Always All-or-Nothing",
    },
    {
      type: "paragraph",
      text: "Population studies consistently find that most people cluster toward strongly right-handed or strongly left-handed, but a meaningful minority show mixed or cross-dominant patterns — using different hands for different tasks rather than one hand for everything. This isn't a measurement error; it reflects real variation in how motor dominance develops, and researchers continue to study why hand preference sits on a spectrum rather than splitting cleanly into two fixed groups.",
    },
    {
      type: "heading",
      text: "Tips for an Honest Result",
    },
    {
      type: "list",
      items: [
        "Answer based on which hand you actually use, not which hand feels more socially expected.",
        "If you genuinely switch hands depending on the situation for a task, choose 'No Preference' rather than guessing.",
        "Think about your instinctive, unconscious choice for each task rather than overthinking it.",
        "There's no better or worse result here — this is purely descriptive, not evaluative.",
      ],
    },
    {
      type: "callout",
      icon: "✋",
      title: "A casual self-check, not a clinical tool",
      tone: "gold",
      text: "This is a simplified, informal version of a real research questionnaire, meant for personal interest rather than clinical or diagnostic use.",
    },
    {
      type: "paragraph",
      text: "Interested in another quick motor skills check? Try our [Finger Tapping Test](/test/finger-tapping-test), which compares raw tapping speed between your dominant and non-dominant hand.",
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
          question: "What is a Laterality Quotient (LQ)?",
          answer:
            "It's a single score, typically ranging from -100 to +100, summarizing hand preference across multiple tasks — strongly negative values indicate left-hand dominance, strongly positive values indicate right-hand dominance, and values near zero indicate mixed-handedness.",
        },
        {
          question: "What percentage of people are left-handed?",
          answer:
            "Estimates commonly cited in research suggest roughly 10% of the population is predominantly left-handed, though exact figures vary by study and measurement method.",
        },
        {
          question: "Is being mixed-handed unusual?",
          answer:
            "No — while less common than strong one-sided dominance, mixed or cross-dominant handedness is a well-documented, normal pattern of hand preference variation.",
        },
        {
          question: "Can handedness change over time?",
          answer:
            "Core hand dominance is generally considered stable through life for most people, though specific task preferences can shift somewhat with practice, injury, or deliberate training.",
        },
        {
          question: "Is this the same as the official Edinburgh Handedness Inventory?",
          answer:
            "This is a simplified, casual version inspired by that well-known research questionnaire, built for personal interest rather than as a validated clinical or research instrument.",
        },
      ],
    },
  ],
};
