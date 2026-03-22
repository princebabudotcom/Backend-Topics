/* 
1. What is an Array in JavaScript
2. Creating Arrays ([], new Array())
3. Accessing & Updating Elements
4. Array Length Property
5. Looping Arrays (for, for...of)

6. Basic Array Methods
   - push(), pop()
   - shift(), unshift()

7. Important Array Methods (VERY COMMON)
   - map()
   - filter()
   - reduce()
   - forEach()

8. Searching in Arrays
   - includes()
   - indexOf()
   - find()

9. slice() vs splice()

10. Array Destructuring
11. Spread Operator (...)

12. What is an Object in JavaScript
13. Creating Objects (object literal)
14. Accessing Properties (dot vs bracket)
15. Adding / Updating / Deleting Properties

16. Looping Objects
   - for...in
   - Object.keys()

17. Object Methods (functions inside object)
18. this keyword (basic idea)

19. Object Destructuring
20. Spread Operator in Objects

21. Shallow Copy vs Reference (IMPORTANT)

22. Arrays vs Objects (difference)
23. Array of Objects (common in APIs)

24. Basic JSON (parse & stringify)
*/

// Lopping an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     // console.log(element);

// }

//  Basic methods

// arr.push(5);
// arr.unshift(0)

// important methods

const newArr = arr.map((x) => {
  // console.log(x*x);
});

const newArr2 = arr.filter((x) => x < 5);

const newArr3 = arr.reduce((a, b) => a + b, 0);

// Searching

arr.includes(5); // true
arr.indexOf(2); // 1

arr.find((x) => x > 2); // 3

arr.slice(1, 7); // [2,3,4,5,6,7]
arr.splice(1, 3); // this modify the arrays

// Destructuring

const [a, b] = [1, 2];

//  spread operator

const newArrays = [...arr, ...["hey"]];

// objects

const obj = { name: "John", age: 20 };

// console.log(obj["name"]);

for (let key in obj) {
  // console.log(obj[key]);
}

const user = {
  name: "A",
  greet() {
    console.log(this.name);
  },
};

// copy obbject

const copy = { ...obj, email: "exapmale@gmail.com" };
// JSON
JSON.stringify(obj);
// JSON.parse(str);

let array = [1, 2, 3, 1, 23, 6, 5, 8, 6, 8, 9, 9];

const sorted = [...new Set(array)].sort((a, b) => a - b);
