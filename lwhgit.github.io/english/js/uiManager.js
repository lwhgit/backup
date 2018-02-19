
var body = $("body");

var player;
var controlForm = $("#controlForm");

var ytPlayer;

function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player('player', {
			playerVars: {
				'autoplay': 0,
				"cc_load_policy": 0,
				'controls': 3,
				"iv_load_policy": 1,
				"hl": "ko",
				'disablekb': 1,
			},
			videoId: 'RgKAFK5djSk',
			events: {
				'onReady': onPlayerReady
			}
		}, 0);
	player = $("#player");
	resize();
}

function resize() {
	var spaceWidth = getSpaceWidth();
	var spaceHeight = getSpaceHeight();
	var playerHeight = 0;
	var playerWidth = 0;

	if (spaceWidth > spaceHeight) {
		playerHeight = spaceHeight * 0.6;
		playerWidth = playerHeight * 16 / 9;
	} else {
		playerWidth = spaceWidth * 0.6;
		playerHeight = playerWidth / 16 * 9;
	}

	player.css("width", playerWidth);
	player.css("height", playerHeight);
	player.css("margin-left", "calc(50% - " + playerWidth / 2 + "px)");
	ytPlayer.setSize(playerWidth, playerHeight);

	//controlForm.css("width", (getSpaceWidth() - playerWidth) / 2);
}

function onPlayerReady(event) {
	Materialize.toast(getSpaceWidth(), 1000);
	Materialize.toast(getSpaceHeight(), 1000);
}

function getSpaceWidth() {
	var height = $("#form").css("width");
	return parseInt(height.substring(0, height.length - 2));
}

function getSpaceHeight() {
	var height = $("#form").css("height");
	return parseInt(height.substring(0, height.length - 2));
}

var controlForm = $("#controlForm");
var controlTitle = $("#controlTitle");
var gapX = 0;
var gapY = 0;
var mousedown = false;

controlTitle.mousedown(function(e) {
	gapX = e.clientX - parseInt(controlForm.css("left").substring(0, controlForm.css("left").length - 2));
	gapY = e.clientY - parseInt(controlForm.css("top").substring(0, controlForm.css("top").length - 2));
		console.log(gapX);
		console.log(gapY);
	mousedown = true;
});
controlTitle.mouseup(function(e) {
	mousedown = false;
});
body.mousemove(function(e) {
	if (mousedown) {
		console.log(e);
		var curX = e.pageX;
		var curY = e.pageY;
		controlForm.css("left", curX - gapX);
		controlForm.css("top", curY - gapY);
	}
});


var lyricForm = $("#lyricForm");
var lyricLines = new Array();

for (var i in lyricData) {
	var data = lyricData[i];
	lyricForm.append($(createLyricLine(data.en[0])));
	lyricForm.append($(createLyricLine(data.ko)));
}

for (var i = 0 ;i < 3;i ++) {
	var data = lyricData[i];
	lyricForm.append($(createLyricLine("")));
	lyricForm.append($(createLyricLine("")));
}

lyricLines = lyricForm.children();
lyricLines = lyricLines.slice(5, lyricLines.length);


function createLyricLine(str) {
	return "<div class='lyricLine'>" + str + "</div>";
}

window.addEventListener('resize', resize, false);
