/* Pseudocode for Rock Paper Scissors 

Get Computers choice -> Rock, Paper, Scissors
function to get one of three choices for computer
Get computers selection
Get user Input
Create a funcion that plays round and compares both selections
Output the Winner
Play 5 rounds and report the winner in the end  
        For loop

*/

  /*
  const choices = ["Rock", "Paper", "Scissors"]
const compChoice = () => choices[Math.floor(Math.random() * choices.length)]


function playRound(playerSelection, computerSelection) {
  const difference = (choices.length + choices.indexOf(playerSelection) - choices.indexOf(computerSelection) )% choices.length
  switch(difference){
   case 0:
       return "It's a draw!"
    case 2:
       return `You lose! ${computerSelection} beats ${playerSelection}`
    default:
       return `You win! ${playerSelection} beats ${computerSelection}`
  }
 
}

let computerSelection = compChoice();
let playerSelection
while(!choices.includes(playerSelection)){
  const selected = prompt("Choose your weapon").trim().toLowerCase();
  
  playerSelection = selected[0].toUpperCase()+selected.slice(1)
 
}

console.log(playRound(playerSelection, computerSelection)); */


// Simpler way to do the game 

function getComputerChoice(){
    let choice = ["rock",
        "paper",
        "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return ("You lose!Rock beats scissors");
    }
  
  }
  
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));

  let userScore = 0;
  let compScore = 0;

  function game() {
    playRound ();
    for (let i = 0; i < 5; i++) {
       if (playRound == "You win! Rock beats scissors")
            userScore++;
            console.log (userScore && compScore);
     }
  }