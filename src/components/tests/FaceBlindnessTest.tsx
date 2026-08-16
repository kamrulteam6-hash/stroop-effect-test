"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "face-blindness-test",
  intro:
    "Answer 10 short statements about recognizing faces in everyday life. Answer with what has generally been true for you, especially growing up.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I fail to recognize close friends or family if I see them somewhere unexpected." },
    { text: "I rely on hair, voice, or clothing more than facial features to recognize people." },
    { text: "I lose track of who's who in movies or shows with several similar-looking characters." },
    { text: "I introduce myself to someone I've clearly already met before." },
    { text: "I struggle to recognize actors from one movie to the next." },
    { text: "I find large gatherings stressful because I can't reliably recognize people's faces." },
    { text: "I need several interactions before a new person's face feels familiar to me." },
    { text: "I mix up two people who don't actually look very alike to others." },
    { text: "I recognize people more by context (where I expect to see them) than by their face alone." },
    { text: "People are surprised or hurt when I don't recognize them." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Few Reported Difficulties",
      description: "Your answers suggest few everyday face-recognition difficulties commonly associated with face blindness.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Difficulties",
      description: "You reported some difficulty recognizing faces. Many people experience this occasionally, especially with unfamiliar or similar-looking people.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Notable Difficulties",
      description:
        "You reported a fairly high level of face-recognition difficulty. A formal evaluation using validated face-memory tests can clarify whether this reflects prosopagnosia (face blindness).",
    },
    {
      max: 100,
      tone: "danger",
      label: "Significant Difficulties",
      description:
        "You reported a high level of everyday face-recognition difficulty. This screener cannot diagnose prosopagnosia, but a formal assessment with a researcher or clinician familiar with face perception could help.",
    },
  ],
  resultHeading: "Face Blindness Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described everyday face-recognition difficulties associated with prosopagnosia (face blindness). It is not the Prosopagnosia Index or any validated clinical instrument, and cannot diagnose face blindness or any condition. Only a qualified researcher or clinician using standardized face-memory tests can assess this properly.",
};

export function FaceBlindnessTest() {
  return <LikertScreener config={config} />;
}
