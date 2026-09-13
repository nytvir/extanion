# Face Zoom (BGMeNpSd1nc, 325 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: see bottom.
Plugins: none required for the core zoom (nulls + Scale + Motion Tile). Captions mention optional extras "twitch, shake, lens distortion" (shown from a preset/plugin, values not shown).
Project: 1920x1080, 29.97 fps. Two clips (HxH Chrollo): clip1.avi Comp 1 (0 - 17 f) and clip2.avi Comp 1 (17 f - ~1:07 f). "The clips are already Twixtored and time remapped."

## Core idea
Two nulls per clip, parented in a chain (clip -> child null -> parent null). The child null does a fast zoom-OUT (big -> 100), the parent null does a slow zoom-IN (100 -> big) at the same time; the sum is a punchy zoom that settles on the face. Motion blur on. Value graphs are hard-eased by hand.

## Effect chain / properties
- Layer switch: **Motion Blur** enabled on the clip layers (and comp Motion Blur toggle on).
- Null 2 (child) Scale keys; Null 2 (parent) Scale keys; Null 3 (child) Scale keys; Null 3 (parent) Scale keys.
- **Motion Tile** on clip 2 (to remove the black background when the zoom-out reveals edges): Tile Center 960,540; Tile Width 100; Tile Height 100; **Output Width 500**; **Output Height 500** (typed while showing 490 -> 500); **Mirror Edges checked**; Phase 0.
- No expressions.

