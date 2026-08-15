export type TestCategory =
  | "Perception"
  | "Vision"
  | "Reaction & Speed"
  | "Memory & Cognition"
  | "Hearing"
  | "Math & Logic"
  | "Focus & Attention"
  | "Personality"
  | "IQ & Logic"
  | "Cognitive Biases";

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
  | "attention"
  | "schulte-table"
  | "astigmatism"
  | "trail-making"
  | "pitch-discrimination"
  | "color-memory"
  | "rhythm-tapping"
  | "n-back"
  | "blind-spot"
  | "mot"
  | "big-five"
  | "eq-test"
  | "peripheral-vision"
  | "visual-illusion"
  | "symbol-digit"
  | "pattern-iq"
  | "finger-tapping"
  | "ruler-drop"
  | "flanker"
  | "memory-match"
  | "pop-up-target"
  | "vocabulary-size"
  | "handedness"
  | "personality-type"
  | "risk-taking"
  | "enneagram"
  | "love-language"
  | "serial-position"
  | "false-memory"
  | "barnum-effect"
  | "necker-cube"
  | "anchoring-bias"
  | "levels-of-processing"
  | "framing-effect"
  | "sunk-cost"
  | "ebbinghaus-illusion"
  | "semantic-priming"
  | "von-restorff"
  | "conjunction-fallacy"
  | "halo-effect"
  | "gamblers-fallacy"
  | "iowa-gambling"
  | "availability-heuristic";

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
  /** Whether a higher or lower score is better, for history/personal-best tracking. Omit for self-assessment tests with no competitive score (e.g. Astigmatism). */
  scoreDirection?: "higher" | "lower";
  featured?: boolean;
}

