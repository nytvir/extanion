# Invert Bars + Glow (oPJm4jg6I1o, 357 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: see bottom.
Plugins: **S_EdgeDetect** (Sapphire, third-party) and **Deep Glow** (Plugin Everything, third-party). Everything else is native AE.
Project: 1920x1080, 29.97 fps. Clip: HxH Meruem shot, "already Twixtored and time remapped" (precomp "clip.mp4 Comp 1").

## Effect chain (in order, per layer)
Bars layer(s): **Motion Tile** (keyframed Output Width / Output Height) -> **Drop Shadow** -> **Drop Shadow 2** (duplicate, opposite direction).
Glow layer: **S_EdgeDetect** -> **Deep Glow** -> **Hue/Saturation** (Colorize) -> **Hue/Saturation 2** (Master Hue shift) -> layer Opacity keyframes.
Under-layer: Rotation = -180 (the "inverted" picture seen through the bars).

## Step-by-step as captioned
- 0:22 "STEP 1: Get your clip ready." "The clip is already Twixtored and time remapped."
- 0:30 Right-click -> **Pre-compose** (Move all attributes; adjust-duration box unchecked in dialog).
- 0:38 Duplicate the clip (Ctrl+D). Select the **1st** (lower) clip. Press R -> Rotation = **-180** (0x-180.0 deg). This is the upside-down copy that shows in the bars.
- 0:48 "Add Motion Tile to the 2nd clip" (the upper one). Defaults: Tile Center 960,540; Tile Width 100; Tile Height 100; Output Width 100; Output Height 100; Mirror Edges off; Phase 0.
- 0:54 "Go forward around 18 frames." Set a keyframe for (Output) **Width** (=100).
- 1:04 "Move forward another 23 frames." "Set the Width to **80**." (Output Width 100 -> 80, i.e. black vertical bars appear left/right over 23 frames, revealing the -180 layer beneath).
- 1:14 "Go to the end of clip" -> "Set it back to **100**" (third keyframe at layer out point).
- 1:26 Press U to reveal keyframes; select them, F9 (Easy Ease). "This will make the bars smoother."
- 1:40 "Now to make the bars in the Y axis follow me": duplicate the 2nd layer (Ctrl+D), U, select keyframes, Ctrl+C. On the copy: **uncheck the Width** stopwatch (remove Output Width keys), set a keyframe for **Height**, U, Ctrl+V (pastes the same 100/80/100 keys onto Output Height). "Hide the other layer" (solo-check by eye).
- 2:00 "You can also add Drop Shadow for the bars." **Drop Shadow** values (copy these settings): Shadow Color black; Opacity **50 %**; Direction **0x+180** ("for the lower bar set the direction to 180"); Distance **19.0**; Softness **50.0**; Shadow Only off. Then "Duplicate the FX (Ctrl+D)" -> Drop Shadow 2: same but Direction **0x+0** ("for the upper bar"). Shown with Output Height reading 84.4 / 83.4 mid-animation.
- 2:20 Hide the upper layer / unhide the other. "For the X axis bars copy/paste the FX and change the direction": Drop Shadow Direction **+90 on the right side**, **-90 on the left side** (panel shows Output Width 88.1 mid-animation, Distance 19, Softness 50, Opacity 50 on both copies).
- 2:40 "Now to add glow to the bars follow me." Select the 1st layer, Duplicate it (Ctrl+D). "Add S_EdgeDetect to the duplicated clip (sapphire plugin)". Hide this layer for now.
- **S_EdgeDetect** values (as shown, look like defaults): Effect = RGB Edges; Edge Smooth **5.38**; Subpixel Smooth on; Brightness 1.000; Saturation 1.000; Threshold 0.000; Weight Red/Green/Blue 1.000; Opacity Normal; Mask Use Luma; Blur Mask 12.00; Invert Mask off.
- 3:00 "Add Deep Glow (plugin)". **Deep Glow** values: Radius **500.00**; Exposure **0.33** ("lower the exposure if needed"); Style > Blend Mode **Screen**; View Final Render; Source Opacity 100 %; Unmult checked. Gamma/Aspect/Chromatic Aberration/Tint collapsed (untouched).
- 3:16 "Add Hue/Saturation": "check the Colorize icon" -> Colorize on; Colorize Hue **0x+0.0**; Colorize Saturation **25**; Colorize Lightness **0**. "Choose your colour" (shown going pink then green).
- 3:28 "Add Hue/Saturation again" -> Hue/Saturation 2: Channel Control Master; Master Hue **0x+132.0** (turns the pink edges green); Master Saturation 0; Master Lightness 0; Colorize off.
- 3:40 "Press T for opacity and make a transition": Opacity keyframes on the glow layer, 100 % -> 0 % (100 at ~0;00;00;24, 0 at ~0;00;00;31; exact frames unreadable) so the neon edge-glow fades out as the bars close.
- 4:00 "This is how it looks." 4:44 "Same goes for the Y axis bars." "Same goes for the X axis bars." (repeat the glow-layer stack for each bar layer).

## Numeric values summary
| Item | Value |
|---|---|
| Under-layer Rotation | -180 deg |
| Motion Tile Output Width keys | 100 @ +18f, 80 @ +41f (18+23), 100 @ clip end; Easy Ease |
| Motion Tile Output Height keys (Y-bar layer) | same 100/80/100 pasted |
| Drop Shadow | Opacity 50 %, Distance 19, Softness 50, Direction 180 (lower) / 0 (upper) / +90 (right) / -90 (left) |
| S_EdgeDetect | RGB Edges, Edge Smooth 5.38, Blur Mask 12 (defaults) |
| Deep Glow | Radius 500, Exposure 0.33, Blend Screen |
| Hue/Saturation 1 | Colorize on, Sat 25, Light 0 |
| Hue/Saturation 2 | Master Hue +132 |
| Glow opacity | 100 -> 0 over ~7 frames (approx) |

## Layer structure (final, top to bottom)
1. clip.mp4 Comp 1 — glow copy: S_EdgeDetect + Deep Glow + Hue/Sat x2, Opacity 100->0 (hidden = eye off while building)
2. clip.mp4 Comp 1 — Y-axis bars: Motion Tile (Output Height keys) + Drop Shadow x2 (180 / 0)
3. clip.mp4 Comp 1 — X-axis bars: Motion Tile (Output Width keys) + Drop Shadow x2 (+90 / -90)
4. clip.mp4 Comp 1 — Rotation -180 (inverted base)
All are duplicates of one precomp; no adjustment layers; no expressions.

## Rebuild recipe (from scratch)
1. Pre-compose your (already time-remapped) clip. Duplicate it. Bottom copy: R -> Rotation -180.
2. Top copy: Effect > Stylize > Motion Tile. At +18 f keyframe Output Width 100; at +41 f set 80; at the last frame set 100. Select keys, F9.
3. Add Drop Shadow (Opacity 50, Distance 19, Softness 50, Direction 90); Ctrl+D the effect and set Direction -90. (Left/right bars.)
4. Duplicate that layer. Remove the Output Width keys, paste the same keys onto Output Height. Set its two Drop Shadows to Direction 180 and 0. (Top/bottom bars.)
5. Duplicate the bars layer again for glow: add S_EdgeDetect (RGB Edges, defaults), Deep Glow (Radius 500, Exposure 0.33, Screen), Hue/Saturation with Colorize (Sat 25), then a second Hue/Saturation with Master Hue 132 to pick the colour.
6. T -> keyframe glow layer Opacity 100 -> 0 across ~7 frames where the bars close. Repeat the glow copy for each bar layer if wanted.
