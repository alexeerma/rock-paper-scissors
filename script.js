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

// Global scores
let userScore = 0;
let compScore = 0;

//game function - play to 5 rounds
function game() {
    playRound (i);
    for (let i = 0; i < 5; i++) {
        playRound (i);
     }
  }

// Getting computers choice.
function getComputerChoice(){
    let choice = ["rock",
        "paper",
        "scissors"];
    let random = choice[Math.floor(Math.random() * choice.length)];
    return random;
}

// Keeping score
function game() {
    while (userScore < 5 && compScore < 5) {
        const playerSelection = prompt("Would you like to choose Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie game!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        userScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        userScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`
        
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        userScore += 1;
        return `You win! ${playerSelection} beats ${computerSelection}!`

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        compScore += 1;
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }

}



  // getting users input/choice
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));

  // Getting the winner

  function winGame() {
    if (userScore == 5) {
        return "You win!"
    } else if (compScore == 5) {
        return "You lose!"
    }
}

game();

console.log(userScore);
console.log(compScore);
console.log(winGame());

  