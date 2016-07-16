$(document).ready(function() {
	$(introText).delay(3000).fadeOut(1000);
	$(timerDial).hide().delay(4000).fadeIn(1000);
	$(timerTreeDisplay).hide();

	$(setTimerButton).click(function(){
		$(timerDial).fadeOut(1000);
		$(timerTreeDisplay).delay(1000).fadeIn(1000);
	})

	$(showTreesButton).click(function(){
		$(treeAliveImage).fadeIn(1000).delay(1000).fadeOut(1000);
		$(treeDeadImage).delay(2000).fadeIn(1000);

	})

})


