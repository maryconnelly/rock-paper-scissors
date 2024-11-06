//round count div
let round = 0;
let humanScore = 0;
let computerScore = 0;

const roundCount = document.createElement("div");
    document.body.appendChild(roundCount);
    roundCount.textContent = "ROUND";
        roundCount.style.display = "flex";    
        roundCount.style.justifySelf = "stretch";
        roundCount.style.justifyContent = "center";        
        roundCount.style.alignItems = "center";
        roundCount.style.padding = "10px";
        roundCount.style.fontFamily = "courier";
        roundCount.style.fontSize = "28px";
        roundCount.style.height = "50px";
        roundCount.style.backgroundColor = "#2D3142";
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
            human.style.backgroundColor = "white";

    const humanScoreDisplay = document.createElement("div");
        document.body.appendChild(humanScoreDisplay);
            humanScoreDisplay.textContent = "SCORE:";
            humanScoreDisplay.style.fontWeight= "bold";
            humanScoreDisplay.style.padding = "10px";
            humanScoreDisplay.style.textAlign = "center";
            humanScoreDisplay.style.justifySelf = "stretch";
            humanScoreDisplay.style.fontSize = "28px";
            humanScoreDisplay.style.fontFamily = "courier";
            humanScoreDisplay.style.backgroundColor = "white";

//create button options
    const buttonContainer = document.createElement("div");
        document.body.appendChild(buttonContainer);
            buttonContainer.style.display = "flex";
            buttonContainer.style.justifySelf = "stretch";
            buttonContainer.style.height = "200px";
            buttonContainer.style.justifyContent = "center";
            buttonContainer.style.backgroundColor = "white";

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
        rock.style.backgroundColor = "white";
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
        paper.style.backgroundColor = "white";
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
        scissors.style.backgroundColor = "white";
        scissors.addEventListener('mouseover', () => {
            scissors.style.transform = 'scale(1.1)';
        })
        scissors.addEventListener('mouseout', () => {
            scissors.style.transform = '';
        })

    const winner = document.createElement("div");
        document.body.appendChild(winner);
        winner.textContent = "FIRST TO 5 POINTS WINS."
            winner.style.display = "flex";
            winner.style.justifySelf = "stretch";
            winner.style.justifyContent = "center";
            winner.style.alignItems = "center";
        // winner.style.backgroundColor = "";
            winner.style.fontSize = "28px";
            winner.style.fontFamily = "courier";
            winner.style.height = "80px";
            winner.style.backgroundColor = "#2D3142";
            winner.style.color = "white";


    const computer = document.createElement("div");
        document.body.appendChild(computer);
            computer.textContent = "COMPUTER";
            computer.style.padding = "10px";
            computer.style.justifySelf = "stretch";
            computer.style.textAlign = "center";
            computer.style.fontSize = "28px";
            computer.style.fontFamily = "courier";
            computer.style.backgroundColor = "#BFC0C0";
            computer.style.fontWeight = "bold";

    const computerScoreDisplay = document.createElement("div");
        document.body.appendChild(computerScoreDisplay);
            computerScoreDisplay.textContent = "SCORE:";
            computerScoreDisplay.style.padding = "10px";
            computerScoreDisplay.style.justifySelf = "stretch";
            computerScoreDisplay.style.textAlign = "center";
            computerScoreDisplay.style.fontSize = "28px";
            computerScoreDisplay.style.fontFamily = "courier";
            computerScoreDisplay.style.backgroundColor = "#BFC0C0";
            computerScoreDisplay.style.fontWeight = "bold";

    const computerOptions = document.createElement("div");
        document.body.appendChild(computerOptions);
            computerOptions.style.display = "flex";
            computerOptions.style.justifySelf = "stretch";
            computerOptions.style.height = "200px"
            computerOptions.style.justifyContent = "center";
            computerOptions.style.backgroundColor = "#BFC0C0"


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
        return "ROCK";

    } else if(randomValue === 1) {
        computerRockPic.style.transform = "scale(.5)";
        computerPaperPic.style.transform = "scale(1.5)";
        computerScissorsPic.style.transform = "scale(.5)";
        return "PAPER";

    } else {
        computerRockPic.style.transform = "scale(.5)";
        computerPaperPic.style.transform = "scale(.5)";
        computerScissorsPic.style.transform = "scale(1.5)";
        return "SCISSORS";
    } 
}

