import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you find the important item quickly when the screen is full of competing information? This Visual Attention Test measures how efficiently you select relevant visual information by asking you to find the odd shape in a growing grid, as fast and accurately as you can.",
    },
    {
      type: "paragraph",
      text: "The test may measure target-detection accuracy, visual-search speed, missed targets, and performance as visual complexity increases. This is a cognitive performance test, not a diagnosis of ADHD, a visual disorder, dementia, or another neurological condition.",
    },
    { type: "heading", id: "what-is-visual-attention", text: "What Is Visual Attention?" },
    {
      type: "paragraph",
      text: "Your eyes can receive far more information than you can consciously process in detail at one time. Visual attention helps prioritize part of that information. For example, when searching a crowded desk for your keys, you do not process every object equally — you use the target's expected shape, color, location, and current goal. Attention helps determine which visual information receives priority, which is why visual attention is often studied using search tasks like this one.",
    },
    { type: "heading", id: "selective-attention", text: "Selective Attention" },
    {
      type: "paragraph",
      text: "Selective attention means focusing on relevant information while reducing interference from irrelevant information. Imagine a grid containing many similar shapes and one odd shape that differs subtly. You must select the target while ignoring objects that share only some of its features. The difficulty depends partly on how similar the distractors are — a good Visual Attention Test manipulates this difficulty deliberately as the grid grows.",
    },
    { type: "heading", id: "visual-search", text: "Visual Search" },
    {
      type: "paragraph",
      text: "Visual search is one of the most important experimental paradigms in attention research. The basic question is simple: how efficiently can you find a target among distractors? Real-world search includes finding keys, locating a product on a shelf, searching medical images, detecting hazards, and finding a person in a crowd. Laboratory versions like this one simplify these situations so speed and accuracy can be measured precisely.",
    },
    { type: "heading", id: "feature-search", text: "Feature Search" },
    {
      type: "paragraph",
      text: "Some targets differ from distractors by one obvious feature — for example, one red circle among blue circles. The red target may appear to \"pop out,\" and reaction time may remain relatively efficient even when more distractors are added. This is often called a feature search, and it provides a useful easier condition in an online visual-attention test.",
    },
    { type: "heading", id: "conjunction-search", text: "Conjunction Search" },
    {
      type: "paragraph",
      text: "Now imagine the target is defined by a combination of features rather than one standout property — such as a specific orientation and color together. The visual system must do more selective work, and search often becomes slower as the number of distractors grows. This is a useful harder condition because it reveals how efficiently attention handles competing features, which is exactly why this test's grid grows larger as you progress.",
    },
    { type: "heading", id: "set-size", text: "Set Size Matters" },
    {
      type: "paragraph",
      text: "Searching among 4 objects is different from searching among 40 objects. In many search tasks, reaction time increases as set size grows, and the relationship between set size and search speed can reveal how efficiently the target is found. A strong test can therefore increase the number of distractors, their similarity, and the spatial spread as the grid expands — do not compare two users fairly if one received dramatically easier visual arrays.",
    },
    { type: "heading", id: "hits-misses-false-alarms", text: "Hits, Misses, and False Alarms" },
    {
      type: "paragraph",
      text: "Accuracy is more informative when broken down. A hit is correctly detecting the target. A miss is the target being present but you failing to detect it. A false alarm is clicking the wrong shape. A person who clicks impulsively may produce fast times but also many false alarms. A fair attention score balances both speed and correctness rather than rewarding raw speed alone.",
    },
    { type: "heading", id: "speed-accuracy-tradeoff", text: "Speed-Accuracy Tradeoff" },
    {
      type: "paragraph",
      text: "Fast search is useful. Correct search is essential. Suppose Person A responds in 450 milliseconds with 70% accuracy, while Person B responds in 620 milliseconds with 96% accuracy — you cannot answer who has stronger attention from speed alone. A good results page should show median correct reaction time alongside accuracy and error rate. Efficiency comes from the combination.",
    },
    { type: "heading", id: "top-down-bottom-up", text: "Top-Down and Bottom-Up Attention" },
    {
      type: "paragraph",
      text: "Visual attention is influenced by both the scene and your goals. Bottom-up guidance happens when something visually distinctive captures attention, such as bright color or strong contrast. Top-down guidance happens when your goal tells attention what to prioritize — if you know the odd shape differs by orientation, your brain gives more weight to orientation cues. Modern visual-search research examines several interacting factors rather than assuming search is controlled by one mechanism.",
    },
    { type: "heading", id: "vs-focus", text: "Visual Attention vs. Focus" },
    {
      type: "paragraph",
      text: "Our [Focus Test](/test/focus-test) is broader and emphasizes maintaining controlled attention over time. Visual attention focuses specifically on selecting relevant visual information. A person can remain highly focused yet search inefficiently through a complex image, or detect visual targets quickly but become inconsistent during a long repetitive task. Keeping these pages separate reduces content overlap.",
    },
    { type: "heading", id: "vs-observation-skills", text: "Visual Attention vs. Observation Skills" },
    {
      type: "paragraph",
      text: "Our [Observation Skills Test](/test/observation-skills-test) includes broader practical skills such as noticing changes, comparing scenes, remembering details, and spotting unusual features. Visual attention is narrower — it asks how efficiently relevant visual information is selected and distractors are filtered. Observation may additionally depend on memory, interpretation, and expectations.",
    },
    { type: "heading", id: "inattentional-blindness", text: "Inattentional Blindness" },
    {
      type: "paragraph",
      text: "A visible object can go unnoticed when attention is directed elsewhere — this phenomenon is called inattentional blindness. It shows why visual attention should not be confused with eyesight. The eyes may receive the image, but the information may still fail to enter conscious awareness because attention is allocated to another task. This is especially relevant in complex environments where several events compete for priority.",
    },
    { type: "heading", id: "useful-field-of-view", text: "Useful Field of View" },
    {
      type: "paragraph",
      text: "Another concept in visual-attention research is the Useful Field of View, or UFOV. UFOV tasks examine how much visual information can be extracted rapidly across the visual field, often under divided-attention or distractor conditions. UFOV is not identical to a basic visual-search test, but both examine limitations in selecting important information from visual scenes.",
    },
    { type: "heading", id: "what-score-means", text: "What Your Visual Attention Score Means" },
    {
      type: "paragraph",
      text: "Lower performance may show more missed targets, false alarms, or slower search as the grid grows. Mid-range performance means you detect most targets accurately but may slow down substantially as complexity increases. Higher performance means you locate the odd shape relatively quickly while maintaining strong accuracy across harder grids — that reflects performance on this visual task, and it does not guarantee equally strong attention in every environment.",
    },
    { type: "heading", id: "what-can-affect", text: "What Can Affect Visual Attention?" },
    {
      type: "paragraph",
      text: "Performance can vary with fatigue, sleep, distraction, stress, visual acuity, age, medication or substances, practice, screen quality, and lighting. A low score cannot identify which factor caused the result. If visual or attention problems are affecting daily life, professional assessment is more appropriate than interpreting one browser score medically.",
    },
    { type: "heading", id: "how-to-improve", text: "How to Improve Visual Search Strategy" },
    {
      type: "paragraph",
      text: "Know the target by creating a clear mental template of what makes it different. Scan systematically instead of repeatedly searching the same region. Slow down when errors matter, since maximum speed is not always optimal. Reduce clutter when possible by simplifying the visual environment. And practice the specific task, since experts often become efficient because they know which features carry useful information.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is visual attention?", answer: "Visual attention is the selective prioritization of relevant information from the visual environment." },
        { question: "What is a Visual Attention Test?", answer: "It is a task that measures how quickly and accurately you detect targets while filtering competing visual information." },
        { question: "What is visual search?", answer: "Visual search is the process of looking for a target among distractors." },
        { question: "What is the difference between feature and conjunction search?", answer: "Feature search uses a single distinctive target feature, while conjunction search requires finding a target defined by a combination of features." },
        { question: "Can this test diagnose ADHD?", answer: "No. Visual-attention performance is only one cognitive measure and cannot diagnose ADHD." },
        { question: "Is visual attention the same as eyesight?", answer: "No. Eyesight concerns visual sensory function; attention concerns which visual information receives processing priority." },
      ],
    },
    { type: "heading", text: "Attention Decides What Wins the Competition" },
    {
      type: "paragraph",
      text: "A crowded grid contains more information than you can inspect equally at once. Visual attention helps decide what matters now. Find the target. Ignore the distractors. Stay accurate as the grid becomes harder. That balance of selection, speed, and accuracy is what a strong Visual Attention Test should measure.",
    },
  ],
};