export const tests: TestDefinition[] = [
  {
    slug: "stroop-effect-test",
    title: "Stroop Effect Test",
    metaTitle: "Stroop Effect Test – Free Online Color Word Test",
    shortTitle: "Stroop Effect",
    category: "Perception",
    icon: "🎨",
    shortDescription:
      "Name the ink color, not the word. A classic test of selective attention and cognitive control.",
    metaDescription:
      "Take the free Stroop Effect Test online. Measure selective attention, cognitive interference, accuracy, and reaction time with instant results—no sign-up.",
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
    metaTitle: "Reaction Time Test – Test Your Reflexes Online in ms",
    shortTitle: "Reaction Time",
    category: "Reaction & Speed",
    icon: "⚡",
    shortDescription: "How fast can you react to a visual cue? Measure your reflexes in milliseconds.",
    metaDescription:
      "Test your reaction time online in milliseconds. See if your score is fast, compare average human reaction times, and learn what can affect your results.",
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
    metaTitle: "Color Blind Test Online – Free Red-Green Vision Test",
    shortTitle: "Color Blindness",
    category: "Perception",
    icon: "🔴",
    shortDescription: "Screen for red-green color vision deficiency with Ishihara-style plates.",
    metaDescription:
      "Take a free color blind test online using Ishihara-style dot plates. Check for possible red-green color vision difficulty in minutes with instant results.",
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
    metaTitle: "Aim Trainer Test – Free Online Mouse Accuracy Test",
    shortTitle: "Aim Trainer",
    category: "Reaction & Speed",
    icon: "🎯",
    shortDescription: "Click 30 targets as fast as you can. Track your average click speed and accuracy.",
    metaDescription:
      "Test your aim, mouse accuracy, and target-clicking speed online. Choose target size, static or tracking mode, and get instant results in milliseconds.",
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
    metaTitle: "CPS Test – Free Click Speed Test Online",
    shortTitle: "Click Speed",
    category: "Reaction & Speed",
    icon: "🖱️",
    shortDescription: "Measure how many clicks per second (CPS) you can perform in 5 seconds.",
    metaDescription:
      "Take a free CPS test online and measure your clicks per second. Choose 5, 10, 30, or 60 seconds, use mouse or spacebar, and get instant results.",
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
    metaTitle: "Attention Span Test Online – Free Focus & Attention Test",
    shortTitle: "Attention Span",
    category: "Focus & Attention",
    icon: "🎯",
    shortDescription: "Respond only to the correct target and hold back on the rest. Tests sustained focus.",
    metaDescription:
      "Take a free attention span test online. Measure sustained focus, response inhibition, reaction time, misses, and false alarms with instant results.",
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
  {
    slug: "schulte-table-test",
    title: "Schulte Table Test",
    metaTitle: "Schulte Table Test — Free Online Concentration Grid",
    shortTitle: "Schulte Table",
    category: "Focus & Attention",
    icon: "🔢",
    shortDescription: "Click the numbers 1 through 25 in order, as fast as you can, using peripheral vision.",
    metaDescription:
      "Free Schulte Table test online with 4×4, 5×5, and 6×6 grids. Click the shuffled numbers in ascending order as fast as you can to train visual scanning and focus.",
    keywords: [
      "schulte table",
      "schulte table test online",
      "concentration grid test",
      "visual attention test",
      "speed reading test",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "schulte-table",
    scoreDirection: "lower",
  },
  {
    slug: "astigmatism-test",
    title: "Astigmatism Test",
    metaTitle: "Astigmatism Test Online — Free 1-Minute Vision Self-Check",
    shortTitle: "Astigmatism",
    category: "Vision",
    icon: "👁️",
    shortDescription: "A quick radial-line self-check for possible signs of astigmatism.",
    metaDescription:
      "Free online astigmatism test using a radial line pattern. Check in under a minute whether some lines appear sharper or darker than others — a possible sign of astigmatism.",
    keywords: [
      "astigmatism test online",
      "astigmatism test free",
      "astigmatism self test",
      "eye test astigmatism",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "astigmatism",
  },
  {
    slug: "trail-making-test",
    title: "Trail Making Test",
    metaTitle: "Trail Making Test Online — Free TMT-A & TMT-B",
    shortTitle: "Trail Making",
    category: "Focus & Attention",
    icon: "🔗",
    shortDescription: "Connect the dots in order — numbers only, or alternating numbers and letters.",
    metaDescription:
      "Free Trail Making Test (TMT) online. Part A connects numbers in order; Part B alternates numbers and letters to test cognitive flexibility and processing speed.",
    keywords: [
      "trail making test online",
      "tmt test",
      "trail making test part a part b",
      "cognitive flexibility test",
      "processing speed test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "trail-making",
    scoreDirection: "lower",
  },
  {
    slug: "pitch-discrimination-test",
    title: "Pitch Discrimination Test",
    metaTitle: "Pitch Discrimination Test — Free Tone Deafness Screening",
    shortTitle: "Pitch Discrimination",
    category: "Hearing",
    icon: "🎵",
    shortDescription: "Two tones play — can you tell which is higher? The gap narrows as you improve.",
    metaDescription:
      "Free online pitch discrimination test and tone deafness screening. Identify which of two tones is higher as the pitch gap narrows, and find your discrimination threshold.",
    keywords: [
      "tone deafness test",
      "pitch discrimination test",
      "perfect pitch test online",
      "am i tone deaf",
      "relative pitch test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "pitch-discrimination",
    scoreDirection: "lower",
  },
  {
    slug: "color-memory-game",
    title: "Color Memory Game",
    metaTitle: "Color Memory Game — Free Online Color & Sound Pattern Game",
    shortTitle: "Color Memory",
    category: "Memory & Cognition",
    icon: "🔴",
    shortDescription: "Watch the color and sound pattern grow, then repeat it back from memory.",
    metaDescription:
      "Free online color memory game with sound. Watch a growing sequence of colors and tones, then repeat it back — a classic electronic memory game format, right in your browser.",
    keywords: [
      "color memory game online",
      "simon game online free",
      "color pattern memory game",
      "sound memory game",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "color-memory",
    scoreDirection: "higher",
  },
  {
    slug: "rhythm-tapping-test",
    title: "Rhythm Tapping Test",
    metaTitle: "Rhythm Tapping Test — Free Online Timing Accuracy Test",
    shortTitle: "Rhythm Tapping",
    category: "Reaction & Speed",
    icon: "🥁",
    shortDescription: "Tap along to a steady beat and see how close to perfect timing you can get.",
    metaDescription:
      "Free online Rhythm Tapping Test. Tap along to a metronome at your chosen BPM and get scored on your average timing accuracy in milliseconds.",
    keywords: [
      "rhythm test online",
      "tempo tapping test",
      "timing accuracy test",
      "beat matching test",
      "rhythm accuracy test",
    ],
    estTime: "1 min",
    difficulty: "Medium",
    componentKey: "rhythm-tapping",
    scoreDirection: "lower",
  },
  {
    slug: "n-back-test",
    title: "N-Back Test",
    metaTitle: "N-Back Test Online — Free Working Memory Training",
    shortTitle: "N-Back",
    category: "Memory & Cognition",
    icon: "🧠",
    shortDescription: "Click when the current tile matches the one from N steps earlier. A real working-memory workout.",
    metaDescription:
      "Free online N-Back Test with adjustable N-level (1/2/3) and trial count. Train working memory by spotting when the current tile position matches N steps back.",
    keywords: [
      "n-back test",
      "n-back test online",
      "working memory training",
      "dual n-back",
      "n-back game free",
    ],
    estTime: "3 min",
    difficulty: "Hard",
    componentKey: "n-back",
    scoreDirection: "higher",
  },
  {
    slug: "blind-spot-test",
    title: "Blind Spot Test",
    metaTitle: "Blind Spot Test Online — Find Your Eye's Blind Spot",
    shortTitle: "Blind Spot",
    category: "Vision",
    icon: "⚫",
    shortDescription: "An interactive version of the classic demonstration — find the blind spot in each eye.",
    metaDescription:
      "Free interactive online blind spot test. Slide the dot and find the exact point where it disappears — a classic optic nerve demonstration for each eye.",
    keywords: [
      "blind spot test online",
      "find your blind spot",
      "eye blind spot test",
      "optic nerve test",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "blind-spot",
  },
  {
    slug: "multiple-object-tracking-test",
    title: "Multiple Object Tracking Test",
    metaTitle: "Multiple Object Tracking Test — Free Online MOT Test",
    shortTitle: "Object Tracking",
    category: "Focus & Attention",
    icon: "🔵",
    shortDescription: "Track the highlighted dots as they move and scatter among identical distractors.",
    metaDescription:
      "Free online Multiple Object Tracking (MOT) test. Track 2-4 moving targets among distractors, then pick them out again — a real visual attention research paradigm.",
    keywords: [
      "multiple object tracking test",
      "mot test online",
      "visual attention test",
      "object tracking test free",
    ],
    estTime: "2 min",
    difficulty: "Hard",
    componentKey: "mot",
    scoreDirection: "higher",
  },
  {
    slug: "big-five-personality-test",
    title: "Big Five Personality Test",
    metaTitle: "Big Five Personality Test — Free OCEAN Test Online",
    shortTitle: "Big Five",
    category: "Personality",
    icon: "🌟",
    shortDescription: "A short, free version of the most scientifically supported personality model in psychology.",
    metaDescription:
      "Free Big Five (OCEAN) personality test online. Answer 25 quick questions to see your Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism scores.",
    keywords: [
      "big five personality test",
      "ocean personality test",
      "free personality test online",
      "big 5 test",
    ],
    estTime: "4 min",
    difficulty: "Easy",
    componentKey: "big-five",
  },
  {
    slug: "emotional-intelligence-test",
    title: "Emotional Intelligence Test",
    metaTitle: "Emotional Intelligence Test — Free EQ Quiz Online",
    shortTitle: "EQ Test",
    category: "Personality",
    icon: "💬",
    shortDescription: "A quick self-assessment of your emotional awareness, regulation, and social skills.",
    metaDescription:
      "Free Emotional Intelligence (EQ) test online. Answer 20 quick questions across 4 core skills and get an instant EQ score with a plain-language breakdown.",
    keywords: [
      "emotional intelligence test",
      "eq test online free",
      "emotional intelligence quiz",
      "eq quiz",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "eq-test",
    scoreDirection: "higher",
  },
  {
    slug: "peripheral-vision-test",
    title: "Peripheral Vision Test",
    metaTitle: "Peripheral Vision Test — Free Online Visual Field Check",
    shortTitle: "Peripheral Vision",
    category: "Vision",
    icon: "👀",
    shortDescription: "Keep your eyes on the center and catch flashes appearing in your peripheral vision.",
    metaDescription:
      "Free online Peripheral Vision Test. Keep your eyes fixed on the center and detect flashes at the edge of your visual field — see your detection rate by zone.",
    keywords: [
      "peripheral vision test online",
      "visual field test",
      "field of view test",
      "useful field of view test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "peripheral-vision",
    scoreDirection: "higher",
  },
  {
    slug: "visual-illusion-test",
    title: "Visual Illusion Test",
    metaTitle: "Visual Illusion Test — Free Müller-Lyer Illusion Online",
    shortTitle: "Visual Illusion",
    category: "Perception",
    icon: "🔀",
    shortDescription: "Adjust a line until it looks equal to another — then see how much the illusion fooled you.",
    metaDescription:
      "Free online Visual Illusion Test featuring the classic Müller-Lyer illusion. Adjust a line to match another by eye and measure your personal illusion susceptibility.",
    keywords: [
      "visual illusion test online",
      "muller-lyer illusion test",
      "optical illusion test free",
      "perception illusion test",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "visual-illusion",
  },
  {
    slug: "symbol-digit-test",
    title: "Symbol Digit Modalities Test",
    metaTitle: "Symbol Digit Modalities Test — Free Online SDMT",
    shortTitle: "Symbol Digit",
    category: "Focus & Attention",
    icon: "🔣",
    shortDescription: "Match each symbol to its digit using the key, as fast as you can, for 90 seconds.",
    metaDescription:
      "Free online Symbol Digit Modalities Test (SDMT) — a simplified version of the real processing-speed test. Match symbols to digits as fast as you can in 90 seconds.",
    keywords: [
      "symbol digit modalities test",
      "sdmt online",
      "processing speed test",
      "symbol digit test free",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "symbol-digit",
    scoreDirection: "higher",
  },
  {
    slug: "pattern-iq-test",
    title: "Pattern IQ Test",
    metaTitle: "Pattern IQ Test — Free Online Matrix Reasoning Test",
    shortTitle: "Pattern IQ",
    category: "IQ & Logic",
    icon: "🧩",
    shortDescription: "Spot the rule in a sequence of shapes and pick what comes next.",
    metaDescription:
      "Free online Pattern IQ Test with procedurally generated matrix-reasoning puzzles — a new set every time. Spot the pattern and pick the shape that completes it.",
    keywords: [
      "pattern iq test",
      "matrix reasoning test online",
      "pattern recognition test free",
      "logic puzzle test online",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "pattern-iq",
    scoreDirection: "higher",
  },
  {
    slug: "finger-tapping-test",
    title: "Finger Tapping Test",
    metaTitle: "Finger Tapping Test — Free Online Motor Speed Test",
    shortTitle: "Finger Tapping",
    category: "Reaction & Speed",
    icon: "👆",
    shortDescription: "Tap as fast as you can for 10 seconds with each hand and compare the results.",
    metaDescription:
      "Free online Finger Tapping Test — a simplified version of the real neuropsychological motor speed test. Compare your dominant and non-dominant hand tap counts.",
    keywords: [
      "finger tapping test",
      "finger tapping test online",
      "motor speed test",
      "tapping speed test",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "finger-tapping",
    scoreDirection: "higher",
  },
  {
    slug: "ruler-drop-test",
    title: "Ruler Drop Reaction Test",
    metaTitle: "Ruler Drop Reaction Test — Free Online Reflex Test",
    shortTitle: "Ruler Drop",
    category: "Reaction & Speed",
    icon: "📏",
    shortDescription: "The classic ruler-drop reflex trick, digitized — catch the falling ruler as fast as you can.",
    metaDescription:
      "Free online Ruler Drop Reaction Test — a digital version of the classic falling-ruler reflex trick. Catch it as fast as you can and see your reaction time.",
    keywords: [
      "ruler drop test",
      "reaction time ruler test",
      "ruler reflex test online",
      "reaction distance test",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "ruler-drop",
    scoreDirection: "lower",
  },
  {
    slug: "flanker-test",
    title: "Flanker Test",
    metaTitle: "Flanker Test — Free Online Eriksen Flanker Task",
    shortTitle: "Flanker Test",
    category: "Focus & Attention",
    icon: "➡️",
    shortDescription: "Identify the direction of the center arrow while ignoring the arrows around it.",
    metaDescription:
      "Free online Flanker Test based on the classic Eriksen flanker task. Respond to the center arrow's direction while surrounding arrows try to distract you.",
    keywords: [
      "flanker test",
      "eriksen flanker task online",
      "flanker task test",
      "selective attention test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "flanker",
    scoreDirection: "higher",
  },
  {
    slug: "memory-match-game",
    title: "Memory Match Game",
    metaTitle: "Memory Match Game — Free Online Card Matching Game",
    shortTitle: "Memory Match",
    category: "Memory & Cognition",
    icon: "🃏",
    shortDescription: "Flip cards to find matching pairs in as few moves as possible.",
    metaDescription:
      "Free online Memory Match card game. Flip cards to find all the matching pairs in as few moves as possible — classic concentration gameplay with instant results.",
    keywords: [
      "memory match game",
      "concentration card game online",
      "memory card game free",
      "matching pairs game",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "memory-match",
    scoreDirection: "lower",
  },
  {
    slug: "pop-up-target-test",
    title: "Pop-Up Target Test",
    metaTitle: "Pop-Up Target Test — Free Online Reaction Game",
    shortTitle: "Pop-Up Target",
    category: "Reaction & Speed",
    icon: "🎯",
    shortDescription: "Targets pop up at random spots — click as many as you can before time runs out.",
    metaDescription:
      "Free online Pop-Up Target reaction game. Targets appear randomly across a grid — click as many as you can in 30 seconds and track your hit rate.",
    keywords: [
      "reaction game online",
      "pop up target game",
      "whack a mole reaction test",
      "click reaction speed game",
    ],
    estTime: "1 min",
    difficulty: "Medium",
    componentKey: "pop-up-target",
    scoreDirection: "higher",
  },
  {
    slug: "vocabulary-size-test",
    title: "Vocabulary Size Test",
    metaTitle: "Vocabulary Size Test — Free Online Word Knowledge Test",
    shortTitle: "Vocabulary Size",
    category: "Memory & Cognition",
    icon: "📚",
    shortDescription: "Mark which words you actually know to get an estimate of your vocabulary size.",
    metaDescription:
      "Free online Vocabulary Size Test. Mark which words you genuinely know — including decoy fake words — to get an estimate of your total English vocabulary size.",
    keywords: [
      "vocabulary size test",
      "vocabulary test online free",
      "word knowledge test",
      "how many words do you know",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "vocabulary-size",
    scoreDirection: "higher",
  },
  {
    slug: "handedness-test",
    title: "Handedness Test",
    metaTitle: "Handedness Test — Free Online Hand Dominance Quiz",
    shortTitle: "Handedness",
    category: "Personality",
    icon: "✋",
    shortDescription: "A short quiz measuring how strongly you favor your dominant hand across everyday tasks.",
    metaDescription:
      "Free online Handedness Test inspired by the Edinburgh Handedness Inventory. Answer questions about everyday tasks to get your hand dominance score.",
    keywords: [
      "handedness test",
      "edinburgh handedness inventory online",
      "am i left or right handed test",
      "hand dominance test",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "handedness",
  },
  {
    slug: "personality-type-test",
    title: "Personality Type Test",
    metaTitle: "Personality Type Test — Free Online 4-Letter Type Quiz",
    shortTitle: "Personality Type",
    category: "Personality",
    icon: "🧭",
    shortDescription: "A short quiz sorting your preferences into a 4-letter personality type.",
    metaDescription:
      "Free online Personality Type Test. Answer quick questions across 4 preference dimensions to get your 4-letter personality type, inspired by the popular typing system.",
    keywords: [
      "personality type test",
      "16 personality types quiz",
      "mbti test free",
      "personality type quiz online",
    ],
    estTime: "4 min",
    difficulty: "Easy",
    componentKey: "personality-type",
  },
  {
    slug: "risk-taking-test",
    title: "Risk-Taking Test",
    metaTitle: "Risk-Taking Test — Free Online Balloon Risk Task",
    shortTitle: "Risk-Taking",
    category: "Personality",
    icon: "🎈",
    shortDescription: "Pump up a virtual balloon for points — but don't let it pop before you cash out.",
    metaDescription:
      "Free online Risk-Taking Test based on the Balloon Analogue Risk Task (BART). Pump a virtual balloon for points, but cash out before it pops.",
    keywords: [
      "risk taking test online",
      "balloon analogue risk task",
      "bart test online",
      "risk tolerance test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "risk-taking",
    scoreDirection: "higher",
  },
  {
    slug: "enneagram-test",
    title: "Enneagram Test",
    metaTitle: "Enneagram Test — Free Online 9 Personality Types Quiz",
    shortTitle: "Enneagram",
    category: "Personality",
    icon: "🔯",
    shortDescription: "A short quiz estimating your dominant Enneagram type from the 9 core types.",
    metaDescription:
      "Free online Enneagram Test. Answer quick questions to estimate your dominant type among the 9 core Enneagram personality types.",
    keywords: [
      "enneagram test free",
      "enneagram test online",
      "what enneagram type am i",
      "9 personality types quiz",
    ],
    estTime: "4 min",
    difficulty: "Easy",
    componentKey: "enneagram",
  },
  {
    slug: "love-language-test",
    title: "Love Language Test",
    metaTitle: "Love Language Test — Free Online 5 Love Languages Quiz",
    shortTitle: "Love Language",
    category: "Personality",
    icon: "💌",
    shortDescription: "Discover how you prefer to give and receive love across 5 categories.",
    metaDescription:
      "Free online Love Language Test. Answer quick questions to find out which of the 5 love languages matters most to you in relationships.",
    keywords: [
      "love language test free",
      "5 love languages test",
      "love language quiz",
      "what is my love language",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "love-language",
  },
  {
    slug: "serial-position-test",
    title: "Serial Position Effect Test",
    metaTitle: "Serial Position Effect Test — Free Online Memory Test",
    shortTitle: "Serial Position",
    category: "Memory & Cognition",
    icon: "📃",
    shortDescription: "Study a list of words, then see how well you remember the start, middle, and end.",
    metaDescription:
      "Free online Serial Position Effect Test. Study a word list, then see your personal primacy and recency memory curve — a classic memory science demonstration.",
    keywords: [
      "serial position effect test",
      "primacy recency test online",
      "memory position test free",
      "serial position curve test",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "serial-position",
    scoreDirection: "higher",
  },
  {
    slug: "false-memory-test",
    title: "False Memory Test",
    metaTitle: "False Memory Test — Free Online Memory Illusion (DRM)",
    shortTitle: "False Memory",
    category: "Memory & Cognition",
    icon: "🌀",
    shortDescription: "Study related word lists, then see if you 'remember' a word that was never actually shown.",
    metaDescription:
      "Free online False Memory Test based on the DRM paradigm. Study word lists, then take a recognition test to see if your brain creates a convincing false memory.",
    keywords: [
      "false memory test online",
      "DRM test free",
      "false memory illusion test",
      "memory illusion test online",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "false-memory",
  },
  {
    slug: "barnum-effect-test",
    title: "Barnum Effect Test",
    metaTitle: "Barnum Effect Test — Free Online Forer Effect Demonstration",
    shortTitle: "Barnum Effect",
    category: "Cognitive Biases",
    icon: "🔮",
    shortDescription: "Get a 'personalized' reading, rate how accurate it feels, then see the trick behind it.",
    metaDescription:
      "Free online Barnum Effect Test (Forer Effect). Get a personalized-sounding reading, rate its accuracy, then discover why vague statements feel so personally true.",
    keywords: [
      "barnum effect test",
      "forer effect test online",
      "personality reading accuracy test",
      "cold reading test free",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "barnum-effect",
  },
  {
    slug: "necker-cube-test",
    title: "Necker Cube Test",
    metaTitle: "Necker Cube Test — Free Online Bistable Illusion Test",
    shortTitle: "Necker Cube",
    category: "Perception",
    icon: "🧊",
    shortDescription: "Stare at an ambiguous wireframe cube and click every time your perception of it flips.",
    metaDescription:
      "Free online Necker Cube Test. Watch a classic ambiguous wireframe cube and track how often your perception spontaneously flips between two interpretations.",
    keywords: [
      "necker cube test online",
      "ambiguous figure test",
      "bistable perception test",
      "necker cube illusion",
    ],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "necker-cube",
  },
  {
    slug: "anchoring-bias-test",
    title: "Anchoring Bias Test",
    metaTitle: "Anchoring Bias Test — Free Online Cognitive Bias Test",
    shortTitle: "Anchoring Bias",
    category: "Cognitive Biases",
    icon: "⚓",
    shortDescription: "Answer a few trivia estimates and see how a random starting number quietly pulled your guess.",
    metaDescription:
      "Free online Anchoring Bias Test. Estimate trivia answers after seeing a random anchor number, then see how far your guesses were pulled toward it.",
    keywords: [
      "anchoring bias test online",
      "anchoring effect test",
      "cognitive bias test free",
      "decision bias test online",
    ],
    estTime: "4 min",
    difficulty: "Medium",
    componentKey: "anchoring-bias",
  },
  {
    slug: "levels-of-processing-test",
    title: "Levels of Processing Test",
    metaTitle: "Levels of Processing Test — Free Online Memory Test",
    shortTitle: "Levels of Processing",
    category: "Memory & Cognition",
    icon: "🧠",
    shortDescription: "Judge some words by appearance and others by meaning, then see which ones you remember better.",
    metaDescription:
      "Free online Levels of Processing Test. Compare shallow (visual) and deep (meaning-based) word encoding to see which one gives you better memory recall.",
    keywords: [
      "levels of processing test",
      "deep vs shallow memory test",
      "encoding memory test online",
      "memory processing test free",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "levels-of-processing",
    scoreDirection: "higher",
  },
  {
    slug: "framing-effect-test",
    title: "Framing Effect Test",
    metaTitle: "Framing Effect Test — Free Online Decision Bias Test",
    shortTitle: "Framing Effect",
    category: "Cognitive Biases",
    icon: "🪟",
    shortDescription: "Make a few quick decisions, then see how the way each choice was worded may have swayed you.",
    metaDescription:
      "Free online Framing Effect Test. Make decisions framed as gains or losses, then see how wording alone can shift choices — a classic behavioral economics demonstration.",
    keywords: [
      "framing effect test online",
      "gain loss framing test",
      "decision framing test",
      "cognitive bias test free",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "framing-effect",
  },
  {
    slug: "sunk-cost-test",
    title: "Sunk Cost Fallacy Test",
    metaTitle: "Sunk Cost Fallacy Test — Free Online Decision Bias Test",
    shortTitle: "Sunk Cost Fallacy",
    category: "Cognitive Biases",
    icon: "💸",
    shortDescription: "Work through 8 everyday scenarios and see how often already-spent costs sway your choices.",
    metaDescription:
      "Free online Sunk Cost Fallacy Test. Work through 8 everyday scenarios to see how often you let money, time, or effort already spent influence a decision it shouldn't.",
    keywords: [
      "sunk cost fallacy test",
      "sunk cost test online",
      "decision making bias test",
      "escalation of commitment test",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "sunk-cost",
    scoreDirection: "lower",
  },
  {
    slug: "ebbinghaus-illusion-test",
    title: "Ebbinghaus Illusion Test",
    metaTitle: "Ebbinghaus Illusion Test — Free Online Size Perception Test",
    shortTitle: "Ebbinghaus Illusion",
    category: "Perception",
    icon: "⭕",
    shortDescription: "Adjust a circle to match another — then see how much the surrounding circles fooled your eyes.",
    metaDescription:
      "Free online Ebbinghaus Illusion Test (Titchener circles). Match two center circles by eye while surrounding circles distort your sense of their size.",
    keywords: [
      "ebbinghaus illusion test",
      "titchener circles test online",
      "size perception illusion test",
      "optical illusion test free",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "ebbinghaus-illusion",
  },
  {
    slug: "semantic-priming-test",
    title: "Semantic Priming Test",
    metaTitle: "Semantic Priming Test — Free Online Word Association Test",
    shortTitle: "Semantic Priming",
    category: "Focus & Attention",
    icon: "💭",
    shortDescription: "Decide if each string is a real word — a related word shown just before may quietly speed you up.",
    metaDescription:
      "Free online Semantic Priming Test (lexical decision task). See how a related word flashed just before a target speeds up your word recognition.",
    keywords: [
      "semantic priming test online",
      "lexical decision task test",
      "word association speed test",
      "priming effect test free",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "semantic-priming",
  },
  {
    slug: "von-restorff-effect-test",
    title: "Von Restorff Effect Test",
    metaTitle: "Von Restorff Effect Test — Free Online Isolation Effect Test",
    shortTitle: "Von Restorff Effect",
    category: "Memory & Cognition",
    icon: "✨",
    shortDescription: "Study a list of words with one that visually stands out, then see how much better you remember it.",
    metaDescription:
      "Free online Von Restorff Effect Test (isolation effect). Study a word list with one visually distinctive item and see how much it boosts your recall.",
    keywords: [
      "von restorff effect test",
      "isolation effect test online",
      "memory distinctiveness test",
      "free memory test online",
    ],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "von-restorff",
  },
  {
    slug: "conjunction-fallacy-test",
    title: "Conjunction Fallacy Test",
    metaTitle: "Conjunction Fallacy Test — Free Online Logic Bias Test",
    shortTitle: "Conjunction Fallacy",
    category: "Cognitive Biases",
    icon: "🧮",
    shortDescription: "Judge 6 short scenarios and see if a vivid story tricks you into breaking a basic rule of probability.",
    metaDescription:
      "Free online Conjunction Fallacy Test, based on the famous 'Linda problem.' See how a compelling story can make an impossible probability feel likely.",
    keywords: [
      "conjunction fallacy test",
      "linda problem test online",
      "probability bias test",
      "cognitive bias test free",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "conjunction-fallacy",
    scoreDirection: "lower",
  },
  {
    slug: "halo-effect-test",
    title: "Halo Effect Test",
    metaTitle: "Halo Effect Test — Free Online Perception Bias Test",
    shortTitle: "Halo Effect",
    category: "Cognitive Biases",
    icon: "😇",
    shortDescription: "Meet 4 strangers and rate traits you have zero information about, then see how one detail secretly swayed you.",
    metaDescription:
      "Free online Halo Effect Test. Rate 4 fictional people on unrelated traits and see your personal Halo Gap — how much a single detail quietly shapes your whole impression.",
    keywords: [
      "halo effect test online",
      "halo effect demonstration",
      "perception bias test free",
      "cognitive bias test online",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "halo-effect",
  },
  {
    slug: "gamblers-fallacy-test",
    title: "Gambler's Fallacy Test",
    metaTitle: "Gambler's Fallacy Test — Free Online Probability Bias Test",
    shortTitle: "Gambler's Fallacy",
    category: "Cognitive Biases",
    icon: "🎲",
    shortDescription: "After a streak of coin flips, guess what comes next — and see if a 'hot streak' feeling fools your logic.",
    metaDescription:
      "Free online Gambler's Fallacy Test. After seeing coin flip streaks, guess what comes next and see whether you fall for the illusion that random events even out.",
    keywords: [
      "gambler's fallacy test",
      "gamblers fallacy test online",
      "probability bias test free",
      "coin flip fallacy test",
    ],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "gamblers-fallacy",
    scoreDirection: "higher",
  },
  {
    slug: "iowa-gambling-task",
    title: "Iowa Gambling Task",
    metaTitle: "Iowa Gambling Task — Free Online Decision-Making Test",
    shortTitle: "Iowa Gambling Task",
    category: "Cognitive Biases",
    icon: "🎰",
    shortDescription: "Draw cards from 4 decks to earn money — some decks feel more exciting but quietly lose you money over time.",
    metaDescription:
      "Free online Iowa Gambling Task. Draw cards from 4 decks with hidden reward and penalty patterns to see how well you learn to avoid the risky decks.",
    keywords: [
      "iowa gambling task online",
      "iowa gambling task free",
      "decision making test online",
      "risk learning test free",
    ],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "iowa-gambling",
    scoreDirection: "higher",
  },
  {
    slug: "availability-heuristic-test",
    title: "Availability Heuristic Test",
    metaTitle: "Availability Heuristic Test — Free Online Judgment Bias Test",
    shortTitle: "Availability Heuristic",
    category: "Cognitive Biases",
    icon: "📰",
    shortDescription: "Guess which of 12 pairs of things is actually more common — the more memorable answer isn't always the right one.",
    metaDescription:
      "Free online Availability Heuristic Test. Judge which of 12 pairs is more common and see how memorable, vivid examples can distort your sense of frequency.",
    keywords: [
      "availability heuristic test",
      "availability bias test online",
      "judgment bias test free",
      "cognitive bias test online",
    ],
    estTime: "3 min",
    difficulty: "Easy",
    componentKey: "availability-heuristic",
    scoreDirection: "higher",
  },
];

export const categories: TestCategory[] = [
  "Perception",
  "Vision",
  "Reaction & Speed",
  "Memory & Cognition",
  "Hearing",
  "Math & Logic",
  "Focus & Attention",
  "Personality",
  "IQ & Logic",
  "Cognitive Biases",
];

export const comingSoonCategories: { name: string; examples: string[] }[] = [
  { name: "Motor Skills", examples: ["Hand-eye coordination", "Typing accuracy test"] },
];

export function getTestBySlug(slug: string): TestDefinition | undefined {
  return tests.find((t) => t.slug === slug);
}

export function getTestsByCategory(category: TestCategory): TestDefinition[] {
  return tests.filter((t) => t.category === category);
}
