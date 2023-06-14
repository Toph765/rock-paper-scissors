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