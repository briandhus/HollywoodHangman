
var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var renderedString = "";
var wins = 0;
var losses = 0;
var ties = 0;
var guessedLetters = [];

// Choose a random title
var randomTitle = titles[Math.floor(Math.random() * titles.length)];
console.log(randomTitle);

// computer renders length of title in underscores
for (var i = 0; i < randomTitle.length; i++) {
	if (randomTitle[i] === " ") {
		renderedString += " ";		
	} else {
		renderedString += "_";
	}	
}

// rendered title displays on screen
window.onload = function displayRenderedString() {
	var html = '<p>' + renderedString + '</p>';
	document.getElementById('movieTitle').innerHTML = html;
}

// displayRenderedString();
console.log(renderedString);

// letter bank
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// capture user guess
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
}