# Twitch Shake (9igs8uTyXCc, 117 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: not applicable.
Plugins: **Twitch effect** (appears to be Sapphire, Red Giant, or similar third-party plugin). Can use native alternatives (random movement keyframing).
Project: Resolution/fps unreadable. Composition "Twitch Transition" with multiple clips.

## Core idea
The Twitch Shake effect creates a fast, stuttering motion with optical distortions (chromatic aberration via RGB split, motion blur, color shifts, etc.). The effect is applied as a preset or plugin that generates rapid, controlled random motion. The keyframes are then eased (F9 Easy Ease) to smooth the overall animation curve while keeping the micro-twitches intact.

## Effect chain / properties
- **Twitch effect** (third-party plugin, likely Sapphire/Red Giant):
  - Properties visible in left panel:
    - **Amount**: 50.00 (intensity of twitch effect)
    - **Speed**: 5.00 (frequency/speed of twitches)
    - **Enable**: checkbox (toggle effect on/off)
    - Sub-effect toggles: Blur, Color, Light, Scale, Slide, Time (each can be enabled individually)
  - **Slide** operator (twitch displacement):
    - **Slide Amount**: 50.00 (pixel offset amount)
    - **Slide Twitches [sec]**: 1.00 (number of twitches per second)
    - **Slide Direction**: 0x=90° (direction of displacement; 0° = horizontal, 90° = vertical)
    - **Slide Spread**: 1.00 (spread/randomness of twitches)
    - **Slide Tendency**: 0.50 (bias toward one direction)
    - **Slide RGB Split**: 0.00 (chromatic aberration amount; can be enabled per caption)
    - **Slide Motion Blur**: 100.00 (motion blur applied to twitches)
    - **Unique Slide Seed**: 0 (randomization seed for variation)
  - Optional: **RGB Split** (chromatic aberration for glitch effect)
- **Keyframes**: Applied to the Twitch effect or clip layer, then eased with F9

## Step-by-step as captioned
1. Import or create clip(s) for transition.
2. Create composition "Twitch Transition" with multiple clips.
3. Select clip layer and apply **Twitch effect**:
   - Effects > [Sapphire/Red Giant/etc] > Twitch, or drag Twitch from presets.
4. Adjust Twitch parameters:
   - **Amount**: Set to ~50.00 for noticeable but not extreme shake.
   - **Speed**: ~5.00 for typical stutter rate (adjust 1-10 range).
   - **Enable**: Check to activate effect.
5. Customize sub-effects:
   - Enable **Slide** for pixel displacement.
   - Set **Slide Amount**: 50.00 (pixel offset).
   - Set **Slide Twitches [sec]**: 1.00 (1 twitch per second; adjust as needed).
   - Set **Slide Direction**: 0x=90° or custom angle.
   - Set **Slide Motion Blur**: 100.00 for full blur (or lower for sharper twitches).
6. Optional: Enable **RGB Split** for chromatic aberration / glitch effect:
   - Adjust **Slide RGB Split**: 0.00 -> higher value (e.g., 10-30) for color separation.
7. Set keyframes on Twitch effect:
   - Enable keyframe (stopwatch icon) on Amount or main Twitch property.
   - Set Amount at start frame (e.g., 50) and end frame (e.g., 0 or fade to low value).
8. "SELECT THE KEYFRAMES AND PRESS (F9) TO EASY EASE THEM":
   - Select the keyframes in Timeline.
   - Press F9 (or right-click -> Keyframe Velocity -> Auto Bezier) to apply Easy Ease.
   - This smooths the overall animation while preserving the micro-twitches.
9. Preview and adjust parameters as needed.
10. Render.

## Numeric values
| Property | Value | Notes |
|---|---|---|
| Twitch Amount | 50.00 | Effect intensity |
| Twitch Speed | 5.00 | Frequency/stutter rate (1-10 range) |
| Slide Amount | 50.00 | Pixel offset per twitch |
| Slide Twitches [sec] | 1.00 | Twitches per second |
| Slide Direction | 0x=90° | Angle of displacement (0°=horizontal, 90°=vertical) |
| Slide Spread | 1.00 | Randomness factor |
| Slide Tendency | 0.50 | Directional bias |
| Slide RGB Split | 0.00 | Chromatic aberration (can enable for glitch effect) |
| Slide Motion Blur | 100.00 | Blur strength on twitches |
| Unique Slide Seed | 0 | Randomization seed |

## Layer structure (final)
1. Clip 1 (Twitch effect applied)
2. Clip 2 (alternate clip for transition)
3. Comp: "Twitch Transition"

## Rebuild recipe (from scratch)
1. **Import footage**: Anime or video clips.
2. **Create composition**: "Twitch Transition" (1920x1080, 29.97 fps, etc.).
3. **Place clips** in composition on separate layers or precomposed.
4. **Apply Twitch effect**:
   - Select clip layer.
   - Effects > Twitch (or search Twitch in Effects & Presets).
     - If Twitch is not available, check that third-party plugin is installed (Sapphire, Red Giant, etc.).
5. **Set Twitch parameters**:
   - Amount: 50.00
   - Speed: 5.00
6. **Enable sub-effects** as desired:
   - Check Slide, Blur, Color, Light, Scale (checkboxes).
7. **Customize Slide** (pixel displacement):
   - Slide Amount: 50.00
   - Slide Twitches [sec]: 1.00
   - Slide Direction: 90° (vertical) or 0° (horizontal)
   - Slide Motion Blur: 100.00
8. **Optional: RGB Split** (chromatic aberration glitch):
   - Enable RGB Split checkbox in Slide section.
   - Increase Slide RGB Split value (e.g., 10-30) for color separation effect.
9. **Keyframe the effect**:
   - Click stopwatch on Twitch Amount property.
   - Set Amount keyframe at start (50.00) and end (0 or lower).
10. **Easy Ease keyframes**:
    - Select both keyframes (Shift+click).
    - Press F9 or right-click > Keyframe Velocity > Auto Bezier.
11. **Preview** and fine-tune parameters (Amount, Speed, Slide values, etc.).
12. **Render**.

**Customization**:
- **Horizontal twitch**: Set Slide Direction to 0°.
- **Vertical twitch**: Set Slide Direction to 90°.
- **Diagonal twitch**: Set Slide Direction to 45° (or other angle).
- **Frequency control**: Increase/decrease Slide Twitches [sec] (e.g., 0.5 = slower, 2.0 = faster).
- **Glitch effect**: Enable RGB Split (Slide RGB Split 10-50) for color aberration.
- **Intensity fade**: Keyframe Amount from 50 -> 0 over the clip duration and ease.
- **Combine with other effects**: Apply offset, zoom, or other transitions before/after Twitch.

**Note**: Twitch effect requires third-party plugin. No native AE equivalent directly available; alternative is to use **Wiggler** expression on Position + Motion Blur for a similar but less polished result.

