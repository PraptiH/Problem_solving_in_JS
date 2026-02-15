const num = [3,8,5,7,9,3,9,5,];
const duplicateNum = []
for(let i=0;i<num.length;i++){
    for(let j =i+1; j<num.length; j++){
        if(num[i] === num[j] && !duplicateNum.includes(num[i])){
            duplicateNum.push(num[i])
        }
    }
    
}
console.log(duplicateNum)