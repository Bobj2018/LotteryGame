
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
	let userGuesses = prompt("Input 6 numbers (seperate with a comma)");
	userGuesses = userGuesses.split(",");
	console.log(userGuesses)


	return isGuessCorrect(userGuesses, randomNumbers);
}

console.log(playGame());