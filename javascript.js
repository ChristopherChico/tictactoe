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
    displayPlayerTurn();
    document.getElementById("aiscore").style.display = "none";
    document.getElementById("player1score").style.marginBottom = "-15px";
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
    displayPlayerTurn();
    document.getElementById("player2score").style.display = "none";
    document.getElementById("player1score").style.marginBottom = "-15px";
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
        if (p1score > 4) {
          setTimeout(function() {
          alert(`Player 1 Wins The Game!`);
          setTimeout(function(){location.reload();},200);
        }, 50);
      } else if (p1score < 5) {
            setTimeout(function() {
            alert('Player 1 Wins The Round');
            resetBoard();
            }, 50)
      }
      } else if (checkDraw()) {
        alert("We have a draw!");
        resetBoard();
      } else {
        currentPlayer = isAiGame ? 'ai' : 'player2';
        if (isAiGame && currentPlayer === 'ai') {
          makeAiMove();
        } else {
          displayPlayerTurn(); // Display turn for player2
        }
      }
    } else if (currentPlayer === 'player2') {
      cell.innerHTML = 'O';
      cell.innerHTML = 'O';
      if (checkWin('O')) {
        const scoreadd = ++p2score;
        const roundadd = ++round;
        document.getElementById("player2score").innerHTML = `Player 2 Score: ${scoreadd}`;
        document.getElementById("rounds").innerHTML = `Rounds No: ${roundadd}`;
        resetBoard();
        if (p2score > 4) {
          setTimeout(function() {
            alert(`Player 2 Wins The Game!`);
            setTimeout(function(){location.reload();},200);
          }, 50);
        } else if (p2score < 5) { 
              setTimeout(function() {
              alert('Player 2 Wins The Round');
              resetBoard();
            }, 50)
        }
      }else if (checkDraw()){ //If the Game is draw
        
        alert("We have a draw!");
        resetBoard();
      }
       else {
        currentPlayer = 'player';
      } displayPlayerTurn(); // Display turn for player2
    } else if (currentPlayer === 'ai') {
      cell.innerHTML = 'O';
      checkWinAi();
      displayPlayerTurn(); // Display turn for AI
    }
  }
}

function checkWinAi() {
  if (checkWin('O')) {
    const scoreadd = ++aiscore;
    const roundadd = ++round;
    document.getElementById("rounds").innerHTML = `Rounds No: ${roundadd}`;
    document.getElementById("aiscore").innerHTML = `Ai Score: ${scoreadd}`;
    if (aiscore > 4) {
      setTimeout(function() {
        alert(`AI Wins The Game!`);
        setTimeout(function(){location.reload();},200); 
      }, 50)
    } else if (aiscore < 5) {
          setTimeout(function() {
          alert('AI Wins The Round');
          resetBoard();
        }, 50)
    }
  }else if (checkDraw()){ 
    alert("We have a draw!");
    resetBoard();
  }
   else { 
    currentPlayer = 'player';
  }
  displayPlayerTurn();
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
  document.getElementsByClassName("image-container")[0].style.marginBottom = "-5px";
  document.getElementsByClassName("image-container")[0].style.width = "400px";
}

function resetBoard() {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML = '';
    }
  }
  // Switch back to Player 1 - X
  currentPlayer = 'player';
}

function displayPlayerTurn() {
  var turnElement = document.getElementById("playerTurn");
  if (currentPlayer === 'player') {
    turnElement.textContent = "Player 1's Turn (X)";
  } else if (currentPlayer === 'player2') {
    turnElement.textContent = "Player 2's Turn (O)";
  } else if (currentPlayer === 'ai') {
    turnElement.textContent = "AI's Turn (O)";
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

// CHECK IF IT IS DRAW or TIE
function checkDraw() {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 6; col++) {
      if (document.getElementById(`ticTacToeGrid`).rows[row].cells[col].innerHTML === '') {
        return false; // If any cell is empty, the game is not a draw
      }
    }
  }
  return true;
}

function makeAiMove() {
  if (document.querySelector('input[value="easy"]:checked')) {
    displayPlayerTurn();
    setTimeout(function() {
    makeRandomMove();
  }, 60);
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
      selectedCell.innerHTML = 'O';
      currentPlayer = 'player';
      displayPlayerTurn();
    } checkWinAi();
  }
}

