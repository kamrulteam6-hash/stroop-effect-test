"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "spelling-test",
  intro: "For each set of options, choose the correctly spelled word. 12 words, from common to tricky.",
  resultHeading: "Spelling Result",
  disclaimer: "This is an original spelling quiz using commonly misspelled English words. It is not a certified spelling assessment.",
  questions: [
    { question: "Which is spelled correctly?", options: ["Recieve", "Receive", "Receve", "Receeve"], correctIndex: 1 },
    { question: "Which is spelled correctly?", options: ["Definitely", "Definately", "Definitly", "Defenitely"], correctIndex: 0 },
    { question: "Which is spelled correctly?", options: ["Seperate", "Separate", "Saparate", "Seperete"], correctIndex: 1 },
    { question: "Which is spelled correctly?", options: ["Occured", "Ocurred", "Occurred", "Ocured"], correctIndex: 2 },
    { question: "Which is spelled correctly?", options: ["Necesary", "Neccessary", "Necessary", "Neccesary"], correctIndex: 2 },
    { question: "Which is spelled correctly?", options: ["Embarass", "Embarrass", "Embaras", "Embarrasse"], correctIndex: 1 },
    { question: "Which is spelled correctly?", options: ["Accommodate", "Accomodate", "Acommodate", "Accommadate"], correctIndex: 0 },
    { question: "Which is spelled correctly?", options: ["Rythm", "Rhythem", "Rhythm", "Rhytm"], correctIndex: 2 },
    { question: "Which is spelled correctly?", options: ["Concious", "Consious", "Conscious", "Conshious"], correctIndex: 2 },
    { question: "Which is spelled correctly?", options: ["Priviledge", "Privilege", "Privelege", "Privelige"], correctIndex: 1 },
    { question: "Which is spelled correctly?", options: ["Maintainance", "Maintenence", "Maintenance", "Maintainence"], correctIndex: 2 },
    { question: "Which is spelled correctly?", options: ["Questionaire", "Questionnaire", "Questionnair", "Questionaire"], correctIndex: 1 },
  ],
};

export function SpellingTest() {
  return <MCQQuiz config={config} />;
}
