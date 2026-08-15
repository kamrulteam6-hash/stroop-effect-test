import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How many briefly highlighted locations can you remember as one spatial pattern?",
    },
    {
      type: "paragraph",
      text: "Take this free **Visual Memory Test**. A set of tiles lights up briefly on a grid. When they disappear, click every location that was highlighted.",
    },
    {
      type: "paragraph",
      text: "Order does not matter.",
    },
    {
      type: "paragraph",
      text: "Choose:",
    },
    {
      type: "list",
      items: ["**5×5 grid**", "**6×6 Hard grid**", "**3 or 5 lives**"],
    },
    {
      type: "paragraph",
      text: "Each successful level adds another target tile.",
    },
    {
      type: "paragraph",
      text: "Your score is the highest level you reach under this game's rules. It is best described as a spatial-pattern memory score—not a direct measurement of the classic “3–4 object” visual-working-memory limit.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Visual Memory Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 5×5 or 6×6.",
        "Choose 3 or 5 lives.",
        "Press **Start Test**.",
        "Watch the highlighted tiles.",
        "Try to encode the whole pattern.",
        "Wait until the highlights disappear.",
        "Click every location you remember.",
        "Select the targets in any order.",
        "Complete the pattern to advance.",
        "Continue until your lives are gone.",
      ],
    },
    {
      type: "paragraph",
      text: "For personal tracking, keep grid size and lives constant.",
    },
    {
      type: "paragraph",
      text: "A 5-life score and a 3-life score use different stopping rules.",
    },
    {
      type: "heading",
      id: "what-it-measures",
      text: "What Does This Visual Memory Test Measure?",
    },
    {
      type: "paragraph",
      text: "The task primarily challenges **short-term memory for a simultaneous spatial pattern**.",
    },
    {
      type: "paragraph",
      text: "You need to remember:",
    },
    {
      type: "list",
      items: ["which grid positions were active;", "which positions were not;", "and the complete set long enough to reproduce it."],
    },
    {
      type: "paragraph",
      text: "Unlike Sequence Memory, you do not need to retain temporal order.",
    },
    {
      type: "paragraph",
      text: "That makes the task closer to **simultaneous visuospatial pattern memory** than to serial spatial span.",
    },
    {
      type: "paragraph",
      text: "Successful performance can involve:",
    },
    {
      type: "list",
      items: ["visual encoding;", "spatial working memory;", "pattern recognition;", "grouping;", "attention;", "and visuomotor selection."],
    },
    {
      type: "paragraph",
      text: "It should not be reduced to one universal “visual memory capacity” number.",
    },
    {
      type: "heading",
      text: "Visual Memory vs. Spatial Memory",
    },
    {
      type: "paragraph",
      text: "The name **Visual Memory Test** is reasonable because the information is presented visually.",
    },
    {
      type: "paragraph",
      text: "But the content you must remember is mainly **spatial location**.",
    },
    {
      type: "paragraph",
      text: "You are not remembering detailed:",
    },
    {
      type: "list",
      items: ["colors;", "object identities;", "faces;", "shapes;", "textures."],
    },
    {
      type: "paragraph",
      text: "Every target is essentially the same kind of highlighted tile.",
    },
    {
      type: "paragraph",
      text: "What distinguishes targets is **where they appeared**.",
    },
    {
      type: "paragraph",
      text: "So “spatial pattern memory” is a particularly precise secondary keyword and description for this page.",
    },
    {
      type: "heading",
      text: "Why This Is Similar to the Visual Patterns Test",
    },
    {
      type: "paragraph",
      text: "Memory researchers have developed tasks specifically to separate simultaneous visual-pattern memory from sequential spatial memory.",
    },
    {
      type: "paragraph",
      text: "One influential example is the **Visual Patterns Test (VPT)** described by Sergio Della Sala and colleagues.",
    },
    {
      type: "paragraph",
      text: "The VPT was designed to measure short-term visual memory while reducing the sequential component found in tasks such as Corsi Block Tapping.",
    },
    {
      type: "paragraph",
      text: "Your web game is not the standardized VPT.",
    },
    {
      type: "paragraph",
      text: "But the conceptual distinction is useful:",
    },
    {
      type: "paragraph",
      text: "**simultaneous pattern → remember the configuration**",
    },
    {
      type: "paragraph",
      text: "versus",
    },
    {
      type: "paragraph",
      text: "**sequential path → remember the order**",
    },
    {
      type: "paragraph",
      text: "That is exactly the contrast between this page and your Sequence Memory Test.",
    },
    {
      type: "heading",
      text: "Why the Famous “3–4 Items” Limit Is Not a Direct Benchmark",
    },
    {
      type: "paragraph",
      text: "Visual working-memory research by Steven Luck, Edward Vogel, and others famously found performance limits around **three to four objects** in certain change-detection tasks.",
    },
    {
      type: "paragraph",
      text: "Those experiments typically asked participants to remember visual object features such as:",
    },
    {
      type: "list",
      items: ["colors;", "orientations;", "or combinations of features."],
    },
    {
      type: "paragraph",
      text: "Your task is different.",
    },
    {
      type: "paragraph",
      text: "A level containing eight highlighted grid cells does not necessarily require storing eight independent richly featured objects.",
    },
    {
      type: "paragraph",
      text: "Players can group locations into:",
    },
    {
      type: "list",
      items: ["lines;", "clusters;", "corners;", "shapes;", "symmetric patterns."],
    },
    {
      type: "paragraph",
      text: "Therefore it is not scientifically sound to say:",
    },
    {
      type: "paragraph",
      text: "**“Most people can hold only 3–4 tiles, so level 8 exceeds normal visual memory capacity.”**",
    },
    {
      type: "paragraph",
      text: "The number of highlighted spatial locations in this game is not equivalent to the object count in classic visual working-memory experiments.",
    },
    {
      type: "heading",
      text: "What Is Pattern Span?",
    },
    {
      type: "paragraph",
      text: "A useful concept here is **pattern span**.",
    },
    {
      type: "paragraph",
      text: "Instead of asking how many sequential locations can be reproduced, pattern-span tasks ask how complex a simultaneously presented visual configuration can be retained.",
    },
    {
      type: "paragraph",
      text: "The difficulty depends not only on the number of filled positions but on the structure of the pattern.",
    },
    {
      type: "paragraph",
      text: "A compact shape may be easier to remember than the same number of randomly scattered tiles.",
    },
    {
      type: "paragraph",
      text: "This means:",
    },
    {
      type: "paragraph",
      text: "**number of targets ≠ complete measure of memory load**",
    },
    {
      type: "paragraph",
      text: "Pattern organization matters.",
    },
    {
      type: "heading",
      text: "Why Grouping Helps",
    },
    {
      type: "paragraph",
      text: "Suppose six tiles form:",
    },
    {
      type: "list",
      items: ["one horizontal row of three;", "one vertical row of three."],
    },
    {
      type: "paragraph",
      text: "You may remember:",
    },
    {
      type: "paragraph",
      text: "**“an L shape”**",
    },
    {
      type: "paragraph",
      text: "instead of six unrelated locations.",
    },
    {
      type: "paragraph",
      text: "That is grouping.",
    },
    {
      type: "paragraph",
      text: "A different six-tile display scattered randomly across the grid may be harder because it lacks an obvious structure.",
    },
    {
      type: "paragraph",
      text: "This is why visual-pattern memory can outperform a simple cell count.",
    },
    {
      type: "paragraph",
      text: "Human memory exploits relationships.",
    },
    {
      type: "paragraph",
      text: "The score therefore reflects both storage and how efficiently you organize the display.",
    },
    {
      type: "heading",
      text: "5×5 vs. 6×6 Grid",
    },
    {
      type: "paragraph",
      text: "The 5×5 grid contains 25 possible positions.",
    },
    {
      type: "paragraph",
      text: "The 6×6 grid contains 36.",
    },
    {
      type: "paragraph",
      text: "At the same target count, the larger grid can be harder because:",
    },
    {
      type: "list",
      items: [
        "targets can be spread farther apart;",
        "there are more possible locations;",
        "relative position may be less obvious;",
        "empty spaces create a larger search field during recall.",
      ],
    },
    {
      type: "paragraph",
      text: "But difficulty depends on the generated pattern.",
    },
    {
      type: "paragraph",
      text: "A structured pattern on 6×6 can sometimes feel easier than a scattered pattern on 5×5.",
    },
    {
      type: "paragraph",
      text: "Use separate personal baselines for each grid.",
    },
    {
      type: "heading",
      text: "Three Lives vs. Five Lives",
    },
    {
      type: "paragraph",
      text: "Lives change how long the test continues after mistakes.",
    },
    {
      type: "subheading",
      text: "3 Lives",
    },
    {
      type: "paragraph",
      text: "Fewer errors are tolerated.",
    },
    {
      type: "subheading",
      text: "5 Lives",
    },
    {
      type: "paragraph",
      text: "You have more chances to recover and reach later patterns.",
    },
    {
      type: "paragraph",
      text: "Five lives does not mean your memory suddenly improved.",
    },
    {
      type: "paragraph",
      text: "It changes the stopping rule.",
    },
    {
      type: "paragraph",
      text: "If the result is highest level reached, additional lives can affect that maximum.",
    },
    {
      type: "paragraph",
      text: "For fair comparison, keep the lives setting constant.",
    },
    {
      type: "heading",
      text: "What Counts as an Error?",
    },
    {
      type: "paragraph",
      text: "In this game, clicking a tile that was not part of the target pattern costs a life.",
    },
    {
      type: "paragraph",
      text: "That means the task is not simply:",
    },
    {
      type: "paragraph",
      text: "**“How many target tiles can I remember?”**",
    },
    {
      type: "paragraph",
      text: "You also need to avoid false selections.",
    },
    {
      type: "paragraph",
      text: "This creates a memory-discrimination problem:",
    },
    {
      type: "paragraph",
      text: "**target location vs. non-target location**",
    },
    {
      type: "paragraph",
      text: "A player who remembers most targets but guesses aggressively may lose lives quickly.",
    },
    {
      type: "paragraph",
      text: "Another player may respond conservatively and avoid false clicks.",
    },
    {
      type: "paragraph",
      text: "The final level reflects both memory and response strategy.",
    },
    {
      type: "heading",
      text: "Why One Maximum Level Is Noisy",
    },
    {
      type: "paragraph",
      text: "A single run can end because of:",
    },
    {
      type: "list",
      items: ["one accidental click;", "a brief distraction;", "one unusually scattered pattern;", "forgetting a single tile;", "guessing an uncertain position."],
    },
    {
      type: "paragraph",
      text: "Therefore your highest level should not be interpreted as an exact capacity limit.",
    },
    {
      type: "paragraph",
      text: "The most useful personal benchmark is the level range you reach repeatedly under the same settings.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "paragraph",
      text: "**5×5, 3 lives, several attempts on different days**",
    },
    {
      type: "paragraph",
      text: "provides more context than one personal record.",
    },
    {
      type: "heading",
      text: "Visual Memory vs. Sequence Memory",
    },
    {
      type: "paragraph",
      text: "The [Sequence Memory Test](/test/sequence-memory-test) presents locations **one at a time** and requires exact order.",
    },
    {
      type: "paragraph",
      text: "This test presents a **set of locations** and lets you reproduce them in any order.",
    },
    {
      type: "subheading",
      text: "Visual Memory",
    },
    {
      type: "paragraph",
      text: "Remember **which locations**.",
    },
    {
      type: "subheading",
      text: "Sequence Memory",
    },
    {
      type: "paragraph",
      text: "Remember **which locations + their order**.",
    },
    {
      type: "paragraph",
      text: "This difference maps onto an important distinction in visuospatial working-memory research between simultaneous and sequential information.",
    },
    {
      type: "paragraph",
      text: "Scores should not be expected to match.",
    },
    {
      type: "heading",
      text: "Visual Memory vs. Photographic Memory",
    },
    {
      type: "paragraph",
      text: "A high score does not demonstrate **photographic memory** or eidetic imagery.",
    },
    {
      type: "paragraph",
      text: "The task requires holding a small spatial pattern for a very short interval.",
    },
    {
      type: "paragraph",
      text: "It does not test whether you can preserve a detailed visual scene with photographic accuracy over long periods.",
    },
    {
      type: "paragraph",
      text: "Claims of adult photographic memory are scientifically controversial and should not be inferred from a grid game.",
    },
    {
      type: "paragraph",
      text: "You can be excellent at this test through grouping and spatial strategy without possessing anything resembling a literal mental photograph.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good Visual Memory Score?",
    },
    {
      type: "paragraph",
      text: "There is no scientifically validated universal cutoff for this exact game unless you collect normative data using the same:",
    },
    {
      type: "list",
      items: ["grid size;", "flash duration;", "level progression;", "pattern generator;", "lives;", "error rules;", "device setup."],
    },
    {
      type: "paragraph",
      text: "Avoid generic claims such as:",
    },
    {
      type: "list",
      items: ["level 7 = average;", "level 10 = excellent;", "level 12+ = top 10%"],
    },
    {
      type: "paragraph",
      text: "unless those numbers come from a transparent dataset for the exact implementation.",
    },
    {
      type: "paragraph",
      text: "Use your own repeated performance as the most reliable benchmark currently available.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "What does this Visual Memory Test measure?",
          answer: "It mainly challenges short-term memory for a simultaneously presented spatial pattern.",
        },
        {
          question: "Does order matter?",
          answer: "No. You can click the remembered target locations in any order.",
        },
        {
          question: "Is the 3–4 item visual-memory limit relevant?",
          answer:
            "Only indirectly. Classic 3–4 object findings came from different visual-working-memory paradigms and should not be converted directly into grid-tile levels.",
        },
        {
          question: "Why is 6×6 harder?",
          answer: "It provides more possible locations and a larger spatial field, although exact pattern structure also affects difficulty.",
        },
        {
          question: "Do more lives mean better memory?",
          answer: "No. More lives simply allow more errors before the game ends.",
        },
        {
          question: "Is this photographic memory?",
          answer: "No. It is a short-term spatial-pattern memory task.",
        },
        {
          question: "Can this diagnose memory impairment?",
          answer: "No. It is an online memory game, not a standardized neuropsychological assessment.",
        },
      ],
    },
    {
      type: "heading",
      text: "Remember the Pattern as a Whole",
    },
    {
      type: "paragraph",
      text: "At early levels, you can remember the tiles individually.",
    },
    {
      type: "paragraph",
      text: "As the pattern grows, the better question becomes:",
    },
    {
      type: "paragraph",
      text: "**What shape, cluster, line, or structure do these locations form together?**",
    },
    {
      type: "paragraph",
      text: "That shift from isolated squares to organized spatial patterns is what makes the game interesting.",
    },
    {
      type: "paragraph",
      text: "Your highest level is not a literal count of visual-memory slots.",
    },
    {
      type: "paragraph",
      text: "It is the result of **encoding, grouping, spatial retention, attention, and accurate selection working together**.",
    },
  ],
};
