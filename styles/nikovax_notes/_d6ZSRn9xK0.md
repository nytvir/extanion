# Neon Outline Glow (_d6ZSRn9xK0, 198 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: not applicable.
Plugins: none strictly required (uses native effects + coloring), but reference shows BCC and Sapphire plugin options available.
Project: Resolution/fps unreadable. Composition "volume_domain" with precomposed clips.

## Core idea
Neon Outline Glow creates a glowing edge/outline effect on a character or footage using native AE tools:
1. **Find Edges** effect - detects edges in the footage
2. **Color controls** - colorize the edges to neon colors (red, blue, etc.)
3. **Glow/Blur** - apply blur/glow to enhance the neon appearance
4. **Mask Expansion/Feathering** - control the outline intensity and spread

The effect is built with masks and expansions to control visibility and glow spread.

## Effect chain / properties
- **Pre-compose**: Clip precomposed (right-click -> Pre-compose, "Leave all attributes" selected).
- **Find Edges** (native AE): Distort > Find Edges
  - Detects and outlines edges in the footage
- **Threshold** (native AE): Levels > Threshold
  - Controls which edges are detected; unreadable exact value
- **Color** application (color picker or colorize effect)
  - Selected neon color: Red (RGB values unreadable, appears bright red ~FF0000)
- **Mask Path** properties:
  - **Mask Feather**: 250.0 pixels (visible in left panel)
  - **Mask Opacity**: 100%
  - **Mask Expansion**: variable, keyframed (starts high, reduced to "not visible" per caption)
- **Glow/Blur** (possibly Gaussian Blur or native glow)
  - Creates the neon luminous effect

## Step-by-step as captioned
1. "PRE-COMPOSE IT (WITH THESE SETTINGS)" - Right-click clip, Pre-compose, "Leave all attributes in volume_domain".
2. Apply **Find Edges effect**:
   - Select clip layer.
   - Effects > Distort > Find Edges.
   - This creates a black and white edge outline.
3. **Colorize the edges** to desired neon color (red, blue, cyan, etc.):
   - Use a color picker or apply a colorize/levels adjustment.
   - Select bright neon color (e.g., red ~FF0000).
4. Add **Glow/Blur** for luminous effect:
   - Effects > Blur & Sharpen > Gaussian Blur, or use glow preset.
   - Adjust blur radius for desired glow intensity.
5. Add **Mask** with expansion control:
   - Right-click layer > New > Mask.
   - In Mask controls, set **Mask Feather** (~250 pixels).
   - Set **Mask Expansion** with keyframes:
     - Start: High value (visible glow outline)
     - End: Lower/negative value so "it's not visible anymore" (per caption)
6. Caption: "LOWER THE EXPANSION AT THE START TILL IT'S NOT VISIBLE ANYMORE" - Keyframe Mask Expansion to fade the neon glow.
7. Preview, adjust colors, blur, and feathering to taste.

## Numeric values
| Property | Value | Notes |
|---|---|---|
| Mask Feather | 250.0 pixels | Controls edge softness |
| Mask Opacity | 100 % | Full opacity |
| Mask Expansion | variable, keyframed | Start: high (visible) -> End: low/0 (invisible) |
| Find Edges | (unreadable threshold) | Edge detection strength |
| Glow/Blur | (unreadable) | Approximate, moderate strength |
| Neon Color | Red (~FF0000 approx) | Bright red neon color; customizable to blue, cyan, etc. |

## Layer structure (final)
1. Clip layer (with Find Edges effect applied)
2. Color adjustment / glow layer
3. Mask controls on clip layer

## Rebuild recipe (from scratch)
1. **Precompose clip**: Right-click -> Pre-compose, "Leave all attributes".
2. **Apply Find Edges**:
   - Select clip layer.
   - Effects > Distort > Find Edges.
3. **Colorize edges**:
   - Add color adjustment: Effects > Color Correction > Colorize, or use Levels to tint edges.
   - Choose bright neon color (red, blue, cyan, pink, etc.). Examples: red #FF0000, cyan #00FFFF, blue #0099FF.
4. **Add Glow**:
   - Effects > Blur & Sharpen > Gaussian Blur.
   - Set blur radius to ~5-20 pixels for soft glow (adjust to taste).
5. **Create Mask with Expansion**:
   - Right-click layer -> New > Mask.
   - In Mask controls (Timeline), set:
     - **Mask Feather**: ~250 pixels (soft edge).
     - **Mask Opacity**: 100%.
     - **Mask Expansion**: Keyframe from high value (e.g., +50) at start to low/0/-50 at end to fade glow.
6. **Animate Mask Expansion** (optional but recommended for transitions):
   - At frame 0: Mask Expansion = +30 (glow visible).
   - At frame end (transition point): Mask Expansion = 0 or negative (glow invisible).
   - Apply F9 (Easy Ease) to keyframes for smooth fade.
7. **Preview**, adjust blur, colors, feathering, and expansion curves.
8. Render.

**Customization**:
- Change **neon color** to blue, cyan, pink, purple, green, etc.
- Increase **Mask Feathering** for softer edges (~300-400 px).
- Increase **Gaussian Blur** for more glow intensity (10-30 px).
- Stack multiple instances of Find Edges with different colors for multi-color neon effect.
- Combine with transitions (offset, scale, opacity) for enhanced motion.

