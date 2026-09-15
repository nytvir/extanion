app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);
(function(){ var LOGF=new File("D:/edit/img3229/knob_log.txt"); LOGF.open("w"); function W(s){ LOGF.writeln(s); LOGF.close(); LOGF.open("a"); }
try{ var comp=null; for (var i=1;i<=app.project.numItems;i++){ var it=app.project.item(i); if (it instanceof CompItem && it.name==="IMG_3229_SUBTITR") comp=it; }
  if (!comp){ if (!app.project.file && app.project.dirty && app.project.numItems>0) throw new Error("nomsiz loyihada ish bor"); if (app.project.file && app.project.dirty) app.project.save(); app.open(new File("D:/edit/img3229/img3229.aep")); for (var j=1;j<=app.project.numItems;j++){ var it2=app.project.item(j); if (it2 instanceof CompItem && it2.name==="IMG_3229_SUBTITR") comp=it2; } }
  if (!comp) throw new Error("comp yoq");
  var L=null; for (var k=1;k<=comp.numLayers;k++) if (comp.layer(k).name==="[ISLAND] toggle") L=comp.layer(k);
  if (!L) throw new Error("toggle layer yoq");
  var root=L.property("ADBE Root Vectors Group"); var knob=root.property("knob"); W("before knob index "+knob.propertyIndex+" of "+root.numProperties);
  knob.moveTo(1); W("after knob index "+root.property("knob").propertyIndex);
  app.project.save(); W("saved");
  try{ comp.saveFrameToPng(3.2,new File("D:/edit/img3229/knob_on.png")); $.sleep(2500); comp.saveFrameToPng(4.7,new File("D:/edit/img3229/knob_off.png")); $.sleep(2500); W("frames"); }catch(ef){ W("frame err "+ef); }
  var p=app.project; while (p.renderQueue.numItems>0) p.renderQueue.item(1).remove();
  var ri=p.renderQueue.items.add(comp); try{ ri.outputModule(1).applyTemplate("Lossless"); }catch(et){}
  ri.outputModule(1).file=new File("D:/edit/img3229/raw_island.avi"); W("render boshlandi"); p.renderQueue.render(); p.save(); W("DONE_OK");
}catch(e){ W("ERR line "+e.line+": "+e); } LOGF.close(); })();
