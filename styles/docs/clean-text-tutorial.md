---
name: clean-text-tutorial
description: "Deep study of \"Clean Text Animation\" tutorial (5 presets + exact expressions) for plugin implementation"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-08-11T03:12:16.203Z
---

Source: "How_to_Make_Clean_Text_Animation_in_After_Effects_FREE_Presets.mp4" (Telegram Desktop, 15min, AE 2024 mac, studied 2026-08-08). Author uses BOUNCr/Presetify/Flow/TextExploder panels but core recipes are plugin-free.

**5 presets taught:** 1-Bouncy Text (Expression), 2-Colorfull Text Fade out, 3-Mix (=1+2 combined), 4-Typewriter, 5-Snap Text.

**KEY TECHNIQUE — Expression Selector bounce (preset 1, the core):** Text Animator property (e.g. Scale offset) + **Expression Selector** (not Range Selector); the per-character stagger + bounce lives in the selector's **Amount** expression:
```
delay = .020;                       // variants: .05 / .060
myDelay = delay*textIndex;          // per-char stagger
t = (time - inPoint) - myDelay;
if (t >= 0){
  freq = 7;                         // variants: 3 / 2
  amplitude = 50;
  decay = 7.0;                      // variants: 2.0 / 5 / 9
  s = amplitude*Math.cos(freq*t*2*Math.PI)/Math.exp(decay*t);
  [s,s]
}else{ value }
```

**Expression 2 (overshoot settle, from notes):**
```
freq = 2; decay = 9; duration = 0.10;
retard = textIndex*thisComp.frameDuration*1;
t = time - (inPoint + retard);
startVal = [100,100,100]; endVal = [0,0,0];
if (t < duration){ linear(t,0,duration,startVal,endVal); }
else{ amp = (endVal - startVal)/duration; w = freq*Math.PI*2;
  endVal + amp*(Math.sin((t-duration)*w)/Math.exp(decay*(t-duration))/w); }
```

**Clean rise (first Hello World demo):** Animator = Position [0,28] + Rotation +33° + Opacity 0 + Scale 0; Range Selector Advanced: Based On=Words, Shape=Square, Smoothness 100, Ease 0/0; animate Start/Offset. Slight per-char blur visible during entry.

**Multi-word cascade section (~12min):** TextExploder (mamoworld) splits sentence into per-WORD layers (Split into: Words, Delete original, Bottom to Top), all parented to a Null, layers staggered a few frames each in timeline — used for line-by-line sentence builds. Can replicate without plugin: script splits text into word layers + stagger + parent null.

**Preset browser section (~13-14min):** saves each animator as .ffx (Animation Presets), names seen: "Slide Up By Word", "Fade In/Out", "Scale & Rotation", "Position+G" — user's plugin equivalent = our txPro/Caption systems.

**Not yet read in full detail:** exact param screens of Colors (fill color per-char then fade ~7:30), Mix (notes say = bounce+colors combined), Typewriter (~10:40-11:30), Snap Text (~11:40-12:30) — re-extract frames at those timestamps if implementing precisely.

**Implementation plan for Nytvir Motion:** add txPro13 "Char Bounce" (expression selector recipe above), txPro14 "Overshoot Settle" (expression 2), txPro15 "Clean Rise" (words rise+rotate). Related: [[amv-reference-style]], [[current-projects]].
