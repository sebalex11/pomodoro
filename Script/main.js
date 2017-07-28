$(function(){
	var timerOn = false;
	var intTime;
	var timeStatus = "work";
	var clockRestart = true;
	var audio = new Audio("tone.wav")


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
		} else if($pressed.attr("data-sign") == "+"){
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

//This will highight the color for whichever mode it is in <------------------------------------------------- FINISH THIS AND ADD SOUND AFTER
var colorChanger = function(status, notstatus){

}

//This runs for every second recreating the html for the clock display
	var timeConvert = function(){
		console.log($("#clockText").html());
		var currentTime = $("#clockText").html().split(":");
		var tempMin = parseInt(currentTime[0]);
		var tempSec = parseInt(currentTime[1]) - 1;
		console.log(timeStatus)



	//This is the function that runs at 0 to switch from WORK to BREAK
		var breakSwitch = function(){
			
			var breakTime = $("#breakDisplay").html();
			var workTime =  $("#workDisplay").html();
			
			if(timeStatus == "work"){
			tempMin = breakTime;
			timeStatus = "break";
			console.log("BREAK TIME")				
			} else { 
			console.log("WORK TIME")
			tempMin = workTime;
			timeStatus = "work";
			};

		}

		switch(true){
			case tempMin == 0 && tempSec == 0:
				breakSwitch();
				audio.play();
				break;
			case tempSec == -1:
				tempSec = 59;
				tempMin -= 1;
				break;
			};

		$("#clockText").html(numCheck(tempMin)+":"+numCheck(tempSec))

	};

//This will start the number countdown
	var countDown = function(bool){
		if (bool == true){
			intTime = setInterval(timeConvert,1000);
			$("circle").css("stroke","#AFC9DD")
	}	
		else {
			clearInterval(intTime);
			$("circle").css("stroke","#E1AA7A")
		}
	};

//This will check the state of the clock and use the correct function
	var timerStartCheck = function(){
		if (timerOn == false){
			timerOn = true;
			if(clockRestart == true){
				$("#clockText").html(numCheck($("#workDisplay").html())+":00");
				clockRestart = false;
			};
			countDown(true);
		}
		else{
			timerOn = false;
			countDown(false);
		}
	}

//Events
	$("button").on("click", settingChange);


	$("#clockButton").on("click", timerStartCheck);
})