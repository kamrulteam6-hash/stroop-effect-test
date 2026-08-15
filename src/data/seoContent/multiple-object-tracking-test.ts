import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you keep track of several moving targets after they become identical to everything around them?",
    },
    {
      type: "paragraph",
      text: "Take this free **Multiple Object Tracking Test (MOT)** to challenge dynamic visual attention. Eight dots appear on screen. Two, three, or four briefly highlight as targets. Then every dot becomes identical and begins moving.",
    },
    {
      type: "paragraph",
      text: "Track the original targets until motion stops, then select the dots you believe were highlighted at the beginning.",
    },
    {
      type: "paragraph",
      text: "Start with 2 targets. Move to 3 or 4 when you can track them reliably.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Multiple Object Tracking Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 2, 3, or 4 targets.",
        "Press **Start Test**.",
        "Eight dots appear.",
        "Memorize the highlighted target dots.",
        "When the highlighting disappears, keep following those same objects.",
        "Ignore the identical distractors.",
        "Wait until all dots stop moving.",
        "Select the dots you believe were the original targets.",
        "Review how many you identified correctly.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not try to remember only the starting positions.",
    },
    {
      type: "paragraph",
      text: "Once the objects move, you need to continuously update where the targets are.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is Multiple Object Tracking?",
    },
    {
      type: "paragraph",
      text: "**Multiple Object Tracking**, usually shortened to **MOT**, is a classic experimental task used to study visual attention.",
    },
    {
      type: "paragraph",
      text: "The modern research paradigm is strongly associated with the work of Zenon Pylyshyn and Ron Storm, who published a foundational MOT study in 1988.",
    },
    {
      type: "paragraph",
      text: "A typical MOT trial works like this:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "several objects appear;",
        "a subset is marked as targets;",
        "the target markings disappear;",
        "targets and distractors move and look identical;",
        "the observer tracks the targets;",
        "and, at the end, identifies which objects were the original targets.",
      ],
    },
    {
      type: "paragraph",
      text: "Your test follows that core structure.",
    },
    {
      type: "paragraph",
      text: "The challenge is not recognizing a special color or shape during motion. It is preserving the identities of selected objects through changing positions.",
    },
    {
      type: "heading",
      text: "What Does MOT Measure?",
    },
    {
      type: "paragraph",
      text: "MOT is often described as a test of **dynamic visual attention**.",
    },
    {
      type: "paragraph",
      text: "Successful tracking requires you to:",
    },
    {
      type: "list",
      items: [
        "select multiple targets;",
        "maintain attention across several locations;",
        "continuously update their positions;",
        "resist distraction from identical moving objects;",
        "preserve target identity;",
        "and select the correct objects after motion stops.",
      ],
    },
    {
      type: "paragraph",
      text: "The task also depends on visual display properties and strategy.",
    },
    {
      type: "paragraph",
      text: "That is why an MOT score should not be treated as a pure measurement of one isolated “attention capacity.”",
    },
    {
      type: "paragraph",
      text: "It is performance on a controlled moving-object tracking problem.",
    },
    {
      type: "heading",
      text: "Why Do the Targets Become Identical?",
    },
    {
      type: "paragraph",
      text: "If targets stayed blue while distractors stayed gray, you could simply search for blue dots at the end.",
    },
    {
      type: "paragraph",
      text: "There would be little need to track anything.",
    },
    {
      type: "paragraph",
      text: "MOT removes that shortcut.",
    },
    {
      type: "paragraph",
      text: "Targets highlight only during the identification phase. Once movement begins, they become visually indistinguishable from distractors.",
    },
    {
      type: "paragraph",
      text: "Your visual system must preserve which moving objects belong to the tracked set.",
    },
    {
      type: "paragraph",
      text: "That is the central reason MOT is useful for studying attention over time.",
    },
    {
      type: "heading",
      text: "How Many Objects Can a Person Track?",
    },
    {
      type: "paragraph",
      text: "You will often see the claim that humans can track “about four objects.”",
    },
    {
      type: "paragraph",
      text: "That is a useful historical shorthand, but it should not be treated as a fixed biological limit.",
    },
    {
      type: "paragraph",
      text: "Tracking performance depends on the conditions.",
    },
    {
      type: "paragraph",
      text: "Important factors include:",
    },
    {
      type: "list",
      items: [
        "number of targets;",
        "total number of objects;",
        "movement speed;",
        "distance between objects;",
        "tracking duration;",
        "collisions or close encounters;",
        "display size;",
        "and how accuracy is measured.",
      ],
    },
    {
      type: "paragraph",
      text: "Research has shown that increasing object speed can reduce tracking performance. Tracking also becomes harder when targets come close to one another.",
    },
    {
      type: "paragraph",
      text: "So the better question is not:",
    },
    {
      type: "paragraph",
      text: "**“What is the exact human object limit?”**",
    },
    {
      type: "paragraph",
      text: "It is:",
    },
    {
      type: "paragraph",
      text: "**“How many targets can I track accurately under these particular conditions?”**",
    },
    {
      type: "paragraph",
      text: "On this test, compare 2-, 3-, and 4-target sessions within the same implementation.",
    },
    {
      type: "heading",
      text: "Why Four Targets Are Harder Than Two",
    },
    {
      type: "paragraph",
      text: "When you track two targets, more attention can be allocated to each one.",
    },
    {
      type: "paragraph",
      text: "Add a third and fourth target and the visual scene becomes harder to maintain.",
    },
    {
      type: "paragraph",
      text: "Targets may:",
    },
    {
      type: "list",
      items: ["move to opposite parts of the display;", "pass close to distractors;", "cross paths;", "or form rapidly changing spatial relationships."],
    },
    {
      type: "paragraph",
      text: "You are dividing a limited tracking resource across more moving items.",
    },
    {
      type: "paragraph",
      text: "Accuracy therefore tends to decline as target load rises.",
    },
    {
      type: "paragraph",
      text: "A lower score at 4 targets than 2 targets is expected. It does not mean your attention suddenly became worse—the task became substantially more demanding.",
    },
    {
      type: "heading",
      text: "Speed, Spacing, and Close Encounters",
    },
    {
      type: "paragraph",
      text: "Two MOT trials with the same number of targets can have different difficulty.",
    },
    {
      type: "subheading",
      text: "Movement Speed",
    },
    {
      type: "paragraph",
      text: "Faster objects change position more rapidly.",
    },
    {
      type: "paragraph",
      text: "Research has shown that object speed can affect multiple-object tracking performance.",
    },
    {
      type: "subheading",
      text: "Target–Distractor Distance",
    },
    {
      type: "paragraph",
      text: "A target becomes easier to confuse with a distractor when their paths come very close.",
    },
    {
      type: "paragraph",
      text: "Studies have found that tracking accuracy deteriorates as critical objects become more spatially crowded.",
    },
    {
      type: "subheading",
      text: "Target–Target Distance",
    },
    {
      type: "paragraph",
      text: "Tracked targets can also interfere with one another when they cluster tightly.",
    },
    {
      type: "paragraph",
      text: "This helps explain why MOT capacity is better understood as flexible and resource-limited rather than a simple fixed number of mental “slots.”",
    },
    {
      type: "heading",
      text: "Where Should You Look While Tracking?",
    },
    {
      type: "paragraph",
      text: "A common mistake is to lock your eyes onto one target and follow it directly.",
    },
    {
      type: "paragraph",
      text: "That target may stay safe—but you can lose the others.",
    },
    {
      type: "paragraph",
      text: "Research on eye position during MOT has found benefits from looking near the **center of the target group** rather than repeatedly chasing individual objects with the eyes.",
    },
    {
      type: "paragraph",
      text: "A useful strategy is therefore:",
    },
    {
      type: "list",
      items: ["keep a broad gaze;", "monitor the group as a whole;", "and avoid visually tunneling onto one dot."],
    },
    {
      type: "paragraph",
      text: "You will still make normal eye movements. The goal is not to freeze your eyes perfectly still.",
    },
    {
      type: "paragraph",
      text: "It is to prevent one target from taking all your attention.",
    },
    {
      type: "heading",
      text: "MOT vs. N-Back",
    },
    {
      type: "paragraph",
      text: "The [N-Back Test](/test/n-back-test) also requires information to be updated continuously, but the information is different.",
    },
    {
      type: "paragraph",
      text: "N-back asks whether the **current stimulus matches one from N trials earlier**.",
    },
    {
      type: "paragraph",
      text: "MOT asks you to **preserve several moving target identities continuously** while their locations change.",
    },
    {
      type: "paragraph",
      text: "N-back is primarily a working-memory updating paradigm.",
    },
    {
      type: "paragraph",
      text: "MOT is primarily a dynamic visual-attention and tracking paradigm.",
    },
    {
      type: "paragraph",
      text: "Both can feel mentally demanding without measuring the same thing.",
    },
    {
      type: "heading",
      text: "MOT and Sports",
    },
    {
      type: "paragraph",
      text: "Multiple-object tracking is often discussed in relation to team sports because athletes may need to monitor teammates, opponents, and a ball while everything moves.",
    },
    {
      type: "paragraph",
      text: "Research has found that some groups of athletes—particularly in open-skill sports—can outperform non-athletes on MOT-style tasks.",
    },
    {
      type: "paragraph",
      text: "But this does not mean one MOT score can predict who is a better athlete.",
    },
    {
      type: "paragraph",
      text: "Real sports involve:",
    },
    {
      type: "list",
      items: [
        "anticipation;",
        "decision-making;",
        "movement;",
        "sport-specific knowledge;",
        "peripheral information;",
        "tactical positioning;",
        "and physical skill.",
      ],
    },
    {
      type: "paragraph",
      text: "MOT isolates only part of that complex environment.",
    },
    {
      type: "paragraph",
      text: "Use it as a visual-attention challenge, not a sports talent test.",
    },
    {
      type: "heading",
      text: "Does MOT Training Improve Real-World Attention?",
    },
    {
      type: "paragraph",
      text: "Practice usually improves performance on the task you practice.",
    },
    {
      type: "paragraph",
      text: "The harder question is whether those gains transfer broadly.",
    },
    {
      type: "paragraph",
      text: "Research on cognitive training has produced mixed results. Some studies report benefits on related attention measures, while other controlled work has failed to find meaningful transfer from multiple-object tracking training to different tasks or realistic multitasking situations.",
    },
    {
      type: "paragraph",
      text: "Therefore, avoid claims such as:",
    },
    {
      type: "paragraph",
      text: "**“MOT training will make you better at driving, sports, or multitasking.”**",
    },
    {
      type: "paragraph",
      text: "A more defensible conclusion is:",
    },
    {
      type: "paragraph",
      text: "**MOT practice can improve MOT performance. Broader transfer depends on what is being measured and is not guaranteed.**",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good MOT Score?",
    },
    {
      type: "paragraph",
      text: "There is no universal online score for “excellent tracking.”",
    },
    {
      type: "paragraph",
      text: "Different tests change:",
    },
    {
      type: "list",
      items: [
        "number of dots;",
        "target count;",
        "speed;",
        "movement algorithm;",
        "collisions;",
        "trial duration;",
        "display size;",
        "number of trials;",
        "and scoring.",
      ],
    },
    {
      type: "paragraph",
      text: "Your current test uses **8 total dots** with **2, 3, or 4 targets**.",
    },
    {
      type: "paragraph",
      text: "That makes the cleanest benchmark your own performance at each target level.",
    },
    {
      type: "paragraph",
      text: "If you consistently identify all 3 targets but often lose one when tracking 4, that tells you exactly where this version becomes challenging.",
    },
    {
      type: "paragraph",
      text: "Do not transfer a benchmark from a different MOT implementation.",
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
          question: "Why do the targets stop being highlighted?",
          answer:
            "Because the task is designed to test continuous tracking. If the targets stayed visibly different, you could identify them without maintaining attention.",
        },
        {
          question: "Is four objects the normal human limit?",
          answer:
            "Not as a fixed rule. Performance depends on speed, spacing, number of distractors, duration, and other task conditions.",
        },
        {
          question: "Why do I lose targets when dots pass close together?",
          answer: "Close encounters increase the chance of confusing target and distractor identities.",
        },
        {
          question: "Should I stare at one target?",
          answer:
            "Usually not. A broader gaze near the center of the tracked group can help you maintain several objects at once.",
        },
        {
          question: "Can MOT training improve sports performance?",
          answer:
            "MOT practice can improve tracking-task performance, but broad transfer to sports or other real-world skills is not guaranteed.",
        },
        {
          question: "Is this a medical or ADHD test?",
          answer:
            "No. It is a browser-based visual-attention challenge and cannot diagnose attention disorders or neurological conditions.",
        },
      ],
    },
    {
      type: "heading",
      text: "Track One More Target",
    },
    {
      type: "paragraph",
      text: "Start with 2 targets and aim for clean identification.",
    },
    {
      type: "paragraph",
      text: "Then move to 3.",
    },
    {
      type: "paragraph",
      text: "When that becomes manageable, try 4 and notice what causes you to lose a target—speed, crowding, a close pass, or focusing too heavily on one object.",
    },
    {
      type: "paragraph",
      text: "The challenge is not simply seeing moving dots.",
    },
    {
      type: "paragraph",
      text: "It is **maintaining the identity of several selected objects while the entire visual scene keeps changing**.",
    },
  ],
};
