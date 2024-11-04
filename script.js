//round count div
let round = 0;
let humanScore = 0;
let computerScore = 0;

const roundCount = document.createElement("div");
    document.body.appendChild(roundCount);
        roundCount.style.justifySelf = "stretch";
        roundCount.style.textAlign = "center";
        roundCount.style.padding = "20px";
        roundCount.style.fontFamily = "courier";
        roundCount.style.fontSize = "34px";
        roundCount.style.backgroundColor = "#C16E70";
        roundCount.style.color = "white";


//human div
    const human = document.createElement("div");
        document.body.appendChild(human);
            human.textContent = "YOU";
            human.style.fontWeight= "bold";
            human.style.padding = "10px";
            human.style.textAlign = "center";
            human.style.justifySelf = "stretch";
            human.style.fontSize = "28px";
            human.style.fontFamily = "courier";
            human.style.backgroundColor = "#F2F3D9";

    const humanScoreDisplay = document.createElement("div");
        document.body.appendChild(humanScoreDisplay);
            humanScoreDisplay.style.fontWeight= "bold";
            humanScoreDisplay.style.padding = "10px";
            humanScoreDisplay.style.textAlign = "center";
            humanScoreDisplay.style.justifySelf = "stretch";
            humanScoreDisplay.style.fontSize = "28px";
            humanScoreDisplay.style.fontFamily = "courier";
            humanScoreDisplay.style.backgroundColor = "#F2F3D9";

//create button options
    const buttonContainer = document.createElement("div");
        document.body.appendChild(buttonContainer);
            buttonContainer.style.display = "flex";
            buttonContainer.style.justifySelf = "stretch";
            buttonContainer.style.justifyContent = "center";
            buttonContainer.style.backgroundColor = "#F2F3D9";

    const rockPic = document.createElement("img");
        rockPic.src = "rock-576669_1280.png";
        rockPic.style.width = "100px";
        rockPic.style.height = "100px";

    const rock = document.createElement("button");
        rock.setAttribute("id", "rock");
        rock.appendChild(rockPic); 
        rock.style.backgroundImage = "rockPic";
        buttonContainer.appendChild(rock);
        rock.style.margin = "50px";
        rock.style.width = "100px";
        rock.style.height = "100px";
        rock.style.border = "none";
        rock.style.backgroundColor = "#F2F3D9";
        rock.addEventListener('mouseover', () => {
            rock.style.transform = 'scale(1.1)';
        })
        rock.addEventListener('mouseout', () => {
            rock.style.transform = '';
        })
       


    const paperPic = document.createElement("img");
        paperPic.src = "paper-23652_1280.png";
        paperPic.style.width = "100px";
        paperPic.style.height = "100px";

    const paper = document.createElement("button");
        paper.setAttribute("id", "paper");
        paper.appendChild(paperPic);
        paper.style.backgroundImage = "paperPic";
        buttonContainer.appendChild(paper);
        paper.style.margin = "50px";
        paper.style.width = "100px";
        paper.style.height = "100px";
        paper.style.border = "none";
        paper.style.backgroundColor = "#F2F3D9";
        paper.addEventListener('mouseover', () => {
            paper.style.transform = 'scale(1.1)';
        })
        paper.addEventListener('mouseout', () => {
            paper.style.transform = '';
        })
      

    const scissorsPic = document.createElement("img");
        scissorsPic.src = "scissors-2026687_1280.png";
        scissorsPic.style.width = "100px";
        scissorsPic.style.height = "100px";

 
    const scissors = document.createElement("button");
        scissors.setAttribute("id", "scissors");
        scissors.appendChild(scissorsPic);
        scissors.style.backgroundImage = "scissorsPic";
        buttonContainer.appendChild(scissors);
        scissors.style.margin = "50px";
        scissors.style.width = "100px";
        scissors.style.height = "100px";
        scissors.style.border = "none";
        scissors.style.backgroundColor = "#F2F3D9";
        scissors.addEventListener('mouseover', () => {
            scissors.style.transform = 'scale(1.1)';
        })
        scissors.addEventListener('mouseout', () => {
            scissors.style.transform = '';
        })

    const winner = document.createElement("div");
        document.body.appendChild(winner);
            winner.style.display = "flex";
            winner.style.justifySelf = "stretch";
            winner.style.justifyContent = "center";
            winner.style.alignItems = "center";
        // winner.style.backgroundColor = "";
            winner.style.fontSize = "28px";
            winner.style.fontFamily = "courier";
            winner.style.height = "50px";
            winner.style.backgroundColor = "#C16E70";
            winner.style.color = "white";


    const computer = document.createElement("div");
        document.body.appendChild(computer);
            computer.textContent = "COMPUTER";
            computer.style.padding = "10px";
            computer.style.justifySelf = "stretch";
            computer.style.textAlign = "center";
            computer.style.fontSize = "28px";
            computer.style.fontFamily = "courier";
            computer.style.backgroundColor = "#DC9E82";
            computer.style.fontWeight = "bold";

    const computerScoreDisplay = document.createElement("div");
        document.body.appendChild(computerScoreDisplay);
            computerScoreDisplay.style.padding = "10px";
            computerScoreDisplay.style.justifySelf = "stretch";
            computerScoreDisplay.style.textAlign = "center";
            computerScoreDisplay.style.fontSize = "28px";
            computerScoreDisplay.style.fontFamily = "courier";
            computerScoreDisplay.style.backgroundColor = "#DC9E82";
            computerScoreDisplay.style.fontWeight = "bold";

    const computerOptions = document.createElement("div");
        document.body.appendChild(computerOptions);
            computerOptions.style.display = "flex";
            computerOptions.style.justifySelf = "stretch";
            computerOptions.style.justifyContent = "center";
            computerOptions.style.backgroundColor = "#DC9E82"


    const computerRockPic = document.createElement("img");
        computerRockPic.src = "rock-576669_1280.png";
        computerOptions.appendChild(computerRockPic);
        computerRockPic.style.width = "100px";
        computerRockPic.style.height = "100px";
        computerRockPic.style.margin = "50px";

    const computerPaperPic = document.createElement("img");
        computerPaperPic.src = "paper-23652_1280.png";
        computerOptions.appendChild(computerPaperPic);
        computerPaperPic.style.width = "100px";
        computerPaperPic.style.height = "100px";
        computerPaperPic.style.margin = "50px";

    const computerScissorsPic = document.createElement("img");
        computerScissorsPic.src = "scissors-2026687_1280.png";
        computerOptions.appendChild(computerScissorsPic);
        computerScissorsPic.style.width = "100px";
        computerScissorsPic.style.height = "100px";
        computerScissorsPic.style.margin = "50px";


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
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { 
        winner.textContent = `It's a draw. Play again.`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors' || 
        humanChoice === 'paper' && computerChoice === 'rock' || 
        humanChoice === 'scissors' && computerChoice === 'paper') 
    {
        winner.textContent = `${humanChoice} beats ${computerChoice}. You win!`;
        humanScore++;
        humanScoreDisplay.textContent = `Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Score: ${computerScore}`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    
    }   

    else { 
        winner.textContent = `${computerChoice} beats ${humanChoice}. You lose.`;
        computerScore++;
        humanScoreDisplay.textContent = `Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Score: ${computerScore}`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    }

} 

