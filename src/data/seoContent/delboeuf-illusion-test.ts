import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can the same circle look larger or smaller depending only on the ring around it? Take this free **Delboeuf Illusion Test** to explore contextual size perception. Two center circles can be physically identical while different surrounding rings make them appear unequal.",
    },
    {
      type: "paragraph",
      text: "Your task is to choose which center looks larger — or adjust one center until the two appear equal. The difference between physical size and perceived equality estimates the illusion's magnitude.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Delboeuf Illusion Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Look only at the center target circles.",
        "Notice the surrounding rings, but do not use a ruler or measurement tool.",
        "Choose which center appears larger, or adjust one until both look equal.",
        "Continue through several outer-ring sizes.",
        "Review your Point of Subjective Equality and illusion magnitude.",
      ],
    },
    { type: "paragraph", text: "The target circles may be mathematically identical. The context is what changes." },
    { type: "heading", text: "What Is the Delboeuf Illusion?" },
    {
      type: "paragraph",
      text: "The Delboeuf illusion is a classic relative-size illusion involving concentric circles. In its familiar form, two equal target circles are shown with different surrounding rings — one target sits inside a relatively close-fitting outer circle, the other inside a much larger outer circle. Despite equal center sizes, the targets can appear different. The physical target size has not changed; only the surrounding context differs, demonstrating that perceived size depends partly on relationships between a target and nearby contours. The illusion is named after Belgian scholar Joseph Delboeuf, who described optical-geometric size effects in the nineteenth century.",
    },
    { type: "heading", text: "Contrast and Assimilation" },
    {
      type: "paragraph",
      text: "The Delboeuf illusion is especially interesting because contextual effects can move in different directions. Under contrast, the target appears smaller relative to a much larger surrounding ring. Under assimilation, when the target and surround are close in size or spacing, the target can appear to shift perceptually toward the surrounding context. The balance between these effects can change as the outer ring becomes larger or more distant from the target, which is why the illusion should not be described with a single simplistic rule such as \"anything inside a big circle always looks smaller.\"",
    },
    { type: "heading", text: "Ring Size and Gap" },
    {
      type: "paragraph",
      text: "The ratio between target diameter and surrounding-ring diameter is one of the central variables. A ring only slightly larger than the target creates a different perceptual relationship from a ring several times larger, so a strong online test can present multiple inducer ratios — close, medium, large, and a no-surround control — to show how perceived size changes gradually. The distance between the center target and outer contour also matters: a close surround may visually group with the target, while a distant surround may function more strongly as a contrasting reference frame. Two Delboeuf displays with the same outer-circle diameter can therefore differ if target size, spacing, or line thickness differ.",
    },
    { type: "heading", text: "Adjustment Method and Point of Subjective Equality" },
    {
      type: "paragraph",
      text: "A forced-choice version asks which center looks larger; an adjustment version provides more detailed data. Suppose a reference target is 50 px and a comparison target is adjustable. If the comparison must be increased to 55 px before it appears equal, its context was making it look smaller; if it must be reduced to 46 px, its context was making it look larger. This physical target size at which two circles appear equal is the Point of Subjective Equality, or PSE, and it can be converted into an illusion percentage — for example, a 5 px shift on a 50 px reference is about a 10% relative shift. This does not mean the user's visual system is \"10% inaccurate\"; it means this particular contextual display shifted the perceptual equality point by about that amount.",
    },
    { type: "heading", text: "Why Multiple Trials Are Better" },
    {
      type: "paragraph",
      text: "One size judgment is noisy — a user may click too quickly, slightly overshoot an adjustment, change strategy, or become more familiar with the illusion. A reliable browser result should randomize which side contains each surround, the starting comparison size, and the outer-ring ratio, then average or take the median across several trials to reduce simple side bias and starting-point bias.",
    },
    { type: "heading", text: "Delboeuf vs. Ebbinghaus and Ponzo Illusions" },
    {
      type: "paragraph",
      text: "Your existing [Ebbinghaus Illusion Test](/test/ebbinghaus-illusion-test) also changes perceived target size using surrounding context, but a central circle is surrounded by multiple neighboring circles rather than a single concentric ring. Research has compared them directly because both demonstrate contextual size distortion, but their geometric organization differs, so the Delboeuf page focuses specifically on concentric contour relationships. The [Ponzo Illusion Test](/test/ponzo-illusion-test) instead uses converging perspective-like lines, where context suggests spatial depth or alters geometric scaling rather than changing relative size through surrounding contours.",
    },
    { type: "heading", text: "Does Shape, Line Thickness, or Viewing Distance Matter?" },
    {
      type: "paragraph",
      text: "The classic Delboeuf figure uses circles, but recent experiments have tested other shapes and found that the form of the target and inducer can influence size misperception — the standard online test should still begin with circles because that is the canonical Delboeuf display. Visual contrast can also influence illusion magnitude, and a browser implementation should keep line thickness, luminance, background, and target color consistent across conditions unless one of these variables is intentionally being tested. Viewing distance changes the visual angle of both target and surround, and research on Delboeuf-type size perception has found that viewing conditions can modulate illusion strength — for repeat comparisons, use the same device and similar viewing distance.",
    },
    { type: "heading", text: "What Does the Delboeuf Test Measure?" },
    {
      type: "paragraph",
      text: "The test measures contextual size perception in a concentric-surround display. Performance can reflect relative size judgment, contour interaction, visual grouping, contrast, assimilation, and response strategy. It does not measure intelligence, eyesight health, appetite, body-image accuracy, or a single brain region — a strong illusion effect is not a clinical problem.",
    },
    { type: "heading", text: "What Is a Good Delboeuf Score?" },
    {
      type: "paragraph",
      text: "There is no universal good or bad score. A larger shift means the surrounding ring influenced your size judgment more strongly under that stimulus condition; a smaller shift means it influenced you less. Neither should be labeled superior — visual systems normally use context because isolated retinal size is not enough to interpret objects in the world.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Delboeuf illusion?", answer: "A contextual size illusion where the apparent size of a center circle changes depending on the surrounding concentric ring." },
        { question: "Who was Delboeuf?", answer: "Joseph Delboeuf was a Belgian scholar whose nineteenth-century work included studies of optical-geometric illusions." },
        { question: "Are the center circles really the same size?", answer: "In the standard demonstration, yes." },
        { question: "Why does one center look smaller?", answer: "Relative size, contour spacing, contrast, and assimilation are among the mechanisms discussed in research." },
        { question: "Is it the same as the Ebbinghaus illusion?", answer: "No. Ebbinghaus uses multiple surrounding circles; Delboeuf uses a concentric ring." },
        { question: "Can plate size create a similar effect?", answer: "The same contextual principle is often discussed in food-perception research, although eating behavior is more complex than the illusion alone." },
        { question: "Is a stronger illusion effect bad?", answer: "No. It is a normal contextual perceptual effect." },
      ],
    },
    {
      type: "paragraph",
      text: "The Delboeuf illusion makes one lesson unusually clear: physical size is not perceived in isolation. The center circle stays the same. Change the surrounding ring, and the center can look different. By adjusting the target until it appears equal, you can measure how much that surrounding context shifted your own size judgment.",
    },
  ],
};
