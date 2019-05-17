document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
let board = {cells: []};

// Set boardsize
setBoard(6);
setMines(12);

function startGame () {
// Don't remove this function call: it makes the game work!
  
  for (var i = 0; i < board.cells.length; i++) {
    var surroundingMines = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = surroundingMines;
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}

// Define this function to look for a win condition:

// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

  var cellCount = 0;
  var winSound = new Audio("./Sound/Ta Da.wav");
  //  If its a mine, it has to be marked.
  //  If all other cells are marked or not hidden, you win
  
  for (i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine && board.cells[i].isMarked) || (!board.cells[i].isMine && !board.cells[i].hidden)) {
      cellCount ++;
      if (cellCount == board.cells.length) {
        lib.displayMessage('Ta Da!') + winSound.play();
      }
    } 
  }
}

function setBoard(boardSize) {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        board.cells.push({
        row: i,
        col: j,
        isMine: false, 
        isMarked: false, 
        hidden: true
      });
    }
  }
} 

function setMines(numMines) {
  var droppedMines = 0;
  let location = randomLocation(board.cells.length, 0)
  while (droppedMines < numMines) {
    //need to set is.Mine
    if (board.cells[location].isMine != true) {
      board.cells[location].isMine = true
      droppedMines++;
    }
    location = randomLocation(board.cells.length, 0);
  }
}

//get random location
function randomLocation(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var surroundingCount = 0;
  for (i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      surroundingCount++;
    }
  }
  return surroundingCount;
}

/*
document.addEventListener('DOMContentLoaded', startGame)

var board = {cells: []};

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 0,
      col: 2,
      isMine: true,
      hidden: true
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 0,
      isMine: true,
      hidden: true
    },
    {
      row: 3,
      col: 1,
      isMine: true,
      hidden: true
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      hidden: true
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      hidden: true
    }]
  }

function startGame () {
// Don't remove this function call: it makes the game work!
   
  for (var i = 0; i < board.cells.length; i++) {
    var surroundingMines = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = surroundingMines;
  }  

  document.addEventListener ('Click', checkForWin);
  document.addEventListener ('contextmenu', checkForWin);
  
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  var cellCount = 0;
  //  If its a mine, it has to be marked.
  //  If all other cells are marked or not hidden, you win
  
  for (i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine && board.cells[i].isMarked) || (!board.cells[i].isMine && !board.cells[i].hidden)) {
      cellCount ++;
      if (cellCount == board.cells.length) {
        lib.displayMessage('WOOOOOOOOOOOOO!');
      }
    } 
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var surroundingCount = 0;
  for (i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      surroundingCount++;
    }
  }
  return surroundingCount;
}
*/
