/*
🧠 All Types of Functions in JavaScript (Basic → Advanced)

1. Function Declaration
2. Function Expression
3. Anonymous Function
4. Arrow Function
5. IIFE (Immediately Invoked Function Expression)
6. Callback Function
7. Higher-Order Function
8. Constructor Function
9. Method (Object Function)
10. Generator Function
11. Async Function
12. Recursive Function
13. Pure Function
14. Impure Function
*/

// 1. Function Declaration
function greet() {
  console.log("Hello");
}

// 2. Function Expression
const greet2 = function () {
  console.log("Hello");
};

// 3. Anonymous Function
setTimeout(function () {
  console.log("Anonymous");
}, 1000);

// 4. Arrow Function
const add = (a, b) => a + b;

// 5. IIFE
(function () {
  console.log("Runs immediately");
})();

// 6. Callback Function
function processUser(name, callback) {
  callback(name);
}

processUser("Prince", function (n) {
  console.log("Hello " + n);
});

// 7. Higher-Order Function
function operate(a, b, fn) {
  return fn(a, b);
}

operate(2, 3, (x, y) => x + y);

// 8. Constructor Function
function Person(name) {
  this.name = name;
}

const p1 = new Person("Prince");

// 9. Method (Function inside object)
const user = {
  name: "Prince",
  greet() {
    console.log(this.name);
  },
};

// 10. Generator Function
function* generatorFunc() {
  yield 1;
  yield 2;
}

// 11. Async Function
async function fetchData() {
  return "Data";
}

// 12. Recursive Function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// 13. Pure Function
function pureAdd(a, b) {
  return a + b;
}

// 14. Impure Function
let total = 0;
function impureAdd(x) {
  total += x;
}


/* 
 
*/