var players = [];
var tournament;

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
function groupElements(numPeople) {
    let result = {};
    let groupNumber = 1;
  
    for (let i = 0; i < players.length; i += numPeople) {
      let groupName = `group${groupNumber}`;
      result[groupName] = players.slice(i, i + numPeople);
      groupNumber++;
    }
    return result;
}

// перемешивает все элементы массива. в нашем случае всех участников турнира
function randomizeArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.sort(() => Math.random() - 0.5);
  }


// перемешивает всех игроков и разбивает на группы по {numPeople} человек
const startTournament = (numPeople = 4) => {
    players = randomizeArray(players);
    const groups = groupElements(numPeople);
    tournament = groups
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


// console.log(a);



// import SLAY from './data/test_tournament.json' assert { type: "json" };
// console.log(SLAY);

// let zuker = '[Event "London"] [Site "London ENG"] [Date "1883.05.05"] [EventDate "1883.04.26"] [Round "6.1"] [Result "1-0"] [White "Johannes Zukertort"] [Black "Joseph Henry Blackburne"] [ECO "A13"] [WhiteElo "?"] [BlackElo "?"] [PlyCount "65"] 1. c4 e6 2. e3 Nf6 3. Nf3 b6 4. Be2 Bb7 5. O-O d5 6. d4 Bd6 7. Nc3 O-O 8. b3 Nbd7 9. Bb2 Qe7 10. Nb5 Ne4 11. Nxd6 cxd6 Rfc8 17. Rae1 Rc7 18. e4 Rac8 19. e5 Ne8 20. f4 g6 21. Re3 f5 22. exf6 Nxf6 23. f5 Ne4 24. Bxe4 dxe4 25. fxg6 Rc2 26. gxh7+ Kh8 27. d5+ e5 28. Qb4 R8c5 29. Rf8+ Kxh7 30. Qxe4+ Kg7 31. Bxe5+ Kxf8 32. Bg7+ Kg8 33. Qxe7 1-0';

// const parse = require("pgn-parser").parse;
// import { parse } from '/@mliebelt/pgn-parser'
// let ggame = parse(zuker);
// console.log(ggame);
// console.log(zuker);


//  import game from './data/game_zuker.pgn';
//  console.log(game);



 // export  tournament './data/test_tournament.json' assert { type: "json" };



// export { players, Player, Game, startTournament, randomizeArray, add };

window.Player = Player;
window.Game = Game;
window.players = players;
window.add = add;
window.groupElements = groupElements;
window.randomizeArray = randomizeArray;
window.startTournament = startTournament;
window.SLAY = SLAY;
window.ggame = ggame;





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