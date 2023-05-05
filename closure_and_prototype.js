function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let figure = new Rectangle(4, 6);

console.log(figure.getArea());

//////////////////////////////////////////////////

function add(n) {
  let number = 0;

  return function addFunction() {
    return number += n;
  };
}

let result = add(3);

console.log(result());
console.log(result());
console.log(result());

//////////////////////////////////////////////////

Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log([1, 2].last());

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return this.name + " is eating";
};

let lion = new Animal("Simba");

console.log(lion.eat());

//////////////////////////////////////////////////

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function (name, age) {
  return `My name is ${this.name}, I am ${this.age} years old`;
};

let man = new Person("Camil", 20);

console.log(man.introduce());
