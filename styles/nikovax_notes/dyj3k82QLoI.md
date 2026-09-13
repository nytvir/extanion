# Lens Blur Transition (dyj3k82QLoI, 188 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: unreliable.
Plugins: **Lens Blur** (native AE effect, no third-party plugins required). BCC Color Correct or similar grading for optional color work shown mid-tutorial.
Project: 1920x1080, 29.97 fps. Two clips with a lens blur bokeh transition between them.

## Core idea
A lens blur effect applied to an adjustment layer creates a bokeh particle burst transition from one clip to another. By keyframing the Lens Blur parameters (Iris Scale, Scale X/Y, Gamma), the effect grows from subtle to overwhelming blur at the transition cut, creating an aesthetic "open/close" bokeh veil between clips. The effect simulates an out-of-focus camera iris with spherical bokeh particles.

## Effect chain / properties

**Adjustment Layer 1** (above both clips):
- **Lens Blur** (native AE effect):
  - Quality: Fast
  - Iris Scale: 0.0 (static, minimal iris effect)
  - Scale X: 100.0
  - Scale Y: 100.0
  - Gamma: **220.0** (keyframed: from 10 to 220 over transition; controls bokeh brightness/bloom)
  - View Iris: unchecked
  - Z Map: (not used)
  - Noise: (not visible/used)
  - Highlights: (not visible/used)
  - Post: (not visible/used)
  - Render Legacy Track: unchecked

**Keyframes on Adjustment Layer 1**:
- Gamma: 10.0 @ ~clip 1 end (before transition).
- Gamma: 220.0 @ transition cut (~frame 64 of 188 s = ~3:08).
- Gamma back to: 10.0 @ ~clip 2 start.
- (Iris Scale, Scale X/Y, Blur-Amount appear to have keyframes but exact values unreadable; visual effect shows iris particles expanding then contracting.)

**Optional**: BCC Color Correct or similar grading effect (shown in later portion of tutorial for color/exposure adjustment post-transition; values and specific effect unreadable).

## Step-by-step as captioned

SECTION 1: Setup & Intro (0:00-0:30)
- 0:00-0:05 Title: "LENS BLUR" (shown as blurred/bokeh effect on text).
- 0:05-0:10 Live-action footage: closeup face with "LENS BLUR" caption and bokeh background.
- 0:10-0:20 Caption: "TO THE CL..." / "THE DESTROYER OF WORLDS" — showing transition between text overlays using lens blur.

SECTION 2: AE Workspace & Effect Setup (0:30-1:30)
- 1:00 AE project visible: two clips (shot at 1920x1080, 29.97 fps); timeline shows "Adjustment Layer 1" at top.
- 1:10 Lens Blur effect applied to adjustment layer (shown in Effects & Presets panel or on layer).
- 1:15 Caption: "SET GAMMA TO 10" — initial gamma value shown as 10 (seen in properties panel on left; Gamma value highlighted showing ~10).
- 1:20 Comp playback shows golden bokeh particles bursting from center of frame outward (iris effect visible).

