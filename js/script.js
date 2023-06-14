function getComputerChoice() {
    let compSelection;
    let compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1) {
        compSelection = "Rock"
        return compSelection
    }
    else if (compChoice === 2) {
        compSelection = "Paper"
        return compSelection
    }
    else {
        compSelection = "Scissors"
        return compSelection
    }
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        message = "You lose! Paper beats rock!"
        return message
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        message = "You won! Rock beats scissors!"
        return message
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        message = "You lose! Scissors beat paper!"
        return message
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        message = "You won! Paper beats rock!"
        return message
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        message = "You lose! Rock beats scissors!"
        return message
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        message = "You won! Scissors beats paper!"
        return message
    }
    else {
        message = "It's a tie!"
        return message
    }
} 

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))