function playGame() {
        rock.addEventListener('click', () => {
            
            roundCount.textContent = `ROUND ${round}`;
            rock.style.transform = "scale(1.5)";
            paper.style.transform = "scale(.5)";
            scissors.style.transform = "scale(.5)";     
            let computerChoice = getComputerChoice();
            playRound("rock", computerChoice);
    });

        paper.addEventListener('click', () => {
            paper.style.transform = "scale(1.5)";
            rock.style.transform = "scale(.5)";
            scissors.style.transform = "scale(.5)";
            let computerChoice = getComputerChoice();
            playRound("paper", computerChoice);     
        });

        scissors.addEventListener('click', () => {
            rock.style.transform = "scale(.5)";
            paper.style.transform = "scale(.5)";
            scissors.style.transform = "scale(1.5)";
            let computerChoice = getComputerChoice();
            playRound("scissors", computerChoice);

         });

        if (humanScore === 5 || computerScore === 5) {
            declareWinner();

        };

//create divs for final results div
const finalResults = document.createElement("div");
    document.body.appendChild(finalResults);

//create replay button

const replay = document.createElement("button");
    replay.textContent = "Play again?";

//declare winner function and replay option

function declareWinner() {
    if (humanScore > computerScore) {
        finalResults.textContent = `Game over! Your score: ${humanScore} Computer score: ${computerScore}. You are the winner!`;
        finalResults.appendChild(replay);
        replay.addEventListener('click', playGame);

    } else {
        finalResults.textContent = `Game over! Your score: ${humanScore} Computer score: ${computerScore}. Computer wins. Better luck next time!`;
        finalResults.appendChild(replay);
        replay.addEventListener('click', playGame);
}
}
};

playGame();
