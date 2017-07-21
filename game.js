function rgb(col){
  var r = Math.round((0.5+Math.sin(col)/2)*255);
  var g = Math.round((0.5+Math.cos(col)/2)*255);
  var b = Math.round((0.5-Math.sin(col)/2)*255);
  return "#"+("0" + r.toString(16) ).slice (-2)+("0" + g.toString(16) ).slice (-2)+("0" + b.toString(16) ).slice (-2);
}

canvas = document.querySelector("canvas");
ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
logo=new Image();
logo.src="logo.png";
cx=canvas.width/2;
cy=canvas.height/2;

function frame(){
  requestAnimationFrame(frame);
  for(var i=0;i<1000;++i){
    ctx.fillStyle=rgb(Math.PI*2/1000*i-Date.now()/400);
    ctx.fillRect(canvas.width/1000*i,0,canvas.width/1000,canvas.height);
  }
  ctx.drawImage(logo,cx-logo.width/2,cy-logo.height/2,logo.width,logo.height);
}
frame();