export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test/stroop-effect-test", label: "Stroop Test" },
  { href: "/tests", label: "All Tests" },
];

export const footerLinks: Record<string, { href: string; label: string }[]> = {
  "Popular Tests": [
    { href: "/test/stroop-effect-test", label: "Stroop Effect Test" },
    { href: "/test/reaction-time-test", label: "Reaction Time Test" },
    { href: "/test/colorblind-test-online", label: "Color Blind Test" },
    { href: "/test/typing-speed-test", label: "Typing Speed Test" },
  ],
  "Memory & Cognition": [
    { href: "/test/number-memory-test", label: "Number Memory Test" },
    { href: "/test/verbal-memory-test", label: "Verbal Memory Test" },
    { href: "/test/sequence-memory-test", label: "Sequence Memory Test" },
    { href: "/test/visual-memory-test", label: "Visual Memory Test" },
  ],
  "More Tests": [
    { href: "/test/aim-trainer-test", label: "Aim Trainer Test" },
    { href: "/test/click-speed-test", label: "Click Speed Test" },
    { href: "/test/hearing-range-test", label: "Hearing Range Test" },
    { href: "/test/mental-math-test", label: "Mental Math Test" },
  ],
  "New Tests": [
    { href: "/test/schulte-table-test", label: "Schulte Table Test" },
    { href: "/test/astigmatism-test", label: "Astigmatism Test" },
    { href: "/test/trail-making-test", label: "Trail Making Test" },
    { href: "/test/pitch-discrimination-test", label: "Pitch Discrimination Test" },
    { href: "/test/color-memory-game", label: "Color Memory Game" },
    { href: "/test/rhythm-tapping-test", label: "Rhythm Tapping Test" },
  ],
  Explore: [{ href: "/tests", label: "Browse All Tests" }],
};
