import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How quickly can you locate one changing feature when two displays repeatedly alternate with a blank screen between them? Take this free **Flicker Change Detection Test**. A controlled visual display alternates between an original version and a slightly modified version, with a blank interval between them. Your job is to locate the changing item.",
    },
    { type: "paragraph", text: "This page uses the laboratory flicker paradigm as a controlled change-detection task. It complements the site's broader [Change Blindness Test](/test/change-blindness-test), which focuses on dramatic changes in natural scenes." },
    { type: "heading", id: "how-to-take", text: "How to Take the Flicker Change Detection Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Fix your attention on the display.",
        "Watch the two versions alternate.",
        "Notice the blank interval between them.",
        "Search for the feature that changes.",
        "Click or select the changing location.",
        "Avoid random clicking.",
        "Continue through changes in color, position, orientation, presence, or identity.",
        "Review detection time, localization accuracy, and performance by change type.",
      ],
    },
    { type: "paragraph", text: "Once you find the change, it may become impossible not to see. That is normal. The difficult part is locating it before your attention is directed to the right place." },
    { type: "heading", text: "What Is the Flicker Paradigm?" },
    {
      type: "paragraph",
      text: "The flicker paradigm is one of the best-known laboratory methods for studying visual change detection. Two displays alternate repeatedly with a brief blank interval inserted between them: original display, blank, changed display, blank, and so on. Ronald Rensink, J. Kevin O'Regan, and James Clark used this method in foundational 1997 work showing that even substantial changes can be difficult to notice when the visual transient caused by the change is masked by a brief interruption.",
    },
    { type: "heading", text: "Why Does the Blank Matter?" },
    {
      type: "paragraph",
      text: "Without an interruption, a changing object produces a local visual transient that can attract attention automatically. Imagine one red square suddenly becomes blue while the rest of the screen remains stable — your visual system receives a strong signal at that location. Insert a blank screen between the two states and the entire display changes at once, so the global interruption competes with or masks the local transient. Now attention must search more deliberately for the changed feature.",
    },
    { type: "heading", text: "Change Detection vs. Change Blindness" },
    {
      type: "paragraph",
      text: "These terms overlap strongly. Change blindness is the phenomenon that a meaningful visual change can go unnoticed. Flicker change detection is one experimental method used to measure that phenomenon. This site keeps both pages distinct by making their experiences different — the Change Blindness Test uses natural photographs and surprising real-world scene changes, focused on \"how did I miss something so obvious?\" This Flicker Change Detection Test uses standardized arrays or tightly controlled displays, focused on localization accuracy, detection latency, change type, set size, and blank duration.",
    },
    { type: "heading", text: "What Counts as a Change?" },
    {
      type: "paragraph",
      text: "Controlled flicker displays can manipulate one feature at a time: color change (a blue object becomes yellow), presence change (an item appears or disappears), position change (an object moves to another location), orientation change (a line or shape rotates), identity change (one symbol becomes another), or size change (an object becomes larger or smaller). These change types may differ in detectability, and a good test should not assume every transformation is equally difficult.",
    },
    { type: "heading", text: "Why Localization Is Better Than \"I Saw a Change\"" },
    {
      type: "paragraph",
      text: "A user may sometimes sense that something changed without knowing where. A response of \"yes, there was a change\" therefore measures detection differently from \"the change occurred here.\" Requiring the user to click the changed object verifies localization, which reduces lucky yes/no guesses and provides a more specific behavioral measure. Recent research has also examined change localization as a useful and reliable outcome for individual differences in change detection.",
    },
    { type: "heading", text: "Detection Time" },
    {
      type: "paragraph",
      text: "In a repeating flicker task, detection time is often the central outcome, measured from the start of the alternating sequence until the user correctly localizes the change. A median across correctly solved trials is useful because a few extremely difficult changes can make the mean very large. The number of alternations before detection can also be reported.",
    },
    { type: "heading", text: "Why Wrong Clicks Matter" },
    {
      type: "paragraph",
      text: "If the user can click every object rapidly with no penalty, localization time loses meaning. A robust design should therefore record incorrect clicks, correct localization, and detection time. Possible scoring approaches include adding a small time penalty for incorrect clicks, allowing only one localization attempt, or reporting wrong clicks separately. The simplest scientific approach is often to show both speed and accuracy instead of hiding them inside one game score.",
    },
    { type: "heading", text: "Set Size" },
    {
      type: "paragraph",
      text: "A controlled display can contain 4, 8, 12, or 20 items. Increasing set size creates more possible locations to compare. Detection time may increase when there are more competing objects, especially when the changing feature does not strongly capture attention. This gives the test a useful manipulation that natural-scene change blindness pages usually cannot control precisely, allowing results to show small-set versus large-set change-detection performance.",
    },
    { type: "heading", text: "Change Salience" },
    {
      type: "paragraph",
      text: "A change is salient when it strongly stands out perceptually — such as black to bright white, a large object disappearing, or vertical to horizontal. Subtle changes may involve similar colors, small orientation shifts, or nearby positions. But salience is not determined by one feature alone — peripheral visibility, grouping, and surrounding items matter too. Difficulty should ideally be calibrated with real performance data rather than guessed only from the size of the change.",
    },
    { type: "heading", text: "Blank Duration" },
    {
      type: "paragraph",
      text: "The blank interval must be long enough to disrupt the local transient but short enough for the two scenes to remain part of one repeated comparison. Different studies use different display and blank durations, and changing the blank duration changes task difficulty. Scores from an 80 ms blank and a 300 ms blank should not automatically be compared — the site keeps timing fixed within a mode and states the timing clearly.",
    },
    { type: "heading", text: "Flicker Change Detection vs. Visual Memory Test" },
    {
      type: "paragraph",
      text: "The [Visual Memory Test](/test/visual-memory-test) briefly shows locations and then asks the user to reproduce them, with a defined encoding phase and recall phase. Flicker change detection repeatedly re-presents both display states — the information remains externally available across cycles. Memory contributes, but the experimental logic is different. The result should therefore be framed as visual change detection rather than how many visual items your memory stores.",
    },
    { type: "heading", text: "Flicker Change Detection vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) presents a target definition and asks users to find it in one stable display. Flicker Change Detection does not tell users exactly what feature to search for — the user must compare two temporal states and discover what changed and where it changed. Visual search is spatial target selection; flicker detection adds cross-time comparison.",
    },
    { type: "heading", text: "What Does the Test Measure?" },
    {
      type: "paragraph",
      text: "Performance can involve visual attention, comparison across time, search strategy, short-term visual retention, change localization, and perceptual discrimination. It does not measure one isolated mental faculty — a slow detection time may reflect a subtle change, peripheral position, inefficient search, distraction, or weak discrimination. One result should not become a general \"visual awareness score.\"",
    },
    { type: "heading", text: "What Is a Good Flicker Change Detection Score?" },
    {
      type: "paragraph",
      text: "There is no universal benchmark. Performance depends heavily on image or array design, set size, change type, blank duration, display duration, screen size, timeout, and localization method. Do not publish generic claims such as \"under 3 seconds = elite attention\" without same-test normative data. A better result compares your change types, set sizes, locations, and personal attempts.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the flicker change-detection paradigm?", answer: "Two versions of a display repeatedly alternate with brief blanks between them while the user searches for a change." },
        { question: "Why is there a blank screen?", answer: "It masks the local visual transient that would normally draw attention directly to the changing object." },
        { question: "Is flicker change detection the same as change blindness?", answer: "The flicker paradigm is one major method for producing and measuring change blindness." },
        { question: "Why make this separate from the site's Change Blindness Test?", answer: "This version can use standardized arrays, controlled set sizes, feature changes, and localization metrics, while the broader Change Blindness Test uses natural scenes." },
        { question: "Does this measure visual memory capacity?", answer: "Not directly. Repeating flicker displays remain externally available, unlike one-shot memory tasks." },
        { question: "Why do I have to click the change?", answer: "Localization verifies that you identified where the change occurred rather than simply sensing that something was different." },
        { question: "Can I compare scores across different images?", answer: "Only cautiously. Change difficulty varies greatly across stimuli." },
      ],
    },
    {
      type: "paragraph",
      text: "The two displays are almost the same. The changing information is repeatedly visible. Yet the blank interval removes the easy signal telling attention where to look. The Flicker Change Detection Test turns that search into measurable data: how accurately, and how quickly, can you locate a change when attention has to discover it?",
    },
  ],
};
