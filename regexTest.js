let repeatNum = "42 42 42 42 42 52 52 52";
let reRegex = /(\d+) \1 \1/g; // Change this line
let result = repeatNum.match(reRegex);

console.log(result)