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

const buttons = document.querySelectorAll('button');

console.log(buttons[0].textContent);

buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = button.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}))
