import {expect} from 'chai'
import reverse from './reverse'

it('reverse should be a function', () => {
    expect(reverse).to.be.a("function");
});

it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1]);
});

it('reverse([3,2,1]) should return [1,2,3]', () => {
    expect(reverse([3,2,1])).to.be.deep.equal([1,2,3]);
});