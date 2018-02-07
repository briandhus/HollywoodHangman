
var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var renderedTitle = "";
var wrongLetters = [];
var correctLetters = [];
var randomTitle;
var titleLength = 0;
var wins = 0;
var losses = 0;
var lives = 7;

// letter bank
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function startGame() {
	// Choose a random title
	randomTitle = titles[Math.floor(Math.random() * titles.length)];
	correctLetters = randomTitle.split("");
	titleLength = correctLetters.length;

	// reset
	lives = 7;
	wrongLetters = [];
	correctLetters = [];
	
	// computer renders length of title in underscores
	function displayRenderedTitle() {
		for (var i = 0; i < randomTitle.length; i++) {
			if (randomTitle[i] === " ") {
				renderedTitle += " ";		
			} else {
				renderedTitle += "_";
			}	
		}
		// show movie title on game page in underscores
		var html = '<p>' + renderedTitle + '</p>';
		document.getElementById('movieTitle').innerHTML = html;
		console.log(renderedTitle);
	}
	// populate html
	document.getElementById('remainingGuesses').innerHTML = lives;
	document.getElementById('wins').innerHTML = wins;
	document.getElementById('losses').innerHTML = losses;

	displayRenderedTitle();

	console.log(randomTitle);
	console.log(correctLetters);
	console.log(titleLength);
}    

startGame();

// capture user guess
document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);

	if (randomTitle.indexOf(userGuess) === -1 && letters.indexOf(userGuess) >= 0 && wrongLetters.indexOf(userGuess) === - 1) {
		wrongLetters.push(userGuess);

		var displayWrongLetters = document.getElementById('wrongLetters');
		displayWrongLetters.innerHTML = wrongLetters.join(', ').toUpperCase();
	}

	if (randomTitle.indexOf(userGuess) >= 0 && randomTitle.indexOf(userGuess) < randomTitle.length && correctLetters.indexOf(userGuess) === -1) {
		correctLetters.push(userGuess);

		var displayCorrectLetters = document.getElementById('movieTitle');
		displayCorrectLetters.innerHTML = correctLetters.join(' ').toUpperCase();
	}
}





