import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you remember where something appeared? This Spatial Memory Test measures how precisely you can remember and recall a location — a dot briefly flashes somewhere on the screen, and after a short delay you click the exact spot where it appeared, across eight rounds.",
    },
    {
      type: "paragraph",
      text: "This is a cognitive performance test, not a diagnosis of dementia, brain injury, ADHD, or another neurological condition.",
    },
    { type: "heading", id: "what-is-spatial-memory", text: "What Is Spatial Memory?" },
    {
      type: "paragraph",
      text: "Spatial memory is memory for where things are located and how positions relate to one another. You use it when you remember where you parked, which drawer contains an item, where pieces are located on a game board, the path through a building, or where an icon appeared on a screen. Spatial memory can operate over very short periods or much longer ones — this test focuses on short-term visuospatial memory for a single precise location after a brief delay.",
    },
    { type: "heading", id: "location-vs-sequence", text: "Location Memory vs. Sequence Memory" },
    {
      type: "paragraph",
      text: "Visuospatial memory tasks can measure different things. Some tasks, like the classic Corsi Block-Tapping Task, ask you to reproduce a sequence of several locations in the order they appeared — that emphasizes spatial sequence memory. This test instead asks a more precise question about a single location at a time: exactly where, in continuous space, did the dot appear? That makes it more a test of spatial precision and location memory than of ordered-sequence recall.",
    },
    { type: "heading", id: "corsi-task", text: "The Corsi Block-Tapping Task" },
    {
      type: "paragraph",
      text: "One of the best-known tests of visuospatial memory is the Corsi Block-Tapping Task. The traditional task uses nine blocks arranged in an irregular spatial pattern, and the examiner taps a sequence of blocks that the participant then reproduces, with the sequence growing longer as performance improves. The longest reliably reproduced sequence provides an estimate of spatial span. Digital versions such as eCorsi have examined how computerized administration compares with traditional approaches. This site's test is a related but distinct single-location memory task, not the Corsi task itself.",
    },
    { type: "heading", id: "why-precise-location", text: "Why Test Precise Location Instead of a Sequence?" },
    {
      type: "paragraph",
      text: "A sequence task tests whether you remember the order of several discrete points. A precise-location task tests something different: how accurately your memory preserves a continuous spatial position once the visual cue is gone. Your click might land close to the original spot but not exactly on it — that distance is itself meaningful data, since it reflects how much the remembered location has drifted or degraded during the delay, rather than a simple correct-or-incorrect judgment.",
    },
    { type: "heading", id: "vs-visual-memory", text: "Spatial Memory vs. Visual Memory" },
    {
      type: "paragraph",
      text: "These concepts overlap. Visual memory can involve remembering what something looked like — for example, that a shape was a red triangle. Spatial memory emphasizes where it was, such as remembering it appeared in the upper-right corner. A test can involve both, but this test's score specifically reflects location accuracy rather than memory for visual features.",
    },
    { type: "heading", id: "vs-short-term-memory", text: "Spatial Memory vs. Short-Term Memory" },
    {
      type: "paragraph",
      text: "Short-term memory is broader and can involve digits, letters, words, or visual information. Our [Short-Term Memory Test](/test/short-term-memory-test) uses verbal material, while spatial memory focuses specifically on locations. Someone may perform strongly on a word-recall task but less strongly on a location-memory task, because verbal and visuospatial memory are not identical systems.",
    },
    { type: "heading", id: "vs-visual-attention", text: "Spatial Memory vs. Visual Attention" },
    {
      type: "paragraph",
      text: "Attention determines which locations get encoded in the first place. If you look away right as the dot flashes, forgetting the location afterward is not a pure memory failure — it starts as an attention failure. Our [Visual Attention Test](/test/visual-attention-test) focuses more directly on selecting and detecting visual targets, while this Spatial Memory Test adds the additional requirement of retaining the location after the signal disappears. Good encoding requires both attention and memory.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Spatial Memory Score Means" },
    {
      type: "paragraph",
      text: "A lower score means your clicks landed farther from the actual location on average, or missed by a larger margin as the delay or difficulty increased. A mid-range score means you were often close but not always precise. A higher score means you consistently clicked very near the true location across rounds — that indicates strong performance on this task, though it does not mean every aspect of memory or navigation is equally strong.",
    },
    { type: "heading", id: "why-screen-size-matters", text: "Why Screen Size Matters" },
    {
      type: "paragraph",
      text: "This task depends on visual geometry, so changing the screen can change the experience. On a phone, the available area is smaller and tapping may be less precise; on a desktop, distances may be larger. If you want to track scores over time, try to use the same device and orientation for a fair comparison.",
    },
    { type: "heading", id: "motor-errors", text: "Motor Errors Can Look Like Memory Errors" },
    {
      type: "paragraph",
      text: "Suppose you remember the correct location well but your click lands slightly off due to an imprecise tap or a shaky mouse movement. The software records that as a location error even though the memory itself may have been accurate. To reduce this, use a comfortable input method, avoid rushing your click, and use a device you are used to.",
    },
    { type: "heading", id: "why-practice-improves-score", text: "Why Practice Can Improve Your Score" },
    {
      type: "paragraph",
      text: "After several rounds, you may learn strategies — anchoring the location relative to the edges of the screen, mentally dividing the area into a grid, or simply becoming more comfortable with the click precision required. These strategies can improve performance, and you may also become familiar with the layout and response method. That is why immediate repeated testing can create practice effects; a higher second score does not automatically mean your general spatial-memory capacity changed.",
    },
    { type: "heading", id: "not-navigation", text: "Spatial Memory and Navigation" },
    {
      type: "paragraph",
      text: "Spatial memory contributes to navigation, but this test is not a full navigation assessment. Real navigation can involve landmarks, direction, distance, route learning, maps, and environmental context — remembering where one dot flashed on a screen is much narrower. Avoid claims such as \"your score proves you have an excellent sense of direction\"; it measures precise location memory under controlled conditions.",
    },
    { type: "heading", id: "not-dementia-test", text: "Does a Low Score Mean Dementia?" },
    {
      type: "paragraph",
      text: "No. Spatial-memory tasks are used in neuropsychological research and can show impairment in some neurological conditions, but one online test cannot diagnose a disease. Performance can be affected by distraction, fatigue, age, vision, motor accuracy, device design, anxiety, or misunderstanding instructions. Clinical interpretation requires standardized testing and broader evidence.",
    },
    { type: "heading", id: "cleaner-result", text: "How to Get a Cleaner Result" },
    {
      type: "list",
      ordered: true,
      items: [
        "Use a stable device.",
        "Keep the screen orientation fixed.",
        "Maximize the test area.",
        "Remove distractions.",
        "Watch every round from the beginning.",
        "Do not write down or mark locations.",
        "Avoid immediate repeated retesting.",
      ],
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is spatial memory?", answer: "Spatial memory is memory for locations, positions, spatial relationships, and routes." },
        { question: "What is the Corsi Block-Tapping Task?", answer: "It is a widely used visuospatial memory task in which participants reproduce sequences of spatial locations." },
        { question: "How is this test different from the Corsi task?", answer: "Instead of reproducing a sequence of several points in order, this test asks you to precisely recall one continuous location at a time." },
        { question: "Is spatial memory the same as visual memory?", answer: "No. Visual memory emphasizes what something looked like, while spatial memory emphasizes where it was located." },
        { question: "Why did my click land near but not exactly on the target?", answer: "Small distance errors are normal and reflect how precisely a location is remembered rather than a simple pass or fail." },
        { question: "Can an online Spatial Memory Test diagnose dementia?", answer: "No. It measures task performance and cannot diagnose a neurological condition." },
      ],
    },
    { type: "heading", text: "Remember the Place, Not Just the Picture" },
    {
      type: "paragraph",
      text: "Spatial memory asks a specific question: where was it? Can you reproduce the exact spot after the display disappears? That is different from remembering a word or recognizing an image. Your score shows how precisely you retained location during the test — one important piece of memory, not the whole system.",
    },
  ],
};
