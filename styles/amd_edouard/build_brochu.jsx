// AMD 0912 — Brochu uslubida clone. Yangi comp quradi, mavjud loyihaga tegmaydi.
app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);
var LOGF = new File("D:/edit/amd_clone/build_log.txt");
LOGF.open("w"); LOGF.encoding="UTF-8";
function w(s){ LOGF.write(s+"\n"); LOGF.close(); LOGF.open("a"); }

try{
  var proj = app.project;
  app.beginUndoGroup("AMD Brochu clone");

  for(var ci=proj.numItems;ci>=1;ci--){ var itx=proj.item(ci); if((itx instanceof CompItem && itx.name==="AMD_BROCHU") || (itx instanceof FootageItem && itx.name==="src.mp4")) itx.remove(); }
  w("eski elementlar tozalandi");
  var W=1080, H=1920, FPS=30, DUR=42.1;
  var comp = proj.items.addComp("AMD_BROCHU", W, H, 1, DUR, FPS);
  w("comp yaratildi");

  // ---------- palitra / shrift ----------
  var BG=[0.024,0.027,0.039], CARD=[0.078,0.075,0.094], WHITE=[1,1,1];
  var GREY=[0.722,0.737,0.769], GREY2=[0.788,0.800,0.824];
  var CY=[0.247,0.851,0.878], GR=[0.247,0.878,0.478], RED=[1,0.353,0.373], DIM=[0.31,0.34,0.41];
  var F_HOOK1="SegoeUI-Semibold", F_HOOK2="SegoeUIBlack", F_WORD="SegoeUI-Bold";
  var F_CARD="SFProDisplay-Medium", F_CARDB="SegoeUI-Semibold";

  // ---------- yordamchilar ----------
  function ease(p,k,sp){ try{ var n=(p.value.length)?p.value.length:1, ei=[],eo=[];
    for(var a=0;a<n;a++){ei.push(new KeyframeEase(0,sp));eo.push(new KeyframeEase(0,sp));}
    p.setTemporalEaseAtKey(k,ei,eo);}catch(e){} }
  function fadeIn(L,t0,d){ var o=L.property("ADBE Transform Group").property("ADBE Opacity");
    o.setValueAtTime(t0,0); o.setValueAtTime(t0+d,100); ease(o,1,70); ease(o,2,70); }
  function fadeOut(L,t1,d){ var o=L.property("ADBE Transform Group").property("ADBE Opacity");
    o.setValueAtTime(t1-d,100); o.setValueAtTime(t1,0); }
  function rise(L,t0,d,px){ var p=L.property("ADBE Transform Group").property("ADBE Position"); var v=p.value;
    p.setValueAtTime(t0,[v[0],v[1]+px,0]); p.setValueAtTime(t0+d,[v[0],v[1],0]); ease(p,1,60); ease(p,2,60); }
  function span(L,t0,t1){ L.inPoint=t0; L.outPoint=t1; }

  function solid(name,col,t0,t1){ var L=comp.layers.addSolid(col,name,W,H,1,DUR); span(L,t0,t1); return L; }

  function rect(name,wd,ht,rad,col,cx,cy,t0,t1){
    var L=comp.layers.addShape(); L.name=name;
    var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var v=g.property("ADBE Vectors Group");
    var r=v.addProperty("ADBE Vector Shape - Rect");
    r.property("ADBE Vector Rect Size").setValue([wd,ht]); r.property("ADBE Vector Rect Roundness").setValue(rad);
    v.addProperty("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
    L.property("ADBE Transform Group").property("ADBE Position").setValue([cx,cy]);
    span(L,t0,t1); return L;
  }
  function polyline(name,pts,col,width,dash,t0,t1,opac){
    var L=comp.layers.addShape(); L.name=name;
    var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var v=g.property("ADBE Vectors Group");
    var sh=v.addProperty("ADBE Vector Shape - Group");
    var s=new Shape(); s.vertices=pts; s.closed=false;
    var it=[],ot=[]; for(var i=0;i<pts.length;i++){it.push([0,0]);ot.push([0,0]);} s.inTangents=it; s.outTangents=ot;
    sh.property("ADBE Vector Shape").setValue(s);
    var st=v.addProperty("ADBE Vector Graphic - Stroke");
    st.property("ADBE Vector Stroke Color").setValue([col[0],col[1],col[2],1]);
    st.property("ADBE Vector Stroke Width").setValue(width);
    try{ st.property("ADBE Vector Stroke Line Join").setValue(2); }catch(e){}
    if(dash){ try{ var dd=st.property("ADBE Vector Stroke Dashes"); dd.addProperty("ADBE Vector Stroke Dash 1").setValue(14); dd.addProperty("ADBE Vector Stroke Gap 1").setValue(12); }catch(e){ w("dash skip: "+e); } }
    L.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    if(opac!==undefined) L.property("ADBE Transform Group").property("ADBE Opacity").setValue(opac);
    span(L,t0,t1); return L;
  }
  function text(name,str,font,size,col,just,x,y,t0,t1,tracking){
    var L=comp.layers.addText(str); L.name=name;
    var tp=L.property("ADBE Text Properties").property("ADBE Text Document");
    var d=tp.value; d.resetCharStyle(); d.font=font; d.fontSize=size; d.applyFill=true; d.fillColor=col; d.applyStroke=false;
    d.justification=just; if(tracking!==undefined) d.tracking=tracking; tp.setValue(d);
    L.property("ADBE Transform Group").property("ADBE Position").setValue([x,y]);
    span(L,t0,t1); return L;
  }
  function shadow(L,op,dist,soft){ try{ var s=L.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow");
    s.property("ADBE Drop Shadow-0002").setValue(op); s.property("ADBE Drop Shadow-0004").setValue(dist); s.property("ADBE Drop Shadow-0005").setValue(soft);}catch(e){} }
  var C=ParagraphJustification.CENTER_JUSTIFY, LJ=ParagraphJustification.LEFT_JUSTIFY, RJ=ParagraphJustification.RIGHT_JUSTIFY;

  // ---------- 1) fon + video + gradient ----------
  var bg=solid("[BG] black",BG,0,DUR);
  var VID=proj.importFile(new ImportOptions(new File("D:/edit/amd_clone/src.mp4")));
  var vid=comp.layers.add(VID); vid.name="[VID] selfie";
  vid.property("ADBE Transform Group").property("ADBE Position").setValue([540,490]); // manba y=470 -> comp y=0
  vid.property("ADBE Transform Group").property("ADBE Scale").setValue([100,100,100]);
  span(vid,0,DUR);
  w("video joylandi");

  var grad=comp.layers.addSolid([0,0,0],"[GRAD] bottom",W,H,1,DUR);
  var m=grad.property("ADBE Mask Parade").addProperty("ADBE Mask Atom");
  var ms=new Shape(); ms.vertices=[[-200,900],[W+200,900],[W+200,H+200],[-200,H+200]]; ms.closed=true;
  m.property("ADBE Mask Shape").setValue(ms);
  m.property("ADBE Mask Feather").setValue([0,520]);
  span(grad,0,DUR);

  // ---------- 2) kesib o'tish oynalari (qora) ----------
  var CUTS=[[10.4,13.8],[17.8,23.3],[25.4,31.1],[31.5,37.8],[38.0,DUR]];
  var cut=solid("[CUT] black",BG,0,DUR);
  var co=cut.property("ADBE Transform Group").property("ADBE Opacity");
  co.setValueAtTime(0,0);
  for(var i=0;i<CUTS.length;i++){ var a=CUTS[i][0], b=CUTS[i][1];
    co.setValueAtTime(a-0.18,0); co.setValueAtTime(a,100);
    if(b<DUR){ co.setValueAtTime(b,100); co.setValueAtTime(b+0.18,0); } }
  w("kesib o'tish oynalari: "+CUTS.length);

  // ---------- 3) ilgak 0-4.5 ----------
  var h1=text("[HOOK] 1","The market runs",F_HOOK1,52,WHITE,C,540,1180,0,4.5); shadow(h1,85,4,18);
  var h2=text("[HOOK] 2","A DAILY SCRIPT",F_HOOK2,100,WHITE,C,540,1290,0,4.5,-20); shadow(h2,90,6,22);
  var h3=text("[HOOK] amd","A  ·  M  ·  D",F_CARDB,26,DIM,C,540,1500,0,4.5,500);
  fadeOut(h1,4.5,0.2); fadeOut(h2,4.5,0.2); fadeOut(h3,4.5,0.2);

  // ---------- 4) so'zma-so'z subtitr (bitta qatlam, hold keylar) ----------
  function inCut(t){ for(var i=0;i<CUTS.length;i++) if(t>=CUTS[i][0]-0.05 && t<CUTS[i][1]) return true; return false; }
  var wl=text("[CAP] words","",F_WORD,64,WHITE,C,540,1060,4.5,38.0); shadow(wl,88,4,16);
  var tp=wl.property("ADBE Text Properties").property("ADBE Text Document");
  var srt=new File("D:/edit/amd_clone/words.srt"); var nWords=0;
  if(srt.exists){
    srt.open("r"); srt.encoding="UTF-8"; var raw=srt.read(); srt.close();
    var blocks=raw.split(/\r?\n\r?\n/);
    function ts(s){ var mm=s.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return mm? (+mm[1])*3600+(+mm[2])*60+(+mm[3])+(+mm[4])/1000 : -1; }
    var lastEnd=-1;
    for(var i=0;i<blocks.length;i++){
      var ln=blocks[i].split(/\r?\n/); if(ln.length<3) continue;
      var tm=ln[1].split("-->"); if(tm.length<2) continue; var t0=ts(tm[0]), t1=ts(tm[1]); var word=ln.slice(2).join(" ").replace(/^\s+|\s+$/g,"");
      if(t0<0||!word||t0<4.5) continue;
      if(inCut(t0)){ if(lastEnd>=0){ var d0=tp.value; d0.text=""; tp.setValueAtTime(t0,d0); lastEnd=-1; } continue; }
      var d=tp.value; d.text=word.replace(/[.,!?]+$/,""); tp.setValueAtTime(t0,d); lastEnd=t1; nWords++;
    }
    var dE=tp.value; dE.text=""; tp.setValueAtTime(38.0,dE);
    w("so'zlar: "+nWords);
  } else { w("OGOHLANTIRISH: words.srt yo'q — subtitr bo'sh"); }

  // ---------- 5) kartalar ----------
  // W1 10.4-13.8: yon harakat grafigi
  (function(){ var t0=10.4,t1=13.8, cy=960;
    var c=rect("[W1] card",960,330,14,CARD,540,cy,t0,t1); fadeIn(c,t0,0.25); rise(c,t0,0.3,18);
    polyline("[W1] top",[[100,cy-70],[980,cy-70]],DIM,3,true,t0,t1,70);
    polyline("[W1] bot",[[100,cy+72],[980,cy+72]],DIM,3,true,t0,t1,70);
    polyline("[W1] price",[[100,cy+14],[200,cy-34],[300,cy+40],[400,cy-46],[500,cy+48],[600,cy-26],[700,cy+32],[800,cy-40],[900,cy+38],[980,cy+2]],GREY,5,false,t0,t1);
    var l1=text("[W1] l1","Trapped",F_CARDB,30,WHITE,LJ,100,cy-118,t0,t1); var l2=text("[W1] l2","both sides",F_CARDB,30,RED,LJ,100,cy-82,t0,t1);
    text("[W1] w","sideways",F_WORD,64,WHITE,C,540,cy-230,t0,t1);
  })();
  // W2 17.8-20.4: stops ro'yxati ; W3 20.4-23.3: sweep grafigi
  (function(){ var t0=17.8,t1=20.4, cy=960;
    var c=rect("[W2] card",960,300,14,CARD,540,cy,t0,t1); fadeIn(c,t0,0.25); rise(c,t0,0.3,18);
    text("[W2] h","Stops taken",F_CARDB,32,WHITE,LJ,100,cy-70,t0,t1); text("[W2] hv","14,394",F_CARDB,32,WHITE,RJ,980,cy-70,t0,t1);
    text("[W2] a","Above the high",F_CARD,29,GREY,LJ,100,cy-6,t0,t1); text("[W2] av","7,698",F_CARD,29,GREY2,RJ,980,cy-6,t0,t1);
    text("[W2] b","Below the low",F_CARD,29,GREY,LJ,100,cy+56,t0,t1); text("[W2] bv","6,696",F_CARD,29,GREY2,RJ,980,cy+56,t0,t1);
    text("[W2] w","manipulation",F_WORD,64,WHITE,C,540,cy-230,t0,t1);
  })();
  (function(){ var t0=20.4,t1=23.3, cy=980;
    var c=rect("[W3] card",960,380,14,[0.039,0.059,0.051],540,cy,t0,t1); fadeIn(c,t0,0.25); rise(c,t0,0.3,18);
    polyline("[W3] base",[[100,cy+20],[980,cy+20]],DIM,3,true,t0,t1,70);
    var pts=[[100,cy+20],[280,cy+26],[420,cy+16],[530,cy+136],[620,cy+110],[760,cy-10],[890,cy-80],[980,cy-124]];
    polyline("[W3] glow",pts,RED,22,false,t0,t1,28);
    var pl=polyline("[W3] line",pts,RED,6,false,t0,t1);
    text("[W3] l1","London open",F_CARDB,30,WHITE,LJ,100,cy-150,t0,t1); text("[W3] l2","sweep ↓",F_CARDB,30,RED,LJ,100,cy-112,t0,t1);
    text("[W3] r1","Then",F_CARDB,30,WHITE,RJ,980,cy-150,t0,t1); text("[W3] r2","reverse ↑",F_CARDB,30,GR,RJ,980,cy-112,t0,t1);
    text("[W3] w","liquidity",F_WORD,64,WHITE,C,540,cy-260,t0,t1);
    // chiziq chizilib boradi
    try{ var tr=pl.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim");
      tr.property("ADBE Vector Trim End").setValueAtTime(t0+0.1,0); tr.property("ADBE Vector Trim End").setValueAtTime(t0+1.3,100); ease(tr.property("ADBE Vector Trim End"),2,80);}catch(e){ w("trim skip: "+e); }
  })();
  // W4 25.4-31.1: +312 katta raqam + NY qatori
  (function(){ var t0=25.4,t1=31.1, cy=900;
    var c=rect("[W4] card",960,300,14,CARD,540,cy,t0,t1); fadeIn(c,t0,0.25); rise(c,t0,0.3,18);
    var big=text("[W4] big","+312",F_HOOK2,82,GR,C,540,cy+8,t0,t1); text("[W4] l","pips to the true target",F_CARDB,32,GREY2,C,540,cy+66,t0,t1);
    var r=rect("[W4] row",960,104,14,CARD,540,cy+250,t0+0.35,t1); fadeIn(r,t0+0.35,0.25); rise(r,t0+0.35,0.3,18);
    text("[W4] rl","New York",F_CARDB,32,WHITE,LJ,100,cy+262,t0+0.35,t1); text("[W4] rv","13:30 – 17:00",F_CARDB,32,WHITE,RJ,980,cy+262,t0+0.35,t1);
    text("[W4] w","distribution",F_WORD,64,WHITE,C,540,cy-230,t0,t1);
  })();
  // W5 31.5-37.8: uchta qoida
  (function(){ var t0=31.5,t1=37.8;
    text("[W5] tag","THREE RULES",F_CARDB,26,DIM,C,540,560,t0,t1,500);
    var rows=[["Asia range","don't trade",RED],["London sweep","wait",CY],["NY expansion","ride",GR]];
    for(var i=0;i<rows.length;i++){ var y=720+i*140, s=t0+0.3+i*0.4;
      var r=rect("[W5] row"+i,960,104,14,CARD,540,y,s,t1); fadeIn(r,s,0.25); rise(r,s,0.3,18);
      text("[W5] l"+i,rows[i][0],F_CARDB,32,WHITE,LJ,100,y+12,s,t1); text("[W5] v"+i,rows[i][1],F_CARDB,32,rows[i][2],RJ,980,y+12,s,t1); }
    var io=text("[W5] order","in that order",F_CARDB,52,GREY,C,540,1200,t0+1.6,t1); fadeIn(io,t0+1.6,0.3);
  })();
  // W6 38.0-42.1: CTA
  (function(){ var t0=38.0,t1=DUR;
    var a=text("[CTA] a","Comment",F_CARDB,46,GREY2,C,540,900,t0,t1); var b=text("[CTA] b","“AMD”",F_HOOK2,88,WHITE,C,540,1010,t0,t1,-10);
    fadeIn(a,t0,0.3); fadeIn(b,t0+0.1,0.3); rise(b,t0+0.1,0.35,16);
  })();
  w("kartalar qurildi");

  proj.save(new File("D:/edit/amd_clone/amd_brochu.aep"));
  app.endUndoGroup();
  w("layers="+comp.numLayers); w("SAQLANDI"); w("DONE_OK");
}catch(err){ w("ERR: "+err.toString()+" line "+err.line); try{app.endUndoGroup();}catch(e){} }
LOGF.close();
