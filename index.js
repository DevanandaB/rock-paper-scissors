const objects = ["rock", "paper", "scissors"]
function getComputedChoice() {
    const computerChoice = objects[(Math.floor(Math.random() * objects.length))];
    return computerChoice;
};

function getHumanChoice() {
    const humanChoice = prompt("Choose one: rock, paper or scissors");
    if(objects.includes(humanChoice.toLowerCase())) {
        alert("okay, now the computer's turn!");
        return humanChoice;
    } else {
        alert("mm well don't type random stuff :(");
        getHumanChoice();
    }
};

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if(computerChoice == humanChoice) {
        alert("Tie!");
        console.log("Tie");
    } else if(getComputedChoice == objects[0] && getHumanChoice == objects[1] || getComputedChoice == objects[1] && getHumanChoice == objects[2] || getComputedChoice == objects[2] && getHumanChoice == objects[0]) {
        alert("U get a point!");
        console.log("U get a point!");
        humanScore += 1;
    } else {
        alert("Computer gets a point!");
        console.log("Computer gets a point!");
        computerScore += 1;
    }
};

function playGame() {
    for (i = 0; i < 5; i++) { playRound(getComputedChoice(), getHumanChoice())};
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);
}

playGame();