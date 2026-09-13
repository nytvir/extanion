(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/fix2_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    // HTML -> comp scale: 1080/290 = 3.724
    var GRN = [0.19, 0.82, 0.35], RED = [1, 0.27, 0.23],
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
    // HTML-exact panel: pad 48; head baseline ~134; cells 74x97 r22 gap22 centred; card h 280
    function panel(tag, t0, t1, pattern, cLeft, leftTxt, parts) {
        var ctrl = mkCtrl(tag, t0, t1);
        slideIn(ctrl, t0, 360);
        var card = mkRect("[TRD] " + tag + " Card", t0, t1, CW, 280, 62, CARD, 88, 9, 2.5);
        par(card, ctrl, 0, 52 + 140);
        var lb = mkText("[TRD] " + tag + " Label", leftTxt, t0, t1, 44, GREY, true, false);
        par(lb, ctrl, -CW / 2 + 48, 136);
        var xr = cLeft;
        for (var p2 = 0; p2 < parts.length; p2++) {
            var t = mkText("[TRD] " + tag + " R" + p2, parts[p2][0], t0, t1, 44, parts[p2][1], true, false);
            par(t, ctrl, xr, 136);
            xr += parts[p2][2];
            if (parts[p2][3]) fadeK(t, t0 + 3.0, t0 + 3.2);
        }
        // cells: 74 wide, 22 gap -> total 938, centred
        var cw2 = 74, ch2 = 97, gap = 22, step = cw2 + gap;
        var x0 = -(step * 10 - gap) / 2 + cw2 / 2;
        var yRow = 52 + 48 + 52 + 37 + ch2 / 2; // pad + head + gap + half cell = 237
        for (var c = 0; c < 10; c++) {
            var isW = pattern.charAt(c) === "W";
            var col = isW ? GRN : RED;
            var cell = mkRect("[TRD] " + tag + " Cell " + (c + 1), t0, t1, cw2, ch2, 22, col, 18, null, 0);
            var cst = cell.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            cst.property("ADBE Vector Stroke Color").setValue([col[0], col[1], col[2], 1]);
            cst.property("ADBE Vector Stroke Opacity").setValue(65);
            cst.property("ADBE Vector Stroke Width").setValue(3);
            par(cell, ctrl, x0 + c * step, yRow);
            var d0 = t0 + 0.6 + c * 0.2;
            fadeK(cell, d0, d0 + 0.16);
            var pp = cell.property("ADBE Transform Group").property("ADBE Position");
            pp.setValueAtTime(d0, [x0 + c * step, yRow + 24]);
            pp.setValueAtTime(d0 + 0.24, [x0 + c * step, yRow]);
            ease2(pp);
            var lt = mkText("[TRD] " + tag + " CellTxt " + (c + 1), isW ? "W" : "L", t0, t1, 34, col, true, true);
            par(lt, cell, 0, 2);
            lt.property("ADBE Transform Group").property("ADBE Opacity").expression = "thisLayer.parent.opacity;";
        }
        return ctrl;
    }

    app.beginUndoGroup("Nytvir Trading UI precision");
    try {
        var kill = [];
        for (var li = comp.numLayers; li >= 1; li--) {
            var nm = comp.layer(li).name;
            if (nm.indexOf("[TRD] M1") === 0 || nm.indexOf("[TRD] M5") === 0 || nm.indexOf("[TRD] Cell") === 0) kill.push(li);
        }
        for (var k2 = 0; k2 < kill.length; k2++) comp.layer(kill[k2]).remove();
        log("removed: " + kill.length);

        panel("M1", 4.22, 9.32, "LLWLWLWLLW", 288,
            "10 savdo", [["6L", RED, 74], ["\u00B7", MUT, 36], ["4W", GRN, 0]]);
        log("M1 precise");
        panel("M5", 32.20, 38.41, "WWWLWWWWLW", 238,
            "10 savdo", [["8W", GRN, 77], ["\u00B7", MUT, 37], ["2L", RED, 80], ["\u26A0", GOLD, 0, true]]);
        log("M5 precise");
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
