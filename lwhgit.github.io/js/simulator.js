var velocitySimulator = {
  width: parseInt($("html").css("width").substring(0, $("html").css("width").length - 2)),
  realDisplayDistance: 0.609,
  pixelDisplayDistance: 0,
  realFormDistance: 0,
  pixelFormDistance: 0,
  velocity: 30,
  size: 50,
  mainPx: 10,
  px: 10,
  currentPosition: 0,
  measuredVelocity: 0,
  time: 0,
  velocityForm: $("#velocityForm"),
  simulatorForm: $("#velocityForm #simulatorForm"),
  distanceInput: $("#velocityForm #inputForm #distanceInput"),
  startBtn: $("#velocityForm #inputForm #actionCommandForm #startBtn"),
  stopBtn: $("#velocityForm #inputForm #actionCommandForm #stopBtn"),
  velocityValueView: $("#velocityForm #inputForm #velocityInputBox #velocityValueView"),
  velocityInput: $("#velocityForm #inputForm #velocityInputBox #velocityInput"),
  sizeValueView: $("#velocityForm #inputForm #sizeInputBox #sizeValueView"),
  sizeInput: $("#velocityForm #inputForm #sizeInputBox #sizeInput"),
  rigidbody: $("#velocityForm #simulatorForm #rigidbody"),
  currentPositionView: $("#velocityForm #simulatorForm #currentPositionView"),
  measuredVelocityView: $("#velocityForm #simulatorForm #measuredVelocityView"),
  timeView: $("#velocityForm #simulatorForm #timeView"),
  interval: 0
};

velocitySimulator.show = function() {
  velocitySimulator.velocityForm.css("display", "block");

  velocitySimulator.pixelDisplayDistance = parseInt($("html").css("width").substring(0, $("html").css("width").length - 2));
  velocitySimulator.pixelFormDistance = parseInt(velocitySimulator.simulatorForm.css("width").substring(0, velocitySimulator.simulatorForm.css("width").length - 2));

  velocitySimulator.realFormDistance = (velocitySimulator.realDisplayDistance * velocitySimulator.pixelFormDistance) / velocitySimulator.pixelDisplayDistance;

  velocitySimulator.startBtn.on("click", function() {
    velocitySimulator.start();
  });

  velocitySimulator.stopBtn.on("click", function() {
    velocitySimulator.stop();
  });

  velocitySimulator.distanceInput.on("input change", function() {
    velocitySimulator.realDisplayDistance = parseFloat($(this).val());
    velocitySimulator.realFormDistance = (velocitySimulator.realDisplayDistance * velocitySimulator.pixelFormDistance) / velocitySimulator.pixelDisplayDistance;
  });

  velocitySimulator.velocityInput.on("input change", function() {
    velocitySimulator.velocity = parseFloat($(this).val());
    velocitySimulator.velocityValueView.text(velocitySimulator.velocity + " m/s");
  });

  velocitySimulator.sizeInput.on("input change", function() {
    velocitySimulator.size = parseInt($(this).val());
    velocitySimulator.sizeValueView.text(velocitySimulator.size + "px");
    velocitySimulator.rigidbody.css("width", velocitySimulator.size + "px");
    velocitySimulator.rigidbody.css("height", velocitySimulator.size + "px");
    velocitySimulator.rigidbody.css("top", "calc(50% - " + (velocitySimulator.size / 2) + "px)");
  });

};

velocitySimulator.hide = function() {
  velocitySimulator.velocityForm.css("display", "none");
};

