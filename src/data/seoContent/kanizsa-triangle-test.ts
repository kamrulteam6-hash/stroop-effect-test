import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you see a bright white triangle even though no triangle outline was actually drawn? Take this free **Kanizsa Triangle Test** to experience illusory contours and perceptual completion. Three incomplete black disks — often called \"Pac-Man\" shapes — are positioned so that their missing wedges align, and most observers perceive a triangle floating in front of them.",
    },
    {
      type: "paragraph",
      text: "The triangle's edges are not defined by a physical luminance border. Your visual system constructs a coherent surface from incomplete surrounding information.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Kanizsa Triangle Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press Start Test.",
        "Look at the arrangement of incomplete circles.",
        "Notice whether a triangular shape appears between them.",
        "Decide whether the triangle seems brighter than the background.",
        "Compare aligned and misaligned inducer conditions.",
        "Complete orientation-discrimination trials if available.",
        "Review detection accuracy and the minimum alignment needed to produce a clear illusory contour.",
      ],
    },
    { type: "paragraph", text: "Do not search for a faint gray outline in the image. The defining edges may not physically exist at all." },
    { type: "heading", text: "What Is the Kanizsa Triangle?" },
    {
      type: "paragraph",
      text: "The Kanizsa triangle is one of the most famous examples of an illusory contour. Three black disks each have a wedge removed, and their openings face inward; additional line segments may reinforce the configuration. When arranged correctly, observers commonly perceive a white triangle with sharp triangular edges, a surface appearing in front of the black disks, and sometimes a slightly brighter interior. The physical display contains no complete white triangular border — the perceived contour is created by visual organization. The figure is associated with Italian psychologist Gaetano Kanizsa, whose work made subjective contours a major topic in perceptual science.",
    },
    { type: "heading", text: "What Is an Illusory Contour?" },
    {
      type: "paragraph",
      text: "An illusory contour is a perceived boundary where the image does not contain the normal physical edge signal produced by a change in luminance or color. Imagine a real black square on a white wall — the edge is physically defined because luminance changes sharply at the square's border. In a Kanizsa figure, part of the perceived triangular edge crosses a region where the pixels on both sides can have the same luminance, yet the boundary still looks distinct. That makes illusory contours powerful tools for studying how the visual system organizes incomplete information.",
    },
    { type: "heading", text: "Why \"Pac-Man\" Shapes Create a Triangle" },
    {
      type: "paragraph",
      text: "The incomplete disks act as inducers. Their missing wedges line up in a way that suggests they are partially covered by a foreground surface — a plausible interpretation is that three complete black disks exist behind a white triangle. The visual system therefore organizes the fragments into an occluding foreground triangle and partially hidden background circles, creating both visible and hidden forms that are more coherent than treating every fragment as an unrelated shape.",
    },
    { type: "heading", text: "Gestalt Grouping and Closure" },
    {
      type: "paragraph",
      text: "The Kanizsa triangle is often explained using Gestalt principles. Gestalt psychology emphasized that perception organizes elements into structured wholes rather than simply adding isolated sensations. Relevant ideas include closure, where incomplete visual information tends to be organized into complete forms; good continuation, where edges are preferentially connected in smooth, coherent ways; and figure-ground organization, where one region becomes the figure while another becomes background. These concepts describe important perceptual tendencies, but simply saying \"the brain likes closure\" does not fully explain the underlying neural computation.",
    },
    { type: "heading", text: "Modal and Amodal Completion" },
    {
      type: "paragraph",
      text: "Two forms of perceptual completion are often distinguished. In modal completion, you experience a visible surface or contour that is not physically specified — the bright triangular surface is an example. In amodal completion, you perceive an object as continuing behind an occluder even though the hidden part is not visibly experienced — the black disks can be perceived as complete circles partly hidden behind the triangle. The Kanizsa figure combines these processes elegantly, creating a foreground surface while completing occluded objects behind it.",
    },
    { type: "heading", text: "Why the Triangle Can Look Brighter" },
    {
      type: "paragraph",
      text: "The interior of a Kanizsa triangle can appear slightly brighter than the surrounding background even when the physical luminance is identical. This is called illusory brightness, and it shows that perceived surface brightness can be influenced by inferred boundaries and figure organization. A browser version can exploit this by using matched background and triangle-region luminance alongside a brightness-matching slider, letting users adjust a real comparison patch until it looks as bright as the illusory triangle interior.",
    },
    { type: "heading", text: "Orientation Discrimination" },
    {
      type: "paragraph",
      text: "One way researchers measure illusory-contour perception is to ask participants to identify the orientation of a Kanizsa shape — for example, triangle pointing up versus triangle pointing down. If the inducers are aligned strongly enough to create the illusory contour, orientation becomes easy to judge; if the inducing fragments are scrambled, the triangle disappears and orientation performance drops. A 2016 experiment used orientation discrimination to directly measure perception of Kanizsa contours under different awareness conditions, giving your test a measurable task beyond simply asking \"do you see it?\"",
    },
    { type: "heading", text: "Aligned vs. Misaligned Inducers and Distance" },
    {
      type: "paragraph",
      text: "A powerful control condition rotates the Pac-Man shapes away from the correct alignment: in the aligned condition, openings point toward the corners of an implied triangle, while in the misaligned condition, openings point in unrelated directions. The individual black elements remain similar — what changes is their global configuration. If a strong triangle appears only in the aligned version, the effect cannot be explained by one inducer alone; it depends on spatial organization across the display. Moving the Pac-Man disks farther apart weakens the connection between them until the visual system no longer strongly groups them into one foreground triangle, creating a natural difficulty slider across inducer size, separation, wedge angle, and alignment.",
    },
    { type: "heading", text: "Awareness and Illusory Contours" },
    {
      type: "paragraph",
      text: "Researchers have debated how much processing of the inducing context can occur without conscious awareness. A 2016 study by Banica and Schwarzkopf used masking procedures and found evidence that perception of Kanizsa contours required awareness of the inducing context under their tested conditions, interpreting the result as consistent with a multistage, recurrent integration process. This is a useful caution against oversimplified claims that the triangle is created by one instantaneous feed-forward step — the exact neural mechanisms remain an active research topic.",
    },
    { type: "heading", text: "Kanizsa Triangle vs. Hermann Grid" },
    {
      type: "paragraph",
      text: "The [Hermann Grid Illusion Test](/test/hermann-grid-illusion-test) creates phantom brightness changes at grid intersections — perceived dark spots without dark dots. Kanizsa creates phantom boundaries and surfaces — perceived edges without drawn edges. Both demonstrate constructive perception, but their stimulus geometry and likely mechanisms differ.",
    },
    { type: "heading", text: "Is the Kanizsa Triangle a \"Brain Filling in the Gaps\"?" },
    {
      type: "paragraph",
      text: "That phrase is useful but incomplete. The visual system does not appear to literally paint missing pixels into the retinal image; instead, it represents boundaries, surfaces, and occlusion relationships in a way that supports perception of a complete object. The experience feels like a completed triangle because the visual system has organized the scene around that surface interpretation.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "Useful metrics include illusory shape detection (how often the implied triangle was correctly detected), orientation accuracy (identifying whether it pointed up or down), separation threshold (how far apart the inducers could move before performance declined), brightness match (how much brighter the illusory surface appeared than an equal-luminance background), and control accuracy (how often scrambled configurations were correctly rejected). These outputs turn the illusion into an experiment.",
    },
    { type: "heading", text: "Can the Kanizsa Triangle Diagnose Autism or Schizophrenia?" },
    {
      type: "paragraph",
      text: "No. Illusory-contour perception has been studied in several developmental and clinical populations, but research findings at the group level cannot be converted into an individual diagnosis from a browser task. A result can be affected by attention, device size, eyesight, stimulus timing, and misunderstanding. Clinical conclusions require validated procedures and broader assessment.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What is the Kanizsa triangle?", answer: "An illusory-contour figure where aligned incomplete disks create the perception of a triangle whose edges are not physically drawn." },
        { question: "Are the triangle edges really on the screen?", answer: "No. Much of the perceived boundary has no corresponding luminance-defined line." },
        { question: "Why do the Pac-Man shapes create a triangle?", answer: "Their alignment supports perceptual grouping, occlusion, and completion into a coherent foreground surface." },
        { question: "What is an illusory contour?", answer: "A perceived boundary that exists without the normal physical edge signal in the image." },
        { question: "Why can the triangle look brighter than the background?", answer: "Surface and boundary organization can change perceived brightness even when physical luminance is equal." },
        { question: "Does moving the inducers apart weaken the effect?", answer: "Yes. Increasing separation and reducing geometric support can make the illusory contour harder to perceive." },
        { question: "Is this a diagnostic test?", answer: "No. It is an interactive visual-perception experiment." },
      ],
    },
    {
      type: "paragraph",
      text: "The Kanizsa triangle reveals that seeing is not simply detecting existing lines. The image gives the visual system fragments, and perception organizes them into objects, occlusion, surfaces, and boundaries. The triangle is compelling precisely because the edge feels real even where the screen contains no edge at all.",
    },
  ],
};
