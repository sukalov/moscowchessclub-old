count = Number(document.getElementById("count").innerText)
console.log(count)

function increment (e){
    count += 1;
    document.getElementById("count").innerText = count;
}

function thanks(){
    window.alert("Thank you! Your responces are not important!");
}