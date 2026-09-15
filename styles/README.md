# Nytvir styles — reusable AE recipes

Every style is a config-driven ExtendScript (run with `AfterFX.exe -r script.jsx`, see docs/ae-scripting-workflow.md).

| Style | Where | Live example |
|---|---|---|
| WYK split (own signature: live chart top / selfie bottom) | docs/wyk-split-format.md, nytvir_style/WYK_FORMAT.txt | D:\edit\wyk_spring.aep |
| PTJ / Neon Chart V2 (sharp candles, continuous spawn, breathing cam) | nytvir_style/NEON_CHART_V2_build.jsx, _full.jsx | D:\edit\ptj_math.aep |
| Chart Explainer (candles + follow cam + bounce annotations) | nytvir_style/CHART_EXPLAINER.jsx | D:\edit\smc_liquidity.aep |
| Glass pipeline v1 (widgets, insights, crash modal, SFX, mix) | nytvir_style/STYLE_PIPELINE.jsx + README.txt | kkkkk.mp4 / heppy eeas.mp4 |
| Apple Stocks (6/10 trades video) | trading_check/00_bootstrap.jsx + chain/ (run via runner.jsx) | D:\edit\trading_check\trading_check.aep |
| Apple-minimal / Edouard (glass panels, stepper, session bar, checklist, profile, SFX) | amd_edouard/build_pick.jsx, sfx_to_ae.jsx, sfx_cues.txt, add_move_nulls.jsx | D:\edit\amd_clone\amd_pick.aep |
| Brochu clone (black card windows, one-word captions) | amd_edouard/build_brochu.jsx | amd_brochu.aep |
| F15 notebook (seam tape captions, music bed) | flip_f15/*.jsx, docs/f15-notebook-format.md | D:\edit\flip_0910 |
| Apple mini: Dynamic Island + clean captions (voice reels, one thin caption line + one small top element) | apple_island_img3229/ (cap_build.jsx, island_patch.jsx, icons/, ui_kichik.html) + Nytvir Motion S45 tools 203-206 | D:\edit\img3229\img3229.aep |
| SIMONS montage formula | docs/simons-0908-pipeline.md | D:\edit\simons_0908 |
| Nikovax 2.0 technique notes (22 tutorials) | nikovax_notes/ | — |

Rules learned the hard way: never save a project into a temp/scratch folder; scripts live on space-free paths; ES3 only (no let/const, `var f=function` inside blocks); `saveFrameToPng` needs `$.sleep(2500)`; glass = blurred video duplicate BELOW the panel + panel duplicate as alpha matte.
