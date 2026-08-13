// Nytvir Motion Engine - Pro Tier
// High-End Script for AE

var EASE_LIB = "function easeIn(t){return cv==2?Math.pow(t,6) : cv==3?t*t : cv==4?t : t*t*t*t;} " +
               "function easeOut(t){return cv==2?1-Math.pow(1-t,6) : cv==3?1-Math.pow(1-t,2) : cv==4?t : 1-Math.pow(1-t,4);} " +
               "function easeInOut(t){if(cv==2)return t<0.5?32*Math.pow(t,6):1-Math.pow(-2*t+2,6)/2; if(cv==3){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} if(cv==4)return t; return t<0.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2;} " +
               "function easeOutBack(t){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} " +
               "function elasticOut(t){var c=(2*Math.PI)/3;return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;} ";

function nytvir_execute(cmd) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return "Avval kompozitsiya oching!";

    var needsLayer = {rgbSplit:1, deepGlow:1, popIn:1, slideIn:1, echoTrails:1};
    if (needsLayer[cmd] && comp.selectedLayers.length === 0) return "Avval qatlam tanlang!";

    var needsKeys = {flowEase:1, whipImpact:1};
    if (needsKeys[cmd] && comp.selectedProperties.length === 0) return "Avval keyframe'larni tanlang!";

    // Modern expressions (live counters, text.style) require the JS engine.
    try { if (app.project.expressionEngine !== "javascript-1.0") app.project.expressionEngine = "javascript-1.0"; } catch(e) {}

    app.beginUndoGroup("Nytvir Motion: " + cmd);
    try {
        if (cmd === "flowEase") { _applyEase(85, 0, 85, 0); }
        else if (cmd === "whipImpact") { _applyEase(100, 0, 0.1, 0); }
        else if (cmd === "zoomIn") { _adjTransition("Zoom In"); }
        else if (cmd === "zoomOut") { _adjTransition("Zoom Out"); }
        else if (cmd === "panRight") { _adjTransition("Pan Right"); }
        else if (cmd === "cyberShards") { _cyberShards(); }
        else if (cmd === "silkFlow") { _silkFlow(); }
        else if (cmd === "auroraVeil") { _auroraVeil(); }
        else if (cmd === "softBloom") { _softBloom(); }
        else if (cmd === "glassSweep") { _glassSweep(); }
        else if (cmd === "arcReveal") { _arcReveal(); }
        else if (cmd === "softBlinds") { _softBlinds(); }
        else if (cmd === "crestRise") { _crestRise(); }
        else if (cmd === "irisPass") { _irisPass(); }
        else if (cmd === "splitSlide") { _splitSlide(); }
        else if (cmd === "rollSweep") { _rollSweep(); }
        else if (cmd === "windowZoom") { _windowZoom(); }
        else if (cmd === "pendulumSwipe") { _pendulumSwipe(); }
        else if (cmd === "petalSpin") { _petalSpin(); }
        else if (cmd === "dripMelt") { _dripMelt(); }
        else if (cmd === "uiMusicPlayer") { _uiMusicPlayer(); }
        else if (cmd === "uiNotifyPop") { _uiNotifyPop(); }
        else if (cmd === "uiChatBubbles") { _uiChatBubbles(); }
        else if (cmd === "uiSearchType") { _uiSearchType(); }
        else if (cmd === "uiLikeBurst") { _uiLikeBurst(); }
        else if (cmd === "uiPayNotify") { _uiPayNotify(); }
        else if (cmd === "titlePunch") { _titlePunch(); }
        else if (cmd === "titleChrome") { _titleChrome(); }
        else if (cmd === "titleNeon") { _titleNeon(); }
        else if (cmd === "countdownTimer") { _countdownTimer(); }
        else if (cmd === "moneyCounter") { _moneyCounter(); }
        else if (cmd === "growthChart") { _growthChart(); }
        else if (cmd === "notifySubscriber") { _notifySubscriber(); }
        else if (cmd === "titleHighlight") { _titleHighlight(); }
        else if (cmd === "titleRedAlert") { _titleRedAlert(); }
        else if (cmd === "lowerThird") { _lowerThird(); }
        else if (cmd === "arrowCallout") { _arrowCallout(); }
        else if (cmd === "notifyStack") { _notifyStack(); }
        else if (cmd === "imessageChat") { _imessageChat(); }
        else if (cmd === "tweetCard") { _tweetCard(); }
        else if (cmd === "statsDashboard") { _statsDashboard(); }
        else if (cmd === "aiGenerating") { _aiGenerating(); }
        else if (cmd === "cryptoTicker") { _cryptoTicker(); }
        else if (cmd === "tradeProfit") { _tradeProfit(); }
        else if (cmd === "portfolioBalance") { _portfolioBalance(); }
        else if (cmd === "candleChart") { _candleChart(); }
        else if (cmd === "cryptoWatchlist") { _cryptoWatchlist(); }
        else if (cmd === "orderFilled") { _orderFilled(); }
        else if (cmd === "glowProfile") { _glowProfile("blue"); }
        else if (cmd === "glowProfilePurple") { _glowProfile("purple"); }
        else if (cmd === "glowProfileGreen") { _glowProfile("green"); }
        else if (cmd === "glowStat") { _glowStat("blue"); }
        else if (cmd === "glowStatPurple") { _glowStat("purple"); }
        else if (cmd === "glowStatGreen") { _glowStat("green"); }
        else if (cmd === "glowPeak") { _glowPeak("blue"); }
        else if (cmd === "glowPeakPurple") { _glowPeak("purple"); }
        else if (cmd === "glowPeakGreen") { _glowPeak("green"); }
        else if (cmd === "bouncrPosition") { _bouncrApply("position"); }
        else if (cmd === "bouncrScale") { _bouncrApply("scale"); }
        else if (cmd === "bouncrRotation") { _bouncrApply("rotation"); }
        else if (cmd === "neonGrid") { _neonGridHero("blue"); }
        else if (cmd === "neonGridRed") { _neonGridHero("red"); }
        else if (cmd === "neonGridPurple") { _neonGridHero("purple"); }
        else if (cmd === "glowRing") { _glowRing("blue"); }
        else if (cmd === "glowRingPurple") { _glowRing("purple"); }
        else if (cmd === "glowRingGreen") { _glowRing("green"); }
        else if (cmd === "glowWave") { _glowWave("blue"); }
        else if (cmd === "glowWavePurple") { _glowWave("purple"); }
        else if (cmd === "glowWaveGreen") { _glowWave("green"); }
        else if (cmd === "glowBars") { _glowBars("blue"); }
        else if (cmd === "glowBarsPurple") { _glowBars("purple"); }
        else if (cmd === "glowBarsGreen") { _glowBars("green"); }
        else if (cmd === "glowList") { _glowList("blue"); }
        else if (cmd === "glowListPurple") { _glowList("purple"); }
        else if (cmd === "glowListGreen") { _glowList("green"); }
        else if (cmd === "claudeIntro") { _claudeIntro(); }
        else if (cmd === "srtScene1") { _srtScene1(); }
        else if (cmd === "srtScene2") { _srtScene2(); }
        else if (cmd === "srtTraderDemo") { _srtCine("discipline over", "emotions", 2.5, {trader:true}); }
        else if (cmd === "srtScene3") { _srtScene3(); }
        else if (cmd === "srtScene4") { _srtScene4(); }
        else if (cmd === "srtScene5") { _srtScene5(); }
        else if (cmd === "srtScene6") { _srtScene6(); }
        else if (cmd === "srtScene7") { _srtScene7(); }
        else if (cmd === "srtScene8") { _srtScene8(); }
        else if (cmd === "srtScene9") { _srtScene9(); }
        else if (cmd === "srtScene10") { _srtScene10(); }
        else if (cmd === "srtScene11") { _srtScene11(); }
        else if (cmd === "srtScene12") { _srtScene12(); }
        else if (cmd === "srtScene13") { _srtScene13(); }
        else if (cmd === "srtScene14") { _srtScene14(); }
        else if (cmd === "srtScene15") { _srtScene15(); }
        else if (cmd === "srtGap") { _srtGapScene(); }
        else if (cmd === "srtAltType") { _srtCine("not everything has a", "tutorial", 2.166, {n:2}); }
        else if (cmd === "srtDeskA") { _srtCine("not everything has a", "tutorial", 2.766, {n:1, deskv:"A"}); }
        else if (cmd === "srtDeskB") { _srtCine("not everything has a", "tutorial", 2.766, {n:1, deskv:"B"}); }
        else if (cmd === "srtDeskD") { _srtCine("not everything has a", "tutorial", 2.766, {n:1, deskv:"D"}); }
        else if (cmd === "srtS2altA") { _srtCine("some things you have to", "teach yourself", 2.4, {n:2, fx:"stairdoor"}); }
        else if (cmd === "srtS2altB") { _srtCine("some things you have to", "teach yourself", 2.4, {n:2, fx:"stairbooks"}); }
        else if (cmd === "srtS2trade") { _srtCine("some things you have to", "teach yourself", 2.4, {n:2, fx:"candleclimb"}); }
        else if (cmd === "glowQuote") { _glowQuote("blue"); }
        else if (cmd === "glowQuotePurple") { _glowQuote("purple"); }
        else if (cmd === "glowQuoteGreen") { _glowQuote("green"); }
        else if (cmd === "glowIntro") { _glowIntro("blue"); }
        else if (cmd === "glowIntroPurple") { _glowIntro("purple"); }
        else if (cmd === "glowIntroGreen") { _glowIntro("green"); }
        else if (cmd === "glowSteps") { _glowSteps("blue"); }
        else if (cmd === "glowStepsPurple") { _glowSteps("purple"); }
        else if (cmd === "glowStepsGreen") { _glowSteps("green"); }
        else if (cmd === "rechargeMeter") { _rechargeMeter(); }
        else if (cmd === "appleBooks") { _appleBooks(); }
        else if (cmd === "chatGptCard") { _chatGptCard(); }
        else if (cmd === "cameraShake") { _cameraShake(); }
        else if (cmd === "flashCut") { _flashCut(); }
        else if (cmd === "popIn") { _popIn(); }
        else if (cmd === "slideIn") { _slideIn(); }
        else if (cmd === "echoTrails") { _echoTrails(); }
        else if (cmd === "liquidWipe") { _liquidWipe(); }
        else if (cmd === "elasticStretch") { _elasticStretch(); }
        else if (cmd === "bounceMorph") { _bounceMorph(); }
        else if (cmd === "velocityBurst") { _velocityBurst(); }
        else if (cmd === "portalRift") { _portalRift(); }
        else if (cmd === "liquidGlitch") { _liquidGlitch(); }
        else if (cmd === "spiralWipe") { _spiralWipe(); }
        else if (cmd === "fractalMandala") { _fractalMandala(); }
        else if (cmd === "hyperTunnel") { _hyperTunnel(); }
        else if (cmd === "dotMatrix") { _dotMatrix(); }
        else if (cmd === "uiProductCard") { _uiProductCard(); }
        else if (cmd === "uiGlowingProfile") { _uiGlowingProfile(); }
        else if (cmd === "uiMinimalCard") { _uiMinimalCard(); }
        else if (cmd === "panLeft") { _adjTransition("Pan Left"); }
        else if (cmd === "spinRight") { _adjTransition("Spin Right"); }
        else if (cmd === "spinLeft") { _adjTransition("Spin Left"); }
        else if (cmd === "rgbSplit") { _rgbSplit(); }
        else if (cmd === "lensDistort") { _lensDistort(); }
        else if (cmd === "deepGlow") { _deepGlow(); }
        else if (cmd === "janeSrtImport") { _janeSrtImport(); }
        else if (cmd === "janeVibeGrade") { _janeVibeGrade(); }
        else if (cmd === "janeFullSetup") { _janeVibeGrade(); _janeSrtImport(); }
        else if (cmd.indexOf("cap") === 0) { _capDispatch(cmd); }
        else if (cmd.indexOf("txPro") === 0) { _txProDispatch(cmd); }
        else if (cmd.indexOf("txFx") === 0) { _txDispatch(cmd); }
        else if (cmd === "uiBudgetCard") { _uiBudgetCard(); }
        else if (cmd === "uiOrbitalMenu") { _uiOrbitalMenu(); }
        else if (cmd.indexOf("amv") === 0) { _amvDispatch(cmd); }

        app.endUndoGroup();
        return "OK";
    } catch(e) {
        app.endUndoGroup();
        return e.toString() + (e.line ? " @line " + e.line : "");
    }
}

function _applyEase(inI, inS, outI, outS) {
    // KeyframeEase influence must be within 0.1..100
    inI = Math.max(0.1, Math.min(100, inI));
    outI = Math.max(0.1, Math.min(100, outI));
    var comp = app.project.activeItem;
    if(!comp) return;
    var props = comp.selectedProperties;
    for (var i=0; i<props.length; i++) {
        var p = props[i];
        if (p.canVaryOverTime && p.selectedKeys.length > 0) {
            for (var j=0; j<p.selectedKeys.length; j++) {
                var k = p.selectedKeys[j];
                var ei = new KeyframeEase(inS, inI);
                var eo = new KeyframeEase(outS, outI);
                var vt = p.propertyValueType;
                // Spatial properties accept exactly ONE ease object; others need one per dimension
                var dim = 1;
                if (vt === PropertyValueType.TwoD) dim = 2;
                else if (vt === PropertyValueType.ThreeD) dim = 3;
                else if (vt === PropertyValueType.COLOR) dim = 4;
                var arrIn=[], arrOut=[];
                for(var d=0; d<dim; d++) { arrIn.push(ei); arrOut.push(eo); }
                try{ p.setTemporalEaseAtKey(k, arrIn, arrOut); }
                catch(e){ try{ p.setTemporalEaseAtKey(k, [ei], [eo]); } catch(e2){} }
            }
        }
    }
}

function _addFx(L, matchName) {
    return L.property("ADBE Effect Parade").addProperty(matchName);
}

function _addSlider(L, name, val) {
    var s = _addFx(L, "ADBE Slider Control");
    s.name = name;
    s.property(1).setValue(val);
    return s;
}

function _addColorControl(L, name, colorArr) {
    var c = _addFx(L, "ADBE Color Control");
    c.name = name;
    var safeColor = (colorArr.length === 3) ? [colorArr[0], colorArr[1], colorArr[2], 1] : colorArr;
    c.property(1).setValue(safeColor);
    return c;
}

function _setupAdj(comp, name) {
    var dur = 1.0;
    var L = comp.layers.addSolid([0,0,0], "[Nytvir] " + name, comp.width, comp.height, comp.pixelAspect, dur);
    L.adjustmentLayer = true;
    L.inPoint = comp.time - (dur/2);
    
    var tile = _addFx(L, "ADBE Tile");
    tile.property(4).setValue(300); // Output Width
    tile.property(5).setValue(300); // Output Height
    tile.property(6).setValue(1); // Mirror Edges
    
    _addSlider(L, "Transition Speed %", 100);
    _addSlider(L, "Curve Type", 1); // Hidden logic: 1=Smooth, 2=Impact, 3=Bounce, 4=Linear
    return L;
}

function _adjTransition(type) {
    var comp = app.project.activeItem;
    if(!comp) return;
    var L = _setupAdj(comp, type);
    
    var baseExpr = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var mid = dur/2; var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;
    
    if (type === "Zoom In" || type === "Zoom Out") {
        _addSlider(L, "Zoom Power", 200);
        _addSlider(L, "Optics Power", 120);

        var optics = _addFx(L, "ADBE Optics Compensation");
        optics.property(2).setValue(1); // Reverse Distortion
        optics.property(1).expression = baseExpr + 
            "var op = effect('Optics Power')(1);" + 
            "var res; if(t<mid){ var p=t/mid; res=easeIn(p)*op; } else { var p=(t-mid)/mid; res=op - (easeOut(p)*op); } res;";
            
        var tr = _addFx(L, "ADBE Geometry2"); // Transform effect
        tr.property(3).setValue(1); // Uniform Scale = true

        if (type === "Zoom In") {
            tr.property(4).expression = baseExpr + 
                "var zp = effect('Zoom Power')(1);" +
                "var res; if(t<mid){ var p=t/mid; res=100 + easeIn(p)*zp; } else { var p=(t-mid)/mid; res=(100-zp/2) + easeOut(p)*(zp/2); } res;";
        } else {
            tr.property(4).expression = baseExpr + 
                "var zp = effect('Zoom Power')(1);" +
                "var res; if(t<mid){ var p=t/mid; res=100 - easeIn(p)*(zp/3); } else { var p=(t-mid)/mid; res=(100+zp) - easeOut(p)*zp; } res;";
        }
    } 
    else if (type === "Pan Right" || type === "Pan Left") {
        _addSlider(L, "Pan Distance", comp.width);
        _addSlider(L, "Blur Strength", 100);

        var tr = _addFx(L, "ADBE Geometry2");
        var dir = type === "Pan Right" ? -1 : 1;
        tr.property(2).expression = baseExpr + 
            "var cx = " + (comp.width/2) + "; var cy = " + (comp.height/2) + ";" +
            "var dist = effect('Pan Distance')(1) * " + dir + ";" +
            "var res; if(t<mid){ var p=t/mid; res=[cx + dist*easeIn(p), cy]; } else { var p=(t-mid)/mid; res=[cx - dist + dist*easeOut(p), cy]; } res;";
        
        var blur = _addFx(L, "ADBE Directional Blur");
        blur.property(1).setValue(90); // Direction
        blur.property(2).expression = baseExpr + 
            "var bs = effect('Blur Strength')(1);" +
            "var res; if(t<mid){ var p=t/mid; res=easeIn(p)*bs; } else { var p=(t-mid)/mid; res=(1-easeOut(p))*bs; } res;";
    }
    else if (type === "Spin Right" || type === "Spin Left") {
        _addSlider(L, "Spin Angle", 180);
        _addSlider(L, "Zoom Power", 150);
        _addSlider(L, "Optics Power", 80);

        var optics = _addFx(L, "ADBE Optics Compensation");
        optics.property(2).setValue(1); 
        optics.property(1).expression = baseExpr + 
            "var op = effect('Optics Power')(1);" +
            "var res; if(t<mid){ var p=t/mid; res=easeIn(p)*op; } else { var p=(t-mid)/mid; res=op - (easeOut(p)*op); } res;";
            
        var tr = _addFx(L, "ADBE Geometry2");
        tr.property(3).setValue(1); // Uniform Scale

        var dir = type === "Spin Right" ? 1 : -1;
        tr.property(8).expression = baseExpr + 
            "var angle = effect('Spin Angle')(1) * " + dir + ";" +
            "var res; if(t<mid){ var p=t/mid; res=easeIn(p)*angle; } else { var p=(t-mid)/mid; res=-angle + easeOut(p)*angle; } res;";
        
        tr.property(4).expression = baseExpr + 
            "var zp = effect('Zoom Power')(1);" +
            "var res; if(t<mid){ var p=t/mid; res=100 + easeIn(p)*zp; } else { var p=(t-mid)/mid; res=(100+zp) - easeOut(p)*zp; } res;";
    }
}

// ----------------------------------------------------
// PRO SHAPE MORPHS (Fully Customizable)
// ----------------------------------------------------
function _liquidWipe() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.0;
    var w = comp.width, h = comp.height;
    var shape = comp.layers.addShape();
    shape.name = "[Nytvir] Liquid Wipe";
    shape.inPoint = comp.time;
    shape.outPoint = comp.time + dur;
    shape.motionBlur = true;
    comp.motionBlur = true;

    _addSlider(shape, "Transition Speed %", 100);
    _addColorControl(shape, "Morph Color", [1, 1, 1]); 
    _addSlider(shape, "Morph Size", 100);
    _addSlider(shape, "Gooey Amount", 60);
    _addSlider(shape, "Curve Type", 1);

    var blur;
    try { blur = _addFx(shape, "ADBE Gaussian Blur 2"); } catch(e) {
        try { blur = _addFx(shape, "ADBE Fast Blur"); } catch(e2) {}
    }
    if(blur) blur.property(1).expression = "effect('Gooey Amount')(1);";
    
    var choker;
    try { choker = _addFx(shape, "ADBE Simple Choker"); } catch(e) {}
    if(choker) choker.property(1).expression = "-effect('Gooey Amount')(1);";

    var contents = shape.property("ADBE Root Vectors Group");
    var grp = contents.addProperty("ADBE Vector Group");
    
    var baseExpr = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    // VERY IMPORTANT: Ellipses must be added BEFORE the Fill so the Fill covers them!
    var b1 = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    b1.property("ADBE Vector Ellipse Size").expression = "var s = effect('Morph Size')(1)*" + (h/100) + "*1.5; [s,s];";
    b1.property("ADBE Vector Ellipse Position").expression = baseExpr + "var e=easeInOut(p); [(-" + w + ") + (" + (w*1.5) + ")*e, 0];";
        
    var b2 = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    b2.property("ADBE Vector Ellipse Size").expression = "var s = effect('Morph Size')(1)*" + (h/100) + "*1.2; [s,s];";
    b2.property("ADBE Vector Ellipse Position").expression = baseExpr + "var e=easeInOut(Math.max(0, p-0.1)); [(" + w + ") - (" + (w*1.5) + ")*e, " + (h*0.3) + "];";

    var b3 = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    b3.property("ADBE Vector Ellipse Size").expression = baseExpr + "var e=easeInOut(Math.max(0, p-0.2)); var m = effect('Morph Size')(1)*" + (w/100) + "*2.8; var s=e*m; [s,s];";
    b3.property("ADBE Vector Ellipse Position").setValue([0, 0]);

    // Added LAST so it applies to all Ellipses above it
    var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill.property("ADBE Vector Fill Color").expression = "effect('Morph Color')(1);";

    var xf = shape.property("ADBE Transform Group");
    xf.property("ADBE Position").setValue([w/2, h/2]);
}

function _elasticStretch() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.8;
    var w = comp.width, h = comp.height;
    var shape = comp.layers.addShape();
    shape.name = "[Nytvir] Elastic Stretch";
    shape.inPoint = comp.time;
    shape.outPoint = comp.time + dur;
    shape.motionBlur = true;
    comp.motionBlur = true;

    _addSlider(shape, "Transition Speed %", 100);
    _addColorControl(shape, "Line Color", [0.02, 0.71, 0.83]); 
    _addSlider(shape, "Stretch Width", 150);
    _addSlider(shape, "Stretch Height", 150);
    _addSlider(shape, "Curve Type", 1);

    var contents = shape.property("ADBE Root Vectors Group");
    var grp = contents.addProperty("ADBE Vector Group");
    var baseExpr = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rect.property("ADBE Vector Rect Size").expression = baseExpr + 
        "var sw = effect('Stretch Width')(1)/100 * " + w + ";" +
        "var sh = effect('Stretch Height')(1)/100 * " + h + ";" +
        "var x = elasticOut(Math.min(1, p*1.5)) * sw;" +
        "var y = easeInOut(Math.max(0, (p-0.3)*1.4)) * sh;" +
        "[x, y];";
        
    var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill.property("ADBE Vector Fill Color").expression = "effect('Line Color')(1);";

    shape.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
}

function _bounceMorph() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.8;
    var w = comp.width, h = comp.height;
    var shape = comp.layers.addShape();
    shape.name = "[Nytvir] Bounce Morph";
    shape.inPoint = comp.time;
    shape.outPoint = comp.time + dur;
    shape.motionBlur = true;
    comp.motionBlur = true;

    _addSlider(shape, "Transition Speed %", 100);
    _addColorControl(shape, "Impact Color", [0.93, 0.28, 0.6]); 
    _addSlider(shape, "Impact Strength", 100);
    _addSlider(shape, "Curve Type", 1);

    var contents = shape.property("ADBE Root Vectors Group");
    var grp = contents.addProperty("ADBE Vector Group");
    var baseExpr = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rect.property("ADBE Vector Rect Roundness").expression = baseExpr + "var e=easeInOut(Math.max(0, p-0.2)); (1-e)*(" + (h/2) + ");";
        
    rect.property("ADBE Vector Rect Size").expression = baseExpr + 
        "var is = effect('Impact Strength')(1)/100;" +
        "var scaleUp = easeOutBack(Math.min(1, p*2)) * (" + (h*0.3) + " * is);" + 
        "var morph = easeInOut(Math.max(0, (p-0.3)*1.5)) * (" + (w*1.5) + ");" +
        "var finalH = easeInOut(Math.max(0, (p-0.3)*1.5)) * (" + (h*1.5) + ");" +
        "[scaleUp + morph, scaleUp + finalH];";

    var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill.property("ADBE Vector Fill Color").expression = "effect('Impact Color')(1);";

    shape.property("ADBE Transform Group").property("ADBE Position").expression = baseExpr + 
        "var is = effect('Impact Strength')(1)/100;" +
        "var y = easeOutBack(Math.min(1, p*2)) * (" + (h/2) + ");" +
        "[" + (w/2) + ", (" + (-h*0.5*is) + ") + y];"; 
}

function _velocityBurst() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.9;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Velocity Burst Master " + uId;
    
    // Layer 1: Shockwave (Back)
    var shape2 = comp.layers.addShape();
    shape2.name = "[Nytvir] Velocity Burst - Shockwave";
    shape2.inPoint = comp.time;
    shape2.outPoint = comp.time + dur;
    shape2.motionBlur = true;

    // Layer 2: Spikes (Front / Master)
    var shape1 = comp.layers.addShape();
    shape1.name = masterName;
    shape1.inPoint = comp.time;
    shape1.outPoint = comp.time + dur;
    shape1.motionBlur = true;

    _addSlider(shape1, "Transition Speed %", 100);
    _addColorControl(shape1, "Spikes Color", [0.93, 0.1, 0.4]);
    _addColorControl(shape1, "Shockwave Color", [1, 1, 1]);
    _addSlider(shape1, "Spike Count", 40);
    _addSlider(shape1, "Curve Type", 1);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var baseExprS1 = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;
    var baseExprS2 = "var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    // Shockwave
    var contents2 = shape2.property("ADBE Root Vectors Group");
    var grp2 = contents2.addProperty("ADBE Vector Group");
    var ell = grp2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ell.property("ADBE Vector Ellipse Size").expression = baseExprS2 + "var e = easeOutBack(Math.max(0, p-0.1)); var maxS = " + (Math.max(w,h)*2.2) + "; [maxS*e, maxS*e];";
    var fill2 = grp2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill2.property("ADBE Vector Fill Color").expression = mRef + ".effect('Shockwave Color')(1);";
    shape2.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    shape2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = baseExprS2 + "var e = easeInOut(p); e * 180;";

    // Spikes (Master)
    var contents = shape1.property("ADBE Root Vectors Group");
    var grp1 = contents.addProperty("ADBE Vector Group");
    var poly = grp1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    poly.property("ADBE Vector Star Type").setValue(1); 
    poly.property("ADBE Vector Star Points").expression = "Math.round(effect('Spike Count')(1));";
    poly.property("ADBE Vector Star Inner Radius").expression = baseExprS1 + "var e = easeOutBack(Math.min(1, p*1.5)); e * " + (Math.max(w,h)*0.2) + ";";
    poly.property("ADBE Vector Star Outer Radius").expression = baseExprS1 + "var e = easeInOut(p); e * " + (Math.max(w,h)*1.5) + ";";
    var fill1 = grp1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill1.property("ADBE Vector Fill Color").expression = "effect('Spikes Color')(1);";
    shape1.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    shape1.property("ADBE Transform Group").property("ADBE Rotate Z").expression = baseExprS1 + "var e = easeInOut(p); e * 180;";

    try {
        var glow = shape1.Effects.addProperty("ADBE Deep Glow") || shape1.Effects.addProperty("Deep Glow");
    } catch(e) {}

    comp.motionBlur = true;
    shape2.selected = false;
    shape1.selected = true;
}

function _portalRift() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.2;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Portal Rift Master " + uId;
    
    var shape1 = comp.layers.addShape();
    shape1.name = "[Nytvir] Portal Rift - Aura";
    shape1.inPoint = comp.time;
    shape1.outPoint = comp.time + dur;
    shape1.motionBlur = true;
    
    var shape2 = comp.layers.addShape();
    shape2.name = masterName;
    shape2.inPoint = comp.time;
    shape2.outPoint = comp.time + dur;
    shape2.motionBlur = true;

    _addSlider(shape2, "Transition Speed %", 100);
    _addColorControl(shape2, "Core Color", [0.95, 0.1, 0.4]);
    _addColorControl(shape2, "Aura Color", [0.1, 0.9, 0.95]);
    _addSlider(shape2, "Portal Depth", 30);
    _addSlider(shape2, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';
    var baseExprS1 = "var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB;
    var baseExprS2 = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    // Layer 1: Aura (Slave)
    var contents1 = shape1.property("ADBE Root Vectors Group");
    var grp1 = contents1.addProperty("ADBE Vector Group");
    var poly1 = grp1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    poly1.property("ADBE Vector Star Type").setValue(2);
    poly1.property("ADBE Vector Star Points").setValue(6);
    poly1.property("ADBE Vector Star Outer Radius").expression = baseExprS1 + "var e = easeInOut(p); " + (Math.max(w,h)*1.5) + " * e;";
    var stroke1 = grp1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    stroke1.property("ADBE Vector Stroke Color").expression = mRef+".effect('Aura Color')(1);";
    stroke1.property("ADBE Vector Stroke Width").expression = baseExprS1 + "var e=easeInOut(p); 50 * (1-e) + 10;";
    var rep1 = grp1.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
    rep1.property("ADBE Vector Repeater Copies").expression = "Math.round("+mRef+".effect('Portal Depth')(1));";
    var repXf1 = rep1.property("ADBE Vector Repeater Transform");
    repXf1.property("ADBE Vector Repeater Scale").setValue([85, 85]);
    repXf1.property("ADBE Vector Repeater Rotation").expression = baseExprS1 + "var e = easeOutBack(p); 15 * e;";
    shape1.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    shape1.property("ADBE Transform Group").property("ADBE Rotate Z").expression = baseExprS1 + "var e = easeInOut(p); e * 90;";

    // Layer 2: Core (Master)
    var contents2 = shape2.property("ADBE Root Vectors Group");
    var grp2 = contents2.addProperty("ADBE Vector Group");
    var poly2 = grp2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    poly2.property("ADBE Vector Star Type").setValue(2); 
    poly2.property("ADBE Vector Star Points").setValue(6);
    poly2.property("ADBE Vector Star Outer Radius").expression = baseExprS2 + "var e = easeOutBack(Math.max(0, p - 0.1)); " + (Math.max(w,h)*1.2) + " * e;";
    var fill2 = grp2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fill2.property("ADBE Vector Fill Color").expression = "effect('Core Color')(1);";
    var rep2 = grp2.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
    rep2.property("ADBE Vector Repeater Copies").expression = "Math.round(effect('Portal Depth')(1) / 2);";
    var repXf2 = rep2.property("ADBE Vector Repeater Transform");
    repXf2.property("ADBE Vector Repeater Scale").setValue([75, 75]);
    repXf2.property("ADBE Vector Repeater Rotation").expression = baseExprS2 + "var e = easeInOut(p); -20 * e;";
    shape2.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    shape2.property("ADBE Transform Group").property("ADBE Rotate Z").expression = baseExprS2 + "var e = easeInOut(p); e * 90;";

    comp.motionBlur = true;
    shape1.selected = false;
    shape2.selected = true;
}

function _liquidGlitch() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.8;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Liquid Glitch Master " + uId;
    
    var colors = [[1,1,1], [0.95, 0.1, 0.4], [0.05, 0.9, 0.8]];
    var names = ["Base", "Mid", "Top"];
    var shapes = [];

    for (var i = 0; i < 3; i++) {
        var shape = comp.layers.addShape();
        shape.name = (i===2) ? masterName : "[Nytvir] Liquid Glitch - " + names[i];
        shape.inPoint = comp.time;
        shape.outPoint = comp.time + dur;
        shape.motionBlur = true;
        shapes.push(shape);
    }
    
    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color Top", colors[2]);
    _addColorControl(master, "Color Mid", colors[1]);
    _addColorControl(master, "Color Base", colors[0]);
    _addSlider(master, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';

    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i === 2);
        var baseExpr = isM ? 
            ("var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB) :
            ("var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB);

        var contents = s.property("ADBE Root Vectors Group");
        var grp = contents.addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").expression = "[" + (w*1.5) + ", " + (h*2) + "];";
        
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        var colorName = i===2 ? "Color Top" : i===1 ? "Color Mid" : "Color Base";
        fill.property("ADBE Vector Fill Color").expression = isM ? "effect('"+colorName+"')(1);" : mRef+".effect('"+colorName+"')(1);";
        
        var xf = grp.property("ADBE Transform Group");
        xf.property("ADBE Position").expression = baseExpr + 
            "var delay = " + (i * 0.08) + ";" +
            "var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = elasticOut(pp);" + 
            "var scaleMorph = easeInOut(Math.max(0, (pp-0.2)*1.2));" +
            "var startY = " + (h*1.5) + ";" +
            "var endY = 0;" +
            "var y = startY + (endY - startY)*e;" +
            "var wobble = Math.sin(pp * Math.PI * 4) * 100 * (1-scaleMorph);" +
            "[0, y + wobble];";
        xf.property("ADBE Rotate Z").expression = baseExpr + 
            "var delay = " + (i * 0.08) + ";" +
            "var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = elasticOut(pp); (1-e) * " + (i%2==0 ? 15 : -15) + ";";

        var mainXf = s.property("ADBE Transform Group");
        mainXf.property("ADBE Position").setValue([w/2, h/2]);
        
        s.selected = isM;
    }
    comp.motionBlur = true;
}

function _fractalMandala() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.4;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Fractal Mandala Master " + uId;
    var colors = [[1,0.8,0], [0.8,0.1,0.4], [0.1,0.9,0.9]];
    var names = ["Base", "Mid", "Top"];
    var shapes = [];

    for (var i = 0; i < 3; i++) {
        var shape = comp.layers.addShape();
        shape.name = (i===2) ? masterName : "[Nytvir] Fractal Mandala - " + names[i];
        shape.inPoint = comp.time;
        shape.outPoint = comp.time + dur;
        shape.motionBlur = true;
        shapes.push(shape);
    }
    
    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color Top", colors[2]);
    _addColorControl(master, "Color Mid", colors[1]);
    _addColorControl(master, "Color Base", colors[0]);
    _addSlider(master, "Petals", 12);
    _addSlider(master, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';

    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i === 2);
        var baseExpr = isM ? 
            ("var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB) :
            ("var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB);

        var contents = s.property("ADBE Root Vectors Group");
        var grp = contents.addProperty("ADBE Vector Group");
        
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").expression = baseExpr + "var e = easeInOut(p); var s = " + (Math.max(w,h)*1.5) + " * e; [s, s];";
        ell.property("ADBE Vector Ellipse Position").expression = baseExpr + "var delay = "+(i*0.1)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay))); var e = easeOutBack(pp); var offset = " + (Math.max(w,h)*0.5) + " * e; [0, -offset];";

        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        var colorName = i===2 ? "Color Top" : i===1 ? "Color Mid" : "Color Base";
        fill.property("ADBE Vector Fill Color").expression = isM ? "effect('"+colorName+"')(1);" : mRef+".effect('"+colorName+"')(1);";
        
        var rep = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
        rep.property("ADBE Vector Repeater Copies").expression = isM ? "Math.round(effect('Petals')(1));" : "Math.round("+mRef+".effect('Petals')(1));";
        var repXf = rep.property("ADBE Vector Repeater Transform");
        repXf.property("ADBE Vector Repeater Rotation").expression = isM ? "360 / Math.round(effect('Petals')(1));" : "360 / Math.round("+mRef+".effect('Petals')(1));";

        var mainXf = s.property("ADBE Transform Group");
        mainXf.property("ADBE Position").setValue([w/2, h/2]);
        mainXf.property("ADBE Rotate Z").expression = baseExpr + "var delay = "+(i*0.1)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay))); var e = easeInOut(pp); e * 180;";
        
        s.selected = isM;
    }
}

function _hyperTunnel() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.3;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Hyper Tunnel Master " + uId;
    var colors = [[0.05, 0.05, 0.1], [0.5, 0.1, 0.8], [0.1, 0.9, 0.9]];
    var names = ["Void", "Core", "Aura"];
    var shapes = [];

    for (var i = 0; i < 3; i++) {
        var shape = comp.layers.addShape();
        shape.name = (i===2) ? masterName : "[Nytvir] Hyper Tunnel - " + names[i];
        shape.inPoint = comp.time;
        shape.outPoint = comp.time + dur;
        shape.motionBlur = true;
        shapes.push(shape);
    }
    
    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color Aura", colors[2]);
    _addColorControl(master, "Color Core", colors[1]);
    _addColorControl(master, "Color Void", colors[0]);
    _addSlider(master, "Tunnel Depth", 50);
    _addSlider(master, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';

    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i === 2);
        var baseExpr = isM ? 
            ("var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB) :
            ("var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB);

        var contents = s.property("ADBE Root Vectors Group");
        var grp = contents.addProperty("ADBE Vector Group");
        
        var poly = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
        poly.property("ADBE Vector Star Type").setValue(2);
        poly.property("ADBE Vector Star Points").setValue(i===0 ? 4 : (i===1 ? 6 : 8)); 
        poly.property("ADBE Vector Star Outer Radius").expression = baseExpr + "var delay = "+(i*0.05)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay))); var e = easeInOut(pp); e * " + (Math.max(w,h)*5) + ";";

        var strk = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        var colorName = i===2 ? "Color Aura" : i===1 ? "Color Core" : "Color Void";
        strk.property("ADBE Vector Stroke Color").expression = isM ? "effect('"+colorName+"')(1);" : mRef+".effect('"+colorName+"')(1);";
        strk.property("ADBE Vector Stroke Width").expression = baseExpr + "var e = easeOutBack(p); e * 40 + 10;";
        
        if (i===0) {
            var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
            fill.property("ADBE Vector Fill Color").expression = mRef+".effect('Color Void')(1);";
        }

        var rep = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
        rep.property("ADBE Vector Repeater Copies").expression = isM ? "Math.round(effect('Tunnel Depth')(1));" : "Math.round("+mRef+".effect('Tunnel Depth')(1));";
        var repXf = rep.property("ADBE Vector Repeater Transform");
        repXf.property("ADBE Vector Repeater Scale").setValue([85, 85]);
        repXf.property("ADBE Vector Repeater Rotation").expression = baseExpr + "var e = easeInOut(p); e * " + (10 + i*5) + ";";

        var mainXf = s.property("ADBE Transform Group");
        mainXf.property("ADBE Position").setValue([w/2, h/2]);
        mainXf.property("ADBE Rotate Z").expression = baseExpr + "var delay = "+(i*0.05)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay))); var e = easeInOut(pp); e * -90;";
        
        s.selected = isM;
    }
}

function _cyberShards() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.8;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Cyber Shards Master " + uId;
    
    var colors = [[1,1,1], [0.93, 0.1, 0.4], [0.1, 0.8, 0.95], [0.05, 0.05, 0.1]];
    var shapes = [];

    for (var i = 0; i < 4; i++) {
        var shape = comp.layers.addShape();
        shape.name = (i===3) ? masterName : "[Nytvir] Cyber Shards - Part " + (i+1);
        shape.inPoint = comp.time;
        shape.outPoint = comp.time + dur;
        shape.motionBlur = true;
        shapes.push(shape);
    }
    
    var master = shapes[3];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Shard 4", colors[3]);
    _addColorControl(master, "Shard 3", colors[2]);
    _addColorControl(master, "Shard 2", colors[1]);
    _addColorControl(master, "Shard 1", colors[0]);
    _addSlider(master, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';

    for (var i = 0; i < 4; i++) {
        var s = shapes[i];
        var isM = (i === 3);
        var baseExpr = isM ? 
            ("var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB) :
            ("var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB);

        var contents = s.property("ADBE Root Vectors Group");
        var grp = contents.addProperty("ADBE Vector Group");
        var poly = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
        poly.property("ADBE Vector Star Type").setValue(2);
        poly.property("ADBE Vector Star Points").setValue(i===0 ? 3 : (i===1 ? 4 : (i===2 ? 5 : 6)));
        poly.property("ADBE Vector Star Outer Radius").setValue(Math.max(w,h) * 1.8);
        
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        var colorName = "Shard " + (i+1);
        fill.property("ADBE Vector Fill Color").expression = isM ? "effect('"+colorName+"')(1);" : mRef+".effect('"+colorName+"')(1);";
        
        var mainXf = s.property("ADBE Transform Group");
        
        var ox = (i%2===0) ? -w : w*2;
        var oy = (i<2) ? -h : h*2;
        
        mainXf.property("ADBE Position").expression = baseExpr + 
            "var delay = "+(i*0.06)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = elasticOut(pp);" +
            "var startX = " + ox + "; var startY = " + oy + ";" +
            "var endX = " + (w/2) + "; var endY = " + (h/2) + ";" +
            "[startX + (endX - startX)*e, startY + (endY - startY)*e];";
            
        mainXf.property("ADBE Rotate Z").expression = baseExpr + 
            "var delay = "+(i*0.06)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = elasticOut(pp); (1-e) * " + (i%2===0 ? -90 : 90) + ";";
            
        s.selected = isM;
    }
}

function _dotMatrix() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.0;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Dot Matrix Master " + uId;
    
    var colors = [[1,1,1], [0.1, 0.9, 0.9], [0.05, 0.05, 0.1]];
    var names = ["Base", "Mid", "Top"];
    var shapes = [];

    for (var i = 0; i < 3; i++) {
        var shape = comp.layers.addShape();
        shape.name = (i===2) ? masterName : "[Nytvir] Dot Matrix - " + names[i];
        shape.inPoint = comp.time;
        shape.outPoint = comp.time + dur;
        shape.motionBlur = true;
        shapes.push(shape);
    }
    
    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color Top", colors[2]);
    _addColorControl(master, "Color Mid", colors[1]);
    _addColorControl(master, "Color Base", colors[0]);
    _addSlider(master, "Grid Cols", 10);
    _addSlider(master, "Grid Rows", 10);
    _addSlider(master, "Curve Type", 1);
    
    var mRef = 'thisComp.layer("' + masterName + '")';

    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i === 2);
        var baseExpr = isM ? 
            ("var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB) :
            ("var spd = "+mRef+".effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round("+mRef+".effect('Curve Type')(1));}catch(e){} " + EASE_LIB);

        var contents = s.property("ADBE Root Vectors Group");
        var grp = contents.addProperty("ADBE Vector Group");
        
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        var colsExpr = isM ? "Math.max(1, Math.round(effect('Grid Cols')(1)))" : "Math.max(1, Math.round("+mRef+".effect('Grid Cols')(1)))";
        var rowsExpr = isM ? "Math.max(1, Math.round(effect('Grid Rows')(1)))" : "Math.max(1, Math.round("+mRef+".effect('Grid Rows')(1)))";
        
        rect.property("ADBE Vector Rect Size").expression = baseExpr + 
            "var cols = " + colsExpr + "; var rows = " + rowsExpr + ";" +
            "var cellW = " + w + " / cols; var cellH = " + h + " / rows;" +
            "var delay = "+(i*0.08)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = elasticOut(pp); [cellW * 1.1 * e, cellH * 1.1 * e];";
            
        rect.property("ADBE Vector Rect Roundness").expression = baseExpr + 
            "var cols = " + colsExpr + "; var cellW = " + w + " / cols;" +
            "var delay = "+(i*0.08)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = easeOutBack(pp); cellW/2 * (1-e);";

        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        var colorName = i===2 ? "Color Top" : i===1 ? "Color Mid" : "Color Base";
        fill.property("ADBE Vector Fill Color").expression = isM ? "effect('"+colorName+"')(1);" : mRef+".effect('"+colorName+"')(1);";
        
        var repX = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
        repX.property("ADBE Vector Repeater Copies").expression = colsExpr + " + 2;";
        var repXfX = repX.property("ADBE Vector Repeater Transform");
        repXfX.property("ADBE Vector Repeater Position").expression = "var cols = " + colsExpr + "; [" + w + "/cols, 0];";
        
        var repY = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
        repY.property("ADBE Vector Repeater Copies").expression = rowsExpr + " + 2;";
        var repXfY = repY.property("ADBE Vector Repeater Transform");
        repXfY.property("ADBE Vector Repeater Position").expression = "var rows = " + rowsExpr + "; [0, " + h + "/rows];";

        var mainXf = s.property("ADBE Transform Group");
        mainXf.property("ADBE Position").expression = "var cols = " + colsExpr + "; var rows = " + rowsExpr + "; [-(" + w + "/cols), -(" + h + "/rows)];";
        
        var grpXf = grp.property("ADBE Transform Group");
        grpXf.property("ADBE Rotate Z").expression = baseExpr + "var delay = "+(i*0.08)+"; var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay))); var e = easeInOut(pp); (1-e) * 90;";

        s.selected = isM;
    }
}

function _uiProductCard() {
    var comp = app.project.activeItem;
    if(!comp) { alert("Please open a composition."); return; }
    
    app.beginUndoGroup("God Tier UI: Product Card");
    var dur = 4.0;
    var tIn = comp.time;
    var tOut = comp.time + dur;
    var w = comp.width, h = comp.height;
    
    var ctrl = comp.layers.addNull(dur);
    ctrl.name = "🛒 PRODUCT CARD CONTROLLER";
    ctrl.inPoint = tIn; ctrl.outPoint = tOut;
    ctrl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    
    _addSlider(ctrl, "Animation Speed", 100);
    _addColorControl(ctrl, "Card BG", [0.96, 0.96, 0.96]); 
    _addColorControl(ctrl, "Button Color", [0.95, 0.5, 0.1]); 
    _addColorControl(ctrl, "Text Color", [0.2, 0.2, 0.2]); 
    
    var baseExpr = "var spd = effect('Animation Speed')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var pIn = Math.max(0, Math.min(1, t/(dur*0.25))); var pOut = Math.max(0, Math.min(1, (t - dur*0.8)/(dur*0.2))); function easeOutBack(t){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} function easeInBack(t){var c1=1.70158;var c3=c1+1;return c3*t*t*t-c1*t*t;} function elasticOut(t){var c=(2*Math.PI)/3;return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;} ";

    function getAnim(delay, type) {
        var str = baseExpr + "var delay = "+delay+"; var pp = Math.max(0, Math.min(1, (pIn-delay)/(1-delay))); ";
        if(type === "slideUp") return str + "var e = easeOutBack(pp); var eOut = easeInBack(pOut); var eo = e - eOut; value + [0, 100*(1-eo)];";
        if(type === "opacity") return str + "var e = Math.min(1, pp*2); var eOut = Math.min(1, pOut*2); (e - eOut)*100;";
        if(type === "pop") return str + "var e = elasticOut(pp); var eOut = easeInBack(pOut); var eo = e - eOut; [eo*100, eo*100];";
        return "";
    }

    var base = comp.layers.addShape();
    base.name = "Card Base";
    base.inPoint = tIn; base.outPoint = tOut;
    var g1 = base.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var r1 = g1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    r1.property("ADBE Vector Rect Size").setValue([500, 700]);
    r1.property("ADBE Vector Rect Roundness").setValue(24);
    var f1 = g1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f1.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Card BG")(1)';
    base.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.0, "slideUp");
    base.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.0, "opacity");
    base.property("ADBE Transform Group").property("ADBE Scale").expression = baseExpr + "var eOut = easeInBack(pOut); [(1-eOut)*100, (1-eOut)*100];";
    base.parent = ctrl;
    try {
        var ds = base.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(15); 
        ds.property("ADBE Drop Shadow-0004").setValue(80); 
        ds.property("ADBE Drop Shadow-0005").setValue(40); 
    } catch(e) {}

    var img = comp.layers.addShape();
    img.name = "Product Image (Drop Here & Alpha Matte)";
    img.inPoint = tIn; img.outPoint = tOut;
    var g2 = img.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var r2 = g2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    r2.property("ADBE Vector Rect Size").setValue([460, 320]);
    r2.property("ADBE Vector Rect Roundness").setValue(16);
    var f2 = g2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f2.property("ADBE Vector Fill Color").setValue([0.8, 0.4, 0.1]);
    img.property("ADBE Transform Group").property("ADBE Position").setValue([0, -160]);
    img.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.1, "pop");
    img.parent = ctrl;

    var title = comp.layers.addText("LUMINA Studio Display 001");
    title.name = "Title";
    title.inPoint = tIn; title.outPoint = tOut;
    var tDoc = title.property("Source Text").value;
    tDoc.fontSize = 28; tDoc.justification = 6145;
    title.property("Source Text").setValue(tDoc);
    title.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    title.property("ADBE Transform Group").property("ADBE Position").setValue([-230, 40]);
    title.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.2, "slideUp");
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.2, "opacity");
    title.parent = ctrl;

    var desc = comp.layers.addText("LUMINA Studio Display 001 combines stunning visuals,\npro-grade color accuracy, and a sleek modern design.\nIdeal for creative professionals, it's built to handle\neverything with flawless precision.");
    desc.name = "Description";
    desc.inPoint = tIn; desc.outPoint = tOut;
    var tDoc2 = desc.property("Source Text").value;
    tDoc2.fontSize = 14; tDoc2.justification = 6145;
    desc.property("Source Text").setValue(tDoc2);
    desc.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    desc.property("ADBE Transform Group").property("ADBE Position").setValue([-230, 140]);
    desc.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.3, "slideUp");
    desc.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.3, "opacity");
    desc.parent = ctrl;

    var price = comp.layers.addText("$999");
    price.name = "Price";
    price.inPoint = tIn; price.outPoint = tOut;
    var tDoc3 = price.property("Source Text").value;
    tDoc3.fontSize = 42; tDoc3.justification = 6145;
    price.property("Source Text").setValue(tDoc3);
    price.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    price.property("ADBE Transform Group").property("ADBE Position").setValue([-230, 270]);
    price.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.4, "slideUp");
    price.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.4, "opacity");
    price.parent = ctrl;

    var btn = comp.layers.addShape();
    btn.name = "Button Base";
    btn.inPoint = tIn; btn.outPoint = tOut;
    var gB = btn.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rB.property("ADBE Vector Rect Size").setValue([180, 50]);
    rB.property("ADBE Vector Rect Roundness").setValue(15);
    var fB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fB.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Button Color")(1)';
    btn.property("ADBE Transform Group").property("ADBE Position").setValue([140, 260]);
    btn.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.5, "pop");
    btn.parent = ctrl;

    var btnTxt = comp.layers.addText("Add to cart");
    btnTxt.name = "Button Text";
    btnTxt.inPoint = tIn; btnTxt.outPoint = tOut;
    var tDoc4 = btnTxt.property("Source Text").value;
    tDoc4.fontSize = 18; tDoc4.justification = 6147;
    btnTxt.property("Source Text").setValue(tDoc4);
    btnTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = [1,1,1]; d;';
    btnTxt.property("ADBE Transform Group").property("ADBE Position").setValue([140, 265]);
    btnTxt.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.55, "pop");
    btnTxt.parent = ctrl;

    ctrl.selected = true;
    app.endUndoGroup();
}

function _uiGlowingProfile() {
    var comp = app.project.activeItem;
    if(!comp) { alert("Please open a composition."); return; }
    
    app.beginUndoGroup("God Tier UI: Glowing Profile Clone");
    var dur = 4.0;
    var tIn = comp.time;
    var tOut = comp.time + dur;
    var w = comp.width, h = comp.height;
    
    var ctrl = comp.layers.addNull(dur);
    ctrl.name = "⭐ PROFILE CONTROLLER";
    ctrl.inPoint = tIn; ctrl.outPoint = tOut;
    ctrl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    
    _addSlider(ctrl, "Animation Speed", 100);
    _addColorControl(ctrl, "Theme Color", [0.0, 0.45, 1.0]); 
    _addColorControl(ctrl, "Text Color", [1, 1, 1]); 
    
    var baseExpr = "var spd = effect('Animation Speed')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var pIn = Math.max(0, Math.min(1, t/(dur*0.25))); var pOut = Math.max(0, Math.min(1, (t - dur*0.8)/(dur*0.2))); function easeOutBack(t){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} function easeInBack(t){var c1=1.70158;var c3=c1+1;return c3*t*t*t-c1*t*t;} function elasticOut(t){var c=(2*Math.PI)/3;return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;} ";

    function getAnim(delay, type) {
        var str = baseExpr + "var delay = "+delay+"; var pp = Math.max(0, Math.min(1, (pIn-delay)/(1-delay))); ";
        if(type === "slideUp") return str + "var e = easeOutBack(pp); var eOut = easeInBack(pOut); var eo = e - eOut; value + [0, 80*(1-eo)];";
        if(type === "opacity") return str + "var e = Math.min(1, pp*2); var eOut = Math.min(1, pOut*2); (e - eOut)*100;";
        if(type === "pop") return str + "var e = elasticOut(pp); var eOut = easeInBack(pOut); var eo = e - eOut; [eo*100, eo*100];";
        return "";
    }

    // --- REVERSE ORDER CREATION (Bottom to Top) ---
    
    // 16. Background Faded Text
    var bgTxt = comp.layers.addText("NEVER STOP\nNEVER STOP\nLEARNING");
    bgTxt.name = "Background Text";
    bgTxt.inPoint = tIn; bgTxt.outPoint = tOut;
    var tDbg = bgTxt.property("Source Text").value;
    tDbg.fontSize = 130; tDbg.justification = 6147; 
    bgTxt.property("Source Text").setValue(tDbg);
    bgTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Theme Color")(1); d;';
    bgTxt.property("ADBE Transform Group").property("ADBE Opacity").setValue(12);
    bgTxt.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2 - 150]);

    // 15. Ambient Glow behind card
    var glow = comp.layers.addShape();
    glow.name = "Ambient Glow";
    glow.inPoint = tIn; glow.outPoint = tOut;
    var gG = glow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rG = gG.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rG.property("ADBE Vector Rect Size").setValue([520, 720]);
    rG.property("ADBE Vector Rect Roundness").setValue(80);
    var fG = gG.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fG.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Theme Color")(1)';
    try {
        var blurG = glow.Effects.addProperty("ADBE Fast Blur");
        blurG.property("ADBE Fast Blur-0001").setValue(150);
    } catch(e) {}
    glow.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.0, "pop");
    glow.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.0, "opacity");
    glow.parent = ctrl;

    // 14. Avatar Image (Solid with Alpha Matte)
    var ava = comp.layers.addSolid([0.2, 0.2, 0.25], "[DROP AVATAR IMAGE HERE]", 500, 700, 1.0);
    ava.name = "[DROP AVATAR IMAGE HERE]";
    ava.inPoint = tIn; ava.outPoint = tOut;
    ava.parent = ctrl;

    // 13. Card Matte for Avatar
    var matte1 = comp.layers.addShape();
    matte1.name = "Card Matte 1";
    matte1.inPoint = tIn; matte1.outPoint = tOut;
    var gM1 = matte1.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rM1 = gM1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rM1.property("ADBE Vector Rect Size").setValue([500, 700]);
    rM1.property("ADBE Vector Rect Roundness").setValue(40);
    gM1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    matte1.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.05, "pop");
    matte1.parent = ctrl;
    try { ava.trackMatteType = TrackMatteType.ALPHA; } catch(e) {}

    // 12. Bottom Fade Solid
    var fade = comp.layers.addSolid([0, 0.5, 1.0], "Bottom Blue Fade", 500, 700, 1.0);
    fade.name = "Bottom Blue Fade";
    fade.inPoint = tIn; fade.outPoint = tOut;
    try {
        var fFill = fade.Effects.addProperty("ADBE Fill");
        fFill.property("ADBE Fill-0002").expression = 'thisComp.layer("'+ctrl.name+'").effect("Theme Color")(1)';
    } catch(e) {}
    var fMask = fade.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
    var fShape = new Shape();
    fShape.vertices = [[0, 250], [500, 250], [500, 700], [0, 700]];
    fShape.closed = true;
    fMask.property("ADBE Mask Shape").setValue(fShape);
    fMask.property("ADBE Mask Feather").setValue([0, 300]); // Huge vertical feather
    fade.parent = ctrl;

    // 11. Fade Matte
    var matte2 = comp.layers.addShape();
    matte2.name = "Card Matte 2";
    matte2.inPoint = tIn; matte2.outPoint = tOut;
    var gM2 = matte2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rM2 = gM2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rM2.property("ADBE Vector Rect Size").setValue([500, 700]);
    rM2.property("ADBE Vector Rect Roundness").setValue(40);
    gM2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    matte2.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.05, "pop");
    matte2.parent = ctrl;
    try { fade.trackMatteType = TrackMatteType.ALPHA; } catch(e) {}

    // 10. Card Outline (Glowing Stroke)
    var stroke = comp.layers.addShape();
    stroke.name = "Glowing Outline";
    stroke.inPoint = tIn; stroke.outPoint = tOut;
    var gS = stroke.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rS = gS.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rS.property("ADBE Vector Rect Size").setValue([500, 700]);
    rS.property("ADBE Vector Rect Roundness").setValue(40);
    var sS = gS.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    sS.property("ADBE Vector Stroke Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Theme Color")(1)';
    sS.property("ADBE Vector Stroke Width").setValue(6);
    stroke.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.05, "pop");
    stroke.parent = ctrl;

    // 9. Stats Icons
    var icons = comp.layers.addShape();
    icons.name = "UI Icons";
    icons.inPoint = tIn; icons.outPoint = tOut;
    var gI1 = icons.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var eH = gI1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    eH.property("ADBE Vector Ellipse Size").setValue([10, 10]);
    eH.property("ADBE Vector Ellipse Position").setValue([-210, 276]);
    var eB = gI1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    eB.property("ADBE Vector Ellipse Size").setValue([18, 12]);
    eB.property("ADBE Vector Ellipse Position").setValue([-210, 288]);
    var sI1 = gI1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    sI1.property("ADBE Vector Stroke Color").setValue([1,1,1]);
    sI1.property("ADBE Vector Stroke Width").setValue(1.5);

    var gI2 = icons.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rI1 = gI2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rI1.property("ADBE Vector Rect Size").setValue([12, 16]);
    rI1.property("ADBE Vector Rect Position").setValue([-110, 282]);
    var sI2 = gI2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    sI2.property("ADBE Vector Stroke Color").setValue([1,1,1]);
    sI2.property("ADBE Vector Stroke Width").setValue(1.5);
    icons.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.4, "slideUp");
    icons.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.4, "opacity");
    icons.parent = ctrl;

    // 8. Stats Text
    var stat1 = comp.layers.addText("45K");
    stat1.inPoint = tIn; stat1.outPoint = tOut;
    var tD1 = stat1.property("Source Text").value;
    tD1.fontSize = 16; tD1.justification = 6145;
    stat1.property("Source Text").setValue(tD1);
    stat1.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    stat1.property("ADBE Transform Group").property("ADBE Position").setValue([-195, 288]);
    stat1.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.4, "slideUp");
    stat1.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.4, "opacity");
    stat1.parent = ctrl;

    var stat2 = comp.layers.addText("573");
    stat2.inPoint = tIn; stat2.outPoint = tOut;
    var tD2 = stat2.property("Source Text").value;
    tD2.fontSize = 16; tD2.justification = 6145;
    stat2.property("Source Text").setValue(tD2);
    stat2.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    stat2.property("ADBE Transform Group").property("ADBE Position").setValue([-95, 288]);
    stat2.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.45, "slideUp");
    stat2.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.45, "opacity");
    stat2.parent = ctrl;

    // 7. Subtitle Text
    var subTxt = comp.layers.addText("UX/UI & Product Designer | Help\nbusiness to build their Brand");
    subTxt.name = "Subtitle Text";
    subTxt.inPoint = tIn; subTxt.outPoint = tOut;
    var tD3 = subTxt.property("Source Text").value;
    tD3.fontSize = 16; tD3.justification = 6145; 
    subTxt.property("Source Text").setValue(tD3);
    subTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    subTxt.property("ADBE Transform Group").property("ADBE Position").setValue([-210, 190]);
    subTxt.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.3, "slideUp");
    subTxt.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.3, "opacity");
    subTxt.parent = ctrl;

    // 6. Name Text
    var nameTxt = comp.layers.addText("Abu Fahim");
    nameTxt.name = "Name Text";
    nameTxt.inPoint = tIn; nameTxt.outPoint = tOut;
    var tD4 = nameTxt.property("Source Text").value;
    tD4.fontSize = 36; tD4.justification = 6145; 
    nameTxt.property("Source Text").setValue(tD4);
    nameTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    nameTxt.property("ADBE Transform Group").property("ADBE Position").setValue([-210, 140]);
    nameTxt.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.2, "slideUp");
    nameTxt.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.2, "opacity");
    nameTxt.parent = ctrl;

    // 5. Verified Badge
    var badge = comp.layers.addShape();
    badge.name = "Verified Badge";
    badge.inPoint = tIn; badge.outPoint = tOut;
    var gB = badge.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    pB.property("ADBE Vector Star Type").setValue(1); 
    pB.property("ADBE Vector Star Points").setValue(12);
    pB.property("ADBE Vector Star Inner Radius").setValue(10);
    pB.property("ADBE Vector Star Outer Radius").setValue(13);
    var fB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fB.property("ADBE Vector Fill Color").setValue([1, 1, 1]); // White badge
    // Inner dark checkmark (small rects)
    var c1 = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    c1.property("ADBE Vector Rect Size").setValue([3, 8]);
    c1.property("ADBE Vector Rect Position").setValue([-2, 1]);
    c1.property("ADBE Vector Rect Rotation").setValue(-45);
    var c2 = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    c2.property("ADBE Vector Rect Size").setValue([3, 12]);
    c2.property("ADBE Vector Rect Position").setValue([3, -1]);
    c2.property("ADBE Vector Rect Rotation").setValue(45);
    var fC = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fC.property("ADBE Vector Fill Color").setValue([0.1, 0.1, 0.15]); // Dark blue/black
    
    badge.property("ADBE Transform Group").property("ADBE Position").setValue([-10, 126]);
    badge.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.35, "pop");
    badge.parent = ctrl;

    // 4. Button Base
    var btn = comp.layers.addShape();
    btn.name = "Button Base";
    btn.inPoint = tIn; btn.outPoint = tOut;
    var gBtn = btn.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rBtn = gBtn.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rBtn.property("ADBE Vector Rect Size").setValue([150, 48]);
    rBtn.property("ADBE Vector Rect Roundness").setValue(24);
    var fBtn = gBtn.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fBtn.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Text Color")(1)';
    btn.property("ADBE Transform Group").property("ADBE Position").setValue([130, 280]);
    btn.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.5, "pop");
    btn.parent = ctrl;

    // 3. Button Text
    var btnTxt = comp.layers.addText("Follow +");
    btnTxt.name = "Button Text";
    btnTxt.inPoint = tIn; btnTxt.outPoint = tOut;
    var tD5 = btnTxt.property("Source Text").value;
    tD5.fontSize = 20; tD5.justification = 6147; // Center
    btnTxt.property("Source Text").setValue(tD5);
    btnTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = [0.05, 0.05, 0.08]; d;';
    btnTxt.property("ADBE Transform Group").property("ADBE Position").setValue([130, 287]);
    btnTxt.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.55, "pop");
    btnTxt.parent = ctrl;

    // 2. Top Light Ray (Shoots up from card)
    var ray = comp.layers.addShape();
    ray.name = "Top Light Ray";
    ray.inPoint = tIn; ray.outPoint = tOut;
    var gR = ray.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rR = gR.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rR.property("ADBE Vector Rect Size").setValue([12, 500]);
    var fR = gR.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fR.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Theme Color")(1)';
    try {
        var rayBlur = ray.Effects.addProperty("ADBE Fast Blur");
        rayBlur.property("ADBE Fast Blur-0001").setValue(40);
    } catch(e) {}
    ray.property("ADBE Transform Group").property("ADBE Position").setValue([0, -500]);
    ray.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.1, "pop");
    ray.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.1, "opacity");
    ray.parent = ctrl;

    ctrl.selected = true;
    app.endUndoGroup();
}

function _uiMinimalCard() {
    var comp = app.project.activeItem;
    if(!comp) { alert("Please open a composition."); return; }
    
    app.beginUndoGroup("God Tier UI: Minimal Card");
    var dur = 4.0;
    var tIn = comp.time;
    var tOut = comp.time + dur;
    var w = comp.width, h = comp.height;
    
    var ctrl = comp.layers.addNull(dur);
    ctrl.name = "🏷️ MINIMAL CARD CONTROLLER";
    ctrl.inPoint = tIn; ctrl.outPoint = tOut;
    ctrl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    
    _addSlider(ctrl, "Animation Speed", 100);
    _addColorControl(ctrl, "Card BG", [1, 1, 1]); 
    _addColorControl(ctrl, "Button Color", [0.1, 0.1, 0.1]); 
    _addColorControl(ctrl, "Text Color", [0.15, 0.15, 0.15]); 
    
    var baseExpr = "var spd = effect('Animation Speed')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var pIn = Math.max(0, Math.min(1, t/(dur*0.25))); var pOut = Math.max(0, Math.min(1, (t - dur*0.8)/(dur*0.2))); function easeOutBack(t){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} function easeInBack(t){var c1=1.70158;var c3=c1+1;return c3*t*t*t-c1*t*t;} function elasticOut(t){var c=(2*Math.PI)/3;return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;} ";

    function getAnim(delay, type) {
        var str = baseExpr + "var delay = "+delay+"; var pp = Math.max(0, Math.min(1, (pIn-delay)/(1-delay))); ";
        if(type === "slideUp") return str + "var e = easeOutBack(pp); var eOut = easeInBack(pOut); var eo = e - eOut; value + [0, 100*(1-eo)];";
        if(type === "opacity") return str + "var e = Math.min(1, pp*2); var eOut = Math.min(1, pOut*2); (e - eOut)*100;";
        if(type === "pop") return str + "var e = elasticOut(pp); var eOut = easeInBack(pOut); var eo = e - eOut; [eo*100, eo*100];";
        return "";
    }

    var base = comp.layers.addShape();
    base.name = "Card Base";
    base.inPoint = tIn; base.outPoint = tOut;
    var g1 = base.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var r1 = g1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    r1.property("ADBE Vector Rect Size").setValue([440, 600]);
    r1.property("ADBE Vector Rect Roundness").setValue(36);
    var f1 = g1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f1.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Card BG")(1)';
    base.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.0, "slideUp");
    base.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.0, "opacity");
    base.property("ADBE Transform Group").property("ADBE Scale").expression = baseExpr + "var eOut = easeInBack(pOut); [(1-eOut)*100, (1-eOut)*100];";
    base.parent = ctrl;
    try {
        var ds = base.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(12); 
        ds.property("ADBE Drop Shadow-0004").setValue(40); 
        ds.property("ADBE Drop Shadow-0005").setValue(20); 
    } catch(e) {}

    var title = comp.layers.addText("Sienna Brooks");
    title.name = "Title Text";
    title.inPoint = tIn; title.outPoint = tOut;
    var tDoc = title.property("Source Text").value;
    tDoc.fontSize = 32; tDoc.justification = 6147; // CENTER
    title.property("Source Text").setValue(tDoc);
    title.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1); d;';
    title.property("ADBE Transform Group").property("ADBE Position").setValue([0, -220]);
    title.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.1, "slideUp");
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.1, "opacity");
    title.parent = ctrl;

    var sub = comp.layers.addText("Connecting...");
    sub.name = "Subtitle Text";
    sub.inPoint = tIn; sub.outPoint = tOut;
    var tDoc2 = sub.property("Source Text").value;
    tDoc2.fontSize = 14; tDoc2.justification = 6147; 
    sub.property("Source Text").setValue(tDoc2);
    sub.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = thisComp.layer("'+ctrl.name+'").effect("Text Color")(1) + [0.3,0.3,0.3]; d;';
    sub.property("ADBE Transform Group").property("ADBE Position").setValue([0, -190]);
    sub.property("ADBE Transform Group").property("ADBE Position").expression = getAnim(0.2, "slideUp");
    sub.property("ADBE Transform Group").property("ADBE Opacity").expression = getAnim(0.2, "opacity");
    sub.parent = ctrl;

    var img = comp.layers.addShape();
    img.name = "Main Image (Drop Here & Alpha Matte)";
    img.inPoint = tIn; img.outPoint = tOut;
    var g2 = img.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var r2 = g2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    r2.property("ADBE Vector Rect Size").setValue([400, 380]);
    r2.property("ADBE Vector Rect Roundness").setValue(24);
    var f2 = g2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f2.property("ADBE Vector Fill Color").setValue([0.9, 0.9, 0.92]);
    img.property("ADBE Transform Group").property("ADBE Position").setValue([0, 20]);
    img.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.3, "pop");
    img.parent = ctrl;

    var btn = comp.layers.addShape();
    btn.name = "Button Base";
    btn.inPoint = tIn; btn.outPoint = tOut;
    var gB = btn.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    rB.property("ADBE Vector Rect Size").setValue([140, 40]);
    rB.property("ADBE Vector Rect Roundness").setValue(10);
    var fB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fB.property("ADBE Vector Fill Color").expression = 'thisComp.layer("'+ctrl.name+'").effect("Button Color")(1)';
    btn.property("ADBE Transform Group").property("ADBE Position").setValue([120, 250]);
    btn.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.4, "pop");
    btn.parent = ctrl;

    var btnTxt = comp.layers.addText("+ Add member");
    btnTxt.name = "Button Text";
    btnTxt.inPoint = tIn; btnTxt.outPoint = tOut;
    var tDoc4 = btnTxt.property("Source Text").value;
    tDoc4.fontSize = 14; tDoc4.justification = 6147;
    btnTxt.property("Source Text").setValue(tDoc4);
    btnTxt.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var d = value; d.fillColor = [1,1,1]; d;';
    btnTxt.property("ADBE Transform Group").property("ADBE Position").setValue([120, 255]);
    btnTxt.property("ADBE Transform Group").property("ADBE Scale").expression = getAnim(0.45, "pop");
    btnTxt.parent = ctrl;

    ctrl.selected = true;
    app.endUndoGroup();
}

function _spiralWipe() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.0;
    var w = comp.width, h = comp.height;
    var shape = comp.layers.addShape();
    shape.name = "[Nytvir] Spiral Wipe";
    shape.inPoint = comp.time;
    shape.outPoint = comp.time + dur;
    shape.motionBlur = true;
    comp.motionBlur = true;

    _addSlider(shape, "Transition Speed %", 100);
    _addColorControl(shape, "Spiral Color", [0.12, 0.87, 0.64]);
    _addSlider(shape, "Spiral Size", 100);
    _addSlider(shape, "Spin Amount", 180);
    _addSlider(shape, "Curve Type", 1);

    var contents = shape.property("ADBE Root Vectors Group");
    var baseExpr = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var dur = outPoint - inPoint; var p = Math.max(0, Math.min(1, t/dur)); var cv=1; try{cv=Math.round(effect('Curve Type')(1));}catch(e){} " + EASE_LIB;

    for(var i = 0; i < 4; i++) {
        var grp = contents.addProperty("ADBE Vector Group");
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        var scale = 0.5 + i * 0.35;
        ell.property("ADBE Vector Ellipse Size").expression = baseExpr +
            "var ss = effect('Spiral Size')(1)/100 * " + (Math.max(w,h) * scale) + ";" +
            "var delay = " + (i * 0.08) + ";" +
            "var pp = Math.max(0, Math.min(1, (p-delay)/(1-delay)));" +
            "var e = easeOutBack(pp); [ss*e, ss*e];";
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = "effect('Spiral Color')(1);";
    }

    shape.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h/2]);
    shape.property("ADBE Transform Group").property("ADBE Rotate Z").expression = baseExpr +
        "var spin = effect('Spin Amount')(1); var e = easeInOut(p); e * spin;";
}

// ----------------------------------------------------
// VFX (Fully Customizable)
// ----------------------------------------------------
function _rgbSplit() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return;
    var L = comp.selectedLayers[0];
    
    _addSlider(L, "Transition Speed %", 100);
    _addSlider(L, "Split Distance", 30);
    
    var shift = _addFx(L, "ADBE Shift Channels");
    shift.property(1).setValue(2); 
    shift.property(2).setValue(1); 
    shift.property(3).setValue(10); 
    shift.property(4).setValue(10); 
    
    var tr = _addFx(L, "ADBE Geometry2"); 
    tr.property(2).expression = "var spd = effect('Transition Speed %')(1)/100; var t = (time - inPoint)*spd; var sd = effect('Split Distance')(1); var e = Math.exp(-t*5)*sd; [value[0]+e, value[1]];";
    tr.property(3).setValue(1); 
    tr.property(4).setValue(105); 
    L.blendingMode = BlendingMode.SCREEN;
}

function _lensDistort() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var layer = comp.layers.addSolid([0,0,0], "Nytvir Lens Distort", comp.width, comp.height, comp.pixelAspect, comp.duration);
    layer.adjustmentLayer = true;
    layer.inPoint = comp.time;
    
    _addSlider(layer, "Transition Speed %", 100);
    _addSlider(layer, "Distort Power", 120);

    var optics = _addFx(layer, "ADBE Optics Compensation");
    optics.property(2).setValue(1);
    optics.property(1).expression = "var spd = effect('Transition Speed %')(1)/100; var t = (time-inPoint)*spd; var dp = effect('Distort Power')(1); var e = Math.exp(-t*5); dp*e;";
}

function _deepGlow() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return;
    var L = comp.selectedLayers[0];
    
    _addSlider(L, "Glow Intensity", 100);
    _addColorControl(L, "Glow Color", [0.06, 0.71, 0.83]);

    var tint;
    try { tint = _addFx(L, "ADBE Tint"); } catch(e) {}
    if(tint) {
        tint.property(2).expression = "effect('Glow Color')(1);"; 
        tint.property(3).setValue(50);
    }

    var glow1;
    try { glow1 = _addFx(L, "ADBE Glow2"); } catch(e) {
        try { glow1 = _addFx(L, "ADBE Glow"); } catch(e2) {}
    }
    if(glow1) {
        glow1.property(2).setValue(80);
        glow1.property(3).setValue(20);
        glow1.property(4).expression = "effect('Glow Intensity')(1) / 200;";
    }

    var glow2;
    try { glow2 = _addFx(L, "ADBE Glow2"); } catch(e) {
        try { glow2 = _addFx(L, "ADBE Glow"); } catch(e2) {}
    }
    if(glow2) {
        glow2.property(2).setValue(80);
        glow2.property(3).setValue(80);
        glow2.property(4).expression = "effect('Glow Intensity')(1) / 300;";
    }

    var glow3;
    try { glow3 = _addFx(L, "ADBE Glow2"); } catch(e) {
        try { glow3 = _addFx(L, "ADBE Glow"); } catch(e2) {}
    }
    if(glow3) {
        glow3.property(2).setValue(80);
        glow3.property(3).setValue(250);
        glow3.property(4).expression = "effect('Glow Intensity')(1) / 500;";
    }
}

// ----------------------------------------------------
// SIGNATURE: SILK FLOW (v2.1)
// Buttery staggered capsule sweep — IG/AI aesthetic
// ----------------------------------------------------
function _silkFlow() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.5;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Silk Flow Master " + uId;

    // Understated brand palette: cream -> sand -> taupe -> charcoal
    var colors = [[0.95,0.93,0.89], [0.85,0.78,0.66], [0.55,0.50,0.45], [0.11,0.10,0.10]];
    var names = ["Cream", "Sand", "Taupe"];

    // Band train geometry: 4 rounded stripes chained with overlap,
    // moving as one silk-eased convoy across the screen.
    var n = 4;
    var stripeW = D*0.62;
    var spacing = D*0.5;
    var trainLen = spacing*(n-1) + stripeW;
    var travel = D*0.55 + trainLen/2 + D*0.08;
    var shapes = [];

    for (var i = 0; i < n; i++) {
        var s = comp.layers.addShape();
        s.name = (i===n-1) ? masterName : "[Nytvir] Silk Flow - " + names[i];
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[n-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 4", colors[3]);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Flow Angle", -30);
    _addSlider(master, "Accent Opacity", 80);
    _addSlider(master, "Softness", 0);

    var mRef = 'thisComp.layer("' + masterName + '")';
    // gentle cubic in-out — keeps the band edges on screen long enough to be seen
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;} ";

    for (var i = 0; i < n; i++) {
        var s = shapes[i];
        var isM = (i===n-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
        // leading stripe at front of the train, later colors trail & overlap on top
        var off = trainLen/2 - stripeW/2 - spacing*i;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([stripeW, D*2.2]);
        rect.property("ADBE Vector Rect Roundness").setValue(stripeW/2);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + (i+1) + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var a=degreesToRadians(" + fxRef + "('Flow Angle')(1));" +
            "var e=silk(p); var d=(e-0.5)*2*" + travel + " + " + off + ";" +
            "[" + (w/2) + "+Math.cos(a)*d, " + (h/2) + "+Math.sin(a)*d];";
        // subtle organic fan: each stripe tilts a hair around the flow angle mid-pass
        xf.property("ADBE Rotate Z").expression = baseExpr +
            "var a=" + fxRef + "('Flow Angle')(1); var e=silk(p); a + Math.sin(e*Math.PI)*" + ((i - (n-1)/2) * 1.6).toFixed(2) + ";";
        s.selected = isM;
    }

    // Accent line — a thin cream blade leading the train
    var line = comp.layers.addShape();
    line.name = "[Nytvir] Silk Flow - Accent Line";
    line.inPoint = comp.time;
    line.outPoint = comp.time + dur;
    line.motionBlur = true;
    var lGrp = line.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var lRect = lGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    lRect.property("ADBE Vector Rect Size").setValue([Math.max(3, D*0.006), D*2.2]);
    lRect.property("ADBE Vector Rect Roundness").setValue(D*0.003);
    var lFill = lGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    lFill.property("ADBE Vector Fill Color").expression = mRef + ".effect('Color 1')(1);";
    var lineExpr = "var spd=" + mRef + ".effect('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
    var lOff = trainLen/2 + D*0.035;
    var lXf = line.property("ADBE Transform Group");
    lXf.property("ADBE Anchor Point").setValue([0,0]);
    lXf.property("ADBE Position").expression = lineExpr +
        "var a=degreesToRadians(" + mRef + ".effect('Flow Angle')(1));" +
        "var e=silk(p); var d=(e-0.5)*2*" + travel + " + " + lOff + ";" +
        "[" + (w/2) + "+Math.cos(a)*d, " + (h/2) + "+Math.sin(a)*d];";
    lXf.property("ADBE Rotate Z").expression = lineExpr +
        mRef + ".effect('Flow Angle')(1);";
    lXf.property("ADBE Opacity").expression = lineExpr +
        "var e=silk(p); " + mRef + ".effect('Accent Opacity')(1)*Math.sin(e*Math.PI);";
    line.selected = false;

    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: AURORA VEIL (v2.1)
// Silk curtain columns rise, hold, then lift away
// ----------------------------------------------------
function _auroraVeil() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.8;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Aurora Veil Master " + uId;
    var cols = 5;
    var colW = w / cols;
    // mint -> blush -> lavender -> champagne
    var colors = [[0.66,0.93,0.92], [0.99,0.84,0.89], [0.78,0.72,0.98], [0.99,0.95,0.87]];
    var shapes = [];

    for (var i = 0; i < cols; i++) {
        var s = comp.layers.addShape();
        s.name = (i===cols-1) ? masterName : "[Nytvir] Aurora Veil - Col " + (i+1);
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[cols-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 4", colors[3]);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Stagger", 4);
    _addSlider(master, "Sway", 100);
    _addSlider(master, "Softness", 0);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2;} ";

    for (var i = 0; i < cols; i++) {
        var s = shapes[i];
        var isM = (i===cols-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        // rise (staggered) -> hold covering screen -> lift away (staggered)
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); var stag=" + fxRef + "('Stagger')(1)/100; " + SILK +
            "var eIn=silk((p - stag*" + i + ")/0.34); var eOut=silk((p - 0.52 - stag*" + i + ")/0.34);";

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([colW*1.18, h*2.5]);
        rect.property("ADBE Vector Rect Roundness").setValue(colW*0.59);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + ((i%4)+1) + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        var cx = colW * (i + 0.5);
        xf.property("ADBE Position").expression = baseExpr +
            "var travel=" + (h*2.2) + "; var d=travel*(1-eIn) - travel*eOut;" +
            "var sway=" + fxRef + "('Sway')(1)/100; var sx=Math.sin(p*Math.PI*2+" + i + ")*" + (w*0.012) + "*sway*Math.sin(Math.min(1,eIn)*Math.PI);" +
            "[" + cx + "+sx, " + (h/2) + "+d];";
        xf.property("ADBE Scale").expression = baseExpr +
            "[100+Math.sin(eIn*Math.PI)*5, 100];";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: SOFT BLOOM (v2.1)
// Pastel petals bloom from origin, hold, lift away
// ----------------------------------------------------
function _softBloom() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.7;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Soft Bloom Master " + uId;
    // blush white -> sakura -> lilac -> periwinkle
    var colors = [[0.99,0.94,0.93], [0.98,0.78,0.82], [0.85,0.69,0.96], [0.51,0.58,0.98]];
    var shapes = [];

    for (var i = 0; i < 4; i++) {
        var s = comp.layers.addShape();
        s.name = (i===3) ? masterName : "[Nytvir] Soft Bloom - Petal " + (i+1);
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[3];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 4", colors[3]);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Origin X %", 50);
    _addSlider(master, "Origin Y %", 50);
    _addSlider(master, "Exit Angle", -90);
    _addSlider(master, "Stagger", 8);
    _addSlider(master, "Softness", 0);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2;} ";
    var OB = "function ob(t){t=Math.max(0,Math.min(1,t));var c1=1.0;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} ";

    for (var i = 0; i < 4; i++) {
        var s = shapes[i];
        var isM = (i===3);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); var stag=" + fxRef + "('Stagger')(1)/100; " + SILK + OB;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").expression = baseExpr +
            "var e=ob((p - stag*" + i + ")/0.36); var sz=Math.max(0," + (D*1.12) + "*e); [sz, sz];";
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + (i+1) + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var ox=" + w + "*" + fxRef + "('Origin X %')(1)/100; var oy=" + h + "*" + fxRef + "('Origin Y %')(1)/100;" +
            "var ex=silk((p - 0.62 - 0.02*" + i + ")/0.36);" +
            "var a=degreesToRadians(" + fxRef + "('Exit Angle')(1));" +
            "[ox + Math.cos(a)*ex*" + (D*1.7) + ", oy + Math.sin(a)*ex*" + (D*1.7) + "];";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: GLASS SWEEP (v2.1)
// Frosted glassmorphism capsule pass with glare line
// ----------------------------------------------------
function _glassSweep() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.1;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Glass Sweep Master " + uId;

    // Glass capsule (adjustment layer — blurs whatever is below)
    var glass = comp.layers.addShape();
    glass.name = "[Nytvir] Glass Sweep - Glass";
    glass.inPoint = comp.time;
    glass.outPoint = comp.time + dur;
    glass.motionBlur = true;

    // Glare line on top (master)
    var glare = comp.layers.addShape();
    glare.name = masterName;
    glare.inPoint = comp.time;
    glare.outPoint = comp.time + dur;
    glare.motionBlur = true;

    _addSlider(glare, "Transition Speed %", 100);
    _addSlider(glare, "Flow Angle", 0);
    _addSlider(glare, "Glass Blur", 55);
    _addSlider(glare, "Glass Brightness", 12);
    _addSlider(glare, "Glare Opacity", 70);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2;} ";
    var exprGlass = "var spd=" + mRef + ".effect('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
    var exprGlare = "var spd=effect('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;

    // --- glass body ---
    var gGrp = glass.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var gRect = gGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    gRect.property("ADBE Vector Rect Size").setValue([D*0.7, D*1.9]);
    gRect.property("ADBE Vector Rect Roundness").setValue(D*0.35);
    var gFill = gGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    gFill.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
    glass.adjustmentLayer = true;

    try {
        var gBlur = _addFx(glass, "ADBE Gaussian Blur 2");
        gBlur.property(1).expression = mRef + ".effect('Glass Blur')(1);";
        gBlur.property(2).setValue(1); // repeat edge pixels
    } catch(e) {}
    try {
        var bc = _addFx(glass, "ADBE Brightness & Contrast 2");
        bc.property(1).expression = mRef + ".effect('Glass Brightness')(1);";
    } catch(e) {}

    var gXf = glass.property("ADBE Transform Group");
    gXf.property("ADBE Anchor Point").setValue([0,0]);
    gXf.property("ADBE Position").expression = exprGlass +
        "var a=degreesToRadians(" + mRef + ".effect('Flow Angle')(1));" +
        "var travel=" + (D*1.3) + "; var e=silk(p); var d=(e-0.5)*2*travel;" +
        "[" + (w/2) + "+Math.cos(a)*d, " + (h/2) + "+Math.sin(a)*d];";
    gXf.property("ADBE Rotate Z").expression = mRef + ".effect('Flow Angle')(1);";
    gXf.property("ADBE Scale").expression = exprGlass + "var e=silk(p); var b=100+Math.sin(e*Math.PI)*4; [b,b];";

    // --- glare line riding the leading edge ---
    var lGrp = glare.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var lRect = lGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    lRect.property("ADBE Vector Rect Size").setValue([Math.max(4, D*0.018), D*1.9]);
    lRect.property("ADBE Vector Rect Roundness").setValue(D*0.009);
    var lFill = lGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    lFill.property("ADBE Vector Fill Color").setValue([1,1,1,1]);

    var lXf = glare.property("ADBE Transform Group");
    lXf.property("ADBE Anchor Point").setValue([0,0]);
    lXf.property("ADBE Position").expression = exprGlare +
        "var a=degreesToRadians(effect('Flow Angle')(1));" +
        "var travel=" + (D*1.3) + "; var e=silk(p); var d=(e-0.5)*2*travel + " + (D*0.36) + ";" +
        "[" + (w/2) + "+Math.cos(a)*d, " + (h/2) + "+Math.sin(a)*d];";
    lXf.property("ADBE Rotate Z").expression = "effect('Flow Angle')(1);";
    lXf.property("ADBE Opacity").expression = exprGlare +
        "var e=silk(p); effect('Glare Opacity')(1)*Math.sin(e*Math.PI);";

    comp.motionBlur = true;
    glass.selected = false;
    glare.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: ARC REVEAL (v2.2)
// Tonal circles bloom from a corner, then glide away
// revealing the next shot. Silk Flow's sibling.
// ----------------------------------------------------
function _arcReveal() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.5;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Arc Reveal Master " + uId;

    var colors = [[0.95,0.93,0.89], [0.85,0.78,0.66], [0.11,0.10,0.10]]; // cream, sand, charcoal
    var names = ["Cream", "Sand"];
    var n = 3;
    var shapes = [];

    for (var i = 0; i < n; i++) {
        var s = comp.layers.addShape();
        s.name = (i===n-1) ? masterName : "[Nytvir] Arc Reveal - " + names[i];
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[n-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Origin X %", 10);
    _addSlider(master, "Origin Y %", 90);
    _addSlider(master, "Exit Angle", -45);
    _addSlider(master, "Softness", 0);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;} ";
    // radius needed to cover the screen from any origin point
    var Rmax = D * 1.25;

    for (var i = 0; i < n; i++) {
        var s = shapes[i];
        var isM = (i===n-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").expression = baseExpr +
            "var e=silk((p - " + (0.07*i) + ")/0.5); var sz=" + (Rmax*2) + "*e; [sz, sz];";
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + (i+1) + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var ox=" + w + "*" + fxRef + "('Origin X %')(1)/100; var oy=" + h + "*" + fxRef + "('Origin Y %')(1)/100;" +
            "var ex=silk((p - 0.58 - " + (0.03*(n-1-i)) + ")/0.38);" +
            "var a=degreesToRadians(" + fxRef + "('Exit Angle')(1));" +
            "[ox + Math.cos(a)*ex*" + (D*2.0) + ", oy + Math.sin(a)*ex*" + (D*2.0) + "];";
        s.selected = isM;
    }

    // Accent arc — thin cream ring breathing just outside the leading circle
    var ring = comp.layers.addShape();
    ring.name = "[Nytvir] Arc Reveal - Accent Arc";
    ring.inPoint = comp.time;
    ring.outPoint = comp.time + dur;
    ring.motionBlur = true;
    var rGrp = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rEll = rGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    var ringExpr = "var spd=" + mRef + ".effect('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
    rEll.property("ADBE Vector Ellipse Size").expression = ringExpr +
        "var e=silk(p/0.5); var sz=" + (Rmax*2) + "*e*1.06 + " + (D*0.04) + "; [sz, sz];";
    var rStroke = rGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    rStroke.property("ADBE Vector Stroke Color").expression = mRef + ".effect('Color 1')(1);";
    rStroke.property("ADBE Vector Stroke Width").setValue(Math.max(3, D*0.004));
    var rXf = ring.property("ADBE Transform Group");
    rXf.property("ADBE Anchor Point").setValue([0,0]);
    rXf.property("ADBE Position").expression = ringExpr +
        "var ox=" + w + "*" + mRef + ".effect('Origin X %')(1)/100; var oy=" + h + "*" + mRef + ".effect('Origin Y %')(1)/100;" +
        "var ex=silk((p - 0.58)/0.38);" +
        "var a=degreesToRadians(" + mRef + ".effect('Exit Angle')(1));" +
        "[ox + Math.cos(a)*ex*" + (D*2.0) + ", oy + Math.sin(a)*ex*" + (D*2.0) + "];";
    rXf.property("ADBE Opacity").expression = ringExpr +
        "Math.sin(Math.min(1, p/0.5)*Math.PI)*70;";
    ring.selected = false;

    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: SOFT BLINDS (v2.2)
// Tilted capsule bands weave in, hold, slide away.
// ----------------------------------------------------
function _softBlinds() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.6;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Soft Blinds Master " + uId;

    var n = 4;
    var bandH = (h / n) * 1.35;
    var bandW = w * 1.6;
    // alternating cream / sand, charcoal last for a grounded finish
    var palette = [1, 2, 1, 3];
    var colors = [[0.95,0.93,0.89], [0.85,0.78,0.66], [0.11,0.10,0.10]];
    var shapes = [];

    for (var i = 0; i < n; i++) {
        var s = comp.layers.addShape();
        s.name = (i===n-1) ? masterName : "[Nytvir] Soft Blinds - Band " + (i+1);
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[n-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Tilt", -6);
    _addSlider(master, "Stagger", 5);
    _addSlider(master, "Softness", 0);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;} ";

    for (var i = 0; i < n; i++) {
        var s = shapes[i];
        var isM = (i===n-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var dir = (i % 2 === 0) ? 1 : -1; // weave: alternate entry sides
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); var stag=" + fxRef + "('Stagger')(1)/100; " + SILK +
            "var eIn=silk((p - stag*" + i + ")/0.36); var eOut=silk((p - 0.54 - stag*" + i + ")/0.36);";

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([bandW, bandH]);
        rect.property("ADBE Vector Rect Roundness").setValue(bandH/2);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + palette[i] + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var cy = h * (i + 0.5) / n;
        var startX = w/2 - dir * (w/2 + bandW/2 + w*0.1);
        var endX = w/2 + dir * (w/2 + bandW/2 + w*0.1);
        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var x=" + startX + " + (" + (w/2) + " - " + startX + ")*eIn + (" + endX + " - " + (w/2) + ")*eOut;" +
            "[x, " + cy + "];";
        xf.property("ADBE Rotate Z").expression = fxRef + "('Tilt')(1);";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: CREST RISE (v2.3)
// A curved wave dome rises through the frame —
// continuous pass, no holds, maximum smoothness.
// ----------------------------------------------------
function _crestRise() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.5;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Crest Rise Master " + uId;

    var colors = [[0.95,0.93,0.89], [0.85,0.78,0.66], [0.11,0.10,0.10]]; // cream, sand, charcoal
    var names = ["Cream", "Sand"];
    var n = 3;
    var EW = w*2.8, EH = h*1.6;       // wide ellipse -> gentle arc crest
    var gap = h*0.24;                  // tonal band thickness
    var yStart = h + EH/2 + h*0.05;
    var yEnd = -EH/2 - h*0.05 - gap*(n-1);
    var shapes = [];

    for (var i = 0; i < n; i++) {
        var s = comp.layers.addShape();
        s.name = (i===n-1) ? masterName : "[Nytvir] Crest Rise - " + names[i];
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[n-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Drift", 100);   // subtle sideways breath
    _addSlider(master, "Softness", 8);

    var mRef = 'thisComp.layer("' + masterName + '")';
    // quartic in-out: silkier ends than cubic, still buttery mid
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2;} ";

    for (var i = 0; i < n; i++) {
        var s = shapes[i];
        var isM = (i===n-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").setValue([EW, EH]);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + (i+1) + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var e=silk(p); var y=" + yStart + " + (" + yEnd + " - " + yStart + ")*e + " + (gap*i) + ";" +
            "var dr=" + fxRef + "('Drift')(1)/100;" +
            "var x=" + (w/2) + " + Math.sin(e*Math.PI)*" + (w*0.05) + "*dr*" + (i%2===0 ? 1 : -0.6) + ";" +
            "[x, y];";
        s.selected = isM;
    }

    // Accent arc hovering just above the leading crest
    var arc = comp.layers.addShape();
    arc.name = "[Nytvir] Crest Rise - Accent Arc";
    arc.inPoint = comp.time;
    arc.outPoint = comp.time + dur;
    arc.motionBlur = true;
    var aGrp = arc.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var aEll = aGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    aEll.property("ADBE Vector Ellipse Size").setValue([EW, EH]);
    var aStroke = aGrp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    aStroke.property("ADBE Vector Stroke Color").expression = mRef + ".effect('Color 1')(1);";
    aStroke.property("ADBE Vector Stroke Width").setValue(Math.max(3, h*0.004));
    var arcExpr = "var spd=" + mRef + ".effect('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
    var aXf = arc.property("ADBE Transform Group");
    aXf.property("ADBE Anchor Point").setValue([0,0]);
    aXf.property("ADBE Position").expression = arcExpr +
        "var e=silk(p); var y=" + yStart + " + (" + yEnd + " - " + yStart + ")*e - " + (h*0.045) + ";" +
        "var dr=" + mRef + ".effect('Drift')(1)/100;" +
        "var x=" + (w/2) + " + Math.sin(e*Math.PI)*" + (w*0.05) + "*dr;" +
        "[x, y];";
    aXf.property("ADBE Opacity").expression = arcExpr +
        "var e=silk(p); Math.sin(e*Math.PI)*75;";
    arc.selected = false;

    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE: IRIS PASS (v2.3)
// A tonal ring expands from center: covers the cut,
// then the new shot opens radially through the iris.
// ----------------------------------------------------
function _irisPass() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.4;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Iris Pass Master " + uId;

    // donut per tone: disc grows (phase A), then its hole opens (phase B)
    // sand below (widest rims) -> cream -> charcoal core on top
    var ringDefs = [
        {name: "Sand rim",  colorIdx: 2, extra: D*0.14},
        {name: "Cream rim", colorIdx: 1, extra: D*0.07},
        {name: "Core",      colorIdx: 3, extra: 0}
    ];
    var colors = [[0.95,0.93,0.89], [0.85,0.78,0.66], [0.11,0.10,0.10]];
    var OD = D*1.8; // full open/cover diameter
    var shapes = [];

    for (var i = 0; i < 3; i++) {
        var s = comp.layers.addShape();
        s.name = (i===2) ? masterName : "[Nytvir] Iris Pass - " + ringDefs[i].name;
        s.inPoint = comp.time;
        s.outPoint = comp.time + dur;
        s.motionBlur = true;
        shapes.push(s);
    }

    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", colors[2]);
    _addColorControl(master, "Color 2", colors[1]);
    _addColorControl(master, "Color 1", colors[0]);
    _addSlider(master, "Center X %", 50);
    _addSlider(master, "Center Y %", 50);
    _addSlider(master, "Softness", 6);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var SILK = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2;} ";

    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i===2);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); " + SILK;
        var extra = ringDefs[i].extra;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        // outer disc — leading rims slightly larger
        var ellOut = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ellOut.property("ADBE Vector Ellipse Size").expression = baseExpr +
            "var e=silk(p/0.52); var sz=(" + (OD + 2*extra) + ")*e; [sz, sz];";
        // hole — opens in phase B, rims lag so they edge the iris
        var ellIn = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ellIn.property("ADBE Vector Ellipse Size").expression = baseExpr +
            "var e2=silk((p-0.48)/0.52); var sz=Math.max(0,(" + (OD - 2*extra) + ")*e2); [sz, sz];";
        var merge = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Merge");
        merge.property("ADBE Vector Merge Type").setValue(3); // subtract hole from disc
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + ringDefs[i].colorIdx + "')(1);";

        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression =
            "[" + w + "*" + fxRef + "('Center X %')(1)/100, " + h + "*" + fxRef + "('Center Y %')(1)/100];";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// SIGNATURE BATCH v2.4 — six distinct mechanics
// ----------------------------------------------------
var SILK3 = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;} ";
var SILK4 = "function silk(t){t=Math.max(0,Math.min(1,t));return t<0.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2;} ";

function _sigBase(comp, name, dur) {
    var s = comp.layers.addShape();
    s.name = name;
    s.inPoint = comp.time;
    s.outPoint = comp.time + dur;
    s.motionBlur = true;
    return s;
}

function _sigSpeedExpr(fxRef) {
    return "var spd=" + fxRef + "('Transition Speed %')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var p=Math.max(0,Math.min(1,t/dur)); ";
}

// --- SPLIT SLIDE: two cool-toned panels cross, the new shot opens from center
function _splitSlide() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.3;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Split Slide Master " + uId;
    var panelW = D*1.4;
    var travel = D*1.35;

    var pA = _sigBase(comp, "[Nytvir] Split Slide - Ice", dur);
    var pB = _sigBase(comp, masterName, dur);

    _addSlider(pB, "Transition Speed %", 100);
    _addColorControl(pB, "Color 2", [0.10,0.11,0.13]); // ink
    _addColorControl(pB, "Color 1", [0.89,0.91,0.93]); // ice
    _addSlider(pB, "Split Angle", 14);
    _addSlider(pB, "Softness", 4);

    var mRef = 'thisComp.layer("' + masterName + '")';
    var panels = [pA, pB];
    for (var i = 0; i < 2; i++) {
        var s = panels[i];
        var isM = (i===1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var sgn = (i===0) ? 1 : -1;
        var baseExpr = _sigSpeedExpr(fxRef) + SILK4;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([panelW, D*2.6]);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + (i+1) + "')(1);";
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var a=degreesToRadians(" + fxRef + "('Split Angle')(1));" +
            "var e=silk(p); var d=(" + (-travel) + " + 2*" + travel + "*e)*" + sgn + ";" +
            "[" + (w/2) + "+Math.cos(a)*d, " + (h/2) + "+Math.sin(a)*d];";
        xf.property("ADBE Rotate Z").expression = fxRef + "('Split Angle')(1);";
        s.selected = isM;
    }
    comp.motionBlur = true;
    pB.selected = true;
}

// --- ROLL SWEEP: a terracotta bar rolls around center, thickening to cover then thinning away
function _rollSweep() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.4;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Roll Sweep Master " + uId;
    var defs = [
        {name:"Ivory rim", colorIdx:1, extraW: D*0.16, lag: 9},
        {name:"Terra rim", colorIdx:2, extraW: D*0.08, lag: 4.5},
        {name:"Core",      colorIdx:3, extraW: 0,      lag: 0}
    ];
    var shapes = [];
    for (var i = 0; i < 3; i++) shapes.push(_sigBase(comp, (i===2)? masterName : "[Nytvir] Roll Sweep - " + defs[i].name, dur));

    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", [0.16,0.10,0.08]); // espresso
    _addColorControl(master, "Color 2", [0.80,0.45,0.33]); // terracotta
    _addColorControl(master, "Color 1", [0.96,0.93,0.88]); // ivory
    _addSlider(master, "Spin Amount", 320);
    _addSlider(master, "Softness", 5);

    var mRef = 'thisComp.layer("' + masterName + '")';
    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i===2);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = _sigSpeedExpr(fxRef) + SILK4;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").expression = baseExpr +
            "var grow=silk(p/0.52); var fade=silk((p-0.48)/0.52);" +
            "var bw=Math.max(0,(" + (D*1.5 + defs[i].extraW) + ")*(grow-fade));" +
            "[bw, " + (D*2.3) + "];";
        rect.property("ADBE Vector Rect Roundness").expression = baseExpr +
            "var grow=silk(p/0.52); var fade=silk((p-0.48)/0.52);" +
            "Math.max(0,(" + ((D*1.5)/2) + ")*(grow-fade));";
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + defs[i].colorIdx + "')(1);";
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").setValue([w/2, h/2]);
        xf.property("ADBE Rotate Z").expression = baseExpr +
            "var sp=" + fxRef + "('Spin Amount')(1); var e=silk(p); -sp/2 + sp*e - " + defs[i].lag + "*Math.sin(e*Math.PI);";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// --- WINDOW ZOOM: mocha frame grows, then a rounded window opens through it
function _windowZoom() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.4;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Window Zoom Master " + uId;
    var OD = D*1.9;
    var defs = [
        {name:"Latte rim", colorIdx:1, extra: D*0.12},
        {name:"Mocha rim", colorIdx:2, extra: D*0.06},
        {name:"Core",      colorIdx:3, extra: 0}
    ];
    var shapes = [];
    for (var i = 0; i < 3; i++) shapes.push(_sigBase(comp, (i===2)? masterName : "[Nytvir] Window Zoom - " + defs[i].name, dur));

    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", [0.13,0.10,0.08]); // dark roast
    _addColorControl(master, "Color 2", [0.62,0.50,0.40]); // mocha
    _addColorControl(master, "Color 1", [0.93,0.89,0.84]); // latte
    _addSlider(master, "Center X %", 50);
    _addSlider(master, "Center Y %", 50);
    _addSlider(master, "Softness", 5);

    var mRef = 'thisComp.layer("' + masterName + '")';
    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i===2);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = _sigSpeedExpr(fxRef) + SILK4;
        var extra = defs[i].extra;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rOut = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rOut.property("ADBE Vector Rect Size").expression = baseExpr +
            "var e=silk(p/0.52); var sz=(" + (OD + 2*extra) + ")*e; [sz, sz*1.25];";
        rOut.property("ADBE Vector Rect Roundness").expression = baseExpr +
            "var e=silk(p/0.52); (" + (OD*0.14) + ")*e;";
        var rIn = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rIn.property("ADBE Vector Rect Size").expression = baseExpr +
            "var e2=silk((p-0.48)/0.52); var sz=Math.max(0,(" + (OD - 2*extra) + ")*e2); [sz, sz*1.25];";
        rIn.property("ADBE Vector Rect Roundness").expression = baseExpr +
            "var e2=silk((p-0.48)/0.52); (" + (OD*0.14) + ")*e2;";
        var merge = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Merge");
        merge.property("ADBE Vector Merge Type").setValue(3);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + defs[i].colorIdx + "')(1);";
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression =
            "[" + w + "*" + fxRef + "('Center X %')(1)/100, " + h + "*" + fxRef + "('Center Y %')(1)/100];";
        xf.property("ADBE Rotate Z").expression = baseExpr +
            "var e=silk(p/0.52); var e2=silk((p-0.48)/0.52); -7*(1-e) + 5*e2;";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// --- PENDULUM SWIPE: an olive capsule swings across like a slow pendulum
function _pendulumSwipe() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.4;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Pendulum Swipe Master " + uId;
    var defs = [
        {name:"Cream trail", colorIdx:1, lag: 14},
        {name:"Olive trail", colorIdx:2, lag: 7},
        {name:"Core",        colorIdx:3, lag: 0}
    ];
    var shapes = [];
    for (var i = 0; i < 3; i++) shapes.push(_sigBase(comp, (i===2)? masterName : "[Nytvir] Pendulum Swipe - " + defs[i].name, dur));

    var master = shapes[2];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", [0.12,0.12,0.09]); // deep moss
    _addColorControl(master, "Color 2", [0.55,0.57,0.42]); // olive
    _addColorControl(master, "Color 1", [0.94,0.93,0.87]); // cream
    _addSlider(master, "Swing Angle", 115);
    _addSlider(master, "Softness", 4);

    var mRef = 'thisComp.layer("' + masterName + '")';
    for (var i = 0; i < 3; i++) {
        var s = shapes[i];
        var isM = (i===2);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = _sigSpeedExpr(fxRef) + SILK4;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([D*1.05, h*3.1]);
        rect.property("ADBE Vector Rect Roundness").setValue(D*0.33);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + defs[i].colorIdx + "')(1);";
        // hang the capsule below the pivot (vector groups use their own transform matchnames)
        grp.property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([0, h*1.5]);
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").setValue([w/2, -h*0.45]); // pivot above frame
        // swing in -> rest centered (cut hides here) -> swing out the far side
        xf.property("ADBE Rotate Z").expression = baseExpr +
            "var sw=" + fxRef + "('Swing Angle')(1);" +
            "var eIn=silk(p/0.45); var eOut=silk((p-0.55)/0.45);" +
            "-sw*(1-eIn) + sw*eOut + " + defs[i].lag + "*(Math.sin(eIn*Math.PI)*-1 + Math.sin(eOut*Math.PI));";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// --- PETAL SPIN: a blush flower spins open over the cut, then drifts away
function _petalSpin() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.5;
    var w = comp.width, h = comp.height;
    var D = Math.sqrt(w*w + h*h);
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Petal Spin Master " + uId;
    var defs = [
        {name:"Blush petals", colorIdx:1, rotOff: 30, delay: 0.05},
        {name:"Core petals",  colorIdx:2, rotOff: 0,  delay: 0}
    ];
    var shapes = [];
    for (var i = 0; i < 2; i++) shapes.push(_sigBase(comp, (i===1)? masterName : "[Nytvir] Petal Spin - " + defs[i].name, dur));

    var master = shapes[1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 2", [0.24,0.12,0.16]); // plum
    _addColorControl(master, "Color 1", [0.93,0.79,0.78]); // blush
    _addSlider(master, "Exit Angle", -90);
    _addSlider(master, "Spin", 150);
    _addSlider(master, "Softness", 5);

    var mRef = 'thisComp.layer("' + masterName + '")';
    for (var i = 0; i < 2; i++) {
        var s = shapes[i];
        var isM = (i===1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = _sigSpeedExpr(fxRef) + SILK4;
        var dl = defs[i].delay;

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ell = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").setValue([D*0.95, D*0.5]);
        ell.property("ADBE Vector Ellipse Position").setValue([D*0.3, 0]);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + defs[i].colorIdx + "')(1);";
        var rep = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Repeater");
        rep.property("ADBE Vector Repeater Copies").setValue(6);
        rep.property("ADBE Vector Repeater Transform").property("ADBE Vector Repeater Rotation").setValue(60);
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Scale").expression = baseExpr +
            "var e=silk((p-" + dl + ")/0.5); [100*e, 100*e];";
        xf.property("ADBE Position").expression = baseExpr +
            "var ex=silk((p-0.56-" + (dl*0.6) + ")/0.42);" +
            "var a=degreesToRadians(" + fxRef + "('Exit Angle')(1));" +
            "[" + (w/2) + " + Math.cos(a)*ex*" + (D*1.9) + ", " + (h/2) + " + Math.sin(a)*ex*" + (D*1.9) + "];";
        xf.property("ADBE Rotate Z").expression = baseExpr +
            "var sp=" + fxRef + "('Spin')(1); var e=silk(p); e*sp + " + defs[i].rotOff + ";";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// --- DRIP MELT: honey columns pour down unevenly and keep falling through
function _dripMelt() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 1.7;
    var w = comp.width, h = comp.height;
    var uId = Math.round(Math.random()*9999);
    var masterName = "[Nytvir] Drip Melt Master " + uId;
    var cols = 6;
    var colW = w / cols;
    var delays = [0, 0.09, 0.035, 0.11, 0.06, 0.02];
    var colorPick = [1, 2, 3, 2, 1, 2];
    var shapes = [];
    for (var i = 0; i < cols; i++) shapes.push(_sigBase(comp, (i===cols-1)? masterName : "[Nytvir] Drip Melt - Drip " + (i+1), dur));

    var master = shapes[cols-1];
    _addSlider(master, "Transition Speed %", 100);
    _addColorControl(master, "Color 3", [0.18,0.12,0.06]); // dark amber
    _addColorControl(master, "Color 2", [0.89,0.72,0.40]); // honey
    _addColorControl(master, "Color 1", [0.97,0.94,0.86]); // vanilla
    _addSlider(master, "Sway", 100);
    _addSlider(master, "Softness", 6);

    var mRef = 'thisComp.layer("' + masterName + '")';
    for (var i = 0; i < cols; i++) {
        var s = shapes[i];
        var isM = (i===cols-1);
        var fxRef = isM ? "effect" : mRef + ".effect";
        var baseExpr = _sigSpeedExpr(fxRef) + SILK3;
        var dl = delays[i];

        var grp = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var rect = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        rect.property("ADBE Vector Rect Size").setValue([colW*1.22, h*3.3]);
        rect.property("ADBE Vector Rect Roundness").setValue(colW*0.61);
        var fill = grp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").expression = fxRef + "('Color " + colorPick[i] + "')(1);";
        try {
            var blur = _addFx(s, "ADBE Gaussian Blur 2");
            blur.property(1).expression = fxRef + "('Softness')(1);";
        } catch(e) {}

        var cx = colW * (i + 0.5);
        var xf = s.property("ADBE Transform Group");
        xf.property("ADBE Anchor Point").setValue([0,0]);
        xf.property("ADBE Position").expression = baseExpr +
            "var e=silk((p-" + dl + ")/" + (1 - 0.14) + ");" +
            "var y=" + (-h*1.9) + " + (" + (h*4.8) + ")*e;" +
            "var sw=" + fxRef + "('Sway')(1)/100;" +
            "var x=" + cx + " + Math.sin(e*Math.PI*2 + " + i + ")*" + (w*0.01) + "*sw;" +
            "[x, y];";
        s.selected = isM;
    }
    comp.motionBlur = true;
    master.selected = true;
}

// ----------------------------------------------------
// OVERLAY KIT v2.5 — aesthetic UI overlays for reels
// ----------------------------------------------------
var UIEASE = "function ob(t){t=Math.max(0,Math.min(1,t));var c1=1.35;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} " +
             "function ib(t){t=Math.max(0,Math.min(1,t));var c1=1.35;var c3=c1+1;return c3*t*t*t-c1*t*t;} " +
             "function eo3(t){t=Math.max(0,Math.min(1,t));return 1-Math.pow(1-t,3);} ";

function _uiCtl(comp, name, dur, pos) {
    var ctrl = comp.layers.addNull(comp.duration);
    ctrl.name = name;
    ctrl.inPoint = comp.time;
    ctrl.outPoint = comp.time + dur;
    ctrl.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ctrl.property("ADBE Transform Group").property("ADBE Position").setValue(pos);
    _addSlider(ctrl, "Animation Speed", 100);
    return ctrl;
}

function _uiPrefix(ctrlName) {
    return "var ctl=thisComp.layer('" + ctrlName + "'); var spd=ctl.effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var pIn=Math.max(0,Math.min(1,t/(dur*0.22))); var pOut=Math.max(0,Math.min(1,(t-dur*0.82)/(dur*0.18))); " + UIEASE;
}
function _uiPop(pre, delay) {
    return pre + "var d=" + delay + "; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); var e=Math.max(0, ob(pp)-ib(pOut)); [e*100, e*100];";
}
function _uiFade(pre, delay) {
    return pre + "var d=" + delay + "; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); Math.max(0, Math.min(1,pp*1.7)-Math.min(1,pOut*1.7))*100;";
}
function _uiRise(pre, delay, dist) {
    return pre + "var d=" + delay + "; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); var e=ob(pp); value + [0, " + dist + "*(1-e) - " + dist + "*0.6*ib(pOut)];";
}
function _uiRRect(comp, name, dur, wpx, hpx, round, fillExpr) {
    var s = comp.layers.addShape();
    s.name = name;
    s.inPoint = comp.time;
    s.outPoint = comp.time + dur;
    var g = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var r = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    r.property("ADBE Vector Rect Size").setValue([wpx, hpx]);
    r.property("ADBE Vector Rect Roundness").setValue(round);
    var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f.property("ADBE Vector Fill Color").expression = fillExpr;
    s.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    return s;
}
function _uiText(comp, str, sizePx, just, colorExpr, dur, staticColor) {
    var tl = comp.layers.addText(str);
    tl.inPoint = comp.time;
    tl.outPoint = comp.time + dur;
    var d = tl.property("Source Text").value;
    d.fontSize = sizePx;
    d.fillColor = staticColor || [0.13, 0.12, 0.11];
    try { d.font = "SegoeUI"; } catch(e){}   // clean Apple-ish default for every text
    // real paragraph justification (enum) — the click-origin then sits at left/center/right edge
    try { d.justification = (just === 6147) ? ParagraphJustification.CENTER_JUSTIFY : (just === 6149) ? ParagraphJustification.RIGHT_JUSTIFY : ParagraphJustification.LEFT_JUSTIFY; } catch(e){}
    tl.property("Source Text").setValue(d);
    // anchor: keep the origin at x=0 (paragraph handles horizontal), vertically centered
    tl.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "var r=sourceRectAtTime(time,false); [0, r.top+r.height/2];";
    // fillColor is read-only on TextDocument inside expressions — use the style API
    if (colorExpr) tl.property("ADBE Text Properties").property("ADBE Text Document").expression = 'var c=' + colorExpr + '; text.sourceText.style.setFillColor([c[0],c[1],c[2]]);';
    return tl;
}
function _uiShadow(L) {
    try {
        var ds = L.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(28);
        ds.property("ADBE Drop Shadow-0004").setValue(60);
        ds.property("ADBE Drop Shadow-0005").setValue(24);
    } catch(e) {}
}

// --- MUSIC PLAYER: now-playing card with live progress bar
function _uiMusicPlayer() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "🎵 MUSIC PLAYER CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Card BG", [0.97,0.96,0.94]);
    _addColorControl(ctrl, "Accent", [0.85,0.78,0.66]);
    _addColorControl(ctrl, "Text Color", [0.13,0.12,0.11]);
    _addSlider(ctrl, "Progress %", 65);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _uiRRect(comp, "Player Card", dur, w*0.72, w*0.225, w*0.045, cRef + '.effect("Card BG")(1)');
    _uiShadow(card);
    card.parent = ctrl;
    card.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    card.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0);

    var art = _uiRRect(comp, "Album Art", dur, w*0.16, w*0.16, w*0.032, cRef + '.effect("Accent")(1)');
    art.parent = ctrl;
    art.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.245, 0]);
    art.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0.08);

    var title = _uiText(comp, "Brand Anthem", Math.round(w*0.034), 6145, cRef + '.effect("Text Color")(1)', dur);
    title.parent = ctrl;
    title.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.135, -w*0.022]);
    title.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0.14, w*0.02);
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.14);

    var artist = _uiText(comp, "nytvir studio", Math.round(w*0.024), 6145, cRef + '.effect("Text Color")(1)', dur);
    artist.parent = ctrl;
    artist.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.135, w*0.012]);
    artist.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0.2, w*0.02);
    artist.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var d=0.2; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); Math.max(0, Math.min(1,pp*1.7)-Math.min(1,pOut*1.7))*55;";

    var track = _uiRRect(comp, "Progress Track", dur, w*0.38, w*0.012, w*0.006, cRef + '.effect("Text Color")(1)');
    track.parent = ctrl;
    track.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.02, w*0.068]);
    track.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var pp=Math.max(0,Math.min(1,(pIn-0.24)/0.76)); Math.max(0, Math.min(1,pp*1.7)-Math.min(1,pOut*1.7))*16;";

    var fillBar = _uiRRect(comp, "Progress Fill", dur, 4, w*0.012, w*0.006, cRef + '.effect("Accent")(1)');
    var barExpr = pre + "var pr=ctl.effect('Progress %')(1)/100; var f=Math.max(0,Math.min(1,(t-dur*0.22)/(dur*0.55))); var e=eo3(f); var cw=Math.max(3," + (w*0.38) + "*pr*e); ";
    fillBar.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1).property("ADBE Vector Rect Size").expression = barExpr + "[cw, " + (w*0.012) + "];";
    fillBar.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1).property("ADBE Vector Rect Position").expression = barExpr + "[-" + (w*0.19) + " + cw/2, 0];";
    fillBar.parent = ctrl;
    fillBar.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.02, w*0.068]);
    fillBar.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.26);

    var knob = comp.layers.addShape();
    knob.name = "Progress Knob";
    knob.inPoint = comp.time; knob.outPoint = comp.time + dur;
    var kg = knob.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ke = kg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ke.property("ADBE Vector Ellipse Size").setValue([w*0.026, w*0.026]);
    var kf = kg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    kf.property("ADBE Vector Fill Color").expression = cRef + '.effect("Text Color")(1)';
    knob.parent = ctrl;
    knob.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    knob.property("ADBE Transform Group").property("ADBE Position").expression = barExpr + "[-" + (w*0.02) + " - " + (w*0.19) + " + cw, " + (w*0.068) + "];";
    knob.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.3);

    var play = comp.layers.addShape();
    play.name = "Play Icon";
    play.inPoint = comp.time; play.outPoint = comp.time + dur;
    var pg = play.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tri = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    tri.property("ADBE Vector Star Type").setValue(2);
    tri.property("ADBE Vector Star Points").setValue(3);
    tri.property("ADBE Vector Star Outer Radius").setValue(w*0.028);
    var pf = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    pf.property("ADBE Vector Fill Color").expression = cRef + '.effect("Text Color")(1)';
    play.parent = ctrl;
    play.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    play.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.295, -w*0.005]);
    play.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(90);
    play.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0.24);

    ctrl.selected = true;
}

// --- NOTIFICATION: banner drops in from the top, hovers, lifts away
function _uiNotifyPop() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.2;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "🔔 NOTIFICATION CONTROLLER", dur, [w/2, h*0.16]);
    _addColorControl(ctrl, "Card BG", [0.97,0.96,0.94]);
    _addColorControl(ctrl, "Accent", [0.85,0.78,0.66]);
    _addColorControl(ctrl, "Text Color", [0.13,0.12,0.11]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _uiRRect(comp, "Notify Card", dur, w*0.84, w*0.21, w*0.05, cRef + '.effect("Card BG")(1)');
    _uiShadow(card);
    card.parent = ctrl;
    card.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    card.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0, w*0.22);
    card.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0);

    var icon = _uiRRect(comp, "Notify Icon", dur, w*0.125, w*0.125, w*0.03, cRef + '.effect("Accent")(1)');
    icon.parent = ctrl;
    icon.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.315, 0]);
    icon.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0.1);

    var title = _uiText(comp, "nytvir studio", Math.round(w*0.031), 6145, cRef + '.effect("Text Color")(1)', dur);
    title.parent = ctrl;
    title.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.225, -w*0.02]);
    title.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0.16, w*0.018);
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.16);

    var msg = _uiText(comp, "Yangi reel tayyor", Math.round(w*0.026), 6145, cRef + '.effect("Text Color")(1)', dur);
    msg.parent = ctrl;
    msg.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.225, w*0.022]);
    msg.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0.22, w*0.018);
    msg.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var d=0.22; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); Math.max(0, Math.min(1,pp*1.7)-Math.min(1,pOut*1.7))*70;";

    var tm = _uiText(comp, "now", Math.round(w*0.022), 6145, cRef + '.effect("Text Color")(1)', dur);
    tm.parent = ctrl;
    tm.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.3, -w*0.055]);
    tm.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var d=0.26; var pp=Math.max(0,Math.min(1,(pIn-d)/(1-d))); Math.max(0, Math.min(1,pp*1.7)-Math.min(1,pOut*1.7))*45;";

    ctrl.selected = true;
}

// --- CHAT: typing dots, then two bubbles pop in sequence
function _uiChatBubbles() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "💬 CHAT CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Bubble In", [0.96,0.95,0.93]);
    _addColorControl(ctrl, "Bubble Out", [0.85,0.78,0.66]);
    _addColorControl(ctrl, "Text Color", [0.13,0.12,0.11]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    // typing bubble (appears first, vanishes when message 1 lands)
    var typ = _uiRRect(comp, "Typing Bubble", dur, w*0.2, w*0.1, w*0.05, cRef + '.effect("Bubble In")(1)');
    _uiShadow(typ);
    typ.parent = ctrl;
    typ.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.24, -w*0.08]);
    typ.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var a=ob(Math.max(0,Math.min(1,(t-0.1)/0.3))); [a*100, a*100];";
    typ.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var a=Math.min(1,Math.max(0,(t-0.1)/0.2)); var b=(t>1.1)?Math.max(0,1-(t-1.1)/0.15):1; a*b*100;";
    var tg = typ.property("ADBE Root Vectors Group");
    for (var di = 0; di < 3; di++) {
        var dg = tg.addProperty("ADBE Vector Group");
        var de = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        de.property("ADBE Vector Ellipse Size").setValue([w*0.018, w*0.018]);
        de.property("ADBE Vector Ellipse Position").setValue([(di-1)*w*0.035, 0]);
        var df = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        df.property("ADBE Vector Fill Color").expression = cRef + '.effect("Text Color")(1)';
        dg.property("ADBE Vector Transform Group").property("ADBE Vector Group Opacity").expression = "40 + 50*Math.sin(time*8 - " + (di*1.1) + ");";
    }

    // message 1 (incoming, left)
    var b1 = _uiRRect(comp, "Bubble 1", dur, w*0.56, w*0.115, w*0.057, cRef + '.effect("Bubble In")(1)');
    _uiShadow(b1);
    b1.parent = ctrl;
    b1.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.13, -w*0.08]);
    b1.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var a=ob(Math.max(0,Math.min(1,(t-1.15)/0.4))); var x=ib(pOut); [Math.max(0,a-x)*100, Math.max(0,a-x)*100];";
    var t1 = _uiText(comp, "Salom! Montaj tayyor", Math.round(w*0.022), 6147, cRef + '.effect("Text Color")(1)', dur);
    t1.parent = ctrl;
    t1.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.13, -w*0.072]);
    t1.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var a=Math.min(1,Math.max(0,(t-1.3)/0.25)); var x=Math.min(1,pOut*1.7); Math.max(0,a-x)*100;";

    // message 2 (outgoing, right, accent)
    var b2 = _uiRRect(comp, "Bubble 2", dur, w*0.34, w*0.115, w*0.057, cRef + '.effect("Bubble Out")(1)');
    _uiShadow(b2);
    b2.parent = ctrl;
    b2.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.18, w*0.06]);
    b2.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var a=ob(Math.max(0,Math.min(1,(t-2.0)/0.4))); var x=ib(pOut); [Math.max(0,a-x)*100, Math.max(0,a-x)*100];";
    var t2 = _uiText(comp, "Vauuu!", Math.round(w*0.024), 6147, cRef + '.effect("Text Color")(1)', dur);
    t2.parent = ctrl;
    t2.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.18, w*0.068]);
    t2.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var a=Math.min(1,Math.max(0,(t-2.15)/0.25)); var x=Math.min(1,pOut*1.7); Math.max(0,a-x)*100;";

    ctrl.selected = true;
}

// --- SEARCH: bar pops in, query types itself with a live cursor
function _uiSearchType() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "🔍 SEARCH CONTROLLER", dur, [w/2, h*0.32]);
    _addColorControl(ctrl, "Card BG", [0.97,0.96,0.94]);
    _addColorControl(ctrl, "Text Color", [0.13,0.12,0.11]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var bar = _uiRRect(comp, "Search Bar", dur, w*0.8, w*0.125, w*0.0625, cRef + '.effect("Card BG")(1)');
    _uiShadow(bar);
    bar.parent = ctrl;
    bar.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    bar.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0);

    // magnifier icon
    var mag = comp.layers.addShape();
    mag.name = "Magnifier";
    mag.inPoint = comp.time; mag.outPoint = comp.time + dur;
    var mg = mag.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var mc = mg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    mc.property("ADBE Vector Ellipse Size").setValue([w*0.038, w*0.038]);
    mc.property("ADBE Vector Ellipse Position").setValue([0, -w*0.004]);
    var mh = mg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    mh.property("ADBE Vector Rect Size").setValue([w*0.005, w*0.02]);
    mh.property("ADBE Vector Rect Position").setValue([w*0.017, w*0.018]);
    var ms = mg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    ms.property("ADBE Vector Stroke Color").expression = cRef + '.effect("Text Color")(1)';
    ms.property("ADBE Vector Stroke Width").setValue(Math.max(2, w*0.006));
    mag.parent = ctrl;
    mag.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    mag.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.33, 0]);
    mag.property("ADBE Transform Group").property("ADBE Scale").expression = _uiPop(pre, 0.12);

    // self-typing query
    var q = _uiText(comp, "aesthetic vibes", Math.round(w*0.03), 6145, cRef + '.effect("Text Color")(1)', dur);
    q.property("ADBE Text Properties").property("ADBE Text Document").expression =
        'var ctl=thisComp.layer("' + ctrl.name + '"); var spd=ctl.effect("Animation Speed")(1)/100;' +
        'var tt=(time-inPoint)*spd - 0.55; var full="aesthetic vibes";' +
        'var n=Math.max(0, Math.floor(tt/0.075)); var s=full.substr(0, Math.min(full.length, n));' +
        'var c=(Math.sin(time*7)>0 && tt>0 && tt<2.6)?"|":"";' +
        'var col=ctl.effect("Text Color")(1); text.sourceText.style.setFillColor([col[0],col[1],col[2]]).setText(s+c);';
    q.parent = ctrl;
    q.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.28, w*0.012]);
    q.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.2);

    ctrl.selected = true;
}

// --- LIKE BURST: heart pops with rings, counter ticks up
function _uiLikeBurst() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "❤️ LIKE CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Accent", [0.85,0.45,0.45]);
    _addColorControl(ctrl, "Text Color", [0.97,0.96,0.94]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var hs = w*0.11; // heart base size

    // heart = square + two circles, rotated 45
    var heart = comp.layers.addShape();
    heart.name = "Heart";
    heart.inPoint = comp.time; heart.outPoint = comp.time + dur;
    var hg = heart.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var sq = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    sq.property("ADBE Vector Rect Size").setValue([hs, hs]);
    var c1 = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    c1.property("ADBE Vector Ellipse Size").setValue([hs, hs]);
    c1.property("ADBE Vector Ellipse Position").setValue([0, -hs/2]);
    var c2 = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    c2.property("ADBE Vector Ellipse Size").setValue([hs, hs]);
    c2.property("ADBE Vector Ellipse Position").setValue([-hs/2, 0]);
    var hf = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    hf.property("ADBE Vector Fill Color").expression = cRef + '.effect("Accent")(1)';
    hg.property("ADBE Vector Transform Group").property("ADBE Vector Rotation").setValue(45);
    heart.parent = ctrl;
    heart.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    heart.property("ADBE Transform Group").property("ADBE Position").setValue([0, -w*0.01]);
    heart.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "function el(t){var c=(2*Math.PI)/3;return t<=0?0:t>=1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;}" +
        "var a=el(Math.max(0,Math.min(1,(t-0.15)/0.7))); var pulse=1+0.04*Math.sin(time*5);" +
        "var x=ib(pOut); var e=Math.max(0,a*pulse-x); [e*100, e*100];";

    // burst rings
    for (var ri = 0; ri < 2; ri++) {
        var ring = comp.layers.addShape();
        ring.name = "Burst Ring " + (ri+1);
        ring.inPoint = comp.time; ring.outPoint = comp.time + dur;
        var rg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var re = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        re.property("ADBE Vector Ellipse Size").expression = pre +
            "var f=Math.max(0,Math.min(1,(t-" + (0.25 + ri*0.12) + ")/0.7)); var e=eo3(f); var sz=" + (w*0.12) + " + e*" + (w*0.3) + "; [sz, sz];";
        var rs = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        rs.property("ADBE Vector Stroke Color").expression = cRef + '.effect("Accent")(1)';
        rs.property("ADBE Vector Stroke Width").expression = pre +
            "var f=Math.max(0,Math.min(1,(t-" + (0.25 + ri*0.12) + ")/0.7)); Math.max(0.5," + (w*0.008) + "*(1-f));";
        ring.parent = ctrl;
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        ring.property("ADBE Transform Group").property("ADBE Position").setValue([0, -w*0.01]);
        ring.property("ADBE Transform Group").property("ADBE Opacity").expression = pre +
            "var f=Math.max(0,Math.min(1,(t-" + (0.25 + ri*0.12) + ")/0.7)); (1-f)*80;";
        }

    // ticking counter
    var cnt = _uiText(comp, "1247 likes", Math.round(w*0.028), 6147, null, dur, [0.97, 0.96, 0.94]);
    cnt.property("ADBE Text Properties").property("ADBE Text Document").expression =
        'var ctl=thisComp.layer("' + ctrl.name + '"); var spd=ctl.effect("Animation Speed")(1)/100;' +
        'var tt=(time-inPoint)*spd; function eo3(t){t=Math.max(0,Math.min(1,t));return 1-Math.pow(1-t,3);}' +
        'var e=eo3(Math.max(0,Math.min(1,(tt-0.5)/1.1))); var v=Math.round(1198+49*e);' +
        'var col=ctl.effect("Text Color")(1); text.sourceText.style.setFillColor([col[0],col[1],col[2]]).setText(v+" likes");';
    cnt.parent = ctrl;
    cnt.property("ADBE Transform Group").property("ADBE Position").setValue([0, w*0.115]);
    cnt.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.3);

    ctrl.selected = true;
}

// ----------------------------------------------------
// EDOUARD KIT v2.6 — realistic notifications & kinetic titles
// (dark glassy app UI + bold punch typography)
// ----------------------------------------------------
function _uiFont(tl, psName) {
    try {
        var d = tl.property("Source Text").value;
        d.font = psName;
        tl.property("Source Text").setValue(d);
    } catch(e) {}
}

// --- STRIPE-STYLE PAYMENT NOTIFICATION: dark glassy banner, looks real
function _uiPayNotify() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "PAYMENT NOTIFY CONTROLLER", dur, [w/2, h*0.14]);
    _addColorControl(ctrl, "Card BG", [0.10,0.10,0.115]);
    _addColorControl(ctrl, "Icon Color", [0.39,0.36,0.94]); // stripe indigo
    _addColorControl(ctrl, "Text Color", [1,1,1]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.9, w*0.2, w*0.05, ctrl, pre, 0);

    function attach(L, px, py) {
        L.parent = card;
        L.property("ADBE Transform Group").property("ADBE Position").setValue([px, py]);
    }

    var icon = _uiRRect(comp, "App Icon", dur, w*0.12, w*0.12, w*0.03, cRef + '.effect("Icon Color")(1)');
    attach(icon, -w*0.345, 0);
    var glyph = _uiText(comp, "S", Math.round(w*0.07), 6147, null, dur, [1,1,1]);
    _uiFont(glyph, "Arial-BoldMT");
    attach(glyph, -w*0.345, 0);

    var appName = _uiText(comp, "Stripe", Math.round(w*0.03), 6145, cRef + '.effect("Text Color")(1)', dur);
    _uiFont(appName, "Arial-BoldMT");
    attach(appName, -w*0.25, -w*0.025);

    var msg = _uiText(comp, "You've received $11,567 from David", Math.round(w*0.0255), 6145, null, dur, [0.78,0.78,0.8]);
    attach(msg, -w*0.25, w*0.022);

    var tm = _uiText(comp, "now", Math.round(w*0.021), 6145, null, dur, [0.55,0.55,0.58]);
    attach(tm, w*0.345, -w*0.06);

    ctrl.selected = true;
}

// --- BOLD PUNCH TITLE: huge white text slams in
function _titlePunch() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.5;
    var w = comp.width, h = comp.height;
    var tl = _uiText(comp, "100% FAKE", Math.round(w*0.105), 6147, null, dur, [1,1,1]);
    tl.name = "[Nytvir] Title - Punch";
    _uiFont(tl, "Arial-BoldMT");
    tl.motionBlur = true;
    comp.motionBlur = true;
    _addSlider(tl, "Animation Speed", 100);
    _addSlider(tl, "Punch Scale", 140);
    try {
        var ds = tl.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(170);
        ds.property("ADBE Drop Shadow-0004").setValue(Math.max(4, w*0.006));
        ds.property("ADBE Drop Shadow-0005").setValue(w*0.02);
    } catch(e) {}
    tl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h*0.6]);
    var base = "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; function oe(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(2,-10*x);} ";
    tl.property("ADBE Transform Group").property("ADBE Scale").expression = base +
        "var ps=effect('Punch Scale')(1); var sIn=ps+(100-ps)*oe(t/0.45);" +
        "var f=Math.max(0,Math.min(1,(t-(dur-0.3))/0.3)); var s=sIn*(1+0.18*f); [s,s];";
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression = base +
        "var a=Math.min(1,t/0.1); var o=1-Math.max(0,Math.min(1,(t-(dur-0.25))/0.25)); a*o*100;";
    tl.selected = true;
}

// --- CHROME TITLE: glossy metallic gradient text
function _titleChrome() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.8;
    var w = comp.width, h = comp.height;
    var tl = _uiText(comp, "INFINITE", Math.round(w*0.115), 6147, null, dur, [1,1,1]);
    tl.name = "[Nytvir] Title - Chrome";
    _uiFont(tl, "Arial-BoldMT");
    tl.motionBlur = true;
    comp.motionBlur = true;
    _addSlider(tl, "Animation Speed", 100);
    tl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h*0.6]);

    try {
        var ramp = tl.Effects.addProperty("ADBE Ramp");
        ramp.property(1).setValue([0, -w*0.08]);          // start point (top of glyphs)
        ramp.property(2).setValue([1, 1, 1, 1]);          // white
        ramp.property(3).setValue([0, w*0.01]);           // end point
        ramp.property(4).setValue([0.45, 0.5, 0.58, 1]);  // steel gray-blue
    } catch(e) {}
    try {
        var glow = tl.Effects.addProperty("ADBE Glo2");
        glow.property("ADBE Glo2-0003").setValue(w*0.02);
        glow.property("ADBE Glo2-0004").setValue(0.5);
    } catch(e) {}
    try {
        var ds = tl.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(200);
        ds.property("ADBE Drop Shadow-0004").setValue(Math.max(4, w*0.008));
        ds.property("ADBE Drop Shadow-0005").setValue(w*0.025);
    } catch(e) {}
    try {
        var blur = tl.Effects.addProperty("ADBE Gaussian Blur 2");
        blur.property(1).expression = "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; var bi=Math.max(0,1-Math.min(1,t/0.4)); var bo=Math.max(0,Math.min(1,(t-(dur-0.3))/0.3)); (bi+bo)*22;";
    } catch(e) {}

    var base = "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; function oe(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(2,-10*x);} ";
    tl.property("ADBE Transform Group").property("ADBE Scale").expression = base +
        "var s=112-12*oe(t/0.5); var f=Math.max(0,Math.min(1,(t-(dur-0.3))/0.3)); s=s*(1-0.1*f); [s,s];";
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression = base +
        "var a=Math.min(1,t/0.15); var o=1-Math.max(0,Math.min(1,(t-(dur-0.25))/0.25)); a*o*100;";
    tl.selected = true;
}

// --- NEON TITLE: green LED text flickers on, glows hard
function _titleNeon() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.8;
    var w = comp.width, h = comp.height;
    var tl = _uiText(comp, "ALGORITHM", Math.round(w*0.105), 6147, null, dur, [0.35, 1, 0.45]);
    tl.name = "[Nytvir] Title - Neon";
    _uiFont(tl, "Arial-BoldMT");
    tl.motionBlur = true;
    comp.motionBlur = true;
    _addSlider(tl, "Animation Speed", 100);
    _addColorControl(tl, "Neon Color", [0.35, 1, 0.45]);
    tl.property("ADBE Text Properties").property("ADBE Text Document").expression =
        'var c=effect("Neon Color")(1); text.sourceText.style.setFillColor([c[0],c[1],c[2]]);';
    tl.property("ADBE Transform Group").property("ADBE Position").setValue([w/2, h*0.6]);

    try {
        var g1 = tl.Effects.addProperty("ADBE Glo2");
        g1.property("ADBE Glo2-0003").setValue(w*0.018);
        g1.property("ADBE Glo2-0004").setValue(1.0);
    } catch(e) {}
    try {
        var g2 = tl.Effects.addProperty("ADBE Glo2");
        g2.property("ADBE Glo2-0003").setValue(w*0.07);
        g2.property("ADBE Glo2-0004").setValue(0.7);
    } catch(e) {}

    var base = "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; ";
    // neon tube flicker-on, steady burn, quick out
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression = base +
        "var fl=1; if(t<0.55){ var s=Math.sin(t*47)*Math.sin(t*29)+Math.sin(t*71); fl=(s>-0.4)?1:0.18; fl*=Math.min(1,t/0.5+0.3); }" +
        "var o=1-Math.max(0,Math.min(1,(t-(dur-0.25))/0.25)); fl*o*100;";
    tl.property("ADBE Transform Group").property("ADBE Scale").expression = base +
        "var p=Math.min(1,t/0.4); var s=104-4*p + Math.sin(time*2.2)*0.6; [s,s];";
    tl.selected = true;
}

// ----------------------------------------------------
// EDOUARD KIT v2.7 — proof graphics, lower-thirds, annotations
// ----------------------------------------------------
function _uiGlowFx(L, radiusPx, intensity) {
    try {
        var g = L.Effects.addProperty("ADBE Glo2");
        g.property("ADBE Glo2-0003").setValue(radiusPx);
        g.property("ADBE Glo2-0004").setValue(intensity);
    } catch(e) {}
}
// comma-formatting helper text for expressions
var FMT = "function fmt(n){var s=Math.round(n)+'';var o='';var c=0;for(var i=s.length-1;i>=0;i--){o=s.charAt(i)+o;c++;if(c%3===0&&i>0)o=','+o;}return o;} ";

// --- COUNTDOWN TIMER: green neon ring depletes, number ticks down
function _countdownTimer() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "COUNTDOWN CONTROLLER", dur, [w/2, h*0.3]);
    _addColorControl(ctrl, "Neon Color", [0.3,1,0.42]);
    _addSlider(ctrl, "Seconds", 60);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var R = w*0.17, sw = Math.max(5, w*0.014);

    var track = comp.layers.addShape();
    track.name = "Timer Track"; track.inPoint=comp.time; track.outPoint=comp.time+dur;
    var tg = track.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var te = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    te.property("ADBE Vector Ellipse Size").setValue([R*2, R*2]);
    var tstr = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    tstr.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Neon Color")(1)';
    tstr.property("ADBE Vector Stroke Width").setValue(sw);
    track.parent = ctrl;
    track.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    track.property("ADBE Transform Group").property("ADBE Opacity").setValue(16);

    var ring = comp.layers.addShape();
    ring.name = "Timer Ring"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur; ring.motionBlur=true;
    var rg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var re = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    re.property("ADBE Vector Ellipse Size").setValue([R*2, R*2]);
    var rstr = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    rstr.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Neon Color")(1)';
    rstr.property("ADBE Vector Stroke Width").setValue(sw);
    rstr.property("ADBE Vector Stroke Line Cap").setValue(2);
    var trim = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    trim.property("ADBE Vector Trim End").expression = pre + "var tot=ctl.effect('Seconds')(1); 100*Math.max(0,Math.min(1,1 - t/tot));";
    _uiGlowFx(ring, w*0.03, 1.0);
    ring.parent = ctrl;
    ring.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    ring.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-90);
    ring.property("ADBE Transform Group").property("ADBE Scale").setValue([100,-100]);

    var num = _uiText(comp, "60", Math.round(R*1.0), 6147, null, dur, [0.3,1,0.42]);
    num.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; var tot=ctl.effect('Seconds')(1); var rem=Math.max(0,Math.ceil(tot-tt)); ''+rem;";
    _uiFont(num, "Arial-BoldMT");
    _uiGlowFx(num, w*0.03, 0.9);
    num.parent = ctrl;
    num.property("ADBE Transform Group").property("ADBE Position").setValue([0, R*0.04]);
    num.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var e=ob(pIn); [e*100, e*100];";

    ctrl.selected = true;
}

// --- MONEY COUNTER: big $ value rolls up from 0
function _moneyCounter() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "MONEY COUNTER CONTROLLER", dur, [w/2, h*0.45]);
    _addColorControl(ctrl, "Number Color", [1,1,1]);
    _addColorControl(ctrl, "Label Color", [0.45,0.92,0.55]);
    _addSlider(ctrl, "Target", 70098);
    var pre = _uiPrefix(ctrl.name);

    var label = _uiText(comp, "REVENUE THIS MONTH", Math.round(w*0.03), 6147, 'thisComp.layer("'+ctrl.name+'").effect("Label Color")(1)', dur);
    _uiFont(label, "Arial-BoldMT");
    label.parent = ctrl;
    label.property("ADBE Transform Group").property("ADBE Position").setValue([0, -w*0.085]);
    label.property("ADBE Transform Group").property("ADBE Position").expression = _uiRise(pre, 0.0, w*0.02);
    label.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.0);

    var num = _uiText(comp, "$0", Math.round(w*0.115), 6147, null, dur, [1,1,1]);
    num.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.15)/2.0); var v=ctl.effect('Target')(1)*e; '$'+fmt(v);";
    _uiFont(num, "Arial-BoldMT");
    num.parent = ctrl;
    num.property("ADBE Transform Group").property("ADBE Position").setValue([0, w*0.04]);
    num.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var e=ob(pIn); var x=ib(pOut); [Math.max(0,e-x)*100, Math.max(0,e-x)*100];";

    ctrl.selected = true;
}

// --- GROWTH CHART: line draws up to the right, dot pops, value rises
function _growthChart() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "GROWTH CHART CONTROLLER", dur, [w*0.5, h*0.5]);
    _addColorControl(ctrl, "Line Color", [0.45,0.92,0.55]);
    _addColorControl(ctrl, "Text Color", [1,1,1]);
    _addSlider(ctrl, "Value", 70098);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.62, ch = w*0.5;
    var tip = [cw, -ch*0.92];

    // baseline axis
    var axis = _uiRRect(comp, "Chart Axis", dur, cw*1.05, Math.max(2,w*0.004), 0, cRef+'.effect("Text Color")(1)');
    axis.parent = ctrl;
    axis.property("ADBE Transform Group").property("ADBE Position").setValue([0, ch*0.06]);
    axis.property("ADBE Transform Group").property("ADBE Opacity").setValue(22);

    // the rising line
    var line = comp.layers.addShape();
    line.name = "Growth Line"; line.inPoint=comp.time; line.outPoint=comp.time+dur; line.motionBlur=true;
    var lg = line.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pathG = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shp = new Shape();
    shp.vertices = [[0,0],[cw*0.18,-ch*0.16],[cw*0.36,-ch*0.1],[cw*0.55,-ch*0.46],[cw*0.74,-ch*0.5],[cw*0.88,-ch*0.78],tip];
    shp.closed = false;
    pathG.property("ADBE Vector Shape").setValue(shp);
    var lstr = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    lstr.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Line Color")(1)';
    lstr.property("ADBE Vector Stroke Width").setValue(Math.max(5,w*0.013));
    lstr.property("ADBE Vector Stroke Line Cap").setValue(2);
    lstr.property("ADBE Vector Stroke Line Join").setValue(2);
    var ltrim = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    ltrim.property("ADBE Vector Trim End").expression = pre + "var e=eo3((t-0.1)/1.6); 100*Math.max(0,Math.min(1,e));";
    _uiGlowFx(line, w*0.02, 0.7);
    line.parent = ctrl;
    line.property("ADBE Transform Group").property("ADBE Position").setValue([-cw/2, ch*0.45]);

    // dot at tip
    var dot = comp.layers.addShape();
    dot.name = "Chart Dot"; dot.inPoint=comp.time; dot.outPoint=comp.time+dur; dot.motionBlur=true;
    var dg = dot.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var de = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    de.property("ADBE Vector Ellipse Size").setValue([w*0.04, w*0.04]);
    var df = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    df.property("ADBE Vector Fill Color").expression = cRef+'.effect("Line Color")(1)';
    _uiGlowFx(dot, w*0.03, 1.0);
    dot.parent = ctrl;
    dot.property("ADBE Transform Group").property("ADBE Position").setValue([-cw/2 + tip[0], ch*0.45 + tip[1]]);
    dot.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "function el(x){var c=(2*Math.PI)/3;return x<=0?0:x>=1?1:Math.pow(2,-10*x)*Math.sin((x*10-0.75)*c)+1;} var e=el((t-1.5)/0.7); [e*100,e*100];";

    // value label near tip
    var val = _uiText(comp, "$0", Math.round(w*0.05), 6147, null, dur, [1,1,1]);
    val.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.1)/1.7); var v=ctl.effect('Value')(1)*e; '$'+fmt(v);";
    _uiFont(val, "Arial-BoldMT");
    val.parent = ctrl;
    val.property("ADBE Transform Group").property("ADBE Position").setValue([-cw/2 + tip[0] - w*0.05, ch*0.45 + tip[1] - w*0.085]);
    val.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.32);

    ctrl.selected = true;
}

// --- SUBSCRIBER MILESTONE: dark glassy YT-style alert
function _notifySubscriber() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "SUBSCRIBER CONTROLLER", dur, [w/2, h*0.16]);
    _addColorControl(ctrl, "Card BG", [0.10,0.10,0.115]);
    _addColorControl(ctrl, "Icon Color", [0.93,0.13,0.13]);
    _addColorControl(ctrl, "Text Color", [1,1,1]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.9, w*0.2, w*0.05, ctrl, pre, 0);

    function attach(L, px, py) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px, py]); }

    var icon = _uiRRect(comp, "YT Icon", dur, w*0.13, w*0.092, w*0.022, cRef + '.effect("Icon Color")(1)');
    attach(icon, -w*0.345, 0);
    var play = comp.layers.addShape();
    play.name = "Play Tri"; play.inPoint=comp.time; play.outPoint=comp.time+dur;
    var pg = play.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tri = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    tri.property("ADBE Vector Star Type").setValue(2);
    tri.property("ADBE Vector Star Points").setValue(3);
    tri.property("ADBE Vector Star Outer Radius").setValue(w*0.026);
    var pf = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    pf.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
    play.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    play.parent = card;
    play.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.345, 0]);
    play.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(90);

    var nameTxt = _uiText(comp, "nytvir studio", Math.round(w*0.03), 6145, cRef + '.effect("Text Color")(1)', dur);
    _uiFont(nameTxt, "Arial-BoldMT");
    attach(nameTxt, -w*0.25, -w*0.025);
    var msg = _uiText(comp, "You hit 100,000 subscribers!", Math.round(w*0.0255), 6145, null, dur, [0.78,0.78,0.8]);
    attach(msg, -w*0.25, w*0.022);
    var tm = _uiText(comp, "now", Math.round(w*0.021), 6145, null, dur, [0.55,0.55,0.58]);
    attach(tm, w*0.345, -w*0.06);

    ctrl.selected = true;
}

// --- HIGHLIGHT TITLE: marker bar swipes in behind a word
function _titleHighlight() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.8;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "HIGHLIGHT CONTROLLER", dur, [w/2, h*0.6]);
    _addColorControl(ctrl, "Highlight Color", [0.45,0.92,0.55]);
    _addColorControl(ctrl, "Text Color", [0.08,0.08,0.1]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var hl = _uiRRect(comp, "Marker", dur, w*0.62, w*0.13, w*0.012, cRef+'.effect("Highlight Color")(1)');
    hl.parent = ctrl;
    // anchor at the marker's left edge so scale-X grows from the left
    hl.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-w*0.31, 0]);
    hl.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.31, -w*0.005]);
    hl.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-1.5);
    hl.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "var e=eo3(pIn/0.6); var x=ib(pOut); [Math.max(0,e-x)*100, 100];";

    var tx = _uiText(comp, "CHANGED", Math.round(w*0.1), 6147, cRef+'.effect("Text Color")(1)', dur);
    _uiFont(tx, "Arial-BoldMT");
    tx.parent = ctrl;
    tx.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);
    tx.property("ADBE Transform Group").property("ADBE Opacity").expression = pre +
        "var a=Math.min(1,Math.max(0,(pIn-0.18)/0.2)); var o=1-Math.min(1,pOut*1.7); a*o*100;";

    ctrl.selected = true;
}

// --- RED ALERT TITLE: bold red text punches in with shake
function _titleRedAlert() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.5;
    var w = comp.width, h = comp.height;
    var tl = _uiText(comp, "WRITTEN BY AI", Math.round(w*0.092), 6147, null, dur, [0.95,0.16,0.2]);
    tl.name = "[Nytvir] Title - Red Alert";
    _uiFont(tl, "Arial-BoldMT");
    tl.motionBlur = true; comp.motionBlur = true;
    _addSlider(tl, "Animation Speed", 100);
    _addColorControl(tl, "Alert Color", [0.95,0.16,0.2]);
    tl.property("ADBE Text Properties").property("ADBE Text Document").expression =
        'var c=effect("Alert Color")(1); text.sourceText.style.setFillColor([c[0],c[1],c[2]]);';
    try {
        var ds = tl.Effects.addProperty("ADBE Drop Shadow");
        ds.property("ADBE Drop Shadow-0002").setValue(160);
        ds.property("ADBE Drop Shadow-0004").setValue(Math.max(4,w*0.006));
        ds.property("ADBE Drop Shadow-0005").setValue(w*0.02);
    } catch(e) {}
    _uiGlowFx(tl, w*0.025, 0.5);
    tl.property("ADBE Transform Group").property("ADBE Position").expression =
        "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var sh=Math.max(0,1-t/0.4); ["+(w/2)+"+wiggle(18,"+(w*0.012)+"*sh)[0]-value[0]+"+(w/2)+", "+(h*0.6)+"]; [ "+(w/2)+" + (Math.sin(time*60)*"+(w*0.012)+"*sh), "+(h*0.6)+" ];";
    var base = "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var dur=outPoint-inPoint; function oe(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(2,-10*x);} ";
    tl.property("ADBE Transform Group").property("ADBE Scale").expression = base +
        "var s=145+(100-145)*oe(t/0.4); var f=Math.max(0,Math.min(1,(t-(dur-0.3))/0.3)); s=s*(1+0.16*f); [s,s];";
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression = base +
        "var a=Math.min(1,t/0.08); var o=1-Math.max(0,Math.min(1,(t-(dur-0.25))/0.25)); a*o*100;";
    tl.selected = true;
}

// --- LOWER THIRD: accent bar + name & handle slide in bottom-left
function _lowerThird() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "LOWER THIRD CONTROLLER", dur, [w*0.1, h*0.82]);
    _addColorControl(ctrl, "Accent", [0.45,0.92,0.55]);
    _addColorControl(ctrl, "Name Color", [1,1,1]);
    _addColorControl(ctrl, "Handle Color", [0.7,0.7,0.74]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var bar = _uiRRect(comp, "Accent Bar", dur, w*0.016, w*0.13, w*0.008, cRef+'.effect("Accent")(1)');
    bar.parent = ctrl;
    // anchor at the bar's bottom edge so scale-Y grows upward
    bar.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, w*0.065]);
    bar.property("ADBE Transform Group").property("ADBE Position").setValue([0, w*0.065]);
    bar.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "var e=ob(pIn); var x=ib(pOut); [100, Math.max(0,e-x)*100];";

    var nm = _uiText(comp, "Edouard Brochu", Math.round(w*0.04), 6145, cRef+'.effect("Name Color")(1)', dur);
    _uiFont(nm, "Arial-BoldMT");
    nm.parent = ctrl;
    nm.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.04, -w*0.022]);
    nm.property("ADBE Transform Group").property("ADBE Position").expression = pre +
        "var e=ob(pIn); var x=ib(pOut); value + [-"+(w*0.06)+"*(1-e) - "+(w*0.06)+"*x, 0];";
    nm.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.08);

    var hd = _uiText(comp, "@nytvir studio", Math.round(w*0.028), 6145, cRef+'.effect("Handle Color")(1)', dur);
    hd.parent = ctrl;
    hd.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.04, w*0.03]);
    hd.property("ADBE Transform Group").property("ADBE Position").expression = pre +
        "var e=ob(pIn); var x=ib(pOut); value + [-"+(w*0.06)+"*(1-e) - "+(w*0.06)+"*x, 0];";
    hd.property("ADBE Transform Group").property("ADBE Opacity").expression = _uiFade(pre, 0.16);

    ctrl.selected = true;
}

// --- ARROW CALLOUT: hand-drawn red circle + arrow draw on
function _arrowCallout() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "ARROW CALLOUT CONTROLLER", dur, [w*0.5, h*0.5]);
    _addColorControl(ctrl, "Ink Color", [0.95,0.16,0.2]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var sw = Math.max(5, w*0.012);

    // circle (slightly open, hand-drawn) drawn via trim
    var circ = comp.layers.addShape();
    circ.name = "Callout Circle"; circ.inPoint=comp.time; circ.outPoint=comp.time+dur; circ.motionBlur=true;
    var cg = circ.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ce = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ce.property("ADBE Vector Ellipse Size").setValue([w*0.42, w*0.32]);
    var cstr = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    cstr.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Ink Color")(1)';
    cstr.property("ADBE Vector Stroke Width").setValue(sw);
    cstr.property("ADBE Vector Stroke Line Cap").setValue(2);
    var ctrim = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    ctrim.property("ADBE Vector Trim Start").setValue(6);
    ctrim.property("ADBE Vector Trim End").expression = pre + "var e=eo3(pIn/0.55); 6 + 90*Math.max(0,Math.min(1,e));";
    ctrim.property("ADBE Vector Trim Offset").setValue(-20);
    circ.parent = ctrl;
    circ.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.02]);
    circ.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-8);
    circ.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "(1-ib(pOut))*100;";

    // arrow (shaft + head) drawn after circle
    var arr = comp.layers.addShape();
    arr.name = "Callout Arrow"; arr.inPoint=comp.time; arr.outPoint=comp.time+dur; arr.motionBlur=true;
    var ag = arr.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var apG = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var ashp = new Shape();
    ashp.vertices = [[-w*0.32,-h*0.16],[-w*0.14,-h*0.04],[-w*0.22,-h*0.045],[-w*0.14,-h*0.04],[-w*0.155,-h*0.11]];
    ashp.closed = false;
    apG.property("ADBE Vector Shape").setValue(ashp);
    var astr = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    astr.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Ink Color")(1)';
    astr.property("ADBE Vector Stroke Width").setValue(sw);
    astr.property("ADBE Vector Stroke Line Cap").setValue(2);
    astr.property("ADBE Vector Stroke Line Join").setValue(2);
    var atrim = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    atrim.property("ADBE Vector Trim End").expression = pre + "var e=eo3((pIn-0.5)/0.5); 100*Math.max(0,Math.min(1,e));";
    arr.parent = ctrl;
    arr.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.18, h*0.04]);
    arr.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "(1-ib(pOut))*100;";

    ctrl.selected = true;
}

// ----------------------------------------------------
// EDOUARD KIT v2.8 — hero-tier composite overlays
// ----------------------------------------------------
function _fadeT(pre, d0, mul) {
    return pre + "var d="+d0+"; var a=Math.max(0,Math.min(1,(t-d)/0.35)); var o=1-Math.min(1,pOut*1.8); a*o*"+(mul||100)+";";
}
function _popT(pre, d0) {
    return pre + "var d="+d0+"; var pp=Math.max(0,Math.min(1,(t-d)/0.5)); var e=ob(pp); var x=ib(pOut); var s=Math.max(0,e-x)*100; [s,s];";
}
function _slideUpT(pre, d0, dist) {
    return pre + "var d="+d0+"; var pp=Math.max(0,Math.min(1,(t-d)/0.5)); var e=ob(pp); var x=ib(pOut); value + [0, "+dist+"*(1-e) - "+(dist*0.7)+"*x];";
}
function _vchk(comp, dur, sz, col) {
    // Apple checkmark.seal.fill: scalloped seal + white check (check group added FIRST = on top)
    var b = comp.layers.addShape();
    b.name = "Verified"; b.inPoint=comp.time; b.outPoint=comp.time+dur;
    // check group (white V stroke) — on top
    var ckg = b.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var cpath = ckg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var cs = new Shape();
    cs.vertices = [[-sz*0.17, sz*0.02],[-sz*0.04, sz*0.14],[sz*0.2, -sz*0.13]];
    cs.closed = false;
    cpath.property("ADBE Vector Shape").setValue(cs);
    var cstr = ckg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    cstr.property("ADBE Vector Stroke Color").setValue([1,1,1,1]);
    cstr.property("ADBE Vector Stroke Width").setValue(sz*0.1);
    cstr.property("ADBE Vector Stroke Line Cap").setValue(2);
    cstr.property("ADBE Vector Stroke Line Join").setValue(2);
    // seal group (scalloped circle via rounded star) — below
    var sg = b.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var seal = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Star");
    seal.property("ADBE Vector Star Type").setValue(1);
    seal.property("ADBE Vector Star Points").setValue(11);
    seal.property("ADBE Vector Star Inner Radius").setValue(sz*0.42);
    seal.property("ADBE Vector Star Outer Radius").setValue(sz*0.5);
    seal.property("ADBE Vector Star Inner Roundess").setValue(100);
    seal.property("ADBE Vector Star Outer Roundess").setValue(100);
    var f = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
    b.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    return b;
}

// Clean filled person silhouette (round head + rounded-shoulder bust), Apple/Shutterstock style
function _personGlyph(comp, dur, size, color) {
    var s = comp.layers.addShape(); s.name="Person"; s.inPoint=comp.time; s.outPoint=comp.time+dur;
    var g = s.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    // head
    var head = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    head.property("ADBE Vector Ellipse Size").setValue([size*0.54, size*0.54]);
    head.property("ADBE Vector Ellipse Position").setValue([0, -size*0.4]);
    // bust: flat bottom, smoothly rounded shoulders/top
    var bw = size*1.06, bh = size*0.62, cy = size*0.2;
    var bg = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var sh = new Shape();
    sh.vertices    = [[-bw/2, cy+bh/2], [-bw/2, cy-bh*0.12], [0, cy-bh/2], [bw/2, cy-bh*0.12], [bw/2, cy+bh/2]];
    sh.inTangents  = [[0,0], [0,0], [-bw*0.34, 0], [0, -bh*0.46], [0,0]];
    sh.outTangents = [[0,0], [0, -bh*0.46], [bw*0.34, 0], [0, 0], [0,0]];
    sh.closed = true;
    bg.property("ADBE Vector Shape").setValue(sh);
    var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    f.property("ADBE Vector Fill Color").setValue([color[0],color[1],color[2],1]);
    s.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    return s;
}

// --- MONEY RAIN: a stack of payment notifications cascades in
function _notifyStack() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 5.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "MONEY STACK CONTROLLER", dur, [w/2, h*0.12]);
    _addColorControl(ctrl, "Card BG", [0.10,0.10,0.125]);
    _addColorControl(ctrl, "Icon Color", [0.39,0.36,0.94]);
    _addColorControl(ctrl, "Amount Color", [0.40,0.92,0.55]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var items = [["+$11,567","from David"],["+$8,940","from Sarah Chen"],["+$4,200","from Mike R."],["+$15,800","from Anna K."]];
    var cardH = w*0.165, gap = w*0.2;

    for (var i = 0; i < items.length; i++) {
        var d0 = i*0.5;
        var card = _uiRRect(comp, "Pay Card "+(i+1), dur, w*0.9, cardH, w*0.04, cRef + '.effect("Card BG")(1)');
        _uiShadow(card);
        card.parent = ctrl;
        card.property("ADBE Transform Group").property("ADBE Position").setValue([0, i*gap]);
        card.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var d="+d0+"; var pp=Math.max(0,Math.min(1,(t-d)/0.5)); var e=ob(pp); var x=ib(pOut); value + [0, -"+(w*0.35)+"*(1-e) - "+(w*0.2)+"*x];";
        card.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 95);

        var icon = _uiRRect(comp, "Stripe Icon "+(i+1), dur, w*0.1, w*0.1, w*0.026, cRef + '.effect("Icon Color")(1)');
        icon.parent = card; icon.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.36, 0]);
        icon.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        var glyph = _uiText(comp, "S", Math.round(w*0.058), 6147, null, dur, [1,1,1]);
        _uiFont(glyph, "Arial-BoldMT");
        glyph.parent = card; glyph.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.36, 0]);
        glyph.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);

        var amt = _uiText(comp, items[i][0], Math.round(w*0.04), 6145, cRef+'.effect("Amount Color")(1)', dur, [0.40,0.92,0.55]);
        _uiFont(amt, "Arial-BoldMT");
        amt.parent = card; amt.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.285, -w*0.02]);
        amt.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        var who = _uiText(comp, items[i][1], Math.round(w*0.027), 6145, null, dur, [0.74,0.74,0.78]);
        who.parent = card; who.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.285, w*0.022]);
        who.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        var tag = _uiText(comp, "Stripe", Math.round(w*0.022), 6145, null, dur, [0.5,0.5,0.54]);
        tag.parent = card; tag.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.35, -w*0.045]);
        tag.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
    }
    ctrl.selected = true;
}

// --- iMESSAGE: typing dots then bubbles pop in sequence
function _imessageChat() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 5.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "IMESSAGE CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Incoming BG", [0.16,0.16,0.18]);
    _addColorControl(ctrl, "Outgoing BG", [0.04,0.52,1.0]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    // [text, side(0=in,1=out), widthFactor, appearTime]
    var msgs = [
        ["did you see the new edit??", 0, 0.62, 1.0],
        ["just dropped it", 1, 0.42, 2.0],
        ["bro it's actually insane", 0, 0.6, 3.2]
    ];
    var bh = w*0.115, rowGap = w*0.155;
    var topY = -w*0.24;

    // typing indicator (grey bubble + 3 pulsing dots) before first incoming
    var typ = _uiRRect(comp, "Typing", dur, w*0.2, bh, bh/2, cRef+'.effect("Incoming BG")(1)');
    _uiShadow(typ);
    typ.parent = ctrl;
    typ.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.24, topY]);
    typ.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "var pp=Math.max(0,Math.min(1,(t-0.15)/0.4)); var e=ob(pp); var s=(t>0.95)?Math.max(0,1-(t-0.95)/0.2):1; [e*s*100,e*s*100];";
    var tgrp = typ.property("ADBE Root Vectors Group");
    for (var di=0; di<3; di++) {
        var dg = tgrp.addProperty("ADBE Vector Group");
        var de = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        de.property("ADBE Vector Ellipse Size").setValue([w*0.022, w*0.022]);
        de.property("ADBE Vector Ellipse Position").setValue([(di-1)*w*0.04, 0]);
        var df = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        df.property("ADBE Vector Fill Color").setValue([0.6,0.6,0.64,1]);
        dg.property("ADBE Vector Transform Group").property("ADBE Vector Group Opacity").expression = "40+50*Math.sin(time*7-"+(di*1.1)+");";
    }

    for (var i=0; i<msgs.length; i++) {
        var isOut = msgs[i][1]===1;
        var bw = w*msgs[i][2];
        var d0 = msgs[i][3];
        var cx = isOut ? (w*0.46 - bw/2) : (-w*0.46 + bw/2);
        var yy = topY + (i+1)*rowGap;
        var bub = _uiRRect(comp, "Bubble "+(i+1), dur, bw, bh, bh/2, isOut ? cRef+'.effect("Outgoing BG")(1)' : cRef+'.effect("Incoming BG")(1)');
        _uiShadow(bub);
        bub.parent = ctrl;
        bub.property("ADBE Transform Group").property("ADBE Position").setValue([cx, yy]);
        bub.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
            "var d="+d0+"; var pp=Math.max(0,Math.min(1,(t-d)/0.45)); function el(x){var c=(2*Math.PI)/3;return x<=0?0:x>=1?1:Math.pow(2,-10*x)*Math.sin((x*10-0.75)*c)+1;} var e=el(pp); var x=ib(pOut); var s=Math.max(0,e-x)*100; [s,s];";
        var msg = _uiText(comp, msgs[i][0], Math.round(w*0.03), 6147, null, dur, [1,1,1]);
        msg.parent = bub; msg.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);
        msg.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.08, 100);
    }
    ctrl.selected = true;
}

// --- X / TWEET CARD: realistic post with counting likes
function _tweetCard() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "TWEET CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Card BG", [0.0,0.0,0.0]);
    _addColorControl(ctrl, "Accent", [0.11,0.63,0.95]);
    _addSlider(ctrl, "Likes", 12400);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.88, w*0.5, w*0.04, ctrl, pre, 0);

    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var av = comp.layers.addShape(); av.name="Avatar"; av.inPoint=comp.time; av.outPoint=comp.time+dur;
    var ag = av.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ae = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ae.property("ADBE Vector Ellipse Size").setValue([w*0.1, w*0.1]);
    var af = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    af.property("ADBE Vector Fill Color").expression = cRef+'.effect("Accent")(1)';
    av.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    at(av, -w*0.36, -w*0.16, 0.1);

    var nm = _uiText(comp, "nytvir", Math.round(w*0.034), 6145, null, dur, [1,1,1]);
    _uiFont(nm, "Arial-BoldMT"); at(nm, -w*0.29, -w*0.185, 0.14);
    var vb = _vchk(comp, dur, w*0.032, [0.11,0.63,0.95]); at(vb, -w*0.143, -w*0.178, 0.18);
    var hd = _uiText(comp, "@nytvir_studio", Math.round(w*0.026), 6145, null, dur, [0.5,0.5,0.54]); at(hd, -w*0.29, -w*0.14, 0.18);

    var body = _uiText(comp, "this AI workflow just changed\neverything about how I post", Math.round(w*0.033), 6145, null, dur, [0.92,0.92,0.94]);
    at(body, -w*0.36, w*0.01, 0.22);

    // engagement row
    var stats = [["reply","218"],["repost","1.2K"],["like","LIKES"],["views","89K"]];
    for (var s=0; s<4; s++) {
        var ic = comp.layers.addShape(); ic.name="EngIcon"+s; ic.inPoint=comp.time; ic.outPoint=comp.time+dur;
        var ig = ic.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ie = ig.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ie.property("ADBE Vector Ellipse Size").setValue([w*0.03, w*0.03]);
        var ist = ig.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        ist.property("ADBE Vector Stroke Color").setValue([0.5,0.5,0.54,1]);
        ist.property("ADBE Vector Stroke Width").setValue(2.5);
        ic.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        at(ic, -w*0.355 + s*w*0.225, w*0.16, 0.3+s*0.04);
        var lbl = (s===2) ? _uiText(comp, "12,400", Math.round(w*0.026), 6145, null, dur, [0.6,0.6,0.64]) : _uiText(comp, stats[s][1], Math.round(w*0.026), 6145, null, dur, [0.6,0.6,0.64]);
        if (s===2) {
            lbl.property("ADBE Text Properties").property("ADBE Text Document").expression =
                "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
                "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.4)/1.4); fmt(ctl.effect('Likes')(1)*e);";
        }
        at(lbl, -w*0.315 + s*w*0.225, w*0.16, 0.32+s*0.04);
    }
    ctrl.selected = true;
}

// --- STATS DASHBOARD: 2x2 metric cards with counting numbers
function _statsDashboard() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "STATS CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Card BG", [0.10,0.10,0.13]);
    _addColorControl(ctrl, "Accent", [0.40,0.92,0.55]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    // label, target, prefix, suffix, delta
    var defs = [
        ["FOLLOWERS", 128400, "", "", "+18%"],
        ["REVENUE", 70098, "$", "", "+24%"],
        ["VIEWS", 2400000, "", "", "+62%"],
        ["ENGAGE", 9, "", "%", "+3%"]
    ];
    var cardW = w*0.42, cardH = w*0.27, gx = w*0.225, gy = w*0.16;

    for (var i=0; i<4; i++) {
        var col = i%2, row = Math.floor(i/2);
        var px = (col===0?-1:1)*gx, py = (row===0?-1:1)*gy;
        var d0 = i*0.12;
        var card = _uiRRect(comp, "Stat Card "+(i+1), dur, cardW, cardH, w*0.03, cRef+'.effect("Card BG")(1)');
        _uiShadow(card);
        card.parent = ctrl;
        card.property("ADBE Transform Group").property("ADBE Position").setValue([px, py]);
        card.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, d0);

        var lbl = _uiText(comp, defs[i][0], Math.round(w*0.024), 6145, null, dur, [0.55,0.55,0.6]);
        _uiFont(lbl, "Arial-BoldMT");
        lbl.parent = card; lbl.property("ADBE Transform Group").property("ADBE Position").setValue([-cardW*0.4, -cardH*0.26]);
        lbl.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.1, 100);

        var num = _uiText(comp, defs[i][1]+"", Math.round(w*0.052), 6145, null, dur, [1,1,1]);
        _uiFont(num, "Arial-BoldMT");
        num.property("ADBE Text Properties").property("ADBE Text Document").expression =
            "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
            "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-"+(d0+0.15)+")/1.5); var v="+defs[i][1]+"*e; var pf='"+defs[i][2]+"'; var sf='"+defs[i][3]+"'; var out=(v>=1000000)?(v/1000000).toFixed(1)+'M':(v>=10000)?fmt(Math.round(v)):''+Math.round(v); pf+out+sf;";
        num.parent = card; num.property("ADBE Transform Group").property("ADBE Position").setValue([-cardW*0.4, cardH*0.06]);
        num.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.15, 100);

        var delta = _uiText(comp, defs[i][4], Math.round(w*0.022), 6145, cRef+'.effect("Accent")(1)', dur, [0.40,0.92,0.55]);
        _uiFont(delta, "Arial-BoldMT");
        delta.parent = card; delta.property("ADBE Transform Group").property("ADBE Position").setValue([-cardW*0.4, cardH*0.3]);
        delta.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.25, 100);
    }
    ctrl.selected = true;
}

// --- AI GENERATING: steps check off + progress bar fills
function _aiGenerating() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "AI GENERATING CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Card BG", [0.09,0.09,0.12]);
    _addColorControl(ctrl, "Accent", [0.49,0.36,0.96]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _uiRRect(comp, "AI Card", dur, w*0.84, w*0.56, w*0.045, cRef+'.effect("Card BG")(1)');
    _uiShadow(card);
    card.parent = ctrl;
    card.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    card.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0);

    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var title = _uiText(comp, "Generating content...", Math.round(w*0.04), 6145, null, dur, [1,1,1]);
    _uiFont(title, "Arial-BoldMT"); at(title, -w*0.36, -w*0.2, 0.1);

    var steps = ["Analyzing your style", "Writing the hook", "Building the script", "Rendering captions"];
    for (var i=0; i<steps.length; i++) {
        var ty = -w*0.09 + i*w*0.075;
        var d0 = 0.5 + i*0.6;
        // check circle
        var ck = comp.layers.addShape(); ck.name="Check"+i; ck.inPoint=comp.time; ck.outPoint=comp.time+dur;
        var cg = ck.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ce = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ce.property("ADBE Vector Ellipse Size").setValue([w*0.045, w*0.045]);
        var cf = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        cf.property("ADBE Vector Fill Color").expression = "var on=("+ "(time-inPoint)*thisComp.layer('"+ctrl.name+"').effect('Animation Speed')(1)/100 > "+d0+"); on? thisComp.layer('"+ctrl.name+"').effect('Accent')(1) : [0.2,0.2,0.24,1];";
        ck.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        at(ck, -w*0.34, ty, 0.2);
        ck.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
            "var d="+d0+"; var base=Math.max(0,Math.min(1,(t-0.2)/0.3))*100; if(t>d){ function el(x){var c=(2*Math.PI)/3;return x<=0?0:x>=1?1:Math.pow(2,-10*x)*Math.sin((x*10-0.75)*c)+1;} base=100*(1+0.25*(1-el(Math.min(1,(t-d)/0.4)))); } [base,base];";
        // check mark (two rects)
        var m1 = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        m1.property("ADBE Vector Rect Size").setValue([w*0.006, w*0.014]);
        m1.property("ADBE Vector Rect Position").setValue([-w*0.005, w*0.004]);
        m1.property("ADBE Vector Rect Roundness").setValue(w*0.003);
        var m2 = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        m2.property("ADBE Vector Rect Size").setValue([w*0.006, w*0.022]);
        m2.property("ADBE Vector Rect Position").setValue([w*0.004, -w*0.001]);
        m2.property("ADBE Vector Rect Roundness").setValue(w*0.003);
        var mf = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        mf.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
        mf.property("ADBE Vector Fill Opacity").expression = "((time-inPoint)*thisComp.layer('"+ctrl.name+"').effect('Animation Speed')(1)/100 > "+d0+")?100:0;";
        cg.property("ADBE Vector Transform Group").property("ADBE Vector Rotation").setValue(45);

        var st = _uiText(comp, steps[i], Math.round(w*0.03), 6145, null, dur, [0.82,0.82,0.86]);
        at(st, -w*0.29, ty, 0.25+i*0.05);
    }

    // progress track + fill
    var track = _uiRRect(comp, "AI Track", dur, w*0.72, w*0.018, w*0.009, "[0.2,0.2,0.24,1]");
    at(track, 0, w*0.22, 0.2);
    var fill = _uiRRect(comp, "AI Fill", dur, w*0.72, w*0.018, w*0.009, cRef+'.effect("Accent")(1)');
    fill.parent = card;
    fill.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-w*0.36, 0]);
    fill.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.36, w*0.22]);
    fill.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "var e=eo3(Math.max(0,Math.min(1,(t-0.4)/3.2))); [e*100, 100];";
    fill.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.2, 100);
    ctrl.selected = true;
}

// ----------------------------------------------------
// CRYPTO / APPLE KIT v2.9 — minimalist trader overlays
// (clean Arial, generous spacing, soft motion)
// ----------------------------------------------------
// Bold = SF Pro Display Bold (Apple's real font, verified installed); regular = Segoe UI.
// AE substitutes Times for unknown names, so only verified PostScript names are used.
function _clean(tl, bold) {
    if (bold) { _uiFont(tl, "SegoeUI-Semibold"); _uiFont(tl, "SFProDisplay-Bold"); }
    else { _uiFont(tl, "SegoeUI"); }
    return tl;
}

// Reliable centering: measure the ACTUAL rendered box (script-side) and pin a static
// anchor at its true centre. Call AFTER the text + font are final. align: -1 left, 0 centre, 1 right.
function _alignNow(tl, comp, align) {
    try {
        var r = tl.sourceRectAtTime(comp.time + comp.frameDuration*2, false);
        var ax = (align === 0) ? r.left + r.width/2 : (align === 1) ? r.left + r.width : r.left;
        var ap = tl.property("ADBE Transform Group").property("ADBE Anchor Point");
        ap.expression = "";
        ap.setValue([ax, r.top + r.height/2]);
    } catch(e){}
    return tl;
}

// smooth Apple-style entrance (no bounce/skew): fade + 94->100 scale
function _glassFade(pre, d0, mul) {
    return pre + "var d="+d0+"; var a=Math.max(0,Math.min(1,(t-d)/0.4)); var o=1-Math.min(1,pOut*1.6); a*o*"+(mul||100)+";";
}
function _glassIn(pre, d0) {
    return pre + "var d="+d0+"; var p=Math.max(0,Math.min(1,(t-d)/0.55)); var e=1-Math.pow(1-p,3); var x=ib(pOut); var s=(94+6*e)-6*x; [s,s];";
}
// PREMIUM FROSTED GLASS CARD: real gaussian blur behind + gradient tint + light sweep + border.
// returns the tint layer (parent content to it). All pieces ride the same entrance & the ctrl.
function _glassCard(comp, dur, cw, ch, round, ctrl, pre, d0, opts) {
    var w = comp.width, H = comp.height;
    opts = opts || {};
    var g1 = opts.grad ? opts.grad[0] : [0.17,0.18,0.22];
    var g2 = opts.grad ? opts.grad[1] : [0.07,0.07,0.10];
    var glowCol = opts.glow || [0.55,0.6,0.9];
    var glowInt = (opts.glowInt != null) ? opts.glowInt : 0.4;
    // entrance scale: default smooth 94->100, or "morph" = grows from a thin glowing line
    var inS = opts.morph
        ? (pre + "var d="+d0+"; var p=Math.max(0,Math.min(1,(t-d)/0.7)); var e=(p<0.5?16*p*p*p*p*p:1-Math.pow(-2*p+2,5)/2); var x=ib(pOut); [100*(1-0.03*x), (7+93*e)*(1-x)];")
        : _glassIn(pre, d0);
    // 1) frosted blur — adjustment layer, clipped to the card via an alpha matte
    var blur = comp.layers.addSolid([0,0,0], "Glass Frost", w, H, 1, comp.duration);
    blur.adjustmentLayer = true; blur.inPoint = comp.time; blur.outPoint = comp.time + dur;
    try { var gb = blur.Effects.addProperty("ADBE Gaussian Blur 2"); gb.property(1).setValue(48); gb.property(3).setValue(1); } catch(e){}
    blur.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, d0, 100);
    var matte = _uiRRect(comp, "Glass Matte", dur, cw, ch, round, "[1,1,1,1]");
    matte.parent = ctrl; matte.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    matte.property("ADBE Transform Group").property("ADBE Scale").expression = inS;
    try { blur.setTrackMatte(matte, TrackMatteType.ALPHA); } catch(e){ try { blur.trackMatteType = TrackMatteType.ALPHA; } catch(e2){} }
    // 2) gradient tint (subtle top-light), semi-transparent so the frost shows through
    var tint = _uiRRect(comp, "Glass Tint", dur, cw, ch, round, "[1,1,1,1]");
    try {
        var ramp = tint.Effects.addProperty("ADBE Ramp");
        ramp.property("ADBE Ramp-0001").setValue([w/2, H/2 - ch/2]);
        ramp.property("ADBE Ramp-0002").setValue([g1[0],g1[1],g1[2],1]);
        ramp.property("ADBE Ramp-0003").setValue([w/2, H/2 + ch/2]);
        ramp.property("ADBE Ramp-0004").setValue([g2[0],g2[1],g2[2],1]);
        ramp.property("ADBE Ramp-0005").setValue(1);
    } catch(e){}
    _uiShadow(tint);
    tint.parent = ctrl; tint.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    tint.property("ADBE Transform Group").property("ADBE Scale").expression = inS;
    tint.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, d0, 66);
    // 3) light sweep — a soft diagonal gloss that crosses once, clipped to the card
    var sweep = _uiRRect(comp, "Glass Sweep", dur, ch*0.5, ch*2.2, ch*0.25, "[1,1,1,1]");
    try { var sb = sweep.Effects.addProperty("ADBE Gaussian Blur 2"); sb.property(1).setValue(ch*0.18); } catch(e){}
    sweep.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    sweep.parent = ctrl;
    sweep.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(22);
    sweep.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var d="+(d0+0.2)+"; var p=Math.max(0,Math.min(1,(t-d)/0.7)); var e=1-Math.pow(1-p,2); ["+(-cw*0.62)+" + "+(cw*1.24)+"*e, 0];";
    sweep.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var d="+(d0+0.2)+"; var p=Math.max(0,Math.min(1,(t-d)/0.7)); Math.sin(Math.max(0,Math.min(1,p))*Math.PI)*22;";
    var sweepMatte = _uiRRect(comp, "Sweep Matte", dur, cw, ch, round, "[1,1,1,1]");
    sweepMatte.parent = ctrl; sweepMatte.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    sweepMatte.property("ADBE Transform Group").property("ADBE Scale").expression = inS;
    try { sweep.setTrackMatte(sweepMatte, TrackMatteType.ALPHA); } catch(e){ try { sweep.trackMatteType = TrackMatteType.ALPHA; } catch(e2){} }
    // 4) hairline border (glass edge)
    var border = comp.layers.addShape(); border.name="Glass Border"; border.inPoint=comp.time; border.outPoint=comp.time+dur;
    var bg = border.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var br = bg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    br.property("ADBE Vector Rect Size").setValue([cw, ch]); br.property("ADBE Vector Rect Roundness").setValue(round);
    var bs = bg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    bs.property("ADBE Vector Stroke Color").setValue([1,1,1,1]); bs.property("ADBE Vector Stroke Width").setValue(2);
    border.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    border.parent = ctrl; border.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    border.property("ADBE Transform Group").property("ADBE Scale").expression = inS;
    border.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, d0, 14);
    // 5) neon rim glow — a colored stroke ring with a big soft glow (the "distinctive" edge)
    var neon = comp.layers.addShape(); neon.name="Glass Neon"; neon.inPoint=comp.time; neon.outPoint=comp.time+dur;
    var ng = neon.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var nr = ng.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    nr.property("ADBE Vector Rect Size").setValue([cw, ch]); nr.property("ADBE Vector Rect Roundness").setValue(round);
    var ns = ng.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    ns.property("ADBE Vector Stroke Color").setValue([glowCol[0],glowCol[1],glowCol[2],1]);
    ns.property("ADBE Vector Stroke Width").setValue(Math.max(2.5, w*0.005));
    _uiGlowFx(neon, w*0.045, glowInt);
    neon.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    neon.parent = ctrl; neon.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    neon.property("ADBE Transform Group").property("ADBE Scale").expression = inS;
    neon.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, d0, 85);
    // 6) optional light beam shooting up from the card top
    if (opts.beam) {
        var bcol = opts.beamCol || glowCol;
        // user-adjustable: a "Beam" slider (0 = off) on the controller
        try { _addSlider(ctrl, "Beam", 45); } catch(e){}
        var beam = comp.layers.addShape(); beam.name="Light Beam"; beam.inPoint=comp.time; beam.outPoint=comp.time+dur;
        var beamG = beam.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var beamR = beamG.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        var bh = Math.min(ch*0.42, (H/2 - ch/2)*1.6);
        beamR.property("ADBE Vector Rect Size").setValue([w*0.012, bh]);   // thinner = softer/glowier
        beamR.property("ADBE Vector Rect Roundness").setValue(w*0.006);
        var beamF = beamG.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        beamF.property("ADBE Vector Fill Color").setValue([bcol[0],bcol[1],bcol[2],1]);
        try { var bramp = beam.Effects.addProperty("ADBE Ramp");
            bramp.property("ADBE Ramp-0001").setValue([w/2, H/2 - ch/2]);
            bramp.property("ADBE Ramp-0002").setValue([bcol[0],bcol[1],bcol[2],1]);
            bramp.property("ADBE Ramp-0003").setValue([w/2, H/2 - ch/2 - bh]);
            bramp.property("ADBE Ramp-0004").setValue([0,0,0,1]);
            bramp.property("ADBE Ramp-0005").setValue(1);
        } catch(e){}
        _uiGlowFx(beam, w*0.075, 1.0);   // bigger glow, less solid line
        try { beam.blendingMode = BlendingMode.ADD; } catch(e){}
        // anchor at the BOTTOM of the beam so it rises from the card's top edge
        beam.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, bh/2]);
        beam.parent = ctrl; beam.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.5]);
        beam.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var amt=ctl.effect('Beam')(1)/100; var p=Math.max(0,Math.min(1,(t-"+(d0+0.05)+")/0.5)); var fl=1-Math.min(1,pOut*1.6); var br=0.85+0.15*Math.sin(time*5); p*fl*br*amt*100;";
        beam.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+(d0+0.05)+")/0.6)); var e=1-Math.pow(1-p,3); [100, e*100];";
    }
    return tint;
}

// small green/red change pill: rounded rect + arrow + text
function _pill(comp, dur, parent, px, py, str, up, pre, d0, accUp, accDn) {
    var w = comp.width;
    var col = up ? accUp : accDn;
    var pillW = w*0.115, pillH = w*0.05;
    var p = _uiRRect(comp, "Pill", dur, pillW, pillH, pillH/2, col);
    p.parent = parent; p.property("ADBE Transform Group").property("ADBE Position").setValue([px, py]);
    // shape-fill alpha is ignored, so tint via a low LAYER opacity
    p.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 18);
    var t = _uiText(comp, str, Math.round(w*0.026), 6147, null, dur, up?[0.2,0.8,0.4]:[1,0.3,0.26]);
    _clean(t, true);
    t.parent = parent; t.property("ADBE Transform Group").property("ADBE Position").setValue([px, py]);
    t.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
}

// --- CRYPTO TICKER: Apple Stocks-style price card
function _cryptoTicker() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "TICKER CONTROLLER", dur, [w/2, h*0.4]);
    _addColorControl(ctrl, "Card BG", [0.13,0.13,0.15]);
    _addColorControl(ctrl, "Coin Color", [0.97,0.58,0.12]);
    _addColorControl(ctrl, "Up Color", [0.2,0.8,0.4]);
    _addSlider(ctrl, "Price", 67432);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.84, w*0.26, w*0.05, ctrl, pre, 0);

    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var coin = comp.layers.addShape(); coin.name="Coin"; coin.inPoint=comp.time; coin.outPoint=comp.time+dur;
    var cg = coin.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ce = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ce.property("ADBE Vector Ellipse Size").setValue([w*0.1, w*0.1]);
    var cf = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    cf.property("ADBE Vector Fill Color").expression = cRef+'.effect("Coin Color")(1)';
    coin.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    at(coin, -w*0.32, -w*0.04, 0.08);
    var bsym = _uiText(comp, "B", Math.round(w*0.055), 6147, null, dur, [1,1,1]); _clean(bsym,true);
    at(bsym, -w*0.32, -w*0.04, 0.1);

    var nm = _uiText(comp, "Bitcoin", Math.round(w*0.026), 6145, null, dur, [0.55,0.55,0.6]); _clean(nm);
    at(nm, -w*0.24, -w*0.062, 0.12);
    var tk = _uiText(comp, "BTC", Math.round(w*0.04), 6145, null, dur, [0.96,0.96,0.98]); _clean(tk,true);
    at(tk, -w*0.24, -w*0.022, 0.14);

    var price = _uiText(comp, "$67,432", Math.round(w*0.05), 6149, null, dur, [0.96,0.96,0.98]); _clean(price,true);
    price.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.2)/1.3); '$'+fmt(ctl.effect('Price')(1)*e);";
    at(price, w*0.36, -w*0.045, 0.18);

    _pill(comp, dur, card, w*0.30, w*0.04, "+2.4%", true, pre, 0.28, cRef+'.effect("Up Color")(1)', "[1,0.3,0.26]");

    // sparkline (bottom-left, clear of the pill)
    var spk = comp.layers.addShape(); spk.name="Sparkline"; spk.inPoint=comp.time; spk.outPoint=comp.time+dur; spk.motionBlur=true;
    var sg = spk.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var sp = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var sh = new Shape();
    sh.vertices = [[0,0],[w*0.03,-w*0.008],[w*0.06,w*0.004],[w*0.09,-w*0.016],[w*0.12,-w*0.012],[w*0.15,-w*0.034]];
    sh.closed = false; sp.property("ADBE Vector Shape").setValue(sh);
    var sst = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    sst.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Up Color")(1)';
    sst.property("ADBE Vector Stroke Width").setValue(Math.max(3,w*0.006));
    sst.property("ADBE Vector Stroke Line Cap").setValue(2); sst.property("ADBE Vector Stroke Line Join").setValue(2);
    var strm = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    strm.property("ADBE Vector Trim End").expression = pre + "100*eo3(Math.max(0,Math.min(1,(t-0.3)/1.0)));";
    spk.parent = card; spk.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.3, w*0.07]);
    spk.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.3, 100);
    ctrl.selected = true;
}

// --- TRADE PROFIT: clean P&L close card
function _tradeProfit() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "TRADE PROFIT CONTROLLER", dur, [w/2, h*0.42]);
    _addColorControl(ctrl, "Card BG", [0.13,0.13,0.15]);
    _addColorControl(ctrl, "Up Color", [0.2,0.8,0.4]);
    _addSlider(ctrl, "Profit", 12450);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.8, w*0.42, w*0.055, ctrl, pre, 0);
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var lab = _uiText(comp, "POSITION CLOSED", Math.round(w*0.026), 6145, null, dur, [0.5,0.5,0.55]); _clean(lab,true);
    at(lab, -w*0.32, -w*0.13, 0.1);
    var prof = _uiText(comp, "+$12,450", Math.round(w*0.082), 6145, null, dur, [0.2,0.8,0.4]); _clean(prof,true);
    prof.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.2)/1.4); '+$'+fmt(ctl.effect('Profit')(1)*e);";
    at(prof, -w*0.32, -w*0.035, 0.15);
    _pill(comp, dur, card, -w*0.262, w*0.075, "+34.2%", true, pre, 0.3, cRef+'.effect("Up Color")(1)', "[1,0.3,0.26]");
    var sub = _uiText(comp, "BTC/USD  -  10x Long", Math.round(w*0.028), 6145, null, dur, [0.5,0.5,0.55]); _clean(sub);
    at(sub, -w*0.32, w*0.14, 0.34);
    ctrl.selected = true;
}

// --- PORTFOLIO BALANCE: total + allocation bar
function _portfolioBalance() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "PORTFOLIO CONTROLLER", dur, [w/2, h*0.42]);
    _addColorControl(ctrl, "Card BG", [0.13,0.13,0.15]);
    _addSlider(ctrl, "Balance", 184920);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.86, w*0.44, w*0.055, ctrl, pre, 0);
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var lab = _uiText(comp, "TOTAL BALANCE", Math.round(w*0.026), 6145, null, dur, [0.5,0.5,0.55]); _clean(lab,true);
    at(lab, -w*0.37, -w*0.15, 0.1);
    var bal = _uiText(comp, "$184,920", Math.round(w*0.075), 6145, null, dur, [0.96,0.96,0.98]); _clean(bal,true);
    bal.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.2)/1.4); '$'+fmt(ctl.effect('Balance')(1)*e);";
    at(bal, -w*0.37, -w*0.075, 0.15);

    // allocation bar (3 segments grow in from left)
    var BW = w*0.74, BH = w*0.045, bx = -w*0.37;
    var segs = [[0.52,[0.97,0.58,0.12]],[0.31,[0.36,0.45,0.96]],[0.17,[0.55,0.36,0.96]]];
    var cum = 0;
    for (var i=0;i<segs.length;i++){
        var sw = BW*segs[i][0];
        var seg = _uiRRect(comp, "Alloc "+(i+1), dur, sw, BH, BH/2, "["+segs[i][1][0]+","+segs[i][1][1]+","+segs[i][1][2]+",1]");
        seg.parent = card;
        seg.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-sw/2,0]);
        seg.property("ADBE Transform Group").property("ADBE Position").setValue([bx+cum, w*0.03]);
        seg.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var d="+(0.3+i*0.12)+"; var e=eo3(Math.max(0,Math.min(1,(t-d)/0.5))); [e*100,100];";
        cum += sw + w*0.004;
    }
    var leg = _uiText(comp, "BTC 52%      ETH 31%      SOL 17%", Math.round(w*0.026), 6145, null, dur, [0.6,0.6,0.65]); _clean(leg);
    at(leg, -w*0.37, w*0.12, 0.55);
    ctrl.selected = true;
}

// --- CANDLE CHART: candlesticks build left-to-right, uptrend
function _candleChart() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "CANDLE CHART CONTROLLER", dur, [w/2, h*0.45]);
    _addColorControl(ctrl, "Up Color", [0.2,0.8,0.4]);
    _addColorControl(ctrl, "Down Color", [1,0.3,0.26]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    // [centerY(from baseline, up=neg), bodyH, wickH, up?]
    var n = 11, cw = w*0.78, step = cw/(n-1), x0 = -cw/2;
    var data = [[-0.02,0.05,0.09,1],[-0.05,0.06,0.10,1],[-0.03,0.05,0.08,0],[-0.09,0.07,0.11,1],[-0.13,0.06,0.10,1],[-0.10,0.05,0.09,0],[-0.17,0.07,0.12,1],[-0.22,0.08,0.13,1],[-0.19,0.05,0.09,0],[-0.27,0.07,0.12,1],[-0.33,0.09,0.14,1]];
    for (var i=0;i<n;i++){
        var cy = data[i][0]*w, bodyH = data[i][1]*w, wickH = data[i][2]*w, up = data[i][3]===1;
        var cd = comp.layers.addShape(); cd.name="Candle"+i; cd.inPoint=comp.time; cd.outPoint=comp.time+dur;
        var g = cd.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var wick = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        wick.property("ADBE Vector Rect Size").setValue([Math.max(2,w*0.006), wickH]);
        var body = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        body.property("ADBE Vector Rect Size").setValue([w*0.04, bodyH]);
        body.property("ADBE Vector Rect Roundness").setValue(w*0.006);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").expression = (up?cRef+'.effect("Up Color")(1)':cRef+'.effect("Down Color")(1)');
        cd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        cd.parent = ctrl;
        cd.property("ADBE Transform Group").property("ADBE Position").setValue([x0+i*step, cy]);
        var d0 = 0.15 + i*0.11;
        cd.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
            "var d="+d0+"; var e=eo3(Math.max(0,Math.min(1,(t-d)/0.32))); var x=ib(pOut); [100, Math.max(0,e-x)*100];";
        cd.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
    }
    // price label top
    var pl = _uiText(comp, "$67,432", Math.round(w*0.05), 6149, null, dur, [0.96,0.96,0.98]); _clean(pl,true);
    pl.parent = ctrl; pl.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.37, -w*0.42]);
    pl.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.2)/1.5); '$'+fmt(67432*e);";
    pl.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.1, 100);
    var up2 = _uiText(comp, "+18.4%", Math.round(w*0.03), 6149, null, dur, [0.2,0.8,0.4]); _clean(up2,true);
    up2.parent = ctrl; up2.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.37, -w*0.37]);
    up2.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.5, 100);
    ctrl.selected = true;
}

// --- WATCHLIST: Apple Stocks-style coin list
function _cryptoWatchlist() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "WATCHLIST CONTROLLER", dur, [w/2, h*0.42]);
    _addColorControl(ctrl, "Card BG", [0.13,0.13,0.15]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    // ticker, name, price, change, up
    var rows = [["BTC","Bitcoin","$67,432","+2.4%",1],["ETH","Ethereum","$3,512","+4.1%",1],["SOL","Solana","$182.40","-1.2%",0]];
    var rowH = w*0.16;
    var card = _glassCard(comp, dur, w*0.88, rowH*rows.length + w*0.06, w*0.05, ctrl, pre, 0);
    function at(L, px, py, d0, slideX) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); if(slideX){ L.property("ADBE Transform Group").property("ADBE Position").expression = pre + "var d="+d0+"; var e=eo3(Math.max(0,Math.min(1,(t-d)/0.5))); value + ["+slideX+"*(1-e), 0];"; } }

    var topY = -((rows.length-1)/2)*rowH;
    for (var i=0;i<rows.length;i++){
        var ry = topY + i*rowH;
        var d0 = 0.12 + i*0.12;
        var up = rows[i][4]===1;
        var tkr = _uiText(comp, rows[i][0], Math.round(w*0.04), 6145, null, dur, [0.96,0.96,0.98]); _clean(tkr,true);
        at(tkr, -w*0.37, ry-w*0.018, d0, w*0.06);
        var nm = _uiText(comp, rows[i][1], Math.round(w*0.025), 6145, null, dur, [0.5,0.5,0.55]); _clean(nm);
        at(nm, -w*0.37, ry+w*0.022, d0, w*0.06);
        var pr = _uiText(comp, rows[i][2], Math.round(w*0.036), 6149, null, dur, [0.96,0.96,0.98]); _clean(pr,true);
        at(pr, w*0.37, ry-w*0.018, d0+0.05, -w*0.04);
        var ch = _uiText(comp, rows[i][3], Math.round(w*0.028), 6149, null, dur, up?[0.2,0.8,0.4]:[1,0.3,0.26]); _clean(ch,true);
        at(ch, w*0.37, ry+w*0.022, d0+0.05, -w*0.04);
        if (i<rows.length-1){
            var sep = _uiRRect(comp, "Sep"+i, dur, w*0.78, 1.5, 0, "[1,1,1,0.08]");
            sep.parent = card; sep.property("ADBE Transform Group").property("ADBE Position").setValue([0, ry+rowH/2]);
            sep.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        }
    }
    ctrl.selected = true;
}

// --- ORDER FILLED: green check confirmation
function _orderFilled() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 3.5;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "ORDER FILLED CONTROLLER", dur, [w/2, h*0.42]);
    _addColorControl(ctrl, "Card BG", [0.13,0.13,0.15]);
    _addColorControl(ctrl, "Up Color", [0.2,0.8,0.4]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    var card = _glassCard(comp, dur, w*0.84, w*0.2, w*0.05, ctrl, pre, 0);
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var ring = comp.layers.addShape(); ring.name="CheckRing"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur;
    // group 1 added first = renders ON TOP: white checkmark as a stroked V path
    var ckg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var cpath = ckg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var cs = new Shape();
    cs.vertices = [[-w*0.022, 0],[-w*0.006, w*0.018],[w*0.026, -w*0.022]];
    cs.closed = false;
    cpath.property("ADBE Vector Shape").setValue(cs);
    var cstr = ckg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    cstr.property("ADBE Vector Stroke Color").setValue([1,1,1,1]);
    cstr.property("ADBE Vector Stroke Width").setValue(w*0.012);
    cstr.property("ADBE Vector Stroke Line Cap").setValue(2);
    cstr.property("ADBE Vector Stroke Line Join").setValue(2);
    // group 2 added second = renders BELOW: green disc
    var rg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var re = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    re.property("ADBE Vector Ellipse Size").setValue([w*0.13, w*0.13]);
    var rf = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    rf.property("ADBE Vector Fill Color").expression = cRef+'.effect("Up Color")(1)';
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ring.parent = card; ring.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.3, 0]);
    ring.property("ADBE Transform Group").property("ADBE Scale").expression = pre +
        "function el(x){var c=(2*Math.PI)/3;return x<=0?0:x>=1?1:Math.pow(2,-10*x)*Math.sin((x*10-0.75)*c)+1;} var e=el(Math.max(0,Math.min(1,(t-0.15)/0.6))); [e*100,e*100];";

    var t1 = _uiText(comp, "Order Filled", Math.round(w*0.042), 6145, null, dur, [0.96,0.96,0.98]); _clean(t1,true);
    at(t1, -w*0.2, -w*0.025, 0.3);
    var t2 = _uiText(comp, "Bought 0.5 BTC at $67,400", Math.round(w*0.026), 6145, null, dur, [0.55,0.55,0.6]); _clean(t2);
    at(t2, -w*0.2, w*0.028, 0.4);
    ctrl.selected = true;
}

// --- GLOW RING: neon progress ring with a glowing comet tip, number counts in centre
function _glowRing(preset) {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var P = {
        blue:   {ring:[0.20,0.62,1.0], tip:[0.6,0.85,1.0]},
        purple: {ring:[0.62,0.36,1.0], tip:[0.82,0.66,1.0]},
        green:  {ring:[0.20,0.95,0.58], tip:[0.6,1.0,0.75]}
    };
    var c = P[preset] || P.blue;
    var pname = (preset||"blue").charAt(0).toUpperCase()+(preset||"blue").slice(1);
    var ctrl = _uiCtl(comp, "GLOW RING ("+pname+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Ring Color", c.ring);
    _addSlider(ctrl, "Percent", 87);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var R = w*0.2, sw = Math.max(7, w*0.022);
    var ENT = pre + "var ent=Math.max(0,Math.min(1,(t-0.1)/0.5)); var es=1-Math.pow(1-ent,3); ";

    // soft dark disc backdrop for contrast
    var disc = comp.layers.addShape(); disc.name="Ring Disc"; disc.inPoint=comp.time; disc.outPoint=comp.time+dur;
    var dg = disc.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var de = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    de.property("ADBE Vector Ellipse Size").setValue([R*2.5, R*2.5]);
    var df = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    df.property("ADBE Vector Fill Color").setValue([0.06,0.06,0.08,1]);
    disc.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    disc.parent = ctrl; disc.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    disc.property("ADBE Transform Group").property("ADBE Opacity").expression = ENT + "es*55;";
    disc.property("ADBE Transform Group").property("ADBE Scale").expression = ENT + "var s=88+12*es; [s,s];";

    // track ring (dim)
    var track = comp.layers.addShape(); track.name="Ring Track"; track.inPoint=comp.time; track.outPoint=comp.time+dur;
    var tg = track.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var te = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    te.property("ADBE Vector Ellipse Size").setValue([R*2, R*2]);
    var ts = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    ts.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Ring Color")(1)';
    ts.property("ADBE Vector Stroke Width").setValue(sw);
    track.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    track.parent = ctrl; track.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    track.property("ADBE Transform Group").property("ADBE Opacity").expression = ENT + "es*14;";

    // progress ring (neon, fills, glow), starts at top, clockwise
    var ring = comp.layers.addShape(); ring.name="Ring Progress"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur; ring.motionBlur=true;
    var rg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var re = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    re.property("ADBE Vector Ellipse Size").setValue([R*2, R*2]);
    var rs = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    rs.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Ring Color")(1)';
    rs.property("ADBE Vector Stroke Width").setValue(sw);
    rs.property("ADBE Vector Stroke Line Cap").setValue(2);
    var trim = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    var fillExpr = pre + "var pc=ctl.effect('Percent')(1)/100; var e=eo3(Math.max(0,Math.min(1,(t-0.35)/1.6))); var frac=pc*e; ";
    trim.property("ADBE Vector Trim End").expression = fillExpr + "100*frac;";
    _uiGlowFx(ring, w*0.035, 0.9);
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ring.parent = ctrl; ring.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    ring.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-90);
    // no scaleY flip: trim fills clockwise from the top so the comet tip can track it 1:1

    // glowing comet tip — a dot offset at the top, rotated to ride the ring's leading edge
    var tip = comp.layers.addShape(); tip.name="Ring Tip"; tip.inPoint=comp.time; tip.outPoint=comp.time+dur; tip.motionBlur=true;
    var pg = tip.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pe = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    pe.property("ADBE Vector Ellipse Size").setValue([sw*1.5, sw*1.5]);
    pe.property("ADBE Vector Ellipse Position").setValue([0, -R]);
    var pf = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    pf.property("ADBE Vector Fill Color").setValue([c.tip[0],c.tip[1],c.tip[2],1]);
    _uiGlowFx(tip, w*0.045, 1.0);
    tip.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tip.parent = ctrl;
    tip.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    tip.property("ADBE Transform Group").property("ADBE Rotate Z").expression = fillExpr + "360*frac;";
    tip.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "var pc=ctl.effect('Percent')(1)/100; (pc>0.001 && t>0.35)?100:0;";

    // centre number (counts to percent)
    var num = _uiText(comp, "87%", Math.round(w*0.085), 6145, null, dur, [1,1,1]); _clean(num,true);
    num.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.35)/1.6); Math.round(ctl.effect('Percent')(1)*e)+'%';";
    num.parent = ctrl;
    num.property("ADBE Transform Group").property("ADBE Anchor Point").expression = "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
    num.property("ADBE Transform Group").property("ADBE Position").setValue([0, -w*0.005]);
    num.property("ADBE Transform Group").property("ADBE Scale").expression = ENT + "[es*100, es*100];";

    var lbl = _uiText(comp, "of 2026 goal", Math.round(w*0.026), 6145, null, dur, [0.7,0.74,0.82]); _clean(lbl);
    var lw = "of 2026 goal".length * w*0.026 * 0.54;
    lbl.parent = ctrl; lbl.property("ADBE Transform Group").property("ADBE Position").setValue([-lw/2, w*0.055]);
    lbl.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.5, 100);

    ctrl.selected = true;
}

// --- GLOW STAT: personal-brand milestone card, glass + neon + beam, morph entrance
function _glowStat(preset) {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var P = {
        blue:   {grad:[[0.10,0.34,0.82],[0.03,0.10,0.42]], glow:[0.10,0.50,1.00], beam:[0.40,0.66,1.00], up:[0.45,0.85,1.0]},
        purple: {grad:[[0.34,0.18,0.78],[0.10,0.04,0.34]], glow:[0.58,0.32,1.00], beam:[0.66,0.46,1.00], up:[0.8,0.6,1.0]},
        green:  {grad:[[0.08,0.55,0.40],[0.02,0.18,0.13]], glow:[0.20,0.95,0.58], beam:[0.45,1.00,0.65], up:[0.6,1.0,0.7]}
    };
    var c = P[preset] || P.blue;
    var pname = (preset||"blue").charAt(0).toUpperCase()+(preset||"blue").slice(1);
    var ctrl = _uiCtl(comp, "GLOW STAT ("+pname+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Theme", c.glow);
    _addSlider(ctrl, "Number", 127400);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.74, ch = w*0.46, rnd = w*0.05;
    var card = _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:c.grad, glow:c.glow, glowInt:0.8, beam:true, beamCol:c.beam, morph:true});
    // content is parented to the CONTROLLER (not the morphing card) so it never inherits the card's scaleY stretch
    function riseC(L, str, fs, cx, py, d0, dist) { var wd=str.length*fs*0.54; L.parent=ctrl; L.property("ADBE Transform Group").property("ADBE Position").setValue([cx-wd/2, py]); L.property("ADBE Transform Group").property("ADBE Position").expression = pre+"var d="+d0+"; var p=Math.max(0,Math.min(1,(t-d)/0.6)); var e=(p<0.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2); value + [0, "+dist+"*(1-e)]; "; L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    var label = _uiText(comp, "FOLLOWERS", Math.round(w*0.03), 6145, null, dur, [0.7,0.82,1.0]); _clean(label,true);
    riseC(label, "FOLLOWERS", w*0.03, 0, -ch*0.3, 0.55, w*0.025);

    var num = _uiText(comp, "127,400", Math.round(w*0.092), 6145, null, dur, [1,1,1]); _clean(num,true);
    num.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var e=eo3((tt-0.6)/1.5); fmt(ctl.effect('Number')(1)*e);";
    riseC(num, "127,400", w*0.092, 0, -ch*0.02, 0.62, w*0.03);

    var sub = _uiText(comp, "+18% this month", Math.round(w*0.03), 6145, null, dur, c.up); _clean(sub,true);
    riseC(sub, "+18% this month", w*0.03, 0, ch*0.26, 0.72, w*0.025);

    ctrl.selected = true;
}

// --- GLOW PROFILE: glass ID card with neon glow + light beam (Abu Fahim style)
function _glowProfile(preset) {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.5;
    var w = comp.width, h = comp.height;
    var P = {
        blue:   {grad:[[0.10,0.34,0.82],[0.03,0.10,0.42]], glow:[0.10,0.50,1.00], beam:[0.40,0.66,1.00], badge:[0.10,0.50,1.00]},
        purple: {grad:[[0.34,0.18,0.78],[0.10,0.04,0.34]], glow:[0.58,0.32,1.00], beam:[0.66,0.46,1.00], badge:[0.58,0.36,1.00]},
        green:  {grad:[[0.08,0.55,0.40],[0.02,0.18,0.13]], glow:[0.20,0.95,0.58], beam:[0.45,1.00,0.65], badge:[0.12,0.80,0.50]}
    };
    var c = P[preset] || P.blue;
    var pname = (preset||"blue").charAt(0).toUpperCase()+(preset||"blue").slice(1);
    var ctrl = _uiCtl(comp, "GLOW PROFILE ("+pname+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Theme", c.glow);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.62, ch = w*0.98, rnd = w*0.05;
    var card = _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:c.grad, glow:c.glow, glowInt:0.8, beam:true, beamCol:c.beam});
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    // photo placeholder (drop a portrait here + alpha matte) — upper area
    var photo = _uiRRect(comp, "Profile Photo (drop here)", dur, cw*0.86, ch*0.42, w*0.035, "[0.82,0.84,0.9,1]");
    photo.parent = card; photo.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.23]);
    photo.property("ADBE Transform Group").property("ADBE Scale").expression = _glassIn(pre, 0.1);
    photo.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.12, 100);
    var phLbl = _uiText(comp, "PHOTO", Math.round(w*0.03), 6147, null, dur, [0.5,0.52,0.58]); _clean(phLbl,true);
    at(phLbl, 0, -ch*0.23, 0.14);

    // name + verified
    var nm = _uiText(comp, "Abu Fahim", Math.round(w*0.046), 6145, null, dur, [1,1,1]); _clean(nm,true);
    at(nm, -cw*0.42, ch*0.04, 0.2);
    var vb = _vchk(comp, dur, w*0.034, c.badge);
    at(vb, -cw*0.42 + w*0.305, ch*0.045, 0.26);

    // subtitle — two tight left-aligned lines (avoid the multiline leading gap)
    var sub1 = _uiText(comp, "UX/UI & Product Designer", Math.round(w*0.025), 6145, null, dur, [0.82,0.88,1.0]); _clean(sub1);
    at(sub1, -cw*0.42, ch*0.115, 0.26);
    var sub2 = _uiText(comp, "Helping brands grow", Math.round(w*0.025), 6145, null, dur, [0.82,0.88,1.0]); _clean(sub2);
    at(sub2, -cw*0.42, ch*0.165, 0.28);

    // stats row: follower icon + count, posts icon + count
    function statIcon(px, py, d0) {
        var s = _personGlyph(comp, dur, w*0.04, [1,1,1]);
        at(s, px, py, d0);
        return s;
    }
    var rowY = ch*0.30;
    statIcon(-cw*0.4, rowY, 0.34);
    var st1 = _uiText(comp, "45K", Math.round(w*0.029), 6145, null, dur, [1,1,1]); _clean(st1,true);
    at(st1, -cw*0.33, rowY-w*0.002, 0.36);
    statIcon(-cw*0.16, rowY, 0.38);
    var st2 = _uiText(comp, "573", Math.round(w*0.029), 6145, null, dur, [1,1,1]); _clean(st2,true);
    at(st2, -cw*0.09, rowY-w*0.002, 0.4);

    // follow button (white pill + dark text), right side of the row
    var btn = _uiRRect(comp, "Follow Button", dur, cw*0.36, w*0.07, w*0.035, "[1,1,1,1]");
    btn.parent = card; btn.property("ADBE Transform Group").property("ADBE Position").setValue([cw*0.26, rowY]);
    btn.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.42);
    btn.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.42, 100);
    var btxt = _uiText(comp, "Follow +", Math.round(w*0.028), 6145, null, dur, [0.05,0.08,0.2]); _clean(btxt,true);
    btxt.parent = card; btxt.property("ADBE Transform Group").property("ADBE Position").setValue([cw*0.26 - w*0.066, rowY]);
    btxt.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.48, 100);

    ctrl.selected = true;
}

// shared glow palette for the v3.2 personal-brand cards
var GLOW_P = {
    blue:   {grad:[[0.10,0.34,0.82],[0.03,0.10,0.42]], glow:[0.10,0.50,1.00], line:[0.34,0.72,1.00]},
    purple: {grad:[[0.34,0.18,0.78],[0.10,0.04,0.34]], glow:[0.58,0.32,1.00], line:[0.72,0.48,1.00]},
    green:  {grad:[[0.08,0.55,0.40],[0.02,0.18,0.13]], glow:[0.20,0.95,0.58], line:[0.32,1.00,0.64]}
};
function _glowName(preset){ return (preset||"blue").charAt(0).toUpperCase()+(preset||"blue").slice(1); }
// centered display text via TRUE anchor centering (static x, only the anchor measures the rect)
function _glowCtext(comp, ctrl, str, fs, col, bold, dur){
    var tl = _uiText(comp, str, Math.round(fs), 6145, null, dur, col); _clean(tl, bold);
    tl.parent = ctrl;
    tl.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
        "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
    return tl;
}

// --- GLOW PEAK: dashboard stat card, glowing peak line + pulsing dot + count-up number
function _glowPeak(colorName) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) { alert("Avval kompozitsiya oching!"); return; }

    var COLORS = {
        blue:   [0.298, 0.553, 1.0],
        purple: [0.608, 0.420, 1.0],
        green:  [0.180, 0.827, 0.478]
    };
    var tint = COLORS[colorName] || COLORS.blue;
    var W = 480, H = 600;
    var cx = comp.width / 2, cy = comp.height / 2;
    var tIn = comp.time, dur = 3.2;

    // container null so the whole card moves as one unit
    var root = comp.layers.addNull(dur);
    root.name = "[GlowPeak] Root";
    root.property("Transform").property("Position").setValue([cx, cy]);
    root.inPoint = tIn; root.outPoint = tIn + dur;

    // 1) panel background — vector rounded rect with radial tint
    var panel = comp.layers.addShape();
    panel.name = "[GlowPeak] Panel";
    panel.parent = root;
    panel.property("Transform").property("Position").setValue([0, 0]);
    panel.inPoint = tIn; panel.outPoint = tIn + dur;
    var pg = panel.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pc = pg.property("ADBE Vectors Group");
    var prect = pc.addProperty("ADBE Vector Shape - Rect");
    prect.property("ADBE Vector Rect Size").setValue([W, H]);
    prect.property("ADBE Vector Rect Position").setValue([0, 0]);
    prect.property("ADBE Vector Rect Roundness").setValue(22);
    var pfill = pc.addProperty("ADBE Vector Graphic - Fill");
    pfill.property("ADBE Vector Fill Color").setValue([0.047, 0.078, 0.141]);
    try {
        var grad = panel.property("ADBE Effect Parade").addProperty("ADBE Ramp");
        grad.property("Start Color").setValue([tint[0]*0.35, tint[1]*0.35, tint[2]*0.35]);
        grad.property("End Color").setValue([0.031, 0.047, 0.086]);
        grad.property("Start of Ramp").setValue([W/2, H*1.05]);
        grad.property("End of Ramp").setValue([W/2, H*0.35]);
        grad.property("Ramp Shape").setValue(2);
        grad.property("Blend With Original").setValue(45);
    } catch (e2) {}

    // grid overlay, masked to the same rounded-rect shape
    var gridLines = comp.layers.addShape();
    gridLines.name = "[GlowPeak] Grid";
    gridLines.parent = root;
    gridLines.property("Transform").property("Position").setValue([0, 0]);
    gridLines.property("Transform").property("Opacity").setValue(28);
    gridLines.inPoint = tIn; gridLines.outPoint = tIn + dur;
    var glg = gridLines.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var glc = glg.property("ADBE Vectors Group");
    var step = 30;
    for (var gx = -Math.floor(W/2/step)*step; gx <= W/2; gx += step) {
        var vsh = new Shape();
        vsh.vertices = [[gx, -H/2], [gx, H/2]];
        vsh.closed = false;
        glc.addProperty("ADBE Vector Shape - Group").property("ADBE Vector Shape").setValue(vsh);
    }
    for (var gy = -H/2; gy <= H/2; gy += step) {
        var hsh = new Shape();
        hsh.vertices = [[-W/2, gy], [W/2, gy]];
        hsh.closed = false;
        glc.addProperty("ADBE Vector Shape - Group").property("ADBE Vector Shape").setValue(hsh);
    }
    var gstroke = glc.addProperty("ADBE Vector Graphic - Stroke");
    gstroke.property("ADBE Vector Stroke Color").setValue([0.09, 0.125, 0.20]);
    gstroke.property("ADBE Vector Stroke Width").setValue(1);
    try {
        var gm2 = gridLines.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
        var gs2 = new Shape();
        var hw2 = W/2, hh2 = H/2, r2 = 22;
        gs2.vertices = [[-hw2+r2,-hh2],[hw2-r2,-hh2],[hw2,-hh2+r2],[hw2,hh2-r2],[hw2-r2,hh2],[-hw2+r2,hh2],[-hw2,hh2-r2],[-hw2,-hh2+r2]];
        gs2.inTangents = [[-r2*0.55,0],[0,0],[0,-r2*0.55],[0,0],[r2*0.55,0],[0,0],[0,r2*0.55],[0,0]];
        gs2.outTangents = [[0,0],[r2*0.55,0],[0,0],[0,r2*0.55],[0,0],[-r2*0.55,0],[0,0],[0,-r2*0.55]];
        gs2.closed = true;
        gm2.property("ADBE Mask Shape").setValue(gs2);
    } catch (e6) {}

    // 2) top row: eyebrow label + "Bu oy" pill
    var eyebrow = comp.layers.addText("WIN RATE");
    eyebrow.parent = root;
    eyebrow.inPoint = tIn; eyebrow.outPoint = tIn + dur;
    var eyeDoc = eyebrow.property("Source Text").value;
    eyeDoc.fontSize = 16;
    eyeDoc.fillColor = [0.455, 0.506, 0.627];
    eyeDoc.tracking = 180;
    try { eyeDoc.font = "ArialMT"; } catch (e) {}
    eyebrow.property("Source Text").setValue(eyeDoc);
    eyebrow.property("Transform").property("Position").setValue([-W/2 + 26, -H/2 + 42]);
    eyebrow.property("Transform").property("Anchor Point").setValue([0, 0]);

    var pillW = 92, pillH = 30;
    var pill = comp.layers.addSolid([0.047, 0.078, 0.141], "[GlowPeak] Pill", pillW, pillH, comp.pixelAspect, dur);
    pill.parent = root;
    pill.inPoint = tIn; pill.outPoint = tIn + dur;
    pill.property("Transform").property("Position").setValue([W/2 - 26 - pillW/2, -H/2 + 40]);
    try {
        var pr = pill.property("ADBE Effect Parade").addProperty("ADBE Round Corners");
        pr.property(1).setValue(15);
    } catch (e) {}
    try {
        var pstroke = pill.property("ADBE Effect Parade").addProperty("ADBE Stroke");
        pstroke.property("Color").setValue([0.106, 0.141, 0.212]);
        pstroke.property("Brush Size").setValue(2);
        pstroke.property("All Masks").setValue(1);
    } catch (e) {}
    var pillTxt = comp.layers.addText("Bu oy");
    pillTxt.parent = root;
    pillTxt.inPoint = tIn; pillTxt.outPoint = tIn + dur;
    var ptd = pillTxt.property("Source Text").value;
    ptd.fontSize = 15;
    ptd.fillColor = [0.455, 0.506, 0.627];
    ptd.justification = ParagraphJustification.CENTER_JUSTIFY;
    try { ptd.font = "ArialMT"; } catch (e) {}
    pillTxt.property("Source Text").setValue(ptd);
    pillTxt.property("Transform").property("Position").setValue([W/2 - 26 - pillW/2, -H/2 + 40 + 5]);

    // 3) the peak line — drawn with a shape layer + trim paths for a genuine draw-on
    var chartW = 380, chartH = 190;
    var chartCx = 0, chartCy = -H/2 + 210;
    var lineLayer = comp.layers.addShape();
    lineLayer.name = "[GlowPeak] Line";
    lineLayer.parent = root;
    lineLayer.inPoint = tIn; lineLayer.outPoint = tIn + dur;
    lineLayer.property("Transform").property("Position").setValue([chartCx - chartW/2, chartCy - chartH/2]);
    var lg = lineLayer.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var lc = lg.property("ADBE Vectors Group");
    var pathProp = lc.addProperty("ADBE Vector Shape - Group");
    var sh = new Shape();
    sh.vertices = [[8,142],[96,88],[138,20],[180,88],[292,142]];
    sh.inTangents  = [[0,0],[-24,4],[-14,-30],[14,-30],[24,4]];
    sh.outTangents = [[24,4],[14,-30],[-14,-30],[-24,4],[0,0]];
    sh.closed = false;
    pathProp.property("ADBE Vector Shape").setValue(sh);
    var strokeFx = lc.addProperty("ADBE Vector Graphic - Stroke");
    strokeFx.property("ADBE Vector Stroke Color").setValue(tint);
    strokeFx.property("ADBE Vector Stroke Width").setValue(6);
    strokeFx.property("ADBE Vector Stroke Line Cap").setValue(2);
    strokeFx.property("ADBE Vector Stroke Line Join").setValue(2);
    var trim = lc.addProperty("ADBE Vector Filter - Trim");
    trim.property("ADBE Vector Trim End").setValue(0);
    trim.property("ADBE Vector Trim End").setValueAtTime(tIn + 0.15, 0);
    trim.property("ADBE Vector Trim End").setValueAtTime(tIn + 1.1, 100);
    for (var k = 1; k <= trim.property("ADBE Vector Trim End").numKeys; k++) {
        try {
            trim.property("ADBE Vector Trim End").setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            var ea = [new KeyframeEase(0, 80)];
            trim.property("ADBE Vector Trim End").setTemporalEaseAtKey(k, ea, ea);
        } catch (e) {}
    }
    try {
        var lglow = lineLayer.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        lglow.property(2).setValue(35);
        lglow.property(3).setValue(28);
        lglow.property(4).setValue(1.4);
    } catch (e) {}

    // 4) glow dot at the peak, pulsing, appears once the line reaches it
    var dot = comp.layers.addShape();
    dot.name = "[GlowPeak] Dot";
    dot.parent = root;
    dot.inPoint = tIn; dot.outPoint = tIn + dur;
    var dotPos = [chartCx - chartW/2 + 138, chartCy - chartH/2 + 20];
    dot.property("Transform").property("Position").setValue(dotPos);
    var dg = dot.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var dc = dg.property("ADBE Vectors Group");
    var ell = dc.addProperty("ADBE Vector Shape - Ellipse");
    ell.property("ADBE Vector Ellipse Size").setValue([20, 20]);
    var dfill = dc.addProperty("ADBE Vector Graphic - Fill");
    dfill.property("ADBE Vector Fill Color").setValue(tint);
    try {
        var dglow = dot.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        dglow.property(2).setValue(25);
        dglow.property(3).setValue(35);
        dglow.property(4).setValue(2.0);
    } catch (e) {}
    var dotScale = dot.property("Transform").property("Scale");
    dotScale.setValueAtTime(tIn, [0, 0]);
    dotScale.setValueAtTime(tIn + 1.1, [0, 0]);
    dotScale.setValueAtTime(tIn + 1.3, [115, 115]);
    dotScale.setValueAtTime(tIn + 1.45, [100, 100]);
    dotScale.setValueAtTime(tIn + 1.9, [130, 130]);
    dotScale.setValueAtTime(tIn + 2.4, [100, 100]);
    dotScale.setValueAtTime(tIn + 2.9, [130, 130]);
    for (var dk = 3; dk <= dotScale.numKeys; dk++) {
        try {
            dotScale.setInterpolationTypeAtKey(dk, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            var de = [new KeyframeEase(0, 60), new KeyframeEase(0, 60)];
            dotScale.setTemporalEaseAtKey(dk, de, de);
        } catch (e) {}
    }

    // 5) bottom text block: metric label, big count-up number, delta, footer
    var label = comp.layers.addText("G'olib treydlar ulushi");
    label.parent = root;
    label.inPoint = tIn; label.outPoint = tIn + dur;
    var ld = label.property("Source Text").value;
    ld.fontSize = 17;
    ld.fillColor = [0.455, 0.506, 0.627];
    try { ld.font = "ArialMT"; } catch (e) {}
    label.property("Source Text").setValue(ld);
    label.property("Transform").property("Position").setValue([-W/2 + 26, H/2 - 138]);
    label.property("Transform").property("Anchor Point").setValue([0, 0]);

    var numLayer = comp.layers.addText("0%");
    numLayer.parent = root;
    numLayer.inPoint = tIn; numLayer.outPoint = tIn + dur;
    var nd = numLayer.property("Source Text").value;
    nd.fontSize = 64;
    nd.fillColor = [0.933, 0.949, 0.984];
    try { nd.font = "Arial-BoldMT"; } catch (e) {}
    numLayer.property("Source Text").setValue(nd);
    numLayer.property("Transform").property("Position").setValue([-W/2 + 26, H/2 - 66]);
    numLayer.property("Transform").property("Anchor Point").setValue([0, 0]);
    try {
        numLayer.property("Source Text").expression =
            "n = Math.round(linear(time, " + (tIn + 0.3) + ", " + (tIn + 1.9) + ", 0, 87));\n" +
            "n + \"%\";";
    } catch (e) {}

    var delta = comp.layers.addText("↑ 12%");
    delta.parent = root;
    delta.inPoint = tIn; delta.outPoint = tIn + dur;
    var dtd = delta.property("Source Text").value;
    dtd.fontSize = 20;
    dtd.fillColor = [0.180, 0.827, 0.478];
    try { dtd.font = "Arial-BoldMT"; } catch (e) {}
    delta.property("Source Text").setValue(dtd);
    delta.property("Transform").property("Position").setValue([-W/2 + 220, H/2 - 76]);
    delta.property("Transform").property("Anchor Point").setValue([0, 0]);
    var deltaOp = delta.property("Transform").property("Opacity");
    deltaOp.setValueAtTime(tIn, 0);
    deltaOp.setValueAtTime(tIn + 1.9, 0);
    deltaOp.setValueAtTime(tIn + 2.15, 100);

    var foot = comp.layers.addText("O'tgan oyga nisbatan");
    foot.parent = root;
    foot.inPoint = tIn; foot.outPoint = tIn + dur;
    var ftd = foot.property("Source Text").value;
    ftd.fontSize = 14;
    ftd.fillColor = [0.29, 0.335, 0.435];
    try { ftd.font = "ArialMT"; } catch (e) {}
    foot.property("Source Text").setValue(ftd);
    foot.property("Transform").property("Position").setValue([-W/2 + 26, H/2 - 34]);
    foot.property("Transform").property("Anchor Point").setValue([0, 0]);

    // whole card fade/scale in
    var rootScale = root.property("Transform").property("Scale");
    rootScale.setValueAtTime(tIn, [94, 94]);
    rootScale.setValueAtTime(tIn + 0.4, [100, 100]);
    for (var rk = 1; rk <= rootScale.numKeys; rk++) {
        try {
            rootScale.setInterpolationTypeAtKey(rk, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            var re = [new KeyframeEase(0, 75), new KeyframeEase(0, 75)];
            rootScale.setTemporalEaseAtKey(rk, re, re);
        } catch (e) {}
    }
    var rootOp = root.property("Transform").property("Opacity");
    rootOp.setValueAtTime(tIn, 0);
    rootOp.setValueAtTime(tIn + 0.35, 100);

    root.selected = true;
    return root;
}

// --- NEON GRID HERO: real 3D camera scene — receding glow floor + floating glass gauge card
// --- BOUNCr UNIVERSAL: 4-slider spring bounce expression (Amplitude/Frequency/Decay/Floor)
// Applies to Position/Scale/Rotation of every selected layer. Sliders stay editable after applying.
function _bouncrApply(propChoice) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) { alert("Avval kompozitsiya oching!"); return 0; }
    if (comp.selectedLayers.length === 0) { alert("Avval qatlam(lar)ni tanlang!"); return 0; }

    var expr =
        "amp = effect(\"BOUNCr Amplitude\")(\"Slider\");\n" +
        "freq = effect(\"BOUNCr Frequency\")(\"Slider\");\n" +
        "decay = effect(\"BOUNCr Decay\")(\"Slider\");\n" +
        "floorPct = effect(\"BOUNCr Floor\")(\"Slider\");\n" +
        "t = time - inPoint;\n" +
        "if (t < 0){ value }\n" +
        "else {\n" +
        "  s = amp * Math.cos(freq*t*2*Math.PI) / Math.exp(decay*t);\n" +
        "  s = s * (1 - floorPct/100);\n" +
        "  value + s;\n" +
        "}";

    var applied = 0;
    for (var li = 0; li < comp.selectedLayers.length; li++) {
        var L = comp.selectedLayers[li];
        try {
            var fxg = L.property("ADBE Effect Parade");
            for (var fi = fxg.numProperties; fi >= 1; fi--) {
                if (fxg.property(fi).name.indexOf("BOUNCr") === 0) fxg.property(fi).remove();
            }
            var sAmp = fxg.addProperty("ADBE Slider Control"); sAmp.name = "BOUNCr Amplitude";
            sAmp.property(1).setValue(propChoice === "scale" ? 12 : (propChoice === "rotation" ? 15 : 40));
            var sFreq = fxg.addProperty("ADBE Slider Control"); sFreq.name = "BOUNCr Frequency"; sFreq.property(1).setValue(2.5);
            var sDecay = fxg.addProperty("ADBE Slider Control"); sDecay.name = "BOUNCr Decay"; sDecay.property(1).setValue(4);
            var sFloor = fxg.addProperty("ADBE Slider Control"); sFloor.name = "BOUNCr Floor"; sFloor.property(1).setValue(0);

            var target = null;
            if (propChoice === "scale") target = L.property("Transform").property("Scale");
            else if (propChoice === "rotation") target = L.property("Transform").property("Rotation");
            else target = L.property("Transform").property("Position");

            target.expression = expr;
            applied++;
        } catch (e) { alert("Xato (" + L.name + "): " + e.toString()); }
    }
    return applied;
}

function _neonGridHero(colorName) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) { alert("Avval kompozitsiya oching!"); return; }

    var COLORS = {
        blue:   { a:[0.184,0.659,1.0], b:[0.0,0.898,1.0] },
        red:    { a:[1.0,0.2,0.28],    b:[1.0,0.45,0.25] },
        purple: { a:[0.486,0.361,0.988], b:[0.0,0.9,1.0] }
    };
    var C = COLORS[colorName] || COLORS.blue;
    var W = comp.width, H = comp.height;
    var dur = 4.2;
    var fps = comp.frameRate || 30;

    function smoothK(prop, infl) {
        for (var k = 1; k <= prop.numKeys; k++) {
            try {
                prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                var dims = 1; try { dims = prop.value.length || 1; } catch (e0) { dims = 1; }
                var ea = []; for (var d = 0; d < dims; d++) ea.push(new KeyframeEase(0, infl == null ? 75 : infl));
                prop.setTemporalEaseAtKey(k, ea, ea);
            } catch (e) {}
        }
    }

    var scene = app.project.items.addComp("[NeonGrid] Scene", W, H, comp.pixelAspect, dur, fps);

    // A) background radial
    var bg = scene.layers.addSolid([0.008,0.012,0.039], "[NeonGrid] BG", W, H, 1, dur);
    try {
        var bgRamp = bg.property("ADBE Effect Parade").addProperty("ADBE Ramp");
        bgRamp.property("Start Color").setValue([0.04,0.09,0.19]);
        bgRamp.property("End Color").setValue([0.008,0.012,0.039]);
        bgRamp.property("Start of Ramp").setValue([W/2, H*0.08]);
        bgRamp.property("End of Ramp").setValue([W/2, H*0.6]);
        bgRamp.property("Ramp Shape").setValue(2);
    } catch (e) {}

    // B) floor — 3D grid shape, lies flat, recedes into distance
    var floor = scene.layers.addShape();
    floor.name = "[NeonGrid] Floor";
    floor.threeDLayer = true;
    var flg = floor.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var flc = flg.property("ADBE Vectors Group");
    var half = 1200, farDepth = 3400, step = 140;
    for (var gx = -half; gx <= half; gx += step) {
        var vsh = new Shape(); vsh.vertices = [[gx, 0], [gx, farDepth]]; vsh.closed = false;
        flc.addProperty("ADBE Vector Shape - Group").property("ADBE Vector Shape").setValue(vsh);
    }
    for (var gy = 0; gy <= farDepth; gy += step) {
        var hsh = new Shape(); hsh.vertices = [[-half, gy], [half, gy]]; hsh.closed = false;
        flc.addProperty("ADBE Vector Shape - Group").property("ADBE Vector Shape").setValue(hsh);
    }
    var flStroke = flc.addProperty("ADBE Vector Graphic - Stroke");
    flStroke.property("ADBE Vector Stroke Color").setValue(C.a);
    flStroke.property("ADBE Vector Stroke Width").setValue(3);
    try {
        var flGlow = floor.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        flGlow.property(2).setValue(30); flGlow.property(3).setValue(45); flGlow.property(4).setValue(1.7);
    } catch (e) {}
    floor.property("Transform").property("Position").setValue([W/2, H*0.60, -100]);
    floor.property("Transform").property("X Rotation").setValue(90);

    // C) camera — tilted down, looking forward into the receding grid
    var cam = scene.layers.addCamera("[NeonGrid] Camera", [W/2, H/2]);
    cam.property("Transform").property("Position").setValue([W/2, H*0.18, -1500]);
    cam.property("Transform").property("Point of Interest").setValue([W/2, H*0.78, 900]);

    // D) fog — masked solid fading the distant (upper) part of the floor into the background
    var fog = scene.layers.addSolid([0.008,0.012,0.039], "[NeonGrid] Fog", W, H, 1, dur);
    var fm = fog.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
    var fs = new Shape();
    fs.vertices = [[0,0],[W,0],[W,H*0.66],[0,H*0.66]];
    fs.closed = true;
    fm.property("ADBE Mask Shape").setValue(fs);
    fm.property("ADBE Mask Feather").setValue([0, H*0.30]);

    // E) ribbon halo — soft rotating colored glow behind the card
    var ribbonNull = scene.layers.addNull(dur);
    ribbonNull.name = "[NeonGrid] Ribbon Null";
    ribbonNull.property("Transform").property("Position").setValue([W/2, H*0.42]);
    var rrot = ribbonNull.property("Transform").property("Rotation");
    rrot.setValueAtTime(0, 0);
    rrot.setValueAtTime(dur, 40);
    function ribbonBlob(name, color, off, sz, op) {
        var b = scene.layers.addShape();
        b.name = name; b.parent = ribbonNull;
        var bg2 = b.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var bc = bg2.property("ADBE Vectors Group");
        var ell = bc.addProperty("ADBE Vector Shape - Ellipse");
        ell.property("ADBE Vector Ellipse Size").setValue([sz, sz]);
        var fill = bc.addProperty("ADBE Vector Graphic - Fill");
        fill.property("ADBE Vector Fill Color").setValue(color);
        b.property("Transform").property("Position").setValue(off);
        b.property("Transform").property("Opacity").setValue(op);
        try {
            var bb = b.property("ADBE Effect Parade").addProperty("ADBE Fast Blur");
            bb.property(1).setValue(sz*0.22);
        } catch (e) {}
        return b;
    }
    ribbonBlob("[NeonGrid] Ribbon A", C.a, [-170, -40], 340, 26);
    ribbonBlob("[NeonGrid] Ribbon B", C.b, [190, 30], 300, 22);

    // F) particles — small glowing dots drifting upward
    var partPos = [[0.20,0.30],[0.78,0.24],[0.30,0.50],[0.70,0.55],[0.50,0.18],[0.86,0.42],[0.14,0.46],[0.58,0.62]];
    for (var pi = 0; pi < partPos.length; pi++) {
        var px = W*partPos[pi][0], py = H*partPos[pi][1];
        var p = scene.layers.addShape();
        p.name = "[NeonGrid] Particle " + pi;
        var pg = p.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var pc = pg.property("ADBE Vectors Group");
        var pell = pc.addProperty("ADBE Vector Shape - Ellipse");
        pell.property("ADBE Vector Ellipse Size").setValue([5,5]);
        var pfill = pc.addProperty("ADBE Vector Graphic - Fill");
        pfill.property("ADBE Vector Fill Color").setValue(pi % 2 === 0 ? C.a : C.b);
        try {
            var pglow = p.property("ADBE Effect Parade").addProperty("ADBE Glo2");
            pglow.property(2).setValue(60); pglow.property(3).setValue(14); pglow.property(4).setValue(0.7);
        } catch (e) {}
        var pos = p.property("Transform").property("Position");
        pos.setValueAtTime(0, [px, py + 18]);
        pos.setValueAtTime(dur, [px, py - 18]);
        smoothK(pos, 50);
        var op = p.property("Transform").property("Opacity");
        op.setValueAtTime(0, 25 + (pi % 3) * 15);
        op.setValueAtTime(dur/2, 80);
        op.setValueAtTime(dur, 25 + (pi % 3) * 15);
    }

    // G) card — flat, crisp, floats with a gentle breathe
    var cardW = Math.min(W*0.82, 460), cardH = cardW * 1.18;
    var cardRoot = scene.layers.addNull(dur);
    cardRoot.name = "[NeonGrid] Card Root";
    cardRoot.property("Transform").property("Position").setValue([W/2, H*0.55]);
    var crScale = cardRoot.property("Transform").property("Scale");
    crScale.setValueAtTime(0, [96,96]);
    crScale.setValueAtTime(0.5, [100,100]);
    smoothK(crScale, 75);
    var crPos = cardRoot.property("Transform").property("Position");
    crPos.setValueAtTime(0, [W/2, H*0.55 + 8]);
    crPos.setValueAtTime(dur/2, [W/2, H*0.55 - 8]);
    crPos.setValueAtTime(dur, [W/2, H*0.55 + 8]);
    smoothK(crPos, 60);
    var crOp = cardRoot.property("Transform").property("Opacity");
    crOp.setValueAtTime(0, 0); crOp.setValueAtTime(0.45, 100);

    var panel = scene.layers.addShape();
    panel.name = "[NeonGrid] Panel"; panel.parent = cardRoot;
    var pg2 = panel.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pc2 = pg2.property("ADBE Vectors Group");
    var prect = pc2.addProperty("ADBE Vector Shape - Rect");
    prect.property("ADBE Vector Rect Size").setValue([cardW, cardH]);
    prect.property("ADBE Vector Rect Roundness").setValue(24);
    var pfill2 = pc2.addProperty("ADBE Vector Graphic - Fill");
    pfill2.property("ADBE Vector Fill Color").setValue([0.035,0.05,0.09]);
    try {
        var pstroke2 = pc2.addProperty("ADBE Vector Graphic - Stroke");
        pstroke2.property("ADBE Vector Stroke Color").setValue([C.a[0],C.a[1],C.a[2]]);
        pstroke2.property("ADBE Vector Stroke Width").setValue(1.5);
        pstroke2.property("ADBE Vector Stroke Opacity").setValue(35);
    } catch (e) {}
    try {
        var pramp = panel.property("ADBE Effect Parade").addProperty("ADBE Ramp");
        pramp.property("Start Color").setValue([C.a[0]*0.28, C.a[1]*0.28, C.a[2]*0.28]);
        pramp.property("End Color").setValue([0.02,0.03,0.06]);
        pramp.property("Start of Ramp").setValue([0, cardH*0.9]);
        pramp.property("End of Ramp").setValue([0, cardH*0.25]);
        pramp.property("Ramp Shape").setValue(2);
        pramp.property("Blend With Original").setValue(45);
    } catch (e) {}

    function cardText(str, size, color, pos, anchor, bold) {
        var t = scene.layers.addText(str);
        t.parent = cardRoot;
        var d = t.property("Source Text").value;
        d.fontSize = size; d.fillColor = color;
        try { d.font = bold ? "Arial-BoldMT" : "ArialMT"; } catch (e) {}
        t.property("Source Text").setValue(d);
        t.property("Transform").property("Position").setValue(pos);
        t.property("Transform").property("Anchor Point").setValue(anchor || [0,0]);
        return t;
    }
    var lo = [0.5,0.58,0.75];
    var hw2 = cardW/2, hh2 = cardH/2;
    cardText("WIN RATE", 15, lo, [-hw2+24, -hh2+34]);
    var winNum = cardText("87%", 22, [C.b[0],C.b[1],C.b[2]], [-hw2+24, -hh2+58], [0,0], true);
    try { winNum.property("ADBE Effect Parade").addProperty("ADBE Glo2"); } catch (e) {}
    var profitLabel = cardText("PROFIT", 15, lo, [hw2-24, -hh2+34]);
    profitLabel.property("Source Text").value.justification = ParagraphJustification.RIGHT_JUSTIFY;
    profitLabel.property("Source Text").setValue(profitLabel.property("Source Text").value);
    profitLabel.property("Transform").property("Anchor Point").setValue([0,0]);
    var profitNum = cardText("+$3,240", 20, [1,1,1], [hw2-24, -hh2+58], [0,0], true);
    var pnd = profitNum.property("Source Text").value; pnd.justification = ParagraphJustification.RIGHT_JUSTIFY; profitNum.property("Source Text").setValue(pnd);

    // gauge arc (trim paths ellipse) — dim track + bright animated arc
    var gaugeCy = -hh2 + cardH*0.42;
    var gauge = scene.layers.addShape();
    gauge.name = "[NeonGrid] Gauge"; gauge.parent = cardRoot;
    gauge.property("Transform").property("Position").setValue([0, gaugeCy]);
    var gg = gauge.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var gc = gg.property("ADBE Vectors Group");
    var gaugeR = cardW*0.30;
    var gtrackPath = gc.addProperty("ADBE Vector Shape - Ellipse");
    gtrackPath.property("ADBE Vector Ellipse Size").setValue([gaugeR*2, gaugeR*2]);
    var gtrackStroke = gc.addProperty("ADBE Vector Graphic - Stroke");
    gtrackStroke.property("ADBE Vector Stroke Color").setValue([0.15,0.19,0.28]);
    gtrackStroke.property("ADBE Vector Stroke Width").setValue(14);

    var gArc = scene.layers.addShape();
    gArc.name = "[NeonGrid] Gauge Arc"; gArc.parent = cardRoot;
    gArc.property("Transform").property("Position").setValue([0, gaugeCy]);
    var ggA = gArc.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var gcA = ggA.property("ADBE Vectors Group");
    var gArcPath = gcA.addProperty("ADBE Vector Shape - Ellipse");
    gArcPath.property("ADBE Vector Ellipse Size").setValue([gaugeR*2, gaugeR*2]);
    var gArcStroke = gcA.addProperty("ADBE Vector Graphic - Stroke");
    gArcStroke.property("ADBE Vector Stroke Color").setValue(C.a);
    gArcStroke.property("ADBE Vector Stroke Width").setValue(14);
    gArcStroke.property("ADBE Vector Stroke Line Cap").setValue(2);
    var gArcTrim = gcA.addProperty("ADBE Vector Filter - Trim");
    gArcTrim.property("ADBE Vector Trim Start").setValue(0);
    var gArcEnd = gArcTrim.property("ADBE Vector Trim End");
    gArcEnd.setValueAtTime(0.3, 0);
    gArcEnd.setValueAtTime(1.6, 68);
    smoothK(gArcEnd, 80);
    gArcTrim.property("ADBE Vector Trim Offset").setValue(-90);
    try {
        var gGlow = gArc.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        gGlow.property(2).setValue(65); gGlow.property(3).setValue(14); gGlow.property(4).setValue(0.6);
    } catch (e) {}

    var gaugeNum = cardText("0%", 40, [1,1,1], [0, gaugeCy + 14], [0,0], true);
    var gnd = gaugeNum.property("Source Text").value; gnd.justification = ParagraphJustification.CENTER_JUSTIFY; gaugeNum.property("Source Text").setValue(gnd);
    try {
        gaugeNum.property("Source Text").expression =
            "n = Math.round(linear(time, 0.35, 1.85, 0, 92));\nn + \"%\";";
    } catch (e) {}

    var foot2 = cardText("Balans: $12,480 — 30 kunda +35%", 14, lo, [0, hh2 - 26], [0,0]);
    var fd2 = foot2.property("Source Text").value; fd2.justification = ParagraphJustification.CENTER_JUSTIFY; foot2.property("Source Text").setValue(fd2);

    // H) overall bloom on top
    var bloomAdj = scene.layers.addSolid([0.5,0.5,0.5], "[NeonGrid] Bloom", W, H, 1, dur);
    bloomAdj.adjustmentLayer = true;
    try {
        var bg3 = bloomAdj.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        bg3.property(2).setValue(70); bg3.property(3).setValue(24); bg3.property(4).setValue(0.7);
    } catch (e) {}

    // order (top->bottom): Bloom, CardRoot(auto on top), Ribbon, Particles, Fog, Camera, Floor, BG
    try { bloomAdj.moveToBeginning(); } catch (e) {}
    try {
        for (var li3 = scene.numLayers; li3 >= 1; li3--) {
            if (scene.layer(li3).name.indexOf("[NeonGrid] Ribbon") === 0) scene.layer(li3).moveAfter(cardRoot);
        }
        for (var li4 = scene.numLayers; li4 >= 1; li4--) {
            if (scene.layer(li4).name.indexOf("[NeonGrid] Particle") === 0) scene.layer(li4).moveBefore(fog);
        }
        fog.moveBefore(cam);
        cam.moveBefore(floor);
        floor.moveBefore(bg);
    } catch (e) {}

    var inst = comp.layers.add(scene);
    inst.name = "[NeonGrid] Hero";
    inst.property("Transform").property("Position").setValue([comp.width/2, comp.height/2]);
    inst.selected = true;

    return inst;
}

// --- GLOW WAVE: neon growth line draws L->R with a glowing comet tip, area fill, live counter
function _glowWave(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var ctrl = _uiCtl(comp, "GLOW WAVE ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Line", c.line);
    _addSlider(ctrl, "Value", 48200);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.82, ch = w*0.58, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:c.grad, glow:c.glow, glowInt:0.8, morph:true});
    // plot geometry (card-local == ctrl-local: card sits at ctrl origin)
    var plotL = -cw*0.40, plotW = cw*0.80, plotBottom = ch*0.30, plotH = ch*0.50, N = 16;
    function cyN(u){ return 0.12 + 0.76*(0.5-0.5*Math.cos(Math.PI*Math.pow(u,0.92))); }
    var verts=[], i, u;
    for (i=0;i<N;i++){ u=i/(N-1); verts.push([plotL+u*plotW, plotBottom-cyN(u)*plotH]); }
    var PROG = "var p=Math.max(0,Math.min(1,(t-0.55)/1.7)); var f=eo3(p); ";
    var cyExpr = "var yn=0.12+0.76*(0.5-0.5*Math.cos(Math.PI*Math.pow(u,0.92))); ";

    // AREA fill (closed) under the curve, revealed by a growing alpha matte
    var area = comp.layers.addShape(); area.name="Wave Area"; area.inPoint=comp.time; area.outPoint=comp.time+dur;
    var ag = area.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var apG = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var aShape = new Shape(); var av=[]; for(i=0;i<N;i++) av.push(verts[i]); av.push([plotL+plotW, ch*0.34]); av.push([plotL, ch*0.34]); aShape.vertices=av; aShape.closed=true;
    apG.property("ADBE Vector Shape").setValue(aShape);
    var aFill = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    aFill.property("ADBE Vector Fill Color").setValue([c.line[0],c.line[1],c.line[2],1]);
    area.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    area.parent = ctrl; area.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    area.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.7, 16);
    var aMatte = _uiRRect(comp, "Area Matte", dur, plotW, ch, 0, "[1,1,1,1]");
    aMatte.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-plotW/2,0]);
    aMatte.parent = ctrl; aMatte.property("ADBE Transform Group").property("ADBE Position").setValue([plotL,0]);
    aMatte.property("ADBE Transform Group").property("ADBE Scale").expression = PROG + "[f*100,100];";
    try { area.setTrackMatte(aMatte, TrackMatteType.ALPHA); } catch(e){ try{area.trackMatteType=TrackMatteType.ALPHA;}catch(e2){} }

    // LINE stroke (open) drawn via its own growing matte
    var line = comp.layers.addShape(); line.name="Wave Line"; line.inPoint=comp.time; line.outPoint=comp.time+dur; line.motionBlur=true;
    var lg = line.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var lp = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var lShape = new Shape(); lShape.vertices=verts; lShape.closed=false; lp.property("ADBE Vector Shape").setValue(lShape);
    var lStroke = lg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    lStroke.property("ADBE Vector Stroke Color").expression = cRef+'.effect("Line")(1)';
    lStroke.property("ADBE Vector Stroke Width").setValue(Math.max(5, w*0.012));
    lStroke.property("ADBE Vector Stroke Line Cap").setValue(2);
    lStroke.property("ADBE Vector Stroke Line Join").setValue(2);
    _uiGlowFx(line, w*0.03, 0.95);
    line.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    line.parent = ctrl; line.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    line.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);
    var lMW = plotW + w*0.04;
    var lMatte = _uiRRect(comp, "Line Matte", dur, lMW, ch, 0, "[1,1,1,1]");
    lMatte.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([-lMW/2,0]);
    lMatte.parent = ctrl; lMatte.property("ADBE Transform Group").property("ADBE Position").setValue([plotL,0]);
    lMatte.property("ADBE Transform Group").property("ADBE Scale").expression = PROG + "[f*100,100];";
    try { line.setTrackMatte(lMatte, TrackMatteType.ALPHA); } catch(e){ try{line.trackMatteType=TrackMatteType.ALPHA;}catch(e2){} }

    // glowing comet tip riding the curve's leading edge
    var tip = comp.layers.addShape(); tip.name="Wave Tip"; tip.inPoint=comp.time; tip.outPoint=comp.time+dur; tip.motionBlur=true;
    var tg = tip.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tE = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    var tipSz = Math.max(10, w*0.022); tE.property("ADBE Vector Ellipse Size").setValue([tipSz,tipSz]);
    var tFill = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    tFill.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
    _uiGlowFx(tip, w*0.04, 1.0);
    tip.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tip.parent = ctrl;
    tip.property("ADBE Transform Group").property("ADBE Position").expression =
        PROG + "var u=f; "+cyExpr+"[" + plotL + "+u*" + plotW + ", " + plotBottom + "-yn*" + plotH + "];";
    tip.property("ADBE Transform Group").property("ADBE Opacity").expression = pre + "(t>0.6)?100:0;";

    // counter + label (top-left, away from the rising right side of the curve)
    var num = _uiText(comp, "$48,200", Math.round(w*0.072), 6145, null, dur, [1,1,1]); _clean(num,true);
    num.property("ADBE Text Properties").property("ADBE Text Document").expression =
        "var ctl=thisComp.layer('"+ctrl.name+"'); var spd=ctl.effect('Animation Speed')(1)/100; var tt=(time-inPoint)*spd; "+FMT+
        "function eo3(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} var f=eo3((tt-0.55)/1.7); '$'+fmt(ctl.effect('Value')(1)*f);";
    num.parent = ctrl; num.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, -ch*0.31]);
    num.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);

    var lbl = _uiText(comp, "Revenue / last 30 days", Math.round(w*0.026), 6145, null, dur, [0.78,0.85,1.0]); _clean(lbl);
    lbl.parent = ctrl; lbl.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, -ch*0.20]);
    lbl.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.65, 80);

    var pillStr = "+24%";
    var pill = _uiRRect(comp, "Wave Pill", dur, w*0.135, w*0.05, w*0.025, "[1,1,1,1]");
    pill.parent = ctrl; pill.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40+w*0.088, -ch*0.10]);
    pill.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.8, 18);
    var pillT = _uiText(comp, pillStr, Math.round(w*0.026), 6145, null, dur, c.line); _clean(pillT,true);
    var pw = pillStr.length*w*0.026*0.54;
    pillT.parent = ctrl; pillT.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40+w*0.088 - pw/2, -ch*0.10]);
    pillT.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.85, 100);

    ctrl.selected = true;
}

// --- GLOW BARS: neon equalizer / revenue bars rise with stagger, tallest highlighted
function _glowBars(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var ctrl = _uiCtl(comp, "GLOW BARS ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Bars", c.line);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.82, ch = w*0.66, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:c.grad, glow:c.glow, glowInt:0.8, morph:true});

    var title = _uiText(comp, "Monthly Revenue", Math.round(w*0.04), 6145, null, dur, [1,1,1]); _clean(title,true);
    title.parent = ctrl; title.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, -ch*0.36]);
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);
    var sub = _uiText(comp, "Last 6 months of steady growth", Math.round(w*0.025), 6145, null, dur, [0.78,0.85,1.0]); _clean(sub);
    sub.parent = ctrl; sub.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, -ch*0.27]);
    sub.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.62, 80);

    var heights = [0.34,0.50,0.42,0.66,0.56,0.88];
    var labels  = ["Jan","Feb","Mar","Apr","May","Jun"];
    var n = heights.length;
    var barsL = -cw*0.36, barsW = cw*0.72, step = barsW/n, barW = step*0.46;
    var baseY = ch*0.30, maxH = ch*0.40;

    // baseline hairline
    var base = _uiRRect(comp, "Bars Baseline", dur, barsW+barW, w*0.004, w*0.002, "[1,1,1,1]");
    base.parent = ctrl; base.property("ADBE Transform Group").property("ADBE Position").setValue([barsL+barsW/2, baseY]);
    base.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.6, 16);

    for (var k=0;k<n;k++){
        var cx = barsL + step*(k+0.5);
        var bh = heights[k]*maxH;
        var top = (k===n-1);
        var bar = _uiRRect(comp, "Bar "+labels[k], dur, barW, bh, barW*0.32, top?"[1,1,1,1]":cRef+'.effect("Bars")(1)');
        bar.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, bh/2]);
        bar.parent = ctrl; bar.property("ADBE Transform Group").property("ADBE Position").setValue([cx, baseY]);
        var d0 = 0.62 + k*0.08;
        bar.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var d="+d0+"; var pp=Math.max(0,Math.min(1,(t-d)/0.6)); var e=ob(pp); var x=ib(pOut); [100, Math.max(0,e-x)*100];";
        bar.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        _uiGlowFx(bar, w*0.018, top?0.9:0.55);
        // month label
        var ml = _uiText(comp, labels[k], Math.round(w*0.022), 6145, null, dur, [0.72,0.78,0.9]); _clean(ml);
        var mw = labels[k].length*w*0.022*0.54;
        ml.parent = ctrl; ml.property("ADBE Transform Group").property("ADBE Position").setValue([cx-mw/2, baseY+w*0.045]);
        ml.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.05, 70);
    }
    // value bubble above the tallest bar
    var topCx = barsL + step*(n-1+0.5);
    var topBh = heights[n-1]*maxH;
    var vb = _uiText(comp, "$92K", Math.round(w*0.03), 6145, null, dur, [1,1,1]); _clean(vb,true);
    var vbw = "$92K".length*w*0.03*0.54;
    vb.parent = ctrl; vb.property("ADBE Transform Group").property("ADBE Position").setValue([topCx-vbw/2, baseY-topBh-w*0.05]);
    vb.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 1.15, 100);

    ctrl.selected = true;
}

// --- GLOW LIST: 2026 goals checklist, neon seals pop + lines rise in sequence
function _glowList(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var ctrl = _uiCtl(comp, "GLOW LIST ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Theme", c.glow);
    var pre = _uiPrefix(ctrl.name);
    var cw = w*0.78, ch = w*0.74, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:c.grad, glow:c.glow, glowInt:0.8, beam:true, beamCol:c.glow, morph:true});

    var title = _uiText(comp, "2026 Goals", Math.round(w*0.05), 6145, null, dur, [1,1,1]); _clean(title,true);
    title.parent = ctrl; title.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, -ch*0.34]);
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);

    var items = [
        {t:"Hit 100K followers", done:true},
        {t:"Launch my first course", done:true},
        {t:"Travel to 5 countries", done:true},
        {t:"Read 24 books", done:false}
    ];
    var rowY0 = -ch*0.15, rowStep = ch*0.135, iconX = -cw*0.36, textX = -cw*0.26;
    var sz = w*0.05;
    for (var k=0;k<items.length;k++){
        var ry = rowY0 + k*rowStep;
        var d0 = 0.65 + k*0.14;
        var ic;
        if (items[k].done) {
            ic = _vchk(comp, dur, sz, c.glow);
            _uiGlowFx(ic, w*0.025, 0.7);
        } else {
            ic = comp.layers.addShape(); ic.name="Goal Ring"; ic.inPoint=comp.time; ic.outPoint=comp.time+dur;
            var rgp = ic.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
            var rel = rgp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
            rel.property("ADBE Vector Ellipse Size").setValue([sz,sz]);
            var res = rgp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            res.property("ADBE Vector Stroke Color").setValue([c.glow[0],c.glow[1],c.glow[2],1]);
            res.property("ADBE Vector Stroke Width").setValue(sz*0.09);
            ic.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
            _uiGlowFx(ic, w*0.02, 0.5);
        }
        ic.parent = ctrl; ic.property("ADBE Transform Group").property("ADBE Position").setValue([iconX, ry]);
        ic.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, d0);
        ic.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        var col = items[k].done ? [0.92,0.95,1.0] : [0.62,0.68,0.8];
        var tx = _uiText(comp, items[k].t, Math.round(w*0.034), 6145, null, dur, col); _clean(tx, items[k].done);
        tx.parent = ctrl; tx.property("ADBE Transform Group").property("ADBE Position").setValue([textX, ry]);
        tx.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var d="+(d0+0.05)+"; var p=Math.max(0,Math.min(1,(t-d)/0.55)); var e=ob(p); value + ["+(w*0.03)+"*(1-e), 0];";
        tx.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.05, 100);
    }
    // progress footer
    var foot = _uiText(comp, "3 of 4 complete", Math.round(w*0.026), 6145, null, dur, c.line); _clean(foot,true);
    foot.parent = ctrl; foot.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.40, ch*0.40]);
    foot.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 1.3, 90);

    ctrl.selected = true;
}

// --- CLAUDE INTRO: cinematic Opus 4.8 motion-ad (clay aesthetic, Uzbek tagline)
function _claudeIntro() {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 6.5; var w = comp.width, h = comp.height;
    var clay=[0.847,0.467,0.341], bright=[0.96,0.80,0.70], cream=[0.985,0.96,0.93], muted=[0.80,0.66,0.58];
    var ctrl = _uiCtl(comp, "CLAUDE INTRO CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", clay);
    var pre = _uiPrefix(ctrl.name);
    function win(tIn, tOut){ var s = pre + "var a=Math.max(0,Math.min(1,(t-"+tIn+")/0.45)); "; if(tOut==null) return s+"a*100;"; return s+"var b=1-Math.max(0,Math.min(1,(t-"+(tOut-0.4)+")/0.4)); a*b*100;"; }
    // centered display text — TRUE centering via a static x=0 position + anchor at the
    // measured rect centre (stable because x never animates; only Y rises). Avoids the
    // estimate-width overflow that bites wide bold display type like "Opus 4.8".
    function bigText(str, fs, py, col, glow, tIn, tOut, riseD){
        var tl = _uiText(comp, str, Math.round(fs), 6145, null, dur, col); _clean(tl, true);
        if(glow>0) _uiGlowFx(tl, w*0.03, glow);
        tl.parent = ctrl;
        tl.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
            "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
        if(riseD){
            tl.property("ADBE Transform Group").property("ADBE Position").expression =
                pre + "var p=Math.max(0,Math.min(1,(t-"+tIn+")/0.65)); var e=1-Math.pow(1-p,3); [0, "+py+" + "+riseD+"*(1-e)];";
        } else {
            tl.property("ADBE Transform Group").property("ADBE Position").setValue([0, py]);
        }
        tl.property("ADBE Transform Group").property("ADBE Opacity").expression = win(tIn, tOut);
        return tl;
    }

    // dark cinematic background
    var bg = comp.layers.addSolid([0.07,0.055,0.045], "Intro BG", w, h, 1, comp.duration);
    bg.inPoint = comp.time; bg.outPoint = comp.time + dur;
    bg.property("ADBE Transform Group").property("ADBE Opacity").expression = win(0, null);

    // soft clay halo behind the action
    var halo = comp.layers.addShape(); halo.name="Intro Halo"; halo.inPoint=comp.time; halo.outPoint=comp.time+dur;
    var hg = halo.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var he = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    he.property("ADBE Vector Ellipse Size").setValue([w*0.9, w*0.9]);
    var hf = hg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    hf.property("ADBE Vector Fill Color").setValue([clay[0],clay[1],clay[2],1]);
    _uiGlowFx(halo, w*0.12, 1.0);
    try { halo.blendingMode = BlendingMode.ADD; } catch(e){}
    halo.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.04]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.2)/0.6)); (16+7*Math.sin(time*2.2))*a;";

    // spark logo — 8 radiating lines that burst out, rotate to rest
    var spark = comp.layers.addShape(); spark.name="Claude Spark"; spark.inPoint=comp.time; spark.outPoint=comp.time+dur;
    var sg = spark.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var svg = sg.property("ADBE Vectors Group");
    var L = w*0.075, r0 = w*0.024;
    for (var i=0;i<8;i++){
        var ang = i*Math.PI/4;
        var pgrp = svg.addProperty("ADBE Vector Shape - Group");
        var sh = new Shape();
        sh.vertices = [[Math.cos(ang)*r0, Math.sin(ang)*r0],[Math.cos(ang)*(r0+L), Math.sin(ang)*(r0+L)]];
        sh.closed = false;
        pgrp.property("ADBE Vector Shape").setValue(sh);
    }
    var sstroke = svg.addProperty("ADBE Vector Graphic - Stroke");
    sstroke.property("ADBE Vector Stroke Color").setValue([clay[0],clay[1],clay[2],1]);
    sstroke.property("ADBE Vector Stroke Width").setValue(Math.max(3, w*0.013));
    sstroke.property("ADBE Vector Stroke Line Cap").setValue(2);
    _uiGlowFx(spark, w*0.04, 1.0);
    spark.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    spark.parent = ctrl; spark.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.09]);
    spark.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.3)/0.9)); var e=ob(p); [e*100,e*100];";
    spark.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.3)/1.0)); var e=1-Math.pow(1-p,3); -50*(1-e);";
    spark.property("ADBE Transform Group").property("ADBE Opacity").expression = win(0.3, 2.95);

    // glowing core dot
    var core = comp.layers.addShape(); core.name="Spark Core"; core.inPoint=comp.time; core.outPoint=comp.time+dur;
    var cg = core.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ce = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ce.property("ADBE Vector Ellipse Size").setValue([w*0.05, w*0.05]);
    var cf = cg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    cf.property("ADBE Vector Fill Color").setValue([bright[0],bright[1],bright[2],1]);
    _uiGlowFx(core, w*0.05, 1.0);
    try { core.blendingMode = BlendingMode.ADD; } catch(e){}
    core.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    core.parent = ctrl; core.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.09]);
    core.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.0)/0.6)); var e=ob(p); [e*100,e*100];";
    core.property("ADBE Transform Group").property("ADBE Opacity").expression = win(1.0, 2.95);

    // SCENE 1: Claude wordmark
    bigText("Claude", w*0.11, h*0.06, cream, 0.35, 1.6, 2.95, h*0.05);

    // SCENE 2: Opus 4.8 reveal
    bigText("Introducing", w*0.034, -h*0.14, muted, 0, 3.0, 4.75, h*0.02);
    bigText("Opus 4.8", w*0.135, -h*0.02, cream, 0.6, 3.1, 4.75, h*0.05);
    bigText("Eng kuchli yordamching", w*0.04, h*0.08, muted, 0, 3.55, 4.75, h*0.03);

    // SCENE 3: question -> Ha. (Uzbek)
    bigText("Tayyormisan?", w*0.05, -h*0.11, cream, 0, 4.85, null, h*0.04);
    var ha = _uiText(comp, "Ha.", Math.round(w*0.22), 6145, null, dur, clay); _clean(ha, true);
    _uiGlowFx(ha, w*0.055, 1.1);
    ha.parent = ctrl;
    ha.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
        "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
    ha.property("ADBE Transform Group").property("ADBE Position").setValue([0, h*0.04]);
    ha.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-5.3)/0.5)); var e=ob(p); [e*100,e*100];";
    ha.property("ADBE Transform Group").property("ADBE Opacity").expression = win(5.3, null);

    // end lockup
    bigText("Claude Opus 4.8", w*0.04, h*0.22, cream, 0, 5.95, null, 0);
    bigText("by Anthropic", w*0.026, h*0.28, muted, 0, 6.15, null, 0);

    ctrl.selected = true;
}

// ============================================================================
// SRT KINETIC SEQUENCE — "not everything has a tutorial" narration
// Cinematic dark + focus-in (blur resolves) + soft rise. Understated, editable.
// Every element parented to the CONTROLLER with STATIC position (user-movable);
// only blur/opacity/rise animate. Warm amber accent = the "idea/spark" theme.
// ============================================================================
// Shared look for the whole sequence
var SRT_BG   = [0.043,0.043,0.050];      // near-black cinematic base
var SRT_CREAM= [0.960,0.950,0.925];      // primary type
var SRT_MUTE = [0.660,0.650,0.630];      // secondary type
var SRT_WARM = [0.960,0.740,0.420];      // amber accent (idea/spark)

// full-frame dark background + soft breathing center glow. Returns the ctrl-parented
// glow so scenes can tint it. bgOnly layers are NOT parented (they fill the frame).
function _srtStage(comp, dur, ctrl, pre, glowCol, glowInt) {
    var w = comp.width, h = comp.height;
    var bg = comp.layers.addSolid(SRT_BG, "SRT BG", w, h, 1, comp.duration);
    bg.inPoint = comp.time; bg.outPoint = comp.time + dur;
    // soft warm center glow — gives depth + subtle life (breathing)
    var glow = comp.layers.addShape(); glow.name = "SRT Glow";
    glow.inPoint = comp.time; glow.outPoint = comp.time + dur;
    var gg = glow.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ge = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ge.property("ADBE Vector Ellipse Size").setValue([w*1.05, w*1.05]);
    var gf = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    gf.property("ADBE Vector Fill Color").setValue([glowCol[0],glowCol[1],glowCol[2],1]);
    _uiGlowFx(glow, w*0.18, 1.0);
    try { glow.blendingMode = BlendingMode.ADD; } catch(e){}
    glow.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    glow.parent = ctrl; glow.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.02]);
    glow.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.6)); ("+(glowInt*11).toFixed(2)+"+"+(glowInt*3).toFixed(2)+"*Math.sin(time*1.8))*a;";
    return glow;
}

// a kinetic type line: focus-in (blur resolves) + soft rise + fade, staggered by delay.
// col=color, fs=fontSize px, py=static Y (ctrl-local), delay=entrance start, glowInt.
function _srtLine(comp, dur, ctrl, pre, str, fs, py, col, bold, delay, glowInt, rise) {
    var tl = _glowCtext(comp, ctrl, str, fs, col, bold, dur);
    if (glowInt > 0) _uiGlowFx(tl, comp.width*0.02, glowInt);
    // focus-in: gaussian blur resolves from soft to sharp
    var gb = tl.Effects.addProperty("ADBE Gaussian Blur 2");
    try { gb.property("ADBE Gaussian Blur 2-0002").setValue(true); } catch(e){}   // repeat edge pixels
    gb.property(1).expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+delay+")/0.65)); var e=eo3(p); (1-e)*"+(comp.width*0.028)+";";
    var d0 = (rise==null) ? comp.height*0.028 : rise;
    tl.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+delay+")/0.7)); var e=eo3(p); [0, "+py+" + "+d0+"*(1-e)];";
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+delay+")/0.55)); Math.min(1,p*1.35)*100;";
    return tl;
}

// clean cinematic BG: flat dark solid + SMOOTH radial vignette (no hard-edged disc).
// Radial ramp lifts the centre a touch and falls to the base — pure atmosphere.
function _srtBG(comp, dur) {
    var w = comp.width, h = comp.height;
    var bg = comp.layers.addSolid(SRT_BG, "SRT BG", w, h, 1, comp.duration);
    bg.inPoint = comp.time; bg.outPoint = comp.time + dur;
    var rmp = bg.Effects.addProperty("ADBE Ramp");
    rmp.property("ADBE Ramp-0001").setValue([w/2, h*0.42]);              // start (centre)
    rmp.property("ADBE Ramp-0002").setValue([0.10,0.10,0.125,1]);        // centre lift
    rmp.property("ADBE Ramp-0003").setValue([w/2, h*1.02]);              // end (edge)
    rmp.property("ADBE Ramp-0004").setValue([SRT_BG[0],SRT_BG[1],SRT_BG[2],1]);
    rmp.property("ADBE Ramp-0005").setValue(2);                          // radial
    return bg;
}

// ---------------------------------------------------------------------------
// ARSACRE-STYLE RIG (andoza: @arsacre5 reel) — moody cinema atmosphere +
// small CAPS caption + huge serif-italic ghost word + film grain/vignette.
// Footage-ready: user can drop b-roll under the rig; overlays sit on top.
// ---------------------------------------------------------------------------

// LIVING FOG: fractal-noise turbulence drifting through the frame (screen blend)
// — the "alive" volumetric feel static blobs can't give. All setValues guarded.
function _srtLivingFog(comp, dur, pre) {
    var w = comp.width, h = comp.height;
    var lf = comp.layers.addSolid([0,0,0], "Living Fog", w, h, 1, comp.duration);
    lf.inPoint = comp.time; lf.outPoint = comp.time + dur;
    var fx = lf.Effects.addProperty("ADBE Fractal Noise");
    try { fx.property("Contrast").setValue(26); } catch(e){}
    try { fx.property("Brightness").setValue(-30); } catch(e){}
    try { fx.property("Evolution").expression = pre + "time*38;"; } catch(e){}
    try { fx.property("Transform").property("Scale").setValue(210); } catch(e){}
    try { fx.property("Transform").property("Offset Turbulence").expression = pre + "[time*" + (w*0.02) + ", time*" + (w*0.006) + "];"; } catch(e){}
    try { lf.blendingMode = BlendingMode.SCREEN; } catch(e){}
    lf.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.9)); (9+2*Math.sin(time*0.5))*a*(1-Math.min(1,pOut*1.1));";
    return lf;
}

// atmosphere UNDER the text: fog blobs, light shaft, drifting dust
// side (+1/-1) mirrors the shaft; vn (0..2) varies the fog mood so scenes differ
// soft light source: SOLID + feathered elliptical mask. Never a blurred shape
// layer — shape buffers clip large blurs into visible SQUARES (hard-won lesson).
function _srtSoftLight(comp, dur, name, col, rx, ry, feather) {
    var w = comp.width, h = comp.height;
    // OVERSIZED solid: when drifted/rotated a comp-sized solid drags its own edge
    // into frame as a faint straight line — pad it well beyond the comp bounds
    var W2 = Math.ceil(w*2.4), H2 = Math.ceil(h*1.9);
    var s = comp.layers.addSolid([col[0],col[1],col[2]], name, W2, H2, 1, comp.duration);
    s.inPoint = comp.time; s.outPoint = comp.time + dur;
    var m = s.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
    var k = 0.5523, cx = W2/2, cy2 = H2/2;
    var sh = new Shape();
    sh.vertices = [[cx,cy2-ry],[cx+rx,cy2],[cx,cy2+ry],[cx-rx,cy2]];
    sh.outTangents = [[rx*k,0],[0,ry*k],[-rx*k,0],[0,-ry*k]];
    sh.inTangents  = [[-rx*k,0],[0,-ry*k],[rx*k,0],[0,ry*k]];
    sh.closed = true;
    m.property("ADBE Mask Shape").setValue(sh);
    m.property("ADBE Mask Feather").setValue([feather, feather]);
    try { s.blendingMode = BlendingMode.ADD; } catch(err){}
    s.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([W2/2, H2/2]);
    return s;
}

function _srtAtmos(comp, dur, ctrl, pre, side, vn) {
    var w = comp.width, h = comp.height;
    side = side || 1; vn = vn || 0;
    function blob(name, size, col, px, py, feather, op, driftX) {
        var s = _srtSoftLight(comp, dur, name, col, size/2, size*0.36, feather);
        s.parent = ctrl;
        s.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "[" + px + " + Math.sin(time*0.35)*" + driftX + ", " + py + " + Math.cos(time*0.28)*" + (driftX*0.5) + "];";
        s.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,t/0.8)); " + op + "*a;";
        return s;
    }
    // fog mood varies per scene: 0=teal/warm (arsacre), 1=warm-dominant, 2=cool neutral
    var moods = [
        [[0.34,0.46,0.43],[0.45,0.36,0.27]],
        [[0.48,0.38,0.26],[0.38,0.32,0.25]],
        [[0.33,0.38,0.44],[0.36,0.36,0.33]]
    ];
    var mc = moods[vn % 3];
    blob("Fog A",  w*1.15, mc[0], -w*0.10*side, -h*0.16, w*0.22, 13, w*0.02);
    blob("Fog B",  w*0.95, mc[1],  w*0.14*side,  h*0.20, w*0.20, 10, w*0.015);
    // light shaft falling diagonally — tall soft ellipse beam (mask, no square clip)
    var shaft = _srtSoftLight(comp, dur, "Light Shaft", [0.85,0.80,0.68], w*0.11, h*0.85, w*0.13);
    shaft.parent = ctrl;
    shaft.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.22*side, -h*0.05]);
    shaft.property("ADBE Transform Group").property("ADBE Rotate Z").expression = pre + "(24 + Math.sin(time*0.22)*1.5)*" + side + ";";
    shaft.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.0)); (9+2*Math.sin(time*0.5))*a;";
    // floating dust motes
    var dust = comp.layers.addShape(); dust.name="Dust"; dust.inPoint=comp.time; dust.outPoint=comp.time+dur;
    var seedPts = [[-0.34,-0.30],[0.28,-0.38],[0.40,0.10],[-0.22,0.24],[0.08,-0.12],[-0.42,0.02],[0.34,0.34],[-0.10,-0.44],[0.18,0.46]];
    for (var i=0;i<seedPts.length;i++){
        var dgp = dust.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var del = dgp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        var rr = 1.6 + (i%3);
        del.property("ADBE Vector Ellipse Size").setValue([rr*2, rr*2]);
        var dff = dgp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        dff.property("ADBE Vector Fill Color").setValue([0.92,0.90,0.85,1]);
        dgp.property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([w*seedPts[i][0], h*seedPts[i][1]]);
    }
    var db = dust.Effects.addProperty("ADBE Gaussian Blur 2"); db.property(1).setValue(1.6);
    dust.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    dust.parent = ctrl;
    dust.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "[Math.sin(time*0.4)*" + (w*0.012) + ", -t*" + (h*0.012) + " + Math.cos(time*0.31)*" + (h*0.006) + "];";
    dust.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.7)); 38*a;";
}

// post ON TOP of everything: light leak sweep, vignette, film grain
function _srtPost(comp, dur, pre, side) {
    var w = comp.width, h = comp.height;
    side = side || 1;
    // light leak — a soft warm streak sweeping once across the scene (mask beam)
    var leak = _srtSoftLight(comp, dur, "Light Leak", [0.95,0.62,0.38], w*0.30, h*0.9, w*0.20);
    leak.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-14*side);
    leak.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,t/dur)); [" + (w*(0.5-0.85*side)) + " + p*" + (w*1.7*side) + ", " + (h*0.5) + "];";
    leak.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,t/dur)); Math.sin(Math.PI*p)*16;";
    // vignette — black solid with inverted feathered ellipse mask
    var vig = comp.layers.addSolid([0,0,0], "Vignette", w, h, 1, comp.duration);
    vig.inPoint = comp.time; vig.outPoint = comp.time + dur;
    var vm = vig.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
    var k = 0.5523, rx = w*0.66, ry = h*0.58, cx = w/2, cy = h/2;
    var vsh = new Shape();
    vsh.vertices = [[cx,cy-ry],[cx+rx,cy],[cx,cy+ry],[cx-rx,cy]];
    vsh.outTangents = [[rx*k,0],[0,ry*k],[-rx*k,0],[0,-ry*k]];
    vsh.inTangents  = [[-rx*k,0],[0,-ry*k],[rx*k,0],[0,ry*k]];
    vsh.closed = true;
    vm.property("ADBE Mask Shape").setValue(vsh);
    vm.inverted = true;
    vm.property("ADBE Mask Feather").setValue([w*0.42, w*0.42]);
    vig.property("ADBE Transform Group").property("ADBE Opacity").setValue(72);
    // cinematic grade: gentle contrast lift under the grain
    var grd = comp.layers.addSolid([0.5,0.5,0.5], "Grade", w, h, 1, comp.duration);
    grd.inPoint = comp.time; grd.outPoint = comp.time + dur;
    grd.adjustmentLayer = true;
    try {
        var bc = grd.Effects.addProperty("ADBE Brightness & Contrast 2");
        bc.property("Brightness").setValue(-3);
        bc.property("Contrast").setValue(14);
    } catch(eG){}
    // film grain — adjustment layer with animated noise
    var gr = comp.layers.addSolid([0.5,0.5,0.5], "Film Grain", w, h, 1, comp.duration);
    gr.inPoint = comp.time; gr.outPoint = comp.time + dur;
    gr.adjustmentLayer = true;
    var nz = gr.Effects.addProperty("ADBE Noise");
    nz.property("ADBE Noise-0001").setValue(9);
    try { nz.property("ADBE Noise-0002").setValue(0); } catch(err){}
}

// caption pair: small tracked CAPS line + huge serif-italic ghost word behind it
// ty shifts the whole text block vertically (per-scene composition variety);
// both layers fade out in the last beat (pOut) so cuts land as intentional beats.
function _srtCaps(comp, dur, ctrl, pre, capsStr, serifStr, tIn, ty) {
    var w = comp.width, h = comp.height;
    ty = ty || 0;
    // ghost serif word (behind, big, breathing)
    if (serifStr) {
        var gh = comp.layers.addText(serifStr);
        gh.inPoint = comp.time; gh.outPoint = comp.time + dur;
        var gd = gh.property("Source Text").value;
        // fit long phrases; ALWAYS set tracking explicitly — addText inherits the
        // character-panel state from the last text layer (e.g. caps tracking 140)
        gd.fontSize = Math.round(Math.min(w*0.165, w*1.72/serifStr.length));
        gd.fillColor = [0.93,0.91,0.86];
        try { gd.font = "Georgia-Italic"; } catch(err){}
        try { gd.tracking = 60; } catch(err){}
        try { gd.justification = ParagraphJustification.LEFT_JUSTIFY; } catch(err){}
        gh.property("Source Text").setValue(gd);
        gh.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
            "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
        gh.parent = ctrl;
        gh.property("ADBE Transform Group").property("ADBE Position").setValue([0, h*0.012 + ty]);
        var ghb = gh.Effects.addProperty("ADBE Gaussian Blur 2");
        ghb.property(1).expression = pre + "var p=Math.max(0,Math.min(1,(t-"+tIn+")/0.9)); var e=eo3(p); " + (w*0.05) + "*(1-e) + " + (w*0.006) + ";";
        gh.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+tIn+")/1.2)); var e=eo3(p); var s=108-8*e + t*0.8; [s,s];";
        gh.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+tIn+")/0.8)); eo3(p)*20*(1-Math.min(1,pOut*1.5));";
    }
    // small caps caption (on top); optional — some scenes are ghost-word only
    if (!capsStr || !capsStr.length) return null;
    var cp = comp.layers.addText(capsStr.toUpperCase());
    cp.inPoint = comp.time; cp.outPoint = comp.time + dur;
    var cd = cp.property("Source Text").value;
    // auto-fit long caps lines (tracked caps char ~= 0.78*fs)
    cd.fontSize = Math.round(Math.min(w*0.041, w*1.15/capsStr.length));
    cd.fillColor = [0.95,0.94,0.91];
    try { cd.font = "SegoeUI-Semibold"; } catch(err){}
    try { cd.tracking = 140; } catch(err){}
    try { cd.justification = ParagraphJustification.LEFT_JUSTIFY; } catch(err){}
    cp.property("Source Text").setValue(cd);
    cp.property("ADBE Transform Group").property("ADBE Anchor Point").expression =
        "var r=sourceRectAtTime(time,false); [r.left+r.width/2, r.top+r.height/2];";
    cp.parent = ctrl;
    var capT = tIn + 0.18;
    cp.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+capT+")/0.7)); var e=eo3(p); [0, " + (-h*0.055 + ty) + " + " + (h*0.014) + "*(1-e)];";
    var cpb = cp.Effects.addProperty("ADBE Gaussian Blur 2");
    cpb.property(1).expression = pre + "var p=Math.max(0,Math.min(1,(t-"+capT+")/0.6)); (1-eo3(p))*" + (w*0.02) + ";";
    cp.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+capT+")/0.55)); eo3(p)*92*(1-Math.min(1,pOut*1.5));";
    return cp;
}

// trader motif atmosphere add-on: ghostly candlesticks in the fog + rising trend glow.
// Deliberately dim/blurred — reads as cinema, not as a chart UI.
function _srtTraderFx(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var cd = comp.layers.addShape(); cd.name="Ghost Candles"; cd.inPoint=comp.time; cd.outPoint=comp.time+dur;
    // uptrend silhouette: [xFrac, centerYFrac, bodyHFrac, up?]
    var C = [[-0.36,0.30,0.09,1],[-0.27,0.27,0.06,0],[-0.18,0.24,0.11,1],[-0.09,0.19,0.07,1],
             [0.00,0.16,0.05,0],[0.09,0.12,0.10,1],[0.18,0.07,0.08,1],[0.27,0.03,0.06,0],[0.36,-0.03,0.12,1]];
    var up=[0.38,0.56,0.44], dn=[0.56,0.38,0.34];
    for (var i=0;i<C.length;i++){
        var col = C[i][3] ? up : dn;
        var g = cd.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var body = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        body.property("ADBE Vector Rect Size").setValue([w*0.030, h*C[i][2]]);
        var wick = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        wick.property("ADBE Vector Rect Size").setValue([w*0.005, h*C[i][2]*1.7]);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
        g.property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([w*C[i][0], h*C[i][1]]);
    }
    var cb = cd.Effects.addProperty("ADBE Gaussian Blur 2"); cb.property(1).setValue(w*0.016);
    try { cd.blendingMode = BlendingMode.ADD; } catch(err){}
    cd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    cd.parent = ctrl;
    cd.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "[Math.sin(time*0.3)*" + (w*0.008) + ", " + (h*0.06) + " - t*" + (h*0.008) + "];";
    cd.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.0)); 15*a;";
    // rising trend glow line cutting through the fog
    var tr = comp.layers.addShape(); tr.name="Trend Glow"; tr.inPoint=comp.time; tr.outPoint=comp.time+dur;
    var tg = tr.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var trc = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    trc.property("ADBE Vector Rect Size").setValue([w*1.1, h*0.005]);
    var trf = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    trf.property("ADBE Vector Fill Color").setValue([0.85,0.66,0.42,1]);
    var trb = tr.Effects.addProperty("ADBE Gaussian Blur 2"); trb.property(1).setValue(w*0.025);
    try { tr.blendingMode = BlendingMode.ADD; } catch(err){}
    tr.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tr.parent = ctrl;
    tr.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-22);
    tr.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var e=eo3(Math.min(1,t/(dur*0.95))); [" + (w*0.0) + ", " + (h*0.16) + " - e*" + (h*0.10) + "];";
    tr.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.2)); (10+2*Math.sin(time*0.6))*a;";
    // warm backlight above the chart + glowing tip riding the trend line's end
    var thal = _srtSoftLight(comp, dur, "Trend Backlight", [0.62,0.50,0.34], w*0.28, w*0.28, w*0.22);
    thal.parent = ctrl; thal.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.15, -h*0.05]);
    thal.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.9)); (10+2*Math.sin(time*1.3))*a;";
    var tip = comp.layers.addShape(); tip.name="Trend Tip"; tip.inPoint=comp.time; tip.outPoint=comp.time+dur;
    var tpg = tip.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tpe = tpg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    tpe.property("ADBE Vector Ellipse Size").setValue([w*0.028, w*0.028]);
    var tpf = tpg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    tpf.property("ADBE Vector Fill Color").setValue([0.96,0.80,0.52,1]);
    _uiGlowFx(tip, w*0.03, 0.9);
    try { tip.blendingMode = BlendingMode.ADD; } catch(err){}
    tip.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tip.parent = ctrl;
    tip.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var e=eo3(Math.min(1,t/(dur*0.95))); var ly=" + (h*0.16) + " - e*" + (h*0.10) + "; [" + (w*0.40) + ", ly - " + (w*0.01) + "];";
    tip.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.6)/0.5)); (48+10*Math.sin(time*2.8))*a*(1-Math.min(1,pOut*1.2));";
}

// meaning-matched ghost visual per scene — dim, blurred, cinematic, and ALIVE:
// every kind has its own build/loop animation (the candle-chart quality bar).
// kind: playcard|stairs|film|paper|manual|dots|bulb|spark|frame|strokes|books|eye
function _srtGhostFx(comp, dur, ctrl, pre, kind, fxv) {
    var w = comp.width, h = comp.height;
    var GHW = [0.58,0.50,0.40];   // warm dim ghost — same family as the fog, never chalk-white
    var L = comp.layers.addShape(); L.name = "Ghost " + kind;
    L.inPoint = comp.time; L.outPoint = comp.time + dur;
    function grp(){ return L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); }
    function gv(g){ return g.property("ADBE Vectors Group"); }
    function gt(g){ return g.property("ADBE Vector Transform Group"); }
    function rect(g, rw, rh, x, y, rnd){ var r=gv(g).addProperty("ADBE Vector Shape - Rect"); r.property("ADBE Vector Rect Size").setValue([rw,rh]); r.property("ADBE Vector Rect Position").setValue([x,y]); if(rnd) r.property("ADBE Vector Rect Roundness").setValue(rnd); return r; }
    function ell(g, d1, d2, x, y){ var e=gv(g).addProperty("ADBE Vector Shape - Ellipse"); e.property("ADBE Vector Ellipse Size").setValue([d1,d2]); e.property("ADBE Vector Ellipse Position").setValue([x,y]); return e; }
    function fill(g, col){ var f=gv(g).addProperty("ADBE Vector Graphic - Fill"); f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]); }
    function stroke(g, col, sw){ var s=gv(g).addProperty("ADBE Vector Graphic - Stroke"); s.property("ADBE Vector Stroke Color").setValue([col[0],col[1],col[2],1]); s.property("ADBE Vector Stroke Width").setValue(sw); s.property("ADBE Vector Stroke Line Cap").setValue(2); }
    function path(g, verts, closed){ var p=gv(g).addProperty("ADBE Vector Shape - Group"); var sh=new Shape(); sh.vertices=verts; sh.closed=!!closed; p.property("ADBE Vector Shape").setValue(sh); }
    function trim(g, delay, dd){ var tr=gv(g).addProperty("ADBE Vector Filter - Trim"); tr.property("ADBE Vector Trim End").expression = pre + "var p=Math.max(0,Math.min(1,(t-"+delay+")/"+dd+")); eo3(p)*100;"; return tr; }
    // staggered grow-from-bottom for a group whose shape bottom sits at yBot
    function growUp(g, yBot, d){ gt(g).property("ADBE Vector Anchor").setValue([0,yBot]); gt(g).property("ADBE Vector Position").setValue([0,yBot]);
        gt(g).property("ADBE Vector Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.5)); var e=ob(p); [100, e*100];"; }
    var yPos = h*0.24, op = 12, bl = w*0.013;

    if (kind === "playcard") {
        // ring pulses, triangle pops, progress bar fills & STALLS (the "no tutorial" beat)
        var pcb = grp(); rect(pcb, w*0.20, w*0.010, 0, w*0.085, w*0.005); fill(pcb, GHW);
        gt(pcb).property("ADBE Vector Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.7)/1.1)); [Math.min(42,eo3(p)*100), 100];";
        var pct = grp(); rect(pct, w*0.20, w*0.010, 0, w*0.085, w*0.005); stroke(pct, GHW, w*0.002);
        var g1 = grp(); ell(g1, w*0.10, w*0.10, 0, -w*0.01); stroke(g1, GHW, w*0.007);
        gt(g1).property("ADBE Vector Scale").expression = pre + "var s=100+3*Math.sin(time*2.2); [s,s];";
        var g1t = grp(); path(g1t, [[-w*0.014,-w*0.032],[-w*0.014,w*0.012],[w*0.024,-w*0.01]], true); fill(g1t, GHW);
        gt(g1t).property("ADBE Vector Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.45)/0.4)); var e=ob(p); [e*100,e*100];";
        var g2 = grp(); rect(g2, w*0.36, w*0.26, 0, 0, w*0.02); stroke(g2, GHW, w*0.005);
        trim(g2, 0.15, 0.7);
    }
    else if (kind === "stairs") {
        // steps BUILD one by one, rising from their base
        for (var i=0;i<4;i++){
            var sgi = grp(); var bh2 = w*0.06*(i+1);
            rect(sgi, w*0.085, bh2, -w*0.15+i*w*0.10, -bh2/2, 3); fill(sgi, GHW);
            growUp(sgi, 0, 0.15+i*0.18);
        }
    }
    else if (kind === "film") {
        // sprocket holes scroll like running film
        var hg = grp();
        for (var f2=0;f2<8;f2++){ rect(hg, w*0.024, w*0.018, -w*0.28+f2*w*0.08, -w*0.055, 2); rect(hg, w*0.024, w*0.018, -w*0.28+f2*w*0.08, w*0.055, 2); }
        fill(hg, [0.04,0.04,0.05]);
        // NOTE: set the scroll expression NOW — adding the next group invalidates hg
        gt(hg).property("ADBE Vector Position").expression =
            pre + "[ " + (fxv ? "-" : "") + "(t*"+(w*0.045)+") % "+(w*0.08)+", 0];";
        var fg2 = grp(); rect(fg2, w*0.52, w*0.16, 0, 0, 4); fill(fg2, GHW);
        op = 13;
        if (fxv) L.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-9);
    }
    else if (kind === "paper") {
        // sheet floats down swaying like a falling leaf
        var pg2 = grp(); rect(pg2, w*0.24, w*0.32, 0, 0, 3); fill(pg2, [0.62,0.57,0.48]);
        var lg2 = grp();
        for (var l2=0;l2<4;l2++) rect(lg2, w*0.15, w*0.006, -w*0.01, -w*0.09+l2*w*0.05, 2);
        fill(lg2, [0.35,0.34,0.31]);
        L.property("ADBE Transform Group").property("ADBE Rotate Z").expression = pre + "6 + 7*Math.sin(t*1.6);";
        op = 13;
        var pHalo = _srtSoftLight(comp, dur, "Paper Backlight", [0.78,0.64,0.44], w*0.22, w*0.26, w*0.20);
        pHalo.parent = ctrl; pHalo.property("ADBE Transform Group").property("ADBE Position").setValue([0, h*0.02]);
        pHalo.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a2=Math.max(0,Math.min(1,t/0.8)); (13+3*Math.sin(time*1.6))*a2;";
        try { pHalo.moveAfter(L); } catch(e5){}
    }
    else if (kind === "manual") {
        // book OPENS: pages rotate apart once
        var m1 = grp(); path(m1, [[-w*0.30,0],[-w*0.02,-w*0.05],[-w*0.02,w*0.16],[-w*0.30,w*0.21]], true); fill(m1, GHW);
        gt(m1).property("ADBE Vector Rotation").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.35)/0.8)); -10*(1-eo3(p));";
        var m2 = grp(); path(m2, [[w*0.30,0],[w*0.02,-w*0.05],[w*0.02,w*0.16],[w*0.30,w*0.21]], true); fill(m2, [0.48,0.43,0.36]);
        gt(m2).property("ADBE Vector Rotation").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.35)/0.8)); 10*(1-eo3(p));";
        var m3 = grp(); path(m3, [[0,-w*0.05],[0,w*0.16]], false); stroke(m3, [0.5,0.48,0.43], w*0.004);
        op = 13;
        var bHalo = _srtSoftLight(comp, dur, "Book Light", [0.80,0.66,0.44], w*0.14, w*0.10, w*0.13);
        bHalo.parent = ctrl; bHalo.property("ADBE Transform Group").property("ADBE Position").setValue([0, h*0.06]);
        bHalo.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a2=Math.max(0,Math.min(1,(t-0.5)/0.7)); (16+4*Math.sin(time*1.8))*eo3(a2);";
    }
    else if (kind === "dots") {
        // ellipsis types itself: glowing orbs pop in sequence, keep breathing
        _uiGlowFx(L, w*0.03, 0.85);
        for (var d2=0;d2<3;d2++){
            var dg2 = grp(); ell(dg2, w*0.045, w*0.045, 0, 0); fill(dg2, [0.92,0.80,0.58]);
            gt(dg2).property("ADBE Vector Position").setValue([-w*0.12+d2*w*0.12, 0]);
            gt(dg2).property("ADBE Vector Scale").expression =
                pre + "var p=Math.max(0,Math.min(1,(t-"+(0.3+d2*0.28)+")/0.35)); var e=ob(p)*(1+0.06*Math.sin(time*2.5+"+d2+")); [e*100,e*100];";
        }
    }
    else if (kind === "bulb") {
        // flickers ON, then rays bloom out
        var b1 = grp(); ell(b1, w*0.15, w*0.15, 0, 0); fill(b1, [0.72,0.60,0.42]);
        var b2 = grp(); rect(b2, w*0.055, w*0.045, 0, w*0.095, 3); fill(b2, [0.55,0.50,0.42]);
        var b3 = grp();
        for (var r3=0;r3<5;r3++){ var an=(-140+r3*70)*Math.PI/180; path(b3, [[Math.cos(an)*w*0.10, Math.sin(an)*w*0.10],[Math.cos(an)*w*0.145, Math.sin(an)*w*0.145]], false); }
        stroke(b3, [0.72,0.60,0.42], w*0.006);
        gt(b3).property("ADBE Vector Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-1.0)/0.5)); var e=ob(p); [e*100,e*100];";
        op = 18;
        L.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var fl=(t<0.9)?(Math.sin(t*31)>0.2?1:0.25):1; var a=Math.max(0,Math.min(1,(t-0.2)/0.3)); "+op+"*a*fl*(1+0.15*Math.sin(time*1.7));";
        var iHalo = _srtSoftLight(comp, dur, "Idea Light", [0.82,0.66,0.42], w*0.34, w*0.34, w*0.28);
        iHalo.parent = ctrl; iHalo.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.16]);
        iHalo.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var fl=(t<0.9)?(Math.sin(t*31)>0.2?1:0.1):1; var a2=Math.max(0,Math.min(1,(t-0.2)/0.3)); (17+3*Math.sin(time*1.5))*a2*fl;";
        try { iHalo.moveAfter(L); } catch(e6){}
    }
    else if (kind === "spark") {
        // rays shoot outward + slow rotation
        var sp = grp();
        for (var s3=0;s3<6;s3++){ var a3=s3*Math.PI/3; path(sp, [[Math.cos(a3)*w*0.03, Math.sin(a3)*w*0.03],[Math.cos(a3)*w*0.10, Math.sin(a3)*w*0.10]], false); }
        stroke(sp, [0.70,0.60,0.44], w*0.008);
        trim(sp, 0.2, 0.5);
        L.property("ADBE Transform Group").property("ADBE Rotate Z").expression = pre + "t*18;";
        op = 18;
        var sFl = _srtSoftLight(comp, dur, "Spark Flash", [0.85,0.72,0.48], w*0.20, w*0.20, w*0.17);
        sFl.parent = ctrl; sFl.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.20]);
        sFl.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var burst=Math.max(0,Math.min(1,(t-0.2)/0.15)) * Math.max(0,1-(t-0.35)/0.5); var st=Math.max(0,Math.min(1,(t-0.6)/0.4)); (28*burst + (11+3*Math.sin(time*1.7))*st);";
        try { sFl.moveAfter(L); } catch(e8){}
    }
    else if (kind === "frame") {
        // frame DRAWS itself, then the mountain line draws inside
        var fr = grp(); rect(fr, w*0.36, w*0.28, 0, 0, 2); stroke(fr, GHW, w*0.010);
        trim(fr, 0.15, 0.8);
        var fr2 = grp(); path(fr2, [[-w*0.10,w*0.08],[-w*0.02,-w*0.02],[w*0.05,w*0.05],[w*0.10,w*0.00],[w*0.14,w*0.08]], false); stroke(fr2, GHW, w*0.006);
        trim(fr2, 0.75, 0.6);
        var cnv = _srtSoftLight(comp, dur, "Canvas Light", [0.70,0.58,0.40], w*0.30, w*0.22, w*0.16);
        cnv.parent = ctrl; cnv.property("ADBE Transform Group").property("ADBE Position").setValue([0, 0]);
        cnv.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a2=Math.max(0,Math.min(1,(t-0.5)/0.8)); (12+2*Math.sin(time*1.4))*eo3(a2);";
        try { cnv.moveAfter(L); } catch(e9){}
    }
    else if (kind === "strokes") {
        // practice strokes draw one after another
        var st = grp();
        for (var s4=0;s4<4;s4++) path(st, [[-w*0.12+s4*w*0.075, w*0.05],[-w*0.04+s4*w*0.075, -w*0.05]], false);
        stroke(st, GHW, w*0.009);
        trim(st, 0.1, 0.85);
        // pen tip: bright dot gliding along each stroke in sync with the trim draw
        var pen = comp.layers.addShape(); pen.name="Pen Tip"; pen.inPoint=comp.time; pen.outPoint=comp.time+dur;
        var png = pen.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var pne = png.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        pne.property("ADBE Vector Ellipse Size").setValue([w*0.022, w*0.022]);
        var pnf = png.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        pnf.property("ADBE Vector Fill Color").setValue([0.95,0.83,0.58,1]);
        _uiGlowFx(pen, w*0.025, 0.9);
        try { pen.blendingMode = BlendingMode.ADD; } catch(e10){}
        pen.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        pen.parent = ctrl;
        // stroke i local start/end scaled by layer scale 220% + layer y (h*0.12)
        pen.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var sc=2.2; var y0=" + (h*0.12) + "; var T=Math.max(0,Math.min(1,(t-0.1)/0.85)); var e=eo3(T); var q=e*4; var i=Math.min(3,Math.floor(q)); var f=q-i; " +
            "var sx=(-0.12+i*0.075)*" + w + "*sc, sy=0.05*" + w + "*sc + y0; var ex=(-0.04+i*0.075)*" + w + "*sc, ey=-0.05*" + w + "*sc + y0; " +
            "[sx+(ex-sx)*f, sy+(ey-sy)*f];";
        pen.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var T=Math.max(0,Math.min(1,(t-0.1)/0.85)); (T>0&&T<1)?85:0;";
    }
    else if (kind === "books") {
        // books DROP into the stack one by one
        var rdl = _srtSoftLight(comp, dur, "Reading Light", [0.78,0.64,0.42], w*0.16, h*0.28, w*0.15);
        rdl.parent = ctrl; rdl.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.01, -h*0.02]);
        rdl.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a2=Math.max(0,Math.min(1,(t-0.3)/0.7)); (13+2*Math.sin(time*1.6))*eo3(a2);";
        var bks = [[w*0.30, w*0.05], [w*0.26, 0], [w*0.28, -w*0.05]];
        for (var b4=0;b4<3;b4++){
            var bg4 = grp(); rect(bg4, bks[b4][0], w*0.045, 0, 0, 3); fill(bg4, GHW);
            gt(bg4).property("ADBE Vector Position").expression =
                pre + "var p=Math.max(0,Math.min(1,(t-"+(0.25+b4*0.25)+")/0.45)); var e=ob(p); ["+(b4===1?-w*0.015:(b4===2?w*0.01:0))+", "+bks[b4][1]+" - (1-e)*"+(h*0.05)+"];";
        }
    }
    else if (kind === "eye") {
        // eye BLINKS and the iris glances around
        var spt = _srtSoftLight(comp, dur, "Eye Spotlight", [0.72,0.62,0.46], w*0.20, h*0.30, w*0.17);
        spt.parent = ctrl; spt.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.30]);
        spt.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a2=Math.max(0,Math.min(1,(t-0.25)/0.7)); (12+2*Math.sin(time*1.3))*eo3(a2);";
        var e1 = grp(); ell(e1, w*0.34, w*0.17, 0, 0); stroke(e1, GHW, w*0.008);
        var e2 = grp(); ell(e2, w*0.085, w*0.085, 0, 0); fill(e2, GHW);
        gt(e2).property("ADBE Vector Position").expression = pre + "[Math.sin(t*1.1)*"+(w*0.05)+", 0];";
        L.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var bk=Math.pow(Math.max(0,Math.sin(t*2.2+1.2)),40); var e=eo3(Math.min(1,(t-0.2)/0.8)); var s=94+6*e; [s, s*(1-0.85*bk)];";
        op = 16;
    }

    var gb = L.Effects.addProperty("ADBE Gaussian Blur 2"); gb.property(1).setValue(bl);
    try { L.blendingMode = BlendingMode.ADD; } catch(err){}
    L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    L.parent = ctrl;
    // COMPOSITION MAP — the visual OWNS the frame (reference b-roll feel), not a
    // small icon parked at the bottom: [layerScale%, yFrac of h]. Text reads over it.
    var LAY = { playcard:[210,-0.02], stairs:[240,0.14], film:[230,0.10], paper:[240,0.0],
                manual:[220,0.06], dots:[180,0.18], bulb:[200,-0.16], spark:[220,-0.20],
                frame:[220,0.0], strokes:[220,0.12], books:[220,0.16], eye:[200,-0.18] };
    var lay = LAY[kind] || [160,0.18];
    var bs = lay[0]; yPos = h*lay[1];
    L.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "[Math.sin(time*0.3)*" + (w*0.010) + ", " + yPos + " + Math.cos(time*0.24)*" + (h*0.006) + " - t*" + (h*0.006) + "];";
    if (kind==="eye") {
        L.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var bk=Math.pow(Math.max(0,Math.sin(t*2.2+1.2)),40); var e=eo3(Math.min(1,(t-0.2)/0.8)); var s="+bs+"*(0.94+0.06*e); [s, s*(1-0.85*bk)];";
    } else {
        L.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var e=eo3(Math.min(1,(t-0.2)/1.0)); var s="+bs+"*(0.94+0.06*e); [s,s];";
    }
    if (kind!=="bulb")
        L.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,(t-0.25)/0.9)); " + op + "*eo3(a)*(1-Math.min(1,pOut*1.3));";
    return L;
}

// full arsacre-style scene: BG + atmosphere + caption + post. One call per SRT line.
// opts: {trader:true} = ghost candlesticks + trend glow; {fx:"kind"} = meaning visual.
// S1 hero visual — a glowing play ring in the dark (the reference "glowing circle"
// energy): warm backlight halo, chromatic double-rim ring, triangle; the light
// FLICKERS AND DIES at the negation beat ("no tutorial") leaving a faint ember.
function _srtFx_playGlow(comp, dur, ctrl, pre, alt) {
    // alt=true (S5 "did they watch a tutorial?"): ring off-centre + smaller, and it
    // does NOT die — it flickers uncertainly (a question, not a verdict)
    var w = comp.width, h = comp.height;
    var cx0 = alt ? w*0.13 : 0;
    var rsc = alt ? 0.78 : 1.0;
    var cy = -h*0.215;                // ring sits clearly above the text block
    // 1) backlight halo — soft breathing light source behind everything (mask glow)
    var halo = _srtSoftLight(comp, dur, "S1 Backlight", [0.80,0.62,0.40], w*0.30, w*0.30, w*0.26);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([cx0, cy]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression = alt
        ? pre + "var a=Math.max(0,Math.min(1,t/0.7)); (13+3*Math.sin(time*1.4))*a;"
        : pre + "var a=Math.max(0,Math.min(1,t/0.7)); var die=Math.max(0,Math.min(1,(t-1.35)/0.5)); (14+3*Math.sin(time*1.4))*a*(1-0.8*eo3(die));";
    // 2) the ring — chromatic double rim (warm outer + cool inner, slightly offset)
    var ring = comp.layers.addShape(); ring.name="S1 Play Ring"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur;
    function rgrp(dx, dy, dia, col, sw){
        var g = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var e = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        e.property("ADBE Vector Ellipse Size").setValue([dia, dia]);
        e.property("ADBE Vector Ellipse Position").setValue([dx, dy]);
        var s = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        s.property("ADBE Vector Stroke Color").setValue([col[0],col[1],col[2],1]);
        s.property("ADBE Vector Stroke Width").setValue(sw);
        return g;
    }
    // triangle first (renders on top), then cool rim, then warm rim below it
    var tg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tp = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var tsh = new Shape(); var a = w*0.055*rsc;
    tsh.vertices = [[-a*0.45,-a*0.62],[-a*0.45,a*0.62],[a*0.72,0]]; tsh.closed = true;
    tp.property("ADBE Vector Shape").setValue(tsh);
    var tf = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    tf.property("ADBE Vector Fill Color").setValue([0.93,0.86,0.74,1]);
    tg.property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([a*0.1, 0]);
    rgrp( w*0.004*rsc, w*0.003*rsc, w*0.335*rsc, [0.45,0.68,0.75], w*0.006);   // cool rim, offset
    rgrp(0, 0, w*0.34*rsc, [0.93,0.66,0.40], w*0.010);                  // warm rim
    var rbl = ring.Effects.addProperty("ADBE Gaussian Blur 2"); rbl.property(1).setValue(w*0.006);
    _uiGlowFx(ring, w*0.035, 0.75);
    try { ring.blendingMode = BlendingMode.ADD; } catch(e){}
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ring.parent = ctrl; ring.property("ADBE Transform Group").property("ADBE Position").setValue([cx0, cy]);
    ring.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,t/0.8)); var e=eo3(p); var s=(88+12*e)*(1+0.012*Math.sin(time*2.1)); [s,s];";
    // glow-on -> pulse -> FLICKER-DIE at 1.35s -> faint ember
    ring.property("ADBE Transform Group").property("ADBE Opacity").expression = alt
        ? pre + "var on=Math.max(0,Math.min(1,t/0.55)); var base=eo3(on)*80; " +
          "if((t>1.1&&t<1.45)||(t>2.2&&t<2.5)){ var fl=(Math.sin(t*38)>-0.3)?1:0.35; base*=fl; } " +
          "base*(1-Math.min(1,pOut*1.2));"
        : pre + "var on=Math.max(0,Math.min(1,t/0.55)); var base=eo3(on)*88; " +
          "if(t>1.35 && t<1.8){ var fl=(Math.sin(t*46)>-0.15)?1:0.15; base*=fl*(1-(t-1.35)/0.45*0.75);} " +
          "if(t>=1.8){ base=10; } base*(1-Math.min(1,pOut*1.2));";
    // 3) under-glow floor reflection — grounds the ring in the scene (mask glow)
    var refl = _srtSoftLight(comp, dur, "S1 Floor Glow", [0.85,0.62,0.38], w*0.25, w*0.035, w*0.055);
    refl.parent = ctrl; refl.property("ADBE Transform Group").property("ADBE Position").setValue([cx0, h*0.30]);
    refl.property("ADBE Transform Group").property("ADBE Opacity").expression = alt
        ? pre + "var a=Math.max(0,Math.min(1,t/0.8)); 11*a;"
        : pre + "var a=Math.max(0,Math.min(1,t/0.8)); var die=Math.max(0,Math.min(1,(t-1.35)/0.5)); 12*a*(1-0.8*eo3(die));";
}

// REALISTIC PAPER (S7): a billowing sheet — Bezier Warp curl (raised corners,
// sagging middle) + Wave Warp cloth ripple + Ramp shading. Falls swaying.
function _srtFx_paperReal(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var halo = _srtSoftLight(comp, dur, "Paper Backlight", [0.78,0.64,0.44], w*0.24, w*0.28, w*0.21);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([0, h*0.01]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.8)); (14+3*Math.sin(time*1.6))*a;";
    var pw = Math.round(w*0.44), ph = Math.round(w*0.56);
    var pap = comp.layers.addSolid([0.90,0.88,0.82], "Real Paper", pw, ph, 1, comp.duration);
    pap.inPoint = comp.time; pap.outPoint = comp.time + dur;
    // shading: diagonal ramp = lit top-left, shadowed bottom-right (3D read)
    try {
        var rp = pap.Effects.addProperty("ADBE Ramp");
        rp.property("ADBE Ramp-0001").expression = pre + "[" + (pw*0.18) + " + " + (pw*0.10) + "*Math.sin(time*0.55), " + (ph*0.10) + " + " + (ph*0.06) + "*Math.sin(time*0.7)];";
        rp.property("ADBE Ramp-0002").setValue([0.94,0.92,0.86,1]);
        rp.property("ADBE Ramp-0003").setValue([pw*0.95, ph*1.0]);
        rp.property("ADBE Ramp-0004").setValue([0.52,0.50,0.45,1]);
    } catch(eR){}
    // curl: corners lifted, centre sags — animated billow on the tangents
    try {
        var bw = pap.Effects.addProperty("ADBE BEZMESH");
        bw.property("Top Left Vertex").expression = pre + "[" + (-pw*0.10) + " + 9*Math.sin(time*1.1), " + (ph*0.14) + " + 11*Math.sin(time*0.9)];";
        bw.property("Top Right Vertex").expression = pre + "[" + (pw*1.08) + " + 9*Math.sin(time*1.0+1.3), " + (-ph*0.06) + " + 11*Math.sin(time*1.2+0.7)];";
        bw.property("Left Tangent").setValue([pw*0.28, -ph*0.20]);
        bw.property("Right Tangent").setValue([pw*0.72, ph*0.10]);
        bw.property("Bottom Left Vertex").expression = pre + "[" + (pw*0.06) + " + 6*Math.sin(time*1.3+2.1), " + (ph*0.96) + " + 8*Math.sin(time*1.05+1.7)];";
        bw.property("Bottom Right Vertex").expression = pre + "[" + (pw*0.88) + " + 6*Math.sin(time*0.95+0.4), " + (ph*1.08) + " + 8*Math.sin(time*1.15+2.6)];";
    } catch(eB){}
    // cloth ripple
    try {
        var wv = pap.Effects.addProperty("ADBE Wave Warp");
        wv.property("Wave Height").setValue(10);
        wv.property("Wave Width").setValue(68);
        wv.property("Wave Speed").setValue(0.55);
    } catch(eW){}
    // second CROSS-wave (90°) — interference makes the flow rich, not repetitive
    try {
        var wv2 = pap.Effects.addProperty("ADBE Wave Warp");
        wv2.property("Wave Height").setValue(5);
        wv2.property("Wave Width").setValue(46);
        wv2.property("Wave Direction").setValue(90);
        wv2.property("Wave Speed").setValue(0.34);
    } catch(eW2){}
    // paper tooth: fine mono noise over the shading
    try {
        var nz7 = pap.Effects.addProperty("ADBE Noise");
        nz7.property("ADBE Noise-0001").setValue(4);
        nz7.property("ADBE Noise-0002").setValue(0);
    } catch(eN){}
    // soft shadow that follows the WARPED silhouette (grounds the sheet)
    try {
        var ds7 = pap.Effects.addProperty("ADBE Drop Shadow");
        ds7.property("ADBE Drop Shadow-0002").setValue(120);          // opacity ~47%
        ds7.property("ADBE Drop Shadow-0003").setValue(2.36);         // direction rad ~135deg
        ds7.property("ADBE Drop Shadow-0004").setValue(w*0.022);      // distance
        ds7.property("ADBE Drop Shadow-0005").setValue(w*0.05);       // softness
    } catch(eD){}
    var pb = pap.Effects.addProperty("ADBE Gaussian Blur 2"); pb.property(1).setValue(w*0.0035);
    pap.parent = ctrl;
    // gentle 3D drift: the sheet tilts in perspective as it falls
    try {
        pap.threeDLayer = true;
        pap.property("ADBE Transform Group").property("ADBE Rotate X").expression = pre + "8*Math.sin(t*0.9+0.6);";
        pap.property("ADBE Transform Group").property("ADBE Rotate Y").expression = pre + "13*Math.sin(t*0.7);";
    } catch(e3){}
    // falls slowly, swaying like a leaf; slight rotation drift
    pap.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,t/(dur*0.95))); [Math.sin(t*1.1)*" + (w*0.03) + ", " + (h*0.135) + " + p*" + (h*0.07) + "];";
    pap.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "5 + 7*Math.sin(t*1.25);";
    pap.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var a=eo3(Math.min(1,(t-0.15)/0.8)); var s2=88+12*a; [s2,s2];";
    pap.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.2)/0.7)); 64*eo3(a)*(1-Math.min(1,pOut*1.2));";
}

// S2 hero — dark stair slabs build against a warm backlight; a glowing orb
// climbs them on its own ("teach yourself"): silhouette-vs-light, reference feel.
function _srtFx_stairsGlow(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var halo = _srtSoftLight(comp, dur, "S2 Backlight", [0.72,0.56,0.36], w*0.30, w*0.30, w*0.24);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.16, -h*0.04]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.7)); (13+3*Math.sin(time*1.5))*a;";
    // realistic 2.5D stone steps: each has a lit TOP face, a shaded SIDE face and
    // a dark FRONT face (solid, not translucent) — perspective depth dx/dy
    var L = comp.layers.addShape(); L.name="S2 Stairs"; L.inPoint=comp.time; L.outPoint=comp.time+dur;
    var n=4, baseY=h*0.30, tops=[];
    var hw = w*0.0925, dx = w*0.050, dy = w*0.032;
    function stepFace(verts, col, x, d){
        var g = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var pp = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
        var sh = new Shape(); sh.vertices = verts; sh.closed = true;
        pp.property("ADBE Vector Shape").setValue(sh);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
        var gt2 = g.property("ADBE Vector Transform Group");
        gt2.property("ADBE Vector Anchor").setValue([x, baseY]);
        gt2.property("ADBE Vector Position").setValue([x, baseY]);
        gt2.property("ADBE Vector Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.5)); var e=ob(p); [100, e*100];";
    }
    for (var i=0;i<n;i++){
        var bh2 = h*0.075*(i+1); var x = -w*0.30 + i*w*0.20;
        var yT = baseY - bh2, d = 0.12+i*0.16;
        // TOP face (lit) — drawn first = renders on top
        stepFace([[x-hw,yT],[x+hw,yT],[x+hw+dx,yT-dy],[x-hw+dx,yT-dy]], [0.315,0.28,0.235], x, d);
        // SIDE face (right, mid tone)
        stepFace([[x+hw,yT],[x+hw,baseY],[x+hw+dx,baseY-dy],[x+hw+dx,yT-dy]], [0.175,0.16,0.145], x, d);
        // FRONT face (dark, solid)
        stepFace([[x-hw,yT],[x+hw,yT],[x+hw,baseY],[x-hw,baseY]], [0.125,0.115,0.105], x, d);
        tops.push([x, yT]);
    }
    var lb = L.Effects.addProperty("ADBE Gaussian Blur 2"); lb.property(1).setValue(w*0.003);
    L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    L.parent = ctrl;
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.4)); 97*a*(1-Math.min(1,pOut*1.2));";
    // a person CLIMBS the steps toward the light ("teach yourself")
    var LP2 = comp.layers.addShape(); LP2.name="S2 Climber"; LP2.inPoint=comp.time; LP2.outPoint=comp.time+dur;
    var cg2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var CP = [
        [-0.045*w,-0.020*w],
        [-0.055*w,-0.160*w],
        [-0.020*w,-0.245*w],
        [ 0.008*w,-0.238*w],
        [ 0.000*w,-0.275*w],
        [ 0.033*w,-0.325*w],
        [ 0.068*w,-0.272*w],
        [ 0.052*w,-0.238*w],
        [ 0.075*w,-0.160*w],
        [ 0.092*w,-0.100*w],
        [ 0.118*w,-0.135*w],
        [ 0.082*w,-0.058*w],
        [ 0.115*w, 0.010*w],
        [ 0.100*w, 0.100*w],
        [ 0.135*w, 0.115*w],
        [ 0.128*w, 0.135*w],
        [ 0.072*w, 0.132*w],
        [ 0.040*w, 0.050*w],
        [-0.005*w, 0.115*w],
        [-0.022*w, 0.200*w],
        [-0.058*w, 0.212*w],
        [-0.050*w, 0.228*w],
        [-0.078*w, 0.135*w],
        [-0.058*w, 0.040*w]
    ];
    var Z2=[0,0], oC=[], qC=[];
    for (var ci=0; ci<CP.length; ci++){ oC.push([0,0]); qC.push([0,0]); }
    oC[1]=[ 0.008*w,-0.045*w]; qC[1]=[-0.004*w, 0.040*w];
    oC[2]=[ 0.020*w,-0.004*w]; qC[2]=[-0.020*w, 0.010*w];
    oC[4]=[ 0.000*w,-0.022*w]; qC[4]=[ 0.002*w, 0.016*w];
    oC[5]=[ 0.026*w, 0.002*w]; qC[5]=[-0.024*w,-0.002*w];
    oC[6]=[ 0.004*w, 0.018*w]; qC[6]=[ 0.004*w,-0.020*w];
    oC[8]=[ 0.010*w, 0.022*w]; qC[8]=[-0.006*w,-0.018*w];
    var ppC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shC = new Shape(); shC.vertices=CP; shC.outTangents=oC; shC.inTangents=qC; shC.closed=true;
    ppC.property("ADBE Vector Shape").setValue(shC);
    var fC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fC.property("ADBE Vector Fill Color").setValue([0.105,0.098,0.09,1]);
    // warm crown light on head+shoulder (matches the S1 person)
    var ge2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var EC = [[-0.020*w,-0.245*w],[0.000*w,-0.275*w],[0.033*w,-0.325*w],[0.068*w,-0.272*w]];
    var eoC = [[0.010*w,-0.012*w],[0.000*w,-0.022*w],[0.026*w,0.002*w],[0,0]];
    var eqC = [[0,0],[0.002*w,0.016*w],[-0.024*w,-0.002*w],[0.004*w,-0.020*w]];
    var ppE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shE2 = new Shape(); shE2.vertices=EC; shE2.outTangents=eoC; shE2.inTangents=eqC; shE2.closed=false;
    ppE2.property("ADBE Vector Shape").setValue(shE2);
    var stE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    stE2.property("ADBE Vector Stroke Color").setValue([0.52,0.43,0.30,1]);
    stE2.property("ADBE Vector Stroke Width").setValue(w*0.0045);
    stE2.property("ADBE Vector Stroke Line Cap").setValue(2);
    var pb2 = LP2.Effects.addProperty("ADBE Gaussian Blur 2"); pb2.property(1).setValue(w*0.0035);
    LP2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    LP2.parent = ctrl;
    // ascent: pelvis rides the stair diagonal (tops at baseY - h*0.075*(i+1)),
    // with a step bob; settles at the summit breathing
    var x0c = (-0.30*w).toFixed(1), x1c = (0.285*w).toFixed(1);
    var y0c = (h*0.30 - h*0.075 - 0.135*w - 0.016*w).toFixed(1), y1c = (h*0.30 - h*0.30 - 0.135*w - 0.016*w).toFixed(1);
    LP2.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.62)/1.0)); var e=eo3(p); " +
        "var bob=Math.abs(Math.sin(Math.PI*e*3))*" + (h*0.012).toFixed(1) + "*(1-e*0.5); " +
        "[" + x0c + "+(" + x1c + "-" + x0c + ")*e, " + y0c + "+(" + y1c + "-" + y0c + ")*e - bob];";
    LP2.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.62)/1.0)); 7*(1-eo3(p)) + 1.0*Math.sin(time*0.9);";
    LP2.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "[100, 100 + 0.4*Math.sin(time*1.2)];";
    LP2.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.5)/0.4)); 96*eo3(a)*(1-Math.min(1,pOut*1.2));";
}

// climber only (for book-stairs): same figure as S2, path over the book stacks
function _srtFx_stairsClimberOnly(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var LP2 = comp.layers.addShape(); LP2.name="S2 Climber"; LP2.inPoint=comp.time; LP2.outPoint=comp.time+dur;
    var cg2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var CP = [
        [-0.045*w,-0.020*w],[-0.055*w,-0.160*w],[-0.020*w,-0.245*w],[ 0.008*w,-0.238*w],
        [ 0.000*w,-0.275*w],[ 0.033*w,-0.325*w],[ 0.068*w,-0.272*w],[ 0.052*w,-0.238*w],
        [ 0.075*w,-0.160*w],[ 0.092*w,-0.100*w],[ 0.118*w,-0.135*w],[ 0.082*w,-0.058*w],
        [ 0.115*w, 0.010*w],[ 0.100*w, 0.100*w],[ 0.135*w, 0.115*w],[ 0.128*w, 0.135*w],
        [ 0.072*w, 0.132*w],[ 0.040*w, 0.050*w],[-0.005*w, 0.115*w],[-0.022*w, 0.200*w],
        [-0.058*w, 0.212*w],[-0.050*w, 0.228*w],[-0.078*w, 0.135*w],[-0.058*w, 0.040*w]
    ];
    var oC=[], qC=[];
    for (var ci=0; ci<CP.length; ci++){ oC.push([0,0]); qC.push([0,0]); }
    oC[1]=[ 0.008*w,-0.045*w]; qC[1]=[-0.004*w, 0.040*w];
    oC[2]=[ 0.020*w,-0.004*w]; qC[2]=[-0.020*w, 0.010*w];
    oC[4]=[ 0.000*w,-0.022*w]; qC[4]=[ 0.002*w, 0.016*w];
    oC[5]=[ 0.026*w, 0.002*w]; qC[5]=[-0.024*w,-0.002*w];
    oC[6]=[ 0.004*w, 0.018*w]; qC[6]=[ 0.004*w,-0.020*w];
    oC[8]=[ 0.010*w, 0.022*w]; qC[8]=[-0.006*w,-0.018*w];
    var ppC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shC = new Shape(); shC.vertices=CP; shC.outTangents=oC; shC.inTangents=qC; shC.closed=true;
    ppC.property("ADBE Vector Shape").setValue(shC);
    var fC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fC.property("ADBE Vector Fill Color").setValue([0.105,0.098,0.09,1]);
    var ge2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var EC = [[-0.020*w,-0.245*w],[0.000*w,-0.275*w],[0.033*w,-0.325*w],[0.068*w,-0.272*w]];
    var eoC = [[0.010*w,-0.012*w],[0.000*w,-0.022*w],[0.026*w,0.002*w],[0,0]];
    var eqC = [[0,0],[0.002*w,0.016*w],[-0.024*w,-0.002*w],[0.004*w,-0.020*w]];
    var ppE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shE2 = new Shape(); shE2.vertices=EC; shE2.outTangents=eoC; shE2.inTangents=eqC; shE2.closed=false;
    ppE2.property("ADBE Vector Shape").setValue(shE2);
    var stE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    stE2.property("ADBE Vector Stroke Color").setValue([0.52,0.43,0.30,1]);
    stE2.property("ADBE Vector Stroke Width").setValue(w*0.0045);
    stE2.property("ADBE Vector Stroke Line Cap").setValue(2);
    var pb2 = LP2.Effects.addProperty("ADBE Gaussian Blur 2"); pb2.property(1).setValue(w*0.0035);
    LP2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    LP2.parent = ctrl;
    var x0c = (-0.30*w).toFixed(1), x1c = (0.285*w).toFixed(1);
    var y0c = (h*0.30 - h*0.070 - 0.150*w).toFixed(1), y1c = (h*0.30 - h*0.280 - 0.150*w).toFixed(1);
    LP2.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.62)/1.0)); var e=eo3(p); " +
        "var bob=Math.abs(Math.sin(Math.PI*e*3))*" + (h*0.012).toFixed(1) + "*(1-e*0.5); " +
        "[" + x0c + "+(" + x1c + "-" + x0c + ")*e, " + y0c + "+(" + y1c + "-" + y0c + ")*e - bob];";
    LP2.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.62)/1.0)); 7*(1-eo3(p)) + 1.0*Math.sin(time*0.9);";
    LP2.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "[100, 100 + 0.4*Math.sin(time*1.2)];";
    LP2.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.5)/0.4)); 96*eo3(a)*(1-Math.min(1,pOut*1.2));";
}

// S2 ALT A - grand frontal staircase receding to a GLOWING DOORWAY; a small
// back-view figure climbs toward the light.
function _srtFx_stairDoor(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var nS = 6, yBase = h*0.40;
    // GHOST CHART in the background fog (the loved S3 treatment): big, dim,
    // heavily blurred candles floating behind everything
    var bgc = comp.layers.addShape(); bgc.name="BG Chart"; bgc.inPoint=comp.time; bgc.outPoint=comp.time+dur;
    var BC = [[-0.36,-0.16,0.10,1],[-0.19,-0.20,0.07,0],[-0.02,-0.24,0.12,1],[0.16,-0.29,0.08,1],[0.33,-0.34,0.13,1]];
    var upC=[0.38,0.56,0.44], dnC=[0.56,0.38,0.34];
    for (var bi=0;bi<BC.length;bi++){
        var colB = BC[bi][3] ? upC : dnC;
        var gB2 = bgc.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var wrB = gB2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        wrB.property("ADBE Vector Rect Size").setValue([w*0.006, h*BC[bi][2]*1.6]);
        wrB.property("ADBE Vector Rect Position").setValue([w*BC[bi][0], h*BC[bi][1]]);
        var brB = gB2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        brB.property("ADBE Vector Rect Size").setValue([w*0.036, h*BC[bi][2]]);
        brB.property("ADBE Vector Rect Position").setValue([w*BC[bi][0], h*BC[bi][1]]);
        var fB2 = gB2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fB2.property("ADBE Vector Fill Color").setValue([colB[0],colB[1],colB[2],1]);
    }
    var bbl = bgc.Effects.addProperty("ADBE Gaussian Blur 2"); bbl.property(1).setValue(w*0.018);
    try { bgc.blendingMode = BlendingMode.ADD; } catch(e51){}
    bgc.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    bgc.parent = ctrl;
    bgc.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "[Math.sin(time*0.3)*" + '"' + ' + (w*0.008) + ' + '"' + ", -t*" + '"' + ' + (h*0.006) + ' + '"' + "];";
    bgc.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.0)); 14*a*(1-Math.min(1,pOut*1.2));";

    // door glow first (behind the stairs)
    var doorY = yBase - h*0.30;
    var halo = _srtSoftLight(comp, dur, "Door Halo", [0.85,0.68,0.44], w*0.20, w*0.24, w*0.19);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([0, doorY - h*0.03]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.7)); (20+4*Math.sin(time*1.6))*a;";
    var door = comp.layers.addShape(); door.name="Light Door"; door.inPoint=comp.time; door.outPoint=comp.time+dur;
    var dg3 = door.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var dr3 = dg3.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    dr3.property("ADBE Vector Rect Size").setValue([w*0.13, h*0.14]);
    dr3.property("ADBE Vector Rect Roundness").setValue(w*0.004);
    var df3 = dg3.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    df3.property("ADBE Vector Fill Color").setValue([0.95,0.82,0.58,1]);
    var db3 = door.Effects.addProperty("ADBE Gaussian Blur 2"); db3.property(1).setValue(w*0.010);
    try { door.blendingMode = BlendingMode.ADD; } catch(e21){}
    door.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    door.parent = ctrl; door.property("ADBE Transform Group").property("ADBE Position").setValue([0, doorY - h*0.045]);
    door.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.2)/0.5)); (52+5*Math.sin(time*2.1))*eo3(a)*(1-Math.min(1,pOut*1.2));";
    // stairs: bands narrowing upward, lit tops
    var L = comp.layers.addShape(); L.name="Door Stairs"; L.inPoint=comp.time; L.outPoint=comp.time+dur;
    function band(verts, col, d){
        var g = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var pp = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
        var sh = new Shape(); sh.vertices = verts; sh.closed = true;
        pp.property("ADBE Vector Shape").setValue(sh);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
        g.property("ADBE Vector Transform Group").property("ADBE Vector Group Opacity").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.4)); eo3(p)*100;";
    }
    var yCur = yBase;
    for (var k=0;k<nS;k++){
        var w1 = w*(0.46 - k*0.055);          // half-width of this tread front
        var w2 = w*(0.46 - (k+1)*0.055);      // half-width of next (back edge)
        var fh = h*0.040*(1 - k*0.10);        // front face height (foreshortens)
        var td = h*0.026*(1 - k*0.08);        // tread depth on screen
        var yT = yCur - fh;
        var d = 0.10 + k*0.11;
        band([[-w2,yT-td],[w2,yT-td],[w1,yT],[-w1,yT]], [0.30+k*0.012,0.265+k*0.012,0.22+k*0.012], d);
        band([[-w1,yT],[w1,yT],[w1,yCur],[-w1,yCur]], [0.125,0.115,0.105], d);
        yCur = yT - td;
    }
    var lb2 = L.Effects.addProperty("ADBE Gaussian Blur 2"); lb2.property(1).setValue(w*0.003);
    L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    L.parent = ctrl;
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.4)); 97*a*(1-Math.min(1,pOut*1.2));";
    var doorCy = doorY - h*0.045;
    // tiny light sparks drift UP out of the doorway (alive, subtle)
    var sp2 = comp.layers.addShape(); sp2.name="Door Sparks"; sp2.inPoint=comp.time; sp2.outPoint=comp.time+dur;
    var yTopDoor = doorCy - h*0.075;
    var sparks = [[-0.020, 0.0, 1.6],[0.012, 0.5, 2.1],[-0.004, 1.0, 1.4],[0.024, 1.5, 1.8],[-0.028, 2.0, 1.3]];
    for (var sp3=0; sp3<sparks.length; sp3++){
        var gS = sp2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var eS = gS.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        eS.property("ADBE Vector Ellipse Size").setValue([sparks[sp3][2]*2, sparks[sp3][2]*2]);
        var fS = gS.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fS.property("ADBE Vector Fill Color").setValue([0.95,0.84,0.62,1]);
        var gSt = gS.property("ADBE Vector Transform Group");
        gSt.property("ADBE Vector Position").expression =
            pre + "var ph=(t*0.55+" + sparks[sp3][1] + ")%1.6; [" + (540*sparks[sp3][0]).toFixed(1) + " + Math.sin(time*1.3+" + sp3 + ")*4.3, " + yTopDoor.toFixed(1) + " - ph*" + (h*0.045).toFixed(1) + "];";
        gSt.property("ADBE Vector Group Opacity").expression =
            pre + "var ph=(t*0.55+" + sparks[sp3][1] + ")%1.6; var vis=Math.max(0,1-ph/1.6); var a2=Math.max(0,Math.min(1,(t-0.7)/0.5)); vis*72*a2;";
    }
    _uiGlowFx(sp2, w*0.012, 0.7);
    try { sp2.blendingMode = BlendingMode.ADD; } catch(e42){}
    sp2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    sp2.parent = ctrl;
    sp2.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "100*(1-Math.min(1,pOut*1.2));";
}

// S2 ALT B - giant BOOKS stacked as stairs; the climber ascends the knowledge.
function _srtFx_stairBooks(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var halo = _srtSoftLight(comp, dur, "Books Backlight", [0.72,0.56,0.36], w*0.30, w*0.30, w*0.24);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.16, -h*0.04]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.7)); (13+3*Math.sin(time*1.5))*a;";
    var L = comp.layers.addShape(); L.name="Book Stairs"; L.inPoint=comp.time; L.outPoint=comp.time+dur;
    var baseY = h*0.30, tops = [];
    // each stack of books rises higher: books are slabs with a lighter page-edge
    var stackH = [1, 2, 3, 4];
    function slab(g, cx, cy, bw, bh, rot, covCol, pageCol){
        var pp = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        pp.property("ADBE Vector Rect Size").setValue([bw, bh]);
        pp.property("ADBE Vector Rect Position").setValue([cx, cy]);
        pp.property("ADBE Vector Rect Roundness").setValue(w*0.004);
        var pg = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        pg.property("ADBE Vector Rect Size").setValue([bw*0.86, bh*0.42]);
        pg.property("ADBE Vector Rect Position").setValue([cx + bw*0.03, cy - bh*0.10]);
        var f2 = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f2.property("ADBE Vector Fill Color").setValue([pageCol[0],pageCol[1],pageCol[2],1]);
    }
    for (var i=0;i<4;i++){
        var x = -w*0.30 + i*w*0.20;
        var nB = stackH[i];
        for (var b=0;b<nB;b++){
            var bh3 = h*0.070, bw3 = w*0.205 - b*w*0.008;
            var cy = baseY - bh3*(b+0.5);
            var g = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
            // page edge stripe first (on top), then cover
            var pgR = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
            pgR.property("ADBE Vector Rect Size").setValue([bw3*0.92, bh3*0.30]);
            pgR.property("ADBE Vector Rect Position").setValue([x + ((b%2)?-1:1)*w*0.006, cy - bh3*0.06]);
            var fP = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
            fP.property("ADBE Vector Fill Color").setValue([0.42,0.375,0.30,1]);
            var g2b = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
            var cvR = g2b.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
            cvR.property("ADBE Vector Rect Size").setValue([bw3, bh3]);
            cvR.property("ADBE Vector Rect Position").setValue([x + ((b%2)?-1:1)*w*0.006, cy]);
            cvR.property("ADBE Vector Rect Roundness").setValue(w*0.005);
            var fC = g2b.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
            var tone = 0.115 + (b%3)*0.018;
            fC.property("ADBE Vector Fill Color").setValue([tone, tone-0.008, tone-0.018, 1]);
        }
        tops.push([x, baseY - h*0.070*nB]);
    }
    var lb3 = L.Effects.addProperty("ADBE Gaussian Blur 2"); lb3.property(1).setValue(w*0.003);
    L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, baseY]);
    L.parent = ctrl;
    L.property("ADBE Transform Group").property("ADBE Position").setValue([0, baseY]);
    L.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,t/0.6)); var e=ob(p); [100, e*100];";
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.35)); 97*a*(1-Math.min(1,pOut*1.2));";
    return tops;
}

// S2 TRADE - the figure climbs a rising CANDLESTICK chart like stairs; wick tips
// glow, one red pullback candle mid-way, warm summit light. Trader-motivational.
function _srtFx_candleClimb(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    // summit light (top-right, where the trend leads)
    var halo = _srtSoftLight(comp, dur, "Summit Light", [0.80,0.62,0.40], w*0.26, w*0.26, w*0.22);
    halo.parent = ctrl; halo.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.26, -h*0.14]);
    halo.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.7)); (17+3*Math.sin(time*1.5))*a;";
    // candles as steps
    var L = comp.layers.addShape(); L.name="Candle Steps"; L.inPoint=comp.time; L.outPoint=comp.time+dur;
    var baseY = h*0.32;
    var green = [0.16,0.30,0.22], red = [0.34,0.16,0.14];
    var wickCol = [0.55,0.62,0.52];
    // [xFrac, topLift(h), bodyH(h), red?]
    var C = [
        [-0.30, 0.070, 0.070, 0],
        [-0.15, 0.130, 0.085, 0],
        [ 0.00, 0.110, 0.050, 1],
        [ 0.15, 0.200, 0.110, 0],
        [ 0.30, 0.270, 0.100, 0]
    ];
    var tops = [];
    for (var i=0;i<C.length;i++){
        var x = w*C[i][0], yT = baseY - h*C[i][1], bh2 = h*C[i][2];
        var col = C[i][3] ? red : green;
        var d = 0.10 + i*0.13;
        // wick group first (renders on top): thin line above and below body
        var gw = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var wr = gw.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        wr.property("ADBE Vector Rect Size").setValue([w*0.008, bh2 + h*0.055]);
        wr.property("ADBE Vector Rect Position").setValue([x, yT + bh2/2 - h*0.020]);
        var wf = gw.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        wf.property("ADBE Vector Fill Color").setValue([wickCol[0],wickCol[1],wickCol[2],1]);
        var gwt = gw.property("ADBE Vector Transform Group");
        gwt.property("ADBE Vector Group Opacity").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-" + (d+0.08) + ")/0.35)); eo3(p)*55;";
        // body
        var gb2 = L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var br2 = gb2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        br2.property("ADBE Vector Rect Size").setValue([w*0.105, bh2]);
        br2.property("ADBE Vector Rect Position").setValue([x, yT + bh2/2]);
        br2.property("ADBE Vector Rect Roundness").setValue(w*0.006);
        var bf2 = gb2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        bf2.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
        var gbt = gb2.property("ADBE Vector Transform Group");
        gbt.property("ADBE Vector Anchor").setValue([x, yT + bh2]);
        gbt.property("ADBE Vector Position").setValue([x, yT + bh2]);
        gbt.property("ADBE Vector Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-" + d + ")/0.45)); var e=ob(p); [100, e*100];";
        tops.push([x, yT]);
    }
    var lb2 = L.Effects.addProperty("ADBE Gaussian Blur 2"); lb2.property(1).setValue(w*0.004);
    try { L.blendingMode = BlendingMode.ADD; } catch(e31){}
    L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    L.parent = ctrl;
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.4)); 80*a*(1-Math.min(1,pOut*1.2));";
    // glowing trend line over the candle tops
    var tl = comp.layers.addShape(); tl.name="Trend Over Tops"; tl.inPoint=comp.time; tl.outPoint=comp.time+dur;
    var tg2 = tl.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ppT = tg2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shT = new Shape();
    var tv = [];
    for (var k2=0;k2<tops.length;k2++) tv.push([tops[k2][0], tops[k2][1] - h*0.012]);
    shT.vertices = tv; shT.closed = false;
    ppT.property("ADBE Vector Shape").setValue(shT);
    var stT = tg2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    stT.property("ADBE Vector Stroke Color").setValue([0.90,0.70,0.42,1]);
    stT.property("ADBE Vector Stroke Width").setValue(w*0.006);
    stT.property("ADBE Vector Stroke Line Cap").setValue(2);
    var trm = tg2.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
    trm.property("ADBE Vector Trim End").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.6)/1.1)); eo3(p)*100;";
    _uiGlowFx(tl, w*0.02, 0.6);
    try { tl.blendingMode = BlendingMode.ADD; } catch(e32){}
    tl.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tl.parent = ctrl;
    tl.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.55)/0.3)); 55*a*(1-Math.min(1,pOut*1.2));";
    // the climber walks the candle tops
    var LP2 = comp.layers.addShape(); LP2.name="Chart Climber"; LP2.inPoint=comp.time; LP2.outPoint=comp.time+dur;
    var cg2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var CP = [
        [-0.045*w,-0.020*w],[-0.055*w,-0.160*w],[-0.020*w,-0.245*w],[ 0.008*w,-0.238*w],
        [ 0.000*w,-0.275*w],[ 0.033*w,-0.325*w],[ 0.068*w,-0.272*w],[ 0.052*w,-0.238*w],
        [ 0.075*w,-0.160*w],[ 0.092*w,-0.100*w],[ 0.118*w,-0.135*w],[ 0.082*w,-0.058*w],
        [ 0.115*w, 0.010*w],[ 0.100*w, 0.100*w],[ 0.135*w, 0.115*w],[ 0.128*w, 0.135*w],
        [ 0.072*w, 0.132*w],[ 0.040*w, 0.050*w],[-0.005*w, 0.115*w],[-0.022*w, 0.200*w],
        [-0.058*w, 0.212*w],[-0.050*w, 0.228*w],[-0.078*w, 0.135*w],[-0.058*w, 0.040*w]
    ];
    var oC=[], qC=[];
    for (var ci=0; ci<CP.length; ci++){ oC.push([0,0]); qC.push([0,0]); }
    oC[1]=[ 0.008*w,-0.045*w]; qC[1]=[-0.004*w, 0.040*w];
    oC[2]=[ 0.020*w,-0.004*w]; qC[2]=[-0.020*w, 0.010*w];
    oC[4]=[ 0.000*w,-0.022*w]; qC[4]=[ 0.002*w, 0.016*w];
    oC[5]=[ 0.026*w, 0.002*w]; qC[5]=[-0.024*w,-0.002*w];
    oC[6]=[ 0.004*w, 0.018*w]; qC[6]=[ 0.004*w,-0.020*w];
    oC[8]=[ 0.010*w, 0.022*w]; qC[8]=[-0.006*w,-0.018*w];
    var ppC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shC = new Shape(); shC.vertices=CP; shC.outTangents=oC; shC.inTangents=qC; shC.closed=true;
    ppC.property("ADBE Vector Shape").setValue(shC);
    var fC = cg2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    fC.property("ADBE Vector Fill Color").setValue([0.105,0.098,0.09,1]);
    var ge2 = LP2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var EC = [[-0.020*w,-0.245*w],[0.000*w,-0.275*w],[0.033*w,-0.325*w],[0.068*w,-0.272*w]];
    var eoC = [[0.010*w,-0.012*w],[0.000*w,-0.022*w],[0.026*w,0.002*w],[0,0]];
    var eqC = [[0,0],[0.002*w,0.016*w],[-0.024*w,-0.002*w],[0.004*w,-0.020*w]];
    var ppE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var shE2 = new Shape(); shE2.vertices=EC; shE2.outTangents=eoC; shE2.inTangents=eqC; shE2.closed=false;
    ppE2.property("ADBE Vector Shape").setValue(shE2);
    var stE2 = ge2.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    stE2.property("ADBE Vector Stroke Color").setValue([0.52,0.43,0.30,1]);
    stE2.property("ADBE Vector Stroke Width").setValue(w*0.0045);
    stE2.property("ADBE Vector Stroke Line Cap").setValue(2);
    var pb2 = LP2.Effects.addProperty("ADBE Gaussian Blur 2"); pb2.property(1).setValue(w*0.0035);
    LP2.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    LP2.parent = ctrl;
    // waypoint walk over candle tops (piecewise, with dip at the red candle)
    var wpS = "[";
    for (var k3=0;k3<tops.length;k3++){ wpS += "["+tops[k3][0].toFixed(1)+","+(tops[k3][1]-0.150*w).toFixed(1)+"]"+(k3<tops.length-1?",":""); }
    wpS += "]";
    LP2.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var wp="+wpS+"; var t0=0.66; var hd=0.24; " +
        "var seg=Math.floor((t-t0)/hd); var f=((t-t0)%hd)/hd; " +
        "if(t<t0){seg=0;f=0;} if(seg>=wp.length-1){seg=wp.length-2;f=1;} if(seg<0){seg=0;f=0;} " +
        "var a=wp[seg], b=wp[seg+1]; var e2=f*f*(3-2*f); " +
        "[a[0]+(b[0]-a[0])*e2, a[1]+(b[1]-a[1])*e2 - Math.sin(Math.PI*f)*"+(h*0.035).toFixed(1)+"];";
    LP2.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "1.0*Math.sin(time*0.9);";
    LP2.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "[100, 100 + 0.4*Math.sin(time*1.2)];";
    LP2.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.5)/0.4)); 96*eo3(a)*(1-Math.min(1,pOut*1.2));";
}

// S4 hero — projector: flickering source + light beam across the frame, film runs.
function _srtFx_projector(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var src = _srtSoftLight(comp, dur, "S4 Projector Source", [0.90,0.76,0.54], w*0.09, w*0.09, w*0.09);
    src.parent = ctrl; src.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.34, -h*0.31]);
    src.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.5)); (26+5*Math.sin(time*21)+3*Math.sin(time*7))*a;";
    var beam = _srtSoftLight(comp, dur, "S4 Beam", [0.82,0.71,0.52], w*0.15, h*0.60, w*0.15);
    beam.parent = ctrl;
    beam.property("ADBE Transform Group").property("ADBE Position").setValue([-w*0.06, 0]);
    beam.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(35);
    beam.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/0.8)); (11+2.5*Math.sin(time*17))*a;";
    // USER TRANSFORMERS PNG — the robots materialise in the projector light
    var tfFile = new File("C:/Users/nytvir/Downloads/transformers_src.png");
    if (tfFile.exists) {
        var tfItem = app.project.importFile(new ImportOptions(tfFile));
        var tf = comp.layers.add(tfItem);
        tf.name = "Transformers PNG";
        tf.inPoint = comp.time; tf.outPoint = comp.time + dur;
        tf.parent = ctrl;
        tf.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-0.6)/1.4)); var e=eo3(p); [Math.sin(time*0.35)*" + (w*0.006) + ", " + (h*0.205) + " + " + (h*0.03) + "*(1-e)];";
        tf.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-0.6)/1.6)); var e=eo3(p); var bs=(" + ((w*0.78)/1600*100).toFixed(3) + ")*(0.94+0.06*e + (t/dur)*0.05); [bs,bs];";
        tf.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,(t-0.6)/1.2)); 58*eo3(a)*(1-Math.min(1,pOut*1.2));";
        var tfb = tf.Effects.addProperty("ADBE Gaussian Blur 2");
        tfb.property(1).expression = pre + "var p=Math.max(0,Math.min(1,(t-0.6)/1.2)); (1-eo3(p))*" + (w*0.03) + " + " + (w*0.003) + ";";
        try {
            var tfc = tf.Effects.addProperty("ADBE Brightness & Contrast 2");
            tfc.property("Brightness").setValue(-14);
        } catch(eT){}
        var tfg = tf.Effects.addProperty("ADBE Glo2");
        try { tfg.property("ADBE Glo2-0003").setValue(w*0.015); tfg.property("ADBE Glo2-0004").setValue(0.12); } catch(eT2){}
    }
    // dust motes drifting INSIDE the beam (classic projector shot)
    var bd = comp.layers.addShape(); bd.name="Beam Dust"; bd.inPoint=comp.time; bd.outPoint=comp.time+dur;
    for (var bd9=0; bd9<7; bd9++){
        var gD = bd.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var eD = gD.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        var rD = 1.2 + (bd9%3)*0.7;
        eD.property("ADBE Vector Ellipse Size").setValue([rD*2, rD*2]);
        var fD = gD.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fD.property("ADBE Vector Fill Color").setValue([0.95,0.88,0.72,1]);
        var gDt = gD.property("ADBE Vector Transform Group");
        // travel along the beam axis (top-left -> centre-bottom-right, angle ~35deg)
        gDt.property("ADBE Vector Position").expression =
            pre + "var ph=(t*0.16+" + (bd9*0.14) + ")%1; var bx=-0.32+ph*0.55; var by=-0.30+ph*0.52; " +
            "[bx*" + 540 + " + Math.sin(time*0.9+" + bd9 + ")*8, by*" + 960 + "*0.55 + Math.cos(time*0.7+" + bd9 + ")*7];";
        gDt.property("ADBE Vector Group Opacity").expression =
            pre + "var ph=(t*0.16+" + (bd9*0.14) + ")%1; var vis=Math.sin(Math.PI*ph); var a=Math.max(0,Math.min(1,(t-0.6)/0.8)); vis*(30+" + (bd9*3) + ")*a;";
    }
    var bdb = bd.Effects.addProperty("ADBE Gaussian Blur 2"); bdb.property(1).setValue(1.8);
    try { bd.blendingMode = BlendingMode.ADD; } catch(e91){}
    bd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    bd.parent = ctrl;
    bd.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "100*(1-Math.min(1,pOut*1.1));";
}

// Person-at-PC silhouette scenes - 3 variants, all: desk+monitor+glowing screen
// UNDER the figure layer, so the dark person reads against the light (no fake rim).
function _srtFx_deskScene(comp, dur, ctrl, pre, variant) {
    var w = comp.width, h = comp.height;
    variant = variant || "B";
    var yD = h*0.27, deskTop = yD + w*0.104;
    var ink = [0.105,0.098,0.09];
    function mkShape(L2){ var g = L2.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); return g; }
    function addRect(g, rw, rh, x, y, rnd){ var r=g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect"); r.property("ADBE Vector Rect Size").setValue([rw,rh]); r.property("ADBE Vector Rect Position").setValue([x,y]); if(rnd) r.property("ADBE Vector Rect Roundness").setValue(rnd); }
    function addFill(g, col){ var f=g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill"); f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]); }
    function addPath(g, verts, o, q, closed){ var pp=g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group"); var sh=new Shape(); sh.vertices=verts; if(o) sh.outTangents=o; if(q) sh.inTangents=q; sh.closed=(closed!==false); pp.property("ADBE Vector Shape").setValue(sh); }

    // 1) desk + monitor bezel + stand (bottom)
    var LD = comp.layers.addShape(); LD.name="Desk Setup"; LD.inPoint=comp.time; LD.outPoint=comp.time+dur;
    var gdD = mkShape(LD);
    addRect(gdD, w*0.70, w*0.022, w*0.0, yD + w*0.115, w*0.008);
    addRect(gdD, w*0.315, w*0.205, w*0.10, yD - w*0.032, w*0.012);
    addRect(gdD, w*0.03, w*0.05, w*0.10, yD + w*0.085, 2);
    addFill(gdD, ink);
    LD.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    LD.parent = ctrl; LD.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    LD.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.2)/0.5)); 95*eo3(a)*(1-Math.min(1,pOut*1.2));";
    // 2) glowing screen + spill
    var scr = comp.layers.addShape(); scr.name="Screen"; scr.inPoint=comp.time; scr.outPoint=comp.time+dur;
    var sg2 = mkShape(scr);
    addRect(sg2, w*0.272, w*0.162, 0, 0, w*0.008);
    addFill(sg2, [0.88,0.77,0.55]);
    var sb2 = scr.Effects.addProperty("ADBE Gaussian Blur 2"); sb2.property(1).setValue(w*0.012);
    try { scr.blendingMode = BlendingMode.ADD; } catch(e11){}
    scr.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    scr.parent = ctrl; scr.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.10, yD - w*0.032]);
    scr.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.35)/0.4)); (34+4*Math.sin(time*9)+2*Math.sin(time*23))*eo3(a)*(1-Math.min(1,pOut*1.2));";
    var spill = _srtSoftLight(comp, dur, "Screen Spill", [0.72,0.60,0.42], w*0.30, w*0.22, w*0.22);
    spill.parent = ctrl; spill.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.02, yD - w*0.03]);
    spill.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.35)/0.5)); (13+2*Math.sin(time*9))*eo3(a)*(1-Math.min(1,pOut*1.2));";

    // 3) the PERSON - dark silhouette layer ON TOP of the light
    var LP = comp.layers.addShape(); LP.name="Person ("+variant+")"; LP.inPoint=comp.time; LP.outPoint=comp.time+dur;
    var gpP = mkShape(LP);

    if (variant === "A" || variant === "D") {
        // BACK VIEW, centred on the monitor - head silhouetted against the screen
        var cx = w*0.055;
        var P = [
            [cx-0.150*w, deskTop+0.022*w],
            [cx-0.132*w, deskTop-0.110*w],
            [cx-0.058*w, deskTop-0.205*w],
            [cx-0.030*w, deskTop-0.228*w],
            [cx-0.047*w, deskTop-0.258*w],
            [cx+0.000*w, deskTop-0.316*w],
            [cx+0.047*w, deskTop-0.258*w],
            [cx+0.030*w, deskTop-0.228*w],
            [cx+0.058*w, deskTop-0.205*w],
            [cx+0.132*w, deskTop-0.110*w],
            [cx+0.150*w, deskTop+0.022*w]
        ];
        var o = [[0,0],[0.006*w,-0.045*w],[0.028*w,-0.012*w],[-0.004*w,-0.012*w],[0.000*w,-0.030*w],[0.026*w,0.000*w],[0.010*w,0.014*w],[0.012*w,0.008*w],[0.030*w,0.014*w],[0.008*w,0.048*w],[0,0]];
        var q = [[0,0],[-0.006*w,0.045*w],[-0.030*w,0.014*w],[0.004*w,0.010*w],[-0.010*w,0.014*w],[-0.026*w,0.000*w],[0.000*w,-0.030*w],[-0.012*w,-0.010*w],[-0.028*w,-0.012*w],[-0.008*w,-0.048*w],[0,0]];
        addPath(gpP, P, o, q, true);
        addFill(gpP, ink);
        if (variant === "D") {
            var gph = mkShape(LP);
            var B = [[cx-0.052*w, deskTop-0.262*w],[cx+0.000*w, deskTop-0.330*w],[cx+0.052*w, deskTop-0.262*w]];
            var bo = [[0.004*w,-0.038*w],[0.030*w,0.000*w],[0,0]];
            var bq = [[0,0],[-0.030*w,0.000*w],[-0.004*w,-0.038*w]];
            var ppB=gph.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
            var shB=new Shape(); shB.vertices=B; shB.outTangents=bo; shB.inTangents=bq; shB.closed=false;
            ppB.property("ADBE Vector Shape").setValue(shB);
            var stB=gph.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
            stB.property("ADBE Vector Stroke Color").setValue([0.19,0.175,0.155,1]);
            stB.property("ADBE Vector Stroke Width").setValue(w*0.016);
            stB.property("ADBE Vector Stroke Line Cap").setValue(2);
            var gpc = mkShape(LP);
            addRect(gpc, w*0.026, w*0.048, cx-0.055*w, deskTop-0.252*w, w*0.01);
            addRect(gpc, w*0.026, w*0.048, cx+0.055*w, deskTop-0.252*w, w*0.01);
            addFill(gpc, [0.185,0.17,0.15]);
        }
    } else {
        // SIDE PROFILE (B v2): upright seated figure — head, straight back, arm to
        // the keyboard, thigh+shin under the desk, connected office chair.
        var px = -w*0.16;
        var P2 = [
            [px-0.078*w, deskTop+0.095*w],
            [px-0.090*w, deskTop-0.060*w],
            [px-0.075*w, deskTop-0.180*w],
            [px-0.025*w, deskTop-0.265*w],
            [px+0.012*w, deskTop-0.256*w],
            [px+0.002*w, deskTop-0.300*w],
            [px+0.038*w, deskTop-0.352*w],
            [px+0.075*w, deskTop-0.298*w],
            [px+0.058*w, deskTop-0.260*w],
            [px+0.052*w, deskTop-0.234*w],
            [px+0.080*w, deskTop-0.172*w],
            [px+0.102*w, deskTop-0.094*w],
            [px+0.185*w, deskTop-0.038*w],
            [px+0.215*w, deskTop-0.028*w],
            [px+0.210*w, deskTop-0.006*w],
            [px+0.116*w, deskTop-0.028*w],
            [px+0.055*w, deskTop-0.018*w],
            [px+0.118*w, deskTop+0.058*w],
            [px+0.132*w, deskTop+0.082*w],
            [px+0.120*w, deskTop+0.190*w],
            [px+0.086*w, deskTop+0.188*w],
            [px-0.018*w, deskTop+0.112*w]
        ];
        var Z = [0,0];
        var o2 = [Z,[0.006*w,-0.050*w],[0.016*w,-0.040*w],[0.024*w,-0.002*w],[-0.002*w,-0.014*w],[0.000*w,-0.024*w],[0.028*w,0.002*w],[0.004*w,0.020*w],[-0.004*w,0.012*w],[0.010*w,0.024*w],[0.012*w,0.026*w],[0.030*w,0.022*w],[0.014*w,0.004*w],[0.002*w,0.010*w],[-0.024*w,-0.004*w],[-0.022*w,0.002*w],[0.022*w,0.022*w],[0.008*w,0.010*w],[-0.002*w,0.036*w],[-0.012*w,0.002*w],[-0.012*w,-0.026*w],[-0.024*w,-0.006*w]];
        var q2 = [Z,[-0.004*w,0.048*w],[-0.020*w,0.036*w],[-0.026*w,0.008*w],[0.004*w,0.010*w],[0.002*w,0.018*w],[-0.026*w,-0.002*w],[0.004*w,-0.022*w],[0.006*w,-0.014*w],[-0.006*w,-0.018*w],[-0.010*w,-0.022*w],[-0.026*w,-0.016*w],[-0.028*w,-0.010*w],[-0.004*w,-0.008*w],[0.020*w,-0.002*w],[0.026*w,0.004*w],[-0.014*w,-0.010*w],[-0.014*w,-0.016*w],[-0.004*w,-0.010*w],[0.004*w,-0.034*w],[0.010*w,0.004*w],[0.024*w,0.010*w]];
        addPath(gpP, P2, o2, q2, true);
        addFill(gpP, ink);
        // warm light stroke on head + shoulder top only
        var gpe = mkShape(LP);
        var E = [[px-0.025*w, deskTop-0.265*w],[px+0.002*w, deskTop-0.300*w],[px+0.038*w, deskTop-0.352*w],[px+0.075*w, deskTop-0.298*w]];
        var eo = [[0.010*w,-0.014*w],[0.000*w,-0.024*w],[0.028*w,0.002*w],[0,0]];
        var eq = [[0,0],[0.002*w,0.018*w],[-0.026*w,-0.002*w],[0.004*w,-0.022*w]];
        var ppE=gpe.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
        var shE=new Shape(); shE.vertices=E; shE.outTangents=eo; shE.inTangents=eq; shE.closed=false;
        ppE.property("ADBE Vector Shape").setValue(shE);
        var stE=gpe.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        stE.property("ADBE Vector Stroke Color").setValue([0.50,0.41,0.29,1]);
        stE.property("ADBE Vector Stroke Width").setValue(w*0.0045);
        stE.property("ADBE Vector Stroke Line Cap").setValue(2);
        // connected office chair: backrest + seat + stem (behind the figure)
        var gcC = mkShape(LP);
        addRect(gcC, w*0.046, w*0.30, px - w*0.112, deskTop - w*0.06, w*0.02);
        addRect(gcC, w*0.17, w*0.022, px + w*0.005, deskTop + w*0.105, w*0.008);
        addRect(gcC, w*0.02, w*0.09, px + w*0.005, deskTop + w*0.16, 2);
        addFill(gcC, [0.092,0.086,0.08]);
    }
    var pbl = LP.Effects.addProperty("ADBE Gaussian Blur 2"); pbl.property(1).setValue(w*0.0035);
    LP.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, deskTop]);
    LP.parent = ctrl;
    LP.property("ADBE Transform Group").property("ADBE Position").setValue([0, deskTop]);
    LP.property("ADBE Transform Group").property("ADBE Rotate Z").expression = pre + "0.8*Math.sin(time*0.65);";
    LP.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "[100, 100 + 0.4*Math.sin(time*1.1)];";
    LP.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.25)/0.5)); 96*eo3(a)*(1-Math.min(1,pOut*1.2));";
}

// cinematic kit: god-ray + defocused bokeh — the gap-scene film language,
// reusable per scene via opts {cinekit:true}
function _srtCineKit(comp, dur, ctrl, pre, side) {
    var w = comp.width, h = comp.height;
    side = side || 1;
    var ry = _srtSoftLight(comp, dur, "Kit God Ray", [0.78,0.65,0.45], w*0.06, h*0.45, w*0.10);
    ry.parent = ctrl; ry.property("ADBE Transform Group").property("ADBE Position").setValue([w*0.16*side, -h*0.12]);
    ry.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "(20 + Math.sin(time*0.24)*2.5)*" + side + ";";
    ry.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,(t-0.5)/1.0)); (8+2*Math.sin(time*0.8))*eo3(a)*(1-Math.min(1,pOut*1.1));";
    var bok = comp.layers.addShape(); bok.name="Kit Bokeh"; bok.inPoint=comp.time; bok.outPoint=comp.time+dur;
    var bs2 = [[0.18,-0.24,4.2],[-0.22,-0.10,3.0],[0.28,0.10,5.0],[-0.12,0.24,2.6],[0.06,-0.34,3.4]];
    for (var bo=0; bo<bs2.length; bo++){
        var gB = bok.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var eB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        eB.property("ADBE Vector Ellipse Size").setValue([bs2[bo][2]*2, bs2[bo][2]*2]);
        var fB = gB.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fB.property("ADBE Vector Fill Color").setValue([0.88,0.76,0.55,1]);
        var gT = gB.property("ADBE Vector Transform Group");
        gT.property("ADBE Vector Position").expression =
            pre + "[" + (540*bs2[bo][0]).toFixed(1) + " + Math.sin(time*0.55+" + bo + ")*7, " + (960*bs2[bo][1]).toFixed(1) + "*0.5 + Math.cos(time*0.45+" + bo + ")*6 - t*4];";
        gT.property("ADBE Vector Group Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,(t-0.6)/0.9)); (12+" + (bo*3) + ")*eo3(a);";
    }
    var bbl = bok.Effects.addProperty("ADBE Gaussian Blur 2"); bbl.property(1).setValue(5.0);
    try { bok.blendingMode = BlendingMode.ADD; } catch(e81){}
    bok.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    bok.parent = ctrl;
    bok.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "100*(1-Math.min(1,pOut*1.1));";
}

// depth layer for chart scenes: a FAR, dimmer, more-blurred second chart drifting
// slower behind the main one (parallax) — call BEFORE _srtTraderFx
function _srtFx_chartDepth(comp, dur, ctrl, pre) {
    var w = comp.width, h = comp.height;
    var cd = comp.layers.addShape(); cd.name="Far Chart"; cd.inPoint=comp.time; cd.outPoint=comp.time+dur;
    var C2 = [[-0.40,-0.06,0.05,1],[-0.28,-0.09,0.035,0],[-0.16,-0.12,0.06,1],[-0.04,-0.16,0.04,1],[0.08,-0.19,0.05,0],[0.20,-0.23,0.065,1],[0.32,-0.27,0.05,1]];
    var upF=[0.34,0.48,0.40], dnF=[0.48,0.34,0.30];
    for (var i=0;i<C2.length;i++){
        var colF = C2[i][3] ? upF : dnF;
        var g = cd.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var wr = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        wr.property("ADBE Vector Rect Size").setValue([w*0.004, h*C2[i][2]*1.6]);
        wr.property("ADBE Vector Rect Position").setValue([w*C2[i][0], h*C2[i][1]]);
        var br = g.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        br.property("ADBE Vector Rect Size").setValue([w*0.020, h*C2[i][2]]);
        br.property("ADBE Vector Rect Position").setValue([w*C2[i][0], h*C2[i][1]]);
        var f = g.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        f.property("ADBE Vector Fill Color").setValue([colF[0],colF[1],colF[2],1]);
    }
    var cbl = cd.Effects.addProperty("ADBE Gaussian Blur 2"); cbl.property(1).setValue(w*0.024);
    try { cd.blendingMode = BlendingMode.ADD; } catch(e82){}
    cd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    cd.parent = ctrl;
    cd.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "[Math.sin(time*0.2)*" + (w*0.005) + ", -t*" + (h*0.003) + "];";
    cd.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.2)); 9*a*(1-Math.min(1,pOut*1.1));";
}

function _srtCine(capsStr, serifStr, dur, opts) {
    var comp = app.project.activeItem; if(!comp) return;
    var w = comp.width, h = comp.height;
    // NO apostrophes/quotes in the name — it goes inside thisComp.layer('...') in every expression
    var label = String(serifStr||capsStr).replace(/[^A-Za-z0-9 ]/g, "").toUpperCase();
    var ctrl = _uiCtl(comp, "SRT CINE " + label + " CTRL", dur, [w/2, h/2]);
    var pre = _uiPrefix(ctrl.name);
    // per-scene variation seed: mirror side, fog mood, text height — kills the
    // "same template repeating" feel across consecutive scenes
    var n = (opts && opts.n) || 0;
    var side = (n % 2) ? -1 : 1;
    var vn = n % 3;
    var ty = [0, -h*0.05, h*0.035][n % 3];
    _srtBG(comp, dur);
    // slow cinematic drift + EXIT PUSH: camera presses forward in the last beat
    // so every hard cut lands as an intentional beat (uses pOut from _uiPrefix)
    ctrl.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var pin=Math.min(1,t/0.55); var ein=1-Math.pow(1-pin,3); var s=106-6*ein - 1.2*eo3(Math.min(1,t/(dur*0.9))) + Math.sin(time*0.5)*0.4 + 4*ib(pOut); [s,s];";
    ctrl.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "Math.sin(time*0.4)*0.35;";
    _srtAtmos(comp, dur, ctrl, pre, side, vn);
    _srtLivingFog(comp, dur, pre);
    if (opts && opts.cinekit) _srtCineKit(comp, dur, ctrl, pre, side);
    if (opts && opts.fxpre === "chartdeep") _srtFx_chartDepth(comp, dur, ctrl, pre);
    if (opts && opts.trader) _srtTraderFx(comp, dur, ctrl, pre);
    if (opts && opts.fx === "paperreal") _srtFx_paperReal(comp, dur, ctrl, pre);
    else if (opts && opts.fx === "candleclimb") _srtFx_candleClimb(comp, dur, ctrl, pre);
    else if (opts && opts.fx === "stairdoor") _srtFx_stairDoor(comp, dur, ctrl, pre);
    else if (opts && opts.fx === "stairbooks") { _srtFx_stairBooks(comp, dur, ctrl, pre); _srtFx_stairsClimberOnly(comp, dur, ctrl, pre); }
    else if (opts && opts.fx === "playglow") _srtFx_playGlow(comp, dur, ctrl, pre, false);
    else if (opts && opts.fx === "playglow2") _srtFx_playGlow(comp, dur, ctrl, pre, true);
    else if (opts && opts.fx === "stairsglow") _srtFx_stairsGlow(comp, dur, ctrl, pre);
    else if (opts && opts.fx) _srtGhostFx(comp, dur, ctrl, pre, opts.fx, opts.fxv);
    if (opts && opts.fx2 === "projector") _srtFx_projector(comp, dur, ctrl, pre);
    if (opts && (opts.desk || opts.deskv)) _srtFx_deskScene(comp, dur, ctrl, pre, opts.deskv || "B");
    _srtCaps(comp, dur, ctrl, pre, capsStr, serifStr, 0.1, ty);
    _srtPost(comp, dur, pre, side);
    // CUT BLUR — the whole frame arrives defocused and sharpens (0.35s), and
    // defocuses again in the last 0.25s: cuts read as one continuous camera whip
    var cbl = comp.layers.addSolid([0.5,0.5,0.5], "Cut Blur", w, h, 1, comp.duration);
    cbl.inPoint = comp.time; cbl.outPoint = comp.time + dur;
    cbl.adjustmentLayer = true;
    var cge = cbl.Effects.addProperty("ADBE Gaussian Blur 2");
    cge.property(1).expression =
        pre + "var bi=(1-Math.min(1,t/0.35)); var bo=Math.max(0,(t-(dur-0.25))/0.25); (Math.pow(bi,2)+Math.pow(bo,2))*" + (w*0.006) + ";";
    ctrl.selected = true;
}

// GAP INTERLUDE (3.97s-12.2s in the SRT: no narration) — pure cinematic breath:
// fog, drifting ghost chart, a lone figure walks through the dark, light leaks.
function _srtGapScene() {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 8.834; var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "SRT GAP INTERLUDE CTRL", dur, [w/2, h/2]);
    var pre = _uiPrefix(ctrl.name);
    _srtBG(comp, dur);
    ctrl.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var pin=Math.min(1,t/0.55); var ein=1-Math.pow(1-pin,3); var s=106-6*ein + 12*(t/dur) + Math.sin(time*0.4)*0.5 + 4*ib(pOut); [s,s];";
    ctrl.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
        pre + "Math.sin(time*0.33)*0.4;";
    _srtAtmos(comp, dur, ctrl, pre, 1, 0);
    _srtLivingFog(comp, dur, pre);
    _srtTraderFx(comp, dur, ctrl, pre);
    // DEEP travel: a distant warm light slowly approaches out of the darkness
    var far = _srtSoftLight(comp, dur, "Far Light", [0.88,0.70,0.46], w*0.085, w*0.10, w*0.10);
    far.parent = ctrl; far.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.06]);
    far.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=t/dur; var e=p*p*0.7+p*0.3; var sc=45+150*e; [sc,sc];";
    far.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var a=Math.max(0,Math.min(1,t/1.2)); var p=t/dur; (8+22*p+2*Math.sin(time*1.8))*a*(1-Math.min(1,pOut*1.1));";
    // volumetric god-rays fanning from the far light (behind the coin)
    function ray(nm, rot){
        var ry = _srtSoftLight(comp, dur, nm, [0.80,0.66,0.44], w*0.055, h*0.42, w*0.09);
        ry.parent = ctrl; ry.property("ADBE Transform Group").property("ADBE Position").setValue([0, -h*0.06]);
        ry.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
            pre + "" + rot + " + Math.sin(time*0.22+" + rot + ")*2.5;";
        ry.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var p=t/dur; var a=Math.max(0,Math.min(1,(t-1.2)/1.5)); (5+7*p+1.5*Math.sin(time*0.9))*eo3(a)*(1-Math.min(1,pOut*1.1));";
        var rysc = ry.property("ADBE Transform Group").property("ADBE Scale");
        rysc.expression = pre + "var p=t/dur; var sc=80+70*p; [sc,sc];";
    }
    ray("God Ray L", -24); ray("God Ray C", 0); ray("God Ray R", 24);
    // USER 3D BTC PNG (2000x2000 RGBA) — replaces the vector coin entirely
    var btcFile = new File("C:/Users/nytvir/Downloads/btc_coin_src.png");
    if (btcFile.exists) {
        var fitem = app.project.importFile(new ImportOptions(btcFile));
        var coin = comp.layers.add(fitem);
        coin.name = "BTC Coin PNG";
        coin.inPoint = comp.time; coin.outPoint = comp.time + dur;
        coin.parent = ctrl;
        // true 3D COIN FLIP: 3D layer spinning on Y with perspective
        try { coin.threeDLayer = true; } catch(e3d){}
        coin.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "[Math.sin(time*0.5)*" + (w*0.007) + ", " + (-h*0.06) + " + Math.sin(time*0.8)*" + (h*0.005) + ", 0];";
        coin.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=t/dur; var bs=(55+80*p)*" + ((w*0.34)/2000).toFixed(5) + "; [bs, bs, bs];";
        try {
            coin.property("ADBE Transform Group").property("ADBE Rotate Y").expression =
                pre + "var spin=eo3(Math.min(1,t/1.4)); t*95*spin;";
            coin.property("ADBE Transform Group").property("ADBE Rotate X").setValue(7);
        } catch(eRy){}
        coin.property("ADBE Transform Group").property("ADBE Rotate Z").expression =
            pre + "2*Math.sin(time*0.45);";
        coin.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,(t-0.9)/1.2)); var p=t/dur; (52+30*p)*eo3(a)*(1-Math.min(1,pOut*1.1));";
        // rack focus: arrives defocused, sharpens as it approaches
        var cpb = coin.Effects.addProperty("ADBE Gaussian Blur 2");
        cpb.property(1).expression = pre + "var p=t/dur; var f=eo3(Math.min(1,p*1.7)); " + (w*0.020) + "*(1-f) + " + (w*0.0015) + ";";
        // warm ambience so the render sits IN the scene, not pasted on it
        var cgl = coin.Effects.addProperty("ADBE Glo2");
        try { cgl.property("ADBE Glo2-0003").setValue(w*0.02); cgl.property("ADBE Glo2-0004").setValue(0.18); } catch(eP){}
    }
    // defocused bokeh motes drifting near the coin
    var bok = comp.layers.addShape(); bok.name="Bokeh"; bok.inPoint=comp.time; bok.outPoint=comp.time+dur;
    var bseeds = [[0.16,-0.22,4.5],[-0.20,-0.08,3.2],[0.26,0.06,5.5],[-0.10,-0.30,2.6],[0.05,0.14,3.8],[-0.28,-0.24,4.6]];
    for (var bo9=0; bo9<bseeds.length; bo9++){
        var gBo = bok.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var eBo = gBo.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        eBo.property("ADBE Vector Ellipse Size").setValue([bseeds[bo9][2]*2, bseeds[bo9][2]*2]);
        var fBo = gBo.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fBo.property("ADBE Vector Fill Color").setValue([0.90,0.78,0.56,1]);
        var gBt = gBo.property("ADBE Vector Transform Group");
        gBt.property("ADBE Vector Position").expression =
            pre + "var g=1+(t/dur)*1.6; [" + (540*bseeds[bo9][0]).toFixed(1) + "*g + Math.sin(time*0.6+" + bo9 + ")*6, " + (960*bseeds[bo9][1]).toFixed(1) + "*g*0.55 + Math.cos(time*0.5+" + bo9 + ")*5];";
        gBt.property("ADBE Vector Group Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,(t-1.0)/1.0)); (16+" + (bo9*3) + ")*eo3(a);";
    }
    var bbl9 = bok.Effects.addProperty("ADBE Gaussian Blur 2"); bbl9.property(1).setValue(5.5);
    try { bok.blendingMode = BlendingMode.ADD; } catch(e72){}
    bok.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    bok.parent = ctrl;
    bok.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "100*(1-Math.min(1,pOut*1.1));";
    // fog planes sliding PAST the camera (parallax depth)
    function passFog(nm, col, x0, y0, s0, s1, op){
        var pf = _srtSoftLight(comp, dur, nm, col, w*0.30, w*0.22, w*0.20);
        pf.parent = ctrl; pf.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var p=t/dur; [" + x0 + "*(1+p*1.4), " + y0 + "*(1+p*1.2)];";
        pf.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=t/dur; var sc=" + s0 + "+(" + s1 + "-" + s0 + ")*p; [sc,sc];";
        pf.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,t/1.0)); " + op + "*a*(1-Math.min(1,pOut*1.1));";
    }
    passFog("Pass Fog L", [0.36,0.42,0.40], -w*0.30, h*0.10, 80, 210, 9);
    passFog("Pass Fog R", [0.44,0.36,0.28],  w*0.28, -h*0.16, 70, 190, 8);
    // dust streaming outward (flying through space)
    var sd = comp.layers.addShape(); sd.name="Deep Dust"; sd.inPoint=comp.time; sd.outPoint=comp.time+dur;
    var seeds2 = [[0.08,-0.20],[-0.14,0.10],[0.22,0.16],[-0.26,-0.12],[0.30,-0.04],[-0.06,0.26],[0.14,0.30],[-0.32,0.22]];
    for (var di=0; di<seeds2.length; di++){
        var gD = sd.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var eD = gD.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        var rD = 1.4 + (di%3)*0.8;
        eD.property("ADBE Vector Ellipse Size").setValue([rD*2, rD*2]);
        var fD = gD.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        fD.property("ADBE Vector Fill Color").setValue([0.92,0.88,0.80,1]);
        var gDt = gD.property("ADBE Vector Transform Group");
        gDt.property("ADBE Vector Position").expression =
            pre + "var g=1+ (t/dur)*2.2 + " + (di*0.06) + "; [" + (540*seeds2[di][0]).toFixed(1) + "*g, " + (960*seeds2[di][1]).toFixed(1) + "*g];";
        gDt.property("ADBE Vector Group Opacity").expression =
            pre + "var a=Math.max(0,Math.min(1,t/0.8)); (30+" + (di*3) + ")*a;";
    }
    var sdb = sd.Effects.addProperty("ADBE Gaussian Blur 2"); sdb.property(1).setValue(1.4);
    sd.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    sd.parent = ctrl;
    sd.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "38*(1-Math.min(1,pOut*1.2));";
    _srtCaps(comp, dur, ctrl, pre, "", null, 0.1, 0);
    _srtPost(comp, dur, pre, 1);
    var cbl2 = comp.layers.addSolid([0.5,0.5,0.5], "Cut Blur", w, h, 1, comp.duration);
    cbl2.inPoint = comp.time; cbl2.outPoint = comp.time + dur;
    cbl2.adjustmentLayer = true;
    var cge2 = cbl2.Effects.addProperty("ADBE Gaussian Blur 2");
    cge2.property(1).expression =
        pre + "var bi=(1-Math.min(1,t/0.35)); var bo=Math.max(0,(t-(dur-0.25))/0.25); (Math.pow(bi,2)+Math.pow(bo,2))*" + (w*0.006) + ";";
    ctrl.selected = true;
}

// SRT SCENES — one per subtitle cue; durations from the SRT timings.
// Each carries a meaning-matched ghost visual (fx) and/or the trader motif.
function _srtScene1()  { _srtCine("not everything has a", "tutorial", 2.766, {n:1, fx:"playglow", desk:true}); }
function _srtScene2()  { _srtCine("some things you have to", "teach yourself", 2.4, {n:2, fx:"stairdoor"}); }
function _srtScene3()  { _srtCine("it will make more sense with an", "example", 2.6, {n:3, trader:true, cinekit:true, fxpre:"chartdeep"}); }
function _srtScene4()  { _srtCine("the people who created the", "Transformers", 3.966, {n:4, fx:"film", fx2:"projector", cinekit:true}); }
function _srtScene5()  { _srtCine("did they watch a", "tutorial", 3.6, {n:5, fx:"playglow2", cinekit:true}); }
function _srtScene6()  { _srtCine("", "another one", 2.2, {n:6, fx:"film", fxv:1, cinekit:true}); }
function _srtScene7()  { _srtCine("the person who invented", "paper", 2.2, {n:7, fx:"paperreal", cinekit:true}); }
function _srtScene8()  { _srtCine("did he read an", "assembling manual", 2.6, {n:8, fx:"manual", cinekit:true}); }
function _srtScene9()  { _srtCine("", "this can go on", 1.9, {n:9, fx:"dots", cinekit:true}); }
function _srtScene10() { _srtCine("a solid foundation of any visual media is", "the idea", 4.167, {n:10, trader:true, fx:"bulb", cinekit:true, fxpre:"chartdeep"}); }
function _srtScene11() { _srtCine("", "the ability", 1.533, {n:11, fx:"spark", cinekit:true}); }
function _srtScene12() { _srtCine("to turn this idea into a", "visual representation", 3.267, {n:12, fx:"frame", cinekit:true}); }
function _srtScene13() { _srtCine("by", "practicing", 1.667, {n:13, trader:true, fx:"strokes", cinekit:true, fxpre:"chartdeep"}); }
function _srtScene14() { _srtCine("knowing what you do and having a", "reference", 3.666, {n:14, trader:true, fx:"books", cinekit:true, fxpre:"chartdeep"}); }
function _srtScene15() { _srtCine("what you see", "observe", 3.434, {n:15, trader:true, fx:"eye", cinekit:true, fxpre:"chartdeep"}); }

// (previous UI-mograph concept for scene 1, kept for reference)
function _srtScene1_mographOld() {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 2.166; var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "SRT S1 CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", SRT_WARM);
    var pre = _uiPrefix(ctrl.name);
    _srtBG(comp, dur);

    // subtle cinematic settle (whole scene eases in from a hair larger)
    ctrl.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var e=eo3(Math.min(1,t/1.5)); var s=106-6*e; [s,s];";

    var cardW = w*0.54, cardH = w*0.35, cardY = -h*0.015, rnd = w*0.028;
    var cRef = 'thisComp.layer("' + ctrl.name + '")';

    // the tutorial card
    var card = _uiRRect(comp, "S1 Card", dur, cardW, cardH, rnd, "[0.135,0.135,0.16,1]");
    _uiShadow(card);
    card.parent = ctrl; card.property("ADBE Transform Group").property("ADBE Position").setValue([0, cardY]);
    card.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var e=ob(Math.min(1,t/0.5)); [e*100,e*100];";
    card.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.3)/0.4)); 100-45*eo3(p);";   // dims after strike

    // play button: thin white ring + white triangle
    var pr = w*0.072;
    var ring = comp.layers.addShape(); ring.name="S1 Play Ring"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur;
    var rg = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var re = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    re.property("ADBE Vector Ellipse Size").setValue([pr*2, pr*2]);
    var rs = rg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    rs.property("ADBE Vector Stroke Color").setValue([0.93,0.93,0.95,1]);
    rs.property("ADBE Vector Stroke Width").setValue(Math.max(3,w*0.007));
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ring.parent = ctrl; ring.property("ADBE Transform Group").property("ADBE Position").setValue([0, cardY]);
    ring.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var e=ob(Math.max(0,Math.min(1,(t-0.22)/0.5))); [e*100,e*100];";
    ring.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.3)/0.35)); 100-65*eo3(p);";

    var tri = comp.layers.addShape(); tri.name="S1 Play Tri"; tri.inPoint=comp.time; tri.outPoint=comp.time+dur;
    var tg = tri.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var tgs = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Group");
    var tsh = new Shape(); var a = pr*0.85;
    tsh.vertices = [[-a*0.42,-a*0.55],[-a*0.42,a*0.55],[a*0.62,0]]; tsh.closed = true;
    tgs.property("ADBE Vector Shape").setValue(tsh);
    var tf = tg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    tf.property("ADBE Vector Fill Color").setValue([0.95,0.95,0.97,1]);
    tri.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    tri.parent = ctrl; tri.property("ADBE Transform Group").property("ADBE Position").setValue([a*0.06, cardY]);
    tri.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var e=ob(Math.max(0,Math.min(1,(t-0.3)/0.5))); [e*100,e*100];";
    tri.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.3)/0.35)); 100-65*eo3(p);";

    // progress bar (track + accent fill that stalls at ~38%)
    var trackW = cardW*0.8, barH = w*0.012, barY = cardY + cardH*0.34;
    var track = _uiRRect(comp, "S1 Track", dur, trackW, barH, barH/2, "[0.32,0.32,0.36,1]");
    track.parent = ctrl; track.property("ADBE Transform Group").property("ADBE Position").setValue([0, barY]);
    track.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.45)/0.4)); Math.min(1,p)*70;";
    var fill = _uiRRect(comp, "S1 Fill", dur, 4, barH, barH/2, cRef + '.effect("Accent")(1)');
    var fx = pre + "var f=Math.max(0,Math.min(1,(t-0.5)/0.75)); var e=eo3(f); var cw=Math.max(2,"+(trackW*0.38)+"*e); ";
    fill.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1).property("ADBE Vector Rect Size").expression = fx + "[cw,"+barH+"];";
    fill.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1).property("ADBE Vector Rect Position").expression = fx + "[-"+(trackW/2)+"+cw/2, 0];";
    fill.parent = ctrl; fill.property("ADBE Transform Group").property("ADBE Position").setValue([0, barY]);
    fill.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.5)/0.35)); Math.min(1,p)*100;";

    // negation: a muted diagonal strike draws across the card ("unavailable")
    var strike = _uiRRect(comp, "S1 Strike", dur, cardW*1.0, w*0.009, w*0.0045, "[0.80,0.30,0.26,1]");
    _uiGlowFx(strike, w*0.008, 0.22);
    strike.parent = ctrl;
    strike.property("ADBE Transform Group").property("ADBE Position").setValue([0, cardY]);
    strike.property("ADBE Transform Group").property("ADBE Rotate Z").setValue(-19);
    strike.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.28)/0.45)); var e=eo3(p); [e*100,100];";
    strike.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-1.28)/0.3)); Math.min(1,p)*100;";

    ctrl.selected = true;
}

// (previous stairs-mograph concept for scene 2, kept for reference)
function _srtScene2_mographOld() {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 1.8; var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "SRT S2 CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", SRT_WARM);
    var pre = _uiPrefix(ctrl.name);
    _srtBG(comp, dur);
    ctrl.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var e=eo3(Math.min(1,t/1.4)); var s=105-5*e; [s,s];";

    // 4 stair blocks, bottom-left -> top-right, each rises & pops in with stagger
    var n = 4, bw = w*0.20, bh = w*0.115, gap = w*0.012;
    var x0 = -((bw+gap)*n)/2 + bw/2, yBase = h*0.10;
    var tops = [];
    for (var i=0;i<n;i++){
        var blkH = bh*(i+1);
        var blk = _uiRRect(comp, "S2 Step "+(i+1), dur, bw, blkH, w*0.014, "[0.135,0.135,0.16,1]");
        _uiShadow(blk);
        blk.parent = ctrl;
        var bx = x0 + i*(bw+gap), byC = yBase - blkH/2;
        blk.property("ADBE Transform Group").property("ADBE Position").setValue([bx, byC]);
        // grow upward from the floor: bottom-anchored scaleY
        blk.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Transform Group").property("ADBE Vector Anchor").setValue([0, blkH/2]);
        blk.property("ADBE Root Vectors Group").property(1).property("ADBE Vector Transform Group").property("ADBE Vector Position").setValue([0, blkH/2]);
        var d = 0.06 + i*0.13;
        blk.property("ADBE Transform Group").property("ADBE Scale").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.5)); var e=ob(p); [100, e*100];";
        blk.property("ADBE Transform Group").property("ADBE Opacity").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.25)); Math.min(1,p)*100;";
        tops.push([bx, yBase - blkH]);
    }

    // amber dot climbs the steps in arcs (hop = piecewise: horizontal lerp + parabolic y)
    var dotR = w*0.030;
    var dot = comp.layers.addShape(); dot.name="S2 Dot"; dot.inPoint=comp.time; dot.outPoint=comp.time+dur;
    var dg = dot.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var de = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    de.property("ADBE Vector Ellipse Size").setValue([dotR*2, dotR*2]);
    var df = dg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    df.property("ADBE Vector Fill Color").setValue([SRT_WARM[0],SRT_WARM[1],SRT_WARM[2],1]);
    _uiGlowFx(dot, w*0.014, 0.18);
    dot.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    dot.parent = ctrl;
    // waypoints: on top of each step (dot sits dotR above the top)
    var wp = []; for (var k2=0;k2<n;k2++) wp.push([tops[k2][0], tops[k2][1]-dotR-2]);
    var wpStr = "["; for (var k3=0;k3<n;k3++){ wpStr += "["+wp[k3][0].toFixed(1)+","+wp[k3][1].toFixed(1)+"]"+(k3<n-1?",":""); } wpStr += "]";
    var hopT0 = 0.62, hopD = 0.30;
    dot.property("ADBE Transform Group").property("ADBE Position").expression =
        pre + "var wp="+wpStr+"; var t0="+hopT0+"; var hd="+hopD+"; " +
        "var seg=Math.floor((t-t0)/hd); var f=((t-t0)%hd)/hd; " +
        "if(t<t0){seg=0;f=0;} if(seg>=wp.length-1){seg=wp.length-2;f=1;} if(seg<0){seg=0;f=0;} " +
        "var a=wp[seg], b=wp[seg+1]; var e=f*f*(3-2*f); " +
        "var x=a[0]+(b[0]-a[0])*e; var y=a[1]+(b[1]-a[1])*e - Math.sin(Math.PI*f)*"+(bh*0.75).toFixed(1)+"; [x,y];";
    // squash & stretch on landing
    dot.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var t0="+hopT0+"; var hd="+hopD+"; var f=(t<t0)?0:((t-t0)%hd)/hd; " +
        "var sq=Math.max(0,Math.cos(Math.PI*f))*0.18; [100*(1+sq),100*(1-sq)];";
    dot.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-0.45)/0.25)); Math.min(1,p)*100;";

    // soft glow ping when the dot reaches the top
    var ping = comp.layers.addShape(); ping.name="S2 Top Ping"; ping.inPoint=comp.time; ping.outPoint=comp.time+dur;
    var pg = ping.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var pe = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    pe.property("ADBE Vector Ellipse Size").setValue([dotR*2.4, dotR*2.4]);
    var ps = pg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    ps.property("ADBE Vector Stroke Color").setValue([SRT_WARM[0],SRT_WARM[1],SRT_WARM[2],1]);
    ps.property("ADBE Vector Stroke Width").setValue(Math.max(2,w*0.005));
    ping.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ping.parent = ctrl;
    var topWp = wp[n-1];
    ping.property("ADBE Transform Group").property("ADBE Position").setValue([topWp[0], topWp[1]]);
    var pingT = hopT0 + hopD*(n-1) + 0.05;
    ping.property("ADBE Transform Group").property("ADBE Scale").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+pingT.toFixed(2)+")/0.45)); var e=eo3(p); [80+e*160, 80+e*160];";
    ping.property("ADBE Transform Group").property("ADBE Opacity").expression =
        pre + "var p=Math.max(0,Math.min(1,(t-"+pingT.toFixed(2)+")/0.45)); (t<"+pingT.toFixed(2)+")?0:(1-eo3(p))*70;";

    ctrl.selected = true;
}

// --- GLOW QUOTE: glass quote card, glowing quote mark + line draw + attribution
function _glowQuote(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var cream=[0.97,0.97,0.99], muted=[0.78,0.84,0.96];
    var ctrl = _uiCtl(comp, "GLOW QUOTE ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", c.line);
    var pre = _uiPrefix(ctrl.name);
    var cw = w*0.84, ch = w*0.6, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0, {grad:c.grad, glow:c.glow, glowInt:0.8, morph:true});
    function place(L, py, d, dist){
        L.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.6)); var e=1-Math.pow(1-p,3); [0,"+py+"+"+(dist||0)+"*(1-e)];";
        L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d, 100);
    }
    // big glowing quote mark
    var q = _glowCtext(comp, ctrl, "\"", w*0.2, c.line, true, dur); _uiGlowFx(q, w*0.04, 1.0);
    q.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.26]);
    q.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.55);
    q.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);
    // quote, two tight lines
    var l1 = _glowCtext(comp, ctrl, "Discipline beats", w*0.058, cream, true, dur); place(l1, -ch*0.04, 0.75, w*0.03);
    var l2 = _glowCtext(comp, ctrl, "motivation.", w*0.058, cream, true, dur); place(l2, ch*0.08, 0.85, w*0.03);
    // accent divider that draws from the centre
    var div = _uiRRect(comp, "Quote Divider", dur, w*0.13, w*0.006, w*0.003, "["+c.line[0]+","+c.line[1]+","+c.line[2]+",1]");
    _uiGlowFx(div, w*0.015, 0.8);
    div.parent = ctrl; div.property("ADBE Transform Group").property("ADBE Position").setValue([0, ch*0.18]);
    div.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-1.0)/0.5)); var e=1-Math.pow(1-p,3); [e*100,100];";
    div.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 1.0, 100);
    // attribution
    var at = _glowCtext(comp, ctrl, "Eduardo", w*0.032, c.line, true, dur); place(at, ch*0.26, 1.15, 0);
    ctrl.selected = true;
}

// --- GLOW INTRO: personal-brand name reveal, glowing avatar + name + underline draw
function _glowIntro(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var cream=[0.98,0.98,1.0], muted=[0.78,0.84,0.96];
    var ctrl = _uiCtl(comp, "GLOW INTRO ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", c.line);
    var pre = _uiPrefix(ctrl.name);
    var cw = w*0.8, ch = w*0.68, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0, {grad:c.grad, glow:c.glow, glowInt:0.85, beam:true, beamCol:c.glow, morph:true});
    function place(L, py, d, dist){
        L.property("ADBE Transform Group").property("ADBE Position").expression =
            pre + "var p=Math.max(0,Math.min(1,(t-"+d+")/0.6)); var e=1-Math.pow(1-p,3); [0,"+py+"+"+(dist||0)+"*(1-e)];";
        L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d, 100);
    }
    // glowing avatar: accent ring + person glyph
    var ring = comp.layers.addShape(); ring.name="Intro Avatar Ring"; ring.inPoint=comp.time; ring.outPoint=comp.time+dur;
    var rgp = ring.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var rel = rgp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    rel.property("ADBE Vector Ellipse Size").setValue([w*0.2, w*0.2]);
    var res = rgp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
    res.property("ADBE Vector Stroke Color").setValue([c.line[0],c.line[1],c.line[2],1]);
    res.property("ADBE Vector Stroke Width").setValue(w*0.008);
    _uiGlowFx(ring, w*0.03, 0.9);
    ring.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    ring.parent = ctrl; ring.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.26]);
    ring.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.5);
    ring.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.5, 100);
    var glyph = _personGlyph(comp, dur, w*0.1, cream);
    glyph.parent = ctrl; glyph.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.25]);
    glyph.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.58);
    glyph.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.58, 100);
    // NAME
    var nm = _glowCtext(comp, ctrl, "EDUARDO", w*0.082, cream, true, dur); _uiGlowFx(nm, w*0.025, 0.4);
    place(nm, -ch*0.02, 0.7, w*0.03);
    // underline accent draws from the centre
    var und = _uiRRect(comp, "Intro Underline", dur, w*0.34, w*0.008, w*0.004, "["+c.line[0]+","+c.line[1]+","+c.line[2]+",1]");
    _uiGlowFx(und, w*0.018, 0.9);
    und.parent = ctrl; und.property("ADBE Transform Group").property("ADBE Position").setValue([0, ch*0.08]);
    und.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.9)/0.55)); var e=1-Math.pow(1-p,3); [e*100,100];";
    und.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.9, 100);
    // handle + tagline
    var hd = _glowCtext(comp, ctrl, "@eduardo", w*0.034, c.line, true, dur); place(hd, ch*0.18, 1.1, 0);
    var tg = _glowCtext(comp, ctrl, "Content / Crypto / Lifestyle", w*0.03, muted, false, dur); place(tg, ch*0.3, 1.2, 0);
    ctrl.selected = true;
}

// --- GLOW STEPS: 3-step process/roadmap, numbers light up + connector fills
function _glowSteps(preset) {
    var comp = app.project.activeItem; if(!comp) return;
    var dur = 4.5; var w = comp.width, h = comp.height;
    var c = GLOW_P[preset] || GLOW_P.blue;
    var cream=[0.97,0.97,0.99], muted=[0.74,0.80,0.94];
    var ctrl = _uiCtl(comp, "GLOW STEPS ("+_glowName(preset)+") CONTROLLER", dur, [w/2, h/2]);
    _addColorControl(ctrl, "Accent", c.line);
    var pre = _uiPrefix(ctrl.name);
    var cw = w*0.82, ch = w*0.78, rnd = w*0.05;
    _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0, {grad:c.grad, glow:c.glow, glowInt:0.8, morph:true});

    var title = _glowCtext(comp, ctrl, "My Process", w*0.05, cream, true, dur);
    title.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.37]);
    title.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.55, 100);

    var steps = [["01","Plan","Define the goal"],["02","Create","Make it real"],["03","Launch","Ship & grow"]];
    var colX = -cw*0.34, row0 = -ch*0.13, rowStep = ch*0.2, cr = w*0.05;

    // connector line behind the circles, fills downward as steps activate
    var conH = rowStep*2;
    var conn = _uiRRect(comp, "Steps Connector", dur, w*0.009, conH, w*0.0045, "["+c.line[0]+","+c.line[1]+","+c.line[2]+",1]");
    _uiGlowFx(conn, w*0.012, 0.7);
    conn.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0, -conH/2]);
    conn.parent = ctrl; conn.property("ADBE Transform Group").property("ADBE Position").setValue([colX, row0]);
    conn.property("ADBE Transform Group").property("ADBE Scale").expression = pre + "var p=Math.max(0,Math.min(1,(t-0.75)/1.7)); var e=1-Math.pow(1-p,3); [100,e*100];";
    conn.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.75, 70);

    for (var k=0;k<3;k++){
        var ry = row0 + k*rowStep;
        var d0 = 0.7 + k*0.45;
        // number disc (accent ring + dim fill)
        var disc = comp.layers.addShape(); disc.name="Step "+steps[k][0]; disc.inPoint=comp.time; disc.outPoint=comp.time+dur;
        var dgp = disc.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var del = dgp.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        del.property("ADBE Vector Ellipse Size").setValue([cr*2, cr*2]);
        var dff = dgp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
        dff.property("ADBE Vector Fill Color").setValue([0.07,0.09,0.16,1]);
        var dst = dgp.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        dst.property("ADBE Vector Stroke Color").setValue([c.line[0],c.line[1],c.line[2],1]);
        dst.property("ADBE Vector Stroke Width").setValue(w*0.007);
        _uiGlowFx(disc, w*0.022, 0.8);
        disc.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        disc.parent = ctrl; disc.property("ADBE Transform Group").property("ADBE Position").setValue([colX, ry]);
        disc.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, d0);
        disc.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100);
        // number
        var ntx = _glowCtext(comp, ctrl, steps[k][0], w*0.034, cream, true, dur);
        ntx.property("ADBE Transform Group").property("ADBE Position").setValue([colX, ry]);
        ntx.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.08, 100);
        // label + sublabel (left aligned)
        var lab = _uiText(comp, steps[k][1], Math.round(w*0.04), 6145, null, dur, cream); _clean(lab,true);
        lab.parent = ctrl; lab.property("ADBE Transform Group").property("ADBE Position").setValue([colX+w*0.085, ry-w*0.02]);
        lab.property("ADBE Transform Group").property("ADBE Position").expression = pre + "var d="+(d0+0.05)+"; var p=Math.max(0,Math.min(1,(t-d)/0.55)); var e=1-Math.pow(1-p,3); ["+(colX+w*0.085)+"+"+(w*0.03)+"*(1-e), "+(ry-w*0.02)+"];";
        lab.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.05, 100);
        var sub = _uiText(comp, steps[k][2], Math.round(w*0.028), 6145, null, dur, muted); _clean(sub);
        sub.parent = ctrl; sub.property("ADBE Transform Group").property("ADBE Position").setValue([colX+w*0.085, ry+w*0.03]);
        sub.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0+0.12, 80);
    }
    ctrl.selected = true;
}

// --- CHATGPT GPT: dark ChatGPT custom-GPT interface (Power Word GPT style)
function _chatGptCard() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 5.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "CHATGPT CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "BG", [0.09,0.09,0.10]);
    _addColorControl(ctrl, "Accent", [0.12,0.66,0.55]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.96, ch = h*0.86, HW = cw/2, HH = ch/2;
    var white=[0.93,0.93,0.94], grey=[0.55,0.55,0.6];

    var card = _uiRRect(comp, "ChatGPT BG", dur, cw, ch, w*0.04, cRef+'.effect("BG")(1)');
    _uiShadow(card);
    card.parent = ctrl; card.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    card.property("ADBE Transform Group").property("ADBE Scale").expression = _glassIn(pre, 0);
    card.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, 0, 100);
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }
    // centre a LEFT-aligned text on cx by ESTIMATING its width (reliable; AE rect measuring is flaky)
    function atC(L, str, fs, cx, py, d0) { var wd = str.length * fs * 0.54; at(L, cx - wd/2, py, d0); }

    // header
    var hdr = _uiText(comp, "Power Word GPT", Math.round(w*0.03), 6145, null, dur, white); _clean(hdr,true);
    at(hdr, -HW+w*0.05, -HH+h*0.035, 0.08);
    var chev = _uiText(comp, "v", Math.round(w*0.024), 6145, null, dur, grey); _clean(chev);
    at(chev, -HW+w*0.34, -HH+h*0.04, 0.1);

    // avatar
    var av = comp.layers.addShape(); av.name="GPT Avatar"; av.inPoint=comp.time; av.outPoint=comp.time+dur;
    var ag = av.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var ae = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    ae.property("ADBE Vector Ellipse Size").setValue([w*0.13, w*0.13]);
    var af = ag.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    af.property("ADBE Vector Fill Color").expression = cRef+'.effect("Accent")(1)';
    av.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    av.parent = card; av.property("ADBE Transform Group").property("ADBE Position").setValue([0, -HH+h*0.12]);
    av.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.12);

    var title = _uiText(comp, "Power Word GPT", Math.round(w*0.044), 6145, null, dur, white); _clean(title,true);
    atC(title, "Power Word GPT", w*0.044*1.08, 0, -HH+h*0.19, 0.16);
    var by = _uiText(comp, "By Edouard Brochu", Math.round(w*0.026), 6145, null, dur, grey); _clean(by);
    atC(by, "By Edouard Brochu", w*0.026, 0, -HH+h*0.225, 0.18);
    var d1 = _uiText(comp, "Swap weak words in your hooks for", Math.round(w*0.025), 6145, null, dur, grey); _clean(d1);
    atC(d1, "Swap weak words in your hooks for", w*0.025, 0, -HH+h*0.265, 0.2);
    var d2 = _uiText(comp, "powerful, attention-grabbing ones.", Math.round(w*0.025), 6145, null, dur, grey); _clean(d2);
    atC(d2, "powerful, attention-grabbing ones.", w*0.025, 0, -HH+h*0.295, 0.22);

    // user prompt bubble (right)
    var bub = _uiRRect(comp, "User Bubble", dur, w*0.5, h*0.07, w*0.04, "[0.18,0.18,0.2,1]");
    bub.parent = card; bub.property("ADBE Transform Group").property("ADBE Position").setValue([HW-w*0.28, -HH+h*0.37]);
    bub.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.28);
    bub.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.28, 100);
    var bt = _uiText(comp, "make my hook stronger", Math.round(w*0.026), 6145, null, dur, white); _clean(bt);
    atC(bt, "make my hook stronger", w*0.026, HW-w*0.25, -HH+h*0.367, 0.32);

    // GPT response — 5 lines, the power word changes, appear staggered
    var words = ["master","beast","pro","wizard","genius"];
    for (var i=0;i<words.length;i++){
        var line = _uiText(comp, "Become a ChatGPT " + words[i] + " in 45 seconds.", Math.round(w*0.027), 6145, null, dur, [0.86,0.86,0.88]); _clean(line);
        at(line, -HW+w*0.06, -HH+h*0.46 + i*h*0.045, 0.42 + i*0.08);
    }

    // action icons (copy / like / dislike)
    for (var k=0;k<3;k++){
        var g = comp.layers.addShape(); g.name="Act "+k; g.inPoint=comp.time; g.outPoint=comp.time+dur;
        var gg = g.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var gr = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
        gr.property("ADBE Vector Rect Size").setValue([w*0.032, w*0.032]);
        gr.property("ADBE Vector Rect Roundness").setValue(w*0.008);
        var gs = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        gs.property("ADBE Vector Stroke Color").setValue([0.5,0.5,0.55,1]);
        gs.property("ADBE Vector Stroke Width").setValue(2.5);
        g.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        at(g, -HW+w*0.08 + k*w*0.06, -HH+h*0.72, 0.85+k*0.04);
    }

    // input bar
    var bar = _uiRRect(comp, "Ask Bar", dur, cw*0.92, h*0.075, h*0.0375, "[0.14,0.14,0.16,1]");
    bar.parent = card; bar.property("ADBE Transform Group").property("ADBE Position").setValue([0, HH-h*0.06]);
    bar.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.5);
    bar.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.5, 100);
    var plus = _uiText(comp, "+", Math.round(w*0.05), 6147, null, dur, grey); _clean(plus);
    at(plus, -HW+w*0.08, HH-h*0.063, 0.54);
    var ask = _uiText(comp, "Ask anything", Math.round(w*0.028), 6145, null, dur, grey); _clean(ask);
    at(ask, -HW+w*0.15, HH-h*0.06, 0.56);
    var send = comp.layers.addShape(); send.name="Send"; send.inPoint=comp.time; send.outPoint=comp.time+dur;
    var sg = send.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var se = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
    se.property("ADBE Vector Ellipse Size").setValue([w*0.07, w*0.07]);
    var sf = sg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    sf.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
    send.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    at(send, HW-w*0.09, HH-h*0.06, 0.58);

    ctrl.selected = true;
}

// --- APPLE BOOKS: clean light reading card (cover + title + desc + controls)
function _appleBooks() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "APPLE BOOKS CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Card BG", [0.98,0.98,0.99]);
    _addColorControl(ctrl, "Accent", [0.0,0.48,1.0]);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.9, ch = w*0.58, rnd = w*0.035;
    var capYc = h*0.5;
    var dark = [0.12,0.12,0.14], grey = [0.5,0.5,0.55];

    var card = _uiRRect(comp, "Books Card", dur, cw, ch, rnd, cRef+'.effect("Card BG")(1)');
    _uiShadow(card);
    card.parent = ctrl; card.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    card.property("ADBE Transform Group").property("ADBE Scale").expression = _glassIn(pre, 0);
    card.property("ADBE Transform Group").property("ADBE Opacity").expression = _glassFade(pre, 0, 100);
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    // header
    var home = _uiText(comp, "Home", Math.round(w*0.042), 6145, null, dur, dark); _clean(home,true);
    at(home, -cw*0.42, -ch*0.4, 0.1);
    var divider = _uiRRect(comp, "Divider", dur, cw*0.92, 1.5, 0, "[0.86,0.86,0.88,1]");
    divider.parent = card; divider.property("ADBE Transform Group").property("ADBE Position").setValue([0, -ch*0.3]);
    divider.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.14, 100);

    // book cover (left) with a moody gradient
    var cov = _uiRRect(comp, "Book Cover", dur, w*0.2, w*0.3, w*0.014, "[1,1,1,1]");
    try {
        var cr = cov.Effects.addProperty("ADBE Ramp");
        cr.property("ADBE Ramp-0001").setValue([w/2, capYc - w*0.15]);
        cr.property("ADBE Ramp-0002").setValue([0.62,0.7,0.7,1]);
        cr.property("ADBE Ramp-0003").setValue([w/2, capYc + w*0.15]);
        cr.property("ADBE Ramp-0004").setValue([0.08,0.12,0.14,1]);
        cr.property("ADBE Ramp-0005").setValue(1);
    } catch(e){}
    cov.parent = card; cov.property("ADBE Transform Group").property("ADBE Position").setValue([-cw*0.3, ch*0.04]);
    cov.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.16);
    var covT = _uiText(comp, "ONE DARK\nWINDOW", Math.round(w*0.016), 6147, null, dur, [0.96,0.97,0.98]); _clean(covT,true);
    at(covT, -cw*0.3, -ch*0.02, 0.2);
    var covA = _uiText(comp, "RACHEL GILLIG", Math.round(w*0.0095), 6147, null, dur, [0.82,0.85,0.88]); _clean(covA);
    at(covA, -cw*0.3, ch*0.15, 0.22);

    // title / author / description (right of cover)
    var tx = -cw*0.13;
    var title = _uiText(comp, "One Dark Window", Math.round(w*0.038), 6145, null, dur, dark); _clean(title,true);
    at(title, tx, -ch*0.16, 0.18);
    var auth = _uiText(comp, "Rachel Gillig", Math.round(w*0.026), 6145, null, dur, grey); _clean(auth);
    at(auth, tx, -ch*0.06, 0.2);
    var d1 = _uiText(comp, "Elspeth needs a monster. The monster", Math.round(w*0.022), 6145, null, dur, grey); _clean(d1);
    at(d1, tx, ch*0.04, 0.24);
    var d2 = _uiText(comp, "might be her. Dark magic, a cursed", Math.round(w*0.022), 6145, null, dur, grey); _clean(d2);
    at(d2, tx, ch*0.1, 0.26);
    var d3 = _uiText(comp, "kingdom, and a highwayman.", Math.round(w*0.022), 6145, null, dur, grey); _clean(d3);
    at(d3, tx, ch*0.16, 0.28);

    // bottom reading-control bar
    var bar = _uiRRect(comp, "Control Bar", dur, cw*0.92, w*0.085, w*0.04, "[0.95,0.95,0.97,1]");
    bar.parent = card; bar.property("ADBE Transform Group").property("ADBE Position").setValue([0, ch*0.36]);
    bar.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.34);
    bar.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.34, 100);
    // control glyphs (small circles) + accent play
    for (var i=0;i<4;i++){
        var g = comp.layers.addShape(); g.name="Ctrl "+i; g.inPoint=comp.time; g.outPoint=comp.time+dur;
        var gg = g.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
        var ge = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
        ge.property("ADBE Vector Ellipse Size").setValue([w*0.03, w*0.03]);
        var gs = gg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Stroke");
        gs.property("ADBE Vector Stroke Color").setValue([0.45,0.45,0.5,1]);
        gs.property("ADBE Vector Stroke Width").setValue(2.5);
        g.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
        at(g, -cw*0.34 + i*w*0.075, ch*0.36, 0.38+i*0.03);
    }
    var play = _uiRRect(comp, "Play Pill", dur, w*0.16, w*0.05, w*0.025, cRef+'.effect("Accent")(1)');
    play.parent = card; play.property("ADBE Transform Group").property("ADBE Position").setValue([cw*0.32, ch*0.36]);
    play.property("ADBE Transform Group").property("ADBE Scale").expression = _popT(pre, 0.42);
    play.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.42, 100);
    var playT = _uiText(comp, "Read", Math.round(w*0.024), 6145, null, dur, [1,1,1]); _clean(playT,true);
    at(playT, cw*0.295, ch*0.355, 0.46);

    ctrl.selected = true;
}

// --- RECHARGE METER: dark glass tile, title, 0-100 scale, glowing capsule fill
function _rechargeMeter() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 4.0;
    var w = comp.width, h = comp.height;
    var ctrl = _uiCtl(comp, "RECHARGE CONTROLLER", dur, [w/2, h*0.5]);
    _addColorControl(ctrl, "Charge Color", [1,0.32,0.12]);
    _addSlider(ctrl, "Charge %", 62);
    var pre = _uiPrefix(ctrl.name);
    var cRef = 'thisComp.layer("' + ctrl.name + '")';
    var cw = w*0.64, ch = w*0.64, rnd = w*0.135;
    var card = _glassCard(comp, dur, cw, ch, rnd, ctrl, pre, 0,
        {grad:[[0.12,0.10,0.10],[0.05,0.04,0.04]], glow:[1,0.25,0.12], glowInt:0.7});
    function at(L, px, py, d0) { L.parent = card; L.property("ADBE Transform Group").property("ADBE Position").setValue([px,py]); L.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, d0, 100); }

    // title
    var title = _uiText(comp, "Recharge.", Math.round(w*0.066), 6145, null, dur, [1,1,1]); _clean(title,true);
    at(title, -w*0.24, -w*0.17, 0.12);

    // scale labels
    var s0 = _uiText(comp, "0", Math.round(w*0.03), 6145, null, dur, [0.5,0.48,0.48]); _clean(s0); at(s0, -w*0.24, -w*0.02, 0.18);
    var s50 = _uiText(comp, "50", Math.round(w*0.03), 6147, null, dur, [0.5,0.48,0.48]); _clean(s50); at(s50, 0, -w*0.02, 0.2);
    var s100 = _uiText(comp, "100", Math.round(w*0.03), 6149, null, dur, [0.5,0.48,0.48]); _clean(s100); at(s100, w*0.24, -w*0.02, 0.22);

    // capsule geometry
    var Wc = w*0.5, Hc = w*0.18, capY = w*0.14;
    // capsule background (dark pill)
    var capbg = _uiRRect(comp, "Capsule BG", dur, Wc, Hc, Hc/2, "[0.14,0.12,0.12,1]");
    capbg.parent = card; capbg.property("ADBE Transform Group").property("ADBE Position").setValue([0, capY]);
    capbg.property("ADBE Transform Group").property("ADBE Scale").expression = _glassIn(pre, 0.1);
    capbg.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.12, 100);

    // charge fill — clean pill with a smooth orange->deep-red gradient (no wave, no blob)
    var capYc = h*0.5 + capY;   // capsule centre in COMP space (for the Ramp points)
    var fillExpr = pre + "var chg=ctl.effect('Charge %')(1)/100; var e=eo3(Math.max(0,Math.min(1,(t-0.35)/1.5))); var p=chg*e; var wd="+Hc+" + ("+Wc+"-"+Hc+")*p; ";
    var fill = comp.layers.addShape(); fill.name="Charge Fill"; fill.inPoint=comp.time; fill.outPoint=comp.time+dur; fill.motionBlur=true;
    var fg = fill.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var fr = fg.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
    fr.property("ADBE Vector Rect Size").expression = fillExpr + "[wd, "+(Hc*0.9)+"];";
    fr.property("ADBE Vector Rect Position").expression = fillExpr + "[-"+(Wc/2)+" + wd/2, 0];";
    fr.property("ADBE Vector Rect Roundness").setValue(Hc/2);
    var ff = fg.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
    ff.property("ADBE Vector Fill Color").setValue([1,1,1,1]);
    try {
        var ramp = fill.Effects.addProperty("ADBE Ramp");
        ramp.property("ADBE Ramp-0001").setValue([w/2 - Wc/2, capYc]);
        ramp.property("ADBE Ramp-0002").expression = "var c="+cRef+".effect('Charge Color')(1); [Math.min(1,c[0]+0.08), Math.min(1,c[1]+0.3), Math.min(1,c[2]+0.05), 1];";
        ramp.property("ADBE Ramp-0003").setValue([w/2 + Wc/2, capYc]);
        ramp.property("ADBE Ramp-0004").expression = "var c="+cRef+".effect('Charge Color')(1); [c[0]*0.42, c[1]*0.16, c[2]*0.18, 1];";
        ramp.property("ADBE Ramp-0005").setValue(1);
    } catch(e){}
    _uiGlowFx(fill, w*0.013, 0.3);
    fill.parent = card; fill.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]);
    fill.property("ADBE Transform Group").property("ADBE Position").setValue([0, capY]);
    fill.property("ADBE Transform Group").property("ADBE Opacity").expression = _fadeT(pre, 0.3, 100);

    // clip the fill to the capsule pill
    var capMatte = _uiRRect(comp, "Capsule Matte", dur, Wc, Hc, Hc/2, "[1,1,1,1]");
    capMatte.parent = card; capMatte.property("ADBE Transform Group").property("ADBE Position").setValue([0, capY]);
    capMatte.property("ADBE Transform Group").property("ADBE Scale").expression = _glassIn(pre, 0.1);
    try { fill.setTrackMatte(capMatte, TrackMatteType.ALPHA); } catch(e){}

    ctrl.selected = true;
}

// ----------------------------------------------------
// IMPACT TOOLS & LAYER ANIMATORS (v2.0)
// ----------------------------------------------------
function _cameraShake() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 2.0;
    var L = comp.layers.addSolid([0,0,0], "[Nytvir] Camera Shake", comp.width, comp.height, comp.pixelAspect, comp.duration);
    L.adjustmentLayer = true;
    L.inPoint = comp.time;
    L.outPoint = Math.min(comp.duration, comp.time + dur);

    _addSlider(L, "Shake Strength", 30);
    _addSlider(L, "Shake Speed", 12);
    _addSlider(L, "Rotation Shake", 1);
    _addSlider(L, "Decay", 0); // 0 = constant shake, >0 = dies out

    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);   // Uniform Scale
    tr.property(4).setValue(110); // Scale up to hide edges
    tr.property(2).expression = "var s=effect('Shake Strength')(1); var f=effect('Shake Speed')(1); var d=effect('Decay')(1); var t=time-inPoint; var k=(d>0)?Math.exp(-t*d):1; wiggle(f, s*k);";
    tr.property(8).expression = "var r=effect('Rotation Shake')(1); var f=effect('Shake Speed')(1); var d=effect('Decay')(1); var t=time-inPoint; var k=(d>0)?Math.exp(-t*d):1; wiggle(f, r*k);";
}

function _flashCut() {
    var comp = app.project.activeItem;
    if(!comp) return;
    var dur = 0.6;
    var L = comp.layers.addSolid([1,1,1], "[Nytvir] Flash Cut", comp.width, comp.height, comp.pixelAspect, comp.duration);
    L.inPoint = comp.time;
    L.outPoint = Math.min(comp.duration, comp.time + dur);
    L.blendingMode = BlendingMode.ADD;

    _addSlider(L, "Flash Intensity", 100);
    _addSlider(L, "Decay Speed", 8);
    _addColorControl(L, "Flash Color", [1, 1, 1]);

    try {
        var fill = _addFx(L, "ADBE Fill");
        fill.property("ADBE Fill-0002").expression = "effect('Flash Color')(1);";
    } catch(e) {}

    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        "var i=effect('Flash Intensity')(1); var d=effect('Decay Speed')(1); var t=time-inPoint; Math.min(100, i*Math.exp(-t*d));";
}

function _popIn() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return;
    var L = comp.selectedLayers[0];
    _addSlider(L, "Animation Speed", 100);
    var fnLib = "function elasticOut(t){var c=(2*Math.PI)/3;return t<=0?0:t>=1?1:Math.pow(2,-10*t)*Math.sin((t*10-0.75)*c)+1;} ";
    L.property("ADBE Transform Group").property("ADBE Scale").expression =
        "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var p=Math.max(0,Math.min(1,t/0.6)); " + fnLib + "value*elasticOut(p);";
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; value*Math.max(0,Math.min(1,t/0.15));";
}

function _slideIn() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return;
    var L = comp.selectedLayers[0];
    _addSlider(L, "Animation Speed", 100);
    _addSlider(L, "Slide Distance", 300);
    _addSlider(L, "Slide Angle", 90); // 90 = from bottom, 270 = from top, 0 = from right, 180 = from left
    var fnLib = "function easeOutBack(t){var c1=1.70158;var c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);} ";
    L.property("ADBE Transform Group").property("ADBE Position").expression =
        "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; var p=Math.max(0,Math.min(1,t/0.7)); " + fnLib +
        "var e=easeOutBack(p); var dist=effect('Slide Distance')(1); var a=degreesToRadians(effect('Slide Angle')(1)); value + [Math.cos(a)*dist, Math.sin(a)*dist]*(1-e);";
    L.property("ADBE Transform Group").property("ADBE Opacity").expression =
        "var spd=effect('Animation Speed')(1)/100; var t=(time-inPoint)*spd; value*Math.max(0,Math.min(1,t/0.2));";
}

function _echoTrails() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return;
    var L = comp.selectedLayers[0];
    _addSlider(L, "Echo Count", 5);
    _addSlider(L, "Echo Spacing", 3);  // frames
    _addSlider(L, "Echo Decay", 60);   // %
    try {
        var echo = _addFx(L, "ADBE Echo");
        echo.property(1).expression = "-effect('Echo Spacing')(1) * thisComp.frameDuration;";
        echo.property(2).expression = "Math.max(1, Math.round(effect('Echo Count')(1)));";
        echo.property(3).setValue(1);
        echo.property(4).expression = "Math.max(0.05, Math.min(1, effect('Echo Decay')(1)/100));";
        echo.property(5).setValue(3);
    } catch(e) {}
}

// ----------------------------------------------------
// UI EDITOR APIS
// ----------------------------------------------------
function _isNytvirLayer(L) {
    if (L.name.indexOf("[Nytvir]") !== -1 || L.name.indexOf("CONTROLLER") !== -1) return true;
    // Layers we decorated in-place (RGB Split, Deep Glow, Pop In...) keep their own name,
    // so detect them by the marker controls we added.
    var marker = {"Transition Speed %":1, "Animation Speed":1, "Glow Intensity":1, "Echo Count":1};
    var fx = L.property("ADBE Effect Parade");
    if (fx) {
        for (var i=1; i<=fx.numProperties; i++) {
            if (marker[fx.property(i).name]) return true;
        }
    }
    return false;
}

function _jsonEscape(s) {
    return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function nytvir_getControls() {
    var comp = app.project.activeItem;
    if(!comp || comp.selectedLayers.length === 0) return '{"error": "Timeline da qatlam tanlanmagan.<br>O\'zgartirish uchun avval qatlamni ustiga bosing!"}';
    
    var L = comp.selectedLayers[0];
    if (!_isNytvirLayer(L)) return '{"error": "Tanlangan qatlam Nytvir effekti emas.<br>[Nytvir] yoki CONTROLLER qatlamini tanlang."}';

    var controls = [];
    var fx = L.property("ADBE Effect Parade");
    if(fx) {
        for(var i=1; i<=fx.numProperties; i++) {
            var f = fx.property(i);
            if(f.matchName === "ADBE Slider Control") {
                controls.push('{"type":"slider", "name":"' + _jsonEscape(f.name) + '", "value":' + f.property(1).value + '}');
            } else if(f.matchName === "ADBE Color Control") {
                var c = f.property(1).value;
                var r = Math.round(c[0]*255).toString(16); if(r.length===1) r="0"+r;
                var g = Math.round(c[1]*255).toString(16); if(g.length===1) g="0"+g;
                var b = Math.round(c[2]*255).toString(16); if(b.length===1) b="0"+b;
                var hex = "#" + r + g + b;
                controls.push('{"type":"color", "name":"' + _jsonEscape(f.name) + '", "value":"' + hex + '"}');
            }
        }
    }
    return '{"layerName": "' + _jsonEscape(L.name) + '", "controls": [' + controls.join(',') + ']}';
}

// ============================================================
// AMV TRANSITIONS (15) — high-energy adjustment layers
// ============================================================
function _amvSetup(name, dur) {
    var comp = app.project.activeItem;
    if (!comp) return null;
    var d = dur || 0.5;
    var L = comp.layers.addSolid([0, 0, 0], "[Nytvir AMV] " + name, comp.width, comp.height, comp.pixelAspect, d);
    L.adjustmentLayer = true;
    L.motionBlur = true;
    try { comp.motionBlur = true; } catch(e){}
    L.inPoint = comp.time - (d / 2);
    var tile = _addFx(L, "ADBE Tile");
    tile.property(4).setValue(300);
    tile.property(5).setValue(300);
    tile.property(6).setValue(1);
    _addSlider(L, "Transition Speed %", 100);
    return L;
}
// Smooth sine peak: 0 at start, 1 at middle, 0 at end. Feels like a real cinema whip.
var _AMV_BASE =
    "var spd = effect('Transition Speed %')(1)/100;\n" +
    "var t = (time - inPoint) * spd;\n" +
    "var dur = outPoint - inPoint;\n" +
    "var mid = dur/2;\n" +
    "function peak() {\n" +
    "  var p = Math.max(0, Math.min(1, t / dur));\n" +
    "  return Math.sin(Math.PI * p);\n" +
    "}\n" +
    "function easeIn(x) { return x*x*x; }\n" +
    "function easeOut(x) { return 1 - Math.pow(1-x, 3); }\n" +
    "function easeInOut(x) { return x<0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2,3)/2; }\n";

function _amv01_WhipLeft() {
    var L = _amvSetup("Whip Left", 0.4); if (!L) return;
    _addSlider(L, "Blur", 400);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var dist = " + L.containingComp.width + " * 0.6;" +
        "var res; if(t<mid){var p=t/mid; res=[cx - dist*easeIn(p), cy];} else {var p=(t-mid)/mid; res=[cx + dist - dist*easeOut(p), cy];} res;";
    var db = _addFx(L, "ADBE Directional Blur");
    db.property(1).setValue(90); // horizontal
    db.property(2).expression = _AMV_BASE + "peak() * effect('Blur')(1);";
}
function _amv02_WhipRight() {
    var L = _amvSetup("Whip Right", 0.4); if (!L) return;
    _addSlider(L, "Blur", 400);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var dist = " + L.containingComp.width + " * 0.6;" +
        "var res; if(t<mid){var p=t/mid; res=[cx + dist*easeIn(p), cy];} else {var p=(t-mid)/mid; res=[cx - dist + dist*easeOut(p), cy];} res;";
    var db = _addFx(L, "ADBE Directional Blur");
    db.property(1).setValue(90);
    db.property(2).expression = _AMV_BASE + "peak() * effect('Blur')(1);";
}
function _amv03_WhipUp() {
    var L = _amvSetup("Whip Up", 0.4); if (!L) return;
    _addSlider(L, "Blur", 400);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var dist = " + L.containingComp.height + " * 0.6;" +
        "var res; if(t<mid){var p=t/mid; res=[cx, cy - dist*easeIn(p)];} else {var p=(t-mid)/mid; res=[cx, cy + dist - dist*easeOut(p)];} res;";
    var db = _addFx(L, "ADBE Directional Blur");
    db.property(1).setValue(0);
    db.property(2).expression = _AMV_BASE + "peak() * effect('Blur')(1);";
}
function _amv04_WhipDown() {
    var L = _amvSetup("Whip Down", 0.4); if (!L) return;
    _addSlider(L, "Blur", 400);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var dist = " + L.containingComp.height + " * 0.6;" +
        "var res; if(t<mid){var p=t/mid; res=[cx, cy + dist*easeIn(p)];} else {var p=(t-mid)/mid; res=[cx, cy - dist + dist*easeOut(p)];} res;";
    var db = _addFx(L, "ADBE Directional Blur");
    db.property(1).setValue(0);
    db.property(2).expression = _AMV_BASE + "peak() * effect('Blur')(1);";
}
function _amv05_ZoomPunch() {
    var L = _amvSetup("Zoom Punch", 0.5); if (!L) return;
    _addSlider(L, "Zoom", 300);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * effect('Zoom')(1);";
    var rb = _addFx(L, "CC Radial Fast Blur");
    rb.property(2).expression = _AMV_BASE + "peak() * 40;";
}
function _amv06_ZoomOutPunch() {
    var L = _amvSetup("Zoom Out Punch", 0.5); if (!L) return;
    _addSlider(L, "Zoom", 150);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 - peak() * effect('Zoom')(1) * 0.5;";
    var rb = _addFx(L, "CC Radial Fast Blur");
    rb.property(2).expression = _AMV_BASE + "peak() * 30;";
}
function _amv07_RGBSlam() {
    var L = _amvSetup("RGB Slam", 0.4); if (!L) return;
    _addSlider(L, "Split Amount", 40);
    // 3-copy channel offset via CC Vector Blur or per-channel Displace — use "CC Composite" trick with Radial Blur+Set Channels
    // Simple: use "Shift Channels" trio + Directional Blur — complex. Use "CC Kaleida"? No.
    // Practical: CC Radial Blur + Curves per channel offset via CC Composite. Use built-in ADBE Chromatic Aberration if exists:
    try {
        var ca = _addFx(L, "ADBE CamLensBlur"); // not correct
    } catch(e){}
    // Fallback: use Displacement Map with per-channel offset simulated by 3-solid layered — too complex for adjustment
    // Simplest AMV RGB: apply "CC Composite" with radial blur on each channel — too heavy
    // Use "ADBE Displacement Map" — needs matte
    // Working alternative: Turbulent Displace + slight shake — visually similar RGB "vibrating" look via Camera Shake + Blur
    var sh = _addFx(L, "ADBE Camera Lens Blur");
    // If not available, skip
    try {
        var td = _addFx(L, "ADBE Turbulent Displace");
        td.property("Amount").expression = _AMV_BASE + "peak() * effect('Split Amount')(1) * 3;";
        td.property("Size").setValue(120);
        td.property("Evolution").expression = "time * 60;";
    } catch(e){}
    // Add slight scale pulse
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * 12;";
}
function _amv08_BassShake() {
    var L = _amvSetup("Bass Shake", 0.5); if (!L) return;
    _addSlider(L, "Shake Amount", 30);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var sh = effect('Shake Amount')(1) * peak();" +
        "seedRandom(1, false);" +
        "var jx = (noise(time*30)-0.5) * sh * 2;" +
        "var jy = (noise(time*30+50)-0.5) * sh * 2;" +
        "[cx + jx, cy + jy];";
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * 8 * Math.abs(Math.sin(time*35));";
}
function _amv09_RadialBurst() {
    var L = _amvSetup("Radial Burst", 0.5); if (!L) return;
    _addSlider(L, "Blur", 100);
    var rb = _addFx(L, "CC Radial Fast Blur");
    rb.property(2).expression = _AMV_BASE + "peak() * effect('Blur')(1);";
    try { rb.property(3).setValue(1); } catch(e){} // Zoom
}
function _amv10_TwirlCut() {
    var L = _amvSetup("Twirl Cut", 0.5); if (!L) return;
    _addSlider(L, "Angle", 180);
    var tw = _addFx(L, "ADBE Twirl");
    tw.property(1).expression = _AMV_BASE + "peak() * effect('Angle')(1);";
    tw.property(2).setValue(Math.min(L.containingComp.width, L.containingComp.height) * 0.6);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * 60;";
}
function _amv11_WarpZoom() {
    var L = _amvSetup("Warp Zoom", 0.5); if (!L) return;
    _addSlider(L, "Warp", 150);
    var oc = _addFx(L, "ADBE Optics Compensation");
    oc.property(2).setValue(1);
    oc.property(1).expression = _AMV_BASE + "peak() * effect('Warp')(1);";
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * 80;";
}
function _amv12_SpeedLines() {
    var L = _amvSetup("Speed Lines", 0.4); if (!L) return;
    // Use CC Rain / anime speed lines fake via CC Radial Blur on threshold noise
    var fn = _addFx(L, "ADBE Fractal Noise");
    fn.property("Fractal Type").setValue(5);
    fn.property("Contrast").setValue(800);
    fn.property("Brightness").setValue(-200);
    fn.property("Scale").setValue([300, 40]);
    fn.property("Complexity").setValue(2);
    fn.property("Evolution").expression = "time * 40;";
    var rb = _addFx(L, "CC Radial Fast Blur");
    rb.property(2).setValue(90);
    var op = L.property("Transform").property("Opacity");
    op.expression = _AMV_BASE + "peak() * 55;";
    L.blendingMode = BlendingMode.SCREEN;
}
function _amv13_WhiteFlash() {
    var comp = app.project.activeItem;
    if (!comp) return;
    var dur = 0.3;
    var f = comp.layers.addSolid([1, 1, 1], "[Nytvir AMV] White Flash", comp.width, comp.height, comp.pixelAspect, dur);
    f.inPoint = comp.time - dur/2;
    _addSlider(f, "Transition Speed %", 100);
    _addSlider(f, "Curve Type", 2);
    var op = f.property("Transform").property("Opacity");
    op.expression = _AMV_BASE + "peak() * 100;";
    f.blendingMode = BlendingMode.ADD;
}
function _amv14_CameraRam() {
    var L = _amvSetup("Camera Ram", 0.6); if (!L) return;
    _addSlider(L, "Ram Power", 200);
    _addSlider(L, "Shake", 40);
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * effect('Ram Power')(1);";
    tr.property(2).expression = _AMV_BASE +
        "var cx = " + (L.containingComp.width/2) + "; var cy = " + (L.containingComp.height/2) + ";" +
        "var sh = effect('Shake')(1) * peak();" +
        "[cx + (noise(time*40)-0.5)*sh*2, cy + (noise(time*40+30)-0.5)*sh*2];";
    var db = _addFx(L, "ADBE Directional Blur");
    db.property(1).expression = "time*720;";
    db.property(2).expression = _AMV_BASE + "peak() * 60;";
}
function _amv15_ShatterImpact() {
    var L = _amvSetup("Shatter Impact", 0.5); if (!L) return;
    _addSlider(L, "Displace", 200);
    var td = _addFx(L, "ADBE Turbulent Displace");
    td.property("Amount").expression = _AMV_BASE + "peak() * effect('Displace')(1);";
    td.property("Size").setValue(40);
    td.property("Complexity").setValue(8);
    td.property("Evolution").expression = "time * 200;";
    var tr = _addFx(L, "ADBE Geometry2");
    tr.property(3).setValue(1);
    tr.property(4).expression = _AMV_BASE + "100 + peak() * 30;";
}

function _amvDispatch(cmd) {
    var m = {
        amv01:_amv01_WhipLeft, amv02:_amv02_WhipRight, amv03:_amv03_WhipUp, amv04:_amv04_WhipDown,
        amv05:_amv05_ZoomPunch, amv06:_amv06_ZoomOutPunch, amv07:_amv07_RGBSlam, amv08:_amv08_BassShake,
        amv09:_amv09_RadialBurst, amv10:_amv10_TwirlCut, amv11:_amv11_WarpZoom, amv12:_amv12_SpeedLines,
        amv13:_amv13_WhiteFlash, amv14:_amv14_CameraRam, amv15:_amv15_ShatterImpact
    };
    if (m[cmd]) m[cmd]();
}

// ============================================================
// UI CARDS — Premium dashboard replicas
// ============================================================
function _uiHelperShape(comp, name, dur) {
    var s = comp.layers.addShape();
    s.name = name;
    s.inPoint = 0; s.outPoint = dur;
    return s;
}
function _uiRRect(shape, w, h, round, colorArr, fillOrStroke, strokeW) {
    var g = shape.property("Contents").addProperty("ADBE Vector Group");
    var c = g.property("Contents");
    var r = c.addProperty("ADBE Vector Shape - Rect");
    r.property("Size").setValue([w, h]);
    r.property("Roundness").setValue(round);
    if (fillOrStroke !== "strokeOnly") {
        var f = c.addProperty("ADBE Vector Graphic - Fill");
        f.property("Color").setValue(colorArr);
    }
    if (fillOrStroke === "strokeOnly" || fillOrStroke === "both") {
        var st = c.addProperty("ADBE Vector Graphic - Stroke");
        st.property("Color").setValue(colorArr);
        st.property("Stroke Width").setValue(strokeW || 2);
    }
    return g;
}
function _uiEllipse(shape, w, h, colorArr, fillOrStroke, strokeW) {
    var g = shape.property("Contents").addProperty("ADBE Vector Group");
    var c = g.property("Contents");
    var e = c.addProperty("ADBE Vector Shape - Ellipse");
    e.property("Size").setValue([w, h]);
    if (fillOrStroke !== "strokeOnly") {
        var f = c.addProperty("ADBE Vector Graphic - Fill");
        f.property("Color").setValue(colorArr);
    }
    if (fillOrStroke === "strokeOnly" || fillOrStroke === "both") {
        var st = c.addProperty("ADBE Vector Graphic - Stroke");
        st.property("Color").setValue(colorArr);
        st.property("Stroke Width").setValue(strokeW || 2);
    }
    return g;
}
function _uiText(comp, str, fontSize, colorArr, bold, dur) {
    var tl = comp.layers.addText(str);
    var td = tl.property("Source Text").value;
    td.fontSize = fontSize;
    td.fillColor = colorArr;
    td.applyStroke = false;
    td.applyFill = true;
    td.justification = ParagraphJustification.LEFT_JUSTIFY;
    if (bold) { try { td.fauxBold = true; } catch(e){} }
    tl.property("Source Text").setValue(td);
    tl.inPoint = 0; tl.outPoint = dur;
    return tl;
}

// -------------- BUDGET CARD --------------
function _uiBudgetCard() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return;
    var dur = 5, cx = comp.width/2, cy = comp.height/2;
    var W = 620, H = 720;

    // Card background — white rounded
    var card = _uiHelperShape(comp, "[Nytvir] Budget Card BG", dur);
    _uiRRect(card, W, H, 42, [1,1,1,1], "fill");
    card.property("Transform").property("Position").setValue([cx, cy]);
    // shadow via drop shadow effect
    try {
        var ds = card.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
        ds.property("Opacity").setValue(80);
        ds.property("Distance").setValue(0);
        ds.property("Softness").setValue(60);
    } catch(e){}
    // Card entrance
    var sc = card.property("Transform").property("Scale");
    sc.setValueAtTime(0, [95, 95]);
    sc.setValueAtTime(0.5, [100, 100]);
    var op = card.property("Transform").property("Opacity");
    op.setValueAtTime(0, 0); op.setValueAtTime(0.3, 100);

    // "Budget" label (top-left of card)
    var lbl = _uiText(comp, "Budget", 32, [0.42,0.42,0.5,1], false, dur);
    lbl.property("Transform").property("Position").setValue([cx - W/2 + 60, cy - H/2 + 100]);
    lbl.inPoint = 0.4;
    var lblOp = lbl.property("Transform").property("Opacity");
    lblOp.setValueAtTime(0.4, 0); lblOp.setValueAtTime(0.7, 100);

    // Big price — count-up
    var price = _uiText(comp, "$0", 84, [0.05,0.05,0.1,1], true, dur);
    price.property("Transform").property("Position").setValue([cx - W/2 + 60, cy - H/2 + 180]);
    price.inPoint = 0.5;
    var ptxt = price.property("Source Text");
    ptxt.expression =
        "var t = time - inPoint;\n" +
        "var target = 30739;\n" +
        "var dur = 1.5;\n" +
        "var p = ease(t, 0, dur, 0, target);\n" +
        "var s = Math.floor(p).toString();\n" +
        "if (s.length > 3) s = s.substr(0, s.length-3) + ',' + s.substr(s.length-3);\n" +
        "'$' + s;";

    // "+ $317" growth pill
    var pill = _uiHelperShape(comp, "[Nytvir] Growth Pill", dur);
    _uiRRect(pill, 200, 52, 26, [0.94,0.94,0.96,1], "fill");
    pill.property("Transform").property("Position").setValue([cx - W/2 + 160, cy - H/2 + 260]);
    pill.inPoint = 1.5;
    var pillOp = pill.property("Transform").property("Opacity");
    pillOp.setValueAtTime(1.5, 0); pillOp.setValueAtTime(1.8, 100);
    var pillTxt = _uiText(comp, "+ $317  📈", 22, [0.12,0.12,0.2,1], true, dur);
    pillTxt.property("Transform").property("Position").setValue([cx - W/2 + 80, cy - H/2 + 269]);
    pillTxt.inPoint = 1.5;
    pillTxt.property("Transform").property("Opacity").setValueAtTime(1.5, 0);
    pillTxt.property("Transform").property("Opacity").setValueAtTime(1.8, 100);
    pillTxt.parent = pill;
    pillTxt.property("Transform").property("Position").setValue([-70, 8]);

    // Chart area — under card
    var chartBaseY = cy + H/2 - 200;
    var chartLeft = cx - W/2 + 40;
    var chartRight = cx + W/2 - 40;
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var vals = [0.2, 0.3, 0.42, 0.68, 0.55, 0.72, 0.90]; // relative heights
    var chartHeight = 220;
    var stepX = (chartRight - chartLeft) / 6;

    // Area shape (filled path from bottom to line)
    var chart = _uiHelperShape(comp, "[Nytvir] Chart Area", dur);
    var chartG = chart.property("Contents").addProperty("ADBE Vector Group");
    var chartContents = chartG.property("Contents");
    var pathProp = chartContents.addProperty("ADBE Vector Shape - Group");
    var sh = new Shape();
    var verts = [];
    for (var i=0; i<7; i++) {
        verts.push([chartLeft + i*stepX, chartBaseY - vals[i]*chartHeight]);
    }
    // close area down to base
    verts.push([chartRight, chartBaseY]);
    verts.push([chartLeft, chartBaseY]);
    sh.vertices = verts;
    var tans = [];
    for (var j=0; j<verts.length; j++) tans.push([0,0]);
    sh.inTangents = tans; sh.outTangents = tans;
    sh.closed = true;
    pathProp.property("Path").setValue(sh);

    // Gradient fill (blue → transparent) — use solid fill with opacity mask via linear grad
    var gradF = chartContents.addProperty("ADBE Vector Graphic - G-Fill");
    gradF.property("Type").setValue(1); // linear
    gradF.property("Start Point").setValue([0, chartBaseY - chartHeight]);
    gradF.property("End Point").setValue([0, chartBaseY]);
    try {
        // Set gradient stops via encoded string
        var gradStr = "1,0.28,0.34,1,1, 0,0.28,0.34,1,0";
        gradF.property("Colors").setValue([0, 0.28, 0.34, 1,   0.35, 0.28, 0.34, 1,   0.7, 0.28, 0.34, 1,   1, 0.28, 0.34, 1]);
    } catch(gerr) {
        // fallback: solid fill
        var solidF = chartContents.addProperty("ADBE Vector Graphic - Fill");
        solidF.property("Color").setValue([0.28, 0.34, 1, 1]);
        solidF.property("Opacity").setValue(65);
    }

    // Chart stroke on top — animated draw with Trim Paths
    var line = _uiHelperShape(comp, "[Nytvir] Chart Line", dur);
    var lineG = line.property("Contents").addProperty("ADBE Vector Group");
    var lineC = lineG.property("Contents");
    var lineP = lineC.addProperty("ADBE Vector Shape - Group");
    var sh2 = new Shape();
    var lVerts = [];
    for (var k=0; k<7; k++) lVerts.push([chartLeft + k*stepX, chartBaseY - vals[k]*chartHeight]);
    sh2.vertices = lVerts;
    var lTans = []; for (var m=0; m<lVerts.length; m++) lTans.push([0,0]);
    sh2.inTangents = lTans; sh2.outTangents = lTans;
    sh2.closed = false;
    lineP.property("Path").setValue(sh2);
    var lineStroke = lineC.addProperty("ADBE Vector Graphic - Stroke");
    lineStroke.property("Color").setValue([0.28, 0.36, 1, 1]);
    lineStroke.property("Stroke Width").setValue(6);
    // Line cap: round
    try { lineStroke.property("Line Cap").setValue(2); lineStroke.property("Line Join").setValue(2); } catch(e){}
    // Trim paths for draw-on
    var trim = lineG.property("Contents").addProperty("ADBE Vector Filter - Trim");
    var trimEnd = trim.property("End");
    trimEnd.setValueAtTime(0.8, 0);
    trimEnd.setValueAtTime(2.4, 100);
    var eZ = new KeyframeEase(0, 66);
    trimEnd.setTemporalEaseAtKey(1, [eZ], [eZ]);
    trimEnd.setTemporalEaseAtKey(2, [eZ], [eZ]);

    // Callout on Wednesday ($750 pill)
    var callX = chartLeft + 3*stepX;
    var callY = chartBaseY - vals[3]*chartHeight;
    var dot = _uiHelperShape(comp, "[Nytvir] Wed Dot", dur);
    _uiEllipse(dot, 24, 24, [1,1,1,1], "fill");
    _uiEllipse(dot, 16, 16, [0.28,0.36,1,1], "fill");
    dot.property("Transform").property("Position").setValue([callX, callY]);
    dot.inPoint = 2.2;
    var dotSc = dot.property("Transform").property("Scale");
    dotSc.setValueAtTime(2.2, [0,0]);
    dotSc.setValueAtTime(2.5, [120,120]);
    dotSc.setValueAtTime(2.7, [100,100]);

    var callPill = _uiHelperShape(comp, "[Nytvir] Wed Callout", dur);
    _uiRRect(callPill, 130, 46, 23, [0.35, 0.32, 0.98, 1], "fill");
    callPill.property("Transform").property("Position").setValue([callX, callY - 45]);
    callPill.inPoint = 2.5;
    var cpOp = callPill.property("Transform").property("Opacity");
    cpOp.setValueAtTime(2.5, 0); cpOp.setValueAtTime(2.8, 100);
    var cpY = callPill.property("Transform").property("Position");
    cpY.setValueAtTime(2.5, [callX, callY - 25]);
    cpY.setValueAtTime(2.8, [callX, callY - 55]);
    var callTxt = _uiText(comp, "$750", 22, [1,1,1,1], true, dur);
    callTxt.property("Transform").property("Position").setValue([-30, 8]);
    callTxt.parent = callPill;
    callTxt.inPoint = 2.5;
    callTxt.property("Transform").property("Opacity").setValueAtTime(2.5, 0);
    callTxt.property("Transform").property("Opacity").setValueAtTime(2.8, 100);

    // Day labels
    for (var d = 0; d < days.length; d++) {
        var dt = _uiText(comp, days[d], 20, [0.55,0.55,0.62,1], false, dur);
        var dPos = [chartLeft + d*stepX - 20, chartBaseY + 40];
        dt.property("Transform").property("Position").setValue(dPos);
        dt.inPoint = 1.0 + d * 0.05;
        var dOp = dt.property("Transform").property("Opacity");
        dOp.setValueAtTime(1.0 + d*0.05, 0);
        dOp.setValueAtTime(1.3 + d*0.05, 100);
    }
}

// -------------- ORBITAL MENU --------------
function _uiOrbitalMenu() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return;
    var dur = 6, cx = comp.width/2, cy = comp.height/2;

    // Dark background
    var bg = comp.layers.addSolid([0.02, 0.02, 0.03], "[Nytvir] Orbit BG", comp.width, comp.height, 1, dur);

    // Center portrait circle (placeholder — user replaces with image)
    var portrait = _uiHelperShape(comp, "[Nytvir] Portrait", dur);
    _uiEllipse(portrait, 260, 260, [0.10, 0.15, 0.25, 1], "fill");
    portrait.property("Transform").property("Position").setValue([cx, cy]);
    // Soft glow ring around portrait
    var glowRing = _uiHelperShape(comp, "[Nytvir] Portrait Glow", dur);
    _uiEllipse(glowRing, 300, 300, [1,1,1,1], "fill");
    glowRing.property("Transform").property("Position").setValue([cx, cy]);
    try {
        var gg = glowRing.property("ADBE Effect Parade").addProperty("ADBE Fast Blur");
        gg.property("Blurriness").setValue(30);
    } catch(e){}
    glowRing.property("Transform").property("Opacity").setValue(50);
    glowRing.moveAfter(portrait);

    // 3 orbit rings (thin white strokes, low opacity, slight ellipse)
    var radii = [220, 340, 460];
    for (var r = 0; r < radii.length; r++) {
        var ring = _uiHelperShape(comp, "[Nytvir] Orbit " + (r+1), dur);
        _uiEllipse(ring, radii[r]*2, radii[r]*2 * 0.7, [1,1,1,1], "strokeOnly", 1);
        ring.property("Transform").property("Position").setValue([cx, cy]);
        ring.property("Transform").property("Opacity").setValue(25 - r*4);
        // slow continuous rotation
        var rr = ring.property("Transform").property("Rotation");
        rr.expression = "time * " + (2 + r * 1.5) + " * (" + (r % 2 === 0 ? "1" : "-1") + ");";
    }

    // Service pill labels (6 pills orbiting)
    var labels = ["CRIATIVOS", "SOCIAL MEDIA", "PÁGINA DE CAPTURA", "PÁGINA DE VENDAS", "DESIGN DE EBOOKS", "IDENTIDADE VISUAL"];
    var angleStart = -Math.PI/2;
    for (var p = 0; p < labels.length; p++) {
        var ang = angleStart + (p / labels.length) * Math.PI * 2;
        var ringR = radii[p % 3];
        var px = cx + Math.cos(ang) * ringR;
        var py = cy + Math.sin(ang) * ringR * 0.7;

        var pill = _uiHelperShape(comp, "[Nytvir] Pill " + labels[p], dur);
        _uiRRect(pill, 220, 46, 23, [0.15, 0.15, 0.18, 1], "fill");
        // stroke as second group
        _uiRRect(pill, 220, 46, 23, [0.4, 0.4, 0.5, 1], "strokeOnly", 1);
        pill.property("Transform").property("Position").setValue([px, py]);
        pill.inPoint = 0.3 + p * 0.25;
        var pOp = pill.property("Transform").property("Opacity");
        pOp.setValueAtTime(0.3 + p*0.25, 0);
        pOp.setValueAtTime(0.7 + p*0.25, 100);
        var pSc = pill.property("Transform").property("Scale");
        pSc.setValueAtTime(0.3 + p*0.25, [70, 70]);
        pSc.setValueAtTime(0.7 + p*0.25, [100, 100]);

        var ptxt = _uiText(comp, labels[p], 16, [0.85, 0.85, 0.9, 1], false, dur);
        ptxt.parent = pill;
        ptxt.property("Transform").property("Position").setValue([-70, 6]);
        ptxt.inPoint = 0.3 + p*0.25;
        ptxt.property("Transform").property("Opacity").setValueAtTime(0.3 + p*0.25, 0);
        ptxt.property("Transform").property("Opacity").setValueAtTime(0.7 + p*0.25, 100);
    }

    // Bottom tagline
    var tag = _uiText(comp, "Har birini batafsil ko'rsatishga tayyorman", 22, [0.85, 0.85, 0.9, 1], false, dur);
    tag.property("Transform").property("Position").setValue([cx - 300, cy + 480]);
    tag.inPoint = 2.5;
    var tOp = tag.property("Transform").property("Opacity");
    tOp.setValueAtTime(2.5, 0); tOp.setValueAtTime(3.0, 100);

    // Small orbit dots (decoration)
    for (var od = 0; od < 8; od++) {
        var oa = od * Math.PI / 4;
        var or = radii[od % 3];
        var odot = _uiHelperShape(comp, "[Nytvir] OrbitDot " + od, dur);
        _uiEllipse(odot, 8, 8, [0.6, 0.6, 0.7, 1], "fill");
        odot.property("Transform").property("Position").setValue([cx + Math.cos(oa) * or, cy + Math.sin(oa) * or * 0.7]);
        odot.property("Transform").property("Opacity").setValue(60);
    }
}

function _placeholderRemove() {
    try {
        var comp = app.project.activeItem;
        if (!comp || !(comp instanceof CompItem)) return '{"error":"Kompozitsiya ochilmagan"}';
        if (comp.selectedLayers.length === 0) return '{"error":"Personaj qatlamini tanlang"}';
        var L = comp.selectedLayers[0];

        // FAST PATH: if layer is a file-backed footage (PNG/JPG), use that file directly
        var directPath = null;
        try {
            if (L.source && L.source.mainSource && L.source.mainSource.file) {
                var sf = L.source.mainSource.file;
                if (sf.exists) {
                    var nm = sf.fsName.toLowerCase();
                    if (nm.match(/\.(png|jpg|jpeg|webp)$/)) directPath = sf.fsName;
                }
            }
        } catch (fe) {}

        // temp PNG path (used only if not direct)
        var tempFolder = Folder(Folder.temp.fsName + "/nytvir_autorig");
        if (!tempFolder.exists) tempFolder.create();
        var pngFile = new File(tempFolder.fsName + "/frame_" + (new Date()).getTime() + ".png");

        var srcW = comp.width, srcH = comp.height;
        var usedPath = "";
        var pngSize = 0;
        var mode = "";

        if (directPath) {
            // Direct file path — no re-render needed
            usedPath = directPath;
            var df = new File(directPath);
            pngSize = df.length;
            if (L.source) { srcW = L.source.width; srcH = L.source.height; }
            mode = "direct";
        } else {
            // Fallback: render current comp frame
            try {
                comp.saveFrameToPng(comp.time, pngFile);
            } catch (se) {
                return '{"error":"saveFrameToPng xato: ' + _jsonEscape(se.toString()) + '"}';
            }
            if (!pngFile.exists) return '{"error":"PNG yaratilmadi: ' + _jsonEscape(pngFile.fsName) + '"}';
            pngSize = pngFile.length;
            if (pngSize < 100) return '{"error":"PNG juda kichik (' + pngSize + ' bayt)"}';
            usedPath = pngFile.fsName;
            mode = "compRender";
        }

        // Return path + layer metadata for coordinate mapping
        var lPos = L.property("Transform").property("Position").value;
        var lAnc = L.property("Transform").property("Anchor Point").value;
        var lScl = L.property("Transform").property("Scale").value;

        return '{"path":"' + _jsonEscape(usedPath) +
               '","mode":"' + mode + '"' +
               ',"pngSize":' + pngSize +
               ',"layerIdx":' + L.index +
               ',"compW":' + comp.width + ',"compH":' + comp.height +
               ',"srcW":' + srcW + ',"srcH":' + srcH +
               ',"posX":' + lPos[0] + ',"posY":' + lPos[1] +
               ',"ancX":' + lAnc[0] + ',"ancY":' + lAnc[1] +
               ',"sclX":' + lScl[0] + ',"sclY":' + lScl[1] + '}';
    } catch (e) {
        return '{"error":"' + _jsonEscape(e.toString()) + '"}';
    }
}

function nytvir_autoRigApply(jsonStr) {
    try {
        var comp = app.project.activeItem;
        if (!comp || !(comp instanceof CompItem)) return "Comp yo'q";
        // parse minimal: eval is safe here since we control the source
        var data = eval("(" + jsonStr + ")");
        if (!data || !data.keypoints) return "Keypoints yo'q";

        var kps = data.keypoints; // array of {name, x, y, score}
        var srcW = data.srcW, srcH = data.srcH;
        var posX = data.posX, posY = data.posY;
        var ancX = data.ancX, ancY = data.ancY;
        var sclX = data.sclX / 100, sclY = data.sclY / 100;

        var L = comp.layer(data.layerIdx);
        if (!L) return "Qatlam topilmadi";

        // Clean previous auto-rig
        for (var i = comp.numLayers; i >= 1; i--) {
            var nm = comp.layer(i).name;
            if (nm.indexOf("[RIG]") === 0) comp.layer(i).remove();
        }

        // Master root null at character's anchor
        var root = comp.layers.addNull(comp.duration);
        root.name = "[RIG] Root";
        root.label = 11;
        root.property("Transform").property("Position").setValue([posX, posY]);
        // Move above the character layer
        root.moveBefore(L);

        // Add idle controls
        var eff = root.property("ADBE Effect Parade");
        var spd = eff.addProperty("ADBE Slider Control"); spd.name = "Idle Speed"; spd.property(1).setValue(100);
        var brt = eff.addProperty("ADBE Slider Control"); brt.name = "Breath Amount"; brt.property(1).setValue(3);
        var sway = eff.addProperty("ADBE Slider Control"); sway.name = "Sway Amount"; sway.property(1).setValue(1.5);
        var jit = eff.addProperty("ADBE Slider Control"); jit.name = "Micro Jitter"; jit.property(1).setValue(1);

        // Apply idle expressions to root
        var rPos = root.property("Transform").property("Position");
        rPos.expression =
            "var s = effect(\"Idle Speed\")(1) / 100;\n" +
            "var b = effect(\"Breath Amount\")(1);\n" +
            "var j = effect(\"Micro Jitter\")(1);\n" +
            "var t = time * s;\n" +
            "var breath = Math.sin(t * Math.PI / 2) * b;\n" +
            "seedRandom(1, true);\n" +
            "var jx = (noise(t * 4) - 0.5) * j * 2;\n" +
            "var jy = (noise(t * 4 + 100) - 0.5) * j * 2;\n" +
            "[value[0] + jx, value[1] + breath + jy];";
        var rRot = root.property("Transform").property("Rotation");
        rRot.expression =
            "var s = effect(\"Idle Speed\")(1) / 100;\n" +
            "var sw = effect(\"Sway Amount\")(1);\n" +
            "Math.sin(time * s * Math.PI / 3) * sw;";

        // Character layer parented to root, anchored properly
        L.parent = root;

        // Coordinate mapping depends on export mode
        // - "compRender": keypoints in comp pixel space → use directly
        // - "direct": keypoints in source pixel space → map through layer transform
        var mode = data.mode || "compRender";
        function toCompCoord(px, py) {
            if (mode === "compRender") return [px, py];
            // direct: relative to anchor, scaled, offset by layer position
            var relX = (px - ancX) * sclX;
            var relY = (py - ancY) * sclY;
            return [posX + relX, posY + relY];
        }

        // Create child null for each keypoint (score > 0.3 only)
        var created = 0;
        for (var k = 0; k < kps.length; k++) {
            var kp = kps[k];
            if (kp.score < 0.3) continue;
            var n = comp.layers.addNull(comp.duration);
            n.name = "[RIG] " + kp.name;
            n.label = 14;
            var xy = toCompCoord(kp.x, kp.y);
            n.property("Transform").property("Position").setValue(xy);
            n.parent = root;
            // small size for nulls
            try { n.property("ADBE AV Layer Overrides Group").property("ADBE Null Size Property").setValue([50, 50]); } catch (ee) {}
            created++;
        }

        return "Rig yaratildi: " + created + " joint. Root null = [RIG] Root. Idle animatsiyasi qo'llandi.";
    } catch (e) {
        return "Xato: " + e.toString() + (e.line ? " @" + e.line : "");
    }
}

// ============================================================
// TEXT FX PACK — 30 cinematic text animations
// ============================================================
function _txBase(str, size, bold, dur) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return null;
    var tl = comp.layers.addText(str || "YOUR TEXT");
    var td = tl.property("Source Text").value;
    td.fontSize = size || 96;
    td.fillColor = [1, 1, 1];
    td.applyStroke = false;
    td.applyFill = true;
    td.justification = ParagraphJustification.CENTER_JUSTIFY;
    if (bold) { try { td.fauxBold = true; } catch (e) {} }
    tl.property("Source Text").setValue(td);
    tl.property("Transform").property("Position").setValue([comp.width / 2, comp.height / 2]);
    tl.motionBlur = true;
    tl.inPoint = comp.time;
    tl.outPoint = comp.time + (dur || 4);
    tl.name = "[Nytvir Text] " + (str || "text");
    return tl;
}
function _txAnim(tl, nm) {
    var a = tl.property("ADBE Text Properties").property("ADBE Text Animators").addProperty("ADBE Text Animator");
    a.name = nm || "Anim";
    return a;
}
function _txSel(anim, based, shape) {
    var s = anim.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    var adv = s.property("ADBE Text Range Advanced");
    if (based) { try { adv.property("ADBE Text Range Type2").setValue(based); } catch (e) {} }
    if (shape) { try { adv.property("ADBE Text Range Shape").setValue(shape); } catch (e) {} }
    return s;
}
// range shrinks Start 0→100 with End=100 → chars reveal L→R
function _txReveal(sel, t0, t1, ease) {
    sel.property("ADBE Text Percent End").setValue(100);
    var p = sel.property("ADBE Text Percent Start");
    p.setValueAtTime(t0, 0);
    p.setValueAtTime(t1, 100);
    var e = new KeyframeEase(0, ease == null ? 75 : ease);
    p.setTemporalEaseAtKey(1, [e], [e]);
    p.setTemporalEaseAtKey(2, [e], [e]);
    return p;
}
function _txFade(tl, t0, dIn, dOut) {
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t0, 0);
    op.setValueAtTime(t0 + dIn, 100);
    op.setValueAtTime(tl.outPoint - dOut, 100);
    op.setValueAtTime(tl.outPoint, 0);
}
function _txDrop(tl, dist, soft, opa) {
    try {
        var ds = tl.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
        ds.property("Distance").setValue(dist == null ? 0 : dist);
        ds.property("Softness").setValue(soft == null ? 30 : soft);
        ds.property("Opacity").setValue(opa == null ? 220 : opa);
        ds.property("Direction").setValue(0);
    } catch (e) {}
}
function _txGlow(tl, thr, rad, inten) {
    var g = null;
    try {
        g = tl.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        g.property("Glow Threshold").setValue(thr);
        g.property("Glow Radius").setValue(rad);
        g.property("Glow Intensity").setValue(inten);
    } catch (e) {
        try {
            g = tl.property("ADBE Effect Parade").addProperty("ADBE Glow");
            g.property(1).setValue(thr);
            g.property(2).setValue(rad);
            g.property(3).setValue(inten);
        } catch (e2) {}
    }
    return g;
}

// ---------- 30 animations ----------
function _txFx01_WordSlam() {
    var tl = _txBase("WORD SLAM", 140, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Slam"); var s = _txSel(a, 3, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 85);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Scale").setValue([300, 300]); } catch(e){}
    try { p.addProperty("ADBE Text Blur").setValue([25, 25]); } catch(e){}
    _txDrop(tl, 0, 30, 230);
}
function _txFx02_LetterRise() {
    var tl = _txBase("LETTER RISE", 96, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Rise"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.5, 75);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 70]); } catch(e){}
    try { p.addProperty("ADBE Text Blur").setValue([12, 12]); } catch(e){}
}
function _txFx03_LetterDrop() {
    var tl = _txBase("LETTER DROP", 96, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Drop"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 65);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, -90]); } catch(e){}
}
function _txFx04_LetterScatter() {
    var tl = _txBase("SCATTER", 110, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Scatter"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.8, 60);
    try { s.property("ADBE Text Randomize Order").setValue(1); } catch(e){}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([220, -160]); } catch(e){}
    try { p.addProperty("ADBE Text Rotation").setValue(120); } catch(e){}
    try { p.addProperty("ADBE Text Scale").setValue([50, 50]); } catch(e){}
}
function _txFx05_Typewriter() {
    var tl = _txBase("Typewriter effect...", 72, false, 4); if (!tl) return;
    var a = _txAnim(tl, "Type"); var s = _txSel(a, 1, 1);
    s.property("ADBE Text Percent End").setValue(100);
    var p = s.property("ADBE Text Percent Start");
    p.setValueAtTime(tl.inPoint, 0);
    p.setValueAtTime(tl.inPoint + 2.4, 100);
    a.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity").setValue(0);
    // Cursor "|" appended layer
    var comp = app.project.activeItem;
    var cur = comp.layers.addText("|");
    cur.name = "[Nytvir Text] cursor";
    var ctd = cur.property("Source Text").value;
    ctd.fontSize = 72; ctd.fillColor = [1,1,1]; ctd.justification = ParagraphJustification.LEFT_JUSTIFY;
    cur.property("Source Text").setValue(ctd);
    cur.property("Transform").property("Position").setValue([comp.width/2, comp.height/2]);
    cur.inPoint = tl.inPoint; cur.outPoint = tl.outPoint;
    cur.property("Transform").property("Opacity").expression = "Math.floor(time*2.5)%2==0 ? 100 : 0;";
    cur.parent = tl;
}
function _txFx06_TypewriterFast() {
    var tl = _txBase("FAST TYPE", 100, true, 3); if (!tl) return;
    var a = _txAnim(tl, "FastType"); var s = _txSel(a, 1, 1);
    s.property("ADBE Text Percent End").setValue(100);
    var p = s.property("ADBE Text Percent Start");
    p.setValueAtTime(tl.inPoint, 0);
    p.setValueAtTime(tl.inPoint + 0.5, 100);
    a.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity").setValue(0);
}
function _txFx07_BlurWave() {
    var tl = _txBase("BLUR WAVE", 110, true, 3); if (!tl) return;
    var a = _txAnim(tl, "BlurWave"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.8, 80);
    var p = a.property("ADBE Text Animator Properties");
    try { p.addProperty("ADBE Text Blur").setValue([45, 45]); } catch(e){}
    p.addProperty("ADBE Text Opacity").setValue(0);
}
function _txFx08_ScaleUp() {
    var tl = _txBase("SCALE UP", 96, true, 3); if (!tl) return;
    var t = tl.inPoint;
    var sc = tl.property("Transform").property("Scale");
    sc.setValueAtTime(t, [0, 0]);
    sc.setValueAtTime(t + 0.55, [115, 115]);
    sc.setValueAtTime(t + 0.9, [100, 100]);
    var e0 = new KeyframeEase(0, 33); var e1 = new KeyframeEase(0, 90);
    sc.setTemporalEaseAtKey(1, [e0, e0], [e0, e0]);
    sc.setTemporalEaseAtKey(2, [e0, e0], [e1, e1]);
    sc.setTemporalEaseAtKey(3, [e1, e1], [e1, e1]);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.3, 100);
}
function _txFx09_ScaleDown() {
    var tl = _txBase("IMPACT!", 140, true, 3); if (!tl) return;
    var t = tl.inPoint;
    var sc = tl.property("Transform").property("Scale");
    sc.setValueAtTime(t, [280, 280]);
    sc.setValueAtTime(t + 0.4, [100, 100]);
    sc.setValueAtTime(t + 0.55, [108, 108]);
    sc.setValueAtTime(t + 0.75, [100, 100]);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.1, 100);
    try {
        var b = tl.property("ADBE Effect Parade").addProperty("ADBE Fast Blur");
        b.property("Blurriness").setValueAtTime(t, 40);
        b.property("Blurriness").setValueAtTime(t + 0.4, 0);
    } catch(e){}
}
function _txFx10_SplitReveal() {
    var tl = _txBase("SPLIT WIDE", 110, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Split"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 80);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Scale").setValue([0, 100]); } catch(e){}
    try { p.addProperty("ADBE Text Tracking Amount").setValue(200); } catch(e){}
}
function _txFx11_WhisperFade() {
    var tl = _txBase("whisper", 88, false, 4); if (!tl) return;
    var td = tl.property("Source Text").value;
    try { td.fauxItalic = true; } catch(e){}
    td.fillColor = [0.94, 0.90, 0.82];
    td.tracking = 80;
    tl.property("Source Text").setValue(td);
    _txFade(tl, tl.inPoint, 1.2, 1.3);
    var a = _txAnim(tl, "Whisper"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 2.0, 82);
    var p = a.property("ADBE Text Animator Properties");
    try { p.addProperty("ADBE Text Blur").setValue([30, 30]); } catch(e){}
    _txGlow(tl, 40, 25, 0.9);
    _txDrop(tl, 0, 45, 210);
}
function _txFx12_HeroTitle() {
    var tl = _txBase("HERO TITLE", 130, true, 4); if (!tl) return;
    var t = tl.inPoint;
    var a = _txAnim(tl, "Hero"); var s = _txSel(a, 1, 6);
    _txReveal(s, t, t + 1.2, 85);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 30]); } catch(e){}
    try { p.addProperty("ADBE Text Scale").setValue([110, 110]); } catch(e){}
    var sc = tl.property("Transform").property("Scale");
    sc.setValueAtTime(t, [100, 100]);
    sc.setValueAtTime(tl.outPoint, [107, 107]);
    _txDrop(tl, 0, 40, 200);
}
function _txFx13_NeonFlicker() {
    var tl = _txBase("NEON", 130, true, 3); if (!tl) return;
    var td = tl.property("Source Text").value;
    td.fillColor = [1, 0.15, 0.55];
    tl.property("Source Text").setValue(td);
    var op = tl.property("Transform").property("Opacity");
    var t = tl.inPoint;
    // flicker keys
    var flicks = [0,15,0,80,0,60,100,40,100,20,100];
    for (var i=0; i<flicks.length; i++) op.setValueAtTime(t + i*0.08, flicks[i]);
    op.setValueAtTime(tl.outPoint-0.3, 100); op.setValueAtTime(tl.outPoint, 0);
    _txGlow(tl, 20, 60, 1.6);
}
function _txFx14_GlitchRGB() {
    var tl = _txBase("GLITCH", 130, true, 3); if (!tl) return;
    try {
        var sc = tl.property("ADBE Effect Parade").addProperty("ADBE Shift Channels");
        sc.property("Take Red From").setValue(1);
    } catch(e){}
    // Wiggle position
    var pos = tl.property("Transform").property("Position");
    pos.expression = "wiggle(15, 12);";
    var op = tl.property("Transform").property("Opacity");
    op.expression = "seedRandom(1,true); Math.random()>0.15 ? 100 : 30;";
}
function _txFx15_LetterFlip() {
    var tl = _txBase("FLIP", 120, true, 3); if (!tl) return;
    tl.threeDLayer = true;
    var a = _txAnim(tl, "Flip"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.6, 75);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Rotation Y").setValue(90); } catch(e){}
    try { p.addProperty("ADBE Text Position 3D").setValue([0, 0, -80]); } catch(e){}
}
function _txFx16_SlideLeft() {
    var tl = _txBase("SLIDE LEFT", 96, true, 3); if (!tl) return;
    var comp = app.project.activeItem;
    var t = tl.inPoint;
    var pos = tl.property("Transform").property("Position");
    pos.setValueAtTime(t, [comp.width * 1.4, comp.height/2]);
    pos.setValueAtTime(t + 0.8, [comp.width/2, comp.height/2]);
    var e = new KeyframeEase(0, 88);
    pos.setTemporalEaseAtKey(1, [e,e], [e,e]);
    pos.setTemporalEaseAtKey(2, [e,e], [e,e]);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.25, 100);
}
function _txFx17_SlideUp() {
    var tl = _txBase("SLIDE UP", 96, true, 3); if (!tl) return;
    var comp = app.project.activeItem;
    var t = tl.inPoint;
    var pos = tl.property("Transform").property("Position");
    pos.setValueAtTime(t, [comp.width/2, comp.height + 100]);
    pos.setValueAtTime(t + 0.9, [comp.width/2, comp.height/2]);
    var e = new KeyframeEase(0, 85);
    pos.setTemporalEaseAtKey(1, [e,e], [e,e]);
    pos.setTemporalEaseAtKey(2, [e,e], [e,e]);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.3, 100);
}
function _txFx18_TextShatter() {
    var tl = _txBase("SHATTER", 120, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Shatter"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.6, 65);
    try { s.property("ADBE Text Randomize Order").setValue(1); } catch(e){}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([160, -180]); } catch(e){}
    try { p.addProperty("ADBE Text Rotation").setValue(180); } catch(e){}
    try { p.addProperty("ADBE Text Scale").setValue([30, 30]); } catch(e){}
    try { p.addProperty("ADBE Text Blur").setValue([25, 25]); } catch(e){}
}
function _txFx19_WaveReveal() {
    var tl = _txBase("WAVE MOTION", 96, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Wave"); var s = _txSel(a, 1, 4);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.8, 70);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 60]); } catch(e){}
    // Second wiggle animator for continuous wave
    var a2 = _txAnim(tl, "WaveIdle");
    var s2 = _txSel(a2, 1);
    s2.property("ADBE Text Percent Start").setValue(0);
    s2.property("ADBE Text Percent End").setValue(100);
    var p2 = a2.property("ADBE Text Animator Properties");
    var pos2 = p2.addProperty("ADBE Text Position");
    pos2.expression = "var i = textIndex; [0, Math.sin(time*3 + i*0.6)*10];";
}
function _txFx20_RandomOrder() {
    var tl = _txBase("RANDOM ORDER", 96, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Random"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.6, 70);
    try { s.property("ADBE Text Randomize Order").setValue(1); } catch(e){}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Blur").setValue([20, 20]); } catch(e){}
    try { p.addProperty("ADBE Text Scale").setValue([50, 50]); } catch(e){}
}
function _txFx21_ShadowBuild() {
    var tl = _txBase("SHADOW BUILD", 96, true, 3); if (!tl) return;
    var t = tl.inPoint;
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.4, 100);
    try {
        var ds = tl.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
        ds.property("Direction").setValue(135);
        ds.property("Opacity").setValue(220);
        var dist = ds.property("Distance");
        dist.setValueAtTime(t, 0);
        dist.setValueAtTime(t + 0.9, 25);
        var soft = ds.property("Softness");
        soft.setValueAtTime(t, 0);
        soft.setValueAtTime(t + 0.9, 45);
    } catch(e){}
}
function _txFx22_StrokeDraw() {
    var tl = _txBase("STROKE DRAW", 130, true, 3); if (!tl) return;
    var td = tl.property("Source Text").value;
    td.applyStroke = true;
    td.strokeColor = [1, 1, 1];
    td.strokeWidth = 3;
    td.fillColor = [1, 1, 1];
    td.applyFill = false; // start stroke only
    tl.property("Source Text").setValue(td);
    var t = tl.inPoint;
    // Reveal stroke via animator on opacity
    var a = _txAnim(tl, "Draw"); var s = _txSel(a, 1, 6);
    _txReveal(s, t, t + 1.2, 75);
    a.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity").setValue(0);
    // fill fades in after
    // No direct animatable fill toggle — use second text layer with fill
    var comp = app.project.activeItem;
    var tl2 = comp.layers.addText(tl.property("Source Text").value.text);
    tl2.name = "[Nytvir Text] fill";
    var td2 = tl2.property("Source Text").value;
    td2.fontSize = 130; td2.applyStroke = false; td2.applyFill = true; td2.fillColor = [1,1,1];
    td2.justification = ParagraphJustification.CENTER_JUSTIFY;
    try { td2.fauxBold = true; } catch(e){}
    tl2.property("Source Text").setValue(td2);
    tl2.property("Transform").property("Position").setValue([comp.width/2, comp.height/2]);
    tl2.inPoint = t + 1.1; tl2.outPoint = tl.outPoint;
    var op2 = tl2.property("Transform").property("Opacity");
    op2.setValueAtTime(t + 1.1, 0); op2.setValueAtTime(t + 1.6, 100);
}
function _txFx23_Curtain() {
    var tl = _txBase("CURTAIN", 130, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Curtain"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 80);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Scale").setValue([100, 0]); } catch(e){}
}
function _txFx24_GrowFromDot() {
    var tl = _txBase("GROW", 130, true, 3); if (!tl) return;
    var t = tl.inPoint;
    var sc = tl.property("Transform").property("Scale");
    sc.setValueAtTime(t, [1, 1]);
    sc.setValueAtTime(t + 0.7, [110, 110]);
    sc.setValueAtTime(t + 1.0, [100, 100]);
    var e = new KeyframeEase(0, 85);
    sc.setTemporalEaseAtKey(1, [e,e], [e,e]);
    sc.setTemporalEaseAtKey(2, [e,e], [e,e]);
    sc.setTemporalEaseAtKey(3, [e,e], [e,e]);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(t, 0); op.setValueAtTime(t + 0.2, 100);
    try {
        var b = tl.property("ADBE Effect Parade").addProperty("ADBE Fast Blur");
        b.property("Blurriness").setValueAtTime(t, 30);
        b.property("Blurriness").setValueAtTime(t + 0.7, 0);
    } catch(e2){}
}
function _txFx25_FloatLetters() {
    var tl = _txBase("FLOAT", 110, true, 4); if (!tl) return;
    var a = _txAnim(tl, "Float"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 75);
    try { s.property("ADBE Text Randomize Order").setValue(1); } catch(e){}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 40]); } catch(e){}
    try { p.addProperty("ADBE Text Rotation").setValue(15); } catch(e){}
    // Continuous float wiggle
    var a2 = _txAnim(tl, "Idle"); var s2 = _txSel(a2, 1);
    s2.property("ADBE Text Percent Start").setValue(0);
    s2.property("ADBE Text Percent End").setValue(100);
    var pos2 = a2.property("ADBE Text Animator Properties").addProperty("ADBE Text Position");
    pos2.expression = "var i=textIndex; [Math.sin(time*1.5 + i)*3, Math.cos(time*1.2 + i*0.7)*4];";
}
function _txFx26_BouncyElastic() {
    var tl = _txBase("BOUNCE", 120, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Bounce"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 40);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Scale").setValue([160, 160]); } catch(e){}
    try { p.addProperty("ADBE Text Position").setValue([0, -50]); } catch(e){}
    // overshoot elastic via layer scale wiggle after
    var sc = tl.property("Transform").property("Scale");
    sc.expression = "amp=6; freq=2; decay=3.5; t=time - inPoint; s=100 + amp*Math.sin(freq*Math.PI*t)*Math.exp(-decay*t); [s,s];";
}
function _txFx27_Hologram() {
    var tl = _txBase("HOLOGRAM", 120, true, 4); if (!tl) return;
    var td = tl.property("Source Text").value;
    td.fillColor = [0.4, 1.0, 0.9];
    tl.property("Source Text").setValue(td);
    var a = _txAnim(tl, "Holo"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 75);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Blur").setValue([25, 8]); } catch(e){}
    // Scanline flicker
    var op = tl.property("Transform").property("Opacity");
    op.expression = "80 + 20 * Math.sin(time*30);";
    _txGlow(tl, 30, 40, 1.4);
}
function _txFx28_MatrixCode() {
    var tl = _txBase("MATRIX", 130, true, 3); if (!tl) return;
    var td = tl.property("Source Text").value;
    td.fillColor = [0.3, 1.0, 0.4];
    tl.property("Source Text").setValue(td);
    var a = _txAnim(tl, "Matrix"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 2.0, 70);
    try { s.property("ADBE Text Randomize Order").setValue(1); } catch(e){}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try {
        var ch = p.addProperty("ADBE Text Character Value");
        ch.setValue(48); // ASCII scramble
        try { p.addProperty("ADBE Text Character Change Type").setValue(1); } catch(e){}
        try { p.addProperty("ADBE Text Character Alignment").setValue(1); } catch(e){}
    } catch(e){}
    _txGlow(tl, 30, 20, 1.2);
}
function _txFx29_SpotlightSweep() {
    var tl = _txBase("SPOTLIGHT", 120, true, 3); if (!tl) return;
    var a = _txAnim(tl, "Sweep"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 70);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    // Show base text at low opacity always
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 30);
    op.setValueAtTime(tl.inPoint + 1.4, 100);
    _txGlow(tl, 40, 30, 1.3);
}
function _txFx30_ImpactDrop() {
    var tl = _txBase("IMPACT DROP", 140, true, 3); if (!tl) return;
    var t = tl.inPoint;
    var comp = app.project.activeItem;
    var pos = tl.property("Transform").property("Position");
    pos.setValueAtTime(t, [comp.width/2, -100]);
    pos.setValueAtTime(t + 0.5, [comp.width/2, comp.height/2 + 30]);
    pos.setValueAtTime(t + 0.7, [comp.width/2, comp.height/2]);
    var e0 = new KeyframeEase(0, 33); var e1 = new KeyframeEase(0, 90);
    pos.setTemporalEaseAtKey(1, [e0,e0], [e0,e0]);
    pos.setTemporalEaseAtKey(2, [e1,e1], [e0,e0]);
    pos.setTemporalEaseAtKey(3, [e0,e0], [e1,e1]);
    var sc = tl.property("Transform").property("Scale");
    sc.setValueAtTime(t + 0.5, [130, 80]);
    sc.setValueAtTime(t + 0.7, [100, 100]);
    _txDrop(tl, 0, 40, 240);
    // Add white flash layer
    var flash = comp.layers.addSolid([1,1,1], "[Nytvir Text] flash", comp.width, comp.height, comp.pixelAspect, 0.4);
    flash.inPoint = t + 0.5; flash.outPoint = t + 0.9;
    var fop = flash.property("Transform").property("Opacity");
    fop.setValueAtTime(t + 0.5, 60);
    fop.setValueAtTime(t + 0.9, 0);
    flash.blendingMode = BlendingMode.SCREEN;
}

function _txDispatch(cmd) {
    var m = {
        txFx01:_txFx01_WordSlam, txFx02:_txFx02_LetterRise, txFx03:_txFx03_LetterDrop,
        txFx04:_txFx04_LetterScatter, txFx05:_txFx05_Typewriter, txFx06:_txFx06_TypewriterFast,
        txFx07:_txFx07_BlurWave, txFx08:_txFx08_ScaleUp, txFx09:_txFx09_ScaleDown,
        txFx10:_txFx10_SplitReveal, txFx11:_txFx11_WhisperFade, txFx12:_txFx12_HeroTitle,
        txFx13:_txFx13_NeonFlicker, txFx14:_txFx14_GlitchRGB, txFx15:_txFx15_LetterFlip,
        txFx16:_txFx16_SlideLeft, txFx17:_txFx17_SlideUp, txFx18:_txFx18_TextShatter,
        txFx19:_txFx19_WaveReveal, txFx20:_txFx20_RandomOrder, txFx21:_txFx21_ShadowBuild,
        txFx22:_txFx22_StrokeDraw, txFx23:_txFx23_Curtain, txFx24:_txFx24_GrowFromDot,
        txFx25:_txFx25_FloatLetters, txFx26:_txFx26_BouncyElastic, txFx27:_txFx27_Hologram,
        txFx28:_txFx28_MatrixCode, txFx29:_txFx29_SpotlightSweep, txFx30:_txFx30_ImpactDrop
    };
    if (m[cmd]) m[cmd]();
}

// ============================================================
// TEXT ANIMATIONS PRO — 12 smooth product-level animations
// Works on the SELECTED text layer; creates demo text if none.
// ============================================================
function _txProTarget(demoStr, size) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return null;
    // prefer selected text layer — apply to user's own text
    for (var i = 0; i < comp.selectedLayers.length; i++) {
        if (comp.selectedLayers[i] instanceof TextLayer) {
            var sel = comp.selectedLayers[i];
            sel.motionBlur = true;
            return sel;
        }
    }
    return _txBase(demoStr || "SMOOTH TITLE", size || 96, true, 4);
}
function _txProSmooth(prop, infl) {
    for (var k = 1; k <= prop.numKeys; k++) {
        try {
            prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            var dims = 1;
            try { dims = prop.value.length || 1; } catch (e0) { dims = 1; }
            var ea = [];
            for (var d = 0; d < dims; d++) ea.push(new KeyframeEase(0, infl == null ? 85 : infl));
            prop.setTemporalEaseAtKey(k, ea, ea);
        } catch (e) {}
    }
}
// animator property with keyframed value (in -> settled)
function _txProKey(animProps, matchName, v0, v1, t0, t1, infl) {
    try {
        var p = animProps.addProperty(matchName);
        p.setValueAtTime(t0, v0);
        p.setValueAtTime(t1, v1);
        _txProSmooth(p, infl == null ? 85 : infl);
        return p;
    } catch (e) { return null; }
}

// 01 — Soft Rise: words float up through gentle blur
function _txPro01_SoftRise() {
    var tl = _txProTarget("SOFT RISE"); if (!tl) return;
    var a = _txAnim(tl, "Pro Soft Rise"); var s = _txSel(a, 3, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.1, 88);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 45]); } catch (e) {}
    try { p.addProperty("ADBE Text Blur").setValue([9, 9]); } catch (e) {}
}
// 02 — Word Cascade: caption-style word-by-word (viral reel look)
function _txPro02_WordCascade() {
    var tl = _txProTarget("word by word cascade", 72); if (!tl) return;
    var a = _txAnim(tl, "Pro Cascade"); var s = _txSel(a, 3, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.4, 82);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 26]); } catch (e) {}
}
// 03 — Focus In: lens focus (blur + tracking settle)
function _txPro03_FocusIn() {
    var tl = _txProTarget("FOCUS IN"); if (!tl) return;
    var a = _txAnim(tl, "Pro Focus");
    _txSel(a, 1, 6); // full range
    var p = a.property("ADBE Text Animator Properties");
    _txProKey(p, "ADBE Text Blur", [26, 26], [0, 0], tl.inPoint, tl.inPoint + 1.0, 88);
    _txProKey(p, "ADBE Text Tracking Amount", 24, 0, tl.inPoint, tl.inPoint + 1.1, 88);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 0);
    op.setValueAtTime(tl.inPoint + 0.55, 100);
    _txProSmooth(op, 80);
}
// 04 — Line Rise: whole lines lift from below (multi-line hero)
function _txPro04_LineRise() {
    var tl = _txProTarget("LINE ONE\rLINE TWO"); if (!tl) return;
    var a = _txAnim(tl, "Pro Line Rise"); var s = _txSel(a, 4, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.2, 90);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 80]); } catch (e) {}
    try { p.addProperty("ADBE Text Blur").setValue([6, 6]); } catch (e) {}
}
// 05 — Char Drift: characters drift in, barely-there (Apple keynote)
function _txPro05_CharDrift() {
    var tl = _txProTarget("character drift", 84); if (!tl) return;
    var a = _txAnim(tl, "Pro Char Drift"); var s = _txSel(a, 1, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.3, 80);
    try { s.property("ADBE Text Selector Smoothness").setValue(80); } catch (e) {}
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 16]); } catch (e) {}
    try { p.addProperty("ADBE Text Blur").setValue([4, 4]); } catch (e) {}
}
// 06 — Tracking Air: luxury brand settle (wide -> tight)
function _txPro06_TrackingAir() {
    var tl = _txProTarget("L U X U R Y"); if (!tl) return;
    var a = _txAnim(tl, "Pro Air");
    _txSel(a, 1, 6);
    var p = a.property("ADBE Text Animator Properties");
    _txProKey(p, "ADBE Text Tracking Amount", 34, 0, tl.inPoint, tl.inPoint + 1.4, 90);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 0);
    op.setValueAtTime(tl.inPoint + 0.9, 100);
    _txProSmooth(op, 85);
}
// 07 — Soft Pop: 92 -> 100 with one gentle overshoot
function _txPro07_SoftPop() {
    var tl = _txProTarget("SOFT POP"); if (!tl) return;
    var sc = tl.property("Transform").property("Scale");
    var v = sc.value;
    sc.setValueAtTime(tl.inPoint, [v[0] * 0.92, v[1] * 0.92]);
    sc.setValueAtTime(tl.inPoint + 0.5, [v[0] * 1.015, v[1] * 1.015]);
    sc.setValueAtTime(tl.inPoint + 0.78, [v[0], v[1]]);
    _txProSmooth(sc, 70);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 0);
    op.setValueAtTime(tl.inPoint + 0.35, 100);
    _txProSmooth(op, 80);
}
// 08 — Line Slide: slides in from left, buttery stop
function _txPro08_LineSlide() {
    var tl = _txProTarget("LINE SLIDE"); if (!tl) return;
    tl.motionBlur = true;
    var pos = tl.property("Transform").property("Position");
    var pv = pos.value;
    pos.setValueAtTime(tl.inPoint, [pv[0] - 70, pv[1]]);
    pos.setValueAtTime(tl.inPoint + 0.9, [pv[0], pv[1]]);
    _txProSmooth(pos, 92);
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 0);
    op.setValueAtTime(tl.inPoint + 0.5, 100);
    _txProSmooth(op, 85);
}
// 09 — Whisper Blur: full in-and-out breath (fade through blur)
function _txPro09_WhisperBlur() {
    var tl = _txProTarget("whisper", 84); if (!tl) return;
    var a = _txAnim(tl, "Pro Whisper");
    _txSel(a, 1, 6);
    var p = a.property("ADBE Text Animator Properties");
    try {
        var bl = p.addProperty("ADBE Text Blur");
        bl.setValueAtTime(tl.inPoint, [20, 20]);
        bl.setValueAtTime(tl.inPoint + 1.2, [0, 0]);
        bl.setValueAtTime(tl.outPoint - 0.9, [0, 0]);
        bl.setValueAtTime(tl.outPoint, [18, 18]);
        _txProSmooth(bl, 85);
    } catch (e) {}
    var op = tl.property("Transform").property("Opacity");
    op.setValueAtTime(tl.inPoint, 0);
    op.setValueAtTime(tl.inPoint + 1.1, 100);
    op.setValueAtTime(tl.outPoint - 0.85, 100);
    op.setValueAtTime(tl.outPoint, 0);
    _txProSmooth(op, 80);
}
// 10 — Word Tilt: words settle with tiny rotation
function _txPro10_WordTilt() {
    var tl = _txProTarget("WORD TILT SETTLE"); if (!tl) return;
    var a = _txAnim(tl, "Pro Tilt"); var s = _txSel(a, 3, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.2, 85);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Rotation").setValue(-5); } catch (e) {}
    try { p.addProperty("ADBE Text Position").setValue([0, 30]); } catch (e) {}
}
// 11 — Settle Bounce: one restrained landing bounce
function _txPro11_SettleBounce() {
    var tl = _txProTarget("SETTLE"); if (!tl) return;
    var a = _txAnim(tl, "Pro Settle"); var s = _txSel(a, 3, 6);
    _txReveal(s, tl.inPoint, tl.inPoint + 0.9, 75);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    var sc = tl.property("Transform").property("Scale");
    var v2 = sc.value;
    sc.setValueAtTime(tl.inPoint, [v2[0] * 1.06, v2[1] * 1.06]);
    sc.setValueAtTime(tl.inPoint + 0.55, [v2[0] * 0.995, v2[1] * 0.995]);
    sc.setValueAtTime(tl.inPoint + 0.85, [v2[0], v2[1]]);
    _txProSmooth(sc, 65);
}
// 12 — Exit Soft: smooth OUT animation (rise + blur + fade away)
function _txPro12_ExitSoft() {
    var tl = _txProTarget("EXIT SOFT"); if (!tl) return;
    var t1 = tl.outPoint, t0 = t1 - 0.75;
    var pos = tl.property("Transform").property("Position");
    var pv = pos.valueAtTime(t0, false);
    pos.setValueAtTime(t0, pv);
    pos.setValueAtTime(t1, [pv[0], pv[1] - 36]);
    _txProSmooth(pos, 88);
    var op = tl.property("Transform").property("Opacity");
    var ov = op.valueAtTime(t0, false);
    op.setValueAtTime(t0, ov);
    op.setValueAtTime(t1, 0);
    _txProSmooth(op, 80);
    var a = _txAnim(tl, "Pro Exit");
    _txSel(a, 1, 6);
    var p = a.property("ADBE Text Animator Properties");
    _txProKey(p, "ADBE Text Blur", [0, 0], [16, 16], t0, t1, 85);
}

// ---------- Tutorial recipes (Clean Text Animation, exact values) ----------
// 13 — Char Bounce: Expression Selector, har harf kechikib prujina bounce
function _txPro13_CharBounce() {
    var tl = _txProTarget("BOUNCE", 110); if (!tl) return;
    var a = _txAnim(tl, "Char Bounce");
    var p = a.property("ADBE Text Animator Properties");
    try { p.addProperty("ADBE Text Scale").setValue([100, 100]); } catch (e) {}
    try {
        var es = a.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
        var amt = es.property("ADBE Text Expressible Amount");
        amt.expression =
            "delay = .05;\n" +
            "myDelay = delay*textIndex;\n" +
            "t = (time - thisLayer.inPoint) - myDelay;\n" +
            "if (t >= 0){\n" +
            "  freq = 3;\n" +
            "  amplitude = 50;\n" +
            "  decay = 5;\n" +
            "  s = amplitude*Math.cos(freq*t*2*Math.PI)/Math.exp(decay*t);\n" +
            "  [s,s,s]\n" +
            "}else{ [50,50,50] }";
    } catch (e2) {}
}
// 14 — Overshoot Settle: harflar pastdan overshoot bilan o'tiradi (tutorial Expression 2)
function _txPro14_OvershootSettle() {
    var tl = _txProTarget("OVERSHOOT", 100); if (!tl) return;
    var a = _txAnim(tl, "Overshoot Settle");
    var p = a.property("ADBE Text Animator Properties");
    try { p.addProperty("ADBE Text Position").setValue([0, 80]); } catch (e) {}
    p.addProperty("ADBE Text Opacity").setValue(0);
    try {
        var es = a.property("ADBE Text Selectors").addProperty("ADBE Text Expressible Selector");
        var amt = es.property("ADBE Text Expressible Amount");
        amt.expression =
            "freq = 2;\n" +
            "decay = 9;\n" +
            "duration = 0.10;\n" +
            "retard = textIndex*thisComp.frameDuration*2;\n" +
            "t = time - (thisLayer.inPoint + retard);\n" +
            "startVal = [100,100,100];\n" +
            "endVal = [0,0,0];\n" +
            "if (t < 0){ startVal }\n" +
            "else if (t < duration){ linear(t,0,duration,startVal,endVal) }\n" +
            "else{\n" +
            "  amp = (endVal - startVal)/duration;\n" +
            "  w = freq*Math.PI*2;\n" +
            "  endVal + amp*(Math.sin((t-duration)*w)/Math.exp(decay*(t-duration))/w);\n" +
            "}";
    } catch (e2) {}
}
// 15 — Clean Rise: so'zlar +28px dan 33° burilish bilan toza ko'tariladi (tutorial demo)
function _txPro15_CleanRise() {
    var tl = _txProTarget("CLEAN RISE", 96); if (!tl) return;
    var a = _txAnim(tl, "Clean Rise"); var s = _txSel(a, 3, 1);
    _txReveal(s, tl.inPoint, tl.inPoint + 1.0, 85);
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 28]); } catch (e) {}
    try { p.addProperty("ADBE Text Rotation").setValue(33); } catch (e) {}
    try { p.addProperty("ADBE Text Blur").setValue([6, 6]); } catch (e) {}
}
// 16 — Word Ramp Title: MD retsepti tanlangan textga (Ramp Up + Ease -50/100 + Offset)
function _txPro16_WordRampTitle() {
    var tl = _txProTarget("WORD RAMP TITLE", 100); if (!tl) return;
    var a = _txAnim(tl, "Word Ramp");
    var p = a.property("ADBE Text Animator Properties");
    p.addProperty("ADBE Text Opacity").setValue(0);
    try { p.addProperty("ADBE Text Position").setValue([0, 100]); } catch (e) {}
    var sel = a.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
    try {
        var adv = sel.property("ADBE Text Range Advanced");
        adv.property("ADBE Text Range Type2").setValue(3);
        adv.property("ADBE Text Range Shape").setValue(2);
        adv.property("ADBE Text Levels Max Ease").setValue(-50);
        adv.property("ADBE Text Levels Min Ease").setValue(100);
    } catch (e2) {}
    var off = sel.property("ADBE Text Percent Offset");
    off.setValueAtTime(tl.inPoint, -100);
    off.setValueAtTime(tl.inPoint + 1.1, 100);
}

function _txProDispatch(cmd) {
    var m = {
        txPro01:_txPro01_SoftRise, txPro02:_txPro02_WordCascade, txPro03:_txPro03_FocusIn,
        txPro04:_txPro04_LineRise, txPro05:_txPro05_CharDrift, txPro06:_txPro06_TrackingAir,
        txPro07:_txPro07_SoftPop, txPro08:_txPro08_LineSlide, txPro09:_txPro09_WhisperBlur,
        txPro10:_txPro10_WordTilt, txPro11:_txPro11_SettleBounce, txPro12:_txPro12_ExitSoft,
        txPro13:_txPro13_CharBounce, txPro14:_txPro14_OvershootSettle,
        txPro15:_txPro15_CleanRise, txPro16:_txPro16_WordRampTitle
    };
    if (m[cmd]) m[cmd]();
}

// ============================================================
// CAPTION STUDIO — SRT dan uzbekcha/istalgan tildagi captionlar
// 3 style: TikTok Bold / Aesthetic Serif / Word Reveal
// ============================================================
function _capWrap(s, maxLen) {
    var lines = s.split('\n');
    var out = [];
    for (var li = 0; li < lines.length; li++) {
        var words = lines[li].split(' ');
        var cur = '';
        for (var w = 0; w < words.length; w++) {
            if (cur.length === 0) cur = words[w];
            else if ((cur + ' ' + words[w]).length <= maxLen) cur += ' ' + words[w];
            else { out.push(cur); cur = words[w]; }
        }
        if (cur.length) out.push(cur);
    }
    return out.join('\r');
}
function _capSmoothK(prop, infl) {
    for (var k = 1; k <= prop.numKeys; k++) {
        try {
            prop.setInterpolationTypeAtKey(k, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
            var dims = 1;
            try { dims = prop.value.length || 1; } catch (e0) { dims = 1; }
            var ea = [];
            for (var d = 0; d < dims; d++) ea.push(new KeyframeEase(0, infl == null ? 80 : infl));
            prop.setTemporalEaseAtKey(k, ea, ea);
        } catch (e) {}
    }
}
function _capBuild(styleName, srtPath, posMode, sizeMul) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) { alert("Avval kompozitsiya oching!"); return; }
    var srtFile = srtPath ? new File(srtPath) : File.openDialog("SRT faylni tanlang", "SRT:*.srt");
    if (!srtFile || !srtFile.exists) return;
    var cues = _janeReadSrt(srtFile.fsName);
    if (!cues.length) { alert("SRT bo'sh yoki o'qilmadi:\n" + srtFile.fsName); return; }

    var maxEnd = 0;
    for (var q = 0; q < cues.length; q++) if (cues[q].end > maxEnd) maxEnd = cues[q].end;
    if (comp.duration < maxEnd + 0.5) comp.duration = maxEnd + 0.5;

    var posFactor = 0.78;                              // default: past (safe zone)
    if (posMode === "center") posFactor = 0.5;
    else if (posMode === "top") posFactor = 0.22;
    var posY = comp.height * posFactor;
    var fs = Math.round(comp.width * 0.054 * (sizeMul || 1));

    for (var i = 0; i < cues.length; i++) {
        var c = cues[i];
        if (c.start >= comp.duration) continue;
        var tl = comp.layers.addText(_capWrap(c.text, 22));
        tl.name = "[Cap] " + (i + 1);
        tl.inPoint = c.start;
        tl.outPoint = Math.min(c.end, comp.duration);
        tl.label = 11;
        var td = tl.property("Source Text").value;
        td.applyFill = true;
        td.fillColor = [1, 1, 1];
        td.justification = ParagraphJustification.CENTER_JUSTIFY;

        if (styleName === "tiktok") {
            var fT = ["Arial-BoldMT", "SegoeUI-Bold", "ArialMT"];
            for (var t1 = 0; t1 < fT.length; t1++) { try { td.font = fT[t1]; break; } catch (ef) {} }
            td.fontSize = fs;
            td.applyStroke = true;
            td.strokeColor = [0.02, 0.03, 0.07];
            td.strokeWidth = Math.max(2.5, Math.round(fs * 0.045));
            td.strokeOverFill = false;
            td.tracking = 0;
        } else if (styleName === "serif") {
            var fS = ["TimesNewRomanPS-ItalicMT", "Georgia-Italic", "TimesNewRomanPSMT"];
            for (var t2 = 0; t2 < fS.length; t2++) { try { td.font = fS[t2]; break; } catch (ef2) {} }
            td.fontSize = Math.round(fs * 0.92);
            td.applyStroke = false;
            td.tracking = 40;
        } else { // reveal
            var fR = ["SegoeUI-Semibold", "SegoeUI", "ArialMT"];
            for (var t3 = 0; t3 < fR.length; t3++) { try { td.font = fR[t3]; break; } catch (ef3) {} }
            td.fontSize = fs;
            td.applyStroke = false;
            td.tracking = 0;
        }
        tl.property("Source Text").setValue(td);
        tl.property("Transform").property("Position").setValue([comp.width / 2, posY]);

        // drop shadow (hamma style uchun o'qilish)
        try {
            var ds = tl.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
            ds.property("ADBE Drop Shadow-0002").setValue((styleName === "serif" ? 0.75 : 0.6) * 255);
            ds.property("ADBE Drop Shadow-0004").setValue(4);
            ds.property("ADBE Drop Shadow-0005").setValue(styleName === "serif" ? 20 : 12);
        } catch (eds) {}

        var dur = tl.outPoint - tl.inPoint;
        if (styleName === "tiktok") {
            // CapCut pop-in
            var sc = tl.property("Transform").property("Scale");
            sc.setValueAtTime(c.start, [82, 82]);
            sc.setValueAtTime(c.start + 0.1, [104, 104]);
            sc.setValueAtTime(c.start + 0.18, [100, 100]);
            _capSmoothK(sc, 60);
        } else if (styleName === "serif") {
            // soft fade + glow
            try {
                var g = tl.property("ADBE Effect Parade").addProperty("ADBE Glo2");
                g.property(2).setValue(55);
                g.property(3).setValue(30);
                g.property(4).setValue(0.7);
            } catch (eg) {}
            var op = tl.property("Transform").property("Opacity");
            op.setValueAtTime(c.start, 0);
            op.setValueAtTime(c.start + Math.min(0.35, dur * 0.3), 100);
            op.setValueAtTime(Math.max(tl.outPoint - 0.3, c.start + dur * 0.6), 100);
            op.setValueAtTime(tl.outPoint, 0);
            _capSmoothK(op, 75);
        } else if (styleName === "ramp") {
            // Marketing Demons "Word Ramp": so'zlar pastdan ko'tarilib fade bo'ladi
            // Animator: Opacity 0 + Position +100; Selector: Words, Ramp Up, EaseHi -50, EaseLo 100; Offset -100 -> 100
            var anR = tl.property("ADBE Text Properties").property("ADBE Text Animators").addProperty("ADBE Text Animator");
            anR.name = "Word Ramp";
            var pR = anR.property("ADBE Text Animator Properties");
            pR.addProperty("ADBE Text Opacity").setValue(0);
            try { pR.addProperty("ADBE Text Position").setValue([0, 100]); } catch (epr) {}
            var selR = anR.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
            try {
                var advR = selR.property("ADBE Text Range Advanced");
                advR.property("ADBE Text Range Type2").setValue(3);        // Based On: Words
                advR.property("ADBE Text Range Shape").setValue(2);        // Shape: Ramp Up
                advR.property("ADBE Text Levels Max Ease").setValue(-50);  // Ease High
                advR.property("ADBE Text Levels Min Ease").setValue(100);  // Ease Low
            } catch (ear) {}
            // Offset selektorning o'zida (Advanced ichida EMAS)
            var offR = selR.property("ADBE Text Percent Offset");
            offR.setValueAtTime(c.start, -100);
            offR.setValueAtTime(c.start + Math.min(dur * 0.65, 1.2), 100);
        } else {
            // word-by-word reveal, birinchi so'z darhol ko'rinadi
            var words = c.text.replace(/\n/g, ' ').split(' ');
            var wc = 0;
            for (var w2 = 0; w2 < words.length; w2++) if (words[w2].length > 0) wc++;
            if (wc < 1) wc = 1;
            var an = tl.property("ADBE Text Properties").property("ADBE Text Animators").addProperty("ADBE Text Animator");
            an.name = "Word Reveal";
            an.property("ADBE Text Animator Properties").addProperty("ADBE Text Opacity").setValue(0);
            var sel = an.property("ADBE Text Selectors").addProperty("ADBE Text Selector");
            try { sel.property("ADBE Text Range Advanced").property("ADBE Text Range Type2").setValue(3); } catch (ea2) {}
            var st = sel.property("ADBE Text Percent Start");
            st.setValueAtTime(c.start, Math.min(100 / wc + 2, 100));
            st.setValueAtTime(c.start + Math.min(dur * 0.7, dur - 0.15), 100);
            try { sel.property("ADBE Text Percent End").setValue(100); } catch (ee2) {}
        }
    }
    return cues.length;
}
// ---------- AUTO CAPTION: video ovozidan avtomatik (Whisper AI, lokal) ----------
var CAP_FFMPEG  = "C:\\Users\\nytvi\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.2-full_build\\bin\\ffmpeg.exe";
var CAP_WHISPER = "C:\\Users\\nytvi\\NytvirTools\\whisper\\Release\\whisper-cli.exe";
var CAP_MODEL_TURBO = "C:\\Users\\nytvi\\NytvirTools\\whisper\\ggml-large-v3-turbo.bin";
var CAP_MODEL_SMALL = "C:\\Users\\nytvi\\NytvirTools\\whisper\\ggml-small.bin";
var CAP_MODEL = (new File(CAP_MODEL_TURBO)).exists ? CAP_MODEL_TURBO : CAP_MODEL_SMALL;

function _capFindSourceVideo(comp) {
    // selected layer first, else topmost footage layer with audio
    var cands = [];
    for (var i = 0; i < comp.selectedLayers.length; i++) cands.push(comp.selectedLayers[i]);
    for (var li = 1; li <= comp.numLayers; li++) cands.push(comp.layer(li));
    for (var c = 0; c < cands.length; c++) {
        var L = cands[c];
        try {
            if (L.source && L.source.file && L.hasAudio) return L.source.file.fsName;
        } catch (e) {}
    }
    return null;
}
function _capAuto(styleName, lang, posMode, sizeMul) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) { alert("Avval kompozitsiya oching!"); return; }
    var src = _capFindSourceVideo(comp);
    if (!src) { alert("Video topilmadi — audio bor video qatlamni tanlang."); return; }
    if (!(new File(CAP_WHISPER)).exists) { alert("Whisper o'rnatilmagan:\n" + CAP_WHISPER); return; }
    if (!(new File(CAP_MODEL)).exists) { alert("Whisper modeli topilmadi:\n" + CAP_MODEL); return; }

    var tmp = Folder.temp.fsName;
    var wav = tmp + "\\nytvir_cap.wav";
    var srtBase = tmp + "\\nytvir_cap";
    var srt = srtBase + ".srt";
    try { var oldSrt = new File(srt); if (oldSrt.exists) oldSrt.remove(); } catch (e) {}

    // build a .bat (avoids callSystem quoting issues)
    var bat = new File(tmp + "\\nytvir_cap.bat");
    bat.encoding = "UTF-8";
    bat.open("w");
    bat.writeln('@echo off');
    bat.writeln('"' + CAP_FFMPEG + '" -y -i "' + src + '" -vn -ar 16000 -ac 1 -c:a pcm_s16le "' + wav + '"');
    // orfografiya prompti: Whisper'ni to'g'ri lotin-o'zbek imlosiga yo'naltiradi ("ə" harflarini kamaytiradi)
    var promptTxt = "";
    if ((lang || "uz") === "uz") {
        promptTxt = "Assalomu alaykum do'stlar, bugun sizlarga bozor va treyding strategiyasi haqida gapirib beraman. Balansdan bir foiz yoki nol butun besh foiz ishlatish kerak, chunki foyda va zarar har doim bo'ladi, eng zo'r strategiya shu.";
    } else if (lang === "ru") {
        promptTxt = "Привет, ребята, сегодня расскажу про рынок и стратегию трейдинга, проценты и прибыль.";
    }
    var promptArg = promptTxt ? ' --prompt "' + promptTxt + '"' : '';
    // -sow -ml 38: so'z chegarasida qisqa segmentlar — har caption gapirish paytiga mos tushadi
    bat.writeln('"' + CAP_WHISPER + '" -m "' + CAP_MODEL + '" -f "' + wav + '" -l ' + (lang || "uz") + promptArg + ' -sow -ml 38 -osrt -of "' + srtBase + '"');
    bat.close();

    // synchronous — AE waits while Whisper listens (30-90s odatda)
    system.callSystem('cmd.exe /c "' + bat.fsName + '"');

    var srtFile = new File(srt);
    if (!srtFile.exists) { alert("Whisper SRT yozmadi. Video ovozini tekshiring."); return; }
    var n = _capBuild(styleName, srt, posMode, sizeMul);
    return n;
}

// Panel'dan to'g'ridan-to'g'ri chaqiriladi (Caption Studio UI)
function nytvir_capRun(autoFlag, style, lang, posMode, sizeMul) {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return "Avval kompozitsiya oching!";
    try { if (app.project.expressionEngine !== "javascript-1.0") app.project.expressionEngine = "javascript-1.0"; } catch (e) {}
    app.beginUndoGroup("Nytvir Caption Studio");
    var n = null;
    try {
        if (autoFlag === "1" || autoFlag === 1 || autoFlag === true) {
            n = _capAuto(style, lang, posMode, parseFloat(sizeMul) || 1);
        } else {
            n = _capBuild(style, null, posMode, parseFloat(sizeMul) || 1);
        }
        app.endUndoGroup();
        if (n) return "OK:" + n;
        return "Bekor qilindi yoki caption chiqmadi";
    } catch (err) {
        app.endUndoGroup();
        return "Xato: " + err.toString();
    }
}

function _capDispatch(cmd) {
    if (cmd === "capTikTok") _capBuild("tiktok");
    else if (cmd === "capSerif") _capBuild("serif");
    else if (cmd === "capReveal") _capBuild("reveal");
    else if (cmd === "capAutoTikTok") _capAuto("tiktok", "uz");
    else if (cmd === "capAutoSerif") _capAuto("serif", "uz");
    else if (cmd === "capAutoReveal") _capAuto("reveal", "uz");
    else if (cmd === "capAutoRu") _capAuto("tiktok", "ru");
}

// ----------------------------------------------------
// JANE.AEP — SRT IMPORT + CINEMATIC EMOTIONAL GRADE
// ----------------------------------------------------
function _janeSrtTime(str) {
    var parts = str.split(':');
    var h = parseFloat(parts[0]);
    var m = parseFloat(parts[1]);
    var s = parseFloat((parts[2] || "0").replace(',', '.'));
    return h * 3600 + m * 60 + s;
}

function _janeReadSrt(path) {
    var f = new File(path);
    if (!f.exists) return [];
    f.encoding = "UTF-8";
    f.open("r");
    var content = f.read();
    f.close();
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var blocks = content.split(/\n\n+/);
    var cues = [];
    for (var i = 0; i < blocks.length; i++) {
        var raw = blocks[i].split('\n');
        var clean = [];
        for (var j = 0; j < raw.length; j++) {
            var s = raw[j].replace(/^\s+|\s+$/g, '');
            if (s !== '') clean.push(s);
        }
        if (clean.length < 2) continue;
        var startIdx = 0;
        if (/^\d+$/.test(clean[0])) startIdx = 1;
        if (!clean[startIdx]) continue;
        var m = clean[startIdx].match(/(\d\d:\d\d:\d\d[,.]\d+)\s*-->\s*(\d\d:\d\d:\d\d[,.]\d+)/);
        if (!m) continue;
        var txt = '';
        for (var k = startIdx + 1; k < clean.length; k++) {
            if (txt) txt += '\n';
            txt += clean[k];
        }
        cues.push({ start: _janeSrtTime(m[1]), end: _janeSrtTime(m[2]), text: txt });
    }
    return cues;
}

function _janeSrtImport() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return;
    var srtPath = "D:\\srt projects\\0801.srt";
    var cues = _janeReadSrt(srtPath);
    if (!cues.length) { alert("SRT topilmadi yoki bo'sh:\n" + srtPath); return; }

    var maxEnd = 0;
    for (var q = 0; q < cues.length; q++) if (cues[q].end > maxEnd) maxEnd = cues[q].end;
    if (comp.duration < maxEnd + 1) comp.duration = maxEnd + 1;

    // Parent NULL to keep captions together for later re-position
    var nullL = comp.layers.addNull(comp.duration);
    nullL.name = "[Nytvir] SRT Anchor";
    nullL.property("Transform").property("Position").setValue([comp.width / 2, comp.height * 0.82]);
    nullL.enabled = false;
    nullL.moveToBeginning();

    for (var i = 0; i < cues.length; i++) {
        var c = cues[i];
        var tl = comp.layers.addText(c.text);
        tl.name = "[Nytvir] SRT " + (i + 1);
        var td = tl.property("Source Text").value;
        td.font = "Georgia";
        td.fontSize = 62;
        td.fillColor = [0.96, 0.94, 0.88];
        td.applyStroke = false;
        td.applyFill = true;
        td.justification = ParagraphJustification.CENTER_JUSTIFY;
        td.tracking = 30;
        td.leading = 76;
        tl.property("Source Text").setValue(td);

        // Position via parent — captions anchored to null
        var pos = tl.property("Transform").property("Position");
        pos.setValue([0, 0]);
        tl.parent = nullL;

        tl.inPoint = c.start;
        tl.outPoint = c.end + 0.35;

        // Opacity fade
        var op = tl.property("Transform").property("Opacity");
        var fadeIn = 0.35, fadeOut = 0.5;
        var t0 = c.start;
        var t1 = c.start + fadeIn;
        var t3 = c.end + 0.35;
        var t2 = t3 - fadeOut;
        if (t2 <= t1) { t2 = (t1 + t3) / 2; }
        op.setValuesAtTimes([t0, t1, t2, t3], [0, 100, 100, 0]);
        var e66 = new KeyframeEase(0, 66);
        for (var k = 1; k <= 4; k++) op.setTemporalEaseAtKey(k, [e66], [e66]);

        // Subtle rise-in via scale
        var scl = tl.property("Transform").property("Scale");
        scl.setValueAtTime(t0, [98, 98]);
        scl.setValueAtTime(t1, [100, 100]);
        scl.setTemporalEaseAtKey(1, [e66, e66], [e66, e66]);
        scl.setTemporalEaseAtKey(2, [e66, e66], [e66, e66]);

        // Soft glow: Drop Shadow (0 distance = glow-ish) + slight blur pass
        try {
            var ds = tl.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
            ds.property("Opacity").setValue(210);
            ds.property("Direction").setValue(0);
            ds.property("Distance").setValue(0);
            ds.property("Softness").setValue(38);
            ds.property("Shadow Color").setValue([0, 0, 0, 1]);
        } catch (e) {}
    }
}

function _janeAddEllipseMask(L, cx, cy, rx, ry) {
    var mask = L.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
    var shape = new Shape();
    var c = 0.5522847498;
    shape.vertices = [[cx, cy - ry], [cx + rx, cy], [cx, cy + ry], [cx - rx, cy]];
    shape.inTangents = [[-rx * c, 0], [0, -ry * c], [rx * c, 0], [0, ry * c]];
    shape.outTangents = [[rx * c, 0], [0, ry * c], [-rx * c, 0], [0, -ry * c]];
    shape.closed = true;
    mask.property("ADBE Mask Shape").setValue(shape);
    return mask;
}

function _janeVibeGrade() {
    var comp = app.project.activeItem;
    if (!comp || !(comp instanceof CompItem)) return;

    // 1) Main grade adjustment layer
    var grade = comp.layers.addSolid([0.5, 0.5, 0.5], "[Nytvir] Jane Grade", comp.width, comp.height, comp.pixelAspect, comp.duration);
    grade.adjustmentLayer = true;

    // Lifted blacks + softened highlights (Levels)
    try {
        var lv = grade.property("ADBE Effect Parade").addProperty("ADBE Pro Levels2");
        lv.property("Output Black").setValue(22 / 255);
        lv.property("Output White").setValue(238 / 255);
        lv.property("Gamma").setValue(0.98);
    } catch (e) {}

    // Cool shadows / warm highlights (Color Balance)
    try {
        var cbal = grade.property("ADBE Effect Parade").addProperty("ADBE Color Balance 2");
        cbal.property("Shadow Blue Balance").setValue(18);
        cbal.property("Shadow Red Balance").setValue(-10);
        cbal.property("Highlight Red Balance").setValue(14);
        cbal.property("Highlight Blue Balance").setValue(-8);
        cbal.property("Midtone Red Balance").setValue(6);
    } catch (e) {}

    // Muted saturation + slight lightness drop
    try {
        var cbhls = grade.property("ADBE Effect Parade").addProperty("ADBE Color Balance (HLS)");
        cbhls.property("Saturation").setValue(-22);
        cbhls.property("Lightness").setValue(-4);
    } catch (e) {}

    // Warming photo filter for skin/warmth
    try {
        var pf = grade.property("ADBE Effect Parade").addProperty("ADBE Photo Filter");
        pf.property("Filter").setValue(1);
        pf.property("Density").setValue(14);
        pf.property("Preserve Luminosity").setValue(1);
    } catch (e) {}

    // Contrast bump
    try {
        var bc = grade.property("ADBE Effect Parade").addProperty("ADBE Brightness & Contrast 2");
        bc.property("Brightness").setValue(-6);
        bc.property("Contrast").setValue(16);
    } catch (e) {}

    // 2) Vignette
    var vig = comp.layers.addSolid([0, 0, 0], "[Nytvir] Vignette", comp.width, comp.height, comp.pixelAspect, comp.duration);
    var vmask = _janeAddEllipseMask(vig, comp.width / 2, comp.height / 2, comp.width * 0.62, comp.height * 0.72);
    vmask.inverted = true;
    vmask.property("ADBE Mask Feather").setValue([comp.width * 0.38, comp.width * 0.38]);
    vmask.property("ADBE Mask Opacity").setValue(72);

    // 3) Grain layer
    var grain = comp.layers.addSolid([0.5, 0.5, 0.5], "[Nytvir] Grain", comp.width, comp.height, comp.pixelAspect, comp.duration);
    grain.adjustmentLayer = true;
    try {
        var noise = grain.property("ADBE Effect Parade").addProperty("ADBE Noise");
        noise.property("Amount of Noise").setValue(0.055);
        noise.property("Noise Type").setValue(1);
        noise.property("Clipping").setValue(0);
    } catch (e) {}

    // 4) Letterbox 2.35:1 (only if comp is wider than 2.35)
    var target = comp.width / 2.35;
    if (comp.height > target + 6) {
        var barH = Math.round((comp.height - target) / 2);
        var barTop = comp.layers.addSolid([0, 0, 0], "[Nytvir] Bar Top", comp.width, barH, comp.pixelAspect, comp.duration);
        barTop.property("Transform").property("Position").setValue([comp.width / 2, barH / 2]);
        var barBot = comp.layers.addSolid([0, 0, 0], "[Nytvir] Bar Bot", comp.width, barH, comp.pixelAspect, comp.duration);
        barBot.property("Transform").property("Position").setValue([comp.width / 2, comp.height - barH / 2]);
    }

    // Move grade/vignette/grain/bars to top so they affect all footage below
    // Order desired top→bottom: Grain, Vignette, Bars, Grade, (footage)
    try {
        // Reordering — grab by name
        for (var i = comp.numLayers; i >= 1; i--) {
            var L = comp.layer(i);
            if (L.name === "[Nytvir] Jane Grade") { L.moveToBeginning(); }
        }
        // Vignette above grade
        for (var i = comp.numLayers; i >= 1; i--) {
            var L2 = comp.layer(i);
            if (L2.name === "[Nytvir] Vignette") { L2.moveToBeginning(); }
        }
        // Grain on top
        for (var i = comp.numLayers; i >= 1; i--) {
            var L3 = comp.layer(i);
            if (L3.name === "[Nytvir] Grain") { L3.moveToBeginning(); }
        }
    } catch (e) {}
}

function nytvir_setControl(name, type, val) {
    try {
        var comp = app.project.activeItem;
        if(!comp || comp.selectedLayers.length === 0) return;
        var L = comp.selectedLayers[0];
        var fx = L.property("ADBE Effect Parade").property(name);
        if(fx) {
            if(type === "slider") {
                fx.property(1).setValue(parseFloat(val));
            } else if(type === "color") {
                var r = parseInt(val.substr(1,2), 16)/255;
                var g = parseInt(val.substr(3,2), 16)/255;
                var b = parseInt(val.substr(5,2), 16)/255;
                fx.property(1).setValue([r, g, b, 1]);
            }
        }
    } catch(e) {}
}
