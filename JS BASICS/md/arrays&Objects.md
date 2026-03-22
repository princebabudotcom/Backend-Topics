# JavaScript Arrays & Objects (Interview Ready Guide)

---

## 1. What is an Array?

An array is a data structure used to store multiple values in a single variable.

```js
const arr = [1, 2, 3, 4];
```

---

## 2. Creating Arrays

```js
const a = [1,2,3];
const b = new Array(1,2,3);
```

---

## 3. Accessing & Updating Elements

```js
const arr = [10,20,30];
console.log(arr[0]); // 10
arr[1] = 50;
```

---

## 4. Array Length

```js
const arr = [1,2,3];
console.log(arr.length); // 3
```

---

## 5. Looping Arrays

```js
for(let i=0;i<arr.length;i++){}
for(const val of arr){}
```

---

## 6. Basic Methods

```js
arr.push(5);
arr.pop();
arr.shift();
arr.unshift(0);
```

---

## 7. Important Methods

### map()

Creates new array

```js
[1,2,3].map(x => x*2);
```

### filter()

Filters data

```js
[1,2,3].filter(x => x>1);
```

### reduce()

Accumulates value

```js
[1,2,3].reduce((a,b)=>a+b,0);
```

### forEach()

Loops but no return

```js
[1,2,3].forEach(x => console.log(x));
```

---

## 8. Searching

```js
arr.includes(2);
arr.indexOf(2);
arr.find(x => x>1);
```

---

## 9. slice vs splice

```js
arr.slice(1,3); // no change
arr.splice(1,1); // modifies
```

---

## 10. Destructuring

```js
const [a,b] = [1,2];
```

---

## 11. Spread Operator

```js
const newArr = [...arr];
```

---

# OBJECTS

## 12. What is an Object?

Object stores data in key-value pairs.

```js
const obj = {name:"John", age:20};
```

---

## 13. Creating Objects

```js
const obj = {};
```

---

## 14. Accessing Properties

```js
obj.name;
obj["age"];
```

---

## 15. Add/Update/Delete

```js
obj.city = "Delhi";
delete obj.age;
```

---

## 16. Looping Objects

```js
for(let key in obj){}
Object.keys(obj);
```

---

## 17. Object Methods

```js
const user = {
  name: "A",
  greet(){
    console.log(this.name);
  }
}
```

---

## 18. this Keyword

Refers to current object.

---

## 19. Object Destructuring

```js
const {name} = obj;
```

---

## 20. Spread in Objects

```js
const copy = {...obj};
```

---

## 21. Shallow Copy vs Reference

```js
const a = {x:1};
const b = a; // reference
```

---

## 22. Arrays vs Objects

* Array → indexed
* Object → key-value

---

## 23. Array of Objects

```js
const users = [
  {name:"A"},
  {name:"B"}
];
```

---

## 24. JSON

```js
JSON.stringify(obj);
JSON.parse(str);
```

---

## ⭐ Interview Tips

* map/filter/reduce → very important
* slice vs splice → common question
* this keyword → tricky
* shallow copy → frequently asked
* array of objects → real-world use

---

## 🚀 Done

This covers all basic interview concepts for arrays and objects.
