(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/m4_rebuild_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    var GRN = [0.19, 0.82, 0.35], RED = [1, 0.27, 0.23], WH = [0.96, 0.96, 0.97],
        GREY = [0.72, 0.72, 0.75], CARD = [0.086, 0.09, 0.11];
    var CW = 990, t0 = 26.25, t1 = 31.0;

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
    function mkText(nm, str, fs, col, right) {
        var tl = comp.layers.addText(str);
        tl.name = nm; tl.inPoint = t0; tl.outPoint = t1;
        var d = tl.property("Source Text").value;
        d.fontSize = fs; d.fillColor = col;
        d.font = "Arial-BoldMT";
        try { d.justification = right ? ParagraphJustification.RIGHT_JUSTIFY : ParagraphJustification.LEFT_JUSTIFY; } catch (e) {}
        tl.property("Source Text").setValue(d);
        return tl;
    }
    function fadeK(L, tA, tB) {
        var op = L.property("ADBE Transform Group").property("ADBE Opacity");
        op.setValueAtTime(tA, 0); op.setValueAtTime(tB, 100);
    }

    app.beginUndoGroup("Nytvir M4 -> Jami hisob");
    try {
        var kill = [];
        for (var li = comp.numLayers; li >= 1; li--) {
            if (comp.layer(li).name.indexOf("[TRD] M4") === 0) kill.push(li);
        }
        for (var k2 = 0; k2 < kill.length; k2++) comp.layer(kill[k2]).remove();
        log("removed old M4: " + kill.length);

        var ctrl = comp.layers.addNull(comp.duration);
        ctrl.name = "[TRD] M4 CTRL";
        ctrl.inPoint = t0; ctrl.outPoint = t1;
        ctrl.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, 0]);
        var cp = ctrl.property("ADBE Transform Group").property("ADBE Position");
        cp.setValueAtTime(t0, [540, -380]);
        cp.setValueAtTime(t0 + 0.42, [540, 14]);
        cp.setValueAtTime(t0 + 0.58, [540, 0]);
        ease2(cp);

        var card = comp.layers.addShape();
        card.name = "[TRD] M4 Card"; card.inPoint = t0; card.outPoint = t1;
        var g = card.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var r = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        r.property("ADBE Vector Rect Size").setValue([CW, 320]);
        r.property("ADBE Vector Rect Roundness").setValue(62);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([CARD[0], CARD[1], CARD[2], 1]);
        f.property("ADBE Vector Fill Opacity").setValue(88);
        var st = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        st.property("ADBE Vector Stroke Color").setValue([1, 1, 1, 1]);
        st.property("ADBE Vector Stroke Opacity").setValue(9);
        st.property("ADBE Vector Stroke Width").setValue(2.5);
        card.parent = ctrl;
        card.property("ADBE Transform Group").property("ADBE Position").setValue([0, 52 + 160]);

        var rows = [
            ["Zarar (6)", GREY, "\u2212$60", RED, 132, 0.3],
            ["Foyda (4)", GREY, "+$120", GRN, 196, 0.8]
        ];
        for (var rw = 0; rw < rows.length; rw++) {
            var lt = mkText("[TRD] M4 RowL" + rw, rows[rw][0], 42, rows[rw][1], false);
            lt.parent = ctrl;
            lt.property("ADBE Transform Group").property("ADBE Position").setValue([-447, rows[rw][4]]);
            fadeK(lt, t0 + rows[rw][5], t0 + rows[rw][5] + 0.25);
            var vt = mkText("[TRD] M4 RowV" + rw, rows[rw][2], 42, rows[rw][3], true);
            vt.parent = ctrl;
            vt.property("ADBE Transform Group").property("ADBE Position").setValue([447, rows[rw][4]]);
            fadeK(vt, t0 + rows[rw][5] + 0.1, t0 + rows[rw][5] + 0.35);
        }

        var line = comp.layers.addShape();
        line.name = "[TRD] M4 Line"; line.inPoint = t0; line.outPoint = t1;
        var lg = line.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var lr = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        lr.property("ADBE Vector Rect Size").setValue([CW - 96, 3]);
        lr.property("ADBE Vector Rect Roundness").setValue(1.5);
        var lf = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        lf.property("ADBE Vector Fill Color").setValue([1, 1, 1, 1]);
        line.property("ADBE Transform Group").property("ADBE Opacity").setValue(22);
        line.parent = ctrl;
        line.property("ADBE Transform Group").property("ADBE Position").setValue([0, 236]);
        var ls = line.property("ADBE Transform Group").property("ADBE Scale");
        ls.setValueAtTime(t0 + 1.3, [0, 100]);
        ls.setValueAtTime(t0 + 1.75, [100, 100]);
        ease2(ls);

        var jl = mkText("[TRD] M4 JamiL", "JAMI", 44, WH, false);
        jl.parent = ctrl;
        jl.property("ADBE Transform Group").property("ADBE Position").setValue([-447, 316]);
        fadeK(jl, t0 + 1.9, t0 + 2.15);

        var jv = mkText("[TRD] M4 JamiV", "+$60", 72, GRN, true);
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

        log("M4 B-variant built");
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
