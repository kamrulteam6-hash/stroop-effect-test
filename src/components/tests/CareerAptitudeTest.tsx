"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "career-aptitude-test",
  intro:
    "Answer 12 scenario and skill-based questions to see which broad career direction best fits your natural strengths.",
  resultHeading: "Career Aptitude Result",
  disclaimer: "This is an original, entertainment-oriented career aptitude quiz. It is not a substitute for professional career counseling.",
  questions: [
    { question: "A project needs a detailed budget spreadsheet built from scratch. Which skill does this task rely on most?", options: ["Numerical/analytical thinking", "Creative writing", "Physical coordination", "Public speaking"], correctIndex: 0, explanation: "Building a detailed budget primarily draws on numerical and analytical skills." },
    { question: "Which activity would most test your ability to persuade a skeptical audience?", options: ["Organizing files", "Delivering a sales pitch", "Debugging code silently", "Painting a mural"], correctIndex: 1, explanation: "A sales pitch to a skeptical audience directly tests persuasive communication skill." },
    { question: "If a machine breaks down on a factory floor, which skill is most useful to diagnose the issue?", options: ["Mechanical troubleshooting", "Creative storytelling", "Financial forecasting", "Graphic design"], correctIndex: 0, explanation: "Diagnosing broken machinery relies on mechanical/technical troubleshooting skill." },
    { question: "Which task best reflects strong interpersonal/helping skills?", options: ["Auditing financial statements", "Counseling a distressed coworker", "Repairing a car engine", "Writing computer code"], correctIndex: 1, explanation: "Counseling someone through distress relies heavily on interpersonal, empathetic skills." },
    { question: "Designing a company's new logo and brand colors relies most on:", options: ["Artistic/creative skill", "Statistical analysis", "Physical strength", "Legal knowledge"], correctIndex: 0, explanation: "Designing a logo is fundamentally a creative, artistic task." },
    { question: "Which task most tests organizational and process-management skill?", options: ["Coordinating a multi-team product launch", "Composing a symphony", "Performing surgery", "Writing poetry"], correctIndex: 0, explanation: "Coordinating multiple teams for a launch heavily relies on organizational and planning skill." },
    { question: "Reviewing a legal contract for risky clauses relies mostly on:", options: ["Attention to detail and analytical reading", "Physical dexterity", "Musical talent", "Athletic ability"], correctIndex: 0, explanation: "Reviewing a legal contract for risk depends on careful, analytical reading." },
    { question: "Which role would most reward strong hands-on, mechanical skill?", options: ["HVAC technician", "Novelist", "Tax accountant", "Talk show host"], correctIndex: 0, explanation: "An HVAC technician's work is fundamentally hands-on and mechanical." },
    { question: "Which task best reflects data-driven, analytical thinking?", options: ["Analyzing customer churn data to find patterns", "Sculpting a statue", "Leading a yoga class", "Writing a screenplay"], correctIndex: 0, explanation: "Finding patterns in data is a core analytical, data-driven task." },
    { question: "Which career activity relies most on scientific investigation skill?", options: ["Running controlled lab experiments", "Negotiating a business deal", "Editing a film", "Managing a retail store"], correctIndex: 0, explanation: "Running controlled experiments is a core scientific investigation skill." },
    { question: "Leading a team through a stressful crisis relies most on:", options: ["Leadership and composure under pressure", "Fine motor precision", "Musical composition", "Statistical modeling"], correctIndex: 0, explanation: "Leading through crisis draws primarily on leadership and composure." },
    { question: "Which task best reflects strong verbal/writing communication skill?", options: ["Writing a compelling grant proposal", "Assembling furniture", "Calculating tax deductions", "Operating heavy machinery"], correctIndex: 0, explanation: "Writing a compelling proposal relies fundamentally on written communication skill." },
  ],
};

export function CareerAptitudeTest() {
  return <MCQQuiz config={config} />;
}
