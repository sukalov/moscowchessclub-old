let players = [];
let tournamentStatus = 0;
let tournament = {};
let allGroupTours = { tour1: {}, tour2: {}, tour3: {} };

// конструктор добавляющий игроков
class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.draws = 0;
        this.loses = 0;
        this.colorIndex = 10; // индекс по которому определяется кто каким цветом играет (у кого индекс меньше тот белыми, если равный - рандом)
    }

    // добавляет к каждому игроку метод, который выводит всё инфу про игрока
    show() {
        console.log(this);
    }

    score() {
        return this.wins + (this.draws / 2)
    }
}

//конструктор создающий партию
class Game {
    constructor(white, black, tour) {
        this.white = white;
        this.black = black;
        this.tour = tour;
    }
}

// создаём функцию адд через которую будем обращаться к конструктору и добавлять игроков
const add = (name) => {
    players.push(new Player(name));
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

  function generateAllTours(groups) {

    console.log(groups);
  
    // Iterate over each group
    for (const groupName in groups) {
      const group = groups[groupName];
      const games = [];
  

      // Iterate over each pair of players in the group
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          // Create a game object with the two players
          const game = { player1: group[i], player2: group[j] };
          games.push(game);
        }
      }
 
      // Shuffle the games to create a random order
      games.sort(() => Math.random() - 0.5);
  
      // Distribute the games evenly across the three tours
      for (let i = 0; i < games.length; i++) {
        const tourNumber = i % 3 + 1;
        const tourName = `tour${tourNumber}`;
        if (!allGroupTours[tourName][groupName]) {
            allGroupTours[tourName][groupName] = [];
            allGroupTours[tourName][groupName].push(games[i]);
        }
      }
    }
  }

// перемешивает всех игроков и разбивает на группы по {numPeople} человек
const startTournament = (numPeople = 4) => {
    tournamentStatus = 0;
    players = randomizeArray(players);

    const groups = groupPeople(numPeople, players);

    generateAllTours(groups);
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


add('матвей соколовский');
add('ваня вор');
add('лола ткаченко');
add('миша ярчевский');
add('андрей буртов');
add('максим смоленцев');
add('ваня толстой');
add('толя яцков');
add('миша бешкуров');
add('лёша слинка');
add('саша другалёв');
add('адиля аюпова');
add('андрей саламов');
add('саша пилипенко');
add('арина некрасова');
add('сергей скрынников');


startTournament();

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