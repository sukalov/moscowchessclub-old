const numbers = (minNumber, maxNumber) => {
    let finalArray = []
    for (let i = minNumber; i < maxNumber; i++){
        let thisNum = String(i);
        let numSet = [0,1,2,3,4,5,6,7,8,9];
        let check = true;
        for (let j = 0; j < thisNum.length; j++){
            if (numSet.includes(Number(thisNum[j]))){
                numSet.splice(Number(thisNum[j]), 1);
            } else {
                check = false;
                break}
        }
        if (check) {finalArray.push(thisNum)}
    }
    return finalArray
} 


let arr = numbers(100, 135)
 for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
 }