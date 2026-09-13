---
name: wyk-split-format
description: "User's OWN signature video format — split screen (live chart top, selfie bottom), extracted from wyk_spring.aep"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-09-11T04:15:22.525Z
---

**The user's signature trading-video format.** Full recipe: `D:\edit\nytvir_style\WYK_FORMAT.txt`. Source project: `D:\edit\wyk_spring.aep` (comp WYK_0901, 1080x1920, 49.4s, 30fps). When he says "mening formatim" / "shundan qilgan format", this is it.

Structure: two halves driven by nulls `[CTRL] CHART yarmi` (top) and `[CTRL] VIDEO yarmi` (bottom), a glowing `[NEO] Divider` between them, a `CHART ZONE` precomp (89 layers, everything parented to a `[NEO] CAM` null for camera moves), the selfie .mov on the bottom, a `[Cap] N` text layer per SRT cue, plus music and per-beat SFX.

Look: black chart with faint grid, neon candles (green #22E24F / red), dashed level lines with labels. Font is **SegoeUI-Light everywhere**. Captions white 32-50px at y≈1800, animated Position 1816→1800 + opacity + **Gaussian Blur blur-in**. Chart labels carry meaning by color: cyan #59D6FF = concept, green #21E34F = positive, salmon #FF8073 = risk/retail, white = neutral — all with Deep Glow. Beat accents are flash shapes (scale 55→185, opacity 0→88→0 over 0.6s, Glow).

Related: [[simons-0908-pipeline]] (montage formula), [[saas-transitions]].
