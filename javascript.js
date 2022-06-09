function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            console.log ("rock")
            return "rock"
        case 1:
            console.log ("paper")
            return "paper"
        case 2:
            console.log ("scissors")
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw!")
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You won the round!")
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("Buuu! You lose!")
       }
}

const playerSelection = prompt ("Choose one: rock, paper or scissors")
const computerSelection = computerPlay()
playRound(playerSelection, computerSelection)



