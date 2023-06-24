const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;

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
        playerScore++;
        console.log('player:' + playerScore)
        return message;
    } else {
        message = `You lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        console.log('computer:' + computerScore)
        return message;
    }
} 

buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = button.getAttribute('value');
    const computerSelection = getComputerChoice();
    result.textContent = playRound(playerSelection, computerSelection);
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        finalResult()
        playerScore = 0;
        computerScore = 0;
    }
}))

function finalResult () {
    if (playerScore > computerScore) {
        return result.textContent = 'Congratulations! You won!';
    } else {
        return result.textContent = 'Oh shucks! You lose!';
    }
}
