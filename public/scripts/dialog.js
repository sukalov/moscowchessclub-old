// import game from './data/test_game.json' assert { type: "json" };
// import game2 from './data/test_game2.json' assert { type: "json" };

document.getElementById('playAgain').addEventListener('click', start);


var jsonRes
let moves
let result

// function getNewGame() {  
 
// }

function getNewGame() {
  return fetch('./new-game')
  .then(response => response.json())
  .then(data => {(jsonRes = JSON.parse(data), window.jsonRes = jsonRes)
  return data})
  .catch(err => console.log(err));
  }
  
  getNewGame()
   .then(data => moves = jsonRes.moves)
   .then(data => console.log(data))

function start() {
  
  // getNewGame()
  // .then(data => moves = jsonRes.moves)
  // .then(data => console.log(data))

  // getNewGame()

  
  const newGame = document.getElementById('newGame')
  
  var moveIndex = 0;
  var clickcount = 0;
  let playerOneTurn = (Math.random() < 0.5);
  
  console.log(moveIndex);

  const clickonperson1 = document.getElementById('motya');
  const clickonperson2 = document.getElementById('vanya');
  const moveW = document.getElementById('moveW');
  const moveB = document.getElementById('moveB');
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

  // if (playerOneTurn && moveIndex < moves.length) {
  
  if (moveIndex == moves.length && playerOneTurn) {
    moveW.style.display = 'none';
    moveW.classList.remove("animate-out");
    moveW.classList.remove("animate-in");
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    resultMessage.textContent = jsonRes.tags.Result
    playAgain.textContent = 'Сыграть ещё раз'
    newGame.textContent = 'Новая игра'
    // console.log(result)
  } 

  else if (playerOneTurn) {
    moveW.style.display = 'block';
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.remove("animate-out");
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '30px';
    moveW.textContent = moves[moveIndex++].notation.notation;
    // moveIndex++
    clickcount++
    console.log(moveIndex);
    playerOneTurn = false;
  // } else if (!playerOneTurn && moveIndex <= moves.length) {
  } else {

    moveW.style.display = 'block'
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '20px';
    moveW.textContent = 'ход Вора';
  }
  
  // else (moveIndex > moves.length) {
  

});

clickonperson2.addEventListener("click", (event) => {

  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''

  if (moveIndex == moves.length && !playerOneTurn) {
    moveB.style.display = 'none';
    moveW.classList.remove("animate-in");
    moveB.classList.remove("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.add("animate-out");
    resultMessage.textContent = jsonRes.tags.Result
    playAgain.textContent = 'Сыграть ещё раз'
    newGame.textContent = 'Новая игра'
    // console.log(result)
  }

  else if (!playerOneTurn) {
    moveB.style.display = 'block';
    moveW.classList.add("animate-out");
    moveW.classList.remove("animate-in");
    moveB.classList.remove("animate-out");
    moveB.classList.add("animate-in");
    moveB.style.fontSize = '30px';
    moveB.textContent = moves[moveIndex++].notation.notation;
    // moveIndex++
    clickcount++
    console.log(moveIndex);
    playerOneTurn = true;
  } else {
    moveB.style.display = 'block'
    moveB.classList.add("animate-in");
    moveB.style.fontSize = '20px';
    moveB.textContent = 'ход Матвея';
  }

  
})

window.getNewGame = getNewGame
window.jsonRes = jsonRes
window.start = start

}



start()