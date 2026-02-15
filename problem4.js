const num = [3,8,5,7,9,3,9,5,];
const uniqueNum = [];
for(let i=0; i<num.length;i++){
    const currentNum = num[i];
    if(!uniqueNum.includes(currentNum)){
        uniqueNum.push(currentNum)
    }
  
}
 console.log(uniqueNum)

