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
  if (cell.innerHTML === '' && currentPlayer === 'player') {
    cell.innerHTML = 'X';
    currentPlayer = 'ai'; // Switch to AI's turn
    if (isAiGame) {
      makeAiMove();
    }
  } else if (cell.innerHTML === '' && currentPlayer === 'ai') {
    cell.innerHTML = 'O';
    currentPlayer = 'player'; // Switch back to player's turn
  }
}

function makeAiMove() {
  var emptyCells = document.querySelectorAll('td:empty');
  if (emptyCells.length > 0) {
    var randomIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomIndex].innerHTML = 'O';
    currentPlayer = 'player'; // Switch back to player's turn
  }
}
