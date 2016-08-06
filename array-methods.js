var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

function planetsOutput(element) {
	el.innerHTML += "<p> " + element + " </p>";
}

planets.forEach(planetsOutput);

// Use the map method to create a new array where the first letter of each planet is capitalized

function planetsCapitalized(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log("planetsCapitalized", planets.map(planetsCapitalized));

// Use the filter method to create a new array that contains planets with the letter 'e'
function planetsE(str) {
	for (var i = 0; i < str.length; i++){
		if (str.includes("e")){
			return str
		}
	}
}

console.log("planetsE", planets.filter(planetsE));
// Use the reduce method to create a sentence from the words in the following array

function wordsReduce(previous, current){
	return previous + " " + current
}

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
console.log("wordsReduce", words.reduce(wordsReduce));

