
function add(a, b) {
    const r = a + b;
    return r;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}


// esm = es module
// export { add, sub, mul, div };

// cjs = commonjs
module.exports = {
    add, sub, mul, div
};
