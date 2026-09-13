# S_Shake Variations (3iRtdEkB9ds, 195 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: unreliable (music lyrics).
Plugins: **Sapphire S_Shake** (third-party BCC plugin required for core effect). S_BlurDirectional (optional Sapphire for variant 3).
Project: 1920x1080, 29.97 fps. Single anime clip with three effect variations demonstrated.

## Core idea
Three shake effect variations using Sapphire's S_Shake plugin. The tutorial shows a constant shake (V1, fixed amplitude), a dynamic shake (V2, keyframed amplitude via expression), and an optional directional blur variant (V3). Each is demonstrated on the same clip to compare aesthetic impact.

## Effect chain / properties

### Variation 1: Constant S_Shake (V1)
- **S_Shake** effect (Sapphire plugin):
  - Style: Normal
  - Amplitude: unreadable (approx 1.0)
  - Frequency: 6.00
  - Phase: 0.000
  - Z Dist: 1.000
  - Motion Blur: unchecked
  - Mo Blur Length: 1.000
  - Seed: 0.000
  - Wrap X: Reflect
  - Wrap Y: Reflect
  - X Shake, Y Shake, Z Shake, Tilt Shake: (parameter names visible, values unreadable)
  - Opacity: Normal (blend mode)
  - No keyframes; static effect throughout clip.

### Variation 2: Expression S_Shake (V2)
- **S_Shake** effect with expression-driven Amplitude:
  - Amplitude: **expression-controlled** (keyframed).
  - Keyframe 1: Amplitude 0.000 @ clip start (0 f).
  - Keyframe 2: Amplitude increases over clip duration (curve shown; non-linear ease-in).
  - Value graph shows gentle upward curve starting flat then rising through the clip.
  - All other S_Shake parameters match Variation 1.
  - Expression written on Amplitude (fx icon visible on parameter).

### Variation 3: Blur Directional (V3) - Optional
- **S_BlurDirectional** effect (Sapphire plugin):
  - Blur Amount: 156.00
  - Angle: 45.00
  - Shift: 0.000
  - Bias: 0.5000
  - Brightness: 1.000
  - Offset Darks: 0.000
  - Mix With Source: 0.0000
  - Edge Mode: Reflect
  - Filter: Box
  - Invert Matte: unchecked
  - Matte Use: Luma
  - Soft Borders: unchecked
  - Opacity: Normal
  - Show Blur Amount: checked
  - Show Angle: checked

## Step-by-step as captioned

STEP 1 (0:10-0:30)
- Intro: "WANT THIS?" title, showing three shake variations applied to anime clip.

VARIATION 1 (0:22-1:00)
- 0:22 Caption: "CONSTANT S_SHAKE" with Nikovax V1 label.
- 0:40 "ADD S_SHAKE TO THE CLIP (Sapphire plugin)".
- 0:50 Effects & Presets panel shown; S_Shake effect visible in Sapphire list on right panel.
- 1:00 "AND NOW (COPY THESE SETTINGS)" — effect properties panel displayed showing the constant shake settings above.
- Result playback: steady, consistent shake throughout clip (no amplitude variation).

VARIATION 2 (1:00-3:10)
- 1:02 "RESET IT" — preparing for expression-based variation.
- 1:10 Caption: "NOW FOR THE EXPRESSION SHAKE" with V2 label.
- 1:20 Same S_Shake effect, but now Amplitude will be keyframed.
- 2:00 "SET A KEYFRAME FOR THE AMPLITUDE" at clip start.
- 2:10 Amplitude value 0.000 @ 0 f visible in timeline panel.
- 2:20 "OPEN UP THE VALUE GRAPH" for Amplitude property.
- 2:30 Value graph editor shown; dragging curve upward to create ease-in shape (flat start, then rising curve).
- 2:40 Graph displays Y-axis gridlines (0 to ~100%+) and X-axis timeline. Curve: horizontal hold at 0, then smooth non-linear rise through the clip duration.
- 2:50 Caption: "INCREASE THE AMOUNT" as keyframe is adjusted (approx. frame ~64 pof, value unreadable but visible in graph).
- 3:00 Double-press U on clip to reveal all keyframed properties (caption: "DOUBLE PRESS U on the clip TO REVEAL IT").
- Result: shake amplitude builds over time, creating a crescendo effect (starts subtle, builds in intensity).

VARIATION 3 (3:10-3:45)
- 3:15 Caption: "INCREASE THE AMOUNT" — now showing Blur Directional effect addition.
- 3:20 Blur Directional (S_BlurDirectional) effect parameters displayed.
- 3:25 Blur Amount: 156.00 (as shown in properties panel).
- 3:30 Angle: 45.00 degrees.
- 3:35 Keyframe set for Blur Amount property over clip duration (similar growth curve to amplitude in Variation 2).
- 3:40 Timeline shows Blur Amount keyframes; final playback shows motion-blur directional streaking effect at 45° angle, intensity increasing over time.
- 3:45 Result: directional blur shake (combines S_Shake with directional motion blur, unreadable if second keyframe or static keyframe setup).

