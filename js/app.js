let numberForm = document.getElementById("numberForm")
let subBtn = document.getElementById("subBtn");
let formDiv = document.getElementById("formDiv");
let userDiv = document.getElementById("userDiv");
let randomDiv = document.getElementById("randomDiv");
let randomList = document.querySelectorAll(".randomList");
let userList = document.querySelectorAll(".userList");
console.log(numberForm);

let userGuesses = []
let randomNumbers = []

subBtn.onclick = function() {
for (let i = 0; i < 6; i++){
	userGuesses.push(Number(numberForm.elements[i].value));
}
formDiv.classList.toggle("hideDIV");
userDiv.classList.toggle("hideDIV");
randomDiv.classList.toggle("hideDIV");

displayLists();
isGuessCorrect(userGuesses, randomNumbers);
};

const displayLists = () => {
 for (let i = 0; i < 6; i++) {
 	randomList[i].innerHTML = randomNumbers[i];
 	userList[i].innerHTML = userGuesses[i];
 }
}

//Creates Random Number
const createRandomNumber = () => {
	//Create an array to store numbers
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
		if (userGuesses[i] === randomNumbers[i]){
			correctGuesses.push(true);
			userList[i].style.color = "green";
		} else {
			correctGuesses.push(false);
			userList[i].style.color = "red"
		}
	}
	return correctGuesses;
}

const playGame = () => {
	let randomNumbers = createRandomNumber();
	console.log(randomNumbers)
	console.log(userGuesses);
}

console.log(playGame());

