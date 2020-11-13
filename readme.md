This is a tic-tac-toe game built using HTML, CSS and Javascript.
This game will using color instead of using "X" "O" to represent cell's value. 

Thought Process: 
    Board:
    1) Create 9 boxes and makes border
    2) Label each cell in box starting from 1 to 9.
    3) Every cell will have either one of the 3 values: "empty", "red", "blue".
    4) Add event listener to listen for the click.
    5) Using if statement to check each box value.
      

    Game Rules: 

    There will be 2 players participate. Each player will takes turn to click one box at a time. Each player represent a color.  
    There are 8 possibilities to win the game. 
    
    //horizontal cells//
    [1,2,3], [4,5,6],[7,8,9],
    
    //Vertical cells//
    [1,4,7], [2,5,8], [3,6,9],
    
    //Diagonals cells//
    [1,5,9], [3,5,7],

Playing Process: 
    
    1) Using turn as a variable to assign each player takes turn. 
    2) Add event listener to listen for the click for each box.
    3) Each time player click box, the box holds the value and change the background color of the selected cell.
    4) Using if statement to check the progress of the game if the possibilities is meet. 
    4) Once the possibilities is meet, display winner messages. If not, display draw and show up the reset button.
     Check Winner: 
    --> if (0 = empty) && (0 = 1) && (1 = 2) (if all 3 values are the same show winner wins)
    --> show winner wins 
    --> if draw, play again

    Reset
    After a winner or draw is result, player can choose the reset button to clear the board and play again. 


    

    