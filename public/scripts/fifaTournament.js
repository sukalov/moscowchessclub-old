var players = [];

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

    return groups;
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


// import jsony from './data/test_tournament.json' assert { type: "json" };
// console.log(jsony);



// export { players, Player, Game, startTournament, randomizeArray, add };

window.Player = Player;
window.Game = Game;
window.players = players;
window.add = add;
window.groupElements = groupElements;
window.randomizeArray = randomizeArray;
window.startTournament = startTournament;





// export * from './fifa_tournament.js'



// console.log(startTournament(4));





// ДАЛЬШЕ ПРОСТО ПОЛЕЗНЫЕ МЕТОДЫ

// в этой строчке метод, возвращающий всё про игрока по его имени
// player1 = players.find(obj => obj.name === 'матвей соколовский');
// console.log(player1);


// метод возвращающий все объекты класса
// myClassObjects = myArray.filter(obj => obj instanceof MyClass);