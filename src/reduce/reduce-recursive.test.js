import { expect } from 'chai'
import reduce from './reduce-recursive'

it('reduce should be a function', () => {
    expect(reduce).to.be.a("function");
});

it('reduce([1,2,3], (acc, item) => acc + item, 0 ) should return 6', () => {
    const before = reduce([1, 2, 3], (acc, item) => acc + item, 0)
    const after = 6
    expect(before).to.be.equal(after);
});

it('reduce([2,3,4], (acc, item) => acc + item, 0 ) should return 9', () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item, 0)
    const after = 9
    expect(before).to.be.equal(after);
});

it('reduce([2,3,4], (acc, item) => acc + item) should return 9', () => {
    const before = reduce([2, 3, 4], (acc, item) => acc + item)
    const after = 9
    expect(before).to.be.equal(after);
});

it('reduce([2,3,4], (acc, item, index) => acc + index, 0) should return 3', () => {
    const before = reduce([2, 3, 4], (acc, item, index) => acc + index)
    let after = 3
    expect(before).to.be.equal(after);
});

it('reduce([1,2], (acc, item) => { acc["number" + item ] = item; return acc}, {}) should return {"number1": 1, "number2": 2}', () => {
    const before = reduce([1,2], (acc, item) => { acc["number" + item ] = item; return acc}, {})
    const after = {"number1": 1, "number2": 2}
    expect(before).to.be.deep.equal(after);
});

it('reduce([1,2], (acc, item, index, array) => acc + array[index],0) should return 3', () => {
    const before = reduce([1,2], (acc, item, index, array) => acc + array[index],0)
    const after = 3
    expect(before).to.be.deep.equal(after);
});