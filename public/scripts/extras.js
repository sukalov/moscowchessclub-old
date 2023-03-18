// FILE WITH JS TEMPLATES AND CODE BACKUPS


// import SLAY from './data/test-tournament.json' assert { type: "json" };
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


// export * from './fifa_tournament.js'
// import json from './data/test_tournament.json' assert { type: "json" };
// console.log(json);


// ДАЛЬШЕ ПРОСТО ПОЛЕЗНЫЕ МЕТОДЫ

// в этой строчке метод, возвращающий всё про игрока по его имени
// player1 = players.find(obj => obj.name === 'матвей соколовский');
// console.log(player1);


// метод возвращающий все объекты класса
// myClassObjects = myArray.filter(obj => obj instanceof MyClass);


// const myObject = { foo: 'bar', baz: 42 };
// localStorage.setItem('myObject', JSON.stringify(myObject));

// const storedObject = JSON.parse(localStorage.getItem('myObject'));
// console.log(storedObject); // { foo: 'bar', baz: 42 }

const players = [1,2,3,4,5,6,7,8];
  
  function generateRounds(arr) {
    const numberOfRounds = arr.length - 1;
    let rounds = {};
    for(let round = 1; round < arr.length; round++) {
      console.log(arr)
      roundGames = [];
      for (let j = 0; j < arr.length / 2; j++) { 
        let game = [arr[j], arr[arr.length - 1 - j]];
        roundGames.push(game);
      }
      rounds['round ' + round] = roundGames;
      arr.splice(1, 0, arr[numberOfRounds]);
      arr.pop();
    }
    return rounds
  }
  
  let a = generateRounds(players);
console.log(a);




