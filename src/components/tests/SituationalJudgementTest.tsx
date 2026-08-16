"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "situational-judgement-test",
  intro:
    "Read each workplace scenario and choose the most professional, effective response. There is a single best-practice answer per question, based on common workplace judgement guidance.",
  resultHeading: "Situational Judgement Result",
  disclaimer: "This is an original situational judgement quiz reflecting general workplace best practices. It is not an official assessment used by any specific employer, and real workplace situations always deserve their own careful judgement.",
  questions: [
    {
      question: "A coworker takes credit for your idea in a meeting in front of your manager. What is the best response?",
      options: [
        "Interrupt loudly to correct them immediately",
        "Say nothing and let it go permanently",
        "Calmly clarify your contribution in the moment or follow up privately with your manager afterward",
        "Complain about them to other coworkers",
      ],
      correctIndex: 2,
      explanation: "Calmly asserting your contribution — in the moment or in a private follow-up — addresses the issue professionally without escalating conflict.",
    },
    {
      question: "You notice a significant error in a report your team already submitted to a client. What should you do first?",
      options: [
        "Ignore it since it's already sent",
        "Immediately notify your manager or team lead about the error",
        "Quietly fix it without telling anyone",
        "Wait to see if the client notices",
      ],
      correctIndex: 1,
      explanation: "Promptly informing your manager allows the error to be corrected transparently and professionally.",
    },
    {
      question: "You're overwhelmed with two urgent deadlines from different managers due at the same time. What's the best first step?",
      options: [
        "Pick one at random and hope for the best",
        "Miss both deadlines silently",
        "Proactively communicate the conflict to both managers so priorities can be clarified",
        "Complete both poorly to save time",
      ],
      correctIndex: 2,
      explanation: "Transparent communication lets managers help prioritize, which is more effective than silently struggling or guessing.",
    },
    {
      question: "A new team member seems to be struggling to keep up but hasn't asked for help. What is the most supportive approach?",
      options: [
        "Ignore it — it's not your responsibility",
        "Report them to management immediately",
        "Publicly point out their struggles in a team meeting",
        "Privately check in and offer help or point them to resources",
      ],
      correctIndex: 3,
      explanation: "A private, supportive check-in respects their dignity while offering a path to improvement.",
    },
    {
      question: "You disagree with a decision your manager just made in a team meeting. What's the most professional approach?",
      options: [
        "Argue with them in front of the whole team",
        "Stay silent in the meeting, then share your concerns privately afterward",
        "Complain to coworkers after the meeting",
        "Ignore the decision and do things your own way",
      ],
      correctIndex: 1,
      explanation: "Raising concerns privately preserves the manager's authority in the moment while still ensuring your perspective is heard.",
    },
    {
      question: "You accidentally send a confidential email to the wrong recipient. What should you do?",
      options: [
        "Say nothing and hope they don't notice",
        "Immediately notify your manager and, if appropriate, the recipient to contain the issue",
        "Delete the email from your sent folder and move on",
        "Blame the email system",
      ],
      correctIndex: 1,
      explanation: "Prompt, transparent disclosure allows the situation to be contained and handled appropriately.",
    },
    {
      question: "Two coworkers on your team are in an ongoing conflict that's affecting group morale. As a peer (not their manager), what's the best approach?",
      options: [
        "Take sides publicly to resolve it faster",
        "Encourage both to address it directly or involve a manager/HR if needed, rather than mediating yourself",
        "Ignore the tension entirely",
        "Spread information about the conflict to other teammates",
      ],
      correctIndex: 1,
      explanation: "As a peer, encouraging direct resolution or appropriate escalation avoids overstepping your role while still being constructive.",
    },
    {
      question: "You're asked to complete a task using a method you believe is inefficient. What's the best approach?",
      options: [
        "Do it exactly as asked without question, even if you have a better idea",
        "Refuse to do the task",
        "Respectfully suggest your alternative approach, then follow the agreed decision",
        "Do it your own way without telling anyone",
      ],
      correctIndex: 2,
      explanation: "Voicing a respectful suggestion while ultimately following the agreed process balances initiative with teamwork.",
    },
  ],
};

export function SituationalJudgementTest() {
  return <MCQQuiz config={config} />;
}
