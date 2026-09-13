// ============================================================
// NYTVIR TRADING STYLE — to'liq pipeline (v1, 2026-08)
// Ishlatish: CONFIG'ni to'ldiring -> File > Scripts > Run Script File
// Talab: comp ochiq bo'lsin, [Cap] prefiksli caption'lar bo'lsin (ixtiyoriy)
// ============================================================
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);

var CONFIG = {
  compName: "IMG_2594",            // comp nomi shu bilan BOSHLANADI
  sfxDir: "D:/edit/nytvir_sfx/",   // plip/swoosh/ding/thud/modal/tick wav'lar
  screenScale: 88,                 // katta ekranlar masshtabi (%)

  // --- caption pass ---
  captions: { enable: true, font: "SegoeUI-Light", fsMax: 50, maxW: 980 },

  // --- shisha widgetlar (kichik statistika kartalari) ---
  widgets: [
    { tIn: 14.38, tOut: 20.82, cap: "ZARAR SAVDOLAR",
      big: "\u2212$60", pill: "6 \u00D7 \u2212$10", pillW: 268, accent: "red", noteX: 445, note: "10 savdodan" },
    { tIn: 20.85, tOut: 26.30, cap: "FOYDALI SAVDOLAR",
      big: "+$120", pill: "4 \u00D7 +$30", pillW: 258, accent: "grn", noteX: 440, note: "10 savdodan" }
  ],

  // --- Insights ekrani (to'liq qorong'i hisobot) ---
  insights: {
    enable: true, tIn: 26.25, tOut: 31.0,
    head: "Savdo natijalari", headN: "10",
    rows: [
      { icon: "down",  label: "Zarar savdolar",   val: "6",         color: "wht" },
      { icon: "up",    label: "Foydali savdolar", val: "4",         color: "wht" },
      { icon: "minus", label: "Jami zarar",       val: "\u2212$60", color: "red" },
      { icon: "plus",  label: "Jami foyda",       val: "+$120",     color: "grn" }
    ],
    big: "+$60", bigColor: "grn", big2: "Sof foyda",
    w1: "Davr", w2: "30 kun \u00B7 10 savdo",
    chartHead: "Balans dinamikasi",
    chartUp: true,   // true = teal ko'tariluvchi, false = qizil tushuvchi
    ax1: "1-kun", ax2: "30-kun"
  },

  // --- Qizil qulash ekrani + modal ---
  crash: {
    enable: true, tIn: 38.41, tOut: 48.76,
    big: "$0.00", big2: "Balans",
    w1: "Yashash vaqti", w2: "4 kun 6 soat",
    chartHead: "Balans dinamikasi", ax1: "boshlandi", ax2: "tugadi",
    modal: { delay: 3.0, title: "Hisobingiz yopildi",
      body: "Mablag' yetarli emas.\rPozitsiyalar majburiy yopildi.",
      btn1: "Tushunarli", btn2: "To'ldirish", scale: 86 }
  },

  // push-through chiqishlar (ekran + video kick) — insights/crash out'lariga
  pushThrough: true,

  // --- SFX (vaqt, fayl, dB) — bo'sh qoldirsangiz o'tkazib yuboradi ---
  sfx: [
    ["plip_big.wav",   14.38, -6], ["plip_big.wav",   20.85, -6],
    ["swoosh_in.wav",  26.25, -6],
    ["tick.wav", 26.60, -16], ["tick.wav", 26.80, -16], ["tick.wav", 27.00, -16], ["tick.wav", 27.20, -16],
    ["ding_pos.wav",   27.45, -10],
    ["swoosh_out.wav", 30.55, -9],
    ["swoosh_in.wav",  38.41, -6], ["thud_neg.wav", 38.71, -7],
    ["modal.wav",      41.41, -7],
    ["swoosh_out.wav", 48.31, -9]
  ],

  // --- audio miks ---
  audio: {
    narrationWav: "",           // ffmpeg bilan masterlangan gap (README'ga qarang); "" = o'tkazib yuborish
    muteVideoAudio: false,      // narrationWav berilsa true qiling
    musicLayerPrefix: "",       // musiqa qatlami nomi boshlanishi; "" = yo'q
    musicBed: 4,                // musiqa dB (gapdan ~13dB past bo'lsin)
    musicFadeIn: 1.8, musicFadeOutStart: 50.6,
    duckAtExits: true           // whoosh paytida musiqani 4dB pasaytirish
  }
};

