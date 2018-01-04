let numberForm = document.getElementById("numberForm")
let subBtn = document.getElementById("subBtn");
let formDiv = document.getElementById("formDiv");
let userDiv = document.getElementById("userDiv");
let randomDiv = document.getElementById("randomDiv");
console.log(numberForm);

let userGuesses = []

subBtn.onclick = function() {
for (let i = 0; i < 6; i++){
	userGuesses.push(Number(numberForm.elements[i].value));
}
formDiv.classList.toggle("hideDIV");
userDiv.classList.toggle("hideDIV");
randomDiv.classList.toggle("hideDIV");
};

//Creates Random Number
const createRandomNumber = () => {
	//Create an array to store numbers
	let randomNumbers = []
	//Create numbers 6 times
	for (let i = 0; i < 6; i++) {
		//Create number between 1 - 50
		randomNumbers.push(Math.floor(Math.random() * 51));
	}
	//return array
	
	return randomNumbers;
}

const isGuessCorrect = (userGuesses, randomNumbers) => {
	let correctGuesses = []
	for (let i = 0; i < 6; i++) {
		if (Number(userGuesses[i]) === randomNumbers[i]){
			correctGuesses.push(true);
		} else {
			correctGuesses.push(false);
		}
	}
	return correctGuesses;
}

const playGame = () => {
	let randomNumbers = createRandomNumber();
	console.log(randomNumbers)
	console.log(userGuesses);


	return isGuessCorrect(userGuesses, randomNumbers);
}

//console.log(playGame());
//
