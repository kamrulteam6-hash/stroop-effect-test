import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How do you actually behave when a reward gets bigger the longer you're willing to risk losing it? This test is based on the Balloon Analogue Risk Task (BART), a well-established behavioral measure used in psychology research to study real risk-taking through actions rather than self-reported opinions about risk.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Risk-Taking Test Works",
    },
    {
      type: "paragraph",
      text: "You'll pump up 10 balloons, one at a time. Each pump adds points to that balloon's potential payout — but every balloon has a hidden breaking point, and it can pop at any moment. If it pops, you lose everything you haven't banked from that balloon. At any time, you can choose to cash out instead, locking in your current points and moving to the next balloon. Your final score is the total points you successfully banked across all 10 balloons.",
    },
    {
      type: "heading",
      text: "Why Researchers Use This Exact Task",
    },
    {
      type: "paragraph",
      text: "The Balloon Analogue Risk Task was developed by researchers in the early 2000s specifically to measure real-world-relevant risk-taking behavior in a controlled, repeatable way. Unlike a questionnaire that simply asks \"how much of a risk-taker are you,\" BART captures risk-taking through actual escalating decisions under uncertainty — each pump is a real choice with a real trade-off between potential gain and potential loss, which tends to produce more behaviorally meaningful results than self-report alone.",
    },
    {
      type: "heading",
      id: "why-it-matters",
      text: "What Your Pumping Pattern Reveals",
    },
    {
      type: "paragraph",
      text: "There's no universally \"correct\" number of pumps — the test captures a personal risk tolerance profile, not a right-or-wrong performance. Consistently pumping many times before cashing out (or risking a pop) suggests a higher tolerance for uncertain, escalating risk in pursuit of a bigger reward. Cashing out early and often suggests a more risk-averse, loss-avoidant approach. Research using this task has explored links between BART-style risk-taking patterns and behaviors in other domains involving uncertain rewards, though this casual version is for self-insight rather than any predictive claim about your real-world behavior.",
    },
    {
      type: "heading",
      text: "Tips for Thinking About Your Result",
    },
    {
      type: "list",
      items: [
        "There's no target score to aim for — try to respond naturally rather than strategizing around what result 'looks good.'",
        "Notice whether your strategy changes after a balloon pops — many people pull back temporarily after a loss.",
        "Compare your cashed-out balloons to your popped balloons to see your personal balance point.",
        "Try the test again on a different day and see if your pattern stays consistent.",
      ],
    },
    {
      type: "callout",
      icon: "🎈",
      title: "A behavioral snapshot, not a diagnosis",
      tone: "gold",
      text: "This is a simplified, casual version of a real research task, meant for personal insight and entertainment rather than a clinical or predictive risk assessment.",
    },
    {
      type: "paragraph",
      text: "Want to explore a different side of personality? Try our [Big Five Personality Test](/test/big-five-personality-test) for a broader, trait-based self-report profile alongside this behavioral risk measure.",
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
          question: "What does BART stand for?",
          answer:
            "BART stands for Balloon Analogue Risk Task, a behavioral measure developed by psychology researchers to study risk-taking through real, escalating decisions rather than self-reported attitudes.",
        },
        {
          question: "Is there a 'best' strategy for this test?",
          answer:
            "No — the test is designed to reveal your personal risk tolerance, not to be optimized. Responding naturally, rather than trying to maximize your score strategically, gives the most meaningful result.",
        },
        {
          question: "Does a higher score mean I'm a bigger risk-taker?",
          answer:
            "Generally, banking more points by pumping further before cashing out reflects a higher tolerance for escalating uncertain risk, while cashing out early and often reflects a more cautious approach — but this is descriptive, not a judgment of better or worse.",
        },
        {
          question: "Why does each balloon have a different pop point?",
          answer:
            "The pop point is randomized and hidden for every balloon specifically so you can't learn or predict it — this keeps every pump a genuine decision under real uncertainty, which is the core of what the task measures.",
        },
        {
          question: "Is this test used in real scientific research?",
          answer:
            "The original Balloon Analogue Risk Task is a well-established tool in behavioral psychology research on risk-taking. This is a simplified, casual browser version inspired by that task, not the validated research instrument itself.",
        },
      ],
    },
  ],
};
