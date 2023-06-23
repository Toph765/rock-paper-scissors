const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection === computerSelection) {
            message = "Its a tie!";
            return message;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
               playerSelection === "paper" && computerSelection === "rock" ||
               playerSelection === "scissors" && computerSelection === "paper") {
        message = `You won! ${playerSelection} beats ${computerSelection}!`;
        return message;
    } else {
        message = `You lost! ${computerSelection} beats ${playerSelection}!`;
        return message;
    }
} 

buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection, computerSelection);
}))
