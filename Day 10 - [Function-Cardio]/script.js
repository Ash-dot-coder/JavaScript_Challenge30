// Function - Cardio
// Steps:

// 1. Higher-Order Function (HOF)
// function calculation(operation, a, b) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// const substract = (x, y) => x - y;

// console.log(calculation(add, 6, 4));
// console.log(calculation(substract, 8, 3));

// 2. Immediately Invoked function Expression (IIFE)
// (function () {
//     console.log("This function runs immediately!");
// }());

// ((name) => {
//     console.log(`This is, ${name}!`);
// })('Ash');


// 3. Callback Function
// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.table("Data fetched");
//         callback("Data received");
//     }, 1200);
// }

// function displayD(message) {
//     console.table(message);
// }
// fetchData(displayD);

// 4. Arrow Function
// const mult = (a, b) => a * b;
// console.log(mult(3, 8));

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map((num) => num * num);
// console.table(squares);

// 5. Closure
// function counter() {
//     let num = 3;
//     return function () {
//         ++num;
//         console.log(`Count: ${num}`);
//     };
// }

// const preinc = counter();
// preinc();
// preinc();

// 6. Function Returning a Function
// function greeting(memo) {
//     return function(name) {
//         console.log(`${memo}, ${name}!`);
//     };
// }
// const sayHi = greeting('Hey');
// sayHi('Ash');


// 7. Function Composition
// function double(num) {
//     console.log(`double: ${num}`);
//     return num * 2;
// }
// function square(num) {
//     console.log(`square: ${num}`);
//     return num * num;
// }
// function compose(d, s) {
//     return function (x) {
//         return d(s(x));
//     };
// }
// const doubleThenSquare = compose(square, double);
// console.log(doubleThenSquare(7));

// 8. Recursive Function
function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(`Factorial of 6 -> ${fact(6)}`);