"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { TraitBars, TraitScore } from "@/components/tests/shared/TraitBars";

type Skill = "SA" | "SR" | "SO" | "RM";
type Phase = "idle" | "quiz" | "result";

interface Question {
  skill: Skill;
  text: string;
  reverse: boolean;
}

const QUESTIONS: Question[] = [
  { skill: "SA", text: "I can usually identify exactly what emotion I'm feeling in the moment.", reverse: false },
  { skill: "SA", text: "I understand what tends to trigger my strongest emotional reactions.", reverse: false },
  { skill: "SA", text: "I often don't notice I'm upset until someone else points it out.", reverse: true },
  { skill: "SA", text: "I can tell how my current mood is affecting my behavior.", reverse: false },
  { skill: "SA", text: "I find it hard to describe my feelings, even to myself.", reverse: true },

  { skill: "SR", text: "I can stay calm and think clearly even when I'm frustrated.", reverse: false },
  { skill: "SR", text: "I rarely say things I regret when I'm angry.", reverse: false },
  { skill: "SR", text: "Strong emotions often take over before I can manage them.", reverse: true },
  { skill: "SR", text: "I can calm myself down without needing someone else's help.", reverse: false },
  { skill: "SR", text: "I tend to act impulsively when I'm upset.", reverse: true },

  { skill: "SO", text: "I can usually tell how someone is feeling from their tone or body language.", reverse: false },
  { skill: "SO", text: "I notice when someone is uncomfortable, even if they don't say anything.", reverse: false },
  { skill: "SO", text: "I find it hard to read other people's emotions.", reverse: true },
  { skill: "SO", text: "I pick up on tension in a room quickly.", reverse: false },
  { skill: "SO", text: "I stay focused on my own perspective and often miss how others are feeling.", reverse: true },

  { skill: "RM", text: "I handle disagreements in a way that keeps the relationship intact.", reverse: false },
  { skill: "RM", text: "I can motivate and encourage the people around me effectively.", reverse: false },
  { skill: "RM", text: "I find it hard to give feedback without causing conflict.", reverse: true },
  { skill: "RM", text: "People often come to me when they need support.", reverse: false },
  { skill: "RM", text: "I struggle to resolve conflicts once they start.", reverse: true },
];

const SKILL_INFO: Record<Skill, { label: string; low: string; high: string }> = {
  SA: {
    label: "Self-Awareness",
    low: "You may find it harder to notice or name your own emotions in the moment.",
    high: "You're generally quick to recognize and understand your own emotions as they happen.",
  },
  SR: {
    label: "Self-Regulation",
    low: "Strong emotions may sometimes drive your reactions before you can manage them.",
    high: "You tend to stay composed and think clearly, even under emotional pressure.",
  },
  SO: {
    label: "Social Awareness",
    low: "You may sometimes miss subtle emotional cues from the people around you.",
    high: "You're generally good at reading how others are feeling, even without being told.",
  },
  RM: {
    label: "Relationship Management",
    low: "Conflict and giving feedback may feel harder to navigate smoothly.",
    high: "You tend to build and maintain relationships well, including through disagreement.",
  },
};

function skillDescription(skill: Skill, score: number): string {
  const info = SKILL_INFO[skill];
  return score >= 50 ? info.high : info.low;
}

export function EmotionalIntelligenceTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const start = () => {
    setAnswers([]);
    setIndex(0);
    setPhase("quiz");
  };

  const answer = (value: number) => {
    const next = [...answers, value];
    if (index + 1 >= QUESTIONS.length) {
      setAnswers(next);
      setPhase("result");
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  const computeSkills = (finalAnswers: number[]): TraitScore[] => {
    const skills: Skill[] = ["SA", "SR", "SO", "RM"];
    return skills.map((skill) => {
      const scores = QUESTIONS.map((q, i) => ({ q, v: finalAnswers[i] })).filter(({ q }) => q.skill === skill);
      const sum = scores.reduce((acc, { q, v }) => acc + (q.reverse ? 6 - v : v), 0);
      const avg = sum / scores.length;
      const pct = ((avg - 1) / 4) * 100;
      return { key: skill, label: SKILL_INFO[skill].label, value: pct, description: skillDescription(skill, pct) };
    });
  };

  if (phase === "result") {
    const skills = computeSkills(answers);
    const overall = Math.round(skills.reduce((a, s) => a + s.value, 0) / skills.length);
    return (
      <TestFrame>
        <ResultScreen
          slug="emotional-intelligence-test"
          direction="higher"
          value={overall}
          unitLabel="EQ Score"
          extraStats={skills.map((s) => ({ label: s.label, value: `${Math.round(s.value)}%` }))}
          shareLabel={`I scored ${overall}/100 on the Emotional Intelligence Test!`}
          onRetry={start}
        >
          <TraitBars traits={skills} />
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Answer 20 short statements about how you typically handle emotions, both your own and other people&apos;s.
            Answer honestly for the most useful result.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  const q = QUESTIONS[index];
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8">
        <div className="w-full">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-2">
            <span>
              Question {index + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${(index / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        <p className="min-h-[3rem] text-center text-lg font-semibold text-foreground sm:text-xl">{q.text}</p>

        <div className="grid w-full grid-cols-5 gap-2">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => answer(i + 1)}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2 px-1 py-3 text-center text-[10px] font-medium text-muted transition-colors hover:border-primary hover:text-foreground sm:text-xs"
            >
              <span className="text-lg font-bold text-foreground">{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </TestFrame>
  );
}
