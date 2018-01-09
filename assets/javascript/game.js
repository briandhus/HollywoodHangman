
var titles = ["better off dead", "the goonies", "star wars", "gremlins", "aliens", "the usual suspects", "groundhog day", "animal house", "casablanca", "psycho", "the godfather", "dr strangelove", "jurassic park", "poltergeist", "apocalypse now", "goodfellas", "pulp fiction", "edward scissorhands", "beetlejuice", "jungle fever"];
var renderedString = "";
var wins = 0;
var losses = 0;
var ties = 0;

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
function displayRenderedString() {
	var html = '<p>' + renderedString + '</p>';
	document.querySelector('#movieTitle').innerHTML = html;
}

displayRenderedString();
console.log(renderedString);

// var userOption = {}
