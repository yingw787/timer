var processedStepValue = 15; // CHANGE BACK TO 15 WHEN DONE DEBUGGING

$('.dial').knob({
	 'min': 10,
  	'max': 90,
  	'step': 5,
  	'skin': "tron",
  	'thickness': ".1",
  	'fgColor': "#008000",
    // 'width' : "80%",
  	'displayInput': false,

  	'change': function(value) {
  		var offset = 0;
  		var increment = 5;
  		processedStepValue = Math.ceil((value - offset) / increment ) * increment + offset;
  		var para = document.getElementById("timerDialDisplay");
  		para.innerHTML = processedStepValue + ":00";
  	}
});