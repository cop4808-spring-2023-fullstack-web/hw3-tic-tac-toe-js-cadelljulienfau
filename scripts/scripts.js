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