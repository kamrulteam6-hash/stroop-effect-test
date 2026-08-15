import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you learn which choices are better when nobody tells you the odds?",
    },
    {
      type: "paragraph",
      text: "Try this free **Iowa Gambling Task**, or **IGT-style decision-making test**. You will draw 40 cards from four decks labeled A, B, C, and D. Every card produces an immediate reward, but some cards also trigger penalties.",
    },
    {
      type: "paragraph",
      text: "Two decks offer larger short-term rewards but are designed to lose more over time. Two offer smaller rewards but produce better long-term outcomes.",
    },
    {
      type: "paragraph",
      text: "Your goal is simple: finish with as much money as possible.",
    },
    {
      type: "paragraph",
      text: "This is a shortened browser adaptation of the Iowa Gambling Task, not the standardized clinical assessment or the exact original research sequence.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Iowa Gambling Task",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Choose one of the four decks.",
        "Read the reward and any penalty.",
        "Choose again from any deck.",
        "Pay attention to what happens over repeated draws.",
        "Continue until you have selected 40 cards.",
        "Review your final balance and deck choices.",
      ],
    },
    {
      type: "paragraph",
      text: "You are not told the hidden payoff structure in advance.",
    },
    {
      type: "paragraph",
      text: "That uncertainty is part of the task.",
    },
    {
      type: "paragraph",
      text: "Try not to search for the deck rules before your first attempt. Once you know exactly which decks are advantageous, later sessions become a different kind of problem.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is the Iowa Gambling Task?",
    },
    {
      type: "paragraph",
      text: "The **Iowa Gambling Task** was introduced by Antoine Bechara, Antonio Damasio, Hanna Damasio, and Steven Anderson in 1994.",
    },
    {
      type: "paragraph",
      text: "The task was developed to study decision-making in people with damage involving the ventromedial prefrontal region.",
    },
    {
      type: "paragraph",
      text: "Participants repeatedly chose from four decks containing different reward and punishment schedules.",
    },
    {
      type: "paragraph",
      text: "Some decks produced tempting immediate gains but poor long-term outcomes.",
    },
    {
      type: "paragraph",
      text: "Other decks offered smaller immediate gains but better outcomes over repeated choices.",
    },
    {
      type: "paragraph",
      text: "The task became influential because it turned complex decision-making under uncertainty into a controlled sequence of simple choices.",
    },
    {
      type: "heading",
      text: "Advantageous vs. Disadvantageous Decks",
    },
    {
      type: "paragraph",
      text: "In the classic structure, decks A and B are typically described as **disadvantageous**, while decks C and D are **advantageous** over repeated selections.",
    },
    {
      type: "paragraph",
      text: "The disadvantageous decks offer larger immediate rewards.",
    },
    {
      type: "paragraph",
      text: "Their penalties, however, are large enough that continued selection leads to worse long-term value.",
    },
    {
      type: "paragraph",
      text: "The advantageous decks are less exciting on each individual draw but produce better cumulative outcomes.",
    },
    {
      type: "paragraph",
      text: "This creates the central conflict:",
    },
    {
      type: "paragraph",
      text: "**large immediate reward**",
    },
    {
      type: "paragraph",
      text: "versus",
    },
    {
      type: "paragraph",
      text: "**better long-term return**",
    },
    {
      type: "paragraph",
      text: "Your browser version follows that general structure, but its exact 40-card sequence should not be assumed to reproduce the validated deck schedules of standardized IGT materials.",
    },
    {
      type: "heading",
      text: "Why 40 Cards Is Different From the Classic Task",
    },
    {
      type: "paragraph",
      text: "The traditional research IGT commonly uses **100 selections**.",
    },
    {
      type: "paragraph",
      text: "Researchers often examine how choices change across blocks of trials rather than looking only at the final balance.",
    },
    {
      type: "paragraph",
      text: "Your version ends after 40 cards.",
    },
    {
      type: "paragraph",
      text: "That makes it quicker and more engaging online, but it also gives participants less time to sample all four decks and learn their payoff patterns.",
    },
    {
      type: "paragraph",
      text: "A short run is therefore more sensitive to:",
    },
    {
      type: "list",
      items: ["early luck;", "which decks you sample first;", "a few large penalties;", "and how quickly you explore alternatives."],
    },
    {
      type: "paragraph",
      text: "Do not compare your 40-card result directly with published 100-trial clinical or research norms.",
    },
    {
      type: "heading",
      text: "What Does the Iowa Gambling Task Measure?",
    },
    {
      type: "paragraph",
      text: "The IGT is often described as a test of **decision-making under uncertainty**.",
    },
    {
      type: "paragraph",
      text: "Successful performance can involve several processes:",
    },
    {
      type: "list",
      items: [
        "learning from rewards and losses;",
        "updating expectations about each deck;",
        "balancing immediate and delayed outcomes;",
        "exploring unfamiliar options;",
        "changing strategy after negative feedback;",
        "and resisting large immediate rewards when long-term outcomes are poor.",
      ],
    },
    {
      type: "paragraph",
      text: "That does not make the task a pure measure of one single ability.",
    },
    {
      type: "paragraph",
      text: "Performance can also be influenced by:",
    },
    {
      type: "list",
      items: ["working memory;", "attention;", "explicit knowledge;", "sensitivity to reward and punishment;", "exploration strategy;", "and understanding of the task."],
    },
    {
      type: "paragraph",
      text: "A final score compresses many processes into one outcome.",
    },
    {
      type: "heading",
      text: "Final Balance Is Not the Whole Story",
    },
    {
      type: "paragraph",
      text: "Two people can finish with similar balances while making very different choices.",
    },
    {
      type: "paragraph",
      text: "One person may discover the better decks early.",
    },
    {
      type: "paragraph",
      text: "Another may continue choosing high-reward decks and simply avoid several penalties by chance.",
    },
    {
      type: "paragraph",
      text: "Researchers therefore often examine **deck selections**, not only total money.",
    },
    {
      type: "paragraph",
      text: "A common summary in the traditional task compares advantageous with disadvantageous choices:",
    },
    {
      type: "paragraph",
      text: "**(C + D) − (A + B)**",
    },
    {
      type: "paragraph",
      text: "Positive values indicate more selections from the advantageous decks.",
    },
    {
      type: "paragraph",
      text: "Researchers may also calculate this measure separately across blocks to examine learning over time.",
    },
    {
      type: "paragraph",
      text: "Your browser task can be understood in the same spirit even if its results page emphasizes final balance.",
    },
    {
      type: "heading",
      text: "The “Deck B” Problem",
    },
    {
      type: "paragraph",
      text: "The four decks are not distinguished only by long-term expected value.",
    },
    {
      type: "paragraph",
      text: "They can also differ in **how often losses occur**.",
    },
    {
      type: "paragraph",
      text: "This has created an important research debate.",
    },
    {
      type: "paragraph",
      text: "Some participants strongly prefer decks that produce losses less frequently, even when the long-term payoff is poor.",
    },
    {
      type: "paragraph",
      text: "This pattern is sometimes called the **prominent Deck B phenomenon**.",
    },
    {
      type: "paragraph",
      text: "It shows that IGT behavior can reflect sensitivity to loss frequency as well as long-term expected value.",
    },
    {
      type: "paragraph",
      text: "So it is too simple to describe every choice of a disadvantageous deck as:",
    },
    {
      type: "paragraph",
      text: "**“the participant only cares about immediate reward.”**",
    },
    {
      type: "paragraph",
      text: "Different features of the payoff schedule can drive preference.",
    },
    {
      type: "heading",
      text: "Do People Learn Without Knowing Why?",
    },
    {
      type: "paragraph",
      text: "Early Iowa Gambling Task research became closely associated with the **somatic marker hypothesis**.",
    },
    {
      type: "paragraph",
      text: "One influential interpretation proposed that emotional or bodily signals begin guiding advantageous decisions before participants can consciously explain which decks are good or bad.",
    },
    {
      type: "paragraph",
      text: "This idea became widely discussed.",
    },
    {
      type: "paragraph",
      text: "However, later research challenged the claim that healthy participants necessarily lack explicit knowledge during early advantageous choices.",
    },
    {
      type: "paragraph",
      text: "More detailed questioning has shown that participants can sometimes know more about the deck structure than simple early interviews suggested.",
    },
    {
      type: "paragraph",
      text: "The safest modern description is:",
    },
    {
      type: "paragraph",
      text: "**IGT decisions can involve emotional learning, reinforcement, explicit knowledge, and strategic reasoning.**",
    },
    {
      type: "paragraph",
      text: "The task does not prove that decisions are guided by unconscious bodily signals alone.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good Iowa Gambling Task Score?",
    },
    {
      type: "paragraph",
      text: "There is no universal “good” final balance for this browser version.",
    },
    {
      type: "paragraph",
      text: "Your outcome depends on:",
    },
    {
      type: "list",
      items: ["the shortened 40-card format;", "exact penalty schedule;", "order of penalties;", "which decks you sample;", "and random or predetermined sequence design."],
    },
    {
      type: "paragraph",
      text: "Published IGT norms belong to specific standardized procedures.",
    },
    {
      type: "paragraph",
      text: "They should not be pasted onto a simplified web adaptation.",
    },
    {
      type: "paragraph",
      text: "For personal comparison, look at:",
    },
    {
      type: "list",
      items: ["final balance;", "how often you selected each deck;", "whether your later choices favored advantageous decks more than your early choices."],
    },
    {
      type: "paragraph",
      text: "That pattern is more informative than one arbitrary score band.",
    },
    {
      type: "heading",
      text: "Iowa Gambling Task vs. Risk-Taking Test",
    },
    {
      type: "paragraph",
      text: "The [Risk-Taking Test](/test/risk-taking-test) on this site uses a Balloon Analogue Risk Task-style design.",
    },
    {
      type: "paragraph",
      text: "The tasks differ.",
    },
    {
      type: "subheading",
      text: "Iowa Gambling Task",
    },
    {
      type: "paragraph",
      text: "You learn which of several options has better long-term outcomes through repeated feedback.",
    },
    {
      type: "subheading",
      text: "Balloon Risk Task",
    },
    {
      type: "paragraph",
      text: "You repeatedly decide how far to push one escalating reward before cashing out.",
    },
    {
      type: "paragraph",
      text: "Both involve uncertainty and reward.",
    },
    {
      type: "paragraph",
      text: "But IGT emphasizes **learning among competing options**, while the balloon task emphasizes **escalating risk within an option**.",
    },
    {
      type: "paragraph",
      text: "Scores should not be compared directly.",
    },
    {
      type: "heading",
      text: "Can the Iowa Gambling Task Diagnose a Disorder?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "Research and clinical versions of the IGT have been studied in neurological, psychiatric, addiction, and decision-making research.",
    },
    {
      type: "paragraph",
      text: "That does not make a 40-card browser game diagnostic.",
    },
    {
      type: "paragraph",
      text: "Poor performance on one attempt could reflect:",
    },
    {
      type: "list",
      items: ["chance;", "misunderstanding;", "distraction;", "a particular exploration strategy;", "or simply not having enough trials to learn the decks."],
    },
    {
      type: "paragraph",
      text: "Clinical interpretation requires validated procedures and broader assessment.",
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
          question: "Who created the Iowa Gambling Task?",
          answer: "Antoine Bechara and colleagues introduced the task in 1994 in research on decision-making after prefrontal brain damage.",
        },
        {
          question: "Which decks are good?",
          answer:
            "In the traditional design, A and B are disadvantageous over time while C and D are advantageous. This website uses a simplified adaptation rather than the exact standardized sequence.",
        },
        {
          question: "Why are the risky decks tempting?",
          answer: "They offer larger immediate rewards, while their long-term disadvantage becomes clear only after experiencing penalties.",
        },
        {
          question: "Is the final balance the main research score?",
          answer: "Not always. Researchers often analyze deck-choice patterns and advantageous-minus-disadvantageous selections across blocks.",
        },
        {
          question: "Why does this version use 40 cards?",
          answer: "It creates a faster browser experience. The traditional IGT commonly uses more trials, so results should not be compared directly.",
        },
        {
          question: "Does the task prove unconscious decision-making?",
          answer:
            "No. The role of unconscious bodily signals versus explicit knowledge has been debated, and later research showed participants can possess more conscious knowledge than early accounts suggested.",
        },
        {
          question: "Is this a clinical test?",
          answer: "No. It is a simplified educational implementation of the IGT paradigm.",
        },
      ],
    },
    {
      type: "heading",
      text: "Learn From the Pattern, Not the Biggest Win",
    },
    {
      type: "paragraph",
      text: "The decks are designed to make immediate reward compete with long-term outcome.",
    },
    {
      type: "paragraph",
      text: "A large payout can feel attractive.",
    },
    {
      type: "paragraph",
      text: "But one card does not tell you whether a deck is good.",
    },
    {
      type: "paragraph",
      text: "Watch what happens across repeated choices.",
    },
    {
      type: "paragraph",
      text: "The core lesson of the Iowa Gambling Task is that **good decisions under uncertainty often require integrating a history of rewards and losses rather than chasing the most exciting immediate outcome**.",
    },
  ],
};
