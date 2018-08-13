const helpers = require('./project-1');

// start testing!
it('works', () => {
    expect(helpers.add(3, 7)).toBe(10);
    expect(helpers.addExclamationPoint("sibhat")).toBe('sibhat!')
    expect(helpers.areEqual('3', '3')).toBe(true)
    expect(helpers.areSameLength('sibhat', 'sibhat')).toBe(true)
    expect(helpers.combineNames('sibhat', 'temelso')).toBe('sibhat temelso')
    expect(helpers.cube(3)).toBe(27)
    expect(helpers.divide(10, 2)).toBe(5)
    expect(helpers.getCircleArea(10)).toBe(314.1592653589793)
    expect(helpers.getGreeting('sibhat')).toBe('Hello sibhat!')
    expect(helpers.getRectangleArea(20, 10)).toBe(200)
    expect(helpers.getRectangularPrismVolume(10, 20, 30)).toBe(6000)
    expect(helpers.getRemainder(2, 5)).toBe(2 % 5)
    expect(helpers.getTriangleArea(1, 2)).toBe(1)
    expect(helpers.greaterThanFifty(49.99999999999999999999999999999999)).toBe(false)
    expect(helpers.isEven(2)).toBe(true)
    expect(helpers.isOdd(2)).toBe(false)
    expect(helpers.lessThanNinety(89.99999999999999)).toBe(true) //.9 would make it false
    expect(helpers.multiply(3, 9)).toBe(27)
    expect(helpers.multiplyByTen(10)).toBe(100)
    expect(helpers.raiseToPower(2, 2)).toBe(4)
    expect(helpers.roundNumber(40.44444444449)).toBe(40)
    expect(helpers.roundUp(40.00000000000001)).toBe(41) //.0 would make it false
    expect(helpers.square(2)).toBe(4)
    expect(helpers.subtract(100, 10)).toBe(90)
    expect(helpers.subtractFive(100)).toBe(95)
});