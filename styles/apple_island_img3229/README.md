# Apple mini: Dynamic Island + clean captions (IMG_3229)

Minimal style for talking/voice reels: the video stays as shot, one line of thin captions at the bottom, and one small Apple-style element at the top. Built on 2026-09-15 for IMG_3229 ("what if tomorrow… because it does").

Preview: `preview.jpg` (top row: variant set at the "comfort off" beat, bottom row: heart-rate beat). Choice board with all 6 small UI variants: `ui_kichik.html` (variant 1 was picked).

## Pieces

| File | What it does |
|---|---|
| `cap_build.jsx` | Captions style 1 from a whisper word SRT (`-ml 1 -sow`). SegoeUI-Light 58 px, white, soft shadow, one line, sentences split on `. ? ! ,` and balanced into chunks of up to 32 characters. Fade 0.22 s + rise 12 px + blur 3→0. All captions parented to `[CAP] MOVE`. Forces 29.97 fps for iPhone clips that AE reads as 44.95. |
| `island_patch.jsx` | Adds the Dynamic Island to the captioned comp. Black pill 300→700 px wide at y 150, driven by one slider `[ISLAND] CTRL / v`. Beats: alarm 5:30, Comfort mode toggle turning off, Safety 100→0 %, Heart rate 68→142 BPM, Casual→All in, Day 1 Started. Everything under `[ISLAND] MOVE`. |
| `knob_fix.jsx` | Moves the toggle knob group to index 1. Shape groups added later render below earlier ones. |
| `icons/*.png` | 120 px transparent icon badges (accent at 15 % + line icon), used at 50 % scale. |

## Numbers (1080x1920)

- Pill: width `300+400*v`, height `78+34*v`, radius `h/2`, top 150, 1.5 px white stroke at 8 %, drop shadow distance 12 / softness 40.
- Content opacity `v^2.5`, pill opacity `min(1, 4v)`. In 0.5 s, out 0.4 s, eased 70.
- Icon badge centre `left+60`, title SegoeUI-Semibold 32 at `left+108`, value SegoeUI-Semibold 40 right-aligned at `right-30`.
- Accents: orange #FF9F0A, green #30D158, blue #0A84FF, red #FF453A, pink #FF375F, gray #8E8E93. Colour only on state (0 %, 142, All in).

## In Nytvir Motion (v2.43, section "S45 Apple Mini")

- 203 Dynamic Island: prompt `Title | value`, accent colour.
- 204 Island Toggle: prompt setting name; the switch turns off 1.7 s in.
- 205 Island Counter: prompt `Title | from | to | unit`, counts over 1.3 s and turns accent at the end.
- 206 Clean Captions: pick a whisper word SRT, builds the style-1 captions with `[CAP] MOVE`.

Each island tool starts at the current time indicator and adds its own CTRL and MOVE nulls, so several islands can live in one comp.
