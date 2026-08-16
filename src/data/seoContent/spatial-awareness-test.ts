import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Spatial awareness is the ability to understand where things are in relation to you, to one another, and to a changing viewpoint.",
    },
    {
      type: "paragraph",
      text: "Take this free Spatial Awareness Test using visual problems involving left and right, front and behind, near and far, relative position, direction, viewpoint changes, object orientation, and simple route updates. The goal is not to create another Mental Rotation Test — this page focuses on the broader ability to keep track of position and orientation within a spatial scene.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Spatial Awareness Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Study the scene or arrangement.",
        "Identify your current viewpoint.",
        "Note where the target objects are located relative to that viewpoint.",
        "If the viewpoint changes, mentally update left, right, front, and behind.",
        "Follow directional movements in the order shown.",
        "Choose the spatial relationship that is correct after the change.",
        "Continue through harder perspective and orientation problems.",
      ],
    },
    {
      type: "paragraph",
      text: "The most common mistake is keeping the original viewpoint even after the problem tells you that the observer has turned or moved.",
    },
    { type: "heading", id: "what-is", text: "What Is Spatial Awareness?" },
    {
      type: "paragraph",
      text: "In everyday language, **spatial awareness** refers to understanding the position, distance, direction, and relationship of objects in surrounding space — knowing that a chair is behind you, estimating whether a box will fit through a gap, turning around and knowing which direction is now left, navigating around obstacles, and understanding where one object sits relative to another.",
    },
    {
      type: "paragraph",
      text: "In research, these abilities are usually divided into more specific constructs such as spatial orientation, perspective taking, mental rotation, spatial perception, and navigation. That means \"spatial awareness\" is best treated as an umbrella term, not as one perfectly isolated cognitive process.",
    },
    { type: "heading", id: "spatial-orientation", text: "Spatial Orientation" },
    {
      type: "paragraph",
      text: "**Spatial orientation** involves understanding your position and heading relative to the environment. Suppose you are facing north and a building is to your east — if you turn to face south, that building is now on your left. The building did not move; your reference frame changed. Spatial-orientation tasks test whether you can update that relationship accurately, and research describes it as involving multiple sensory and cognitive systems rather than one simple mental operation.",
    },
    { type: "heading", id: "perspective-taking", text: "Perspective Taking" },
    {
      type: "paragraph",
      text: "**Perspective taking** asks how a scene appears from another viewpoint. If a red cube, green sphere, and blue cone are arranged on a table and you view them from one side, imagining standing on the opposite side changes which object appears on your left. Research distinguishes spatial perspective taking from object mental rotation — in perspective taking, the imagined observer changes position or orientation relative to the scene, while in mental rotation, the object itself is mentally transformed.",
    },
    { type: "heading", id: "egocentric", text: "Egocentric Spatial Awareness" },
    {
      type: "paragraph",
      text: "An **egocentric** reference frame represents locations relative to yourself — left of me, behind me, directly ahead, two steps to my right. Egocentric information changes when you turn: a coffee cup that was on your right can become left of your body after you rotate. Egocentric tasks require continual updating of the observer's orientation.",
    },
    { type: "heading", id: "allocentric", text: "Allocentric Spatial Awareness" },
    {
      type: "paragraph",
      text: "An **allocentric** reference frame represents locations relative to the environment or to other objects — north of the library, beside the tree, between the two buildings. These relationships do not necessarily change when you turn your body. This test includes both reference frames, with explicit instructions about whether directions are viewer-centered or environment-centered.",
    },
    { type: "heading", id: "left-right-rotation", text: "Left and Right After Rotation" },
    {
      type: "paragraph",
      text: "If you are facing north and a lamp is on your right, turning 180 degrees puts the lamp on your left. This sounds easy when written slowly, but under time pressure, left–right updating becomes surprisingly error-prone. Difficulty increases as the angular difference between current and imagined viewpoints grows — research on spatial perspective taking has found performance changes as angular disparity increases, consistent with a transformation process.",
    },
    { type: "heading", id: "front-behind", text: "Front and Behind" },
    {
      type: "paragraph",
      text: "If you face east and an object is directly north of you, from your viewpoint it is on your left. If you turn west, north becomes your right — the map direction remains the same, only the body-centered relation changes. This is exactly the kind of distinction Spatial Awareness measures.",
    },
    { type: "heading", id: "directional-updating", text: "Directional Updating" },
    {
      type: "paragraph",
      text: "A route problem might ask you to face north, turn right, move forward, turn left, and move forward, then answer which direction you're now facing. The task requires tracking orientation through a sequence — harder items can ask where the endpoint lies relative to the starting point, introducing spatial updating without requiring real-world navigation knowledge.",
    },
    { type: "heading", id: "depth-perception", text: "Depth Perception Is Not the Same Thing" },
    {
      type: "paragraph",
      text: "O*NET defines depth perception as judging which objects are closer or farther away or judging distance between yourself and an object. That is related to spatial awareness, but not identical to a browser reasoning task — true depth perception depends on visual cues such as binocular disparity, motion, perspective, size, and occlusion, none of which a flat browser screen can recreate accurately. This test focuses mainly on spatial relationships and orientation, not clinical stereoscopic depth perception.",
    },
    { type: "heading", id: "perspective-vs-rotation", text: "Perspective Change vs. Object Rotation" },
    {
      type: "paragraph",
      text: "This is one of the most useful distinctions on this page. Object rotation means imagining the object turning. Perspective change means imagining yourself moving around the object. Research continues to treat mental rotation and perspective taking as related but distinguishable spatial processes, so this test includes viewpoint questions without simply reusing rotated-block items from our [Mental Rotation Test](/test/mental-rotation-test).",
    },
    { type: "heading", id: "vs-spatial-reasoning", text: "Spatial Awareness vs. Spatial Reasoning" },
    {
      type: "paragraph",
      text: "Our [Spatial Reasoning Test](/test/spatial-reasoning-test) is broader and more puzzle-oriented, including routes, coordinates, multi-step relations, viewpoint, and logical spatial constraints. Spatial Awareness feels more immediate: where is it? Which side is it on? What changes when I turn? This creates a clearer user expectation for each test.",
    },
    { type: "heading", id: "vs-mental-rotation", text: "Spatial Awareness vs. Mental Rotation" },
    {
      type: "paragraph",
      text: "Our [Mental Rotation Test](/test/mental-rotation-test) compares rotated objects. Spatial Awareness is broader — you may be good at determining where an object is relative to an observer while being slower at rotating complex 3D forms, and these scores are not merged without evidence that a battery supports a common scale.",
    },
    { type: "heading", id: "why-viewpoint-matters", text: "Why Viewpoint Matters" },
    {
      type: "paragraph",
      text: "Spatial descriptions depend on reference frame — \"the box is on the left\" is incomplete unless we know left from whose perspective. This test makes the viewpoint visually obvious with cues like an arrow showing facing direction, a human-like observer icon, or a labeled north arrow for map-based items, since ambiguous viewpoints create bad questions.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Left–Right Orientation** — body-centered direction judgments.",
        "**Perspective Taking** — judgments from another viewpoint.",
        "**Spatial Updating** — tracking turns and movements.",
        "**Relative Position** — object-to-object relationships.",
        "**Distance Judgments** — near/far comparison when the diagram supports it.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Spatial Awareness Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser test. Performance depends on item format, angular changes, number of objects, time limits, device size, and test familiarity — accuracy is not converted into a clinical spatial score or IQ value.",
    },
    { type: "heading", id: "diagnose", text: "Can This Test Diagnose a Neurological Problem?" },
    {
      type: "paragraph",
      text: "No. Spatial orientation can be affected in neurological and vestibular disorders, and clinical researchers use specialized spatial-orientation assessments. A general browser test cannot diagnose dementia, vestibular disease, brain injury, spatial neglect, or other neurological impairment. A low score can also come from misunderstanding the viewpoint or working too quickly.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What is spatial awareness?",
          answer: "Understanding the position, direction, distance, and orientation of yourself and objects in space.",
        },
        {
          question: "Is spatial awareness the same as spatial reasoning?",
          answer: "They overlap, but spatial awareness focuses more directly on position and orientation, while spatial reasoning can include broader spatial puzzles.",
        },
        {
          question: "What is perspective taking?",
          answer: "Imagining how a spatial arrangement appears from another viewpoint.",
        },
        {
          question: "What is an egocentric reference frame?",
          answer: "A representation of locations relative to your own body or viewpoint.",
        },
        {
          question: "What is an allocentric reference frame?",
          answer: "A representation of locations relative to the environment or other objects.",
        },
        {
          question: "Is this a depth-perception test?",
          answer: "No. A flat browser task cannot reproduce all real-world depth cues or provide a clinical stereoscopic-vision assessment.",
        },
        {
          question: "Can spatial awareness improve with practice?",
          answer: "Yes. Spatial skills and strategies can improve with training.",
        },
      ],
    },
    { type: "heading", text: "Before You Decide Where Something Is, Decide Where You Are" },
    {
      type: "paragraph",
      text: "Many spatial-awareness errors begin before the actual question — the solver forgets that the viewpoint changed. So start with: which way am I facing? Then ask: where is the object relative to that direction? Once the reference frame is correct, left, right, front, behind, and relative position become much easier to track.",
    },
  ],
};
