import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you keep track of which words have already appeared as the list keeps growing?",
    },
    {
      type: "paragraph",
      text: "Take this free **Verbal Memory Test** using a continuous old/new recognition task. One word appears at a time. Choose:",
    },
    {
      type: "paragraph",
      text: "**NEW** if the word has not appeared earlier in the current game.",
    },
    {
      type: "paragraph",
      text: "**SEEN** if you recognize it as a repeat.",
    },
    {
      type: "paragraph",
      text: "Choose 3 or 5 lives before starting. Each incorrect response costs one life, and the test ends when your lives are gone.",
    },
    {
      type: "paragraph",
      text: "Your score is the number of words you correctly classify before the game ends. It is best used as a personal benchmark for this exact task—not as a clinical memory score or a population percentile.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Verbal Memory Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Choose 3 or 5 lives.",
        "Press **Start Test**.",
        "Read the word in the center of the screen.",
        "Click **NEW** if it has not appeared earlier in this session.",
        "Click **SEEN** if it has appeared before.",
        "Continue as new words and repeats are mixed together.",
        "Every mistake removes one life.",
        "Review your final score when all lives are gone.",
      ],
    },
    {
      type: "paragraph",
      text: "Use the same number of lives when comparing attempts.",
    },
    {
      type: "paragraph",
      text: "A 5-life score will usually have more opportunity to grow than a 3-life score simply because more mistakes are allowed before the session ends.",
    },
    {
      type: "heading",
      id: "what-it-measures",
      text: "What Kind of Memory Does This Test Use?",
    },
    {
      type: "paragraph",
      text: "This is primarily a **continuous recognition memory task**.",
    },
    {
      type: "paragraph",
      text: "In laboratory continuous-recognition experiments, items appear one after another and the participant repeatedly decides whether each item is:",
    },
    {
      type: "paragraph",
      text: "**old — encountered earlier**",
    },
    {
      type: "paragraph",
      text: "or",
    },
    {
      type: "paragraph",
      text: "**new — not encountered earlier**",
    },
    {
      type: "paragraph",
      text: "That is very close to the structure of this browser game.",
    },
    {
      type: "paragraph",
      text: "The task involves more than one simple memory store. Successful performance can depend on:",
    },
    {
      type: "list",
      items: [
        "remembering prior words;",
        "recognizing familiarity;",
        "recollecting earlier appearances;",
        "keeping attention on the stream;",
        "distinguishing genuine repeats from merely familiar English words;",
        "and maintaining a consistent decision rule.",
      ],
    },
    {
      type: "paragraph",
      text: "Calling the result simply “short-term memory capacity” is therefore too narrow.",
    },
    {
      type: "heading",
      text: "Recognition vs. Recall",
    },
    {
      type: "paragraph",
      text: "Recognition and recall are different retrieval tasks.",
    },
    {
      type: "subheading",
      text: "Recognition",
    },
    {
      type: "paragraph",
      text: "The possible memory item is shown to you.",
    },
    {
      type: "paragraph",
      text: "You decide whether it was encountered before.",
    },
    {
      type: "paragraph",
      text: "That is what this test requires.",
    },
    {
      type: "subheading",
      text: "Recall",
    },
    {
      type: "paragraph",
      text: "You must produce the information yourself without seeing the answer.",
    },
    {
      type: "paragraph",
      text: "For example, the [Number Memory Test](/test/number-memory-test) requires you to type a digit sequence after it disappears.",
    },
    {
      type: "paragraph",
      text: "Recognition often provides more retrieval support because the item itself acts as a cue.",
    },
    {
      type: "paragraph",
      text: "But it is too strong to say recognition is always an easier or more reliable measure in every situation.",
    },
    {
      type: "paragraph",
      text: "Difficulty depends on:",
    },
    {
      type: "list",
      items: ["similarity between targets and lures;", "retention interval;", "number of items;", "word frequency;", "response criterion;", "and the exact test procedure."],
    },
    {
      type: "paragraph",
      text: "This game is specifically an **old/new word-recognition challenge**.",
    },
    {
      type: "heading",
      text: "Familiarity vs. Recollection",
    },
    {
      type: "paragraph",
      text: "Recognition memory is often discussed in terms of two kinds of evidence.",
    },
    {
      type: "subheading",
      text: "Familiarity",
    },
    {
      type: "paragraph",
      text: "A word simply feels as though you encountered it before.",
    },
    {
      type: "paragraph",
      text: "You may not remember exactly when.",
    },
    {
      type: "subheading",
      text: "Recollection",
    },
    {
      type: "paragraph",
      text: "You retrieve some detail about the earlier encounter.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "paragraph",
      text: "**“I remember seeing RIVER just after WINDOW.”**",
    },
    {
      type: "paragraph",
      text: "Both can contribute to a SEEN response.",
    },
    {
      type: "paragraph",
      text: "A word may feel familiar because it is common in everyday language even when it has not appeared in the current session.",
    },
    {
      type: "paragraph",
      text: "That is why recognition requires deciding whether familiarity belongs to **this game**, not merely whether the word is familiar in general.",
    },
    {
      type: "heading",
      text: "Hits, Misses, False Alarms, and Correct Rejections",
    },
    {
      type: "paragraph",
      text: "A complete old/new recognition task contains four basic outcomes.",
    },
    {
      type: "subheading",
      text: "Hit",
    },
    {
      type: "paragraph",
      text: "A repeated word appears and you correctly choose **SEEN**.",
    },
    {
      type: "subheading",
      text: "Miss",
    },
    {
      type: "paragraph",
      text: "A repeated word appears but you choose **NEW**.",
    },
    {
      type: "subheading",
      text: "Correct Rejection",
    },
    {
      type: "paragraph",
      text: "A genuinely new word appears and you correctly choose **NEW**.",
    },
    {
      type: "subheading",
      text: "False Alarm",
    },
    {
      type: "paragraph",
      text: "A genuinely new word appears but you choose **SEEN**.",
    },
    {
      type: "paragraph",
      text: "These distinctions matter because two players can make the same number of errors in very different ways.",
    },
    {
      type: "paragraph",
      text: "One may forget repeats.",
    },
    {
      type: "paragraph",
      text: "Another may frequently call new words “seen.”",
    },
    {
      type: "paragraph",
      text: "A single total score hides that difference.",
    },
    {
      type: "heading",
      text: "Why Score Is Not the Same as Memory Capacity",
    },
    {
      type: "paragraph",
      text: "Suppose you correctly classify 30 words before running out of lives.",
    },
    {
      type: "paragraph",
      text: "That does **not** mean your memory capacity is exactly 30 words.",
    },
    {
      type: "paragraph",
      text: "Several reasons make that interpretation too simple.",
    },
    {
      type: "paragraph",
      text: "First, the test includes both new words and repeats.",
    },
    {
      type: "paragraph",
      text: "Second, repeated words can have different delays between their first and later appearances.",
    },
    {
      type: "paragraph",
      text: "Third, each error consumes a life rather than immediately ending every version.",
    },
    {
      type: "paragraph",
      text: "Fourth, the result depends on the random or programmed order of the word stream.",
    },
    {
      type: "paragraph",
      text: "Fifth, your response strategy matters.",
    },
    {
      type: "paragraph",
      text: "A cautious player may avoid false alarms but miss uncertain repeats.",
    },
    {
      type: "paragraph",
      text: "Another may respond SEEN more freely and create the opposite pattern.",
    },
    {
      type: "paragraph",
      text: "Your final number is therefore a **game score from continuous recognition**, not a direct count of memory slots.",
    },
    {
      type: "heading",
      text: "Why the Delay Between Repetitions Matters",
    },
    {
      type: "paragraph",
      text: "A repeat that returns after only a few intervening words may be easier to recognize than one that returns much later.",
    },
    {
      type: "paragraph",
      text: "Recognition-memory research has repeatedly found that **retention interval and recency** influence performance.",
    },
    {
      type: "paragraph",
      text: "In a continuous stream, the burden therefore changes from trial to trial.",
    },
    {
      type: "paragraph",
      text: "Consider:",
    },
    {
      type: "paragraph",
      text: "**APPLE → three words later → APPLE**",
    },
    {
      type: "paragraph",
      text: "versus",
    },
    {
      type: "paragraph",
      text: "**APPLE → thirty words later → APPLE**",
    },
    {
      type: "paragraph",
      text: "Those are not equally demanding memory events.",
    },
    {
      type: "paragraph",
      text: "If two sessions use different repeat spacing, raw scores can differ even when the player has not changed.",
    },
    {
      type: "paragraph",
      text: "This is another reason fixed “10–17 average / 25+ elite” tables are difficult to justify without a large normative dataset from the exact game algorithm.",
    },
    {
      type: "heading",
      text: "Does Vocabulary Size Affect the Test?",
    },
    {
      type: "paragraph",
      text: "Vocabulary knowledge is not the primary target.",
    },
    {
      type: "paragraph",
      text: "You do not need to define a word to decide whether it appeared earlier.",
    },
    {
      type: "paragraph",
      text: "However, saying vocabulary has **no meaningful influence** would also be too strong.",
    },
    {
      type: "paragraph",
      text: "Word familiarity can influence recognition judgments.",
    },
    {
      type: "paragraph",
      text: "Common and familiar words may feel different from rare words, and prior language experience can affect how distinctively words are encoded.",
    },
    {
      type: "paragraph",
      text: "If the pool contains ordinary familiar English vocabulary, that helps keep the task accessible.",
    },
    {
      type: "paragraph",
      text: "But the test is still best described as **recognition of word occurrences**, not a vocabulary test.",
    },
    {
      type: "paragraph",
      text: "For word knowledge itself, use the [Vocabulary Size Test](/test/vocabulary-size-test).",
    },
    {
      type: "heading",
      text: "Three Lives vs. Five Lives",
    },
    {
      type: "paragraph",
      text: "The two modes should have separate personal benchmarks.",
    },
    {
      type: "subheading",
      text: "3 Lives",
    },
    {
      type: "paragraph",
      text: "The session ends after fewer mistakes.",
    },
    {
      type: "paragraph",
      text: "A lapse has a larger effect on total score.",
    },
    {
      type: "subheading",
      text: "5 Lives",
    },
    {
      type: "paragraph",
      text: "The session tolerates more errors.",
    },
    {
      type: "paragraph",
      text: "You can usually continue deeper into the stream.",
    },
    {
      type: "paragraph",
      text: "Five lives is not automatically a “less precise” memory test, and three lives is not automatically more scientifically valid.",
    },
    {
      type: "paragraph",
      text: "They simply use different stopping rules.",
    },
    {
      type: "paragraph",
      text: "If you want to track progress, choose one life setting and keep it constant.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "Is There a Good Verbal Memory Score?",
    },
    {
      type: "paragraph",
      text: "There is no defensible universal cutoff for this exact browser implementation unless scores are normed on a sufficiently large representative sample using the same:",
    },
    {
      type: "list",
      items: ["word pool;", "repeat schedule;", "number of lives;", "scoring rules;", "device conditions;", "and instructions."],
    },
    {
      type: "paragraph",
      text: "That means labels such as:",
    },
    {
      type: "paragraph",
      text: "**10–17 average**",
    },
    {
      type: "paragraph",
      text: "or",
    },
    {
      type: "paragraph",
      text: "**25+ elite**",
    },
    {
      type: "paragraph",
      text: "should not be presented as established scientific norms without supporting data.",
    },
    {
      type: "paragraph",
      text: "The better benchmark is your own repeated result under the same settings.",
    },
    {
      type: "paragraph",
      text: "Look for consistency across multiple sessions rather than one unusually high run.",
    },
    {
      type: "heading",
      text: "Can Strategy Improve Your Score?",
    },
    {
      type: "paragraph",
      text: "Yes.",
    },
    {
      type: "paragraph",
      text: "You can deliberately create stronger encoding.",
    },
    {
      type: "paragraph",
      text: "Useful strategies include:",
    },
    {
      type: "list",
      items: [
        "forming a quick mental image;",
        "linking a word to a category;",
        "noticing unusual words;",
        "briefly repeating a word internally;",
        "associating a word with something nearby in the stream.",
      ],
    },
    {
      type: "paragraph",
      text: "These can improve game performance.",
    },
    {
      type: "paragraph",
      text: "But they also change what the test measures.",
    },
    {
      type: "paragraph",
      text: "A heavily mnemonic strategy uses more deliberate encoding than simply recognizing naturally.",
    },
    {
      type: "paragraph",
      text: "If you want comparable results over time, use roughly the same strategy each session.",
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
          question: "What does the Verbal Memory Test measure?",
          answer: "Primarily continuous recognition of previously presented words, plus attention and decision processes.",
        },
        {
          question: "Is this a recall test?",
          answer: "No. The word is shown again and you judge whether it is old or new, so this is recognition.",
        },
        {
          question: "Does my score equal the number of words I can hold in memory?",
          answer: "No. The score depends on repeats, retention intervals, lives, word order, and response strategy.",
        },
        {
          question: "Is 25+ an elite score?",
          answer: "Not scientifically unless that cutoff is supported by normative data from this exact version.",
        },
        {
          question: "Is 5 lives easier than 3 lives?",
          answer: "It is more forgiving because the game continues through more mistakes. Compare scores only within the same life setting.",
        },
        {
          question: "Can vocabulary knowledge help?",
          answer: "The task does not test definitions, but word familiarity and language experience can influence recognition.",
        },
        {
          question: "Can this diagnose memory problems?",
          answer: "No. It is an online recognition-memory game, not a standardized clinical assessment.",
        },
      ],
    },
    {
      type: "heading",
      text: "Track What Was Actually Seen",
    },
    {
      type: "paragraph",
      text: "Every trial asks one deceptively simple question:",
    },
    {
      type: "paragraph",
      text: "**Was this word part of the current episode?**",
    },
    {
      type: "paragraph",
      text: "As the stream grows, familiarity is no longer enough.",
    },
    {
      type: "paragraph",
      text: "You have to separate words encountered **in this game** from words that merely feel familiar because you have known them for years.",
    },
    {
      type: "paragraph",
      text: "That makes the test an engaging demonstration of continuous recognition memory—and a much more precise description than treating the final score as a literal count of memory capacity.",
    },
  ],
};
