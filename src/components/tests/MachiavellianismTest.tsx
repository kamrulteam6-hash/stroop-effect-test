"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "machiavellianism-test",
  intro:
    "Answer 10 short statements about how you generally approach influence, strategy, and trust in other people. Answer honestly for the most useful result.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I believe most people will lie or cheat if it benefits them enough." },
    { text: "I plan several steps ahead when trying to get what I want from a situation." },
    { text: "I think it's smarter to keep your real intentions hidden from others." },
    { text: "I'm comfortable bending the truth if it helps me achieve a goal." },
    { text: "I believe the ends often justify the means." },
    { text: "I find it useful to know people's weaknesses in case I need to use them." },
    { text: "I avoid trusting people until they've proven themselves useful or reliable to me." },
    { text: "I think emotions get in the way of making smart, strategic decisions." },
    { text: "I'm willing to flatter someone I don't respect if it helps me get ahead." },
    { text: "I believe most people can be manipulated if you understand what they want." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Machiavellian Traits",
      description: "Your answers suggest a generally trusting, straightforward approach to other people, without much strategic manipulation.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Strategic Tendencies",
      description:
        "You reported a moderate level of strategic, cynical, or pragmatic thinking about people. A degree of this is common and can even be adaptive in competitive settings.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Machiavellian Traits",
      description:
        "You reported a fairly high level of cynicism about others' motives and willingness to use manipulation. Worth reflecting on how this shapes your closest relationships.",
    },
    {
      max: 100,
      tone: "danger",
      label: "High Machiavellian Traits",
      description:
        "You reported a high level of strategic manipulation, distrust, and ends-justify-means thinking. This is not a diagnosis, but these patterns can strain long-term relationships if left unexamined.",
    },
  ],
  resultHeading: "Machiavellianism Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by the publicly described concept of Machiavellianism (cynical worldview, strategic manipulation, and ends-justify-means thinking). It is not the Mach-IV or any validated clinical instrument, and its result is a rough trait snapshot, not a diagnosis.",
};

export function MachiavellianismTest() {
  return <LikertScreener config={config} />;
}
