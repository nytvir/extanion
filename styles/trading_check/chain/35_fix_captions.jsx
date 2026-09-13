(function () {
    try { app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1); } catch (e) {}
    var LOG = "D:/edit/trading_check/logs/fix_captions_result.txt";
    var f0 = new File(LOG); f0.open("w"); f0.close();
    function log(msg) { var f = new File(LOG); f.open("a"); f.writeln(msg); f.close(); }

    var comp = null;
    for (var i = 1; i <= app.project.numItems; i++) {
        var it = app.project.item(i);
        if (it instanceof CompItem && it.name === "IMG_2594") { comp = it; break; }
    }
    if (!comp) { log("comp not found"); return; }

    var caps = {
        "[Cap] 1":  "Bitta narsani aytaman,",
        "[Cap] 2":  "hech kim aytmagan: tradingda\rhaq bo'lish shart emas.",
        "[Cap] 3":  "O'nta savdodan oltitasida\ryutqazgan treyder",
        "[Cap] 4":  "baribir foydada\rbo'lishi mumkin.",
        "[Cap] 5":  "Qanaqasiga?",
        "[Cap] 6":  "Raqamlarga qara,",
        "[Cap] 7":  "hisoblaymiz.",
        "[Cap] 8":  "Har yutqazganda\r10 dollardan yo'qotadi,",
        "[Cap] 9":  "oltita yutqazdi -\rminus 60 dollar.",
        "[Cap] 10": "Har yutganda\r30 dollar oladi,",
        "[Cap] 11": "to'rtta yutdi -\rplyus 120 dollar.",
        "[Cap] 12": "Oyiga 60 dollar -\rsof foyda.",
        "[Cap] 13": "Ko'proq yutqazdi,\rlekin baribir yutdi.",
        "[Cap] 14": "Endi teskarisi:\ro'ntadan sakkizini",
        "[Cap] 15": "yutgan treyder ham\rsinib ketishi mumkin.",
        "[Cap] 16": "Chunki u yutganda\rozgina olib qochadi,",
        "[Cap] 17": "yutqazganda esa\r'hozir qaytadi' deb",
        "[Cap] 18": "kutib o'tiradi - va\rhammasini yo'qotadi.",
        "[Cap] 19": "Qaytishini kutdi...\rjuda uzoq kutdi."
    };

    var fixed = 0;
    app.beginUndoGroup("Nytvir caption rewrite");
    for (var li = 1; li <= comp.numLayers; li++) {
        var L = comp.layer(li);
        if (caps[L.name] === undefined) continue;
        try {
            var doc = L.property("Source Text");
            var d = doc.value;
            d.text = caps[L.name];
            doc.setValue(d);
            fixed++;
            log("SET " + L.name);
        } catch (e) { log("FAIL " + L.name + ": " + e.toString().substr(0, 60)); }
    }
    app.endUndoGroup();
    log("fixed: " + fixed + " / 19");
    try {
        app.project.save(new File("D:/edit/trading_check/trading_check.aep"));
        log("saved");
    } catch (e) { log("save err: " + e.toString()); }
    log("DONE");
})();
