//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("help");
var dotButton = document.getElementById( "circle" );
var dvdButton = document.getElementById( "dvd" );
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to red
ctx.fillStyle = "#ff0000";

ctx.strokeRect(0,0,600,600); 

var requestID;

var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, 600, 600);
};

var radius = 0;
var growing = true;


var drawDot = function() {
    
    ctx.clearRect( 0, 0, c.width, c.height );

    if ( growing ) {
	radius = radius + 1;
    }    
    else {
	radius = radius - 1;
    }

    if ( radius == (c.width / 2) )
	growing = false;
    else if ( radius == 0 ) {
	growing = true;
    }
    
    ctx.beginPath();
    ctx.strokeRect(0,0,600,600);
    ctx.arc( c.width / 2, c.height / 2, radius, 0, 2 * Math.PI );
    ctx.stroke();
    ctx.fill();

    requestID = window.requestAnimationFrame( drawDot );
};



var dvdLogoSetup = function() {
    
    //Q: What good might this do?
    //observations:
    //hitting bounce twice seems to just restart it.
    //but hitting stop then makes it jump a bit (revert to the last call?) 
    //# of times bounce is hit = number of times you gotta hit stop
    //this solves the problem of having to hit stop more than once if you hit bounce more than once!
    window.cancelAnimationFrame( requestID );
   
    //var inits
    //...

    var logo = new Image(); 
    logo.src = './dvd.png'; 

    var dx = 2;
    var dy = 5;
    var x = 0;
    var y = 0;

    //a function defined within a function, oh my!
    var dvdLogo = function() {

	//propulsion mechanism

	//figure out: why doesn't this get rid of the circle?
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
	
	//Q: Why this here?
	//makes the animation actually move in the fn w/n a fn
	requestID = window.requestAnimationFrame( dvdLogo );		
    };
    dvdLogo();
};



var stopIt = function() {
    console.log( requestID ); //frame?
    window.cancelAnimationFrame( requestID );
};


dotButton.addEventListener( "click", drawDot );
dvdButton.addEventListener( "click", dvdLogoSetup );
stopButton.addEventListener( "click",  stopIt );

