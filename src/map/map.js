export default (args, func) => {
    // if(!Array.isArray(args))
    //     throw new TypeError('Array must be passed')
    
    // if(typeof(func) !== 'function')
    //     throw new TypeError('Function must be passed')
    

    let newArr = []
    for (let i = 0; i < args.length; i++) {
        newArr.push(func(args[i], i,args))
    }

    return newArr
}