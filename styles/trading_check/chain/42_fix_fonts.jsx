(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/fix_fonts_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("no comp"); return; }

    // find a working bold font by testing on the first broken layer
    var candidates = ["SegoeUI-Bold", "SegoeUI-Semibold", "Arial-BoldMT", "ArialMT", "SegoeUI", "Verdana-Bold", "TahomaBD", "Tahoma-Bold"];
    var probe = null;
    for (var li = 1; li <= comp.numLayers; li++) {
        if (comp.layer(li).name === "[TRD] M4 RowL0") { probe = comp.layer(li); break; }
    }
    if (!probe) { log("probe layer missing"); return; }
    var winner = null;
    var t = (probe.inPoint + probe.outPoint) / 2;
    for (var c = 0; c < candidates.length; c++) {
        try {
            var d = probe.property("Source Text").value;
            d.font = candidates[c];
            probe.property("Source Text").setValue(d);
            var r = probe.sourceRectAtTime(t, false);
            log(candidates[c] + " -> rect " + Math.round(r.width) + "x" + Math.round(r.height));
            if (r.width > 0 && !winner) winner = candidates[c];
        } catch (e) { log(candidates[c] + " err"); }
    }
    if (!winner) { log("NO WORKING FONT FOUND"); return; }
    log("WINNER: " + winner);

    app.beginUndoGroup("Nytvir font fix");
    var fixed = 0;
    for (var li2 = 1; li2 <= comp.numLayers; li2++) {
        var L = comp.layer(li2);
        if (L.name.indexOf("[TRD]") !== 0) continue;
        var isTxt = false;
        try { isTxt = (L instanceof TextLayer); } catch (e) {}
        if (!isTxt) continue;
        try {
            var d2 = L.property("Source Text").value;
            d2.font = winner;
            L.property("Source Text").setValue(d2);
            var r2 = L.sourceRectAtTime((L.inPoint + L.outPoint) / 2, false);
            fixed++;
            if (r2.width === 0) log("STILL 0x0: " + L.name);
        } catch (e) { log("fail " + L.name); }
    }
    app.endUndoGroup();
    log("font applied to " + fixed + " text layers");
    try {
        app.project.save(new File("D:/edit/trading_check/trading_check.aep"));
        log("saved");
    } catch (e) { log("save err"); }
    log("DONE");
})();
