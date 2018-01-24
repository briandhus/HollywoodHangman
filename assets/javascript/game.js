
var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var renderedString = "";
var wins = 0;
var losses = 0;
var wrongGuesses = [];
var correctLetters = [];
var lives = 7;

// letter bank
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
// Choose a random title
var randomTitle = titles[Math.floor(Math.random() * titles.length)];
console.log(randomTitle);

// computer renders length of title in underscores
function displayRenderedString() {
	for (var i = 0; i < randomTitle.length; i++) {
		if (randomTitle[i] === " ") {
			renderedString += " ";		
		} else {
			renderedString += "_";
		}	
	}
	var html = '<p>' + renderedString + '</p>';
	document.getElementById('movieTitle').innerHTML = html;
}

displayRenderedString();
console.log(renderedString);


// capture user guess
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (randomTitle.indexOf(userGuess) === -1 && letters.indexOf(userGuess) >= 0 && wrongGuesses.indexOf(userGuess) === - 1) {
		wrongGuesses.push(userGuess);

		var displayWrongGuesses = document.getElementById('wrongGuesses');
		displayWrongGuesses.innerHTML = wrongGuesses.join(', ').toUpperCase();
	}

	if (randomTitle.indexOf(userGuess) >= 0 && randomTitle.indexOf(userGuess) < randomTitle.length && correctLetters.indexOf(userGuess) === -1) {
		correctLetters.push(userGuess);

		var displayCorrectLetters = document.getElementById('movieTitle');
		displayCorrectLetters.innerHTML = correctLetters.join(' ').toUpperCase();
	}
}





