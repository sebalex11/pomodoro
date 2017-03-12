$(function(){
	const minute = 60;

	var settingChange = function(){
		var $pressed = $(this);
		var sign = $pressed.html();
		var setting = $pressed.parent();
		var section = $pressed.attr("data-div");
		var $span = $("#"+section+" > span");
		var tempNum = parseInt($span.html()) 

		if($pressed.attr("data-sign") == "-" && tempNum > 1){
			tempNum--;
			$span.html(tempNum);
		} else if($pressed.attr("data-sign") == "+" && tempNum >= 1){
			tempNum++;
			$span.html(tempNum);
		}

	}

	$("button").on("click", settingChange);
})