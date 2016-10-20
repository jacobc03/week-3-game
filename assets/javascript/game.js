var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','i','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var	wins = 0;
var losses = 0;
var guessesLeft = 9;
var picks = [];


var computerPick = alphabet[Math.floor(Math.random() * 27)];
console.log(computerPick)

document.onkeyup = function(event) {	

var myPicks = String.fromCharCode(event.keyCode).toLowerCase();
console.log(myPicks)
picks.push(myPicks);
console.log(picks)


	
if (myPicks == computerPick) {
 	wins++;
 	guessesLeft=9;
 	document.getElementById('guess').innerHTML= 'Guesses Left: '+guessesLeft;
 	console.log(wins);
 	document.getElementById('win').innerHTML= 'Wins: '+wins;
 	document.getElementById('soFar').innerHTML= 'Your Guesses so far: '+picks;
 	picks=[];


 }
else if (myPicks !== computerPick) {
	guessesLeft--;
	document.getElementById('guess').innerHTML= 'Guesses Left: '+guessesLeft;
	document.getElementById('soFar').innerHTML= 'Your Guesses so far: '+picks;
	console.log(guessesLeft);
	if (guessesLeft<1) {
		losses++;
		picks=[];
		guessesLeft=9;
		document.getElementById('loss').innerHTML= 'Losses: '+losses;
		document.getElementById('guess').innerHTML= 'Guesses Left: '+guessesLeft;
		console.log(losses);
		console.log(guessesLeft);
		picks=[];
	}
 }

}