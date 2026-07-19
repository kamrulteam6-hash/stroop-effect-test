"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "stroop-effect-test:sound-enabled";

type ToneKind = "tick" | "success" | "error" | "select";

let sharedCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedCtx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    sharedCtx = new AudioCtx();
  }
  return sharedCtx;
}

const TONE_PRESETS: Record<ToneKind, { freq: number; duration: number; type: OscillatorType }> = {
  tick: { freq: 720, duration: 0.05, type: "square" },
  select: { freq: 480, duration: 0.06, type: "sine" },
  success: { freq: 660, duration: 0.16, type: "triangle" },
  error: { freq: 160, duration: 0.22, type: "sawtooth" },
};

function playTone(kind: ToneKind) {
  const ctx = getCtx();
  if (!ctx) return;
  const preset = TONE_PRESETS[kind];
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = preset.type;
  osc.frequency.value = preset.freq;
  gain.gain.value = 0.001;
  gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + preset.duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + preset.duration + 0.02);

  if (kind === "success") {
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.value = preset.freq * 1.5;
    gain2.gain.value = 0.001;
    gain2.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + preset.duration + 0.1);
    osc2.connect(gain2).connect(ctx.destination);
    osc2.start(ctx.currentTime + 0.06);
    osc2.stop(ctx.currentTime + preset.duration + 0.12);
  }
}

export function useSound() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // Hydrate post-mount only, to avoid desyncing from server-rendered HTML.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored !== null) setEnabled(stored === "1");
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const play = useCallback(
    (kind: ToneKind) => {
      if (!enabled) return;
      playTone(kind);
    },
    [enabled]
  );

  return { enabled, toggle, play };
}
