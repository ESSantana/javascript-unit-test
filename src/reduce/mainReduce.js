const isInitUndefined = (init) => init === undefined 

const mainReduce = (arr, func, init) => {

    const acc = isInitUndefined(init) ? arr[0] : init
    const arrCopy = isInitUndefined(init) ? arr.slice(1) : arr

    return (function reduceInternal(accInternal, arrayInternal, counter) {
        const[head, ...tail] = arrayInternal

        return arrayInternal.length === 0
        ? accInternal
        : reduceInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)

    })(acc, arrCopy, 0)

}

export default mainReduce