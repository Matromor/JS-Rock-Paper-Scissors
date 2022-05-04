/* A rock paper scissors game written in JS.
This is practice for the Odin Project, I'll come back and add a gui later */


//An array that contains strings Rock, Paper, Scissors
let rockPaperScissorsArr = ["Rock","Paper","Scissors"];

/* A function that randomly selects and returns either Rock, Paper, or Scissors for the computer player.
  Steps:
   1. Math.random to select a random number between 0-1
   2. Multiple Math.random's result by the array length to get a random number between(0-rockPaperScissorsArr)
   3. Math.floor takes that random number and returns the largest integer less or equal to that number
   4. randomCompElem stores the element that was selected by randomCompNum.
*/ 
function computerPlay() {
  let randomCompNum = Math.floor(Math.random() * rockPaperScissorsArr.length);
  let randomCompElem = rockPaperScissorsArr[randomCompNum];
  console.log(randomCompElem);
}
computerPlay();