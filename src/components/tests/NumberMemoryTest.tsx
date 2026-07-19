"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type StartLength = 3 | 5 | 7;
type Mode = "forward" | "reverse";
type Phase = "idle" | "memorize" | "recall" | "result";

function randomDigits(length: number) {
  let s = "";
  for (let i = 0; i < length; i++) s += Math.floor(Math.random() * 10);
  return s;
}

export function NumberMemoryTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [startLength, setStartLength] = useState<StartLength>(3);
  const [mode, setMode] = useState<Mode>("forward");
  const [digitCount, setDigitCount] = useState<number>(startLength);
  const [sequence, setSequence] = useState("");
  const [input, setInput] = useState("");
  const [best, setBest] = useState(0);

  const showLevel = (length: number) => {
    const digits = randomDigits(length);
    setSequence(digits);
    setDigitCount(length);
    setInput("");
    setPhase("memorize");
  };

  useEffect(() => {
    if (phase !== "memorize") return;
    const duration = 1000 + sequence.length * 800;
    const t = window.setTimeout(() => setPhase("recall"), duration);
    return () => window.clearTimeout(t);
  }, [phase, sequence]);

  const start = () => {
    setBest(0);
    showLevel(startLength);
  };

  const expected = mode === "reverse" ? sequence.split("").reverse().join("") : sequence;

  const submit = () => {
    if (input === expected) {
      setBest(digitCount);
      showLevel(digitCount + 1);
    } else {
      setPhase("result");
    }
  };

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="number-memory-test"
          direction="higher"
          value={best}
          unitLabel="digits"
          extraStats={[
            { label: "Mode", value: mode === "reverse" ? "Reverse" : "Forward" },
            { label: "Missed", value: `${digitCount} digits` },
          ]}
          shareLabel={`I remembered ${best} digits in a row on the Number Memory Test!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        >
          <p className="text-sm text-muted">
            The number was <span className="font-mono font-bold text-foreground">{sequence}</span>
            {mode === "reverse" && (
              <>
                {" "}
                (reversed: <span className="font-mono font-bold text-foreground">{expected}</span>)
              </>
            )}
            , you typed <span className="font-mono font-bold text-danger">{input || "—"}</span>
          </p>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            {mode === "reverse"
              ? "Memorize the digits, then type them back in reverse order."
              : "Memorize the digits, then type them back. Each level adds one more digit."}
          </p>
          <OptionsBar>
            <Segmented
              label="Start Length"
              value={startLength}
              onChange={setStartLength}
              options={[
                { value: 3, label: "3" },
                { value: 5, label: "5" },
                { value: 7, label: "7" },
              ]}
            />
            <Segmented
              label="Mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "forward", label: "Forward" },
                { value: "reverse", label: "Reverse" },
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
      {phase === "memorize" && (
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium text-muted-2">{digitCount} digits — memorize this</p>
          <p className="animate-pop-in text-5xl font-black tracking-widest text-foreground sm:text-6xl">
            {sequence}
          </p>
        </div>
      )}

      {phase === "recall" && (
        <div className="flex w-full max-w-xs flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium text-muted-2">
            {mode === "reverse" ? "Type it in reverse order" : "Type what you saw"}
          </p>
          <input
            autoFocus
            inputMode="numeric"
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/\D/g, ""))}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-center text-2xl font-bold tracking-widest text-foreground outline-none focus:border-primary"
          />
          <Button onClick={submit} disabled={!input}>
            Submit
          </Button>
        </div>
      )}
    </TestFrame>
  );
}
