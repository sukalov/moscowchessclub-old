import game from './data/test_game.json' assert { type: "json" };
console.log(game.moves[0]);

const moves = game.moves;
var moveIndex = 0;
var clickcount = 0
let whiteTurn = true;

const clickonperson1 = document.getElementById('motya');
const clickonperson2 = document.getElementById('vanya');
const makemoveW = document.querySelector('.moveW');
const makemoveB = document.querySelector('.moveB');


clickonperson1.addEventListener("click", (event) => {

    if (whiteTurn) {
        makemoveW.style.fontSize = '50px';
        makemoveB.textContent = ''
        makemoveW.textContent = moves[moveIndex++];
        clickcount++
        console.log(clickcount)
        whiteTurn = false;
    } else {
        makemoveW.style.fontSize = '20px';
        makemoveW.textContent = 'ход Вора';
    }
});

clickonperson2.addEventListener("click", (event) => {

    if (!whiteTurn) {
        makemoveB.style.fontSize = '50px';
        makemoveW.textContent = ''
        makemoveB.textContent = moves[moveIndex++];
        clickcount++
        console.log(clickcount)
        whiteTurn = true;
    } else {
        makemoveB.style.fontSize = '20px';
        makemoveB.textContent = 'ход Матвея';
    }
});