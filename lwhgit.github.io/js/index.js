var body = $("body");

var command = {
  typedString: "",
};

command.adminMode = function() {

};

body.keydown(function(event) {
  var keyCode = event.keyCode;
  if (keyCode == 13) {
    if (command.typedString == "adminmode") {

    }
    command.typedString = "";
    return;
  }
  command.typedString += String.fromCharCode(event.keyCode).toLowerCase();
});
