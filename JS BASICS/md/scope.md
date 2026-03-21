# 🧠 JavaScript Scope + Closures + Hoisting (Detailed)

---

## 📌 What is Scope?

Scope defines **where a variable is accessible** in your code.

👉 In simple terms:
> "From where can I use this variable?"

---

# 🔑 Types of Scope in JavaScript

1. Global Scope  
2. Function Scope  
3. Block Scope  
4. Lexical Scope (VERY IMPORTANT)

---

## 🌍 1. Global Scope

### 📌 Definition
A variable declared outside any function or block.

### 📌 Example
```js
let a = 10;

function test() {
  console.log(a); // ✅ accessible
}

test();
console.log(a); // ✅ accessible
```

---

### ⚠️ Problem with Global Scope

```js
let count = 0;

// Anywhere in code can change it ❌
```

👉 Too many globals = bugs + hard to maintain

---

## 🔒 2. Function Scope

### 📌 Definition

Variables declared inside a function are only accessible inside that function.

---

### 📌 Example

```js
function test() {
  let b = 20;
  console.log(b); // ✅
}

test();
// console.log(b); ❌ Error
```

---

### ⚠️ Important

```js
function test() {
  var x = 100;
}

console.log(x); // ❌ Error
```

👉 `var` is function scoped (not global)

---

## 📦 3. Block Scope (`let`, `const`)

### 📌 Definition

Variables declared inside `{}` (blocks) are only accessible inside that block.

---

### 📌 Example

```js
if (true) {
  let x = 50;
  const y = 60;
  console.log(x, y); // ✅
}

// console.log(x); ❌ Error
```

---

### ⚠️ var ignores block scope

```js
if (true) {
  var z = 100;
}

console.log(z); // ✅ works (unexpected)
```

👉 This is why `var` is dangerous

---

## 🔗 4. Lexical Scope (VERY IMPORTANT)

### 📌 Definition

Inner functions can access variables from their **outer (parent) scope**.

👉 Scope is determined by **where the function is written**, not where it is called.

---

### 📌 Example

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a); // ✅ accessible
  }

  inner();
}

outer();
```

---

## 🧠 Scope Chain

When accessing a variable, JS looks in:

1. Local scope  
2. Parent scope  
3. Global scope  

---

### 📌 Example

```js
let a = 1;

function outer() {
  let b = 2;

  function inner() {
    let c = 3;
    console.log(a, b, c); // 1 2 3
  }

  inner();
}

outer();
```

---

# 🔥 Closures (VERY IMPORTANT)

## 📌 Definition

A closure is when a function **remembers variables from its lexical scope even after the outer function has finished execution**.

---

## 📌 Example

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3
```

---

## 🧠 Why this works?

👉 `inner()` still has access to `count`  
👉 Because of **closure + lexical scope**

---

## 📦 Real Use Cases

### 1. Data Privacy

```js
function createUser() {
  let password = "secret";

  return {
    getPassword: () => password
  };
}

const user = createUser();
console.log(user.getPassword()); // secret
```

👉 `password` is protected (not directly accessible)

---

### 2. Function Factories

```js
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## ⚠️ Closure Trap (Common Interview)

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3 ❌
```

👉 Because `var` is function scoped

---

### ✅ Fix using `let`

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2 ✅
```

---

# ⚡ Hoisting

## 📌 Definition

Hoisting is JavaScript's behavior of **moving declarations to the top of their scope before execution**.

---

## 🔼 Function Hoisting

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

👉 Works because function declarations are fully hoisted

---

## 🔼 Variable Hoisting (`var`)

```js
console.log(a); // undefined
var a = 10;
```

👉 Internally becomes:

```js
var a;
console.log(a); // undefined
a = 10;
```

---

## ❌ let / const Hoisting (TDZ)

```js
console.log(x); // ❌ ReferenceError
let x = 5;
```

👉 This is due to **Temporal Dead Zone (TDZ)**

---

## 🧠 Temporal Dead Zone (TDZ)

The time between:

👉 Variable declaration hoisted  
👉 But NOT initialized  

---

### 📌 Example

```js
{
  // TDZ starts
  // console.log(a); ❌

  let a = 10; // initialized here
}
```

---

## ⚠️ Function Expression vs Declaration

```js
// ❌ Error
sayHi();

var sayHi = function () {
  console.log("Hi");
};
```

👉 Because only variable is hoisted, not function value

---

# ⚠️ Interview Traps

### ❌ var confusion

```js
if (true) {
  var x = 10;
}
console.log(x); // ✅
```

---

### ❌ Shadowing

```js
let a = 5;

function test() {
  let a = 10;
  console.log(a); // 10
}
```

---

### ❌ TDZ confusion

```js
console.log(a); // ❌
let a = 10;
```

---

# 🔑 Key Interview Points

* `var` → function scoped + hoisted (undefined)
* `let/const` → block scoped + TDZ
* Lexical scope → based on code structure
* Closure → function remembers outer variables
* Hoisting → declarations moved to top

---

# 🔥 Reality Check

If you don’t understand:

* Scope chain  
* Closures  
* Hoisting behavior  

👉 You will struggle with:
- Async JS  
- Callbacks / Promises  
- Event loop  
- Real backend logic  

---

## ✅ What You Should Do Now

- Predict outputs before running code  
- Practice closure-based problems  
- Break hoisting intentionally  
- Avoid `var` in modern JS  

---

## 🚀 Next Step

👉 Practice tricky questions  
👉 Connect closures with async (setTimeout, promises)  
👉 Build small utilities using closures  
