const container = document.querySelector(".container");

const h1 = document.createElement("h1");
h1.textContent = "Rock Paper Scissors";

const btnContainer = document.createElement("div");

const rock = document.createElement("button");
rock.textContent = 'rock';

const paper = document.createElement("button");
paper.textContent = 'paper';

const scissors = document.createElement("button");
scissors.textContent = 'scissors';

const para = document.createElement("p");

const resultContainer = document.createElement("div");

const outcomeContainer = document.createElement("div");
outcomeContainer.classList.add("outcome");

const scoreContainer = document.createElement("div");
scoreContainer.classList.add('scoreContainer');
const human = document.createElement("p");
human.classList.add('human');
human.textContent = `Your Score: `;
const computer = document.createElement("p");
computer.classList.add('computer');
computer.textContent = `Computer's Score: `

const choices = [ 'rock', 'paper', 'scissors' ];
let computerScore = 0;
let humanScore = 0;

const getComputedChoice = () => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

const playRound = (humanChoice, computerChoice) => { 
    if(humanScore === 5) { 
        const outcome = document.createElement("p");
        outcome.innerText = "You won!";
        outcome.style.fontSize = "80px";
        outcomeContainer.appendChild(outcome);
    } else if(computerScore === 5)  {
        const outcome = document.createElement("p");
        outcome.innerText = "Computer won!";
        outcome.style.fontSize = "80px";
        outcomeContainer.appendChild(outcome);
    } else {
        if(humanChoice == computerChoice) {
            const resultPara = document.createElement("p");
            resultPara.innerText = "Tie!";
            resultContainer.appendChild(resultPara);
        } else if(humanChoice == 'rock' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'rock') {
            const resultPara = document.createElement("p");
            resultPara.innerText = "Computer gets a point!";
            resultContainer.appendChild(resultPara);
            computerScore += 1;
            computer.textContent = `Computer: ${computerScore}`;
        } else {
            const resultPara = document.createElement("p");
            resultPara.innerText = "U get a point!";
            resultContainer.appendChild(resultPara);
            humanScore += 1;
            human.textContent = `Your Score: ${humanScore}`;
        }
    };  
};

rock.addEventListener("click", () => {
    const computerChoice = getComputedChoice();
    const humanChoice = 'rock';
    playRound(computerChoice, humanChoice);
});

paper.addEventListener("click", () => {
    const computerChoice = getComputedChoice();
    const humanChoice = 'paper';
    playRound(humanChoice, computerChoice);
});

scissors.addEventListener("click", () => {
    const computerChoice = getComputedChoice();
    const humanChoice = 'scissors';
    playRound(humanChoice, computerChoice);
});

scoreContainer.appendChild(human);
scoreContainer.appendChild(computer);

btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);
btnContainer.appendChild(para);

container.appendChild(h1);
container.appendChild(btnContainer);
container.appendChild(resultContainer);
container.appendChild(scoreContainer);
container.appendChild(outcomeContainer);