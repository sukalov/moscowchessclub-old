let players = [];
let tournamentStatus = 0;
let tournament = {};
let allGroupTours = {};


// конструктор добавляющий игроков
class Player {
    constructor(name) {
        this.name = name;
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
function add() {
    for (let i = 0; i < arguments.length; i++) {
        players.push(new Player(arguments[i]));
      }  
}

// делает из массива игроков объект с группами по 4 человека в группе
function groupPeople(numPeople, people) {
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
        console.log(groupName);
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
const startTournament = (numPeople = 5) => {
    tournamentStatus = 0;
    players = randomizeArray(players);

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

// add('матвей соколовский');
// add('ваня вор');
// add('лола ткаченко');
// add('миша ярчевский');
// add('андрей буртов');
// add('максим смоленцев');
// add('ваня толстой');
// add('толя яцков');
// add('миша бешкуров');
// add('лёша слинка');
// add('саша другалёв');
// add('адиля аюпова');
// add('андрей саламов');
// add('саша пилипенко');
// add('арина некрасова');
// add('сергей скрынников');

add('вова')
add('александр роший')
add('илья лакаев')
add('выиталик')
add('саша сонный')
add('стас сиротин')
add('луиза')
add('джек восьмёркин')
add('кот кокос')
add('лёня бурдуковский')
add('федя фокин')
add('луна сегодня красивая правда')
add('брянский волк')
add('миша ярчевский')
add('даур')
add('артём вахрамеев')
add('ира')
add('саша другалёв')
add('окс')
add('лола ткаченко')
add('алиса')
add('егор м')
add('лера')
add('супрем двачевский')
add('мурад')
add('софи')
add('рябиночка')
add('андрей гузынин')
add('руслан долотказин')
add('утка убийца')
add('полина')
add('какаси сенсей')

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

try {
window.Player = Player;
window.Game = Game;
window.players = players;
window.add = add;
window.groupPeople = groupPeople;
window.randomizeArray = randomizeArray;
window.startTournament = startTournament;
window.newTour = newTour;
window.tournament = tournament;
window.allGroupTours = allGroupTours;
window.newGroupStage = newGroupStage;
window.save = save;
} catch (err) {
    console.log(err)
}