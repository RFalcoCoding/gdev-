gdjs.Title_32Scene_32Code = {};
gdjs.Title_32Scene_32Code.GDNewTiledSpriteObjects1= [];
gdjs.Title_32Scene_32Code.GDNewTiledSpriteObjects2= [];
gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDB_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1= [];
gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects2= [];
gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDC_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDO_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDK_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDP_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDA_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDR_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDT_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1= [];
gdjs.Title_32Scene_32Code.GDY_9595BlockObjects2= [];
gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1= [];
gdjs.Title_32Scene_32Code.GDStartGame_9595Objects2= [];


gdjs.Title_32Scene_32Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("B_Block"), gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("C_Block"), gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("K_Block"), gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("L_block_"), gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1);
gdjs.copyArray(runtimeScene.getObjects("O_Block"), gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1);
{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.8);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("A_Block"), gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("P_Block"), gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("R_Block"), gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("T_Block"), gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Y_Block"), gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1);
{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1[i].getBehavior("Object3D").turnAroundY(0.5);
}
}{for(var i = 0, len = gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1.length ;i < len;++i) {
    gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1[i].getBehavior("Object3D").turnAroundX(0.8);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGame_"), gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1.length;i<l;++i) {
    if ( gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1[k] = gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1[i];
        ++k;
    }
}
gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Scene-lvl1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Rush.aac", true, 70, 0.90);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Title_32Scene_32Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32Scene_32Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDB_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDB_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects1.length = 0;
gdjs.Title_32Scene_32Code.GDL_9595block_9595Objects2.length = 0;
gdjs.Title_32Scene_32Code.GDC_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDC_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDO_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDO_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDK_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDK_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDP_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDP_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDA_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDA_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDR_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDR_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDT_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDT_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDY_9595BlockObjects1.length = 0;
gdjs.Title_32Scene_32Code.GDY_9595BlockObjects2.length = 0;
gdjs.Title_32Scene_32Code.GDStartGame_9595Objects1.length = 0;
gdjs.Title_32Scene_32Code.GDStartGame_9595Objects2.length = 0;

gdjs.Title_32Scene_32Code.eventsList0(runtimeScene);

return;

}

gdjs['Title_32Scene_32Code'] = gdjs.Title_32Scene_32Code;
