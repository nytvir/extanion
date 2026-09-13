var LOG=new File("D:/edit/amd_clone/sfx_log.txt"); LOG.open("w"); function w(s){LOG.write(s+"\n");}
try{
  var c=null; for(var i=1;i<=app.project.numItems;i++){var it=app.project.item(i); if(it instanceof CompItem&&it.name==="AMD_PICK") c=it;}
  if(!c){ app.open(new File("D:/edit/amd_clone/amd_pick.aep")); for(var i2=1;i2<=app.project.numItems;i2++){var it2=app.project.item(i2); if(it2 instanceof CompItem&&it2.name==="AMD_PICK") c=it2;} }
  if(!c) throw new Error("comp yo'q");
  app.beginUndoGroup("SFX");
  for(var d=c.numLayers; d>=1; d--) if(c.layer(d).name.indexOf("[SFX]")===0) c.layer(d).remove();
  var f=new File("D:/edit/amd_clone/sfx_cues.txt"); f.open("r"); var raw=f.read(); f.close(); var lines=raw.split(/\r?\n/);
  var items={}, n=0;
  for(var k=0;k<lines.length;k++){ var p=lines[k].split("|"); if(p.length<3) continue; var t=parseFloat(p[0]), fn=p[1], g=parseFloat(p[2]);
    if(!items[fn]){ items[fn]=app.project.importFile(new ImportOptions(new File("D:/edit/nytvir_sfx/"+fn))); }
    var L=c.layers.add(items[fn]); L.name="[SFX] "+fn.replace(".wav","")+" @"+t.toFixed(2); L.startTime=t; L.label=13; L.moveToEnd();
    try{ L.property("ADBE Audio Group").property("ADBE Audio Levels").setValue([g,g]); }catch(e){}
    n++; }
  app.endUndoGroup(); app.project.save(new File("D:/edit/amd_clone/amd_pick.aep")); w("sfx layers: "+n); w("DONE_OK");
}catch(e){ w("ERR "+e); } LOG.close();
