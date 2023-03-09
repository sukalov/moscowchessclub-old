import game from './data/test_game.json' assert { type: "json" };
import game2 from './data/test_game2.json' assert { type: "json" };
console.log(game.moves[0]);

const moves = game2.moves;
const result = game2.str.Result
var moveIndex = 0;
var clickcount = 0
let whiteTurn = true;

const clickonperson1 = document.getElementById('motya');
const clickonperson2 = document.getElementById('vanya');
const moveW = document.getElementById('moveW');
const moveB = document.getElementById('moveB');
const resultMessage = document.getElementById('result')
moveW.style.opacity = 0;
moveB.style.opacity = 0;


clickonperson1.addEventListener("click", (event) => {

  if (whiteTurn) {
    moveB.classList.add("animate-out");
    moveB.classList.remove("animate-in");
    moveW.classList.remove("animate-out");
    moveW.classList.add("animate-in");
    moveW.style.fontSize = '30px';
    moveB.textContent = ''
    moveW.textContent = moves[moveIndex++];
    clickcount++
    console.log(clickcount)
    whiteTurn = false;
  } else {
    moveW.style.fontSize = '20px';
    moveW.textContent = 'ход Вора';
  }

  if (moveIndex > moves.length) {
    moveW.classList.add("animate-out");
    moveB.classList.add("animate-out");
    resultMessage.textContent = result
    console.log(result)
  }

});

clickonperson2.addEventListener("click", (event) => {

  if (!whiteTurn) {
    moveW.classList.add("animate-out");
    moveW.classList.remove("animate-in");
    moveB.classList.remove("animate-out");
    moveB.classList.add("animate-in");
    moveB.style.fontSize = '30px';
    moveW.textContent = ''
    moveB.textContent = moves[moveIndex++];
    clickcount++
    console.log(clickcount)
    whiteTurn = true;
  } else {
    moveB.style.fontSize = '20px';
    moveB.textContent = 'ход Матвея';
  }

  if (moveIndex > moves.length) {
    moveW.classList.add("animate-out");
    moveB.classList.add("animate-out");
    resultMessage.textContent = result
    console.log(result)
  }
});