// import * as arith from './arith' // esm
const arith = require('./arith') // cjs

describe("arith tests", () => {
    it("should add two numbers", () => {
        const actual = arith.add(1, 2);
        expect(actual).toBe(3);
    });
    it("should sub two numbers", () => {
        const actual = arith.sub(2, 1);
        expect(actual).toBe(1);
    });
    it("should mul two numbers", () => {
        const actual = arith.mul(2, 3);
        expect(actual).toBe(6);
    });
    it("should div two numbers", () => {
        const actual = arith.div(6, 2);
        expect(actual).toBe(3);
    });
    it("should throw error when divide by zero", () => {
        expect(() => arith.div(6, 0)).toThrow('Cannot divide by zero');
    });
})