# Eyes Rays Glow (VDKRtH4Co1U, 117 s)

Voiced: no voiceover (music only). Whisper result: see bottom.
Plugins: CC Light Rays (native AE, in CC suite). Glow effect (native AE).
Project: 1920x1080, 29.97 fps. Single shot (animated wolf character) with red glowing eyes.

## Core idea
Apply two effects stacked to an adjustment layer or clip to create glowing eyes with radiating light rays. First, a Glow effect brightens and spreads the light. Second, CC Light Rays radiates visible rays from the bright areas (specifically the eyes). The combination creates a supernatural "evil eyes" look with dramatic light rays emanating outward.

## Effect chain / properties
- **Glow effect** (first): Applied to create soft glow around bright areas.
  - Center: **unreadable (approx 1920, 2700-2900)**
  - Intensity: **unreadable (approx 10.0)**
  - Radius: **6830**
  - Weary Softness: **unreadable (approx 4800-6000)**
  - Shape: **Round**
  - Color from Source: **ON**
  - Glow Brightening: **ON**
  - Transfer Mode: **Add**

- **CC Light Rays effect** (second): Adds radiating light rays from bright areas.
  - Center: **1942.26814, unreadable (approx 2700)**
  - Radius: **6830**
  - Weary Softness: **unreadable (approx 4800-6000)**
  - Shape: **Round**
  - Color from Source: **ON**
  - Glow Brightening: **ON**
  - Transfer Mode: **Add**
  - Intensity: **unreadable (approx 10.0)**

## Step-by-step as captioned
SETUP & PREVIEW (0:00-0:30)
- 0:05-0:10 Demo shown: wolf character with red glowing eyes, light rays emanating outward in cool/warm colors (blue-purple on left, pink-red on right).
- 0:15 "LINK TO CLIP IN DESC" - Reference to source clip in video description.

GLOW EFFECT APPLICATION (0:30-1:00)
- Tutorial demonstrates Glow effect being added to composition.
- Center point placed on character (approx 1920, 2850 - center of composition 1920x1080).
- Radius set to large value (~6830) to spread glow across character.
- Weary Softness adjusted to create soft falloff.
- Shape: Round (circular glow spread).
- Color from Source and Glow Brightening enabled to use bright colors from source.
- Transfer Mode: Add (additive blend, brightens underlying pixels).

CC LIGHT RAYS APPLICATION (1:00-1:50)
- CC Light Rays effect added on top of Glow.
- Center positioned on character's eyes area (coordinate shown: 1942.26814, Y unreadable).
- Radius also ~6830 (matching glow).
- Same settings: Shape Round, Color from Source ON, Glow Brightening ON, Transfer Mode Add.
- Intensity adjusted to control ray strength and visibility.
- Effect creates visible rays radiating from the bright glow (especially the eyes).

RESULT & COMPARISON (1:50-2:00)
- Before/after shown: plain character -> character with glowing eyes and radiating light rays.
- Rays visible as light streaks in colors matching the glow colors.

## Numeric values
| Effect | Property | Value | Notes |
|---|---|---|---|
| Glow | Center X | unreadable (approx 1920) | Composition center |
| Glow | Center Y | unreadable (approx 2700-2900) | Slightly below center |
| Glow | Radius | 6830 | Large spread across character |
| Glow | Weary Softness | unreadable (approx 4800-6000) | Controls softness falloff |
| Glow | Shape | Round | Circular glow |
| Glow | Color from Source | ON | Use source colors |
| Glow | Glow Brightening | ON | Enhance bright areas |
| Glow | Transfer Mode | Add | Additive blending |
| CC Light Rays | Center X | 1942.26814 | On/near character center |
| CC Light Rays | Center Y | unreadable (approx 2700-2850) | Approx character eye level |
| CC Light Rays | Radius | 6830 | Matches glow for consistency |
| CC Light Rays | Weary Softness | unreadable (approx 4800-6000) | Matches glow |
| CC Light Rays | Shape | Round | Radial rays |
| CC Light Rays | Color from Source | ON | Use glow colors |
| CC Light Rays | Glow Brightening | ON | Enhance ray brightness |
| CC Light Rays | Transfer Mode | Add | Additive blending |
| CC Light Rays | Intensity | unreadable (approx 10.0) | Ray strength control |

Many values unreadable due to small text in Effect Controls panel. Approximate values based on visual comparison and common glow/ray settings.

## Layer structure (final)
- [Adjustment Layer or Comp] with:
  - Glow effect applied
  - CC Light Rays effect applied (stacked on top)
- [Source clip] (wolf character)

Both effects apply to adjustment layer OR directly to clip layer (unclear from frames, likely adjustment layer for non-destructive editing).

## Rebuild recipe (from scratch)
1. Bring in clip with character (in this case, wolf animation).
2. Create an Adjustment Layer above the clip (Layer > New > Adjustment Layer).
3. On the adjustment layer, add Glow effect: Effects > Light and Shadow > Glow (or Effects > Channel > Glow).
4. Set Glow properties: Center at character position (~1920, 2850); Radius ~6830; Shape Round; Color from Source ON; Glow Brightening ON; Transfer Mode Add.
5. Adjust Weary Softness to taste (visual feedback; approx 4800-6000 based on tutorial).
6. Add CC Light Rays effect on top: Effects > Light and Shadow > CC Light Rays.
7. Set CC Light Rays: Center same as Glow (~1942, 2850); Radius ~6830; Shape Round; Color from Source ON; Glow Brightening ON; Transfer Mode Add; Intensity ~10.
8. Fine-tune both effects for desired glow and ray intensity.
9. If effects need to follow character motion, add position keyframes to center values (not shown in tutorial, assumes static camera).

---

## Transcription note
No audio transcript (music + on-screen captions only). Steps inferred from visual demonstration of effect application in After Effects UI. Many numeric values unreadable from panel text due to resolution/contrast; listed as "unreadable (approx X)" with best-guess range.