velocitySimulator.start = function() {
  if (velocitySimulator.interval != 0) {
    Materialize.toast('Simuator is already started.', 4000)
    return;
  }

  velocitySimulator.time = 0;
  velocitySimulator.currentPosition = 0;
  velocitySimulator.measuredVelocity = 0;

  velocitySimulator.interval = setInterval(function() {
    velocitySimulator.px += 0.005 * velocitySimulator.meter2pixel(velocitySimulator.velocity);
    velocitySimulator.rigidbody.css("left", velocitySimulator.px + "px");

    velocitySimulator.time += 0.005;
    velocitySimulator.currentPosition = velocitySimulator.pixel2meter(velocitySimulator.px - 10);
    velocitySimulator.measuredVelocity = velocitySimulator.currentPosition / velocitySimulator.time;

    velocitySimulator.currentPositionView.text(velocitySimulator.currentPosition.toFixed(2) + " m");
    velocitySimulator.measuredVelocityView.text(velocitySimulator.measuredVelocity.toFixed(2) + " m/s");
    velocitySimulator.timeView.text(velocitySimulator.time.toFixed(2) + " sec");
  }, 5);
};

velocitySimulator.stop = function() {
  clearInterval(velocitySimulator.interval);
  velocitySimulator.px = velocitySimulator.mainPx;
  velocitySimulator.rigidbody.css("left", "10px");
  velocitySimulator.interval = 0;
};

velocitySimulator.meter2pixel = function(meter) {
  return (meter * velocitySimulator.pixelDisplayDistance) / velocitySimulator.realDisplayDistance;
};

velocitySimulator.pixel2meter = function(pixel) {
  return (pixel * velocitySimulator.realDisplayDistance) / velocitySimulator.pixelDisplayDistance;
};

var railgunSimulator = {
  v: 0,
  r: 0,
  b: 0,
  m: 0,
  s: 0,
  railgunForm: $("#railgunForm"),
  voltageInput: $("#railgunForm #inputForm #voltageInput"),
  resistanceInput: $("#railgunForm #inputForm #resistanceInput"),
  magInput: $("#railgunForm #inputForm #magInput"),
  massInput: $("#railgunForm #inputForm #massInput"),
  displacementInput: $("#railgunForm #inputForm #displacementInput"),
  intensityValueView: $("#railgunForm #inputForm #intensityValueView"),
  forceValueView: $("#railgunForm #inputForm #forceValueView"),
  accValueView: $("#railgunForm #inputForm #accValueView"),
  vValueView: $("#railgunForm #inputForm #vValueView"),
};

railgunSimulator.show = function() {
  railgunSimulator.railgunForm.css("display", "block");

  railgunSimulator.voltageInput.on("input change", function() {
    railgunSimulator.v = parseFloat(railgunSimulator.voltageInput.val());
    railgunSimulator.operate();
  });

  railgunSimulator.resistanceInput.on("input change", function() {
    railgunSimulator.r = parseFloat(railgunSimulator.resistanceInput.val());
    railgunSimulator.operate();
  });

  railgunSimulator.magInput.on("input change", function() {
    railgunSimulator.b = parseFloat(railgunSimulator.magInput.val());
    railgunSimulator.operate();
  });

  railgunSimulator.massInput.on("input change", function() {
    railgunSimulator.m = parseFloat(railgunSimulator.massInput.val());
    railgunSimulator.operate();
  });

  railgunSimulator.displacementInput.on("input change", function() {
    railgunSimulator.s = parseFloat(railgunSimulator.displacementInput.val());
    railgunSimulator.operate();
  });
};

railgunSimulator.hide = function() {
  railgunSimulator.railgunForm.css("display", "none");
};

railgunSimulator.operate = function() {
  var i = railgunSimulator.v / railgunSimulator.r;
  railgunSimulator.intensityValueView.text(i);
  var f = railgunSimulator.b * i;
  railgunSimulator.forceValueView.text(f);
  var a = f / railgunSimulator.m;
  railgunSimulator.accValueView.text(a);
  var v = Math.sqrt(2 * a * railgunSimulator.s);
  console.log(v);
  railgunSimulator.vValueView.text(v);
};

function show(arg) {
  if (arg == 0) {
    velocitySimulator.show();
    railgunSimulator.hide();
  } else if (arg == 1) {
    velocitySimulator.hide();
    railgunSimulator.show();
  }
}

show(0);
