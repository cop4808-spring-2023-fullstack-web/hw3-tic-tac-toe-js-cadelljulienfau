console.log("Game Loading")// console log that acts as notification
console.log("Loaded All Content")// added game has loaded

const gameBoard = document.querySelector('#board'); //Holding the  game board
const tiles = document.querySelectorAll('.tiles'); //Tiles/ Squares for the game board
const playerMessage = document.querySelector('#playerMessage'); //Player annoucment
const resultContainer = document.querySelector('#resultContainer'); //holds the reselut from the game
const gameResult = document.querySelector('#gameResult'); //result shower
const resetGame = document.querySelector('#reset'); //resets the game
const option = document.querySelector('#option'); //Pick between x and o

//score variables
let tied=0; //for tie score
let playerScore=0; // fore player score
let computerScore=0; //for cpu score

const xPiece = 'x'; //X shower
const OPiece = 'o'; //O SHower

const validWins = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 2, 4, 6 ]
]; //Winning Placements and also a 2d array

resetGame.addEventListener('click', mainGame); //Clicker for tile
document.querySelector('#startBtn').addEventListener('click', startGame); //clicker forStart button to start game

mainGame(); //Holds the game

const tilesArray = Array.from(tiles); //Tile maker
tilesArray.forEach((tiles) => tiles.addEventListener('click', validClick, { once: true })); //Tile Clicker

//Clicker function for turns
function validClick(e) {
	if (e.target.classList.contains(xPiece) || e.target.classList.contains(OPiece)) {
		e.target.removeEventListener('click', validClick); //once that option to pick x or o the clicks activates
	} 
  else {
		e.target.classList.add(player); //the activations to click a tiles/tile
    console.log("Next Turns");// notify's next turn

		if (checkWinner(tiles, player)) { //checking the player data on tiles
			endGame('A Tech Savy!! YOU WON'); //We got a winner accounment
      console.log("Player Has Won") //notifys play has won in system
      console.log("Commencing Auto-Reset") //the reset board will begin
      playerMessage.innerHTML = "I went easy on you!!!!"; //CPU is a tough match
      if (playerMessage.innerHTML == "I went easy on you!!!!") { //add's points based off of words
        playerScore = playerScore +1;
        document.getElementById("score1").innerHTML= playerScore;
        console.log("Added 1 point to Player Score");
    }
      } 
      else {
        NextTurn(); //Next turn
      }
	}

	if (emptytiles().length === 0 && !checkWinner(tiles, xPiece) && !checkWinner(tiles, OPiece)) {
		endGame("Tough Match! It's a tie"); //If there is no more tiles than the game is a tie
    console.log("Game is Tied"); //notify tie game
    console.log("Commencing Auto-Reset"); //notify board reset
    playerMessage.innerHTML = "We're Just getting started"; //CPU talking
    if (playerMessage.innerHTML == "We're Just getting started") { //add's point based off of words for tie
      tied = tied +1;
      document.getElementById("score3").innerHTML= tied;
      console.log("Added 1 point to Tie Score");
      }
          return;
        }
    }

// Start Game
let computer, player ; //variables
function startGame() { 
  var randomstart=Math.floor(Math.random()*20);
  console.log("Random Number: " + randomstart);
  if (randomstart < 12){
	  alert("Computer: AI RULE!!!!")
    NextTurn(); //Built for random ai to go first after a random number is sleceted
    console.trace("Who's turn");
  }
  //depends on what was clicked in option
  const oChoice = document.querySelector('#o').checked;
	const xChoice = document.querySelector('#x').checked;
//After choice is made and start is clicked, you'll be able to play on the board
if (xChoice || oChoice) {
  gameBoard.style.display = 'grid'; //grid for board is made
  resetGame.style.display = 'block'; //reset button is made
  option.style.display = 'none'; //is removed
}
	player = xChoice ? xPiece : OPiece; //can only pick
	computer = player === xPiece ? OPiece : xPiece; //checks if one is picked and then moves to the one that isn't
}