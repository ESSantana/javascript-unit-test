import { expect } from 'chai'
import map from './map-recursive'

it('map should be a function', () => {
    expect(map).to.be.a("function");
});

it('map([1,2], (item) => item) should return [1,2]', () => {
    expect(map([1, 2], (item) => item)).to.be.deep.equal([1, 2])
});

it('map([3,4], (item) => item) should return [3,4]', () => {
    expect(map([3, 4], (item) => item)).to.be.deep.equal([3, 4])
});

it('map([1,2], (item) => item+1) should return [2,3]', () => {
    expect(map([1, 2], (item) => item + 1)).to.be.deep.equal([2, 3])
});

it('map([4,6], (item) => item+1) should return [5,7]', () => {
    expect(map([4, 6], (item) => item + 1)).to.be.deep.equal([5, 7])
});

it('map([1,2], (item, index) => index) should return index [0,1]', () => {
    expect(map([1, 2], (item, index) => index)).to.be.deep.equal([0, 1])
});

it('map([1,2], (item,index,array) => array) should return [[1,2],[1,2]]', () => {
    expect(map([1, 2], (item, index, array) => array)).to.be.deep.equal([[1, 2], [1, 2]])
});

it('map() should return [] ', () => {
    expect(map()).to.be.deep.equal([]);
});

it('map([1]) should return [] ', () => {
    expect(map([1])).to.be.deep.equal([1]);
});

// it('map([1,2]) should throw exception Function must be passed', () => {
//     // expect(map).to.throw(TypeError, /Function must be passed/)
// });

// it('map(1) should throw exception Array must be passed', () => {
//     // expect(map(1)).to.throw(TypeError).with.property('message','Array must be passed')
// });