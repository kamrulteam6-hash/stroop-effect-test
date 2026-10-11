# Additional test scenes

Generated with the built-in image generation tool. Optimized to 1400px WebP, quality 85. Redesign scope: test screens; questions, timing, metadata and page content retained. Follow-up QA also fixed a pre-existing duplicate scoring update in Mental Math without changing its intended scoring formula.

## Verification

- TypeScript and targeted ESLint checks pass.
- Browser: all ten start and gameplay screens inspected. Iowa 40 draws, math timed completion, reflection seven questions, rhythm timed completion, astigmatism 12-line flow, semantic timed completion, and Wisconsin 30 rounds reached results.
- Halo introduction and five trait controls checked; visual memory and color memory each advanced to level two with correct input.
- Mobile viewport: 6×6 memory grid, halo ratings and Iowa decks checked. Viewport reset afterward.
- Timing scores are automated smoke-test outputs, not performance benchmarks. Audio playback quality was not assessed.
- Astigmatism chart geometry and stimulus colors remain unchanged; optical and lexical gameplay use a quiet background and solid white task panel.

### Follow-up mobile QA

All ten tests were exercised at a 320×740 browser viewport. Start, input, result and retry paths were checked; control bounds stayed within the test scene. Halo completed all four people; Iowa all 40 draws; Wisconsin all 30 rounds; reflection all seven questions; astigmatism both the equal-lines result and full 12-line profile. Both memory games advanced on a correct response and reached results on mistakes. Rhythm registered pointer input; semantic priming registered both answer buttons. Timed tests reached their result screens.

Two findings were fixed and retested:
- Mental Math called score updates inside the streak state updater, causing double increments under React development Strict Mode. Updates now remain separate and pure. Five correct answers scored six points including the streak bonus; a wrong answer reset the streak; the next correct answer brought the score to seven. Final stats matched six correct, one wrong, best streak five.
- Semantic Priming's three narrow result cards crowded millisecond values at 320px. Below 420px, stats now use separate horizontal rows; verified in the completed result.

Evidence: `output/mobile-checks.json` and `output/mobile-semantic-result-fixed.jpg`. Browser console reported no errors at the end of this run. Viewport override was reset. This was desktop-browser viewport simulation, not physical Android/iPhone touch, software-keyboard or audio-latency testing.


## decision

Asset: public/images/games/decision.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A luxurious playful teal and amber tabletop decision laboratory, rounded wooden table rim, decorative identical face-down cards and glass counters at extreme corners, soft green felt middle. No casino branding, no money, no winning cues. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## impressions

Asset: public/images/games/impressions.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A whimsical coral and lilac first-impressions gallery, rounded arches, empty oval frames and soft sculptural pedestals at extreme outer edges. No people, faces or portraits, no attractiveness cues. Cream middle. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## math

Asset: public/images/games/math.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A joyful turquoise and orange mathematical invention workshop, chunky abacus beads, blank calculator keys, wooden counting cubes at extreme corners, sunlit pale mint middle. No equations or numbers. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## tiles

Asset: public/images/games/tiles.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A magical teal and violet memory-tile observatory, tactile crystalline square tiles tucked at extreme edges, soft blue architectural arches, pale misty mint middle. No central grid or pattern. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## rhythm

Asset: public/images/games/rhythm.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A vibrant coral, violet and amber recording stage, stylized drum shells, cymbal edges and acoustic panels framing extreme corners, warm pale lavender middle, celebratory studio lighting. No notes or timing indicators. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## reflection

Asset: public/images/games/reflection.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A warm indigo and amber puzzle library, sculptural maze ornaments, stacked blank books, soft lanterns at extreme corners, thoughtful cozy atmosphere, pale parchment middle. No people, animals, flowers, equations or question-specific objects. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## optics

Asset: public/images/games/optics.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. An elegant playful turquoise optical studio, rounded glass lenses and smooth curved frames at extreme corners, soft aqua ambient light, very calm white middle. No eyes, charts, rays, lines, optical illusions or patterns in center. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## words

Asset: public/images/games/words.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A colorful lavender and teal abstract language laboratory, rounded blank filing drawers, blank floating paper tabs and soft archways at extreme edges. Entire center empty warm ivory. No letters, words, pictures of recognizable animals or household objects. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## colors

Asset: public/images/games/colors.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A premium playful four-color memory arcade, chunky glossy red green blue yellow console trim and rounded speaker housing at extreme corners, cream lavender quiet middle. No central buttons or flashing lights. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.

## sorting

Asset: public/images/games/sorting.webp

Prompt:
Use case: stylized-concept. Asset type: actual landscape background for a premium colorful 3D casual brain-training browser game. A delightful turquoise and apricot geometric sorting workshop, softly sculpted geometric solids and blank card stacks at extreme corners, rounded wooden toy architecture, pale ivory middle. No example matches, rules or central card layout. Composition: center 65 percent must be empty pale softly lit space for a large opaque game panel; keep all detailed props at extreme edges. Polished tactile rounded forms, rich saturated edge colors, cinematic soft lighting, beautifully crafted high-quality 3D game art, front-facing landscape 1536x1024. No interface, text, lettering, numbers, logos, watermark.
