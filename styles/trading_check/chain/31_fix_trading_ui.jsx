(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/fix_trading_ui_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    var GRN = [0.19, 0.82, 0.35], RED = [1, 0.27, 0.23], WH = [0.96, 0.96, 0.97],
        GREY = [0.72, 0.72, 0.75], MUT = [0.54, 0.54, 0.58],
        CARD = [0.086, 0.09, 0.11], GOLD = [1, 0.84, 0.04];
    var CW = 990;

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
    function mkCtrl(tag, t0, t1) {
        var c = comp.layers.addNull(comp.duration);
        c.name = "[TRD] " + tag + " CTRL";
        c.inPoint = t0; c.outPoint = t1;
        c.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, 0]);
        return c;
    }
    function slideIn(ctrl, t0, dropH) {
        var p = ctrl.property("ADBE Transform Group").property("ADBE Position");
        p.setValueAtTime(t0, [540, -dropH]);
        p.setValueAtTime(t0 + 0.42, [540, 14]);
        p.setValueAtTime(t0 + 0.58, [540, 0]);
        ease2(p);
    }
    function mkRect(nm, t0, t1, w_, h_, round, fillCol, fillOp, strokeOp, strokeW) {
        var s = comp.layers.addShape();
        s.name = nm; s.inPoint = t0; s.outPoint = t1;
        var g = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var r = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        r.property("ADBE Vector Rect Size").setValue([w_, h_]);
        r.property("ADBE Vector Rect Roundness").setValue(round);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([fillCol[0], fillCol[1], fillCol[2], 1]);
        if (fillOp != null) f.property("ADBE Vector Fill Opacity").setValue(fillOp);
        if (strokeW) {
            var st = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            st.property("ADBE Vector Stroke Color").setValue([1, 1, 1, 1]);
            st.property("ADBE Vector Stroke Opacity").setValue(strokeOp || 9);
            st.property("ADBE Vector Stroke Width").setValue(strokeW);
        }
        return s;
    }
    function mkText(nm, str, t0, t1, fs, col, bold, centerAnchor) {
        var tl = comp.layers.addText(str);
        tl.name = nm; tl.inPoint = t0; tl.outPoint = t1;
        var d = tl.property("Source Text").value;
        d.fontSize = fs; d.fillColor = col;
        d.font = bold ? "Arial-BoldMT" : "ArialMT";
        try { d.justification = ParagraphJustification.LEFT_JUSTIFY; } catch (e) {}
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
    function par(L, ctrl, x, y) {
        L.parent = ctrl;
        L.property("ADBE Transform Group").property("ADBE Position").setValue([x, y]);
    }
    function cellsRow(ctrl, t0, t1, pattern, yRow) {
        var cw2 = 60, ch2 = 80, gap = 28, step = cw2 + gap;
        var x0 = -(step * 10 - gap) / 2 + cw2 / 2;
        for (var c = 0; c < 10; c++) {
            var isW = pattern.charAt(c) === "W";
            var col = isW ? GRN : RED;
            var cell = mkRect("[TRD] Cell " + (c + 1), t0, t1, cw2, ch2, 14, col, 18, null, 0);
            var cst = cell.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            cst.property("ADBE Vector Stroke Color").setValue([col[0], col[1], col[2], 1]);
            cst.property("ADBE Vector Stroke Opacity").setValue(70);
            cst.property("ADBE Vector Stroke Width").setValue(3);
            par(cell, ctrl, x0 + c * step, yRow);
            var d0 = t0 + 0.6 + c * 0.2;
            fadeK(cell, d0, d0 + 0.16);
            var pp = cell.property("ADBE Transform Group").property("ADBE Position");
            pp.setValueAtTime(d0, [x0 + c * step, yRow + 24]);
            pp.setValueAtTime(d0 + 0.24, [x0 + c * step, yRow]);
            ease2(pp);
            var lt = mkText("[TRD] Cell Txt " + (c + 1), isW ? "W" : "L", t0, t1, 30, col, true, true);
            par(lt, cell, 0, 2);
            lt.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
        }
    }

    app.beginUndoGroup("Nytvir Trading UI Fix");
    try {
        // remove old M1 & M5 blocks entirely (their cells carry generic names, so nuke by prefix set)
        var kill = [];
        for (var li = comp.numLayers; li >= 1; li--) {
            var nm = comp.layer(li).name;
            if (nm.indexOf("[TRD] M1") === 0 || nm.indexOf("[TRD] M5") === 0 ||
                nm.indexOf("[TRD] Cell") === 0) kill.push(li);
        }
        for (var k2 = 0; k2 < kill.length; k2++) comp.layer(kill[k2]).remove();
        log("removed old M1/M5 layers: " + kill.length);

        // ---- rebuild M1
        (function () {
            var t0 = 4.22, t1 = 9.32;
            var ctrl = mkCtrl("M1", t0, t1);
            slideIn(ctrl, t0, 420);
            var card = mkRect("[TRD] M1 Card", t0, t1, CW, 330, 56, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 165);
            var lb = mkText("[TRD] M1 Label", "10 savdo", t0, t1, 42, GREY, true, false);
            par(lb, ctrl, -439, 130);
            var s6 = mkText("[TRD] M1 6L", "6L", t0, t1, 42, RED, true, false);
            par(s6, ctrl, 288, 130);
            var sd = mkText("[TRD] M1 dot", "\u00B7", t0, t1, 42, MUT, true, false);
            par(sd, ctrl, 362, 130);
            var s4 = mkText("[TRD] M1 4W", "4W", t0, t1, 42, GRN, true, false);
            par(s4, ctrl, 398, 130);
            cellsRow(ctrl, t0, t1, "LLWLWLWLLW", 252);
            log("M1 rebuilt");
        })();

        // ---- rebuild M5
        (function () {
            var t0 = 32.20, t1 = 38.41;
            var ctrl = mkCtrl("M5", t0, t1);
            slideIn(ctrl, t0, 420);
            var card = mkRect("[TRD] M5 Card", t0, t1, CW, 330, 56, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 165);
            var lb = mkText("[TRD] M5 Label", "10 savdo", t0, t1, 42, GREY, true, false);
            par(lb, ctrl, -439, 130);
            var s8 = mkText("[TRD] M5 8W", "8W", t0, t1, 42, GRN, true, false);
            par(s8, ctrl, 238, 130);
            var sd = mkText("[TRD] M5 dot", "\u00B7", t0, t1, 42, MUT, true, false);
            par(sd, ctrl, 315, 130);
            var s2 = mkText("[TRD] M5 2L", "2L", t0, t1, 42, RED, true, false);
            par(s2, ctrl, 352, 130);
            var sw2 = mkText("[TRD] M5 warn", "\u26A0", t0, t1, 42, GOLD, true, false);
            par(sw2, ctrl, 432, 130);
            fadeK(sw2, t0 + 3.0, t0 + 3.2);
            cellsRow(ctrl, t0, t1, "WWWLWWWWLW", 252);
            log("M5 rebuilt");
        })();

        // ---- adjust M4 title/total collision
        for (var li2 = 1; li2 <= comp.numLayers; li2++) {
            var L2 = comp.layer(li2);
            if (L2.name === "[TRD] M4 H1") L2.property("ADBE Transform Group").property("ADBE Position").setValue([-439, 104]);
            if (L2.name === "[TRD] M4 Total") L2.property("ADBE Transform Group").property("ADBE Position").setValue([-439, 248]);
        }
        log("M4 adjusted");
        log("ALL FIXED");
    } catch (e) {
        log("FIX FAIL: " + e.toString() + " line=" + (e.line || "?"));
    }
    app.endUndoGroup();

    try {
        var pf = new File("D:/edit/trading_check/trading_check.aep");
        app.project.save(pf);
        log("saved");
    } catch (e) { log("save err: " + e.toString()); }
    log("DONE");
})();
