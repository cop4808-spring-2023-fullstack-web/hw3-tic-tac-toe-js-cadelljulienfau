# HW 3
## COT 4930 - Full Stack Web Development
### Tic-Tac-Toe by Cadell Julien-Z23505110
#### DUE JAN 11, 2023

### Summary:
The way that this game was structured was that it uses bootstrap for the general layout in html. So, creating the grid/tiles was easily accessibile and made. With that being said adding the extra stuff like a player option was the next step. Adding the player option I decided to go with a start button to make sure that the choice was actually picked. So once an option for the player is picked, then start is clicked the board wil be playable.

On the main frame I added a a tips button next tot he start button incase somebodys have a few issues with the board setup. The tips button is pretty simple, it directs people to an aleart which has about 6 tips to help along. On top of the main frame we have our title, game edition,  my name/z and then main game frame with a drop in reset button. You'll also see a "Select X or O then Press Start" area which will turn out to be our next player turn area after everything is selected. To the left side we have our status bar with a transparent background to match our css and make it pretty. In this status bar we have our player score, computer score, tie score and game result on who won. 

The computer will have a random chance based on a randomnumber function to go first. You'll be notified once that do happen. The fish in the background was implemented as a sentient web boss fish, so a computer boss who you're going aganist.


### Game Logic:
validClick()-
Holds both x and o pieces. Able to click an empty tile with the x and o pieces. Will be able to to differentiate between the player and computer turn.

startGame()-
Will hold the opertain next turn function and who's first randomizer. After the start button has been clicked.

mainGame()-
This function will be the default setting for the game board for which noting has been done as of yet. Meaning it's the main game orgianl state before the start button has been clicked and pieces pieces has been layed out. So after a reset the game will go back to that orgainal game state.

NextTurn()-
Will set down the 2-array which enables it to be clicked. If a tile is empty this function will allow it to be clicked. After a tile has been clicked an x or o piece will be placed on that tile. A set timeout will be used to notify who's turn it and for less rushed game play. A randomizer will be set to notifty if the computer should go first.

endGame()-
Will have a who's winner in place, showing who's won that round. When put with other functions it'll help with the scoring.

checkWinner()-
When tiles which is loaded from the emptytile sis loaded are full or there's none no more there will be 3 pathways that open up. A player winner, cpu winner, and tie. The trash talking system will be set along with this to go with the NextTurn() function.

emptytiles()-
Carry's empty tile state which can be brought up to the mainGame function to enable a defualt setting main game frame and also to next turn.

Brainstorming-
I wanted to go a simple route, which means less is more and understandble. I wanted the functions to connect and be interchangeable allowing me more flexiiblty which allows me to  new things easily.



### Resources((LOOKED AT) The Used will be cited in word doc for submission)):

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9951484&assignment_repo_type=AssignmentRepo)
