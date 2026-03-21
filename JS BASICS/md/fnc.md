# 🧠 JavaScript Scope (Detailed)

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