// AMD 0912 — tanlov: 1C stepper · 2B mini vidjet · 3C sweep grafigi · 4A to'liq ekran · 5B checklist · 6C profil kartasi (Apple-minimal)
app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);
var LOGF = new File("D:/edit/amd_clone/pick_log.txt"); LOGF.open("w"); LOGF.encoding="UTF-8";
function w(s){ LOGF.write(s+"\n"); LOGF.close(); LOGF.open("a"); }
try{
  if (app.project && app.project.dirty && app.project.file) { w("STOP: ochiq loyiha saqlanmagan: "+app.project.file.fsName); throw new Error("dirty"); }
  app.newProject(); var proj=app.project; app.beginUndoGroup("AMD pick");
  var W=1080,H=1920,FPS=30,DUR=42.1;
  var comp=proj.items.addComp("AMD_PICK",W,H,1,DUR,FPS); w("comp");
  var TX=[0.949,0.949,0.961], MUT=[0.557,0.557,0.588], BLU=[0.039,0.518,1], GRN=[0.188,0.82,0.345], RED=[1,0.271,0.227];
  var PN=[0.11,0.11,0.125], FSBG=[0.051,0.051,0.063], GRP=[0.102,0.102,0.118];
  var GL=[]; var F_SEMI="SegoeUI-Semibold", F_REG="SegoeUI", F_MONO="Consolas";
  var C=ParagraphJustification.CENTER_JUSTIFY, LJ=ParagraphJustification.LEFT_JUSTIFY, RJ=ParagraphJustification.RIGHT_JUSTIFY;
  function ease(p,k,sp){ try{ var n=(p.value.length)?p.value.length:1, ei=[],eo=[]; for(var a=0;a<n;a++){ei.push(new KeyframeEase(0,sp));eo.push(new KeyframeEase(0,sp));} p.setTemporalEaseAtKey(k,ei,eo);}catch(e){} }
  function span(L,t0,t1){ L.inPoint=t0; L.outPoint=t1; }
  function tr(L){ return L.property("ADBE Transform Group"); }
  function fadeIn(L,t0,d){ var o=tr(L).property("ADBE Opacity"); var v=o.value; o.setValueAtTime(t0,0); o.setValueAtTime(t0+d,v); ease(o,1,70); ease(o,2,70); }
  function riseIn(L,t0,d,dy){ var p=tr(L).property("ADBE Position"); var v=p.value; p.setValueAtTime(t0,[v[0],v[1]+dy]); p.setValueAtTime(t0+d,[v[0],v[1]]); ease(p,1,60); ease(p,2,85); }
  function vg(L){ var g=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); return g.property("ADBE Vectors Group"); }
  function fill(v,col,opac){ var f=v.addProperty("ADBE Vector Graphic - Fill"); f.property("ADBE Vector Fill Color").setValue([col[0],col[1],col[2],1]); if(opac!==undefined) f.property("ADBE Vector Fill Opacity").setValue(opac); return f; }
  function stroke(v,col,wd,opac,dash){ var s=v.addProperty("ADBE Vector Graphic - Stroke"); s.property("ADBE Vector Stroke Color").setValue([col[0],col[1],col[2],1]); s.property("ADBE Vector Stroke Width").setValue(wd); if(opac!==undefined) s.property("ADBE Vector Stroke Opacity").setValue(opac); try{ s.property("ADBE Vector Stroke Line Cap").setValue(2); s.property("ADBE Vector Stroke Line Join").setValue(2); }catch(e){} if(dash){ try{ var d=s.property("ADBE Vector Stroke Dashes"); d.addProperty("ADBE Vector Stroke Dash 1").setValue(dash[0]); d.addProperty("ADBE Vector Stroke Gap 1").setValue(dash[1]); }catch(e2){} } return s; }
  function rect(name,wd,ht,rad,col,cx,cy,t0,t1,opac,hair){ var L=comp.layers.addShape(); L.name=name; var v=vg(L); var r=v.addProperty("ADBE Vector Shape - Rect"); r.property("ADBE Vector Rect Size").setValue([wd,ht]); r.property("ADBE Vector Rect Roundness").setValue(rad); if(hair) stroke(v,[1,1,1],2,hair); fill(v,col,opac); tr(L).property("ADBE Position").setValue([cx,cy]); span(L,t0,t1); return L; }
  function circle(name,d,col,cx,cy,t0,t1,strokeOnly,sw,sop){ var L=comp.layers.addShape(); L.name=name; var v=vg(L); v.addProperty("ADBE Vector Shape - Ellipse").property("ADBE Vector Ellipse Size").setValue([d,d]); if(strokeOnly) stroke(v,col,sw,sop); else fill(v,col); tr(L).property("ADBE Position").setValue([cx,cy]); span(L,t0,t1); return L; }
  function path(name,pts,col,wd,opac,dash,t0,t1){ var L=comp.layers.addShape(); L.name=name; var v=vg(L); var sh=v.addProperty("ADBE Vector Shape - Group"); var s=new Shape(); s.vertices=pts; var it=[],ot=[]; for(var i=0;i<pts.length;i++){it.push([0,0]);ot.push([0,0]);} s.inTangents=it; s.outTangents=ot; s.closed=false; sh.property("ADBE Vector Shape").setValue(s); stroke(v,col,wd,opac,dash); tr(L).property("ADBE Position").setValue([0,0]); span(L,t0,t1); return L; }
  function trim(L,t0,d){ try{ var t=L.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim"); var e=t.property("ADBE Vector Trim End"); e.setValueAtTime(t0,0); e.setValueAtTime(t0+d,100); ease(e,1,40); ease(e,2,85); }catch(e2){ w("trim skip "+e2); } }
  function text(name,str,font,size,col,just,x,y,t0,t1,tracking){ var L=comp.layers.addText(str); L.name=name; var tp=L.property("ADBE Text Properties").property("ADBE Text Document"); var d=tp.value; d.resetCharStyle(); d.font=font; d.fontSize=size; d.applyFill=true; d.fillColor=col; d.applyStroke=false; d.justification=just; if(tracking!==undefined) d.tracking=tracking; tp.setValue(d); tr(L).property("ADBE Position").setValue([x,y]); span(L,t0,t1); return L; }
  function shadow(L,o,dist,soft){ try{ var s=L.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow"); s.property("ADBE Drop Shadow-0002").setValue(o); s.property("ADBE Drop Shadow-0004").setValue(dist); s.property("ADBE Drop Shadow-0005").setValue(soft);}catch(e){} }
  function ctrl(name,cx,cy,t0,t1){ var n=comp.layers.addNull(DUR); n.name=name; tr(n).property("ADBE Anchor Point").setValue([cx,cy]); tr(n).property("ADBE Position").setValue([cx,cy]); span(n,t0,t1); return n; }
  function popIn(n,t0,kids,cx,cy){ for(var gi=0;gi<GL.length;gi++){ if(GL[gi].name===kids[0].name+" matte") GL[gi].parent=n; } var sc=tr(n).property("ADBE Scale"); sc.setValueAtTime(t0,[97,97,100]); sc.setValueAtTime(t0+0.5,[100,100,100]); ease(sc,1,60); ease(sc,2,85); var p=tr(n).property("ADBE Position"); p.setValueAtTime(t0,[cx,cy+32]); p.setValueAtTime(t0+0.5,[cx,cy]); ease(p,1,60); ease(p,2,85); for(var i=0;i<kids.length;i++){ kids[i].parent=n; fadeIn(kids[i],t0,0.4); } }
  function rowIn(kids,t0){ for(var i=0;i<kids.length;i++){ fadeIn(kids[i],t0,0.35); riseIn(kids[i],t0,0.35,16); } }
  // shisha: video nusxasi blur + panel matte
  function glass(panelL,t0,t1){ try{ var d=vid.duplicate(); d.name=panelL.name+" glass"; span(d,t0,t1); var gb=d.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2"); gb.property("ADBE Gaussian Blur 2-0001").setValue(60); try{ gb.property("ADBE Gaussian Blur 2-0002").setValue(true); }catch(e0){} d.moveAfter(panelL); var m=panelL.duplicate(); m.name=panelL.name+" matte"; m.moveBefore(d); d.setTrackMatte(m,TrackMatteType.ALPHA); m.enabled=false; try{ fadeIn(d,t0,0.4); }catch(e1){} GL.push(m); return d; }catch(e){ w("glass skip: "+e); return null; } }

  comp.layers.addSolid([0,0,0],"[BG]",W,H,1,DUR);
  var VID=proj.importFile(new ImportOptions(new File("D:/edit/amd_clone/src.mp4")));
  var vid=comp.layers.add(VID); vid.name="[VID] selfie"; tr(vid).property("ADBE Position").setValue([540,960]); span(vid,0,DUR); w("video");

  // ---------- 1C STEPPER 2.5-6.8 ----------
  (function(){ var t0=2.5,t1=6.8, y=150, xs=[136,540,944];
    var base=path("[1C] track",[[xs[0],y],[xs[2],y]],[1,1,1],8,14,null,t0,t1); fadeIn(base,t0,0.3);
    var fl=path("[1C] fill",[[xs[0],y],[xs[2],y]],GRN,8,100,null,t0,t1); trim(fl,t0+0.3,1.6);
    var names=[["Accumulation","Asia",LJ,104],["Manipulation","London",C,540],["Distribution","New York",RJ,976]];
    for(var i=0;i<3;i++){ var s=t0+0.25+i*0.55; var nd=circle("[1C] node"+i,48,GRN,xs[i],y,s,t1); var sc=tr(nd).property("ADBE Scale"); sc.setValueAtTime(s,[0,0,100]); sc.setValueAtTime(s+0.22,[115,115,100]); sc.setValueAtTime(s+0.36,[100,100,100]); ease(sc,1,40); ease(sc,2,60); ease(sc,3,80);
      var k=[text("[1C] n"+i,names[i][0],F_SEMI,38,TX,names[i][2],names[i][3],y+78,s,t1), text("[1C] s"+i,names[i][1],F_REG,34,MUT,names[i][2],names[i][3],y+120,s,t1)]; rowIn(k,s); for(var j=0;j<k.length;j++) shadow(k[j],60,3,12); }
  })();

  // ---------- 2B MINI VIDJET 10.4-13.8 ----------
  (function(){ var t0=10.4,t1=13.8, top=80,hgt=400, cx=540, cy=top+hgt/2;
    var p=rect("[2B] panel",920,hgt,52,PN,cx,cy,t0,t1,72,8); glass(p,t0,t1);
    var k=[p, text("[2B] h","Asian range",F_SEMI,40,TX,LJ,124,top+70,t0,t1), text("[2B] hr","02:00 – 08:00",F_REG,34,MUT,RJ,956,top+70,t0,t1),
      path("[2B] d1",[[124,top+120],[956,top+120]],[1,1,1],3,18,[12,16],t0,t1), path("[2B] d2",[[124,top+270],[956,top+270]],[1,1,1],3,18,[12,16],t0,t1)];
    var n=ctrl("[2B] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var yy=top+195, pts=[[124,yy],[200,yy-56],[276,yy+50],[352,yy-62],[428,yy+58],[504,yy-48],[580,yy+44],[656,yy-60],[732,yy+52],[808,yy-40],[884,yy+30],[956,yy]];
    var ln=path("[2B] line",pts,[0.79,0.79,0.816],6,100,null,t0,t1); ln.parent=n; trim(ln,t0+0.3,1.4);
    var tg=[rect("[2B] t1",250,52,18,RED,124+125,top+340,t0+0.9,t1,16), text("[2B] t1t","buyers trapped",F_REG,32,RED,C,124+125,top+351,t0+0.9,t1), rect("[2B] t2",256,52,18,RED,124+250+16+128,top+340,t0+1.2,t1,16), text("[2B] t2t","sellers trapped",F_REG,32,RED,C,124+250+16+128,top+351,t0+1.2,t1)];
    for(var i=0;i<tg.length;i++) tg[i].parent=n; rowIn([tg[0],tg[1]],t0+0.9); rowIn([tg[2],tg[3]],t0+1.2);
  })();

  // ---------- 3C SWEEP GRAFIGI 17.8-23.3 ----------
  (function(){ var t0=17.8,t1=23.3, top=80,hgt=400, cx=540, cy=top+hgt/2;
    var p=rect("[3C] panel",920,hgt,52,PN,cx,cy,t0,t1,72,8); glass(p,t0,t1);
    var k=[p, text("[3C] h","London open",F_SEMI,40,TX,LJ,124,top+70,t0,t1), text("[3C] hr","–14,394 stops",F_SEMI,36,RED,RJ,956,top+70,t0,t1), path("[3C] low",[[124,top+230],[956,top+230]],[1,1,1],3,22,[12,16],t0,t1), text("[3C] lowl","low",F_REG,28,MUT,LJ,124,top+222,t0,t1)];
    var n=ctrl("[3C] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var pts=[[124,top+190],[260,top+200],[400,top+180],[500,top+280],[560,top+300],[650,top+230],[760,top+190],[860,top+150],[956,top+120]];
    var ln=path("[3C] line",pts,RED,7,100,null,t0,t1); ln.parent=n; trim(ln,t0+0.3,1.8);
    var dot=circle("[3C] dot",18,RED,560,top+300,t0+1.15,t1); dot.parent=n; fadeIn(dot,t0+1.15,0.15);
    var tg=[rect("[3C] t1",190,52,18,RED,124+95,top+352,t0+0.7,t1,16), text("[3C] t1t","sweep ↓",F_REG,32,RED,C,124+95,top+363,t0+0.7,t1), rect("[3C] t2",210,52,18,GRN,124+190+16+105,top+352,21.4,t1,16), text("[3C] t2t","reversal ↑",F_REG,32,GRN,C,124+190+16+105,top+363,21.4,t1)];
    for(var i=0;i<tg.length;i++) tg[i].parent=n; rowIn([tg[0],tg[1]],t0+0.7); rowIn([tg[2],tg[3]],21.4);
  })();

  // ---------- 4A TO'LIQ EKRAN 25.4-31.1 ----------
  (function(){ var t0=25.4,t1=31.1, k=[];
    k.push(comp.layers.addSolid(FSBG,"[4A] bg",W,H,1,DUR)); span(k[0],t0,t1);
    k.push(text("[4A] h","Distribution",F_SEMI,72,TX,LJ,80,270,t0,t1)); k.push(text("[4A] hs","New York session · 13:30 – 17:00",F_REG,40,MUT,LJ,80,330,t0,t1));
    k.push(text("[4A] sec","SESSION",F_REG,32,MUT,LJ,104,440,t0,t1,140));
    k.push(rect("[4A] g1",920,360,44,GRP,540,660,t0,t1)); k.push(rect("[4A] g2",920,150,44,GRP,540,940,t0,t1));
    k.push(path("[4A] hl1",[[132,600],[948,600]],[1,1,1],2,8,null,t0,t1)); k.push(path("[4A] hl2",[[132,720],[948,720]],[1,1,1],2,8,null,t0,t1));
    var n=ctrl("[4A] CTRL",540,960,t0,t1); var sc=tr(n).property("ADBE Scale"); sc.setValueAtTime(t0,[106,106,100]); sc.setValueAtTime(t0+0.55,[100,100,100]); ease(sc,1,60); ease(sc,2,85);
    for(var i=0;i<k.length;i++){ k[i].parent=n; fadeIn(k[i],t0,0.4); }
    var rows=[["Open","13:30",MUT],["Expansion","+312 pips",GRN],["Target","reached",GRN]];
    for(var r=0;r<3;r++){ var y=540+r*120, s=t0+0.5+r*0.3; var rk=[text("[4A] rl"+r,rows[r][0],F_REG,44,TX,LJ,132,y+16,s,t1), text("[4A] rv"+r,rows[r][1],F_SEMI,44,rows[r][2],RJ,948,y+16,s,t1)]; for(var j=0;j<2;j++) rk[j].parent=n; rowIn(rk,s); }
    var tk=[text("[4A] tl","True target",F_SEMI,44,TX,LJ,132,956,t0+1.5,t1), text("[4A] tv","+312",F_SEMI,76,GRN,RJ,948,966,t0+1.5,t1)]; for(var q=0;q<2;q++) tk[q].parent=n; rowIn(tk,t0+1.5);
    var bk=[rect("[4A] b1",448,120,40,GRP,308,1650,t0+2.0,t1), text("[4A] b1t","Close",F_SEMI,44,TX,C,308,1666,t0+2.0,t1), rect("[4A] b2",448,120,40,BLU,772,1650,t0+2.0,t1), text("[4A] b2t","Save",F_SEMI,44,[1,1,1],C,772,1666,t0+2.0,t1)]; for(var b=0;b<4;b++) bk[b].parent=n; rowIn(bk,t0+2.0);
    var adj=comp.layers.addSolid([1,1,1],"[4A] blur ADJ",W,H,1,DUR); adj.adjustmentLayer=true; span(adj,t0,t0+0.7); adj.moveToBeginning();
    try{ var gb=adj.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2"); var bl=gb.property("ADBE Gaussian Blur 2-0001"); bl.setValueAtTime(t0,32); bl.setValueAtTime(t0+0.55,0); ease(bl,1,60); ease(bl,2,85); }catch(e){ w("blur skip: "+e); }
  })();

  // ---------- 5B CHECKLIST 31.5-37.8 ----------
  (function(){ var t0=31.5,t1=37.8, top=96,hgt=400, cx=540, cy=top+hgt/2;
    var p=rect("[5B] panel",920,hgt,52,PN,cx,cy,t0,t1,72,8); glass(p,t0,t1);
    var k=[p, path("[5B] h1",[[88,top+134],[992,top+134]],[1,1,1],2,8,null,t0,t1), path("[5B] h2",[[88,top+266],[992,top+266]],[1,1,1],2,8,null,t0,t1)];
    var n=ctrl("[5B] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var rows=[["Skip the Asian range","accumulation",31.9],["Wait for the London sweep","manipulation",33.7],["Ride the NY distribution","expansion",36.0]];
    for(var i=0;i<3;i++){ var y=top+66+i*132, s=t0+0.3+i*0.25, tk=rows[i][2];
      var ring=circle("[5B] ring"+i,64,[1,1,1],156,y,s,t1,true,6,28); ring.parent=n;
      var nm=text("[5B] n"+i,rows[i][0],F_SEMI,40,TX,LJ,212,y+12,s,t1); var sb=text("[5B] s"+i,rows[i][1],F_REG,34,MUT,LJ,212,y+52,s,t1); nm.parent=n; sb.parent=n; rowIn([ring,nm,sb],s);
      var ck=circle("[5B] ck"+i,64,GRN,156,y,tk,t1); var ct=text("[5B] ckt"+i,"✓",F_SEMI,36,[1,1,1],C,156,y+13,tk,t1); ck.parent=n; ct.parent=n;
      var sc=tr(ck).property("ADBE Scale"); sc.setValueAtTime(tk,[0,0,100]); sc.setValueAtTime(tk+0.2,[112,112,100]); sc.setValueAtTime(tk+0.32,[100,100,100]); ease(sc,1,40); ease(sc,2,60); ease(sc,3,80); fadeIn(ct,tk+0.1,0.15); }
  })();

  // ---------- 6C PROFIL KARTASI 38.0-42.1 ----------
  (function(){ var t0=38.0,t1=DUR, top=520,hgt=600, cx=540, cy=top+hgt/2;
    var p=rect("[6C] card",840,hgt,56,PN,cx,cy,t0,t1,90,9); shadow(p,60,20,60); glass(p,t0,t1);
    var k=[p];
    var av=vid.duplicate(); av.name="[6C] avatar"; span(av,t0,t1); var m=av.property("ADBE Mask Parade").addProperty("ADBE Mask Atom"); var ms=new Shape(); var r=210,fx=540,fy=1120; ms.vertices=[[fx-r,fy],[fx,fy-r],[fx+r,fy],[fx,fy+r]]; var kk=0.5523*r; ms.inTangents=[[0,kk],[-kk,0],[0,-kk],[kk,0]]; ms.outTangents=[[0,-kk],[kk,0],[0,kk],[-kk,0]]; ms.closed=true; m.property("ADBE Mask Shape").setValue(ms);
    tr(av).property("ADBE Anchor Point").setValue([fx,fy]); tr(av).property("ADBE Position").setValue([540,top+92]); tr(av).property("ADBE Scale").setValue([44,44,100]); av.moveToBeginning(); k.push(av);
    k.push(circle("[6C] ring",188,[1,1,1],540,top+92,t0,t1,true,6,18));
    k.push(text("[6C] n1","@nytvir",F_SEMI,48,TX,C,540,top+232,t0,t1)); k.push(text("[6C] n2","institutional execution · daily",F_REG,36,MUT,C,540,top+280,t0,t1));
    var st=[["AMD","cycle",380],["3","rules",540],["daily","posts",700]];
    for(var i=0;i<3;i++){ k.push(text("[6C] sv"+i,st[i][0],F_SEMI,44,TX,C,st[i][2],top+372,t0,t1)); k.push(text("[6C] sl"+i,st[i][1],F_REG,34,MUT,C,st[i][2],top+414,t0,t1)); }
    var n=ctrl("[6C] CTRL",cx,cy,t0,t1); var sc=tr(n).property("ADBE Scale"); sc.setValueAtTime(t0,[90,90,100]); sc.setValueAtTime(t0+0.32,[102,102,100]); sc.setValueAtTime(t0+0.48,[100,100,100]); ease(sc,1,50); ease(sc,2,60); ease(sc,3,80);
    for(var j=0;j<k.length;j++){ k[j].parent=n; fadeIn(k[j],t0,0.3); }
    var bk=[rect("[6C] fb",300,96,36,BLU,540,top+510,t0+0.6,t1), text("[6C] fbt","Follow",F_SEMI,44,[1,1,1],C,540,top+526,t0+0.6,t1)]; for(var b=0;b<2;b++) bk[b].parent=n; rowIn(bk,t0+0.6);
  })();
  w("panellar");

  // ---------- HA QIDIRUV 0.3-2.5 ----------
  (function(){ var t0=0.3,t1=2.5, top=80,hgt=110, cx=540, cy=top+hgt/2;
    var p=rect("[HA] panel",920,hgt,40,PN,cx,cy,t0,t1,72,8); glass(p,t0,t1);
    var mg=circle("[HA] mg",30,MUT,140,cy-4,t0,t1,true,5,100); var mh=path("[HA] mgh",[[152,cy+8],[164,cy+20]],MUT,5,100,null,t0,t1);
    var k=[p,mg,mh]; var n=ctrl("[HA] CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    var q="where is the market going today?"; var tl=text("[HA] q","",F_REG,38,TX,LJ,196,cy+14,t0,t1); tl.parent=n;
    var tp=tl.property("ADBE Text Properties").property("ADBE Text Document");
    for(var i=1;i<=q.length;i++){ var d=tp.value; d.text=q.substr(0,i)+"|"; tp.setValueAtTime(t0+0.45+i*0.045,d); }
    var tE=t0+0.45+q.length*0.045; for(var b=1;b<=3;b++){ var db=tp.value; db.text=q+((b%2)?"":"|"); tp.setValueAtTime(tE+b*0.22,db); }
  })();
  // ---------- SESSIYA CHIZIG'I (1A/2A/3A) ----------
  function sessionBar(tag,t0,t1,state,fillT0,fillT1){
    var top=80,hgt=120, cx=540, cy=top+hgt/2; var p=rect(tag+" panel",920,hgt,40,PN,cx,cy,t0,t1,72,8); glass(p,t0,t1);
    var k=[p]; var segW=(832-32)/3, y=top+40, cols=[[0.79,0.79,0.816],RED,GRN], labs=[["Asia","02:00",LJ,124],["London","08:00",C,540],["New York","13:30",RJ,956]];
    for(var i=0;i<3;i++){ var x0=124+i*(segW+16)+10, x1=x0+segW-20;
      k.push(path(tag+" base"+i,[[x0,y],[x1,y]],[1,1,1],20,10,null,t0,t1));
      if(i<state){ k.push(path(tag+" full"+i,[[x0,y],[x1,y]],cols[i],20,100,null,t0,t1)); }
      if(i===state){ var f=path(tag+" fill"+i,[[x0,y],[x1,y]],cols[i],20,100,null,t0,t1); k.push(f); var tr2=f.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Trim"); var e=tr2.property("ADBE Vector Trim End"); e.setValueAtTime(fillT0,0); e.setValueAtTime(fillT1,100); ease(e,1,40); ease(e,2,85);
        var nw=rect(tag+" now",4,44,2,[1,1,1],x0,y,t0,t1); k.push(nw); var np=tr(nw).property("ADBE Position"); np.setValueAtTime(fillT0,[x0,y]); np.setValueAtTime(fillT1,[x1,y]); ease(np,1,40); ease(np,2,85); }
      var on=(i===state); k.push(text(tag+" l"+i,on?(labs[i][0]+" · "+labs[i][1]):labs[i][0],on?F_SEMI:F_REG,32,on?TX:MUT,labs[i][2],labs[i][3],top+100,t0,t1)); }
    var n=ctrl(tag+" CTRL",cx,cy,t0,t1); popIn(n,t0,k,cx,cy);
    for(var j=0;j<k.length;j++){ var o=tr(k[j]).property("ADBE Opacity"); var v=o.valueAtTime(t1-0.3,false); o.setValueAtTime(t1-0.3,v); o.setValueAtTime(t1,0); }
  }
  sessionBar("[1A]",6.8,10.4,0,6.95,9.6); sessionBar("[2A]",13.8,17.8,1,13.95,16.6); sessionBar("[3A]",23.3,25.4,2,23.4,25.2);
  w("bo'sh joylar");
  // ---------- subtitr ----------
  var HIDE=[[25.4,31.1]];
  function inHide(t){ for(var i=0;i<HIDE.length;i++) if(t>=HIDE[i][0]-0.05 && t<HIDE[i][1]) return true; return false; }
  var wl=text("[CAP] words","",F_SEMI,58,[1,1,1],C,540,1690,0,DUR); shadow(wl,80,3,16);
  var tp=wl.property("ADBE Text Properties").property("ADBE Text Document");
  var srt=new File("D:/edit/amd_clone/words.srt"); var nWords=0;
  if(srt.exists){ srt.open("r"); srt.encoding="UTF-8"; var raw=srt.read(); srt.close(); var blocks=raw.split(/\r?\n\r?\n/);
    var ts=function(s){ var mm=s.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return mm? parseInt(mm[1],10)*3600+parseInt(mm[2],10)*60+parseInt(mm[3],10)+parseInt(mm[4],10)/1000 : -1; };
    var lastEnd=-1;
    for(var i=0;i<blocks.length;i++){ var ln=blocks[i].split(/\r?\n/); if(ln.length<3) continue; var tm=ln[1].split("-->"); if(tm.length<2) continue; var t0=ts(tm[0]), t1=ts(tm[1]); var word=ln.slice(2).join(" ").replace(/^\s+|\s+$/g,""); if(t0<0||!word) continue;
      if(inHide(t0)){ if(lastEnd>=0){ var d0=tp.value; d0.text=""; tp.setValueAtTime(t0,d0); lastEnd=-1; } continue; }
      var d=tp.value; d.text=word.replace(/[.,!?]+$/,""); tp.setValueAtTime(t0,d); lastEnd=t1; nWords++; }
    w("so'zlar: "+nWords); }
  wl.moveToBeginning();

  proj.save(new File("D:/edit/amd_clone/amd_pick.aep")); app.endUndoGroup(); w("layers="+comp.numLayers); w("SAQLANDI");
  var T=[4,12,20,28,34,40,41.5];
  for(var k2=0;k2<T.length;k2++){ try{ comp.saveFrameToPng(T[k2], new File("D:/edit/amd_clone/p"+(k2+1)+".png")); $.sleep(2500); w("frame "+T[k2]); }catch(e){ w("frame err "+T[k2]+" "+e); } }
  w("DONE_OK");
}catch(err){ w("ERR: "+err.toString()+" line "+err.line); try{app.endUndoGroup();}catch(e){} }
LOGF.close();
