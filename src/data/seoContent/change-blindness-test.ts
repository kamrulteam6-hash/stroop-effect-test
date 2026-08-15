import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can a large object change right in front of you without you noticing? Take this free **Change Blindness Test** using the classic **flicker paradigm**. Two versions of a scene alternate repeatedly. A brief blank screen appears between them, and exactly one meaningful visual detail changes.",
    },
    { type: "paragraph", text: "Find the change as quickly and accurately as possible. Missing a change does not mean your eyesight is poor — change blindness is primarily about attention and scene comparison, not visual acuity." },
    { type: "heading", id: "how-to-take", text: "How to Take the Change Blindness Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Look at the first scene.",
        "Watch as it alternates with the changed version.",
        "Notice the brief blank interval between images.",
        "Search for the one changing object or feature.",
        "Click the location when you find it.",
        "Avoid random clicking.",
        "Continue across several scenes.",
        "Review detection time and accuracy.",
      ],
    },
    { type: "paragraph", text: "Once you discover the change, it often becomes extremely obvious. That contrast is part of what makes change blindness so striking." },
    { type: "heading", text: "What Is Change Blindness?" },
    {
      type: "paragraph",
      text: "Change blindness is the failure to notice a change in a visual scene, particularly when the normal visual signal produced by the change is interrupted or masked. A person can look directly at two highly similar scenes and fail to identify an object disappearing, a color changing, an item moving, or a feature being replaced.",
    },
    { type: "paragraph", text: "The phenomenon does not mean the viewer is literally blind to the object. It means the visual system did not successfully detect or compare the relevant change under the viewing conditions." },
    { type: "heading", text: "The Flicker Paradigm" },
    {
      type: "paragraph",
      text: "The classic laboratory method was developed by Ronald Rensink, Kevin O'Regan, and James Clark in influential work published in 1997. The basic sequence is: original image, brief blank, changed image, brief blank, repeat.",
    },
    {
      type: "paragraph",
      text: "In their experiments, images were displayed for hundreds of milliseconds with short blank intervals between them. Without the blank, the visual transient created by the changing object can automatically attract attention. The blank creates a larger global transient, and that interruption masks the local signal telling you exactly where the change happened. The observer must then actively search the scene.",
    },
    { type: "heading", text: "Why the Blank Screen Matters" },
    {
      type: "paragraph",
      text: "If one object suddenly disappears while everything else remains visually stable, the disappearance produces a strong local motion/transient signal, and your attention is drawn to it. Now insert a blank screen between the two images — the entire visual field changes at once (scene, blank, scene). The local change is no longer the only sudden event, so the visual system cannot rely on that simple transient to point toward the changed object.",
    },
    { type: "paragraph", text: "This makes comparison dramatically harder. The blank does not erase your vision — it removes an easy attentional cue." },
    { type: "heading", text: "Change Blindness Is Not Poor Eyesight" },
    {
      type: "paragraph",
      text: "A person with excellent visual acuity can experience powerful change blindness. Acuity asks: can you resolve fine visual detail? Change blindness asks: did attention and memory successfully register and compare the relevant scene information? The changed object may be large and easy to see in both images — the difficulty is noticing that its state differs across views. That is why a browser change-blindness game should never claim to be an eye exam.",
    },
    { type: "heading", text: "Attention Is Central" },
    {
      type: "paragraph",
      text: "Rensink and colleagues argued that focused attention plays an important role in detecting changes. If your attention is directed toward the changing object, the difference can become obvious. If your attention is elsewhere, repeated alternations may pass without conscious detection. This is why meaningful or central objects can sometimes be found faster than peripheral or less important changes.",
    },
    { type: "paragraph", text: "Scene structure helps guide attention, but attention is limited, and complex scenes contain many possible locations to inspect." },
    { type: "heading", text: "Does the Brain Store a Complete Photograph of the Scene?" },
    {
      type: "paragraph",
      text: "Change blindness challenged the intuitive idea that we maintain a detailed internal copy of everything in view. When a scene looks stable, it feels as though we know all of its details. But failure to notice obvious changes suggests that not every visible feature is represented in a form that can be immediately compared across interruptions.",
    },
    {
      type: "paragraph",
      text: "This does not mean visual memory stores nothing — research on scene memory shows substantial information can be retained. The more accurate lesson is that our subjective sense of visual completeness can exceed the detail available for explicit change comparison.",
    },
    { type: "heading", text: "Change Detection vs. Change Identification" },
    {
      type: "paragraph",
      text: "You may sometimes feel that something changed without knowing exactly what it was. Research distinguishes detecting that the scene is different from identifying and localizing the changed feature. A web test that requires clicking the changed object measures more than a vague sense of difference — it requires detection, localization, and identification. That makes a correct click a stronger criterion than simply pressing \"change occurred.\"",
    },
    { type: "heading", text: "Why Some Changes Are Easier" },
    {
      type: "paragraph",
      text: "Detection time can depend on visual salience, object size, scene location, semantic importance, contrast, color difference, whether an object appears or disappears, and whether the change violates scene expectations. A large central object is not guaranteed to be found instantly, but changes to important scene elements can attract attention differently from marginal details. This means difficulty should ideally be defined by empirical performance, not just by how large the changed object is.",
    },
    { type: "heading", text: "Change Type Matters" },
    { type: "paragraph", text: "Different changes may include:" },
    {
      type: "list",
      items: [
        "Appearance/Disappearance — an object is added or removed.",
        "Color Change — the object remains but changes color.",
        "Position Change — the object moves.",
        "Identity Change — one object is replaced by another.",
        "Size Change — the same item becomes larger or smaller.",
      ],
    },
    { type: "paragraph", text: "These transformations can differ in detectability. If your tool offers difficulty levels, use a mixture of changes rather than assuming every type is equivalent." },
    { type: "heading", text: "What Is a Good Change Blindness Score?" },
    {
      type: "paragraph",
      text: "There is no universal online benchmark. A score depends strongly on the images — one scene may contain an easy high-contrast central change, another may contain a subtle peripheral change. Useful metrics include percentage of scenes solved, median detection time, wrong clicks, time by difficulty, and change type. Avoid generic claims such as \"under 5 seconds = elite attention\" unless those cutoffs come from a transparent dataset using the same images and timing.",
    },
    { type: "heading", text: "Why Wrong Clicks Matter" },
    {
      type: "paragraph",
      text: "If there is no penalty for random clicking, the fastest strategy may be to click everywhere — that destroys the attentional challenge. A strong online design should record incorrect clicks, accuracy, or a click penalty, which encourages actual detection. A quick correct response with no wrong clicks means something different from a fast response after ten guesses.",
    },
    { type: "heading", text: "Change Blindness vs. Visual Search" },
    {
      type: "paragraph",
      text: "The [Visual Search Test](/test/visual-search-test) presents one stable display with a target among distractors. Change Blindness presents two states across time. Visual Search asks you to find what is different from surrounding items now; Change Blindness asks you to find what changed between one scene state and another. The second task depends more heavily on maintaining and comparing scene information across interruption.",
    },
    { type: "heading", text: "Change Blindness vs. Visual Memory Test" },
    {
      type: "paragraph",
      text: "The [Visual Memory Test](/test/visual-memory-test) briefly presents highlighted grid locations and asks you to reproduce them. Change blindness uses meaningful scenes and repeated comparison. A person can perform differently because the tasks involve very different representations and strategies — do not combine them into one general \"visual memory score.\"",
    },
    { type: "heading", text: "Is Change Blindness the Same as Inattentional Blindness?" },
    {
      type: "paragraph",
      text: "No. They are related but distinct. Change blindness is failing to notice that something changed across time. Inattentional blindness is failing to notice an unexpected object or event that is visible while your attention is occupied elsewhere. Both demonstrate limits of visual awareness, but the experimental structures differ.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is change blindness?", answer: "Failure to notice a visual change, especially when the normal transient caused by the change is interrupted or masked." },
        { question: "What is the flicker paradigm?", answer: "A method where the original and changed scenes repeatedly alternate with a short blank interval between them." },
        { question: "Why does the blank make the change harder to see?", answer: "It creates a global visual interruption that masks the local transient that would normally attract attention to the changed object." },
        { question: "Does change blindness mean poor vision?", answer: "No. It can occur in people with normal visual acuity and primarily reflects limitations of attention and scene comparison." },
        { question: "Why is the change obvious after I find it?", answer: "Once its location is known, attention can be directed straight to the relevant object on each alternation." },
        { question: "Is this the same as inattentional blindness?", answer: "No. Change blindness concerns changes across time; inattentional blindness concerns failing to notice an unexpected visible object." },
        { question: "Can this diagnose attention problems?", answer: "No. It is a visual-attention demonstration, not a clinical diagnostic test." },
      ],
    },
    {
      type: "paragraph",
      text: "Before you find the change, two scenes can appear almost identical. After you find it, the difference can seem impossible to miss. Nothing about the images suddenly becomes clearer — what changes is where your attention is directed. That is the central lesson of change blindness: seeing a scene does not guarantee that every visible detail is available for comparison when the world changes.",
    },
  ],
};
