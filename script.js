function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber == 0){
    return "rock";
  }
  else if(randomNumber == 1){
    return "paper";
  }
  return "scissors";
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
  if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    humanScore++;
  }
  else if((humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")){
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    computerScore++;
  }
  else{
    result.textContent = `The round is a tie! Make another move.`;
  }
  score.textContent = `Score: ${humanScore} - ${computerScore}`
  if((humanScore + computerScore == 5) && humanScore > computerScore){
    result.textContent = "Congraluations, you have won the game!";
  }
  else if((humanScore + computerScore == 5) && computerScore > humanScore){
    result.textContent = "Unfortunately, you have lost.";
  }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
rock.addEventListener("click", function (){
  if(humanScore + computerScore == 5){
    score.textContent = "Score: 0 - 0";
    computerScore = 0;
    humanScore = 0;
  }
  playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function (){
  if(humanScore + computerScore == 5){
    score.textContent = "Score: 0 - 0";
    computerScore = 0;
    humanScore = 0;
  }
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function (){
  if(humanScore + computerScore == 5){
    score.textContent = "Score: 0 - 0";
    computerScore = 0;
    humanScore = 0;
  }
  playRound("scissors", getComputerChoice());
});
const body = document.querySelector("body");
let result = document.createElement("div");
body.appendChild(result);
let score = document.querySelector("#score");


