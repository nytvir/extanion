// IMG_3229 - Dynamic Island UI (ui_kichik.html 1-variant) mavjud subtitrli loyihaga qo'shiladi. Subtitrga tegilmaydi.
app.preferences.savePrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY", 1);
(function(){
  var LOGF=new File("D:/edit/img3229/island_log.txt"); LOGF.encoding="UTF-8"; LOGF.open("w");
  function W(s){ LOGF.writeln(s); LOGF.close(); LOGF.open("a"); }
  try{ app.beginSuppressDialogs(); }catch(e){}
  try{
    function findComp(){ for (var i=1;i<=app.project.numItems;i++){ var it=app.project.item(i); if (it instanceof CompItem && it.name==="IMG_3229_SUBTITR") return it; } return null; }
    var comp=findComp();
    if (!comp){ W("ochiq: "+(app.project.file?app.project.file.fsName:"untitled")+" dirty="+app.project.dirty);
      if (!app.project.file && app.project.dirty && app.project.numItems>0) throw new Error("nomsiz loyihada saqlanmagan ish bor, tegmadim");
      if (app.project.file && app.project.dirty){ app.project.save(); W("ochiq loyiha saqlandi"); }
      app.open(new File("D:/edit/img3229/img3229.aep")); comp=findComp(); W("img3229.aep ochildi"); }
    if (!comp) throw new Error("IMG_3229_SUBTITR comp topilmadi");
    var p=app.project, DUR=comp.duration;
    app.beginUndoGroup("Dynamic Island");
    for (var r=comp.numLayers;r>=1;r--){ if (comp.layer(r).name.indexOf("[ISLAND]")===0) comp.layer(r).remove(); }

    function easeK(pr,k,inf){ var e=new KeyframeEase(0,inf||75); try{ pr.setTemporalEaseAtKey(k,[e,e],[e,e]); }catch(x){ try{ pr.setTemporalEaseAtKey(k,[e],[e]); }catch(y){} } }
    function findP(fx,re){ var n=0; try{ n=fx.numProperties; }catch(e){ return null; } for (var i=1;i<=n;i++){ try{ var pr=fx.property(i); if (re.test(pr.name)) return pr; }catch(e2){} } return null; }
    function setP(fx,re,val){ var pr=findP(fx,re); if (!pr){ W("  miss "+String(re)); return null; } try{ pr.setValue(val); }catch(e){ W("  set err "+String(re)+" "+e); } return pr; }
    function H(h){ return [parseInt(h.substr(1,2),16)/255, parseInt(h.substr(3,2),16)/255, parseInt(h.substr(5,2),16)/255]; }

    var V='var v=thisComp.layer("[ISLAND] CTRL").effect("v")("Slider")/100; var w=300+400*v, h=78+34*v; ';
    var CO=V+'Math.pow(v,2.5)*100';
    var SM='function sm(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);} function eo(x){x=Math.max(0,Math.min(1,x));return 1-Math.pow(1-x,3);} ';
    var BEATS=[["alarm",0.05,2.35],["comfort",2.35,4.95],["safety",4.95,7.51],["heart",7.51,12.13],["train",12.13,17.26],["end",17.53,Math.min(21.7,DUR)]];

    // boshqaruv: v slider
    var ctrl=comp.layers.addNull(DUR); ctrl.name="[ISLAND] CTRL"; ctrl.label=11;
    var sl=ctrl.property("ADBE Effect Parade").addProperty("ADBE Slider Control"); sl.name="v"; var sv=sl.property("ADBE Slider Control-0001");
    for (var b=0;b<BEATS.length;b++){ var A=BEATS[b][1], B=BEATS[b][2]; sv.setValueAtTime(A,0); sv.setValueAtTime(A+0.5,100); sv.setValueAtTime(B-0.4,100); sv.setValueAtTime(B,0); }
    for (var kk=1;kk<=sv.numKeys;kk++) easeK(sv,kk,70);
    var mv=comp.layers.addNull(DUR); mv.name="[ISLAND] MOVE  <- surish/kattalashtirish"; mv.label=9;
    mv.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]); mv.property("ADBE Transform Group").property("ADBE Position").setValue([0,0]);
    var made=[];
    function own(L){ L.parent=mv; made.push(L); return L; }

    // kapsula
    (function(){ var L=comp.layers.addShape(); L.name="[ISLAND] pill"; var tr=L.property("ADBE Transform Group"); tr.property("ADBE Anchor Point").setValue([0,0]); tr.property("ADBE Position").setValue([0,0]);
      var rc=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Shape - Rect");
      rc.property("ADBE Vector Rect Size").expression=V+"[w,h]"; rc.property("ADBE Vector Rect Position").expression=V+"[540,150+h/2]"; rc.property("ADBE Vector Rect Roundness").expression=V+"h/2";
      var st=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Stroke"); st.property("ADBE Vector Stroke Color").setValue([1,1,1]); st.property("ADBE Vector Stroke Width").setValue(1.5); st.property("ADBE Vector Stroke Opacity").setValue(8);
      var fl=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Graphic - Fill"); fl.property("ADBE Vector Fill Color").setValue([0,0,0]);
      tr.property("ADBE Opacity").expression=V+"Math.min(1,v*4)*100";
      var ds=L.property("ADBE Effect Parade").addProperty("ADBE Drop Shadow"); setP(ds,/Shadow Color/,[0,0,0]); var o=setP(ds,/^Opacity$/,55); try{ if (o && o.hasMax && o.maxValue>100) o.setValue(140); }catch(e){} setP(ds,/Direction/,180); setP(ds,/Distance/,12); setP(ds,/Softness/,40);
      own(L); })();

    function mkT(str,font,size,col,just){ var L=comp.layers.addText(str); var sp=L.property("Source Text"), td=sp.value; td.resetCharStyle(); td.fontSize=size; td.applyFill=true; td.fillColor=col; td.applyStroke=false; try{ td.font=font; }catch(e){}
      td.justification=(just==="r")?ParagraphJustification.RIGHT_JUSTIFY:ParagraphJustification.LEFT_JUSTIFY; sp.setValue(td); L.property("ADBE Transform Group").property("ADBE Anchor Point").setValue([0,0]); return L; }
    function icon(id,A,B,opExpr){ var it=p.importFile(new ImportOptions(new File("D:/edit/img3229/icons/"+id+".png"))); var L=comp.layers.add(it); L.name="[ISLAND] icon "+id; L.inPoint=A; L.outPoint=B;
      var tr=L.property("ADBE Transform Group"); tr.property("ADBE Scale").setValue([50,50]); tr.property("ADBE Position").expression=V+"[540-w/2+60, 150+h/2]"; tr.property("ADBE Opacity").expression=opExpr||CO; return own(L); }
    function title(str,A,B){ var L=mkT(str,"SegoeUI-Semibold",32,[1,1,1],"l"); L.name="[ISLAND] title "+str; L.inPoint=A; L.outPoint=B;
      L.property("ADBE Transform Group").property("ADBE Position").expression=V+"[540-w/2+108, 150+h/2+11]"; L.property("ADBE Transform Group").property("ADBE Opacity").expression=CO; return own(L); }
    function value(str,A,B,textExpr,colExpr,rightInset){ var L=mkT(str,"SegoeUI-Semibold",40,[1,1,1],"r"); L.name="[ISLAND] value "+str; L.inPoint=A; L.outPoint=B;
      L.property("ADBE Transform Group").property("ADBE Position").expression=V+"[540+w/2-"+(30+(rightInset||0))+", 150+h/2+14]"; L.property("ADBE Transform Group").property("ADBE Opacity").expression=CO;
      if (textExpr) L.property("Source Text").expression=textExpr;
      if (colExpr){ var f=L.property("ADBE Effect Parade").addProperty("ADBE Fill"); var cp=findP(f,/^Color$/); if (cp) cp.expression=colExpr; else W("  fill color miss"); }
      return own(L); }

    // 1 alarm
    icon("alarm",0.05,2.35); title("Tomorrow",0.05,2.35); value("5:30",0.05,2.35);
    // 2 comfort: tugma o'chadi
    var OFF=SM+"var off=sm((time-4.05)/0.35); ";
    icon("comfort",2.35,4.95,OFF+V+"Math.pow(v,2.5)*100*(1-off)"); icon("comfort_off",2.35,4.95,OFF+V+"Math.pow(v,2.5)*100*off");
    title("Comfort mode",2.35,4.95);
    (function(){ var L=comp.layers.addShape(); L.name="[ISLAND] toggle"; var tr=L.property("ADBE Transform Group"); tr.property("ADBE Anchor Point").setValue([0,0]); tr.property("ADBE Position").setValue([0,0]); L.inPoint=2.35; L.outPoint=4.95;
      var g1=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); g1.name="track";
      var r1=L.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect"); r1.property("ADBE Vector Rect Size").setValue([66,40]); r1.property("ADBE Vector Rect Roundness").setValue(20);
      r1.property("ADBE Vector Rect Position").expression=V+"[540+w/2-30-33, 150+h/2]";
      var f1=L.property("ADBE Root Vectors Group").property(1).property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill"); f1.property("ADBE Vector Fill Color").expression=OFF+"off<0.5?[0.188,0.82,0.345,1]:[0.35,0.35,0.37,1]";
      var g2=L.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group"); g2.name="knob";
      var knobGroup=L.property("ADBE Root Vectors Group").property("knob");
      var el=knobGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse"); el.property("ADBE Vector Ellipse Size").setValue([32,32]);
      el.property("ADBE Vector Ellipse Position").expression=V+OFF+"[540+w/2-30-66+4+16+26*(1-off), 150+h/2]";
      knobGroup.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill").property("ADBE Vector Fill Color").setValue([1,1,1]);
      tr.property("ADBE Opacity").expression=CO; own(L); })();
    // 3 safety: 100% -> 0%
    var SP=SM+"var sp=eo((time-5.7)/1.0); var pc=Math.round(100*(1-sp)); ";
    icon("safety",4.95,7.51,SP+V+"Math.pow(v,2.5)*100*(pc>0?1:0)"); icon("safety_bad",4.95,7.51,SP+V+"Math.pow(v,2.5)*100*(pc>0?0:1)");
    title("Safety",4.95,7.51); value("100%",4.95,7.51,SP+"pc+'%'",SP+"pc===0?[1,0.271,0.227,1]:[1,1,1,1]");
    // 4 heart: 68 -> 142 BPM
    var HB=SM+"var hb=eo((time-9.1)/1.4); ";
    icon("heart",7.51,12.13); title("Heart rate",7.51,12.13);
    var unit=mkT("BPM","SegoeUI-Semibold",17,[1,1,1],"r"); unit.name="[ISLAND] unit BPM"; unit.inPoint=7.51; unit.outPoint=12.13;
    unit.property("ADBE Transform Group").property("ADBE Position").expression=V+"[540+w/2-30, 150+h/2+14]"; unit.property("ADBE Transform Group").property("ADBE Opacity").expression=V+"Math.pow(v,2.5)*55"; own(unit);
    var uw=unit.sourceRectAtTime(8,false).width;
    value("68",7.51,12.13,HB+"String(Math.round(68+74*hb))",HB+"hb>0.99?[1,0.216,0.373,1]:[1,1,1,1]",uw+8);
    // 5 training: Casual -> All in
    var SW=SM+"var sw=sm((time-14.3)/0.4); ";
    icon("train",12.13,17.26); title("Training",12.13,17.26); value("Casual",12.13,17.26,SW+"sw>0.5?'All in':'Casual'",SW+"sw>0.5?[1,0.624,0.039,1]:[1,1,1,1]");
    // 6 Day 1
    var E=BEATS[5]; icon("end",E[1],E[2]); title("Day 1",E[1],E[2]); value("Started",E[1],E[2]);

    mv.moveToBeginning(); ctrl.moveToBeginning();
    app.endUndoGroup();
    W("island layers "+made.length);
    var nErr=0; function scan(pg,path,Ln){ for (var q=1;q<=pg.numProperties;q++){ var pr=pg.property(q); try{ if (pr.propertyType===PropertyType.PROPERTY){ if (pr.expressionEnabled && pr.expressionError){ nErr++; W("EXPR ERR: "+Ln+" > "+path+"/"+pr.name+" : "+pr.expressionError); } } else scan(pr,path+"/"+pr.name,Ln); }catch(e2){} } }
    for (var z=0;z<made.length;z++) scan(made[z],"",made[z].name); W("expr errors: "+nErr);
    p.save(); W("saved");

    var T=[1.4,4.6,6.9,10.8,15.8,19.4];
    for (var fk=0;fk<T.length;fk++){ try{ comp.saveFrameToPng(T[fk], new File("D:/edit/img3229/isl"+(fk+1)+".png")); $.sleep(2500); W("frame "+T[fk]); }catch(e){ W("frame err "+e); } }

    while (p.renderQueue.numItems>0) p.renderQueue.item(1).remove();
    var ri=p.renderQueue.items.add(comp); try{ ri.outputModule(1).applyTemplate("Lossless"); }catch(et){ W("template skip "+et); }
    ri.outputModule(1).file=new File("D:/edit/img3229/raw_island.avi"); W("render boshlandi"); p.renderQueue.render(); p.save(); W("render tugadi");
    W("DONE_OK");
  }catch(e){ W("ERR line "+e.line+": "+e.toString()); }
  try{ app.endSuppressDialogs(false); }catch(e){}
  LOGF.close();
})();
