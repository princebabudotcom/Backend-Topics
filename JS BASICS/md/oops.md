Here’s a **more detailed, assignment-quality Markdown file** with deeper explanations, multiple examples, and practical notes:

---

````md id="oopjs-detailed-001"
# Object-Oriented Programming (OOP) in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm that organizes code using **objects**, which contain:
- **Properties (data)**
- **Methods (functions)**

JavaScript is **prototype-based**, but ES6 introduced **class syntax** to make OOP easier and more readable.

---

# 🔹 1. Classes in JavaScript

A **class** is a blueprint for creating objects.

## Basic Example:
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const p1 = new Person("Prince", 20);
p1.greet();
````

## Key Points:

* `constructor()` is automatically called when object is created
* `this` refers to the current object
* Methods are shared across all instances (memory efficient)

---

## Class with Default Values

```js
class Car {
  constructor(brand = "Unknown", year = 2020) {
    this.brand = brand;
    this.year = year;
  }
}

const c1 = new Car();
console.log(c1);
```

---

## Static Methods

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3));
```

👉 Static methods belong to class, not object.

---

# 🔹 2. Inheritance

Inheritance allows one class to use properties and methods of another class.

## Basic Example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const d = new Dog("Tommy");
d.eat();
d.bark();
```

---

## Method Overriding

```js
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const c = new Cat();
c.speak();
```

---

## Using super()

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }
}

const d = new Dog("Bruno", "Labrador");
console.log(d);
```

---

# 🔹 3. Encapsulation

Encapsulation means:
👉 Restricting direct access to data
👉 Protecting object integrity

---

## Private Fields (`#`)

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(300);
console.log(acc.getBalance());
```

---

## Getter & Setter

```js
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    if (value.length > 2) {
      this._name = value;
    }
  }
}

const u = new User("prince");
console.log(u.name);
u.name = "ab"; // ignored
```

---

# 🔹 4. Polymorphism

Polymorphism means:
👉 Same method name behaves differently

---

## Example 1: Method Overriding

```js
class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
  }
}

const shapes = [new Circle(), new Square()];
shapes.forEach(s => s.draw());
```

---

## Example 2: Function Polymorphism

```js
function print(value) {
  if (typeof value === "string") {
    console.log("String:", value);
  } else if (typeof value === "number") {
    console.log("Number:", value);
  }
}

print("Hello");
print(10);
```

---

## Example 3: Real-world Polymorphism

```js
class Payment {
  pay() {
    console.log("Processing payment");
  }
}

class UPI extends Payment {
  pay() {
    console.log("Paying via UPI");
  }
}

class Card extends Payment {
  pay() {
    console.log("Paying via Card");
  }
}

const payments = [new UPI(), new Card()];
payments.forEach(p => p.pay());
```

---

# 🔹 5. Prototype-Based OOP (Important Concept)

Before classes, JS used **prototypes**.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const p = new Person("Prince");
p.greet();
```

👉 Classes internally use prototypes.

---

# 🔹 6. Real-World Example (Complete OOP)

```js
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} is managing team`);
  }
}

class Developer extends Employee {
  work() {
    console.log(`${this.name} is writing code`);
  }
}

const emp = [new Manager("Amit", 50000), new Developer("Rahul", 40000)];

emp.forEach(e => e.work());
```

---

# 🔹 Advantages of OOP

* Code reusability
* Easy maintenance
* Better structure
* Scalable applications

---

# 🔹 Disadvantages

* Can be complex for beginners
* Slight performance overhead
* Overuse can make code bulky

---

# 🔹 Final Summary Table

| Concept       | Meaning                         |
| ------------- | ------------------------------- |
| Class         | Blueprint for objects           |
| Object        | Instance of class               |
| Inheritance   | Reuse code                      |
| Encapsulation | Hide data                       |
| Polymorphism  | Same method, different behavior |

---

# 🔹 Conclusion

OOP in JavaScript:

* Makes code **organized and reusable**
* Uses **classes + prototypes**
* Is widely used in **React, Node.js, backend systems**

---

# 🔹 Tip for Interviews

Be ready to explain:

* Difference between **class vs prototype**
* `this` keyword behavior
* Difference between **public vs private fields**
* Real-world examples (Bank, User, Payment)

---

```

---