"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "autism-spectrum-test",
  intro:
    "Answer 12 short statements about social communication and everyday habits. Respond with what has generally been true for you, not just recently.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  dimensions: { SC: "Social Communication", RR: "Routines & Focused Interests" },
  questions: [
    { dimension: "SC", text: "I find it hard to tell when someone is bored with what I'm saying." },
    { dimension: "SC", text: "I prefer doing things alone rather than in a group." },
    { dimension: "SC", text: "I find small talk difficult or draining." },
    { dimension: "SC", text: "I struggle to read facial expressions or tone of voice accurately." },
    { dimension: "SC", text: "I take things literally and miss sarcasm or implied meaning." },
    { dimension: "SC", text: "I find it hard to imagine what another person is thinking or feeling." },
    { dimension: "RR", text: "I get very absorbed in a specific topic or interest for long periods." },
    { dimension: "RR", text: "I like to do things the same way every time and get uncomfortable when the routine changes." },
    { dimension: "RR", text: "I notice small details, patterns, or sounds that other people don't seem to notice." },
    { dimension: "RR", text: "Certain sounds, textures, lights, or smells bother me more than they seem to bother others." },
    { dimension: "RR", text: "I have specific ways I like things arranged or organized." },
    { dimension: "RR", text: "Unexpected changes in plans are especially stressful for me." },
  ],
  bands: [
    {
      max: 30,
      tone: "success",
      label: "Few Reported Traits",
      description: "Your answers suggest social-communication and routine-related patterns that are broadly typical.",
    },
    {
      max: 55,
      tone: "primary",
      label: "Some Traits Present",
      description:
        "You reported a moderate number of traits sometimes associated with autism. Many people relate to some of these to varying degrees.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Traits Present",
      description:
        "You reported a fairly high number of traits commonly discussed in relation to autism spectrum characteristics. Speaking with a psychologist experienced in autism assessment can offer more clarity.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Many Traits Present",
      description:
        "You reported a high number of these traits. This screener cannot diagnose autism, but if these patterns significantly affect your daily life, a formal evaluation by a qualified specialist is a reasonable next step.",
    },
  ],
  resultHeading: "Autism Spectrum Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described autism spectrum trait domains (social communication and restricted/repetitive patterns). It is not the AQ, RAADS, or any clinical instrument, has not been validated, and cannot diagnose autism or any condition. Only a qualified clinician can provide a diagnosis.",
};

export function AutismSpectrumTest() {
  return <LikertScreener config={config} />;
}
