"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "studying" | "testing" | "result";

const STUDY_COUNT = 6;
const DISTRACTOR_COUNT = 6;

const SKIN_TONES = ["#f4c9a1", "#e8a878", "#c68863", "#9c6b4f", "#7a4f38"];
const HAIR_COLORS = ["#2b2118", "#5a3a22", "#8a5a2b", "#c9a15a", "#1e1e1e"];
const EYE_COLORS = ["#4a3728", "#2f6a4f", "#3a5a8c", "#6b6b6b"];

interface Face {
  id: number;
  skin: string;
  hair: string;
  eyes: string;
  hairStyle: number;
}

function randomFace(id: number): Face {
  return {
    id,
    skin: SKIN_TONES[Math.floor(Math.random() * SKIN_TONES.length)],
    hair: HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)],
    eyes: EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)],
    hairStyle: Math.floor(Math.random() * 3),
  };
}

function FaceAvatar({ face, size = 96 }: { face: Face; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <circle cx={50} cy={55} r={32} fill={face.skin} />
      {face.hairStyle === 0 && <path d="M18,45 a32,28 0 0,1 64,0 L82,30 A32,30 0 0,0 18,30 Z" fill={face.hair} />}
      {face.hairStyle === 1 && <circle cx={50} cy={30} r={26} fill={face.hair} />}
      {face.hairStyle === 2 && (
        <path d="M20,40 Q50,5 80,40 L80,20 Q50,-5 20,20 Z" fill={face.hair} />
      )}
      <circle cx={38} cy={52} r={5} fill={face.eyes} />
      <circle cx={62} cy={52} r={5} fill={face.eyes} />
      <path d="M40,70 Q50,78 60,70" stroke="#7a4a3a" strokeWidth={3} fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function FaceMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [studySet, setStudySet] = useState<Face[]>([]);
  const [studyIndex, setStudyIndex] = useState(0);
  const [testSet, setTestSet] = useState<Face[]>([]);
  const [testIndex, setTestIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const start = () => {
    const faces = Array.from({ length: STUDY_COUNT }, (_, i) => randomFace(i));
    const distractors = Array.from({ length: DISTRACTOR_COUNT }, (_, i) => randomFace(100 + i));
    const combined = [...faces.map((f) => ({ ...f, isStudied: true })), ...distractors.map((f) => ({ ...f, isStudied: false }))];
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }
    setStudySet(faces);
    setTestSet(combined as Face[]);
    setStudyIndex(0);
    setTestIndex(0);
    setCorrect(0);
    setFeedback(null);
    setPhase("studying");
  };

  const nextStudy = () => {
    const next = studyIndex + 1;
    if (next >= studySet.length) {
      setPhase("testing");
      return;
    }
    setStudyIndex(next);
  };

  const answer = (sawIt: boolean) => {
    if (feedback) return;
    const face = testSet[testIndex] as Face & { isStudied?: boolean };
    const wasStudied = !!face.isStudied;
    const isCorrect = sawIt === wasStudied;
    if (isCorrect) setCorrect((c) => c + 1);
    setFeedback(isCorrect ? "correct" : "wrong");

    window.setTimeout(() => {
      const next = testIndex + 1;
      setFeedback(null);
      if (next >= testSet.length) {
        setPhase("result");
        return;
      }
      setTestIndex(next);
    }, 400);
  };

  const accuracy = Math.round((correct / testSet.length) * 100);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="face-memory-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Face Memory Result"
          extraStats={[{ label: "Correct", value: `${correct}/${testSet.length}` }]}
          onRetry={start}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Study {STUDY_COUNT} faces one at a time. Afterward you&apos;ll see a mix of studied faces and new ones —
            decide whether you saw each one during the study phase.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "studying") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Studying {studyIndex + 1} / {studySet.length}
          </p>
          <FaceAvatar face={studySet[studyIndex]} size={140} />
          <Button size="lg" onClick={nextStudy}>
            Next
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Round {testIndex + 1} / {testSet.length}
        </p>
        <FaceAvatar face={testSet[testIndex]} size={140} />
        {feedback && (
          <p className={`text-sm font-bold ${feedback === "correct" ? "text-success" : "text-danger"}`}>
            {feedback === "correct" ? "Correct!" : "Wrong"}
          </p>
        )}
        <div className="flex gap-4">
          <Button variant="secondary" disabled={!!feedback} onClick={() => answer(true)}>
            Seen Before
          </Button>
          <Button variant="secondary" disabled={!!feedback} onClick={() => answer(false)}>
            New Face
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
