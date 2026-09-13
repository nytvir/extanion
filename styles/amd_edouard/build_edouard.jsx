// AMD 0912 — Edouard uslubi (real ilova panellari, 51_edouard_trading_template.html asosida)
app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);
var LOGF = new File("D:/edit/amd_clone/edouard_log.txt");
LOGF.open("w"); LOGF.encoding="UTF-8";
function w(s){ LOGF.write(s+"\n"); LOGF.close(); LOGF.open("a"); }

try{
  if (app.project && app.project.dirty && app.project.file) { w("STOP: ochiq loyiha saqlanmagan: "+app.project.file.fsName); throw new Error("dirty project"); }
  app.newProject();
  var proj = app.project;
  app.beginUndoGroup("AMD Edouard");
  var W=1080, H=1920, FPS=30, DUR=42.1;
  var comp = proj.items.addComp("AMD_EDOUARD", W, H, 1, DUR, FPS);
  w("comp yaratildi");

  // ---------- palitra (template) ----------
  var PANEL=[0.149,0.149,0.169], PANEL_OP=93, FS_BG=[0.106,0.106,0.122], MODAL=[0.169,0.169,0.188];
  var TX=[0.925,0.925,0.941], MUT=[0.604,0.604,0.635], BLU=[0.29,0.553,0.973], GRN=[0.247,0.749,0.435], RED=[0.898,0.325,0.294];
  var GRN_BG=[0.19,0.29,0.23], RED_BG=[0.29,0.19,0.19], GREY_BG=[0.22,0.22,0.25], BLU_BG=[0.17,0.22,0.32];
  var F_SEMI="SegoeUI-Semibold", F_REG="SegoeUI", F_BOLD="SegoeUI-Bold";
  var C=ParagraphJustification.CENTER_JUSTIFY, LJ=ParagraphJustification.LEFT_JUSTIFY, RJ=ParagraphJustification.RIGHT_JUSTIFY;
  var PX=52, PW=976, PR=48;

  // ---------- yordamchilar ----------
  function ease(p,k,sp){ try{ var n=(p.value.length)?p.value.length:1, ei=[],eo=[]; for(var a=0;a<n;a++){ei.push(new KeyframeEase(0,sp));eo.push(new KeyframeEase(0,sp));} p.setTemporalEaseAtKey(k,ei,eo);}catch(e){} }
  function span(L,t0,t1){ L.inPoint=t0; L.outPoint=t1; }
  function op(L){ return L.property("ADBE Transform Group").property("ADBE Opacity"); }
  function pos(L){ return L.property("ADBE Transform Group").property("ADBE Position"); }
  function fadeIn(L,t0,d){ var o=op(L); var v=o.value; o.setValueAtTime(t0,0); o.setValueAtTime(t0+d,v); ease(o,1,70); ease(o,2,70); }
  function slideX(L,t0,d,dx){ var p=pos(L); var v=p.value; p.setValueAtTime(t0,[v[0]+dx,v[1]]); p.setValueAtTime(t0+d,[v[0],v[1]]); ease(p,1,60); ease(p,2,80); }
  function rect(name,wd,ht,rad,col,cx,cy,t0,t1,opac,strokeOp){
    var L=comp.layers.addShape(); L.name=name;
    var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var v=g.property("ADBE Vectors Group");
    var r=v.addProperty("ADBE Vector Shape - Rect");
    r.property("ADBE Vector Rect Size").setValue([wd,ht]); r.property("ADBE Vector Rect Roundness").setValue(rad);
    if(strokeOp){ var st=v.addProperty("ADBE Vector Graphic - Stroke"); st.property("ADBE Vector Stroke Color").setValue([1,1,1,1]); st.property("ADBE Vector Stroke Width").setValue(2); st.property("ADBE Vector Stroke Opacity").setValue(strokeOp); }
    v.addProperty("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
    pos(L).setValue([cx,cy]); if(opac!==undefined) op(L).setValue(opac);
    span(L,t0,t1); return L;
  }
  function ellipse(name,d,col,cx,cy,t0,t1){
    var L=comp.layers.addShape(); L.name=name;
    var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var v=g.property("ADBE Vectors Group");
    v.addProperty("ADBE Vector Shape - Ellipse").property("ADBE Vector Ellipse Size").setValue([d,d]);
    v.addProperty("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]);
    pos(L).setValue([cx,cy]); span(L,t0,t1); return L;
  }
  function hline(name,x0,x1,y,opac,t0,t1){
    var L=comp.layers.addShape(); L.name=name;
    var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
    var v=g.property("ADBE Vectors Group");
    var sh=v.addProperty("ADBE Vector Shape - Group"); var s=new Shape(); s.vertices=[[x0,y],[x1,y]]; s.inTangents=[[0,0],[0,0]]; s.outTangents=[[0,0],[0,0]]; s.closed=false;
    sh.property("ADBE Vector Shape").setValue(s);
    var st=v.addProperty("ADBE Vector Graphic - Stroke"); st.property("ADBE Vector Stroke Color").setValue([1,1,1,1]); st.property("ADBE Vector Stroke Width").setValue(2);
    pos(L).setValue([0,0]); op(L).setValue(opac); span(L,t0,t1); return L;
  }
  function text(name,str,font,size,col,just,x,y,t0,t1,tracking){
    var L=comp.layers.addText(str); L.name=name;
    var tp=L.property("ADBE Text Properties").property("ADBE Text Document");
    var d=tp.value; d.resetCharStyle(); d.font=font; d.fontSize=size; d.applyFill=true; d.fillColor=col; d.applyStroke=false;
    d.justification=just; if(tracking!==undefined) d.tracking=tracking; tp.setValue(d);
    pos(L).setValue([x,y]); span(L,t0,t1); return L;
  }
  function shadow(L,o,dist,soft){ try{ var s=L.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow"); s.property("ADBE Drop Shadow-0002").setValue(o); s.property("ADBE Drop Shadow-0004").setValue(dist); s.property("ADBE Drop Shadow-0005").setValue(soft);}catch(e){} }
  function ctrl(name,cx,cy,t0,t1){ var n=comp.layers.addNull(DUR); n.name=name; n.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([cx,cy]); pos(n).setValue([cx,cy]); span(n,t0,t1); return n; }
  // panel kirishi: scale 94->100, y +45->0, bolalar fade
  function popIn(n,t0,kids,cx,cy){
    var sc=n.property("ADBE Transform Group").property("ADBE Scale"); sc.setValueAtTime(t0,[94,94,100]); sc.setValueAtTime(t0+0.5,[100,100,100]); ease(sc,1,60); ease(sc,2,85);
    var p=pos(n); p.setValueAtTime(t0,[cx,cy+45]); p.setValueAtTime(t0+0.5,[cx,cy]); ease(p,1,60); ease(p,2,85);
    for(var i=0;i<kids.length;i++){ kids[i].parent=n; fadeIn(kids[i],t0,0.4); }
  }
  function rowIn(kids,t0){ for(var i=0;i<kids.length;i++){ fadeIn(kids[i],t0,0.35); slideX(kids[i],t0,0.35,-22); } }
  // ilova qatori: ikonka kvadrat + nom + izoh + qiymat
  function row(tag,cy,icon,iconCol,iconBg,name,sub,val,valCol,t0,t1){
    var k=[];
    k.push(rect(tag+" ic",84,84,26,iconBg,PX+82,cy,t0,t1));
    k.push(text(tag+" ig",icon,F_BOLD,40,iconCol,C,PX+82,cy+14,t0,t1));
    k.push(text(tag+" nm",name,F_SEMI,44,TX,LJ,PX+150,cy-2,t0,t1));
    k.push(text(tag+" sb",sub,F_REG,34,MUT,LJ,PX+150,cy+42,t0,t1));
    k.push(text(tag+" vl",val,F_SEMI,46,valCol,RJ,PX+PW-40,cy+14,t0,t1));
    return k;
  }
  function panel(tag,top,height,t0,t1){ return rect(tag+" panel",PW,height,PR,PANEL,540,top+height/2,t0,t1,PANEL_OP,8); }
  function head(tag,top,title,right,t0,t1){ var k=[]; k.push(text(tag+" h",title,F_SEMI,48,TX,LJ,PX+40,top+78,t0,t1)); if(right) k.push(text(tag+" hr",right,F_REG,38,MUT,RJ,PX+PW-40,top+78,t0,t1)); k.push(hline(tag+" hl",PX+2,PX+PW-2,top+112,7,t0,t1)); return k; }

  // ---------- 1) fon + video ----------
  comp.layers.addSolid([0,0,0],"[BG] black",W,H,1,DUR);
  var VID=proj.importFile(new ImportOptions(new File("D:/edit/amd_clone/src.mp4")));
  var vid=comp.layers.add(VID); vid.name="[VID] selfie"; pos(vid).setValue([540,960]); span(vid,0,DUR);
  w("video joylandi");

  // ---------- M0 2.5-6.8: ko'k pill + 3 qadam paneli ----------
  (function(){ var t0=2.5,t1=6.8, top=190, hgt=470, cx=540, cy=top+hgt/2, k=[];
    var pill=rect("[M0] pill",600,96,48,BLU,728,110,t0,t1); shadow(pill,60,10,40);
    var pt=text("[M0] pilltxt","AMD · 3-step daily cycle",F_SEMI,42,[1,1,1],C,728,125,t0,t1);
    var pn=ctrl("[M0] PILL CTRL",728,110,t0,t1); popIn(pn,t0,[pill,pt],728,110);
    k.push(panel("[M0]",top,hgt,t0,t1)); k=k.concat(head("[M0]",top,"Institutional cycle","today",t0,t1));
    var n=ctrl("[M0] CTRL",cx,cy,t0,t1); popIn(n,t0+0.15,k,cx,cy);
    var rows=[["1",MUT,GREY_BG,"Accumulation","Asia · 02:00 – 08:00","range",MUT],["2",RED,RED_BG,"Manipulation","London · 08:00 – 13:30","sweep",RED],["3",GRN,GRN_BG,"Distribution","New York · 13:30 – 17:00","expand",GRN]];
    for(var i=0;i<rows.length;i++){ var r=rows[i], rk=row("[M0] r"+i,top+200+i*120,r[0],r[1],r[2],r[3],r[4],r[5],r[6],t0,t1); for(var j=0;j<rk.length;j++) rk[j].parent=n; rowIn(rk,t0+0.55+i*0.25); }
  })();

  // ---------- M1 10.4-13.8: Asian range bildirishnomasi ----------
  (function(){ var t0=10.4,t1=13.8, top=190, hgt=190, cx=540, cy=top+hgt/2;
    var k=[panel("[M1]",top,hgt,t0,t1)]; var n=ctrl("[M1] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var rk=row("[M1] r",cy,"↔",MUT,GREY_BG,"Buyers & sellers","Asian range · sideways","trapped",RED,t0,t1); for(var j=0;j<rk.length;j++) rk[j].parent=n; rowIn(rk,t0+0.3);
  })();

  // ---------- M2 17.8-23.3: ikkita push (sweep, reversal) ----------
  (function(){ var t0=17.8,t1=23.3, top=190, hgt=190, cx=540, cy=top+hgt/2;
    var k=[panel("[M2a]",top,hgt,t0,t1)]; var n=ctrl("[M2a] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var rk=row("[M2a] r",cy,"↓",RED,RED_BG,"Stops swept","London open · below the low","14,394",RED,t0,t1); for(var j=0;j<rk.length;j++) rk[j].parent=n; rowIn(rk,t0+0.3);
    var t2=21.4, top2=410, cy2=top2+hgt/2;
    var k2=[panel("[M2b]",top2,hgt,t2,t1)]; var n2=ctrl("[M2b] CTRL",cx,cy2,t2,t1); popIn(n2,t2,k2,cx,cy2);
    var rk2=row("[M2b] r",cy2,"↑",GRN,GRN_BG,"Liquidity grabbed","price reverses into the range","reversal",GRN,t2,t1); for(var q=0;q<rk2.length;q++) rk2[q].parent=n2; rowIn(rk2,t2+0.3);
  })();

  // ---------- M3 25.4-31.1: to'liq ekran hisobot ----------
  (function(){ var t0=25.4,t1=31.1, k=[];
    k.push(comp.layers.addSolid(FS_BG,"[M3] bg",W,H,1,DUR)); span(k[0],t0,t1);
    k.push(text("[M3] h","Distribution",F_SEMI,64,TX,LJ,80,270,t0,t1));
    k.push(text("[M3] hs","New York session",F_REG,40,MUT,LJ,80,330,t0,t1));
    k.push(hline("[M3] hl",0,W,380,7,t0,t1));
    k.push(text("[M3] sec","SESSION",F_SEMI,34,MUT,LJ,80,460,t0,t1,160));
    var n=ctrl("[M3] CTRL",540,960,t0,t1);
    var sc=n.property("ADBE Transform Group").property("ADBE Scale"); sc.setValueAtTime(t0,[112,112,100]); sc.setValueAtTime(t0+0.55,[100,100,100]); ease(sc,1,60); ease(sc,2,85);
    for(var i=0;i<k.length;i++){ k[i].parent=n; fadeIn(k[i],t0,0.4); }
    var rows=[["Open","13:30",TX],["Expansion","+312 pips",GRN],["Target","reached ✓",GRN]];
    for(var r=0;r<rows.length;r++){ var y=540+r*100, s=t0+0.5+r*0.3;
      var rk=[text("[M3] rl"+r,rows[r][0],F_REG,46,MUT,LJ,80,y+16,s,t1), text("[M3] rv"+r,rows[r][1],F_SEMI,46,rows[r][2],RJ,1000,y+16,s,t1), hline("[M3] rd"+r,80,1000,y+56,5,s,t1)];
      for(var j=0;j<rk.length;j++) rk[j].parent=n; rowIn(rk,s); }
    var tk=[text("[M3] tl","True target",F_SEMI,58,TX,LJ,80,900,t0+1.5,t1), text("[M3] tv","+312",F_SEMI,78,GRN,RJ,1000,906,t0+1.5,t1)];
    for(var q=0;q<tk.length;q++) tk[q].parent=n; rowIn(tk,t0+1.5);
    var bk=[rect("[M3] b1",270,120,60,[0.204,0.204,0.22],560,1585,t0+2.0,t1), text("[M3] b1t","Close",F_SEMI,46,TX,C,560,1601,t0+2.0,t1), rect("[M3] b2",270,120,60,[0.91,0.91,0.925],860,1585,t0+2.0,t1), text("[M3] b2t","Save",F_SEMI,46,[0.07,0.07,0.07],C,860,1601,t0+2.0,t1), text("[M3] note","the real move of the day",F_REG,36,[0.353,0.353,0.384],C,540,1780,t0+2.0,t1)];
    for(var b=0;b<bk.length;b++) bk[b].parent=n; rowIn(bk,t0+2.0);
    // blur-zoom kirish: adjustment + Gaussian Blur 40->0
    var adj=comp.layers.addSolid([1,1,1],"[M3] blur ADJ",W,H,1,DUR); adj.adjustmentLayer=true; span(adj,t0,t0+0.7); adj.moveToBeginning();
    try{ var gb=adj.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2"); var bl=gb.property("ADBE Gaussian Blur 2-0001"); bl.setValueAtTime(t0,40); bl.setValueAtTime(t0+0.55,0); ease(bl,1,60); ease(bl,2,85); }catch(e){ w("blur skip: "+e); }
  })();

  // ---------- M4 31.5-37.8: qoidalar paneli ----------
  (function(){ var t0=31.5,t1=37.8, top=190, hgt=470, cx=540, cy=top+hgt/2, k=[];
    k.push(panel("[M4]",top,hgt,t0,t1)); k=k.concat(head("[M4]",top,"Execution rules","in that order",t0,t1));
    var n=ctrl("[M4] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var rows=[["1",RED,RED_BG,"Asian range","no trades in the range","skip",RED,31.7],["2",BLU,BLU_BG,"London sweep","manipulation · be patient","wait",BLU,33.5],["3",GRN,GRN_BG,"NY distribution","the expansion move","ride",GRN,35.8]];
    for(var i=0;i<rows.length;i++){ var r=rows[i], rk=row("[M4] r"+i,top+200+i*120,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],t1); for(var j=0;j<rk.length;j++) rk[j].parent=n; rowIn(rk,r[7]); }
  })();

  // ---------- M5 38.0-42.1: modal CTA ----------
  (function(){ var t0=38.0,t1=DUR, top=410, hgt=600, cx=540, cy=top+hgt/2, k=[];
    k.push(rect("[M5] modal",902,hgt,60,MODAL,cx,cy,t0,t1,100,9)); shadow(k[0],70,24,60);
    k.push(ellipse("[M5] ico",164,BLU_BG,cx,top+150,t0,t1));
    k.push(text("[M5] icot","!",F_BOLD,84,BLU,C,cx,top+180,t0,t1));
    k.push(text("[M5] t1","Master the daily cycle",F_SEMI,58,TX,C,cx,top+310,t0,t1));
    k.push(text("[M5] t2","Follow for the institutional\rexecution rules",F_REG,44,MUT,C,cx,top+380,t0,t1));
    k.push(hline("[M5] hl",cx-451,cx+451,top+hgt-130,9,t0,t1));
    k.push(hline("[M5] vl",cx,cx,top+hgt-130,9,t0,t1)); // vertikal ajratgich pastda
    k.push(text("[M5] b1","Later",F_SEMI,50,MUT,C,cx-225,top+hgt-48,t0,t1));
    k.push(text("[M5] b2","Follow",F_SEMI,50,BLU,C,cx+225,top+hgt-48,t0,t1));
    var n=ctrl("[M5] CTRL",cx,cy,t0,t1);
    var sc=n.property("ADBE Transform Group").property("ADBE Scale"); sc.setValueAtTime(t0,[86,86,100]); sc.setValueAtTime(t0+0.3,[103,103,100]); sc.setValueAtTime(t0+0.45,[100,100,100]); ease(sc,1,50); ease(sc,2,60); ease(sc,3,80);
    for(var i=0;i<k.length;i++){ k[i].parent=n; fadeIn(k[i],t0,0.3); }
  })();
  // vertikal ajratgich: hline gorizontal edi — alohida to'g'ri chiziq
  (function(){ var L=comp.layer("[M5] vl"); var sh=L.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").property(1); var s=new Shape(); s.vertices=[[540,410+600-130],[540,410+600]]; s.inTangents=[[0,0],[0,0]]; s.outTangents=[[0,0],[0,0]]; s.closed=false; sh.property("ADBE Vector Shape").setValue(s); })();
  w("panellar qurildi");

  // ---------- so'zma-so'z subtitr (pastda, bold) ----------
  var HIDE=[[25.4,31.1]];
  function inHide(t){ for(var i=0;i<HIDE.length;i++) if(t>=HIDE[i][0]-0.05 && t<HIDE[i][1]) return true; return false; }
  var wl=text("[CAP] words","",F_BOLD,62,[1,1,1],C,540,1690,0,DUR); shadow(wl,85,4,18);
  var tp=wl.property("ADBE Text Properties").property("ADBE Text Document");
  var srt=new File("D:/edit/amd_clone/words.srt"); var nWords=0;
  if(srt.exists){
    srt.open("r"); srt.encoding="UTF-8"; var raw=srt.read(); srt.close();
    var blocks=raw.split(/\r?\n\r?\n/);
    var ts=function(s){ var mm=s.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return mm? parseInt(mm[1],10)*3600+parseInt(mm[2],10)*60+parseInt(mm[3],10)+parseInt(mm[4],10)/1000 : -1; };
    var lastEnd=-1;
    for(var i=0;i<blocks.length;i++){
      var ln=blocks[i].split(/\r?\n/); if(ln.length<3) continue;
      var tm=ln[1].split("-->"); if(tm.length<2) continue; var t0=ts(tm[0]), t1=ts(tm[1]); var word=ln.slice(2).join(" ").replace(/^\s+|\s+$/g,"");
      if(t0<0||!word) continue;
      if(inHide(t0)){ if(lastEnd>=0){ var d0=tp.value; d0.text=""; tp.setValueAtTime(t0,d0); lastEnd=-1; } continue; }
      var d=tp.value; d.text=word.replace(/[.,!?]+$/,""); tp.setValueAtTime(t0,d); lastEnd=t1; nWords++;
    }
    w("so'zlar: "+nWords);
  } else { w("OGOHLANTIRISH: words.srt yo'q"); }

  proj.save(new File("D:/edit/amd_clone/amd_edouard.aep"));
  app.endUndoGroup();
  w("layers="+comp.numLayers); w("SAQLANDI");
  var T=[4,12,19,22,28,34,40];
  for(var k=0;k<T.length;k++){ try{ comp.saveFrameToPng(T[k], new File("D:/edit/amd_clone/e"+(k+1)+".png")); $.sleep(2500); w("frame "+T[k]); }catch(e){ w("frame err "+T[k]+" "+e); } }
  w("DONE_OK");
}catch(err){ w("ERR: "+err.toString()+" line "+err.line); try{app.endUndoGroup();}catch(e){} }
LOGF.close();
