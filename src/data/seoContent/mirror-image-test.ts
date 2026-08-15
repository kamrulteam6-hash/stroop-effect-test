import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you tell the difference between a true reflection and an ordinary rotation? Take this free **Mirror Image Test** to challenge spatial reflection reasoning. A target shape appears beside several alternatives — one option is the correct mirror image, while others may be rotated, shifted, partially altered, or reflected across the wrong axis.",
    },
    {
      type: "paragraph",
      text: "The key question is not whether the option looks similar. It is whether every point has been reflected correctly across the stated mirror line.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Mirror Image Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Study the target figure.",
        "Identify the mirror axis.",
        "Imagine each point crossing to the opposite side.",
        "Preserve each point's perpendicular distance from the mirror.",
        "Reject simple rotations that preserve handedness.",
        "Choose the true reflected image.",
        "Continue through vertical, horizontal, and diagonal mirrors.",
        "Review accuracy by reflection type.",
      ],
    },
    { type: "paragraph", text: "Do not physically flip your device. The task is intended to measure mental reflection." },
    { type: "heading", text: "What Is a Mirror Reflection?" },
    {
      type: "paragraph",
      text: "A mirror reflection maps every point across a line or plane. For a vertical mirror, left becomes right, right becomes left, and top/bottom remain the same. For a horizontal mirror, top becomes bottom, bottom becomes top, and left/right remain the same. The object's size and internal distances are preserved, but its handedness reverses — that last feature is what separates reflection from rotation.",
    },
    { type: "heading", text: "Reflection vs. Rotation" },
    {
      type: "paragraph",
      text: "This is the most important distinction. Take an asymmetric letter-like shape — if you rotate it 180 degrees, its orientation changes but its handedness remains the same. If you reflect it in a mirror, its handedness reverses. A rotated object can often be turned back into the target through rotation alone; a reflected object cannot be superimposed on an asymmetric target without reflection. This is why mirror-image discrimination is a separate spatial problem from your [Mental Rotation Test](/test/mental-rotation-test).",
    },
    { type: "heading", text: "Handedness" },
    {
      type: "paragraph",
      text: "Objects can have a left-right organization known as handedness or chirality. Human hands are the easiest example — your left and right hands are mirror counterparts, and you can rotate the left hand in many ways, but it does not become the right hand. Mirror-image problems exploit the same distinction. A good stimulus should therefore be asymmetric; perfectly symmetric shapes may look identical after reflection and create ambiguous items.",
    },
    { type: "heading", text: "Vertical, Horizontal, and Diagonal Reflection" },
    {
      type: "paragraph",
      text: "Suppose a shape contains a dot near the upper-left corner and a notch on the lower-right edge. Reflecting across a vertical mirror moves the dot to the upper-right and the notch to the lower-left — vertical position stays the same, horizontal position reverses. This is the simplest reflection type, ideal for early levels. Reflecting the same figure across a horizontal line moves the dot from upper-left to lower-left and the notch from lower-right to upper-right — left/right stays the same, top/bottom reverses. Users who apply a generic \"flip it\" strategy without tracking the mirror axis often make errors here. Diagonal mirrors are harder still, since a reflection across a diagonal line changes both apparent horizontal and vertical placement. The most reliable strategy is to think geometrically: draw an imaginary perpendicular from a point to the mirror line, extend it the same distance on the other side, and repeat for distinctive features. This is more accurate than imagining the whole figure vaguely \"turned over.\"",
    },
    { type: "heading", text: "Why Letters Are Popular Mirror Stimuli" },
    {
      type: "paragraph",
      text: "Letters and digits contain familiar orientation — examples such as R, F, 2, 3, and 5 are easy to recognize when reversed. However, language familiarity can make the task partly verbal; a user instantly knows that a backward R is unusual. For a purer spatial test, use abstract polygons, dots and notches, and asymmetric symbols. A separate demonstration mode can use letters because users find them intuitive.",
    },
    { type: "heading", text: "Mirror-Image Confusion" },
    {
      type: "paragraph",
      text: "Humans often recognize an object across many changes in orientation — useful, since a cup remains a cup whether it faces left or right. But this orientation tolerance can create difficulty when left-right reversal is actually important. Research on mirror-image confusion has examined why reflected versions of objects can be difficult to distinguish, particularly in children and during reading development. Studies of object orientation show that sensitivity to mirror reversal develops differently across object categories and contexts. Classic experimental work found that mirror-image discrimination difficulty depends on alignment, reflection axis, and object orientation — left-right mirror discriminations are often especially challenging under some conditions, not because people literally cannot see left and right, but because the perceptual system is designed to recognize object identity despite many viewpoint changes, while reflection sometimes requires finer orientation-specific encoding.",
    },
    { type: "heading", text: "Mirror Image vs. Water Image" },
    {
      type: "paragraph",
      text: "Reasoning books sometimes distinguish a mirror image, usually a left-right reflection across a vertical mirror, from a water image, a top-bottom reflection across a horizontal line. Geometrically, both are reflections — the only difference is the axis. For scientific clarity, this test uses vertical reflection and horizontal reflection rather than treating \"water image\" as a different cognitive mechanism.",
    },
    { type: "heading", text: "Mirror Image vs. Mental Rotation" },
    {
      type: "paragraph",
      text: "Your [Mental Rotation Test](/test/mental-rotation-test) asks whether two objects become identical after rotation. Mirror Image asks whether an object has been reflected. A strong Mirror Image item often includes a rotated distractor — the solver must determine same handedness with different orientation versus opposite handedness, making the distinction explicit.",
    },
    { type: "heading", text: "Distractor Design" },
    {
      type: "paragraph",
      text: "Good distractors should be plausible. Possible wrong options include a rotation distractor (same handedness, rotated), a wrong-axis reflection (reflected horizontally instead of vertically), a feature shift (one dot or notch moved incorrectly), a partial reflection (most features reflected correctly but one remained unchanged), and the original figure (no transformation). This makes the test diagnose which rule caused the error. A perfect circle reflected across any axis looks identical, and a perfectly symmetric letter such as some forms of A may also remain unchanged under certain reflections — those are poor scored items. The best stimuli have unique left/right features, off-center marks, and asymmetric contours, so the answer is unambiguous.",
    },
    { type: "heading", text: "Response Time and Difficulty Progression" },
    {
      type: "paragraph",
      text: "Mirror problems can be scored by accuracy and median correct response time, but speed should not overpower correctness — a user who guesses rapidly may appear fast while showing poor reflection reasoning, so results should report accuracy first and correct RT second. A useful progression is: level 1, simple vertical reflection; level 2, more complex asymmetric shapes; level 3, horizontal reflection; level 4, diagonal reflection; level 5, rotated target plus reflection. The hardest items can require the user to separate two transformations — rotation plus reflection versus rotation only.",
    },
    { type: "heading", text: "Original Stimuli" },
    {
      type: "paragraph",
      text: "Use original generated figures rather than copying proprietary reasoning-test items. A procedural generator can create polygon outlines, colored dots, internal bars, and notches, with the mirror transform calculated exactly and distractors generated from known incorrect rules. This produces unlimited repeatable items and gives every answer a mathematically verifiable solution.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include overall accuracy (percent correct), vertical reflection accuracy (left-right transformation), horizontal reflection accuracy (top-bottom transformation), diagonal reflection accuracy (oblique-axis transformation), rotation-confusion errors (how often a rotated distractor was mistaken for a reflection), and median correct RT (speed on correctly solved items). That profile is more useful than a vague \"visual IQ\" score.",
    },
    { type: "heading", text: "What Is a Good Mirror Image Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom browser test. Performance depends on stimulus complexity, mirror axis, rotation, time limits, and distractor similarity. Do not borrow norms from another aptitude battery — if the site later collects enough data using the exact same generator, build its own transparent percentiles.",
    },
    { type: "heading", text: "Can This Diagnose Dyslexia?" },
    {
      type: "paragraph",
      text: "No. Letter-reversal and mirror-confusion research is relevant to reading development, but a browser Mirror Image Test cannot diagnose dyslexia. Dyslexia assessment involves decoding, phonological processing, reading fluency, spelling, and language history. An occasional mirror error is common and not diagnostic.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is a Mirror Image Test?", answer: "A spatial task where you identify how a figure would look after reflection across a stated axis." },
        { question: "Is reflection the same as rotation?", answer: "No. Rotation preserves handedness; reflection reverses it." },
        { question: "What changes in a vertical mirror?", answer: "Left and right reverse, while top and bottom stay in the same relative positions." },
        { question: "What changes in a horizontal mirror?", answer: "Top and bottom reverse, while left and right remain aligned." },
        { question: "Why are asymmetric shapes better test items?", answer: "Symmetric shapes can remain unchanged after reflection and create ambiguous questions." },
        { question: "Is a water image a different transformation?", answer: "Geometrically it is simply a horizontal reflection." },
        { question: "Can this diagnose dyslexia?", answer: "No. It is a spatial-reflection task, not a reading diagnosis." },
      ],
    },
    {
      type: "paragraph",
      text: "Mirror-image problems become easier once you stop asking \"does this option look similar?\" and start asking \"did every point cross the correct mirror axis while keeping the same distance from it?\" That single geometric rule separates a true reflection from the many rotations and look-alike shapes designed to distract you.",
    },
  ],
};
