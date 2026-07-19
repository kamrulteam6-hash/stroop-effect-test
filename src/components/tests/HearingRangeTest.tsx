"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { Callout } from "@/components/seo/Callout";

const STEPS = {
  quick: {
    high: [8000, 10000, 12000, 14000, 15000, 16000, 17000, 18000, 19000, 20000],
    low: [200, 120, 90, 60, 40, 30, 20],
  },
  precise: {
    high: [8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000],
    low: [200, 150, 120, 100, 90, 70, 60, 50, 40, 30, 25, 20],
  },
};

type Granularity = "quick" | "precise";
type Ear = "both" | "left" | "right";
type Phase = "idle" | "high" | "low" | "result";

export function HearingRangeTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [granularity, setGranularity] = useState<Granularity>("quick");
  const [ear, setEar] = useState<Ear>("both");
  const [stepIndex, setStepIndex] = useState(0);
  const [highestHeard, setHighestHeard] = useState(0);
  const [lowestHeard, setLowestHeard] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const pannerRef = useRef<StereoPannerNode | null>(null);

  const steps = STEPS[granularity];

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    return audioCtxRef.current;
  };

  const stopTone = () => {
    oscRef.current?.stop();
    oscRef.current?.disconnect();
    gainRef.current?.disconnect();
    pannerRef.current?.disconnect();
    oscRef.current = null;
    gainRef.current = null;
    pannerRef.current = null;
    setPlaying(false);
  };

  const playTone = (freq: number) => {
    stopTone();
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createStereoPanner();
    panner.pan.value = ear === "left" ? -1 : ear === "right" ? 1 : 0;
    osc.type = "sine";
    osc.frequency.value = freq;
    gain.gain.value = 0.15;
    osc.connect(gain).connect(panner).connect(ctx.destination);
    osc.start();
    oscRef.current = osc;
    gainRef.current = gain;
    pannerRef.current = panner;
    setPlaying(true);
  };

  const start = () => {
    setStepIndex(0);
    setHighestHeard(0);
    setLowestHeard(0);
    setPhase("high");
    playTone(steps.high[0]);
  };

  const respond = (heard: boolean) => {
    const activeSteps = phase === "high" ? steps.high : steps.low;
    const freq = activeSteps[stepIndex];
    if (heard) {
      if (phase === "high") setHighestHeard(freq);
      else setLowestHeard(freq);
    }
    const next = stepIndex + 1;
    if (next >= activeSteps.length) {
      stopTone();
      if (phase === "high") {
        setStepIndex(0);
        setPhase("low");
        playTone(steps.low[0]);
      } else {
        setPhase("result");
      }
    } else {
      setStepIndex(next);
      playTone(activeSteps[next]);
    }
  };

  const activeSteps = phase === "high" ? steps.high : steps.low;
  const currentFreq = phase === "high" || phase === "low" ? activeSteps[stepIndex] : 0;
  const range = highestHeard && lowestHeard ? highestHeard - lowestHeard : 0;

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="hearing-range-test"
          direction="higher"
          value={range}
          unitLabel="Hz range"
          extraStats={[
            { label: "Lowest Heard", value: `${lowestHeard || "<" + steps.low[steps.low.length - 1]} Hz` },
            { label: "Highest Heard", value: `${highestHeard || "<" + steps.high[0]} Hz` },
            { label: "Ear Tested", value: ear === "both" ? "Both" : ear === "left" ? "Left" : "Right" },
          ]}
          shareLabel={`My hearing range is roughly ${lowestHeard || "<20"}–${highestHeard || "20000+"} Hz!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        >
          <Callout icon="ℹ️" title="Note">
            This is a casual screening, not a medical hearing test. Results depend heavily on your speaker or
            headphone quality.
          </Callout>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Headphones recommended. We&apos;ll play a series of tones from very high to very low — tell us which
            ones you can hear.
          </p>
          <OptionsBar>
            <Segmented
              label="Sweep"
              value={granularity}
              onChange={setGranularity}
              options={[
                { value: "quick", label: "Quick" },
                { value: "precise", label: "Precise" },
              ]}
            />
            <Segmented
              label="Ear"
              value={ear}
              onChange={setEar}
              options={[
                { value: "both", label: "Both" },
                { value: "left", label: "Left" },
                { value: "right", label: "Right" },
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
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-xs font-medium text-muted-2">
          {phase === "high" ? "Testing high frequencies" : "Testing low frequencies"} — step {stepIndex + 1} /{" "}
          {activeSteps.length}
        </p>
        <p className="text-4xl font-black text-foreground">{currentFreq.toLocaleString()} Hz</p>
        <p className="text-xs text-muted-2">
          {playing ? `Tone playing${ear !== "both" ? ` (${ear} ear)` : ""}…` : "—"}
        </p>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => respond(false)}>
            Can&apos;t hear it
          </Button>
          <Button onClick={() => respond(true)}>I can hear it</Button>
        </div>
      </div>
    </TestFrame>
  );
}
