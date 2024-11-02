//round count div


let round = 1;

const roundCount = document.createElement("div");
    document.body.appendChild(roundCount);
        roundCount.textContent = `ROUND: ${round}`;
        roundCount.style.justifySelf = "center";
        roundCount.style.padding = "20px";
        roundCount.style.fontFamily = "courier";
        roundCount.style.fontSize = "34px";


//create button options
const buttonContainer = document.createElement("div");
    document.body.appendChild(buttonContainer);
        buttonContainer.style.justifySelf = "center";
        buttonContainer.style.padding = "20px";

    const rockPic = document.createElement("img");
        rockPic.src = "rock-576669_1280.png";
        rockPic.style.width = "200px";
        rockPic.style.height = "200px";

    const rock = document.createElement("button");
        rock.setAttribute("id", "rock");
        rock.appendChild(rockPic); 
        rock.style.backgroundImage = "rockPic";
        buttonContainer.appendChild(rock);
        rock.style.margin = "20px";
        rock.style.width = "200px";
        rock.style.height = "200px";
        rock.style.border = "none";
        rock.style.backgroundColor = "white";
        rock.addEventListener('mouseover', () => {
            rock.style.transform = 'scale(1.1)';
        })
        rock.addEventListener('mouseout', () => {
            rock.style.transform = '';
        })

    const paperPic = document.createElement("img");
        paperPic.src = "paper-23652_1280.png";
        paperPic.style.width = "200px";
        paperPic.style.height = "200px";

    const paper = document.createElement("button");
        paper.setAttribute("id", "paper");
        paper.appendChild(paperPic);
        paper.style.backgroundImage = "paperPic";
        buttonContainer.appendChild(paper);
        paper.style.margin = "20px";
        paper.style.width = "200px";
        paper.style.height = "200px";
        paper.style.border = "none";
        paper.style.backgroundColor = "white";
        paper.addEventListener('mouseover', () => {
            paper.style.transform = 'scale(1.1)';
        })
        paper.addEventListener('mouseout', () => {
            paper.style.transform = '';
        })

    const scissorsPic = document.createElement("img");
        scissorsPic.src = "scissors-2026687_1280.png";
        scissorsPic.style.width = "200px";
        scissorsPic.style.height = "200px";

 
    const scissors = document.createElement("button");
        scissors.setAttribute("id", "scissors");
        scissors.appendChild(scissorsPic);
        scissors.style.backgroundImage = "scissorsPic";
        buttonContainer.appendChild(scissors);
        scissors.style.margin = "20px";
        scissors.style.width = "200px";
        scissors.style.height = "200px";
        scissors.style.border = "none";
        scissors.style.backgroundColor = "white";
        scissors.addEventListener('mouseover', () => {
            scissors.style.transform = 'scale(1.1)';
        })
        scissors.addEventListener('mouseout', () => {
            scissors.style.transform = '';
        })

//create Round Results div
const displayResults = document.createElement("div");
    document.body.appendChild(displayResults);

const human = document.createElement("div");
const computer = document.createElement("div");
const winner = document.createElement("div");


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

//create playRound function

let computerChoice = getComputerChoice(3);

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { 
        winner.textContent = `It's a draw. Play again.`;
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        winner.textContent = `${humanChoice} beats ${computerChoice}. You win!`;
        humanScore++;
    
    }   

    else { 
        winner.textContent = `${computerChoice} beats ${humanChoice}. You lose.`;
        computerScore++;
    }
} 
let humanScore = 0;
let computerScore = 0

//score display div
const scores = document.createElement("div");
    document.body.appendChild(scores);
        const humanScoreDisplay = document.createElement("div");
            scores.appendChild(humanScoreDisplay);
            humanScoreDisplay.textContent = `YOUR SCORE: ${humanScore}`;
        const computerScoreDisplay = document.createElement("div");
            scores.appendChild(computerScoreDisplay);
            computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
    scores.style.justifySelf = "center";
    scores.style.padding = "50px";
    scores.style.fontSize = "34px";
    scores.style.fontFamily = "courier";


function newRound() {
    displayResults.remove(human);
    displayResults.remove(computer);

    
}

function playGame() {

if ((humanScore < 5) || (computerScore < 5)) {
    rock.addEventListener('click', () => {
        displayResults.appendChild(human);
            human.textContent = `You: rock`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("rock", computerChoice);
        
        
    });

    paper.addEventListener('click', () => {
        roundCount.textContent = `Round: ${round++}`;
        displayResults.appendChild(human);
            human.textContent = `You: paper`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("paper", computerChoice);
       
           
            
    });

    scissors.addEventListener('click', () => {
        roundCount.textContent = `Round: ${round++}`;
        displayResults.appendChild(human);
            human.textContent = `You: scissors`;
        displayResults.appendChild(computer);
            computer.textContent = `Computer: ${computerChoice}`;
        displayResults.appendChild(winner);
            playRound("scissors", computerChoice);
     

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
