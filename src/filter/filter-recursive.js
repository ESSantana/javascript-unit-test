const Filter = (arg, func) => {
    return (function filterInternal(arrayInternal, counter) {
        const [head, ...tail] = arrayInternal

        return arrayInternal.length === 0
            ? []
            : (func(head, counter, arg) ? [head] : []).concat(filterInternal(tail, counter + 1))
    })(arg, 0)

}

export default Filter