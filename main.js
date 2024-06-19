const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const wrongMessage = document.querySelector(".wrongGuess")

const btnSubmit = document.querySelector("#submitButton")
const btnRestart = document.querySelector("#restartButton");

var answerNumber = Math.floor(Math.random() * 10) +1;
let userAttempts = 1;

console.log(answerNumber);


// Events
btnSubmit.addEventListener('click', handleClickGuess);
btnRestart.addEventListener('click', handleClickRestart);

function handleClickGuess(e) {
	e.preventDefault();
	
	const inputNumber = document.querySelector("#inputNumber").value;

	wrongMessage.classList.remove("horizontalShake");	

	if (inputNumber == "") {
		alert("Insert a number.")
	} else if (inputNumber > 10) {
		alert("The maximum number is 10...")
	};

	// console.log(inputNumber);

	if(Number(inputNumber) == answerNumber) {
		toggleScreen();

		document
			.querySelector(".screen2 h2")
			.innerText = `You got it in ${userAttempts} attempts!`;
	} else {
		document.querySelector("#inputNumber").focus();
		document.querySelector("#inputNumber").value = "";
		wrongMessage.classList.remove("fade");
		wrongMessage.classList.add("horizontalShake");		
	};
	
	userAttempts++;
};

function handleClickRestart() {
	toggleScreen()
	document.querySelector("#inputNumber").value = "";
	answerNumber = Math.floor(Math.random() * 10) + 1;
	wrongMessage.classList.add("fade");
	userAttempts = 1
}

function toggleScreen(){
	screen1.classList.toggle("hide");
	screen2.classList.toggle("hide");
}