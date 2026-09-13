// trading_check qayta qurish — 1-qadam: yangi loyiha, IMG_2594 komp, 19 ta [Cap] (plagin AUTO caption tiktok uslubi bilan bir xil)
(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:\\edit\\trading_check\\logs\\00_bootstrap.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }
    try {
        app.newProject();
        var mov = new File("C:\\Users\\nytvi\\Downloads\\Telegram Desktop\\IMG_2594.MOV");
        if (!mov.exists) { log("MOV yo'q"); return; }
        var fi = app.project.importFile(new ImportOptions(mov));
        log("footage: " + fi.name + " " + fi.width + "x" + fi.height + " dur=" + fi.duration);

        // SRT o'qish (narr_plugin.srt — plagin bilan bir xil whisper parametrlari)
        var srt = new File("D:\\edit\\trading_check\\narr_plugin.srt"); srt.encoding = "UTF-8"; srt.open("r");
        var raw = srt.read(); srt.close();
        var blocks = raw.split(/\r?\n\r?\n/), cues = [];
        function ts(s) { var m = s.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return m ? parseInt(m[1],10)*3600 + parseInt(m[2],10)*60 + parseInt(m[3],10) + parseInt(m[4],10)/1000 : -1; }
        for (var b = 0; b < blocks.length; b++) {
            var ln = blocks[b].split(/\r?\n/); if (ln.length < 3) continue;
            var tm = ln[1].split("-->"); if (tm.length < 2) continue;
            var t0 = ts(tm[0]), t1 = ts(tm[1]); if (t0 < 0) continue;
            cues.push({ start: t0, end: t1, text: ln.slice(2).join(" ").replace(/^\s+|\s+$/g, "") });
        }
        log("cues: " + cues.length);
        var maxEnd = 0; for (var q = 0; q < cues.length; q++) if (cues[q].end > maxEnd) maxEnd = cues[q].end;

        var comp = app.project.items.addComp("IMG_2594", 1080, 1920, 1, Math.max(fi.duration, maxEnd + 0.5), 30);
        var vl = comp.layers.add(fi); vl.name = "IMG_2594.MOV";
        log("comp: " + comp.width + "x" + comp.height + " dur=" + comp.duration.toFixed(2));

        // _capBuild("tiktok") bilan bir xil
        function capWrap(s, maxLen) {
            var lines = s.split("\n"), out = [];
            for (var li = 0; li < lines.length; li++) {
                var words = lines[li].split(" "), cur = "";
                for (var w = 0; w < words.length; w++) {
                    if (cur.length === 0) cur = words[w];
                    else if ((cur + " " + words[w]).length <= maxLen) cur += " " + words[w];
                    else { out.push(cur); cur = words[w]; }
                }
                if (cur.length) out.push(cur);
            }
            return out.join("\r");
        }
        function smoothK(prop, infl) {
            for (var k = 1; k <= prop.numKeys; k++) {
                try {
                    prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                    var dims = 1; try { dims = prop.value.length || 1; } catch (e0) { dims = 1; }
                    var ea = []; for (var d = 0; d < dims; d++) ea.push(new KeyframeEase(0, infl));
                    prop.setTemporalEaseAtKey(k, ea, ea);
                } catch (e) {}
            }
        }
        var posY = comp.height * 0.78, fs = Math.round(comp.width * 0.054);
        for (var i = 0; i < cues.length; i++) {
            var c = cues[i];
            var tl = comp.layers.addText(capWrap(c.text, 22));
            tl.name = "[Cap] " + (i + 1);
            tl.inPoint = c.start; tl.outPoint = Math.min(c.end, comp.duration); tl.label = 11;
            var td = tl.property("Source Text").value;
            td.applyFill = true; td.fillColor = [1, 1, 1];
            td.justification = ParagraphJustification.CENTER_JUSTIFY;
            var fT = ["Arial-BoldMT", "SegoeUI-Bold", "ArialMT"];
            for (var t1 = 0; t1 < fT.length; t1++) { try { td.font = fT[t1]; break; } catch (ef) {} }
            td.fontSize = fs; td.applyStroke = true; td.strokeColor = [0.02, 0.03, 0.07];
            td.strokeWidth = Math.max(2.5, Math.round(fs * 0.045)); td.strokeOverFill = false; td.tracking = 0;
            tl.property("Source Text").setValue(td);
            tl.property("Transform").property("Position").setValue([comp.width / 2, posY]);
            try {
                var ds = tl.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
                ds.property("ADBE Drop Shadow-0002").setValue(0.6 * 255);
                ds.property("ADBE Drop Shadow-0004").setValue(4);
                ds.property("ADBE Drop Shadow-0005").setValue(12);
            } catch (eds) {}
            var sc = tl.property("Transform").property("Scale");
            sc.setValueAtTime(c.start, [82, 82]); sc.setValueAtTime(c.start + 0.1, [104, 104]); sc.setValueAtTime(c.start + 0.18, [100, 100]);
            smoothK(sc, 60);
        }
        log("captions: " + cues.length + " fs=" + fs + " y=" + posY);
        app.project.save(new File("D:\\edit\\trading_check\\trading_check.aep"));
        log("saved D:\\edit\\trading_check\\trading_check.aep");
    } catch (e) { log("ERR: " + e.toString() + " line " + e.line); }
    log("DONE");
})();
