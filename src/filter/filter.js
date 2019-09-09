const Filter = (arg, func) => {
    let arr = []
    for(let i=0; i<arg.length; i++){
        if(func(arg[i], i, arg))
            arr.push(arg[i])
    }
    return arr
}

export default Filter