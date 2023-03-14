// import game from './data/test_game.json' assert { type: "json" };
// import game2 from './data/test_game2.json' assert { type: "json" };

const player1 = document.getElementById('motya');
const player2 = document.getElementById('vanya');
const movePlayerOne = document.getElementById('movePlayerOne');
const movePlayerTwo = document.getElementById('movePlayerTwo');
let resultMessage = document.getElementById('result')
let playAgain = document.getElementById('playAgain')
let newGame = document.getElementById('newGame')
document.getElementById('playAgain').addEventListener('click', start);
document.getElementById('newGame').addEventListener('click', getNewGame);
document.getElementById('newGame').addEventListener('click', start);
var jsonRes
let moves
let moveIndex
let result
let niceResult

function getNewGame() {
  fetch('./new-game')
    .then(response => response.json())
    .then(data => {
      (jsonRes = JSON.parse(data), window.jsonRes = jsonRes)
      return data
    })
    .then(data => moves = jsonRes.moves)
    .then(data => result = jsonRes.tags.Result)
    .then(data => {if (result == '1/2-1/2') {
      niceResult = '½-½'
    }})
    .then(data => console.log(moves))
    .then(data => console.log(jsonRes))
    .catch(err => console.log(err));
}

getNewGame()
  



function start() {
  // var playerOneTurn = (Math.random() < 0.5);
  var playerOneTurn
  

  function hideMenu() {
    if (moveIndex < moves.length) {
      resultMessage.textContent = ''
      playAgain.textContent = ''
      newGame.textContent = ''
    }
  }


let newGame = document.getElementById('newGame')




// var firstClickPlayerOne = (function() {
//   var clicked = false;
//   return function() {
//       if (!clicked) {
//           clicked = true;
//           playerOneTurn = true;
//            // do something
//         }
//       };
//   })();

  var firstClickPlayerOne = (function() {
    var clicked = false;
    return function (a) {
        if (!clicked) {
            clicked = true;
            playerOneTurn = a;
            moveIndex = 0
          }
        }
    })();
    

    // player1.addEventListener("click", (event) => {
    //   playerOneTurn = true
    // }, {once : true})
    // player2.addEventListener("click", (event) => {
    //   playerOneTurn = false
    // }, {once : true})


  moveIndex = 0;
  console.log(moveIndex);
  movePlayerOne.style.display = 'none';
  movePlayerTwo.style.display = 'none';
  resultMessage.textContent = ''
  playAgain.textContent = ''
  newGame.textContent = ''
  
  player1.addEventListener("click", (event) => {
    hideMenu()
  firstClickPlayerOne(true)
    console.log('move ' + moveIndex, playerOneTurn)
    if (moveIndex < moves.length && playerOneTurn) {
      
      movePlayerOne.style.display = 'block';
      movePlayerTwo.classList.add("animate-out");
      movePlayerTwo.classList.remove("animate-in");
      movePlayerOne.classList.remove("animate-out");
      movePlayerOne.classList.add("animate-in");
      movePlayerOne.style.fontSize = '30px';
      movePlayerOne.textContent = moves[moveIndex].notation.notation;
      moveIndex++
      playerOneTurn = !playerOneTurn;
      console.log('next move ' + moveIndex, playerOneTurn)
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
      resultMessage.textContent = niceResult
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
    }
  });

  player2.addEventListener("click", (event) => {
    hideMenu()
    firstClickPlayerOne(false)
    console.log('move ' + moveIndex, playerOneTurn)
    
    if (moveIndex < moves.length && !playerOneTurn) {
      
      movePlayerTwo.style.display = 'block';
      movePlayerOne.classList.add("animate-out");
      movePlayerOne.classList.remove("animate-in");
      movePlayerTwo.classList.remove("animate-out");
      movePlayerTwo.classList.add("animate-in");
      movePlayerTwo.style.fontSize = '30px';
      movePlayerTwo.textContent = moves[moveIndex].notation.notation;
      moveIndex++
      playerOneTurn = !playerOneTurn;
      console.log('next move ' + moveIndex, playerOneTurn)
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
      resultMessage.textContent = niceResult
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
      // console.log(result)
    }
  })
  console.log(playerOneTurn)
  window.getNewGame = getNewGame
  window.jsonRes = jsonRes
  window.start = start

}

start()