Here’s a clean **README-style explanation** of **Asynchronous JavaScript (Async JS)** with examples 👇

---

# 📘 Asynchronous JavaScript (Async JS)

## 📌 What is Async JavaScript?

**Asynchronous JavaScript** allows code to run **without blocking the main thread**.

👉 It means:

* JS can start a task (like API call, timer, file read)
* Continue executing other code
* Handle the result **later**

---

## 🧠 Why Async JS is Needed?

JavaScript is **single-threaded** → it runs one task at a time.

❌ Problem:

```js
console.log("Start");

setTimeout(() => {
  console.log("Task done");
}, 2000);

console.log("End");
```

👉 Output:

```
Start
End
Task done
```

✔️ Even though `setTimeout` takes 2 sec, JS does not wait.

---

## ⚙️ How Async JS Works (Simple Flow)

1. Code goes into **Call Stack**
2. Async tasks go to **Web APIs**
3. After completion → move to **Callback Queue**
4. **Event Loop** pushes them back to Call Stack

---

## 🔄 Key Concepts

### 1. Call Stack

* Executes synchronous code
* One task at a time

### 2. Web APIs

* Browser handles async tasks (setTimeout, fetch)

### 3. Callback Queue

* Stores completed async callbacks

### 4. Event Loop

* Moves tasks from queue → stack

---

## 🧩 Methods of Async JS

---

## 1️⃣ Callbacks

A function passed into another function.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

❌ Problem: Callback Hell

---

## 2️⃣ Promises

A better way to handle async operations.

### States:

* Pending
* Resolved
* Rejected

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

promise.then((res) => console.log(res));
```

---

## 3️⃣ Async / Await (Best & Clean)

Syntactic sugar over promises.

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
}

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
```

✔️ Looks like synchronous code
✔️ Easy to read and maintain

---

## ⚠️ Error Handling

### With Promises

```js
promise
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

### With Async/Await

```js
async function test() {
  try {
    let res = await fetchData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
```

---

## 📡 Real Example (API Call)

```js
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers();
```

---

## 🔥 Key Points

* JavaScript is **single-threaded**
* Async JS prevents blocking
* Uses:

  * Callbacks
  * Promises
  * Async/Await
* Event Loop manages execution

---

## 🧪 Interview Questions

1. What is async JS?
2. Difference between sync and async?
3. What is event loop?
4. Promise vs async/await?
5. What is callback hell?
6. Microtask vs callback queue?

---

## 📌 Summary

> Async JS allows JavaScript to handle long-running tasks efficiently without blocking execution.

---
