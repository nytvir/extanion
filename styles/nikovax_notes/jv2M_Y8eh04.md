# BCC Ripple Turbulent (jv2M_Y8eh04, 211 s)

Voiced: no voiceover (music + on-screen captions). Whisper result: unreliable.
Plugins: **BCC Ripple Turbulent** (Sapphire/BCC third-party effect required). No native AE equivalent.
Project: 1920x1080, 29.97 fps. Single anime clip with ripple distortion effect applied to adjustment layer.

## Core idea
BCC Ripple Turbulent creates concentric ripple waves emanating from a center point, with turbulent (organic, noise-based) distortion instead of smooth circular waves. The effect simulates water ripples or shockwaves. By keyframing the Turbulent Height parameter, the ripple intensity grows and shrinks, creating a pulsing wave effect.

## Effect chain / properties

**Adjustment Layer 1** (applied over clip):
- **BCC Ripple Turbulent** (Sapphire plugin):
  - Center Point: **113.4, 422.6** (approx; visible in properties)
  - Turbulent Height: **40.0** (keyframed; increases to ~1150.0 at peak)
  - Wave Width: unreadable (approx 100)
  - Speed: **100** (wave propagation speed)
  - Phase: unreadable (approx 0)
  - Wave Radius: unreadable
  - Falloff: **0.0** (hard edge ripple)
  - Light Level: **500** (brightness/reflection of wave)
  - (Many additional parameters visible in panel but unreadable: Current Non-Square Pixels, Process Alpha Only, Radius, etc.)

**Keyframes**:
- Turbulent Height: **40.0** @ start → **1150.0** (or higher) @ mid-clip → **40.0** @ end (creates pulsing ripple growth/decay).
- Visual effect: circular wave pattern grows from center outward, then diminishes.

## Step-by-step as captioned

INTRO (0:00-0:20)
- 0:00 Title: anime character with text overlay "MAJI NIKO" (effect demo title).
- 0:10 Comp setup shown: layers panel displays "goji clip" and "bcc ripple" layers; timeline visible.

EFFECT SETUP (0:20-1:00)
- 0:30 Adjustment Layer 1 selected; BCC Ripple Turbulent effect applied (visible in effects list).
- 0:40 Properties panel on left shows effect parameters: Center Point (113.4, 422.6), Turbulent Height (40.0), Wave Width (unreadable), Speed (100), etc.
- 0:50 Playback: subtle circular ripple pattern visible emanating from center of character's chest.

PARAMETER ADJUSTMENT (1:00-1:30)
- 1:05 Caption: "SET THE VALUE TO (1150)" — referring to Turbulent Height parameter.
- 1:10 Visual overlay: circular guide rings shown on image indicating ripple center and wave radius.
- 1:15 Turbulent Height value is increased (visible in properties; target is 1150 based on caption).
- 1:20 Playback: intense ripple distortion visible; wave pattern becomes much more pronounced with higher turbulence.

KEYFRAME SETUP (1:30-2:00)
- 1:35 Timeline shows keyframes set on Turbulent Height parameter (visible as diamond markers).
- 1:40 Caption: value adjusted back down at clip end (returning to baseline).
- 1:50 Playback: ripple effect pulses in and out over clip duration, creating dynamic distortion.

VARIATION SHOWN (2:00-3:00)
- 2:10 Different Center Point position tested (value shown: 892.577, approx).
- 2:20 Wave Width parameter adjusted (unreadable exact value).
- 2:40 Light Level modified (affects reflection brightness of ripple).
- 3:00 Final result: ripple effect at various settings demonstrated on clip.

## Numeric values
| Parameter | Value | Notes |
|---|---|---|
| Center Point X | 113.4 (or ~892.577 variant) | position of ripple origin |
| Center Point Y | 422.6 | position of ripple origin |
| Turbulent Height start | 40.0 | base ripple amplitude |
| Turbulent Height peak | 1150.0 | (approx; from caption "SET TO 1150") |
| Turbulent Height end | 40.0 | returns to base |
| Wave Width | unreadable (approx 100) | |
| Speed | 100 | wave propagation velocity |
| Phase | unreadable | |
| Wave Radius | unreadable | ripple outer boundary |
| Falloff | 0.0 | hard edge (no gradient fade) |
| Light Level | 500 | reflection brightness |

Turbulent Height keyframe value (1150) unreadable from code but visible as on-screen caption.

## Layer structure (final)
1. [Adjustment Layer 1] fx: **BCC Ripple Turbulent** (Turbulent Height keyframed 40→1150→40)
2. [goji clip] (underlying clip layer)

No track mattes or additional effects visible.

## Rebuild recipe (from scratch)

1. **Create composition** 1920x1080, 29.97 fps. Place clip on timeline.

2. **Create Adjustment Layer** above clip (right-click → New → Adjustment Layer), trim to clip duration.

3. **Apply BCC Ripple Turbulent** (Effects → BCC Distortion → Ripple Turbulent, or search Sapphire library):
   - Center Point: 960, 540 (center of comp; adjust to target area).
   - Turbulent Height: 40.0 (initial, subtle ripple).
   - Wave Width: 100 (default).
   - Speed: 100 (or adjust for slower/faster wave propagation).
   - Falloff: 0.0 (hard edge).
   - Light Level: 500 (reflection brightness; adjust 0-1000+).

4. **Set Turbulent Height keyframes**:
   - Frame 0: Turbulent Height 40.0.
   - Frame ~60: Turbulent Height 1150.0 (peak distortion).
   - Frame ~120 (end): Turbulent Height 40.0.
   - Apply Easy Ease (F9) for smooth interpolation.

5. **Adjust Center Point** to position ripple origin on a focal point of your clip (e.g., character's chest, eye, center of action).

6. **Preview and refine**:
   - Turbulent Height: 40 = subtle, 1150+ = extreme; experiment with range based on clip.
   - Speed: lower = slower wave expansion, higher = faster.
   - Wave Width: affects ripple crest width.
   - Light Level: brighter reflection = more visible waves.

7. **Render**: Effect applies to adjustment layer, distorting the entire clip per keyframes.
