import  assert  from 'assert'
import sum from '../sum';

describe("Addition function.", () => {
    it("It should add two numbers!", () => {
        const a = 5;
        const b = 4;
        const acton = sum(a,b)
        assert.equal("9", acton);
    })
})
