"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "english-level-test",
  intro:
    "Answer 12 short statements about your English reading, writing, listening, and speaking ability. This gives a rough, self-reported CEFR-style estimate (A1-C2) — not a certified language assessment.",
  scaleLabels: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  questions: [
    { text: "I can understand and use very basic phrases, like greetings and simple questions." },
    { text: "I can introduce myself and answer simple personal questions in English." },
    { text: "I can understand the main point of clear, everyday speech on familiar topics." },
    { text: "I can handle most situations while traveling in an English-speaking area." },
    { text: "I can understand the main ideas of complex text on both concrete and abstract topics." },
    { text: "I can interact with native English speakers with a fair degree of fluency." },
    { text: "I can express myself clearly and in detail on a wide range of subjects." },
    { text: "I can understand a wide range of demanding, longer texts and recognize implicit meaning." },
    { text: "I can use English flexibly and effectively for social, academic, and professional purposes." },
    { text: "I can understand virtually everything I read or hear in English, including subtle nuance." },
    { text: "I can express myself spontaneously and precisely, even in complex situations." },
    { text: "I rarely need to search for expressions while speaking or writing in English." },
  ],
  bands: [
    { max: 20, tone: "primary", label: "A1 — Beginner", description: "You can understand and use very basic, familiar everyday expressions and simple phrases." },
    { max: 35, tone: "primary", label: "A2 — Elementary", description: "You can communicate in simple, routine tasks on familiar topics and describe basic personal information." },
    { max: 50, tone: "primary", label: "B1 — Intermediate", description: "You can handle most everyday situations and produce simple connected text on familiar topics." },
    { max: 65, tone: "primary", label: "B2 — Upper Intermediate", description: "You can understand complex text and interact with a degree of fluency that makes regular interaction with native speakers possible." },
    { max: 82, tone: "success", label: "C1 — Advanced", description: "You can use English flexibly and effectively for social, academic, and professional purposes with good control of complex language." },
    { max: 100, tone: "success", label: "C2 — Proficient", description: "You can understand with ease virtually everything and express yourself spontaneously, precisely, and fluently." },
  ],
  resultHeading: "English Level Result",
  disclaimer:
    "This is an original, informal self-report scale inspired by the publicly described CEFR (Common European Framework of Reference) can-do statements. It is not an official CEFR certification, IELTS, TOEFL, or any validated language proficiency exam — official certification requires a proctored test with speaking, writing, listening, and reading components.",
};

export function EnglishLevelTest() {
  return <LikertScreener config={config} />;
}
