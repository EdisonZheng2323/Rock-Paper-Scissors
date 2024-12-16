let humanScore = 0;
let computerScore = 0;



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

function getHumanChoice(){
  let choice = prompt("What move do you want to choose?");
  choice = choice.toLowerCase();
  if(choice != "rock" && choice != "scissors" && choice != "paper"){
    console.log("That is not a valid move! Try again.");
    return getHumanChoice();
  }
  return choice;
}

function playRound(humanChoice, computerChoice){
  if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
  else if((humanChoice == "scissors" && computerChoice == "rock") || (humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors")){
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  else{
    console.log(`The round is a tie! ${computerChoice} doesn't beat ${humanChoice}.`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 

