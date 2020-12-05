var dat = new Array(1,2,4,8,16,32,64,128,256);
var c=document.getElementById("lineCanvas");
var ctx=c.getContext("2d");
//ctx.moveTo(0,250);
ctx.moveTo(0,300-dat[0]);
var j = 0;
for(var i = 1; i < 9; i++){
    j = j + 50;
    ctx.lineTo(j,300-dat[i]);
    ctx.stroke();
}