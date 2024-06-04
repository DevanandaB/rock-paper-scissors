const objects = ["rock", "paper", "scissors"]
function getComputedChoice() {
    const computerChoice = objects[(Math.floor(Math.random() * objects.length))];
    return compChoice;
};

function getHumanChoice() {
    const humanChoice = prompt("Choose one: rock, paper or scissors");
    if(objects.includes(humanChoice.toLowerCase())) {
        alert("okay, now the computer's turn!");
    } else {
        alert("mm well don't type random stuff :(");
        getHumanChoice();
    }
};

let humanScore = 0;
let computerScore = 0;