## Numeric values
| Variation | Effect | Parameter | Value | Notes |
|---|---|---|---|---|
| V1 | S_Shake | Style | Normal | |
| V1 | S_Shake | Amplitude | unreadable (approx 1.0) | |
| V1 | S_Shake | Frequency | 6.00 | |
| V1 | S_Shake | Phase | 0.000 | |
| V1 | S_Shake | Z Dist | 1.000 | |
| V1 | S_Shake | Motion Blur | unchecked | |
| V1 | S_Shake | Mo Blur Length | 1.000 | |
| V1 | S_Shake | Seed | 0.000 | |
| V1 | S_Shake | Wrap X | Reflect | |
| V1 | S_Shake | Wrap Y | Reflect | |
| V2 | S_Shake | Amplitude keyframes | 0.000 @ 0 f → unreadable final value @ clip end | Expression-driven; value graph shows ease-in curve |
| V3 | S_BlurDirectional | Blur Amount | 156.00 | |
| V3 | S_BlurDirectional | Angle | 45.00 | |
| V3 | S_BlurDirectional | Shift | 0.000 | |
| V3 | S_BlurDirectional | Bias | 0.5000 | |
| V3 | S_BlurDirectional | Brightness | 1.000 | |
| V3 | S_BlurDirectional | Offset Darks | 0.000 | |
| V3 | S_BlurDirectional | Mix With Source | 0.0000 | |
| V3 | S_BlurDirectional | Edge Mode | Reflect | |
| V3 | S_BlurDirectional | Filter | Box | |
| V3 | S_BlurDirectional | Matte Use | Luma | |

Amplitude keyframe value at clip end unreadable (approx. 0.5-2.0 based on curve height).

## Layer structure (final)
1. [jack za rp fx] — compound layer (anime clip + all three variations shown sequentially or separately).
2. Variation 1: [clip] + S_Shake effect (V1 settings).
3. Variation 2: [clip] + S_Shake effect (V2, expression on Amplitude, keyframes at 0 f and end).
4. Variation 3: [clip] + S_Shake effect (V1 settings) + S_BlurDirectional effect (Blur Amount keyframed).

No adjustment layers shown.

## Rebuild recipe (from scratch)

1. **Variation 1 (Constant Shake)**:
   - Add clip to comp.
   - Right-click clip → Apply Effects → Sapphire → Distortion → S_Shake.
   - S_Shake properties: Style = Normal, Amplitude = 1.0 (or test), Frequency = 6.00, Phase = 0, Z Dist = 1.0, Motion Blur off, Mo Blur Length = 1.0, Seed = 0, Wrap X/Y = Reflect.
   - Play and compare shake intensity; adjust Amplitude and Frequency as needed.

2. **Variation 2 (Expression-Driven Shake)**:
   - Duplicate clip (or create new comp instance).
   - Add S_Shake effect (same base settings as V1).
   - Click on Amplitude parameter → Alt-click the stopwatch to enable expression.
   - Set keyframes: Amplitude 0 @ clip start (0 f), then keyframe at end (value unreadable; estimate 1.5-2.0).
   - Open Value Graph (right-click keyframe row or Graph Editor panel).
   - Drag curve handles to create ease-in shape: flat hold at 0, then smooth non-linear rise into final keyframe.
   - Result: shake grows in intensity over clip duration.

3. **Variation 3 (Blur Directional Shake)**:
   - Duplicate clip (or new comp).
   - Add S_Shake effect (V1 settings).
   - Right-click clip → Apply Effects → Sapphire → Blur → S_BlurDirectional.
   - S_BlurDirectional properties: Blur Amount = 156.00, Angle = 45.00, Shift = 0, Bias = 0.5, Brightness = 1.0, Offset Darks = 0, Mix With Source = 0, Edge Mode = Reflect, Filter = Box, Matte Use = Luma.
   - Keyframe Blur Amount (optional): set keyframes at 0 f and clip end, apply ease-in curve similar to V2's amplitude.
   - Adjust Angle (45° is diagonal; experiment with other angles for different directional streaks).
   - Test playback; compare to V1 and V2.

4. **All variations**:
   - Ensure clip is trimmed and centered in comp.
   - Toggle each effect on/off to A/B compare.
   - Adjust Amplitude, Frequency, Blur Amount, and Angle to taste.
   - Note: Sapphire S_Shake Seed parameter randomizes shake pattern; change to cycle through variations.
