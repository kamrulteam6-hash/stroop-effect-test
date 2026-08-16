"use client";

import { MCQQuiz, MCQQuizConfig } from "@/components/tests/shared/MCQQuiz";

const config: MCQQuizConfig = {
  slug: "spatial-awareness-test",
  intro:
    "Judge position, direction, perspective, and orientation as a viewpoint changes. Read each scenario carefully — the correct answer depends on whose perspective is being asked about.",
  resultHeading: "Spatial Awareness Result",
  disclaimer: "This is an original spatial awareness quiz using text-described scenarios. It is not a clinical assessment of depth perception or spatial-orientation disorders.",
  questions: [
    {
      question: "You are facing north. A lamp is directly on your right. You turn 180°. Where is the lamp now relative to you?",
      options: ["Right", "Left", "Behind you", "In front of you"],
      correctIndex: 1,
      explanation: "A 180° turn reverses your left and right sides relative to any fixed object, so the lamp moves from right to left.",
    },
    {
      question: "You face east. An object is directly north of you. From your viewpoint, which side is it on?",
      options: ["Left", "Right", "Behind", "Ahead"],
      correctIndex: 0,
      explanation: "Facing east, north is a 90° counter-clockwise turn from your facing direction, which places it on your left.",
    },
    {
      question: "Using the same setup (facing east, object due north), if you then turn to face west, where is the object now?",
      options: ["Left", "Right", "Behind", "Ahead"],
      correctIndex: 1,
      explanation: "Facing west, north is now a 90° clockwise turn from your facing direction, placing it on your right — the map direction didn't change, but your body-centered relation did.",
    },
    {
      question: "You follow these steps: face north, turn right, move forward, turn left, move forward. Which direction are you now facing?",
      options: ["North", "South", "East", "West"],
      correctIndex: 0,
      explanation: "Turning right from north faces you east; turning left from east faces you north again — the two turns cancel out.",
    },
    {
      question: "Three objects sit on a table in a row from your viewpoint: red cube (left), green sphere (middle), blue cone (right). If you walked around to the opposite side of the table and looked again, which object would now appear on your left?",
      options: ["Red cube", "Green sphere", "Blue cone", "It depends on table height"],
      correctIndex: 2,
      explanation: "Viewing from the opposite side reverses left-right order, so the blue cone (previously on the right) now appears on your left.",
    },
    {
      question: "A friend says 'the store is north of the park.' You are standing south of the park facing north. Is the store on your left, right, or straight ahead?",
      options: ["Straight ahead", "Left", "Right", "Cannot be determined"],
      correctIndex: 0,
      explanation: "This is an allocentric (map-based) direction. Since you're already facing north and the store is north of the park, it lies straight ahead along your line of sight.",
    },
    {
      question: "You are told an object is 'behind the chair' (an allocentric, chair-centered description). Does this description change if you personally walk to a different position in the room?",
      options: ["Yes, it changes with your position", "No, it stays fixed relative to the chair", "Only if you turn around", "Only if the chair moves"],
      correctIndex: 1,
      explanation: "Allocentric descriptions are anchored to the reference object (the chair), not to the observer, so they remain the same regardless of where you stand.",
    },
    {
      question: "You are facing a wall with a painting on it. The painting is above a bookshelf. If you take two steps backward without turning, does the painting's position relative to the bookshelf change?",
      options: ["Yes, it moves higher", "Yes, it moves lower", "No, it stays above the bookshelf", "It depends on the room's lighting"],
      correctIndex: 2,
      explanation: "Moving straight backward without turning doesn't change the relative (allocentric) position of the painting to the bookshelf — it remains above it.",
    },
    {
      question: "You face south. Someone facing you (facing north, directly opposite you) says an object is 'on my left.' Which side is it on for you?",
      options: ["Your left", "Your right", "Behind you", "Directly ahead"],
      correctIndex: 1,
      explanation: "Since you're facing each other, your left-right sides are mirrored — what's on their left is on your right.",
    },
    {
      question: "A route requires: start facing north, turn left, walk forward, turn left again, walk forward. Relative to your starting point, which direction have you net traveled?",
      options: ["North then stopped", "You end up facing south, having traced a path west then south", "You end up back at the start", "You end up facing east"],
      correctIndex: 1,
      explanation: "Turning left from north faces west; walking forward moves you west. Turning left again faces south; walking forward moves you south — so you end facing south after moving west then south.",
    },
  ],
};

export function SpatialAwarenessTest() {
  return <MCQQuiz config={config} />;
}
