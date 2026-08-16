"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "verbal-analogy-test",
  intro:
    "Work out the relationship between the first word pair, then pick the option that completes the second pair with the same relationship.",
  resultHeading: "Verbal Analogy Result",
  disclaimer: "This is an original verbal analogy quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    { question: "Doctor is to Hospital as Teacher is to:", options: ["Student", "School", "Book", "Lesson"], correctIndex: 1, explanation: "A doctor works at a hospital, just as a teacher works at a school — matching workplace." },
    { question: "Puppy is to Dog as Kitten is to:", options: ["Cat", "Feline", "Pet", "Mouse"], correctIndex: 0, explanation: "A puppy is a baby dog, just as a kitten is a baby cat." },
    { question: "Author is to Book as Composer is to:", options: ["Piano", "Symphony", "Concert", "Music"], correctIndex: 1, explanation: "An author creates a book, just as a composer creates a symphony — matching creator to creation." },
    { question: "Thermometer is to Temperature as Scale is to:", options: ["Fish", "Weight", "Measurement", "Balance"], correctIndex: 1, explanation: "A thermometer measures temperature, just as a scale measures weight." },
    { question: "Optimist is to Hopeful as Pessimist is to:", options: ["Cheerful", "Doubtful", "Confident", "Excited"], correctIndex: 1, explanation: "An optimist tends to be hopeful, just as a pessimist tends to be doubtful — matching trait to disposition." },
    { question: "Chapter is to Book as Scene is to:", options: ["Actor", "Play", "Stage", "Script"], correctIndex: 1, explanation: "A chapter is a section of a book, just as a scene is a section of a play." },
    { question: "Bee is to Hive as Bird is to:", options: ["Sky", "Nest", "Feather", "Wing"], correctIndex: 1, explanation: "A bee lives in a hive, just as a bird lives in a nest — matching creature to home." },
    { question: "Generous is to Stingy as Brave is to:", options: ["Bold", "Cowardly", "Fearless", "Confident"], correctIndex: 1, explanation: "Generous and stingy are opposites, just as brave and cowardly are opposites." },
    { question: "Wheel is to Car as Propeller is to:", options: ["Airplane", "Bicycle", "Engine", "Road"], correctIndex: 0, explanation: "A wheel helps move a car, just as a propeller helps move an airplane." },
    { question: "Sculptor is to Clay as Painter is to:", options: ["Brush", "Canvas", "Museum", "Frame"], correctIndex: 1, explanation: "A sculptor works with clay as their medium, just as a painter works with canvas as their medium." },
    { question: "Library is to Books as Museum is to:", options: ["Visitors", "Tickets", "Artifacts", "Building"], correctIndex: 2, explanation: "A library houses books, just as a museum houses artifacts — matching place to contents." },
    { question: "Whisper is to Loud as Sprint is to:", options: ["Fast", "Slow", "Run", "Tired"], correctIndex: 1, explanation: "A whisper is the opposite of loud speech, just as a sprint is the opposite of a slow pace." },
  ],
};

export function VerbalAnalogyTest() {
  return <MCQQuiz config={config} />;
}
