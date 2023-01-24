
/*console.log('task1\n\n');
let cros = '';
for (let i = 0; i < 7; i++) {
    cros = cros + '#';
    console.log(cros);
}

console.log('\n\ntask2\n\n')
for (let b = 1; b<=100; b++) {
    if (b % 3 == 0 && b % 5 == 0){
        console.log('FizzBuzz')
    } else if (b % 3 == 0){
        console.log('Fizz')
    } else if (b % 5 == 0) {
        console.log('Buzz')
    } else{
        console.log(b)
    }
} */



console.log('\n\ntask3')
let size = 8;
console.log('board size: ' + size + '\n');
function makeStr(b, str){
        if (b % 2 == 0){
            str = str + ' '
        } else {
            str = str + '#'
        }
        return str
    }
for (let i = 0; i < size; i++){
    let str = '';   //create a string. we gonna do it 8 times
    if (i % 2 == 0){
        for (let b = 1; b <=size; b++){
            str = makeStr(b, str)
        }
    } else {
        for (let b = 0; b < size; b++){
            str = makeStr(b, str)
        }

    }
    console.log(str)
}