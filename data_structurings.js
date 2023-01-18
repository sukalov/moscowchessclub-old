//for each elem in array
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruitttt, index) {
    console.log(`${index}. ${fruitttt}`)
}
fruits.forEach(appendIndex);

//filtering array
const nums = [0,10,20,30,40,50];
numsFiltered = nums.filter( function(num) {
    return num > 20;
})
console.log('\nfiltered: ', numsFiltered)

//mapping an array
numsMapped = nums.map( function(num) {
    return num / 10
})
console.log('mapped: ', numsMapped);

//set
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log('\n set data format: ', uniqueFruits);

//map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log('\n how "map" looks like: ', bestBoxers);