// ============================================================
// KUTUBXONA — pastini o'zgartirmang
// ============================================================
(function(){
  var log = new File(Folder.temp.fsName + "/nytvir_style_log.txt");
  log.encoding = "UTF-8"; log.open("w");
  function W(s){ log.writeln(s); }
  try{
    app.beginUndoGroup("Nytvir style build");
    var p = app.project, comp = null, i;
    for (i=1;i<=p.numItems;i++){ var it=p.item(i);
      if (it instanceof CompItem && it.name.indexOf(CONFIG.compName)===0){ comp = it; break; } }
    if (!comp){ alert("Comp topilmadi: " + CONFIG.compName); log.close(); return; }

    var COL = {
      wht:[1,1,1], red:[1,0.271,0.227], grn:[0.188,0.820,0.345],
      bg:[0.055,0.055,0.063], pan:[0.102,0.102,0.114],
      grey:[0.604,0.604,0.635], txt2:[0.788,0.788,0.816], txt1:[0.925,0.925,0.941],
      teal:[0.176,0.831,0.749], mod:[0.169,0.169,0.188], blue:[0.29,0.553,0.973],
      mut:[0.541,0.541,0.573], tint:[0.11,0.11,0.125], capc:[0.596,0.596,0.624]
    };
    var FB="Arial-BoldMT", FR="ArialMT";
    var LJ=ParagraphJustification.LEFT_JUSTIFY, CJ=ParagraphJustification.CENTER_JUSTIFY, RJ=ParagraphJustification.RIGHT_JUSTIFY;
    var capB = null; try{ capB = comp.layer("[Cap] 1"); }catch(e){}
    function down(l){ if (capB) l.moveAfter(capB); return l; }

    function easeKey(pr,k,infIn,infOut){
      var a=new KeyframeEase(0,infIn), b=new KeyframeEase(0,infOut);
      function mk(e){ var d=1; try{ if(pr.value instanceof Array) d=pr.value.length; }catch(x){}
        try{ if(pr.propertyValueType===PropertyValueType.TwoD_SPATIAL||pr.propertyValueType===PropertyValueType.ThreeD_SPATIAL) d=1; }catch(x){}
        var r=[]; for(var q=0;q<d;q++) r.push(e); return r; }
      try{ pr.setTemporalEaseAtKey(k,mk(a),mk(b)); }catch(e){}
    }
    function fadeIO(l,tin,delay,tout){
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(tin+delay,0); op.setValueAtTime(tin+delay+0.22,100);
      op.setValueAtTime(tout-0.27,100); op.setValueAtTime(tout-0.02,0);
    }
    function springIn(l,t,cy){
      var pos=l.property("Transform").property("Position"); var px=pos.value[0];
      pos.setValueAtTime(t,[px,cy+52]); pos.setValueAtTime(t+0.7,[px,cy]); easeKey(pos,2,80,80);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[96,96]); sc.setValueAtTime(t+0.7,[100,100]); easeKey(sc,2,80,80);
    }
    function mkText(name,str,font,fs,col,x,y,just,tin,tout,delay,trk,lead){
      var l=comp.layers.addText(str); l.name=name; l.inPoint=tin; l.outPoint=tout;
      var st=l.property("Source Text"), td=st.value;
      td.font=font; td.fontSize=fs; td.fillColor=col; td.applyStroke=false; td.applyFill=true; td.justification=just;
      if(trk) td.tracking=trk; if(lead){ td.autoLeading=false; td.leading=lead; }
      st.setValue(td);
      l.property("Transform").property("Position").setValue([x,y]);
      fadeIO(l,tin,delay,tout); return down(l);
    }
    function mkRect(name,cx,cy,w,h,r,col,fillOp,tin,tout,delay){
      var l=comp.layers.addShape(); l.name=name; l.inPoint=tin; l.outPoint=tout;
      var c=l.property("ADBE Root Vectors Group");
      var rc=c.addProperty("ADBE Vector Shape - Rect");
      rc.property("ADBE Vector Rect Size").setValue([w,h]);
      rc.property("ADBE Vector Rect Roundness").setValue(r);
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(col);
      if(fillOp!==null) fl.property("ADBE Vector Fill Opacity").setValue(fillOp);
      l.property("Transform").property("Position").setValue([cx,cy]);
      fadeIO(l,tin,delay,tout); return down(l);
    }
    function addPathGrp(c,verts,closed){
      var g=c.addProperty("ADBE Vector Shape - Group"); var s=new Shape();
      s.vertices=verts; s.closed=closed?true:false;
      g.property("ADBE Vector Shape").setValue(s); return g;
    }
    function addStroke(c,col,w){
      var st=c.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(col);
      st.property("ADBE Vector Stroke Width").setValue(w);
      try{ st.property("ADBE Vector Stroke Line Cap").setValue(2);
           st.property("ADBE Vector Stroke Line Join").setValue(2); }catch(e){}
      return st;
    }
    function mkIcon(name,kind,cx,cy,tin,tout,delay){
      var l=comp.layers.addShape(); l.name=name; l.inPoint=tin; l.outPoint=tout;
      var c=l.property("ADBE Root Vectors Group");
      if(kind==="down"){ addPathGrp(c,[[-25.9,-14.8],[-7.4,3.7],[3.7,-7.4],[25.9,14.8]],false);
                         addPathGrp(c,[[25.9,-3.7],[25.9,14.8],[7.4,14.8]],false); }
      else if(kind==="up"){ addPathGrp(c,[[-25.9,14.8],[-7.4,-3.7],[3.7,7.4],[25.9,-14.8]],false);
                            addPathGrp(c,[[25.9,3.7],[25.9,-14.8],[7.4,-14.8]],false); }
      else { var el=c.addProperty("ADBE Vector Shape - Ellipse");
             el.property("ADBE Vector Ellipse Size").setValue([52,52]);
             addPathGrp(c,[[-11,0],[11,0]],false);
             if(kind==="plus") addPathGrp(c,[[0,-11],[0,11]],false); }
      addStroke(c,COL.grey,6);
      l.property("Transform").property("Position").setValue([cx,cy]);
      fadeIO(l,tin,delay,tout); return down(l);
    }
    function mkGrid(name,xs,xe,ys,tin,tout,delay){
      var l=comp.layers.addShape(); l.name=name; l.inPoint=tin; l.outPoint=tout;
      var c=l.property("ADBE Root Vectors Group");
      for(var k=0;k<ys.length;k++){
        var rc=c.addProperty("ADBE Vector Shape - Rect");
        rc.property("ADBE Vector Rect Size").setValue([xe-xs,3]);
        rc.property("ADBE Vector Rect Position").setValue([(xs+xe)/2,ys[k]]);
      }
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(COL.wht);
      fl.property("ADBE Vector Fill Opacity").setValue(20);
      l.property("Transform").property("Position").setValue([0,0]);
      fadeIO(l,tin,delay,tout); return down(l);
    }
    function mkChartLine(name,verts,col,tin,tout,delay,dur){
      var l=comp.layers.addShape(); l.name=name; l.inPoint=tin; l.outPoint=tout;
      var c=l.property("ADBE Root Vectors Group");
      addPathGrp(c,verts,false); addStroke(c,col,9);
      var tr=c.addProperty("ADBE Vector Filter - Trim");
      tr.property("ADBE Vector Trim End").setValueAtTime(tin+delay,0);
      tr.property("ADBE Vector Trim End").setValueAtTime(tin+delay+dur,100);
      easeKey(tr.property("ADBE Vector Trim End"),2,85,1);
      l.property("Transform").property("Position").setValue([0,0]);
      fadeIO(l,tin,delay-0.1,tout); return down(l);
    }
    function groupNull(name,members,tin,tout,cx,cy){
      var nul=comp.layers.addNull(); nul.name=name;
      try{ nul.source.name=name; }catch(e){}
      nul.inPoint=tin; nul.outPoint=tout;
      nul.property("Transform").property("Position").setValue([cx,cy]);
      for(var k=0;k<members.length;k++){ if(members[k].parent===null) members[k].parent=nul; }
      return nul;
    }

    // ---------- 1) CAPTION PASS ----------
    if (CONFIG.captions.enable){
      var nC=0;
      for (i=1;i<=comp.numLayers;i++){
        var cl=comp.layer(i);
        if (cl.name.indexOf("[Cap]")!==0) continue;
        var st2=cl.property("Source Text"), td2=st2.value;
        var txt=String(td2.text).replace(/[\r\n\u0003]+/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/g,"");
        var fs=CONFIG.captions.fsMax;
        if (txt.length*0.47*fs > CONFIG.captions.maxW) fs=Math.floor(CONFIG.captions.maxW/(txt.length*0.47));
        td2.text=txt; td2.font=CONFIG.captions.font; td2.fontSize=fs; st2.setValue(td2);
        try{ var r=cl.sourceRectAtTime(cl.inPoint+0.1,false);
             if(r.width>CONFIG.captions.maxW){ td2.fontSize=Math.floor(fs*CONFIG.captions.maxW/r.width); st2.setValue(td2); } }catch(e){}
        nC++;
      }
      W("captions: " + nC);
    }

    // ---------- 2) SHISHA WIDGETLAR ----------
    for (var wI=0; wI<CONFIG.widgets.length; wI++){
      var w=CONFIG.widgets[wI], tag="W"+(wI+2), cy=378, accent=COL[w.accent];
      var adj=comp.layers.addSolid(COL.wht,"[STY] "+tag+" Blur",comp.width,comp.height,1);
      adj.adjustmentLayer=true; adj.inPoint=w.tIn; adj.outPoint=w.tOut;
      var gb=adj.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2");
      gb.property("ADBE Gaussian Blur 2-0001").setValue(42);
      try{ gb.property("ADBE Gaussian Blur 2-0002").setValue(true); }catch(e){}
      down(adj);
      function glassRect(nm,style){
        var l=comp.layers.addShape(); l.name=nm; l.inPoint=w.tIn; l.outPoint=w.tOut;
        var c=l.property("ADBE Root Vectors Group");
        var rc=c.addProperty("ADBE Vector Shape - Rect");
        rc.property("ADBE Vector Rect Size").setValue([916,458]);
        rc.property("ADBE Vector Rect Roundness").setValue(89);
        if(style){ var s2=c.addProperty("ADBE Vector Graphic - Stroke");
          s2.property("ADBE Vector Stroke Color").setValue(COL.wht);
          s2.property("ADBE Vector Stroke Width").setValue(2.5);
          s2.property("ADBE Vector Stroke Opacity").setValue(13);
          var f2=c.addProperty("ADBE Vector Graphic - Fill");
          f2.property("ADBE Vector Fill Color").setValue(COL.tint);
          f2.property("ADBE Vector Fill Opacity").setValue(55);
        } else { var f3=c.addProperty("ADBE Vector Graphic - Fill");
          f3.property("ADBE Vector Fill Color").setValue(COL.wht); }
        l.property("Transform").property("Position").setValue([540,cy]);
        return down(l);
      }
      var matte=glassRect("[STY] "+tag+" Matte",false); fadeIO(matte,w.tIn,0,w.tOut);
      adj.setTrackMatte(matte,TrackMatteType.ALPHA);
      var tint=glassRect("[STY] "+tag+" Glass",true); fadeIO(tint,w.tIn,0,w.tOut);
      var kids=[
        mkText("[STY] "+tag+" Cap",w.cap,FB,39,COL.capc,149,245,LJ,w.tIn,w.tOut,0.12,120),
        mkText("[STY] "+tag+" Big",w.big,FB,149,COL.wht,143,420,LJ,w.tIn,w.tOut,0.22),
        (function(){ var pl=mkRect("[STY] "+tag+" Pill",279,520,w.pillW,84,42,accent,16,w.tIn,w.tOut,0.38); return pl; })(),
        mkText("[STY] "+tag+" PillT",w.pill,FB,41,accent,279,534,CJ,w.tIn,w.tOut,0.38),
        mkText("[STY] "+tag+" Note",w.note,FR,41,COL.capc,w.noteX,534,LJ,w.tIn,w.tOut,0.5)
      ];
      var nul=groupNull("[STY] "+tag+" CTRL",[],w.tIn,w.tOut,540,cy);
      for(var q=0;q<kids.length;q++) kids[q].parent=nul;
      tint.parent=nul; matte.parent=nul;
      springIn(nul,w.tIn,cy);
      W("widget "+tag+" built");
    }

    // ---------- 3) INSIGHTS EKRANI ----------
    var S=CONFIG.screenScale, INV=100/S*100;
    if (CONFIG.insights.enable){
      var B=CONFIG.insights, bMembers=[];
      var bg=mkRect("[STY] B BG",540,960,1080,1920,0,COL.bg,null,B.tIn,B.tOut,0);
      var bsc=bg.property("Transform").property("Scale");
      bsc.setValueAtTime(B.tIn,[108*INV/100,108*INV/100]);
      bsc.setValueAtTime(B.tIn+0.45,[INV,INV]); easeKey(bsc,2,66,1);
      bMembers.push(bg);
      bMembers.push(mkRect("[STY] B P1",540,421,990,618,37,COL.pan,null,B.tIn,B.tOut,0.15));
      bMembers.push(mkRect("[STY] B P2",540,881,990,237,37,COL.pan,null,B.tIn,B.tOut,0.15));
      bMembers.push(mkRect("[STY] B P3",540,1091,990,117,37,COL.pan,null,B.tIn,B.tOut,0.15));
      bMembers.push(mkRect("[STY] B P4",540,1421,990,477,37,COL.pan,null,B.tIn,B.tOut,0.15));
      bMembers.push(mkText("[STY] B Head",B.head,FB,46,COL.wht,95,198,LJ,B.tIn,B.tOut,0.25));
      bMembers.push(mkText("[STY] B HeadN",B.headN,FB,46,COL.wht,985,198,RJ,B.tIn,B.tOut,0.25));
      var rowY=[265,375,485,595], rowD=[0.35,0.55,0.75,0.95];
      for(i=0;i<B.rows.length;i++){
        var rw=B.rows[i];
        bMembers.push(mkIcon("[STY] B Ico"+(i+1),rw.icon,120,rowY[i],B.tIn,B.tOut,rowD[i]));
        bMembers.push(mkText("[STY] B Lbl"+(i+1),rw.label,FR,46,COL.txt2,170,rowY[i]+16,LJ,B.tIn,B.tOut,rowD[i]));
        bMembers.push(mkText("[STY] B Val"+(i+1),rw.val,FB,46,COL[rw.color],985,rowY[i]+16,RJ,B.tIn,B.tOut,rowD[i]));
      }
      var big=mkText("[STY] B Big",B.big,FB,112,COL[B.bigColor],540,909,CJ,B.tIn,B.tOut,1.2);
      var bsc2=big.property("Transform").property("Scale");
      bsc2.setValueAtTime(B.tIn+1.2,[80,80]); bsc2.setValueAtTime(B.tIn+1.38,[106,106]); bsc2.setValueAtTime(B.tIn+1.52,[100,100]);
      try{ big.property("ADBE Effect Parade").addProperty("ADBE Glo2"); }catch(e){}
      bMembers.push(big);
      bMembers.push(mkText("[STY] B Big2",B.big2,FR,50,COL.txt2,540,967,CJ,B.tIn,B.tOut,1.25));
      bMembers.push(mkText("[STY] B W1",B.w1,FB,48,COL.txt1,95,1109,LJ,B.tIn,B.tOut,1.5));
      bMembers.push(mkText("[STY] B W2",B.w2,FB,48,COL.txt1,985,1109,RJ,B.tIn,B.tOut,1.5));
      bMembers.push(mkText("[STY] B CHead",B.chartHead,FB,52,COL.wht,95,1268,LJ,B.tIn,B.tOut,1.6));
      bMembers.push(mkGrid("[STY] B Grid",95,985,[1347,1417,1487,1557],B.tIn,B.tOut,1.6));
      var upPts=[[109,1504],[211,1522],[314,1493],[417,1528],[519,1481],[622,1499],[724,1440],[827,1405],[964,1353]];
      var dnPts=[[109,1341],[198,1370],[287,1358],[375,1423],[464,1452],[553,1446],[642,1493],[731,1528],[820,1545],[964,1557]];
      bMembers.push(mkChartLine("[STY] B Line", B.chartUp?upPts:dnPts, B.chartUp?COL.teal:COL.red, B.tIn,B.tOut,1.8,1.0));
      bMembers.push(mkText("[STY] B Ax1",B.ax1,FR,39,COL.mut,95,1620,LJ,B.tIn,B.tOut,1.9));
      bMembers.push(mkText("[STY] B Ax2",B.ax2,FR,39,COL.mut,985,1620,RJ,B.tIn,B.tOut,1.9));
      var bCtrl=groupNull("[STY] B CTRL",bMembers,B.tIn,B.tOut,540,960);
      bCtrl.property("Transform").property("Scale").setValue([S,S,S]);
      if (CONFIG.pushThrough){
        var xsc=bCtrl.property("Transform").property("Scale");
        xsc.setValueAtTime(B.tOut-0.45,[S,S,S]); xsc.setValueAtTime(B.tOut,[118,118,118]); easeKey(xsc,1,1,75);
        try{ bCtrl.motionBlur=true; comp.motionBlur=true; }catch(e){}
      }
      W("insights built");
    }

    // ---------- 4) QIZIL EKRAN + MODAL ----------
    if (CONFIG.crash.enable){
      var C=CONFIG.crash, cMembers=[];
      var cbg=mkRect("[STY] C BG",540,960,1080,1920,0,COL.bg,null,C.tIn,C.tOut,0);
      var csc=cbg.property("Transform").property("Scale");
      csc.setValueAtTime(C.tIn,[108*INV/100,108*INV/100]); csc.setValueAtTime(C.tIn+0.45,[INV,INV]); easeKey(csc,2,66,1);
      cMembers.push(cbg);
      cMembers.push(mkRect("[STY] C P2",540,230,990,237,37,COL.pan,null,C.tIn,C.tOut,0.15));
      cMembers.push(mkRect("[STY] C P3",540,440,990,117,37,COL.pan,null,C.tIn,C.tOut,0.15));
      cMembers.push(mkRect("[STY] C P4",540,770,990,477,37,COL.pan,null,C.tIn,C.tOut,0.15));
      var cbig=mkText("[STY] C Big",C.big,FB,112,COL.red,540,246,CJ,C.tIn,C.tOut,0.3);
      var csc2=cbig.property("Transform").property("Scale");
      csc2.setValueAtTime(C.tIn+0.3,[80,80]); csc2.setValueAtTime(C.tIn+0.48,[106,106]); csc2.setValueAtTime(C.tIn+0.62,[100,100]);
      try{ cbig.property("ADBE Effect Parade").addProperty("ADBE Glo2"); }catch(e){}
      cMembers.push(cbig);
      cMembers.push(mkText("[STY] C Big2",C.big2,FR,50,COL.txt2,540,317,CJ,C.tIn,C.tOut,0.35));
      cMembers.push(mkText("[STY] C W1",C.w1,FB,48,COL.txt1,95,457,LJ,C.tIn,C.tOut,0.6));
      cMembers.push(mkText("[STY] C W2",C.w2,FB,48,COL.txt1,985,457,RJ,C.tIn,C.tOut,0.6));
      cMembers.push(mkText("[STY] C CHead",C.chartHead,FB,52,COL.wht,95,618,LJ,C.tIn,C.tOut,0.8));
      cMembers.push(mkGrid("[STY] C Grid",95,985,[697,767,837,907],C.tIn,C.tOut,0.8));
      cMembers.push(mkChartLine("[STY] C Line",
        [[109,691],[198,720],[287,708],[375,773],[464,802],[553,796],[642,843],[731,878],[820,895],[964,907]],
        COL.red,C.tIn,C.tOut,1.0,1.2));
      cMembers.push(mkText("[STY] C Ax1",C.ax1,FR,39,COL.mut,95,970,LJ,C.tIn,C.tOut,1.1));
      cMembers.push(mkText("[STY] C Ax2",C.ax2,FR,39,COL.mut,985,970,RJ,C.tIn,C.tOut,1.1));
      // modal
      var M=C.modal, mT=C.tIn+M.delay, mMembers=[];
      var modal=mkRect("[STY] C Modal",540,893,902,520,60,COL.mod,null,C.tIn,C.tOut,M.delay);
      var msc=modal.property("Transform").property("Scale");
      msc.setValueAtTime(mT,[86,86]); msc.setValueAtTime(mT+0.18,[104,104]); msc.setValueAtTime(mT+0.32,[100,100]);
      mMembers.push(modal);
      var mic=comp.layers.addShape(); mic.name="[STY] C MIco"; mic.inPoint=C.tIn; mic.outPoint=C.tOut;
      var mc=mic.property("ADBE Root Vectors Group");
      var me=mc.addProperty("ADBE Vector Shape - Ellipse");
      me.property("ADBE Vector Ellipse Size").setValue([149,149]);
      var mf=mc.addProperty("ADBE Vector Graphic - Fill");
      mf.property("ADBE Vector Fill Color").setValue(COL.red);
      mf.property("ADBE Vector Fill Opacity").setValue(15);
      mic.property("Transform").property("Position").setValue([540,745]);
      fadeIO(mic,C.tIn,M.delay+0.08,C.tOut); down(mic); mMembers.push(mic);
      mMembers.push(mkText("[STY] C MEx","!",FB,66,COL.red,540,768,CJ,C.tIn,C.tOut,M.delay+0.08));
      mMembers.push(mkText("[STY] C MT1",M.title,FB,54,COL.txt1,540,880,CJ,C.tIn,C.tOut,M.delay+0.1));
      mMembers.push(mkText("[STY] C MT2",M.body,FR,45,COL.mut,540,955,CJ,C.tIn,C.tOut,M.delay+0.12,0,62));
      mMembers.push(mkRect("[STY] C MHdiv",540,1043,902,3,0,COL.wht,8,C.tIn,C.tOut,M.delay+0.1));
      mMembers.push(mkRect("[STY] C MVdiv",540,1099,3,108,0,COL.wht,8,C.tIn,C.tOut,M.delay+0.1));
      mMembers.push(mkText("[STY] C MB1",M.btn1,FB,47,COL.mut,315,1114,CJ,C.tIn,C.tOut,M.delay+0.15));
      mMembers.push(mkText("[STY] C MB2",M.btn2,FB,47,COL.blue,765,1114,CJ,C.tIn,C.tOut,M.delay+0.15));
      var mCtrl=groupNull("[STY] C Modal CTRL",mMembers,C.tIn,C.tOut,540,893);
      mCtrl.property("Transform").property("Scale").setValue([M.scale,M.scale,M.scale]);
      var cCtrl=groupNull("[STY] C CTRL",cMembers,C.tIn,C.tOut,540,960);
      mCtrl.parent=cCtrl;
      cCtrl.property("Transform").property("Scale").setValue([S,S,S]);
      if (CONFIG.pushThrough){
        var xsc2=cCtrl.property("Transform").property("Scale");
        xsc2.setValueAtTime(C.tOut-0.45,[S,S,S]); xsc2.setValueAtTime(C.tOut,[118,118,118]); easeKey(xsc2,1,1,75);
        try{ cCtrl.motionBlur=true; comp.motionBlur=true; }catch(e){}
      }
      W("crash built");
    }

    // ---------- 5) VIDEO KICK (push-through paytida) ----------
    if (CONFIG.pushThrough){
      var vid=null;
      for(i=1;i<=comp.numLayers;i++){ var vl=comp.layer(i);
        if (vl.source && vl.source.file && vl.hasVideo && vl.hasAudio && vl.name.indexOf("[")!==0){ vid=vl; break; } }
      if (vid){
        var vs=vid.property("Transform").property("Scale");
        var outs=[];
        if (CONFIG.insights.enable) outs.push(CONFIG.insights.tOut);
        if (CONFIG.crash.enable) outs.push(CONFIG.crash.tOut);
        for(i=0;i<outs.length;i++){
          var tE=outs[i];
          vs.setValueAtTime(tE-0.45,[100,100]); vs.setValueAtTime(tE,[106,106]); vs.setValueAtTime(tE+0.45,[100,100]);
        }
        for(var k=1;k<=vs.numKeys;k++){ easeKey(vs,k, Math.abs(vs.keyValue(k)[0]-100)<0.1?80:65, Math.abs(vs.keyValue(k)[0]-100)<0.1?80:65); }
        try{ vid.motionBlur=true; }catch(e){}
        W("video kicks: " + outs.length);
      }
    }

    // ---------- 6) SFX ----------
    var cache={};
    function sfxFootage(fn){
      if(cache[fn]) return cache[fn];
      var f=new File(CONFIG.sfxDir+fn);
      if(!f.exists){ W("SFX MISSING "+fn); return null; }
      var ft=p.importFile(new ImportOptions(f)); cache[fn]=ft; return ft;
    }
    var nSfx=0;
    for(i=0;i<CONFIG.sfx.length;i++){
      var sx=CONFIG.sfx[i], ft2=sfxFootage(sx[0]);
      if(!ft2) continue;
      var sl=comp.layers.add(ft2); sl.name="[SFX] "+sx[0].replace(".wav","")+" @"+sx[1];
      sl.startTime=sx[1];
      try{ sl.property("Audio Levels").setValue([sx[2],sx[2]]); }catch(e){}
      sl.moveToEnd(); nSfx++;
    }
    W("sfx placed: " + nSfx);

    // ---------- 7) AUDIO MIKS ----------
    var A=CONFIG.audio;
    if (A.narrationWav){
      var nfl=new File(A.narrationWav);
      if (nfl.exists){
        var nft=p.importFile(new ImportOptions(nfl));
        var nl=comp.layers.add(nft); nl.name="[AUD] Narration"; nl.startTime=0;
        try{ nl.property("Audio Levels").setValue([-1,-1]); }catch(e){}
        nl.moveToEnd(); W("narration added");
        if (A.muteVideoAudio){
          for(i=1;i<=comp.numLayers;i++){ var vv=comp.layer(i);
            if (vv.source && vv.source.file && vv.hasVideo && vv.hasAudio && vv.name.indexOf("[")!==0){ vv.audioEnabled=false; break; } }
        }
      }
    }
    if (A.musicLayerPrefix){
      var mus=null;
      for(i=1;i<=comp.numLayers;i++){ if (comp.layer(i).name.indexOf(A.musicLayerPrefix)===0){ mus=comp.layer(i); break; } }
      if (mus){
        mus.name="[AUD] Music";
        var al=mus.property("Audio Levels");
        while(al.numKeys>0) al.removeKey(1);
        var bed=A.musicBed, D=comp.duration;
        al.setValueAtTime(0,[-45,-45]); al.setValueAtTime(A.musicFadeIn,[bed,bed]);
        al.setValueAtTime(A.musicFadeOutStart,[bed,bed]); al.setValueAtTime(D-0.05,[-45,-45]);
        if (A.duckAtExits && CONFIG.pushThrough){
          var oo=[];
          if (CONFIG.insights.enable) oo.push(CONFIG.insights.tOut);
          if (CONFIG.crash.enable) oo.push(CONFIG.crash.tOut);
          for(i=0;i<oo.length;i++){
            var t0=oo[i];
            al.setValueAtTime(t0-0.65,[bed,bed]); al.setValueAtTime(t0-0.4,[bed-4,bed-4]);
            al.setValueAtTime(t0+0.35,[bed-4,bed-4]); al.setValueAtTime(t0+0.65,[bed,bed]);
          }
        }
        W("music mixed");
      }
    }

    app.endUndoGroup();
    p.save();
    W("PIPELINE DONE");
    alert("Nytvir style: tayyor! Log: " + log.fsName);
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); try{app.endUndoGroup();}catch(e2){} alert("Xato: "+e.toString()); }
  log.close();
})();
