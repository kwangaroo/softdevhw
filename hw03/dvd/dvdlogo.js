//aight hahaha this image is not showing up so i'm gonna just put a sock in it and sleep for now
var c = document.getElementById("help");
var ctx = c.getContext("2d"); 
var ani; 

ctx.strokeStyle = "black";
ctx.strokeRect(0,0,600,600);

var logo = new Image(); 
logo.src = './dvd.png'; 

var dx,dy = 5; 
var x,y = 0;

ctx.drawImage(logo,x,y,100,50);
ctx.fill();

ani = window.requestAnimationFrame(bounce); 

function bounce(){ 
    ctx.drawImage(logo,x,y,100,50); 
    ctx.fill(); 
    x+=dx;
    y+=dy;
    if(x<0 || x>600) dx=-dx; 
    if(y<0 || y>600) dy=-dy;
    ctx.strokeRect(0,0,600,600);
    ani = window.requestAnimationFrame(bounce);
}
