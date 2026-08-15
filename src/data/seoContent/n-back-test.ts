import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember where a tile appeared while new information keeps replacing the old?",
    },
    {
      type: "paragraph",
      text: "Take this free **N-Back Test** to challenge working-memory updating and sustained attention. A tile flashes in one position on a 3×3 grid each round. Press **Match** or the spacebar whenever the current tile appears in the same position as it did **N trials earlier**.",
    },
    {
      type: "paragraph",
      text: "Choose **1-Back, 2-Back, or 3-Back**, then select 20 or 30 trials.",
    },
    {
      type: "paragraph",
      text: "Higher N levels are harder because you must continuously update a longer mental window. Compare scores only when you use the same N level and trial count.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the N-Back Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 1-Back, 2-Back, or 3-Back.",
        "Choose 20 or 30 trials.",
        "Press **Start Test**.",
        "Watch the highlighted position on the 3×3 grid.",
        "Ask whether the current position matches the one from N trials earlier.",
        "Press Match or Space only when it matches.",
        "Do nothing when it does not match.",
        "Continue until all trials are complete.",
        "Review your accuracy.",
      ],
    },
    {
      type: "paragraph",
      text: "The first N trials cannot be true N-back matches because there is not yet an item N positions earlier to compare with.",
    },
    {
      type: "paragraph",
      text: "Do not press on every familiar-looking location. The question is not whether you have seen that tile before—it is whether it matches the **exact N-back position**.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is the N-Back Test?",
    },
    {
      type: "paragraph",
      text: "The **N-back task** is a continuous performance task used in cognitive psychology and neuroscience.",
    },
    {
      type: "paragraph",
      text: "It was introduced by psychologist Wayne Kirchner in 1958 to study short-term retention of rapidly changing information.",
    },
    {
      type: "paragraph",
      text: "Unlike a simple memory-span test, N-back does not show you a list and then ask you to reproduce it at the end. New information keeps arriving while you are still making decisions.",
    },
    {
      type: "paragraph",
      text: "On every trial, you must:",
    },
    {
      type: "list",
      items: [
        "encode the current stimulus;",
        "retain recent positions;",
        "identify the item N steps back;",
        "compare it with the current position;",
        "decide whether it is a match;",
        "respond or withhold a response;",
        "and update the stored sequence for the next trial.",
      ],
    },
    {
      type: "paragraph",
      text: "That constant updating is why N-back can feel difficult even when you only need to remember a few recent positions.",
    },
    {
      type: "heading",
      text: "What Does N-Back Measure?",
    },
    {
      type: "paragraph",
      text: "N-back is often described as a **working memory test**, but it is more precise to call it a **working-memory updating task**.",
    },
    {
      type: "paragraph",
      text: "Performance depends on more than storage capacity.",
    },
    {
      type: "paragraph",
      text: "You also need:",
    },
    {
      type: "list",
      items: [
        "sustained attention;",
        "continuous updating;",
        "interference control;",
        "matching decisions;",
        "response inhibition;",
        "and task-rule maintenance.",
      ],
    },
    {
      type: "paragraph",
      text: "Research has shown that N-back performance is related to working-memory processes, but it should not be treated as a direct measurement of one fixed “working memory capacity” number.",
    },
    {
      type: "paragraph",
      text: "A low score can reflect distraction, misunderstanding the rule, false alarms, fatigue, or difficulty updating—not simply an inability to remember enough items.",
    },
    {
      type: "heading",
      text: "What Does “N” Mean?",
    },
    {
      type: "paragraph",
      text: "The **N** tells you how far back in the sequence you need to compare.",
    },
    {
      type: "subheading",
      text: "1-Back",
    },
    {
      type: "paragraph",
      text: "Compare the current tile with the tile from **one trial ago**.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "paragraph",
      text: "Center → Top Left → **Top Left**",
    },
    {
      type: "paragraph",
      text: "The third item is a 1-back match because it is in the same position as the immediately previous item.",
    },
    {
      type: "subheading",
      text: "2-Back",
    },
    {
      type: "paragraph",
      text: "Compare with the tile from **two trials ago**.",
    },
    {
      type: "paragraph",
      text: "Example:",
    },
    {
      type: "paragraph",
      text: "Top Right → Center → **Top Right**",
    },
    {
      type: "paragraph",
      text: "The third position matches the first, so it is a 2-back target.",
    },
    {
      type: "subheading",
      text: "3-Back",
    },
    {
      type: "paragraph",
      text: "Compare with the position from **three trials ago**.",
    },
    {
      type: "paragraph",
      text: "You must maintain a longer moving sequence while continuing to process each new tile.",
    },
    {
      type: "paragraph",
      text: "This is why 3-Back usually feels much harder than 1-Back.",
    },
    {
      type: "heading",
      text: "Why N-Back Is Different From Digit Span",
    },
    {
      type: "paragraph",
      text: "A [Number Memory Test](/test/number-memory-test) asks you to hold a string of digits and reproduce it after the display disappears.",
    },
    {
      type: "paragraph",
      text: "That is a **span-style recall task**.",
    },
    {
      type: "paragraph",
      text: "N-back works differently.",
    },
    {
      type: "paragraph",
      text: "You are never waiting until the end to recall the whole sequence. Instead, you repeatedly compare new information with a continuously changing reference point.",
    },
    {
      type: "paragraph",
      text: "That means two people can perform differently across digit span and N-back even though both tasks involve memory.",
    },
    {
      type: "paragraph",
      text: "One emphasizes temporary retention and recall. The other places heavier demands on **updating, monitoring, and matching**.",
    },
    {
      type: "heading",
      text: "Hits, Misses, False Alarms, and Correct Rejections",
    },
    {
      type: "paragraph",
      text: "Overall accuracy is useful, but N-back responses can be understood more clearly through four outcomes.",
    },
    {
      type: "table",
      headers: ["Outcome", "What Happened"],
      rows: [
        ["Hit", "You responded to a true N-back match"],
        ["Miss", "A true match occurred and you did not respond"],
        ["False alarm", "You responded when it was not a match"],
        ["Correct rejection", "You correctly did nothing on a non-match"],
      ],
    },
    {
      type: "paragraph",
      text: "This matters because the same accuracy percentage can come from different strategies.",
    },
    {
      type: "paragraph",
      text: "Someone who presses Match too often may catch many real matches but also create many false alarms.",
    },
    {
      type: "paragraph",
      text: "Someone who almost never presses may avoid false alarms but miss genuine targets.",
    },
    {
      type: "paragraph",
      text: "Research on N-back scoring often reports hits and false alarms separately, and some studies use signal-detection measures such as **d-prime (d′)** to distinguish sensitivity from response tendency.",
    },
    {
      type: "paragraph",
      text: "For this browser test, use the available accuracy result as a session benchmark rather than a clinical score.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good N-Back Score?",
    },
    {
      type: "paragraph",
      text: "There is no universal percentage that defines a “good” N-back score across all online tests.",
    },
    {
      type: "paragraph",
      text: "Performance depends on:",
    },
    {
      type: "list",
      items: [
        "N level;",
        "number of trials;",
        "target frequency;",
        "stimulus type;",
        "presentation speed;",
        "response window;",
        "practice;",
        "and scoring method.",
      ],
    },
    {
      type: "paragraph",
      text: "A 90% score on 1-Back is not equivalent to 90% on 3-Back.",
    },
    {
      type: "paragraph",
      text: "Likewise, a spatial-position N-back should not automatically be compared with a letter N-back or dual N-back.",
    },
    {
      type: "paragraph",
      text: "The most useful benchmark is:",
    },
    {
      type: "paragraph",
      text: "**same N level + same number of trials + same test version**",
    },
    {
      type: "paragraph",
      text: "If your 2-Back accuracy becomes more consistent across repeated sessions, you are improving on that specific task.",
    },
    {
      type: "heading",
      text: "Why Higher N Levels Reduce Accuracy",
    },
    {
      type: "paragraph",
      text: "As N increases, the comparison target is farther back in the sequence.",
    },
    {
      type: "paragraph",
      text: "You must keep more recent states organized while avoiding interference from locations that appeared at the wrong lag.",
    },
    {
      type: "paragraph",
      text: "A common mistake in 2-Back or 3-Back is responding to a tile because it feels familiar, even though it appeared one step too early or too late.",
    },
    {
      type: "paragraph",
      text: "These are sometimes called **lure-type errors** in N-back research.",
    },
    {
      type: "paragraph",
      text: "The task is therefore not just “remember more.”",
    },
    {
      type: "paragraph",
      text: "It is:",
    },
    {
      type: "paragraph",
      text: "**remember the right item at the right temporal position.**",
    },
    {
      type: "heading",
      text: "Single N-Back vs. Dual N-Back",
    },
    {
      type: "paragraph",
      text: "This page uses **single spatial N-back**. You track one information stream: tile position.",
    },
    {
      type: "paragraph",
      text: "**Dual N-back** is a later, more complex variant that requires tracking two streams at the same time—commonly a visual location and an auditory letter or sound.",
    },
    {
      type: "paragraph",
      text: "For example, you might respond separately when:",
    },
    {
      type: "list",
      items: [
        "the current position matches N trials back;",
        "the current sound matches N trials back;",
        "or both match.",
      ],
    },
    {
      type: "paragraph",
      text: "Dual N-back is substantially more demanding because both streams must be updated continuously.",
    },
    {
      type: "paragraph",
      text: "Do not compare single and dual N-back scores directly.",
    },
    {
      type: "heading",
      text: "Does N-Back Training Make You Smarter?",
    },
    {
      type: "paragraph",
      text: "This is one of the most debated claims around N-back.",
    },
    {
      type: "paragraph",
      text: "A highly influential 2008 study reported that training on dual N-back transferred to a measure of fluid intelligence. That finding led to widespread claims that N-back could increase intelligence.",
    },
    {
      type: "paragraph",
      text: "Later research has been much more cautious.",
    },
    {
      type: "paragraph",
      text: "People reliably become better at the N-back task they practice, and improvement can transfer to closely related tasks. Evidence for broad transfer to general intelligence or unrelated real-world abilities is much less convincing.",
    },
    {
      type: "paragraph",
      text: "A major review of working-memory training concluded that there was not good evidence for reliable improvement in intelligence or broad real-world cognitive skills.",
    },
    {
      type: "paragraph",
      text: "The safest conclusion is simple:",
    },
    {
      type: "paragraph",
      text: "**N-back practice can make you better at N-back and similar working-memory tasks. It is not a guaranteed IQ booster.**",
    },
    {
      type: "heading",
      text: "How to Improve at N-Back",
    },
    {
      type: "paragraph",
      text: "First, make sure the rule is automatic.",
    },
    {
      type: "paragraph",
      text: "Start with 1-Back. Once you can follow the comparison without confusion, move to 2-Back.",
    },
    {
      type: "paragraph",
      text: "Helpful strategies include:",
    },
    {
      type: "list",
      items: [
        "keep a calm, steady rhythm;",
        "focus only on the last N relevant positions;",
        "let older positions drop out instead of rehearsing the entire history;",
        "avoid responding merely because a location looks familiar;",
        "minimize distractions;",
        "and use the same level for several sessions before increasing difficulty.",
      ],
    },
    {
      type: "paragraph",
      text: "If 3-Back becomes random guessing, return to 2-Back and build consistency.",
    },
    {
      type: "paragraph",
      text: "Harder is not automatically better training.",
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
          question: "Is 3-Back better than 2-Back?",
          answer:
            "It is harder, not automatically better. Use the highest level at which you can still perform the rule meaningfully rather than mostly guessing.",
        },
        {
          question: "Does this test measure IQ?",
          answer: "No. N-back performance is one narrow cognitive task and should not be converted into an IQ score.",
        },
        {
          question: "Why did I press Match on a familiar tile and get it wrong?",
          answer:
            "The position may have appeared recently but at the wrong lag. In 2-Back, only the position exactly two trials earlier matters.",
        },
        {
          question: "Is this a clinical test?",
          answer:
            "No. This browser version is for education, practice, and personal comparison. Standardized cognitive assessment requires controlled administration and appropriate norms.",
        },
      ],
    },
    {
      type: "heading",
      text: "Try the N-Back Test Again",
    },
    {
      type: "paragraph",
      text: "Choose one repeatable benchmark—such as **2-Back with 30 trials**—and keep it consistent.",
    },
    {
      type: "paragraph",
      text: "Focus on the rule, not on chasing a perfect percentage.",
    },
    {
      type: "paragraph",
      text: "The challenge is keeping a small window of recent information active while it constantly changes.",
    },
    {
      type: "paragraph",
      text: "That is what makes N-back a distinctive test of **working-memory updating rather than simple memorization**.",
    },
  ],
};
