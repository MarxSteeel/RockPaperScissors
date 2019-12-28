// Function Definitions

var pWins = 0;
var cWins = 0;

function computerPlay() {
  let num = Math.floor((Math.random() * 3) + 1);
  if (num == 1) {
		return "rock";
  } else if (num == 2) {
		return "paper";			
  } else if (num == 3) {
		return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
	console.log(pWins);
	console.log(cWins);
	const results = document.querySelector(".results");
	const para = document.createElement("p");
	para.style.color = "red";
	para.style.fontSize = "14px";
	results.appendChild(para);
  let player = playerSelection.toLowerCase()
  if (player == computerSelection) {
		para.textContent = "It's a draw";
  } else if (player == "rock") {
    if (computerSelection == "paper") {
			para.textContent = "You lose!";
			cWins += 1;
    } else if (computerSelection == "scissors") {
			para.textContent = "You win!";
			pWins += 1;
    }
  } else if (player == "paper") {
    if (computerSelection == "scissors") {
			para.textContent = "You lose!";
			cWins += 1;
    } else if (computerSelection == "rock") {
			para.textContent = "You win!";
			pWins += 1;
    }
  } else if (player == "scissors") {
    if (computerSelection == "rock") {
			para.textContent = "You lose!";
			cWins += 1;
    } else if (computerSelection == "paper") {
			para.textContent = "You win!";
			pWins += 1;
    }
  }
}

function game() {
	let i = 0;
	let playerWins = 0;
	let computerWins = 0;
	while (i < 5) {
		let player = prompt("What will you play?");
		let play = playRound(player, computerPlay());
		if (play == "It's a draw") {
			// console.log("It's a draw")
			i++;
		}
		else if (play == "You win!") {
			// console.log("You win!")
			playerWins++;
			i++;
		}
		else if (play == "You lose!") {
			// console.log("You lose!")
			computerWins++;
			i++;
		}
	}
	if (playerWins > computerWins) {
		return "You won the match!";
	}
	else if (playerWins < computerWins) {
		return "You lost the match";
	}
}

//Actual play

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener("click", function() {
	if (pWins < 5 && cWins < 5) {
		playRound("rock", computerPlay())
	} else if (pWins == 5) {
		alert("YOU WIN!");
	} else if (cWins == 5) {
		alert("YOU LOSE!");
	}
});

paper.addEventListener("click", function() {
	if (pWins < 5 && cWins < 5) {
		playRound("paper", computerPlay())
	} else if (pWins == 5) {
		alert("YOU WIN!");
	} else if (cWins == 5) {
		alert("YOU LOSE!");
	}
});

scissors.addEventListener("click", function() {
	if (pWins < 5 && cWins < 5) {
		playRound("scissors", computerPlay())
	} else if (pWins == 5) {
		alert("YOU WIN!");
	} else if (cWins == 5) {
		alert("YOU LOSE!");
	}
});


