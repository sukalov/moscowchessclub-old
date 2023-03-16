let jsonRes
let moves
let moveIndex
let result
let getResult
let playsWhite
let playerOneTurn
let clicked

function getNewGame() {
jsonRes = 0;
moves = 0;
moveIndex = 0;
// result = 0;
getResult = 0;
playsWhite = 0;
// playerOneTurn = undefined;

  fetch('./new-game')
    .then(response => response.json())
    .then(data => {(
      jsonRes = JSON.parse(data),
      window.jsonRes = jsonRes,
      moves = jsonRes.moves,
      result = jsonRes.tags.Result
    )});
    // .then(data => playsWhite = true)
    // .then(data => {
      // if (result == '1/2-1/2') {
      //   getResult = '½-½'
      // }
      // if (result == '1-0' && playsWhite) {
      //   getResult = '1-0'
      // } else if (result == '0-1' && playsWhite) {
      //   getResult = '0-1'
      // }
      //  else if (result == '1-0' && !playsWhite) {
      //   getResult = '1-0' 
      // } else {
      //   getResult = '0-1'
      // }
    // })
}



  const player1 = document.getElementById('motya');
  const player2 = document.getElementById('vanya');
  const movePlayerOne = document.getElementById('movePlayerOne');
  const movePlayerTwo = document.getElementById('movePlayerTwo');
  const resultMessage = document.getElementById('result')
  const playAgain = document.getElementById('playAgain')
  const newGame = document.getElementById('newGame')
  playAgain.addEventListener('click', start);
  newGame.addEventListener('click', (eent) => {
    getNewGame();
    start()});
  
  // var playerOneTurn = (Math.random() < 0.5);

  function hideMenu() {
    if (moveIndex < moves.length) {
      resultMessage.textContent = ''
      playAgain.textContent = ''
      newGame.textContent = ''
    }
  }

  function start() {

    console.log('====' + moves);
    console.log('====' + jsonRes);
    console.log('====' + moveIndex);
    console.log('====' + playsWhite);
    

    clicked = false;
    function firstClickPlayerOne(a) {
      if (!clicked) {
        clicked = true; // теперь эта функция не будет срабатывать, пока не начнём всё заново
        playerOneTurn = a;
        playsWhite = true;
      }
    }

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
      resultMessage.textContent = getResult
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
    }
  });

  player2.addEventListener("click", () => {
    // hideMenu()
    firstClickPlayerOne(false)
    console.log('======> move ' + moveIndex, playerOneTurn)

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
      resultMessage.textContent = getResult
      playAgain.textContent = 'Сыграть ещё раз'
      newGame.textContent = 'Новая игра'
      // console.log(result)
    }
  })
  console.log(playerOneTurn)
}

  window.getNewGame = getNewGame
  window.jsonRes = jsonRes
  window.start = start

getNewGame()
start()

//1. вынести playsWhite и все ифы из фетча куда-нибудь в конец
// 2. для плеер 1 и плеер 2 20 строчек кода дублируются. оптимизировать чтобы строчки 
// не дублировались и просто было одно условие вначале
// то есть вынести в отедльную функцию дублиркубщиеся строчки
// и обращаться к ним извне в дух случаях с разным порядком аргументов