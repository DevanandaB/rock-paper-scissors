const objects = ["rock", "paper", "scissors"];

function getComputedChoice() {
    let computerChoice = objects[(Math.floor(Math.random() * objects.length))];
    console.log(`computer chose ${computerChoice}`);
    return computerChoice;
};

const rockBtn = document.createElement("button");
rockBtn.id = "rock";
rockBtn.textContent = "rock";
const paperBtn = document.createElement("button");
paperBtn.id = "paper";
paperBtn.textContent = "paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.id = "scissors";
scissorsBtn.textContent = "paper";
const para = document.createElement("p");
rockBtn.addEventListener("click", playGame);
paperBtn.addEventListener("click", playGame);
scissorsBtn.addEventListener("click", playGame);
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(para);

function playGame() {};