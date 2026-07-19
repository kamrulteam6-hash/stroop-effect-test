"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

const WORD_POOL = [
  "APPLE", "RIVER", "CANDLE", "TIGER", "MARBLE", "SILVER", "PENCIL", "GARDEN", "PLANET", "WINDOW",
  "BRIDGE", "FOREST", "PURPLE", "ROCKET", "CASTLE", "DESERT", "HAMMER", "ISLAND", "JACKET", "KETTLE",
  "LANTERN", "MEADOW", "NEEDLE", "ORANGE", "PIRATE", "QUARTZ", "RIBBON", "SADDLE", "TURTLE", "UMBRELLA",
  "VELVET", "WALNUT", "YELLOW", "ZEBRA", "ANCHOR", "BUTTON", "CIRCUS", "DOLPHIN", "ENGINE", "FEATHER",
  "GLOBE", "HARBOR", "IGLOO", "JUNGLE", "KIOSK", "LEMON", "MIRROR", "NOTEBOOK", "OASIS", "PUZZLE",
  "QUILT", "RAINBOW", "SATCHEL", "TROPHY", "UNICORN", "VOYAGE", "WHISTLE", "XYLOPHONE", "YACHT", "ZEPHYR",
  "BASKET", "COMPASS", "DRAGON", "ECLIPSE", "FALCON", "GRANITE", "HORIZON", "IVORY", "JAGUAR", "KETTLEBELL",
];

type Lives = 3 | 5;
type Phase = "idle" | "running" | "result";

export function VerbalMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [startLives, setStartLives] = useState<Lives>(3);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [current, setCurrent] = useState("");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState<number>(startLives);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const nextWord = useCallback((seenSet: Set<string>) => {
    const showRepeat = seenSet.size > 3 && Math.random() < 0.5;
    if (showRepeat) {
      const arr = Array.from(seenSet);
      setCurrent(arr[Math.floor(Math.random() * arr.length)]);
    } else {
      const unseen = WORD_POOL.filter((w) => !seenSet.has(w));
      const word = unseen.length ? unseen[Math.floor(Math.random() * unseen.length)] : WORD_POOL[Math.floor(Math.random() * WORD_POOL.length)];
      setCurrent(word);
    }
  }, []);

  const start = () => {
    const fresh = new Set<string>();
    setSeen(fresh);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(startLives);
    setPhase("running");
    nextWord(fresh);
  };

  const answer = (isNew: boolean) => {
    const wasSeen = seen.has(current);
    const correct = isNew ? !wasSeen : wasSeen;
    setFeedback(correct ? "correct" : "wrong");

    const updatedSeen = new Set(seen);
    updatedSeen.add(current);
    setSeen(updatedSeen);

    if (correct) {
      setScore((s) => s + 1);
      setStreak((s) => {
        const next = s + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
      window.setTimeout(() => {
        setFeedback(null);
        nextWord(updatedSeen);
      }, 120);
    } else {
      setStreak(0);
      const remainingLives = lives - 1;
      setLives(remainingLives);
      if (remainingLives <= 0) {
        window.setTimeout(() => setPhase("result"), 400);
      } else {
        window.setTimeout(() => {
          setFeedback(null);
          nextWord(updatedSeen);
        }, 400);
      }
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="verbal-memory-test"
          direction="higher"
          value={score}
          unitLabel="words correct"
          extraStats={[
            { label: "Words Seen", value: `${seen.size}` },
            { label: "Best Streak", value: `${bestStreak}` },
            { label: "Lives", value: `${startLives}` },
          ]}
          shareLabel={`I got ${score} words correct on the Verbal Memory Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        />
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            A word appears. Click NEW if you haven&apos;t seen it yet in this session, or SEEN if you have.
          </p>
          <OptionsBar>
            <Segmented
              label="Lives"
              value={startLives}
              onChange={setStartLives}
              options={[
                { value: 3, label: "3" },
                { value: 5, label: "5" },
              ]}
            />
          </OptionsBar>
          <Button size="lg" onClick={start}>
            Start Test
          </Button>
        </div>
      </TestFrame>
    );
  }

  return (
    <TestFrame>
      <div className="flex w-full flex-col items-center gap-8">
        <div className="flex w-full items-center justify-between text-xs font-medium text-muted-2">
          <span>
            Score: {score} {streak >= 5 && <span className="text-gold">🔥 {streak} streak</span>}
          </span>
          <span>
            Lives: {"♥".repeat(lives)}
            {"♡".repeat(startLives - lives)}
          </span>
        </div>
        <p
          className={`select-none text-4xl font-black tracking-tight text-foreground sm:text-5xl ${
            feedback === "wrong" ? "text-danger" : feedback === "correct" ? "text-success" : ""
          }`}
        >
          {current}
        </p>
        <div className="flex w-full max-w-xs gap-3">
          <Button variant="secondary" className="flex-1" onClick={() => answer(true)}>
            NEW
          </Button>
          <Button className="flex-1" onClick={() => answer(false)}>
            SEEN
          </Button>
        </div>
      </div>
    </TestFrame>
  );
}
