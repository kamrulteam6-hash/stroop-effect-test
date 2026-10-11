import Image from "next/image";
import { CSSProperties, ReactNode } from "react";
import styles from "./GameScene.module.css";

const THEMES = {
  decision: { title: "Every choice counts", label: "THE DECISION TABLE", subtitle: "Four decks. Discover your own strategy.", accent: "#087b76", secondary: "#a96322" },
  impressions: { title: "Beyond first impressions", label: "THE IMPRESSION GALLERY", subtitle: "Meet the people. Explore your perceptions.", accent: "#a53c78", secondary: "#7652b5" },
  math: { title: "Make every answer count", label: "THE NUMBER WORKSHOP", subtitle: "Find your flow. Build your streak.", accent: "#087d89", secondary: "#b95627" },
  tiles: { title: "Remember the pattern", label: "THE MEMORY VAULT", subtitle: "A moment to look. A pattern to remember.", accent: "#6745b6", secondary: "#087e85" },
  rhythm: { title: "Find your rhythm", label: "THE BEAT STUDIO", subtitle: "Listen. Feel the beat. Tap in time.", accent: "#8c3eaf", secondary: "#bb4c48" },
  reflection: { title: "Pause. Think. Discover.", label: "THE THINKING ROOM", subtitle: "Seven questions for a curious mind.", accent: "#5651a3", secondary: "#a56825" },
  optics: { title: "A closer look", label: "THE OPTICAL STUDIO", subtitle: "Take your time. Look carefully.", accent: "#087b8a", secondary: "#4878a9" },
  words: { title: "Words in a flash", label: "THE LANGUAGE LAB", subtitle: "Look closely. Decide quickly.", accent: "#7050b3", secondary: "#087d87" },
  colors: { title: "Follow the color sequence", label: "THE COLOR ARCADE", subtitle: "Watch the lights. Play it back.", accent: "#7040c1", secondary: "#b44271" },
  sorting: { title: "Find the hidden rule", label: "THE SORTING WORKSHOP", subtitle: "Make a match. Learn. Adapt.", accent: "#087d83", secondary: "#a95f32" },
  symbol: { title: "Crack the code", label: "SYMBOL STATION", subtitle: "Nine symbols. One quick-thinking decoder.", accent: "#6740ce", secondary: "#079c9c" },
  trail: { title: "Follow the trail", label: "EXPLORER’S CHALLENGE", subtitle: "Connect each checkpoint. Find your flow.", accent: "#087f71", secondary: "#cf7130" },
  faces: { title: "A face to remember", label: "THE MEMORY GALLERY", subtitle: "Meet the faces. Remember the details.", accent: "#b83e7f", secondary: "#7762be" },
  tapping: { title: "Ready. Set. Tap!", label: "FINGER SPEED ARCADE", subtitle: "Two hands. Two rounds. Your personal best.", accent: "#6940d4", secondary: "#ca4c51" },
  hands: { title: "Which hand takes the lead?", label: "EVERYDAY EXPLORER", subtitle: "Discover your everyday hand preferences.", accent: "#087f8c", secondary: "#bb6350" },
  peripheral: { title: "Keep your focus", label: "PERIPHERAL OBSERVATORY", subtitle: "Eyes in the center. Awareness all around.", accent: "#4257bf", secondary: "#128b9e" },
  pitch: { title: "Tune into the difference", label: "THE SOUND STUDIO", subtitle: "Listen closely. Trust your ears.", accent: "#7544c8", secondary: "#b74079" },
  barnum: { title: "Behind the curtain", label: "THE PERSONALITY PARLOR", subtitle: "A little curiosity. A surprising reveal.", accent: "#8740af", secondary: "#a76328" },
  stroop: { title: "A colorful challenge", label: "THE COLOR WORKSHOP", subtitle: "Stay sharp when words and colors collide.", accent: "#6240cc", secondary: "#ca5b37" },
};
export type GameTheme = keyof typeof THEMES;

/** Opt-in scene wrapper: styles never reach other tests or page/SEO content. */
export function GameScene({ theme, phase, children, className = "", arena = false }: {
  theme: GameTheme; phase: string; children: ReactNode; className?: string; arena?: boolean;
}) {
  const t = THEMES[theme];
  return (
    <section className={styles.scene} data-theme={theme} data-phase={phase} aria-label={t.label}
      style={{ "--game-accent": t.accent, "--game-secondary": t.secondary } as CSSProperties}>
      <header className={styles.header}>
        <div><span>{t.label}</span><h2>{t.title}</h2></div>
        <span className={styles.mode}>{phase === "idle" ? "LET’S PLAY" : phase === "result" ? "COMPLETE" : "IN PLAY"}</span>
      </header>
      <div className={styles.environment}>
        <Image src={`/images/games/${theme}.webp`} alt="" fill sizes="(max-width: 768px) 100vw, 900px" preload className={styles.art} />
        {phase === "idle" && <div className={styles.introBanner}><span aria-hidden="true">✦</span> {t.subtitle}</div>}
        <div className={`${styles.board} ${arena ? styles.arena : ""} ${className}`}>
          {children}
        </div>
        <div className={styles.footer} aria-hidden="true"><i /> {phase === "idle" ? "YOUR NEXT BRAIN CHALLENGE STARTS HERE" : phase === "result" ? "A LITTLE PRACTICE. A NEW PERSONAL CHALLENGE." : "FOCUS ON THE CHALLENGE"} <i /></div>
      </div>
    </section>
  );
}
