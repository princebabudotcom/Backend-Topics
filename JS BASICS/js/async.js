// console.log("Start");

// setTimeout(() => {
//   console.log("Task done");
// }, 2000);

// console.log("End");

// // callback hell 
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data);
// });


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 1000);
// });

// promise.then((res) => console.log(res));


// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data loaded"), 1000);
//   });
// }

// async function getData() {
//   const result = await fetchData();
//   console.log(result);
// }

// getData();

// async function test() {
//   try {
//     let res = await fetchData();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }


// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }

// getUsers();