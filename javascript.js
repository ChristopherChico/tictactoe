var currentPlayer = 'player';
var isAiGame = false;

function okGame() {
  var opponentRadio = document.querySelector('input[name="opponent"]:checked');
  if (document.querySelector('input[value="player"]:checked')) {
    currentPlayer = 'player';
    document.getElementById("select").style.display = "none";
    document.getElementById("ticTacToeGrid").style.display = "table";
  } else if (document.querySelector('input[value="ai"]:checked')) {
    isAiGame = opponentRadio.value === 'ai';
    document.getElementById("select").style.display = "none";
    document.getElementById("difficultyForm").style.display = "flex";
  }
    else {
    alert("Please select an opponent before starting the game.");
  }
}

function startGame() {
  var difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
  if (difficultyRadio) {
    document.getElementById("difficultyForm").style.display = "none";
    document.getElementById("ticTacToeGrid").style.display = "table";
    if (isAiGame) {
      currentPlayer = 'player';
    }
  } else {
    alert("Please select a difficulty level before starting the game.");
  }
}

function makeMove(cell) {
  if (cell.innerHTML === '') {
    if (currentPlayer === 'player') {
      cell.innerHTML = 'X';
      if (checkWin('X')) {
        alert('Player wins!');
        // Add any additional logic or reset the game as needed
      } else {
        currentPlayer = 'ai'; // Switch to AI's turn
        if (isAiGame) {
          makeAiMove();
        }
      }
    } else if (currentPlayer === 'ai') {
      cell.innerHTML = 'O';
      if (checkWin('O')) {
        alert('Player 2 Wins!');
      } else {
        currentPlayer = 'player';
      }
    }
  }
}

function checkWin(playerSymbol) {
  // Check for horizontal win (6 in a row)
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 1; col++) {
      if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 1].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 5].innerHTML === playerSymbol
      ) {
        return true;
      }
    }
  }

  // Check for vertical win (5 in a row)
  for (let row = 0; row < 1; row++) {
    for (let col = 0; col < 6; col++) {
      if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col].innerHTML === playerSymbol
      ) {
        return true;
      }
    }
  }

  // Check for diagonal win (5 in a row)
  for (let row = 0; row < 1; row++) {
    for (let col = 0; col < 1; col++) {
      if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 1].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 4].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 1].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col].innerHTML === playerSymbol
      ) {
        return true;

      // Check for diagonal win (4 in a row)
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 1].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 3].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 5].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 5].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 5].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 2].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 1].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col].innerHTML === playerSymbol
      ) {
        return true;
      } else if (
        document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 5].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 4].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 3].innerHTML === playerSymbol &&
        document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 2].innerHTML === playerSymbol
      ) {
        return true;
      }
    }
  }

    // Check for diagonal win (2 in a row)
    for (let row = 0; row < 1; row++) {
      for (let col = 0; col < 1; col++) {
        if (
          document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 1].innerHTML === playerSymbol
        ) {
          return true;
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 1].innerHTML === playerSymbol
        ) {
          return true;
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 4].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 5].innerHTML === playerSymbol
        ) {
          return true;
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row  + 3].cells[col + 5].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 4].innerHTML === playerSymbol
        ) {
          return true;

        // Check for diagonal win (3 in a row)
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 3].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 4].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 5].innerHTML === playerSymbol         
        ) {
          return true;
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 1].cells[col + 1].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col].innerHTML === playerSymbol         
        ) {
          return true;
        } else if (
          document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 1].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 2].innerHTML === playerSymbol         
        ) {
          return true;
        }  else if (
          document.getElementById(`ticTacToeGrid`).rows[row + 2].cells[col + 5].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 3].cells[col + 4].innerHTML === playerSymbol &&
          document.getElementById(`ticTacToeGrid`).rows[row + 4].cells[col + 3].innerHTML === playerSymbol         
        ) {
          return true;
        } 
      }
    }

  return false;
}

function makeAiMove() {
  if (document.querySelector('input[value="easy"]:checked')) {
    makeRandomMove();
  } else if (document.querySelector('input[value="medium"]:checked')) {
    makeMediumMove();
  } else if (document.querySelector('input[value="difficult"]:checked')) {
    makeHardMove();
  }
}

function makeRandomMove() {
  var emptyCells = document.querySelectorAll('td:empty');

  if (emptyCells.length) {
    var randomIndex = Math.floor(Math.random() * emptyCells.length);
    var selectedCell = emptyCells[randomIndex];

    if (selectedCell.innerHTML === '') {
      selectedCell.innerHTML = 'O'; // Assuming 'O' represents the AI's move
      currentPlayer = 'player';
    }
  }
}


function makeMediumMove() {
  var emptyCells = document.querySelectorAll('td:empty');

  if (emptyCells.length > 0) {
    var blockingChance = 1;

    var blockingMove = checkBlockingMove('X');
    
    if (blockingMove && Math.random() < 1) {
      blockingMove.innerHTML = 'O';
    } else {
      makeRandomMove();
    }
  }
}

function makeHardMove() {
  var emptyCells = document.querySelectorAll('td:empty');

  if (emptyCells.length > 0) {
    makeRandomMove();
    var winningMove = checkWinningMove('O');

    if (winningMove) {
      winningMove.innerHTML = 'O'; // Make a winning move
      currentPlayer = 'player';
    } else {
      // If no winning move, block the player
      var blockingMove = checkBlockingMove('X');

      if (blockingMove) {
        blockingMove.innerHTML = 'O'; // Block the player's potential winning move
      }
      // Note: If neither winning nor blocking move is available, the AI will not make a move.
    }
  }
}

function checkWinningMove(aiSymbol) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 1; col++) {
      var currentCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col];
      var nextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 1];
      var nextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2];
      var nextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 3];
      var nextNextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 4];
      var nextNextNextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 5];

      if (
        currentCell.innerHTML === '' &&
        nextCell.innerHTML === aiSymbol &&
        nextNextCell.innerHTML === aiSymbol &&
        nextNextNextCell.innerHTML === aiSymbol &&
        nextNextNextNextCell.innerHTML === aiSymbol &&
        nextNextNextNextNextCell.innerHTML === aiSymbol
      ) {
        return currentCell;
      }
    }
  }

  return null;
}

function checkBlockingMove(playerSymbol) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 1; col++) {
      var currentCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col];
      var nextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 1];
      var nextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 2];
      var nextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 3];
      var nextNextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 4];
      var nextNextNextNextNextCell = document.getElementById(`ticTacToeGrid`).rows[row].cells[col + 5];

      if (
        currentCell.innerHTML === '' &&
        nextCell.innerHTML === playerSymbol &&
        nextNextCell.innerHTML === playerSymbol &&
        nextNextNextCell.innerHTML === playerSymbol &&
        nextNextNextNextCell.innerHTML === playerSymbol &&
        nextNextNextNextNextCell.innerHTML === playerSymbol
      ) {
        return currentCell;
      }
    }
  }

  return null;
}
