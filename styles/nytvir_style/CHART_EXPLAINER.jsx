// ============================================================
// NYTVIR CHART EXPLAINER v1 — neon chart-explainer generatori
// Reference DNA: e61359...mp4 (uzluksiz chart, kamera kuzatuvi,
// bounce, oltin annotatsiyalar, yupqa shrift, teal zonalar)
// Ishlatish: CONFIG'ni to'ldiring -> File > Scripts > Run Script File
// Natija: aktiv (yoki nomlangan) compda "CHART ZONE" precomp,
// ichida [NEO] CAM + svechalar + annotatsiyalar — hammasi editable.
// ============================================================
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);

var CONFIG = {
  compName: "SMC_2907",       // comp nomi ("" = aktiv comp)
  zoneH: 1060,                // tepadagi qora zona balandligi (px)
  T0: 0.3, T1: 35.05,         // overlay boshlanish/tugash vaqti
  seed: 7,

  // ---- svechalar: yo'l anchorlari [indeks, y] (kichik y = baland narx) ----
  candles: {
    n: 56, x0: 80, step: 44, bodyW: 26, wickW: 3.5,
    anchors: [[0,480],[6,420],[13,470],[14,420],[17,300],[20,395],[23,302],[27,440],[31,330],
              [32,420],[33,470],[34,500],[35,560],[40,780],[41,720],[47,260],[48,340],[49,400],[50,450],[51,380],[55,230]],
    // paydo bo'lish vaqtlari: [fromIdx, toIdx, startT, step]
    times: [[0,13,0.45,0.30],[14,17,7.4,0.35],[18,20,8.75,0.30],[21,23,9.55,0.30],
            [24,27,12.5,0.50],[28,31,18.3,0.40],[32,32,21.1,0],[33,33,22.6,0],[34,34,23.2,0],
            [35,40,24.0,0.36],[41,47,26.3,0.50],[48,48,30.4,0],[49,49,31.3,0],[50,50,32.0,0],[51,55,33.2,0.40]],
    // maxsus svechalar: {idx:{wTop,bH,yCl,yO,wBot}} — sweep kabi
    special: { 32:{wTop:150,bH:64,yCl:390,yO:454,wBot:520}, 50:{extraDn:70} },
    forceRed: [32], forceGrn: [50]
  },

  // ---- kamera: [vaqt, svechaIdx, zoom%] — narxga ergashadi ----
  camera: [[0.35,3,114],[4.4,13,114],[7.0,14,114],[9.2,23,124],[14.5,27,124],[18.3,28,124],
           [21.0,32,124],[21.6,32,132],[23.4,34,126],[25.0,40,112],[26.0,40,112],
           [29.6,47,112],[31.0,48,112],[32.8,50,112],[33.0,50,112],[34.2,55,120],[34.9,55,120]],
  camYFollow: 0.45,

  // ---- annotatsiya beatlari (narration vaqtlariga) ----
  // type: hline | strike | circle | label | dollar | stamp | boxOutline | zone | wick | flash | arrow
  beats: [
    // intro S/R
    {type:"hline",  t:0.95, tout:7.2,  x1i:0, x1o:-50, x2i:13, x2o:70, y:372, col:"wht", w:3.5},
    {type:"hline",  t:1.15, tout:7.2,  x1i:0, x1o:-50, x2i:13, x2o:70, y:560, col:"wht", w:3.5},
    {type:"label",  t:1.1,  tout:7.0,  xi:4,  y:338, txt:"resistance", fs:34, col:"wht"},
    {type:"label",  t:1.3,  tout:7.0,  xi:4,  y:602, txt:"support",    fs:34, col:"wht"},
    {type:"strike", t:1.95, tout:7.2,  x1i:0, x1o:-60, x2i:13, x2o:80, y:372, w:9},
    {type:"strike", t:2.2,  tout:7.2,  x1i:0, x1o:-60, x2i:13, x2o:80, y:560, w:9},
    {type:"label",  t:3.6,  tout:7.0,  xi:6,  y:660, txt:"forget these lines", fs:40, col:"red2"},
    // equal highs / lows
    {type:"circle", t:8.35, tout:21.3, ci:17, dy:-46},
    {type:"circle", t:10.05,tout:21.3, ci:23, dy:-46},
    {type:"hline",  t:9.9,  tout:23.6, x1i:15, x1o:-40, x2i:32, x2o:140, y:286, col:"gold", w:4},
    {type:"label",  t:9.95, tout:21.3, xi:20, y:198, txt:"equal highs", fs:36, col:"wht"},
    {type:"circleLow", t:0, tout:11.6, iA:15, iB:21, tolWin:[15,21]}, // avto: eng teng pastlar juftligi
    {type:"label",  t:10.35,tout:14.8, xi:24, y:256, txt:"not a reversal", fs:34, col:"red2"},
    {type:"label",  t:11.35,tout:23.6, xi:24, y:140, txt:"$ liquidity resting $", fs:44, col:"gold"},
    {type:"label",  t:15.3, tout:17.8, xi:26, y:640, txt:"retail longs trapped", fs:34, col:"red2"},
    // SL $ stack
    {type:"dollar", t:18.55, tout:23.4, xi:27, dx:0,   y:234, dim:22.9},
    {type:"dollar", t:18.95, tout:23.4, xi:27, dx:70,  y:234, dim:23.0},
    {type:"dollar", t:19.35, tout:23.4, xi:27, dx:140, y:234, dim:23.1},
    {type:"dollar", t:19.75, tout:23.4, xi:27, dx:210, y:234, dim:23.2},
    // sweep
    {type:"boxOutline", t:21.35, tout:23.6, ci:32, y:330, w:76, h:410, col:"gold"},
    {type:"label",  t:21.5, tout:23.6, xi:32, dx:-260, y:620, txt:"liquidity\rsweep", fs:42, col:"gold"},
    {type:"flash",  t:21.1, dur:0.8, col:"red"},
    // order block -> real move
    {type:"zone",   t:24.3, tout:33.2, x1i:35, x2i:46, x2o:260, y:800, h:150, col:"teal", fop:26,
                    txt:"order block - FVG", txXi:35, txDx:-10},
    {type:"label",  t:27.8, tout:30.2, xi:45, y:330, txt:"real move", fs:46, col:"grn"},
    // entry setup
    {type:"label",  t:30.45, tout:32.0, xi:48, y:220, txt:"breakout? no", fs:34, col:"red2"},
    {type:"boxOutline", t:32.25, tout:35.0, ci:50, y:514, w:60, h:150, col:"gold"},
    {type:"label",  t:32.4, tout:35.0, xi:50, y:310, txt:"sweep", fs:34, col:"gold"},
    {type:"zone",   t:33.55, tout:35.0, x1i:52, x1o:-40, x2i:52, x2o:520, y:330, h:240, col:"grn", fop:16, txt:"TP", txXi:52, txDx:40},
    {type:"zone",   t:33.7,  tout:35.0, x1i:52, x1o:-40, x2i:52, x2o:520, y:530, h:110, col:"red", fop:18, txt:"SL", txXi:52, txDx:40},
    {type:"chip",   t:33.95, tout:35.0, xi:52, dx:430, y:470, w:200, h:64, col:"pur", txt:"RR = 1:3", fs:38},
    {type:"arrow",  t:34.1,  tout:35.0, xi:51, y:560, col:"wht"},
    {type:"label",  t:34.2,  tout:35.0, xi:51, y:640, txt:"entry", fs:36, col:"wht"}
  ],

  // caption uslubi (SRT allaqachon compda [Cap] bo'lsa true = butter animatsiya)
  butterCaptions: true
};

