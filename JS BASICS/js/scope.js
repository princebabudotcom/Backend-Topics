/* 

 * Scope : Where a varibale accessible in you code 
 1. Global Scope  => A variable declared outside any function or block.
2. Function Scope  => Variables declared inside a function are only accessible inside that function.
3. Block Scope  => Variables declared inside {} (blocks) are only accessible inside that block.
4. Lexical Scope (VERY IMPORTANT) => Inner functions can access variables from their outer (parent) scope.

👉 Scope is determined by where the function is written, not where it is called.


*/

/* GLOBAL SCOPE 


let a = 10;

function test(){
    console.log(a); // accessible 
}

console.log(a); // accessible 

*/

/* 

 * Function scope

function test() {
  let b = 20;
  console.log(b); // print 20
}

console.log(b); // Error b is not defined

*/

/*
 * Block scope => Let and const

if (true) {
  let x = 50;
  const y = 60;
  console.log(x, y);
}

console.log(x, y); // Error x and y is not defined


*/

/* 

* var ignores block scope
if(true){
   var z = 200;  // this is var varibale so this can we access anywhere
}

console.log(z , "From var variable and block scope ");
*/

/* 

*  Lexical Scope
function outer() {
  let a = 500;

  function inner() {
    console.log(a, "From Lexical scope ");
  }

  inner();
}

outer();
*/

/* 
 * Scope chain
 1. Local scope
 2. Parent scope
 3. Global scope



 let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();
*/

/* 
* Closures (VERY IMPORTANT)
 
*/

// exapmle 1

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

function createUser() {
  let password = "secret";

  return {
    getPassword: () => password,
  };
}

const User = createUser();

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(10);

console.log(double(10));

// this The loop completes immediately: does not store value of i

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 3 3 3

//let creates a new variable for each iteration
// i = 0
// i = 1
// i = 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 0 1 2

// function Hoisting

sayHello();

function sayHello() {
  console.log("HelloJooo");
}

// Variable Hoisting (var)

console.log(a); // undefined
var a = 10;

// var a;
// console.log(a); // undefined
// a = 10;

//  let / const Hoisting (TDZ)

// console.log(x); // ❌ ReferenceError before initialization
// let x = 5;
