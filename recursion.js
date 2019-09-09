const sum = (arr) => {
    if(arr.lengt === 0){
        return 0
    } else {
        return arr[0] + sum(arr.slice(1))
    }
}

console.log(sum([1,2,3]))