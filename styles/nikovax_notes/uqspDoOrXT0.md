# Smooth Zoom Transition (uqspDoOrXT0, 375 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: not applicable (anime music + captions, not dialogue).
Plugins: none required for core zoom effect (nulls + Scale). Optional twitch effect shown at end.
Project: 1920x1080, 29.97 fps. Single composition "smooth zoom transition" with multiple precomposed clips.

## Core idea
Multiple clip layers use paired null objects (parent + child nulls) to create a smooth zoom-in transition. Child nulls are positioned at focal points on the face/character. Scale keyframes on the nulls create the zoom animation, with value graphs eased for a punchy settle-in effect.

## Effect chain / properties
- **Pre-compose**: Clips are precomposed (right-click -> Pre-compose, "Leave all attributes" option selected).
- **Scale keyframes** on null objects at specific times with F9 (Easy Ease) applied.
- **Anchor Point adjustments** on child nulls using Y key (Pan Behind tool) to position focal point on face/eyes.
- Value graphs modified by hand: first keyframe handles pulled vertical for instant drops, last keyframe handles pulled for ease-in snaps.
- Optional **Twitch effect** applied for added impact (values not clearly visible in tutorial).

## Step-by-step as captioned
1. "PRE-COMPOSE IT (WITH THESE SETTINGS)" - Right-click clip, Pre-compose, select "Leave all attributes in smooth zoom transition".
2. "CREATE NULL (CTRL+ALT+Y)" - Create null object(s) for each clip sequence.
3. "SELECT THE FIRST NULL, PRESS (Y) AND MOVE THE ANCHOR POINT TO THE RIGHT" - Use Pan Behind tool to reposition anchor point off-center (to a focal point on the character).
4. Set Scale keyframes: first keyframe at ~100-200% (depends on clip), final keyframe higher (300-600% range unreadable approx).
5. "OPEN UP THE VALUE GRAPH" - Switch to value graph view for Scale property.
6. Drag keyframe handles to create ease shapes: first key handle pulled straight down for instant vertical drop (ease-out), last key handle pulled for late snap-in (ease-in).
7. "AND SET BACK THE LAST ONE TO (100)" - Return a scale value to 100% at a specific point.
8. Duplicate process for additional clips/nulls in the composition.
9. "ADDING TWITCH" - Optional effect applied for impact; values unreadable.
10. Final render/playback showing smooth zoom settling on character face.

## Numeric values
| Layer | Property | Value(s) | Time | Notes |
|---|---|---|---|---|
| Null (child) | Scale | 100 → 300-600 (unreadable approx) | 0 s → end, F9 | Handle vertical at first key (ease-out) |
| Null (parent) | Scale | 100 → ? (unreadable) | varies | Handle vertical at last key (ease-in) |
| Null (child) | Anchor Point | moved right (unreadable exact coords) | static | Pan Behind tool (Y) |
| Null | Scale | 100 (reset value) | middle frame | Caption-specified endpoint |
| Twitch effect | unreadable (unreadable) | unreadable | end of clip | Optional, values not shown |

## Layer structure (final)
Order visible in timeline:
1. Multiple null objects (labeled Null 1, Null 2, Null 3, ... Null 12, with parents/children linked)
2. Precomposed clip layers (Clip 2 Comp 1, etc.)
3. Each clip has Scale property with keyframes
4. Optional Twitch layer/effect at end

Exact parenting structure: unreadable (approx: each clip -> child null -> parent null chain).

## Rebuild recipe (from scratch)
1. Precompose each clip: Right-click -> Pre-compose, choose "Leave all attributes in [comp name]" option.
2. Create null objects: Ctrl+Alt+Shift+Y per clip or transition point.
3. Position anchor points: Press Y (Pan Behind tool), drag the anchor point to the face or focal point you want to zoom into.
4. Set Scale keyframes: 
   - At clip start: ~100% 
   - At clip end: higher value (approx 300-600%, exact value unreadable)
5. Apply Easy Ease: Select keyframes, press F9.
6. Modify value graph: Open up the Value Graph view and drag the first key's out-handle straight down (instant drop). Drag the last key's in-handle for a late snap-in effect.
7. Link layers: Parent clips to child nulls, child nulls to parent nulls.
8. Optional: Add Twitch or other impact effects on top for stylistic variation.
9. Render and review.

