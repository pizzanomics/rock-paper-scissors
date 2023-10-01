const moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const liveScore = document.querySelector('#liveScore')
const resultMessageElement = document.querySelector('#result-message');


let playerSelection
let computerSelection

rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    playRound();
    liveScore.textContent = ("Player " + playerScore + " - " + computerScore + " Computer");

    if (playerScore ==  5 || computerScore == 5) {
       finalScore();
    }

});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    playRound();
    liveScore.textContent = ("Player " + playerScore + " - " + computerScore + " Computer");

    if (playerScore ==  5 || computerScore == 5) {
       finalScore();
    }
    
});

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound();
    liveScore.textContent = ("Player " + playerScore + " - " + computerScore + " Computer");

    if (playerScore ==  5 || computerScore == 5) {
       finalScore();
    }
    
});

const win = document.createElement('p');
const tie = document.createElement('p');
const lose = document.createElement('p');
const error = document.createElement('p');

const results = document.querySelector('#results')
const resultsBox = document.querySelector('#results-box')


let playerScore = 0
let computerScore = 0

function playRound() {
    let resultMessage

    if (playerSelection === computerSelection){
        resultMessage = ("It's a tie -- you both chose "+ playerSelection + "!")
    }

    else if (playerSelection === "rock" && computerSelection === "scissors"){
        playerScore++;
        resultMessage = ("You win!");
    }

    else if (playerSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        resultMessage = ("You lose...");
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        playerScore++;
        resultMessage = ("You win!");
    }

    else if (playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        resultMessage = ("You lose...");
    }

    else if (playerSelection === "scissors" && computerSelection === "rock"){
        computerScore++;
        resultMessage = ("You lose...");
        }

    else if (playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++;
        resultMessage = ("You win!");
    }

    else {
        resultMessage = "You must have entered something wrong..."
    }

    resultMessageElement.textContent = resultMessage;

}

const overallWinner = document.createElement('p');
const overallLoser = document.createElement('p');


function finalScore() {
    if (playerScore > computerScore) {
        overallWinner.textContent = ("You win! You beat the computer " + playerScore + "-" + computerScore + "!");
        results.appendChild(overallWinner);
    }

    else { 
        overallLoser.textContent = ("You lose... The computer beat you " + computerScore + "-" + playerScore + "...")
        results.appendChild(overallLoser);
    }
}