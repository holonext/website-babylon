var demo = {
  scene: "holotest",
  incremental: false,
  binary: false,
  doNotUseCDN: false,
  collisions: true,
  offline: true,
  freeze: true,
  onload: function () {
      function openInNewTab(url) {
              var win = window.open(url, '_blank');
              win.focus();
      }
      console.log(scene.activeCamera)
     /*  scene.getMeshByName("duvarvezemin").checkCollisions = true;
      console.log(scene.getMeshByName("duvarvezemin").checkCollisions)
      for(let i=0;i<scene.meshes.length;i++){
          scene.meshes[i].checkCollisions=true;
      } */
      scene.activeCamera.speed = 0.01;
      scene.activeCamera.position._x =0.31
      scene.activeCamera.position._y =0.25
      scene.activeCamera.position._z =-0.34
      console.log(scene)
      for(let i=0;i<scene.meshes.length;i++){
              scene.meshes[i].checkCollisions=true;
      }
      /* scene.getMeshByName("ortaloca").checkCollisions=true;
      scene.getMeshByName("duvarvezemin").checkCollisions=true; */
      scene.gravity = new BABYLON.Vector3(0, -0.09, 0);
      scene.activeCamera.applyGravity = true;
      scene.collisionsEnabled = true;
      scene.activeCamera.checkCollisions = true;
      scene.activeCamera.ellipsoid = new BABYLON.Vector3(0.1, 0.1, 0.1);

      var meshObj = scene.getMeshByName("telve")
      var mainStage = scene.getMeshByName("duvarvezemin")
      
      // Activate full-screen 2d GUI  
      var adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("interface", true)

      var mainbox = new BABYLON.GUI.Rectangle();
  mainbox.height = "20%";
  mainbox.width = "15%";
  mainbox.paddingRight = "2px";
  mainbox.cornerRadius = 4;
  mainbox.color = "red";
  mainbox.left = "-170px";
  mainbox.thickness = 8;
  //mainbox.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  // mainbox.background = "#221100";
  adt.addControl(mainbox);
  mainbox.isVisible = false;
  // console.log(mainbox);

  var header = new BABYLON.GUI.Rectangle();
  header.height = "20px";
  header.width = "96%";
  // header.top = "-43%";
  header.left = "0%";
  header.cornerRadius = 4;
  header.color = "white";
  header.thickness = 1;
  header.background = "gray";
  header.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  mainbox.addControl(header);
  // console.log(header);

  var headertext = new BABYLON.GUI.TextBlock();
  headertext.text = "TKM 9961 B Telve";
  headertext.color = "white";
  headertext.fontSize = 12;
  headertext.textWrapping = true;
  header.addControl(headertext);

  var contentrect = new BABYLON.GUI.Rectangle();
  contentrect.height = "80%";
  contentrect.width = "95%";
  // contentrect.top = "7%";
  // contentrect.left = "0%";
  contentrect.cornerRadius = 4;
  contentrect.color = "white";
  contentrect.thickness = 1;
  contentrect.background = "gray      ";
  mainbox.addControl(contentrect);
  contentrect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  // console.log(footer);
  // contentrect.adaptHeightToChildren = true;
  // mainbox.adaptHeightToChildren = true;

  var contentpanel = new BABYLON.GUI.StackPanel("contentpanel");
  contentpanel.isVertical = true;
  // contentpanel.height = "99%";
  // contentpanel.width = "95%";
  // contentpanel.top = "0%";
  contentrect.addControl(contentpanel);

  



  // var rectheight = "11%";
  // var rectwidth = "99%";
  var buttheight = "20px";
  var buttwidth = "97%";
  var but1rect;
  var butt1;
  var labels = ["Satın Al"];
  var buttons = [];
  var buttonrects = [];
//-----------------------------------------------------
  for (var i=0;i<1;i++) {
      butt1 = BABYLON.GUI.Button.CreateSimpleButton("butt"+i, "");
      butt1._children[0].text = labels[i];
      butt1.width = buttwidth;
      butt1.height = buttheight;
      butt1.fontSize = 12;
      butt1.fontStyle = "bold";
      butt1.fontFamily = "Georgia";
      butt1.background = "red";
      butt1.cornerRadius = 4;
      butt1.paddingBottom = "2px";
      // butt1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
      // but1rect.addControl(butt1);
      buttons.push(butt1);
  }

  buttons[0].onPointerDownObservable.add(function(d, s) {
      openInNewTab("https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama")
      //window.open("https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama",'_blank')
      //window.location.href = "https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama"
      s.currentTarget.parent.parent.parent.linkedMesh.material.diffuseColor = BABYLON.Color3.Random();        
  });
  buttons[0].onPointerEnterObservable.add(function() { canvas.style.cursor = "pointer"; });
  buttons[0].onPointerOutObservable.add(function() { canvas.style.cursor = "auto"; });


  for (var i=0;i<1;i++) {
      // buttonrects[i].addControl(buttons[i]);
      contentpanel.addControl(buttons[i]);
  }

  


// Activate full-screen 2d GUI  
var adt2 = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("interface2", true)

var mainbox2 = new BABYLON.GUI.Rectangle();
mainbox2.height = "20%";
mainbox2.width = "15%";
mainbox2.paddingRight = "2px";
mainbox2.cornerRadius = 4;
mainbox2.color = "red";
mainbox2.thickness = 8;
//console.log(mainbox2._horizontalAlignment)
//console.log(mainbox._horizontalAlignment)
//mainbox2._horizontalAlignment = 2;
//console.log(mainbox2._horizontalAlignment)
//mainbox2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
mainbox2.left = "170px";
// mainbox.background = "#221100";
adt2.addControl(mainbox2);
mainbox2.isVisible = false;
// console.log(mainbox);

console.log(mainbox2)
console.log(mainbox)

var header2 = new BABYLON.GUI.Rectangle();
header2.height = "20px";
header2.width = "96%";
// header.top = "-43%";
header2.left = "0%";
header2.cornerRadius = 4;
header2.color = "white";
header2.thickness = 1;
header2.background = "gray";
header2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
mainbox2.addControl(header2);
// console.log(header);

var headertext2 = new BABYLON.GUI.TextBlock();
headertext2.text = "Renk Seçiniz";
headertext2.color = "white";
headertext2.fontSize = 12;
headertext2.textWrapping = true;
header2.addControl(headertext2);

var contentrect2 = new BABYLON.GUI.Rectangle();
contentrect2.height = "80%";
contentrect2.width = "95%";
// contentrect.top = "7%";
// contentrect.left = "0%";
contentrect2.cornerRadius = 4;
contentrect2.color = "white";
contentrect2.thickness = 1;
contentrect2.background = "gray";
mainbox2.addControl(contentrect2);
contentrect2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
// console.log(footer);
// contentrect.adaptHeightToChildren = true;
// mainbox.adaptHeightToChildren = true;

var contentpanel2 = new BABYLON.GUI.StackPanel("contentpanel2");
contentpanel2.isVertical = true;
// contentpanel.height = "99%";
// contentpanel.width = "95%";
// contentpanel.top = "0%";
contentrect2.addControl(contentpanel2);


// var rectheight = "11%";
// var rectwidth = "99%";
var buttheight2 = "20px";
var buttwidth2 = "97%";
var but1rect2;
var butt12;
var labels2 = ["Bronz", "Kırmızı", "Siyah-Beyaz"];
var buttons2 = [];
var buttonrects2 = [];
//-----------------------------------------------------
for (var i=0;i<3;i++) {
butt12 = BABYLON.GUI.Button.CreateSimpleButton("butt2"+i, "");
butt12._children[0].text = labels2[i];
butt12.width = buttwidth2;
butt12.height = buttheight2;
butt12.fontSize = 12;
butt12.fontStyle = "bold";
butt12.fontFamily = "Georgia";
butt12.background = "red";
butt12.cornerRadius = 4;
butt12.paddingBottom = "2px";
// butt1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
// but1rect.addControl(butt1);
buttons2.push(butt12);
}

buttons2[0].onPointerDownObservable.add(function(d, s) {
//openInNewTab("https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama")
//window.open("https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama",'_blank')
//window.location.href = "https://www.arcelik.com.tr/turk-kahve-makinesi/tkm-9961-b-telve-icecek-hazirlama"
for(let i=0;i<scene.textures.length;i++){
      if(scene.textures[i].name==="teltosubsyeni_rose_BaseColor.png"){
          scene.getMaterialByName("rengidegisecekmat").baseTexture=scene.textures[i];
      }
}        
});
buttons2[0].onPointerEnterObservable.add(function() { canvas.style.cursor = "pointer"; });
buttons2[0].onPointerOutObservable.add(function() { canvas.style.cursor = "auto"; });

buttons2[1].onPointerDownObservable.add(function(d, s) {
      for(let i=0;i<scene.textures.length;i++){
              if(scene.textures[i].name==="kirmizi_BaseColor.png"){
                  scene.getMaterialByName("rengidegisecekmat").baseTexture=scene.textures[i];
              }
      }     
});
buttons2[1].onPointerEnterObservable.add(function() { canvas.style.cursor = "pointer"; });
buttons2[1].onPointerOutObservable.add(function() { canvas.style.cursor = "auto"; });

buttons2[2].onPointerDownObservable.add(function(d, s) {
//console.log(scene.textures)
          //console.log(scene.getTextureByName("acikgri"))
          for(let i=0;i<scene.textures.length;i++){
                  //console.log(scene.textures[i].name)
                  if(scene.textures[i].name==="acikgri.png"){
                      console.log("geldi")
                      scene.getMaterialByName("rengidegisecekmat").baseTexture=scene.textures[i];
                  }
          }
          console.log(scene.getMaterialByName("rengidegisecekmat"))
          //console.log(pickResult.pickedMesh.meshMap.name);       
});
buttons2[2].onPointerEnterObservable.add(function() { canvas.style.cursor = "pointer"; });
buttons2[2].onPointerOutObservable.add(function() { canvas.style.cursor = "auto"; });



for (var i=0;i<3;i++) {
// buttonrects[i].addControl(buttons[i]);
contentpanel2.addControl(buttons2[i]);
}


// -----------------------------------------------------------------------------
  //  action manager area

  var overMesh = function(bjsEvent) {
      console.log(bjsEvent);
      mainbox2.isVisible=true;
      mainbox.isVisible = true;
      mainbox.linkWithMesh(bjsEvent.meshUnderPointer)
      mainbox2.linkWithMesh(bjsEvent.meshUnderPointer)
      mainbox.linkOffsetX = -180;
      mainbox2.linkOffsetX = 180;
      /* if(bjsEvent.sourceEvent.button==0){

              mainbox.isVisible = true;
      mainbox._horizontalAlignment = 0
      mainbox._horizontalAlignment = 2
      mainbox.linkWithMesh(bjsEvent.meshUnderPointer);
      mainbox.linkOffsetY = -80;

      }

      else if(bjsEvent.sourceEvent.button ==2){
              mainbox2.isVisible = true;
      mainbox2.linkWithMesh(bjsEvent.meshUnderPointer);
      mainbox2.linkOffsetY = -80;
      } */
      
      
  }

  var exitMesh = function(bjsEvent) {
      // console.log(bjsEvent);
      // mainbox.isVisible = false;
      // mainbox.linkWithMesh(null);
  }

var prepareOverOut = function (mesh) {
  
      mesh.actionManager = new BABYLON.ActionManager(scene);
    
      mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger, overMesh
          )
      );
  
      mesh.actionManager.registerAction(
          new BABYLON.ExecuteCodeAction(
              BABYLON.ActionManager.OnPickTrigger, exitMesh
          )
      );
 
  }

prepareOverOut(meshObj);

  // click on ground to hide mesh-menu.
  mainStage.actionManager = new BABYLON.ActionManager(scene);
  
  mainStage.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickDownTrigger, function() {
              mainbox.isVisible = false;
              mainbox.linkWithMesh(null);
              mainbox2.isVisible = false;
              mainbox2.linkWithMesh(null);
          }
      )
  );


      

  }
};