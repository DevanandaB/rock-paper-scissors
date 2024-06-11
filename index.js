const objects = ["Rock", "Paper", "Scissors"];

function getComputedChoice() {
    const computerChoice = objects[(Math.floor(Math.random() * objects.length))];
    // console.log(`computer chose ${computerChoice}`);
    return computerChoice;
};

const gameContainer = document.querySelector(".gameContainer");
const title = document.createElement("h1");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const result = document.querySelector(".result");
const para = document.createElement("p");
const resultPara = document.createElement("p");

title.innerText = "Rock Paper Scissors";
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors";

gameContainer.appendChild(title);
gameContainer.appendChild(rockBtn);
gameContainer.appendChild(paperBtn);
gameContainer.appendChild(scissorsBtn);
gameContainer.appendChild(para);
result.appendChild(resultPara);

rockBtn.addEventListener("click", getHumanChoice);
paperBtn.addEventListener("click", getHumanChoice);
scissorsBtn.addEventListener("click", getHumanChoice);

function getHumanChoice(e) {
    let humanChoice = e.target.innerText;
    para.textContent = `You chose ${humanChoice}`;  
    // console.log(humanChoice);
    getComputedChoice();
    return humanChoice;
};

let humanScore = 0;
let computerScore = 0;

function playRound() {
    if(getHumanChoice === getComputedChoice) {
        console.log("Tie");
    } else if(getComputedChoice == objects[0] && getHumanChoice == objects[1] 
        || getComputedChoice == objects[1] && getHumanChoice == objects[2] 
        || getComputedChoice == objects[2] && getHumanChoice == objects[0]) {
        console.log("U get a point!");
        humanScore += 1;
    } else {
        console.log("computer gets a point!");
        computerScore += 1;
    }
};

function playGame() {
    for (i = 0; i < 5; i++) { playRound(getComputedChoice(), getHumanChoice())};
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
}

playGame();