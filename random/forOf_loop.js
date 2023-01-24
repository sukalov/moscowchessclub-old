const car = {
    speed: "slow",
    steering: true,
    engine: true,
    wheels: 4
}
const supercar = Object.create(car);
supercar.speed = "fast";
supercar.passengers = 1;



for (prop in supercar){ //all properties of supercar and its prototype
    console.log(prop, supercar[prop]);
}

console.log('---------------------')

for (prop of Object.keys(supercar)) { //only unique supercars properties
    console.log(prop, supercar[prop])
}

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals