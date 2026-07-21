import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "A vivid, specific story can make an option feel more likely than a plain, general one — even when basic math says the exact opposite must be true. This test recreates one of the most famous demonstrations in judgment research: the conjunction fallacy, sometimes known as the \"Linda problem.\"",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Conjunction Fallacy Test Works",
    },
    {
      type: "paragraph",
      text: "You'll read 3 short descriptions of fictional people, each written to strongly suggest a particular stereotype. For each one, you'll pick which of two statements about that person seems more likely: a single, general statement, or a more specific statement that combines two conditions. Your result shows how many times you picked the more specific, combined option — the one that's actually mathematically impossible to be more likely than the general one.",
    },
    {
      type: "heading",
      text: "The Original Linda Problem",
    },
    {
      type: "paragraph",
      text: "This effect was famously demonstrated by psychologists Amos Tversky and Daniel Kahneman in 1983 using a fictional character named Linda, described as outspoken and deeply concerned with social justice. Participants were asked whether it was more likely that Linda was \"a bank teller\" or \"a bank teller who is active in the feminist movement.\" The overwhelming majority — including many people trained in statistics — chose the second, more specific option, even though it's a logical impossibility for a more specific claim to be more probable than the general claim it's built on.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why the Combined Option Can Never Win",
    },
    {
      type: "paragraph",
      text: "The core rule of probability at play here is simple: the chance of two things both being true (a conjunction) can never be higher than the chance of just one of them being true alone. Every additional condition added to a statement can only keep its probability the same or lower it — never raise it. The reason the combined option often feels more likely anyway is the representativeness heuristic: a story that matches a stereotype so well feels intuitively more \"realistic\" than a plain, generic alternative, even though intuitive plausibility and mathematical probability are two completely different things.",
    },
    {
      type: "heading",
      text: "Tips for Spotting This Trap",
    },
    {
      type: "list",
      items: [
        "Before comparing options emotionally, check whether one option is fully contained within the other — if so, the more specific one can't be more likely.",
        "Notice when a description feels like it's \"building a case\" for a stereotype — that's often a signal the conjunction fallacy is being set up.",
        "Try mentally stripping away the vivid personal details and just comparing the raw logical structure of each option.",
        "Remember that a compelling story and a probable outcome are not the same thing.",
      ],
    },
    {
      type: "callout",
      icon: "🧮",
      title: "Falling for it doesn't mean you're bad at logic",
      tone: "gold",
      text: "This effect has been found consistently even among people with formal statistical training — it reflects how intuitive judgment generally works, not a personal reasoning flaw.",
    },
    {
      type: "paragraph",
      text: "Want to explore a related probability bias? Try our [Gambler's Fallacy Test](/test/gamblers-fallacy-test), which looks at how streaks of random events can distort your sense of what's likely to happen next.",
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
          question: "What is the conjunction fallacy?",
          answer:
            "It's the tendency to judge a specific combination of two conditions as more probable than one of those conditions alone, even though that's a mathematical impossibility.",
        },
        {
          question: "What was the original Linda problem?",
          answer:
            "A famous 1983 study by Amos Tversky and Daniel Kahneman in which most participants judged \"Linda is a bank teller and a feminist activist\" as more likely than \"Linda is a bank teller,\" despite the second being a logical requirement of the first.",
        },
        {
          question: "Why can't the combined option ever be more likely?",
          answer:
            "Because it requires both conditions to be true simultaneously — a probability that can only be equal to or lower than the probability of either single condition alone, never higher.",
        },
        {
          question: "Does formal education in statistics prevent this error?",
          answer:
            "Research has found the effect persists even among people with statistical training, suggesting it stems from an intuitive judgment process rather than simply a lack of knowledge about probability rules.",
        },
        {
          question: "What causes people to fall for the fallacy?",
          answer:
            "The representativeness heuristic is the leading explanation — a story that matches a stereotype well feels intuitively more plausible, even though intuitive plausibility has nothing to do with actual mathematical probability.",
        },
      ],
    },
  ],
};
