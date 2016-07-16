var hidden = "hidden";
var visibilityChange = "visibilitychange";
// need to add in handlers for hidden and visibilityChange for different browsers

window.onload = function() {
	Notification.requestPermission();
}

function runKillTreeTimer(setSystemTime) {
	var numberOfSecondsToWait = 5; // wait 5 seconds for user to come back to page before killing tree
	
	setTimeout(function() {
		if(document[hidden]){

			$(treeAliveImage).delay(2000).fadeOut(1000);
			$(treeDeadImage).delay(2000).fadeIn(1000);


			var treeKilledNotification = new Notification('Your tree died. Sorry!', {
				body: "Better luck next time!",
				icon: "tree_dead.png"
			});
			resetTimer();
		} else {
		}
	}, numberOfSecondsToWait * 1000);

}

function resetTimer(){
	clearInterval(timeInterval);



	window.removeEventListener(visibilityChange, handleVisibilityChange, false);

	$(responsive).delay(5000).fadeOut();
	$(timerTreeDisplayText).delay(5000).fadeOut();
	$(timerTreeDisplayTimer).delay(5000).fadeOut();
	$(timerDial).delay(5000).fadeIn();
}

function handleVisibilityChange(){
	if(document[hidden]) {
		calledHandler = true;
		var notification = new Notification('Save your tree!', {
			body: "Switch back to this page to prevent your tree from dying!",
			icon: "tree_alive.png"
		});
		notification.onclick = function() {
			window.focus();
			this.cancel();
		};
		runKillTreeTimer();
	} else {
		calledHandler = false;
	}
	
}