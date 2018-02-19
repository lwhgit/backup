var plainText = $("#plain_text");
var encText = $("#enc_text");
var encButton = $("#enc_button");
var decButton = $("#dec_button");

encButton.on("click", function() {
	var result = "";
	var plain = plainText.val();
	
	if (plain.length == 0) {
		toast("Input Text");
	}else {
		for (var i = 0;i < plain.length;i ++) {
			var c = plain[i].charCodeAt().toString(2);
			c = c.replace(/0/g,"은미");
			result += c.replace(/1/g,"이은미");
			result += " ";
		}
		
		result = result.substring(0, result.length - 1);
		
		encText.val(result);
	}
});

decButton.on("click", function() {
	var result = "";
	var enc = encText.val();
	
	if (enc.length == 0) {
		toast("Input Text");
	}else {
		var arr = enc.split(" ");
		
		for (var i = 0;i < arr.length;i ++) {
			var c = arr[i].replace(/이은미/g, "1");
			c = c.replace(/은미/g, "0");
			result += String.fromCharCode(parseInt(c, 2));
		}
		
		plainText.val(result);
	}
});

function toast(str) {
	Materialize.toast(str, 2000);
}