# Flicker Transition (F_kZ_5uePGM, 179 s)

Voiced: no voiceover (music + on-screen captions).
Plugins: **S_Flicker** (Sapphire plugin, third-party required); **Rg Magic Bullet** (Red Giant color grading plugin, optional for final color pass).
Project: 29.97 fps. Main composition "flicker exp" contains two source clips (Clip1 A and Clip1 B, both AVI files at 5MB), two clip compositions (Clip Comp 1 and Clip Comp 2 as nested comps), adjustment layers for effects, and a solids folder for auxiliary elements.

## Core idea
**Flicker Transition** is a technique that uses the **S_Flicker** effect to create a stuttering/glitchy transition between two clips. As Clip 1 and Clip 2 cross over in time (one fading out while the other fades in), the S_Flicker effect applied via an adjustment layer creates luminance and color flicker that masks the transition point. The flicker is synchronized with the cut so the flickering momentarily obscures the edit, making the transition feel intentional rather than abrupt.

The effect works by:
1. Layering two clip compositions in sequence (Clip Comp 1 ending as Clip Comp 2 starts)
2. Creating temporal overlap or an immediate transition point
3. Applying S_Flicker effect on an adjustment layer during the transition moment
4. The random luminance flicker (via Rand Luma Amp) masks the visual discontinuity
5. Optional color grading (Levels, Magic Bullet) for aesthetic enhancement

## Effect chain / properties
- **Layer arrangement**:
  - Adjustment Layer #4 (top; contains main effects)
  - Adjustment Layer #3 (secondary adjustments)
  - Clip Comp 2 (second clip, plays after Clip Comp 1 ends or overlaps slightly)
  - Clip Comp 1 (first clip)
  - Solids folder (background or auxiliary elements)
  
