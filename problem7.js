const vowels = ['a','e','i','o','u','A','E','I','O','U']

function countVowels(sen){
    let count = 0;
    const letter = Array.from(sen)
    letter.forEach(function(value){
        if(vowels.includes(value)){
            count++
             console.log(`Vowel ${value} && Vowel Number ${count}`)
        }
       
    })
    return count
}

console.log(`Total Vowels ${countVowels("I love reading books")}`)