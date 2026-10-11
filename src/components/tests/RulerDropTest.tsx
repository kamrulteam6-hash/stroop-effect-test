"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ResultScreen } from "@/components/tests/shared/ResultScreen";
import { SoundToggle } from "@/components/tests/shared/SoundToggle";
import { useSound } from "@/lib/useSound";
import styles from "./RulerDropTest.module.css";

type Stage = "idle" | "waiting" | "ready" | "too-soon" | "caught" | "result";
type Rounds = 3 | 5 | 10;
const distanceFromMs = (ms: number) => Math.round(490 * (ms / 1000) ** 2);

export function RulerDropTest() {
  const [stage, setStage] = useState<Stage>("idle");
  const [rounds, setRounds] = useState<Rounds>(5);
  const [times, setTimes] = useState<number[]>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const readyAt = useRef(0);
  const active = useRef(false);
  const zone = useRef<HTMLButtonElement>(null);
  const sound = useSound();
  useEffect(() => () => clearTimeout(timer.current), []);

  function startRound() {
    clearTimeout(timer.current);
    active.current = false;
    setStage("waiting");
    timer.current = setTimeout(() => {
      readyAt.current = performance.now();
      active.current = true;
      setStage("ready");
    }, 1200 + Math.random() * 2500);
    zone.current?.focus({ preventScroll: true });
  }
  function restart() { setTimes([]); startRound(); }
  function catchRuler() {
    if (stage === "waiting") {
      clearTimeout(timer.current);
      setStage("too-soon");
      sound.play("error");
    } else if (stage === "ready" && active.current) {
      active.current = false;
      const elapsed = Math.round(performance.now() - readyAt.current);
      setTimes(previous => [...previous, elapsed]);
      setStage("caught");
      sound.play("tick");
    }
  }
  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
  const last = times.at(-1) ?? 0;
  const isPlaying = stage === "waiting" || stage === "ready";

  return (
    <section className={styles.game} aria-label="Ruler Drop Reflex Lab">
      <div className={styles.header}>
        <div><span className={styles.eyebrow}>THE REFLEX LAB</span><h2>Catch the drop<span>!</span></h2></div>
        <div className={styles.sound}><SoundToggle enabled={sound.enabled} onToggle={sound.toggle} /></div>
      </div>
      <div className={styles.scene} data-stage={stage}>
        <Image src="/images/games/reflex-lab.webp" alt="" fill sizes="(max-width: 768px) 100vw, 760px" className={styles.art} preload />
        <div className={styles.sceneTint} />
        {stage === "result" ? (
          <div className={styles.results}>
            <div className={styles.ribbon}>EXPERIMENT COMPLETE</div>
            <ResultScreen slug="ruler-drop-test" direction="lower" headline="Nicely caught!" value={avg} unitLabel="ms average reaction"
              extraStats={[{ label: "Quickest catch", value: `${Math.min(...times)}ms` }, { label: "Equivalent fall", value: `${distanceFromMs(avg)}cm` }, { label: "Catches", value: `${times.length}/${rounds}` }]}
              onRetry={restart} onChangeOptions={() => { setTimes([]); setStage("idle"); }}
              shareLabel={`My ruler-drop average: ${avg}ms on Stroop Effect Test!`}>
              <p className={styles.note}>Fall distance is a physics-based estimate, not the distance shown by the animation.</p>
            </ResultScreen>
          </div>
        ) : (
          <>
            <div className={styles.hud}>
              <span>{stage === "idle" ? "REACTION CHALLENGE" : `ROUND ${Math.min(times.length + (stage === "caught" ? 0 : 1), rounds)} / ${rounds}`}</span>
              <span>{times.length ? `BEST ${Math.min(...times)} ms` : "WATCH • WAIT • CATCH"}</span>
            </div>
            <div className={styles.playfield}>
              <div className={styles.rail} aria-hidden="true">
                <div className={styles.clamp} />
                <div key={stage === "ready" ? "falling" : "still"} className={`${styles.ruler} ${stage === "ready" ? styles.falling : ""} ${stage === "caught" ? styles.caughtRuler : ""}`}>
                  <span className={styles.rulerHole} />
                  {Array.from({ length: 7 }, (_, i) => <span className={styles.mark} key={i} style={{ top: `${24 + i * 27}px` }}>{i * 5}</span>)}
                </div>
                <div className={styles.catchLine}><span>CATCH ZONE</span></div>
              </div>
              {stage === "idle" && <div className={styles.intro}>
                <span className={styles.pill}>READY, SCIENTIST?</span>
                <h3>Gravity is fast.<br />Are you faster?</h3>
                <p>Wait for the ruler to drop.<br />Tap the arena to catch it!</p>
                <fieldset className={styles.rounds}><legend>CHOOSE YOUR ROUNDS</legend>{([3,5,10] as const).map(n => <button type="button" key={n} aria-pressed={rounds === n} onClick={() => setRounds(n)}>{n}</button>)}</fieldset>
                <button className={styles.primary} onClick={restart}>Let’s play <span aria-hidden="true">→</span></button>
              </div>}
              {isPlaying && <button ref={zone} autoFocus className={styles.catchButton} onPointerDown={e => { if (e.button === 0) { e.preventDefault(); catchRuler(); } }} onClick={e => { if (e.detail === 0) catchRuler(); }} onKeyDown={e => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); catchRuler(); } }} aria-label={stage === "ready" ? "Catch the falling ruler" : "Wait for the ruler"}>
                <span className={`${styles.status} ${stage === "ready" ? styles.go : ""}`}>{stage === "ready" ? "CATCH IT!" : "Steady… wait for the drop"}</span>
              </button>}
              {(stage === "too-soon" || stage === "caught") && <div className={styles.feedback} role="status">
                <span className={styles.pill}>{stage === "caught" ? "RULER CAUGHT" : "FALSE START"}</span>
                <h3>{stage === "caught" ? <>{last}<small> ms</small></> : "A little too eager!"}</h3>
                <p>{stage === "caught" ? `Equivalent to ${distanceFromMs(last)} cm of free fall.` : "Let gravity make the first move. This round doesn’t count."}</p>
                <button className={styles.primary} onClick={stage === "too-soon" ? startRound : times.length >= rounds ? () => { sound.play("success"); setStage("result"); } : startRound}>{stage === "too-soon" ? "Try this round again" : times.length >= rounds ? "See my results" : "Next drop"} →</button>
              </div>}
            </div>
            <div className={styles.footer}><span>{isPlaying ? "Click / tap anywhere in the arena · Space or Enter" : "A little focus. A little gravity. A lot of fun."}</span><div className={styles.progress} aria-label={`${times.length} of ${rounds} rounds complete`}>{Array.from({length:rounds}, (_,i) => <i key={i} data-done={i < times.length} />)}</div></div>
          </>
        )}
      </div>
    </section>
  );
}
