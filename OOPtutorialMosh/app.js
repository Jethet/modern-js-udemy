// Creating objects: constructor function

// The constructor creates a new object with the 'new' operator that
// calls the constructor function; it sets 'this' to point to that
// empty object, and it will return that object from the constructor
// function (automatically, no return needed)

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Draw circle");
//   };
// }

// const circle = new Circle(1);
// circle.draw()
// console.log(circle.radius);

// Difference between REFERENCE types and VALUE types:
// primitives are value types (number, string, boolean, symbol, undefined, null)
// A primitive is independent: the value is stored inside the variable. When a
// variable is copied into a new variable, the value is stored in the new variable.

// An OBJECT is a reference type. Values are not stored in objects: the address
// in memory of a value is stored in the object. This reference is copied into
// a new variable, not the value itself. So the new variable and the original
// variable point to the same value, through the reference.

let number = 10
function increase(number) {
  number++
}

increase(number)
console.log(number);

let myNum = 20
increase(myNum)
console.log(myNum);

let obj = { value: 10 }
function increase(obj) {
  obj.value++
}
increase(obj)
console.log(obj);

// Example with get and set:
function Circle(radius) {
  this.radius = radius

let defaultLocation = { x: 0, y : 0 }
this.getDefaultLocation = function() {
  return defaultLocation
}
this.draw = function() {
  console.log('Draw');
}

Object.defineProperty(this, 'defaultLocation', {
  get: function() {
    return defaultLocation  // this is a read-only property
  },
  set: function(value) {
    if(!value.x || !value.y)
    throw new Error('Invalid location')
    defaultLocation = value;
  }
})
}

const circle2 = new Circle(10)
circle2.defaultLocation = 1  // Will throw error because value is read-only
circle2.draw()
