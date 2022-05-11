/* A rock paper scissors game written in JS.
This is practice project for the Odin Project, I'll come back and add ui later */
let computerScore = 0;
let playerScore = 0;

// A function that randomly selects and returns either Rock, Paper, or Scissors for the computer player. //
function computerPlay() {
  let rockPaperScissorsArr = ["rock","paper","scissors"];
  return rockPaperScissorsArr[Math.floor(Math.random() * rockPaperScissorsArr.length)]
}

/* This function gets input from the player, converts it to lower case and then continues if the player
answered rock, paper, scissors. If they did not it tells them to try again and returns the function call. */
function playerPlay() {
  let ask = prompt("Please choose Rock, Paper, or Scissors")
  ask = ask.toLowerCase();
    if (ask == 'rock' || ask == 'paper' || ask == 'scissors') {
      return ask
    } else {
      console.log('not a valid input, try again')
      return playerPlay();
    }
}

/*This function plays a round of rock, paper, scissors. It returns either a tie, you lose or you win depending on
player/computer input, as well as adds a point depending on who won */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie"
  }
  else if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "paper" && playerSelection === "rock") ||
      (computerSelection === "scissors" && playerSelection === "paper")
  ) { 
    computerScore++;
    return "You lose this round"
  }
  else {
    playerScore++;
    return "You win this round"
  }
}

// This is function plays 5 rounds of rps. If there are more than 5 rounds then it prints out results //

/* A for loop is not the ideal way to this, I'm simply following directions given to me in the project outline 
However when I rewrite this section and add a UI, then I will change this function to 
allow players to play until either they or the computer scores 3 points. */
function game() {
  for (i = 0; i <= 5; i++) {
    if (i < 5) {
      computerSelection = computerPlay();
      playerSelection = playerPlay();
        console.log("Computer Choose: "  + computerSelection);
        console.log("You Choose: " + playerSelection);
        console.log(playRound(playerSelection, computerSelection));
    } else {
        if (playerScore > computerScore) {
          console.log(`Your score is ${playerScore}, you win!`)
        } else if (computerScore > playerScore) {
          console.log(`Your score is ${playerScore} but the computer's score is ${computerScore}, you lose!`)
        } else {
          console.log("It's a tie!")
        }
      }
    } 
  }
game();