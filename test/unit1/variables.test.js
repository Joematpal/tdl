const { expect } = require('chai');
const primatives = require('../../exercises/unit1/variable');
describe('intro into javascript', () => {
  describe('What are the five data types of javascript?', () => {
    it('', ()=>{
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('string')
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('number')
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('boolean')
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('null')
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('undefined')
      expect(primatives.toLowerCase().split(',').map(x => x.trim())).to.include('symbol')
    })
  })
})
