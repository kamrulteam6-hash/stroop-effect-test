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
  | "availability-heuristic"
  | "mental-rotation"
  | "stop-signal"
  | "simon-effect"
  | "wcst"
  | "tower-of-hanoi"
  | "choice-reaction-time"
  | "visual-search"
  | "change-blindness";

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
    metaTitle: "Number Memory Test – Free Forward & Backward Digit Span",
    shortTitle: "Number Memory",
    category: "Memory & Cognition",
    icon: "🔢",
    shortDescription: "Memorize an increasingly long string of digits. How many can you hold at once?",
    metaDescription:
      "Take a free Number Memory Test online. Memorize increasingly long digit strings in Forward or Reverse mode and find your personal digit-span limit.",
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
    metaTitle: "Verbal Memory Test – Free Online Word Recognition Test",
    shortTitle: "Verbal Memory",
    category: "Memory & Cognition",
    icon: "📝",
    shortDescription: "Decide whether each word is new or one you've already seen. Survive as long as you can.",
    metaDescription:
      "Take a free Verbal Memory Test online. Decide whether each word is NEW or SEEN, choose 3 or 5 lives, and test continuous word-recognition memory.",
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
    metaTitle: "Sequence Memory Test – Free Spatial Sequence Memory Game",
    shortTitle: "Sequence Memory",
    category: "Memory & Cognition",
    icon: "🧩",
    shortDescription: "Repeat an ever-growing pattern of flashing tiles, chimp-test style.",
    metaDescription:
      "Take a free Sequence Memory Test online. Watch flashing tiles, reproduce them in the same order, and build an ever-longer spatial sequence.",
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
    metaTitle: "Typing Speed Test – Free WPM & Accuracy Test Online",
    shortTitle: "Typing Speed",
    category: "Reaction & Speed",
    icon: "⌨️",
    shortDescription: "Type the given passage as fast and accurately as you can. Get your live WPM.",
    metaDescription:
      "Take a free typing speed test online. Choose a passage or 60-second sprint and measure WPM, raw WPM, accuracy, and typing consistency.",
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
    metaTitle: "Visual Memory Test – Free Online Spatial Pattern Memory Test",
    shortTitle: "Visual Memory",
    category: "Memory & Cognition",
    icon: "🖼️",
    shortDescription: "Remember which tiles on a grid lit up, then click them back in any order.",
    metaDescription:
      "Take a free Visual Memory Test online. Memorize highlighted tiles on a 5×5 or 6×6 grid, then reproduce the full spatial pattern in any order.",
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
    metaTitle: "Hearing Range Test – Free Online Frequency Test",
    shortTitle: "Hearing Range",
    category: "Hearing",
    icon: "🎧",
    shortDescription: "Find the highest and lowest frequencies you can hear, in Hz. Headphones recommended.",
    metaDescription:
      "Take a free hearing range test online and find the highest and lowest frequencies you can detect. Test both ears or each ear separately with headphones.",
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
    metaTitle: "Mental Math Speed Test – Free Online Arithmetic Test",
    shortTitle: "Mental Math",
    category: "Math & Logic",
    icon: "➗",
    shortDescription: "Solve as many quick arithmetic problems as you can before time runs out.",
    metaDescription:
      "Take a free mental math speed test online. Solve addition, subtraction, multiplication, or mixed arithmetic in 30, 60, or 120 seconds and see your score.",
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
    metaTitle: "Color Perception Test – Free Shade Discrimination Test",
    shortTitle: "Color Perception",
    category: "Perception",
    icon: "🌈",
    shortDescription: "Arrange shades of the same hue in the correct order to test your color discrimination.",
    metaDescription:
      "Take a free color perception test online. Arrange shades from lightest to darkest and test how accurately you distinguish subtle differences in color lightness.",
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
    metaTitle: "Schulte Table Test – Free Online 5×5 Attention Grid",
    shortTitle: "Schulte Table",
    category: "Focus & Attention",
    icon: "🔢",
    shortDescription: "Click the numbers 1 through 25 in order, as fast as you can, using peripheral vision.",
    metaDescription:
      "Take a free Schulte Table test online. Find shuffled numbers in order on 4×4, 5×5, or 6×6 grids and measure visual search speed, focus, and errors.",
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
    metaTitle: "Astigmatism Test Online – Free Eye Self-Check",
    shortTitle: "Astigmatism",
    category: "Vision",
    icon: "👁️",
    shortDescription: "A quick radial-line self-check for possible signs of astigmatism.",
    metaDescription:
      "Take a free online astigmatism test using a radial clock-dial chart. Check each eye separately to see whether some lines look darker, sharper, or blurrier.",
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
    metaTitle: "Trail Making Test Online – Free TMT Part A & Part B",
    shortTitle: "Trail Making",
    category: "Focus & Attention",
    icon: "🔗",
    shortDescription: "Connect the dots in order — numbers only, or alternating numbers and letters.",
    metaDescription:
      "Take a free Trail Making Test online. Try TMT Part A with numbers or Part B with alternating numbers and letters to test visual search and task switching.",
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
    metaTitle: "Pitch Discrimination Test – Free Online Tone Deaf Test",
    shortTitle: "Pitch Discrimination",
    category: "Hearing",
    icon: "🎵",
    shortDescription: "Two tones play — can you tell which is higher? The gap narrows as you improve.",
    metaDescription:
      "Take a free pitch discrimination test online. Hear two tones, choose whether the second is higher or lower, and find the smallest pitch gap you can identify.",
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
    metaTitle: "Color Memory Game – Free Online Sequence Memory Test",
    shortTitle: "Color Memory",
    category: "Memory & Cognition",
    icon: "🔴",
    shortDescription: "Watch the color and sound pattern grow, then repeat it back from memory.",
    metaDescription:
      "Play a free color memory game online. Watch the color and sound sequence, repeat it in order, and see how long a pattern you can remember.",
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
    metaTitle: "Rhythm Tapping Test – Free Online Beat Timing Test",
    shortTitle: "Rhythm Tapping",
    category: "Reaction & Speed",
    icon: "🥁",
    shortDescription: "Tap along to a steady beat and see how close to perfect timing you can get.",
    metaDescription:
      "Take a free rhythm tapping test online. Tap with a 60, 90, or 120 BPM metronome and measure how closely your taps match the beat in milliseconds.",
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
    metaTitle: "N-Back Test Online – Free Working Memory Test",
    shortTitle: "N-Back",
    category: "Memory & Cognition",
    icon: "🧠",
    shortDescription: "Click when the current tile matches the one from N steps earlier. A real working-memory workout.",
    metaDescription:
      "Take a free N-Back test online. Choose 1-Back, 2-Back, or 3-Back and test how accurately you can update and compare information in working memory.",
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
    metaTitle: "Blind Spot Test – Find Your Eye's Natural Blind Spot Online",
    shortTitle: "Blind Spot",
    category: "Vision",
    icon: "⚫",
    shortDescription: "An interactive version of the classic demonstration — find the blind spot in each eye.",
    metaDescription:
      "Take a free blind spot test online. Cover one eye, focus on the cross, move the dot, and discover the natural blind spot created by your optic nerve.",
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
    metaTitle: "Multiple Object Tracking Test – Free Online MOT Test",
    shortTitle: "Object Tracking",
    category: "Focus & Attention",
    icon: "🔵",
    shortDescription: "Track the highlighted dots as they move and scatter among identical distractors.",
    metaDescription:
      "Take a free Multiple Object Tracking Test online. Track 2, 3, or 4 moving targets among identical distractors and test your dynamic visual attention.",
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
    metaTitle: "Big Five Personality Test – Free OCEAN Test Online",
    shortTitle: "Big Five",
    category: "Personality",
    icon: "🌟",
    shortDescription: "A short, free version of the most scientifically supported personality model in psychology.",
    metaDescription:
      "Take a free Big Five personality test online. Explore your Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism scores in minutes.",
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
    metaTitle: "Emotional Intelligence Test – Free EQ Test Online",
    shortTitle: "EQ Test",
    category: "Personality",
    icon: "💬",
    shortDescription: "A quick self-assessment of your emotional awareness, regulation, and social skills.",
    metaDescription:
      "Take a free Emotional Intelligence Test online. Answer 20 questions about emotional awareness, regulation, social awareness, and relationship management.",
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
    metaTitle: "Peripheral Vision Test – Free Online Side Vision Check",
    shortTitle: "Peripheral Vision",
    category: "Vision",
    icon: "👀",
    shortDescription: "Keep your eyes on the center and catch flashes appearing in your peripheral vision.",
    metaDescription:
      "Take a free peripheral vision test online. Keep your eyes on the center, detect brief flashes around the screen, and compare near and far detection.",
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
    metaTitle: "Visual Illusion Test – Müller-Lyer Optical Illusion Online",
    shortTitle: "Visual Illusion",
    category: "Perception",
    icon: "🔀",
    shortDescription: "Adjust a line until it looks equal to another — then see how much the illusion fooled you.",
    metaDescription:
      "Take a free Müller-Lyer visual illusion test online. Adjust one line until both look equal, then see how much surrounding arrow fins changed your size perception.",
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
    metaTitle: "Symbol Digit Modalities Test Online – Free SDMT-Style Test",
    shortTitle: "Symbol Digit",
    category: "Focus & Attention",
    icon: "🔣",
    shortDescription: "Match each symbol to its digit using the key, as fast as you can, for 90 seconds.",
    metaDescription:
      "Take a free Symbol Digit Modalities Test online. Match symbols to digits using a key for 90 seconds and measure processing speed and response accuracy.",
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
    metaTitle: "Pattern IQ Test – Free Online Matrix Reasoning Test",
    shortTitle: "Pattern IQ",
    category: "IQ & Logic",
    icon: "🧩",
    shortDescription: "Spot the rule in a sequence of shapes and pick what comes next.",
    metaDescription:
      "Take a free Pattern IQ test online. Solve 8 visual matrix puzzles by finding row and column rules, then see how many abstract patterns you complete correctly.",
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
    metaTitle: "Finger Tapping Test – Free Online Motor Speed Test",
    shortTitle: "Finger Tapping",
    category: "Reaction & Speed",
    icon: "👆",
    shortDescription: "Tap as fast as you can for 10 seconds with each hand and compare the results.",
    metaDescription:
      "Take a free finger tapping test online. Tap for 10 seconds with your dominant and non-dominant hands and compare tapping speed between hands.",
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
    metaTitle: "Ruler Drop Reaction Test – Free Online Reflex Test",
    shortTitle: "Ruler Drop",
    category: "Reaction & Speed",
    icon: "📏",
    shortDescription: "The classic ruler-drop reflex trick, digitized — catch the falling ruler as fast as you can.",
    metaDescription:
      "Take a free ruler drop reaction test online. Catch the falling ruler, measure your reaction time in milliseconds, and see the equivalent fall distance.",
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
    metaTitle: "Flanker Test Online – Free Eriksen Attention Test",
    shortTitle: "Flanker Test",
    category: "Focus & Attention",
    icon: "➡️",
    shortDescription: "Identify the direction of the center arrow while ignoring the arrows around it.",
    metaDescription:
      "Take a free Eriksen Flanker Test online. Respond to the center arrow, ignore surrounding arrows, and compare congruent vs. incongruent reaction times.",
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
    metaTitle: "Memory Match Game – Free Online Matching Pairs Game",
    shortTitle: "Memory Match",
    category: "Memory & Cognition",
    icon: "🃏",
    shortDescription: "Flip cards to find matching pairs in as few moves as possible.",
    metaDescription:
      "Play a free Memory Match game online. Flip cards, remember their locations, match every pair, and try to clear 12 or 16 cards in fewer moves.",
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
    metaTitle: "Pop-Up Target Test – Free Reaction & Hand-Eye Test",
    shortTitle: "Pop-Up Target",
    category: "Reaction & Speed",
    icon: "🎯",
    shortDescription: "Targets pop up at random spots — click as many as you can before time runs out.",
    metaDescription:
      "Take a free Pop-Up Target Test online. Click targets appearing across a 3×3 grid for 30 seconds and measure hits, misses, and accuracy.",
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
    metaTitle: "Vocabulary Size Test – How Many English Words Do You Know?",
    shortTitle: "Vocabulary Size",
    category: "Memory & Cognition",
    icon: "📚",
    shortDescription: "Mark which words you actually know to get an estimate of your vocabulary size.",
    metaDescription:
      "Take a free vocabulary size test online. Mark the English words you genuinely know, avoid realistic fake words, and get an estimated receptive vocabulary size.",
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
    metaTitle: "Handedness Test – Left, Right or Mixed-Handed Quiz",
    shortTitle: "Handedness",
    category: "Personality",
    icon: "✋",
    shortDescription: "A short quiz measuring how strongly you favor your dominant hand across everyday tasks.",
    metaDescription:
      "Take a free handedness test online. Answer 10 everyday hand-preference questions and see your Laterality Quotient from strongly left to strongly right.",
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
    metaTitle: "Personality Type Test – Free 16 Type & 4-Letter Quiz",
    shortTitle: "Personality Type",
    category: "Personality",
    icon: "🧭",
    shortDescription: "A short quiz sorting your preferences into a 4-letter personality type.",
    metaDescription:
      "Take a free personality type test online. Answer 24 questions and explore your preferences across E–I, S–N, T–F, and J–P to get a 4-letter type.",
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
    metaTitle: "Risk-Taking Test – Free Balloon Risk Task Online",
    shortTitle: "Risk-Taking",
    category: "Personality",
    icon: "🎈",
    shortDescription: "Pump up a virtual balloon for points — but don't let it pop before you cash out.",
    metaDescription:
      "Take a free risk-taking test based on the Balloon Analogue Risk Task. Pump 10 virtual balloons, cash out before they pop, and explore your risk decisions.",
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
    metaTitle: "Enneagram Test – Free 9 Personality Types Quiz",
    shortTitle: "Enneagram",
    category: "Personality",
    icon: "🔯",
    shortDescription: "A short quiz estimating your dominant Enneagram type from the 9 core types.",
    metaDescription:
      "Take a free Enneagram test online. Answer 27 questions and see how strongly you match each of the 9 Enneagram personality types.",
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
    metaTitle: "Love Language Test – Free 5 Love Languages Quiz",
    shortTitle: "Love Language",
    category: "Personality",
    icon: "💌",
    shortDescription: "Discover how you prefer to give and receive love across 5 categories.",
    metaDescription:
      "Take a free Love Language Test online. Answer 20 questions and explore Words of Affirmation, Quality Time, Touch, Acts of Service, and Gifts.",
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
    metaTitle: "Serial Position Effect Test – Primacy & Recency Memory Test",
    shortTitle: "Serial Position",
    category: "Memory & Cognition",
    icon: "📃",
    shortDescription: "Study a list of words, then see how well you remember the start, middle, and end.",
    metaDescription:
      "Take a free Serial Position Effect Test online. Study 15 words, complete a recognition test, and compare memory for the beginning, middle, and end.",
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
    metaTitle: "False Memory Test – Free DRM Memory Illusion Online",
    shortTitle: "False Memory",
    category: "Memory & Cognition",
    icon: "🌀",
    shortDescription: "Study related word lists, then see if you 'remember' a word that was never actually shown.",
    metaDescription:
      "Take a free false memory test based on the DRM paradigm. Study related word lists and see if you recognize critical lure words that were never shown.",
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
    metaTitle: "Barnum Effect Test – Free Forer Effect Personality Demo",
    shortTitle: "Barnum Effect",
    category: "Cognitive Biases",
    icon: "🔮",
    shortDescription: "Get a 'personalized' reading, rate how accurate it feels, then see the trick behind it.",
    metaDescription:
      "Take a free Barnum Effect Test online. Get a “personalized” personality reading, rate its accuracy, then reveal the Forer effect behind it.",
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
    metaTitle: "Necker Cube Test – Free Bistable Perception Illusion",
    shortTitle: "Necker Cube",
    category: "Perception",
    icon: "🧊",
    shortDescription: "Stare at an ambiguous wireframe cube and click every time your perception of it flips.",
    metaDescription:
      "Take a free Necker Cube Test online. Watch the ambiguous cube for 30 seconds, click whenever its 3D orientation flips, and see your reversal rate.",
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
    metaTitle: "Anchoring Bias Test – Free Cognitive Bias Experiment",
    shortTitle: "Anchoring Bias",
    category: "Cognitive Biases",
    icon: "⚓",
    shortDescription: "Answer a few trivia estimates and see how a random starting number quietly pulled your guess.",
    metaDescription:
      "Take a free Anchoring Bias Test online. Answer 5 trivia estimates after seeing high or low reference numbers and explore how anchors can influence judgment.",
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
    metaTitle: "Levels of Processing Test – Deep vs. Shallow Memory",
    shortTitle: "Levels of Processing",
    category: "Memory & Cognition",
    icon: "🧠",
    shortDescription: "Judge some words by appearance and others by meaning, then see which ones you remember better.",
    metaDescription:
      "Take a free Levels of Processing Test online. Judge words by appearance or meaning, then compare recognition for shallow vs. semantic encoding.",
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
    metaTitle: "Framing Effect Test – Free Cognitive Bias Experiment",
    shortTitle: "Framing Effect",
    category: "Cognitive Biases",
    icon: "🪟",
    shortDescription: "Make a few quick decisions, then see how the way each choice was worded may have swayed you.",
    metaDescription:
      "Take a free Framing Effect Test online. Make 5 gain- or loss-framed decisions and see how equivalent wording can change risk preferences.",
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
    metaTitle: "Sunk Cost Fallacy Test – Free Decision Bias Quiz",
    shortTitle: "Sunk Cost Fallacy",
    category: "Cognitive Biases",
    icon: "💸",
    shortDescription: "Work through 8 everyday scenarios and see how often already-spent costs sway your choices.",
    metaDescription:
      "Take a free Sunk Cost Fallacy Test online. Work through 8 money, time, and effort scenarios and see when past investments influence future choices.",
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
    metaTitle: "Ebbinghaus Illusion Test – Titchener Circles Online",
    shortTitle: "Ebbinghaus Illusion",
    category: "Perception",
    icon: "⭕",
    shortDescription: "Adjust a circle to match another — then see how much the surrounding circles fooled your eyes.",
    metaDescription:
      "Take a free Ebbinghaus Illusion Test online. Adjust one center circle until it matches the other and measure how surrounding circles influence perceived size.",
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
    metaTitle: "Semantic Priming Test – Free Lexical Decision Experiment",
    shortTitle: "Semantic Priming",
    category: "Focus & Attention",
    icon: "💭",
    shortDescription: "Decide if each string is a real word — a related word shown just before may quietly speed you up.",
    metaDescription:
      "Take a free Semantic Priming Test online. Decide word vs. non-word and compare reaction times after related and unrelated prime words.",
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
    metaTitle: "Von Restorff Effect Test – Free Isolation Effect Memory Test",
    shortTitle: "Von Restorff Effect",
    category: "Memory & Cognition",
    icon: "✨",
    shortDescription: "Study a list of words with one that visually stands out, then see how much better you remember it.",
    metaDescription:
      "Take a free Von Restorff Effect Test online. Study 13 words with one distinctive item, then see whether the isolated word stands out in memory.",
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
    metaTitle: "Conjunction Fallacy Test – Free Linda Problem Logic Test",
    shortTitle: "Conjunction Fallacy",
    category: "Cognitive Biases",
    icon: "🧮",
    shortDescription: "Judge 6 short scenarios and see if a vivid story tricks you into breaking a basic rule of probability.",
    metaDescription:
      "Take a free Conjunction Fallacy Test online. Judge 6 probability scenarios and see whether a vivid description makes a combined outcome seem more likely.",
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
    metaTitle: "Halo Effect Test – Free Online Impression Bias Test",
    shortTitle: "Halo Effect",
    category: "Cognitive Biases",
    icon: "😇",
    shortDescription: "Meet 4 strangers and rate traits you have zero information about, then see how one detail secretly swayed you.",
    metaDescription:
      "Take a free Halo Effect Test online. Rate 4 fictional people on unrelated traits and see whether one positive or negative detail shifts your overall impression.",
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
    metaTitle: "Gambler's Fallacy Test – Free Coin Toss Probability Test",
    shortTitle: "Gambler's Fallacy",
    category: "Cognitive Biases",
    icon: "🎲",
    shortDescription: "After a streak of coin flips, guess what comes next — and see if a 'hot streak' feeling fools your logic.",
    metaDescription:
      "Take a free Gambler's Fallacy Test online. Judge 4 coin-flip streaks and see whether you expect a fair independent process to “correct” itself.",
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
    metaTitle: "Iowa Gambling Task – Free Online Decision-Making Test",
    shortTitle: "Iowa Gambling Task",
    category: "Cognitive Biases",
    icon: "🎰",
    shortDescription: "Draw cards from 4 decks to earn money — some decks feel more exciting but quietly lose you money over time.",
    metaDescription:
      "Try a free Iowa Gambling Task online. Draw 40 cards from four hidden-risk decks and see how your choices change as you learn from rewards and penalties.",
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
    metaTitle: "Availability Heuristic Test – Free Cognitive Bias Quiz",
    shortTitle: "Availability Heuristic",
    category: "Cognitive Biases",
    icon: "📰",
    shortDescription: "Guess which of 12 pairs of things is actually more common — the more memorable answer isn't always the right one.",
    metaDescription:
      "Take a free Availability Heuristic Test online. Answer 12 frequency comparisons and see when memorable examples feel more common than the actual numbers.",
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
  {
    slug: "mental-rotation-test",
    title: "Mental Rotation Test",
    metaTitle: "Mental Rotation Test — Free Online Spatial Reasoning Test",
    shortTitle: "Mental Rotation",
    category: "IQ & Logic",
    icon: "🔄",
    shortDescription: "Decide whether a rotated shape is normal or mirrored, as fast and accurately as you can.",
    metaDescription:
      "Free online Mental Rotation Test. Judge whether rotated shapes are normal or mirrored across 10 rounds and see your spatial reasoning accuracy.",
    keywords: ["mental rotation test", "spatial reasoning test online", "mirror image test", "cognitive test free"],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "mental-rotation",
    scoreDirection: "higher",
  },
  {
    slug: "stop-signal-test",
    title: "Stop Signal Test",
    metaTitle: "Stop Signal Test — Free Online Response Inhibition Test",
    shortTitle: "Stop Signal",
    category: "Focus & Attention",
    icon: "🛑",
    shortDescription: "Respond to arrow direction quickly — but withhold your response when a stop signal appears.",
    metaDescription:
      "Free online Stop Signal Test. Respond to arrows quickly, then try to withhold your response when a stop signal appears, to measure response inhibition.",
    keywords: ["stop signal test", "response inhibition test", "impulse control test online", "go no go test"],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "stop-signal",
    scoreDirection: "higher",
  },
  {
    slug: "simon-effect-test",
    title: "Simon Effect Test",
    metaTitle: "Simon Effect Test — Free Online Stimulus-Response Test",
    shortTitle: "Simon Effect",
    category: "Focus & Attention",
    icon: "↔️",
    shortDescription: "Respond to color, not position, and see how much location still slows you down.",
    metaDescription:
      "Free online Simon Effect Test. Respond to color while ignoring position across 24 rounds and see how much irrelevant spatial location slows you down.",
    keywords: ["simon effect test", "simon task online", "stimulus response compatibility test", "cognitive bias test"],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "simon-effect",
    scoreDirection: "lower",
  },
  {
    slug: "wisconsin-card-sorting-test",
    title: "Wisconsin Card Sorting Test",
    metaTitle: "Wisconsin Card Sorting Test — Free Online WCST",
    shortTitle: "Card Sorting",
    category: "IQ & Logic",
    icon: "🃏",
    shortDescription: "Sort cards by a hidden, secretly changing rule and see how quickly you adapt.",
    metaDescription:
      "Free online Wisconsin Card Sorting Test (WCST). Sort cards by a hidden rule that secretly changes and see how well you adapt to the new pattern.",
    keywords: ["wisconsin card sorting test", "wcst online", "cognitive flexibility test", "card sorting test free"],
    estTime: "3 min",
    difficulty: "Hard",
    componentKey: "wcst",
    scoreDirection: "higher",
  },
  {
    slug: "tower-of-hanoi-test",
    title: "Tower of Hanoi Test",
    metaTitle: "Tower of Hanoi Test — Free Online Puzzle Game",
    shortTitle: "Tower of Hanoi",
    category: "IQ & Logic",
    icon: "🗼",
    shortDescription: "Move all 4 disks to the last peg in as few moves as possible, without stacking big on small.",
    metaDescription:
      "Free online Tower of Hanoi Test. Move 4 disks between 3 pegs in as few moves as possible and compare your result to the 15-move optimal solution.",
    keywords: ["tower of hanoi online", "tower of hanoi game", "planning puzzle test", "logic puzzle free"],
    estTime: "3 min",
    difficulty: "Medium",
    componentKey: "tower-of-hanoi",
    scoreDirection: "lower",
  },
  {
    slug: "choice-reaction-time-test",
    title: "Choice Reaction Time Test",
    metaTitle: "Choice Reaction Time Test — Free Online 4-Choice Test",
    shortTitle: "Choice Reaction",
    category: "Reaction & Speed",
    icon: "🎯",
    shortDescription: "React to one of four colors as fast as you can with the matching key or button.",
    metaDescription:
      "Free online Choice Reaction Time Test. React to one of four colors as fast as you can across 15 rounds and see your average choice reaction time.",
    keywords: ["choice reaction time test", "4 choice reaction test", "reaction time test online", "cognitive speed test"],
    estTime: "1 min",
    difficulty: "Easy",
    componentKey: "choice-reaction-time",
    scoreDirection: "lower",
  },
  {
    slug: "visual-search-test",
    title: "Visual Search Test",
    metaTitle: "Visual Search Test — Free Online Target Detection Test",
    shortTitle: "Visual Search",
    category: "Focus & Attention",
    icon: "🔍",
    shortDescription: "Find the odd-colored circle among distractors as fast as you can.",
    metaDescription:
      "Free online Visual Search Test. Find the target circle among distractors as fast as you can across rounds with different set sizes.",
    keywords: ["visual search test", "target detection test online", "attention test free", "find the odd one out"],
    estTime: "2 min",
    difficulty: "Easy",
    componentKey: "visual-search",
    scoreDirection: "lower",
  },
  {
    slug: "change-blindness-test",
    title: "Change Blindness Test",
    metaTitle: "Change Blindness Test — Free Online Perception Test",
    shortTitle: "Change Blindness",
    category: "Perception",
    icon: "🔲",
    shortDescription: "Spot the one square that changes color between two flickering grids.",
    metaDescription:
      "Free online Change Blindness Test. Spot the square that changes color between two flickering grids and see how fast you detect the change.",
    keywords: ["change blindness test", "change detection test online", "perception test free", "spot the difference test"],
    estTime: "2 min",
    difficulty: "Medium",
    componentKey: "change-blindness",
    scoreDirection: "lower",
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
