//create button options

const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.textContent = `rock`;
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.textContent = `paper`;
document.body.appendChild(paper);

const scissors = document.createElement("button");
scissors.setAttribute("id", "scissors");
scissors.textContent = `scissors`;
document.body.appendChild(scissors);
//create results div

const displayResults = document.createElement("div");
document.body.appendChild(displayResults);

//create computer choice function 

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

//create variables for display div

const roundCount = document.createElement("div");


const human = document.createElement("div");

const computer = document.createElement("div");

const winner = document.createElement("div");

const humanScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");



//create playRound function

let computerChoice = getComputerChoice(3);

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { 
        winner.textContent = `It's a draw. Play again.`;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        winner.textContent = `${humanChoice} beats ${computerChoice}. You win!`;
        humanScoreDisplay.textContent = `Your score: ${humanScore++}`;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
    }   

    else { 
        winner.textContent = `${computerChoice} beats ${humanChoice}. You lose.`;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer score: ${computerScore++}`;
    }
} 

let round = 1;

let humanScore = 0;
let computerScore = 0


function endRound() {}

function playGame() {

if ((humanScore < 5) || (computerScore < 5)) {
    rock.addEventListener('click', () => {
        roundCount.textContent = `Round: ${round++}`;
        displayResults.appendChild(roundCount);
        displayResults.appendChild(human);
            human.textContent = `You: rock`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("rock", computerChoice);
        displayResults.appendChild(humanScoreDisplay);
        displayResults.appendChild(computerScoreDisplay);
    

           

    
        
    });

    paper.addEventListener('click', () => {
        roundCount.textContent = `Round: ${round++}`;
        displayResults.appendChild(roundCount);
        displayResults.appendChild(human);
            human.textContent = `You: paper`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("paper", computerChoice);
            displayResults.appendChild(humanScoreDisplay);
        displayResults.appendChild(computerScoreDisplay);
        
            
            
    });

    scissors.addEventListener('click', () => {
        roundCount.textContent = `Round: ${round++}`;
        displayResults.appendChild(roundCount);
        displayResults.appendChild(human);
            human.textContent = `You: scissors`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("scissors", computerChoice);
        displayResults.appendChild(humanScoreDisplay);
        displayResults.appendChild(computerScoreDisplay);
    
    
            

    });


} else {
    buttons.remove();
    displayResults.remove();
    declareWinner();
}
}

//create divs for final results div
const finalResults = document.createElement("div");
document.body.appendChild(finalResults);

//create replay button

const replay = document.createElement("button");
replay.textContent = "Play again?";


//declare winner function and replay option

function declareWinner() {
    if (humanScore > computerScore) {
        finalResults.textcontent = `Game over! Your score: ${humanScore} Computer score: ${computerScore}. You are the winner!`;
        finalResults.appendChild(replay);

    } else {
        finalResults.textcontent = `Game over! Your score: ${humanScore} Computer score: ${computerScore}. Computer wins. Better luck next time!`;
        finalResults.appendChild(replay);
}
}

playGame();
