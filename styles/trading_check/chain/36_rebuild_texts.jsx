(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/rebuild_texts_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    var GRN = [0.19, 0.82, 0.35], RED = [1, 0.27, 0.23],
        GREY = [0.72, 0.72, 0.75], MUT = [0.54, 0.54, 0.58], GOLD = [1, 0.84, 0.04];

    function mkText(nm, str, t0, t1, fs, col, centerAnchor) {
        var tl = comp.layers.addText(str);
        tl.name = nm; tl.inPoint = t0; tl.outPoint = t1;
        var d = tl.property("Source Text").value;
        d.fontSize = fs; d.fillColor = col;
        d.font = "Arial-BoldMT";
        try { d.justification = ParagraphJustification.LEFT_JUSTIFY; } catch (e) {}
        tl.property("Source Text").setValue(d);
        if (centerAnchor) {
            tl.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
                "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
        }
        return tl;
    }
    function findLayer(nm) {
        for (var li = 1; li <= comp.numLayers; li++) if (comp.layer(li).name === nm) return comp.layer(li);
        return null;
    }

    app.beginUndoGroup("Nytvir rebuild texts");
    try {
        // remove broken-session text layers
        var kill = [];
        for (var li = comp.numLayers; li >= 1; li--) {
            var nm = comp.layer(li).name;
            if (/^\[TRD\] M[15] (Label|R\d|CellTxt)/.test(nm)) kill.push(li);
        }
        for (var k = 0; k < kill.length; k++) comp.layer(kill[k]).remove();
        log("removed broken texts: " + kill.length);

        var defs = [
            { tag: "M1", t0: 4.22, t1: 9.32, pattern: "LLWLWLWLLW",
              parts: [["6L", RED, 288], ["\u00B7", MUT, 362], ["4W", GRN, 398]] },
            { tag: "M5", t0: 32.20, t1: 38.41, pattern: "WWWLWWWWLW",
              parts: [["8W", GRN, 238], ["\u00B7", MUT, 315], ["2L", RED, 352], ["\u26A0", GOLD, 432]] }
        ];
        for (var d2 = 0; d2 < defs.length; d2++) {
            var D = defs[d2];
            var ctrl = findLayer("[TRD] " + D.tag + " CTRL");
            if (!ctrl) { log(D.tag + " ctrl missing"); continue; }
            var lb = mkText("[TRD] " + D.tag + " Label", "10 savdo", D.t0, D.t1, 44, GREY, false);
            lb.parent = ctrl;
            lb.property("ADBE Transform Group").property("ADBE Position").setValue([-447, 136]);
            for (var p2 = 0; p2 < D.parts.length; p2++) {
                var t = mkText("[TRD] " + D.tag + " R" + p2, D.parts[p2][0], D.t0, D.t1, 44, D.parts[p2][1], false);
                t.parent = ctrl;
                t.property("ADBE Transform Group").property("ADBE Position").setValue([D.parts[p2][2], 136]);
                if (D.parts[p2][0] === "\u26A0") {
                    var op = t.property("ADBE Transform Group").property("ADBE Opacity");
                    op.setValueAtTime(D.t0 + 3.0, 0); op.setValueAtTime(D.t0 + 3.2, 100);
                }
            }
            for (var c = 0; c < 10; c++) {
                var cell = findLayer("[TRD] " + D.tag + " Cell " + (c + 1));
                if (!cell) { log(D.tag + " cell " + (c + 1) + " missing"); continue; }
                var isW = D.pattern.charAt(c) === "W";
                var lt = mkText("[TRD] " + D.tag + " CellTxt " + (c + 1), isW ? "W" : "L", D.t0, D.t1, 34, isW ? GRN : RED, true);
                lt.parent = cell;
                lt.property("ADBE Transform Group").property("ADBE Position").setValue([0, 2]);
                lt.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
            }
            log(D.tag + " texts rebuilt");
        }
        log("ALL OK");
    } catch (e) {
        log("FAIL: " + e.toString() + " line=" + (e.line || "?"));
    }
    app.endUndoGroup();
    try {
        app.project.save(new File("D:/edit/trading_check/trading_check.aep"));
        log("saved");
    } catch (e) { log("save err"); }
    log("DONE");
})();
