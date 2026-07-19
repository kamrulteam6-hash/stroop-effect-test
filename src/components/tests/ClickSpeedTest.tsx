"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ProgressRing } from "@/components/tests/shared/ProgressRing";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

type Duration = 5 | 10 | 30 | 60;
type InputMode = "click" | "space";
type Phase = "idle" | "running" | "result";

export function ClickSpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [duration, setDuration] = useState<Duration>(5);
  const [inputMode, setInputMode] = useState<InputMode>("click");
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(duration);
  const intervalRef = useRef<number | undefined>(undefined);
  const clicksRef = useRef(0);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  const start = () => {
    setPhase("running");
    setClicks(0);
    clicksRef.current = 0;
    setTimeLeft(duration);
    const startedAt = performance.now();
    intervalRef.current = window.setInterval(() => {
      const remaining = duration - (performance.now() - startedAt) / 1000;
      if (remaining <= 0) {
        window.clearInterval(intervalRef.current);
        setTimeLeft(0);
        setPhase("result");
      } else {
        setTimeLeft(Math.ceil(remaining));
      }
    }, 100);
  };

  const register = () => {
    clicksRef.current += 1;
    setClicks(clicksRef.current);
  };

  const handleClick = () => {
    if (inputMode !== "click") return;
    register();
  };

  useEffect(() => {
    if (phase !== "running" || inputMode !== "space") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === " ") {
        e.preventDefault();
        register();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, inputMode]);

  const cps = (clicks / duration).toFixed(1);
  const progress = 1 - timeLeft / duration;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="click-speed-test"
          direction="higher"
          value={Number(cps)}
          formatValue={(v) => v.toFixed(1)}
          unitLabel="CPS"
          extraStats={[
            { label: "Total Clicks", value: `${clicks}` },
            { label: "Duration", value: `${duration}s` },
            { label: "Input", value: inputMode === "space" ? "Spacebar" : "Click" },
          ]}
          shareLabel={`I hit ${cps} clicks per second on the Click Speed Test!`}
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
            {inputMode === "space" ? "Mash the spacebar" : "Click"} as fast as you can for {duration} seconds.
          </p>
          <OptionsBar>
            <Segmented
              label="Duration"
              value={duration}
              onChange={setDuration}
              options={[
                { value: 5, label: "5s" },
                { value: 10, label: "10s" },
                { value: 30, label: "30s" },
                { value: 60, label: "60s" },
              ]}
            />
            <Segmented
              label="Input"
              value={inputMode}
              onChange={setInputMode}
              options={[
                { value: "click", label: "Click" },
                { value: "space", label: "Spacebar" },
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
    <TestFrame className="p-0">
      <button
        onClick={handleClick}
        className="flex h-full min-h-[420px] w-full flex-col items-center justify-center gap-4 p-6 text-center transition-colors active:bg-primary/5"
      >
        <ProgressRing progress={progress} label={`${timeLeft}s`} size={72} />
        <p className="text-6xl font-black text-primary">{clicks}</p>
        <p className="text-sm font-semibold text-muted-2">
          {inputMode === "space" ? "Keep mashing spacebar!" : "Keep clicking!"}
        </p>
      </button>
    </TestFrame>
  );
}
