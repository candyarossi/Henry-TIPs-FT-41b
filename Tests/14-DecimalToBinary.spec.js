const { expect } = require('chai')
const DecimalToBynary = require('../Ejercicios/Extras/14-DecimalToBynary/DecimalToBynary')

describe('DecimalToBynary', function () {
  it('should return "100" when called with 4', function () {
    expect(DecimalToBynary(4)).to.equal('100')
  })
  it('should return "111" when called with 7', function () {
    expect(DecimalToBynary(7)).to.equal('111')
  })
})
