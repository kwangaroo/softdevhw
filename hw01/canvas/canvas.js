var c = document.getElementById("ftb2maga"); 
var ctx = c.getContext("2d"); 
ctx.strokeStyle = "red";
ctx.fillStyle = "#000000";

//places the cursor on the canvas to be moved 
ctx.beginPath();

//moves the cursor to a set of coordinates
ctx.moveTo(20,20); 

//draws a line from wherever the cursor is to the coordinates specified
ctx.lineTo(270,20); 
ctx.lineTo(150,0);
ctx.lineTo(20,20); 

//draws out the path and makes it visible 
ctx.stroke();
ctx.fillStyle = "green"; 
ctx.fill();

ctx.moveTo(150,200);

//ends the path and moves the cursor back to the last place it was moved to before drawing
ctx.closePath(); 

//sets the font and size of text 
ctx.font="30px arial";

//writes the text out and fills it in
ctx.fillText("this is a lollipop",45,45); 
ctx.strokeText("this is a lollipop",45,45); 

ctx.strokeStyle = "#000000";
//draws an arc
//parameters: startx, starty, radius, beginning degree, ending degree (in rad) 
ctx.beginPath();
ctx.arc(150,200,130,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.stroke(); 
//fills in whatever your path has been drawing with the set fill color
ctx.fill();

ctx.beginPath(); 
ctx.strokeRect(5,180,290,50); 
ctx.fillRect(5,180,290,50);
ctx.closePath(); 

ctx.strokeRect(150,330,10,200);
