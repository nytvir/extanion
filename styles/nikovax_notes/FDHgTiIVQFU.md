# Offset Transition (FDHgTiIVQFU, 104 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: not applicable (anime + captions).
Plugins: **BCC Directional Blur** (Boris FX Continuum plugin) required. No native substitute shown; plugin essential to the effect.
Project: Resolution and frame rate unreadable from frames. Single composition "offset transition" with precomposed clips and adjustment layers.

## Core idea
The Offset Transition uses two effects stacked on an adjustment layer:
1. **Offset effect** - shifts/displaces the image in X and Y directions
2. **BCC Directional Blur** - applies motion blur in the same direction as the offset to create a cohesive directional transition

The blur direction must match the offset direction for visual continuity.

## Effect chain / properties
- **Pre-compose**: Clip layers precomposed (right-click -> Pre-compose, "Leave all attributes in offset transition" selected).
- **Offset effect** (native AE): Applied to adjustment layer; shifts image center position (unreadable exact values approx).
  - Properties: Offset X, Offset Y (values unreadable but shown as adjustable parameters).
  - Position shift allows the image to be pulled/pushed in any direction.
- **BCC Directional Blur** plugin:
  - **Angle**: ~50° (matching the offset direction for clip in tutorial).
  - **Amount**: Unreadable exact value (appears to be moderate strength).
  - Other properties visible: Thin, Spread, Edge Feathering, Iteration, Blend Amount, Avoid Clipping, Displace Pixels, Apply Mode (Normal), Apply Mix, Mix With Original.
- Note: "The settings for this effect should match with the offset" (caption).
- Note: "For this clip around (50°) should be in the same direction with the offset settings" (caption).

## Step-by-step as captioned
1. "PRE-COMPOSE IT (WITH THESE SETTINGS)" - Right-click clip, Pre-compose, select "Leave all attributes in offset transition" option.
2. "DELETE THE OTHER ONES" - Remove unnecessary layers, keep only the precomposed clip and adjustment layers.
3. Add **Offset effect** to the clip or adjustment layer (native AE effect, Distort -> Offset).
   - Adjust Offset X and Y to shift the image; can move in any direction.
4. Caption: "NOTE: You can shift center the position in whichever direction works best for the clip." - The direction of offset is flexible based on clip content.
5. Add **BCC Directional Blur** plugin to the same adjustment layer:
   - Search for BCC Directional Blur in Effects & Presets panel.
   - Apply to adjustment layer containing the offset effect.
6. Set **Angle** to match offset direction: approximately **50°** for this clip.
7. Adjust **Amount** and other blur parameters (Spread, Edge Feathering, Iteration) to achieve desired motion blur intensity.
8. Caption: "For this clip around (50°) should be in the same direction with the offset settings." - Ensure blur angle aligns with offset direction for cohesion.
9. Preview and render transition.

## Numeric values
| Property | Value | Notes |
|---|---|---|
| Offset X, Y | unreadable (approx directional shift) | Varies by clip; direction flexible |
| BCC Directional Blur Angle | ~50° | Must match offset direction; example value given |
| BCC Directional Blur Amount | unreadable (moderate strength) | Adjust for desired blur intensity |
| BCC Directional Blur Spread | unreadable | Edge feathering parameter |
| BCC Directional Blur Iteration | unreadable | Blur quality/smoothness |
| BCC Directional Blur Apply Mix | RGBA | Blend mode |

## Layer structure (final)
1. Adjustment Layer 2 (contains Offset effect + BCC Directional Blur)
2. Image Layer 2 (or precomposed clip layer)
3. Offset Comp 1 (precomposed source)
4. Optional: "flipxy" or other layer (appears in left panel but deleted per tutorial)

## Rebuild recipe (from scratch)
1. **Precompose the clip**: Right-click source layer, Pre-compose, select "Leave all attributes in [comp name]".
2. **Add Offset effect**:
   - Select adjustment layer or clip.
   - Effects > Distort > Offset.
   - Adjust Offset X and Y to displace the image in desired direction (e.g., diagonal up-right at 50°).
   - Note: direction is flexible based on clip content and creative intent.
3. **Add BCC Directional Blur plugin**:
   - Ensure BCC (Boris FX Continuum) is installed.
   - Select same layer (adjustment or clip).
   - Effects > BCC > BCC Directional Blur.
   - Set **Angle** to ~50° (or match your offset direction).
   - Adjust **Amount** for blur intensity.
   - Fine-tune Spread, Iteration, and other parameters to taste.
4. **Important**: The blur direction (Angle) must visually match the offset direction for the transition to read as cohesive directional motion.
5. Preview, adjust values, and render.

**Note**: This effect requires **BCC (Boris FX Continuum)** plugin. No native AE substitute for BCC Directional Blur; Gaussian Blur or Fast Blur can approximate but lack directional control. The combination of Offset + Directional Blur is specific to BCC and creates the signature "slash" transition style.
