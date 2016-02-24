var c = document.getElementById("beep");
var ctx = c.getContext("2d"); 
var button = document.getElementById("b"); 
var butt = document.getElementById("other"); //hahaha man i crack myself up
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.strokeRect(0,0,600,600);
console.log("setup working"); 

var r = 0; 
var grow = true; 
var ani;

button.addEventListener("click", clicked);
butt.addEventListener("click", stoppin);

function stoppin(e){ 
console.log("attempted to stop");
    e.preventDefault(); 
    window.cancelAnimationFrame(ani);
}

function clicked(e){
    console.log("clicked running");
    e.preventDefault();
    ani = window.requestAnimationFrame(animate);
}

var animate = function(){ 
    ctx.beginPath(); 
    ctx.clearRect(0,0,600,600); 
    ctx.arc(300,300,r,0,2*Math.PI);
    ctx.stroke(); 
    ctx.fill();
    ctx.closePath(); 
    if(grow){
	r++;
    }else{
	r--;
    }
    if(r == 0){
	grow = true;
    }
    if (r == 300){ 
	grow = false;
    }
    ctx.strokeRect(0,0,600,600);
    ani = window.requestAnimationFrame(animate);
}


//UGH FINALLY
