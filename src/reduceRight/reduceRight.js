import mainReduce from '../reduce/mainReduce'
import reverse from '../reverse/reverse-recursive'

const reduceRight = (arr, ...params) => {
    return mainReduce(reverse(arr), ...params)
}
export default reduceRight 