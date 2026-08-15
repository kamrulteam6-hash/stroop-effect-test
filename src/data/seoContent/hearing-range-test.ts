import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How wide is the range of frequencies you can hear?",
    },
    {
      type: "paragraph",
      text: "Take this free **Hearing Range Test** to explore the lowest and highest tones you can detect. The test plays pure tones across the audible frequency range and lets you check **both ears together or your left and right ear separately**.",
    },
    {
      type: "paragraph",
      text: "Choose Quick mode for a faster sweep or Precise mode for smaller frequency steps.",
    },
    {
      type: "callout",
      icon: "🎧",
      title: "Important",
      tone: "gold",
      text: "Headphones are strongly recommended. Keep the volume at a comfortable level and never turn it up just to hear a frequency that has disappeared.",
    },
    {
      type: "paragraph",
      text: "This is an informal browser test, not a clinical hearing examination. Your headphones, speakers, device, volume setting, background noise, and browser audio can all affect the result.",
    },
    {
      type: "heading",
      id: "how-to-take",
      text: "How to Take the Hearing Range Test",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Put on a good pair of headphones.",
        "Sit in a quiet room.",
        "Set the volume to a comfortable level before the test begins.",
        "Choose Quick or Precise mode.",
        "Select Both, Left, or Right ear.",
        "Listen to each tone and answer whether you can hear it.",
        "Review your estimated lower and upper frequency limits.",
      ],
    },
    {
      type: "paragraph",
      text: "Do not increase the volume as the frequencies become harder to hear. If a tone disappears, that is your answer for the current setup.",
    },
    {
      type: "paragraph",
      text: "For a useful left-versus-right comparison, keep the same headphones, volume, and test mode for both ears.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is a Hearing Range?",
    },
    {
      type: "paragraph",
      text: "A hearing range describes the span of sound frequencies a person can detect.",
    },
    {
      type: "paragraph",
      text: "Frequency is measured in **hertz (Hz)**. One hertz means one sound-wave cycle per second.",
    },
    {
      type: "paragraph",
      text: "Lower frequencies are perceived as deeper pitches. Higher frequencies are perceived as higher pitches.",
    },
    {
      type: "paragraph",
      text: "The often-quoted human hearing range is approximately **20 Hz to 20,000 Hz (20 kHz)** for young people with healthy hearing. That does not mean every person can hear every tone from exactly 20 to exactly 20,000 Hz.",
    },
    {
      type: "paragraph",
      text: "Real hearing limits vary substantially.",
    },
    {
      type: "paragraph",
      text: "The upper end usually changes more noticeably with age, while your equipment can strongly affect both the very low and very high ends of an online test.",
    },
    {
      type: "heading",
      text: "What Does This Online Frequency Test Actually Measure?",
    },
    {
      type: "paragraph",
      text: "This test asks a simple question:",
    },
    {
      type: "paragraph",
      text: "**At the current playback level, through this device, can you detect this frequency?**",
    },
    {
      type: "paragraph",
      text: "That is useful for exploring frequency audibility, but it is different from a professional audiogram.",
    },
    {
      type: "paragraph",
      text: "Clinical pure-tone audiometry measures the **softest level you can hear at specific frequencies**, using calibrated equipment and controlled procedures. The result is plotted as hearing thresholds in decibels.",
    },
    {
      type: "paragraph",
      text: "This browser test does not know the exact sound pressure level reaching your eardrum. A computer volume setting of 40%, for example, does not correspond to one standardized hearing level across every laptop and pair of headphones.",
    },
    {
      type: "paragraph",
      text: "So your highest audible frequency is not the same thing as a clinical hearing threshold.",
    },
    {
      type: "heading",
      text: "Why High Frequencies Become Harder to Hear With Age",
    },
    {
      type: "paragraph",
      text: "High-frequency hearing commonly declines as people get older.",
    },
    {
      type: "paragraph",
      text: "This gradual age-related hearing loss is called **presbycusis**. According to the U.S. National Institute on Deafness and Other Communication Disorders, age-related hearing loss usually develops gradually and often affects both ears.",
    },
    {
      type: "paragraph",
      text: "One reason high-frequency tones attract so much attention online is that the upper limit can change long before someone notices that ordinary conversation sounds dramatically quieter.",
    },
    {
      type: "paragraph",
      text: "But you should not convert a maximum frequency into a precise “ear age.”",
    },
    {
      type: "paragraph",
      text: "Two people of the same age can have different high-frequency limits, and two people who hear the same maximum tone can have very different hearing thresholds at speech frequencies.",
    },
    {
      type: "paragraph",
      text: "Your headphones may also be the limiting factor.",
    },
    {
      type: "heading",
      text: "Why Your Headphones Matter So Much",
    },
    {
      type: "paragraph",
      text: "An online hearing range test measures your ears **and your playback system at the same time**.",
    },
    {
      type: "paragraph",
      text: "Headphones do not reproduce every frequency at exactly the same level. Some roll off at the extreme high end. Others have weak bass response. Laptop and phone speakers can be even more limited.",
    },
    {
      type: "paragraph",
      text: "At very high frequencies, output can also vary with the headphone design, fit, device, and audio system.",
    },
    {
      type: "paragraph",
      text: "This creates a simple problem:",
    },
    {
      type: "paragraph",
      text: "If you cannot hear a tone, the test cannot always tell whether the limit came from **your hearing or your equipment**.",
    },
    {
      type: "paragraph",
      text: "That is why quality headphones and repeated testing on the same setup give a more useful personal comparison.",
    },
    {
      type: "heading",
      text: "Why You Should Never Turn Up the Volume to Chase a Tone",
    },
    {
      type: "paragraph",
      text: "A high-frequency tone may become inaudible because your hearing is less sensitive there or because your headphones reproduce that frequency poorly.",
    },
    {
      type: "paragraph",
      text: "Turning the volume higher does not solve that uncertainty.",
    },
    {
      type: "paragraph",
      text: "It can also make other test tones unnecessarily loud.",
    },
    {
      type: "paragraph",
      text: "The National Institute on Deafness and Other Communication Disorders explains that sounds can damage hearing when they are too loud, particularly with sufficient exposure.",
    },
    {
      type: "paragraph",
      text: "For this test, start at a moderate, comfortable listening level and **leave the volume there**.",
    },
    {
      type: "paragraph",
      text: "If you cannot hear a tone, select that you cannot hear it. Do not keep increasing the volume until it becomes audible.",
    },
    {
      type: "heading",
      text: "Why Test the Left and Right Ear Separately?",
    },
    {
      type: "paragraph",
      text: "Your two ears do not always perform identically.",
    },
    {
      type: "paragraph",
      text: "Small differences can occur for many reasons, including headphone fit and normal variation. More meaningful differences can also occur with hearing changes that affect one ear more than the other.",
    },
    {
      type: "paragraph",
      text: "Testing Left and Right separately can therefore be more informative than testing both ears together.",
    },
    {
      type: "paragraph",
      text: "Make sure your stereo channels are positioned correctly before comparing them. If one side of the headphones fits differently or produces a different output level, that can create an apparent ear difference.",
    },
    {
      type: "paragraph",
      text: "If you notice a **new, sudden, or major change in hearing in one ear**, do not rely on repeated browser tests. Sudden hearing loss requires prompt medical evaluation.",
    },
    {
      type: "heading",
      text: "Can Loud Noise Reduce Your Hearing Range?",
    },
    {
      type: "paragraph",
      text: "Yes, harmful noise exposure can damage structures in the inner ear.",
    },
    {
      type: "paragraph",
      text: "Noise-induced hearing loss can result from very loud sounds or repeated exposure to loud sound over time. It may affect one or both ears and can be permanent.",
    },
    {
      type: "paragraph",
      text: "NIDCD notes that noise-related hearing changes are often seen at higher audiometric frequencies and can make some speech sounds harder to understand.",
    },
    {
      type: "paragraph",
      text: "Prevention matters because damaged human inner-ear hair cells do not simply grow back.",
    },
    {
      type: "paragraph",
      text: "Use hearing protection around hazardous noise and keep personal listening at sensible levels.",
    },
    {
      type: "heading",
      text: "Hearing Range Test vs. Pitch Discrimination Test",
    },
    {
      type: "paragraph",
      text: "These are different listening abilities.",
    },
    {
      type: "paragraph",
      text: "A Hearing Range Test asks whether you can **detect a tone at a particular frequency**.",
    },
    {
      type: "paragraph",
      text: "A [Pitch Discrimination Test](/test/pitch-discrimination-test) asks whether you can tell which of two audible tones is higher or lower.",
    },
    {
      type: "paragraph",
      text: "You might hear both tones clearly but struggle to distinguish a tiny pitch difference between them. Conversely, you could have good relative pitch discrimination within the frequencies you hear while having a lower upper-frequency limit.",
    },
    {
      type: "paragraph",
      text: "Do not use one test as a substitute for the other.",
    },
    {
      type: "heading",
      text: "Does This Test Detect Hearing Loss?",
    },
    {
      type: "paragraph",
      text: "No. It can show which frequencies you reported hearing under the current browser setup, but it cannot diagnose hearing loss.",
    },
    {
      type: "paragraph",
      text: "A professional hearing test uses calibrated equipment to measure hearing thresholds at specific frequencies and may include additional tests depending on your symptoms.",
    },
    {
      type: "paragraph",
      text: "Consider professional hearing testing if you:",
    },
    {
      type: "list",
      items: [
        "frequently ask people to repeat themselves;",
        "have trouble following conversation in noise;",
        "notice one ear seems significantly different;",
        "experience persistent tinnitus;",
        "need unusually high TV or phone volume;",
        "or are concerned about a change in hearing.",
      ],
    },
    {
      type: "paragraph",
      text: "A sudden hearing change—especially in one ear—is different from gradually noticing a narrower high-frequency range and should be assessed promptly.",
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
          question: "What is the normal human hearing range?",
          answer:
            "The commonly cited range is about 20 Hz to 20,000 Hz in young people with healthy hearing, but individual limits vary. Many adults cannot hear the very highest frequencies.",
        },
        {
          question: "Why can I hear a tone on one device but not another?",
          answer:
            "Different headphones and speakers reproduce frequencies differently. Device audio processing and output level also affect what reaches your ears.",
        },
        {
          question: "Should I use headphones?",
          answer:
            "Yes. Headphones provide better isolation from room noise and are necessary if you want to test the left and right channels separately.",
        },
        {
          question: "Can this test tell my hearing age?",
          answer:
            "Not reliably. Upper-frequency hearing tends to decline with age, but the overlap between individuals is too large—and hardware effects are too important—to convert one browser cutoff into a precise biological age.",
        },
        {
          question: "Is this the same as an audiogram?",
          answer:
            "No. An audiogram measures the softest sound level you can hear at selected frequencies using calibrated procedures. This test estimates frequency audibility at your current playback level.",
        },
      ],
    },
    {
      type: "heading",
      text: "Test Your Hearing Range Again",
    },
    {
      type: "paragraph",
      text: "For your most useful personal comparison, keep the setup consistent.",
    },
    {
      type: "paragraph",
      text: "Use the same headphones, leave the volume unchanged, test in a quiet room, and compare the left and right ears separately.",
    },
    {
      type: "paragraph",
      text: "Treat your result as an **exploration of frequency audibility**, not a medical verdict. If everyday hearing is becoming difficult or one ear suddenly changes, a professional hearing assessment tells you far more than an online maximum-frequency score.",
    },
  ],
};
