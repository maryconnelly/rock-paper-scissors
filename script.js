//round count div
let round = 1;
const roundCount = document.createElement("div");
    document.body.appendChild(roundCount);
        roundCount.textContent = `ROUND: ${round}`;
        roundCount.style.justifySelf = "center";
        roundCount.style.padding = "20px";
        roundCount.style.fontFamily = "courier";
        roundCount.style.fontSize = "34px";
//human div
const human = document.createElement("div");
    document.body.appendChild(human);
    human.textContent = "You:";
    human.style.justifySelf = "center";
    human.style.fontSize = "34px";
    human.style.fontFamily = "courier";

//create button options
const buttonContainer = document.createElement("div");
    document.body.appendChild(buttonContainer);
        buttonContainer.style.justifySelf = "center";
        buttonContainer.style.padding = "20px";

    const rockPic = document.createElement("img");
        rockPic.src = "rock-576669_1280.png";
        rockPic.style.width = "150px";
        rockPic.style.height = "150px";

    const rock = document.createElement("button");
        rock.setAttribute("id", "rock");
        rock.appendChild(rockPic); 
        rock.style.backgroundImage = "rockPic";
        buttonContainer.appendChild(rock);
        rock.style.margin = "50px";
        rock.style.width = "150px";
        rock.style.height = "150px";
        rock.style.border = "none";
        rock.style.backgroundColor = "white";
        rock.addEventListener('mouseover', () => {
            rock.style.transform = 'scale(1.1)';
        })
        rock.addEventListener('mouseout', () => {
            rock.style.transform = '';
        })

        rock.addEventListener('click', getComputerChoice);
       


    const paperPic = document.createElement("img");
        paperPic.src = "paper-23652_1280.png";
        paperPic.style.width = "150px";
        paperPic.style.height = "150px";

    const paper = document.createElement("button");
        paper.setAttribute("id", "paper");
        paper.appendChild(paperPic);
        paper.style.backgroundImage = "paperPic";
        buttonContainer.appendChild(paper);
        paper.style.margin = "50px";
        paper.style.width = "150px";
        paper.style.height = "150px";
        paper.style.border = "none";
        paper.style.backgroundColor = "white";
        paper.addEventListener('mouseover', () => {
            paper.style.transform = 'scale(1.1)';
        })
        paper.addEventListener('mouseout', () => {
            paper.style.transform = '';
        })
        paper.addEventListener('click', getComputerChoice);

    const scissorsPic = document.createElement("img");
        scissorsPic.src = "scissors-2026687_1280.png";
        scissorsPic.style.width = "150px";
        scissorsPic.style.height = "150px";

 
    const scissors = document.createElement("button");
        scissors.setAttribute("id", "scissors");
        scissors.appendChild(scissorsPic);
        scissors.style.backgroundImage = "scissorsPic";
        buttonContainer.appendChild(scissors);
        scissors.style.margin = "50px";
        scissors.style.width = "150px";
        scissors.style.height = "150px";
        scissors.style.border = "none";
        scissors.style.backgroundColor = "white";
        scissors.addEventListener('mouseover', () => {
            scissors.style.transform = 'scale(1.1)';
        })
        scissors.addEventListener('mouseout', () => {
            scissors.style.transform = '';
        })



const computer = document.createElement("div");
document.body.appendChild(computer);
computer.textContent = "Computer:";
computer.style.justifySelf = "center";
computer.style.fontSize = "34px";
computer.style.fontFamily = "courier";

const computerOptions = document.createElement("div");
document.body.appendChild(computerOptions);
computerOptions.style.justifySelf = "center";

const computerRockPic = document.createElement("img");
computerRockPic.src = "rock-576669_1280.png";
computerOptions.appendChild(computerRockPic);
computerRockPic.style.width = "150px";
computerRockPic.style.height = "150px";
computerRockPic.style.margin = "50px";

const computerPaperPic = document.createElement("img");
computerPaperPic.src = "paper-23652_1280.png";
computerOptions.appendChild(computerPaperPic);
computerPaperPic.style.width = "150px";
computerPaperPic.style.height = "150px";
computerPaperPic.style.margin = "50px";

const computerScissorsPic = document.createElement("img");
computerScissorsPic.src = "scissors-2026687_1280.png";
computerOptions.appendChild(computerScissorsPic);
computerScissorsPic.style.width = "150px";
computerScissorsPic.style.height = "150px";
computerScissorsPic.style.margin = "50px";


const winner = document.createElement("div");
document.body.appendChild(winner);
winner.style.justifySelf = "center";
winner.style.fontSize = "34px";
winner.style.fontFamily = "courier";


//create computer choice function 

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);

    if(randomValue === 0) {
        computerRockPic.style.transform = "scale(1.5)";
        computerPaperPic.style.transform = "scale(.5)";
        computerScissorsPic.style.transform = "scale(.5)";
        return "rock";

    } else if(randomValue === 1) {
        computerRockPic.style.transform = "scale(.5)";
        computerPaperPic.style.transform = "scale(1.5)";
        computerScissorsPic.style.transform = "scale(.5)";
        return "paper";

    } else {
        computerRockPic.style.transform = "scale(.5)";
        computerPaperPic.style.transform = "scale(.5)";
        computerScissorsPic.style.transform = "scale(1.5)";
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

}

function playGame() {

if ((humanScore < 5) || (computerScore < 5)) {
    rock.addEventListener('click', () => {
        round++
        rock.style.transform = "scale(1.5)";
        paper.style.transform = "scale(.5)";
        scissors.style.transform = "scale(.5)";     
        playRound("rock", computerChoice);
        
        
    });

    paper.addEventListener('click', () => {
        round++
        paper.style.transform = "scale(1.5)";
        rock.style.transform = "scale(.5)";
        scissors.style.transform = "scale(.5)";
        playRound("paper", computerChoice);    
            
    });

    scissors.addEventListener('click', () => {
        round++;
        rock.style.transform = "scale(.5)";
        paper.style.transform = "scale(.5)";
        scissors.style.transform = "scale(1.5)";
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
