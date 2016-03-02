var pic = document.getElementById("vimage"); 
var b = document.getElementById("button"); 
var bu = document.getElementById("sbutton");

var intervalID; 
var stop = function(){ 
    window.clearInterval(intervalID);
}

var grow = function(){ 
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "circle"); 
    var growing = true; 
    
    c.setAttribute("cx", 250); 
    c.setAttribute("cy", 250);
    c.setAttribute('r', 0); 
    c.setAttribute("fill", "red"); 
    c.setAttribute("stroke", "black"); 
    pic.appendChild(c);
    

    var animateCode = function(){ 
	c = document.getElementsByTagName('circle')[0]; 
	var radius = parseInt(c.getAttribute('r')); 
	//increasing decreasing radius 
	if (growing) { 
	    radius = radius + 1; 
	}
	else{ 
	    radius = radius - 1;
	}
	if (radius == 250)
	    growing = false;
	else if ( radius == 0 ) {
	    growing = true;
	}
	c.setAttribute('r', radius.toString()); 
    }
    intervalID = window.setInterval(animateCode, 16); 
} 

b.addEventListener("click", grow); 

bu.addEventListener("click", stop); 
