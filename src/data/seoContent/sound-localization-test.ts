import { TestSeoContent } from "@/data/seoContent/types";

export const content: TestSeoContent = {
  blocks: [
    {
      type: "paragraph",
      text: "How small a difference between your two ears is enough to make a sound seem left or right of center? Take this free **Sound Localization Test** using stereo headphones. The browser creates controlled differences between the signals reaching the left and right channels, and you identify where the sound appears to be located — left, center, or right.",
    },
    {
      type: "paragraph",
      text: "This online version primarily measures binaural lateralization using interaural timing and level cues. It does **not** reproduce a calibrated three-dimensional room or provide a clinical test of real-world spatial hearing.",
    },
    {
      type: "callout",
      icon: "🎧",
      title: "Before You Start",
      tone: "primary",
      text: "Use stereo headphones or earbuds. Do not use phone speakers, laptop speakers, a single earbud, or mono audio. Set the volume to a comfortable level before starting — the test does not require loud sound. If one earphone is much louder than the other, the result will be distorted.",
    },
    { type: "heading", text: "Headphone Check" },
    {
      type: "paragraph",
      text: "Before the scored test, the page runs a simple channel check: play LEFT, then RIGHT, and confirm each sound is heard in the correct ear. Then identical signals play to both ears, which should usually sound approximately centered. If it is strongly off-center, possible causes include headphone imbalance, earbud fit, audio settings, or hearing asymmetry. The website allows the user to continue for demonstration but flags that the score may not be comparable.",
    },
    { type: "heading", text: "What Is Sound Localization?" },
    {
      type: "paragraph",
      text: "Sound localization is the ability to estimate where a sound source is located. In everyday life, listeners can judge dimensions such as left vs. right, front vs. back, elevation, and distance. The auditory system does this by combining several acoustic cues created by the spacing between the ears, the head, the outer ears, the torso, and the room. A simple headphone browser test can reproduce some cues accurately, but it cannot reproduce all of them equally well.",
    },
    { type: "heading", text: "Sound Localization vs. Lateralization" },
    {
      type: "paragraph",
      text: "This distinction is important. Localization is judging the position of a sound source in external space — \"the bird is about 30 degrees to my left.\" Lateralization is judging where a headphone-delivered sound appears along an internal left-right auditory axis — \"the tone sounds left of center.\" Basic ITD and ILD headphone tests often produce lateralization rather than a convincing external sound source, so the scientifically accurate description is a headphone-based left/right sound lateralization and localization-cue test.",
    },
    { type: "heading", text: "Interaural Time Difference" },
    {
      type: "paragraph",
      text: "Interaural Time Difference (ITD) is the difference in arrival time of a sound at the two ears. A sound physically located on the left usually reaches the left ear slightly before the right ear, and the difference is extremely small, often measured in microseconds. The auditory system can use these timing differences to estimate horizontal direction. In a headphone test, the browser can delay one channel relative to the other — if the right channel arrives slightly later than the left, the sound may shift perceptually toward the left.",
    },
    { type: "heading", text: "Interaural Level Difference" },
    {
      type: "paragraph",
      text: "Interaural Level Difference (ILD) is the difference in sound level between the ears. For a source on the left, the left ear may receive a stronger signal because the head partially shadows the sound reaching the right ear. The effect is especially useful at higher frequencies where the head produces a stronger acoustic shadow. A headphone test can simulate ILD by presenting one channel at a slightly higher amplitude than the other, and the sound should then shift toward the louder ear.",
    },
    { type: "heading", text: "ITD and ILD Work Together" },
    {
      type: "paragraph",
      text: "Real horizontal localization is not based on only one cue. Human listeners combine ITD, ILD, spectral information, and context. A 2022 human study measuring sensitivity to ITD and ILD used headphone lateralization tasks and confirmed their importance as major binaural cues for horizontal spatial hearing, and other experimental work shows that the auditory system can combine timing and level information rather than processing every cue in isolation. For a browser tool, it is useful to test ITD and ILD separately first and then combine them.",
    },
    { type: "heading", text: "The Duplex Theory" },
    {
      type: "paragraph",
      text: "A classic framework called the duplex theory proposes that low-frequency horizontal localization relies strongly on interaural timing, while high-frequency localization relies strongly on interaural level differences. The basic distinction remains useful, but real binaural hearing is more nuanced — modern research shows cue use depends on frequency, stimulus bandwidth, phase, room acoustics, and listener characteristics. Do not present the duplex theory as a perfect two-rule map of all spatial hearing.",
    },
    { type: "heading", text: "ITD Mode and ILD Mode" },
    {
      type: "paragraph",
      text: "In ITD Mode, both ears receive approximately the same level and only relative timing changes — for example, the left channel starts now and the right channel starts a fraction of a millisecond later, and the user responds Left, Center, or Right. The test can adaptively reduce the timing difference after correct answers to estimate the smallest ITD that produces reliable lateralization. In ILD Mode, timing remains matched and only level changes, with the interface never revealing which side was altered; an adaptive staircase can reduce the level difference until judgments become unreliable.",
    },
    { type: "heading", text: "Why an Adaptive Staircase Is Better" },
    {
      type: "paragraph",
      text: "A fixed set of huge left/right differences is easy and does not reveal sensitivity. An adaptive procedure begins with an obvious cue, reduces cue magnitude after correct responses, increases it after errors, and converges around a threshold region — common psychophysical logic. The result can estimate an ITD discrimination threshold and an ILD discrimination threshold for the exact stimuli used. Do not compare these directly with clinical norms unless the procedure is genuinely equivalent.",
    },
    { type: "heading", text: "Frequency and Broadband Noise" },
    {
      type: "paragraph",
      text: "A timing difference that is useful for one tone frequency may behave differently at another, and ILD cues become more prominent when wavelength is short enough for the head to cast a stronger acoustic shadow. A strong online test can use a low-frequency block designed to emphasize timing sensitivity and a higher-frequency block designed to emphasize level sensitivity. Pure tones can create ambiguity, since at some frequencies repeated wave cycles make phase relationships difficult to interpret uniquely — broadband noise provides rich timing information and usually creates a clearer left/right auditory image. For a general public test, short filtered-noise bursts are often easier to localize than pure tones, with pure tones available as an advanced mode.",
    },
    { type: "heading", text: "Front-Back and Elevation Are Harder" },
    {
      type: "paragraph",
      text: "Horizontal left/right localization is only part of spatial hearing. To distinguish front from back or above from below, listeners rely heavily on frequency-dependent spectral filtering produced by the outer ear and body, described by the Head-Related Transfer Function (HRTF). Because ear shape differs between people, individualized HRTFs can improve spatial realism, and a generic browser cannot know each user's HRTF automatically — therefore front/back and elevation are not part of the primary score.",
    },
    { type: "heading", text: "What Should the Result Show?" },
    {
      type: "paragraph",
      text: "A useful browser result can include ITD accuracy (percent correct for timing-based left/right trials), ITD threshold (smallest timing difference producing reliable performance), ILD accuracy (percent correct for level-based trials), ILD threshold (smallest level difference producing reliable lateralization), center accuracy (ability to identify balanced binaural signals), and side bias (whether uncertain judgments favored one side). These are more informative than one \"spatial hearing score.\"",
    },
    { type: "heading", text: "What Is a Good Sound Localization Score?" },
    {
      type: "paragraph",
      text: "There is no universal browser cutoff. Performance depends on headphones, frequency, stimulus bandwidth, cue duration, adaptive rule, audio interface, device, and background noise. Do not publish clinical labels from an uncalibrated browser implementation — your own repeated score with the same headphones is a safer comparison.",
    },
    { type: "heading", text: "Can This Test Diagnose Hearing Loss?" },
    {
      type: "paragraph",
      text: "No. A browser lateralization task cannot diagnose unilateral hearing loss, auditory processing disorder, vestibular disease, neurological conditions, or ear pathology. Unexpected asymmetry may come from hardware or fit. If someone has real-world difficulty locating sounds, that requires appropriate professional hearing assessment rather than an online score.",
    },
    { type: "heading", id: "faq", text: "Frequently Asked Questions" },
    {
      type: "faq",
      items: [
        { question: "What does sound localization mean?", answer: "Estimating where a sound source is located in space." },
        { question: "Why does this test require headphones?", answer: "Headphones provide much better separation of the left and right audio channels than speakers." },
        { question: "What is ITD?", answer: "Interaural Time Difference: the tiny difference in arrival time between the ears." },
        { question: "What is ILD?", answer: "Interaural Level Difference: the difference in sound level reaching each ear." },
        { question: "Can a browser simulate sounds above or behind me accurately?", answer: "Not reliably for every user. Elevation and front/back localization depend strongly on individualized HRTF spectral cues." },
        { question: "Why does a centered sound sometimes seem slightly off-center?", answer: "Headphone fit, channel imbalance, hearing asymmetry, and stimulus characteristics can all contribute." },
        { question: "Is this a hearing diagnosis?", answer: "No. It is an online binaural lateralization experiment." },
      ],
    },
    {
      type: "paragraph",
      text: "A sound on the left does not reach both ears identically — one ear may receive it slightly earlier and slightly stronger. Those tiny differences are enough for the auditory system to build a horizontal spatial percept. A stereo headphone test can isolate those cues and reveal how little timing or level difference is needed before \"center\" begins to shift toward one side.",
    },
  ],
};
