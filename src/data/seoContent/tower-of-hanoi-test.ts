import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you plan several moves ahead without trapping yourself? Take this free **Tower of Hanoi Test** to solve the classic three-peg planning puzzle. Move the full stack from the starting peg to the target peg while following two rules: move only one disk at a time, and never place a larger disk on top of a smaller disk.",
    },
    { type: "paragraph", text: "Your result can show total moves, time, rule violations, and how close you came to the mathematically optimal solution." },
    { type: "heading", id: "how-to-take", text: "How to Take the Tower of Hanoi Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose the number of disks.",
        "Press Start Test.",
        "Move one disk at a time.",
        "Place each disk on an empty peg or on a larger disk.",
        "Work toward moving the entire tower to the target peg.",
        "Avoid unnecessary moves.",
        "Complete the puzzle.",
        "Compare your move count with the minimum possible number.",
      ],
    },
    { type: "paragraph", text: "For a fair first attempt, solve the puzzle without looking up the recursive strategy." },
    { type: "heading", text: "What Is the Tower of Hanoi?" },
    {
      type: "paragraph",
      text: "The Tower of Hanoi is a classic mathematical puzzle generally credited to French mathematician Édouard Lucas, who introduced it in the 19th century. The puzzle contains three pegs, several disks of different sizes, and one starting stack arranged largest to smallest. The goal is to transfer the entire stack to another peg without ever placing a larger disk on a smaller disk.",
    },
    {
      type: "paragraph",
      text: "The rules are simple, but the planning problem becomes increasingly difficult as disks are added. That combination has made the Tower of Hanoi useful in mathematics, computer science, cognitive psychology, and neuropsychological research.",
    },
    { type: "heading", text: "What Is the Minimum Number of Moves?" },
    { type: "paragraph", text: "For the standard three-peg Tower of Hanoi with n disks, the minimum number of moves is 2ⁿ − 1. Examples:" },
    {
      type: "list",
      items: ["3 disks → 7 moves", "4 disks → 15 moves", "5 disks → 31 moves", "6 disks → 63 moves", "7 disks → 127 moves"],
    },
    {
      type: "paragraph",
      text: "Every extra disk approximately doubles the required solution length. This gives the puzzle an unusually clear objective benchmark. If you solve a 4-disk puzzle in 15 legal moves, you reached the optimal solution. If you use 22 moves, you completed the task successfully but took 7 moves more than necessary.",
    },
    { type: "heading", text: "Why the Formula Is 2ⁿ − 1" },
    {
      type: "paragraph",
      text: "To move the largest disk, every smaller disk must first be moved out of its way. For an n-disk puzzle: move the top n−1 disks to the spare peg, move the largest disk once, then move the n−1 disks onto the largest disk. If solving n−1 disks requires the minimum M(n−1) moves, then M(n) = 2M(n−1) + 1. Starting with M(1) = 1, this produces 1, 3, 7, 15, 31, 63... which is 2ⁿ − 1. The optimal structure is recursive.",
    },
    { type: "heading", text: "What Does the Tower of Hanoi Test Measure?" },
    { type: "paragraph", text: "In cognitive research, the Tower of Hanoi has often been used as a planning and executive-function task. Successful performance can involve:" },
    {
      type: "list",
      items: ["planning ahead", "working memory", "rule maintenance", "inhibition of tempting but unhelpful moves", "problem representation", "strategy formation", "monitoring progress", "error correction"],
    },
    {
      type: "paragraph",
      text: "But the puzzle is not a pure measurement of one executive ability. Research comparing Tower tasks shows that performance can reflect several cognitive processes, and even related tasks such as Tower of Hanoi and Tower of London are not perfectly interchangeable. That means one online score should not be converted into a general \"executive function percentage.\"",
    },
    { type: "heading", text: "Why Planning Ahead Matters" },
    {
      type: "paragraph",
      text: "The puzzle punishes locally attractive moves. A move can look useful because it puts one disk closer to the target, but that move may block the larger structure needed later. Strong performance therefore requires thinking beyond \"where should this disk go now?\" and asking \"what configuration do I need before I can move the next large disk?\" This is planning through intermediate goals — the optimal solution repeatedly creates temporary subgoals before making progress toward the final tower.",
    },
    { type: "heading", text: "Tower of Hanoi vs. Tower of London" },
    {
      type: "paragraph",
      text: "These two tests are often grouped together, but they are not the same. Tower of Hanoi uses the classic disk-size rule and a highly structured recursive solution. Tower of London typically uses colored balls or disks and presents multiple start/goal arrangements requiring a limited number of moves. Both can involve planning, but research has found only moderate relationships between their performance measures, which argues against treating them as identical measures of the same executive process.",
    },
    { type: "heading", text: "Minimum Moves vs. Fastest Time" },
    {
      type: "paragraph",
      text: "The best time is not necessarily the best planning performance. Imagine Player A solves the puzzle in 15 optimal moves in 45 seconds, while Player B uses 23 moves in 30 seconds. Player B moved faster but made more unnecessary moves. Which is better depends on what the test emphasizes — for a planning puzzle, solution efficiency deserves more weight than raw mouse speed.",
    },
    { type: "paragraph", text: "Useful results include completion status, moves used, minimum possible moves, extra moves, completion time, and rule errors. A combined score should make its formula transparent." },
    { type: "heading", text: "Move Efficiency" },
    {
      type: "paragraph",
      text: "A useful descriptive metric is minimum moves divided by actual moves, times 100. For a 4-disk puzzle solved in 20 moves, that is 15 ÷ 20 × 100 = 75% move efficiency. This is intuitive, but it is a game metric — not a standardized psychological score. It tells users how close their solution was to the mathematical optimum. It does not mean they have \"75% planning ability.\"",
    },
    { type: "heading", text: "Why More Disks Become Much Harder" },
    {
      type: "paragraph",
      text: "Difficulty does not increase linearly. Adding one disk increases the optimal move count from 15 (4 disks) to 31 (5 disks) to 63 (6 disks) — the solution length grows exponentially. The mental challenge also grows because you must maintain more nested subgoals. A player who solves 3 disks easily may find 6 disks dramatically harder. Scores should therefore be separated by disk count — a 25-move solution on a 4-disk puzzle and a 40-move solution on a 5-disk puzzle cannot be compared directly.",
    },
    { type: "heading", text: "The Recursive Strategy" },
    {
      type: "paragraph",
      text: "The optimal strategy can be expressed recursively. To move n disks from Peg A to Peg C: move n−1 disks from A to B, move the largest disk from A to C, then move n−1 disks from B to C. Each subproblem follows the same structure. This is why the Tower of Hanoi is widely used to teach recursion in computer science. Once you understand the pattern, large puzzles become more systematic — but that also means repeated attempts are not equivalent to the first attempt. After learning the recursive algorithm, you are executing known knowledge rather than discovering a plan from scratch.",
    },
    { type: "heading", text: "What Is a Good Tower of Hanoi Score?" },
    {
      type: "paragraph",
      text: "The mathematically objective part is simple: optimal moves = 2ⁿ − 1. Beyond that, there is no universal online psychological benchmark. A good game performance could reasonably mean the puzzle completed, no illegal moves, close to minimum moves, and efficient completion time. Avoid unsupported claims such as \"under 30 seconds = genius\" or \"6 disks = top 5%\" — those require standardized data from the exact implementation.",
    },
    { type: "heading", text: "Can Tower of Hanoi Diagnose Executive Dysfunction?" },
    {
      type: "paragraph",
      text: "No. Tower tasks have been used in neuropsychological research, but a browser puzzle cannot diagnose ADHD, brain injury, dementia, frontal-lobe impairment, or executive dysfunction. Performance can change because of prior puzzle knowledge, motivation, strategy, device controls, distraction, and mathematical familiarity. Use the page as a planning puzzle and cognitive demonstration.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "Who invented the Tower of Hanoi?", answer: "The puzzle is generally credited to French mathematician Édouard Lucas in the 19th century." },
        { question: "What is the minimum number of moves?", answer: "For n disks, the minimum is 2ⁿ − 1." },
        { question: "What is the minimum for 5 disks?", answer: "31 moves." },
        { question: "Is Tower of Hanoi an executive-function test?", answer: "It has been used in executive-function research, especially for planning, but performance depends on multiple processes and prior strategy knowledge." },
        { question: "Is Tower of Hanoi the same as Tower of London?", answer: "No. They are related planning tasks with different structures and should not be treated as interchangeable." },
        { question: "Is faster always better?", answer: "No. Move efficiency is central. A fast solution with many unnecessary moves may be less optimal than a slower minimum-move solution." },
        { question: "Can this test diagnose a cognitive problem?", answer: "No. It is an online puzzle, not a standardized clinical assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "The puzzle becomes easier when you stop thinking one move at a time. Instead ask: what smaller tower must I move before the next large disk becomes available? That shift — from immediate moves to nested subgoals — is the heart of Tower of Hanoi planning. Solve it once by intuition, then try again and see how close you can get to the mathematical optimum.",
    },
  ],
};
