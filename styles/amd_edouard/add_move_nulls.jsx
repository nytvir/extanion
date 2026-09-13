var LOG=new File("D:/edit/amd_clone/move_log.txt"); LOG.open("w"); function w(s){LOG.write(s+"\n");}
try{
  var c=null; for(var i=1;i<=app.project.numItems;i++){var it=app.project.item(i); if(it instanceof CompItem&&it.name==="AMD_PICK") c=it;}
  if(!c){ app.open(new File("D:/edit/amd_clone/amd_pick.aep")); for(var i2=1;i2<=app.project.numItems;i2++){var it2=app.project.item(i2); if(it2 instanceof CompItem&&it2.name==="AMD_PICK") c=it2;} }
  if(!c) throw new Error("comp yo'q");
  app.beginUndoGroup("MOVE nulls");
  function tr(L){ return L.property("ADBE Transform Group"); }
  function mkMove(tag,cx,cy,t0,t1){ var n=c.layers.addNull(c.duration); n.name=tag+" MOVE  <- surish/kattalashtirish"; n.label=9; tr(n).property("ADBE Anchor Point").setValue([cx,cy]); tr(n).property("ADBE Position").setValue([cx,cy]); n.inPoint=t0; n.outPoint=t1; return n; }
  var done=0;
  // har CTRL null ustiga keysiz MOVE null
  var ctrls=[]; for(var j=1;j<=c.numLayers;j++){ var L=c.layer(j); if(/ CTRL$/.test(L.name)) ctrls.push(L); }
  for(var k=0;k<ctrls.length;k++){ var L=ctrls[k]; if(L.parent) continue; var tag=L.name.replace(/ CTRL$/,""); var a=tr(L).property("ADBE Anchor Point").value; var m=mkMove(tag,a[0],a[1],L.inPoint,L.outPoint); m.moveBefore(L); L.parent=m; done++; w("MOVE: "+tag); }
  // 1C stepper: alohida qatlamlar -> bitta MOVE
  var st=[]; for(var q=1;q<=c.numLayers;q++){ var L2=c.layer(q); if(L2.name.indexOf("[1C]")===0 && !L2.parent) st.push(L2); }
  if(st.length){ var m1=mkMove("[1C]",540,210,st[0].inPoint,st[0].outPoint); m1.moveBefore(st[0]); for(var s=0;s<st.length;s++) st[s].parent=m1; w("MOVE: [1C] ("+st.length+" qatlam)"); done++; }
  // subtitr
  var cap=null; for(var r=1;r<=c.numLayers;r++) if(c.layer(r).name==="[CAP] words") cap=c.layer(r);
  if(cap && !cap.parent){ var mc=mkMove("[CAP]",540,1690,0,c.duration); mc.moveBefore(cap); cap.parent=mc; w("MOVE: [CAP]"); done++; }
  app.endUndoGroup();
  app.project.save(new File("D:/edit/amd_clone/amd_pick.aep"));
  w("jami MOVE: "+done); w("DONE_OK");
}catch(e){ w("ERR "+e); } LOG.close();
