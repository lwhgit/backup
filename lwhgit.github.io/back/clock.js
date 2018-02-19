var dateView = $("#date_view");
var dayView = $("#day_view");
var timeView = $("#time_view");
var secView = $("#sec_view");

var dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fir", "Sat"]

setInterval(function() {
	var date = new Date();
	var year = date.getFullYear();
	
	var month = date.getMonth() + 1;
	if (month < 10) month = "0" + month;
	
	var day = date.getDate();
	if (day < 10) day = "0" + day;
	
	var hour = date.getHours();
	if (hour < 10) hour = "0" + hour;
	
	var minute = date.getMinutes();
	if (minute < 10) minute = "0" + minute;
	
	var sec = date.getSeconds();
	if (sec < 10) sec = "0" + sec;
	
	dateView.html(year + "-" + month + "-" + day);
	
	dayView.html(dayArray[date.getDay()]);
	
	timeView.html(hour + ":" + minute);
	
	secView.html(sec + " sec");
}, 1);