import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "Can you see the number hidden inside each field of colored dots?",
    },
    {
      type: "paragraph",
      text: "Take this free **online color blind test** to check for possible difficulty distinguishing red and green. The test uses pseudoisochromatic dot patterns inspired by the familiar Ishihara-style color vision test.",
    },
    {
      type: "paragraph",
      text: "Choose the number you see on each plate. If no number stands out, select “I don’t see a number.” For the most useful result, use the Full test and follow the screen setup instructions before you begin.",
    },
    {
      type: "callout",
      icon: "🩺",
      title: "Important",
      tone: "gold",
      text: "This is an informal browser-based screening, not a medical diagnosis. Screen colors vary between devices, and a professional eye examination is required to confirm color vision deficiency.",
    },
    {
      type: "heading",
      id: "before-you-start",
      text: "Before You Start the Color Blind Test",
    },
    {
      type: "paragraph",
      text: "Your display matters more on a color vision test than on most online tests.",
    },
    {
      type: "paragraph",
      text: "For a cleaner result:",
    },
    {
      type: "list",
      items: [
        "turn off Night Light, Night Shift, blue-light filters, and color-enhancement modes;",
        "disable any accessibility color filter that changes screen colors;",
        "use a bright, clear display without direct glare;",
        "keep the screen at a comfortable, consistent brightness;",
        "remove tinted or color-changing lenses;",
        "view the test from a normal reading distance;",
        "avoid taking the test on a damaged or heavily tinted screen.",
      ],
    },
    {
      type: "paragraph",
      text: "If the result seems unexpected, repeat the test on another good-quality display before drawing conclusions.",
    },
    {
      type: "heading",
      id: "how-it-works",
      text: "How the Online Color Blind Test Works",
    },
    {
      type: "paragraph",
      text: "Each test plate contains many colored dots. Some of those dots form a number while the rest create the background.",
    },
    {
      type: "paragraph",
      text: "The number is not meant to stand out because of a strong outline or a large brightness difference. Instead, it is mainly separated from the background by color.",
    },
    {
      type: "paragraph",
      text: "People with typical red-green color discrimination may see the hidden number quickly. Someone with a red-green color vision deficiency may have trouble separating the two groups of dots, see a different pattern, or see no clear number.",
    },
    {
      type: "paragraph",
      text: "Choose **Quick** for a short preview or **Full** for the more useful screening session.",
    },
    {
      type: "heading",
      id: "what-is",
      text: "What Is Color Blindness?",
    },
    {
      type: "paragraph",
      text: "“Color blindness” is the common name for **color vision deficiency**.",
    },
    {
      type: "paragraph",
      text: "Most people with color vision deficiency are not unable to see color. They usually see a wide range of colors but have difficulty distinguishing certain hues that look clearly different to someone with typical color vision.",
    },
    {
      type: "paragraph",
      text: "The most common inherited form affects **red-green color discrimination**.",
    },
    {
      type: "paragraph",
      text: "Color vision begins with cone cells in the retina. Different cone types respond most strongly to different parts of the visible spectrum. If one cone system is absent or its sensitivity is shifted, some colors become harder to distinguish.",
    },
    {
      type: "paragraph",
      text: "The [National Eye Institute](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness) reports that about **1 in 12 men** has some form of color vision deficiency. Inherited red-green deficiency is much more common in men because the genes involved are located on the X chromosome.",
    },
    {
      type: "heading",
      id: "types",
      text: "Types of Red-Green Color Vision Deficiency",
    },
    {
      type: "paragraph",
      text: "Red-green deficiency includes several related types.",
    },
    {
      type: "subheading",
      text: "Deuteranomaly",
    },
    {
      type: "paragraph",
      text: "Deuteranomaly is the most common form of red-green color vision deficiency. Green-sensitive cone responses are shifted, which can make some greens, reds, browns, and oranges harder to distinguish.",
    },
    {
      type: "subheading",
      text: "Deuteranopia",
    },
    {
      type: "paragraph",
      text: "Deuteranopia is a stronger green-related deficiency. Red and green combinations can become particularly difficult to separate.",
    },
    {
      type: "subheading",
      text: "Protanomaly",
    },
    {
      type: "paragraph",
      text: "Protanomaly affects the red-sensitive cone system. Reds may appear less vivid and can be confused with some greens or browns.",
    },
    {
      type: "subheading",
      text: "Protanopia",
    },
    {
      type: "paragraph",
      text: "Protanopia is a stronger red-related deficiency in which red-green discrimination is substantially altered.",
    },
    {
      type: "paragraph",
      text: "An informal browser test can indicate that **red-green color discrimination may be difficult**, but it should not automatically assign a precise subtype or severity unless the test has been specifically designed and validated to do so.",
    },
    {
      type: "heading",
      text: "What About Blue-Yellow Color Blindness?",
    },
    {
      type: "paragraph",
      text: "Blue-yellow color vision deficiency is different from the common inherited red-green forms.",
    },
    {
      type: "paragraph",
      text: "These conditions are often described as **tritan** deficiencies and are much less common. A traditional Ishihara-style red-green screening is not designed to rule them in or out.",
    },
    {
      type: "paragraph",
      text: "That means a good result on this page does **not** prove that every aspect of your color vision is typical.",
    },
    {
      type: "paragraph",
      text: "If you want to explore how well you distinguish neighboring shades rather than screen specifically for red-green deficiency, try the [Color Perception Test](/test/color-perception-test).",
    },
    {
      type: "heading",
      id: "results",
      text: "What Do My Color Blind Test Results Mean?",
    },
    {
      type: "paragraph",
      text: "The safest way to interpret an online result is as a **screening signal**, not a diagnosis.",
    },
    {
      type: "paragraph",
      text: "A result may fall into one of three practical categories:",
    },
    {
      type: "subheading",
      text: "No Obvious Red-Green Difficulty Detected",
    },
    {
      type: "paragraph",
      text: "You identified most of the screening plates under suitable viewing conditions.",
    },
    {
      type: "paragraph",
      text: "This does not guarantee normal color vision or rule out every type of color vision deficiency. It simply means the browser test did not detect an obvious red-green difficulty during this session.",
    },
    {
      type: "subheading",
      text: "Possible Red-Green Color Vision Difficulty",
    },
    {
      type: "paragraph",
      text: "You had repeated difficulty identifying plates designed to separate colors that can be confusing in red-green deficiency.",
    },
    {
      type: "paragraph",
      text: "Consider repeating the test with proper screen settings. If the pattern is consistent—especially if color identification causes problems in everyday life—an optometrist or ophthalmologist can perform standardized testing.",
    },
    {
      type: "subheading",
      text: "Inconclusive Result",
    },
    {
      type: "paragraph",
      text: "If you miss a control plate or the screen conditions appear unreliable, the test should not label you as color blind.",
    },
    {
      type: "paragraph",
      text: "Instead, correct the display setup and repeat the test.",
    },
    {
      type: "paragraph",
      text: "A failed control can occur because of screen settings, brightness, glare, eyesight, misunderstanding the instructions, or another problem unrelated to red-green color vision.",
    },
    {
      type: "heading",
      text: "Why Can Online Color Blind Tests Give Different Results?",
    },
    {
      type: "paragraph",
      text: "Two phones or monitors can display the same RGB values differently.",
    },
    {
      type: "paragraph",
      text: "Screen technology, brightness, white balance, viewing angle, color profile, accessibility settings, night modes, and ambient lighting can all alter how a plate looks.",
    },
    {
      type: "paragraph",
      text: "That is an important limitation of every browser-based color vision test.",
    },
    {
      type: "paragraph",
      text: "Printed clinical tests are produced and viewed under controlled conditions. An online test cannot fully reproduce those conditions on every device.",
    },
    {
      type: "paragraph",
      text: "For that reason, [online screening](https://pmc.ncbi.nlm.nih.gov/articles/PMC8158049/) is useful for awareness and curiosity but should not be presented as equivalent to a professionally administered color vision examination.",
    },
    {
      type: "heading",
      text: "Ishihara Test vs. Ishihara-Style Online Test",
    },
    {
      type: "paragraph",
      text: "The original Ishihara test is a standardized set of pseudoisochromatic plates developed to identify red-green color vision deficiencies.",
    },
    {
      type: "paragraph",
      text: "Online tests often imitate the same basic idea—numbers or paths hidden in fields of colored dots—but they are not automatically equivalent to the standardized printed test.",
    },
    {
      type: "paragraph",
      text: "This page uses **Ishihara-style or pseudoisochromatic screening patterns** generated for a browser environment.",
    },
    {
      type: "paragraph",
      text: "That wording matters. A browser tool should not claim the clinical accuracy of an original standardized test unless it has actually been validated under appropriate testing conditions.",
    },
    {
      type: "heading",
      text: "Can You Become Color Blind Later in Life?",
    },
    {
      type: "paragraph",
      text: "Yes.",
    },
    {
      type: "paragraph",
      text: "Many red-green color vision deficiencies are inherited and present from birth, but color vision can also change later.",
    },
    {
      type: "paragraph",
      text: "Eye disease, some health conditions, certain medicines, injury, and aging-related changes can affect color perception.",
    },
    {
      type: "paragraph",
      text: "A **new or noticeable change in color vision**, particularly if it seems different between your two eyes, deserves professional evaluation rather than repeated online testing.",
    },
    {
      type: "paragraph",
      text: "An eye doctor can determine whether the change is related to color vision itself or another issue affecting the eye or visual system.",
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
          question: "Is this an Ishihara test?",
          answer:
            "It is an Ishihara-style online screening using pseudoisochromatic dot patterns. It is not the same as a standardized printed Ishihara test administered under controlled professional conditions.",
        },
        {
          question: "What is the most common type of color blindness?",
          answer:
            "Red-green color vision deficiency is the most common group. Deuteranomaly is generally considered the most common individual type.",
        },
        {
          question: "Can women be color blind?",
          answer:
            "Yes. Inherited red-green deficiency is much less common in women because of the way the relevant genes are inherited, but women can have color vision deficiency.",
        },
        {
          question: "Should I take the Quick or Full test?",
          answer:
            "Use Quick mode when you simply want to try the test. Use Full mode when you want the more useful screening result because more plates reduce the influence of one unusual answer.",
        },
        {
          question: "Can a phone screen affect my result?",
          answer:
            "Yes. Display color, brightness, night filters, accessibility filters, and viewing conditions can change how online color plates appear.",
        },
        {
          question: "Does passing this test mean my color vision is normal?",
          answer:
            "Not necessarily. This test mainly screens for obvious red-green difficulty. It cannot rule out every color vision condition or replace standardized professional testing.",
        },
        {
          question: "Can this test tell me whether I have protanopia or deuteranopia?",
          answer:
            "Not reliably unless the test contains validated subtype-specific stimuli and scoring. A general pseudoisochromatic browser screening should avoid assigning a precise subtype based only on a few generated plates.",
        },
        {
          question: "What should I do if I fail several plates?",
          answer:
            "Check your display settings and repeat the Full test. If you consistently have difficulty or have noticed real-world color problems, consider a professional color vision examination.",
        },
      ],
    },
    {
      type: "heading",
      text: "Take the Full Color Vision Screening",
    },
    {
      type: "paragraph",
      text: "For the most useful result, use the **Full test**, keep your display settings neutral, and answer from your first clear impression rather than staring at each plate for a long time.",
    },
    {
      type: "paragraph",
      text: "Remember what the result can—and cannot—tell you.",
    },
    {
      type: "paragraph",
      text: "An online color blind test can reveal a pattern worth exploring. It cannot provide a definitive diagnosis from an uncalibrated screen.",
    },
  ],
};
