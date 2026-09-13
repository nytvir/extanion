# Ink Overlay Transition (kLoFcSXnKKI, 104 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: not applicable (anime + captions).
Plugins: none required (uses native track mattes and time remap).
Project: Resolution/fps unreadable. Composition "ink_overlay_rec" with precomposed clips and ink overlay layer ("Ink Blot 01.mp4").

## Core idea
The Ink Overlay Transition uses an animated ink/particle layer as a track matte to create a transition between two clips. The ink layer is time-remapped to reverse/keyframe its playback, and is then applied as either an Alpha Matte or Luma Matte to blend with the underlying clip(s), creating a stylized particle-based transition effect.

## Effect chain / properties
- **Pre-compose**: Clips precomposed (right-click -> Pre-compose, "Leave all attributes in ink_overlay_rec" selected).
- **Time Remap** (native AE): Applied to ink layer. Accessed via Ctrl+Alt+T. Keyframes set to reverse or pause the ink animation at specific frames.
- **Track Matte**: Applied to clip layer(s):
  - Options visible: "No Track Matte", "Alpha Matte 'Ink Blot 01.mp4'", "Alpha Inverted Matte 'Ink Blot 01.mp4'", "Luma Matte 'Ink Blot 01.mp4'", "Luma Inverted Matte 'Ink Blot 01.mp4'"
  - Most likely: **Alpha Matte** or **Alpha Inverted Matte** using the ink layer
- **Ink layer source**: "Ink Blot 01.mp4" - an animated particle/ink element
- No effects chain visible (effect stack unreadable); transition relies on layer structure and mattes

## Step-by-step as captioned
1. "PRE-COMPOSE THE CLIPS (WITH THESE SETTINGS)" - Right-click clip, Pre-compose, choose "Leave all attributes in ink_overlay_rec" option.
2. "OPEN THE TIME REMAP CTRL+ALT+T" - Select ink layer, press Ctrl+Alt+T to enable Time Remap. This allows keyframing the playback speed/direction of the ink animation.
3. Set keyframes on Time Remap to control when/how the ink particles appear/disappear (reverse the playback or pause at key moments).
4. "CUT THE CLIP (CTRL+SHIFT+D)" - Trim layers to cut points at transitions.
5. Apply **Track Matte** to the clip layer(s) using the ink layer:
   - Select clip layer.
   - In Timeline, TrkMat column (or Modes panel), choose matte mode: Alpha Matte, Alpha Inverted Matte, Luma Matte, or Luma Inverted.
   - Select the ink layer ("Ink Blot 01.mp4" or similar) as the source.
6. Layer order: Ensure ink layer is directly above the layer using it as matte.
7. Preview and adjust time remap keyframes if needed for timing.

## Numeric values
| Property | Value | Notes |
|---|---|---|
| Time Remap | keyframes at start/end of ink animation | Exact frame numbers unreadable |
| Track Matte mode | Alpha Matte or Alpha Inverted Matte | Depends on ink layer alpha channel |
| Ink layer | "Ink Blot 01.mp4" | Animated particle element |
| Composition | "ink_overlay_rec" | After precompose |

## Layer structure (final)
1. "Ink Best 01.mp4" (clip layer, TrkMat = Alpha Matte using ink layer)
2. "Ink Blot 01.mp4" (ink/particle layer, Time Remap enabled)
3. "flip3d" (secondary/reference clip)
4. "clip2_comp1" (Composition)
5. "flip2 Layer1 Comp1" (Composition)

Exact stacking order unreadable; likely: clip1 layer -> ink layer below as matte source.

## Rebuild recipe (from scratch)
1. **Import assets**:
   - Clip video (e.g., anime footage).
   - Ink particle layer (e.g., "Ink Blot 01.mp4" - an animated particle/ink element).
2. **Precompose clip**: Right-click -> Pre-compose, "Leave all attributes in [comp name]".
3. **Create new composition** or work in main comp with both clip and ink layers.
4. **Stack layers**:
   - Place clip layer on top (or any layer that will use the ink as matte).
   - Place ink layer directly below it.
5. **Enable Time Remap on ink layer**:
   - Select ink layer.
   - Press Ctrl+Alt+T to toggle Time Remap.
   - Set keyframes at the beginning and end to control playback: reverse, pause, or slow down the ink animation.
6. **Apply Track Matte**:
   - Select clip layer.
   - In Timeline Modes panel (or TrkMat column), choose:
     - **Alpha Matte** if ink layer has transparent background (most common).
     - **Alpha Inverted Matte** for inverse effect.
   - Set the matte source to the ink layer below.
7. **Adjust timing**:
   - Trim layers to desired cut points using Ctrl+Shift+D.
   - Fine-tune time remap keyframes so ink animation aligns with transition timing.
8. **Preview**, adjust, and render.

**Optional enhancements**:
- Adjust opacity of ink layer for translucency.
- Layer multiple ink elements for richer effect.
- Combine with other transitions (scale, offset, etc.) on the clip before or after the ink matte.

