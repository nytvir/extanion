// WYK FLOW: uzluksiz spawn ritmi + wyk kamera + grid + trail. Svechalar skini o'zgarmaydi.
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);
(function(){
  var log = new File("C:/Users/nytvi/AppData/Local/Temp/claude/D--extanion-main/84770df0-8738-43b2-b73d-9c13370561f9/scratchpad/ptj_wykflow_log.txt");
  log.encoding="UTF-8"; log.open("w");
  function W(s){ log.writeln(s); log.close(); log.open("a"); }
  try{
    var p=app.project, pcc=null, i;
    if (!p || p.numItems===0){ app.open(new File("D:/edit/ptj_math.aep")); p=app.project; }
    for (i=1;i<=p.numItems;i++){ var it=p.item(i); if (it instanceof CompItem && it.name==="CHART ZONE"){ pcc=it; break; } }
    if (!pcc){ W("CHART ZONE yo'q"); log.close(); return; }
    app.beginUndoGroup("wyk flow");
    var cam=pcc.layer("[NEO] CAM");
    var ACC=[1.0,0.624,0.263], RED=[0.949,0.216,0.184], GRN=[0.133,0.890,0.306];
    var T0=0.3, T1=48.35;

    function easeK(pr,k,inf){
      var e=new KeyframeEase(0,inf||75);
      try{ pr.setTemporalEaseAtKey(k,[e,e],[e,e]); }catch(x){
        try{ pr.setTemporalEaseAtKey(k,[e,e,e],[e,e,e]); }catch(z){} }
    }
    function setGlow(l,rad,inten){
      try{
        var gl=l.property("ADBE Effect Parade").addProperty("ADBE Glo2");
        try{ gl.property("ADBE Glo2-0002").setValue(150); }catch(e){}
        try{ gl.property("ADBE Glo2-0003").setValue(rad); }catch(e){}
        try{ gl.property("ADBE Glo2-0004").setValue(inten); }catch(e){}
      }catch(e){}
    }

    // 1) eski dinamik elementlarni o'chirish (svechalar qayta quriladi — skin ayni)
    var nDel=0;
    for (i=pcc.numLayers;i>=1;i--){
      var nm=pcc.layer(i).name;
      if ((nm.indexOf("[NEO] k")===0 && nm.charAt(7)>="0" && nm.charAt(7)<="9") ||
          nm==="[NEO] trail" || nm==="[NEO] grid" || nm.indexOf("[NEO] flash")===0 || nm.indexOf("[NEO] t wl")===0){
        pcc.layer(i).remove(); nDel++;
      }
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

    // 3) geometriya (ayni) + YANGI uzluksiz vaqtlar
    var YC=[520,535,510,545,525,505,540,520,550,530,515,540, 470,415,360,400,310, 560,750,880,
            868,880,862,875, 845,852];
    var WL="LLWLWLLWLW"+"LLWLWLLWWLWWLW";
    var prev=852;
    for (var w=0;w<WL.length;w++){ prev += (WL.charAt(w)==="W" ? -72 : 14); YC.push(prev); }
    var N=50, X=[], Y=[];
    var seed=41; function rnd(){ seed=(seed*1103515245+12345)%2147483648; return seed/2147483648; }
    for (i=0;i<N;i++){ X.push(80+i*88); Y.push(YC[i]+(rnd()-0.5)*8); }
    function TT(idx){
      if (idx<=11) return 0.5 + idx*0.62;          // 0.5 - 7.32
      if (idx<=16) return 8.0 + (idx-12)*1.15;     // 8.0 - 12.6
      if (idx<=19) return 14.0 + (idx-17)*1.0;     // 14 / 15 / 16
      if (idx<=23) return 17.2 + (idx-20)*1.3;     // 17.2 - 21.1
      if (idx<=25) return 22.3 + (idx-24)*1.2;     // 22.3 / 23.5
      return 24.8 + (idx-26)*0.98;                 // 24.8 - 47.3
    }
    W("timing ok, last="+TT(49).toFixed(1));

    // 4) grid (wyk'dagi kabi xira)
    (function(){
      var l=pcc.layers.addShape(); l.name="[NEO] grid";
      l.inPoint=0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var LV=[200,310,420,530,640,750];
      for (var g=0;g<LV.length;g++){
        var r=c.addProperty("ADBE Vector Shape - Rect");
        r.property("ADBE Vector Rect Size").setValue([6000,2]);
        r.property("ADBE Vector Rect Position").setValue([2200,LV[g]]);
      }
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue([1,1,1]);
      l.property("Transform").property("Position").setValue([0,0]);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(0,0); op.setValueAtTime(1.2,10);
      if (pcc.layer("[NEO] Zone BG")) l.moveBefore(pcc.layer("[NEO] Zone BG"));
      l.parent=cam;
      W("grid ok");
    })();

    // 5) trail (orange, uzunlik bo'yicha trim, wyk'dagi kabi)
    (function(){
      var l=pcc.layers.addShape(); l.name="[NEO] trail";
      l.inPoint=T0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var grp=c.addProperty("ADBE Vector Shape - Group");
      var sh=new Shape(); var vv=[], ti=[], to=[];
      for (var q=0;q<N;q++){ vv.push([X[q],Y[q]]); ti.push([0,0]); to.push([0,0]); }
      sh.vertices=vv; sh.inTangents=ti; sh.outTangents=to; sh.closed=false;
      grp.property("ADBE Vector Shape").setValue(sh);
      var st=c.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(ACC);
      st.property("ADBE Vector Stroke Width").setValue(3);
      var D=[0];
      for (var q1=1;q1<N;q1++){
        var dx=X[q1]-X[q1-1], dy=Y[q1]-Y[q1-1];
        D.push(D[q1-1]+Math.sqrt(dx*dx+dy*dy));
      }
      var tr=c.addProperty("ADBE Vector Filter - Trim");
      var te=tr.property("ADBE Vector Trim End");
      te.setValueAtTime(T0,0);
      for (var q2=1;q2<N;q2++) te.setValueAtTime(TT(q2)+0.32, D[q2]/D[N-1]*100);
      setGlow(l,12,0.7);
      l.property("Transform").property("Position").setValue([0,0]);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(0,38); op.setValueAtTime(T1-0.3,38); op.setValueAtTime(T1,0);
      if (pcc.layer("[NEO] Zone BG")) l.moveBefore(pcc.layer("[NEO] Zone BG"));
      l.parent=cam; l.motionBlur=true;
      W("trail ok");
    })();

    // 6) svechalar (ayni skin, yangi vaqtlar)
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

    // 7) W/L belgilar — narration vaqtida yog'iladi (29.9+)
    for (var j=0;j<10;j++){
      var idx=26+j;
      var isW2=(WL.charAt(j)==="W");
      var tl=pcc.layers.addText(isW2?"\u2713":"\u2715");
      tl.name="[NEO] t wl"+idx;
      var stp=tl.property("Source Text"); var td=stp.value;
      td.fontSize=44; td.applyFill=true; td.fillColor=isW2?GRN:RED; td.applyStroke=false;
      try{ td.font="SegoeUI-Light"; }catch(e){}
      try{ td.justification=ParagraphJustification.CENTER_JUSTIFY; }catch(e){}
      stp.setValue(td);
      var t4=29.9+j*0.38;
      tl.inPoint=t4; tl.outPoint=T1;
      var wy=YC[idx]-85;
      var pp2=tl.property("Transform").property("Position");
      pp2.setValueAtTime(t4,[X[idx],wy+14]); pp2.setValueAtTime(t4+0.5,[X[idx],wy]); easeK(pp2,2,78);
      var op3=tl.property("Transform").property("Opacity");
      op3.setValueAtTime(t4,0); op3.setValueAtTime(t4+0.3,100);
      op3.setValueAtTime(T1-0.3,100); op3.setValueAtTime(T1,0);
      tl.parent=cam;
    }
    W("ticks ok");

    // 8) flashlar (yangi vaqtlar)
    function flash(px,py,t,mx){
      var l=pcc.layers.addShape(); l.name="[NEO] flash@"+t.toFixed(1);
      l.inPoint=t-0.05; l.outPoint=t+0.8;
      var c=l.property("ADBE Root Vectors Group");
      var el=c.addProperty("ADBE Vector Shape - Ellipse");
      el.property("ADBE Vector Ellipse Size").setValue([30,30]);
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue([1,0.72,0.42]);
      l.property("Transform").property("Position").setValue([px,py]);
      setGlow(l,18,1.0);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.1,88); op.setValueAtTime(t+0.6,0);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[55,55]); sc.setValueAtTime(t+0.6,[mx,mx]); easeK(sc,2,80);
      l.parent=cam; l.motionBlur=true;
    }
    flash(X[19],900,16.5,220);
    flash(X[28],YC[28],TT(28)+0.4,160);
    flash(X[35],YC[35],TT(35)+0.4,160);
    flash(X[43],YC[43],TT(43)+0.4,160);
    flash(X[49],YC[49],TT(49)+0.4,175);
    W("flashes ok");

    // 9) WYK kamera: drift target + 0.45 damping + 132 punch
    var CK=[[0.4,3,114],[3.4,8,114],[5.6,10,118],[8.2,13,116],[10.8,15,120],[12.6,16,122],
            [14.2,17,124],[16.1,19,132],[18.0,20,124],[21.0,22,118],[23.6,24,116],[26.0,27,118],
            [29.0,30,116],[32.5,33,114],[36.0,37,112],[39.5,40,114],[42.5,43,116],[45.2,46,118],[48.3,49,116]];
    for (i=0;i<CK.length;i++){
      var z=CK[i][2]/100, idx2=CK[i][1], xi=X[idx2], yi=Y[idx2];
      var tgt=650+6.5*idx2;
      pos.setValueAtTime(CK[i][0],[tgt - z*(xi-540), 530+(530-yi)*0.45]);
      scc.setValueAtTime(CK[i][0],[CK[i][2],CK[i][2],CK[i][2]]);
    }
    for (i=1;i<=pos.numKeys;i++) easeK(pos,i,75);
    for (i=1;i<=scc.numKeys;i++) easeK(scc,i,75);
    pos.expression="value + [Math.sin(time*0.45)*3, Math.cos(time*0.32)*2]";
    scc.expression="var b=Math.sin(time*0.28)*0.5; [value[0]+b, value[1]+b, value[2]+b]";
    W("wyk camera ok");

    app.endUndoGroup();
    p.save();
    W("WYKFLOW OK, saved");
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); try{app.endUndoGroup();}catch(e2){} }
  log.close();
})();
