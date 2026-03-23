console.log("START ", "=> callStack sync code ");

setTimeout(() => {
  console.log("TIMEOUT", "=> webApi =>  go to callback queue");
}, 0);

Promise.resolve().then(() => {
  console.log("PROMISE", "=> go to microtask Queue");
});

console.log("END  ", "=> callStack sync code ");

setTimeout(() => {
  console.log("TIMEOUT 2", "=> webApi =>  go to callback queue");
}, 0);

Promise.resolve().then(() => {
  console.log("PROMISE 2", "=> go to microtask Queue");
});
