var pic = document.getElementById("vimage"); 
var b = document.getElementById("button"); 
var bu = document.getElementById("lbutton");
var but = document.getElementById("sbutton");

var intervalID; 
var stop = function(){ 
    window.clearInterval(intervalID);
}

//LOL DO NOT CLICK GROW MORE THAN ONCE. kathy take care of that sometime

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

//im so tired. onto bounce 

var logo = function(){ 
    var c = document.createElementNS(
	"http://www.w3.org/2000/svg", "image");
    //thank u stackoverflow
    c.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', "dvd.png"); 
    c.setAttribute("width", 100);
    c.setAttribute("height", 50); 
    c.setAttribute("x", 0); 
    c.setAttribute("y", 0);
    var dx = 3; 
    var dy = 2;

    pic.appendChild(c);

    var bounce = function() {
	c = document.getElementsByTagName("image")[0];
	var x = parseInt(c.getAttribute('x')); 
	var y = parseInt(c.getAttribute('y')); 
	x+=dx; 
	y+=dy; 
	c.setAttribute("x", x.toString()); 
	c.setAttribute("y", y.toString());
	if(x<0 || x>=400) dx = -dx; 
	if(y<0 || y>=450) dy = -dy;

    };
    intervalID = window.setInterval(bounce, 16);
};


b.addEventListener("click", grow); 
bu.addEventListener("click", logo); 
but.addEventListener("click", stop); 
