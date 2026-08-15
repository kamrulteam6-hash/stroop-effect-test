import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Did you know there is a small area in each eye where you genuinely cannot see?",
    },
    {
      type: "paragraph",
      text: "Use this free **Blind Spot Test** to find the normal blind spot created where the optic nerve leaves your retina. Test one eye at a time, keep your gaze fixed on the cross, and slowly move the dot until it disappears.",
    },
    {
      type: "paragraph",
      text: "Finding this blind spot is normal. The demonstration is about eye anatomy and perception—not a diagnosis of vision loss.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Find Your Blind Spot",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Press **Start Test**.",
        "Follow the instructions for the eye being tested.",
        "Cover the other eye gently without pressing on it.",
        "Look directly at the fixation cross.",
        "Keep your gaze on the cross throughout the trial.",
        "Slowly move the slider so the dot changes position.",
        "Notice when the dot disappears even though you are still looking at the cross.",
        "Mark that point.",
        "Repeat with the other eye.",
      ],
    },
    {
      type: "paragraph",
      text: "The most important rule is:",
    },
    {
      type: "paragraph",
      text: "**Do not look directly at the moving dot.**",
    },
    {
      type: "paragraph",
      text: "If your eyes follow it, the dot will remain on a seeing part of the retina and the demonstration will not work.",
    },
    {
      type: "heading",
      id: "why-blind-spot",
      text: "Why Does Every Eye Have a Blind Spot?",
    },
    {
      type: "paragraph",
      text: "The light-sensitive tissue at the back of your eye is called the **retina**.",
    },
    {
      type: "paragraph",
      text: "Most of the retina contains photoreceptors—rods and cones—that respond to light.",
    },
    {
      type: "paragraph",
      text: "But there is one location where the fibers carrying visual information leave the eye and form the **optic nerve**.",
    },
    {
      type: "paragraph",
      text: "That location is the **optic disc**.",
    },
    {
      type: "paragraph",
      text: "There are no normal photoreceptors at the optic disc. If the image of a small object falls exactly on that retinal area, there are no rods or cones there to detect it.",
    },
    {
      type: "paragraph",
      text: "That creates the eye's **physiological blind spot**.",
    },
    {
      type: "paragraph",
      text: "The [American Academy of Ophthalmology](https://www.aao.org/museum-eye-openers/blind-spot) describes the same basic anatomy: the optic nerve leaves the eye through an area without light-sensitive cells.",
    },
    {
      type: "heading",
      text: "Why Is the Blind Spot Off to the Side?",
    },
    {
      type: "paragraph",
      text: "The optic disc is not located at the center of the retina.",
    },
    {
      type: "paragraph",
      text: "Your sharpest central vision comes from the **fovea**, a specialized retinal region with very dense visual receptors.",
    },
    {
      type: "paragraph",
      text: "The optic nerve exits at a different location.",
    },
    {
      type: "paragraph",
      text: "Because the retinal image is spatially mapped into the visual field, the optic disc produces a blind region away from the exact point you are directly looking at.",
    },
    {
      type: "paragraph",
      text: "That is why the test asks you to stare at one marker while another object sits to the side.",
    },
    {
      type: "paragraph",
      text: "If you looked directly at the disappearing object, its image would move away from the optic disc and onto functioning photoreceptors.",
    },
    {
      type: "heading",
      text: "Why Don't You Notice the Blind Spot Normally?",
    },
    {
      type: "paragraph",
      text: "You walk around with a blind spot in each eye every day, yet you almost never notice a missing hole in the world.",
    },
    {
      type: "paragraph",
      text: "There are two major reasons.",
    },
    {
      type: "subheading",
      text: "Your Two Eyes Cover Different Areas",
    },
    {
      type: "paragraph",
      text: "When both eyes are open, the blind spots are in different locations in the two visual fields.",
    },
    {
      type: "paragraph",
      text: "Information from one eye can therefore help cover the missing region in the other eye.",
    },
    {
      type: "subheading",
      text: "Your Visual System Fills In Missing Information",
    },
    {
      type: "paragraph",
      text: "Even when you use one eye, you usually do not experience an obvious empty hole.",
    },
    {
      type: "paragraph",
      text: "Your visual system uses information around the missing area to create a continuous percept.",
    },
    {
      type: "paragraph",
      text: "The Exploratorium's classic blind-spot demonstration shows this especially clearly with a line: when part of the line falls on the blind spot, people tend to perceive the line as continuing through the missing region.",
    },
    {
      type: "paragraph",
      text: "This perceptual **filling-in** is one reason the blind spot is such a striking demonstration that seeing is not simply a pixel-for-pixel camera recording.",
    },
    {
      type: "heading",
      text: "Is the Natural Blind Spot the Same as a Scotoma?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "The blind spot demonstrated on this page is a normal anatomical feature of every typical eye.",
    },
    {
      type: "paragraph",
      text: "A **scotoma** is an area of reduced or missing vision that can occur elsewhere in the visual field because of an eye, optic-nerve, or neurological condition.",
    },
    {
      type: "paragraph",
      text: "Clinical visual-field testing is used to detect and map abnormal blind areas.",
    },
    {
      type: "paragraph",
      text: "The American Academy of Ophthalmology notes that visual field testing can identify blind spots and measure their location, size, and shape in conditions such as glaucoma and other disorders affecting the visual pathway.",
    },
    {
      type: "paragraph",
      text: "Do not use this browser demonstration to search for or rule out pathological scotomas.",
    },
    {
      type: "heading",
      text: "What Does the Pixel Measurement Mean?",
    },
    {
      type: "paragraph",
      text: "Your result may show the **pixel separation** between the fixation marker and the dot when it disappears. Pixels are a screen measurement, not a clinical visual-field measurement.",
    },
    {
      type: "paragraph",
      text: "The same pixel distance can represent different visual angles depending on screen size, resolution, browser zoom, and viewing distance. Move closer to the display and the geometry changes even though your anatomical blind spot has not moved.",
    },
    {
      type: "paragraph",
      text: "For repeat testing, keep your head and screen at roughly the same distance. Use the pixel value only as a personal demonstration on the same setup, not as a clinical measurement.",
    },
    {
      type: "heading",
      text: "Why Test One Eye at a Time?",
    },
    {
      type: "paragraph",
      text: "With both eyes open, the other eye can supply visual information where one eye has its blind spot.",
    },
    {
      type: "paragraph",
      text: "Closing or covering one eye isolates the effect.",
    },
    {
      type: "paragraph",
      text: "When testing the right eye, cover the left eye.",
    },
    {
      type: "paragraph",
      text: "When testing the left eye, cover the right eye.",
    },
    {
      type: "paragraph",
      text: "Do not press on the covered eye. Simply block its view gently.",
    },
    {
      type: "paragraph",
      text: "Testing both eyes separately also shows that each eye has its own blind spot.",
    },
    {
      type: "heading",
      text: "What If the Dot Never Disappears?",
    },
    {
      type: "paragraph",
      text: "The most common reason is that your gaze moved.",
    },
    {
      type: "paragraph",
      text: "Try again and check these points:",
    },
    {
      type: "list",
      items: [
        "stare at the fixation cross, not the dot;",
        "cover the instructed eye fully;",
        "move the slider slowly;",
        "keep your head still;",
        "use a comfortable viewing distance;",
        "keep the browser at normal zoom;",
        "and avoid a very small test area.",
      ],
    },
    {
      type: "paragraph",
      text: "The dot may also disappear only across a limited range and then reappear as it moves beyond the blind spot.",
    },
    {
      type: "paragraph",
      text: "That disappearance-and-reappearance pattern is exactly what the demonstration is supposed to show.",
    },
    {
      type: "heading",
      text: "Why Does the Dot Reappear?",
    },
    {
      type: "paragraph",
      text: "The optic disc covers only a small part of the retina.",
    },
    {
      type: "paragraph",
      text: "As the dot moves, its retinal image eventually enters the receptor-free area and disappears.",
    },
    {
      type: "paragraph",
      text: "Continue moving it and the image reaches functioning retina again.",
    },
    {
      type: "paragraph",
      text: "The dot becomes visible.",
    },
    {
      type: "paragraph",
      text: "So the blind spot is not an entire side of your vision. It is a limited region embedded within a much larger seeing visual field.",
    },
    {
      type: "heading",
      text: "Blind Spot Test vs. Peripheral Vision Test",
    },
    {
      type: "paragraph",
      text: "A [Peripheral Vision Test](/test/peripheral-vision-test) asks what you can detect away from the center of gaze.",
    },
    {
      type: "paragraph",
      text: "The Blind Spot Test demonstrates one specific receptor-free region created by the optic nerve.",
    },
    {
      type: "paragraph",
      text: "These are not the same thing.",
    },
    {
      type: "paragraph",
      text: "Your normal blind spot does not mean your general peripheral vision is poor.",
    },
    {
      type: "paragraph",
      text: "Likewise, successfully finding your blind spot does not prove that the rest of your visual field is normal.",
    },
    {
      type: "heading",
      text: "Can This Test Detect Glaucoma or Retinal Disease?",
    },
    {
      type: "paragraph",
      text: "No.",
    },
    {
      type: "paragraph",
      text: "Conditions such as glaucoma can create abnormal visual-field loss, but detecting that requires appropriate clinical testing.",
    },
    {
      type: "paragraph",
      text: "This webpage is designed to demonstrate the **normal physiological blind spot**, not screen the full visual field.",
    },
    {
      type: "paragraph",
      text: "If you notice a new persistent dark, blurred, or missing area in everyday vision, or a meaningful change in one eye, arrange an eye examination.",
    },
    {
      type: "paragraph",
      text: "A sudden new loss of vision or sudden missing area deserves prompt professional assessment rather than repeated browser testing.",
    },
    {
      type: "heading",
      id: "faq",
      text: "Frequently Asked Questions",
    },
    {
      type: "faq",
      items: [
        {
          question: "Is having a blind spot normal?",
          answer: "Yes. Each eye normally has a physiological blind spot where the optic nerve exits the retina.",
        },
        {
          question: "Why don't I see a black hole?",
          answer:
            "The other eye often covers the missing area, and the visual system perceptually fills in information using the surrounding scene.",
        },
        {
          question: "Does the blind spot mean part of my retina is damaged?",
          answer: "No. The optic disc naturally lacks photoreceptors because nerve fibers exit the eye there.",
        },
        {
          question: "Why must I keep looking at the cross?",
          answer:
            "The blind spot is defined relative to where your eye is fixating. Looking at the dot moves its retinal image away from the optic disc.",
        },
        {
          question: "Why does the dot disappear and then come back?",
          answer:
            "It disappears while its image falls on the receptor-free optic disc and reappears once it moves onto light-sensitive retina again.",
        },
        {
          question: "Can I measure the size of my blind spot with this test?",
          answer: "You can explore its apparent screen position, but a browser pixel measurement is not a clinical measurement of visual-field size.",
        },
        {
          question: "Is this a glaucoma test?",
          answer: "No. It demonstrates the normal anatomical blind spot and cannot rule out glaucoma or other causes of visual-field loss.",
        },
      ],
    },
    {
      type: "heading",
      text: "Find the Blind Spot in Both Eyes",
    },
    {
      type: "paragraph",
      text: "Repeat the demonstration for the second eye.",
    },
    {
      type: "paragraph",
      text: "Keep the same viewing distance and focus carefully on the fixation cross.",
    },
    {
      type: "paragraph",
      text: "The most interesting result is not the pixel number.",
    },
    {
      type: "paragraph",
      text: "It is the moment a clearly visible object **vanishes even though nothing on the screen changed**—a simple demonstration of the optic disc and the way your visual system handles missing information.",
    },
  ],
};
