var currentPlayer = 'player';
var isAiGame = false;
let round = 0;
let p1score = 0;
let p2score = 0;
let aiscore = 0;

hideBoard();

function okGame() {
  var opponentRadio = document.querySelector('input[name="opponent"]:checked');
  if (document.querySelector('input[value="player"]:checked')) {
    currentPlayer = 'player';
    opponentRadio.value = 'player2';
    document.getElementById("select").style.display = "none";
    document.getElementById("ticTacToeGrid").style.display = "table";
    showBoard();
    document.getElementById("aiscore").style.display = "none";
  } else if (document.querySelector('input[value="ai"]:checked')) {
    isAiGame = true;
    opponentRadio.value = 'ai';
    document.getElementById("select").style.display = "none";
    document.getElementById("difficultyForm").style.display = "flex";
  } else {
    alert("Please select an opponent before starting the game.");
  }
}

function startGame() {
  var difficultyRadio = document.querySelector('input[name="difficulty"]:checked');
  if (difficultyRadio) {
    document.getElementById("difficultyForm").style.display = "none";
    document.getElementById("ticTacToeGrid").style.display = "table";
    showBoard();
    document.getElementById("player2score").style.display = "none";
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
        const scoreadd = ++p1score;
        const roundadd = ++round;
        document.getElementById("player1score").innerHTML = `Player 1 Score: ${scoreadd}`;
        document.getElementById("rounds").innerHTML = `Rounds No: ${roundadd}`;
        resetBoard();
        if (p1score == 3) {
          alert(`Player 1 Wins The Game!`);
          location.reload();
        } else if (p1score < 3) {
          alert('Player 1 Wins The Round');
        }
      } else {
        currentPlayer = isAiGame ? 'ai' : 'player2';
        if (isAiGame && currentPlayer === 'ai') {
          makeAiMove();
        }
      }
    } else if (currentPlayer === 'player2') {
      cell.innerHTML = 'O';
      if (checkWin('O')) {
        const scoreadd = ++p2score;
        const roundadd = ++round;
        document.getElementById("player2score").innerHTML = `Player 2 Score: ${scoreadd}`;
        document.getElementById("rounds").innerHTML = `Rounds No: ${roundadd}`;
        resetBoard();
        if (p2score == 3) {
            alert(`Player 2 Wins The Game!`);
            location.reload();
        } else if (p2score < 2) {
              alert('Player 2 Wins The Round');
        }
      } else {
        currentPlayer = 'player';
      }
    } else if (currentPlayer === 'ai') {
      cell.innerHTML = 'O';
      if (checkWin('O')) {
        const scoreadd = ++aiscore;
        const roundadd = ++round;
        document.getElementById("rounds").innerHTML = `Rounds No: ${roundadd}`;
        document.getElementById("aiscore").innerHTML = `Ai Score: ${scoreadd}`;
        alert('Ai Wins The Round');
        resetBoard();
        if (aiscore == 3) {
            alert(`Ai  Wins The Game!`);
            location.reload();
        } else if (aiscore < 2) {
              alert('Ai Wins The Round');
        }
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
  if (checkWin('O')) {
    alert('AI Wins!');
  }

  if (document.querySelector('input[value="easy"]:checked')) {
    makeRandomMove();
  } else if (document.querySelector('input[value="medium"]:checked')) {
    makeMediumMove();
  } else if (document.querySelector('input[value="difficult"]:checked')) {
    makeHardMove();
  }
}

function makeMediumMove() {
  var emptyCells = document.querySelectorAll('td:empty');
  if (emptyCells.length > 0) {
    makeRandomMove();
  }
}

function makeHardMove() {
  var emptyCells = document.querySelectorAll('td:empty');

  if (emptyCells.length > 0) {
    makeRandomMove();
  }
}

function makeRandomMove() {
  var emptyCells = document.querySelectorAll('td:empty');

  if (emptyCells.length) {
    var randomIndex = Math.floor(Math.random() * emptyCells.length);
    var selectedCell = emptyCells[randomIndex];

    if (selectedCell.innerHTML === '') {
      selectedCell.innerHTML = 'O';
      currentPlayer = 'player';
    }
  }

  if (checkWin('O')) {
    alert('AI Wins!');
  } 
}

function hideBoard() {
  document.getElementById("player1score").style.display = "none";
  document.getElementById("player2score").style.display = "none";
  document.getElementById("aiscore").style.display = "none";
  document.getElementById("rounds").style.display = "none";
  document.getElementById("best").style.display = "none";
}

function showBoard() {
  document.getElementById("player1score").style.display = "flex";
  document.getElementById("player2score").style.display = "flex";
  document.getElementById("aiscore").style.display = "flex";
  document.getElementById("rounds").style.display = "flex";
  document.getElementById("best").style.display = "flex";
}

function resetBoard() {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML = '';
    }
  }
}
