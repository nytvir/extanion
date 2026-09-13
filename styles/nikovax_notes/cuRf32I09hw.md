# Polytrace FX (cuRf32I09hw, 165 s)

Voiced: no voiceover (music + on-screen captions).
Plugins: **Polytrace FX** (third-party required; converts footage to low-poly geometric style with no native AE substitute).
Project: 29.97 fps. Composition contains: Comp1 (time-remapped and Twixtored footage), Matte1 (composition), Solid_Orbit (AVI file, 143 MB, 29.97 fps), multiple adjustment layers including "Adjust - Layer #1" through "Adjust - Layer #4" (which hold the Polytrace effect).

## Core idea
**Polytrace FX** is a real-time video effect that converts footage into a low-poly geometric style by analyzing luminosity and edge data to create connected polygonal shapes (triangles/quads) with rendered edges. The tutorial demonstrates applying Polytrace to animated character footage, using masks with feathering to blend the effect selectively (e.g., only on the upper body while leaving the original footage visible elsewhere).

The effect works by detecting edges and luminance transitions, then connecting nearby detected points into polygons. Point Collection Mode "Sobel" indicates edge detection via Sobel filter. The feathered mask creates a smooth transition between polytrace-affected and unaffected areas.

## Effect chain / properties
- **Polytrace FX** applied to adjustment layer (Adjust - Layer #4)
  - **Threshold**: unreadable (appears to control edge sensitivity)
  - **Scatter**: unreadable (appears to add randomness to point placement)
  - **Point Collection Mode**: Sobel (edge detection method)
  - **Input Channel**: unreadable options visible
  - **Draw Lines**: checkbox (enables/disables polygon edges)
  - **Draw Points**: checkbox (enables/disables vertex points)
  - **Antialiasing**: checkbox
  - **Transfer Mode**: Normal
  - **Edge and Point Style**: unreadable options
  - **Scatter Randomness**: unreadable
- **Mask 1** applied to the adjustment layer:
  - **Mask Operation**: Subtract
  - **Inverted**: checkbox (unchecked)
  - **Mask Feather**: 1500 pixels (shown in one frame) and/or ~360 (mentioned in caption "INCREASE THE FEATHER TO AROUND 360")
  - **Mask Opacity**: unreadable (appears to be 100%)
  - **Mask Expansion**: unreadable
- No additional effects or expressions visible

## Step-by-step as captioned
- 0:05 "LINK IN THE CLIP / GRACE" (intro)
- 0:30+ "THE CLIP IS ALREADY TWIXTORED AND TIME REMAPPED" (note about input footage preprocessing)
- 0:40 "CUT IT TO THE CLIPS LENGTH (CTRL+SHIFT+D)" (trim adjustment layer to comp duration)
- 1:00+ Apply **Polytrace FX** effect to adjustment layer ("Adjust - Layer #4" visible)
- 1:30+ "GO FORWARD AROUND 24 FRAMES" (navigating timeline to demonstrate different frames)
- 1:45 Character shown with full Polytrace conversion (entire frame is polygonal wireframe)
- 2:00+ "GO BACK TO THE CENTER OF THE CLIPS" (timeline navigation)
- 2:15 "GO FORWARD AROUND 17 FRAMES" (timeline navigation)
- 2:30+ Create a mask on the Polytrace layer:
  - Draw mask around character's upper body using pen tool (mask shape unreadable)
  - "INCREASE THE FEATHER TO AROUND 360)" (tooltip shows mask feather adjustment)
  - Alternatively, 1500 pixel feather visible in later frame
- 2:50+ Final result shows character with Polytrace effect on upper body, original anime footage on lower body (blended via mask)
- 3:00+ Alternative composition shown with Polytrace effect creating floating/trailing polygonal shapes above character head
- Remainder: playback and demonstration of final effect with smooth mask transitions

## Numeric values
| Setting | Value |
|---|---|
| Frame Rate | 29.97 fps |
| Point Collection Mode | Sobel |
| Transfer Mode | Normal |
| Mask Operation | Subtract |
| Mask Feather | ~360 to ~1500 pixels (exact value unreadable; caption shows "around 360", later frame shows larger feather) |
| Mask Opacity | unreadable (approx 100%) |
| Threshold | unreadable (approx medium-high sensitivity) |
| Scatter | unreadable |
| Draw Lines | enabled (assumed) |
| Draw Points | enabled/disabled unreadable |
| Antialiasing | unreadable |
| Scatter Randomness | unreadable |

All Polytrace parameter numeric values are unreadable (effect panel text too small in video). Mask feather value shown as "AROUND 360" in caption; one frame shows what appears to be 1500-2000 px feather applied. No keyframe animations visible (static effect).

## Layer structure (final)
Main Composition (29.97 fps):
1. [Adjust - Layer #4] fx **Polytrace FX**, Mask 1 (Sobel edge detection, feather ~360-1500px)
2. [Adjust - Layer #1], [Adjust - Layer #2], [Adjust - Layer #3] (other adjustments, details unreadable)
3. [Matte1] Composition layer
4. [Solid_Orbit] AVI file (143 MB, 29.97 fps)
5. [Comp1] Nested composition (anime footage, time-remapped, Twixtored)

## Rebuild recipe (from scratch)
1. Import or pre-compose the video footage. If needed, apply Twixtor time remapping (mentioned as already done in video).
2. Create a new adjustment layer above the footage: Layer > New > Adjustment Layer (or Alt+Ctrl+Y). Name it "Adjust - Polytrace" or similar.
3. Apply Polytrace FX: Effects > [Search for Polytrace or browse plugin menu] > Polytrace FX
4. In the Polytrace FX settings:
   - Set **Point Collection Mode** to "Sobel" (for edge-based detection)
   - Adjust **Threshold** to control sensitivity (start at default, decrease for more detail/polygons, increase for fewer larger polygons)
   - Enable **Draw Lines** to show polygon edges (uncheck to show only points)
   - Optionally enable **Draw Points** to show vertices
   - Set **Transfer Mode** to "Normal" or adjust for blending
   - Adjust **Scatter** and **Scatter Randomness** to taste for organic variation
5. (Optional) To blend the effect partially:
   - With the adjustment layer selected, Mask > New Mask > Pen Tool (or Ctrl+Shift+N)
   - Draw a mask around the area where you want Polytrace visible (e.g., upper body, head)
   - Set **Mask Feather** to 360-1500 pixels (higher values create smoother transitions)
   - Set **Mask Opacity** to 100% (or less for semi-transparent effect)
   - Adjust **Mask Expansion** if needed to fine-tune mask size
6. Adjust mask operation to "Subtract" if you want the masked area to show Polytrace while the rest shows original footage
7. Render and review. Polytrace processes in real-time, so you can adjust parameters while previewing
8. Optional: nest the polytrace composition and apply additional effects (color grading, trails, etc.) on top

Note: Exact Polytrace parameter values are not legible in the video. Suggested starting values: Threshold medium, Scatter low, Feather 500-1500px depending on desired blend hardness. The Sobel mode is recommended for anime footage as it detects character lines well.
