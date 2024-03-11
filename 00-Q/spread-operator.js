

// es6 = spread operator

// # object

const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };

const o3 = { ...o1, ...o2 };    // { a: 1, b: 3, c: 4 }
const o4 = { ...o2, ...o1 };    // { b: 2, c: 4, a: 1 }

// # array

const a1 = [1, 2, 3];
const a2 = [7, 8, 9];

const a3 = [...a1, 4, 5, 6, ...a2];    // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// # function

function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));    // 6

// # string

const str = 'Hello';
console.log([...str]);    // ['H', 'e', 'l', 'l', 'o']

// custom data structure

const myList = {
    data: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
}

for (let n of myList) {
    console.log(n);
}
let [n1, n2, ...rest] = myList;
console.log(n1, n2, rest);    // 1 2 [3, 4, 5]
const arr = [...myList]

