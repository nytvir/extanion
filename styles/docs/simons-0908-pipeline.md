---
name: simons-0908-pipeline
description: "SIMONS_0908 reel SHIPPED 2026-09-08 — montage formula, file locations, new build lessons (#25-26)"
metadata: 
  node_type: memory
  type: project
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-09-08T12:31:25.871Z
---

**SIMONS_0908 (Jim Simons 51%/66% reel) — SHIPPED 2026-09-08, critic SHIP on v6.**

Files: D:\edit\simons_0908\ — SIMONS_FINAL.mp4 (delivered), simons_0908.aep (39 comp-markers, label-colored layers for user's manual keyframing), build1.jsx (full generator), markers.jsx, words_0908.srt (whisper -ml 1), img\ (10 B&W stills from Wikimedia w/ compliant UA "NytvirMotionStoryboard/1.0 (email)"), bed_cut.wav (user's track 233.2s+43.6s cut — drop lands at video 12.6s).

**Formula that got SHIP (reuse for story-reels):** 39 shots/44.5s, cuts word-locked to whisper; palette paper #F0EEE8 / ink #111417 / blue #2C3F8F only, all photos B&W, b-roll sat -55; 6 transition verbs: CUT/COUNT/ACC/PUNCH/BLUE/WHIP; 4-frame cross-dissolve on every cut (incoming bg opacity 0→100 over 0.13s, outgoing outPoint +0.16); Soft Flow 75/75 ease everywhere (user's plugin preset — he asked for it BY NAME from his GRAPH tab); odometer number cards + wiggle(0.5,2) so no card ever freezes (critic: "the $50-vs-$5000 tell"); staggered word-reveal on the music drop.

Board workflow that worked: storyboard as TIMELINE (16 cue rows × shot thumbnails with transition chips) — user rejected static per-scene boards, demanded reference's density. Scene text ENGLISH only; Uzbek only in my notes.

**New iron lessons (also in [[mistakes-log]]):**
- #25 AE stills: set layer.startTime BEFORE inPoint/outPoint — setting startTime after SHIFTS in/out (all stills rendered off-time; videos were fine because vidShot set startTime first).
- #26 popIn/scale animations on layers with non-100% base scale must be RELATIVE (b*0.62→b*1.04→b) — absolute [62..100] blew 240px inset thumbs to full-frame.
- Wikimedia 429 fix: UA "AppName/1.0 (contact email)" per bot policy; /thumb/ URLs may 400 — use original upload URL.
- ffmpeg ametadata file= path with colon breaks filtergraph — Push-Location and use relative filename.
- Music "yaxshi joyi": ebur128 momentary envelope → pick break-before-drop so drop lands on the video's thesis beat; bed gain -19.4dB vs -25dB (user couldn't hear -25).
- Master: alimiter 0.79 still hit -0.0 dBTP after AAC — final volume -1dB pass (critic note).
