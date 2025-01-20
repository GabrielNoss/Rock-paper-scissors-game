function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    if(player === "Rock" && computer === "Scissors") {
        return true;
    } else if(player === "Paper" && computer === "Rock") {
        return true;
    } else if (player === "Scissors" && computer === "Paper") {
        return true;
    } else {
        false; //Return false in case didn't match the other conditions
    }
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    if(hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++; //If the player wins, add 1
        return `Player wins! ${userOption} beats ${computerResult}`
    } else if (computerResult === userOption) {
        return `It's tie! Both chose ${userOption}`;
    } else {
        computerScore++; //Computer wins, add 1
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultMsg = document.getElementById('results-msg');
const winnerResultsMsg = document.getElementById('winner-msg');
const resetGameBtn = document.getElementById('reset-game-btn');
const optionsContainer = document.querySelector('.option-container');


function showResults (userOption) {
    if(playerScore < 3 || computerScore < 3) {

        roundResultMsg.innerText = getRoundResults(userOption);
        playerScoreSpanElement.innerText = playerScore;
        computerScoreSpanElement.innerText = computerScore;

        if(playerScore === 3 || computerScore === 3) {
            showWinner()
        }  
    } 
}

function showWinner() {
    if(playerScore == 3) {
        winnerResultsMsg.innerText = "Player has won the game!"
    } else {
        winnerResultsMsg.innerText = "Computer has won the game!"
    }
    //Hide buttons when there is a winner

    optionsContainer.style.display = "none";
    resetGameBtn.style.display = "block";
}

function resetGame () {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0;
    winnerResultsMsg.innerText = "";
    roundResultMsg.innerText = "";
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
}
resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

rockBtn.addEventListener("click", function () {
    showResults("Rock");
})
paperBtn.addEventListener("click", function () {
    showResults("Paper");
})
scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
})