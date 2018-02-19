var html = $("html");

var values = {
	width: 0,
	height: 0,
	
	reset: function() {
		var strWidth = $("html").css("width");
		var strHeight = $("html").css("height");
		
		values.width = parseInt(strWidth.substring(0, strWidth.lastIndexOf("px")));
		values.height = parseInt(strHeight.substring(0, strHeight.lastIndexOf("px")));
	}
};

var canvas = {
	canvasWrapper: $("#canvas_wrapper"),
	canvas: $("#canvas"),
	width: 500,
	height: 500,
	lines: new Array(),
	
	painter: {
		width: 1,
		color: "#000000",
		points: new Array()
	},
	draw: function(c1, c2) {
		
	}
};

var leftNav = {
	nav: $("#left_nav")
};

var flag = {
	isMouseInCanvas: false
};

var input = {
	key: {
		ctrl: false,
		alt: false,
		z: false
	},
	
	mouse: {
		left: false,
		wheel: false,
		right: false
	}
};

canvas.canvas.mousedown(function(event) {
	if (event.which == 1) {
		left = true;
	}
	if (event.which == 2) {
		wheel = true;
	}
	if (event.which == 3) {
		right = true;
	}
}).mouseup(function(event) {
	if (event.which == 1) {
		left = false;
	}
	if (event.which == 2) {
		wheel = false;
	}
	if (event.which == 3) {
		right = false;
	}
}).mouseenter(function(event) {
	flag.isMouseInCanvas = true;
}).mouseleave(function(event) {
	flag.isMouseInCanvas = false;
});

html.mousemove(function(event) {/*
	console.log("");
	console.log("Client :\t" + event.clientX + "\t" + event.clientY);
	console.log("Offset :\t" + event.offsetX + "\t" + event.offsetY);
	console.log("Screen :\t" + event.screenX + "\t" + event.screenY);*/
});


$(window.document).on("contextmenu", function(event){return false;});
$(window.document).on("selectstart", function(event){return false;});

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	values.reset();
}

resizeCanvas();