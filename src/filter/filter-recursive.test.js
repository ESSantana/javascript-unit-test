import {expect} from 'chai'
import Filter from './filter-recursive'

it(' Filter should be a function', () => {
    expect(Filter).to.be.a("function");
});

it('filter([1,2,3], (item) => item) should return [1,2,3]', () => {
    expect(Filter([1,2,3], (item) => item)).to.deep.equal([1,2,3]);
});

it('filter([0,1,2], (item) => item) should return [1,2]', () => {
    expect(Filter([0,1,2], (item) => item)).to.deep.equal([1,2]);
});

it('filter([1,2,3], (item) => item < 2) should return [1,2]', () => {
    expect(Filter([1,2,3], (item) => item < 2)).to.deep.equal([1]);
});

it('filter([1,2,3,5], (item, index) => index === item + 1) should return [1,2,3]', () => {
    expect(Filter([1,2,3,5], (item, index) => item === index + 1)).to.deep.equal([1,2,3]);
});

it('filter([1,2,3,5,2,5,2,1], (item, index, array) => index === array.indexOf(item)) should return', () => {
    expect(Filter([1,2,3,5,2,5,2,1], (item, index, array) => index === array.indexOf(item))).to.deep.equal([1,2,3,5])
});