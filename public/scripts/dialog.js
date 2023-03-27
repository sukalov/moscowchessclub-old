let jsonRes, moves, moveIndex, result, getResult, onePlaysWhite, playerOneTurn, clicked, clickedSecondTime, firstMoveClick;

const player1 = document.getElementById('motya');
const player2 = document.getElementById('vanya');
const movePlayerOne = document.getElementById('movePlayerOne');
const movePlayerTwo = document.getElementById('movePlayerTwo');
const resultMessage = document.getElementById('result')
const playAgain = document.getElementById('playAgain')
const newGame = document.getElementById('newGame')
const resContainer = document.getElementById('resContainer')
const playerName = document.querySelectorAll('.person__info')
const descriptionBox = document.getElementById('descriptionBox')
const gameDescription = document.getElementById('gameDescription')
const personOne = document.getElementById('one')
const personTwo = document.getElementById('two')
const closeButton = document.getElementById('closeButton')
playAgain.addEventListener('click', start);
newGame.addEventListener('click', () => {
  getNewGame();
  start()
});

function descriptionHandler() {
  if (!clicked) {
    if (jsonRes.gameComment) {
      clicked = true
      gameDescription.textContent = jsonRes.gameComment.comment
      descriptionBox.classList.remove('slide-out')
      descriptionBox.classList.add('slide-in')
      personOne.classList.remove('slide-in2')
      personTwo.classList.remove('slide-in2')
      personOne.classList.add('slide-out2')
      personTwo.classList.add('slide-out2')
    } else {
      clicked = true
      gameDescription.textContent = 'Управление клавиатурой: \n\n< – Ход игрока слева \n> – Ход игрока справа \nM – Сменить тему \nN – Новая игра \n? – Закрыть это окно';
      descriptionBox.classList.remove('slide-out')
      descriptionBox.classList.add('slide-in')
      personOne.classList.remove('slide-in2')
      personTwo.classList.remove('slide-in2')
      personOne.classList.add('slide-out2')
      personTwo.classList.add('slide-out2')
    }
  }
}

function closeDescription() {
  clickedSecondTime = true;
  descriptionBox.classList.remove('slide-in')
  descriptionBox.classList.add('slide-out')
  personOne.classList.remove('slide-out2')
  personTwo.classList.remove('slide-out2')
  personOne.classList.add('slide-in2')
  personTwo.classList.add('slide-in2')
}

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
  move1.classList.replace("animate-in", "animate-out");
  move2.classList.remove("animate-out", "animate-in");
  resultMessage.textContent = getResult;
  playAgain.textContent = 'Сыграть ещё раз';
  newGame.textContent = 'Новая игра';
  resContainer.classList.remove('animate-out')
  resContainer.classList.add('animate-in')
}

function playerOneHandler(move1, move2) {
  descriptionHandler()
  if (clickedSecondTime) {
    firstClickPlayerOne(true)
    if (moveIndex < moves.length && playerOneTurn) {
      bubbleHandler(move1, move2)
    } else if (!getResult && !playerOneTurn) {
      movePlayerOne.style.display = 'block'
      movePlayerOne.classList.add("animate-in");
      movePlayerOne.style.fontSize = '20px';
      movePlayerOne.textContent = 'ход Вора';
    } else {
      resultHandler(move1, move2)
    }
    console.log('player 1:\nmove ' + (moveIndex) + `, ` + moves[moveIndex - 1].notation.notation, '\n' + 'player 1 to move: \n' + playerOneTurn)
  } 
}

function playerTwoHandler(move1, move2) {
  descriptionHandler()
  if (clickedSecondTime) {
    firstClickPlayerOne(false)
    if (moveIndex < moves.length && !playerOneTurn) {
      bubbleHandler(move1, move2)
    } else if (!getResult && playerOneTurn) {
      movePlayerTwo.style.display = 'block'
      movePlayerTwo.classList.add("animate-in");
      movePlayerTwo.style.fontSize = '20px';
      movePlayerTwo.textContent = 'ход Матвея';
    } else {
      resultHandler(move1, move2)
    }
    console.log('player 2:\nmove ' + (moveIndex) + `, ` + moves[moveIndex - 1].notation.notation, '\n' + 'player 1 to move: \n' + playerOneTurn)
  }}

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
  if (!firstMoveClick) {
    window.addEventListener('resize', adaptPage)
    adaptPage()
    firstMoveClick = true; // теперь эта функция не будет срабатывать, пока не начнём всё заново
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
  personOne.classList.add('slide-in2')
  personTwo.classList.add('slide-in2')
  personOne.classList.remove('slide-out2')
  personTwo.classList.remove('slide-out2')
  descriptionBox.classList.remove('slide-in')
  descriptionBox.classList.add('slide-out')
  resContainer.classList.remove('animate-in')
  resContainer.classList.add('animate-out')
  clicked = clickedSecondTime = getResult = firstMoveClick = false;
  moveIndex = 0;
  playerName.forEach((name) => {
    name.style.display = 'block'
  });
  movePlayerOne.style.display = 'none';
  movePlayerTwo.style.display = 'none';
}

function goToLastMove() {
  clicked = clickedSecondTime = true
  moveIndex = moves.length - 1;
}

function adaptPage() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  if (window.matchMedia('(max-width: 450px)').matches) {
    playerName.forEach((name) => {
      name.style.display = 'none'
    })
  } else {
    playerName.forEach((name) => {
      name.style.display = 'block'
    })
  }
}

window.getNewGame = getNewGame
window.jsonRes = jsonRes
window.start = start
window.goToLastMove = goToLastMove

player1.addEventListener("click", function () {
  playerOneHandler(movePlayerOne, movePlayerTwo)
});
player2.addEventListener("click", function () {
  playerTwoHandler(movePlayerTwo, movePlayerOne)
});

closeButton.addEventListener('click', function () {
  closeDescription()
})

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
  } else if (code === 'Slash' && !(ctrlKey || metaKey || shiftKey || altKey)) {
    closeDescription()
  }
});

getNewGame()
start()