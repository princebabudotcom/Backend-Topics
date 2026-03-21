Here’s a **detailed, interview-ready Markdown file** for **Functions & Scope** with clear definitions + examples 👇

---

````md id="jsfunc02"
# 🧠 JavaScript Functions & Scope (Detailed)

---

## 7. Function Declaration vs Function Expression

### 📌 Function Declaration
A function defined using the `function` keyword with a name.

✔️ Hoisted (can be used before definition)

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
````

---

### 📌 Function Expression

A function assigned to a variable.

❌ Not hoisted like declarations

```js
const sayHello = function () {
  console.log("Hello");
};

sayHello();
```

---

### ⚠️ Interview Insight

* Declaration → fully hoisted
* Expression → only variable is hoisted (not function)

---

## 8. Arrow Functions

### 📌 Definition

A shorter syntax for writing functions introduced in ES6.

### 📌 Syntax

```js
const add = (a, b) => {
  return a + b;
};
```

### 📌 Short Form

```js
const add = (a, b) => a + b;
```

---

### 📌 Key Differences

* No `this` binding (inherits from parent)
* Cannot be used as constructor
* No `arguments` object

---

### 📌 Example

```js
const person = {
  name: "Prince",
  greet: function () {
    console.log(this.name); // works
  },
};

const person2 = {
  name: "Babu",
  greet: () => {
    console.log(this.name); // undefined
  },
};
```

---

## 9. Parameters vs Arguments

### 📌 Definition

* **Parameters** → variables in function definition
* **Arguments** → actual values passed during call

---

### 📌 Example

```js
function add(a, b) { // a, b = parameters
  return a + b;
}

add(2, 3); // 2, 3 = arguments
```

---

## 10. Default Parameters

### 📌 Definition

Default values assigned to parameters if no argument is provided.

---

### 📌 Example

```js
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Prince"); // Hello Prince
```

---

## 11. Scope (Global, Function, Block)

### 📌 Definition

Scope determines where variables are accessible.

---

### 🌍 Global Scope

Accessible everywhere

```js
let a = 10;

function test() {
  console.log(a); // accessible
}
```

---

### 🔒 Function Scope

Accessible only inside the function

```js
function test() {
  let b = 20;
  console.log(b);
}

// console.log(b); ❌ error
```

---

### 📦 Block Scope (`let`, `const`)

Accessible only inside `{}`

```js
if (true) {
  let x = 50;
  console.log(x); // works
}

// console.log(x); ❌ error
```

---

## 12. Hoisting

### 📌 Definition

JavaScript moves declarations to the top of their scope before execution.

---

### 📌 Example (Variables)

```js
console.log(a); // undefined

var a = 10;
```

---

### 📌 Example (Function)

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

---

### ⚠️ Important

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

* `var` → hoisted as `undefined`
* `let/const` → hoisted but in **Temporal Dead Zone (TDZ)**

---

## 13. Closures ⭐ (VERY IMPORTANT)

### 📌 Definition

A closure is when a function **remembers variables from its outer scope**, even after the outer function has finished execution.

---

### 📌 Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```

---

### 📌 How it works

* `inner()` keeps access to `count`
* Even after `outer()` is done

---

### 📌 Real Use Cases

* Data hiding
* Private variables
* Counters
* Event handlers

---

### 📌 Another Example (Private Variable)

```js
function secret() {
  let message = "Hidden";

  return function () {
    console.log(message);
  };
}

const reveal = secret();
reveal(); // Hidden
```

---

## ⚠️ Interview Notes

* Closures are asked in almost every JS interview
* Understand:

  * Scope chain
  * Lexical environment
* Arrow functions don’t have their own `this`
* Hoisting behaves differently for `var`, `let`, `const`

---

```

---

## 🔥 Honest Advice
If you don’t **deeply understand closures + scope**, backend interviews will expose it instantly.

Most people:
- memorize definition ❌  
- fail to explain execution ✅  

---

If you want next:
👉 I can give you **tricky interview questions on closures + hoisting (real company level)**  
👉 Or next MD: **Event Loop (MOST ASKED in JS interviews)**
```
