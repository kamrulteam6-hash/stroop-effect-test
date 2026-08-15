import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you hear the difference between two notes when the pitch gap becomes extremely small?",
    },
    {
      type: "paragraph",
      text: "Take this free **Pitch Discrimination Test** to challenge your ability to tell whether a second tone is higher or lower than the first. The test uses a 440 Hz reference tone and gradually reduces the pitch difference across 12 rounds.",
    },
    {
      type: "paragraph",
      text: "Your result shows the **smallest pitch gap you correctly identified during this session**, measured in cents.",
    },
    {
      type: "paragraph",
      text: "Headphones are recommended. Use a comfortable listening level, test in a quiet room, and compare future scores using the same device and audio setup.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Pitch Discrimination Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Listen to the first reference tone.",
        "Listen to the second tone.",
        "Decide whether the second tone is **Higher** or **Lower**.",
        "Replay the pair if you genuinely need another listen.",
        "Continue as the pitch difference becomes smaller.",
        "Finish all 12 rounds and review the smallest gap you identified correctly.",
      ],
    },
    {
      type: "paragraph",
      text: "The direction changes between trials, so you cannot simply predict whether the next tone will rise or fall.",
    },
    {
      type: "paragraph",
      text: "For fair self-comparison, use the same headphones, volume, and testing environment each time.",
    },
    {
      type: "heading",
      text: "What Does a Pitch Discrimination Test Measure?",
    },
    {
      type: "paragraph",
      text: "Pitch discrimination is your ability to notice a difference in **fundamental frequency** between sounds.",
    },
    {
      type: "paragraph",
      text: "If two pure tones are close in frequency, they may sound almost identical. As the gap becomes larger, the difference becomes easier to hear.",
    },
    {
      type: "paragraph",
      text: "This test asks a specific relative-pitch question:",
    },
    {
      type: "paragraph",
      text: "**Is the second tone higher or lower than the first?**",
    },
    {
      type: "paragraph",
      text: "That is different from identifying the exact musical note, singing it back, or recognizing a melody.",
    },
    {
      type: "paragraph",
      text: "Your result reflects performance on a short comparison task. It can be influenced by auditory sensitivity, attention, listening experience, musical training, equipment, and normal guessing variation.",
    },
    {
      type: "heading",
      text: "What Are Cents?",
    },
    {
      type: "paragraph",
      text: "A **cent** is a logarithmic unit used to describe small pitch intervals.",
    },
    {
      type: "paragraph",
      text: "In the equal-tempered musical system:",
    },
    {
      type: "paragraph",
      text: "**100 cents = 1 semitone**",
    },
    {
      type: "paragraph",
      text: "and:",
    },
    {
      type: "paragraph",
      text: "**1,200 cents = 1 octave**",
    },
    {
      type: "paragraph",
      text: "That makes cents useful for describing differences that are much smaller than a whole musical note.",
    },
    {
      type: "paragraph",
      text: "For example:",
    },
    {
      type: "list",
      items: [
        "300 cents = 3 semitones;",
        "100 cents = 1 semitone;",
        "50 cents = half a semitone;",
        "25 cents = one quarter of a semitone;",
        "5 cents = one twentieth of a semitone.",
      ],
    },
    {
      type: "paragraph",
      text: "This test narrows the difference from a clearly audible interval toward very small changes.",
    },
    {
      type: "paragraph",
      text: "A lower correctly identified gap indicates finer pitch discrimination **on this test**.",
    },
    {
      type: "heading",
      text: "Is This a Relative Pitch Test?",
    },
    {
      type: "paragraph",
      text: "Yes, in a limited sense.",
    },
    {
      type: "paragraph",
      text: "**Relative pitch** means judging pitch relationships using a reference.",
    },
    {
      type: "paragraph",
      text: "If you hear one tone and then decide that another is higher, lower, or a certain interval away, you are using relative pitch information.",
    },
    {
      type: "paragraph",
      text: "This test focuses on one narrow component: **fine pitch-direction discrimination**.",
    },
    {
      type: "paragraph",
      text: "It does not test whether you can identify intervals such as a perfect fifth, recognize chord progressions, sing a melody by ear, or reproduce a note accurately.",
    },
    {
      type: "paragraph",
      text: "Those are related musical skills, but they are not the same task.",
    },
    {
      type: "heading",
      text: "Pitch Discrimination vs. Perfect Pitch",
    },
    {
      type: "paragraph",
      text: "This test does **not** measure perfect pitch.",
    },
    {
      type: "paragraph",
      text: "Perfect pitch, also called **absolute pitch**, is the ability to identify or produce a musical note without hearing a reference first.",
    },
    {
      type: "paragraph",
      text: "For example, someone with absolute pitch might hear a single tone and say, “That is F-sharp.”",
    },
    {
      type: "paragraph",
      text: "This test always gives you a reference tone before the comparison tone. You only need to judge whether the second tone moved upward or downward.",
    },
    {
      type: "paragraph",
      text: "A person can have excellent pitch discrimination without having perfect pitch.",
    },
    {
      type: "paragraph",
      text: "Likewise, perfect pitch is not required to sing, play an instrument, or develop strong musical listening skills.",
    },
    {
      type: "heading",
      text: "Is This a Tone Deaf Test?",
    },
    {
      type: "paragraph",
      text: "People often search for a **tone deaf test** when they really want to know whether they can hear pitch differences.",
    },
    {
      type: "paragraph",
      text: "This test can explore one part of that question, but it cannot diagnose true tone deafness.",
    },
    {
      type: "paragraph",
      text: "The clinical/research term often associated with severe lifelong difficulty processing musical pitch is **congenital amusia**. Amusia is broader than simply missing one or two small pitch differences.",
    },
    {
      type: "paragraph",
      text: "Researchers use multi-part assessment batteries involving melody, pitch, rhythm, memory, and other musical judgments. The U.S. National Institute on Deafness and Other Communication Disorders also provides an online version of the established **Distorted Tunes Test**, which asks listeners to identify melodies containing altered notes.",
    },
    {
      type: "paragraph",
      text: "A short 12-round higher/lower test is much narrower.",
    },
    {
      type: "paragraph",
      text: "A poor result does not prove that you have amusia.",
    },
    {
      type: "heading",
      text: "Why One Pitch Threshold Should Not Diagnose Amusia",
    },
    {
      type: "paragraph",
      text: "Pitch-discrimination ability varies continuously.",
    },
    {
      type: "paragraph",
      text: "Research comparing people with congenital amusia and control participants has found that amusic groups can show larger pitch-discrimination thresholds on average, but their scores can also overlap with people without amusia.",
    },
    {
      type: "paragraph",
      text: "That matters because it shows why a single number is not enough for diagnosis.",
    },
    {
      type: "paragraph",
      text: "Your result may also change with:",
    },
    {
      type: "list",
      items: [
        "the kind of tone used;",
        "frequency range;",
        "sound level;",
        "number of trials;",
        "adaptive method;",
        "musical experience;",
        "attention;",
        "and equipment.",
      ],
    },
    {
      type: "paragraph",
      text: "Treat the result as a **personal pitch-sensitivity benchmark**, not a clinical cutoff.",
    },
    {
      type: "heading",
      text: "Is the Smallest Correct Gap a True Hearing Threshold?",
    },
    {
      type: "paragraph",
      text: "Not exactly.",
    },
    {
      type: "paragraph",
      text: "In psychophysical research, a discrimination threshold is usually estimated using repeated trials and a controlled adaptive or statistical method.",
    },
    {
      type: "paragraph",
      text: "This browser test uses a short sequence of progressively smaller differences. Your result is therefore best described as:",
    },
    {
      type: "paragraph",
      text: "**the smallest pitch gap you correctly identified in this session**",
    },
    {
      type: "paragraph",
      text: "rather than a laboratory-grade just-noticeable difference.",
    },
    {
      type: "paragraph",
      text: "One lucky guess at a difficult level can make the smallest-correct value look better. One momentary mistake can make it look worse.",
    },
    {
      type: "paragraph",
      text: "Repeat the test on different days before treating one result as your stable level.",
    },
    {
      type: "heading",
      id: "good-score",
      text: "What Is a Good Pitch Discrimination Score?",
    },
    {
      type: "paragraph",
      text: "There is no universal browser score that cleanly separates “excellent,” “average,” and “tone deaf.”",
    },
    {
      type: "paragraph",
      text: "Published studies use different tone frequencies, timbres, durations, procedures, and threshold calculations.",
    },
    {
      type: "paragraph",
      text: "Musical experience also matters. Research commonly finds that musicians, as a group, discriminate smaller pitch differences than non-musicians, although individual results overlap.",
    },
    {
      type: "paragraph",
      text: "Instead of relying on one generic cutoff, compare your own results under the same conditions.",
    },
    {
      type: "paragraph",
      text: "If you move from correctly identifying 50-cent differences to consistently recognizing smaller gaps across repeated sessions, that is meaningful improvement on this task.",
    },
    {
      type: "heading",
      text: "Does Musical Training Improve Pitch Discrimination?",
    },
    {
      type: "paragraph",
      text: "Musicians often perform better on fine pitch-discrimination tasks than people without musical training.",
    },
    {
      type: "paragraph",
      text: "That relationship makes sense: instrumentalists and singers repeatedly listen for tuning differences, melodic intervals, and intonation.",
    },
    {
      type: "paragraph",
      text: "Training can improve task-specific listening skills, but it is difficult to reduce the difference to one simple cause. People who choose long-term musical training may also differ in prior ability and listening experience.",
    },
    {
      type: "paragraph",
      text: "For practical purposes, focused ear training can make you more familiar with small pitch differences.",
    },
    {
      type: "paragraph",
      text: "Do not expect every improvement to appear immediately after one session.",
    },
    {
      type: "heading",
      text: "Why Your Audio Setup Matters",
    },
    {
      type: "paragraph",
      text: "Playback hardware and background noise can affect fine judgments. Use the same headphones, keep the volume comfortable and unchanged, avoid unusual audio effects, and test in a quiet environment.",
    },
    {
      type: "paragraph",
      text: "Consistency matters more than expensive equipment.",
    },
    {
      type: "heading",
      text: "Why Can I Hear the Difference but Sing the Wrong Note?",
    },
    {
      type: "paragraph",
      text: "Pitch perception and pitch production are related but separate skills.",
    },
    {
      type: "paragraph",
      text: "You may correctly hear that one tone is higher than another yet struggle to control your voice accurately enough to reproduce the target pitch.",
    },
    {
      type: "paragraph",
      text: "Singing also involves:",
    },
    {
      type: "list",
      items: [
        "vocal motor control;",
        "breath support;",
        "auditory feedback;",
        "learned coordination;",
        "and practice.",
      ],
    },
    {
      type: "paragraph",
      text: "Failing to sing in tune does not automatically mean that you cannot perceive pitch.",
    },
    {
      type: "paragraph",
      text: "Likewise, passing a pitch-discrimination test does not guarantee accurate singing.",
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
          question: "What does a lower cent score mean?",
          answer: "A lower value means you correctly distinguished a smaller pitch difference during the test.",
        },
        {
          question: "Is 5 cents a very small difference?",
          answer:
            "Yes. Five cents is one twentieth of a semitone. Whether you can reliably detect that difference depends on the test method, sound, listening experience, and individual ability.",
        },
        {
          question: "Does this test measure perfect pitch?",
          answer: "No. You are comparing two tones, so this is a relative pitch-discrimination task.",
        },
        {
          question: "Can this test diagnose tone deafness?",
          answer:
            "No. True congenital amusia is assessed with broader validated testing. A poor result here can have many explanations.",
        },
        {
          question: "Why can I replay the tones?",
          answer:
            "Replay can help when you were distracted or did not hear the pair clearly. If you are tracking improvement, try to use a similar replay strategy each session.",
        },
        {
          question: "Can non-musicians have good pitch discrimination?",
          answer:
            "Yes. Musical training is associated with finer discrimination on average, but individual ability varies widely.",
        },
        {
          question: "Why is A4 set to 440 Hz?",
          answer: "440 Hz is a common modern tuning reference for A4. You do not need to recognize the note to take the test.",
        },
      ],
    },
    {
      type: "heading",
      text: "Test Your Pitch Again",
    },
    {
      type: "paragraph",
      text: "Use the same headphones, volume, and environment and repeat the test another day.",
    },
    {
      type: "paragraph",
      text: "Do not focus only on your single smallest correct interval.",
    },
    {
      type: "paragraph",
      text: "Look for **repeatability**.",
    },
    {
      type: "paragraph",
      text: "If you can consistently identify smaller pitch differences without relying on repeated guessing, you are building a much stronger picture of your actual pitch-discrimination ability.",
    },
  ],
};
