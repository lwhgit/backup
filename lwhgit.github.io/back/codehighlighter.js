$("select").material_select();
$("#preview_modal").modal();

var highlightButton = $("#hightlight_button");
var titleInput = $("#title_input");
var codeInput = $("#code_input");
var previewCode = $("#preview_code");

highlightButton.click(function() {
	var title = titleInput.val();
	var code = codeInput.val();
	
	var highlighter = new C_CodeHighlighter(code, title);
	highlighter.parse();
	previewCode.html(highlighter.getHtml());
	
});

function C_CodeHighlighter(code, title) {
	this.lines = code.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\t/g, "    ").replace(/ /g, "&nbsp;").split("\n");
	this.lineHtml = "";
	this.codeHtml = "";
	this.bodyHtml = "";
	this.keywords = [
		{word: /\b([0-9]+)\b/g,			replace: "$1",				color: "#FF5555"},
		
		{word: /\bvoid\b/g,				replace: "void",			color: "#3333FF"},
		{word: /\bint\b/g,				replace: "int",				color: "#3333FF"},
		{word: /\bfloat\b/g,			replace: "float",			color: "#3333FF"},
		{word: /\bdouble\b/g,			replace: "double",			color: "#3333FF"},
		{word: /\blong\b/g,				replace: "long",			color: "#3333FF"},
		{word: /\bchar\b/g,				replace: "char",			color: "#3333FF"},
		{word: /\bgoto\b/g,				replace: "goto",			color: "#3333FF"},
		{word: /\bunsigned\b/g,			replace: "unsigned",		color: "#3333FF"},
		{word: /\bsigned\b/g,			replace: "signed",			color: "#3333FF"},
		{word: /\btypedef\b/g,			replace: "typedef",			color: "#3333FF"},
		{word: /\bdefault\b/g,			replace: "default",			color: "#3333FF"},
		{word: /\bfor\b/g,				replace: "for",				color: "#3333FF"},
		{word: /\belse\b/g,				replace: "else",			color: "#3333FF"},
		{word: /\bwhile\b/g,			replace: "while",			color: "#3333FF"},
		{word: /\bdo\b/g,				replace: "do",				color: "#3333FF"},
		{word: /\bif\b/g,				replace: "if",				color: "#3333FF"},
		{word: /\bcontinue\b/g,			replace: "continue",		color: "#3333FF"},
		{word: /\bbreak\b/g,			replace: "break",			color: "#3333FF"},
		{word: /\bswitch\b/g,			replace: "switch",			color: "#3333FF"},
		
		{word: /\bvolatile\b/g,			replace: "volatile",		color: "#AAAAFF"},
		{word: /\binline\b/g,			replace: "inline",			color: "#AAAAFF"},
		
		{word: /\bstatic\b/g,			replace: "static",			color: "#0000ED"},
		{word: /\bconst\b/g,			replace: "const",			color: "#0000ED"},
		{word: /\bfinal\b/g,			replace: "final",			color: "#0000ED"},
		
		{word: /\bstruct\b/g,			replace: "struct",			color: "#800080"},
		{word: /\bunion\b/g,			replace: "union",			color: "#800080"},
		{word: /\benum\b/g,				replace: "enum",			color: "#800080"},
		{word: /\btypedef\b/g,			replace: "typedef",			color: "#800080"},
		
		{word: /\bextern\b/g,			replace: "extern",			color: "#DDAA00"},
		
		{word: /\breturn\b/g,			replace: "return",			color: "#0000FF"},
		
		{word: /(#[a-z]+.+)$/gm,		replace: "$1",				color: "#119911"},
	];
	this.title = title;
	
	this.parse = function() {
		
		
		
		for (var lineNumber = 0;lineNumber < this.lines.length;lineNumber ++) {
			var currentLine = this.lines[lineNumber];
			var currentHtml = "";
			var currentState = 0;
			var point = 0;
			
			for (var stringPoint = 0;stringPoint < currentLine.length;stringPoint ++) {
				
				if(currentState == 0 && stringPoint == currentLine.length - 1) {
					currentHtml += this.convertText(currentLine.substring(point, stringPoint + 1).replace(/  /g, "&nbsp; "));
					
					point = 0;
				}else if (currentState == 0 && this.matchString(currentLine, "\"", stringPoint)) {
					currentHtml += this.convertText(currentLine.substring(point, stringPoint).replace(/  /g, "&nbsp; "));
					console.log(currentLine.substring(point, stringPoint));
					currentState = 1;
					point = stringPoint;
				}else if (currentState == 1 && this.matchString(currentLine, "\"", stringPoint)) {
					stringPoint += 1;
					currentHtml += "<span style='color: #11DDBD;'>" + currentLine.substring(point, stringPoint) + "</span>";
					
					currentState = 0;
					point = stringPoint;
				}else if (currentState == 0 && this.matchString(currentLine, "//", stringPoint)) {
					currentHtml += this.convertText(currentLine.substring(point, stringPoint).replace(/  /g, "&nbsp; "));
					console.log(currentLine.substring(point, stringPoint));
					currentState = 2;
					point = stringPoint;
				}else if (currentState == 2 && stringPoint == currentLine.length - 1) {
					stringPoint += 2;
					currentHtml += "<span style='color: #68d480;'>" + currentLine.substring(point, stringPoint) + "</span>";
					
					currentState = 0;
					point = stringPoint;
				}
			}
			
			this.lineHtml += "<span style='width: 40px; height: 23px; text-align: right; font-size: 14px; line-height: 23px; color: #C8C8C8; display: block;'>" + (lineNumber + 1) +"</span>";
			this.codeHtml += "<span style='width: 100%; height: 23px; text-align: left; font-size: 14px; line-height: 23px; color: #000000; font-family: Consolas; white-space: nowrap; display: block;'>" + currentHtml + "</span>";
		}
		
		this.lineHtml = "<span style='width: 40px; height: " + (this.lines.length * 23) +"px; float: left; display: block;'>" + this.lineHtml + "</span>";
		this.codeHtml = "<span style='width: calc(100% - 50px); height: " + (this.lines.length * 23) +"px; padding-left: 10px; float: left; display: block;'>" + this.codeHtml + "</span>"
		this.bodyHtml = "<span style='width: 100%; height: " + (this.lines.length * 23 + 20) + "px; margin-top: 10px; overflow: auto; display: block;'>" + this.lineHtml + this.codeHtml + "</span>";
	};
	
	this.getHtml = function() {
		if (this.title) {
			return "<div><div style='width: calc(100% - 2px); height: " + (this.lines.length * 23 + 72) + "px; background-color: #FFFFFF; border: 1px #DFDFDF solid; display: block;'><span style='width: calc(100% - 2px); height: " + (this.lines.length * 23 + 70) + "px; margin-top: 1px; margin-left: 1px; overflow-x: auto; display: block;'><span style='width: 100%; height: 40px; background-color: #FAFAFA; padding-left: 30px; color: #353535;line-height: 40px; display: block; box-sizing: inherit;'>" + this.title + "</span>" + this.bodyHtml + "</div></div>";
		}else {
			return "<div><div style='width: calc(100% - 2px); height: " + (this.lines.length * 23 + 32) + "px; background-color: #FFFFFF; border: 1px #DFDFDF solid; display: block;'><span style='width: calc(100% - 2px); height: " + (this.lines.length * 23 + 30) + "px; margin-top: 1px; margin-left: 1px; overflow-x: auto; display: block;'>" + this.bodyHtml + "</div></div>";
		}
	};
	
	this.matchString = function(source, str, pos) {
		for (var i = 0;i < str.length;i ++) {
			if (source.charAt(pos + i) != str.charAt(i)) {
				return false;
			}
		}
		
		
		return true;
	};
	
	this.convertText = function(str) {
		for (var i = 0;i < this.keywords.length;i ++) {
			var keyword = this.keywords[i];
			str = str.replace(keyword.word, "<span style='color: " + keyword.color + "'>" + keyword.replace + "</span>");
		}
		return str;
	};
}


//		for (var i = 0;i < this.str.length;i ++) {
//			if (currentState == 0 && this.matchString(i, "\"")) {
//				currentState = 1;
//				startPoint = i;
//			}else if (currentState == 1 && (this.matchString(i, "\"") || this.matchString(i, "\n"))) {
//				this.stringRange.push({
//					start: startPoint,
//					end: i + 1
//				});
//				currentState = 0;
//				startPoint = -1;
//			}else if (currentState == 0 && this.matchString(i, "/*")) {
//				currentState = 2;
//				startPoint = i;
//			}else if (currentState == 2 && this.matchString(i, "*/")) {
//				this.annotationRange.push({
//					start: startPoint,
//					end: i + 2
//				});
//				currentState = 0;
//				startPoint = -1;
//			}else if (currentState == 0 && this.matchString(i, "//")) {
//				currentState = 3;
//				startPoint = i;
//			}else if (currentState == 3 && this.matchString(i, "\n")) {
//				this.annotationRange.push({
//					start: startPoint,
//					end: i
//				});
//				currentState = 0;
//				startPoint = -1;
//			}
//		}
