function randomInteger(a,b){
    return Math.floor(Math.random() * (a - b + 1) ) + b;
}
console.log(randomInteger(1,10))