// ============================================================
// GENERATOR — pastini o'zgartirmang
// ============================================================
(function(){
  var log = new File(Folder.temp.fsName + "/chart_explainer_log.txt");
  log.encoding="UTF-8"; log.open("w");
  function W(s){ log.writeln(s); log.close(); log.open("a"); }
  try{
    app.beginUndoGroup("Chart Explainer");
    var p=app.project, comp=null, i, j;
    if (CONFIG.compName){
      for (i=1;i<=p.numItems;i++){ var it=p.item(i);
        if (it instanceof CompItem && it.name===CONFIG.compName){ comp=it; break; } }
    } else comp = (app.project.activeItem instanceof CompItem) ? app.project.activeItem : null;
    if (!comp){ alert("Comp topilmadi"); log.close(); return; }

    var COL={wht:[1,1,1], red:[0.949,0.216,0.184], red2:[1,0.5,0.45], grn:[0.133,0.890,0.306],
             gold:[1,0.83,0.38], teal:[0.176,0.706,0.627], pur:[0.42,0.20,0.34]};
    var FL="SegoeUI-Light", FB="SegoeUI-Bold";
    var CJ=ParagraphJustification.CENTER_JUSTIFY;
    var T0=CONFIG.T0, T1=CONFIG.T1;
    var CC=CONFIG.candles;

    // ---- narx yo'li ----
    function base(idx){
      var A=CC.anchors;
      for (var a=0;a<A.length-1;a++)
        if (idx>=A[a][0]&&idx<=A[a+1][0]){ var f=(idx-A[a][0])/((A[a+1][0]-A[a][0])||1);
          return A[a][1]+(A[a+1][1]-A[a][1])*f; }
      return A[A.length-1][1];
    }
    var seed=CONFIG.seed; function rnd(){ seed=(seed*1103515245+12345)%2147483648; return seed/2147483648; }
    var X=[], Y=[];
    for (i=0;i<CC.n;i++){ X.push(CC.x0+i*CC.step); Y.push(base(i)+(rnd()-0.5)*26); }
    function TT(idx){
      var Ts=CC.times;
      for (var a=0;a<Ts.length;a++)
        if (idx>=Ts[a][0]&&idx<=Ts[a][1]) return Ts[a][2]+(idx-Ts[a][0])*Ts[a][3];
      return T0;
    }
    function easeK(pr,k,inf){
      var e=new KeyframeEase(0,inf||75);
      try{ pr.setTemporalEaseAtKey(k,[e,e],[e,e]); }catch(x){
        try{ pr.setTemporalEaseAtKey(k,[e],[e]); }catch(y){
          try{ pr.setTemporalEaseAtKey(k,[e,e,e],[e,e,e]); }catch(z){} } }
    }

    // ---- CAM (keylar OXIRIDA qo'yiladi — parent tuzog'i oldini olish) ----
    var cam=comp.layers.addNull(); cam.name="[NEO] CAM";
    try{ cam.source.name="[NEO] CAM"; }catch(e){}
    cam.inPoint=T0; cam.outPoint=T1;
    cam.property("Transform").property("Position").setValue([540,530]);

    // ---- zona fon ----
    var zone=comp.layers.addSolid([0.02,0.02,0.02],"[NEO] Zone BG",1080,CONFIG.zoneH,1);
    zone.property("Transform").property("Position").setValue([540,CONFIG.zoneH/2]);
    zone.inPoint=T0; zone.outPoint=T1;
    var zop=zone.property("Transform").property("Opacity");
    zop.setValueAtTime(T0,0); zop.setValueAtTime(T0+0.5,100);
    zop.setValueAtTime(T1-0.25,100); zop.setValueAtTime(T1,0);
    zone.moveAfter(cam);

    function fadeIO(l,t,tout){
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.3,100);
      op.setValueAtTime((tout||T1)-0.35,100); op.setValueAtTime(tout||T1,0);
    }
    function regL(l){ l.moveBefore(zone); l.parent=cam; return l; }

    // ---- svechalar (bounce bilan) ----
    var LOW=[];
    for (i=0;i<CC.n;i++){
      var t=TT(i), x=X[i], yC=Y[i];
      var bH=40+rnd()*54, wUp=16+rnd()*30, wDn=16+rnd()*30;
      var yO=yC+bH/2, yCl=yC-bH/2, wTop=yCl-wUp, wBot=yO+wDn;
      var sp=CC.special[i];
      if (sp){ if(sp.wTop!==undefined){wTop=sp.wTop;bH=sp.bH;yCl=sp.yCl;yO=sp.yO;wBot=sp.wBot;}
               if(sp.extraDn){wBot=yO+sp.extraDn;} }
      LOW.push(wBot);
      var up=true;
      if (i>0) up = yC < Y[i-1];
      for (j=0;j<CONFIG.candles.forceRed.length;j++) if(CONFIG.candles.forceRed[j]===i) up=false;
      for (j=0;j<CONFIG.candles.forceGrn.length;j++) if(CONFIG.candles.forceGrn[j]===i) up=true;
      var col=up?COL.grn:COL.red;
      var l=comp.layers.addShape(); l.name="[NEO] k"+i;
      l.inPoint=T0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var wick=c.addProperty("ADBE Vector Shape - Rect");
      wick.property("ADBE Vector Rect Size").setValue([CC.wickW,wBot-wTop]);
      wick.property("ADBE Vector Rect Position").setValue([0,-(wBot-wTop)/2]);
      var body=c.addProperty("ADBE Vector Shape - Rect");
      body.property("ADBE Vector Rect Size").setValue([CC.bodyW,bH]);
      body.property("ADBE Vector Rect Roundness").setValue(2);
      body.property("ADBE Vector Rect Position").setValue([0,(yCl+bH/2)-wBot]);
      var fl=c.addProperty("ADBE Vector Graphic - Fill");
      fl.property("ADBE Vector Fill Color").setValue(col);
      l.property("Transform").property("Position").setValue([x,wBot]);
      try{ l.property("ADBE Effect Parade").addProperty("ADBE Glo2"); }catch(e){}
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[100,10]); sc.setValueAtTime(t+0.30,[100,109]);
      sc.setValueAtTime(t+0.45,[100,96]); sc.setValueAtTime(t+0.58,[100,100]);
      for (j=1;j<=4;j++) easeK(sc,j,65);
      var op=l.property("Transform").property("Opacity");
      op.setValueAtTime(t,0); op.setValueAtTime(t+0.12,100);
      op.setValueAtTime(T1-0.3,100); op.setValueAtTime(T1,0);
      regL(l);
    }
    W("candles: "+CC.n);

    // ---- annotatsiya builderlar ----
    function bx(b,key,def){ return (b[key]!==undefined)?b[key]:def; }
    function XX(b,keyI,keyO){ return X[bx(b,keyI,0)]+bx(b,keyO,0); }
    function mkTxt(txt,fs,col,x,y,t,tout,bold){
      var l=comp.layers.addText(txt);
      l.name="[NEO] t "+txt.substring(0,14);
      l.inPoint=T0; l.outPoint=T1;
      var st=l.property("Source Text"), td=st.value;
      td.font=bold?FB:FL; td.fontSize=fs; td.fillColor=col;
      td.applyStroke=false; td.applyFill=true; td.justification=CJ; td.tracking=40;
      st.setValue(td);
      l.property("Transform").property("Position").setValue([x,y]);
      fadeIO(l,t,tout);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[92,92]); sc.setValueAtTime(t+0.24,[103,103]); sc.setValueAtTime(t+0.40,[100,100]);
      easeK(sc,2,65); easeK(sc,3,80);
      return regL(l);
    }
    function mkLine(x1,y1,x2,y2,col,w,dash,t,tout){
      var l=comp.layers.addShape(); l.name="[NEO] ln";
      l.inPoint=T0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var g=c.addProperty("ADBE Vector Shape - Group"); var s=new Shape();
      s.vertices=[[x1,y1],[x2,y2]]; s.closed=false;
      g.property("ADBE Vector Shape").setValue(s);
      var st=c.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(col);
      st.property("ADBE Vector Stroke Width").setValue(w);
      try{ st.property("ADBE Vector Stroke Line Cap").setValue(2);
        if (dash){ var ds=st.property("ADBE Vector Stroke Dashes");
          ds.addProperty("ADBE Vector Stroke Dash 1").setValue(16);
          ds.addProperty("ADBE Vector Stroke Gap 1").setValue(12); } }catch(e){}
      var tr=c.addProperty("ADBE Vector Filter - Trim");
      tr.property("ADBE Vector Trim End").setValueAtTime(t,0);
      tr.property("ADBE Vector Trim End").setValueAtTime(t+0.5,100);
      easeK(tr.property("ADBE Vector Trim End"),2,80);
      l.property("Transform").property("Position").setValue([0,0]);
      fadeIO(l,t,tout);
      return regL(l);
    }
    function mkCircle(cx,cy,t,tout){
      var l=comp.layers.addShape(); l.name="[NEO] o";
      l.inPoint=T0; l.outPoint=T1;
      var c=l.property("ADBE Root Vectors Group");
      var e=c.addProperty("ADBE Vector Shape - Ellipse");
      e.property("ADBE Vector Ellipse Size").setValue([60,60]);
      var st=c.addProperty("ADBE Vector Graphic - Stroke");
      st.property("ADBE Vector Stroke Color").setValue(COL.wht);
      st.property("ADBE Vector Stroke Width").setValue(3.5);
      l.property("Transform").property("Position").setValue([cx,cy]);
      var sc=l.property("Transform").property("Scale");
      sc.setValueAtTime(t,[175,175]); sc.setValueAtTime(t+0.22,[90,90]);
      sc.setValueAtTime(t+0.36,[106,106]); sc.setValueAtTime(t+0.48,[100,100]);
      for (var k2=1;k2<=4;k2++) easeK(sc,k2,65);
      fadeIO(l,t,tout);
      return regL(l);
    }

    for (i=0;i<CONFIG.beats.length;i++){
      var b=CONFIG.beats[i];
      if (b.type==="hline") mkLine(XX(b,"x1i","x1o"),b.y,XX(b,"x2i","x2o"),b.y,COL[b.col],b.w,true,b.t,b.tout);
      else if (b.type==="strike") mkLine(XX(b,"x1i","x1o"),b.y-6,XX(b,"x2i","x2o"),b.y+8,COL.red,b.w,false,b.t,b.tout).property("ADBE Effect Parade").addProperty("ADBE Glo2");
      else if (b.type==="circle") mkCircle(X[b.ci],Y[b.ci]+bx(b,"dy",0),b.t,b.tout);
      else if (b.type==="circleLow"){
        var bi=-1,bj=-1,bd=9999;
        for (var a2=b.tolWin[0];a2<=b.tolWin[1]-3;a2++)
          for (var b2=a2+3;b2<=b.tolWin[1];b2++){
            var d=Math.abs(LOW[a2]-LOW[b2]);
            if (d<bd){ bd=d; bi=a2; bj=b2; } }
        var yL=(LOW[bi]+LOW[bj])/2+8;
        mkCircle(X[bi],LOW[bi]+6,TT(bi)+0.5,b.tout);
        mkCircle(X[bj],LOW[bj]+6,TT(bj)+0.5,b.tout);
        mkLine(X[bi]-70,yL,X[bj]+70,yL,COL.gold,4,true,TT(bj)+0.6,b.tout);
        mkTxt("equal lows",36,COL.wht,(X[bi]+X[bj])/2,yL+70,TT(bj)+0.7,b.tout);
      }
      else if (b.type==="label") mkTxt(b.txt,b.fs,COL[b.col],X[b.xi]+bx(b,"dx",0),b.y,b.t,b.tout);
      else if (b.type==="dollar") {
        var dl=mkTxt("$",40,COL.red2,X[b.xi]+bx(b,"dx",0),b.y,b.t,b.tout,true);
        if (b.dim){ var dop=dl.property("Transform").property("Opacity");
          dop.setValueAtTime(b.dim,100); dop.setValueAtTime(b.dim+0.4,18); }
      }
      else if (b.type==="boxOutline"){
        var l3=comp.layers.addShape(); l3.name="[NEO] box";
        l3.inPoint=T0; l3.outPoint=T1;
        var c3=l3.property("ADBE Root Vectors Group");
        var r3=c3.addProperty("ADBE Vector Shape - Rect");
        r3.property("ADBE Vector Rect Size").setValue([b.w,b.h]);
        r3.property("ADBE Vector Rect Roundness").setValue(4);
        var s3=c3.addProperty("ADBE Vector Graphic - Stroke");
        s3.property("ADBE Vector Stroke Color").setValue(COL[b.col]);
        s3.property("ADBE Vector Stroke Width").setValue(4);
        l3.property("Transform").property("Position").setValue([X[b.ci],b.y]);
        try{ l3.property("ADBE Effect Parade").addProperty("ADBE Glo2"); }catch(e){}
        var sc3=l3.property("Transform").property("Scale");
        sc3.setValueAtTime(b.t,[150,150]); sc3.setValueAtTime(b.t+0.22,[92,92]);
        sc3.setValueAtTime(b.t+0.36,[105,105]); sc3.setValueAtTime(b.t+0.48,[100,100]);
        for (var k3=1;k3<=4;k3++) easeK(sc3,k3,65);
        fadeIO(l3,b.t,b.tout); regL(l3);
      }
      else if (b.type==="zone"){
        var x1=XX(b,"x1i","x1o"), x2=XX(b,"x2i","x2o");
        var l4=comp.layers.addShape(); l4.name="[NEO] zone";
        l4.inPoint=T0; l4.outPoint=T1;
        var c4=l4.property("ADBE Root Vectors Group");
        var r4=c4.addProperty("ADBE Vector Shape - Rect");
        r4.property("ADBE Vector Rect Size").setValue([x2-x1,b.h]);
        var f4=c4.addProperty("ADBE Vector Graphic - Fill");
        f4.property("ADBE Vector Fill Color").setValue(COL[b.col]);
        f4.property("ADBE Vector Fill Opacity").setValue(b.fop);
        l4.property("Transform").property("Position").setValue([(x1+x2)/2,b.y]);
        fadeIO(l4,b.t,b.tout); regL(l4);
        if (b.txt) mkTxt(b.txt,34,COL.wht,X[b.txXi]+bx(b,"txDx",0),b.y+8,b.t+0.15,b.tout);
      }
      else if (b.type==="chip"){
        var l5=comp.layers.addShape(); l5.name="[NEO] chip";
        l5.inPoint=T0; l5.outPoint=T1;
        var c5=l5.property("ADBE Root Vectors Group");
        var r5=c5.addProperty("ADBE Vector Shape - Rect");
        r5.property("ADBE Vector Rect Size").setValue([b.w,b.h]);
        r5.property("ADBE Vector Rect Roundness").setValue(8);
        var f5=c5.addProperty("ADBE Vector Graphic - Fill");
        f5.property("ADBE Vector Fill Color").setValue(COL[b.col]);
        l5.property("Transform").property("Position").setValue([X[b.xi]+bx(b,"dx",0),b.y]);
        fadeIO(l5,b.t,b.tout); regL(l5);
        mkTxt(b.txt,b.fs,COL.wht,X[b.xi]+bx(b,"dx",0),b.y+12,b.t+0.05,b.tout);
      }
      else if (b.type==="arrow"){
        var l6=comp.layers.addShape(); l6.name="[NEO] arw";
        l6.inPoint=T0; l6.outPoint=T1;
        var c6=l6.property("ADBE Root Vectors Group");
        function pg6(v){ var g6=c6.addProperty("ADBE Vector Shape - Group"); var s6=new Shape();
          s6.vertices=v; s6.closed=false; g6.property("ADBE Vector Shape").setValue(s6); }
        pg6([[0,44],[0,-40]]); pg6([[-20,-20],[0,-44],[20,-20]]);
        var st6=c6.addProperty("ADBE Vector Graphic - Stroke");
        st6.property("ADBE Vector Stroke Color").setValue(COL[b.col]);
        st6.property("ADBE Vector Stroke Width").setValue(9);
        try{ st6.property("ADBE Vector Stroke Line Cap").setValue(2); }catch(e){}
        l6.property("Transform").property("Position").setValue([X[b.xi],b.y]);
        try{ l6.property("ADBE Effect Parade").addProperty("ADBE Glo2"); }catch(e){}
        var sc6=l6.property("Transform").property("Scale");
        sc6.setValueAtTime(b.t,[40,40]); sc6.setValueAtTime(b.t+0.22,[115,115]);
        sc6.setValueAtTime(b.t+0.36,[95,95]); sc6.setValueAtTime(b.t+0.48,[100,100]);
        for (var k6=1;k6<=4;k6++) easeK(sc6,k6,65);
        fadeIO(l6,b.t,b.tout); regL(l6);
      }
      else if (b.type==="flash"){
        var fl7=comp.layers.addSolid(COL[b.col],"[NEO] flash",1080,CONFIG.zoneH,1);
        fl7.property("Transform").property("Position").setValue([540,CONFIG.zoneH/2]);
        fl7.inPoint=b.t-0.1; fl7.outPoint=b.t+b.dur+0.6;
        var fop7=fl7.property("Transform").property("Opacity");
        fop7.setValueAtTime(b.t,0); fop7.setValueAtTime(b.t+0.18,22); fop7.setValueAtTime(b.t+b.dur,0);
        fl7.moveBefore(zone);
      }
    }
    W("beats: "+CONFIG.beats.length);

    // ---- KAMERA KEYLARI — eng oxirida ----
    var pos=cam.property("Transform").property("Position");
    var scc=cam.property("Transform").property("Scale");
    for (i=0;i<CONFIG.camera.length;i++){
      var ck=CONFIG.camera[i];
      pos.setValueAtTime(ck[0],[1240-X[ck[1]],530+(530-Y[ck[1]])*CONFIG.camYFollow]);
      scc.setValueAtTime(ck[0],[ck[2],ck[2],ck[2]]);
    }
    for (i=1;i<=pos.numKeys;i++) easeK(pos,i,75);
    for (i=1;i<=scc.numKeys;i++) easeK(scc,i,75);
    W("camera keys: "+pos.numKeys);

    // ---- precompose + mask (0..zoneH kesim) ----
    var idxs=[];
    for (i=1;i<=comp.numLayers;i++) if (comp.layer(i).name.indexOf("[NEO]")===0) idxs.push(i);
    try{ comp.layers.precompose(idxs,"CHART ZONE",true); }catch(e){}
    var pcl=null;
    for (i=1;i<=comp.numLayers;i++) if (comp.layer(i).name==="CHART ZONE"){ pcl=comp.layer(i); break; }
    if (pcl){
      var mp=pcl.property("ADBE Mask Parade");
      var m=mp.addProperty("ADBE Mask Atom");
      var ms=new Shape();
      ms.vertices=[[0,0],[1080,0],[1080,CONFIG.zoneH],[0,CONFIG.zoneH]];
      ms.closed=true;
      m.property("ADBE Mask Shape").setValue(ms);
      W("precomp + mask ok");
    }

    // ---- caption butter ----
    if (CONFIG.butterCaptions){
      var nB=0;
      for (i=1;i<=comp.numLayers;i++){
        var lc=comp.layer(i);
        if (lc.name.indexOf("[Cap] ")!==0) continue;
        var tin=lc.inPoint, tout2=lc.outPoint;
        var opc=lc.property("Transform").property("Opacity");
        while(opc.numKeys>0) opc.removeKey(1);
        opc.setValueAtTime(tin,0); opc.setValueAtTime(tin+0.28,100);
        opc.setValueAtTime(tout2-0.16,100); opc.setValueAtTime(tout2,0);
        var pv=lc.property("Transform").property("Position").value;
        var pc7=lc.property("Transform").property("Position");
        while(pc7.numKeys>0) pc7.removeKey(1);
        pc7.setValueAtTime(tin,[pv[0],pv[1]+16]);
        pc7.setValueAtTime(tin+0.42,[pv[0],pv[1]]);
        easeK(pc7,2,90);
        var fx=lc.property("ADBE Effect Parade");
        var gb=fx.addProperty("ADBE Gaussian Blur 2");
        gb.property("ADBE Gaussian Blur 2-0001").setValueAtTime(tin,12);
        gb.property("ADBE Gaussian Blur 2-0001").setValueAtTime(tin+0.3,0);
        nB++;
      }
      W("captions buttered: "+nB);
    }

    app.endUndoGroup();
    p.save();
    W("EXPLAINER DONE");
    alert("Chart Explainer: tayyor! Log: " + log.fsName);
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); try{app.endUndoGroup();}catch(e2){} alert("Xato: "+e.toString()); }
  log.close();
})();
