# Pixel Sorter (njufFCflWlM, 140 s)

Voiced: no voiceover (music only). Whisper result: see bottom.
Plugins: **AE Pixel Sorter** (third-party plugin, not native; must be installed separately).
Project: 1920x1080, 29.97 fps. Single shot (anime character) with glitch effect.

## Core idea
Apply the AE Pixel Sorter plugin to an adjustment layer to create a data-moshing / glitch effect that sorts pixels vertically. Animate the sorting intensity over the clip duration: start with high sorting (heavy glitch effect visible) and ease down to zero sorting (clean image). The result shows a "glitch fade-in" where the image cleanly materializes from chaotic pixel sorting.

## Effect chain / properties
- **AE Pixel Sorter** (on Adjustment Layer): Third-party plugin that sorts pixels based on luminosity or color thresholds.
  - Sorting: **unreadable (approx 300+ at start, 0 at end)**
  - Threshold: **~240**
  - Mode: **unreadable (likely "Highlighter" or similar)**
  - Orientation: **Column** (vertical sorting visible; pixels sort downward)
  - Comparator: **Average** (or similar; determines sort comparison method)
  - Color: **unreadable**
  - Keyframes: Yes (animation from high to low intensity over clip duration)
  - Easing: F9 easy-ease applied

## Step-by-step as captioned
SETUP (0:00-0:20)
- Create or select adjustment layer.
- Caption implies: "ADD PIXEL SORTER TO THE ADJUSTMENT LAYER".

EFFECT APPLICATION (0:20-0:40)
- AE Pixel Sorter effect added to adjustment layer.
- Default settings visible show strong pixel sorting effect (many vertical streaks visible in character).
- Viewport shows anime character with heavy glitch/moshing effect (vertical pixel lines especially visible on bright areas like white clothing and light areas).

KEYFRAME SETUP (0:40-1:00)
- Caption: "PRESS (U) TO REVEAL THE KEYFRAMES" - U shortcut to show all modified properties' keyframes in timeline.
- Set first keyframe at clip start (~0 s): Sorting parameter at high value (**unreadable, approx 300-400** based on graph).
- Set second keyframe at clip end (~2:19 s): Sorting parameter at **0** (or very low).

EASING APPLICATION (1:00-1:20)
- Caption: "INCREASE IT FOR THE LAST KEYFRAME" - Imply that the last keyframe value might be set to a specific target.
- Caption: "SELECT THE KEYFRAMES AND PRESS (F9) TO EASY EASE THEM" - Apply F9 easy-ease to both keyframes.

VALUE GRAPH & EASING (1:20-1:40)
- Value Graph shown: curve starts at high value (left, ~300+) and descends to ~0 (right, end of clip).
- Curve is smooth, eased (not linear). Graph gridlines show 0, 100, 200, 300+ progression.
- Two keyframe handles visible; curve appears to be a gentle ease-out (steeper at start, flattens toward end).

RESULT PLAYBACK (1:40-2:00)
- Final result shown: image starts heavily pixelated/glitched with vertical sorting visible, gradually clears to clean image by end of clip.

## Numeric values
| Property | Value | Time | Notes |
|---|---|---|---|
| AE Pixel Sorter (Sorting) | **unreadable (approx 300-400)** | 0 s (first keyframe) | High sorting intensity; heavy glitch visible |
| AE Pixel Sorter (Sorting) | 0 | ~2:19 s (last keyframe) | No sorting; clean image |
| AE Pixel Sorter (Sorting) Easing | F9 easy-ease (smooth curve) | Both keys | Ease-out shape visible in Value Graph |
| Threshold | **~240** | Static | Determines which pixels are sorted (brightness threshold) |
| Mode | **unreadable** | Static | Likely "Highlighter" or "Average" |
| Orientation | **Column** | Static | Vertical pixel sorting (top-to-bottom) |
| Comparator | **Average** | Static | Likely comparison method (unreadable) |

## Layer structure (final)
- [Adjustment Layer 4] with AE Pixel Sorter effect applied
- [clip.avi] (source footage)

Adjustment layer ensures effect applies to entire composition without permanently altering source footage.

## Rebuild recipe (from scratch)
1. Bring in clip with character (in this case, anime character shot).
2. Create an Adjustment Layer above the clip (Layer > New > Adjustment Layer) or set the effect to apply to the clip layer directly.
3. On the adjustment layer, add AE Pixel Sorter effect: Effects > Stylize > Pixel Sorter (or Effects > (other) depending on plugin location/organization).
   - Note: AE Pixel Sorter is a third-party plugin and must be installed separately; it does not ship with After Effects.
4. Set initial Pixel Sorter properties:
   - Threshold: ~240 (tune to desired effect strength; higher = more sorting)
   - Orientation: Column (vertical sorting)
   - Mode: Highlighter or Average (visual feedback; adjust to taste)
   - Comparator: Average (or desired comparison method)
5. Set keyframes on the Sorting parameter:
   - Keyframe 1 at 0 s: Sorting value **~300-400** (high glitch intensity; exact value unreadable)
   - Keyframe 2 at ~2:19 s (end of clip): Sorting value **0** (clean image)
6. Select both keyframes (U key to reveal keyframes; drag-select in timeline).
7. Apply F9 easy-ease to both keyframes.
8. Play through to preview: should show glitchy image at start, smoothly clearing to clean image by end.
9. Adjust Sorting start value and Threshold to fine-tune effect intensity.

---

## Transcription note
No audio transcript (music only, no voiceover). All steps derived from on-screen captions and visual instruction. Exact Sorting keyframe value unreadable from effect controls panel; estimated from Value Graph range. AE Pixel Sorter is a third-party plugin that must be obtained and installed separately (not native to After Effects).
