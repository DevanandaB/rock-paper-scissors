const objects = ["rock", "paper", "scissors"];

function getComputedChoice() {
    const computerChoice = objects[(Math.floor(Math.random() * objects.length))];
    console.log(`computer chose ${computerChoice}`);
};

const gameContainer = document.querySelector(".gameContainer");
const title = document.createElement("h1");
const rockBtn = document.createElement("button");
rockBtn.classList.add("btn");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const result = document.querySelector(".result");
const para = document.createElement("p");

title.innerText = "Rock Paper Scissors";
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorsBtn.innerText = "Scissors";

gameContainer.appendChild(title);
gameContainer.appendChild(rockBtn);
gameContainer.appendChild(paperBtn);
gameContainer.appendChild(scissorsBtn);
gameContainer.appendChild(para);

rockBtn.addEventListener("click", getHumanChoice);
paperBtn.addEventListener("click", getHumanChoice);
scissorsBtn.addEventListener("click", getHumanChoice);

function getHumanChoice(event) {
    let humanChoice = event.target.innerHTML;
    para.textContent = `You chose ${humanChoice}`;
    console.log(getComputedChoice());
};

let humanScore = 0;
let computerScore = 0;

// function playRound(computerChoice, humanChoice) {
//     if(computerChoice == humanChoice) {
//         console.log("Tie");
//     } else if(computerChoice == objects[0] && humanChoice == objects[1] 
//         || computerChoice == objects[1] && getHumanChoice == objects[2] 
//         || computerChoice == objects[2] && humanChoice == objects[0]) {
//         console.log("U get a point!");
//         humanScore += 1;
//     } else {
//         console.log("Computer gets a point!");
//         computerScore += 1;
//     }
// };

// function playGame() {
//     for (i = 0; i < 5; i++) { playRound(getComputedChoice(), getHumanChoice())};
//     console.log(`Your score: ${humanScore}`);
//     console.log(`Computer's score: ${computerScore}`);
// }

// playGame();