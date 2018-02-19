var canvas = $("#canvas");

var data = {
	width: canvas.css("width"),
	height: canvas.css("height"),
	lines: new Array(),
	section: new Array(),
	
	addLine: function(start, end) {
		var obj = {
			strokeWidth: painter.width,
			strokeStyle: painter.color,
			x1: start.x,
			y1: start.y,
			x2: end.x,
			y2: end.y
		};
		
		canvas.drawLine(obj);
		data.lines.push(obj);
	},
};

var mouse = {
	oldX: 0,
	oldY: 0,
	currentX: 0,
	currentY: 0
};

var painter = {
	width: 1,
	color: "#000",
}

var key = {
	mouseDown: false,
	altKey: false,
	ctrlKey: false,
	zKey: false
};

canvas.mousemove(function(event) {
	
	if (key.mouseDown && !(key.altKey)) {
		mouse.currentX = event.offsetX;
		mouse.currentY = event.offsetY;
		
		data.addLine({
			x: mouse.oldX,
			y: mouse.oldY,
		},{
			x: mouse.currentX,
			y: mouse.currentY,
		});
		
		mouse.oldX = mouse.currentX;
		mouse.oldY = mouse.currentY ;
	}
}).mousedown(function(event) {
	key.mouseDown = true;
	
	mouse.currentX = event.offsetX;
	mouse.currentY = event.offsetY;
	mouse.oldX = mouse.currentX;
	mouse.oldY = mouse.currentY ;
	
}).mouseup(function(event) {
	key.mouseDown = false;
}).keypress(function() {
	console.log("asd");
});

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
	canvas.attr("width", canvas.css("width"));
	canvas.attr("height", canvas.css("height"));
}

resizeCanvas();