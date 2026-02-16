function linearSearch(arr,val) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i]===val) {
            console.log(i)
            return;
        }
    }
     return 'Not Found!'
}
linearSearch(['a', 'b', 'c', 'd', 'c'], 'c')