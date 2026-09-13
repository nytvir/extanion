---
name: ae-scripting-workflow
description: "Proven workflow for driving the user's open After Effects instance via scripts"
metadata: 
  node_type: memory
  type: project
  originSessionId: 84770df0-8738-43b2-b73d-9c13370561f9
  modified: 2026-08-16T13:46:50.249Z
---

Working method for controlling the user's open AE 2025 session:

1. Write ExtendScript (ES3, no let/arrow) to scratchpad as .jsx
2. Run: `& "C:\Program Files\Adobe\Adobe After Effects 2025\Support Files\AfterFX.exe" -r "<script>"` — forwards to the running instance
3. Script writes a log file (File.open("a")) to scratchpad; wait ~10-14s then read it
4. Verify visually with `comp.saveFrameToPng(t, file)` and Read the PNG; send previews via SendUserFile

**Why:** alerts/returns are invisible from CLI; log + frame render is the only reliable feedback loop.

**RENDER PIPELINE (2026-08-15, the reliable one):** saveFrameToPng dies after the first 1-2 script runs of an AE GUI session (logs ok, writes nothing — delete target PNGs first so `pngFile.exists` is meaningful). The robust path: `app.project.save(File(temp.aep))` → `aerender.exe -project temp.aep -comp "X" -s N -e N -RStemplate "Best Settings" -OMtemplate "Photoshop" -output out_[#].psd` ("PNG Sequence" template does NOT exist) → ffmpeg psd→png → Read. Also: AE caches $.evalFile per session — editing a jsx and re-running -r may execute the OLD compiled version (island bug haunting); bust by copying to a NEW filename. To see the user's raw footage fast without AE: get footage path from project, `ffmpeg -ss T -i src -frames:v 1` — used to find face position before designing overlays. REAL 3D: extrusion setValue is blocked under "ADBE Advanced 3d" but works under "ADBE Ernst" (Cinema 4D renderer); shape addProperty invalidates sibling refs (configure rect fully before adding fill); missing glyph (₿ in Arial) makes text-layer geometry hidden.

**How to apply / gotchas:**
- Glow effect matchName in AE 2025 is `ADBE Glo2` (NOT "ADBE Glow2" — that fails). User's own plugin code tries ADBE Glow2 first, which errors.
- Set `app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1)` at script start to allow file writes.
- Cyrillic/non-ASCII text in .jsx: use \uXXXX escapes to avoid encoding issues.
- Wrap everything in try/catch + beginUndoGroup so one Ctrl+Z reverts.
- Prefix generated layers ([Cine], [Sub]) so re-runs can find/remove them.
- Pattern used: "[Cine] MASTER" null with Slider Controls (Bloom/Vignette/Grain) driving effect values via expressions.
- **Plugin deploy:** the installed extension is a COPY at `C:\Users\nytvi\AppData\Roaming\Adobe\CEP\extensions\com.nytvir.motion` — after editing D:\extanion-main, ALWAYS copy client/index.html + host/main.jsx there, then user reopens the panel (or restarts AE). Editing the repo alone changes nothing in AE.
- **Full project dump tool:** `dump_project.jsx` (rewritten each session in scratchpad) iterates every comp/layer/effect/text/animator in the whole project and writes one readable text file — far better than piecemeal inspection scripts. Use this FIRST whenever asked to "study"/"understand" a project or file. Cannot read .aep binaries directly (proprietary format) — must open in AE and dump via script.
- **Opening a specific .aep by path:** `app.open(new File("D:/path/project.aep"))` then run the dump. If the project has missing fonts, AE blocks on a "Resolve Fonts" modal dialog that silently stalls the whole `-r` script (output file just doesn't update, no error) — detect via enumerating window titles for the AfterFX process (Win32 EnumWindows) and dismiss with AppActivate + SendKeys("{ENTER}") before retrying.
- **valueAtTime() is unreliable for scripted verification of expressions on properties with only a static value (no keyframes)** — it can report the unchanged base value at every sampled time even though the expression runs correctly at render. Don't trust it as proof of a working/broken expression. The only trustworthy check is an actual `saveFrameToPng` render — if the effect is subtle, temporarily crank the expression's amplitude/intensity way up so it's unmistakable in a screenshot, then revert.
- **Literal-copy pattern (not rebuild):** when the user points at something ALREADY WORKING in a reference project and says "copy this," don't reverse-engineer/rebuild it from scratch — duplicate the real comp (`comp.duplicate()`), trim with `workAreaStart`/`workAreaDuration` (read back `workAreaStart` after setting it — AE snaps it to the nearest frame, so compute `workAreaDuration` from the ACTUAL snapped value + 1 frame margin, not the requested one, or it throws "out of range"), then `app.executeCommand(app.findMenuCommandId("Trim Comp to Work Area"))`. To make that exact comp insertable into ANY future project (not just this one), import the source .aep with `ImportOptions.importAs = ImportAsType.PROJECT` — this pulls all its comps/footage in as items without needing the source project open as the main document, then `comp.layers.add(importedCompItem)`.
- **BOUNCr Universal** (v2.7, host/main.jsx `_bouncrApply`): reverse-engineered from a reference project (D:\ae projects\nitor\UI Bounce Animation.aep) — 4 Slider Controls (Amplitude/Frequency/Decay/Floor) + expression `s = amp*cos(freq*t*2π)/exp(decay*t)` added to `value` on Position/Scale/Rotation. This is the general "spring bounce" recipe — reuse for any future bounce-related ask instead of re-deriving.
Related: [[user-profile]], [[current-projects]].
