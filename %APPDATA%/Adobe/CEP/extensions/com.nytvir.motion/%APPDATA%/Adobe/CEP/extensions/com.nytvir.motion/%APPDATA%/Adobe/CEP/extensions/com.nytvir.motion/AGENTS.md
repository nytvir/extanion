# Nytvir Motion — Agent Guide

CEP extension for Adobe After Effects 2025. Owner: nytvir (Uzbek-speaking TikTok/IG motion editor). **Reply to the owner in colloquial Uzbek; write code/comments in English/ASCII.**

## Architecture

- `host/main.jsx` (~12k lines, ExtendScript) — the engine. One big command dispatcher near the top (`else if (cmd === "...") { _fn(); }`) + one function per tool appended below, grouped by kit with a version comment (e.g. `// PAPER SEARCH (v2.30)`).
- `client/index.html` — the panel UI. Tools are entries in one JS array of cards: `{id:'cmdName', tab:'pro', sec:'<section>', icon:'emoji', bg:'gradient', title:'...', desc:'uzbek description'}`. The `id` must equal the dispatcher `cmd`.
- Current version: v2.30. Each new tool/kit bumps the minor version.

## How to add a tool (exact ritual)

1. Append `function _myTool() { ... }` in `host/main.jsx` (before the SFX KIT section is fine), with a version comment.
2. Add `else if (cmd === "myTool") { _myTool(); }` to the dispatcher.
3. Add a card entry in `client/index.html` in the matching section.
4. Deploy: `robocopy D:\extanion-main %APPDATA%\Adobe\CEP\extensions\com.nytvir.motion /E /XD .git`
5. Commit: `vX.YZ: Tool Name - one-line description` (one version per commit). Push if network allows.

## Tool conventions

- Every tool: `app.beginUndoGroup("Name")` ... `app.endUndoGroup()` — one Undo reverts everything.
- Guard: active item must be a CompItem (`alert("Komp oching")` otherwise), check `comp.selectedLayers` when relevant.
- Build at CTI (`comp.time`), center on comp size (`comp.width/2`) — never hardcode 1080x1920.
- User-facing text via `prompt("Savol?", "default")` — the owner LOVES fully customizable tools.
- Text layers: ALWAYS `td.applyFill = true; td.applyStroke = false;` after `resetCharStyle()` (machine's character panel otherwise bleeds in). Font: `"Arial-BoldMT"` / `"ArialMT"`.
- Easing: global `AM_BOUNCE` expression string exists (AterMagics bounce) — apply to keyframed props for the house feel. Keyframe eases use influence 75/75 ("Soft Flow").
- Tag created layers with a bracket prefix (`[SRCH] pill`) so users can find/delete them.
- SFX library: `D:\edit\nytvir_sfx\` (plip1/plip2/plip_big/tick/tap/ding_pos/thud_neg/swoosh_in/swoosh_out/modal). `SFX_LIB` + `_sfxPlace()` already exist.

## ExtendScript landmines (each one cost us a broken build — do not relearn them)

1. Scripts run via `AfterFX.exe -r script.jsx` die SILENTLY on parse errors. Debug with an eval-wrapper: `try{$.evalFile(f)}catch(e){log("ERR line "+e.line+": "+e)}`.
2. Every standalone script starts with `app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);` and logs to a file with per-step flush (open/writeln/close each time).
3. `OR` is a reserved word even uppercase — never use it as a variable name.
4. Keep .jsx pure ASCII. Unicode via `\uXXXX` escapes only.
5. A comment starting `// @word` is a preprocessor directive → SyntaxError line 1. Never begin comments with `@`.
6. Layer timing: set `layer.startTime` BEFORE `inPoint`/`outPoint` (setting it after shifts in/out).
7. Scale animations on layers whose base scale != 100% must be RELATIVE (`b*0.62 → b*1.04 → b`), never absolute values.
8. `addProperty()` invalidates previously-fetched sibling property refs — re-fetch after adding.
9. Glow: matchName is `ADBE Glo2` (not Glow2); its Threshold is 0-255 scale.
10. `sourceText` with keyframes: set values then loop `setInterpolationTypeAtKey(k, KeyframeInterpolationType.HOLD)`.
11. Position `setValue` fails on keyframed props — read keys, remove, re-add.
12. NEVER rebuild/overwrite an .aep the owner has hand-edited. Patch existing layers in place (find by name); back up the file first.

## Owner's taste (rejections are expensive — respect these)

- LOVES: tactile UI mechanics with a satisfying payoff — sliders, toggles, gauges, steppers, physical objects (stamps, split-flap, coins), labeled row-cascades, digit rolls, typing carets, bounce/overshoot.
- HATES: brand-logo cards, emoji-as-metaphor, fake system chrome, static/flat mockups, oversized text (phone-first: keep type minimal), shortchanging on quantity ("give 15-20 examples, don't cheat me").
- Workflow is MOCKUP-FIRST: propose new tools as numbered HTML concept boards (CSS-animated live demos, dark board chrome, numbered cards continuing the global numbering — currently at 146). Build ONLY the numbers the owner picks. Never build unpicked concepts.
- Motion style: "Soft Flow" ease 75/75, AterMagics bounce on entrances, 4-frame dissolves, speed-graph peak at the cut (see D:\edit\nytvir_style\SAAS_TRANSITIONS.txt).

## Testing

Drive the open AE instance: write a jsx (prefs line + file logging), run `& "C:\Program Files\Adobe\Adobe After Effects 2025\Support Files\AfterFX.exe" -r script.jsx`, wait, read the log file. For visual checks create a `ZZ_test` comp, screenshot via saveFrameToPng, then delete the test comp. Never leave test debris in the user's open project.
