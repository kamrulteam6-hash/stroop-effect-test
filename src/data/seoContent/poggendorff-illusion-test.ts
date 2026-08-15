import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can two parts of the same straight line look misaligned when a shape blocks the middle? Take this free **Poggendorff Illusion Test** to measure one of the classic geometric alignment illusions. A diagonal line disappears behind a vertical strip or rectangle and reappears on the other side. The visible segments can be perfectly collinear, yet they often look offset.",
    },
    {
      type: "paragraph",
      text: "Your task is to identify which segment truly continues the hidden line — or adjust one segment until the two sides appear aligned.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Poggendorff Illusion Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Look at the diagonal line entering the occluding strip.",
        "Compare it with the possible continuation on the opposite side.",
        "Choose the segment that appears aligned, or move the adjustable segment until it looks continuous.",
        "Submit your judgment.",
        "Continue across different strip widths, angles, and orientations.",
        "Review the physical alignment and your perceived alignment.",
      ],
    },
    { type: "paragraph", text: "Do not place a ruler on the screen. The point is to measure where the line looks continuous." },
    { type: "heading", text: "What Is the Poggendorff Illusion?" },
    {
      type: "paragraph",
      text: "The Poggendorff illusion is a geometric-optical illusion involving the apparent misalignment of line segments separated by an intervening contour or surface. A simple version shows one diagonal line entering a vertical rectangle, with the middle hidden and another diagonal segment emerging on the opposite side. Even when the two visible diagonal pieces belong to one perfectly straight line, the continuation can appear displaced. Observers often select a point that is physically too high or too low when asked to restore apparent alignment.",
    },
    { type: "heading", text: "Who Discovered the Poggendorff Illusion?" },
    {
      type: "paragraph",
      text: "The illusion is named after German physicist Johann Christian Poggendorff. It was reported in 1860 after Poggendorff noticed the alignment effect in figures submitted by astronomer Johann Karl Friedrich Zöllner, who was studying a different geometric illusion. Poggendorff noticed that an oblique line interrupted by parallel contours appeared misaligned, and the effect became one of the classic nineteenth-century geometric-optical illusions.",
    },
    { type: "heading", text: "What Does \"Collinear\" Mean?" },
    {
      type: "paragraph",
      text: "Two line segments are collinear when they lie on the same infinite straight line. Imagine drawing one diagonal line across the page and then placing a solid rectangle over its middle — the visible segment on the left and the visible segment on the right are still mathematically collinear, only the middle is hidden. The Poggendorff illusion occurs when the visual system judges those separated segments as though they would not meet correctly behind the occluder.",
    },
    { type: "heading", text: "Forced-Choice and Adjustment Versions" },
    {
      type: "paragraph",
      text: "A simple online test can show one diagonal segment on the left, an occluding rectangle, and two possible continuation segments on the right — one physically collinear, the other shifted slightly. The user selects which line is the true continuation, and difficulty can increase by making the incorrect alternative progressively closer to correct alignment. A more informative test lets the user move one segment vertically: the fixed left segment enters the rectangle, and the right segment starts at a randomized offset that you move until both pieces look like one hidden straight line. The difference between the true collinear position and your apparent alignment position estimates Poggendorff bias.",
    },
    { type: "heading", text: "Measuring Alignment Error" },
    {
      type: "paragraph",
      text: "Suppose true alignment requires the right segment to begin at y = 200, and you adjust it to y = 214 — the apparent alignment is displaced by 14 pixels. The result can be expressed as vertical error, a normalized percentage of occluder width, an angular equivalent, or a signed error direction. Signed error is useful because users may misalign in opposite directions; absolute error alone loses that directional information.",
    },
    { type: "heading", text: "Why Does the Poggendorff Illusion Happen?" },
    {
      type: "paragraph",
      text: "There is no single universally accepted explanation. Researchers have proposed several mechanisms, including angle distortion, orientation coding, apparent shortening or expansion, virtual-line estimation, depth or perspective interpretation, spatial averaging, and interactions among multiple geometric components. The Poggendorff figure is deceptively simple, but research shows that several distinct perceptual biases can contribute depending on the exact configuration — angles matter, but they are not the whole story.",
    },
    { type: "heading", text: "Angle-Based and Virtual-Line Explanations" },
    {
      type: "paragraph",
      text: "One influential family of explanations focuses on the acute angles formed where the diagonal crosses the parallel contours; if those angles are perceptually distorted, the projected path of the hidden line can shift. But angle-based theories have also faced counterexamples, since variants of the Poggendorff effect can persist when some classic angles are removed. Research by Michael Morgan proposed a two-stage account involving the orientation of an imagined or virtual line connecting the visible endpoints near the occluder — when a line disappears behind a rectangle, perception must infer how the separated pieces relate, and that biased estimate can produce apparent misalignment. This approach emphasizes how the visual system connects separated line information rather than simply measuring one local angle.",
    },
    { type: "heading", text: "Intersection Angle, Occluder Shape, and Occlusion" },
    {
      type: "paragraph",
      text: "The angle at which the diagonal meets the parallel sides is one of the strongest geometric variables, and a balanced experiment should use several target angles. The central interruption can be represented by two parallel lines, a filled rectangle, or a surface-like occluder — these versions do not always produce identical effects, and a filled surface may encourage stronger interpretation of the diagonal as passing behind an object. In ordinary vision, objects frequently continue behind other objects — a road passing behind a building, a branch hidden by leaves, a cable disappearing behind furniture — and Poggendorff-like displays exploit this normal need to link separated visual fragments. The illusion does not mean the visual system is badly designed; it shows that reconstructing hidden spatial relationships depends on contextual assumptions.",
    },
    { type: "heading", text: "Poggendorff vs. Ponzo and Müller-Lyer-Style Illusions" },
    {
      type: "paragraph",
      text: "The [Ponzo Illusion Test](/test/ponzo-illusion-test) primarily distorts perceived size — two equal targets can look different in length. The Poggendorff illusion primarily distorts perceived alignment or position — two collinear segments can look misaligned. Müller-Lyer-type figures change perceived line length using arrow-like endpoints, while Poggendorff changes apparent continuation across an interruption. Some theoretical accounts of geometric illusions overlap because line orientation and contextual geometry matter in both, but the behavioral tasks differ: length judgment versus alignment judgment.",
    },
    { type: "heading", text: "Why Multiple Trials Matter" },
    {
      type: "paragraph",
      text: "One adjustment can be noisy. A good test should randomize the starting offset, mirror the figure, vary angle, and collect repeated adjustments. The final score can use the median signed alignment error, which is less affected by one unusually large mistake.",
    },
    { type: "heading", text: "What Does the Test Measure?" },
    {
      type: "paragraph",
      text: "The test measures susceptibility to a specific visual alignment illusion under the chosen geometry. Performance may involve orientation perception, spatial extrapolation, contextual integration, occlusion interpretation, and motor adjustment. It does not measure general intelligence, eyesight quality, motor coordination alone, or a single neural pathway — a large error is not evidence of a visual disorder.",
    },
    { type: "heading", text: "What Is a Good Poggendorff Score?" },
    {
      type: "paragraph",
      text: "There is no universal \"good\" alignment error. A result near zero means your apparent alignment happened to be close to true geometry in this version; a larger error means the illusion shifted your judgment more strongly. Neither should be labeled healthy or unhealthy — illusions are normal consequences of contextual visual processing.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Poggendorff illusion?", answer: "A visual illusion where two truly collinear line segments appear misaligned when an intervening contour or object hides the middle." },
        { question: "Who discovered it?", answer: "Johann Christian Poggendorff reported the effect in 1860." },
        { question: "What does collinear mean?", answer: "Two segments lie on the same straight line." },
        { question: "Why does the illusion happen?", answer: "There is no single agreed mechanism. Angle processing, orientation estimation, virtual-line judgments, and contextual geometry all contribute to major theories." },
        { question: "Does a wider gap make it harder?", answer: "Gap width can influence the illusion because the visual system must relate segments across a larger interruption." },
        { question: "Is this a vision test?", answer: "It is a perceptual illusion test, not a clinical eyesight examination." },
        { question: "Can knowing the correct geometry remove the effect?", answer: "You may compensate strategically, but the apparent misalignment can remain." },
      ],
    },
    {
      type: "paragraph",
      text: "The Poggendorff illusion asks vision to solve a familiar real-world problem: where would this line go if the hidden middle were visible? The mathematics is simple. The perception is not. By comparing your apparent continuation with true collinearity, the test turns a centuries-old geometric illusion into a measurable alignment bias.",
    },
  ],
};
