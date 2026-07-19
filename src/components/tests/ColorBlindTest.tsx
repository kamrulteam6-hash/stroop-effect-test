"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TestFrame } from "@/components/tests/shared/TestFrame";
import { OptionsBar } from "@/components/tests/shared/OptionsBar";
import { Segmented } from "@/components/tests/shared/Segmented";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";

interface PlateConfig {
  digits: string;
  figure: string[];
  background: string[];
  control?: boolean;
}

const ALL_PLATES: PlateConfig[] = [
  { digits: "12", figure: ["#e2703a", "#e8875a", "#d9642f", "#f0996b"], background: ["#7fae7a", "#6f9c66", "#8bbf8a", "#5f8d59"] },
  { digits: "8", figure: ["#d9542f", "#c94a29", "#e26a3f"], background: ["#5f8d59", "#4f7a4a", "#729e6a"] },
  { digits: "29", figure: ["#7fae7a", "#6f9c66", "#8bbf8a"], background: ["#d9542f", "#c94a29", "#e26a3f"] },
  { digits: "5", figure: ["#3b6ef0", "#3357c9", "#4d7ef5"], background: ["#f5c518", "#e0b010", "#f7d34d"], control: true },
  { digits: "3", figure: ["#e07a9a", "#d9628a", "#e891ab"], background: ["#6f9c66", "#5f8d59", "#7fae7a"] },
  { digits: "6", figure: ["#e2703a", "#d9642f", "#f0996b"], background: ["#6f9c66", "#5f8d59", "#8bbf8a"] },
  { digits: "45", figure: ["#7fae7a", "#8bbf8a", "#6f9c66"], background: ["#c94a29", "#d9542f", "#e26a3f"] },
  { digits: "9", figure: ["#3357c9", "#3b6ef0", "#4d7ef5"], background: ["#f7d34d", "#f5c518", "#e0b010"], control: true },
  { digits: "17", figure: ["#d9628a", "#e891ab", "#e07a9a"], background: ["#5f8d59", "#7fae7a", "#6f9c66"] },
  { digits: "2", figure: ["#c94a29", "#d9542f", "#e26a3f"], background: ["#729e6a", "#5f8d59", "#4f7a4a"] },
];

