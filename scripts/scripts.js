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

//Original Game State
function mainGame() { //This functions put's everything together and runs it
    console.trace("Main game boot")
      const xChoice = (document.querySelector('#x').checked = false); //used for x input
    const oChoice = (document.querySelector('#o').checked = false); //used for o input
    option.style.display = 'block'; //buttons are laid until but will be removed once clicked
    resetGame.style.display = 'none'; //doesn't display reset button until start is clicked
      tiles.forEach((tiles) => (tiles.classList.contains('x') ? tiles.classList.remove('x') : tiles.classList.remove('o'))); //runs a quick array to check if a piece is already states and stops the roation of new piece from being added to it.
      playerMessage.innerHTML = "Select X or O then PRESS START";
    document.getElementById('tipbtn').onclick = () =>
    {
      alert("1. Reclick board if game is stuck || 2. Gain adavantage by going for the middle || 3. Click the Pig for Good Luck. || 4. Use the status bar on the left to keep tab of score. || 6. Select X or O then press start to start if board is still blank|| 5. HAVE FUN!!!")
      console.trace("Tip button clicked")
    } //For tips the player might want to know
  }  

  //Next turn for player and CPU
function NextTurn() {
    console.log("Tracing turns")
      tilesArray.forEach((tiles) => tiles.removeEventListener('click', validClick)); //Clicker for each tile turn
      if (emptytiles().length !== 0) {
          setTimeout(() => { //able to click empty time then timer is set for next person turn
              const randEmptytiles = emptytiles()[Math.floor(Math.random() * emptytiles().length)];
              // Add eventListeners once computer has moved after a certain time
              tilesArray.forEach((tiles) => tiles.addEventListener('click', validClick, { once: true }));
              randEmptytiles.classList.add(computer); 
              emptytiles(); //bring back empty tile
              //Checks if computer has won after making move
              if (checkWinner(tiles, computer)) {   //Goes ahead in checks the tiles made by the computer
                  endGame('Well thats to bad...');
          console.log("CPU Won")
          console.log("Commencing Auto-Reset")
          playerMessage.innerHTML = "You Suck D:";//Trash talk message for player who lost
         //score adder
        if (playerMessage.innerHTML == "You Suck D:") { //Used to add point from string of words
          computerScore = computerScore +1; //Adds a put to the computer score
          document.getElementById("score2").innerHTML=  computerScore;
          console.log("Added 1 point to CPU Score")
          }
                  return;
              }
        //Player Turn once last tiles has been clicked
              playerMessage.innerHTML = 'Player Move!';
        console.log("Player Turn")
          }, 300);
        //CPU turn once last tiles has been clicked
          playerMessage.innerHTML = 'CPU Move!';
      console.log("Tile Clicked")
      console.log("Computer Turn")
      }
  }