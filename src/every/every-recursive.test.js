import { expect } from 'chai'
import every from './every-recursive'

it('every should be a function', () => {
    expect(every).to.be.a("function");
});

it('every([], (item) => item) should return bool', () => {
    expect(every([], (item) => item)).to.be.ok
});

it('every([1, 2, 3], (item) => item > 0) should return true', () => {
    expect(every([1, 2, 3], (item) => item > 0)).to.be.true
});

it('every([0, 2, 3], (item) => item > 0) should return false', () => {
    expect(every([0, 2, 3], (item) => item > 0)).to.be.false
});

it('every([2, 4, 8], (item) => item % 2 === 0) should return true', () => {
    expect(every([2, 4, 8], (item) => item % 2 === 0)).to.be.true
});