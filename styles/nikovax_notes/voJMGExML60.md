# Fake Zoom Transition (voJMGExML60, 173 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: see bottom.
Plugins: Motion Tile (native AE). No third-party plugins required.
Project: 1920x1080, 29.97 fps. Single clip (anime character), shown in a nested composition.

## Core idea
Two nulls parented in a chain (clip -> child null -> parent null). The child null does a fast zoom-OUT from a high scale down to 100, while the parent null does a slower zoom-IN from 100 back up to a high scale; both animations run simultaneously. The combined effect creates a punchy "zoom out then settle" transition. Nulls are eased by hand using value graphs.

## Effect chain / properties
- **Null layer (child)**: Scale keyframe animation from high value to 100%, with steep ease-out curve (immediate drop).
- **Null layer (parent)**: Scale keyframe animation from 100% to high value, with ease-in curve (late snap).
- **Motion Tile** effect on clip (revealed later in tutorial): Tile Center 960, 540; Tile Width 100; Tile Height 100; **Output Width unreadable (approx 500)**; **Output Height unreadable (approx 500)**; **Mirror Edges checked**.

## Step-by-step as captioned
SETUP (0:15-0:30)
- 0:15 "STEP 1: Get your clip ready" - Implies pre-compose the clip or prepare layer.
- 0:20 "RIGHT CLICK ON THE CLIP" - Context menu shown with options (Mask, Pre-compose, etc.).

PARENTING & NULLS (0:30-1:00)
- 0:40-0:50 Create Null objects (method unspecified in captions; visible "Ctrl+Alt+Shift+Y" implied by pattern).
- 0:50 "PARENT LINK THE CLIP WITH THE NULLS" - Establish parenting chain: clip -> child null -> parent null.

FIRST NULL KEYFRAMES (1:00-1:20)
- 1:02 "SELECT THE FIRST NULL, PRESS (S) AND SCALE IT UP" - Select child null, open Scale property.
- 1:05-1:15 Set Scale keyframe at clip start to high value (unreadable, approx 450-550), then keyframe at end to 100.
- 1:15 "MOVE TOWARDS THE MIDDLE AND SET THE VALUE BACK TO (100)" - Confirm end keyframe at 100.
- 1:18 "SELECT THE KEYFRAMES AND PRESS (F9) TO EASY EASE THEM" - Apply easy-ease; F9 opens Value Graph.
- 1:20-1:30 "AND MAKE A SIMILAR GRAPH" - Value Graph shown: curve drops steeply from high value to 100 (ease-out shape); first keyframe handle pulled down vertically for instant drop-off.

SECOND NULL KEYFRAMES (1:30-2:00)
- 1:32 "PRESS (S) ON THE 2ND NULL" - Select parent null, open Scale property.
- 1:35-1:50 Set Scale keyframes: start at 100, end at high value (unreadable, approx 150-160).
- 1:50-2:00 "SELECT THE KEYFRAMES AND PRESS (F9)" - Apply easy-ease.
- 2:00 "AND MAKE A SIMILAR GRAPH" - Value Graph shown: curve rises from 100 on left to peak on right (ease-in shape); last keyframe handle pulled down for late acceleration.

MOTION TILE EFFECT (2:20-2:50)
- Effect Controls panel visible showing:
  - Tile Center: 960.0, 540.0
  - Tile Width: 100.0
  - Tile Height: 100.0
  - Output Width: **unreadable (approx 500)**
  - Output Height: 500.0
  - Mirror Edges: checked
  - Phase: 0 x +0.0°

RESULT PLAYBACK (2:50-2:52)
- Final zoom transition shown: clip scales up then down in a smooth punchy motion.

## Numeric values
| Layer | Property | Value | Time/Frame | Notes |
|---|---|---|---|---|
| Null (child) | Scale key 1 | **unreadable (approx 450-550)** | 0 s | Start keyframe, high zoom-out |
| Null (child) | Scale key 2 | 100 | ~1.7 s | End keyframe, settled |
| Null (child) | Easing | F9 easy-ease; first handle vertical | Both keys | Creates steep drop-off |
| Null (parent) | Scale key 1 | 100 | 0 s | Start keyframe, settled |
| Null (parent) | Scale key 2 | **unreadable (approx 150-160)** | ~1.7 s | End keyframe, zoomed in |
| Null (parent) | Easing | F9 easy-ease; last handle vertical | Both keys | Creates late snap-in |
| Motion Tile | Tile Center | 960.0, 540.0 | Static | Center of composition (1920x1080) |
| Motion Tile | Tile Width | 100.0 | Static | Percentage |
| Motion Tile | Tile Height | 100.0 | Static | Percentage |
| Motion Tile | Output Width | **unreadable (approx 500)** | Static | Screen coordinate or percentage |
| Motion Tile | Output Height | 500.0 | Static | Screen coordinate or percentage |
| Motion Tile | Mirror Edges | ON | Static | Creates mirrored tile effect instead of black edge |

Unreadable values: exact Scale keyframe values for both nulls, exact Output Width for Motion Tile.

## Layer structure (final)
Implied structure from tutorial flow:
1. [Null] parent (Scale 100 -> high)
2. [Null] child, parent = 1 (Scale high -> 100)
3. [clip] parent = 2, fx Motion Tile applied

## Rebuild recipe (from scratch)
1. Prepare clip: pre-compose or ensure it's in its own layer.
2. Create two Null objects (Ctrl+Alt+Shift+Y).
3. Parent chain: Pick-whip clip -> Null 2 (child), Null 2 -> Null 1 (parent).
4. Child Null (Null 2): Press S; set Scale keyframe at 0 f to ~500 (high zoom-out), keyframe at end of clip to 100. F9 easy-ease. Value Graph: drag first key's handle straight down for steep drop.
5. Parent Null (Null 1): Press S; set Scale keyframe at 0 f to 100, keyframe at end to ~150-160 (high zoom-in). F9 easy-ease. Value Graph: drag last key's handle down for late snap-in.
6. On the clip layer: Add Motion Tile effect (Effects > Distort > Motion Tile); set Tile Center 960/540, Tile Width 100, Tile Height 100, Output Width 500, Output Height 500, Mirror Edges ON.
7. Trim nulls and clip to the same duration.
8. Play back to preview zoom transition.

---

## Transcription note
No audio transcript available (music only, no voiceover). All steps derived from on-screen captions and visual instruction in After Effects interface.