- **S_Flicker effect** (on Adjustment Layer #4):
  - **Amplitude**: 0.5000 (flickering intensity; tutorial shows setting to 0 for fine-tuning)
  - **Rand Luma Amp**: 5.000 (random luminance amplitude; main visible flicker effect)
  - **Rand Color Amp**: 0.000 (random color flicker; set to 0 in demo, can be increased for color shimmer)
  - **Rand Freq**: unreadable (frequency of random flicker events; likely 1-10 Hz range)
  - **Wave** settings (periodic wave flicker, not dominant in this demo):
    - Wave Amp: 0.000
    - Wave Freq: 5.00
    - Wave R Phase: 0.000
    - Wave G Phase: 0.000
    - Wave B Phase: 0.000
  - **Red Amp**: 1.000
  - **Green Amp**: 1.000
  - **Blue Amp**: 1.000
  - **Brightness**: 1.000
  - **Seed**: 0.123 (randomness seed for consistency across renders)
  
- **Levels adjustment** (Adjustment Layer #3):
  - Settings unreadable; appears to be used for contrast/brightness control during transition

- **Rg Magic Bullet** (optional color grading on Adjustment Layer #4 or separate):
  - Used for final color grade; specific settings unreadable

- **Layer timing**: Clips Comp 1 and Clips Comp 2 timeline placement shows an edit point where S_Flicker is most active during the transition

## Step-by-step as captioned
- 0:05 Intro: "LINK TO THE CLIP IN THE DESCRIPTION"
- 0:15-0:30 Layer setup showing context menu and layer hierarchy (Solids, Flicker exp, Clip Comp 2, Clip Comp 1, Clips)
- 0:35+ Right-click on layer to access menu options; pre-compose or create nested compositions
- 1:00+ Apply adjustment layers above the clip compositions
- 1:15+ Add **S_Flicker effect** to adjustment layer:
  - Effects > Sapphire > Distortion > S_Flicker (or Effects > S_Flicker)
  - Visible parameters panel shows Amplitude, Rand Luma Amp, Rand Color Amp, etc.
- 1:30+ Adjust parameters:
  - "AND SET THE AMPLITUDE TO 0" (caption shows fine-tuning Amplitude value)
  - Rand Luma Amp set to 5.000 for visible luminance flicker
  - Rand Color Amp left at 0.000 (for luminance-only flicker, no color shift)
- 1:50+ Wave parameters visible but all set to minimal values (Wave Amp 0.000, Wave Freq 5.00 but not audible in preview)
- 2:00+ Set Seed value (0.123) for reproducible randomness
- 2:15+ Timeline shows transition point; adjust clip timing so flicker peaks during edit point
- 2:30+ (Optional) Add Levels adjustment for contrast enhancement
- 2:45+ (Optional) Add Rg Magic Bullet for color grading (tool interface shown with lighting/exposure controls)
- 3:00+ Playback showing final transition: Clip 1 plays, flicker increases as Clip 2 begins, visual cut is masked by luminance flicker, flicker diminishes as Clip 2 stabilizes
- Final frames: result demonstration with smooth flickering transition between clips

## Numeric values
| Effect/Setting | Parameter | Value |
|---|---|---|
| S_Flicker | Amplitude | 0.5000 (instructed to set to 0 for tuning) |
| S_Flicker | Rand Luma Amp | 5.000 |
| S_Flicker | Rand Color Amp | 0.000 |
| S_Flicker | Rand Freq | unreadable (approx 2-5 Hz estimated) |
| S_Flicker | Wave Amp | 0.000 |
| S_Flicker | Wave Freq | 5.00 |
| S_Flicker | Wave R Phase | 0.000 |
| S_Flicker | Wave G Phase | 0.000 |
| S_Flicker | Wave B Phase | 0.000 |
| S_Flicker | Red Amp | 1.000 |
| S_Flicker | Green Amp | 1.000 |
| S_Flicker | Blue Amp | 1.000 |
| S_Flicker | Brightness | 1.000 |
| S_Flicker | Seed | 0.123 |
| Levels | Input/Output | unreadable |
| Project | Frame Rate | 29.97 fps |

## Layer structure (final)
Main Composition "flicker exp" (29.97 fps):
1. [Adjustment Layer #4] fx **S_Flicker** (Amplitude 0.5, Rand Luma Amp 5.0), fx Levels, fx Rg Magic Bullet (optional)
2. [Adjustment Layer #3] fx Levels
3. [Clip Comp 2] Nested composition (second clip segment)
4. [Clip Comp 1] Nested composition (first clip segment)
5. [Solids] Folder (may contain background or matte layers)

Sub-compositions:
- Clip Comp 1: contains Clip1 (AVI, 5MB) with motion/effects
- Clip Comp 2: contains Clip1 (duplicate AVI or different take, 5MB) with motion/effects

## Rebuild recipe (from scratch)
1. Import two video clips (Clip1 A and Clip1 B); both should be similar in content/framing for clean transition
2. Create a new composition in AE (29.97 fps or your target frame rate)
3. Create two nested compositions (Pre-compose):
   - Clip Comp 1: place Clip1 A, duration to first cut point
   - Clip Comp 2: place Clip1 B, start after cut point or with slight overlap
4. In main composition, layer both clip compositions:
   - Place Clip Comp 1 at time 0
   - Place Clip Comp 2 at the transition point (typically where Clip Comp 1 ends)
5. Create a new Adjustment Layer on top: Layer > New > Adjustment Layer
6. Apply S_Flicker effect:
   - Select adjustment layer
   - Effects > Sapphire > Distortion > S_Flicker (path may vary by Sapphire version)
   - In effect controls panel:
     - Amplitude: 0.5 (fine-tune; lower for subtle flicker, higher for intense effect)
     - Rand Luma Amp: 5.0 (main control for visible flicker; increase to 5-10 for noticeable effect)
     - Rand Color Amp: 0.0 (keep at 0 for luminance-only; increase to 0.5-2.0 if color flicker desired)
     - Rand Freq: 2-5 (frequency of flicker bursts per second; 2 = slower, 5 = faster)
     - Wave Amp: 0.0 (keep at 0 for this transition style)
     - Seed: 0.123 (or any value for reproducible randomness)
7. Position the effect:
   - Set adjustment layer to active only during transition (use in/out points or keyframe opacity)
   - Or keyframe Amplitude and Rand Luma Amp so flicker peaks at cut point and diminishes after
8. (Optional) Add Levels adjustment layer below S_Flicker:
   - Adjust Input Levels (shadows/highlights) for contrast boost during transition
9. (Optional) Add Rg Magic Bullet adjustment for color grading:
   - Match color temperature/tone of both clips for seamless transition
10. Preview and render. Fine-tune Rand Luma Amp (primary control), Amplitude, and timing to taste

**Key tuning**: Rand Luma Amp is the main visual driver. Higher values (4-8) create obvious flicker masking the cut; lower values (1-2) are subtle. Amplitude controls overall effect strength; set to 0 for isolated flicker effect. Seed should be consistent across renders (0.123 shown) for reproducibility. Position flicker peak at the exact cut point for most convincing transition mask.
