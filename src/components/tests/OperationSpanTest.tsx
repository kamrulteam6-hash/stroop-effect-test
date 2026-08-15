"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Phase = "idle" | "equation" | "letter" | "recall" | "result";

const LETTERS = ["F", "H", "J", "K", "L", "N", "P", "Q", "R", "S", "T", "Y"];
const TOTAL_SETS = 4;
const SET_LENGTH = 3;

interface Equation {
  text: string;
  actual: number;
  shown: number;
  isCorrect: boolean;
}

function generateEquation(): Equation {
  const a = 1 + Math.floor(Math.random() * 9);
  const b = 1 + Math.floor(Math.random() * 9);
  const c = 1 + Math.floor(Math.random() * 5);
  const actual = a * b + c;
  const isCorrect = Math.random() < 0.5;
  const shown = isCorrect ? actual : actual + (Math.random() < 0.5 ? 1 : -1) * (1 + Math.floor(Math.random() * 3));
  return { text: `(${a} × ${b}) + ${c} = ${shown}`, actual, shown, isCorrect };
}

function randomLetter(): string {
  return LETTERS[Math.floor(Math.random() * LETTERS.length)];
}

export function OperationSpanTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [setIndex, setSetIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [equation, setEquation] = useState<Equation>(() => generateEquation());
  const [letterSequence, setLetterSequence] = useState<string[]>([]);
  const [recallInput, setRecallInput] = useState<string[]>([]);
  const [mathCorrect, setMathCorrect] = useState(0);
  const [mathTotal, setMathTotal] = useState(0);
  const [correctSets, setCorrectSets] = useState(0);
  const [totalLettersCorrect, setTotalLettersCorrect] = useState(0);
  const [totalLetters, setTotalLetters] = useState(0);

  const start = () => {
    setSetIndex(0);
    setItemIndex(0);
    setLetterSequence([]);
    setMathCorrect(0);
    setMathTotal(0);
    setCorrectSets(0);
    setTotalLettersCorrect(0);
    setTotalLetters(0);
    setEquation(generateEquation());
    setPhase("equation");
  };

  const answerEquation = (saidCorrect: boolean) => {
    setMathTotal((t) => t + 1);
    if (saidCorrect === equation.isCorrect) setMathCorrect((c) => c + 1);
    setPhase("letter");
    window.setTimeout(() => {
      const letter = randomLetter();
      setLetterSequence((seq) => [...seq, letter]);
      const nextItem = itemIndex + 1;
      if (nextItem >= SET_LENGTH) {
        setRecallInput([]);
        setPhase("recall");
      } else {
        setItemIndex(nextItem);
        setEquation(generateEquation());
        setPhase("equation");
      }
    }, 900);
  };

  const submitRecall = (letter: string) => {
    setRecallInput((r) => [...r, letter]);
  };

  const confirmRecall = () => {
    let setCorrect = true;
    letterSequence.forEach((letter, i) => {
      setTotalLetters((t) => t + 1);
      if (recallInput[i] === letter) {
        setTotalLettersCorrect((c) => c + 1);
      } else {
        setCorrect = false;
      }
    });
    if (setCorrect && recallInput.length === letterSequence.length) setCorrectSets((c) => c + 1);

    const nextSet = setIndex + 1;
    if (nextSet >= TOTAL_SETS) {
      setPhase("result");
      return;
    }
    setSetIndex(nextSet);
    setItemIndex(0);
    setLetterSequence([]);
    setEquation(generateEquation());
    setPhase("equation");
  };

  const ospanScore = totalLetters ? Math.round((totalLettersCorrect / totalLetters) * 100) : 0;
  const mathAccuracy = mathTotal ? Math.round((mathCorrect / mathTotal) * 100) : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="operation-span-test"
          direction="higher"
          value={ospanScore}
          unitLabel="% letters recalled"
          headline="Operation Span Result"
          extraStats={[
            { label: "Perfect Sets", value: `${correctSets}/${TOTAL_SETS}` },
            { label: "Math Accuracy", value: `${mathAccuracy}%` },
          ]}
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
            For each round, verify a math equation, then remember the letter shown right after it. After {SET_LENGTH}{" "}
            equation-letter pairs, recall all the letters in order. This is a complex span task combining
            processing and memory.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "equation") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">
            Set {setIndex + 1} / {TOTAL_SETS} &middot; Item {itemIndex + 1} / {SET_LENGTH}
          </p>
          <p className="text-3xl font-bold text-foreground">{equation.text}</p>
          <div className="flex gap-4">
            <Button variant="secondary" onClick={() => answerEquation(true)}>
              True
            </Button>
            <Button variant="secondary" onClick={() => answerEquation(false)}>
              False
            </Button>
          </div>
        </div>
      </TestFrame>
    );
  }

  if (phase === "letter") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs font-medium text-muted-2">Remember this letter</p>
          <p className="text-7xl font-black text-primary">{letterSequence[letterSequence.length - 1]}</p>
        </div>
      </TestFrame>
    );
  }

  // recall
  return (
    <TestFrame>
      <div className="flex flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Recall the {letterSequence.length} letters in order ({recallInput.length}/{letterSequence.length})
        </p>
        <div className="flex gap-2">
          {recallInput.map((l, i) => (
            <span key={i} className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
              {l}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-2">
          {LETTERS.map((letter) => (
            <button
              key={letter}
              disabled={recallInput.length >= letterSequence.length}
              onClick={() => submitRecall(letter)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-sm font-bold text-foreground transition-colors hover:border-primary/40 disabled:opacity-40"
            >
              {letter}
            </button>
          ))}
        </div>
        {recallInput.length >= letterSequence.length && (
          <Button onClick={confirmRecall}>Confirm</Button>
        )}
      </div>
    </TestFrame>
  );
}
