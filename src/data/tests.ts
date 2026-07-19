export type TestCategory =
  | "Perception"
  | "Reaction & Speed"
  | "Memory & Cognition"
  | "Hearing"
  | "Math & Logic"
  | "Focus & Attention";

export type ComponentKey =
  | "stroop"
  | "reaction-time"
  | "colorblind"
  | "aim-trainer"
  | "click-speed"
  | "number-memory"
  | "verbal-memory"
  | "sequence-memory"
  | "typing-speed"
  | "visual-memory"
  | "hearing-range"
  | "mental-math"
  | "color-perception"
  | "attention";

export interface TestDefinition {
  slug: string;
  title: string;
  /** Overrides `title` in the <title> tag only, so the H1 can stay concise while the meta title targets a distinct keyword variant. */
  metaTitle?: string;
  shortTitle: string;
  category: TestCategory;
  icon: string;
  shortDescription: string;
  metaDescription: string;
  keywords: string[];
  estTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  componentKey: ComponentKey;
  /** Whether a higher or lower score is better, for history/personal-best tracking. */
  scoreDirection: "higher" | "lower";
  featured?: boolean;
}

export const tests: TestDefinition[] = [
  {
    slug: "stroop-effect-test",
    title: "Stroop Effect Test",
    metaTitle: "Stroop Test Online — Free, With Classic & Reverse Modes",
    shortTitle: "Stroop Effect",
    category: "Perception",
    icon: "🎨",
    shortDescription:
      "Name the ink color, not the word. A classic test of selective attention and cognitive control.",
    metaDescription:
      "Take the free Stroop test online with Classic, Reverse, and Fifty-Fifty modes. See your accuracy and average response time instantly — no sign-up required.",
    keywords: [
      "stroop test online",
      "take the stroop test",
      "reverse stroop test",
      "stroop effect variations",
      "interference score",
      "stroop effect test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "stroop",
    scoreDirection: "lower",
    featured: true,
  },
  {
    slug: "reaction-time-test",
    title: "Reaction Time Test",
    metaTitle: "Reaction Time Test Online — Free & Instant (No Sign-Up)",
    shortTitle: "Reaction Time",
    category: "Reaction & Speed",
    icon: "⚡",
    shortDescription: "How fast can you react to a visual cue? Measure your reflexes in milliseconds.",
    metaDescription:
      "Free online Reaction Time Test — measure your reflexes in milliseconds, see how you compare by age, and track your personal best. No sign-up, instant results.",
    keywords: [
      "reaction time test",
      "reaction time test online",
      "reflex test",
      "average reaction time",
      "visual reaction time test",
      "reaction time by age",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "reaction-time",
    scoreDirection: "lower",
  },
  {
    slug: "colorblind-test-online",
    title: "Color Blind Test",
    metaTitle: "Color Blind Test Online — Free Ishihara-Style Screening",
    shortTitle: "Color Blindness",
    category: "Perception",
    icon: "🔴",
    shortDescription: "Screen for red-green color vision deficiency with Ishihara-style plates.",
    metaDescription:
      "Free online color blind test with 10 dynamically-generated Ishihara-style plates — a fresh set every time. Screen for red-green color vision deficiency in under two minutes.",
    keywords: [
      "color blind test online",
      "ishihara test online",
      "color blindness test free",
      "deuteranopia test",
      "protanopia test",
      "red green color blindness test",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "colorblind",
    scoreDirection: "higher",
  },
  {
    slug: "aim-trainer-test",
    title: "Aim Trainer Test",
    metaTitle: "Aim Trainer Test — Free Online Mouse Accuracy & Speed Test",
    shortTitle: "Aim Trainer",
    category: "Reaction & Speed",
    icon: "🎯",
    shortDescription: "Click 30 targets as fast as you can. Track your average click speed and accuracy.",
    metaDescription:
      "Free online Aim Trainer test — no download, no install. Click static or moving targets, choose your target size and count, and track your average time and accuracy.",
    keywords: [
      "aim trainer test",
      "aim trainer online",
      "mouse accuracy test",
      "click targets test",
      "aim training free",
    ],
    estTime: "1 min",
    difficulty: "Medium",
    componentKey: "aim-trainer",
    scoreDirection: "lower",
  },
  {
    slug: "click-speed-test",
    title: "Click Speed Test (CPS)",
    metaTitle: "CPS Test — Free Click Speed Test Online (5/10/30/60s)",
    shortTitle: "Click Speed",
    category: "Reaction & Speed",
    icon: "🖱️",
    shortDescription: "Measure how many clicks per second (CPS) you can perform in 5 seconds.",
    metaDescription:
      "Free Click Speed Test (CPS Test) with 5, 10, 30, and 60-second modes, plus a spacebar mode. Find out your clicks per second and see how you compare.",
    keywords: [
      "click speed test",
      "cps test",
      "clicks per second test",
      "cps test 10 seconds",
      "spacebar clicker test",
      "jitter click test",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "click-speed",
    scoreDirection: "higher",
  },
  {
    slug: "number-memory-test",
    title: "Number Memory Test",
    metaTitle: "Number Memory Test — Free Digit Span Test Online",
    shortTitle: "Number Memory",
    category: "Memory & Cognition",
    icon: "🔢",
    shortDescription: "Memorize an increasingly long string of digits. How many can you hold at once?",
    metaDescription:
      "Free Number Memory Test with Forward and Backward (Reverse) digit span modes. See how many digits you can hold in working memory and how you compare to the average.",
    keywords: [
      "number memory test",
      "digit span test",
      "working memory test",
      "backward digit span test",
      "how many digits can you remember",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "number-memory",
    scoreDirection: "higher",
  },
  {
    slug: "verbal-memory-test",
    title: "Verbal Memory Test",
    metaTitle: "Verbal Memory Test — Free Word Recognition Test Online",
    shortTitle: "Verbal Memory",
    category: "Memory & Cognition",
    icon: "📝",
    shortDescription: "Decide whether each word is new or one you've already seen. Survive as long as you can.",
    metaDescription:
      "Free Verbal Memory Test with a 70-word pool and adjustable lives. Decide whether each word is new or already seen and see how many you can correctly identify.",
    keywords: [
      "verbal memory test",
      "word memory test online",
      "recognition memory test",
      "verbal memory test online",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "verbal-memory",
    scoreDirection: "higher",
  },
  {
    slug: "sequence-memory-test",
    title: "Sequence Memory Test",
    metaTitle: "Sequence Memory Test — Free Online Chimp Test Style Game",
    shortTitle: "Sequence Memory",
    category: "Memory & Cognition",
    icon: "🧩",
    shortDescription: "Repeat an ever-growing pattern of flashing tiles, chimp-test style.",
    metaDescription:
      "Free Sequence Memory Test with 3×3 and 4×4 Hard grids. Repeat a growing pattern of flashing tiles, chimp-test style, and see how long a sequence you can remember.",
    keywords: [
      "sequence memory test",
      "chimp test online",
      "pattern memory test",
      "corsi block tapping test online",
    ],
    estTime: "3 min",
    difficulty: "Hard",
    componentKey: "sequence-memory",
    scoreDirection: "higher",
  },
  {
    slug: "typing-speed-test",
    title: "Typing Speed Test",
    metaTitle: "Typing Speed Test Online — Free WPM & Accuracy Test",
    shortTitle: "Typing Speed",
    category: "Reaction & Speed",
    icon: "⌨️",
    shortDescription: "Type the given passage as fast and accurately as you can. Get your live WPM.",
    metaDescription:
      "Free online Typing Speed Test with Passage and 60-second Sprint modes across 3 text categories. Get instant WPM, raw WPM, and accuracy — no sign-up required.",
    keywords: [
      "typing speed test",
      "wpm test",
      "typing test online",
      "free typing test",
      "average typing speed",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "typing-speed",
    scoreDirection: "higher",
  },
  {
    slug: "visual-memory-test",
    title: "Visual Memory Test",
    metaTitle: "Visual Memory Test — Free Online Spatial Memory Test",
    shortTitle: "Visual Memory",
    category: "Memory & Cognition",
    icon: "🖼️",
    shortDescription: "Remember which tiles on a grid lit up, then click them back in any order.",
    metaDescription:
      "Free Visual Memory Test with 5×5 and 6×6 grids. Remember which tiles lit up, then click them back correctly, and see how many levels you can clear.",
    keywords: [
      "visual memory test",
      "spatial memory test",
      "pattern memory test online",
      "visual working memory test",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "visual-memory",
    scoreDirection: "higher",
  },
  {
    slug: "hearing-range-test",
    title: "Hearing Range Test",
    metaTitle: "Hearing Range Test — Free Online Frequency Test (20Hz–20kHz)",
    shortTitle: "Hearing Range",
    category: "Hearing",
    icon: "🎧",
    shortDescription: "Find the highest and lowest frequencies you can hear, in Hz. Headphones recommended.",
    metaDescription:
      "Free online Hearing Range Test with a stereo left/right ear mode. Discover the highest and lowest audio frequencies (Hz) you can hear, from 20Hz to 20kHz.",
    keywords: [
      "hearing range test",
      "hearing test online",
      "frequency hearing test",
      "how old are your ears test",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "hearing-range",
    scoreDirection: "higher",
  },
  {
    slug: "mental-math-test",
    title: "Mental Math Speed Test",
    metaTitle: "Mental Math Speed Test — Free Online Arithmetic Test",
    shortTitle: "Mental Math",
    category: "Math & Logic",
    icon: "➗",
    shortDescription: "Solve as many quick arithmetic problems as you can before time runs out.",
    metaDescription:
      "Free Mental Math Speed Test with adjustable operations and duration (30/60/120s) plus streak-based scoring. Solve as many problems as you can and measure your calculation speed.",
    keywords: [
      "mental math test",
      "math speed test online",
      "arithmetic test",
      "mental arithmetic practice",
    ],
    estTime: "1 min",
    difficulty: "Medium",
    componentKey: "mental-math",
    scoreDirection: "higher",
  },
  {
    slug: "color-perception-test",
    title: "Color Perception Test",
    metaTitle: "Color Perception Test — Free Online Hue Discrimination Test",
    shortTitle: "Color Perception",
    category: "Perception",
    icon: "🌈",
    shortDescription: "Arrange shades of the same hue in the correct order to test your color discrimination.",
    metaDescription:
      "Free Color Perception Test inspired by the Farnsworth-Munsell hue test. Arrange 6, 8, or 12 shades in order and measure your color discrimination with an error score.",
    keywords: [
      "color perception test",
      "color discrimination test",
      "hue test online",
      "farnsworth munsell test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "color-perception",
    scoreDirection: "lower",
  },
  {
    slug: "attention-span-test",
    title: "Attention & Focus Test",
    metaTitle: "Attention & Focus Test — Free Online Go/No-Go Test",
    shortTitle: "Attention Span",
    category: "Focus & Attention",
    icon: "🎯",
    shortDescription: "Respond only to the correct target and hold back on the rest. Tests sustained focus.",
    metaDescription:
      "Free Attention and Focus Test (go/no-go task) with adjustable trial count, difficulty, and letters or shapes. Measure your sustained attention and impulse control.",
    keywords: [
      "attention test online",
      "focus test",
      "go no go test",
      "impulse control test",
      "sustained attention test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "attention",
    scoreDirection: "higher",
  },
];

export const categories: TestCategory[] = [
  "Perception",
  "Reaction & Speed",
  "Memory & Cognition",
  "Hearing",
  "Math & Logic",
  "Focus & Attention",
];

export const comingSoonCategories: { name: string; examples: string[] }[] = [
  { name: "Personality", examples: ["Big 5 personality", "Introvert vs extrovert"] },
  { name: "IQ & Logic", examples: ["Pattern IQ test", "Logic puzzle test"] },
  { name: "Vision", examples: ["Astigmatism test", "Depth perception test"] },
  { name: "Motor Skills", examples: ["Hand-eye coordination", "Typing accuracy test"] },
];

export function getTestBySlug(slug: string): TestDefinition | undefined {
  return tests.find((t) => t.slug === slug);
}

export function getTestsByCategory(category: TestCategory): TestDefinition[] {
  return tests.filter((t) => t.category === category);
}
