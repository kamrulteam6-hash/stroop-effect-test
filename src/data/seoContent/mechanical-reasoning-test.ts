import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Mechanical reasoning is the ability to look at a physical system and work out what will happen next. Which gear turns clockwise? Which side of a lever requires less force? What happens when a pulley is added? Which object accelerates, tips, or stays balanced?",
    },
    {
      type: "paragraph",
      text: "Take this free Mechanical Reasoning Test using original visual problems based on familiar principles of force, motion, machines, and physical cause-and-effect. The goal is not to reward memorized engineering formulas — most questions are solvable by understanding the physical relationship shown in the diagram.",
    },
    { type: "heading", id: "how-to-take", text: "How to Take the Mechanical Reasoning Test" },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Study the diagram before reading the answer choices.",
        "Identify the parts that can move.",
        "Determine where force enters the system.",
        "Track how that force or motion is transmitted.",
        "Use arrows, contact points, supports, and distances as evidence.",
        "Eliminate answers that violate the physical relationships.",
        "Choose the most likely outcome.",
      ],
    },
    { type: "heading", id: "what-is", text: "What Is Mechanical Reasoning?" },
    {
      type: "paragraph",
      text: "**Mechanical reasoning** is the ability to understand and predict the behavior of physical systems — gears, pulleys, levers, wheels and axles, springs, balance, gravity, friction, pressure, fluid behavior, and basic motion. Mechanical aptitude tests have long been used in technical, vocational, military, manufacturing, maintenance, and engineering-related selection. But mechanical reasoning is not simply a test of whether someone has used a particular tool before — a good item presents enough information to reason from the system itself.",
    },
    { type: "heading", id: "mental-simulation", text: "Mental Simulation" },
    {
      type: "paragraph",
      text: "One influential account of mechanical reasoning is **mental simulation**. Mary Hegarty's research found that people often solve systems such as pulleys by mentally animating the components — this rope moves first, then this pulley moves, then that block rises, rather than calculating the entire machine at once. Hegarty and Sims found large individual differences in this ability, and performance was strongly related to spatial visualization. Later work described mechanical simulation as a piecemeal process rather than a perfect internal physics engine, which is why clear diagrams and logically connected parts are more useful for test design than visually complicated machinery.",
    },
    { type: "heading", id: "not-perfect-intuition", text: "Mechanical Reasoning Is Not Perfect Intuitive Physics" },
    {
      type: "paragraph",
      text: "People can reason successfully about everyday mechanisms while still holding incorrect physical intuitions — for example, that heavier objects always fall faster, that force must continue acting in the direction of motion, that a longer path necessarily means more work in every machine, or that more pulleys automatically means greater mechanical advantage. A test should distinguish intuitive prediction from correct physical relationship, which is why the answer explanation is an important part of the experience.",
    },
    { type: "heading", id: "gears", text: "Gears" },
    {
      type: "paragraph",
      text: "Gear questions usually test the transfer of rotational motion. Two external gears touching each other rotate in opposite directions — if Gear A turns clockwise, Gear B turns counterclockwise, and if Gear B touches Gear C, Gear C turns clockwise again. With a simple chain of external gears, each contact reverses direction. A useful shortcut is to count contacts rather than imagine every tooth individually.",
    },
    { type: "heading", id: "gear-size-speed", text: "Gear Size and Speed" },
    {
      type: "paragraph",
      text: "When two gears mesh, their edge speeds at the contact point are related. A smaller gear generally rotates more times than a larger gear during the same interval — if a 10-tooth gear drives a 20-tooth gear, the larger gear rotates more slowly. A good reasoning question may ask about direction, relative speed, or number of rotations, using simple tooth counts or obvious size ratios unless exact calculation is the intended skill.",
    },
    { type: "heading", id: "levers", text: "Levers" },
    {
      type: "paragraph",
      text: "A lever rotates around a pivot called the **fulcrum**. The turning effect depends on both force and distance from the pivot — this turning effect is called torque or moment. A small force applied far from the fulcrum can balance a larger force applied close to it, which is why a long wrench makes it easier to loosen a tight bolt. Most browser problems can be solved qualitatively without using a formal torque equation.",
    },
    { type: "heading", id: "lever-balance", text: "Lever Balance" },
    {
      type: "paragraph",
      text: "Imagine 20 N applied 2 units from the pivot, and 10 N applied 4 units from the pivot on the other side. Both create the same turning effect: 20 × 2 = 40, and 10 × 4 = 40, so the lever balances. This is mechanical reasoning because you must combine force and distance rather than simply choose the heavier side.",
    },
    { type: "heading", id: "pulleys", text: "Pulleys" },
    {
      type: "paragraph",
      text: "Pulley questions become confusing when people count visible wheels instead of tracking the rope. A fixed pulley can change the direction of an applied force. A movable pulley can reduce the force required to support a load by distributing the load across multiple supporting rope segments. The key question is usually how many rope segments directly support the moving load — that is more reliable than counting how many pulley wheels are visible.",
    },
    { type: "heading", id: "mechanical-advantage", text: "Mechanical Advantage" },
    {
      type: "paragraph",
      text: "An ideal simple machine can trade force for distance. If a pulley arrangement provides mechanical advantage, you may pull a longer length of rope while using less force — the machine does not create energy. Ignoring friction, less input force usually requires more input distance. This principle appears across pulleys, levers, inclined planes, and gears, and a strong test can ask qualitative questions about this trade-off without requiring advanced physics.",
    },
    { type: "heading", id: "pressure", text: "Pressure" },
    {
      type: "paragraph",
      text: "Pressure depends on force distributed over area. The same force applied over a smaller area creates greater pressure, which explains why a sharp blade cuts more easily, a narrow heel can exert high pressure, and snowshoes reduce pressure on snow. A mechanical reasoning item can compare contact area while holding weight constant.",
    },
    { type: "heading", id: "fluids", text: "Fluids and Hydraulics" },
    {
      type: "paragraph",
      text: "In a confined fluid, pressure can be transmitted through the system. Simple hydraulic problems compare pistons of different areas — a larger output piston can produce a larger output force for the same pressure, but it moves a smaller distance relative to the smaller piston in an idealized system. Again, the useful concept is a trade-off rather than \"free force.\"",
    },
    { type: "heading", id: "spatial-ability", text: "Spatial Ability and Mechanical Reasoning" },
    {
      type: "paragraph",
      text: "Mechanical reasoning often depends heavily on spatial visualization — you may need to imagine a gear rotating, a rope tightening, a linkage moving, or a block tipping. Hegarty and Sims' work found a strong relationship between spatial visualization and mental animation of mechanical systems. That does not make mechanical reasoning identical to spatial ability — knowledge of physical constraints and cause-and-effect also matters.",
    },
    { type: "heading", id: "vs-spatial", text: "Mechanical Reasoning vs. Spatial Reasoning" },
    {
      type: "paragraph",
      text: "Our [Spatial Reasoning Test](/test/spatial-reasoning-test) asks about positions, routes, orientation, and viewpoint. Mechanical Reasoning adds physical causality — a spatial question asks where an object will be after rotation, while a mechanical question asks how an object will move when a force acts through a mechanism. The second requires understanding what the parts do, not only where they are.",
    },
    { type: "heading", id: "vs-diagrammatic", text: "Mechanical Reasoning vs. Diagrammatic Reasoning" },
    {
      type: "paragraph",
      text: "Our [Diagrammatic Reasoning Test](/test/diagrammatic-reasoning-test) uses invented operators whose meaning is defined inside the puzzle — a square symbol might mean \"rotate 90°.\" Mechanical Reasoning uses physical principles, like two meshed gears rotating in opposite directions. One is arbitrary visual logic; the other is constrained by mechanics.",
    },
    { type: "heading", id: "what-result-shows", text: "What Should the Result Show?" },
    {
      type: "list",
      items: [
        "**Overall Accuracy** — primary score.",
        "**Gears** — direction and speed relationships.",
        "**Levers and Torque** — force-distance reasoning.",
        "**Pulleys** — rope-path and support reasoning.",
        "**Forces and Motion** — physical cause-and-effect.",
        "**Stability and Balance** — center-of-gravity reasoning.",
        "**Pressure and Fluids** — area and transmitted-force relationships.",
      ],
    },
    { type: "heading", id: "good-score", text: "What Is a Good Mechanical Reasoning Score?" },
    {
      type: "paragraph",
      text: "There is no universal cutoff for an original browser test. Performance depends on item difficulty, prior physics exposure, spatial skill, time limit, and diagram quality — norms are not borrowed from commercial tests such as the Bennett or Wiesen mechanical assessments.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        {
          question: "What does a Mechanical Reasoning Test measure?",
          answer: "Your ability to understand and predict how physical systems and simple machines behave.",
        },
        {
          question: "Do I need advanced physics?",
          answer: "No. A general mechanical aptitude test relies mainly on basic principles such as force, motion, gears, levers, pulleys, and pressure.",
        },
        {
          question: "Is mechanical reasoning the same as spatial reasoning?",
          answer: "No. Spatial ability contributes, but mechanical reasoning also requires physical cause-and-effect.",
        },
        {
          question: "Do more pulleys always mean more mechanical advantage?",
          answer: "No. What matters is how the rope is arranged and how many rope segments support the moving load.",
        },
        {
          question: "Why does a longer lever make some tasks easier?",
          answer: "Applying force farther from the pivot creates greater turning effect.",
        },
        {
          question: "Can practice improve mechanical reasoning?",
          answer: "Yes. Knowledge, strategy, spatial visualization, and experience can all improve performance.",
        },
        {
          question: "Is this a professional engineering test?",
          answer: "No. It is a general browser-based mechanical reasoning assessment.",
        },
      ],
    },
    { type: "heading", text: "Follow the Force" },
    {
      type: "paragraph",
      text: "Most mechanical puzzles become easier when you stop looking at the machine as one object. Ask: where does the force enter? Which component moves first? What is connected to it? Where does that motion go next? Mechanical reasoning is often a chain of consequences — follow the chain correctly, and even a complicated-looking system becomes understandable.",
    },
  ],
};
