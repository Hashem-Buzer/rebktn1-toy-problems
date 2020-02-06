/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/
var pm = {
	"12:00": "12:00",
	"1:00": "13:00",
	"2:00": "14:00",
	"3:00": "15:00",
	"4:00": "16:00",
	"5:00": "17:00",
	"6:00": "18:00",
	"7:00": "19:00",
	"8:00": "20:00",
	"9:00": "21:00",
	"10:00": "22:00",
	"11:00": "23:00"
}

	function toMilitary(time) {
	  // your code here...
		time = time.split(':');

		var hours = parseInt(time[0]);
		var minutes = parseInt(time[1]);

		var timeValue;

		if (hours > 0 && hours <= 12) {
		  timeValue= "" + hours;
		} else if (hours > 12) {
		  timeValue= "" + (hours - 12);
		} else if (hours == 0) {
		  timeValue= "12";
		}

		return timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
	}