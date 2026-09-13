// REFERENCE CLONE: katta o'tkir svechalar, mono oq shrift, oltin aksent, minimal sahna, yaqin kamera
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);
(function(){
  var log = new File("C:/Users/nytvi/AppData/Local/Temp/claude/D--extanion-main/84770df0-8738-43b2-b73d-9c13370561f9/scratchpad/ptj_refclone_log.txt");
  log.encoding="UTF-8"; log.open("w");
  function W(s){ log.writeln(s); log.close(); log.open("a"); }
  try{
    var p=app.project, pcc=null, i;
    if (!p || p.numItems===0){ app.open(new File("D:/edit/ptj_math.aep")); p=app.project; }
    for (i=1;i<=p.numItems;i++){ var it=p.item(i); if (it instanceof CompItem && it.name==="CHART ZONE"){ pcc=it; break; } }
    if (!pcc){ W("CHART ZONE yo'q"); log.close(); return; }
    app.beginUndoGroup("reference clone");
    var cam=pcc.layer("[NEO] CAM");
    var GRN=[0.133,0.890,0.306], RED=[0.949,0.216,0.184], WHT=[1,1,1], GOLD=[1.0,0.84,0.25];
    var T0=0.3, T1=48.35;

    function easeK(pr,k,inf){
      var e=new KeyframeEase(0,inf||75);
      try{ pr.setTemporalEaseAtKey(k,[e,e],[e,e]); }catch(x){
        try{ pr.setTemporalEaseAtKey(k,[e],[e]); }catch(y){
          try{ pr.setTemporalEaseAtKey(k,[e,e,e],[e,e,e]); }catch(z){} } }
    }
    function setGlow(l,rad,inten){
      try{
        var gl=l.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        try{ gl.property("ADBE Glo2-0002").setValue(150); }catch(e){}
        try{ gl.property("ADBE Glo2-0003").setValue(rad); }catch(e){}
        try{ gl.property("ADBE Glo2-0004").setValue(inten); }catch(e){}
      }catch(e){}
    }

    // 1) eski chart elementlarini o'chirish (reference minimalizmi)
    var KILL=["[NEO] trail","[NEO] grid","[NEO] price line","[NEO] ambient","[NEO] symbol","[NEO] live dot","[NEO] zero line"];
    var nDel=0;
    for (i=pcc.numLayers;i>=1;i--){
      var nm=pcc.layer(i).name, kill=false;
      if (nm.indexOf("[NEO] k")===0 && nm.charAt(7)>="0" && nm.charAt(7)<="9") kill=true;
      if (nm.indexOf("[NEO] flash")===0 || nm.indexOf("[NEO] t ")===0) kill=true;
      for (var q=0;q<KILL.length;q++) if (nm===KILL[q]) kill=true;
      if (kill){ pcc.layer(i).remove(); nDel++; }
    }
    W("deleted: "+nDel);

    // 2) kamera keylarini yechish
    var pos=cam.property("Transform").property("Position");
    var scc=cam.property("Transform").property("Scale");
    try{ pos.expression=""; }catch(e){}
    try{ scc.expression=""; }catch(e){}
    while(pos.numKeys>0) pos.removeKey(1);
    while(scc.numKeys>0) scc.removeKey(1);
    pos.setValue([540,530]); scc.setValue([100,100,100]);

    // 3) yangi geometriya: keng oraliq (88px), katta svechalar
    var YC=[520,535,510,545,525,505,540,520,550,530,515,540, 470,415,360,400,310, 560,750,880,
            868,880,862,875, 845,852];
    var WL="LLWLWLLWLW"+"LLWLWLLWWLWWLW";
    var prev=852;
    for (var w=0;w<WL.length;w++){ prev += (WL.charAt(w)==="W" ? -72 : 14); YC.push(prev); }
    var N=50, X=[], Y=[];
    var seed=41; function rnd(){ seed=(seed*1103515245+12345)%2147483648; return seed/2147483648; }
    for (i=0;i<N;i++){ X.push(80+i*88); Y.push(YC[i]+(rnd()-0.5)*8); }
    var SEG=[[0,11,0.5,0.55],[12,16,8.1,1.1],[17,17,14.8,0],[18,18,15.6,0],[19,19,16.4,0],
             [20,23,19.4,1.2],[24,24,26.7,0],[25,25,27.7,0],[26,49,29.8,0.72]];
    function TT(idx){
      for (var a=0;a<SEG.length;a++)
        if (idx>=SEG[a][0]&&idx<=SEG[a][1]) return SEG[a][2]+(idx-SEG[a][0])*SEG[a][3];
      return 0.3;
    }
    W("path ok");

    // 4) oltin dashed $0 chiziq (reference uslubi)
    (function(){
      var l=pcc.layers.addShape(); l.name="[NEO] zero line";
      l.inPoint=13.6; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      for (var d=0;d<80;d++){
        var r=c.addProperty("ADBE Vector Shape - Rect");
        r.property("ADBE Vector Rect Size").setValue([30,4]);
        r.property("ADBE Vector Rect Position").setValue([-300+d*62,900]);
      }
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(GOLD);
      l.property("Transform").property("Position").setValue([0,0]);
      setGlow(l,14,0.8);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(13.6,0); op.setValueAtTime(14.2,70);
      if (pcc.layer("[NEO] Zone BG")) l.moveBefore(pcc.layer("[NEO] Zone BG"));
      l.parent=cam;
      W("gold zero line ok");
    })();

    // 5) svechalar: KATTA, o'tkir burchak, flat rang, wick ham shu rang
    for (i=0;i<N;i++){
      var t=TT(i), x=X[i], yC=Y[i];
      var bH, wUp, wDn;
      if (i<=11){ bH=38+rnd()*32; wUp=18+rnd()*28; wDn=18+rnd()*28; }
      else if (i<=16){ bH=80+rnd()*50; wUp=45+rnd()*70; wDn=45+rnd()*70; }
      else if (i<=19){ bH=60; wUp=20; wDn=20; }
      else if (i<=25){ bH=22+rnd()*14; wUp=10+rnd()*14; wDn=10+rnd()*14; }
      else { var isW=(WL.charAt(i-26)==="W"); bH=isW?(85+rnd()*20):(30+rnd()*12); wUp=12+rnd()*16; wDn=12+rnd()*16; }
      var yO=yC+bH/2, yCl=yC-bH/2, wTop=yCl-wUp, wBot=yO+wDn;
      if (i===17){ wTop=320; yCl=370; yO=650; bH=280; wBot=715; }
      if (i===18){ wTop=670; yCl=700; yO=815; bH=115; wBot=850; }
      if (i===19){ wTop=805; yCl=835; yO=895; bH=60; wBot=902; }
      var up;
      if (i>=12 && i<=16) up=true;
      else if (i>=17 && i<=19) up=false;
      else if (i>=26) up=(WL.charAt(i-26)==="W");
      else up=(i>0)?(Y[i]<Y[i-1]):true;
      var col=up?GRN:RED;
      var l=pcc.layers.addShape(); l.name="[NEO] k"+i;
      l.inPoint=T0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var wick=c.addProperty("ADBE Vector Shape - Rect");
      wick.property("ADBE Vector Rect Size").setValue([5,Math.max(10,wBot-wTop)]);
      wick.property("ADBE Vector Rect Position").setValue([0,-Math.max(10,wBot-wTop)/2]);
      var body=c.addProperty("ADBE Vector Shape - Rect");
      body.property("ADBE Vector Rect Size").setValue([62,Math.max(14,yO-yCl)]);
      body.property("ADBE Vector Rect Roundness").setValue(0);
      body.property("ADBE Vector Rect Position").setValue([0,(yCl+(yO-yCl)/2)-wBot]);
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(col);
      l.property("Transform").property("Position").setValue([x,wBot]);
      setGlow(l,16,0.75);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[100,8]); sc.setValueAtTime(t+0.45,[100,100]); easeK(sc,2,80);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.12,100);
      op.setValueAtTime(T1-0.3,100); op.setValueAtTime(T1,0);
      if (pcc.layer("[NEO] Zone BG")) l.moveBefore(pcc.layer("[NEO] Zone BG"));
      l.parent=cam; l.motionBlur=true;
    }
    W("candles: "+N);

    // 6) matn yordamchisi: MONO OQ (reference shrifti)
    function refText(txt,fs,col,posv,t,name,tOut){
      var tl=pcc.layers.addText(txt);
      tl.name="[NEO] t "+name;
      var stp=tl.property("Source Text"); var td=stp.value;
      td.fontSize=fs; td.applyFill=true; td.fillColor=col; td.applyStroke=false;
      var ok=false;
      var F=["Consolas-Bold","Consolas","CourierNewPS-BoldMT","Arial-BoldMT"];
      for (var ff=0; ff<F.length && !ok; ff++){ try{ td.font=F[ff]; ok=true; }catch(e){} }
      try{ td.justification=ParagraphJustification.CENTER_JUSTIFY; }catch(e){}
      stp.setValue(td);
      var end=(tOut!==undefined)?tOut:T1;
      tl.inPoint=t; tl.outPoint=end+0.05;
      var pp=tl.property("Transform").property("Position");
      pp.setValueAtTime(t,[posv[0],posv[1]+14]); pp.setValueAtTime(t+0.5,posv); easeK(pp,2,78);
      var op=tl.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.35,100);
      op.setValueAtTime(end-0.4,100); op.setValueAtTime(end,0);
      setGlow(tl,10,0.6);
      tl.parent=cam;
      return tl;
    }
    refText("40%",120,WHT,[860,330],5.1,"40pct",14.5);
    refText("100x",64,WHT,[1300,640],8.3,"100x",18.5);
    refText("$0",42,GOLD,[1450,938],14.0,"zero",23.0);
    refText("LIQUIDATED",56,WHT,[1750,290],15.1,"liq",22.0);
    refText("1 : 3",100,WHT,[1980,620],26.8,"rr");
    refText("risk : reward",36,WHT,[1980,692],27.1,"rrsub");
    refText("solid profit",48,WHT,[2800,520],32.0,"profit");
    refText("discipline \u2022 math",50,WHT,[4050,300],40.4,"disc");
    refText("follow for the truth",42,WHT,[4050,168],45.5,"cta");
    W("texts ok");

    // 7) W/L belgilar
    for (i=26;i<=35;i++){
      var isW2=(WL.charAt(i-26)==="W");
      var mk=refText(isW2?"\u2713":"\u2715",46,isW2?GRN:RED,[X[i],YC[i]-80],TT(i)+0.3,"wl"+i);
    }
    W("ticks ok");

    // 8) oltin box crash svechasi atrofida (reference "sweep box")
    (function(){
      var l=pcc.layers.addShape(); l.name="[NEO] sweepBox";
      l.inPoint=16.2; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var r=c.addProperty("ADBE Vector Shape - Rect");
      r.property("ADBE Vector Rect Size").setValue([100,210]);
      r.property("ADBE Vector Rect Roundness").setValue(0);
      var st=c.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(GOLD);
      st.property("ADBE Vector Stroke Width").setValue(4);
      l.property("Transform").property("Position").setValue([X[19],830]);
      setGlow(l,16,0.9);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(16.2,[70,70]); sc.setValueAtTime(16.7,[100,100]); easeK(sc,2,80);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(16.2,0); op.setValueAtTime(16.5,100);
      op.setValueAtTime(21.6,100); op.setValueAtTime(22.0,0);
      l.outPoint=22.05;
      l.parent=cam; l.motionBlur=true;
      W("sweep box ok");
    })();

    // 9) flashlar
    function flash(px,py,t,col,mx){
      var l=pcc.layers.addShape(); l.name="[NEO] flash@"+t.toFixed(1);
      l.inPoint=t-0.05; l.outPoint=t+0.8;
      var c=l.property("ADBE Root Vectors Group");
      var el=c.addProperty("ADBE Vector Shape - Ellipse");
      el.property("ADBE Vector Ellipse Size").setValue([34,34]);
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(col);
      l.property("Transform").property("Position").setValue([px,py]);
      setGlow(l,20,1.0);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.1,88); op.setValueAtTime(t+0.6,0);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[55,55]); sc.setValueAtTime(t+0.6,[mx,mx]); easeK(sc,2,80);
      l.parent=cam; l.motionBlur=true;
    }
    flash(X[19],900,16.7,GOLD,220);
    flash(X[28],YC[28],TT(28)+0.4,GOLD,150);
    flash(X[35],YC[35],TT(35)+0.4,GOLD,150);
    flash(X[43],YC[43],TT(43)+0.4,GOLD,150);
    flash(X[49],YC[49],TT(49)+0.4,GOLD,165);
    W("flashes ok");

    // 10) YAQIN kamera: kuzatilayotgan svecha (660,470) atrofida tursin
    var CK=[[0.4,3,145],[3.2,8,145],[5.2,10,152],[8.2,13,148],[11.0,15,152],[13.0,16,155],
            [14.9,17,160],[16.6,19,155],[19.5,21,145],[23.0,23,142],[26.8,25,150],[30.0,28,146],
            [33.5,33,144],[36.5,36,142],[39.9,40,144],[42.9,44,146],[45.4,47,148],[48.3,49,146]];
    for (i=0;i<CK.length;i++){
      var z=CK[i][2]/100, xi=X[CK[i][1]], yi=Y[CK[i][1]];
      pos.setValueAtTime(CK[i][0],[660 - z*(xi-540), 470 - z*(yi-530)*0.8]);
      scc.setValueAtTime(CK[i][0],[CK[i][2],CK[i][2],CK[i][2]]);
    }
    for (i=1;i<=pos.numKeys;i++) easeK(pos,i,75);
    for (i=1;i<=scc.numKeys;i++) easeK(scc,i,75);
    pos.expression="value + [Math.sin(time*0.45)*4, Math.cos(time*0.32)*3]";
    scc.expression="var b=Math.sin(time*0.28)*0.6; [value[0]+b, value[1]+b, value[2]+b]";
    W("close camera ok");

    app.endUndoGroup();
    p.save();
    W("REF CLONE OK, saved");
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); try{app.endUndoGroup();}catch(e2){} }
  log.close();
})();
