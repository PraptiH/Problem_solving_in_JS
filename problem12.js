// Remove falsy value from an arrary

const mixedArr = [
    "lws",
    undefined,
    "learn with sumit",
    false,
    "",
    "apple",
    40,
    "K",
    true,
    "thanks all",
    NaN
];
// const trueValue = mixedArr.filter(function(e){
//     if(e) {
//         return true
//     }
//     else {
//         return false
//     }
// })

const trueValue = mixedArr.filter(Boolean)
console.log(trueValue)