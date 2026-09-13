(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/apply_trading_ui_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("IMG_2594 not found"); return; }
    log("comp found " + comp.width + "x" + comp.height);

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
    function holdSwap(prop, tA, vA, tB, vB) {
        prop.setValueAtTime(tA, vA);
        prop.setValueAtTime(tB, vB);
        try {
            prop.setInterpolationTypeAtKey(1, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
            prop.setInterpolationTypeAtKey(2, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
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
    function mkPath(nm, t0, t1, verts, col, sw, glowPx) {
        var s = comp.layers.addShape();
        s.name = nm; s.inPoint = t0; s.outPoint = t1;
        var g = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var pg = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
        var shp = new Shape();
        shp.vertices = verts; shp.closed = false;
        pg.property("ADBE Vector Shape").setValue(shp);
        var st = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        st.property("ADBE Vector Stroke Color").setValue([col[0], col[1], col[2], 1]);
        st.property("ADBE Vector Stroke Width").setValue(sw);
        st.property("ADBE Vector Stroke Line Cap").setValue(2);
        st.property("ADBE Vector Stroke Line Join").setValue(2);
        var tr = g.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
        if (glowPx) {
            try {
                var gl = s.property("ADBE Effect Parade").addProperty("ADBE Glo2");
                gl.property("ADBE Glo2-0003").setValue(glowPx);
                gl.property("ADBE Glo2-0004").setValue(0.6);
            } catch (e) {}
        }
        return s;
    }
    function trimAnim(pathLayer, tA, tB) {
        var tr = pathLayer.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property("ADBE Vector Filter - Trim");
        var te = tr.property("ADBE Vector Trim End");
        te.setValueAtTime(tA, 0);
        te.setValueAtTime(tB, 100);
        ease2(te);
    }
    function fadeK(L, tA, tB) {
        var op = L.property("ADBE Transform Group").property("ADBE Opacity");
        op.setValueAtTime(tA, 0); op.setValueAtTime(tB, 100);
    }
    function popK(L, tA) {
        var sc = L.property("ADBE Transform Group").property("ADBE Scale");
        sc.setValueAtTime(tA, [70, 70]);
        sc.setValueAtTime(tA + 0.18, [108, 108]);
        sc.setValueAtTime(tA + 0.3, [100, 100]);
        ease2(sc);
        fadeK(L, tA, tA + 0.12);
    }
    function par(L, ctrl, x, y) {
        L.parent = ctrl;
        L.property("ADBE Transform Group").property("ADBE Position").setValue([x, y]);
    }

    // trade cells row
    function cellsRow(ctrl, t0, t1, pattern, yRow) {
        var cw2 = 74, ch2 = 97, gap = 22, step = cw2 + gap;
        var x0 = -(step * 10 - gap) / 2 + cw2 / 2;
        for (var c = 0; c < 10; c++) {
            var isW = pattern.charAt(c) === "W";
            var col = isW ? GRN : RED;
            var cell = mkRect("[TRD] Cell " + (c + 1), t0, t1, cw2, ch2, 20, col, 20, null, 0);
            var cst = cell.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            cst.property("ADBE Vector Stroke Color").setValue([col[0], col[1], col[2], 1]);
            cst.property("ADBE Vector Stroke Opacity").setValue(70);
            cst.property("ADBE Vector Stroke Width").setValue(3);
            par(cell, ctrl, x0 + c * step, yRow);
            var d0 = t0 + 0.6 + c * 0.22;
            fadeK(cell, d0, d0 + 0.18);
            var pp = cell.property("ADBE Transform Group").property("ADBE Position");
            pp.setValueAtTime(d0, [x0 + c * step, yRow + 26]);
            pp.setValueAtTime(d0 + 0.25, [x0 + c * step, yRow]);
            ease2(pp);
            var lt = mkText("[TRD] Cell Txt " + (c + 1), isW ? "W" : "L", t0, t1, 34, col, true, true);
            par(lt, cell, 0, ch2 * 0.22);
            lt.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
        }
    }
    // stocks row card (M2/M3)
    function mathCard(tag, t0, t1, nameStr, eqStr, verts, col, chipStr) {
        var ctrl = mkCtrl(tag, t0, t1);
        slideIn(ctrl, t0, 340);
        var card = mkRect("[TRD] " + tag + " Card", t0, t1, CW, 225, 62, CARD, 88, 9, 2.5);
        par(card, ctrl, 0, 52 + 112);
        var n1 = mkText("[TRD] " + tag + " Name", nameStr, t0, t1, 52, WH, true, false);
        par(n1, ctrl, -439, 142);
        var n2 = mkText("[TRD] " + tag + " Eq", eqStr, t0, t1, 38, MUT, false, false);
        par(n2, ctrl, -439, 198);
        var sp = mkPath("[TRD] " + tag + " Spark", t0, t1, verts, col, 8, 26);
        par(sp, ctrl, 30, 164);
        trimAnim(sp, t0 + 0.6, t0 + 2.2);
        var chip = mkRect("[TRD] " + tag + " Chip", t0, t1, 210, 88, 26, col, 100, null, 0);
        par(chip, ctrl, 380, 164);
        popK(chip, t0 + 1.1);
        var ct = mkText("[TRD] " + tag + " ChipTxt", chipStr, t0, t1, 44, [1, 1, 1], true, true);
        par(ct, chip, 0, 0);
        ct.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
        return ctrl;
    }

    app.beginUndoGroup("Nytvir Trading UI");
    try {
        // ---- M1: trades panel 4.22-9.32
        (function () {
            var t0 = 4.22, t1 = 9.32;
            var ctrl = mkCtrl("M1", t0, t1);
            slideIn(ctrl, t0, 420);
            var card = mkRect("[TRD] M1 Card", t0, t1, CW, 340, 62, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 170);
            var lb = mkText("[TRD] M1 Label", "10 savdo", t0, t1, 42, GREY, true, false);
            par(lb, ctrl, -439, 132);
            var s6 = mkText("[TRD] M1 6L", "6L", t0, t1, 42, RED, true, false);
            par(s6, ctrl, 268, 132);
            var sd = mkText("[TRD] M1 dot", "\u00B7", t0, t1, 42, MUT, true, false);
            par(sd, ctrl, 345, 132);
            var s4 = mkText("[TRD] M1 4W", "4W", t0, t1, 42, GRN, true, false);
            par(s4, ctrl, 385, 132);
            cellsRow(ctrl, t0, t1, "LLWLWLWLLW", 258);
            log("M1 ok");
        })();

        // ---- M2: loss 14.38-20.82
        (function () {
            var vx = [], src = [[2,8],[18,12],[32,10],[48,17],[64,15],[80,24],[98,29]];
            for (var i = 0; i < src.length; i++) vx.push([(src[i][0] - 50) * 4.6, (src[i][1] - 17) * 2.9]);
            mathCard("M2", 14.38, 20.82, "Zarar", "6 \u00D7 $10", vx, RED, "\u2212$60");
            log("M2 ok");
        })();

        // ---- M3: win 20.82-26.25
        (function () {
            var vx = [], src = [[2,27],[18,24],[32,26],[48,18],[64,20],[80,10],[98,5]];
            for (var i = 0; i < src.length; i++) vx.push([(src[i][0] - 50) * 4.6, (src[i][1] - 17) * 2.9]);
            mathCard("M3", 20.82, 26.25, "Foyda", "4 \u00D7 $30", vx, GRN, "+$120");
            log("M3 ok");
        })();

        // ---- M4: monthly net 26.25-31.0
        (function () {
            var t0 = 26.25, t1 = 31.0;
            var ctrl = mkCtrl("M4", t0, t1);
            slideIn(ctrl, t0, 520);
            var card = mkRect("[TRD] M4 Card", t0, t1, CW, 430, 62, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 215);
            var h1 = mkText("[TRD] M4 H1", "Oylik natija", t0, t1, 40, GREY, true, false);
            par(h1, ctrl, -439, 122);
            var h2 = mkText("[TRD] M4 Total", "+$60", t0, t1, 92, GRN, true, false);
            par(h2, ctrl, -439, 222);
            fadeK(h2, t0 + 0.9, t0 + 1.15);
            var chip = mkRect("[TRD] M4 Chip", t0, t1, 190, 80, 24, GRN, 100, null, 0);
            par(chip, ctrl, 390, 128);
            popK(chip, t0 + 1.3);
            var ct = mkText("[TRD] M4 ChipTxt", "+5.1%", t0, t1, 40, [1, 1, 1], true, true);
            par(ct, chip, 0, 0);
            ct.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
            var vx = [], src = [[2,24],[28,30],[52,26],[76,34],[100,28],[124,36],[148,30],[172,20],[200,14],[238,6]];
            for (var i = 0; i < src.length; i++) vx.push([(src[i][0] - 120) * 3.7, (src[i][1] - 20) * 3.6]);
            var sp = mkPath("[TRD] M4 Spark", t0, t1, vx, GRN, 9, 28);
            par(sp, ctrl, 0, 330);
            trimAnim(sp, t0 + 0.5, t0 + 2.6);
            var ft = mkText("[TRD] M4 Foot", "ko'proq yutqazdi \u2014 baribir yutdi", t0, t1, 34, GREY, false, false);
            par(ft, ctrl, -439, 448);
            fadeK(ft, t0 + 2.2, t0 + 2.6);
            log("M4 ok");
        })();

        // ---- M5: reverse panel 32.20-38.41
        (function () {
            var t0 = 32.20, t1 = 38.41;
            var ctrl = mkCtrl("M5", t0, t1);
            slideIn(ctrl, t0, 420);
            var card = mkRect("[TRD] M5 Card", t0, t1, CW, 340, 62, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 170);
            var lb = mkText("[TRD] M5 Label", "10 savdo", t0, t1, 42, GREY, true, false);
            par(lb, ctrl, -439, 132);
            var s8 = mkText("[TRD] M5 8W", "8W", t0, t1, 42, GRN, true, false);
            par(s8, ctrl, 218, 132);
            var sd = mkText("[TRD] M5 dot", "\u00B7", t0, t1, 42, MUT, true, false);
            par(sd, ctrl, 300, 132);
            var s2 = mkText("[TRD] M5 2L", "2L", t0, t1, 42, RED, true, false);
            par(s2, ctrl, 340, 132);
            var sw2 = mkText("[TRD] M5 warn", "\u26A0", t0, t1, 42, GOLD, true, false);
            par(sw2, ctrl, 420, 132);
            fadeK(sw2, t0 + 3.0, t0 + 3.2);
            cellsRow(ctrl, t0, t1, "WWWLWWWWLW", 258);
            log("M5 ok");
        })();

        // ---- M6: balance crash 38.41-48.76
        (function () {
            var t0 = 38.41, t1 = 48.76;
            var ctrl = mkCtrl("M6", t0, t1);
            slideIn(ctrl, t0, 520);
            var card = mkRect("[TRD] M6 Card", t0, t1, CW, 430, 62, CARD, 88, 9, 2.5);
            par(card, ctrl, 0, 52 + 215);
            var h1 = mkText("[TRD] M6 H1", "Balans", t0, t1, 40, GREY, true, false);
            par(h1, ctrl, -439, 122);
            var p1 = mkText("[TRD] M6 P1", "$1,240", t0, t1, 68, WH, true, false);
            par(p1, ctrl, -439, 210);
            var p2 = mkText("[TRD] M6 P2", "$0", t0, t1, 68, RED, true, false);
            par(p2, ctrl, -439, 210);
            holdSwap(p1.property("ADBE Transform Group").property("ADBE Opacity"), t0, 100, t0 + 3.6, 0);
            holdSwap(p2.property("ADBE Transform Group").property("ADBE Opacity"), t0, 0, t0 + 3.6, 100);
            var chip = mkRect("[TRD] M6 Chip", t0, t1, 210, 80, 24, RED, 100, null, 0);
            par(chip, ctrl, 380, 128);
            popK(chip, t0 + 3.8);
            var ct = mkText("[TRD] M6 ChipTxt", "\u2212100%", t0, t1, 40, [1, 1, 1], true, true);
            par(ct, chip, 0, 0);
            ct.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
            var vg = [], sg = [[2,40],[40,36],[78,38],[116,30],[140,28]];
            for (var i = 0; i < sg.length; i++) vg.push([(sg[i][0] - 120) * 3.7, (sg[i][1] - 42) * 3.4]);
            var spg = mkPath("[TRD] M6 Rise", t0, t1, vg, GRN, 9, 24);
            par(spg, ctrl, 0, 330);
            trimAnim(spg, t0 + 0.5, t0 + 2.5);
            var vr = [], sr = [[140,28],[156,34],[166,26],[178,44],[188,58],[236,60]];
            for (var j = 0; j < sr.length; j++) vr.push([(sr[j][0] - 120) * 3.7, (sr[j][1] - 42) * 3.4]);
            var spr = mkPath("[TRD] M6 Crash", t0, t1, vr, RED, 10, 30);
            par(spr, ctrl, 0, 330);
            trimAnim(spr, t0 + 3.0, t0 + 3.7);
            var ft = mkText("[TRD] M6 Foot", "hisob yopildi.", t0, t1, 34, RED, false, false);
            par(ft, ctrl, -439, 448);
            fadeK(ft, t0 + 4.2, t0 + 4.6);
            log("M6 ok");
        })();

        log("ALL APPLIED");
    } catch (e) {
        log("APPLY FAIL: " + e.toString() + " line=" + (e.line || "?"));
    }
    app.endUndoGroup();

    var base = "D:/edit/trading_check/logs/";
    var checks = [[6.5, "trd_m1"], [17.5, "trd_m2"], [28.5, "trd_m4"], [43.5, "trd_m6"]];
    for (var cc = 0; cc < checks.length; cc++) {
        var pf = new File(base + checks[cc][1] + ".png");
        try { comp.saveFrameToPng(checks[cc][0], pf); log(checks[cc][1] + " saved=" + (pf.exists ? "YES" : "NO")); }
        catch (e) { log(checks[cc][1] + ": " + e.toString()); }
    }
    log("DONE");
})();
