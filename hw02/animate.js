var c = document.getElementById("beep");
var ctx = c.getContext("2d"); 
var button = document.getElementById("b"); 
ctx.strokeStyle = "black";
ctx.fillStyle = "red";
ctx.strokeRect(0,0,600,600);
console.log("setup working"); 

var r = 0; 
var grow = true; 

button.addEventListener("click", clicked);

function clicked(e){
    console.log("clicked running");
    e.preventDefault();
    window.requestAnimationFrame(animate);
}

var animate = function(){ 
    console.log("animate is running");
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
    window.requestAnimationFrame(animate);
}


//UGH FINALLY
