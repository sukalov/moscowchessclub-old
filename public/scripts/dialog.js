import game from './data/test_game.json' assert { type: "json" };
import game2 from './data/test_game2.json' assert { type: "json" };

document.getElementById('playAgain').addEventListener('click', start);

  const moves = game2.moves;
  const result = game2.str.Result;



function start() {

  console.log(game.moves[0]);

  const newGame = document.getElementById('newGame')
  
  var moveIndex = 0;
  var clickcount = 0;
  let whiteTurn = true;
  
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

  if (whiteTurn) {
    moveW.style.display = 'block';
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.remove("animate-out");
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '30px';
    moveW.textContent = moves[moveIndex++];
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
    resultMessage.textContent = result
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
    moveB.textContent = moves[moveIndex++];
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
    resultMessage.textContent = result
    playAgain.textContent = 'Сыграть ещё раз'
    newGame.textContent = 'Новая игра'
    console.log(result)
  } 
})
}

start()

