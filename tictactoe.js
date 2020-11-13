//Players Odd/Even
//Turn variables is counting 
//-> define box, 
//-> make box listen for a click 
//change variable value

//Each time user click on a box, increase turn by 1, 
var turn = 0;

var allCells = document.querySelectorAll('.cell')

for (let i = 0; i < allCells.length; i++)
allCells[i].addEventListener('click',function(){
    turn = turn + 1
//Assign when turn is odd, let player 1 color inside the board.
    if (turn % 2 == 0){
        allCells[i].style.backgroundColor = "red"
    }else{
        allCells[i].style.backgroundColor = "blue"
        
    }
})





//Winning Combination
var winning = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9], [3,5,7]];
var allCells = document.querySelectorAll('.cell')
var winningMessage = document.querySelector('#winning-message')
var winningMessageText = document.querySelector('#winning-message-text')

for (let i = 0; i < allCells.length; i++)
allCells[i].addEventListener('click',function(){
    
    //Horinzontal
    //Index 0,1,2
    if(allCells[0].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "red" && allCells[2].style.backgroundColor === "red"){
        alert('Player 1 Win!')
        // document.querySelector('#winning-message-text').textContent = "Player 1 Wins!"
    } else if (allCells[0].style.backgroundColor === "blue" && allCells[1].style.backgroundColor === "blue" && allCells[2].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    
    }
    //Index 3,4,5
    if(allCells[3].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[3].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[5].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }
    //Index 6,7,8
    if(allCells[6].style.backgroundColor === "red" && allCells[7].style.backgroundColor === "red" && allCells[8].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[6].style.backgroundColor === "blue" && allCells[7].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }

    //Vertical
    //Index 0,3,6
    if(allCells[0].style.backgroundColor === "red" && allCells[3].style.backgroundColor === "red" && allCells[6].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[0].style.backgroundColor === "blue" && allCells[3].style.backgroundColor === "blue" && allCells[6].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }
    //Index 1,4,7
    if(allCells[1].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[7].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[1].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[7].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }
    //Index 2,5,8
    if(allCells[2].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[8].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[2].style.backgroundColor === "blue" && allCells[5].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }
    
    //Diagonals
    //Index 0,4,8
    if(allCells[0].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[8].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[0].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    }
    //Index 2,4,6
    if(allCells[2].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[6].style.backgroundColor === "red"){
        alert('Player 1 Win!')
    } else if (allCells[2].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[6].style.backgroundColor === "blue"){
        alert('Player 2 Win!')
    } 

    //Draw Condition
    //Red: 0,1,5,8 || Blue: 2,4,6
    if (allCells[0].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[6].style.backgroundColor === "red" && allCells[2].style.backgroundColor === "blue" && allCells[3].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[7].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('DRAW!')
    } 
    //Red:
    else if(allCells[0].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[6].style.backgroundColor === "red" && allCells[8].style.backgroundColor === "red" && allCells[2].style.backgroundColor === "blue" && allCells[4].style.backgroundColor === "blue" && allCells[6].style.backgroundColor === "blue"){
        alert('DRAW!')
    //Red: 0, 2, 4, 5, 7 || Blue: 1, 3, 6, 9     
    }else if (allCells[0].style.backgroundColor === "red" && allCells[2].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[7].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "blue" && allCells[3].style.backgroundColor === "blue" && allCells[6].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('DRAW!')
    }

    if (allCells[0].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[9].style.backgroundColor === "blue" && allCells[7].style.backgroundColor === "blue" && allCells[2].style.backgroundColor === "blue" && allCells[3].style.backgroundColor === "blue" && allCells[6].style.backgroundColor === "blue"){
        alert('DRAW!')

    }else if (allCells[0].style.backgroundColor === "red" && allCells[4].style.backgroundColor === "red" && allCells[5].style.backgroundColor === "red" && allCells[6].style.backgroundColor === "red" && allCells[7].style.backgroundColor === "red" && allCells[1].style.backgroundColor === "blue" && allCells[2].style.backgroundColor === "blue" && allCells[3].style.backgroundColor === "blue" && allCells[8].style.backgroundColor === "blue"){
        alert('DRAW!')
    }
}) 



//Reset Board
var restart = document.querySelector('#restartBtn')
var allCells = document.querySelectorAll('.cell')

//Loop through all the cells in the board
for (let i = 0; i < allCells.length; i++)
//Listen for a click for reset 
  restart.addEventListener('click',function(){
    allCells[i].style.backgroundColor = "white";
  })
