---
name: saas-transitions
description: "SaaS video top-3 transition formula (match cut + null zoom 115%, UI morph Size pairs 118/82, mockup continuity) — studied 2026-09-10"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-09-09T19:29:27.382Z
---

Full recipe: D:\edit\nytvir_style\SAAS_TRANSITIONS.txt. Source video: D:\ae 2025 disk chache\yRyLdrHcel3HkUn2HxXx+VAk5lMgzdl0.mp4 (4:17 tutorial "Best Transitions to Use in SaaS Video").

Core law: **speed graph peaks EXACTLY at the cut point** (mountain shape, not V) — this single rule powers all three transitions.

1. **Match cut + null zoom**: one UI object stays fixed across the cut; null above all layers, parent object to it, scale keys a few frames before→after cut to ~115%, peak-at-cut speed graph.
2. **UI morph**: never path-morph one shape — use TWO layers cut at the transition; keyframe rectangle SIZE (not Scale; Constrain Proportions OFF so corner radius survives); outgoing +10-20% on one axis into the cut, incoming starts -10-20% and settles (seen values 118%/82%).
3. **Mockup transition**: moving UI continues INSIDE a device frame; speed/direction/timing unchanged through the cut.

Plugin tool ideas (not yet built): "Match Cut Zoom" (auto null+parent+115%+graph), "UI Morph Pair" (two selected shapes get paired Size keys+graph). Related: [[simons-0908-pipeline]], [[clean-text-tutorial]].
