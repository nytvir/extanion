---
name: face-treatment-recipes
description: "Working ffmpeg recipes that turn the selfie half into drawing / pixel / print looks, plus the notebook 3D kit"
metadata:
  type: reference
---

Tested on his own 0910 frame; these are the exact chains that looked good, so they can be reproduced or ported to After Effects effects. Notebook duotone LUT used by most of them (paper #FDFAF0 / pen #23324A):
`lutrgb=r='35+(220*val/255)':g='50+(200*val/255)':b='74+(167*val/255)'`

- **Pen trace** (the strongest, and his own notebook language): `format=gray,gblur=sigma=0.6,eq=contrast=1.22,edgedetect=low=0.055:high=0.17,negate,<LUT>`. AE equivalent: Find Edges + Levels + Tint. Pushing the thresholds higher kills the hair, so keep them low.
- **Pencil shading**: the trace multiplied over a lifted gray version (`eq=contrast=0.85:brightness=0.30`).
- **1-bit dither** (also very on-brand): `-sws_dither bayer` with `format=gray,eq=contrast=1.35,format=monob,format=gray,<LUT>`.
- **Blueprint**: edgedetect then `eq=contrast=2.4:brightness=0.06` and a blue LUT. Without that contrast boost the lines are invisible.
- **Minecraft voxel**: `eq=contrast=1.25:saturation=1.35,scale=56:44:flags=area,` posterize `floor(val/34)*34+17`, `scale=...:flags=neighbor,drawgrid=w=10:h=10:t=1:c=black@0.26`. 40 columns was too mushy; 56 reads.
- **Game Boy**: 4-step gray then per-channel if-chains to #0f380f / #306230 / #8bac0f / #9bbc0f.
- **Halftone**: `geq=lum='if(lt(hypot(mod(X\,5)-2.5\,mod(Y\,5)-2.5),(1-p(X\,Y)/255)*3.1),0,255)'`. Cell 7 was too coarse.
- **Terminal ASCII**: `scale=86:40` raw gray, then map bytes through the ramp `@%#*+=-:. ` with `i=int((255-v)/256*n)+1` (bright = dense char) and render as a `<pre>`.
- **Failed**: per-pixel random stipple — the face disappears. Needs cell-based dots if ever revisited.

**Notebook 3D kit** (higgsfield 3D Jutsu project `426026ce-aa5c-4fb9-a81b-acd4656c8780`, revision 1): a blocky voxel avatar and a six-candle 3D candlestick chart, both in the notebook palette, Eevee, `film_transparent=True`. GLB cannot be imported into After Effects — the route is Blender render to a transparent PNG sequence, then an ordinary AE layer. Frame shots by measuring world bounds of the named objects rather than guessing camera distance; the first attempt cropped everything.

Related: [[f15-notebook-format]], [[ae-scripting-workflow]].
