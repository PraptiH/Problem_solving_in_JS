//  Remove falsy value from a Object

const mixedObj = {
    a: "lws",
    b: undefined,
    c: "learn with sumit",
    d: false,
    e: "",
    f: "apple",
    g: 40,
    h: "K",
    i: true,
    j: "thanks all",
    k: NaN
};

const truthyValue = function(obj) {
    for(let i in obj) {
        if(!obj[i]){
            delete obj[i]
        }
    }
    return obj
}

console.log(truthyValue(mixedObj))