function makeMediumMove() {
  var currentPlayerSymbol = 'O';
  var opponentPlayerSymbol = 'X';

  // Check if the opponent is about to win
  var blockingMove = findBlockingMove(opponentPlayerSymbol);

  // Randomly determine whether to block or win
  var blockChance = Math.random();
  var winChance = Math.random();

  if (blockingMove && blockChance < 0.4) {
    setTimeout(function () {
      blockingMove.innerHTML = currentPlayerSymbol;
      currentPlayer = 'player';
      displayPlayerTurn();
      checkWinAi();
    }, 100);
  } else {
    // Shuffle the empty cells
    var emptyCells = Array.from(document.querySelectorAll('td:empty'));
    shuffleArray(emptyCells);

    // Randomly prioritize winning moves
    var winningMove = null;

    emptyCells.forEach(cell => {
      cell.innerHTML = currentPlayerSymbol;

      if (checkWin(currentPlayerSymbol) && winChance < 0.6) {
        winningMove = cell;
      }

      cell.innerHTML = '';
    });

    // If there's a winning move, play it
    if (winningMove) {
      setTimeout(function () {
        winningMove.innerHTML = currentPlayerSymbol;
        currentPlayer = 'player';
        displayPlayerTurn();
        checkWinAi();
      }, 100);
    } else {

      // Use minimax with shuffled cells for blocking moves
      var bestScore = -Infinity;
      var bestMove;

      emptyCells.forEach(cell => {
        cell.innerHTML = currentPlayerSymbol;
        var score = minimax(0, false, currentPlayerSymbol, opponentPlayerSymbol);
        cell.innerHTML = '';

        if (score > bestScore) {
          bestScore = score;
          bestMove = cell;
        }
      });

      // Play the best blocking move
      if (bestMove) {
        setTimeout(function () {
          bestMove.innerHTML = currentPlayerSymbol;
          currentPlayer = 'player';
          displayPlayerTurn();
          checkWinAi();
        }, 100);
      }
    }
  }
}

function makeHardMove() {
  var currentPlayerSymbol = 'O';
  var opponentPlayerSymbol = 'X';

  // Check if the opponent is about to win
  var blockingMove = findBlockingMove(opponentPlayerSymbol);

  if (blockingMove) {
    setTimeout(function () {
      blockingMove.innerHTML = currentPlayerSymbol;
      currentPlayer = 'player';
      displayPlayerTurn();
      checkWinAi();
    }, 100);
  } else {
    // Shuffle the empty cells
    var emptyCells = Array.from(document.querySelectorAll('td:empty'));
    shuffleArray(emptyCells);

    // Use minimax with shuffled cells
    var bestScore = -Infinity;
    var bestMove;
    emptyCells.forEach(cell => {
      cell.innerHTML = currentPlayerSymbol;
      var score = minimax(0, false, currentPlayerSymbol, opponentPlayerSymbol);
      cell.innerHTML = '';
      if (score > bestScore) {
        bestScore = score;
        bestMove = cell;
      }
    });
    if (bestMove) {
      setTimeout(function () {
        bestMove.innerHTML = currentPlayerSymbol;
        currentPlayer = 'player';
        displayPlayerTurn();
        checkWinAi();
      }, 100);
    }
  }
}

function minimax(depth, isMaximizing, currentPlayerSymbol, opponentPlayerSymbol) {
  if (depth > 0) {
    return 0;
  }
  if (checkWin(currentPlayerSymbol)) {
    return 1;
  } else if (checkWin(opponentPlayerSymbol)) {
    return -1;
  } else if (checkDraw()) {
    return 0;
  }
  if (isMaximizing) {
    var bestScore = -Infinity;
    document.querySelectorAll('td:empty').forEach(cell => {
      if (cell.innerHTML === '') {
        cell.innerHTML = currentPlayerSymbol;
        var score = minimax(depth + 1, false, currentPlayerSymbol, opponentPlayerSymbol);
        cell.innerHTML = '';

        // Prioritize winning moves
        if (score === 0) {
          score -= 0.5;
        }
        bestScore = Math.max(bestScore, score);
      }
    });
    return bestScore;
  } else {
    var bestScore = Infinity;
    document.querySelectorAll('td:empty').forEach(cell => {
      if (cell.innerHTML === '') {
        cell.innerHTML = opponentPlayerSymbol;
        var score = minimax(depth + 1, !isMaximizing, currentPlayerSymbol, opponentPlayerSymbol);
        cell.innerHTML = '';
        
        // Prioritize blocking moves
        if (score === 1) {
          score -= 0.5;
        }
        bestScore = Math.min(bestScore, score);
      }
    });
    return bestScore;
  }
}

function findBlockingMove(opponentPlayerSymbol) {
  // Check each empty cell to see if it blocks opponent from winning
  var blockingMove = null;
  document.querySelectorAll('td:empty').forEach(cell => {
    cell.innerHTML = opponentPlayerSymbol;
    if (checkWin(opponentPlayerSymbol)) {
      blockingMove = cell;
    }
    cell.innerHTML = '';
  });
  return blockingMove;
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

