let players = [];
let tournamentStatus = 0;
let tournament = {};
let allGroupTours = {};


// конструктор добавляющий игроков
class Player {
    constructor(name, rating = 1500) {
        this.name = name;
        this.rating = rating;
        this.wins = 0;
        this.draws = 0;
        this.loses = 0;
        this.colorIndex = 0; // индекс по которому определяется кто каким цветом играет (у кого индекс меньше тот белыми, если равный - рандом)
        []
    }

    // добавляет к каждому игроку метод, который выводит всё инфу про игрока
    show() {
        console.log(this);
    }

    score() {
        return this.wins + (this.draws / 2);
    }
}

//конструктор создающий партию
class Game {
    constructor(white, black, tour, group) {
        this.white = white;
        this.black = black;
        this.tour = tour;
        this.group = group;
    }

    result(winner) {
        switch (winner) {
        case 'white':
        case this.white.name:
            this.white.wins += 1;
            this.black.loses += 1;
            this.score = '1-0';
            break;
        case 'black':
        case this.black.name:
            this.black.wins += 1;
            this.white.loses += 1;
            this.score = '0-1'
            break;
        case 'draw':
            this.black.draws += 1;
            this.white.draws += 1;
            this.score = '1/2-1/2'
            break;
        default:
            console.log('не получается записать результат партии...'); 
        }
    }
}

// создаём функцию адд через которую будем обращаться к конструктору и добавлять игроков
function add(name, rating){
  if (name != undefined) {
    players.push(new Player(name, rating))
  } else {
  console.log("надо указать имя игрока. например: add('пётр первый', 3000)")
}
}

// делает из массива игроков объект с группами по 4 человека в группе
function groupPeople(numPeople = 4, people) {
    let groupNumber = 1;

    for (let i = 0; i < people.length; i += numPeople) {
      let groupName = `group${groupNumber}`;
      tournament[groupName] = people.slice(i, i + numPeople);
      groupNumber++;
    }
    return tournament;
}

// перемешивает все элементы массива. в нашем случае всех участников турнира
function randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.sort(() => Math.random() - 0.5);
  }

//создаём все партии внутри группы
  function getAllPairs(players, groupNum) {
    let pairs = [];
    for (let i = 0; i < players.length - 1; i++) {
      for (let j = i+1; j < players.length; j++) {
        pairs.push(new Game (players[i], players[j], undefined, groupNum));
      }
    }
    return pairs;
  }
  

  function generateAllTours(groups) {
  // Determine the number of tours based on the number of players in a group
  const numTours = Object.values(groups)[0].length - 1;

  for (let tourNum = 1; tourNum <= numTours; tourNum++) {
    const tour = {};

    // Iterate over each group in the input object
    for (const groupName in groups) {
      const group = groups[groupName];
      const numPlayers = group.length;

      // Determine the number of games in the group for this tour
      const numGames = numPlayers % 2 === 0 ? numPlayers / 2 : (numPlayers - 1) / 2;

      // Shuffle the array of players for randomness
      const shuffledPlayers = randomizeArray(group);

      // Generate an array of unique game pairs
      const gamePairs = [];
      for (let i = 0; i < numGames; i++) {
        const player1 = shuffledPlayers[i];
        const player2 = shuffledPlayers[numPlayers - 1 - i];
        let newGame = new Game(player1, player2, tour, groupName)
        gamePairs.push(newGame);
      }

      // Add the array of game pairs to the current tour and group
      tour[groupName] = gamePairs;
    }

    // Add the completed tour object to the output object
    allGroupTours[`tour${tourNum}`] = tour;
  }
}

// перемешивает всех игроков и разбивает на группы по {numPeople} человек
const startTournament = (numPeople = 4, randomize = false) => {
    tournamentStatus = 0;
    if (randomize === true){
      players = randomizeArray(players);
    } else {
      players.sort((a, b) => a.rating - b.rating);
    }

    const groups = groupPeople(numPeople, players);
    delete groups.status;

    generateAllTours(groups);
    console.log(getAllPairs(tournament.group1, 'group1'))


    groups.status = `group stage. tour ${ tournamentStatus }`;
    tournament = groups;
}



// фунция создаёт новый тур группового этапа.
const newGroupStage = () => {
    tournamentStatus += 1;
    tournament.status = `group stage. tour ${ tournamentStatus }`;
}

const newTour = () => {
    if (allGroupTours != 0) {
        //здесь будет проверка, закончился ли предыдущий тур
    } else if (false) {
        //здесь будет проверка, закончился ли групповой этап
    } else{
        newGroupStage();
    }
}

add('вова', 1800)
add('александр роший', 1200)
add('илья лакаев', 1800)
add('выиталик', 1200)
add('саша сонный', 1600)
add('стас сиротин', 1500)
add('луиза', 1100)
add('джек восьмёркин', 1800)
add('кот кокос', 1900)
add('лёня бурдуковский', 1600)
add('федя фокин', 1800)
add('луна сегодня красивая правда', 1400)
add('брянский волк', 2000)
add('миша ярчевский', 1800)
add('даур', 1300)
add('артём вахрамеев',1200)
add('ира', 1200)
add('саша другалёв', 1500)
add('окс', 1900)
add('лола ткаченко', 1500)
add('алиса', 1200)
add('егор м', 1500)
add('лера', 1300)
add('супрем двачевский', 1850)
add('мурад', 1100)
add('софи', 1100)
add('рябиночка', 1700)
add('андрей гузынин', 1800)
add('руслан долотказин', 1600)
add('утка убийца', 1400)
add('полина', 1200)
add('какаси сенсей', 1200)

startTournament();

//функция отправляет объект tournament на сервер
function save() {
  fetch('/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tournament),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};


var jsonRes
function getNewGame() {  
  fetch('./testing')
  .then(response => response.json())
  .then(
    data => (jsonRes = JSON.parse(data),
        window.jsonRes = jsonRes
    ))
  .catch(err => console.log(err));

}

try {
window.tournament = tournament;
window.Player = Player;
window.Game = Game;
window.players = players;
window.add = add;
window.groupPeople = groupPeople;
window.randomizeArray = randomizeArray;
window.startTournament = startTournament;
window.save = save;
window.getNewGame = getNewGame;
window.jsonRes = jsonRes;


} catch (err) {
  console.log(err)
}





// export * from './fifa_tournament.js'
// import json from './data/test_tournament.json' assert { type: "json" };
// console.log(json);



// console.log(startTournament(4));





// ДАЛЬШЕ ПРОСТО ПОЛЕЗНЫЕ МЕТОДЫ

// в этой строчке метод, возвращающий всё про игрока по его имени
// player1 = players.find(obj => obj.name === 'матвей соколовский');
// console.log(player1);


// метод возвращающий все объекты класса
// myClassObjects = myArray.filter(obj => obj instanceof MyClass);