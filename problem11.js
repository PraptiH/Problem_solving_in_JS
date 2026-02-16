function threeFive() {
    for(let i=1;i<=100;i++) {
        if(i%3==0) {
            console.log (`${i} the number is only divided by 3 `)
        }
        if(i%5==0) {
            console.log (`${i} the number is only divided by 5`)
        }
        if(i%15==0) {
            console.log (`${i} the number is divided by both 3 & 5 `)
        }
    }
}
threeFive()