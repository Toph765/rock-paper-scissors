function getComputerChoice() {
    let compSelection;
    let compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1) {
        compSelection = "rock"
        return compSelection
    }
    else if (compChoice === 2) {
        compSelection = "paper"
        return compSelection
    }
    else {
        compSelection = "scissors"
        return compSelection
    }
}

function playRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection === "rock" && computerSelection === "paper") {
        message = "You lose! Paper beats rock!"
        return message
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        message = "You won! Rock beats scissors!"
        return message
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        message = "You lose! Scissors beat paper!"
        return message
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        message = "You won! Paper beats rock!"
        return message
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        message = "You lose! Rock beats scissors!"
        return message
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        message = "You won! Scissors beats paper!"
        return message
    }
    else if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        message = "Please write rock, paper or scissors!"
        return message
    }
    else {
        message = "It's a tie!"
        return message
    }
} 

function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Rock Paper Scissor Shoot!").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()