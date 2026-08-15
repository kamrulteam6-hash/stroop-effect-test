import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you reason about where objects are, how they relate, and what changes when your viewpoint changes? Take this free **Spatial Reasoning Test** using original visual problems involving relative position, direction, spatial orientation, viewpoint changes, maps, coordinate transformations, and multi-step spatial relations.",
    },
    {
      type: "paragraph",
      text: "Spatial reasoning is not one single skill. This general test samples several kinds of spatial relationships without duplicating the site's specialized Mental Rotation, Paper Folding, Mirror Image, or Pattern Completion tests.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Spatial Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Inspect the diagram or spatial rule.",
        "Identify the relationships that are given.",
        "Mentally update positions or viewpoints if required.",
        "Choose the answer that must follow.",
        "Avoid physically rotating the device.",
        "Continue through increasing difficulty.",
        "Review accuracy by spatial problem type.",
      ],
    },
    { type: "paragraph", text: "Speed can be recorded, but accuracy should remain primary. A correct answer after careful reasoning is more meaningful than a fast guess." },
    { type: "heading", text: "What Is Spatial Reasoning?" },
    {
      type: "paragraph",
      text: "Spatial reasoning is the ability to represent and reason about positions, distances, directions, orientations, transformations, and relationships among objects in space. Examples from everyday life include reading a map, understanding which object is behind another, imagining a room from another viewpoint, following multi-step directions, and predicting where an object will be after movement. Spatial ability is multidimensional — research distinguishes several related skills rather than one universal \"spatial intelligence\" process.",
    },
    { type: "heading", text: "Spatial Reasoning Is Broader Than Mental Rotation" },
    {
      type: "paragraph",
      text: "Mental rotation is one famous spatial task. Your [Mental Rotation Test](/test/mental-rotation-test) asks whether objects are the same after rotation, but spatial reasoning also includes problems where no object must be mentally spun. For example: A is north of B, C is east of A — where is C relative to B? The answer, northeast, requires relational integration. A general Spatial Reasoning Test should emphasize this broader family of tasks.",
    },
    { type: "heading", text: "Relative Position and Directional Reasoning" },
    {
      type: "paragraph",
      text: "A simple spatial relation can be \"the star is left of the circle.\" A two-step problem might add \"the triangle is above the star,\" then ask where the triangle is relative to the circle — the user must combine the relationships, and harder items can contain three or four objects, nested relations, and distractor information, with difficulty coming from building and maintaining a spatial model. Compass-direction items are also well suited to browsers: move 3 units north, then 2 units east — which direction are you from your starting point? These problems test whether the user can update location across a sequence of movements without requiring real geographic knowledge, since the directions are defined inside the puzzle.",
    },
    { type: "heading", text: "Route Integration" },
    {
      type: "paragraph",
      text: "A harder route problem might say: move east, turn left, move forward, turn right, move backward. Now the meaning of \"left\" and \"right\" depends on current orientation, and the user must track both location and heading. This is different from adding fixed north/south coordinates and creates a useful spatial updating challenge.",
    },
    { type: "heading", text: "Egocentric vs. Allocentric Reference Frames" },
    {
      type: "paragraph",
      text: "Spatial information can be represented relative to different reference frames. Egocentric reference frames are relative to the observer — to my left, behind me. Allocentric reference frames are relative to the environment or other objects — north of the tree, beside the building. A problem can become difficult when users must switch between these frames, so a strong test labels separate modules rather than mixing reference frames without explanation.",
    },
    { type: "heading", text: "Perspective Taking" },
    {
      type: "paragraph",
      text: "Imagine three people standing around a table. From your viewpoint, the red cube is on the left and the blue sphere is on the right. From the person standing opposite you, which object is on the left? This requires a change of viewpoint. Perspective taking is related to mental transformation but is not identical to rotating an isolated object — the imagined observer changes orientation relative to a stable scene.",
    },
    { type: "heading", text: "Map Reasoning" },
    {
      type: "paragraph",
      text: "A map provides a two-dimensional representation of spatial relationships. Browser items can ask users to find the shortest route, identify direction between landmarks, update location after turns, and translate between map view and first-person instructions. A simple map task does not need to test real navigation — all necessary information should be contained in the diagram, keeping the score focused on spatial reasoning rather than geographic familiarity.",
    },
    { type: "heading", text: "Spatial Relations Can Be Multi-Step" },
    {
      type: "paragraph",
      text: "A one-step relation is easy; a multi-step relation requires integrating several statements. For example: B is right of A, C is above B, D is left of C — where is D relative to A? The solver must construct a small internal map. This kind of relation integration can be generated procedurally, making it useful for repeat testing without memorized answers.",
    },
    { type: "heading", text: "Why This Page Should Not Become Another Mental Rotation Test" },
    {
      type: "paragraph",
      text: "Because your site already has [Mental Rotation Test](/test/mental-rotation-test), this page should not mainly show two 3D objects and ask whether they match. Instead, it prioritizes spatial relations, viewpoint, route tracking, reference frames, and coordinate movement, giving the page its own search intent. Mental rotation is mentioned as one spatial skill and linked internally. Similarly, the [Paper Folding Test](/test/paper-folding-test) asks users to imagine folds, holes, and unfolding transformations — a specialized non-rigid spatial visualization task that this general test avoids duplicating. The [Mirror Image Test](/test/mirror-image-test) focuses on reflection, which reverses orientation across an axis and creates specific left-right relationships; the general Spatial Reasoning Test should not fill its item bank with mirror-choice questions, instead mentioning reflection as part of spatial transformation while the dedicated page handles measurement.",
    },
    { type: "heading", text: "Why One Total Score Is Not Enough" },
    {
      type: "paragraph",
      text: "Suppose a user scores 95% on directional relations, 60% on perspective taking, and 85% on map items. One total average hides the profile. A useful result should show relative position, route updating, perspective taking, and map/coordinate reasoning as separate categories — the overall score can still be displayed, but the subdomains explain what produced it. Do not use a subscore when only one or two items represent that category.",
    },
    { type: "heading", text: "Accuracy vs. Reaction Time" },
    {
      type: "paragraph",
      text: "Reaction time can add information, but difficult spatial problems naturally require thought. A user who answers in 8 seconds with 90% accuracy may be performing better than someone answering in 3 seconds with 55% accuracy. Primary scoring should therefore emphasize correctness, with time shown as median correct RT, time by difficulty, or an optional tie-breaker. Avoid combining speed and accuracy through an arbitrary formula unless it is clearly documented.",
    },
    { type: "heading", text: "Difficulty Progression" },
    {
      type: "paragraph",
      text: "A strong progression can increase one demand at a time: level 1 covers one-step left/right/up/down relations, level 2 two-step relations, level 3 direction plus orientation changes, level 4 perspective-taking problems, and level 5 multi-step route and reference-frame integration. This makes difficulty understandable and helps identify where errors begin rather than abruptly switching from trivial to extremely complex items.",
    },
    { type: "heading", text: "Diagrams Should Be Original" },
    {
      type: "paragraph",
      text: "Many standardized spatial tests use copyrighted or proprietary item sets. Your site generates original diagrams and puzzles, using procedural-generation features such as random object shapes, randomized labels, mirrored layouts, randomized routes, and controlled distractors. The scientific concepts are general, but the exact test materials are your own.",
    },
    { type: "heading", text: "Does Spatial Reasoning Measure IQ?" },
    {
      type: "paragraph",
      text: "Spatial reasoning is often included in broader cognitive and aptitude assessments, but this page is not a complete intelligence test. A valid IQ estimate requires standardized administration, multiple cognitive domains, appropriate norms, and validated scoring. An original spatial puzzle score should remain a spatial reasoning score, not be converted into an unsupported IQ.",
    },
    { type: "heading", text: "What Is a Good Spatial Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for a custom mixed task. Performance depends on item types, diagram complexity, time limits, device, prior experience, and scoring. Do not borrow percentiles from another spatial test — if your site later collects enough responses, build norms using the exact same item-generation and scoring system.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is spatial reasoning?", answer: "The ability to represent, transform, and reason about positions, directions, orientations, and relationships in space." },
        { question: "Is spatial reasoning the same as mental rotation?", answer: "No. Mental rotation is one specific spatial skill." },
        { question: "What is perspective taking?", answer: "Imagining how a scene or arrangement appears from another viewpoint." },
        { question: "What is a reference frame?", answer: "The coordinate or viewpoint system used to define directions such as left, right, front, or north." },
        { question: "Does spatial reasoning involve working memory?", answer: "Often, especially in multi-step problems, but it is not simply a memory-span task." },
        { question: "Can spatial reasoning improve with practice?", answer: "Yes. Spatial skills and task strategies can improve with training, although transfer varies." },
        { question: "Is this an IQ test?", answer: "No. It is a focused spatial-reasoning task." },
      ],
    },
    {
      type: "paragraph",
      text: "Spatial reasoning problems often look difficult because the final relationship is not shown directly — you have to construct it. Track where each object is, which way the viewpoint faces, what changed, and which relationships remain true. The answer appears only after those pieces are organized into one coherent spatial model.",
    },
  ],
};
