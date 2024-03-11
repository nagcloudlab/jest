
// Arrange
test("should be true", () => {
    // Act
    const actual = true;
    // Assert
    expect(actual).toBe(true);
});

// or

// Arrange
it("should be true", () => {
    // Act
    const actual = true;
    // Assert
    expect(actual).toBe(true);
})

//------------------------------------

describe("boolean tests", () => {
    it("should be true", () => {
        const actual = true;
        expect(actual).toBe(true);
    });
    it("should be false", () => {
        const actual = false;
        expect(actual).toBe(false);
    });
})

//------------------------------------
function f1() {
    return true; // pure
}
var pub = 2
function f2() {
    pub++ // side-effect
}
function f3(f) {
    f() // higher-order
}
describe("function tests", () => {
    it("should return true", () => {
        const actual = f1();
        expect(actual).toBe(true);
    });
    it("should increment public", () => {
        f2();
        expect(pub).toBe(3);
    });
    it("should call a function", () => {
        const mock = jest.fn();
        f3(jest.fn());
    });
})