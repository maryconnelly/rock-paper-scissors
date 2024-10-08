//function to randomize computer choice with math.random

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);

    if(randomValue === 0) {
        return "rock";

    } else if(randomValue === 1) {
        return "paper";

    } else {
        return "scissors";
    }
}

//console.log(getComputerChoice(3));

//function to get human choice with prompt
// function to get human choice
function getHumanChoice() {
    let promptChoice = prompt("Rock, paper, or scissors?");

        if(promptChoice.toLowerCase() === "rock") {
            return "rock";

        } else if(promptChoice.toLowerCase() === "paper") {
            return "paper" 

        } else if(promptChoice.toLowerCase() === "scissors") {
            return "scissors";
        
        } else {
            console.log("Invalid choice. Please try again.");
        }
}

//console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

//function for 5 round and end of game

function playGame() {
    //declare score variables and round counter
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
// function for one round 

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`Round: ${round}`);
            console.log(`It's a draw. Play again.`);
        }

        else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log(`Round: ${round}`);
            console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        return humanScore++;
        }   
    
        else { 
            console.log(`Round: ${round}`);
            console.log(`${computerChoice} beats ${humanChoice}. You lose.`);
        return computerScore++;
        }
    } 

    while (round < 5 ){
        round++;
        getInput();
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`)
    
        
    }
    if (round = 5) {
        declareWinner();
    }

        function getInput() {
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice(3);
            playRound(humanSelection, computerSelection);
            
        }
        

    function declareWinner() {
        if (humanScore > computerScore) {
            console.log(`Game over! Your score: ${humanScore} Computer score: ${computerScore}. You are the winner!`);
        } else if (humanScore < computerScore) {
            console.log(`Game over! Your score: ${humanScore} Computer score: ${computerScore}. Computer wins. Better luck next time!`);

        } else {
            console.log(`Game over! Your score: ${humanScore} Computer score: ${computerScore}. It's a tie!`);
        }
    }

}

playGame();