//create playRound function
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) { 
        winner.textContent = `IT'S A DRAW. PLAY AGAIN.`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    }

    else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS' || 
        humanChoice === 'PAPER' && computerChoice === 'ROCK' || 
        humanChoice === 'SCISSORS' && computerChoice === 'PAPER') 
    {
        winner.textContent = `${humanChoice} BEATS ${computerChoice}. YOU WIN!`;
        humanScore++;
        humanScoreDisplay.textContent = `SCORE: ${humanScore}`;
        computerScoreDisplay.textContent = `SCORE: ${computerScore}`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    
    }   

    else { 
        winner.textContent = `${computerChoice} BEATS ${humanChoice}. YOU LOSE.`;
        computerScore++;
        humanScoreDisplay.textContent = `SCORE: ${humanScore}`;
        computerScoreDisplay.textContent = `SCORE: ${computerScore}`;
        round++;
        roundCount.textContent = `ROUND ${round}`;
    }

} 


function endGame() {
    
    if (humanScore === 5 || computerScore === 5) {
        declareWinner();
   };
   };


function declareWinner() {
    if (humanScore > computerScore) {
            
        roundCount.textContent = "";
        roundCount.style.height = "125px";
        winner.textContent = `GAME OVER. YOU WIN!`;
        winner.style.height = "100px";
        document.body.removeChild(buttonContainer);
        document.body.removeChild(computerOptions);
        human.style.height = "100px";
        humanScoreDisplay.style.height = "100px";
        computerScoreDisplay.style.height = "100px";
        computer.style.height = "100px";
            
        const replay = document.createElement("button");
            roundCount.appendChild(replay);
                replay.textContent = "PLAY AGAIN?";
                replay.style.color = "white";
                replay.style.padding = "20px";
                replay.style.fontFamily = "courier";
                replay.style.fontSize = "28px";
                replay.style.backgroundColor = "#4F5D75";
                replay.style.border = "white";
                replay.style.borderRadius = "10px";
                replay.addEventListener('mouseover', () => {
                    replay.style.transform = "scale(1.1)";
                });
                replay.addEventListener('mouseout', () => {
                    replay.style.transform = "";
                });
                replay.addEventListener('click', () => {
                    window.location.reload();
                })

    } else {
        roundCount.textContent = "";
        roundCount.style.height = "125px";
        winner.textContent = `GAME OVER. COMPUTER WINS.`;
        winner.style.height = "100px";

            document.body.removeChild(buttonContainer);
            document.body.removeChild(computerOptions);
            
            human.style.height = "100px";
            humanScoreDisplay.style.height = "100px";
            computerScoreDisplay.style.height = "100px";
            computer.style.height = "100px";

            const replay = document.createElement("button");
                roundCount.appendChild(replay);
                replay.textContent = "PLAY AGAIN?";
                replay.style.color = "white";
                replay.style.backgroundColor = "#4F5D75";   
                replay.style.padding = "20px";
                replay.style.fontFamily = "courier";
                replay.style.fontSize = "24px";
                replay.style.border = "white";
                replay.style.borderRadius = "10px";
                replay.addEventListener('mouseover', () => {
                    replay.style.transform = "scale(1.1)";
                });
                replay.addEventListener('mouseout', () => {
                    replay.style.transform = "";
                });
                replay.addEventListener('click', () => {
                    window.location.reload();
                })
}
};



function playGame() {
        rock.addEventListener('click', () => {
            rock.style.transform = "scale(1.3)";
            paper.style.transform = "scale(.8)";
            scissors.style.transform = "scale(.8)";     
            let computerChoice = getComputerChoice();
            playRound("ROCK", computerChoice);
            endGame();
    });

        paper.addEventListener('click', () => {
            paper.style.transform = "scale(1.3)";
            rock.style.transform = "scale(.8)";
            scissors.style.transform = "scale(.8)";
            let computerChoice = getComputerChoice();
            playRound("PAPER", computerChoice);  
            endGame();   
        });

        scissors.addEventListener('click', () => {
            rock.style.transform = "scale(.8)";
            paper.style.transform = "scale(.8)";
            scissors.style.transform = "scale(1.3)";
            let computerChoice = getComputerChoice();
            playRound("SCISSORS", computerChoice);
            endGame();
         });
        
        };

playGame();
