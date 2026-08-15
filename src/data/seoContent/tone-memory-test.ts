import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you hold a short sequence of pitches in memory long enough to notice when one note changes? Take this free **Tone Memory Test** to challenge short-term auditory memory for pitch patterns. You will hear one tone sequence, wait briefly, then hear a second sequence, and your task is simple: same or different?",
    },
    {
      type: "paragraph",
      text: "On different trials, one pitch may change while the timing stays constant. Longer sequences and smaller pitch changes make the task more difficult.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Tone Memory Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Use headphones if possible.",
        "Listen carefully to the first sequence.",
        "Hold the pitch pattern in memory during the delay.",
        "Listen to the second sequence.",
        "Decide whether it is identical or contains a changed tone.",
        "Continue through different sequence lengths and pitch differences.",
        "Review accuracy by difficulty.",
      ],
    },
    { type: "paragraph", text: "Do not use an instrument, tuner, or external recording. The goal is to test auditory memory rather than external comparison." },
    { type: "heading", text: "What Is Tone Memory?" },
    {
      type: "paragraph",
      text: "Tone memory is the ability to retain pitch information for a short period. Imagine hearing low – medium – high – medium; after a pause, you hear another four-tone sequence. To answer correctly, you must encode the first sequence, maintain its pitch relationships, and compare the later sequence with your memory. This is different from simply deciding whether two simultaneous or immediately adjacent sounds differ — the first sound pattern is gone when the second begins, so memory has to bridge the gap.",
    },
    { type: "heading", text: "Tone Memory vs. Pitch Discrimination" },
    {
      type: "paragraph",
      text: "Your existing [Pitch Discrimination Test](/test/pitch-discrimination-test) primarily measures how finely you can distinguish pitch differences: hear two tones and decide which is higher or whether they differ. Tone Memory adds a retention requirement — hear a sequence, remember it through a delay, then compare it with a later sequence. A listener can have excellent fine pitch discrimination yet find longer tone sequences difficult to retain, so the tests are related but not interchangeable.",
    },
    { type: "heading", text: "A Same-Different Sequence Paradigm" },
    {
      type: "paragraph",
      text: "A browser-friendly design can use paired sequences. First sequence C–E–G–D and second sequence C–E–G–D gives the correct answer \"same.\" On another trial, first sequence C–E–G–D and second sequence C–E–F♯–D gives the correct answer \"different.\" Only one element changes, which makes the scoring easy to understand while allowing precise control over difficulty.",
    },
    { type: "heading", text: "Sequence Length and Delay Length" },
    {
      type: "paragraph",
      text: "The number of tones matters — research on tonal working memory has found that performance becomes harder as more notes must be maintained. A progressive test might use 3, 4, 5, 6, or 7 tones; longer sequences increase memory load and make neighboring tones easier to confuse, so the result should report accuracy by sequence length instead of only one overall percentage. Tone memory can also weaken as the retention delay increases — a short delay places relatively little demand on maintenance, while a longer silent interval gives the memory trace more time to decay or become disrupted. An advanced version could compare a short delay and a long delay while keeping the pitch sequences identical, scored separately since they measure different retention demands.",
    },
    { type: "heading", text: "Tonal Interference" },
    {
      type: "paragraph",
      text: "What happens during the delay also matters. If unrelated tones are played between the first and second sequence, they can interfere with memory for the original pitches. This creates a useful contrast between a silent delay, where nothing auditory occurs between sequences, and an interference delay, where irrelevant tones occur during retention. The second condition tests resistance to auditory interference rather than passage of time alone, and studies of pitch memory have shown that both time and tonal interference can affect performance.",
    },
    { type: "heading", text: "Absolute Pitch vs. Relative Pitch and Melodic Contour" },
    {
      type: "paragraph",
      text: "You do not need absolute pitch, or \"perfect pitch,\" to perform well. A Tone Memory Test can usually be solved using relative pitch, melodic contour, interval relationships, and overall pattern memory — you may not know the note names, but you can still remember whether the sequence moved up–up–down, which can be enough to detect many changes. Melodic contour describes whether successive tones move up, down, or stay the same; two sequences can share the same contour while differing in exact intervals, for example C–D–G and C–E–A both rise twice. A hard Tone Memory Test can therefore include changes that preserve contour but alter interval size, preventing users from relying only on a rough up/down pattern.",
    },
    { type: "heading", text: "Tonality and Order" },
    {
      type: "paragraph",
      text: "Tone sequences that fit familiar musical structures can sometimes be remembered differently from atonal or weakly structured sequences, and research has shown that tonal context can affect memory for pitch and short melodies. For the primary browser score, use one consistent generation rule, with an optional advanced mode comparing tonal and atonal patterns. Tone memory is also not only about which pitches were present but where they occurred — if the first sequence is C–E–G–D and the second is C–G–E–D, the same four notes appear but the middle positions have swapped. A good advanced mode can distinguish pitch-change trials, where one pitch changes, from order-change trials, where the same pitches appear in a different order, reported separately.",
    },
    { type: "heading", text: "Why Same and Different Trials Must Be Balanced" },
    {
      type: "paragraph",
      text: "If most trials are different, a user could score well by repeatedly choosing \"different.\" A fair version should use roughly equal numbers of same and different trials and randomize their order, reducing simple response guessing. If enough trials are collected, hit rate and false-alarm rate can also be reported.",
    },
    { type: "heading", text: "Tone Memory vs. Verbal Memory and Rhythm Discrimination" },
    {
      type: "paragraph",
      text: "Your [Verbal Memory Test](/test/verbal-memory-test) uses meaningful words that can be rehearsed linguistically. Pure tones are less easily labeled, especially for listeners without musical training, so Tone Memory provides a useful nonverbal auditory-memory challenge — it should not be treated as a direct substitute for verbal memory, since different materials place different demands on memory. The [Rhythm Discrimination Test](/test/rhythm-discrimination-test) focuses on timing, keeping pitch stable or irrelevant while manipulating temporal pattern, whereas Tone Memory keeps timing stable and manipulates pitch. That separation makes the two auditory tests complementary rather than redundant.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful outputs include overall accuracy (percent of same/different decisions correct), same-trial accuracy (how reliably exact repetitions were recognized), change-trial accuracy (how reliably altered sequences were detected), sequence-length accuracy (performance as memory load increased), pitch-change difficulty (accuracy for large versus subtle changes), and an optional delay effect (performance after short versus longer retention intervals). This gives more information than one vague \"musical memory\" score.",
    },
    { type: "heading", text: "What Is a Good Tone Memory Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser implementation. Performance depends on sequence length, pitch spacing, delay, interference, tonality, audio hardware, and musical experience. Do not label 90% as \"perfect musical memory\" or 60% as \"poor auditory memory\" without norms collected using the exact same task. Repeated personal comparison is most meaningful when the same device and settings are used.",
    },
    { type: "heading", text: "Can This Diagnose Amusia?" },
    {
      type: "paragraph",
      text: "No. Pitch-memory difficulties have been studied in congenital amusia, and research has found faster decline of pitch memory in affected groups under some conditions, but a browser Tone Memory Test cannot diagnose amusia. A low score may reflect hearing conditions, poor pitch discrimination, distraction, unfamiliarity, device audio, or normal variation. Clinical or research diagnosis requires validated assessment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Tone Memory Test?", answer: "A task where you remember a tone or tone sequence and compare it with a later sequence." },
        { question: "Is it the same as pitch discrimination?", answer: "No. Pitch discrimination is mainly perceptual; Tone Memory requires retention over time." },
        { question: "Do I need perfect pitch?", answer: "No. Relative pitch and melodic contour can support performance." },
        { question: "Do longer sequences make the test harder?", answer: "Generally yes because more pitch information must be retained." },
        { question: "Can other sounds during the delay interfere?", answer: "Yes. Intervening tones can disrupt pitch memory." },
        { question: "Does musical training help?", answer: "It can help on some tonal-memory tasks, although the effect depends on the procedure." },
        { question: "Can this diagnose amusia?", answer: "No. It is an auditory-memory task, not a diagnostic assessment." },
      ],
    },
    {
      type: "paragraph",
      text: "The first sequence disappears as soon as it ends, and nothing remains to inspect. To answer correctly, you must preserve an internal representation of the pitch pattern and compare the next sequence against it. That combination of listening, maintaining, and comparing is what makes Tone Memory different from simply hearing whether one note is higher than another.",
    },
  ],
};