SECTION 3: Tweaking Effect Values (1:30-2:30)
- 1:35 Caption: "INCREASE THE VALUES".
- 1:40 Lens Blur properties panel visible on left side: Quality (Fast), Iris Scale (value unreadable), Scale X (100.0), Scale Y (100.0), Gamma (visible, being adjusted).
- 1:50 Playback shows intense bokeh particle bloom effect (gamma increased to brighten bokeh).
- 2:00 Caption: "SET GAMMA BACK TO (10)" — gamma dial showing reset.
- 2:10 Properties panel shows Gamma: value being reduced back down (unreadable exact value, but visually it's resetting).
- 2:20 Adjustment layer timeline shows keyframes set on Gamma parameter (visible as small diamond keyframe marks on timeline).

SECTION 4: Color Grading (Optional) (2:30-2:45)
- 2:35 Color exposure/grading panel opens (appears to be Camera Raw Filter or Color Correct UI).
- 2:40 RGB curves/scopes visible; color balance adjustments shown (unreadable exact values).
- 2:45 Playback: bokeh transition complete, then second clip shows with warm golden color tones from grading.

SECTION 5: Final Result (2:45-3:08)
- 3:00 Timeline shows final layer stack: Adjustment Layer 1 (Lens Blur + optional color grading), Clip 2 (at bottom), Clip 1 (hidden or trimmed).
- 3:05 Properties panel shows Lens Blur layer effects with keyframes on Gamma and other Iris parameters.
- 3:08 Playback: smooth transition from clip 1 (sharp) → bokeh burst lens blur effect (peak intensity at cut) → clip 2 (sharp again with warm color cast).

## Numeric values
| Parameter | Value | Notes |
|---|---|---|
| Quality | Fast | |
| Iris Scale | 0.0 (static) or unreadable | minimal iris contribution; keyframed but value unreadable |
| Scale X | 100.0 | |
| Scale Y | 100.0 | |
| Gamma start | 10.0 | at clip 1 end (~frame 0 of transition) |
| Gamma peak | 220.0 | at transition cut (~frame 64) |
| Gamma end | 10.0 | at clip 2 start |
| Blur-Amount | unreadable | keyframed (visible on timeline) but exact values not shown |
| Scale X/Y keyframes | unreadable | apparent dynamic scaling of bokeh (iris particles grow then shrink) |

Iris Scale and Blur-Amount keyframe values unreadable from on-screen display (approx. 0.0→2000.0+ based on visual intensity).

## Layer structure (final)
1. [Adjustment Layer 1] fx: **Lens Blur** (Gamma keyframed 10→220→10), optional fx: Color Correct/Grading (values unreadable)
2. [Clip 2] (bottom comp layer, revealed after transition blur clears)
3. [Clip 1] (middle, pre-composition or trimmed at transition point)
No matte/track mattes visible.

## Rebuild recipe (from scratch)

1. **Create composition** 1920x1080, 29.97 fps. Place two clips on timeline: Clip 1 (frames 0-64) and Clip 2 (frames 64+).

2. **Create Adjustment Layer** above both clips (right-click → New → Adjustment Layer), trim it to span the transition frames (~frame 50 to 80, centered on the cut at frame 64).

3. **Apply Lens Blur** to adjustment layer (Effects → Blur & Sharpen → Lens Blur, or search "Lens Blur"):
   - Quality: Fast
   - Iris Scale: 0.0
   - Scale X: 100.0, Scale Y: 100.0
   - Gamma: 10.0 (initial static value)
   - View Iris: off
   - Render Legacy Track: off

4. **Set Gamma keyframes** (primary animation):
   - Frame 50: Gamma 10.0 (before transition).
   - Frame 64 (cut point): Gamma 220.0 (peak bokeh bloom brightness).
   - Frame 78: Gamma 10.0 (after transition, back to subtle).
   - Apply Easy Ease (F9) to keyframes for smooth interpolation.

5. **(Optional) Keyframe Iris Scale or Blur-Amount** if visible iris particle expansion/contraction desired:
   - Similar timing to Gamma: start at 0, peak at ~200-2000 (unreadable; experiment), end at 0.
   - Easing: ease-in/ease-out for smooth bokeh burst and collapse.

6. **(Optional) Color Grading** on adjustment layer (apply BCC Color Correct or Camera Raw Filter after Lens Blur):
   - Warm up the second clip with Orange/Yellow color shift, raised Exposure, increased Gamma for warm cast.
   - Keyframe color values if they should transition with the bokeh effect.

7. **Preview and adjust**:
   - Gamma values (10 is subtle, 220 is extreme; experiment with range 50-300 based on taste).
   - Iris Scale or Blur-Amount (affects bokeh particle density and size).
   - Quality (Fast for preview, change to High for final render if needed).
   - Test on different clip pairs to ensure bokeh color (golden/orange in demo) works with your footage.

8. **Export**: Render comp with adjustment layer effect applied. Lens Blur will only affect the comp during the transition frames; both clips appear clear before/after transition point.
