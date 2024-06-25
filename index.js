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


btnContainer.appendChild(rock);
btnContainer.appendChild(paper);
btnContainer.appendChild(scissors);

container.appendChild(h1);
container.appendChild(btnContainer);
