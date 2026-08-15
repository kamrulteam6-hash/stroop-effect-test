import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can staring at motion make a completely stationary image appear to move? Take this free **Motion Aftereffect Test** to experience the classic waterfall illusion. First, you watch a moving pattern for a short adaptation period. Then the motion stops, and the stationary test image may appear to drift in the **opposite direction**.",
    },
    {
      type: "paragraph",
      text: "The pixels are no longer moving. The apparent motion is produced by temporary adaptation within the visual motion system.",
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "Before You Start",
      tone: "gold",
      text: "Motion patterns can be uncomfortable for some people. Use a short adaptation period and stop immediately if you experience dizziness, nausea, headache, or visual discomfort. The test includes a visible Stop button and never requires prolonged exposure to intense motion. This is a visual illusion demonstration, not a medical test.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Motion Aftereffect Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Fixate the central marker.",
        "Watch the moving pattern without following individual elements with your eyes.",
        "Continue through the brief adaptation period.",
        "When the motion stops, keep looking at the same area.",
        "Observe whether the stationary pattern appears to drift.",
        "Indicate the perceived direction.",
        "If available, hold a key while the aftereffect remains visible.",
        "Review aftereffect direction and duration across conditions.",
      ],
    },
    { type: "paragraph", text: "The strongest experience usually occurs immediately after the adapting motion stops." },
    { type: "heading", text: "What Is the Motion Aftereffect?" },
    {
      type: "paragraph",
      text: "The motion aftereffect, or MAE, is an illusion of movement experienced after prolonged exposure to real visual motion. The classic example is the waterfall illusion: stare at a waterfall flowing downward for a while, then look at stationary rocks beside it, and the rocks may appear to drift upward even though they remain physically still. The perceived aftereffect generally runs opposite the direction of adaptation — adapt to downward motion, then a stationary pattern may appear to move upward.",
    },
    { type: "heading", text: "Why Is It Called the Waterfall Illusion?" },
    {
      type: "paragraph",
      text: "Descriptions of motion aftereffects have a long history. A waterfall is an especially memorable natural demonstration because the motion is continuous, strong, and mostly one-directional. After the visual system adapts to the falling water, nearby stationary scenery can appear to move upward. Modern laboratory experiments use controlled stimuli such as moving gratings, random-dot fields, expanding patterns, and rotating spirals, which allow motion direction, speed, contrast, and adaptation time to be controlled precisely.",
    },
    { type: "heading", text: "Motion Adaptation" },
    {
      type: "paragraph",
      text: "The modern explanation focuses on adaptation in motion-sensitive neural populations. Visual neurons are selective for properties including motion direction, and during prolonged motion in one direction, the responsiveness of direction-selective mechanisms changes. When the stimulus becomes stationary, activity across opposing motion channels is temporarily imbalanced, and that imbalance can produce the percept of movement opposite to the adapting direction. It is better to describe this as adaptation or gain change than as simple neuronal \"fatigue,\" since adaptation can involve changes in response gain, neural sensitivity, population balance, cortical processing, and multiple stages of the visual pathway.",
    },
    { type: "heading", text: "Human MT/V5 and the Motion Aftereffect" },
    {
      type: "paragraph",
      text: "A landmark 1995 brain-imaging study by Tootell and colleagues measured activity in human visual area MT after motion adaptation, finding activity associated with the experience of illusory motion even while the viewed test pattern was stationary. This supported the idea that the MAE reflects central visual processing rather than motion physically continuing in the image. Later studies have continued to examine how motion-sensitive cortical populations change during adaptation, though that does not mean one region alone creates every type of aftereffect.",
    },
    { type: "heading", text: "Direction Selectivity and Retinotopic Specificity" },
    {
      type: "paragraph",
      text: "Suppose one set of neural mechanisms responds strongly to leftward motion and another to rightward motion. During sustained leftward adaptation, the balance between those populations changes, and when a stationary test appears, the rightward-sensitive population may temporarily contribute more relative activity, producing a percept of rightward drift. This opponent-like coding framework helps explain why the aftereffect tends to reverse the adapting direction. Motion aftereffects are also often strongest in the part of the visual field that was adapted — adapt the left side of the screen and test the right side, and the effect may be weaker, a property called retinotopic specificity. A browser test can demonstrate this with full-field, left-side, and right-side adaptation, then show the test pattern in matched or unmatched locations.",
    },
    { type: "heading", text: "Expansion and Contraction Aftereffects" },
    {
      type: "paragraph",
      text: "Motion does not need to be simple left/right translation. Adapt to a pattern expanding outward from the center, then show a stationary pattern — it may appear to contract inward. Likewise, adapting to contraction can make a stationary pattern appear to expand, and rotational aftereffects also occur. This shows that motion adaptation can operate on complex motion patterns, not only single-axis movement.",
    },
    { type: "heading", text: "Adaptation Duration and Measuring the Effect" },
    {
      type: "paragraph",
      text: "Longer adaptation often strengthens or prolongs the aftereffect up to a point, but meaningful MAEs can arise surprisingly quickly — a 2011 experiment by Glasser and colleagues showed measurable motion aftereffects after extremely brief adaptation exposures under controlled conditions. For an online demonstration, several seconds is usually enough to create a clear effect without requiring a minute-long stare, and the page should prioritize user comfort rather than maximizing illusion duration. One simple measure of the effect is how long the stationary image appears to move: after adaptation, the test image appears, a timer starts, the user holds a button while motion is perceived, and releases it when the image looks fully stationary. This is subjective and can vary considerably, so it should not be treated as a clinical measurement.",
    },
    { type: "heading", text: "Direction Accuracy" },
    {
      type: "paragraph",
      text: "Another robust outcome is simply which direction the stationary pattern appeared to move. After leftward adaptation, the predicted MAE is generally rightward, and a result can report expected opposite-direction responses, no-effect trials, and unexpected-direction responses. This is easier to interpret than fine-grained duration measurements.",
    },
    { type: "heading", text: "Test Pattern Matters" },
    {
      type: "paragraph",
      text: "Aftereffects can differ depending on whether the test is a static grating, noise, flicker, or a natural scene. The relationship between adaptation and test patterns can reveal which motion mechanisms were adapted. For a clean public test, using a stationary version of the adapting pattern first is a good default, with an advanced mode later comparing static and dynamic test patterns.",
    },
    { type: "heading", text: "Motion Aftereffect vs. Visual Illusion Test" },
    {
      type: "paragraph",
      text: "Your existing [Visual Illusion Test](/test/visual-illusion-test) may include general static perceptual tricks. The Motion Aftereffect Test is dynamic and depends on adaptation over time — the effect cannot be captured by one static screenshot, giving it a clear independent role on the site.",
    },
    { type: "heading", text: "What Does the Motion Aftereffect Measure?" },
    {
      type: "paragraph",
      text: "A web version can measure aftereffect direction, subjective duration, strength rating, adaptation-time dependence, and location specificity. It does not directly measure motion-processing health, neural firing rates, intelligence, or reaction speed. The most defensible interpretation is how strongly this adapting motion changed subsequent motion perception under the current conditions. Experiencing a motion aftereffect is normal — it is not evidence of motion blindness, vertigo disorder, or neurological disease, and a browser test cannot diagnose motion-processing disorders.",
    },
    { type: "heading", text: "What Is a Good Motion Aftereffect Score?" },
    {
      type: "paragraph",
      text: "There is no good or bad score. Some users experience a strong aftereffect, others a shorter or weaker one. Magnitude depends on motion speed, contrast, adaptation duration, fixation, display refresh, test stimulus, and individual variation. A stronger MAE is not better vision and a weaker MAE is not worse vision.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the motion aftereffect?", answer: "The illusion of motion in a stationary or differently moving pattern after adapting to sustained motion." },
        { question: "Why is it called the waterfall illusion?", answer: "Looking away from downward-flowing water can make stationary scenery appear to drift upward." },
        { question: "Which direction does the aftereffect move?", answer: "Usually opposite the adapting motion." },
        { question: "Is it caused by tired neurons?", answer: "\"Fatigue\" is an oversimplification. Adaptation changes the responsiveness and balance of motion-sensitive neural populations." },
        { question: "Where does the effect occur in the brain?", answer: "Motion-sensitive cortical areas, including MT/V5, are strongly implicated, although motion adaptation occurs across multiple processing stages." },
        { question: "How long should I adapt?", answer: "A browser demo can use a relatively short period. Longer exposure is not necessary for educational value and may increase discomfort." },
        { question: "Is a strong aftereffect a medical problem?", answer: "No. The MAE is a normal visual adaptation phenomenon." },
      ],
    },
    {
      type: "paragraph",
      text: "The aftereffect reveals that visual motion perception depends partly on what the system has just experienced. Adapt to one direction, remove the real motion, and for a few moments the balance of the motion system remains shifted. A stationary image can therefore appear to drift in a direction that exists only in perception.",
    },
  ],
};
