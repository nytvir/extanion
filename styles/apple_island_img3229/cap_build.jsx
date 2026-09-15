// IMG_3229 - faqat subtitr, 1-uslub "Toza ingichka" (train_subtitr.html bo'yicha). Video o'zgarmaydi.
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);
(function(){
  var LOGF=new File("D:/edit/img3229/build_log.txt"); LOGF.encoding="UTF-8"; LOGF.open("w");
  function W(s){ LOGF.writeln(s); LOGF.close(); LOGF.open("a"); }
  try{ app.beginSuppressDialogs(); }catch(e){}
  try{
    if (app.project && app.project.file && app.project.dirty){ app.project.save(); W("ochiq loyiha saqlandi: "+app.project.file.fsName); }
    app.newProject(); var p=app.project; W("new project");
    function easeK(pr,k,inf){ var e=new KeyframeEase(0,inf||75); try{ pr.setTemporalEaseAtKey(k,[e,e],[e,e]); }catch(x){ try{ pr.setTemporalEaseAtKey(k,[e],[e]); }catch(y){ try{ pr.setTemporalEaseAtKey(k,[e,e,e],[e,e,e]); }catch(z){} } } }
    function setP(fx,re,val){ if (!fx) return null; var n=0; try{ n=fx.numProperties; }catch(e0){ return null; } for (var i=1;i<=n;i++){ var pr=null; try{ pr=fx.property(i); if (re.test(pr.name) && pr.propertyValueType!==PropertyValueType.NO_VALUE){ pr.setValue(val); return pr; } }catch(e){} } W("  setP miss "+String(re)); return null; }

    // ---- so'zlar ----
    var wf=new File("D:/edit/img3229/words.srt"); wf.encoding="UTF-8"; wf.open("r"); var raw=wf.read(); wf.close();
    function ts(q){ var mm=q.match(/(\d+):(\d+):(\d+)[,.](\d+)/); return mm? parseInt(mm[1],10)*3600+parseInt(mm[2],10)*60+parseInt(mm[3],10)+parseInt(mm[4],10)/1000 : -1; }
    var WD=[], bl=raw.split(/\r?\n\r?\n/);
    for (var bi=0;bi<bl.length;bi++){ var ln=bl[bi].replace(/^\s+/,"").split(/\r?\n/); if (ln.length<3) continue; var tm=ln[1].split("-->"); if (tm.length<2) continue; var a=ts(tm[0]), b=ts(tm[1]); var rw=ln.slice(2).join(" ");
      if (a<0 || !rw.replace(/\s/g,"")) continue; var lead=/^\s/.test(rw); var w=rw.replace(/^\s+|\s+$/g,"");
      if (!lead && WD.length){ WD[WD.length-1].raw+=w; WD[WD.length-1].b=b; } else WD.push({a:a,b:b,raw:w}); }
    for (var i=0;i<WD.length;i++){ WD[i].end=/[.?!]["']?$/.test(WD[i].raw); WD[i].w=WD[i].raw.replace(/[.,!?;:]+["']?$/,""); }
    W("words "+WD.length);

    // ---- gaplar -> teng 3-4 so'zlik bo'laklar ----
    // gap: . ? ! va vergul chegarasi; bo'lak: bir qatorga 32 belgigacha, harf soni bo'yicha teng
    var sents=[], cur=[];
    for (var j=0;j<WD.length;j++){ if (cur.length && WD[j].a-WD[j-1].b>0.6){ sents.push(cur); cur=[]; } cur.push(WD[j]); if (WD[j].end || /,$/.test(WD[j].raw)){ sents.push(cur); cur=[]; } }
    if (cur.length) sents.push(cur);
    var CH=[], MAXC=32;
    for (var s=0;s<sents.length;s++){ var ws=sents[s], cum=[0], tot=0;
      for (var c0=0;c0<ws.length;c0++){ tot+=ws[c0].w.length+(c0?1:0); cum.push(tot); }
      var n=Math.max(1,Math.ceil(tot/MAXC)); if (n>ws.length) n=ws.length;
      var cuts=[0], lastCut=0;
      for (var bnd=1;bnd<n;bnd++){ var target=tot*bnd/n, best=-1, bd=1e9; for (var wi=lastCut+1; wi<=ws.length-(n-bnd); wi++){ var dd=Math.abs(cum[wi]-target); if (dd<bd){ bd=dd; best=wi; } } cuts.push(best); lastCut=best; }
      cuts.push(ws.length);
      for (var c=0;c<n;c++) CH.push({ws:ws.slice(cuts[c],cuts[c+1]), last:(c===n-1)}); }

    // ---- kompozitsiya ----
    var vItem=p.importFile(new ImportOptions(new File("C:/Users/nytvi/Downloads/Telegram Desktop/IMG_3229.MOV")));
    var CW=vItem.width, CHh=vItem.height, FPS=29.97, DUR=vItem.duration; var K=CW/1080; try{ vItem.mainSource.conformFrameRate=29.97; }catch(ecf){ W("conform skip "+ecf); }
    W("video "+CW+"x"+CHh+" fps "+FPS+" dur "+DUR);
    var comp=p.items.addComp("IMG_3229_SUBTITR",CW,CHh,1,DUR,FPS);
    var vl=comp.layers.add(vItem); vl.name="[VIDEO] IMG_3229";

    var cap=comp.layers.addNull(DUR); cap.name="[CAP] MOVE  <- surish/kattalashtirish"; cap.label=9;
    cap.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]); cap.property("ADBE Transform Group").property("ADBE Position").setValue([540*K,1415*K]);

    var list=[];
    for (var q=0;q<CH.length;q++){ var ch=CH[q], nx=CH[q+1], first=ch.ws[0], lastW=ch.ws[ch.ws.length-1];
      var tA=Math.max(0,first.a-0.05), tE;
      if (!nx) tE=Math.min(DUR,lastW.b+1.5); else if (ch.last) tE=Math.min(nx.ws[0].a-0.05,lastW.b+0.9); else tE=nx.ws[0].a-0.05;
      if (tE-tA<0.15) tE=tA+0.15;
      var txt=[]; for (var u=0;u<ch.ws.length;u++) txt.push(ch.ws[u].w); txt=txt.join(" ");
      var L=comp.layers.addText(txt); L.name="[Cap] "+(q+1)+" "+txt; var sp=L.property("Source Text"), td=sp.value; td.resetCharStyle();
      var size=58*K; td.fontSize=size; td.applyFill=true; td.fillColor=[1,1,1]; td.applyStroke=false; try{ td.font="SegoeUI-Light"; }catch(ef){} td.tracking=5; td.justification=ParagraphJustification.CENTER_JUSTIFY; sp.setValue(td);
      var r=L.sourceRectAtTime(0,false);
      if (r.width>960*K){ td=sp.value; td.fontSize=size*960*K/r.width; sp.setValue(td); r=L.sourceRectAtTime(0,false); }
      L.parent=cap; var y0=-(r.top+r.height/2);
      var pos=L.property("ADBE Transform Group").property("ADBE Position"); pos.setValue([0,y0]);
      L.inPoint=tA; L.outPoint=tE;
      pos.setValueAtTime(tA,[0,y0+12*K]); pos.setValueAtTime(tA+0.32,[0,y0]); easeK(pos,2,80);
      var op=L.property("ADBE Transform Group").property("ADBE Opacity"); op.setValueAtTime(tA,0); op.setValueAtTime(tA+0.22,100); if (tE-0.15>tA+0.22){ op.setValueAtTime(tE-0.15,100); op.setValueAtTime(tE,0); }
      try{ var gb=L.property("ADBE Effect Parade").addProperty("ADBE Gaussian Blur 2"); var bp=gb.property("ADBE Gaussian Blur 2-0001"); bp.setValueAtTime(tA,3*K); bp.setValueAtTime(tA+0.3,0); }catch(eb){ W("blur err "+eb); }
      try{ var ds=L.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow"); setP(ds,/Shadow Color/,[0,0,0]); var dop=setP(ds,/^Opacity$/,65); try{ if (dop && dop.hasMax && dop.maxValue>100) dop.setValue(166); }catch(e3){} setP(ds,/Direction/,180); setP(ds,/Distance/,2*K); setP(ds,/Softness/,30*K); }catch(ed){ W("shadow err "+ed); }
      list.push(tA.toFixed(2)+"-"+tE.toFixed(2)+" "+txt); }
    cap.moveToBeginning();
    W("chunks "+CH.length+" font="+comp.layer(2).property("Source Text").value.font); W(list.join("\n"));

    p.save(new File("D:/edit/img3229/img3229.aep")); W("saved aep");

    // kadrlar: har bo'lak o'rtasi (5 tagacha)
    var pick=[]; for (var f=0;f<CH.length;f+=Math.max(1,Math.floor(CH.length/5))){ var c2=CH[f]; pick.push((c2.ws[0].a+c2.ws[c2.ws.length-1].b)/2+0.2); if (pick.length>=5) break; }
    for (var fk=0;fk<pick.length;fk++){ try{ comp.saveFrameToPng(pick[fk], new File("D:/edit/img3229/f"+(fk+1)+".png")); $.sleep(2500); W("frame "+pick[fk].toFixed(2)); }catch(e){ W("frame err "+e); } }

    // render
    while (p.renderQueue.numItems>0) p.renderQueue.item(1).remove();
    var ri=p.renderQueue.items.add(comp); try{ ri.outputModule(1).applyTemplate("Lossless"); }catch(et){ W("template skip "+et); }
    ri.outputModule(1).file=new File("D:/edit/img3229/raw.avi"); W("render boshlandi"); p.renderQueue.render(); p.save(); W("render tugadi");
    W("DONE_OK");
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); }
  try{ app.endSuppressDialogs(false); }catch(e){}
  LOGF.close();
})();
