function getComputerChoice() {
    let CompChoice = Math.floor(Math.random() * 3) + 1;

    if (CompChoice === 1) {
        return "Rock"
    }
    else if (CompChoice === 2) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

console.log(getComputerChoice())