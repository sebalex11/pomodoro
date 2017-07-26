$(function(){
	const minute = 60;
	var timerOn = false;
	var intTime;
	var timeStatus = false;


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

//make sure that each number always has 2 digits
	var numCheck = function(val){

		if(val < 10) {
			return ("0"+val);
		} else {
			return val;
		}

	};

//UNFINISHED    this will convert the time when it passes 0 seconds
	var timeConvert = function(){
		console.log($("#clockText").html());
		var currentTime = $("#clockText").html().split(":");
		var tempMin = parseInt(currentTime[0]);
		var tempSec = parseInt(currentTime[1]) - 1;



		if(timeStatus == true){
			breakSwitch();
			timeStatus = false;
			return;
		};


		switch(true){
			case tempMin == 0 && tempSec == 0:
				console.log("ALL DONE");
				timeStatus = true
				break;
			case tempSec == -1:
				tempSec = 59;
				tempMin -= 1;
				break;
			};

		$("#clockText").html(numCheck(tempMin)+":"+numCheck(tempSec))

	};


//this is the function to reset the clock for the break period
	var breakSwitch = function(){
		
		var breakTime = ($("#breakDisplay").html()+":00");
		$("#clockText").html(breakTime);
	}

//this will start the number countdown
	var countDown = function(bool){
		if (bool == true){
			intTime = setInterval(timeConvert,1000);
	}	
		else {
			clearInterval(intTime);
		}
	};

//this will check the state of the clock and use the correct function
	var timerStartCheck = function(){
		if (timerOn == false){
			;
			timerOn = true;
			countDown(true);
		}
		else{
			timerOn = false;
			countDown(false);
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