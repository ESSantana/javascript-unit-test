import { expect } from 'chai'
import reduceRight from './reduceRight'

it('reduceRight should be a function', () => {
    expect(reduceRight).to.be.a("function");
});

it('reduceRight(["do","nan","fer"], (acc, item) => acc + item, "") should return "fernando"', () => {
    expect(reduceRight(["do","nan","fer"], (acc, item) => acc + item, "")).to.equal("fernando");
});