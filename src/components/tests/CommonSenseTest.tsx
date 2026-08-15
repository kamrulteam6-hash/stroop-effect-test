"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "common-sense-test",
  intro: "Answer 10 short everyday scenarios by choosing the most sensible response. There's a generally agreed-upon best answer for each.",
  resultHeading: "Common Sense Result",
  disclaimer: "This is an original set of everyday practical-judgment scenarios reflecting generally accepted prudent choices. Reasonable people can sometimes disagree — this is not a validated psychological instrument.",
  questions: [
    { question: "You smell gas in your kitchen. What should you do first?", options: ["Turn on a light to see better", "Open windows and leave, then call the gas company from outside", "Light a candle to check the smell", "Search for the leak with a lighter"], correctIndex: 1 },
    { question: "Your car's low fuel light comes on while driving in an unfamiliar area at night. What's the most sensible plan?", options: ["Keep driving until it's empty to see how far you get", "Find the nearest well-lit gas station as soon as possible", "Turn off the engine periodically to save fuel", "Ignore it, the light is usually wrong"], correctIndex: 1 },
    { question: "You receive an email saying you've won a prize but need to pay a fee to claim it. What should you do?", options: ["Pay the fee immediately before it expires", "Reply with your bank details to verify", "Treat it as a likely scam and don't respond", "Forward it to all your contacts"], correctIndex: 2 },
    { question: "You're about to send an angry email to a colleague. What's the wisest move?", options: ["Send it immediately while you feel strongly", "Write it, then wait before deciding whether to send it", "CC your boss for extra impact", "Add more angry details for emphasis"], correctIndex: 1 },
    { question: "A stranger online asks to borrow money, claiming to be a friend whose account was hacked. What should you do?", options: ["Send the money quickly to help", "Verify by contacting the friend directly through another channel first", "Ask for more personal details over chat", "Ignore the message entirely without checking"], correctIndex: 1 },
    { question: "You're hiking and the weather suddenly turns bad. What's the most sensible choice?", options: ["Continue to the summit as planned", "Turn back or seek shelter promptly", "Wait it out in the open", "Speed up to try to beat the storm to the top"], correctIndex: 1 },
    { question: "You accidentally CC'd the wrong person on a sensitive email. What should you do?", options: ["Ignore it and hope they don't notice", "Promptly send a polite follow-up acknowledging the mistake", "Delete the email from your sent folder", "Blame it on a technical glitch"], correctIndex: 1 },
    { question: "You notice your smoke detector beeping intermittently. What does this most likely mean, and what should you do?", options: ["Ignore it, it will stop on its own", "The battery is likely low — replace it soon", "Unplug the smoke detector", "Call the fire department immediately"], correctIndex: 1 },
    { question: "A coworker takes credit for your idea in a meeting. What's the most constructive response?", options: ["Publicly confront them angrily in the meeting", "Say nothing and let it go permanently", "Calmly clarify your contribution in the moment or follow up privately afterward", "Spread negative comments about them to others"], correctIndex: 2 },
    { question: "You're unsure if food in your fridge has gone bad. What's the safest approach?", options: ["Taste a small amount to check", "If in doubt and past its date with signs of spoilage, throw it out", "Cook it longer to kill anything harmful", "Smell it and eat it if it seems mostly fine"], correctIndex: 1 },
  ],
};

export function CommonSenseTest() {
  return <MCQQuiz config={config} />;
}
