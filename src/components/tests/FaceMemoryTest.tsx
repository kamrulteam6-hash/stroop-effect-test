"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { GameScene } from "@/components/tests/shared/GameScene";
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
  const id = useId();
  return (
    <svg aria-label="Face to remember" role="img" data-game-face="true" viewBox="0 0 100 110" width={size} height={size}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop stopColor={face.skin}/><stop offset="1" stopColor={face.skin}/></linearGradient>
        <radialGradient id={id + 'light'} cx="35%" cy="25%" r="80%"><stop stopColor="#fff" stopOpacity=".3"/><stop offset="1" stopColor="#6b351c" stopOpacity=".15"/></radialGradient>
      </defs>
      <path d="M12 110 Q15 87 40 87 L60 87 Q85 87 88 110" fill="#547d98"/>
      <path d="M40 75 L40 91 Q50 102 60 91 L60 75" fill={face.skin}/>
      <ellipse cx="20" cy="55" rx="6" ry="10" fill={face.skin}/><ellipse cx="80" cy="55" rx="6" ry="10" fill={face.skin}/>
      <path d="M20 39 Q20 15 50 15 Q80 15 80 39 L77 66 Q72 88 50 91 Q28 88 23 66 Z" fill={"url(#" + id + ")"}/>
      <path d="M20 39 Q20 15 50 15 Q80 15 80 39 L77 66 Q72 88 50 91 Q28 88 23 66 Z" fill={"url(#" + id + "light)"}/>
      {face.hairStyle === 0 && <path d="M19 49 Q10 12 43 9 Q82 4 82 44 L74 37 Q58 35 48 23 Q38 38 24 38 Z" fill={face.hair}/>}
      {face.hairStyle === 1 && <path d="M18 52 Q9 32 18 18 Q27 3 50 7 Q73 1 82 24 Q88 35 80 52 L74 32 Q56 43 30 29 L25 51 Z" fill={face.hair}/>}
      {face.hairStyle === 2 && <path d="M18 48 L19 23 Q25 11 33 12 L41 4 L49 10 L62 4 L66 12 Q83 12 83 33 L78 47 L71 26 Q45 35 26 29 L24 48 Z" fill={face.hair}/>}
      <path d="M29 47 Q36 43 43 47 M57 47 Q64 43 71 47" stroke={face.hair} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="36" cy="55" rx="7" ry="5" fill="#fff8f0"/><ellipse cx="64" cy="55" rx="7" ry="5" fill="#fff8f0"/>
      <circle cx="36" cy="55" r="4" fill={face.eyes}/><circle cx="64" cy="55" r="4" fill={face.eyes}/>
      <circle cx="36" cy="55" r="1.8" fill="#21212b"/><circle cx="64" cy="55" r="1.8" fill="#21212b"/>
      <circle cx="35" cy="54" r="1" fill="white"/><circle cx="63" cy="54" r="1" fill="white"/>
      <path d="M49 55 L46 66 Q50 69 54 66" stroke="#7b473b" strokeOpacity=".35" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M40 75 Q50 81 60 75" stroke="#854d48" strokeWidth="2" fill="none" strokeLinecap="round"/>
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
      <GameScene theme="faces" phase={phase}>
        <ResultScreen
          slug="face-memory-test"
          direction="higher"
          value={accuracy}
          unitLabel="% accuracy"
          headline="Face Memory Result"
          extraStats={[{ label: "Correct", value: `${correct}/${testSet.length}` }]}
          onRetry={start}
        />
      </GameScene>
    );
  }

  if (phase === "idle") {
    return (
      <GameScene theme="faces" phase={phase}>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Study {STUDY_COUNT} faces one at a time. Afterward you&apos;ll see a mix of studied faces and new ones —
            decide whether you saw each one during the study phase.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </GameScene>
    );
  }

  if (phase === "studying") {
    return (
      <GameScene theme="faces" phase={phase}>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Studying {studyIndex + 1} / {studySet.length}
          </p>
          <FaceAvatar face={studySet[studyIndex]} size={140} />
          <Button size="lg" onClick={nextStudy}>
            Next
          </Button>
        </div>
      </GameScene>
    );
  }

  return (
    <GameScene theme="faces" phase={phase}>
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
    </GameScene>
  );
}
