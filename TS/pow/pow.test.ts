import myPow from "./pow";

describe('pow', () => {
    test('case 1', () => {
        expect(myPow(2, 10)).toEqual(1024.00000)
    })
    test('case 2', () => {
        expect(myPow(2.1, 3)).toEqual(9.26100)
    })
    test('case 3', () => {
        expect(myPow(2, -2)).toEqual(0.25000)
    })
})