## Step-by-step as captioned
CLIP 1 (0:22-1:56)
- 0:24 Right-click -> Pre-compose (Move all attributes; adjust-duration unchecked).
- 0:32 "Activate Motion Blur" (layer switch + comp toggle).
- 0:40 "Create Null (Ctrl+Alt+Shift+Y)". "Cut it to the clip's length (Ctrl+Shift+D)" (null trimmed to clip1's 17 frames).
- 0:48 "Duplicate the Null (Ctrl+D)". "Parent link the clip with the nulls": clip1 -> parent = lower Null 2 (child); child Null 2 -> parent = upper Null 2. Timeline reads: [Null 2] None / [Null 2] parent "2. Null 2" / [clip1.avi Comp 1] parent "3. Null 2".
- 1:02 "Press S on the 1st (child) null". "Set a keyframe at the end" (Scale 100 @ 17 f). "Increase the scale for the first keyframe" -> Scale **465.0** @ 0 f. So child null: 465 -> 100.
- 1:14 Select keyframes, F9. "Open up the Value Graph" -> "and make a similar graph": curve drops almost vertically from 465 right at frame 0 then flattens into 100 (first key's out-handle pulled straight down; extreme ease-out). Value graph shows 400/300/200/100 % gridlines.
- 1:28 "Select the 2nd (parent) null". "Press S for Scale". "Set a keyframe at the start" (100 @ 0 f). "Press Y and center the anchor point with the character's face" (Pan Behind tool on the parent null; anchor on the face so the zoom-in targets the face). Note caption: "Also if your anchor point isn't showing activate it from the view tab, shortcut Ctrl+Shift+H".
- 1:44 "Increase the scale for the end keyframe" -> parent Null Scale **538.0** @ 17 f (300 shown mid-drag). "Select the keyframes and press F9". "Open up the value graph" -> "and make a similar graph": flat at 100 for most of the clip then rises almost vertically into the last key (last key's in-handle pulled straight down; extreme ease-in). 500 % gridline visible.
- Result: child 465->100 (fast settle) x parent 100->538 (late snap-in) = zoom pops out then slams into the face at the cut.

CLIP 2 (1:58-3:40)
- 2:00 "Create Null (Ctrl+Alt+Shift+Y)", "Cut it to the clip's length", "Delete the other ones" (trim), "Duplicate the Null", "Parent link the clip with the nulls" (clip2 -> child Null 3 -> parent Null 3).
- 2:14 "Press S on the 1st null". "Press Y and move the anchor point slightly up and to the left" (child Null 3 anchor above/left of face).
- 2:20 "Decrease the scale for the first keyframe" -> child Null 3 Scale **49.0** @ 17 f (clip2 start; picture shrinks to a small centered box on black). "Set a keyframe" ... "Increase the scale to **138** in the middle" (Scale 138.0 @ ~26 f). "Set the keyframe at the end back to **100**" (@ ~1:07 f). "Easy ease them F9". "Open up the value graph" -> "make it like this": arch — rises from 49 to a rounded peak at 138 and descends gently to 100 (overshoot bump, bezier handles lengthened on the middle key).
- 2:50 "To get rid of the black background add **Motion Tile**" to clip2 "and (copy these settings)": Output Width 500, Output Height 500, Mirror Edges on (so the zoomed-out picture is surrounded by mirrored copies instead of black).
- 3:06 Parent Null 3: "Press S to open Scale and set a keyframe around here" (100 @ ~27 f, i.e. a few frames after clip2 starts). "Set the keyframe at the end to **34**" (Scale 34.0 @ ~1:07 f). "Easy ease F9". "Graph like this": hold at 100, then a hard ease-in plunge to 34 in the last ~3 frames (last key's in-handle pulled vertical). Graph gridlines 100/90/.../30 %.
- 3:20-3:40 result playback.
- 4:00 "To make the zoom more impactful you can add extra effects such as twitch, shake, lens distortion etc." Shown: "Adding twitch" (a keyframed spike on a property, values unreadable) and "Adding shake" (values unreadable). Not required.

## Numeric values
| Layer | Scale keys | Time |
|---|---|---|
| Null 2 child (clip1) | 465 -> 100 | 0 f -> 17 f, F9, first handle vertical (ease-out) |
| Null 2 parent (clip1) | 100 -> 538 | 0 f -> 17 f, F9, last handle vertical (ease-in), anchor on face |
| Null 3 child (clip2) | 49 -> 138 -> 100 | 17 f -> ~26 f -> ~37 f, F9, arch graph, anchor up-left |
| Null 3 parent (clip2) | 100 -> 34 | ~27 f -> ~37 f, F9, vertical plunge at end |
| Motion Tile (clip2) | Output W/H 500/500, Mirror Edges on | static |
Exact end frames of clip2 unreadable (approx 1:07 f = 37 f).

## Layer structure (final)
1. [Null 3] parent (Scale 100 -> 34)
2. [Null 3] child, parent = 1 (Scale 49 -> 138 -> 100)
3. [clip2.avi Comp 1] parent = 2, fx Motion Tile, motion blur on
4. [Null 2] parent (Scale 100 -> 538)
5. [Null 2] child, parent = 4 (Scale 465 -> 100)
6. [clip1.avi Comp 1] parent = 5, motion blur on
No adjustment layers.

## Rebuild recipe (from scratch)
1. Precompose each clip; turn on Motion Blur (layer switch + comp).
2. Per clip: Ctrl+Alt+Shift+Y for a null, trim it to the clip (Ctrl+Shift+D), Ctrl+D to duplicate. Pick-whip clip -> lower null, lower null -> upper null.
3. Lower (child) null: S; Scale 465 at clip start, 100 at clip end. F9, value graph: drag first key's handle straight down so it drops instantly and coasts.
4. Upper (parent) null: Y and put its anchor on the face; S; Scale 100 at start, 538 at end. F9, graph: drag last key's handle so it stays flat then snaps up at the very end.
5. For a "zoom-out reveal then settle" variant (clip 2): child null Scale 49 -> 138 -> 100 with an arched graph, anchor moved up-left; parent null 100 -> 34 plunging in the last frames; add Motion Tile (Output 500/500, Mirror Edges) on the clip so the shrunk frame is surrounded by mirror tiles instead of black.
6. Optional: layer twitch/shake/lens-distortion presets on top for impact.
