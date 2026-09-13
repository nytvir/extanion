(function () {
    var LOG = "D:\edit\trading_check\logs\runner.txt"; var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(m) { var f = new File(LOG); f.open("a"); f.writeln(m); f.close(); }
    var steps = ["D:/edit/trading_check/00_bootstrap.jsx","D:/edit/trading_check/chain/29_apply_trading_ui.jsx","D:/edit/trading_check/chain/31_fix_trading_ui.jsx","D:/edit/trading_check/chain/32_fix2_trading_ui.jsx","D:/edit/trading_check/chain/35_fix_captions.jsx","D:/edit/trading_check/chain/36_rebuild_texts.jsx","D:/edit/trading_check/chain/39_m4_rebuild.jsx","D:/edit/trading_check/chain/42_fix_fonts.jsx","D:/edit/trading_check/chain/46_rebuild_all_texts.jsx"];
    for (var i = 0; i < steps.length; i++) {
        log("RUN " + steps[i]);
        try { $.evalFile(new File(steps[i])); log("  ok"); } catch (e) { log("  ERR " + e.toString() + " line " + e.line); }
    }
    try { app.project.save(new File("D:\edit\trading_check\trading_check.aep")); log("FINAL SAVE ok"); } catch (e2) { log("FINAL SAVE ERR " + e2); }
    log("ALL DONE");
})();
