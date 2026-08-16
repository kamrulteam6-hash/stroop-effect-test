"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame, ResultHeading } from "@/components/tests/shared/TestFrame";
import { Callout } from "@/components/seo/Callout";

type Phase = "idle" | "study" | "quiz" | "result";

const ITEM_POOL = ["🔑 keys", "📖 book", "☂️ umbrella", "🧣 scarf", "🎧 headphones", "🧴 lotion", "📷 camera", "🕶️ sunglasses"];
const LOCATIONS = ["kitchen", "bedroom", "office", "garage"];
const DAYS = ["Monday", "Tuesday", "Wednesday"];
const STUDY_S = 15;

interface Event {
  item: string;
  location: string;
  day: string;
}

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildEvents(): Event[] {
  const items = shuffle(ITEM_POOL).slice(0, 6);
  return items.map((item) => ({
    item,
    location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
    day: DAYS[Math.floor(Math.random() * DAYS.length)],
  }));
}

function buildQuestions(events: Event[]): Question[] {
  const qs: Question[] = [];

  // What-Where: given day, ask where a specific item was
  const e1 = events[0];
  const otherLocations = shuffle(LOCATIONS.filter((l) => l !== e1.location)).slice(0, 3);
  const opts1 = shuffle([e1.location, ...otherLocations]);
  qs.push({ text: `On ${e1.day}, where was the "${e1.item}"?`, options: opts1, correctIndex: opts1.indexOf(e1.location) });

  // What-When
  const e2 = events[1];
  const otherDays = shuffle(DAYS.filter((d) => d !== e2.day)).slice(0, 2);
  const opts2 = shuffle([e2.day, ...otherDays, DAYS[Math.floor(Math.random() * DAYS.length)]].filter((v, i, a) => a.indexOf(v) === i).slice(0, 3));
  const finalOpts2 = opts2.includes(e2.day) ? opts2 : [...opts2.slice(0, 2), e2.day];
  qs.push({ text: `Which day was the "${e2.item}" in the ${e2.location}?`, options: finalOpts2, correctIndex: finalOpts2.indexOf(e2.day) });

  // Where-When -> what item
  const e3 = events[2];
  const distractorItems = shuffle(events.filter((e) => e !== e3).map((e) => e.item)).slice(0, 3);
  const opts3 = shuffle([e3.item, ...distractorItems]);
  qs.push({ text: `What item was in the ${e3.location} on ${e3.day}?`, options: opts3, correctIndex: opts3.indexOf(e3.item) });

  // Recognition: which item was NOT part of any event
  const usedItems = events.map((e) => e.item);
  const unused = ITEM_POOL.find((i) => !usedItems.includes(i)) ?? ITEM_POOL[0];
  const opts4 = shuffle([unused, ...shuffle(usedItems).slice(0, 3)]);
  qs.push({ text: "Which item was NOT part of any event you studied?", options: opts4, correctIndex: opts4.indexOf(unused) });

  return qs;
}

export function EpisodicMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [events, setEvents] = useState<Event[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(STUDY_S);

  useEffect(() => {
    if (phase !== "study") return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setPhase("quiz");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const start = () => {
    const newEvents = buildEvents();
    setEvents(newEvents);
    setQuestions(buildQuestions(newEvents));
    setQIndex(0);
    setAnswers([]);
    setPicked(null);
    setTimeLeft(STUDY_S);
    setPhase("study");
  };

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
  };

  const next = () => {
    if (picked === null) return;
    const nextAnswers = [...answers, picked];
    setPicked(null);
    if (qIndex + 1 >= questions.length) {
      setAnswers(nextAnswers);
      setPhase("result");
    } else {
      setAnswers(nextAnswers);
      setQIndex(qIndex + 1);
    }
  };

  if (phase === "result") {
    const correct = answers.filter((a, i) => a === questions[i].correctIndex).length;
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <ResultHeading>Episodic Memory Result</ResultHeading>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-black tabular-nums text-primary sm:text-7xl">
              {correct}/{questions.length}
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">Correct ({pct}%)</span>
          </div>
          <Callout icon="🧠" title="What, where, and when" tone="primary">
            This is an original episodic-memory task testing whether you can bind an item to both its location and
            the day it occurred — the combination of &quot;what, where, and when&quot; that defines episodic memory
            in psychology research. It is not a validated clinical instrument.
          </Callout>
          <Button onClick={start}>Try Again</Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="text-4xl">📅</span>
          <p className="max-w-sm text-sm text-muted">
            You&apos;ll study {"6"} events, each pairing an item with a location and a day. Afterward you&apos;ll be
            asked to recall the full combination — not just the item, but where and when.
          </p>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  if (phase === "study") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-medium text-muted-2">Study — {timeLeft}s</p>
          <div className="flex flex-col gap-2">
            {events.map((e, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-surface-2 px-4 py-2 text-sm">
                <span className="text-lg">{e.item}</span>
                <span className="text-muted-2">in the</span>
                <span className="font-semibold text-foreground">{e.location}</span>
                <span className="text-muted-2">on</span>
                <span className="font-semibold text-foreground">{e.day}</span>
              </div>
            ))}
          </div>
        </div>
      </TestFrame>
    );
  }

  const q = questions[qIndex];

  return (
    <TestFrame>
      <div className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
        <p className="text-xs font-medium text-muted-2">
          Question {qIndex + 1} / {questions.length}
        </p>
        <p className="text-lg font-semibold text-foreground">{q.text}</p>
        <div className="grid w-full grid-cols-2 gap-2">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isCorrectOpt = i === q.correctIndex;
            const showState = picked !== null;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                  showState && isCorrectOpt
                    ? "border-success bg-success/10 text-success"
                    : showState && isPicked && !isCorrectOpt
                      ? "border-danger bg-danger/10 text-danger"
                      : "border-border bg-surface-2 text-foreground hover:border-primary"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <Button onClick={next} disabled={picked === null}>
          {qIndex + 1 >= questions.length ? "See Result" : "Next Question"}
        </Button>
      </div>
    </TestFrame>
  );
}
