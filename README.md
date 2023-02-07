# HW 3
## COT 4930 - Full Stack Web Development
### Tic-Tac-Toe by Cadell Julien-Z23505110
#### DUE JAN 11, 2023
![H3_GIF](https://user-images.githubusercontent.com/123437478/217146455-fadad9a8-1a61-49e1-bf6f-1860a74a5169.gif)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9951484&assignment_repo_type=AssignmentRepo)

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
https://stackoverflow.com/questions/27929349/using-function-to-display-random-numbers-then-ifelse-statement-to-allocate-days

https://www.w3schools.com/js/js_if_else.asp

https://developer.mozilla.org/en-US/docs/Web/CSS/position

https://developer.mozilla.org/en-US/docs/web/css/:root

https://www.w3schools.com/csS/css3_buttons.asp

https://www.w3schools.com/w3css/w3css_containers.asp

https://www.w3schools.com/w3css/w3css_sidebar.asp

https://getbootstrap.com/docs/5.1/layout/containers/

https://getbootstrap.com/docs/5.1/layout/breakpoints/

https://stackoverflow.com/questions/24350860/html-javascript-tic-tac-toe-with-a-2d-array

https://javascript.plainenglish.io/tic-tac-toe-in-javascript-for-beginners-befbb55c0da

https://github.com/CodeExplainedRepo/Tic-Tac-Toe-JavaScript

https://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript

https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/

https://www.studytonight.com/post/building-a-tic-tac-toe-game-in-javascript

https://www.codebrainer.com/blog/tic-tac-toe-javascript-game

https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

https://mostafa-samir.github.io/Tic-Tac-Toe-AI/

https://javascript.plainenglish.io/build-tic-tac-toe-game-using-javascript-3afba3c8fdcc

https://www.freecodecamp.org/news/javascript-settimeout-js-timer-to-delay-n-seconds/#:~:text=What%20is%20setTimeout%20%28%29%20in%20JavaScript%3F%201%20Function.,is%20used%20to%20cancel%20a%20setTimeout%20%28%29.%20

https://www.w3schools.com/jsref/met_win_settimeout.asp

https://github.com/vikramvee/JavaScript/tree/master/HA%238

https://github.com/beesmart/JS_tictactoe

https://github.com/simondevyoutube/TicTacToe_WithMinimax

https://gscode.in/tic-tac-toe-games-in-javascript/

https://www.youtube.com/watch?v=LFa9fnQGb3g&list=LL&index=6

https://www.youtube.com/watch?v=23bpce-5s8I&list=LL&index=3

https://www.youtube.com/watch?v=NTmFHSjRjgU&list=LL&index=4&t=4s

https://www.youtube.com/watch?v=h33Srr5J9nY&list=LL&index=8&t=188s

https://www.youtube.com/watch?v=G5Nn9VRNeaU&list=LL&index=9

https://www.youtube.com/watch?v=trKjYdBASyQ

