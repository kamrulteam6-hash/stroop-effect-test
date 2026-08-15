import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "After six heads in a row, does tails feel like it has become more likely?",
    },
    {
      type: "paragraph",
      text: "Take this free **Gambler's Fallacy Test** to challenge your intuition about independent random events.",
    },
    {
      type: "paragraph",
      text: "You will see four coin-flip streaks. After each one, choose what is most likely on the next flip:",
    },
    {
      type: "list",
      items: ["the streak continues;", "the streak breaks;", "or Heads and Tails remain equally likely."],
    },
    {
      type: "paragraph",
      text: "For a known fair coin with independent flips, the next outcome is always **50% Heads and 50% Tails**, regardless of the previous streak.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Gambler's Fallacy Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Study the coin-flip streak.",
        "Decide what is most likely next.",
        "Choose streak continues, streak breaks, or 50/50.",
        "Repeat for all four sequences.",
        "Review your answers.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not ask:",
    },
    {
      type: "paragraph",
      text: "**“What sequence would look more random?”**",
    },
    {
      type: "paragraph",
      text: "Ask:",
    },
    {
      type: "paragraph",
      text: "**“What is the probability of the next independent flip?”**",
    },
    {
      type: "paragraph",
      text: "Those are different questions.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is the Gambler's Fallacy?",
    },
    {
      type: "paragraph",
      text: "The **gambler's fallacy** is the mistaken belief that after a streak in one direction, an independent random process becomes more likely to produce the opposite outcome.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "paragraph",
      text: "**Heads, Heads, Heads, Heads, Heads...**",
    },
    {
      type: "paragraph",
      text: "followed by the thought:",
    },
    {
      type: "paragraph",
      text: "**“Tails is due.”**",
    },
    {
      type: "paragraph",
      text: "If the coin is fair and each flip is independent, that reasoning is incorrect.",
    },
    {
      type: "paragraph",
      text: "The next flip still has:",
    },
    {
      type: "paragraph",
      text: "**P(Heads) = 0.50**",
    },
    {
      type: "paragraph",
      text: "**P(Tails) = 0.50**",
    },
    {
      type: "paragraph",
      text: "The coin does not compensate for earlier outcomes.",
    },
    {
      type: "heading",
      text: "Why Five Heads in a Row Does Not Make Tails More Likely",
    },
    {
      type: "paragraph",
      text: "Independence means the probability of the next outcome does not depend on previous outcomes.",
    },
    {
      type: "paragraph",
      text: "For a fair coin:",
    },
    {
      type: "paragraph",
      text: "**P(Tails on next flip | five Heads already occurred) = 0.50**",
    },
    {
      type: "paragraph",
      text: "The streak may be unusual as a complete historical sequence.",
    },
    {
      type: "paragraph",
      text: "But once those five heads have already happened, they do not change the physical probability of the next flip.",
    },
    {
      type: "paragraph",
      text: "This distinction between:",
    },
    {
      type: "paragraph",
      text: "**probability of a whole sequence before it occurs**",
    },
    {
      type: "paragraph",
      text: "and",
    },
    {
      type: "paragraph",
      text: "**probability of the next event after part of the sequence is known**",
    },
    {
      type: "paragraph",
      text: "is essential.",
    },
    {
      type: "heading",
      text: "“HHHHHT” and “HHHHHH” Are Equally Likely Beforehand",
    },
    {
      type: "paragraph",
      text: "For six fair independent flips, every exact sequence has probability:",
    },
    {
      type: "paragraph",
      text: "**(1/2)^6 = 1/64**",
    },
    {
      type: "paragraph",
      text: "That includes:",
    },
    {
      type: "paragraph",
      text: "**HHHHHH**",
    },
    {
      type: "paragraph",
      text: "and",
    },
    {
      type: "paragraph",
      text: "**HHHHHT**",
    },
    {
      type: "paragraph",
      text: "and",
    },
    {
      type: "paragraph",
      text: "**HTTHHT**",
    },
    {
      type: "paragraph",
      text: "Each exact six-flip pattern is equally likely before the experiment begins.",
    },
    {
      type: "paragraph",
      text: "People often feel that a mixed-looking sequence is “more random” than a streak.",
    },
    {
      type: "paragraph",
      text: "But random processes regularly produce clusters.",
    },
    {
      type: "paragraph",
      text: "Randomness does not promise local balance in every short run.",
    },
    {
      type: "heading",
      text: "The Law of Small Numbers",
    },
    {
      type: "paragraph",
      text: "Tversky and Kahneman's 1971 research described a **belief in the law of small numbers**.",
    },
    {
      type: "paragraph",
      text: "People often expect small samples to resemble the larger population more closely than probability theory guarantees.",
    },
    {
      type: "paragraph",
      text: "For a fair coin, the long-run proportion of heads tends toward 50%.",
    },
    {
      type: "paragraph",
      text: "But people may incorrectly expect even short sequences to contain roughly equal numbers of Heads and Tails.",
    },
    {
      type: "paragraph",
      text: "A long streak then feels like an imbalance that needs to be corrected quickly.",
    },
    {
      type: "paragraph",
      text: "The gambler's fallacy is one consequence of that intuition.",
    },
    {
      type: "heading",
      text: "The Law of Large Numbers Does Not Mean Immediate Correction",
    },
    {
      type: "paragraph",
      text: "The genuine **law of large numbers** says that as the number of independent trials grows, the sample proportion tends to approach the true probability.",
    },
    {
      type: "paragraph",
      text: "It does **not** say that a streak creates a debt the process must repay.",
    },
    {
      type: "paragraph",
      text: "Suppose a fair coin produces:",
    },
    {
      type: "paragraph",
      text: "**10 Heads, 0 Tails**",
    },
    {
      type: "paragraph",
      text: "After 10 flips, Heads = 100%.",
    },
    {
      type: "paragraph",
      text: "If the next 990 flips happen to contain approximately half Heads and half Tails, the overall proportion moves much closer to 50% even without any special excess of Tails.",
    },
    {
      type: "paragraph",
      text: "Long-run balance emerges because the original streak becomes a smaller fraction of the growing sample—not because probability forces an immediate reversal.",
    },
    {
      type: "heading",
      text: "Gambler's Fallacy vs. Hot-Hand Belief",
    },
    {
      type: "paragraph",
      text: "These are opposite sequential beliefs.",
    },
    {
      type: "subheading",
      text: "Gambler's Fallacy",
    },
    {
      type: "paragraph",
      text: "After a streak, expect a **reversal**.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "paragraph",
      text: "**five Heads → Tails is now more likely**",
    },
    {
      type: "subheading",
      text: "Hot-Hand Belief",
    },
    {
      type: "paragraph",
      text: "After a streak, expect **continuation**.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "paragraph",
      text: "**five successes → another success is now more likely**",
    },
    {
      type: "paragraph",
      text: "For a known fair independent coin, both predictions are wrong if they assign a probability other than 50/50.",
    },
    {
      type: "paragraph",
      text: "But they are not the same bias.",
    },
    {
      type: "paragraph",
      text: "This matters because the test offers:",
    },
    {
      type: "list",
      items: ["streak continues;", "streak breaks;", "50/50."],
    },
    {
      type: "paragraph",
      text: "Choosing **streak breaks** is specifically gambler's-fallacy reasoning.",
    },
    {
      type: "paragraph",
      text: "Choosing **streak continues** reflects positive-recency or hot-hand-like reasoning.",
    },
    {
      type: "paragraph",
      text: "The correct answer for the fair-coin task is 50/50.",
    },
    {
      type: "heading",
      text: "Real Sports Are Not Fair Coins",
    },
    {
      type: "paragraph",
      text: "The hot-hand example requires caution.",
    },
    {
      type: "paragraph",
      text: "Basketball shots, tennis serves, sales performance, and financial returns may not be independent identically distributed coin flips.",
    },
    {
      type: "paragraph",
      text: "Player skill, fatigue, opponent quality, confidence, strategy, injuries, and environment can change from trial to trial.",
    },
    {
      type: "paragraph",
      text: "Therefore:",
    },
    {
      type: "paragraph",
      text: "**“A streak never contains information”**",
    },
    {
      type: "paragraph",
      text: "is false as a general statement.",
    },
    {
      type: "paragraph",
      text: "The correct rule is narrower:",
    },
    {
      type: "paragraph",
      text: "**past outcomes do not change the probability of the next outcome when the process is genuinely independent with fixed probabilities.**",
    },
    {
      type: "paragraph",
      text: "Your browser test deliberately uses a fair independent coin model.",
    },
    {
      type: "heading",
      text: "Drawing Cards Is Different",
    },
    {
      type: "paragraph",
      text: "Suppose you draw cards from a standard deck **without replacement**.",
    },
    {
      type: "paragraph",
      text: "Now previous outcomes do matter.",
    },
    {
      type: "paragraph",
      text: "If four aces have already been removed, the probability of drawing another ace is zero.",
    },
    {
      type: "paragraph",
      text: "The trials are dependent because the composition of the deck changes.",
    },
    {
      type: "paragraph",
      text: "This is not gambler's-fallacy reasoning.",
    },
    {
      type: "paragraph",
      text: "It is valid probability updating.",
    },
    {
      type: "paragraph",
      text: "Before applying the 50/50 logic, always ask:",
    },
    {
      type: "paragraph",
      text: "**Are the events actually independent?**",
    },
    {
      type: "heading",
      text: "Roulette Is Not Exactly a 50/50 Coin",
    },
    {
      type: "paragraph",
      text: "Roulette is often used to explain the gambler's fallacy because gamblers may expect red after a run of black.",
    },
    {
      type: "paragraph",
      text: "But a roulette wheel includes green zero pockets.",
    },
    {
      type: "paragraph",
      text: "On European roulette there is a single zero.",
    },
    {
      type: "paragraph",
      text: "American roulette traditionally has both 0 and 00.",
    },
    {
      type: "paragraph",
      text: "Therefore red versus black is not exactly 50/50.",
    },
    {
      type: "paragraph",
      text: "The important point remains that previous independent spins do not make red “due.”",
    },
    {
      type: "paragraph",
      text: "The exact probability simply depends on the wheel design.",
    },
    {
      type: "paragraph",
      text: "For mathematical clarity, a fair coin is the cleaner example.",
    },
    {
      type: "heading",
      text: "Why Random Sequences Look “Too Streaky”",
    },
    {
      type: "paragraph",
      text: "People often expect randomness to alternate more than it really does.",
    },
    {
      type: "paragraph",
      text: "A sequence such as:",
    },
    {
      type: "paragraph",
      text: "**HTHTTHTH**",
    },
    {
      type: "paragraph",
      text: "looks random to many people.",
    },
    {
      type: "paragraph",
      text: "A sequence such as:",
    },
    {
      type: "paragraph",
      text: "**HHHHHTHH**",
    },
    {
      type: "paragraph",
      text: "may look suspicious.",
    },
    {
      type: "paragraph",
      text: "But fair random processes naturally produce runs.",
    },
    {
      type: "paragraph",
      text: "In fact, as a sequence gets longer, seeing at least one noticeable streak becomes increasingly unsurprising.",
    },
    {
      type: "paragraph",
      text: "The misconception comes from expecting small samples to look perfectly balanced and irregular.",
    },
    {
      type: "paragraph",
      text: "True randomness often contains local patterns.",
    },
    {
      type: "heading",
      text: "What Does Your Score Mean?",
    },
    {
      type: "paragraph",
      text: "The site presents four streak scenarios.",
    },
    {
      type: "paragraph",
      text: "If you answer 50/50 on all four, you correctly applied the independence rule in every scenario.",
    },
    {
      type: "paragraph",
      text: "If you choose “streak breaks,” you made a response consistent with the gambler's fallacy.",
    },
    {
      type: "paragraph",
      text: "If you choose “streak continues,” you made the opposite sequential prediction.",
    },
    {
      type: "paragraph",
      text: "Four questions are not enough to diagnose your general probability reasoning.",
    },
    {
      type: "paragraph",
      text: "The result is a compact demonstration.",
    },
    {
      type: "heading",
      text: "Can Someone Know the Math and Still Feel Tails Is Due?",
    },
    {
      type: "paragraph",
      text: "Yes.",
    },
    {
      type: "paragraph",
      text: "Intuitive judgment and explicit knowledge can conflict.",
    },
    {
      type: "paragraph",
      text: "You may know perfectly well that the correct answer is 50/50 while still feeling that six Heads in a row makes Tails psychologically compelling.",
    },
    {
      type: "paragraph",
      text: "That gap is one reason cognitive-bias demonstrations are memorable.",
    },
    {
      type: "paragraph",
      text: "The goal is not to shame intuition.",
    },
    {
      type: "paragraph",
      text: "It is to recognize when intuition conflicts with the mathematical structure of the problem.",
    },
    {
      type: "heading",
      text: "Gambler's Fallacy vs. Conjunction Fallacy",
    },
    {
      type: "paragraph",
      text: "The [Conjunction Fallacy Test](/test/conjunction-fallacy-test) concerns the rule that A-and-B cannot be more probable than A alone.",
    },
    {
      type: "paragraph",
      text: "The gambler's fallacy concerns mistaken negative dependence between independent sequential outcomes.",
    },
    {
      type: "paragraph",
      text: "Both are probability errors.",
    },
    {
      type: "paragraph",
      text: "But the mathematical structures are completely different.",
    },
    {
      type: "heading",
      text: "How to Avoid the Gambler's Fallacy",
    },
    {
      type: "paragraph",
      text: "Before predicting the next event, ask:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Is the process genuinely independent?",
        "Is the probability fixed from trial to trial?",
        "Has the underlying mechanism changed?",
        "Does the previous result physically alter the next trial?",
        "Am I expecting short-run balance merely because the sequence “looks wrong”?",
      ],
    },
    {
      type: "paragraph",
      text: "If the process is a known fair independent coin, the solution is immediate:",
    },
    {
      type: "paragraph",
      text: "**ignore the streak when predicting the next flip.**",
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
          answer: "It is the belief that an independent random event becomes more likely to reverse after a streak.",
        },
        {
          question: "Is Tails more likely after 5 Heads?",
          answer: "No. For a fair independent coin, Tails remains 50%.",
        },
        {
          question: "Why do streaks feel like they must end?",
          answer: "People tend to expect small samples to resemble the overall 50/50 distribution more closely than probability requires.",
        },
        {
          question: "Is expecting another Head also the gambler's fallacy?",
          answer: "Not technically. Expecting reversal is gambler's-fallacy reasoning; expecting continuation is closer to positive-recency or hot-hand belief.",
        },
        {
          question: "When do past events really change future probability?",
          answer: "When events are dependent, such as drawing cards without replacement or when the underlying process itself changes.",
        },
        {
          question: "Does this test measure gambling addiction?",
          answer: "No. It is a probability-bias demonstration and cannot diagnose gambling behavior or a mental health condition.",
        },
      ],
    },
    {
      type: "heading",
      text: "A Streak Does Not Create a Debt",
    },
    {
      type: "paragraph",
      text: "Randomness does not promise:",
    },
    {
      type: "paragraph",
      text: "**“I gave you too many Heads, so now I owe you Tails.”**",
    },
    {
      type: "paragraph",
      text: "For a fair independent coin, every new flip starts with the same probabilities.",
    },
    {
      type: "paragraph",
      text: "That is the simplest defense against the gambler's fallacy:",
    },
    {
      type: "paragraph",
      text: "**separate the history of the sequence from the probability of the next independent event.**",
    },
  ],
};
