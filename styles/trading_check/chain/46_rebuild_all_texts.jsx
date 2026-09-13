(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/rebuild_all_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    var GRN = [0.19, 0.82, 0.35], RED = [1, 0.27, 0.23], WH = [0.96, 0.96, 0.97],
        GREY = [0.72, 0.72, 0.75], MUT = [0.54, 0.54, 0.58], GOLD = [1, 0.84, 0.04];

    function ease2(prop) {
        try {
            for (var k = 1; k <= prop.numKeys; k++) {
                var dims = 1; try { dims = prop.value.length || 1; } catch (e0) {}
                var ea = []; for (var d = 0; d < dims; d++) ea.push(new KeyframeEase(0, 70));
                prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                prop.setTemporalEaseAtKey(k, ea, ea);
            }
        } catch (e) {}
    }
    function mkText(nm, str, t0, t1, fs, col, right, centerAnchor) {
        var tl = comp.layers.addText(str);
        tl.name = nm; tl.inPoint = t0; tl.outPoint = t1;
        var d = tl.property("Source Text").value;
        d.fontSize = fs; d.fillColor = col;
        d.font = "Arial-BoldMT";
        try { d.justification = right ? ParagraphJustification.RIGHT_JUSTIFY : ParagraphJustification.LEFT_JUSTIFY; } catch (e) {}
        tl.property("Source Text").setValue(d);
        if (centerAnchor) {
            tl.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
                "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
        }
        return tl;
    }
    function fadeK(L, tA, tB) {
        var op = L.property("ADBE Transform Group").property("ADBE Opacity");
        op.setValueAtTime(tA, 0); op.setValueAtTime(tB, 100);
    }
    function findLayer(nm) {
        for (var li = 1; li <= comp.numLayers; li++) if (comp.layer(li).name === nm) return comp.layer(li);
        return null;
    }

    app.beginUndoGroup("Nytvir rebuild all texts");
    try {
        var kill = [];
        for (var li = comp.numLayers; li >= 1; li--) {
            var nm = comp.layer(li).name;
            if (/^\[TRD\] M[15] (Label|R\d|CellTxt)/.test(nm) || /^\[TRD\] M4 (RowL|RowV|JamiL|JamiV)/.test(nm)) kill.push(li);
        }
        for (var k2 = 0; k2 < kill.length; k2++) comp.layer(kill[k2]).remove();
        log("removed dead texts: " + kill.length);

        // M1 / M5 texts
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
            var lb = mkText("[TRD] " + D.tag + " Label", "10 savdo", D.t0, D.t1, 44, GREY, false, false);
            lb.parent = ctrl;
            lb.property("ADBE Transform Group").property("ADBE Position").setValue([-447, 136]);
            for (var p2 = 0; p2 < D.parts.length; p2++) {
                var t = mkText("[TRD] " + D.tag + " R" + p2, D.parts[p2][0], D.t0, D.t1, 44, D.parts[p2][1], false, false);
                t.parent = ctrl;
                t.property("ADBE Transform Group").property("ADBE Position").setValue([D.parts[p2][2], 136]);
                if (D.parts[p2][0] === "\u26A0") fadeK(t, D.t0 + 3.0, D.t0 + 3.2);
            }
            for (var c = 0; c < 10; c++) {
                var cell = findLayer("[TRD] " + D.tag + " Cell " + (c + 1));
                if (!cell) continue;
                var isW = D.pattern.charAt(c) === "W";
                var lt = mkText("[TRD] " + D.tag + " CellTxt " + (c + 1), isW ? "W" : "L", D.t0, D.t1, 34, isW ? GRN : RED, false, true);
                lt.parent = cell;
                lt.property("ADBE Transform Group").property("ADBE Position").setValue([0, 2]);
                lt.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
            }
            log(D.tag + " texts rebuilt");
        }

        // M4 texts
        (function () {
            var t0 = 26.25, t1 = 31.0;
            var ctrl = findLayer("[TRD] M4 CTRL");
            if (!ctrl) { log("M4 ctrl missing"); return; }
            var rows = [
                ["Zarar (6)", GREY, "\u2212$60", RED, 132, 0.3],
                ["Foyda (4)", GREY, "+$120", GRN, 196, 0.8]
            ];
            for (var rw = 0; rw < rows.length; rw++) {
                var lt2 = mkText("[TRD] M4 RowL" + rw, rows[rw][0], t0, t1, 42, rows[rw][1], false, false);
                lt2.parent = ctrl;
                lt2.property("ADBE Transform Group").property("ADBE Position").setValue([-447, rows[rw][4]]);
                fadeK(lt2, t0 + rows[rw][5], t0 + rows[rw][5] + 0.25);
                var vt = mkText("[TRD] M4 RowV" + rw, rows[rw][2], t0, t1, 42, rows[rw][3], true, false);
                vt.parent = ctrl;
                vt.property("ADBE Transform Group").property("ADBE Position").setValue([447, rows[rw][4]]);
                fadeK(vt, t0 + rows[rw][5] + 0.1, t0 + rows[rw][5] + 0.35);
            }
            var jl = mkText("[TRD] M4 JamiL", "JAMI", t0, t1, 44, WH, false, false);
            jl.parent = ctrl;
            jl.property("ADBE Transform Group").property("ADBE Position").setValue([-447, 316]);
            fadeK(jl, t0 + 1.9, t0 + 2.15);
            var jv = mkText("[TRD] M4 JamiV", "+$60", t0, t1, 72, GRN, true, false);
            try {
                var gl = jv.property("ADBE Effect Parade").addProperty("ADBE Glo2");
                gl.property("ADBE Glo2-0003").setValue(18);
                gl.property("ADBE Glo2-0004").setValue(0.35);
            } catch (e) {}
            jv.parent = ctrl;
            jv.property("ADBE Transform Group").property("ADBE Position").setValue([447, 324]);
            var jvs = jv.property("ADBE Transform Group").property("ADBE Scale");
            jvs.setValueAtTime(t0 + 2.0, [70, 70]);
            jvs.setValueAtTime(t0 + 2.2, [106, 106]);
            jvs.setValueAtTime(t0 + 2.35, [100, 100]);
            ease2(jvs);
            fadeK(jv, t0 + 2.0, t0 + 2.12);
            log("M4 texts rebuilt");
        })();

        // sanity: check rects
        var checks = ["[TRD] M1 Label", "[TRD] M4 JamiV", "[TRD] M5 Label"];
        for (var cc = 0; cc < checks.length; cc++) {
            var L3 = findLayer(checks[cc]);
            if (L3) {
                var r3 = L3.sourceRectAtTime((L3.inPoint + L3.outPoint) / 2, false);
                log(checks[cc] + " rect: " + Math.round(r3.width) + "x" + Math.round(r3.height));
            }
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
