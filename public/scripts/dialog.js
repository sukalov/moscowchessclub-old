// import game from './data/test_game.json' assert { type: "json" };
// import game2 from './data/test_game2.json' assert { type: "json" };

const player1 = document.getElementById('motya');
const player2 = document.getElementById('vanya');
const movePlayerOne = document.getElementById('movePlayerOne');
const movePlayerTwo = document.getElementById('movePlayerTwo');
let resultMessage = document.getElementById('result')
let playAgain = document.getElementById('playAgain')
document.getElementById('playAgain').addEventListener('click', start);
var jsonRes
let moves
let result

function getNewGame() {
  return fetch('./new-game')
    .then(response => response.json())
    .then(data => {
      (jsonRes = JSON.parse(data), window.jsonRes = jsonRes)
      return data
    })
    .catch(err => console.log(err));
}

function start() {

  getNewGame()
    .then(data => moves = jsonRes.moves)
    .then(data => console.log(moves))

  function hideMenu() {
    if (moveIndex < moves.length) {
      resultMessage.textContent = ''
      playAgain.textContent = ''
      newGame.textContent = ''
    }
  }

  let newGame = document.getElementById('newGame')
  let playerOneTurn = (Math.random() < 0.5);
  // let playerOneTurn = true;


  let moveIndex = 0;
  console.log(moveIndex);
  movePlayerOne.style.display = 'none';
  movePlayerTwo.style.display = 'none';
  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''

  player1.addEventListener("click", (event) => {
    hideMenu()
    if (moveIndex < moves.length && playerOneTurn) {
      movePlayerOne.style.display = 'block';
      movePlayerTwo.classList.add("animate-out");
      movePlayerTwo.classList.remove("animate-in");
      movePlayerOne.classList.remove("animate-out");
      movePlayerOne.classList.add("animate-in");
      movePlayerOne.style.fontSize = '30px';
      movePlayerOne.textContent = moves[moveIndex++].notation.notation;
      console.log(moveIndex);
      playerOneTurn = !playerOneTurn;
      console.log(playerOneTurn)
    }
    else if (!resultMessage.textContent) {
      movePlayerOne.style.display = 'block'
      movePlayerOne.classList.add("animate-in");
      movePlayerOne.style.fontSize = '20px';
      movePlayerOne.textContent = 'ход Вора';
    }

    if (moveIndex == moves.length && playerOneTurn) {
      movePlayerOne.style.display = 'none';
      movePlayerTwo.classList.add("animate-out");
      movePlayerOne.classList.remove("animate-out");
      movePlayerOne.classList.remove("animate-in");
      movePlayerTwo.classList.remove("animate-in");
      resultMessage.textContent = jsonRes.tags.Result
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
    }
  });

  player2.addEventListener("click", (event) => {
    hideMenu()
    if (moveIndex < moves.length && !playerOneTurn) {
      movePlayerTwo.style.display = 'block';
      movePlayerOne.classList.add("animate-out");
      movePlayerOne.classList.remove("animate-in");
      movePlayerTwo.classList.remove("animate-out");
      movePlayerTwo.classList.add("animate-in");
      movePlayerTwo.style.fontSize = '30px';
      movePlayerTwo.textContent = moves[moveIndex++].notation.notation;
      console.log(moveIndex);
      playerOneTurn = !playerOneTurn;
      console.log(playerOneTurn)
    }
    else if (!resultMessage.textContent) {

      movePlayerTwo.style.display = 'block'
      movePlayerTwo.classList.add("animate-in");
      movePlayerTwo.style.fontSize = '20px';
      movePlayerTwo.textContent = 'ход Матвея';
    }

    if (moveIndex == moves.length && !playerOneTurn) {
      movePlayerTwo.style.display = 'none';
      movePlayerOne.classList.add("animate-out");
      movePlayerTwo.classList.remove("animate-out");
      movePlayerOne.classList.remove("animate-in");
      movePlayerTwo.classList.remove("animate-in");
      resultMessage.textContent = jsonRes.tags.Result
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
      // console.log(result)
    }
  })

  window.getNewGame = getNewGame
  window.jsonRes = jsonRes
  window.start = start

}

start()