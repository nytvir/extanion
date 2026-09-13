---
name: trading-style-pipeline
description: Reusable end-to-end recipe for the approved trading-video UI style — script at D:\edit\nytvir_style\STYLE_PIPELINE.jsx
metadata: 
  node_type: memory
  type: project
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-08-30T21:52:45.855Z
---

The user's approved editing style (built Aug 2026 on trading_check.aep / IMG_2594) is captured as a config-driven ExtendScript: **D:\edit\nytvir_style\STYLE_PIPELINE.jsx** + README.txt beside it. SFX live in **D:\edit\nytvir_sfx\** (synthesized plip/swoosh/ding/thud/modal/tick).

For a new video in this style: fill the CONFIG block (comp name, widget/insights/crash timings+texts, sfx list, music layer prefix), master narration with the ffmpeg loudnorm one-liner from README, run the script once — it builds captions pass (Segoe UI Light single-line autosize), frosted-glass widgets (real blur via track matte), Insights screen, red crash screen + modal, push-through exits with video kick, SFX placement, and music bed with fades/ducks. Targets: mix I −14..−17 LUFS, peak ≤ −1 dBFS.

Style DNA: bg #0e0e10, panels #1a1a1d, iOS red/green/teal accents, Arial for UI text, 88% screen scale, fade+0.7s spring (influence 80), glow only on hero numbers, whoosh+duck on exits.

**CHART_EXPLAINER.jsx** (same folder, 2026-08-31): config-driven generator for the neon chart-explainer style (reference e61359...mp4): continuous candle chart + [NEO] CAM follow camera + bounce recipes (candles 10→109→96→100, circles 175→90→106→100, texts 92→103→100) + gold/teal/purple annotation beats (hline/strike/circle/circleLow/label/dollar/boxOutline/zone/chip/arrow/flash) + auto precompose "CHART ZONE" with clip mask + butter captions (rise+blur-in). Camera keys are set LAST (parent-trap safe). For a new video: get SRT → fill candles.times + beats with narration timestamps → run. Style rule learned: **Apple-UI edits = no bounce (user calls pops "bachkana"); chart-explainer edits = bounce required** — two different vocabularies, don't cross them.

Related: [[mistakes-log]], [[ae-scripting-workflow]], [[current-projects]].