const SIZE = 260;

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawPlate(canvas: HTMLCanvasElement, plate: PlateConfig) {
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  canvas.width = SIZE * dpr;
  canvas.height = SIZE * dpr;
  canvas.style.width = `${SIZE}px`;
  canvas.style.height = `${SIZE}px`;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, SIZE, SIZE);

  const mask = document.createElement("canvas");
  mask.width = SIZE;
  mask.height = SIZE;
  const mctx = mask.getContext("2d");
  if (!mctx) return;
  mctx.fillStyle = "black";
  mctx.fillRect(0, 0, SIZE, SIZE);
  mctx.fillStyle = "white";
  mctx.font = `bold ${SIZE * 0.52}px Arial`;
  mctx.textAlign = "center";
  mctx.textBaseline = "middle";
  mctx.fillText(plate.digits, SIZE / 2, SIZE / 2 + SIZE * 0.02);
  const maskData = mctx.getImageData(0, 0, SIZE, SIZE).data;

  const radius = SIZE / 2;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const dotCount = 1400;

  for (let i = 0; i < dotCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.sqrt(Math.random()) * (radius - 6);
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    const px = Math.min(SIZE - 1, Math.max(0, Math.floor(x)));
    const py = Math.min(SIZE - 1, Math.max(0, Math.floor(y)));
    const alpha = maskData[(py * SIZE + px) * 4 + 3];
    const inside = alpha > 128 && maskData[(py * SIZE + px) * 4] > 128;
    const color = inside ? pick(plate.figure) : pick(plate.background);
    const r = 1.6 + Math.random() * 2.6;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

function makeOptions(correct: string): string[] {
  const wrongPool = ["1", "3", "5", "6", "7", "9", "12", "15", "17", "21", "26", "29", "42", "45", "74", "8"].filter(
    (v) => v !== correct
  );
  const shuffled = [...wrongPool].sort(() => Math.random() - 0.5);
  const options = [correct, shuffled[0], shuffled[1], "I don't see a number"];
  return options.sort(() => Math.random() - 0.5);
}

type PlateSet = "quick" | "full";
type Phase = "idle" | "running" | "result";

interface PlateOutcome {
  digits: string;
  chosen: string;
  correct: boolean;
}

export function ColorBlindTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [plateSet, setPlateSet] = useState<PlateSet>("quick");
  const [plateIndex, setPlateIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [controlCorrect, setControlCorrect] = useState(true);
  const [selected, setSelected] = useState<string | null>(null);
  const [outcomes, setOutcomes] = useState<PlateOutcome[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const plates = plateSet === "quick" ? ALL_PLATES.slice(0, 5) : ALL_PLATES;

  const options = useMemo(
    () => (phase === "running" ? makeOptions(plates[plateIndex].digits) : []),
    [phase, plateIndex, plates]
  );

  useEffect(() => {
    if (phase !== "running") return;
    if (canvasRef.current) drawPlate(canvasRef.current, plates[plateIndex]);
  }, [phase, plateIndex, plates]);

  const start = () => {
    setPhase("running");
    setPlateIndex(0);
    setCorrectCount(0);
    setControlCorrect(true);
    setSelected(null);
    setOutcomes([]);
  };

  const choose = (value: string) => {
    if (selected) return;
    setSelected(value);
    const plate = plates[plateIndex];
    const isCorrect = value === plate.digits;
    if (isCorrect) setCorrectCount((c) => c + 1);
    if (plate.control && !isCorrect) setControlCorrect(false);
    setOutcomes((o) => [...o, { digits: plate.digits, chosen: value, correct: isCorrect }]);

    window.setTimeout(() => {
      if (plateIndex + 1 >= plates.length) {
        setPhase("result");
      } else {
        setSelected(null);
        setPlateIndex((p) => p + 1);
      }
    }, 500);
  };

  const nonControlTotal = plates.filter((p) => !p.control).length;
  const nonControlCorrect = correctCount - (controlCorrect ? plates.filter((p) => p.control).length : 0);
  const likelyDeficiency = controlCorrect && nonControlCorrect <= nonControlTotal - Math.ceil(nonControlTotal * 0.5);

  if (phase === "result") {
    return (
      <TestFrame>
        <ResultScreen
          slug="colorblind-test-online"
          direction="higher"
          value={correctCount}
          unitLabel={`out of ${plates.length} correct`}
          extraStats={[{ label: "Control Plate", value: controlCorrect ? "Passed" : "Missed" }]}
          shareLabel={`I got ${correctCount}/${plates.length} on the Color Blind Test screening!`}
          onRetry={start}
          onChangeOptions={() => setPhase("idle")}
        >
          <p className="max-w-sm text-sm text-muted">
            {likelyDeficiency
              ? "Your answers show a pattern consistent with red-green color vision deficiency. This is a quick screening, not a diagnosis — consider a professional eye exam."
              : "No strong signs of red-green color vision deficiency showed up in this quick screening."}
          </p>
          <div className="flex w-full max-w-sm flex-wrap justify-center gap-2">
            {outcomes.map((o, i) => (
              <span
                key={i}
                title={`Plate ${i + 1}: ${o.digits} — you answered ${o.chosen}`}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  o.correct ? "bg-success/15 text-success" : "bg-danger/15 text-danger"
                }`}
              >
                {o.correct ? "✓" : "✕"}
              </span>
            ))}
          </div>
        </ResultScreen>
      </TestFrame>
    );
  }

  if (phase === "idle") {
    return (
      <TestFrame>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-sm text-sm text-muted">
            Pick the number you see in each dot plate — or &quot;I don&apos;t see a number&quot; if nothing stands
            out.
          </p>
          <OptionsBar>
            <Segmented
              label="Plates"
              value={plateSet}
              onChange={setPlateSet}
              options={[
                { value: "quick", label: "Quick (5)" },
                { value: "full", label: "Full (10)" },
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
      <div className="flex w-full flex-col items-center gap-6">
        <p className="text-xs font-medium text-muted-2">
          Plate {plateIndex + 1} / {plates.length}
        </p>
        <canvas ref={canvasRef} className="rounded-full" />
        <div className="grid w-full max-w-md grid-cols-2 gap-3">
          {options.map((opt) => {
            const isChosen = selected === opt;
            const isCorrectAnswer = selected && opt === plates[plateIndex].digits;
            return (
              <button
                key={opt}
                onClick={() => choose(opt)}
                disabled={!!selected}
                className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${
                  isCorrectAnswer
                    ? "border-success bg-success/10 text-success"
                    : isChosen
                      ? "border-danger bg-danger/10 text-danger"
                      : "border-border bg-surface-2 text-foreground hover:border-primary/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </TestFrame>
  );
}
