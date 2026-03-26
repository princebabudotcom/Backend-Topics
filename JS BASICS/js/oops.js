/*
 * Classes
 * Inheritance
 * Encapsulation
 * Polymorphism
 */

/* 
 Classes => A class is blue print of creating objects .
*/

class Person {
  constructor(name, age) {
    // is automatically called when object is created
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hey , I am ${this.name} and i am ${this.age} Old `);
  }
}

const p1 = new Person("Prince babu", 20);

//  class with default values

class Car {
  constructor(brand = "unknown", year = 2020) {
    this.brand = brand;
    this.year = year;
  }
}

const c1 = new Car();

//  static methods

class mathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(mathUtils.add(89, 3)); // 92

// 2. Inheritance

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