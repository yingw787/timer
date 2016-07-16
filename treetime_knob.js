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
  		var processedStepValue = Math.ceil((value - offset) / increment ) * increment + offset;
  		// console.log(processedStepValue);
  		var para = document.getElementById("timerDialDisplay");
  		para.innerHTML = processedStepValue + ":00";
  	}
});