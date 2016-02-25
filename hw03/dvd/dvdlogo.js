var c = document.getElementById("help");
var ctx = c.getContext("2d"); 
var ani; 

ctx.strokeStyle = "black";
ctx.strokeRect(0,0,600,600);

var logo = new Image(); 
logo.src = './dvd.png'; 

var dx = 2;
var dy = 5;
var x = 0;
var y = 0;

ctx.drawImage(logo,x,y,100,50);
ctx.fill();

ani = window.requestAnimationFrame(bounce); 



function bounce(){
    ctx.clearRect(0,0,600,600); 
    ctx.strokeRect(0,0,600,600);
    ctx.drawImage(logo,x,y,100,50); 
    ctx.fill(); 
    x+=dx;
    y+=dy;
//so it doesnt look like it's going off the canvas 
    if(x<0 || x>=500) dx = -dx; 
    if(y<0 || y>=550) dy = -dy;
//    console.log("x = x" + x + "   y = " + y);
// NaN NaN NaN NaN NaN lol
    ani = window.requestAnimationFrame(bounce);
}
