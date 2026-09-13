app.preferences.savePrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY",1);
var LOG=new File("D:/edit/amd_clone/render_pick_log.txt"); LOG.open("w"); function w(s){LOG.write(s+"\n");LOG.close();LOG.open("a");}
function findComp(){ for(var i=1;i<=app.project.numItems;i++){var it=app.project.item(i); if(it instanceof CompItem && it.name==="AMD_PICK") return it;} return null; }
try{ var c=findComp(); if(!c){ app.open(new File("D:/edit/amd_clone/amd_pick.aep")); c=findComp(); }
 if(!c) throw new Error("comp yo'q");
 while(app.project.renderQueue.numItems>0) app.project.renderQueue.item(1).remove();
 var ri=app.project.renderQueue.items.add(c);
 try{ ri.outputModule(1).applyTemplate("Lossless"); }catch(e){ w("template skip: "+e); }
 ri.outputModule(1).file=new File("D:/edit/amd_clone/raw_pick.avi");
 w("render boshlandi"); app.project.renderQueue.render(); w("DONE_OK");
}catch(e){w("ERR: "+e.toString());} LOG.close();
