# Twixtor Smooth (4Bm_XBczYFg, 360 s)

Voiced: no voiceover (music only; all instructions are on-screen captions). Whisper result: see bottom.
Plugin: **Twixtor Pro** (RE:Vision Effects) — third-party, required.
Project: 1920x1080, 29.97 fps (HDTV 1080 29.97 preset, Drop Frame). Clip: Demon Slayer (Muichiro) anime shot.

## Effect chain (in order)
1. Source clip -> Time Remap (Ctrl+Alt+T), one keyframe per "new drawing" frame (manual frame-stepping).
2. Pre-comp (the remapped clip) -> Twixtor Pro on the precomp layer.
3. Outer precomp -> Time Remap again with 2 keyframes + Easy Ease (F9) + value-graph shaping.
No other effects shown (no glow, no color) — this is purely the slow-motion technique.

## Step-by-step as captioned (frame times = video time)
- 0:20 "STEP 1: Get your clip ready." Select the clip, Duplicate (Ctrl+D).
- 0:26 Hold Ctrl and select both clips -> right click -> **Pre-compose** with "Move all attributes into the new composition", "Adjust composition duration to the time span of the selected layers" = **unchecked**. Caption: "By duplicating, the pre-comp's framerate will remain the same as the project's." (the duplicate is only there so pre-compose forces the comp's fps, not the footage fps).
- 0:38 Double-click the pre-comp; delete the other (duplicate) layer "for now".
- 0:44 Open Time Remap (Ctrl+Alt+T). Set a keyframe at the start.
- 0:48 Use PG UP / PG DN on the keyboard to move forward/backwards one frame.
- 0:52-1:24 "Now set a keyframe for each frame where the character moves." Caption: "The camera or the scene might move on itself, but you should mostly only keyframe the character's movement." (i.e. step frame-by-frame; whenever the character drawing changes, add a Time Remap keyframe; skip camera-only/background-only motion frames.)
- 1:36 "Bring all the keyframes together to have constant movement" — drag all keyframes so they are adjacent, one per frame (shown as an even row of ~20+ keyframes, each 1 frame apart). Result: the shot now plays every unique drawing on consecutive frames (removes anime's held frames / "2s and 3s").
- 2:10 "Cut the rest of the clip (Ctrl+Shift+D)" after the last keyframe, delete the tail.
- 2:24 Duplicate the clip (Ctrl+D). Right-click empty space -> Composition Settings -> **make the Duration longer (20+ sec)** (dialog shows original 0;00;02;05 being edited).
- 2:36 Select both clips (Ctrl) -> Pre-compose (same settings). Now the layer is "Pre-comp 2" inside "Pre-comp 1".
- 2:48 "Add Twixtor to the layer (plugin in desc)". Effect name in panel: **Twixtor Pro**.
- 2:58 "Enable this (optional)": Use GPU -> ON (options: OFF / ON / ON if GPU supported, CPU otherwise).
- 3:08 Track Control > Image Prep -> **Contrast/Edge Enhance** (from None).
- 3:14 "Set a keyframe for Speed at the start" (Output Control > Speed % = 100.000 at frame 0).
- 3:18 "Move forward (PG UP) 1 frame". 3:20 "Set the speed to 7" -> Speed % = **7.000** at frame 1.
- 3:24 "And now (copy these settings)": Frame Interp -> **Motion Weighted Blend**; Warping -> **Forward** (options: Inverse / Inverse w/ Smart Blend / Forward / Forward, no Smart Blend).
- Twixtor Pro panel values read from screen:
  - Display: Twixtored Output
  - Use GPU: ON
  - Source Control: Color Source = 1. Pre-comp / Source; Alt Motion Source = None; Input: Fields = None; Input: Frame Rate = 29.970
  - Track Control: Motion Vectors = Best; Image Prep = Contrast/Edge Enhance; Plenty Memory? = Cache Last Motion? checked
  - Output Control: Time Remap Mode = Speed; Speed % = 100 (kf @0f) -> 7 (kf @1f); Frame Interp = Motion Weighted Blend; Warping = Forward; Motion Blur Compensation = 0.00
  - Main_BG Layer Settings / FG1-3 Settings / Track Points: untouched (collapsed)
- 3:44 Go back out: right-click the pre-comp -> Pre-compose it again (same settings). Right click empty space -> Composition Settings -> **reset the Duration to what it was originally** (dialog shows it being set back from 0;00;22;05).
- 4:00 Open Time Remap (Ctrl+Alt+T) on this outer precomp. "Choose the length for your clip" — move the end keyframe to the wanted length (shown ~1s07f = ~37 frames).
- 4:12 "Drag the Time Remap forward until the last frame, right before the warp begins." — i.e. set the 2nd Time Remap keyframe's value to the last real (twixtored) frame before the slow-mo runs out of source, so the clip ends on the final drawing.
- 4:32 Cut the rest (Ctrl+Shift+D).
- 4:36 "Select the keyframes and press F9 to easy ease them."
- 4:44 "Open up the Value Graph" -> "and make a similar graph". Graph shape (Time Remap value graph, 2 keys, 0f -> ~1:07f): near-vertical rise right out of key 1, long shallow plateau through the middle, near-vertical rise into key 2. Handles: key 1 out-handle pulled almost straight up (steep), key 2 in-handle pulled almost straight down. = fast-slow-fast time curve.
- 5:04 "This is how it looks." 5:12 "You can also make it shorter/longer, depending on the scene/song or preference." 5:32 "Also adjust the graph accordingly."

## Numeric values
- Comp: 1920x1080, 29.97 fps, original duration 0;00;02;05, temporary duration 0;00;22;05 (any 20+ s works).
- Twixtor Speed %: 100 @ 0f, 7 @ 1f (linear keyframes, no easing shown on these).
- Final outer Time Remap length: ~1s07f (37 frames); scene-dependent.
- Graph: unreadable exact influence %, shape as described above.

## Layer structure
Main comp
 └ Pre-comp 1 (outer)          <- Time Remap 2 keys + F9 + value graph, trimmed
    └ Pre-comp 2               <- Twixtor Pro, comp duration 20+ s, then reset
       └ Pre-comp (original)   <- Time Remap keyframes per drawing, packed 1 frame apart, tail cut
          └ clip (+ deleted duplicate)
No adjustment layers, no expressions.

## Rebuild recipe (from scratch)
1. Import anime clip into a 29.97 fps 1080p comp. Duplicate it (Ctrl+D), select both, Pre-compose (move all attributes, do NOT adjust duration). Enter precomp, delete the duplicate.
2. Ctrl+Alt+T on the clip. Keyframe Time Remap at 0, then PG UP frame by frame; add a keyframe at every frame where the character's drawing changes (ignore camera/BG-only motion).
3. Select all those keyframes and pack them 1 frame apart from the start (constant movement). Ctrl+Shift+D after the last one, delete the tail.
4. Duplicate this layer, open Composition Settings, set Duration to 20+ s, select both, Pre-compose.
5. Apply Twixtor Pro to the new precomp layer: Use GPU ON, Image Prep = Contrast/Edge Enhance, Motion Vectors = Best, Frame Interp = Motion Weighted Blend, Warping = Forward. Keyframe Speed % = 100 at frame 0 and 7 at frame 1.
6. Pre-compose that layer again; in the new comp's Composition Settings put Duration back to the original clip length.
7. Ctrl+Alt+T on this outer precomp; drag the end keyframe to the desired clip length (~1 s), set its value to the last frame before Twixtor runs out of source; Ctrl+Shift+D to cut the rest.
8. Select both keys, F9, open Value Graph; drag key 1's handle almost vertical up and key 2's handle almost vertical down so the curve is steep-flat-steep. Shorten/lengthen and reshape per the music.
