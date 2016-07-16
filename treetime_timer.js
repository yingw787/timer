var timeInterval;

function beginTimerFunction(){
	setTimeout(startTimer() );
}

function startTimer() {
	// processedStepValue is the number of minutes timer runs for
	// p id = "timer" is the display the timer will be on

	$(treeDeadImage).hide();
	$(timerDial).fadeOut(1000);
	$(responsive).delay(1000).fadeIn(1000);
	$(timerTreeDisplayText).delay(1000).fadeIn(1000);
	$(timerTreeDisplayTimer).delay(1000).fadeIn(1000);
	$(treeAliveImage).delay(1000).fadeIn(1000);


	console.log(processedStepValue);

	var duration = processedStepValue * 60;

    var timerNotification = new Notification('Timer started', {
    	body: "It's treetime! Get to work!",
    	icon: 'tree_alive.png'
    });

    window.addEventListener(visibilityChange, handleVisibilityChange, false);


    var timer = duration, minutes, seconds;
    
    var timerDisplay = document.getElementById("timer");

    timeInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            var removeTimerNotification = new Notification('Timer finished', {
            	body: "Your tree survived!",
            	icon: 'tree_alive.png'
            });
            resetTimer();
        }
    }, 1000);

}