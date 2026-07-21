import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "After five heads in a row, does tails suddenly feel \"due\"? It shouldn't — a fair coin has no memory of what happened before. This test shows you a series of coin-flip streaks and asks you to judge what's actually most likely to come next, revealing whether streaks quietly bend your sense of probability.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Gambler's Fallacy Test Works",
    },
    {
      type: "paragraph",
      text: "You'll see 4 different coin-flip streaks, each showing a run of the same result. After each one, choose what you think is most likely for the next flip: the streak continuing, the streak breaking, or a genuine 50/50 toss-up. Your result shows how many times you correctly recognized that the next flip is always exactly 50/50, no matter how long the streak has run.",
    },
    {
      type: "heading",
      text: "The Research Behind the Fallacy",
    },
    {
      type: "paragraph",
      text: "The gambler's fallacy was formally analyzed by psychologists Amos Tversky and Daniel Kahneman in 1971 as a consequence of what they called the representativeness heuristic — the tendency to judge probability based on how well an outcome matches our mental picture of what a \"random\" sequence should look like. A long streak of heads feels like it doesn't represent true randomness anymore, so people intuitively expect a correction. The name comes from real gambling behavior, most famously an incident at a Monte Carlo casino in 1913 where a roulette wheel landed on black 26 times in a row, with gamblers losing enormous sums betting on red because they believed it had to be \"due.\"",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "Why Streaks Don't Change the Odds",
    },
    {
      type: "paragraph",
      text: "For genuinely independent random events like fair coin flips, dice rolls, or roulette spins, each event has no memory of what came before it. The physical coin doesn't know it landed on heads five times already, so the odds of the next flip remain exactly 50/50 regardless of any streak. Confusing this with situations where past events genuinely do carry information — like drawing cards from a deck without replacement — is part of why the fallacy can feel intuitively reasonable even though it's mathematically wrong for truly independent events.",
    },
    {
      type: "heading",
      text: "Where the Gambler's Fallacy Shows Up",
    },
    {
      type: "list",
      items: [
        "Casino games like roulette, where players bet against a color or number that hasn't appeared recently.",
        "Sports commentary about a player being \"due\" for a good performance after a slump.",
        "Investing, where a losing streak in a random-walk asset can wrongly feel like it signals an upcoming rebound.",
        "Everyday decisions, like assuming a coin toss owes you a specific result after a run of the opposite outcome.",
      ],
    },
    {
      type: "callout",
      icon: "🎲",
      title: "A very natural mistake to make",
      tone: "gold",
      text: "This bias is common even among people who understand probability intellectually — the intuitive pull of a 'streak' is hard to override in the moment.",
    },
    {
      type: "paragraph",
      text: "Curious about a related probability bias? Try our [Conjunction Fallacy Test](/test/conjunction-fallacy-test), which looks at how a compelling story can make a logically impossible option feel more likely.",
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
          question: "What is the gambler's fallacy?",
          answer:
            "It's the mistaken belief that the probability of a random, independent event is influenced by previous outcomes — for example, thinking a coin is more likely to land tails after a long streak of heads.",
        },
        {
          question: "Is my chance of flipping tails really still 50/50 after 5 heads in a row?",
          answer:
            "Yes — for a fair coin, each flip is a genuinely independent event, so the odds remain exactly 50/50 regardless of what happened on previous flips.",
        },
        {
          question: "Who coined the term for this bias?",
          answer:
            "Psychologists Amos Tversky and Daniel Kahneman analyzed it in their 1971 research on the representativeness heuristic, though the underlying gambling behavior it describes long predates their formal study.",
        },
        {
          question: "Is the gambler's fallacy ever a correct way to reason?",
          answer:
            "It's incorrect for genuinely independent events like fair coin flips or dice rolls, but similar-looking reasoning can be valid in situations with actual dependence between events, like drawing cards from a deck without replacement.",
        },
        {
          question: "Why does a long streak feel so unlikely to continue?",
          answer:
            "A long uniform streak doesn't match our intuitive mental picture of what \"random\" should look like, which creates a false sense that a correction is somehow owed — even though the physical process generating each flip has no memory at all.",
        },
      ],
    },
  ],
};
