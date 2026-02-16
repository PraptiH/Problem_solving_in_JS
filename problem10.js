function longestString(val) {
    let longestWord ='';
    for(word of words) {
        if(word.length>longestWord.length) {
            longestWord = word;
        }
    }
    return [longestWord, words.indexOf(longestWord)]
}
const words = ["Bangladesh", "Singapur", "Saudi Arabia", "Thailand", "Bay of Bengal"]
console.log(longestString(words))