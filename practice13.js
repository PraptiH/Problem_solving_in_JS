//  Remove falsy value from a Object

// const mixedObj = {
//     a: "lws",
//     b: undefined,
//     c: "learn with sumit",
//     d: false,
//     e: "",
//     f: "apple",
//     g: 40,
//     h: "K",
//     i: true,
//     j: "thanks all",
//     k: NaN
// };

// const truthyValue = function(obj) {
//     for(let i in obj) {
//         if(!obj[i]){
//             delete obj[i]
//         }
//     }
//     return obj
// }

// console.log(truthyValue(mixedObj))




const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName)