import game from './data/test_game.json' assert { type: "json" };
import game2 from './data/test_game2.json' assert { type: "json" };

document.getElementById('playAgain').addEventListener('click', start);



var jsonRes
let moves
let result


function getNewGame() {
  return fetch('./new-game')
  .then(response => response.json())
  .then(data => {(jsonRes = JSON.parse(data), window.jsonRes = jsonRes)
  return data})
  .catch(err => console.log(err));
}


getNewGame()
.then(data => moves = jsonRes.moves)
.then(data => console.log(moves))

function start() {



  const newGame = document.getElementById('newGame')
  
  var moveIndex = 0;
  var clickcount = 0;
  let whiteTurn = true;
  
  const clickonperson1 = document.getElementById('motya');
  const clickonperson2 = document.getElementById('vanya');
  const moveW = document.getElementById('movePlayerOne');
  const moveB = document.getElementById('movePlayerTwo');
  const resultMessage = document.getElementById('result')
  const playAgain = document.getElementById('playAgain')
  moveW.style.display = 'none';
  moveB.style.display = 'none';
  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''
  

clickonperson1.addEventListener("click", (event) => {

  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''

  if (whiteTurn) {
    moveW.style.display = 'block';
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.remove("animate-out");
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '30px';
    moveW.textContent = moves[moveIndex++].notation.notation;
    clickcount++
    console.log(clickcount)
    whiteTurn = false;
  } else {
    moveW.style.display = 'block'
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '20px';
    moveW.textContent = 'ход Вора';
  }

  if (moveIndex > moves.length) {
    moveW.style.display = 'none';
    moveW.classList.remove("animate-out");
    moveW.classList.remove("animate-in");
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    resultMessage.textContent = jsonRes.tags.Result
    playAgain.textContent = 'Сыграть ещё раз'
    newGame.textContent = 'Новая игра'
    console.log(result)
  } 

});

clickonperson2.addEventListener("click", (event) => {

  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''

  if (!whiteTurn) {
    moveB.style.display = 'block';
    moveW.classList.add("animate-out");
    moveW.classList.remove("animate-in");
    moveB.classList.remove("animate-out");
    moveB.classList.add("animate-in");
    moveB.style.fontSize = '30px';
    moveB.textContent = moves[moveIndex++].notation.notation;
    clickcount++
    console.log(clickcount)
    whiteTurn = true;
  } else {
    moveB.style.display = 'block'
    moveB.classList.add("animate-in");
    moveB.style.fontSize = '20px';
    moveB.textContent = 'ход Матвея';
  }

  if (moveIndex > moves.length) {
    moveB.style.display = 'none';
    moveW.classList.remove("animate-in");
    moveB.classList.remove("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.add("animate-out");
    resultMessage.textContent = jsonRes.tags.Result
    playAgain.textContent = 'Сыграть ещё раз'
    newGame.textContent = 'Новая игра'
    console.log(result)
  }
})
}