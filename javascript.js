let playerScore = 0
let computerScore = 0

const resultContainer = document.querySelector(".result")
resultContainer.textContent = playerScore + " : " + computerScore

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

rockButton.addEventListener("click",() => {
    playerSelection = "rock"
    computerSelection = computerPlay()
    console.log("Player plays:", playerSelection)
    playRound(playerSelection, computerSelection)
    resultContainer.textContent = playerScore + " : " + computerScore
})

paperButton.addEventListener("click",() => {
    playerSelection = "paper"
    computerSelection = computerPlay()
    console.log("Player plays:", playerSelection)
    playRound(playerSelection, computerSelection)
    resultContainer.textContent = playerScore + " : " + computerScore
})

scissorsButton.addEventListener("click",() => {
    playerSelection = "scissors"
    computerSelection = computerPlay()
    console.log("Player plays:", playerSelection)
    playRound(playerSelection, computerSelection)
    resultContainer.textContent = playerScore + " : " + computerScore
})






function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            console.log ("Computer plays: rock!")
            return "rock"
        case 1:
            console.log ("Computer plays: paper!")
            return "paper"
        case 2:
            console.log ("Computer plays: scissors!")
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw!")
        console.log("Player: " + playerScore + " " + "Computer: " + computerScore)
        return "Draw"
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You won the round!")
        playerScore++
        console.log("Player: " + playerScore + " " + "Computer: " + computerScore)
        return "Player wins"
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("Buuu! You lose!")
        computerScore++
        console.log("Player: " + playerScore + " " + "Computer: " + computerScore)
        return "Computer wins"
       }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerScore === computerScore) {
        console.log("Game result: DRAW")
    }
    if (playerScore > computerScore) {
        console.log ("Congrats! You beated up the computer! YOU WON!")
    }
    if (playerScore < computerScore) {
        console.log ("This time you lose :( Computer won!")
    }
}

