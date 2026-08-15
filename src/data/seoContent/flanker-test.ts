import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you respond to one arrow while the arrows around it are pushing you toward the wrong answer?",
    },
    {
      type: "paragraph",
      text: "Take this free **Flanker Test**, based on the Eriksen flanker paradigm, to experience response conflict and selective attention. Five arrows appear in a row. Your job is to respond only to the **center arrow** while ignoring the surrounding arrows.",
    },
    {
      type: "paragraph",
      text: "Choose 20 or 30 trials and use the Left/Right arrow keys or on-screen controls.",
    },
    {
      type: "paragraph",
      text: "Your results compare performance on **congruent** and **incongruent** trials and show your personal flanker effect.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Flanker Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 20 or 30 trials.",
        "Press **Start Test**.",
        "Focus on the center arrow.",
        "Press Left if the center arrow points left.",
        "Press Right if it points right.",
        "Ignore the four surrounding arrows.",
        "Respond quickly without sacrificing accuracy.",
        "Review congruent and incongruent performance.",
      ],
    },
    {
      type: "paragraph",
      text: "Keep your fingers ready on the response keys so movement distance stays consistent.",
    },
    {
      type: "paragraph",
      text: "Do not scan the row searching for the target. The center arrow is always the relevant stimulus.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is the Eriksen Flanker Task?",
    },
    {
      type: "paragraph",
      text: "The flanker task was introduced by **Barbara A. Eriksen and Charles W. Eriksen in 1974**.",
    },
    {
      type: "paragraph",
      text: "The original research used letters, but many modern versions use arrows because the required response is immediately intuitive.",
    },
    {
      type: "paragraph",
      text: "The basic structure is simple:",
    },
    {
      type: "paragraph",
      text: "**relevant target in the middle + irrelevant flankers around it**",
    },
    {
      type: "paragraph",
      text: "The surrounding stimuli can support the same response or compete with it.",
    },
    {
      type: "paragraph",
      text: "The task became a classic way to study how irrelevant information influences a response even when people know exactly what they are supposed to ignore.",
    },
    {
      type: "heading",
      text: "Congruent vs. Incongruent Trials",
    },
    {
      type: "paragraph",
      text: "The key comparison is between two conditions.",
    },
    {
      type: "subheading",
      text: "Congruent Trial",
    },
    {
      type: "paragraph",
      text: "All arrows point in the same direction.",
    },
    {
      type: "paragraph",
      text: "**<<<<<**",
    },
    {
      type: "paragraph",
      text: "The center arrow and flankers support the same response.",
    },
    {
      type: "subheading",
      text: "Incongruent Trial",
    },
    {
      type: "paragraph",
      text: "The center arrow points one way while the flankers point the other.",
    },
    {
      type: "paragraph",
      text: "**<<><<**",
    },
    {
      type: "paragraph",
      text: "The surrounding arrows activate a competing response.",
    },
    {
      type: "paragraph",
      text: "People are typically slower and may make more errors on incongruent trials.",
    },
    {
      type: "paragraph",
      text: "The difference between the conditions is called the **flanker effect** or congruency effect.",
    },
    {
      type: "heading",
      text: "What Is the Flanker Effect?",
    },
    {
      type: "paragraph",
      text: "A simple reaction-time version of the flanker effect can be calculated as:",
    },
    {
      type: "paragraph",
      text: "**Average Incongruent RT − Average Congruent RT**",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "list",
      items: ["Congruent average: 470 ms", "Incongruent average: 535 ms", "Flanker effect: 65 ms"],
    },
    {
      type: "paragraph",
      text: "The positive difference means conflicting flankers slowed the response.",
    },
    {
      type: "paragraph",
      text: "Accuracy can also show interference.",
    },
    {
      type: "paragraph",
      text: "If incongruent trials produce more wrong answers, the surrounding arrows affected response selection even when reaction-time averages look similar.",
    },
    {
      type: "paragraph",
      text: "For a useful result, consider **speed and accuracy together**.",
    },
    {
      type: "heading",
      text: "Does a Small Flanker Effect Mean Better Attention?",
    },
    {
      type: "paragraph",
      text: "Not automatically.",
    },
    {
      type: "paragraph",
      text: "A smaller congruency gap can reflect efficient conflict handling, but there are other possibilities.",
    },
    {
      type: "paragraph",
      text: "Someone who responds very slowly on every trial may reduce the apparent difference between conditions because they are giving themselves extra time.",
    },
    {
      type: "paragraph",
      text: "Someone who responds extremely quickly may produce a small average among correct trials while making many errors.",
    },
    {
      type: "paragraph",
      text: "A short browser task also contains relatively few observations.",
    },
    {
      type: "paragraph",
      text: "So avoid interpreting one number as:",
    },
    {
      type: "paragraph",
      text: "**“My inhibition ability is X.”**",
    },
    {
      type: "paragraph",
      text: "A better interpretation is:",
    },
    {
      type: "paragraph",
      text: "**“This is how much incongruent flankers changed my performance in this session.”**",
    },
    {
      type: "heading",
      text: "Selective Attention, Conflict, and Response Competition",
    },
    {
      type: "paragraph",
      text: "Flanker tests are often described as tests of **selective attention** or **inhibitory control**.",
    },
    {
      type: "paragraph",
      text: "Those descriptions are useful, but neither should be treated as a pure measurement.",
    },
    {
      type: "paragraph",
      text: "The flankers are processed even though they are irrelevant.",
    },
    {
      type: "paragraph",
      text: "When they point in the opposite direction, they activate a competing response.",
    },
    {
      type: "paragraph",
      text: "The participant must resolve that conflict and select the response associated with the center target.",
    },
    {
      type: "paragraph",
      text: "The final reaction time therefore reflects several processes:",
    },
    {
      type: "list",
      items: [
        "visual encoding;",
        "target identification;",
        "distracting information;",
        "response competition;",
        "decision time;",
        "and motor execution.",
      ],
    },
    {
      type: "paragraph",
      text: "The task is best understood as a **response-conflict paradigm**, not a direct meter of one executive function.",
    },
    {
      type: "heading",
      text: "Why Do Irrelevant Arrows Affect You?",
    },
    {
      type: "paragraph",
      text: "Knowing that the flankers are irrelevant does not prevent your visual system from processing them.",
    },
    {
      type: "paragraph",
      text: "The surrounding arrows are highly compatible with the same left/right responses used for the center target.",
    },
    {
      type: "paragraph",
      text: "On an incongruent trial, they create evidence for the wrong response.",
    },
    {
      type: "paragraph",
      text: "Your cognitive system must resolve that competing activation before or while you act.",
    },
    {
      type: "paragraph",
      text: "That is why simply telling yourself:",
    },
    {
      type: "paragraph",
      text: "**“Ignore the outside arrows”**",
    },
    {
      type: "paragraph",
      text: "does not eliminate the effect.",
    },
    {
      type: "paragraph",
      text: "The interference is exactly what the task is designed to reveal.",
    },
    {
      type: "heading",
      text: "Flanker Test vs. Stroop Test",
    },
    {
      type: "paragraph",
      text: "The [Stroop Effect Test](/test/stroop-effect-test) also creates conflict between relevant and irrelevant information.",
    },
    {
      type: "paragraph",
      text: "But the source of conflict differs.",
    },
    {
      type: "paragraph",
      text: "In Stroop:",
    },
    {
      type: "list",
      items: ["relevant information may be ink color;", "irrelevant information is word meaning."],
    },
    {
      type: "paragraph",
      text: "In Flanker:",
    },
    {
      type: "list",
      items: ["relevant information is the center arrow;", "irrelevant information is surrounding arrow direction."],
    },
    {
      type: "paragraph",
      text: "Both can produce slower responses under conflict, but the tasks are not interchangeable.",
    },
    {
      type: "paragraph",
      text: "A person can show different interference patterns across them.",
    },
    {
      type: "heading",
      text: "Flanker Test vs. Simple Reaction Time",
    },
    {
      type: "paragraph",
      text: "A simple [Reaction Time Test](/test/reaction-time-test) gives one signal and one response.",
    },
    {
      type: "paragraph",
      text: "The Flanker Test is a **choice task**.",
    },
    {
      type: "paragraph",
      text: "You must first determine whether the center arrow points left or right, then select the corresponding response while irrelevant arrows may activate the opposite choice.",
    },
    {
      type: "paragraph",
      text: "That additional decision and conflict mean raw flanker reaction times should not be compared directly with simple reaction-time scores.",
    },
    {
      type: "paragraph",
      text: "A 500 ms flanker response is not equivalent to a 500 ms simple visual reaction.",
    },
    {
      type: "heading",
      text: "Why 20 or 30 Trials Can Be Noisy",
    },
    {
      type: "paragraph",
      text: "Experimental flanker studies often collect many more trials than a short browser game.",
    },
    {
      type: "paragraph",
      text: "There is a reason.",
    },
    {
      type: "paragraph",
      text: "Reaction times vary naturally.",
    },
    {
      type: "paragraph",
      text: "With only a handful of congruent and incongruent responses, one unusually slow trial can shift an average substantially.",
    },
    {
      type: "paragraph",
      text: "Mistakes also reduce the number of valid reaction-time observations.",
    },
    {
      type: "paragraph",
      text: "This short version is useful for demonstrating the effect, but it should not be treated like a high-reliability laboratory estimate of attentional control.",
    },
    {
      type: "paragraph",
      text: "Thirty trials generally gives you a better sample than 20.",
    },
    {
      type: "heading",
      text: "Speed-Accuracy Trade-Off",
    },
    {
      type: "paragraph",
      text: "Responding faster is not always better.",
    },
    {
      type: "paragraph",
      text: "Suppose one session produces:",
    },
    {
      type: "list",
      items: ["very fast responses;", "many incorrect incongruent trials."],
    },
    {
      type: "paragraph",
      text: "Another produces:",
    },
    {
      type: "list",
      items: ["slightly slower responses;", "very high accuracy."],
    },
    {
      type: "paragraph",
      text: "The first result should not automatically be called stronger attention.",
    },
    {
      type: "paragraph",
      text: "A good performance balances speed with correct target selection.",
    },
    {
      type: "paragraph",
      text: "When comparing sessions, check whether reaction time improved **without accuracy dropping**.",
    },
    {
      type: "heading",
      id: "good-effect",
      text: "What Is a Good Flanker Effect?",
    },
    {
      type: "paragraph",
      text: "There is no universal millisecond cutoff for a browser flanker test.",
    },
    {
      type: "paragraph",
      text: "Different implementations vary in:",
    },
    {
      type: "list",
      items: [
        "arrow spacing;",
        "stimulus size;",
        "response method;",
        "trial count;",
        "congruent/incongruent ratio;",
        "response deadline;",
        "practice trials;",
        "and device latency.",
      ],
    },
    {
      type: "paragraph",
      text: "Some websites publish “average flanker effect” numbers, but those only apply if the test protocol and reference dataset match yours.",
    },
    {
      type: "paragraph",
      text: "Use your own repeated result under the same conditions.",
    },
    {
      type: "paragraph",
      text: "Do not treat 30 ms, 60 ms, or 100 ms as a diagnosis of good or poor executive function.",
    },
    {
      type: "heading",
      text: "Can the Flanker Test Diagnose ADHD?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "Flanker tasks appear in cognitive research involving attention and many clinical populations, but an individual web score is not a diagnostic test.",
    },
    {
      type: "paragraph",
      text: "ADHD assessment requires a much broader evaluation of symptoms, history, impairment across settings, development, and alternative explanations.",
    },
    {
      type: "paragraph",
      text: "A large flanker effect can occur for many reasons, including normal variation, distraction, fatigue, strategy, hardware, and a short noisy sample.",
    },
    {
      type: "paragraph",
      text: "Use the task to experience attentional conflict—not to self-diagnose.",
    },
    {
      type: "heading",
      text: "How to Get a Cleaner Result",
    },
    {
      type: "paragraph",
      text: "For a more consistent session:",
    },
    {
      type: "list",
      items: [
        "use a keyboard when possible;",
        "keep your fingers on Left and Right;",
        "focus on the center position;",
        "avoid background distractions;",
        "respond promptly but accurately;",
        "complete all trials;",
        "and do not restart simply because of one mistake.",
      ],
    },
    {
      type: "paragraph",
      text: "If you repeat the test, keep the trial count and device the same.",
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
          question: "Who created the flanker task?",
          answer: "Barbara A. Eriksen and Charles W. Eriksen introduced the classic paradigm in 1974.",
        },
        {
          question: "What is a congruent flanker trial?",
          answer: "The center target and surrounding flankers point toward the same response.",
        },
        {
          question: "What is an incongruent trial?",
          answer: "The center target points one direction while the flankers activate the opposite response.",
        },
        {
          question: "What does the flanker effect measure?",
          answer: "It is the performance difference between incongruent and congruent trials, commonly expressed as a reaction-time difference.",
        },
        {
          question: "Is a larger flanker effect always worse?",
          answer: "No. Interpretation also depends on accuracy, overall response speed, protocol, and sampling variability.",
        },
        {
          question: "Why are incongruent trials slower?",
          answer:
            "The irrelevant flankers activate a competing response, creating conflict that must be resolved before or during response selection.",
        },
        {
          question: "Is this a clinical attention test?",
          answer: "No. It is a browser implementation of a research paradigm for education and personal comparison.",
        },
      ],
    },
    {
      type: "heading",
      text: "Focus on the Middle",
    },
    {
      type: "paragraph",
      text: "The instructions never change:",
    },
    {
      type: "paragraph",
      text: "**respond to the center arrow.**",
    },
    {
      type: "paragraph",
      text: "Yet the surrounding arrows still influence behavior.",
    },
    {
      type: "paragraph",
      text: "That contrast—simple instructions, measurable interference—is what has made the Eriksen flanker task such a useful demonstration of selective attention and response competition for decades.",
    },
  ],
};
