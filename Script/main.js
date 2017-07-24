$(function(){
	const minute = 60;
	var timerOn = false;


//this gives functionality to the buttons for the clock settings
	var settingChange = function(){
		var $pressed = $(this);
		var sign = $pressed.html();
		var setting = $pressed.parent();
		var section = $pressed.attr("data-div");
		var $span = $("#"+section+" > span");
		var tempNum = parseInt($span.html());


		if($pressed.attr("data-sign") == "-" && tempNum > 1){
			tempNum--;
			$span.html(tempNum);
		} else if($pressed.attr("data-sign") == "+" && tempNum >= 1){
			tempNum++;
			$span.html(tempNum);
		}

	}

	var start = function(){

	};

//UNFINISHED    this will convert the time when it passes 0 seconds
	var timeConvert = function(min, sec){
		var tempMin;
		var tempSec;
	};


//this will check the state of the clock and use the correct function
	var timerStartCheck = function(){
		if (timerOn == false){
			;
			timerOn = true;
		}
		else{
			timerOn = false;
		}
	}

//this is to start the functions of the clock
	var clockFunctions = function(){
		
		var startTime = $("#timeDisplay").html();



		timerStartCheck();


	};


//Events
	$("button").on("click", settingChange);


	$("#clockButton").on("click", clockFunctions);
})