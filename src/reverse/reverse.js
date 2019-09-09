const reverse = (arr = []) => {
    if (arr.length === 0 || arr.length === 1)
        return arr

    let newArray = [];
    for (let i = arr.length - 1; i>=0; i--)
        newArray.push(arr[i])

    return newArray
}

export default reverse