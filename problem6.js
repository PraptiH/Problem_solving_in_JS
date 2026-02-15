const year = [2002, 2004, 2008, 2012, 1002, 2024]
const leapYear = []
for (let i = 0; i < year.length; i++) {
    if (year[i] % 400 === 0 || (year[i]%4 ===0 && year[i] % 100 !== 0)) {
        leapYear.push(year[i])
    }
}
console.log(leapYear)
     