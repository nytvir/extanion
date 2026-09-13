---
name: f15-notebook-format
description: "F15 DAFTAR format — notebook-page video style: seam tape caption strip, locked palette, exact audio-mix numbers"
metadata:
  type: reference
---

The user's F15 "DAFTAR" (notebook) video format. Built comp `FLIP_0910_F15` 1080x1920 @30fps; generator `D:\edit\flip_0910\build_f15.jsx` (NEVER re-run it — he hand-edits the .aep; see [[mistakes-log]] rule #29, patch named layers only).

Layout: paper occupies the top 56% (y 0-1075), selfie video the bottom. Palette PAPER #FDFAF0, PEN #23324A, RED #D2483C, HL #FFE94A, GRN #3C8F5C, RULE #5C84B6. Fonts InkFree (headline) and SegoePrint (body/captions).

**Caption at the seam (he picked this, UI #1 "Skotch lenta").** Captions no longer sit over his face. A full-width shape layer `[CAP] tape` (1080x132, fill #F1E6C9 at 96%, Drop Shadow dist 18 soft 34, scale-X 0->100 over 0.15-0.55s) sits just above `[VID] selfie`; the 13 caption layers move onto it. Caption spec: SegoePrint 42px, PEN fill, drop-shadow opacity 0, max width 940 (auto-split to 2 lines at the middle word), centred vertically by `TAPE_CY - (rect.top + rect.height/2)` from `sourceRectAtTime`. The old decorative `[PG] tape` (600x42) is set to opacity 0. Patch script: `D:\edit\patch_tape2.jsx`.

**Audio mix he accepted** (and he asked for it INSIDE the .aep, not at render time — see below) (voice must clearly dominate): voice stem loudnorm I=-16; music stem loudnorm I=-16 then `volume=-11dB` with highpass 70, EQ notch 1.2 kHz -3 and 2.5 kHz -5, fade in 1.4s / out 0.6s at the end; `sidechaincompress=threshold=0.05:ratio=4:attack=10:release=320` keyed off the voice; master `loudnorm=I=-14:TP=-1.2`. Result: music integrated about 18 dB under the voice, clearly audible in gaps, adds under 0.5 dB during speech.

Related: [[wyk-split-format]], [[editing-preferences]], [[motion-critic-gate]].

**Music lives inside the project, not in the render step.** He explicitly asked for this ("bu projectga joylachi bu video qilmasdan"). AE has no sidechain, so the EQ + ducking are baked into a WAV and AE just plays it at 0 dB:
1. key = comp render, `loudnorm=I=-16` (the sidechain key only).
2. bed = music `-ss 40 -t 38`, highpass 70, EQ notch 1.2k -3 / 2.5k -5, `loudnorm=I=-16`, then `volume=-19.8dB`, fades 1.4s in / 0.6s out, then `sidechaincompress=threshold=0.05:ratio=4:attack=10:release=320` against the key. Lands at about -43.9 LUFS, which is ~19 dB under the comp's native narration (-24.9 LUFS).
3. Import as `[MUS] bed`, `moveToEnd()`, Audio Levels 0 dB, in 0 to comp end. Patch script `D:\edit\patch_music.jsx`; bed file `D:\edit\flip_0910\MUS_bed_f15.wav` (moving the file breaks the link).
The -11 dB figure above is for the render-time mix; -19.8 dB is the in-project figure. Same final balance, different reference level.

**Apple-minimalist layout rules** (shown to him as a method board, pick still open): one left rail x=150; four type sizes only (96 / 52 / 42 / 28), auto-shrink when a line exceeds the column; three vertical slots 180px apart (y 300 / 480 / 660); margins left 150, right 110, top 190, paper bottom 65; caption safe zone max 940px wide, one size, never three lines; exactly one yellow highlight per frame.
