# Design QA

- Source visual truth: `reference-handshake.png`, `reference-attitude.png`
- Implementation screenshots: `implementation-v15-full.png`, `implementation-v15-icons.png`
- Viewport: 1440 × 900 CSS px, device scale factor 1
- Source pixels: 3000 × 3607 and 512 × 512
- Implementation pixels: 1440 × 900 full view; 252 × 378 focused icon picker
- Normalization: the supplied silhouettes were isolated from their original alpha/color data, cropped to visible bounds, aspect-fit without distortion, and exported to 128 × 128 transparent assets before being rendered in the 24 px circular category slot.
- State: dark canvas, one note selected, category/icon picker open.

## Full-view comparison evidence

The icon picker remains inside the existing Discord-dark canvas system. Its density, labels, note colors, and interaction placement are unchanged except for the two requested source-derived icons. No layout shift, clipping, or toolbar overlap appeared at the 1440 × 900 viewport.

## Focused-region comparison evidence

The 협동 icon uses the supplied handshake silhouette, including the interlocking hands and separated cuff shapes. The 태도 icon uses the supplied transparent black silhouette. Both are rendered as monochrome dark cutouts inside the note-colored solid circle, preserving the established icon treatment. The focused picker capture confirms both assets fit the same optical slot as the other category icons without stretching or emoji rendering.

## Findings

- No actionable P0, P1, or P2 mismatch remains.
- Typography: category labels retain the existing sans-serif family, weight, line height, and wrapping.
- Spacing/layout: both source-derived assets are centered in the same fixed icon circle and preserve the picker rhythm.
- Colors/tokens: the icon circle continues to use the note color; the silhouette uses the dark canvas foreground for the requested cutout effect.
- Image quality: transparent 128 × 128 assets remain sharp at the 17–21 px rendered sizes, with source aspect ratio preserved and no white background rectangle.
- Copy/content: 협동 and 태도 labels remain unchanged and correspond to the supplied references.

## Comparison history

- Initial processing risk: the first handshake conversion fit the full source into a square and could have compressed its proportions.
- Fix: regenerated both assets with aspect-preserving fit, visible-bound cropping, and centered transparent output.
- Post-fix evidence: `implementation-v15-icons.png`; automated browser checks confirm both expected image assets load in their respective category controls.

## Interaction checks

- Right-click note → link mode → second note click: passed.
- Right-click note → link mode → school-record text drag: passed.
- Text-color and highlighter chevron palettes: passed.
- Two-finger/trackpad wheel pan and Ctrl/Command wheel zoom separation: passed.
- Off-screen note source line hidden while note-to-note edge remains: passed.
- Browser console errors: none.

## Follow-up polish

- None required for this scoped change.

final result: passed
