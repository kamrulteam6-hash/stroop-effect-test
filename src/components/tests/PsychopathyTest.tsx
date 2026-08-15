"use client";

import { LikertScreener, LikertScreenerConfig } from "@/components/tests/shared/LikertScreener";

const config: LikertScreenerConfig = {
  slug: "psychopathy-test",
  intro:
    "Answer 10 short statements about how you generally relate to rules, risk, and other people's feelings. This is a trait screener, not a clinical or forensic assessment.",
  scaleLabels: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  questions: [
    { text: "I stay calm and unbothered in situations that would upset most people." },
    { text: "I find it easy to say what people want to hear, even if it isn't true." },
    { text: "Other people's emotional reactions don't affect me much." },
    { text: "I enjoy taking risks that others would consider reckless." },
    { text: "I get bored easily and seek out excitement or stimulation." },
    { text: "I've used charm or flattery to get something I wanted from someone." },
    { text: "I don't feel much guilt after doing something that hurt someone else." },
    { text: "I act on impulse rather than thinking through consequences first." },
    { text: "I find it easy to break rules when I think I won't get caught." },
    { text: "I see relationships mainly in terms of what I can get out of them." },
  ],
  bands: [
    {
      max: 25,
      tone: "success",
      label: "Low Psychopathic Traits",
      description: "Your answers suggest few traits from the callous, impulsive, or manipulative cluster commonly studied under this label.",
    },
    {
      max: 50,
      tone: "primary",
      label: "Some Traits Present",
      description:
        "You reported a moderate level of these traits. Traits like risk-taking or emotional detachment exist on a spectrum and aren't inherently harmful in isolation.",
    },
    {
      max: 75,
      tone: "gold",
      label: "Several Traits Present",
      description:
        "You reported a fairly high level of traits from this cluster, such as reduced guilt or manipulativeness. This screener cannot tell you why — that requires a fuller picture with a professional.",
    },
    {
      max: 100,
      tone: "danger",
      label: "Many Traits Present",
      description:
        "You reported a high level of these traits. This is not a diagnosis or a forensic assessment — psychopathy-related traits are formally assessed only through structured clinical interviews by trained professionals.",
    },
  ],
  resultHeading: "Psychopathy Trait Screening Result",
  disclaimer:
    "This is an original, informal self-report screener inspired by publicly described trait domains (interpersonal manipulation, callous affect, impulsive lifestyle). It is not the PCL-R or any clinical/forensic instrument, has not been validated, and cannot diagnose antisocial personality disorder, psychopathy, or any condition. Only a qualified clinician using structured assessment can evaluate these traits meaningfully.",
};

export function PsychopathyTest() {
  return <LikertScreener config={config} />;
}
