"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "mechanical-reasoning-test",
  intro:
    "Answer questions about gears, levers, pulleys, and other everyday mechanical systems using basic physics intuition — no formulas required.",
  resultHeading: "Mechanical Reasoning Result",
  disclaimer: "This is an original mechanical reasoning quiz. It is not an official aptitude assessment used by employers.",
  questions: [
    {
      question: "Two meshed gears: Gear A has 10 teeth, Gear B has 20 teeth. If Gear A makes 4 full rotations, how many rotations does Gear B make?",
      options: ["2", "4", "8", "1"],
      correctIndex: 0,
      explanation: "Gear B has twice as many teeth, so it turns half as many times: 4 ÷ 2 = 2.",
    },
    {
      question: "In a simple see-saw balanced on a central pivot, if one side has a heavier weight, what happens?",
      options: ["The heavier side goes up", "The heavier side goes down", "Nothing changes", "Both sides go down"],
      correctIndex: 1,
      explanation: "More weight on one side creates more downward torque, so that side goes down.",
    },
    {
      question: "A single fixed pulley is used to lift a bucket. Compared to lifting it directly by hand, the fixed pulley:",
      options: ["Reduces the force needed", "Changes only the direction of pulling force, not the amount", "Doubles the force needed", "Makes lifting impossible"],
      correctIndex: 1,
      explanation: "A single fixed pulley only redirects the force (e.g., letting you pull down instead of up); it doesn't provide mechanical advantage.",
    },
    {
      question: "Two identical gears are connected by a chain, like a bicycle. If the front gear turns clockwise, which direction does the rear gear turn?",
      options: ["Counter-clockwise", "Clockwise", "It stops", "Depends on chain length"],
      correctIndex: 1,
      explanation: "Gears connected by a chain (not directly meshed) turn in the same direction, unlike directly meshed gears.",
    },
    {
      question: "A longer wrench handle makes it easier to loosen a tight bolt because it:",
      options: ["Increases the torque applied for the same hand force", "Increases friction", "Reduces the bolt's resistance", "Has no mechanical effect"],
      correctIndex: 0,
      explanation: "Torque equals force times distance from the pivot, so a longer handle multiplies the turning force for the same hand effort.",
    },
    {
      question: "Water flows through a pipe that narrows partway along its length. At the narrow section, the water's speed:",
      options: ["Increases", "Decreases", "Stays the same", "Stops completely"],
      correctIndex: 0,
      explanation: "To keep the same volume flowing per second through a smaller opening, the water must speed up.",
    },
    {
      question: "Two directly meshed gears of different sizes: which one spins faster?",
      options: ["The larger gear", "The smaller gear", "They always spin at the same speed", "Neither spins"],
      correctIndex: 1,
      explanation: "The smaller gear has fewer teeth, so it must complete more rotations to keep pace with the larger gear's teeth passing by.",
    },
    {
      question: "A block sits on a ramp. As the ramp's incline angle increases, the force needed to keep the block from sliding down:",
      options: ["Decreases", "Increases", "Stays constant", "Becomes zero"],
      correctIndex: 1,
      explanation: "A steeper incline increases the component of gravity pulling the block down the slope, requiring more force to resist it.",
    },
    {
      question: "In a system of pulleys where a movable pulley is added to lift a load, the main benefit compared to a single fixed pulley is:",
      options: ["It reduces the force needed to lift the load", "It reverses the direction of the rope", "It removes the need for a rope", "It has no benefit"],
      correctIndex: 0,
      explanation: "A movable pulley shares the load's weight across two rope segments, roughly halving the force needed to lift it.",
    },
    {
      question: "A heavier flywheel spinning on an engine tends to make the engine's rotation speed:",
      options: ["More erratic", "More stable and even", "Stop faster", "Reverse direction"],
      correctIndex: 1,
      explanation: "A heavier flywheel stores more rotational momentum, smoothing out speed fluctuations between power strokes.",
    },
  ],
};

export function MechanicalReasoningTest() {
  return <MCQQuiz config={config} />;
}
