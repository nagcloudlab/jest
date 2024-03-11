/*

function hello() {
    console.log('Hello');
    // smile emoji
    console.log('😊');
}

hello()

function hi() {
    console.log("Hi");
    // smile emoji
    console.log('😊');
}

hi()

function hey() {
    console.log("Hey");
    // smile emoji
    console.log('😊');
}

hey()

*/

// ----------------------------------------------
// design issues
// ----------------------------------------------

// 1. code tangling / intermingling of code
// 2. code scattering

// ----------------------------------------------
// solution : higher-order function (HOF)
// ----------------------------------------------

// A function that takes a function as an argument or returns a function as a result 
// is called a higher-order function.


// e.g HOF
function withSmileEmoji(f) {
    return function () {
        f();
        console.log('😊');
    };
}


// usage
function hello() {
    console.log('Hello');
}

hello()

let helloWithSmile = withSmileEmoji(hello);
// helloWithSmile();

function hi() {
    console.log("Hi");
}

let hiWithSmile = withSmileEmoji(hi);
// hiWithSmile();

// ----------------------------------------------
// E.g
// ----------------------------------------------

function greet(f) {
    // flower banner
    console.log('🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸');
    if (f) {
        f();
    } else {
        console.log('Hello');
    }
    console.log('🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸');
}

// greet();

const timebasedGreeting = function () {
    let hours = new Date().getHours();
    if (hours < 12) {
        console.log('Good Morning');
    } else if (hours < 17) {
        console.log('Good Afternoon');
    } else {
        console.log('Good Evening');
    }
}

greet(timebasedGreeting);

// ----------------------------------------------
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// e.g : filter
let evens = numbers.filter(n => n % 2 === 0);

//----------------------------------------------














