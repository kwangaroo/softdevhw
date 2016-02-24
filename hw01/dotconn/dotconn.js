var c = document.getElementById("playground");
var ctx = c.getContext("2d"); 

//hey kathy figure out how to do a border without js before submitting lol 
ctx.strokeStyle = "black";
ctx.strokeRect(0,0,600,600);

c.addEventListener("click", drawDot); 

//begins the connecting dots sequence
var setup = true; 
//ends the path if user has done a clear so we don't have random lines
var clean = false; 
var initX; 
var initY; 

function drawDot(e){ 
    ctx.beginPath(); 
    ctx.fillStyle = "#cb301f";
    ctx.arc(e.offsetX,e.offsetY,7,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
//check if initX and initY need to be realigned 
    if(clean){ 
	setup = true;
	clean = false;
    }
//begins sequence to connect the dots 
    if(setup){
	initX = e.offsetX; 
	initY = e.offsetY; 
	setup = false; 
    }
    ctx.moveTo(initX,initY); 
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke(); 
//reassigns values to the last click 
    initX = e.offsetX; 
    initY = e.offsetY;
}

function clearCanvas(){ 
    ctx.clearRect(0,0,600,600); 
    clean = true;
    ctx.strokeRect(0,0,600,600);
}



//REJOICING 
