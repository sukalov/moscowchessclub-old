let jsonRes, moves, moveIndex, result, getResult, onePlaysWhite, playerOneTurn, clicked;

const player1 = document.getElementById('motya');
const player2 = document.getElementById('vanya');
const movePlayerOne = document.getElementById('movePlayerOne');
const movePlayerTwo = document.getElementById('movePlayerTwo');
const resultMessage = document.getElementById('result')
const playAgain = document.getElementById('playAgain')
const newGame = document.getElementById('newGame')
const menu = document.querySelectorAll('menu')
const html = document.getElementsByTagName("html")[0];
playAgain.addEventListener('click', start);
newGame.addEventListener('click', () => {
  getNewGame();
  start()
});

function bubbleHandler(move1, move2) {
  move1.style.display = 'block';
  move2.classList.add("animate-out");
  move2.classList.remove("animate-in");
  move1.classList.remove("animate-out");
  move1.classList.add("animate-in");
  move1.style.fontSize = '30px';
  move1.textContent = moves[moveIndex].notation.notation;
  moveIndex++
  playerOneTurn = !playerOneTurn;
}

function resultHandler(move1, move2) {
  if (result == '1/2-1/2') {
    getResult = '½-½'
  } else if (result == '1-0' && onePlaysWhite) {
    getResult = '1-0'
  } else if (result == '0-1' && onePlaysWhite) {
    getResult = '0-1'
  } else if (result == '1-0' && !onePlaysWhite) {
    getResult = '0-1'
  } else {
    getResult = '1-0'
  }
  move2.style.display = 'none';
  move1.classList.add("animate-out");
  move2.classList.remove("animate-out");
  move1.classList.remove("animate-in");
  move2.classList.remove("animate-in");
  resultMessage.textContent = getResult;
  playAgain.textContent = 'Сыграть ещё раз';
  newGame.textContent = 'Новая игра';
}

function playerOneHandler(move1, move2) {
  firstClickPlayerOne(true)
  console.log('player1 - move ' + moveIndex, playerOneTurn)
  if (moveIndex < moves.length && playerOneTurn) {
    bubbleHandler(move1, move2)
  } else if (!resultMessage.textContent) {
    movePlayerOne.style.display = 'block'
    movePlayerOne.classList.add("animate-in");
    movePlayerOne.style.fontSize = '20px';
    movePlayerOne.textContent = 'ход Вора';
  }
  if (moveIndex == moves.length && playerOneTurn) {
    resultHandler(move1, move2)
  }
}

function playerTwoHandler(move1, move2) {
  firstClickPlayerOne(false)
  console.log('player2 - move ' + moveIndex, playerOneTurn)
  if (moveIndex < moves.length && !playerOneTurn) {
    bubbleHandler(move1, move2)
  } else if (!resultMessage.textContent) {
    movePlayerTwo.style.display = 'block'
    movePlayerTwo.classList.add("animate-in");
    movePlayerTwo.style.fontSize = '20px';
    movePlayerTwo.textContent = 'ход Матвея';
  }
  if (moveIndex == moves.length && !playerOneTurn) {
    resultHandler(move1, move2)
  }
}

function getNewGame() {
  jsonRes = moves = getResult = onePlaysWhite = 0;
  fetch('./new-game')
    .then(response => response.json())
    .then(data => {
      (jsonRes = JSON.parse(data),
        console.log(jsonRes),
        window.jsonRes = jsonRes,
        moves = jsonRes.moves,
        result = jsonRes.tags.Result
      )
    })
}

function firstClickPlayerOne(b) {
  if (!clicked) {
    clicked = true; // теперь эта функция не будет срабатывать, пока не начнём всё заново
    onePlaysWhite = b;
    if (b) {
      getColor(movePlayerOne, movePlayerTwo)
      playerOneTurn = true;
    } else {
      getColor(movePlayerTwo, movePlayerOne)
      playerOneTurn = false;
    }
  }
}

function getColor(colorWhite, colorBlack) {
  colorWhite.style.backgroundColor = '#dddddd'
  colorWhite.style.color = '#111111'
  colorWhite.style.border = '5px solid var(--tail-color)'
  colorBlack.style.backgroundColor = '#111111'
  colorBlack.style.color = '#dddddd'
  colorBlack.style.border = '5px solid var(--tail-color)'
}

function start() {
  clicked = false;
  moveIndex = 0;
  movePlayerOne.style.display = 'none';
  movePlayerTwo.style.display = 'none';
  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''
}

window.getNewGame = getNewGame
window.jsonRes = jsonRes
window.start = start
window.goToLastMove = goToLastMove

function goToLastMove() { 
  moveIndex = moves.length - 1
  firstClickPlayerOne(true)
}

getNewGame()
start()

player1.addEventListener("click", function () {
  playerOneHandler(movePlayerOne, movePlayerTwo)
});
player2.addEventListener("click", function () {
  playerTwoHandler(movePlayerTwo, movePlayerOne)
});

addEventListener("keydown", function (k) {
  const { code, metaKey, shiftKey, altKey, ctrlKey } = k;
  if (code === 'Comma' && !(ctrlKey || metaKey || shiftKey || altKey)) {
    playerOneHandler(movePlayerOne, movePlayerTwo)
  } else if (code === 'Period' && !(ctrlKey || metaKey || shiftKey || altKey)) {
    playerTwoHandler(movePlayerTwo, movePlayerOne)
  } else if (code === 'KeyN' && !(ctrlKey || metaKey || shiftKey || altKey)) {
    getNewGame()
    start()
  } else if (code === 'KeyM' && !(ctrlKey || metaKey || shiftKey || altKey)) {
    toggleButton()
  }
});