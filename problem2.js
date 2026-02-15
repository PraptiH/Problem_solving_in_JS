const rollNumbers = [5, 2, 16, 4, 17, 1, 20, 8, 10, 19, 14, 6, 18, 9, 13, 3, 15, 7, 11, 12];
const sortedRollNumbers = rollNumbers.sort(function (a, b) { return a - b })


for (let i = 0; i < rollNumbers.length; i++) {
    if (rollNumbers[i] > rollNumbers[i] + 1) {
        console.log(rollNumbers[i] + 1)
    }
    else {
        console.log(rollNumbers[i])
    }
}
