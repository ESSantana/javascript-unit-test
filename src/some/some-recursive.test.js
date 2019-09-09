import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
    expect(some).to.be.a("function");
});

it('some([], (item) => item) should return false', () => {
    expect(some([])).to.not.be.ok;
});

it('some([1,2], (item) => item > 0) should return true', () => {
    expect(some([1, 2], (item) => item > 0)).to.be.ok;
});

it('some([1,2], (item) => item < 0) should return false', () => {
    expect(some([1, 2], (item) => item < 0)).to.be.not.ok;
});

it('some([1,3,5], (item) => item % 2 === 0) should return ok', () => {
    expect(some([1,3,5], (item) => item % 2 === 0)).to.be.not.ok;
});

it('some([2,2,5,8,12], (item,index) => item === index + 1) should return true', () => {
    expect(some([2, 2, 5, 8, 12], (item, index) => item === index + 1)).to.be.true;
});

it('some([2,2,5,8,12], (item,index,array) => array.lenght === 5) should return true', () => {
    expect(some([2, 2, 5, 8, 12], (item,index,array) => array.length === 5)).to.be.true;
});